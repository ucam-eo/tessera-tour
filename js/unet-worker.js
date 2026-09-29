// Runs the solar U-Net off the main thread, reporting progress layer by layer.
import { runUNet, prepare } from './unet.js';
onmessage = ({ data: { spec, weights, emb, ok, n } }) => {
  const W = new Float32Array(weights), x = prepare(spec, new Float32Array(emb), new Uint8Array(ok), n);
  const p = runUNet(spec, W, x, (i, k) => postMessage({ progress: i / k }));
  postMessage({ probs: p }, [p.buffer]);
};
