// A small runner for tze's solar-farm U-Net (41,665 weights), so that the
// page needs no ONNX runtime.  The model is exported by tools/export_unet.py
// as its layers in order, each 3 x 3 or 1 x 1 convolution's weights in a
// flat float32 buffer.  Tensors are { c, h, w, d } with d channel-major.

function conv(t, L, W) {
  const { c, h, w, d } = t, k = L.k, p = k >> 1, out = new Float32Array(L.cout * h * w), hw = h * w;
  for (let o = 0; o < L.cout; o++) {
    const ob = o * hw; out.fill(W[L.b + o], ob, ob + hw);
    for (let i = 0; i < c; i++) {
      const ib = i * hw;
      for (let ky = 0; ky < k; ky++) for (let kx = 0; kx < k; kx++) {
        const wt = W[L.w + ((o * c + i) * k + ky) * k + kx]; if (!wt) continue;
        const dy = ky - p, dx = kx - p, x0 = Math.max(0, -dx), x1 = Math.min(w, w - dx);
        for (let y = Math.max(0, -dy), y1 = Math.min(h, h - dy); y < y1; y++) {
          const orow = ob + y * w, irow = ib + (y + dy) * w + dx;
          for (let x = x0; x < x1; x++) out[orow + x] += wt * d[irow + x];
        }
      }
    }
  }
  return { c: L.cout, h, w, d: out };
}
const relu = t => { const d = t.d; for (let i = 0; i < d.length; i++) if (d[i] < 0) d[i] = 0; return t; };
function maxpool(t) {
  const { c, h, w, d } = t, H = h >> 1, Wd = w >> 1, out = new Float32Array(c * H * Wd);
  for (let i = 0; i < c; i++) for (let y = 0; y < H; y++) for (let x = 0; x < Wd; x++) {
    const b = i * h * w + 2 * y * w + 2 * x;
    out[i * H * Wd + y * Wd + x] = Math.max(d[b], d[b + 1], d[b + w], d[b + w + 1]);
  }
  return { c, h: H, w: Wd, d: out };
}
// bilinear, twice the size, with the corners aligned (as the model was traced)
function upsample(t) {
  const { c, h, w, d } = t, H = h * 2, Wd = w * 2, out = new Float32Array(c * H * Wd);
  const sy = (h - 1) / (H - 1), sx = (w - 1) / (Wd - 1);
  for (let y = 0; y < H; y++) {
    const fy = y * sy, y0 = Math.floor(fy), y1 = Math.min(h - 1, y0 + 1), ay = fy - y0;
    for (let x = 0; x < Wd; x++) {
      const fx = x * sx, x0 = Math.floor(fx), x1 = Math.min(w - 1, x0 + 1), ax = fx - x0;
      for (let i = 0; i < c; i++) {
        const b = i * h * w;
        out[i * H * Wd + y * Wd + x] = (d[b + y0 * w + x0] * (1 - ax) + d[b + y0 * w + x1] * ax) * (1 - ay) + (d[b + y1 * w + x0] * (1 - ax) + d[b + y1 * w + x1] * ax) * ay;
      }
    }
  }
  return { c, h: H, w: Wd, d: out };
}
const concat = (a, b) => { const d = new Float32Array(a.d.length + b.d.length); d.set(a.d); d.set(b.d, a.d.length); return { c: a.c + b.c, h: a.h, w: a.w, d }; };

// Run the model on normalised embeddings x ({ c: 128, h, w, d }, h and w
// multiples of 4); returns the probability that each pixel is solar panels.
// onLayer(i, n) reports progress.
export function runUNet(spec, W, x, onLayer) {
  const v = { [spec.input]: x };
  spec.layers.forEach((L, i) => {
    const a = v[L.in[0]];
    v[L.out] = L.op === 'Conv' ? conv(a, L, W) : L.op === 'Relu' ? relu(a) : L.op === 'MaxPool' ? maxpool(a)
      : L.op === 'Resize' ? upsample(a) : concat(a, v[L.in[1]]);
    onLayer?.(i + 1, spec.layers.length);
  });
  const o = v[spec.output].d;
  for (let i = 0; i < o.length; i++) o[i] = 1 / (1 + Math.exp(-o[i]));
  return o;
}

// Normalise a window's embeddings (pixel-major, 128 a pixel) for the model.
export function prepare(spec, emb, ok, n) {
  const P = n * n, d = new Float32Array(128 * P);
  for (let p = 0; p < P; p++) {
    if (!ok[p]) { for (let c = 0; c < 128; c++) d[c * P + p] = -spec.mean[c] / spec.std[c]; continue; }
    for (let c = 0; c < 128; c++) d[c * P + p] = (emb[p * 128 + c] - spec.mean[c]) / spec.std[c];
  }
  return { c: 128, h: n, w: n, d };
}
