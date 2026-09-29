import{a as yi,b as $y,c as gt,d as mt,e as Jt,f as $t,g as xi}from"./chunk-47KBDWVR.js";var sa=yi(he=>{"use strict";var AM=he&&he.__values||function(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],n=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(he,"__esModule",{value:!0});he.reshape2d=he.rejectionSample=he.max2d=he.max=he.mean=he.sum=he.linear=he.ones=he.zeros=he.filled=he.range=he.empty=he.norm=he.tauRand=he.tauRandInt=void 0;function Eg(s,t){return Math.floor(t()*s)}he.tauRandInt=Eg;function RM(s){return s()}he.tauRand=RM;function CM(s){var t,e,n=0;try{for(var i=AM(s),r=i.next();!r.done;r=i.next()){var a=r.value;n+=Math.pow(a,2)}}catch(o){t={error:o}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return Math.sqrt(n)}he.norm=CM;function Rh(s){for(var t=[],e=0;e<s;e++)t.push(void 0);return t}he.empty=Rh;function PM(s){return Rh(s).map(function(t,e){return e})}he.range=PM;function yd(s,t){return Rh(s).map(function(){return t})}he.filled=yd;function Tg(s){return yd(s,0)}he.zeros=Tg;function IM(s){return yd(s,1)}he.ones=IM;function LM(s,t,e){return Rh(e).map(function(n,i){return s+i*((t-s)/(e-1))})}he.linear=LM;function Ag(s){return s.reduce(function(t,e){return t+e})}he.sum=Ag;function NM(s){return Ag(s)/s.length}he.mean=NM;function DM(s){for(var t=0,e=0;e<s.length;e++)t=s[e]>t?s[e]:t;return t}he.max=DM;function UM(s){for(var t=0,e=0;e<s.length;e++)for(var n=0;n<s[e].length;n++)t=s[e][n]>t?s[e][n]:t;return t}he.max2d=UM;function FM(s,t,e){for(var n=Tg(s),i=0;i<s;i++)for(var r=!0;r;){for(var a=Eg(t,e),o=!1,c=0;c<i;c++)if(a===n[c]){o=!0;break}o||(r=!1),n[i]=a}return n}he.rejectionSample=FM;function OM(s,t,e){var n=[],i=0,r=0;if(s.length!==t*e)throw new Error("Array dimensions must match input length.");for(var a=0;a<t;a++){for(var o=[],c=0;c<e;c++)o.push(s[r]),r+=1;n.push(o),i+=1}return n}he.reshape2d=OM});var vd=yi(Ge=>{"use strict";var BM=Ge&&Ge.__createBinding||(Object.create?(function(s,t,e,n){n===void 0&&(n=e),Object.defineProperty(s,n,{enumerable:!0,get:function(){return t[e]}})}):(function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]})),kM=Ge&&Ge.__setModuleDefault||(Object.create?(function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}):function(s,t){s.default=t}),zM=Ge&&Ge.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.hasOwnProperty.call(s,e)&&BM(t,s,e);return kM(t,s),t};Object.defineProperty(Ge,"__esModule",{value:!0});Ge.smallestFlagged=Ge.deheapSort=Ge.buildCandidates=Ge.uncheckedHeapPush=Ge.heapPush=Ge.rejectionSample=Ge.makeHeap=void 0;var Lo=zM(sa());function Rg(s,t){var e=function(i){return Lo.empty(s).map(function(){return Lo.filled(t,i)})},n=[];return n.push(e(-1)),n.push(e(1/0)),n.push(e(0)),n}Ge.makeHeap=Rg;function VM(s,t,e){for(var n=Lo.zeros(s),i=0;i<s;i++){for(var r=!0,a=0;r;){a=Lo.tauRandInt(t,e);for(var o=!1,c=0;c<i;c++)if(a===n[c]){o=!0;break}o||(r=!1)}n[i]=a}return n}Ge.rejectionSample=VM;function xd(s,t,e,n,i){t=Math.floor(t);var r=s[0][t],a=s[1][t],o=s[2][t];if(e>=a[0])return 0;for(var c=0;c<r.length;c++)if(n===r[c])return 0;return Cg(s,t,e,n,i)}Ge.heapPush=xd;function Cg(s,t,e,n,i){var r=s[0][t],a=s[1][t],o=s[2][t];if(e>=a[0])return 0;a[0]=e,r[0]=n,o[0]=i;for(var c=0,l=0;;){var h=2*c+1,u=h+1,f=s[0][0].length;if(h>=f)break;if(u>=f)if(a[h]>e)l=h;else break;else if(a[h]>=a[u])if(e<a[h])l=h;else break;else if(e<a[u])l=u;else break;a[c]=a[l],r[c]=r[l],o[c]=o[l],c=l}return a[c]=e,r[c]=n,o[c]=i,1}Ge.uncheckedHeapPush=Cg;function GM(s,t,e,n,i){for(var r=Rg(t,n),a=0;a<t;a++)for(var o=0;o<e;o++)if(!(s[0][a][o]<0)){var c=s[0][a][o],l=s[2][a][o],h=Lo.tauRand(i);xd(r,a,h,c,l),xd(r,c,h,a,l),s[2][a][o]=0}return r}Ge.buildCandidates=GM;function HM(s){for(var t=s[0],e=s[1],n=0;n<t.length;n++)for(var i=t[n],r=e[n],a=0;a<i.length-1;a++){var o=i.length-a-1,c=r.length-a-1,l=i[0];i[0]=i[o],i[o]=l;var h=r[0];r[0]=r[c],r[c]=h,$M(r,i,c,0)}return{indices:t,weights:e}}Ge.deheapSort=HM;function $M(s,t,e,n){for(;n*2+1<e;){var i=n*2+1,r=i+1,a=n;if(s[a]<s[i]&&(a=i),r<e&&s[a]<s[r]&&(a=r),a===n)break;var o=s[n];s[n]=s[a],s[a]=o;var c=t[n];t[n]=t[a],t[a]=c,n=a}}function WM(s,t){for(var e=s[0][t],n=s[1][t],i=s[2][t],r=1/0,a=-1,o=0;o>e.length;o++)i[o]===1&&n[o]<r&&(r=n[o],a=o);return a>=0?(i[a]=0,Math.floor(e[a])):-1}Ge.smallestFlagged=WM});var _d=yi(ue=>{"use strict";var qM=ue&&ue.__createBinding||(Object.create?(function(s,t,e,n){n===void 0&&(n=e),Object.defineProperty(s,n,{enumerable:!0,get:function(){return t[e]}})}):(function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]})),XM=ue&&ue.__setModuleDefault||(Object.create?(function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}):function(s,t){s.default=t}),YM=ue&&ue.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.hasOwnProperty.call(s,e)&&qM(t,s,e);return XM(t,s),t},Ch=ue&&ue.__read||function(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var n=e.call(s),i,r=[],a;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(o){a={error:o}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(a)throw a.error}}return r},jM=ue&&ue.__values||function(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],n=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},No;Object.defineProperty(ue,"__esModule",{value:!0});ue.getCSR=ue.normalize=ue.eliminateZeros=ue.multiplyScalar=ue.maximum=ue.subtract=ue.add=ue.pairwiseMultiply=ue.identity=ue.transpose=ue.SparseMatrix=void 0;var Pg=YM(sa()),ra=(function(){function s(t,e,n,i){if(this.entries=new Map,this.nRows=0,this.nCols=0,t.length!==e.length||t.length!==n.length)throw new Error("rows, cols and values arrays must all have the same length");this.nRows=i[0],this.nCols=i[1];for(var r=0;r<n.length;r++){var a=t[r],o=e[r];this.checkDims(a,o);var c=this.makeKey(a,o);this.entries.set(c,{value:n[r],row:a,col:o})}}return s.prototype.makeKey=function(t,e){return t+":"+e},s.prototype.checkDims=function(t,e){var n=t<this.nRows&&e<this.nCols;if(!n)throw new Error("row and/or col specified outside of matrix dimensions")},s.prototype.set=function(t,e,n){this.checkDims(t,e);var i=this.makeKey(t,e);this.entries.has(i)?this.entries.get(i).value=n:this.entries.set(i,{value:n,row:t,col:e})},s.prototype.get=function(t,e,n){n===void 0&&(n=0),this.checkDims(t,e);var i=this.makeKey(t,e);return this.entries.has(i)?this.entries.get(i).value:n},s.prototype.getAll=function(t){t===void 0&&(t=!0);var e=[];return this.entries.forEach(function(n){e.push(n)}),t&&e.sort(function(n,i){return n.row===i.row?n.col-i.col:n.row-i.row}),e},s.prototype.getDims=function(){return[this.nRows,this.nCols]},s.prototype.getRows=function(){return Array.from(this.entries,function(t){var e=Ch(t,2),n=e[0],i=e[1];return i.row})},s.prototype.getCols=function(){return Array.from(this.entries,function(t){var e=Ch(t,2),n=e[0],i=e[1];return i.col})},s.prototype.getValues=function(){return Array.from(this.entries,function(t){var e=Ch(t,2),n=e[0],i=e[1];return i.value})},s.prototype.forEach=function(t){this.entries.forEach(function(e){return t(e.value,e.row,e.col)})},s.prototype.map=function(t){var e=[];this.entries.forEach(function(i){e.push(t(i.value,i.row,i.col))});var n=[this.nRows,this.nCols];return new s(this.getRows(),this.getCols(),e,n)},s.prototype.toArray=function(){var t=this,e=Pg.empty(this.nRows),n=e.map(function(){return Pg.zeros(t.nCols)});return this.entries.forEach(function(i){n[i.row][i.col]=i.value}),n},s})();ue.SparseMatrix=ra;function ZM(s){var t=[],e=[],n=[];s.forEach(function(r,a,o){t.push(a),e.push(o),n.push(r)});var i=[s.nCols,s.nRows];return new ra(e,t,n,i)}ue.transpose=ZM;function JM(s){for(var t=Ch(s,1),e=t[0],n=new ra([],[],[],s),i=0;i<e;i++)n.set(i,i,1);return n}ue.identity=JM;function KM(s,t){return Ph(s,t,function(e,n){return e*n})}ue.pairwiseMultiply=KM;function QM(s,t){return Ph(s,t,function(e,n){return e+n})}ue.add=QM;function tS(s,t){return Ph(s,t,function(e,n){return e-n})}ue.subtract=tS;function eS(s,t){return Ph(s,t,function(e,n){return e>n?e:n})}ue.maximum=eS;function nS(s,t){return s.map(function(e){return e*t})}ue.multiplyScalar=nS;function iS(s){for(var t=new Set,e=s.getValues(),n=s.getRows(),i=s.getCols(),r=0;r<e.length;r++)e[r]===0&&t.add(r);var a=function(h,u){return!t.has(u)},o=e.filter(a),c=n.filter(a),l=i.filter(a);return new ra(c,l,o,s.getDims())}ue.eliminateZeros=iS;function sS(s,t){var e,n;t===void 0&&(t="l2");var i=rS[t],r=new Map;s.forEach(function(u,f,d){var m=r.get(f)||[];m.push(d),r.set(f,m)});var a=new ra([],[],[],s.getDims()),o=function(u){for(var f=r.get(u).sort(),d=f.map(function(g){return s.get(u,g)}),m=i(d),y=0;y<m.length;y++)a.set(u,f[y],m[y])};try{for(var c=jM(r.keys()),l=c.next();!l.done;l=c.next()){var h=l.value;o(h)}}catch(u){e={error:u}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a}ue.normalize=sS;var rS=(No={},No.max=function(s){for(var t=-1/0,e=0;e<s.length;e++)t=s[e]>t?s[e]:t;return s.map(function(n){return n/t})},No.l1=function(s){for(var t=0,e=0;e<s.length;e++)t+=s[e];return s.map(function(n){return n/t})},No.l2=function(s){for(var t=0,e=0;e<s.length;e++)t+=Math.pow(s[e],2);return s.map(function(n){return Math.sqrt(Math.pow(n,2)/t)})},No);function Ph(s,t,e){for(var n=new Set,i=[],r=[],a=[],o=function(w,v){i.push(w),r.push(v);var M=e(s.get(w,v),t.get(w,v));a.push(M)},c=s.getValues(),l=s.getRows(),h=s.getCols(),u=0;u<c.length;u++){var f=l[u],d=h[u],m=f+":"+d;n.add(m),o(f,d)}for(var y=t.getValues(),g=t.getRows(),p=t.getCols(),u=0;u<y.length;u++){var f=g[u],d=p[u],m=f+":"+d;n.has(m)||o(f,d)}var x=[s.nRows,s.nCols];return new ra(i,r,a,x)}function aS(s){var t=[];s.forEach(function(u,f,d){t.push({value:u,row:f,col:d})}),t.sort(function(u,f){return u.row===f.row?u.col-f.col:u.row-f.row});for(var e=[],n=[],i=[],r=-1,a=0;a<t.length;a++){var o=t[a],c=o.row,l=o.col,h=o.value;c!==r&&(r=c,i.push(a)),e.push(l),n.push(h)}return{indices:e,values:n,indptr:i}}ue.getCSR=aS});var Ed=yi(He=>{"use strict";var oS=He&&He.__createBinding||(Object.create?(function(s,t,e,n){n===void 0&&(n=e),Object.defineProperty(s,n,{enumerable:!0,get:function(){return t[e]}})}):(function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]})),lS=He&&He.__setModuleDefault||(Object.create?(function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}):function(s,t){s.default=t}),cS=He&&He.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.hasOwnProperty.call(s,e)&&oS(t,s,e);return lS(t,s),t},hS=He&&He.__read||function(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var n=e.call(s),i,r=[],a;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(o){a={error:o}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(a)throw a.error}}return r},Ig=He&&He.__spread||function(){for(var s=[],t=0;t<arguments.length;t++)s=s.concat(hS(arguments[t]));return s},uS=He&&He.__values||function(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],n=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(He,"__esModule",{value:!0});He.searchFlatTree=He.makeLeafArray=He.makeForest=He.FlatTree=void 0;var _n=cS(sa()),Lg=(function(){function s(t,e,n,i){this.hyperplanes=t,this.offsets=e,this.children=n,this.indices=i}return s})();He.FlatTree=Lg;function fS(s,t,e,n){var i=Math.max(10,t),r=_n.range(e).map(function(o,c){return dS(s,i,c,n)}),a=r.map(function(o){return mS(o,i)});return a}He.makeForest=fS;function dS(s,t,e,n){t===void 0&&(t=30);var i=_n.range(s.length),r=bd(s,i,t,e,n);return r}function bd(s,t,e,n,i){if(e===void 0&&(e=30),t.length>e){var r=pS(s,t,i),a=r.indicesLeft,o=r.indicesRight,c=r.hyperplane,l=r.offset,h=bd(s,a,e,n+1,i),u=bd(s,o,e,n+1,i),f={leftChild:h,rightChild:u,isLeaf:!1,hyperplane:c,offset:l};return f}else{var f={indices:t,isLeaf:!0};return f}}function pS(s,t,e){var n=s[0].length,i=_n.tauRandInt(t.length,e),r=_n.tauRandInt(t.length,e);r+=i===r?1:0,r=r%t.length;for(var a=t[i],o=t[r],c=0,l=_n.zeros(n),h=0;h<l.length;h++)l[h]=s[a][h]-s[o][h],c-=l[h]*(s[a][h]+s[o][h])/2;for(var u=0,f=0,d=_n.zeros(t.length),h=0;h<t.length;h++){for(var m=c,y=0;y<n;y++)m+=l[y]*s[t[h]][y];m===0?(d[h]=_n.tauRandInt(2,e),d[h]===0?u+=1:f+=1):m>0?(d[h]=0,u+=1):(d[h]=1,f+=1)}var g=_n.zeros(u),p=_n.zeros(f);u=0,f=0;for(var h=0;h<d.length;h++)d[h]===0?(g[u]=t[h],u+=1):(p[f]=t[h],f+=1);return{indicesLeft:g,indicesRight:p,hyperplane:l,offset:c}}function mS(s,t){var e=Md(s),n=Sd(s),i=_n.range(e).map(function(){return _n.zeros(s.hyperplane?s.hyperplane.length:0)}),r=_n.zeros(e),a=_n.range(e).map(function(){return[-1,-1]}),o=_n.range(n).map(function(){return _n.range(t).map(function(){return-1})});return wd(s,i,r,a,o,0,0),new Lg(i,r,a,o)}function wd(s,t,e,n,i,r,a){var o;if(s.isLeaf)return n[r][0]=-a,(o=i[a]).splice.apply(o,Ig([0,s.indices.length],s.indices)),a+=1,{nodeNum:r,leafNum:a};t[r]=s.hyperplane,e[r]=s.offset,n[r][0]=r+1;var c=r,l=wd(s.leftChild,t,e,n,i,r+1,a);return r=l.nodeNum,a=l.leafNum,n[c][1]=r+1,l=wd(s.rightChild,t,e,n,i,r+1,a),{nodeNum:l.nodeNum,leafNum:l.leafNum}}function Md(s){return s.isLeaf?1:1+Md(s.leftChild)+Md(s.rightChild)}function Sd(s){return s.isLeaf?1:Sd(s.leftChild)+Sd(s.rightChild)}function gS(s){var t,e;if(s.length>0){var n=[];try{for(var i=uS(s),r=i.next();!r.done;r=i.next()){var a=r.value;n.push.apply(n,Ig(a.indices))}}catch(o){t={error:o}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return n}else return[[-1]]}He.makeLeafArray=gS;function yS(s,t,e,n){for(var i=t,r=0;r<e.length;r++)i+=s[r]*e[r];if(i===0){var a=_n.tauRandInt(2,n);return a}else return i>0?0:1}function xS(s,t,e){for(var n=0;t.children[n][0]>0;){var i=yS(t.hyperplanes[n],t.offsets[n],s,e);i===0?n=t.children[n][0]:n=t.children[n][1]}var r=-1*t.children[n][0];return t.indices[r]}He.searchFlatTree=xS});var Ug=yi(on=>{"use strict";var vS=on&&on.__createBinding||(Object.create?(function(s,t,e,n){n===void 0&&(n=e),Object.defineProperty(s,n,{enumerable:!0,get:function(){return t[e]}})}):(function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]})),_S=on&&on.__setModuleDefault||(Object.create?(function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}):function(s,t){s.default=t}),Ih=on&&on.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.hasOwnProperty.call(s,e)&&vS(t,s,e);return _S(t,s),t},Ng=on&&on.__values||function(s){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&s[t],n=0;if(e)return e.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(on,"__esModule",{value:!0});on.initializeSearch=on.makeInitializedNNSearch=on.makeInitializations=on.makeNNDescent=void 0;var Tn=Ih(vd()),bS=Ih(_d()),wS=Ih(Ed()),Dg=Ih(sa());function MS(s,t){return function(n,i,r,a,o,c,l,h){a===void 0&&(a=10),o===void 0&&(o=50),c===void 0&&(c=.001),l===void 0&&(l=.5),h===void 0&&(h=!0);for(var u=n.length,f=Tn.makeHeap(n.length,r),d=0;d<n.length;d++)for(var m=Tn.rejectionSample(r,n.length,t),y=0;y<m.length;y++){var g=s(n[d],n[m[y]]);Tn.heapPush(f,d,g,m[y],1),Tn.heapPush(f,m[y],g,d,1)}if(h)for(var p=0;p<i.length;p++)for(var d=0;d<i[p].length&&!(i[p][d]<0);d++)for(var y=d+1;y<i[p].length&&!(i[p][y]<0);y++){var g=s(n[i[p][d]],n[i[p][y]]);Tn.heapPush(f,i[p][d],g,i[p][y],1),Tn.heapPush(f,i[p][y],g,i[p][d],1)}for(var p=0;p<a;p++){for(var x=Tn.buildCandidates(f,u,r,o,t),w=0,d=0;d<u;d++)for(var y=0;y<o;y++){var v=Math.floor(x[0][d][y]);if(!(v<0||Dg.tauRand(t)<l))for(var M=0;M<o;M++){var E=Math.floor(x[0][d][M]),T=x[2][d][y],_=x[2][d][M];if(!(E<0||!T&&!_)){var g=s(n[v],n[E]);w+=Tn.heapPush(f,v,g,E,1),w+=Tn.heapPush(f,E,g,v,1)}}}if(w<=c*r*n.length)break}var R=Tn.deheapSort(f);return R}}on.makeNNDescent=MS;function SS(s){function t(n,i,r,a,o){for(var c=0;c<r.length;c++)for(var l=Dg.rejectionSample(n,i.length,o),h=0;h<l.length;h++)if(!(l[h]<0)){var u=s(i[l[h]],r[c]);Tn.heapPush(a,c,u,l[h],1)}}function e(n,i,r,a,o){for(var c=0;c<r.length;c++)for(var l=wS.searchFlatTree(r[c],n,o),h=0;h<l.length;h++){if(l[h]<0)return;var u=s(i[l[h]],r[c]);Tn.heapPush(a,c,u,l[h],1)}}return{initFromRandom:t,initFromTree:e}}on.makeInitializations=SS;function ES(s){return function(e,n,i,r){for(var a,o,c=bS.getCSR(n),l=c.indices,h=c.indptr,u=0;u<r.length;u++)for(var f=new Set(i[0][u]);;){var d=Tn.smallestFlagged(i,u);if(d===-1)break;var m=l.slice(h[d],h[d+1]);try{for(var y=(a=void 0,Ng(m)),g=y.next();!g.done;g=y.next()){var p=g.value;if(!(p===d||p===-1||f.has(p))){var x=s(e[p],r[u]);Tn.uncheckedHeapPush(i,u,x,p,1),f.add(p)}}}catch(w){a={error:w}}finally{try{g&&!g.done&&(o=y.return)&&o.call(y)}finally{if(a)throw a.error}}}return i}}on.makeInitializedNNSearch=ES;function TS(s,t,e,n,i,r,a){var o,c,l=Tn.makeHeap(e.length,n);if(i(n,t,e,l,a),s)try{for(var h=Ng(s),u=h.next();!u.done;u=h.next()){var f=u.value;r(f,t,e,l,a)}}catch(d){o={error:d}}finally{try{u&&!u.done&&(c=h.return)&&c.call(h)}finally{if(o)throw o.error}}return l}on.initializeSearch=TS});var Fg=yi(Td=>{"use strict";Object.defineProperty(Td,"__esModule",{value:!0});var AS=Object.prototype.toString;function RS(s){return AS.call(s).endsWith("Array]")}Td.default=RS});var Hg=yi(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});var CS=Object.prototype.toString;function ln(s){let t=CS.call(s);return t.endsWith("Array]")&&!t.includes("Big")}function PS(s,t={}){if(!ln(s))throw new TypeError("input must be an array");if(s.length===0)throw new TypeError("input must not be empty");let{fromIndex:e=0,toIndex:n=s.length}=t;if(e<0||e>=s.length||!Number.isInteger(e))throw new Error("fromIndex must be a positive integer smaller than length");if(n<=e||n>s.length||!Number.isInteger(n))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");let i=s[e];for(let r=e+1;r<n;r++)s[r]>i&&(i=s[r]);return i}function IS(s,t={}){if(!ln(s))throw new TypeError("input must be an array");if(s.length===0)throw new TypeError("input must not be empty");let{fromIndex:e=0,toIndex:n=s.length}=t;if(e<0||e>=s.length||!Number.isInteger(e))throw new Error("fromIndex must be a positive integer smaller than length");if(n<=e||n>s.length||!Number.isInteger(n))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");let i=s[e];for(let r=e+1;r<n;r++)s[r]<i&&(i=s[r]);return i}function Og(s,t={}){if(ln(s)){if(s.length===0)throw new TypeError("input must not be empty")}else throw new TypeError("input must be an array");let e;if(t.output!==void 0){if(!ln(t.output))throw new TypeError("output option must be an array if specified");e=t.output}else e=new Array(s.length);let n=IS(s),i=PS(s);if(n===i)throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");let{min:r=t.autoMinMax?n:0,max:a=t.autoMinMax?i:1}=t;if(r>=a)throw new RangeError("min option must be smaller than max option");let o=(a-r)/(i-n);for(let c=0;c<s.length;c++)e[c]=(s[c]-n)*o+r;return e}var Lh=" ".repeat(2),zg=" ".repeat(4);function LS(){return Vg(this)}function Vg(s,t={}){let{maxRows:e=15,maxColumns:n=10,maxNumSize:i=8,padMinus:r="auto"}=t;return`${s.constructor.name} {
${Lh}[
${zg}${NS(s,e,n,i,r)}
${Lh}]
${Lh}rows: ${s.rows}
${Lh}columns: ${s.columns}
}`}function NS(s,t,e,n,i){let{rows:r,columns:a}=s,o=Math.min(r,t),c=Math.min(a,e),l=[];if(i==="auto"){i=!1;t:for(let h=0;h<o;h++)for(let u=0;u<c;u++)if(s.get(h,u)<0){i=!0;break t}}for(let h=0;h<o;h++){let u=[];for(let f=0;f<c;f++)u.push(DS(s.get(h,f),n,i));l.push(`${u.join(" ")}`)}return c!==a&&(l[l.length-1]+=` ... ${a-e} more columns`),o!==r&&l.push(`... ${r-t} more rows`),l.join(`
${zg}`)}function DS(s,t,e){return(s>=0&&e?` ${Bg(s,t-1)}`:Bg(s,t)).padEnd(t)}function Bg(s,t){let e=s.toString();if(e.length<=t)return e;let n=s.toFixed(t);if(n.length>t&&(n=s.toFixed(Math.max(0,t-(n.length-t)))),n.length<=t&&!n.startsWith("0.000")&&!n.startsWith("-0.000"))return n;let i=s.toExponential(t);return i.length>t&&(i=s.toExponential(Math.max(0,t-(i.length-t)))),i.slice(0)}function US(s,t){s.prototype.add=function(n){return typeof n=="number"?this.addS(n):this.addM(n)},s.prototype.addS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)+n);return this},s.prototype.addM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)+n.get(i,r));return this},s.add=function(n,i){return new t(n).add(i)},s.prototype.sub=function(n){return typeof n=="number"?this.subS(n):this.subM(n)},s.prototype.subS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)-n);return this},s.prototype.subM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)-n.get(i,r));return this},s.sub=function(n,i){return new t(n).sub(i)},s.prototype.subtract=s.prototype.sub,s.prototype.subtractS=s.prototype.subS,s.prototype.subtractM=s.prototype.subM,s.subtract=s.sub,s.prototype.mul=function(n){return typeof n=="number"?this.mulS(n):this.mulM(n)},s.prototype.mulS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)*n);return this},s.prototype.mulM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)*n.get(i,r));return this},s.mul=function(n,i){return new t(n).mul(i)},s.prototype.multiply=s.prototype.mul,s.prototype.multiplyS=s.prototype.mulS,s.prototype.multiplyM=s.prototype.mulM,s.multiply=s.mul,s.prototype.div=function(n){return typeof n=="number"?this.divS(n):this.divM(n)},s.prototype.divS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)/n);return this},s.prototype.divM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)/n.get(i,r));return this},s.div=function(n,i){return new t(n).div(i)},s.prototype.divide=s.prototype.div,s.prototype.divideS=s.prototype.divS,s.prototype.divideM=s.prototype.divM,s.divide=s.div,s.prototype.mod=function(n){return typeof n=="number"?this.modS(n):this.modM(n)},s.prototype.modS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)%n);return this},s.prototype.modM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)%n.get(i,r));return this},s.mod=function(n,i){return new t(n).mod(i)},s.prototype.modulus=s.prototype.mod,s.prototype.modulusS=s.prototype.modS,s.prototype.modulusM=s.prototype.modM,s.modulus=s.mod,s.prototype.and=function(n){return typeof n=="number"?this.andS(n):this.andM(n)},s.prototype.andS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)&n);return this},s.prototype.andM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)&n.get(i,r));return this},s.and=function(n,i){return new t(n).and(i)},s.prototype.or=function(n){return typeof n=="number"?this.orS(n):this.orM(n)},s.prototype.orS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)|n);return this},s.prototype.orM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)|n.get(i,r));return this},s.or=function(n,i){return new t(n).or(i)},s.prototype.xor=function(n){return typeof n=="number"?this.xorS(n):this.xorM(n)},s.prototype.xorS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)^n);return this},s.prototype.xorM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)^n.get(i,r));return this},s.xor=function(n,i){return new t(n).xor(i)},s.prototype.leftShift=function(n){return typeof n=="number"?this.leftShiftS(n):this.leftShiftM(n)},s.prototype.leftShiftS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)<<n);return this},s.prototype.leftShiftM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)<<n.get(i,r));return this},s.leftShift=function(n,i){return new t(n).leftShift(i)},s.prototype.signPropagatingRightShift=function(n){return typeof n=="number"?this.signPropagatingRightShiftS(n):this.signPropagatingRightShiftM(n)},s.prototype.signPropagatingRightShiftS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)>>n);return this},s.prototype.signPropagatingRightShiftM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)>>n.get(i,r));return this},s.signPropagatingRightShift=function(n,i){return new t(n).signPropagatingRightShift(i)},s.prototype.rightShift=function(n){return typeof n=="number"?this.rightShiftS(n):this.rightShiftM(n)},s.prototype.rightShiftS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)>>>n);return this},s.prototype.rightShiftM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)>>>n.get(i,r));return this},s.rightShift=function(n,i){return new t(n).rightShift(i)},s.prototype.zeroFillRightShift=s.prototype.rightShift,s.prototype.zeroFillRightShiftS=s.prototype.rightShiftS,s.prototype.zeroFillRightShiftM=s.prototype.rightShiftM,s.zeroFillRightShift=s.rightShift,s.prototype.not=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,~this.get(n,i));return this},s.not=function(n){return new t(n).not()},s.prototype.abs=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.abs(this.get(n,i)));return this},s.abs=function(n){return new t(n).abs()},s.prototype.acos=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.acos(this.get(n,i)));return this},s.acos=function(n){return new t(n).acos()},s.prototype.acosh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.acosh(this.get(n,i)));return this},s.acosh=function(n){return new t(n).acosh()},s.prototype.asin=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.asin(this.get(n,i)));return this},s.asin=function(n){return new t(n).asin()},s.prototype.asinh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.asinh(this.get(n,i)));return this},s.asinh=function(n){return new t(n).asinh()},s.prototype.atan=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.atan(this.get(n,i)));return this},s.atan=function(n){return new t(n).atan()},s.prototype.atanh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.atanh(this.get(n,i)));return this},s.atanh=function(n){return new t(n).atanh()},s.prototype.cbrt=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.cbrt(this.get(n,i)));return this},s.cbrt=function(n){return new t(n).cbrt()},s.prototype.ceil=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.ceil(this.get(n,i)));return this},s.ceil=function(n){return new t(n).ceil()},s.prototype.clz32=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.clz32(this.get(n,i)));return this},s.clz32=function(n){return new t(n).clz32()},s.prototype.cos=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.cos(this.get(n,i)));return this},s.cos=function(n){return new t(n).cos()},s.prototype.cosh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.cosh(this.get(n,i)));return this},s.cosh=function(n){return new t(n).cosh()},s.prototype.exp=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.exp(this.get(n,i)));return this},s.exp=function(n){return new t(n).exp()},s.prototype.expm1=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.expm1(this.get(n,i)));return this},s.expm1=function(n){return new t(n).expm1()},s.prototype.floor=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.floor(this.get(n,i)));return this},s.floor=function(n){return new t(n).floor()},s.prototype.fround=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.fround(this.get(n,i)));return this},s.fround=function(n){return new t(n).fround()},s.prototype.log=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.log(this.get(n,i)));return this},s.log=function(n){return new t(n).log()},s.prototype.log1p=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.log1p(this.get(n,i)));return this},s.log1p=function(n){return new t(n).log1p()},s.prototype.log10=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.log10(this.get(n,i)));return this},s.log10=function(n){return new t(n).log10()},s.prototype.log2=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.log2(this.get(n,i)));return this},s.log2=function(n){return new t(n).log2()},s.prototype.round=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.round(this.get(n,i)));return this},s.round=function(n){return new t(n).round()},s.prototype.sign=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.sign(this.get(n,i)));return this},s.sign=function(n){return new t(n).sign()},s.prototype.sin=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.sin(this.get(n,i)));return this},s.sin=function(n){return new t(n).sin()},s.prototype.sinh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.sinh(this.get(n,i)));return this},s.sinh=function(n){return new t(n).sinh()},s.prototype.sqrt=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.sqrt(this.get(n,i)));return this},s.sqrt=function(n){return new t(n).sqrt()},s.prototype.tan=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.tan(this.get(n,i)));return this},s.tan=function(n){return new t(n).tan()},s.prototype.tanh=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.tanh(this.get(n,i)));return this},s.tanh=function(n){return new t(n).tanh()},s.prototype.trunc=function(){for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.set(n,i,Math.trunc(this.get(n,i)));return this},s.trunc=function(n){return new t(n).trunc()},s.pow=function(n,i){return new t(n).pow(i)},s.prototype.pow=function(n){return typeof n=="number"?this.powS(n):this.powM(n)},s.prototype.powS=function(n){for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)**n);return this},s.prototype.powM=function(n){if(n=t.checkMatrix(n),this.rows!==n.rows||this.columns!==n.columns)throw new RangeError("Matrices dimensions must be equal");for(let i=0;i<this.rows;i++)for(let r=0;r<this.columns;r++)this.set(i,r,this.get(i,r)**n.get(i,r));return this}}function Jn(s,t,e){let n=e?s.rows:s.rows-1;if(t<0||t>n)throw new RangeError("Row index out of range")}function Kn(s,t,e){let n=e?s.columns:s.columns-1;if(t<0||t>n)throw new RangeError("Column index out of range")}function oa(s,t){if(t.to1DArray&&(t=t.to1DArray()),t.length!==s.columns)throw new RangeError("vector size must be the same as the number of columns");return t}function la(s,t){if(t.to1DArray&&(t=t.to1DArray()),t.length!==s.rows)throw new RangeError("vector size must be the same as the number of rows");return t}function Bd(s,t){if(!ln(t))throw new TypeError("row indices must be an array");for(let e=0;e<t.length;e++)if(t[e]<0||t[e]>=s.rows)throw new RangeError("row indices are out of range")}function kd(s,t){if(!ln(t))throw new TypeError("column indices must be an array");for(let e=0;e<t.length;e++)if(t[e]<0||t[e]>=s.columns)throw new RangeError("column indices are out of range")}function Ad(s,t,e,n,i){if(arguments.length!==5)throw new RangeError("expected 4 arguments");if(Nh("startRow",t),Nh("endRow",e),Nh("startColumn",n),Nh("endColumn",i),t>e||n>i||t<0||t>=s.rows||e<0||e>=s.rows||n<0||n>=s.columns||i<0||i>=s.columns)throw new RangeError("Submatrix indices are out of range")}function Hh(s,t=0){let e=[];for(let n=0;n<s;n++)e.push(t);return e}function Nh(s,t){if(typeof t!="number")throw new TypeError(`${s} must be a number`)}function aa(s){if(s.isEmpty())throw new Error("Empty matrix has no elements to index")}function FS(s){let t=Hh(s.rows);for(let e=0;e<s.rows;++e)for(let n=0;n<s.columns;++n)t[e]+=s.get(e,n);return t}function OS(s){let t=Hh(s.columns);for(let e=0;e<s.rows;++e)for(let n=0;n<s.columns;++n)t[n]+=s.get(e,n);return t}function BS(s){let t=0;for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)t+=s.get(e,n);return t}function kS(s){let t=Hh(s.rows,1);for(let e=0;e<s.rows;++e)for(let n=0;n<s.columns;++n)t[e]*=s.get(e,n);return t}function zS(s){let t=Hh(s.columns,1);for(let e=0;e<s.rows;++e)for(let n=0;n<s.columns;++n)t[n]*=s.get(e,n);return t}function VS(s){let t=1;for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)t*=s.get(e,n);return t}function GS(s,t,e){let n=s.rows,i=s.columns,r=[];for(let a=0;a<n;a++){let o=0,c=0,l=0;for(let h=0;h<i;h++)l=s.get(a,h)-e[a],o+=l,c+=l*l;t?r.push((c-o*o/i)/(i-1)):r.push((c-o*o/i)/i)}return r}function HS(s,t,e){let n=s.rows,i=s.columns,r=[];for(let a=0;a<i;a++){let o=0,c=0,l=0;for(let h=0;h<n;h++)l=s.get(h,a)-e[a],o+=l,c+=l*l;t?r.push((c-o*o/n)/(n-1)):r.push((c-o*o/n)/n)}return r}function $S(s,t,e){let n=s.rows,i=s.columns,r=n*i,a=0,o=0,c=0;for(let l=0;l<n;l++)for(let h=0;h<i;h++)c=s.get(l,h)-e,a+=c,o+=c*c;return t?(o-a*a/r)/(r-1):(o-a*a/r)/r}function WS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)-t[e])}function qS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)-t[n])}function XS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)-t)}function YS(s){let t=[];for(let e=0;e<s.rows;e++){let n=0;for(let i=0;i<s.columns;i++)n+=s.get(e,i)**2/(s.columns-1);t.push(Math.sqrt(n))}return t}function jS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)/t[e])}function ZS(s){let t=[];for(let e=0;e<s.columns;e++){let n=0;for(let i=0;i<s.rows;i++)n+=s.get(i,e)**2/(s.rows-1);t.push(Math.sqrt(n))}return t}function JS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)/t[n])}function KS(s){let t=s.size-1,e=0;for(let n=0;n<s.columns;n++)for(let i=0;i<s.rows;i++)e+=s.get(i,n)**2/t;return Math.sqrt(e)}function QS(s,t){for(let e=0;e<s.rows;e++)for(let n=0;n<s.columns;n++)s.set(e,n,s.get(e,n)/t)}var De=class s{static from1DArray(t,e,n){if(t*e!==n.length)throw new RangeError("data length does not match given dimensions");let r=new ut(t,e);for(let a=0;a<t;a++)for(let o=0;o<e;o++)r.set(a,o,n[a*e+o]);return r}static rowVector(t){let e=new ut(1,t.length);for(let n=0;n<t.length;n++)e.set(0,n,t[n]);return e}static columnVector(t){let e=new ut(t.length,1);for(let n=0;n<t.length;n++)e.set(n,0,t[n]);return e}static zeros(t,e){return new ut(t,e)}static ones(t,e){return new ut(t,e).fill(1)}static rand(t,e,n={}){if(typeof n!="object")throw new TypeError("options must be an object");let{random:i=Math.random}=n,r=new ut(t,e);for(let a=0;a<t;a++)for(let o=0;o<e;o++)r.set(a,o,i());return r}static randInt(t,e,n={}){if(typeof n!="object")throw new TypeError("options must be an object");let{min:i=0,max:r=1e3,random:a=Math.random}=n;if(!Number.isInteger(i))throw new TypeError("min must be an integer");if(!Number.isInteger(r))throw new TypeError("max must be an integer");if(i>=r)throw new RangeError("min must be smaller than max");let o=r-i,c=new ut(t,e);for(let l=0;l<t;l++)for(let h=0;h<e;h++){let u=i+Math.round(a()*o);c.set(l,h,u)}return c}static eye(t,e,n){e===void 0&&(e=t),n===void 0&&(n=1);let i=Math.min(t,e),r=this.zeros(t,e);for(let a=0;a<i;a++)r.set(a,a,n);return r}static diag(t,e,n){let i=t.length;e===void 0&&(e=i),n===void 0&&(n=e);let r=Math.min(i,e,n),a=this.zeros(e,n);for(let o=0;o<r;o++)a.set(o,o,t[o]);return a}static min(t,e){t=this.checkMatrix(t),e=this.checkMatrix(e);let n=t.rows,i=t.columns,r=new ut(n,i);for(let a=0;a<n;a++)for(let o=0;o<i;o++)r.set(a,o,Math.min(t.get(a,o),e.get(a,o)));return r}static max(t,e){t=this.checkMatrix(t),e=this.checkMatrix(e);let n=t.rows,i=t.columns,r=new this(n,i);for(let a=0;a<n;a++)for(let o=0;o<i;o++)r.set(a,o,Math.max(t.get(a,o),e.get(a,o)));return r}static checkMatrix(t){return s.isMatrix(t)?t:new ut(t)}static isMatrix(t){return t!=null&&t.klass==="Matrix"}get size(){return this.rows*this.columns}apply(t){if(typeof t!="function")throw new TypeError("callback must be a function");for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)t.call(this,e,n);return this}applyAlongAxis(t,e){if(typeof t!="function")throw new TypeError("callback must be a function");let n=[];switch(e){case"row":{for(let i=0;i<this.rows;i++)n.push(t.call(this,this.getRow(i),i));break}case"column":{for(let i=0;i<this.columns;i++)n.push(t.call(this,this.getColumn(i),i));break}default:throw new Error(`invalid option: ${e}`)}return n}to1DArray(){let t=[];for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)t.push(this.get(e,n));return t}to2DArray(){let t=[];for(let e=0;e<this.rows;e++){t.push([]);for(let n=0;n<this.columns;n++)t[e].push(this.get(e,n))}return t}toJSON(){return this.to2DArray()}isRowVector(){return this.rows===1}isColumnVector(){return this.columns===1}isVector(){return this.rows===1||this.columns===1}isSquare(){return this.rows===this.columns}isEmpty(){return this.rows===0||this.columns===0}isSymmetric(){if(this.isSquare()){for(let t=0;t<this.rows;t++)for(let e=0;e<=t;e++)if(this.get(t,e)!==this.get(e,t))return!1;return!0}return!1}isDistance(){if(!this.isSymmetric())return!1;for(let t=0;t<this.rows;t++)if(this.get(t,t)!==0)return!1;return!0}isEchelonForm(){let t=0,e=0,n=-1,i=!0,r=!1;for(;t<this.rows&&i;){for(e=0,r=!1;e<this.columns&&r===!1;)this.get(t,e)===0?e++:this.get(t,e)===1&&e>n?(r=!0,n=e):(i=!1,r=!0);t++}return i}isReducedEchelonForm(){let t=0,e=0,n=-1,i=!0,r=!1;for(;t<this.rows&&i;){for(e=0,r=!1;e<this.columns&&r===!1;)this.get(t,e)===0?e++:this.get(t,e)===1&&e>n?(r=!0,n=e):(i=!1,r=!0);for(let a=e+1;a<this.rows;a++)this.get(t,a)!==0&&(i=!1);t++}return i}echelonForm(){let t=this.clone(),e=0,n=0;for(;e<t.rows&&n<t.columns;){let i=e;for(let r=e;r<t.rows;r++)t.get(r,n)>t.get(i,n)&&(i=r);if(t.get(i,n)===0)n++;else{t.swapRows(e,i);let r=t.get(e,n);for(let a=n;a<t.columns;a++)t.set(e,a,t.get(e,a)/r);for(let a=e+1;a<t.rows;a++){let o=t.get(a,n)/t.get(e,n);t.set(a,n,0);for(let c=n+1;c<t.columns;c++)t.set(a,c,t.get(a,c)-t.get(e,c)*o)}e++,n++}}return t}reducedEchelonForm(){let t=this.echelonForm(),e=t.columns,n=t.rows,i=n-1;for(;i>=0;)if(t.maxRow(i)===0)i--;else{let r=0,a=!1;for(;r<n&&a===!1;)t.get(i,r)===1?a=!0:r++;for(let o=0;o<i;o++){let c=t.get(o,r);for(let l=r;l<e;l++){let h=t.get(o,l)-c*t.get(i,l);t.set(o,l,h)}}i--}return t}set(){throw new Error("set method is unimplemented")}get(){throw new Error("get method is unimplemented")}repeat(t={}){if(typeof t!="object")throw new TypeError("options must be an object");let{rows:e=1,columns:n=1}=t;if(!Number.isInteger(e)||e<=0)throw new TypeError("rows must be a positive integer");if(!Number.isInteger(n)||n<=0)throw new TypeError("columns must be a positive integer");let i=new ut(this.rows*e,this.columns*n);for(let r=0;r<e;r++)for(let a=0;a<n;a++)i.setSubMatrix(this,this.rows*r,this.columns*a);return i}fill(t){for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,t);return this}neg(){return this.mulS(-1)}getRow(t){Jn(this,t);let e=[];for(let n=0;n<this.columns;n++)e.push(this.get(t,n));return e}getRowVector(t){return ut.rowVector(this.getRow(t))}setRow(t,e){Jn(this,t),e=oa(this,e);for(let n=0;n<this.columns;n++)this.set(t,n,e[n]);return this}swapRows(t,e){Jn(this,t),Jn(this,e);for(let n=0;n<this.columns;n++){let i=this.get(t,n);this.set(t,n,this.get(e,n)),this.set(e,n,i)}return this}getColumn(t){Kn(this,t);let e=[];for(let n=0;n<this.rows;n++)e.push(this.get(n,t));return e}getColumnVector(t){return ut.columnVector(this.getColumn(t))}setColumn(t,e){Kn(this,t),e=la(this,e);for(let n=0;n<this.rows;n++)this.set(n,t,e[n]);return this}swapColumns(t,e){Kn(this,t),Kn(this,e);for(let n=0;n<this.rows;n++){let i=this.get(n,t);this.set(n,t,this.get(n,e)),this.set(n,e,i)}return this}addRowVector(t){t=oa(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)+t[n]);return this}subRowVector(t){t=oa(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)-t[n]);return this}mulRowVector(t){t=oa(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)*t[n]);return this}divRowVector(t){t=oa(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)/t[n]);return this}addColumnVector(t){t=la(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)+t[e]);return this}subColumnVector(t){t=la(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)-t[e]);return this}mulColumnVector(t){t=la(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)*t[e]);return this}divColumnVector(t){t=la(this,t);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)this.set(e,n,this.get(e,n)/t[e]);return this}mulRow(t,e){Jn(this,t);for(let n=0;n<this.columns;n++)this.set(t,n,this.get(t,n)*e);return this}mulColumn(t,e){Kn(this,t);for(let n=0;n<this.rows;n++)this.set(n,t,this.get(n,t)*e);return this}max(t){if(this.isEmpty())return NaN;switch(t){case"row":{let e=new Array(this.rows).fill(Number.NEGATIVE_INFINITY);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)>e[n]&&(e[n]=this.get(n,i));return e}case"column":{let e=new Array(this.columns).fill(Number.NEGATIVE_INFINITY);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)>e[i]&&(e[i]=this.get(n,i));return e}case void 0:{let e=this.get(0,0);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)>e&&(e=this.get(n,i));return e}default:throw new Error(`invalid option: ${t}`)}}maxIndex(){aa(this);let t=this.get(0,0),e=[0,0];for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)>t&&(t=this.get(n,i),e[0]=n,e[1]=i);return e}min(t){if(this.isEmpty())return NaN;switch(t){case"row":{let e=new Array(this.rows).fill(Number.POSITIVE_INFINITY);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)<e[n]&&(e[n]=this.get(n,i));return e}case"column":{let e=new Array(this.columns).fill(Number.POSITIVE_INFINITY);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)<e[i]&&(e[i]=this.get(n,i));return e}case void 0:{let e=this.get(0,0);for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)<e&&(e=this.get(n,i));return e}default:throw new Error(`invalid option: ${t}`)}}minIndex(){aa(this);let t=this.get(0,0),e=[0,0];for(let n=0;n<this.rows;n++)for(let i=0;i<this.columns;i++)this.get(n,i)<t&&(t=this.get(n,i),e[0]=n,e[1]=i);return e}maxRow(t){if(Jn(this,t),this.isEmpty())return NaN;let e=this.get(t,0);for(let n=1;n<this.columns;n++)this.get(t,n)>e&&(e=this.get(t,n));return e}maxRowIndex(t){Jn(this,t),aa(this);let e=this.get(t,0),n=[t,0];for(let i=1;i<this.columns;i++)this.get(t,i)>e&&(e=this.get(t,i),n[1]=i);return n}minRow(t){if(Jn(this,t),this.isEmpty())return NaN;let e=this.get(t,0);for(let n=1;n<this.columns;n++)this.get(t,n)<e&&(e=this.get(t,n));return e}minRowIndex(t){Jn(this,t),aa(this);let e=this.get(t,0),n=[t,0];for(let i=1;i<this.columns;i++)this.get(t,i)<e&&(e=this.get(t,i),n[1]=i);return n}maxColumn(t){if(Kn(this,t),this.isEmpty())return NaN;let e=this.get(0,t);for(let n=1;n<this.rows;n++)this.get(n,t)>e&&(e=this.get(n,t));return e}maxColumnIndex(t){Kn(this,t),aa(this);let e=this.get(0,t),n=[0,t];for(let i=1;i<this.rows;i++)this.get(i,t)>e&&(e=this.get(i,t),n[0]=i);return n}minColumn(t){if(Kn(this,t),this.isEmpty())return NaN;let e=this.get(0,t);for(let n=1;n<this.rows;n++)this.get(n,t)<e&&(e=this.get(n,t));return e}minColumnIndex(t){Kn(this,t),aa(this);let e=this.get(0,t),n=[0,t];for(let i=1;i<this.rows;i++)this.get(i,t)<e&&(e=this.get(i,t),n[0]=i);return n}diag(){let t=Math.min(this.rows,this.columns),e=[];for(let n=0;n<t;n++)e.push(this.get(n,n));return e}norm(t="frobenius"){switch(t){case"max":return this.max();case"frobenius":return Math.sqrt(this.dot(this));default:throw new RangeError(`unknown norm type: ${t}`)}}cumulativeSum(){let t=0;for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)t+=this.get(e,n),this.set(e,n,t);return this}dot(t){s.isMatrix(t)&&(t=t.to1DArray());let e=this.to1DArray();if(e.length!==t.length)throw new RangeError("vectors do not have the same size");let n=0;for(let i=0;i<e.length;i++)n+=e[i]*t[i];return n}mmul(t){t=ut.checkMatrix(t);let e=this.rows,n=this.columns,i=t.columns,r=new ut(e,i),a=new Float64Array(n);for(let o=0;o<i;o++){for(let c=0;c<n;c++)a[c]=t.get(c,o);for(let c=0;c<e;c++){let l=0;for(let h=0;h<n;h++)l+=this.get(c,h)*a[h];r.set(c,o,l)}}return r}gram(){let t=this.rows,e=this.columns,n=new Float64Array(e*e);for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=this.get(r,a);if(o===0)continue;let c=a*e;for(let l=a;l<e;l++)n[c+l]+=o*this.get(r,l)}let i=new ut(e,e);for(let r=0;r<e;r++){let a=r*e;for(let o=r;o<e;o++){let c=n[a+o];i.set(r,o,c),i.set(o,r,c)}}return i}transposeMultiply(t){if(t=ut.checkMatrix(t),this.rows!==t.rows)throw new RangeError("the number of rows of the two matrices must be equal");let e=this.columns,n=t.columns,i=new ut(e,n),r=new Float64Array(n);for(let a=0;a<this.rows;a++){for(let o=0;o<n;o++)r[o]=t.get(a,o);for(let o=0;o<e;o++){let c=this.get(a,o);if(c===0)continue;let l=i.data[o];for(let h=0;h<n;h++)l[h]+=c*r[h]}}return i}mmulByTranspose(t){let e=this.rows,n=this.columns;if(t!==void 0&&t.length!==n)throw new RangeError("scale must have one value per column");let i=new ut(e,e),r=new Float64Array(n);for(let a=0;a<e;a++){if(t===void 0)for(let o=0;o<n;o++)r[o]=this.get(a,o);else for(let o=0;o<n;o++)r[o]=t[o]*this.get(a,o);for(let o=a;o<e;o++){let c=0;for(let l=0;l<n;l++)c+=this.get(o,l)*r[l];i.set(o,a,c),i.set(a,o,c)}}return i}mpow(t){if(!this.isSquare())throw new RangeError("Matrix must be square");if(!Number.isInteger(t)||t<0)throw new RangeError("Exponent must be a non-negative integer");let e=ut.eye(this.rows),n=this;for(let i=t;i>=1;i/=2)(i&1)!==0&&(e=e.mmul(n)),n=n.mmul(n);return e}strassen2x2(t){t=ut.checkMatrix(t);let e=new ut(2,2),n=this.get(0,0),i=t.get(0,0),r=this.get(0,1),a=t.get(0,1),o=this.get(1,0),c=t.get(1,0),l=this.get(1,1),h=t.get(1,1),u=(n+l)*(i+h),f=(o+l)*i,d=n*(a-h),m=l*(c-i),y=(n+r)*h,g=(o-n)*(i+a),p=(r-l)*(c+h),x=u+m-y+p,w=d+y,v=f+m,M=u-f+d+g;return e.set(0,0,x),e.set(0,1,w),e.set(1,0,v),e.set(1,1,M),e}strassen3x3(t){t=ut.checkMatrix(t);let e=new ut(3,3),n=this.get(0,0),i=this.get(0,1),r=this.get(0,2),a=this.get(1,0),o=this.get(1,1),c=this.get(1,2),l=this.get(2,0),h=this.get(2,1),u=this.get(2,2),f=t.get(0,0),d=t.get(0,1),m=t.get(0,2),y=t.get(1,0),g=t.get(1,1),p=t.get(1,2),x=t.get(2,0),w=t.get(2,1),v=t.get(2,2),M=(n+i+r-a-o-h-u)*g,E=(n-a)*(-d+g),T=o*(-f+d+y-g-p-x+v),_=(-n+a+o)*(f-d+g),R=(a+o)*(-f+d),b=n*f,C=(-n+l+h)*(f-m+p),P=(-n+l)*(m-p),I=(l+h)*(-f+m),N=(n+i+r-o-c-l-h)*p,U=h*(-f+m+y-g-p-x+w),G=(-r+h+u)*(g+x-w),H=(r-u)*(g-w),j=r*x,q=(h+u)*(-x+w),J=(-r+o+c)*(p+x-v),et=(r-c)*(p-v),X=(o+c)*(-x+v),z=i*y,at=c*w,ct=a*m,ft=l*d,k=u*v,K=b+j+z,xt=M+_+R+b+G+j+q,kt=b+C+I+N+j+J+X,Mt=E+T+_+b+j+J+et,Xt=E+_+R+b+at,Ce=j+J+et+X+ct,Yt=b+C+P+U+G+H+j,se=G+H+j+q+ft,ge=b+C+P+I+k;return e.set(0,0,K),e.set(0,1,xt),e.set(0,2,kt),e.set(1,0,Mt),e.set(1,1,Xt),e.set(1,2,Ce),e.set(2,0,Yt),e.set(2,1,se),e.set(2,2,ge),e}mmulStrassen(t){t=ut.checkMatrix(t);let e=this.clone(),n=e.rows,i=e.columns,r=t.rows,a=t.columns;i!==r&&console.warn(`Multiplying ${n} x ${i} and ${r} x ${a} matrix: dimensions do not match.`);function o(u,f,d){let m=u.rows,y=u.columns;if(m===f&&y===d)return u;{let g=s.zeros(f,d);return g=g.setSubMatrix(u,0,0),g}}let c=Math.max(n,r),l=Math.max(i,a);e=o(e,c,l),t=o(t,c,l);function h(u,f,d,m){if(d<=512||m<=512)return u.mmul(f);d%2===1&&m%2===1?(u=o(u,d+1,m+1),f=o(f,d+1,m+1)):d%2===1?(u=o(u,d+1,m),f=o(f,d+1,m)):m%2===1&&(u=o(u,d,m+1),f=o(f,d,m+1));let y=parseInt(u.rows/2,10),g=parseInt(u.columns/2,10),p=u.subMatrix(0,y-1,0,g-1),x=f.subMatrix(0,y-1,0,g-1),w=u.subMatrix(0,y-1,g,u.columns-1),v=f.subMatrix(0,y-1,g,f.columns-1),M=u.subMatrix(y,u.rows-1,0,g-1),E=f.subMatrix(y,f.rows-1,0,g-1),T=u.subMatrix(y,u.rows-1,g,u.columns-1),_=f.subMatrix(y,f.rows-1,g,f.columns-1),R=h(s.add(p,T),s.add(x,_),y,g),b=h(s.add(M,T),x,y,g),C=h(p,s.sub(v,_),y,g),P=h(T,s.sub(E,x),y,g),I=h(s.add(p,w),_,y,g),N=h(s.sub(M,p),s.add(x,v),y,g),U=h(s.sub(w,T),s.add(E,_),y,g),G=s.add(R,P);G.sub(I),G.add(U);let H=s.add(C,I),j=s.add(b,P),q=s.sub(R,b);q.add(C),q.add(N);let J=s.zeros(2*G.rows,2*G.columns);return J=J.setSubMatrix(G,0,0),J=J.setSubMatrix(H,G.rows,0),J=J.setSubMatrix(j,0,G.columns),J=J.setSubMatrix(q,G.rows,G.columns),J.subMatrix(0,d-1,0,m-1)}return h(e,t,c,l)}scaleRows(t={}){if(typeof t!="object")throw new TypeError("options must be an object");let{min:e=0,max:n=1}=t;if(!Number.isFinite(e))throw new TypeError("min must be a number");if(!Number.isFinite(n))throw new TypeError("max must be a number");if(e>=n)throw new RangeError("min must be smaller than max");let i=new ut(this.rows,this.columns);for(let r=0;r<this.rows;r++){let a=this.getRow(r);a.length>0&&Og(a,{min:e,max:n,output:a}),i.setRow(r,a)}return i}scaleColumns(t={}){if(typeof t!="object")throw new TypeError("options must be an object");let{min:e=0,max:n=1}=t;if(!Number.isFinite(e))throw new TypeError("min must be a number");if(!Number.isFinite(n))throw new TypeError("max must be a number");if(e>=n)throw new RangeError("min must be smaller than max");let i=new ut(this.rows,this.columns);for(let r=0;r<this.columns;r++){let a=this.getColumn(r);a.length&&Og(a,{min:e,max:n,output:a}),i.setColumn(r,a)}return i}flipRows(){let t=Math.ceil(this.columns/2);for(let e=0;e<this.rows;e++)for(let n=0;n<t;n++){let i=this.get(e,n),r=this.get(e,this.columns-1-n);this.set(e,n,r),this.set(e,this.columns-1-n,i)}return this}flipColumns(){let t=Math.ceil(this.rows/2);for(let e=0;e<this.columns;e++)for(let n=0;n<t;n++){let i=this.get(n,e),r=this.get(this.rows-1-n,e);this.set(n,e,r),this.set(this.rows-1-n,e,i)}return this}kroneckerProduct(t){t=ut.checkMatrix(t);let e=this.rows,n=this.columns,i=t.rows,r=t.columns,a=new ut(e*i,n*r);for(let o=0;o<e;o++)for(let c=0;c<n;c++)for(let l=0;l<i;l++)for(let h=0;h<r;h++)a.set(i*o+l,r*c+h,this.get(o,c)*t.get(l,h));return a}kroneckerSum(t){if(t=ut.checkMatrix(t),!this.isSquare()||!t.isSquare())throw new Error("Kronecker Sum needs two Square Matrices");let e=this.rows,n=t.rows,i=this.kroneckerProduct(ut.eye(n,n)),r=ut.eye(e,e).kroneckerProduct(t);return i.add(r)}transpose(){let t=new ut(this.columns,this.rows);for(let e=0;e<this.rows;e++)for(let n=0;n<this.columns;n++)t.set(n,e,this.get(e,n));return t}sortRows(t=kg){for(let e=0;e<this.rows;e++)this.setRow(e,this.getRow(e).sort(t));return this}sortColumns(t=kg){for(let e=0;e<this.columns;e++)this.setColumn(e,this.getColumn(e).sort(t));return this}subMatrix(t,e,n,i){Ad(this,t,e,n,i);let r=new ut(e-t+1,i-n+1);for(let a=t;a<=e;a++)for(let o=n;o<=i;o++)r.set(a-t,o-n,this.get(a,o));return r}subMatrixRow(t,e,n){if(e===void 0&&(e=0),n===void 0&&(n=this.columns-1),e>n||e<0||e>=this.columns||n<0||n>=this.columns)throw new RangeError("Argument out of range");let i=new ut(t.length,n-e+1);for(let r=0;r<t.length;r++)for(let a=e;a<=n;a++){if(t[r]<0||t[r]>=this.rows)throw new RangeError(`Row index out of range: ${t[r]}`);i.set(r,a-e,this.get(t[r],a))}return i}subMatrixColumn(t,e,n){if(e===void 0&&(e=0),n===void 0&&(n=this.rows-1),e>n||e<0||e>=this.rows||n<0||n>=this.rows)throw new RangeError("Argument out of range");let i=new ut(n-e+1,t.length);for(let r=0;r<t.length;r++)for(let a=e;a<=n;a++){if(t[r]<0||t[r]>=this.columns)throw new RangeError(`Column index out of range: ${t[r]}`);i.set(a-e,r,this.get(a,t[r]))}return i}setSubMatrix(t,e,n){if(t=ut.checkMatrix(t),t.isEmpty())return this;let i=e+t.rows-1,r=n+t.columns-1;Ad(this,e,i,n,r);for(let a=0;a<t.rows;a++)for(let o=0;o<t.columns;o++)this.set(e+a,n+o,t.get(a,o));return this}concat(t,e="row"){switch(t=ut.checkMatrix(t),e){case"row":{if(this.columns!==t.columns)throw new RangeError("both matrices must have the same number of columns");let n=new ut(this.rows+t.rows,this.columns);return n.setSubMatrix(this,0,0),n.setSubMatrix(t,this.rows,0),n}case"column":{if(this.rows!==t.rows)throw new RangeError("both matrices must have the same number of rows");let n=new ut(this.rows,this.columns+t.columns);return n.setSubMatrix(this,0,0),n.setSubMatrix(t,0,this.columns),n}default:throw new Error(`invalid option: ${e}`)}}selection(t,e){Bd(this,t),kd(this,e);let n=new ut(t.length,e.length);for(let i=0;i<t.length;i++){let r=t[i];for(let a=0;a<e.length;a++){let o=e[a];n.set(i,a,this.get(r,o))}}return n}trace(){let t=Math.min(this.rows,this.columns),e=0;for(let n=0;n<t;n++)e+=this.get(n,n);return e}clone(){return this.constructor.copy(this,new ut(this.rows,this.columns))}static copy(t,e){for(let[n,i,r]of t.entries())e.set(n,i,r);return e}sum(t){switch(t){case"row":return FS(this);case"column":return OS(this);case void 0:return BS(this);default:throw new Error(`invalid option: ${t}`)}}product(t){switch(t){case"row":return kS(this);case"column":return zS(this);case void 0:return VS(this);default:throw new Error(`invalid option: ${t}`)}}mean(t){let e=this.sum(t);switch(t){case"row":{for(let n=0;n<this.rows;n++)e[n]/=this.columns;return e}case"column":{for(let n=0;n<this.columns;n++)e[n]/=this.rows;return e}case void 0:return e/this.size;default:throw new Error(`invalid option: ${t}`)}}variance(t,e={}){if(typeof t=="object"&&(e=t,t=void 0),typeof e!="object")throw new TypeError("options must be an object");let{unbiased:n=!0,mean:i=this.mean(t)}=e;if(typeof n!="boolean")throw new TypeError("unbiased must be a boolean");switch(t){case"row":{if(!ln(i))throw new TypeError("mean must be an array");return GS(this,n,i)}case"column":{if(!ln(i))throw new TypeError("mean must be an array");return HS(this,n,i)}case void 0:{if(typeof i!="number")throw new TypeError("mean must be a number");return $S(this,n,i)}default:throw new Error(`invalid option: ${t}`)}}standardDeviation(t,e){typeof t=="object"&&(e=t,t=void 0);let n=this.variance(t,e);if(t===void 0)return Math.sqrt(n);for(let i=0;i<n.length;i++)n[i]=Math.sqrt(n[i]);return n}center(t,e={}){if(typeof t=="object"&&(e=t,t=void 0),typeof e!="object")throw new TypeError("options must be an object");let{center:n=this.mean(t)}=e;switch(t){case"row":{if(!ln(n))throw new TypeError("center must be an array");return WS(this,n),this}case"column":{if(!ln(n))throw new TypeError("center must be an array");return qS(this,n),this}case void 0:{if(typeof n!="number")throw new TypeError("center must be a number");return XS(this,n),this}default:throw new Error(`invalid option: ${t}`)}}scale(t,e={}){if(typeof t=="object"&&(e=t,t=void 0),typeof e!="object")throw new TypeError("options must be an object");let n=e.scale;switch(t){case"row":{if(n===void 0)n=YS(this);else if(!ln(n))throw new TypeError("scale must be an array");return jS(this,n),this}case"column":{if(n===void 0)n=ZS(this);else if(!ln(n))throw new TypeError("scale must be an array");return JS(this,n),this}case void 0:{if(n===void 0)n=KS(this);else if(typeof n!="number")throw new TypeError("scale must be a number");return QS(this,n),this}default:throw new Error(`invalid option: ${t}`)}}toString(t){return Vg(this,t)}[Symbol.iterator](){return this.entries()}*entries(){for(let t=0;t<this.rows;t++)for(let e=0;e<this.columns;e++)yield[t,e,this.get(t,e)]}*values(){for(let t=0;t<this.rows;t++)for(let e=0;e<this.columns;e++)yield this.get(t,e)}};De.prototype.klass="Matrix";typeof Symbol<"u"&&(De.prototype[Symbol.for("nodejs.util.inspect.custom")]=LS);function kg(s,t){return s-t}function tE(s){return s.every(t=>typeof t=="number")}De.random=De.rand;De.randomInt=De.randInt;De.diagonal=De.diag;De.prototype.diagonal=De.prototype.diag;De.identity=De.eye;De.prototype.negate=De.prototype.neg;De.prototype.tensorProduct=De.prototype.kroneckerProduct;var Uo,Rd,Vh=class Vh extends De{constructor(e,n){super();Jt(this,Uo);gt(this,"data");if(Vh.isMatrix(e))xi(this,Uo,Rd).call(this,e.rows,e.columns),Vh.copy(e,this);else if(Number.isInteger(e)&&e>=0)xi(this,Uo,Rd).call(this,e,n);else if(ln(e)){let i=e;if(e=i.length,n=e?i[0].length:0,typeof n!="number")throw new TypeError("Data must be a 2D array with at least one element");this.data=[];for(let r=0;r<e;r++){if(i[r].length!==n)throw new RangeError("Inconsistent array dimensions");if(!tE(i[r]))throw new TypeError("Input data contains non-numeric values");this.data.push(Float64Array.from(i[r]))}this.rows=e,this.columns=n}else throw new TypeError("First argument must be a positive number or an array")}set(e,n,i){return this.data[e][n]=i,this}get(e,n){return this.data[e][n]}removeRow(e){return Jn(this,e),this.data.splice(e,1),this.rows-=1,this}addRow(e,n){return n===void 0&&(n=e,e=this.rows),Jn(this,e,!0),n=Float64Array.from(oa(this,n)),this.data.splice(e,0,n),this.rows+=1,this}removeColumn(e){Kn(this,e);for(let n=0;n<this.rows;n++){let i=new Float64Array(this.columns-1);for(let r=0;r<e;r++)i[r]=this.data[n][r];for(let r=e+1;r<this.columns;r++)i[r-1]=this.data[n][r];this.data[n]=i}return this.columns-=1,this}addColumn(e,n){typeof n>"u"&&(n=e,e=this.columns),Kn(this,e,!0),n=la(this,n);for(let i=0;i<this.rows;i++){let r=new Float64Array(this.columns+1),a=0;for(;a<e;a++)r[a]=this.data[i][a];for(r[a++]=n[i];a<this.columns+1;a++)r[a]=this.data[i][a-1];this.data[i]=r}return this.columns+=1,this}};Uo=new WeakSet,Rd=function(e,n){if(this.data=[],Number.isInteger(n)&&n>=0)for(let i=0;i<e;i++)this.data.push(new Float64Array(n));else throw new TypeError("nColumns must be a positive integer");this.rows=e,this.columns=n};var ut=Vh;US(De,ut);var bn,Gh=class Gh extends De{constructor(e){super();Jt(this,bn);if(ut.isMatrix(e)){if(!e.isSymmetric())throw new TypeError("not symmetric data");$t(this,bn,ut.copy(e,new ut(e.rows,e.rows)))}else if(Number.isInteger(e)&&e>=0)$t(this,bn,new ut(e,e));else if($t(this,bn,new ut(e)),!this.isSymmetric())throw new TypeError("not symmetric data")}get size(){return mt(this,bn).size}get rows(){return mt(this,bn).rows}get columns(){return mt(this,bn).columns}get diagonalSize(){return this.rows}static isSymmetricMatrix(e){return ut.isMatrix(e)&&e.klassType==="SymmetricMatrix"}static zeros(e){return new this(e)}static ones(e){return new this(e).fill(1)}clone(){let e=new Gh(this.diagonalSize);for(let[n,i,r]of this.upperRightEntries())e.set(n,i,r);return e}toMatrix(){return new ut(this)}get(e,n){return mt(this,bn).get(e,n)}set(e,n,i){return mt(this,bn).set(e,n,i),mt(this,bn).set(n,e,i),this}removeCross(e){return mt(this,bn).removeRow(e),mt(this,bn).removeColumn(e),this}addCross(e,n){n===void 0&&(n=e,e=this.diagonalSize);let i=n.slice();return i.splice(e,1),mt(this,bn).addRow(e,i),mt(this,bn).addColumn(e,n),this}applyMask(e){if(e.length!==this.diagonalSize)throw new RangeError("Mask size do not match with matrix size");let n=[];for(let[i,r]of e.entries())r||n.push(i);n.reverse();for(let i of n)this.removeCross(i);return this}toCompact(){let{diagonalSize:e}=this,n=new Array(e*(e+1)/2);for(let i=0,r=0,a=0;a<n.length;a++)n[a]=this.get(r,i),++i>=e&&(i=++r);return n}static fromCompact(e){let n=e.length,i=(Math.sqrt(8*n+1)-1)/2;if(!Number.isInteger(i))throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(e)}`);let r=new Gh(i);for(let a=0,o=0,c=0;c<n;c++)r.set(a,o,e[c]),++a>=i&&(a=++o);return r}*upperRightEntries(){for(let e=0,n=0;e<this.diagonalSize;void 0){let i=this.get(e,n);yield[e,n,i],++n>=this.diagonalSize&&(n=++e)}}*upperRightValues(){for(let e=0,n=0;e<this.diagonalSize;void 0)yield this.get(e,n),++n>=this.diagonalSize&&(n=++e)}};bn=new WeakMap;var ir=Gh;ir.prototype.klassType="SymmetricMatrix";var Fh=class s extends ir{static isDistanceMatrix(t){return ir.isSymmetricMatrix(t)&&t.klassSubType==="DistanceMatrix"}constructor(t){if(super(t),!this.isDistance())throw new TypeError("Provided arguments do no produce a distance matrix")}set(t,e,n){return t===e&&(n=0),super.set(t,e,n)}addCross(t,e){return e===void 0&&(e=t,t=this.diagonalSize),e=e.slice(),e[t]=0,super.addCross(t,e)}toSymmetricMatrix(){return new ir(this)}clone(){let t=new s(this.diagonalSize);for(let[e,n,i]of this.upperRightEntries())e!==n&&t.set(e,n,i);return t}toCompact(){let{diagonalSize:t}=this,e=(t-1)*t/2,n=new Array(e);for(let i=1,r=0,a=0;a<n.length;a++)n[a]=this.get(r,i),++i>=t&&(i=++r+1);return n}static fromCompact(t){let e=t.length;if(e===0)return new this(0);let n=(Math.sqrt(8*e+1)+1)/2;if(!Number.isInteger(n))throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(t)}`);let i=new this(n);for(let r=1,a=0,o=0;o<e;o++)i.set(r,a,t[o]),++r>=n&&(r=++a+1);return i}};Fh.prototype.klassSubType="DistanceMatrix";var di=class extends De{constructor(t,e,n){super(),this.matrix=t,this.rows=e,this.columns=n}},Cd=class extends di{constructor(t,e){Kn(t,e),super(t,t.rows,1),this.column=e}set(t,e,n){return this.matrix.set(t,this.column,n),this}get(t){return this.matrix.get(t,this.column)}},Pd=class extends di{constructor(t,e){kd(t,e),super(t,t.rows,e.length),this.columnIndices=e}set(t,e,n){return this.matrix.set(t,this.columnIndices[e],n),this}get(t,e){return this.matrix.get(t,this.columnIndices[e])}},Id=class extends di{constructor(t){super(t,t.rows,t.columns)}set(t,e,n){return this.matrix.set(t,this.columns-e-1,n),this}get(t,e){return this.matrix.get(t,this.columns-e-1)}},Ld=class extends di{constructor(t){super(t,t.rows,t.columns)}set(t,e,n){return this.matrix.set(this.rows-t-1,e,n),this}get(t,e){return this.matrix.get(this.rows-t-1,e)}},Nd=class extends di{constructor(t,e){Jn(t,e),super(t,1,t.columns),this.row=e}set(t,e,n){return this.matrix.set(this.row,e,n),this}get(t,e){return this.matrix.get(this.row,e)}},Dd=class extends di{constructor(t,e){Bd(t,e),super(t,e.length,t.columns),this.rowIndices=e}set(t,e,n){return this.matrix.set(this.rowIndices[t],e,n),this}get(t,e){return this.matrix.get(this.rowIndices[t],e)}},ca=class extends di{constructor(t,e,n){Bd(t,e),kd(t,n),super(t,e.length,n.length),this.rowIndices=e,this.columnIndices=n}set(t,e,n){return this.matrix.set(this.rowIndices[t],this.columnIndices[e],n),this}get(t,e){return this.matrix.get(this.rowIndices[t],this.columnIndices[e])}},Ud=class extends di{constructor(t,e,n,i,r){Ad(t,e,n,i,r),super(t,n-e+1,r-i+1),this.startRow=e,this.startColumn=i}set(t,e,n){return this.matrix.set(this.startRow+t,this.startColumn+e,n),this}get(t,e){return this.matrix.get(this.startRow+t,this.startColumn+e)}},Fd=class extends di{constructor(t){super(t,t.columns,t.rows)}set(t,e,n){return this.matrix.set(e,t,n),this}get(t,e){return this.matrix.get(e,t)}},Oh=class extends De{constructor(t,e={}){let{rows:n=1}=e;if(t.length%n!==0)throw new Error("the data length is not divisible by the number of rows");super(),this.rows=n,this.columns=t.length/n,this.data=t}set(t,e,n){let i=this._calculateIndex(t,e);return this.data[i]=n,this}get(t,e){let n=this._calculateIndex(t,e);return this.data[n]}_calculateIndex(t,e){return t*this.columns+e}},An=class extends De{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,n){return this.data[t][e]=n,this}get(t,e){return this.data[t][e]}};function eE(s,t){if(ln(s))return s[0]&&ln(s[0])?new An(s):new Oh(s,t);throw new Error("the argument is not an array")}var ha=class{constructor(t){t=An.checkMatrix(t);let e=t.clone(),n=e.rows,i=e.columns,r=new Float64Array(n),a=1,o,c,l,h,u,f,d,m,y;for(o=0;o<n;o++)r[o]=o;for(m=new Float64Array(n),c=0;c<i;c++){for(o=0;o<n;o++)m[o]=e.get(o,c);for(o=0;o<n;o++){for(y=Math.min(o,c),u=0,l=0;l<y;l++)u+=e.get(o,l)*m[l];m[o]-=u,e.set(o,c,m[o])}for(h=c,o=c+1;o<n;o++)Math.abs(m[o])>Math.abs(m[h])&&(h=o);if(h!==c){for(l=0;l<i;l++)f=e.get(h,l),e.set(h,l,e.get(c,l)),e.set(c,l,f);d=r[h],r[h]=r[c],r[c]=d,a=-a}if(c<n&&e.get(c,c)!==0)for(o=c+1;o<n;o++)e.set(o,c,e.get(o,c)/e.get(c,c))}this.LU=e,this.pivotVector=r,this.pivotSign=a}isSingular(){let t=this.LU,e=t.columns;for(let n=0;n<e;n++)if(t.get(n,n)===0)return!0;return!1}solve(t){t=ut.checkMatrix(t);let e=this.LU;if(e.rows!==t.rows)throw new Error("Invalid matrix dimensions");if(this.isSingular())throw new Error("LU matrix is singular");let i=t.columns,r=t.subMatrixRow(this.pivotVector,0,i-1),a=e.columns,o,c,l;for(l=0;l<a;l++)for(o=l+1;o<a;o++)for(c=0;c<i;c++)r.set(o,c,r.get(o,c)-r.get(l,c)*e.get(o,l));for(l=a-1;l>=0;l--){for(c=0;c<i;c++)r.set(l,c,r.get(l,c)/e.get(l,l));for(o=0;o<l;o++)for(c=0;c<i;c++)r.set(o,c,r.get(o,c)-r.get(l,c)*e.get(o,l))}return r}get determinant(){let t=this.LU;if(!t.isSquare())throw new Error("Matrix must be square");let e=this.pivotSign,n=t.columns;for(let i=0;i<n;i++)e*=t.get(i,i);return e}get lowerTriangularMatrix(){let t=this.LU,e=t.rows,n=t.columns,i=new ut(e,n);for(let r=0;r<e;r++)for(let a=0;a<n;a++)r>a?i.set(r,a,t.get(r,a)):r===a?i.set(r,a,1):i.set(r,a,0);return i}get upperTriangularMatrix(){let t=this.LU,e=t.rows,n=t.columns,i=new ut(e,n);for(let r=0;r<e;r++)for(let a=0;a<n;a++)r<=a?i.set(r,a,t.get(r,a)):i.set(r,a,0);return i}get pivotPermutationVector(){return Array.from(this.pivotVector)}};function Od(s){let t=s.data,e=s.rows;for(let n=0;n<e;n++){let i=t[n];for(let r=n+1;r<e;r++){let a=i[r];i[r]=t[r][n],t[r][n]=a}}return s}function Ki(s,t){let e=0;return Math.abs(s)>Math.abs(t)?(e=t/s,Math.abs(s)*Math.sqrt(1+e*e)):t!==0?(e=s/t,Math.abs(t)*Math.sqrt(1+e*e)):0}var Do=class{constructor(t){t=An.checkMatrix(t);let e=t.clone(),n=t.rows,i=t.columns,r=new Float64Array(i),a,o,c,l;for(c=0;c<i;c++){let h=0;for(a=c;a<n;a++)h=Ki(h,e.get(a,c));if(h!==0){for(e.get(c,c)<0&&(h=-h),a=c;a<n;a++)e.set(a,c,e.get(a,c)/h);for(e.set(c,c,e.get(c,c)+1),o=c+1;o<i;o++){for(l=0,a=c;a<n;a++)l+=e.get(a,c)*e.get(a,o);for(l=-l/e.get(c,c),a=c;a<n;a++)e.set(a,o,e.get(a,o)+l*e.get(a,c))}}r[c]=-h}this.QR=e,this.Rdiag=r}solve(t){t=ut.checkMatrix(t);let e=this.QR,n=e.rows;if(t.rows!==n)throw new Error("Matrix row dimensions must agree");if(!this.isFullRank())throw new Error("Matrix is rank deficient");let i=t.columns,r=t.clone(),a=e.columns,o,c,l,h;for(l=0;l<a;l++)for(c=0;c<i;c++){for(h=0,o=l;o<n;o++)h+=e.get(o,l)*r.get(o,c);for(h=-h/e.get(l,l),o=l;o<n;o++)r.set(o,c,r.get(o,c)+h*e.get(o,l))}for(l=a-1;l>=0;l--){for(c=0;c<i;c++)r.set(l,c,r.get(l,c)/this.Rdiag[l]);for(o=0;o<l;o++)for(c=0;c<i;c++)r.set(o,c,r.get(o,c)-r.get(l,c)*e.get(o,l))}return r.subMatrix(0,a-1,0,i-1)}isFullRank(){let t=this.QR.columns;for(let e=0;e<t;e++)if(this.Rdiag[e]===0)return!1;return!0}get upperTriangularMatrix(){let t=this.QR,e=t.columns,n=new ut(e,e),i,r;for(i=0;i<e;i++)for(r=0;r<e;r++)i<r?n.set(i,r,t.get(i,r)):i===r?n.set(i,r,this.Rdiag[i]):n.set(i,r,0);return n}get orthogonalMatrix(){let t=this.QR,e=t.rows,n=t.columns,i=new ut(e,n),r,a,o,c;for(o=n-1;o>=0;o--){for(r=0;r<e;r++)i.set(r,o,0);for(i.set(o,o,1),a=o;a<n;a++)if(t.get(o,o)!==0){for(c=0,r=o;r<e;r++)c+=t.get(r,o)*i.get(r,a);for(c=-c/t.get(o,o),r=o;r<e;r++)i.set(r,a,i.get(r,a)+c*t.get(r,o))}}return i}},As=class{constructor(t,e={}){if(t=An.checkMatrix(t),t.isEmpty())throw new Error("Matrix must be non-empty");let n=t.rows,i=t.columns,{computeLeftSingularVectors:r=!0,computeRightSingularVectors:a=!0,autoTranspose:o=!1}=e,c=!!r,l=!!a,h=!1,u;if(n<i)if(!o)console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose"),u=t.transpose();else{u=t.clone(),n=t.columns,i=t.rows,h=!0;let b=c;c=l,l=b}else u=t.transpose();let f=Math.min(n,i),d=Math.min(n+1,i),m=new Float64Array(d),y=new ut(f,n),g=new ut(i,i),p=new Float64Array(i),x=new Float64Array(n),w=new Float64Array(d);for(let b=0;b<d;b++)w[b]=b;let v=Math.min(n-1,i),M=Math.max(0,Math.min(i-2,n)),E=Math.max(v,M);for(let b=0;b<E;b++){if(b<v){m[b]=0;for(let C=b;C<n;C++)m[b]=Ki(m[b],u.get(b,C));if(m[b]!==0){u.get(b,b)<0&&(m[b]=-m[b]);for(let C=b;C<n;C++)u.set(b,C,u.get(b,C)/m[b]);u.set(b,b,u.get(b,b)+1)}m[b]=-m[b]}for(let C=b+1;C<i;C++){if(b<v&&m[b]!==0){let P=0;for(let I=b;I<n;I++)P+=u.get(b,I)*u.get(C,I);P=-P/u.get(b,b);for(let I=b;I<n;I++)u.set(C,I,u.get(C,I)+P*u.get(b,I))}p[C]=u.get(C,b)}if(c&&b<v)for(let C=b;C<n;C++)y.set(b,C,u.get(b,C));if(b<M){p[b]=0;for(let C=b+1;C<i;C++)p[b]=Ki(p[b],p[C]);if(p[b]!==0){p[b+1]<0&&(p[b]=0-p[b]);for(let C=b+1;C<i;C++)p[C]/=p[b];p[b+1]+=1}if(p[b]=-p[b],b+1<n&&p[b]!==0){for(let C=b+1;C<n;C++)x[C]=0;for(let C=b+1;C<n;C++)for(let P=b+1;P<i;P++)x[C]+=p[P]*u.get(P,C);for(let C=b+1;C<i;C++){let P=-p[C]/p[b+1];for(let I=b+1;I<n;I++)u.set(C,I,u.get(C,I)+P*x[I])}}if(l)for(let C=b+1;C<i;C++)g.set(b,C,p[C])}}let T=Math.min(i,n+1);if(v<i&&(m[v]=u.get(v,v)),n<T&&(m[T-1]=0),M+1<T&&(p[M]=u.get(T-1,M)),p[T-1]=0,c){for(let b=v;b<f;b++){for(let C=0;C<n;C++)y.set(b,C,0);y.set(b,b,1)}for(let b=v-1;b>=0;b--)if(m[b]!==0){for(let C=b+1;C<f;C++){let P=0;for(let I=b;I<n;I++)P+=y.get(b,I)*y.get(C,I);P=-P/y.get(b,b);for(let I=b;I<n;I++)y.set(C,I,y.get(C,I)+P*y.get(b,I))}for(let C=b;C<n;C++)y.set(b,C,-y.get(b,C));y.set(b,b,1+y.get(b,b));for(let C=0;C<b-1;C++)y.set(b,C,0)}else{for(let C=0;C<n;C++)y.set(b,C,0);y.set(b,b,1)}}if(l)for(let b=i-1;b>=0;b--){if(b<M&&p[b]!==0)for(let C=b+1;C<i;C++){let P=0;for(let I=b+1;I<i;I++)P+=g.get(b,I)*g.get(C,I);P=-P/g.get(b,b+1);for(let I=b+1;I<i;I++)g.set(C,I,g.get(C,I)+P*g.get(b,I))}for(let C=0;C<i;C++)g.set(b,C,0);g.set(b,b,1)}let _=T-1,R=Number.EPSILON;for(;T>0;){let b,C;for(b=T-2;b>=-1&&b!==-1;b--){let P=Number.MIN_VALUE+R*Math.abs(m[b]+Math.abs(m[b+1]));if(Math.abs(p[b])<=P||Number.isNaN(p[b])){p[b]=0;break}}if(b===T-2)C=4;else{let P;for(P=T-1;P>=b&&P!==b;P--){let I=(P!==T?Math.abs(p[P]):0)+(P!==b+1?Math.abs(p[P-1]):0);if(Math.abs(m[P])<=R*I){m[P]=0;break}}P===b?C=3:P===T-1?C=1:(C=2,b=P)}switch(b++,C){case 1:{let P=p[T-2];p[T-2]=0;for(let I=T-2;I>=b;I--){let N=Ki(m[I],P),U=m[I]/N,G=P/N;if(m[I]=N,I!==b&&(P=-G*p[I-1],p[I-1]=U*p[I-1]),l)for(let H=0;H<i;H++)N=U*g.get(I,H)+G*g.get(T-1,H),g.set(T-1,H,-G*g.get(I,H)+U*g.get(T-1,H)),g.set(I,H,N)}break}case 2:{let P=p[b-1];p[b-1]=0;for(let I=b;I<T;I++){let N=Ki(m[I],P),U=m[I]/N,G=P/N;if(m[I]=N,P=-G*p[I],p[I]=U*p[I],c)for(let H=0;H<n;H++)N=U*y.get(I,H)+G*y.get(b-1,H),y.set(b-1,H,-G*y.get(I,H)+U*y.get(b-1,H)),y.set(I,H,N)}break}case 3:{let P=Math.max(Math.abs(m[T-1]),Math.abs(m[T-2]),Math.abs(p[T-2]),Math.abs(m[b]),Math.abs(p[b])),I=m[T-1]/P,N=m[T-2]/P,U=p[T-2]/P,G=m[b]/P,H=p[b]/P,j=((N+I)*(N-I)+U*U)/2,q=I*U*(I*U),J=0;(j!==0||q!==0)&&(j<0?J=0-Math.sqrt(j*j+q):J=Math.sqrt(j*j+q),J=q/(j+J));let et=(G+I)*(G-I)+J,X=G*H;for(let z=b;z<T-1;z++){let at=Ki(et,X);at===0&&(at=Number.MIN_VALUE);let ct=et/at,ft=X/at;if(z!==b&&(p[z-1]=at),et=ct*m[z]+ft*p[z],p[z]=ct*p[z]-ft*m[z],X=ft*m[z+1],m[z+1]=ct*m[z+1],l)for(let k=0;k<i;k++)at=ct*g.get(z,k)+ft*g.get(z+1,k),g.set(z+1,k,-ft*g.get(z,k)+ct*g.get(z+1,k)),g.set(z,k,at);if(at=Ki(et,X),at===0&&(at=Number.MIN_VALUE),ct=et/at,ft=X/at,m[z]=at,et=ct*p[z]+ft*m[z+1],m[z+1]=-ft*p[z]+ct*m[z+1],X=ft*p[z+1],p[z+1]=ct*p[z+1],c&&z<n-1)for(let k=0;k<n;k++)at=ct*y.get(z,k)+ft*y.get(z+1,k),y.set(z+1,k,-ft*y.get(z,k)+ct*y.get(z+1,k)),y.set(z,k,at)}p[T-2]=et;break}case 4:{if(m[b]<=0&&(m[b]=m[b]<0?-m[b]:0,l))for(let P=0;P<=_;P++)g.set(b,P,-g.get(b,P));for(;b<_&&!(m[b]>=m[b+1]);){let P=m[b];if(m[b]=m[b+1],m[b+1]=P,l&&b<i-1)for(let I=0;I<i;I++)P=g.get(b+1,I),g.set(b+1,I,g.get(b,I)),g.set(b,I,P);if(c&&b<n-1)for(let I=0;I<n;I++)P=y.get(b+1,I),y.set(b+1,I,y.get(b,I)),y.set(b,I,P);b++}T--;break}}}if(y=y.isSquare()?Od(y):y.transpose(),g=Od(g),h){let b=g;g=y,y=b}this.m=n,this.n=i,this.s=m,this.U=y,this.V=g}solve(t){let e=t,n=this.threshold,i=this.s.length,r=ut.zeros(i,i);for(let f=0;f<i;f++)Math.abs(this.s[f])<=n?r.set(f,f,0):r.set(f,f,1/this.s[f]);let a=this.U,o=this.rightSingularVectors,c=o.mmul(r),l=o.rows,h=a.rows,u=ut.zeros(l,h);for(let f=0;f<l;f++)for(let d=0;d<h;d++){let m=0;for(let y=0;y<i;y++)m+=c.get(f,y)*a.get(d,y);u.set(f,d,m)}return u.mmul(e)}solveForDiagonal(t){return this.solve(ut.diag(t))}inverse(){let t=this.V,e=this.threshold,n=t.rows,i=t.columns,r=new ut(n,this.s.length);for(let h=0;h<n;h++)for(let u=0;u<i;u++)Math.abs(this.s[u])>e&&r.set(h,u,t.get(h,u)/this.s[u]);let a=this.U,o=a.rows,c=a.columns,l=new ut(n,o);for(let h=0;h<n;h++)for(let u=0;u<o;u++){let f=0;for(let d=0;d<c;d++)f+=r.get(h,d)*a.get(u,d);l.set(h,u,f)}return l}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,n=this.s;for(let i=0,r=n.length;i<r;i++)n[i]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return ut.diag(this.s)}};function nE(s,t=!1){return s=An.checkMatrix(s),t?new As(s).inverse():Gg(s,ut.eye(s.rows))}function Gg(s,t,e=!1){return s=An.checkMatrix(s),t=An.checkMatrix(t),e?new As(s).solve(t):s.isSquare()?new ha(s).solve(t):new Do(s).solve(t)}function Uh(s){if(s=ut.checkMatrix(s),s.isSquare()){if(s.columns===0)return 1;let t,e,n,i;if(s.columns===2)return t=s.get(0,0),e=s.get(0,1),n=s.get(1,0),i=s.get(1,1),t*i-e*n;if(s.columns===3){let r,a,o;return r=new ca(s,[1,2],[1,2]),a=new ca(s,[1,2],[0,2]),o=new ca(s,[1,2],[0,1]),t=s.get(0,0),e=s.get(0,1),n=s.get(0,2),t*Uh(r)-e*Uh(a)+n*Uh(o)}else return new ha(s).determinant}else throw Error("determinant can only be calculated for a square matrix")}function iE(s,t){let e=[];for(let n=0;n<s;n++)n!==t&&e.push(n);return e}function sE(s,t,e,n=1e-9,i=1e-9){if(s>i)return new Array(t.rows+1).fill(0);{let r=t.addRow(e,[0]);for(let a=0;a<r.rows;a++)Math.abs(r.get(a,0))<n&&r.set(a,0,0);return r.to1DArray()}}function rE(s,t={}){let{thresholdValue:e=1e-9,thresholdError:n=1e-9}=t;s=ut.checkMatrix(s);let i=s.rows,r=new ut(i,i);for(let a=0;a<i;a++){let o=ut.columnVector(s.getRow(a)),c=s.subMatrixRow(iE(i,a)).transpose(),h=new As(c).solve(o),u=ut.abs(o).max()||1,f=ut.sub(o,c.mmul(h)).abs().max()/u;r.setRow(a,sE(f,h,a,e,n))}return r}function aE(s,t=Number.EPSILON){if(s=ut.checkMatrix(s),s.isEmpty())return s.transpose();let e=new As(s,{autoTranspose:!0}),n=e.leftSingularVectors,i=e.rightSingularVectors,r=e.diagonal,a=t*Math.max(s.rows,s.columns)*r[0];for(let o=0;o<r.length;o++)Math.abs(r[o])>a?r[o]=1/r[o]:r[o]=0;return i.mmul(ut.diag(r).mmul(n.transpose()))}function oE(s,t=s,e={}){s=new ut(s);let n=!1;if(typeof t=="object"&&!ut.isMatrix(t)&&!ln(t)?(e=t,t=s,n=!0):t=new ut(t),s.rows!==t.rows)throw new TypeError("Both matrices must have the same number of rows");let{center:i=!0}=e;i&&(s=s.center("column"),n||(t=t.center("column")));let r=s.transposeMultiply(t);for(let a=0;a<r.rows;a++)for(let o=0;o<r.columns;o++)r.set(a,o,r.get(a,o)*(1/(s.rows-1)));return r}function lE(s,t=s,e={}){s=new ut(s);let n=!1;if(typeof t=="object"&&!ut.isMatrix(t)&&!ln(t)?(e=t,t=s,n=!0):t=new ut(t),s.rows!==t.rows)throw new TypeError("Both matrices must have the same number of rows");let{center:i=!0,scale:r=!0}=e;i&&(s.center("column"),n||t.center("column")),r&&(s.scale("column"),n||t.scale("column"));let a=s.standardDeviation("column",{unbiased:!0}),o=n?a:t.standardDeviation("column",{unbiased:!0}),c=s.transposeMultiply(t);for(let l=0;l<c.rows;l++)for(let h=0;h<c.columns;h++)c.set(l,h,c.get(l,h)*(1/(a[l]*o[h]))*(1/(s.rows-1)));return c}var Bh=class{constructor(t,e={}){let{assumeSymmetric:n=!1}=e;if(t=An.checkMatrix(t),!t.isSquare())throw new Error("Matrix is not a square matrix");if(t.isEmpty())throw new Error("Matrix must be non-empty");let i=t.columns,r=new ut(i,i),a=new Float64Array(i),o=new Float64Array(i),c=t,l,h,u=!1;if(n?u=!0:u=t.isSymmetric(),u){for(l=0;l<i;l++)for(h=0;h<i;h++)r.set(h,l,c.get(l,h));cE(i,o,a,r),hE(i,o,a,r),Od(r)}else{let f=new ut(i,i),d=new Float64Array(i);for(h=0;h<i;h++)for(l=0;l<i;l++)f.set(l,h,c.get(l,h));uE(i,f,d,r),fE(i,o,a,r,f)}this.n=i,this.e=o,this.d=a,this.V=r}get realEigenvalues(){return Array.from(this.d)}get imaginaryEigenvalues(){return Array.from(this.e)}get eigenvectorMatrix(){return this.V}get diagonalMatrix(){let t=this.n,e=this.e,n=this.d,i=new ut(t,t),r,a;for(r=0;r<t;r++){for(a=0;a<t;a++)i.set(r,a,0);i.set(r,r,n[r]),e[r]>0?i.set(r,r+1,e[r]):e[r]<0&&i.set(r,r-1,e[r])}return i}};function cE(s,t,e,n){let i,r,a,o,c,l,h,u;for(c=0;c<s;c++)e[c]=n.get(c,s-1);for(o=s-1;o>0;o--){for(u=0,a=0,l=0;l<o;l++)u=u+Math.abs(e[l]);if(u===0)for(t[o]=e[o-1],c=0;c<o;c++)e[c]=n.get(c,o-1),n.set(c,o,0),n.set(o,c,0);else{for(l=0;l<o;l++)e[l]/=u,a+=e[l]*e[l];for(i=e[o-1],r=Math.sqrt(a),i>0&&(r=-r),t[o]=u*r,a=a-i*r,e[o-1]=i-r,c=0;c<o;c++)t[c]=0;for(c=0;c<o;c++){for(i=e[c],n.set(o,c,i),r=t[c]+n.get(c,c)*i,l=c+1;l<=o-1;l++)r+=n.get(c,l)*e[l],t[l]+=n.get(c,l)*i;t[c]=r}for(i=0,c=0;c<o;c++)t[c]/=a,i+=t[c]*e[c];for(h=i/(a+a),c=0;c<o;c++)t[c]-=h*e[c];for(c=0;c<o;c++){for(i=e[c],r=t[c],l=c;l<=o-1;l++)n.set(c,l,n.get(c,l)-(i*t[l]+r*e[l]));e[c]=n.get(c,o-1),n.set(c,o,0)}}e[o]=a}for(o=0;o<s-1;o++){if(n.set(o,s-1,n.get(o,o)),n.set(o,o,1),a=e[o+1],a!==0){for(l=0;l<=o;l++)e[l]=n.get(o+1,l)/a;for(c=0;c<=o;c++){for(r=0,l=0;l<=o;l++)r+=n.get(o+1,l)*n.get(c,l);for(l=0;l<=o;l++)n.set(c,l,n.get(c,l)-r*e[l])}}for(l=0;l<=o;l++)n.set(o+1,l,0)}for(c=0;c<s;c++)e[c]=n.get(c,s-1),n.set(c,s-1,0);n.set(s-1,s-1,1),t[0]=0}function hE(s,t,e,n){let i,r,a,o,c,l,h,u,f,d,m,y,g,p,x,w;for(a=1;a<s;a++)t[a-1]=t[a];t[s-1]=0;let v=0,M=0,E=Number.EPSILON;for(l=0;l<s;l++){for(M=Math.max(M,Math.abs(e[l])+Math.abs(t[l])),h=l;h<s&&!(Math.abs(t[h])<=E*M);)h++;if(h>l)do{for(i=e[l],u=(e[l+1]-i)/(2*t[l]),f=Ki(u,1),u<0&&(f=-f),e[l]=t[l]/(u+f),e[l+1]=t[l]*(u+f),d=e[l+1],r=i-e[l],a=l+2;a<s;a++)e[a]-=r;for(v=v+r,u=e[h],m=1,y=m,g=m,p=t[l+1],x=0,w=0,a=h-1;a>=l;a--)for(g=y,y=m,w=x,i=m*t[a],r=m*u,f=Ki(u,t[a]),t[a+1]=x*f,x=t[a]/f,m=u/f,u=m*e[a]-x*i,e[a+1]=r+x*(m*i+x*e[a]),c=0;c<s;c++)r=n.get(a+1,c),n.set(a+1,c,x*n.get(a,c)+m*r),n.set(a,c,m*n.get(a,c)-x*r);u=-x*w*g*p*t[l]/d,t[l]=x*u,e[l]=m*u}while(Math.abs(t[l])>E*M);e[l]=e[l]+v,t[l]=0}for(a=0;a<s-1;a++){for(c=a,u=e[a],o=a+1;o<s;o++)e[o]<u&&(c=o,u=e[o]);if(c!==a)for(e[c]=e[a],e[a]=u,o=0;o<s;o++)u=n.get(a,o),n.set(a,o,n.get(c,o)),n.set(c,o,u)}}function uE(s,t,e,n){let i=0,r=s-1,a,o,c,l,h,u,f;for(u=i+1;u<=r-1;u++){for(f=0,l=u;l<=r;l++)f=f+Math.abs(t.get(l,u-1));if(f!==0){for(c=0,l=r;l>=u;l--)e[l]=t.get(l,u-1)/f,c+=e[l]*e[l];for(o=Math.sqrt(c),e[u]>0&&(o=-o),c=c-e[u]*o,e[u]=e[u]-o,h=u;h<s;h++){for(a=0,l=r;l>=u;l--)a+=e[l]*t.get(l,h);for(a=a/c,l=u;l<=r;l++)t.set(l,h,t.get(l,h)-a*e[l])}for(l=0;l<=r;l++){for(a=0,h=r;h>=u;h--)a+=e[h]*t.get(l,h);for(a=a/c,h=u;h<=r;h++)t.set(l,h,t.get(l,h)-a*e[h])}e[u]=f*e[u],t.set(u,u-1,f*o)}}for(l=0;l<s;l++)for(h=0;h<s;h++)n.set(l,h,l===h?1:0);for(u=r-1;u>=i+1;u--)if(t.get(u,u-1)!==0){for(l=u+1;l<=r;l++)e[l]=t.get(l,u-1);for(h=u;h<=r;h++){for(o=0,l=u;l<=r;l++)o+=e[l]*n.get(l,h);for(o=o/e[u]/t.get(u,u-1),l=u;l<=r;l++)n.set(l,h,n.get(l,h)+o*e[l])}}}function fE(s,t,e,n,i){let r=s-1,a=0,o=s-1,c=Number.EPSILON,l=0,h=0,u=0,f=0,d=0,m=0,y=0,g=0,p,x,w,v,M,E,T,_,R,b,C,P,I,N,U;for(p=0;p<s;p++)for((p<a||p>o)&&(e[p]=i.get(p,p),t[p]=0),x=Math.max(p-1,0);x<s;x++)h=h+Math.abs(i.get(p,x));for(;r>=a;){for(v=r;v>a&&(m=Math.abs(i.get(v-1,v-1))+Math.abs(i.get(v,v)),m===0&&(m=h),!(Math.abs(i.get(v,v-1))<c*m));)v--;if(v===r)i.set(r,r,i.get(r,r)+l),e[r]=i.get(r,r),t[r]=0,r--,g=0;else if(v===r-1){if(T=i.get(r,r-1)*i.get(r-1,r),u=(i.get(r-1,r-1)-i.get(r,r))/2,f=u*u+T,y=Math.sqrt(Math.abs(f)),i.set(r,r,i.get(r,r)+l),i.set(r-1,r-1,i.get(r-1,r-1)+l),_=i.get(r,r),f>=0){for(y=u>=0?u+y:u-y,e[r-1]=_+y,e[r]=e[r-1],y!==0&&(e[r]=_-T/y),t[r-1]=0,t[r]=0,_=i.get(r,r-1),m=Math.abs(_)+Math.abs(y),u=_/m,f=y/m,d=Math.sqrt(u*u+f*f),u=u/d,f=f/d,x=r-1;x<s;x++)y=i.get(r-1,x),i.set(r-1,x,f*y+u*i.get(r,x)),i.set(r,x,f*i.get(r,x)-u*y);for(p=0;p<=r;p++)y=i.get(p,r-1),i.set(p,r-1,f*y+u*i.get(p,r)),i.set(p,r,f*i.get(p,r)-u*y);for(p=a;p<=o;p++)y=n.get(p,r-1),n.set(p,r-1,f*y+u*n.get(p,r)),n.set(p,r,f*n.get(p,r)-u*y)}else e[r-1]=_+u,e[r]=_+u,t[r-1]=y,t[r]=-y;r=r-2,g=0}else{if(_=i.get(r,r),R=0,T=0,v<r&&(R=i.get(r-1,r-1),T=i.get(r,r-1)*i.get(r-1,r)),g===10){for(l+=_,p=a;p<=r;p++)i.set(p,p,i.get(p,p)-_);m=Math.abs(i.get(r,r-1))+Math.abs(i.get(r-1,r-2)),_=R=.75*m,T=-.4375*m*m}if(g===30&&(m=(R-_)/2,m=m*m+T,m>0)){for(m=Math.sqrt(m),R<_&&(m=-m),m=_-T/((R-_)/2+m),p=a;p<=r;p++)i.set(p,p,i.get(p,p)-m);l+=m,_=R=T=.964}for(g=g+1,M=r-2;M>=v&&(y=i.get(M,M),d=_-y,m=R-y,u=(d*m-T)/i.get(M+1,M)+i.get(M,M+1),f=i.get(M+1,M+1)-y-d-m,d=i.get(M+2,M+1),m=Math.abs(u)+Math.abs(f)+Math.abs(d),u=u/m,f=f/m,d=d/m,!(M===v||Math.abs(i.get(M,M-1))*(Math.abs(f)+Math.abs(d))<c*(Math.abs(u)*(Math.abs(i.get(M-1,M-1))+Math.abs(y)+Math.abs(i.get(M+1,M+1))))));)M--;for(p=M+2;p<=r;p++)i.set(p,p-2,0),p>M+2&&i.set(p,p-3,0);for(w=M;w<=r-1&&(N=w!==r-1,w!==M&&(u=i.get(w,w-1),f=i.get(w+1,w-1),d=N?i.get(w+2,w-1):0,_=Math.abs(u)+Math.abs(f)+Math.abs(d),_!==0&&(u=u/_,f=f/_,d=d/_)),_!==0);w++)if(m=Math.sqrt(u*u+f*f+d*d),u<0&&(m=-m),m!==0){for(w!==M?i.set(w,w-1,-m*_):v!==M&&i.set(w,w-1,-i.get(w,w-1)),u=u+m,_=u/m,R=f/m,y=d/m,f=f/u,d=d/u,x=w;x<s;x++)u=i.get(w,x)+f*i.get(w+1,x),N&&(u=u+d*i.get(w+2,x),i.set(w+2,x,i.get(w+2,x)-u*y)),i.set(w,x,i.get(w,x)-u*_),i.set(w+1,x,i.get(w+1,x)-u*R);for(p=0;p<=Math.min(r,w+3);p++)u=_*i.get(p,w)+R*i.get(p,w+1),N&&(u=u+y*i.get(p,w+2),i.set(p,w+2,i.get(p,w+2)-u*d)),i.set(p,w,i.get(p,w)-u),i.set(p,w+1,i.get(p,w+1)-u*f);for(p=a;p<=o;p++)u=_*n.get(p,w)+R*n.get(p,w+1),N&&(u=u+y*n.get(p,w+2),n.set(p,w+2,n.get(p,w+2)-u*d)),n.set(p,w,n.get(p,w)-u),n.set(p,w+1,n.get(p,w+1)-u*f)}}}if(h!==0){for(r=s-1;r>=0;r--)if(u=e[r],f=t[r],f===0)for(v=r,i.set(r,r,1),p=r-1;p>=0;p--){for(T=i.get(p,p)-u,d=0,x=v;x<=r;x++)d=d+i.get(p,x)*i.get(x,r);if(t[p]<0)y=T,m=d;else if(v=p,t[p]===0?i.set(p,r,T!==0?-d/T:-d/(c*h)):(_=i.get(p,p+1),R=i.get(p+1,p),f=(e[p]-u)*(e[p]-u)+t[p]*t[p],E=(_*m-y*d)/f,i.set(p,r,E),i.set(p+1,r,Math.abs(_)>Math.abs(y)?(-d-T*E)/_:(-m-R*E)/y)),E=Math.abs(i.get(p,r)),c*E*E>1)for(x=p;x<=r;x++)i.set(x,r,i.get(x,r)/E)}else if(f<0)for(v=r-1,Math.abs(i.get(r,r-1))>Math.abs(i.get(r-1,r))?(i.set(r-1,r-1,f/i.get(r,r-1)),i.set(r-1,r,-(i.get(r,r)-u)/i.get(r,r-1))):(U=Dh(0,-i.get(r-1,r),i.get(r-1,r-1)-u,f),i.set(r-1,r-1,U[0]),i.set(r-1,r,U[1])),i.set(r,r-1,0),i.set(r,r,1),p=r-2;p>=0;p--){for(b=0,C=0,x=v;x<=r;x++)b=b+i.get(p,x)*i.get(x,r-1),C=C+i.get(p,x)*i.get(x,r);if(T=i.get(p,p)-u,t[p]<0)y=T,d=b,m=C;else if(v=p,t[p]===0?(U=Dh(-b,-C,T,f),i.set(p,r-1,U[0]),i.set(p,r,U[1])):(_=i.get(p,p+1),R=i.get(p+1,p),P=(e[p]-u)*(e[p]-u)+t[p]*t[p]-f*f,I=(e[p]-u)*2*f,P===0&&I===0&&(P=c*h*(Math.abs(T)+Math.abs(f)+Math.abs(_)+Math.abs(R)+Math.abs(y))),U=Dh(_*d-y*b+f*C,_*m-y*C-f*b,P,I),i.set(p,r-1,U[0]),i.set(p,r,U[1]),Math.abs(_)>Math.abs(y)+Math.abs(f)?(i.set(p+1,r-1,(-b-T*i.get(p,r-1)+f*i.get(p,r))/_),i.set(p+1,r,(-C-T*i.get(p,r)-f*i.get(p,r-1))/_)):(U=Dh(-d-R*i.get(p,r-1),-m-R*i.get(p,r),y,f),i.set(p+1,r-1,U[0]),i.set(p+1,r,U[1]))),E=Math.max(Math.abs(i.get(p,r-1)),Math.abs(i.get(p,r))),c*E*E>1)for(x=p;x<=r;x++)i.set(x,r-1,i.get(x,r-1)/E),i.set(x,r,i.get(x,r)/E)}for(p=0;p<s;p++)if(p<a||p>o)for(x=p;x<s;x++)n.set(p,x,i.get(p,x));for(x=s-1;x>=a;x--)for(p=a;p<=o;p++){for(y=0,w=a;w<=Math.min(x,o);w++)y=y+n.get(p,w)*i.get(w,x);n.set(p,x,y)}}}function Dh(s,t,e,n){let i,r;return Math.abs(e)>Math.abs(n)?(i=n/e,r=e+i*n,[(s+i*t)/r,(t-i*s)/r]):(i=e/n,r=n+i*e,[(i*s+t)/r,(i*t-s)/r])}var kh=class{constructor(t){if(t=An.checkMatrix(t),!t.isSymmetric())throw new Error("Matrix is not symmetric");let e=t,n=e.rows,i=new ut(n,n),r=!0,a,o,c;for(o=0;o<n;o++){let l=0;for(c=0;c<o;c++){let h=0;for(a=0;a<c;a++)h+=i.get(c,a)*i.get(o,a);h=(e.get(o,c)-h)/i.get(c,c),i.set(o,c,h),l=l+h*h}for(l=e.get(o,o)-l,r&&(r=l>0),i.set(o,o,Math.sqrt(Math.max(l,0))),c=o+1;c<n;c++)i.set(o,c,0)}this.L=i,this.positiveDefinite=r}isPositiveDefinite(){return this.positiveDefinite}solve(t){t=An.checkMatrix(t);let e=this.L,n=e.rows;if(t.rows!==n)throw new Error("Matrix dimensions do not match");if(this.isPositiveDefinite()===!1)throw new Error("Matrix is not positive definite");let i=t.columns,r=t.clone(),a,o,c;for(c=0;c<n;c++)for(o=0;o<i;o++){for(a=0;a<c;a++)r.set(c,o,r.get(c,o)-r.get(a,o)*e.get(c,a));r.set(c,o,r.get(c,o)/e.get(c,c))}for(c=n-1;c>=0;c--)for(o=0;o<i;o++){for(a=c+1;a<n;a++)r.set(c,o,r.get(c,o)-r.get(a,o)*e.get(a,c));r.set(c,o,r.get(c,o)/e.get(c,c))}return r}get lowerTriangularMatrix(){return this.L}},zh=class{constructor(t,e={}){t=An.checkMatrix(t);let{Y:n}=e,{scaleScores:i=!1,maxIterations:r=1e3,terminationCriteria:a=1e-10}=e,o;if(n){if(ln(n)&&typeof n[0]=="number"?n=ut.columnVector(n):n=An.checkMatrix(n),n.rows!==t.rows)throw new Error("Y should have the same number of rows as X");o=n.getColumnVector(0)}else o=t.getColumnVector(0);let c=1,l,h,u,f;for(let d=0;d<r&&c>a;d++)u=t.transpose().mmul(o).div(o.transpose().mmul(o).get(0,0)),u=u.div(u.norm()),l=t.mmul(u).div(u.transpose().mmul(u).get(0,0)),d>0&&(c=l.clone().sub(f).pow(2).sum()),f=l.clone(),n?(h=n.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0)),h=h.div(h.norm()),o=n.mmul(h).div(h.transpose().mmul(h).get(0,0))):o=l;if(n){let d=t.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0));d=d.div(d.norm());let m=t.clone().sub(l.clone().mmul(d.transpose())),y=o.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0)),g=n.clone().sub(l.clone().mulS(y.get(0,0)).mmul(h.transpose()));this.t=l,this.p=d.transpose(),this.w=u.transpose(),this.q=h,this.u=o,this.s=l.transpose().mmul(l),this.xResidual=m,this.yResidual=g,this.betas=y}else this.w=u.transpose(),this.s=l.transpose().mmul(l).sqrt(),i?this.t=l.clone().div(this.s.get(0,0)):this.t=l,this.xResidual=t.sub(l.mmul(u.transpose()))}};ie.AbstractMatrix=De;ie.CHO=kh;ie.CholeskyDecomposition=kh;ie.DistanceMatrix=Fh;ie.EVD=Bh;ie.EigenvalueDecomposition=Bh;ie.LU=ha;ie.LuDecomposition=ha;ie.Matrix=ut;ie.MatrixColumnSelectionView=Pd;ie.MatrixColumnView=Cd;ie.MatrixFlipColumnView=Id;ie.MatrixFlipRowView=Ld;ie.MatrixRowSelectionView=Dd;ie.MatrixRowView=Nd;ie.MatrixSelectionView=ca;ie.MatrixSubView=Ud;ie.MatrixTransposeView=Fd;ie.NIPALS=zh;ie.Nipals=zh;ie.QR=Do;ie.QrDecomposition=Do;ie.SVD=As;ie.SingularValueDecomposition=As;ie.SymmetricMatrix=ir;ie.WrapperMatrix1D=Oh;ie.WrapperMatrix2D=An;ie.correlation=lE;ie.covariance=oE;ie.default=ut;ie.determinant=Uh;ie.inverse=nE;ie.linearDependencies=rE;ie.pseudoInverse=aE;ie.solve=Gg;ie.wrap=eE});var qg=yi((q3,Wg)=>{"use strict";function dE(s){return s&&typeof s=="object"&&"default"in s?s.default:s}var zd=dE(Fg()),Fo=Hg();function $g(s,t,e){let n=0,i=e(t);for(let r=0;r<s.x.length;r++)n+=Math.abs(s.y[r]-i(s.x[r]));return n}function pE(s,t,e,n,i){let r=e.length,a=s.x.length,o=new Array(r);for(let c=0;c<r;c++){o[c]=new Array(a);let l=e.slice();l[c]+=n;let h=i(l);for(let u=0;u<a;u++)o[c][u]=t[u]-h(s.x[u])}return new Fo.Matrix(o)}function mE(s,t){let e=s.x.length,n=new Array(e);for(let i=0;i<e;i++)n[i]=[s.y[i]-t[i]];return new Fo.Matrix(n)}function gE(s,t,e,n,i){let r=e*n*n,a=Fo.Matrix.eye(t.length,t.length,r),o=i(t),c=new Float64Array(s.x.length);for(let f=0;f<s.x.length;f++)c[f]=o(s.x[f]);let l=pE(s,c,t,n,i),h=mE(s,c),u=Fo.inverse(a.add(l.mmul(l.transpose())));return t=new Fo.Matrix([t]),t=t.sub(u.mmul(l).mmul(h).mul(n).transpose()),t.to1DArray()}function yE(s,t,e={}){let{maxIterations:n=100,gradientDifference:i=.1,damping:r=0,errorTolerance:a=.01,minValues:o,maxValues:c,initialValues:l}=e;if(r<=0)throw new Error("The damping option must be a positive number");if(!s.x||!s.y)throw new Error("The data parameter must have x and y elements");if(!zd(s.x)||s.x.length<2||!zd(s.y)||s.y.length<2)throw new Error("The data parameter elements must be an array with more than 2 points");if(s.x.length!==s.y.length)throw new Error("The data parameter elements must have the same size");let h=l||new Array(t.length).fill(1),u=h.length;if(c=c||new Array(u).fill(Number.MAX_SAFE_INTEGER),o=o||new Array(u).fill(Number.MIN_SAFE_INTEGER),c.length!==o.length)throw new Error("minValues and maxValues must be the same size");if(!zd(h))throw new Error("initialValues must be an array");let f=$g(s,h,t),d=f<=a,m;for(m=0;m<n&&!d;m++){h=gE(s,h,r,i,t);for(let y=0;y<u;y++)h[y]=Math.min(Math.max(o[y],h[y]),c[y]);if(f=$g(s,h,t),isNaN(f))break;d=f<=a}return{parameterValues:h,parameterError:f,iterations:m}}Wg.exports=yE});var ry=yi(me=>{"use strict";var xE=me&&me.__createBinding||(Object.create?(function(s,t,e,n){n===void 0&&(n=e),Object.defineProperty(s,n,{enumerable:!0,get:function(){return t[e]}})}):(function(s,t,e,n){n===void 0&&(n=e),s[n]=t[e]})),vE=me&&me.__setModuleDefault||(Object.create?(function(s,t){Object.defineProperty(s,"default",{enumerable:!0,value:t})}):function(s,t){s.default=t}),Oo=me&&me.__importStar||function(s){if(s&&s.__esModule)return s;var t={};if(s!=null)for(var e in s)e!=="default"&&Object.hasOwnProperty.call(s,e)&&xE(t,s,e);return vE(t,s),t},Xg=me&&me.__awaiter||function(s,t,e,n){function i(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(u){a(u)}}function c(h){try{l(n.throw(h))}catch(u){a(u)}}function l(h){h.done?r(h.value):i(h.value).then(o,c)}l((n=n.apply(s,t||[])).next())})},Yg=me&&me.__generator||function(s,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(l){return function(h){return c([l,h])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,i=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1],r=l;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(l);break}r[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(s,e)}catch(h){l=[6,h],i=0}finally{n=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Vd=me&&me.__read||function(s,t){var e=typeof Symbol=="function"&&s[Symbol.iterator];if(!e)return s;var n=e.call(s),i,r=[],a;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(o){a={error:o}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(a)throw a.error}}return r},jg=me&&me.__spread||function(){for(var s=[],t=0;t<arguments.length;t++)s=s.concat(Vd(arguments[t]));return s},_E=me&&me.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(me,"__esModule",{value:!0});me.initTransform=me.resetLocalConnectivity=me.fastIntersection=me.findABParams=me.cosine=me.euclidean=me.UMAP=void 0;var bE=Oo(vd()),$e=Oo(_d()),$h=Oo(Ug()),Zg=Oo(Ed()),je=Oo(sa()),wE=_E(qg()),Jg=1e-5,Wh=.001,ME=(function(){function s(t){var e=this;t===void 0&&(t={}),this.learningRate=1,this.localConnectivity=1,this.minDist=.1,this.nComponents=2,this.nEpochs=0,this.nNeighbors=15,this.negativeSampleRate=5,this.random=Math.random,this.repulsionStrength=1,this.setOpMixRatio=1,this.spread=1,this.transformQueueSize=4,this.targetMetric="categorical",this.targetWeight=.5,this.targetNNeighbors=this.nNeighbors,this.distanceFn=ty,this.isInitialized=!1,this.rpForest=[],this.embedding=[],this.optimizationState=new EE;var n=function(i){t[i]!==void 0&&(e[i]=t[i])};n("distanceFn"),n("learningRate"),n("localConnectivity"),n("minDist"),n("nComponents"),n("nEpochs"),n("nNeighbors"),n("negativeSampleRate"),n("random"),n("repulsionStrength"),n("setOpMixRatio"),n("spread"),n("transformQueueSize")}return s.prototype.fit=function(t){return this.initializeFit(t),this.optimizeLayout(),this.embedding},s.prototype.fitAsync=function(t,e){return e===void 0&&(e=function(){return!0}),Xg(this,void 0,void 0,function(){return Yg(this,function(n){switch(n.label){case 0:return this.initializeFit(t),[4,this.optimizeLayoutAsync(e)];case 1:return n.sent(),[2,this.embedding]}})})},s.prototype.setSupervisedProjection=function(t,e){e===void 0&&(e={}),this.Y=t,this.targetMetric=e.targetMetric||this.targetMetric,this.targetWeight=e.targetWeight||this.targetWeight,this.targetNNeighbors=e.targetNNeighbors||this.targetNNeighbors},s.prototype.setPrecomputedKNN=function(t,e){this.knnIndices=t,this.knnDistances=e},s.prototype.initializeFit=function(t){if(t.length<=this.nNeighbors)throw new Error("Not enough data points ("+t.length+") to create nNeighbors: "+this.nNeighbors+".  Add more data points or adjust the configuration.");if(this.X===t&&this.isInitialized)return this.getNEpochs();if(this.X=t,!this.knnIndices&&!this.knnDistances){var e=this.nearestNeighbors(t);this.knnIndices=e.knnIndices,this.knnDistances=e.knnDistances}this.graph=this.fuzzySimplicialSet(t,this.nNeighbors,this.setOpMixRatio),this.makeSearchFns(),this.searchGraph=this.makeSearchGraph(t),this.processGraphForSupervisedProjection();var n=this.initializeSimplicialSetEmbedding(),i=n.head,r=n.tail,a=n.epochsPerSample;return this.optimizationState.head=i,this.optimizationState.tail=r,this.optimizationState.epochsPerSample=a,this.initializeOptimization(),this.prepareForOptimizationLoop(),this.isInitialized=!0,this.getNEpochs()},s.prototype.makeSearchFns=function(){var t=$h.makeInitializations(this.distanceFn),e=t.initFromTree,n=t.initFromRandom;this.initFromTree=e,this.initFromRandom=n,this.search=$h.makeInitializedNNSearch(this.distanceFn)},s.prototype.makeSearchGraph=function(t){for(var e=this.knnIndices,n=this.knnDistances,i=[t.length,t.length],r=new $e.SparseMatrix([],[],[],i),a=0;a<e.length;a++)for(var o=e[a],c=n[a],l=0;l<o.length;l++){var h=o[l],u=c[l];u>0&&r.set(a,h,u)}var f=$e.transpose(r);return $e.maximum(r,f)},s.prototype.transform=function(t){var e=this,n=this.X;if(n===void 0||n.length===0)throw new Error("No data has been fit.");var i=Math.floor(this.nNeighbors*this.transformQueueSize);i=Math.min(n.length,i);var r=$h.initializeSearch(this.rpForest,n,t,i,this.initFromRandom,this.initFromTree,this.random),a=this.search(n,this.searchGraph,r,t),o=bE.deheapSort(a),c=o.indices,l=o.weights;c=c.map(function(U){return U.slice(0,e.nNeighbors)}),l=l.map(function(U){return U.slice(0,e.nNeighbors)});var h=Math.max(0,this.localConnectivity-1),u=this.smoothKNNDistance(l,this.nNeighbors,h),f=u.sigmas,d=u.rhos,m=this.computeMembershipStrengths(c,l,f,d),y=m.rows,g=m.cols,p=m.vals,x=[t.length,n.length],w=new $e.SparseMatrix(y,g,p,x),v=$e.normalize(w,"l1"),M=$e.getCSR(v),E=t.length,T=je.reshape2d(M.indices,E,this.nNeighbors),_=je.reshape2d(M.values,E,this.nNeighbors),R=sy(T,_,this.embedding),b=this.nEpochs?this.nEpochs/3:w.nRows<=1e4?100:30,C=w.getValues().reduce(function(U,G){return G>U?G:U},0);w=w.map(function(U){return U<C/b?0:U}),w=$e.eliminateZeros(w);var P=this.makeEpochsPerSample(w.getValues(),b),I=w.getRows(),N=w.getCols();return this.assignOptimizationStateParameters({headEmbedding:R,tailEmbedding:this.embedding,head:I,tail:N,currentEpoch:0,nEpochs:b,nVertices:w.getDims()[1],epochsPerSample:P}),this.prepareForOptimizationLoop(),this.optimizeLayout()},s.prototype.processGraphForSupervisedProjection=function(){var t=this,e=t.Y,n=t.X;if(e){if(e.length!==n.length)throw new Error("Length of X and y must be equal");if(this.targetMetric==="categorical"){var i=this.targetWeight<1,r=i?2.5*(1/(1-this.targetWeight)):1e12;this.graph=this.categoricalSimplicialSetIntersection(this.graph,e,r)}}},s.prototype.step=function(){var t=this.optimizationState.currentEpoch;return t<this.getNEpochs()&&this.optimizeLayoutStep(t),this.optimizationState.currentEpoch},s.prototype.getEmbedding=function(){return this.embedding},s.prototype.nearestNeighbors=function(t){var e=this,n=e.distanceFn,i=e.nNeighbors,r=function(m){return Math.log(m)/Math.log(2)},a=$h.makeNNDescent(n,this.random),o=function(m){return m===.5?0:Math.round(m)},c=5+Math.floor(o(Math.pow(t.length,.5)/20)),l=Math.max(5,Math.floor(Math.round(r(t.length))));this.rpForest=Zg.makeForest(t,i,c,this.random);var h=Zg.makeLeafArray(this.rpForest),u=a(t,h,i,l),f=u.indices,d=u.weights;return{knnIndices:f,knnDistances:d}},s.prototype.fuzzySimplicialSet=function(t,e,n){n===void 0&&(n=1);var i=this,r=i.knnIndices,a=r===void 0?[]:r,o=i.knnDistances,c=o===void 0?[]:o,l=i.localConnectivity,h=this.smoothKNNDistance(c,e,l),u=h.sigmas,f=h.rhos,d=this.computeMembershipStrengths(a,c,u,f),m=d.rows,y=d.cols,g=d.vals,p=[t.length,t.length],x=new $e.SparseMatrix(m,y,g,p),w=$e.transpose(x),v=$e.pairwiseMultiply(x,w),M=$e.subtract($e.add(x,w),v),E=$e.multiplyScalar(M,n),T=$e.multiplyScalar(v,1-n),_=$e.add(E,T);return _},s.prototype.categoricalSimplicialSetIntersection=function(t,e,n,i){i===void 0&&(i=1);var r=ny(t,e,i,n);return r=$e.eliminateZeros(r),iy(r)},s.prototype.smoothKNNDistance=function(t,e,n,i,r){n===void 0&&(n=1),i===void 0&&(i=64),r===void 0&&(r=1);for(var a=Math.log(e)/Math.log(2)*r,o=je.zeros(t.length),c=je.zeros(t.length),l=0;l<t.length;l++){var h=0,u=1/0,f=1,d=t[l],m=d.filter(function(T){return T>0});if(m.length>=n){var y=Math.floor(n),g=n-y;y>0?(o[l]=m[y-1],g>Jg&&(o[l]+=g*(m[y]-m[y-1]))):o[l]=g*m[0]}else m.length>0&&(o[l]=je.max(m));for(var p=0;p<i;p++){for(var x=0,w=1;w<t[l].length;w++){var v=t[l][w]-o[l];v>0?x+=Math.exp(-(v/f)):x+=1}if(Math.abs(x-a)<Jg)break;x>a?(u=f,f=(h+u)/2):(h=f,u===1/0?f*=2:f=(h+u)/2)}if(c[l]=f,o[l]>0){var M=je.mean(d);c[l]<Wh*M&&(c[l]=Wh*M)}else{var E=je.mean(t.map(je.mean));c[l]<Wh*E&&(c[l]=Wh*E)}}return{sigmas:c,rhos:o}},s.prototype.computeMembershipStrengths=function(t,e,n,i){for(var r=t.length,a=t[0].length,o=je.zeros(r*a),c=je.zeros(r*a),l=je.zeros(r*a),h=0;h<r;h++)for(var u=0;u<a;u++){var f=0;t[h][u]!==-1&&(t[h][u]===h?f=0:e[h][u]-i[h]<=0?f=1:f=Math.exp(-((e[h][u]-i[h])/n[h])),o[h*a+u]=h,c[h*a+u]=t[h][u],l[h*a+u]=f)}return{rows:o,cols:c,vals:l}},s.prototype.initializeSimplicialSetEmbedding=function(){for(var t=this,e=this.getNEpochs(),n=this.nComponents,i=this.graph.getValues(),r=0,a=0;a<i.length;a++){var o=i[a];r<i[a]&&(r=o)}var c=this.graph.map(function(y){return y<r/e?0:y});this.embedding=je.zeros(c.nRows).map(function(){return je.zeros(n).map(function(){return je.tauRand(t.random)*20+-10})});for(var l=[],h=[],u=[],f=c.getAll(),a=0;a<f.length;a++){var d=f[a];d.value&&(l.push(d.value),u.push(d.row),h.push(d.col))}var m=this.makeEpochsPerSample(l,e);return{head:h,tail:u,epochsPerSample:m}},s.prototype.makeEpochsPerSample=function(t,e){var n=je.filled(t.length,-1),i=je.max(t),r=t.map(function(a){return a/i*e});return r.forEach(function(a,o){a>0&&(n[o]=e/r[o])}),n},s.prototype.assignOptimizationStateParameters=function(t){Object.assign(this.optimizationState,t)},s.prototype.prepareForOptimizationLoop=function(){var t=this,e=t.repulsionStrength,n=t.learningRate,i=t.negativeSampleRate,r=this.optimizationState,a=r.epochsPerSample,o=r.headEmbedding,c=r.tailEmbedding,l=o[0].length,h=o.length===c.length,u=a.map(function(m){return m/i}),f=jg(u),d=jg(a);this.assignOptimizationStateParameters({epochOfNextSample:d,epochOfNextNegativeSample:f,epochsPerNegativeSample:u,moveOther:h,initialAlpha:n,alpha:n,gamma:e,dim:l})},s.prototype.initializeOptimization=function(){var t=this.embedding,e=this.embedding,n=this.optimizationState,i=n.head,r=n.tail,a=n.epochsPerSample,o=this.getNEpochs(),c=this.graph.nCols,l=ey(this.spread,this.minDist),h=l.a,u=l.b;this.assignOptimizationStateParameters({headEmbedding:t,tailEmbedding:e,head:i,tail:r,epochsPerSample:a,a:h,b:u,nEpochs:o,nVertices:c})},s.prototype.optimizeLayoutStep=function(t){for(var e=this.optimizationState,n=e.head,i=e.tail,r=e.headEmbedding,a=e.tailEmbedding,o=e.epochsPerSample,c=e.epochOfNextSample,l=e.epochOfNextNegativeSample,h=e.epochsPerNegativeSample,u=e.moveOther,f=e.initialAlpha,d=e.alpha,m=e.gamma,y=e.a,g=e.b,p=e.dim,x=e.nEpochs,w=e.nVertices,v=4,M=0;M<o.length;M++)if(!(c[M]>t)){var E=n[M],T=i[M],_=r[E],R=a[T],b=Qg(_,R),C=0;b>0&&(C=-2*y*g*Math.pow(b,g-1),C/=y*Math.pow(b,g)+1);for(var P=0;P<p;P++){var I=Kg(C*(_[P]-R[P]),v);_[P]+=I*d,u&&(R[P]+=-I*d)}c[M]+=o[M];for(var N=Math.floor((t-l[M])/h[M]),U=0;U<N;U++){var G=je.tauRandInt(w,this.random),H=a[G],j=Qg(_,H),q=0;if(j>0)q=2*m*g,q/=(.001+j)*(y*Math.pow(j,g)+1);else if(E===G)continue;for(var P=0;P<p;P++){var I=4;q>0&&(I=Kg(q*(_[P]-H[P]),v)),_[P]+=I*d}}l[M]+=N*h[M]}return e.alpha=f*(1-t/x),e.currentEpoch+=1,r},s.prototype.optimizeLayoutAsync=function(t){var e=this;return t===void 0&&(t=function(){return!0}),new Promise(function(n,i){var r=function(){return Xg(e,void 0,void 0,function(){var a,o,c,l,h,u;return Yg(this,function(f){try{if(a=this.optimizationState,o=a.nEpochs,c=a.currentEpoch,this.embedding=this.optimizeLayoutStep(c),l=this.optimizationState.currentEpoch,h=t(l)===!1,u=l===o,!h&&!u)setTimeout(function(){return r()},0);else return[2,n(u)]}catch(d){i(d)}return[2]})})};setTimeout(function(){return r()},0)})},s.prototype.optimizeLayout=function(t){t===void 0&&(t=function(){return!0});for(var e=!1,n=[];!e;){var i=this.optimizationState,r=i.nEpochs,a=i.currentEpoch;n=this.optimizeLayoutStep(a);var o=this.optimizationState.currentEpoch,c=t(o)===!1;e=o===r||c}return n},s.prototype.getNEpochs=function(){var t=this.graph;if(this.nEpochs>0)return this.nEpochs;var e=t.nRows;return e<=2500?500:e<=5e3?400:e<=7500?300:200},s})();me.UMAP=ME;function ty(s,t){for(var e=0,n=0;n<s.length;n++)e+=Math.pow(s[n]-t[n],2);return Math.sqrt(e)}me.euclidean=ty;function SE(s,t){for(var e=0,n=0,i=0,r=0;r<s.length;r++)e+=s[r]*t[r],n+=Math.pow(s[r],2),i+=Math.pow(t[r],2);return n===0&&i===0?0:n===0||i===0?1:1-e/Math.sqrt(n*i)}me.cosine=SE;var EE=(function(){function s(){this.currentEpoch=0,this.headEmbedding=[],this.tailEmbedding=[],this.head=[],this.tail=[],this.epochsPerSample=[],this.epochOfNextSample=[],this.epochOfNextNegativeSample=[],this.epochsPerNegativeSample=[],this.moveOther=!0,this.initialAlpha=1,this.alpha=1,this.gamma=1,this.a=1.5769434603113077,this.b=.8950608779109733,this.dim=2,this.nEpochs=500,this.nVertices=0}return s})();function Kg(s,t){return s>t?t:s<-t?-t:s}function Qg(s,t){for(var e=0,n=0;n<s.length;n++)e+=Math.pow(s[n]-t[n],2);return e}function ey(s,t){var e=function(f){var d=Vd(f,2),m=d[0],y=d[1];return function(g){return 1/(1+m*Math.pow(g,2*y))}},n=je.linear(0,s*3,300).map(function(f){return f<t?1:f}),i=je.zeros(n.length).map(function(f,d){var m=n[d]>=t;return m?Math.exp(-(n[d]-t)/s):f}),r=[.5,.5],a={x:n,y:i},o={damping:1.5,initialValues:r,gradientDifference:.1,maxIterations:100,errorTolerance:.01},c=wE.default(a,e,o).parameterValues,l=Vd(c,2),h=l[0],u=l[1];return{a:h,b:u}}me.findABParams=ey;function ny(s,t,e,n){return e===void 0&&(e=1),n===void 0&&(n=5),s.map(function(i,r,a){return t[r]===-1||t[a]===-1?i*Math.exp(-e):t[r]!==t[a]?i*Math.exp(-n):i})}me.fastIntersection=ny;function iy(s){s=$e.normalize(s,"max");var t=$e.transpose(s),e=$e.pairwiseMultiply(t,s);return s=$e.add(s,$e.subtract(t,e)),$e.eliminateZeros(s)}me.resetLocalConnectivity=iy;function sy(s,t,e){for(var n=je.zeros(s.length).map(function(c){return je.zeros(e[0].length)}),i=0;i<s.length;i++)for(var r=0;r<s[0].length;r++)for(var a=0;a<e[0].length;a++){var o=s[i][r];n[i][a]+=t[i][r]*e[o][a]}return n}me.initTransform=sy});var ay=yi(Gd=>{"use strict";Object.defineProperty(Gd,"__esModule",{value:!0});var TE=ry();Object.defineProperty(Gd,"UMAP",{enumerable:!0,get:function(){return TE.UMAP}})});var Yp=0,Hu=1,jp=2;var Ya=1,Zp=2,Vr=3,ys=0,hn=1,an=2,Ri=0,Gr=1,zn=2,$u=3,Wu=4,Jp=5;var Hs=100,Kp=101,Qp=102,tm=103,em=104,nm=200,im=201,sm=202,rm=203,qu=204,Xu=205,am=206,om=207,lm=208,cm=209,hm=210,um=211,fm=212,dm=213,pm=214,_l=0,bl=1,wl=2,Rr=3,Ml=4,Sl=5,El=6,Tl=7,Yu=0,mm=1,gm=2,ai=0,ju=1,Zu=2,Ju=3,Ku=4,Qu=5,tf=6,ef=7;var nf=300,xs=301,$s=302,nc=303,ic=304,ja=306,Al=1e3,bi=1001,Rl=1002,Xe=1003,ym=1004;var Za=1005;var Ye=1006,sc=1007;var Ci=1008;var Vn=1009,sf=1010,rf=1011,Hr=1012,rc=1013,oi=1014,Yn=1015,li=1016,ac=1017,oc=1018,$r=1020,af=35902,of=35899,lf=1021,cf=1022,jn=1023,wi=1026,vs=1027,lc=1028,cc=1029,_s=1030,hc=1031;var uc=1033,Ja=33776,Ka=33777,Qa=33778,to=33779,fc=35840,dc=35841,pc=35842,mc=35843,gc=36196,yc=37492,xc=37496,vc=37488,_c=37489,eo=37490,bc=37491,wc=37808,Mc=37809,Sc=37810,Ec=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Lc=37818,Nc=37819,Dc=37820,Uc=37821,Fc=36492,Oc=36494,Bc=36495,kc=36283,zc=36284,no=36285,Vc=36286;var Ia=2300,Cl=2301,yl=2302,Uu=2303,Fu=2400,Ou=2401,Bu=2402;var xm=3200;var hf=0,vm=1,Hi="",qe="srgb",La="srgb-linear",Na="linear",ve="srgb";var xl=7680;var _m=519,bm=512,wm=513,Mm=514,Gc=515,Sm=516,Em=517,Hc=518,Tm=519,uf=35044;var ff="300 es",si=2e3,Da=2001;function Wy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Am(){let s=Cr("canvas");return s.style.display="block",s}var xp={},Pr=null;function Ua(...s){let t="THREE."+s.shift();Pr?Pr("log",t,...s):console.log(t,...s)}function Rm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=Rm(s);let t="THREE."+s.shift();if(Pr)Pr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Vt(...s){s=Rm(s);let t="THREE."+s.shift();if(Pr)Pr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Fs(...s){let t=s.join(" ");t in xp||(xp[t]=!0,Gt(...s))}function Cm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Pm={[_l]:bl,[wl]:El,[Ml]:Tl,[Rr]:Sl,[bl]:_l,[El]:wl,[Tl]:Ml,[Sl]:Rr},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uu=Math.PI/180,Pl=180/Math.PI;function ls(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function Xy(s,t){return(s%t+t)%t}function fu(s,t,e){return(1-e)*s+e*t}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yf=class yf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yf.prototype.isVector2=!0;var Ht=yf,Pn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],y=r[a+3];if(u!==y||c!==f||l!==d||h!==m){let g=c*f+l*d+h*m+u*y;g<0&&(f=-f,d=-d,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),w=Math.sin(x);p=Math.sin(p*x)/w,o=Math.sin(o*x)/w,c=c*p+f*o,l=l*p+d*o,h=h*p+m*o,u=u*p+y*o}else{c=c*p+f*o,l=l*p+d*o,h=h*p+m*o,u=u*p+y*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-o*d,t[e+2]=l*m+h*d+o*f-c*u,t[e+3]=h*m-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xf=class xf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return du.copy(this).projectOnVector(t),this.sub(du)}reflect(t){return this.sub(du.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xf.prototype.isVector3=!0;var D=xf,du=new D,vp=new Pn,vf=class vf{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],y=i[0],g=i[3],p=i[6],x=i[1],w=i[4],v=i[7],M=i[2],E=i[5],T=i[8];return r[0]=a*y+o*x+c*M,r[3]=a*g+o*w+c*E,r[6]=a*p+o*v+c*T,r[1]=l*y+h*x+u*M,r[4]=l*g+h*w+u*E,r[7]=l*p+h*v+u*T,r[2]=f*y+d*x+m*M,r[5]=f*g+d*w+m*E,r[8]=f*p+d*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(i*l-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=f*y,t[4]=(h*e-i*c)*y,t[5]=(i*r-o*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pu.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pu.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vf.prototype.isMatrix3=!0;var qt=vf,pu=new qt,_p=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){let s={enabled:!0,workingColorSpace:La,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?Na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[La]:{primaries:t,whitePoint:n,transfer:Na,toXYZ:_p,fromXYZ:bp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:_p,fromXYZ:bp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),s}var le=Yy();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var lr,Il=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=Cr("canvas")),lr.width=t.width,lr.height=t.height;let i=lr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=lr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jy=0,Ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(mu(i[a].image)):r.push(mu(i[a]))}else r=mu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function mu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Il.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Zy=0,gu=new D,gn=class s extends Mi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=bi,i=bi,r=Ye,a=Ci,o=jn,c=Vn,l=s.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=ls(),this.name="",this.source=new Ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=nf;gn.DEFAULT_ANISOTROPY=1;var _f=class _f{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(d+1)/2,M=(p+1)/2,E=(h+f)/4,T=(u+y)/4,_=(m+g)/4;return w>v&&w>M?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=T/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=_/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=T/r,i=_/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-y)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;var ke=_f,Ll=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new gn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ir(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ec=class ec{constructor(t,e,n,i,r,a,o,c,l,h,u,f,d,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,d,m,y,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,d,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),a=1/cr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-y*l,e[9]=-o*c,e[2]=y-f*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,m=l*h,y=l*u;e[0]=f+y*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=y+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,m=l*h,y=l*u;e[0]=f-y*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,y=o*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,m=o*c,y=o*l;e[0]=c*h,e[4]=y-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*c,d=a*l,m=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jy,t,Ky)}lookAt(t,e,n){let i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),is.crossVectors(n,Dn),is.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),is.crossVectors(n,Dn)),is.normalize(),$o.crossVectors(Dn,is),i[0]=is.x,i[4]=$o.x,i[8]=Dn.x,i[1]=is.y,i[5]=$o.y,i[9]=Dn.y,i[2]=is.z,i[6]=$o.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],y=n[6],g=n[10],p=n[14],x=n[3],w=n[7],v=n[11],M=n[15],E=i[0],T=i[4],_=i[8],R=i[12],b=i[1],C=i[5],P=i[9],I=i[13],N=i[2],U=i[6],G=i[10],H=i[14],j=i[3],q=i[7],J=i[11],et=i[15];return r[0]=a*E+o*b+c*N+l*j,r[4]=a*T+o*C+c*U+l*q,r[8]=a*_+o*P+c*G+l*J,r[12]=a*R+o*I+c*H+l*et,r[1]=h*E+u*b+f*N+d*j,r[5]=h*T+u*C+f*U+d*q,r[9]=h*_+u*P+f*G+d*J,r[13]=h*R+u*I+f*H+d*et,r[2]=m*E+y*b+g*N+p*j,r[6]=m*T+y*C+g*U+p*q,r[10]=m*_+y*P+g*G+p*J,r[14]=m*R+y*I+g*H+p*et,r[3]=x*E+w*b+v*N+M*j,r[7]=x*T+w*C+v*U+M*q,r[11]=x*_+w*P+v*G+M*J,r[15]=x*R+w*I+v*H+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],y=t[7],g=t[11],p=t[15],x=c*d-l*f,w=o*d-l*u,v=o*f-c*u,M=a*d-l*h,E=a*f-c*h,T=a*u-o*h;return e*(y*x-g*w+p*v)-n*(m*x-g*M+p*E)+i*(m*w-y*M+p*T)-r*(m*v-y*E+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],y=t[13],g=t[14],p=t[15],x=e*o-n*a,w=e*c-i*a,v=e*l-r*a,M=n*c-i*o,E=n*l-r*o,T=i*l-r*c,_=h*y-u*m,R=h*g-f*m,b=h*p-d*m,C=u*g-f*y,P=u*p-d*y,I=f*p-d*g,N=x*I-w*P+v*C+M*b-E*R+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return t[0]=(o*I-c*P+l*C)*U,t[1]=(i*P-n*I-r*C)*U,t[2]=(y*T-g*E+p*M)*U,t[3]=(f*E-u*T-d*M)*U,t[4]=(c*b-a*I-l*R)*U,t[5]=(e*I-i*b+r*R)*U,t[6]=(g*v-m*T-p*w)*U,t[7]=(h*T-f*v+d*w)*U,t[8]=(a*P-o*b+l*_)*U,t[9]=(n*b-e*P-r*_)*U,t[10]=(m*E-y*v+p*x)*U,t[11]=(u*v-h*E-d*x)*U,t[12]=(o*R-a*C-c*_)*U,t[13]=(e*C-n*R+i*_)*U,t[14]=(y*w-m*M-g*x)*U,t[15]=(h*M-u*w+f*x)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,y=a*h,g=a*u,p=o*u,x=c*l,w=c*h,v=c*u,M=n.x,E=n.y,T=n.z;return i[0]=(1-(y+p))*M,i[1]=(d+v)*M,i[2]=(m-w)*M,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+w)*T,i[9]=(g-x)*T,i[10]=(1-(f+y))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=cr.set(i[0],i[1],i[2]).length(),o=cr.set(i[4],i[5],i[6]).length(),c=cr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ei.copy(this);let l=1/a,h=1/o,u=1/c;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=si,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),m,y;if(c)m=r/(a-r),y=a*r/(a-r);else if(o===si)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Da)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=si,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),m,y;if(c)m=1/(a-r),y=a/(a-r);else if(o===si)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Da)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ec.prototype.isMatrix4=!0;var pe=ec,cr=new D,ei=new pe,Jy=new D(0,0,0),Ky=new D(1,1,1),is=new D,$o=new D,Dn=new D,wp=new pe,Mp=new Pn,On=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qy=0,Sp=new D,hr=new Pn,Fi=new pe,Wo=new D,ba=new D,tx=new D,ex=new Pn,Ep=new D(1,0,0),Tp=new D(0,1,0),Ap=new D(0,0,1),Rp={type:"added"},nx={type:"removed"},ur={type:"childadded",child:null},yu={type:"childremoved",child:null},En=class s extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new On,n=new Pn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Ep,t)}rotateY(t){return this.rotateOnAxis(Tp,t)}rotateZ(t){return this.rotateOnAxis(Ap,t)}translateOnAxis(t,e){return Sp.copy(t).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ep,t)}translateY(t){return this.translateOnAxis(Tp,t)}translateZ(t){return this.translateOnAxis(Ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(ba,Wo,this.up):Fi.lookAt(Wo,ba,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Fi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rp),ur.child=t,this.dispatchEvent(ur),ur.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nx),yu.child=t,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rp),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,t,tx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new D(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},qo={h:0,s:0,l:0};function xu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Xy(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xu(a,r,t+1/3),this.g=xu(a,r,t),this.b=xu(a,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Im[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return le.workingToColorSpace(pn.copy(this),t),Math.round(ce(pn.r*255,0,255))*65536+Math.round(ce(pn.g*255,0,255))*256+Math.round(ce(pn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,r=pn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=qe){le.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,i=pn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(qo);let n=fu(ss.h,qo.h,e),i=fu(ss.s,qo.s,e),r=fu(ss.l,qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Kt;Kt.NAMES=Im;var Dr=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ni=new D,Oi=new D,vu=new D,Bi=new D,fr=new D,dr=new D,Cp=new D,_u=new D,bu=new D,wu=new D,Mu=new ke,Su=new ke,Eu=new ke,Vi=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ni.subVectors(t,e),i.cross(ni);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ni.subVectors(i,e),Oi.subVectors(n,e),vu.subVectors(t,e);let a=ni.dot(ni),o=ni.dot(Oi),c=ni.dot(vu),l=Oi.dot(Oi),h=Oi.dot(vu),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(a,Bi.y),c.addScaledVector(o,Bi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Mu.setScalar(0),Su.setScalar(0),Eu.setScalar(0),Mu.fromBufferAttribute(t,e),Su.fromBufferAttribute(t,n),Eu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Mu,r.x),a.addScaledVector(Su,r.y),a.addScaledVector(Eu,r.z),a}static isFrontFacing(t,e,n,i){return ni.subVectors(n,e),Oi.subVectors(t,e),ni.cross(Oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;fr.subVectors(i,n),dr.subVectors(r,n),_u.subVectors(t,n);let c=fr.dot(_u),l=dr.dot(_u);if(c<=0&&l<=0)return e.copy(n);bu.subVectors(t,i);let h=fr.dot(bu),u=dr.dot(bu);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(fr,a);wu.subVectors(t,r);let d=fr.dot(wu),m=dr.dot(wu);if(m>=0&&d<=m)return e.copy(r);let y=d*l-c*m;if(y<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(dr,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Cp.subVectors(r,i),o=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Cp,o);let p=1/(g+y+f);return a=y*p,o=f*p,e.copy(n).addScaledVector(fr,a).addScaledVector(dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),Yo.subVectors(this.max,wa),pr.subVectors(t.a,wa),mr.subVectors(t.b,wa),gr.subVectors(t.c,wa),rs.subVectors(mr,pr),as.subVectors(gr,mr),Ls.subVectors(pr,gr);let e=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Ls.z,Ls.y,rs.z,0,-rs.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-rs.y,rs.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!Tu(e,pr,mr,gr,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Tu(e,pr,mr,gr,Yo))?!1:(jo.crossVectors(rs,as),e=[jo.x,jo.y,jo.z],Tu(e,pr,mr,gr,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new D,new D,new D,new D,new D,new D,new D,new D],ii=new D,Xo=new Si,pr=new D,mr=new D,gr=new D,rs=new D,as=new D,Ls=new D,wa=new D,Yo=new D,jo=new D,Ns=new D;function Tu(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ns.fromArray(s,r);let o=i.x*Math.abs(Ns.x)+i.y*Math.abs(Ns.y)+i.z*Math.abs(Ns.z),c=t.dot(Ns),l=e.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Qe=new D,Zo=new Ht,sx=0,Ue=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ba=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},rx=new Si,Ma=new D,Au=new D,Ei=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);let e=Ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(Au)),this.expandByPoint(Ma.copy(t.center).sub(Au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ax=0,qn=new pe,Ru=new En,yr=new D,Un=new Si,Sa=new Si,rn=new D,Re=class s extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wy(t)?Ba:Oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Ru.lookAt(t),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Un.min,Sa.min),Un.expandByPoint(rn),rn.addVectors(Un.max,Sa.max),Un.expandByPoint(rn)):(Un.expandByPoint(Sa.min),Un.expandByPoint(Sa.max))}Un.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)rn.fromBufferAttribute(o,l),c&&(yr.fromBufferAttribute(t,l),rn.add(yr)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new D,c[_]=new D;let l=new D,h=new D,u=new D,f=new Ht,d=new Ht,m=new Ht,y=new D,g=new D;function p(_,R,b){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),o[_].add(y),o[R].add(y),o[b].add(y),c[_].add(g),c[R].add(g),c[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,R=x.length;_<R;++_){let b=x[_],C=b.start,P=b.count;for(let I=C,N=C+P;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let w=new D,v=new D,M=new D,E=new D;function T(_){M.fromBufferAttribute(i,_),E.copy(M);let R=o[_];w.copy(R),w.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(E,R);let C=v.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,R=x.length;_<R;++_){let b=x[_],C=b.start,P=b.count;for(let I=C,N=C+P;I<N;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),y=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Ue(f,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new D,ka=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cu=new D,ox=new D,lx=new qt,Fn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Cu.subVectors(n,e).cross(ox.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lx.getNormalMatrix(t),i=this.coplanarPoint(Cu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cx=0,Ti=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Gr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Xu,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Os=class extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xr,Ea=new D,vr=new D,_r=new D,br=new Ht,Ta=new Ht,Lm=new pe,Jo=new D,Aa=new D,Ko=new D,Pp=new Ht,Pu=new Ht,Ip=new Ht,Ur=class extends En{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dl(e,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new ka(n,3,0,!1)),xr.setAttribute("uv",new ka(n,2,3,!1))}this.geometry=xr,this.material=t,this.center=new Ht(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),Lm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-_r.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Qo(Jo.set(-.5,-.5,0),_r,a,vr,i,r),Qo(Aa.set(.5,-.5,0),_r,a,vr,i,r),Qo(Ko.set(.5,.5,0),_r,a,vr,i,r),Pp.set(0,0),Pu.set(1,0),Ip.set(1,1);let o=t.ray.intersectTriangle(Jo,Aa,Ko,!1,Ea);if(o===null&&(Qo(Aa.set(-.5,.5,0),_r,a,vr,i,r),Pu.set(0,1),o=t.ray.intersectTriangle(Jo,Ko,Aa,!1,Ea),o===null))return;let c=t.ray.origin.distanceTo(Ea);c<t.near||c>t.far||e.push({distance:c,point:Ea.clone(),uv:Vi.getInterpolation(Ea,Jo,Aa,Ko,Pp,Pu,Ip,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Qo(s,t,e,n,i,r){br.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ta.x=r*br.x-i*br.y,Ta.y=i*br.x+r*br.y):Ta.copy(br),s.copy(t),s.x+=Ta.x,s.y+=Ta.y,s.applyMatrix4(Lm)}var zi=new D,Iu=new D,tl=new D,el=new D,Bs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Iu.copy(t).add(e).multiplyScalar(.5),tl.copy(e).sub(t).normalize(),el.copy(this.origin).sub(Iu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tl),o=el.dot(this.direction),c=-el.dot(tl),l=el.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Iu).addScaledVector(tl,f),d}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),i=zi.dot(zi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=n.x-a.x,x=n.y-a.y,w=n.z-a.z,v=Math.abs(c),M=Math.abs(l),E=Math.abs(h),T,_,R,b,C,P,I,N,U,G,H,j;if(v>=M&&v>=E?(R=c,P=u,U=m,j=p,c>=0?(T=l,_=h,b=f,C=d,I=y,N=g,G=x,H=w):(T=h,_=l,b=d,C=f,I=g,N=y,G=w,H=x)):M>=E?(R=l,P=f,U=y,j=x,l>=0?(T=h,_=c,b=d,C=u,I=g,N=m,G=w,H=p):(T=c,_=h,b=u,C=d,I=m,N=g,G=p,H=w)):(R=h,P=d,U=g,j=w,h>=0?(T=c,_=l,b=u,C=f,I=m,N=y,G=p,H=x):(T=l,_=c,b=f,C=u,I=y,N=m,G=x,H=p)),R===0)return null;let q=T/R,J=_/R,et=1/R,X=b-q*P,z=C-J*P,at=I-q*U,ct=N-J*U,ft=G-q*j,k=H-J*j,K=ft*ct-k*at,xt=X*k-z*ft,kt=at*z-ct*X;if(i){if(K<0||xt<0||kt<0)return null}else if((K<0||xt<0||kt<0)&&(K>0||xt>0||kt>0))return null;let Mt=K+xt+kt;if(Mt===0)return null;let Xt=et*(K*P+xt*U+kt*j);return(Mt>0?Xt<0:Xt>0)?null:this.at(Xt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lp=new pe,Ds=new Bs,nl=new Ei,Np=new D,il=new D,sl=new D,rl=new D,Lu=new D,al=new D,Dp=new D,ol=new D,ae=class extends En{constructor(t=new Re,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){al.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Lu.fromBufferAttribute(u,t),a?al.addScaledVector(Lu,h):al.addScaledVector(Lu.sub(e),h))}e.add(al)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(nl.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(nl,Np)===null||Ds.origin.distanceToSquared(Np)>(t.far-t.near)**2))&&(Lp.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Lp),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=w;v<M;v+=3){let E=o.getX(v),T=o.getX(v+1),_=o.getX(v+2);i=ll(this,p,t,n,l,h,u,E,T,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let x=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=ll(this,a,t,n,l,h,u,x,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),w=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=w;v<M;v+=3){let E=v,T=v+1,_=v+2;i=ll(this,p,t,n,l,h,u,E,T,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let x=g,w=g+1,v=g+2;i=ll(this,a,t,n,l,h,u,x,w,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function hx(s,t,e,n,i,r,a,o){let c;if(t.side===hn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===ys,o),c===null)return null;ol.copy(o),ol.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ol);return l<e.near||l>e.far?null:{distance:l,point:ol.clone(),object:s}}function ll(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,il),s.getVertexPosition(c,sl),s.getVertexPosition(l,rl);let h=hx(s,t,e,n,il,sl,rl,Dp);if(h){let u=new D;Vi.getBarycoord(Dp,il,sl,rl,u),i&&(h.uv=Vi.getInterpolatedAttribute(i,o,c,l,u,new Ht)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,c,l,u,new Ht)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};Vi.getNormal(il,sl,rl,f.normal),h.face=f,h.barycoord=u}return h}var ri=class extends gn{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Xe,h=Xe,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=class extends Ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},wr=new pe,Up=new pe,cl=[],Fp=new Si,ux=new pe,Ra=new ae,Ca=new Ei,cs=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),Fp.copy(t.boundingBox).applyMatrix4(wr),this.boundingBox.union(Fp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),Ca.copy(t.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Ca)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),t.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wr),Up.multiplyMatrices(n,wr),Ra.matrixWorld=Up,Ra.raycast(t,cl);for(let a=0,o=cl.length;a<o;a++){let c=cl[a];c.instanceId=r,c.object=this,e.push(c)}cl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(i*this.count),i,this.count,lc,Yn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new Ei,fx=new Ht(.5,.5),hl=new D,za=class{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],y=r[9],g=r[10],p=r[11],x=r[12],w=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-a,d-h,p-m,M-x).normalize(),i[1].setComponents(l+a,d+h,p+m,M+x).normalize(),i[2].setComponents(l+o,d+u,p+y,M+w).normalize(),i[3].setComponents(l-o,d-u,p-y,M-w).normalize(),n)i[4].setComponents(c,f,g,v).normalize(),i[5].setComponents(l-c,d-f,p-g,M-v).normalize();else if(i[4].setComponents(l-c,d-f,p-g,M-v).normalize(),e===si)i[5].setComponents(l+c,d+f,p+g,M+v).normalize();else if(e===Da)i[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);let e=fx.distanceTo(t.center);return Us.radius=.7071067811865476+e,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(hl.x=i.normal.x>0?t.max.x:t.min.x,hl.y=i.normal.y>0?t.max.y:t.min.y,hl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hs=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ul=new D,Fl=new D,Op=new pe,Pa=new Bs,ul=new Ei,Nu=new D,Bp=new D,ks=class extends En{constructor(t=new Re,e=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ul.fromBufferAttribute(e,i-1),Fl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ul.distanceTo(Fl);t.setAttribute("lineDistance",new _e(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(i),ul.radius+=r,t.ray.intersectsSphere(ul)===!1)return;Op.copy(i).invert(),Pa.copy(t.ray).applyMatrix4(Op);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=d,g=m-1;y<g;y+=l){let p=h.getX(y),x=h.getX(y+1),w=fl(this,t,Pa,c,p,x,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(m-1),g=h.getX(d),p=fl(this,t,Pa,c,y,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let y=d,g=m-1;y<g;y+=l){let p=fl(this,t,Pa,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=fl(this,t,Pa,c,m-1,d,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fl(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Ul.fromBufferAttribute(o,i),Fl.fromBufferAttribute(o,r),e.distanceSqToSegment(Ul,Fl,Nu,Bp)>n)return;Nu.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Nu);if(!(l<t.near||l>t.far))return{distance:l,point:Bp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Fr=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kp=new pe,ku=new Bs,dl=new Ei,pl=new D,zs=class extends En{constructor(t=new Re,e=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(i),dl.radius+=r,t.ray.intersectsSphere(dl)===!1)return;kp.copy(i).invert(),ku.copy(t.ray).applyMatrix4(kp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,y=d;m<y;m++){let g=l.getX(m);pl.fromBufferAttribute(u,g),zp(pl,g,c,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,y=d;m<y;m++)pl.fromBufferAttribute(u,m),zp(pl,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zp(s,t,e,n,i,r,a){let o=ku.distanceSqToPoint(s);if(o<e){let c=new D;ku.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Va=class extends gn{constructor(t=[],e=xs,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Or=class extends gn{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends gn{constructor(t,e,n=oi,i,r,a,o=Xe,c=Xe,l,h=wi,u=1){if(h!==wi&&h!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ol=class extends us{constructor(t,e=oi,n=xs,i,r,a=Xe,o=Xe,c,l=wi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ga=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Bn=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function m(y,g,p,x,w,v,M,E,T,_,R){let b=v/T,C=M/_,P=v/2,I=M/2,N=E/2,U=T+1,G=_+1,H=0,j=0,q=new D;for(let J=0;J<G;J++){let et=J*C-I;for(let X=0;X<U;X++){let z=X*b-P;q[y]=z*x,q[g]=et*w,q[p]=N,l.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(X/T),u.push(1-J/_),H+=1}}for(let J=0;J<_;J++)for(let et=0;et<T;et++){let X=f+et+U*J,z=f+et+U*(J+1),at=f+(et+1)+U*(J+1),ct=f+(et+1)+U*J;c.push(X,z,ct),c.push(z,at,ct),j+=6}o.addGroup(d,j,R),d+=j,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fs=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new D,h=new Ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bl=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,y=[],g=n/2,p=0;x(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function x(){let v=new D,M=new D,E=0,T=(e-t)/n;for(let _=0;_<=r;_++){let R=[],b=_/r,C=b*(e-t)+t;for(let P=0;P<=i;P++){let I=P/i,N=I*c+o,U=Math.sin(N),G=Math.cos(N);M.x=C*U,M.y=-b*n+g,M.z=C*G,u.push(M.x,M.y,M.z),v.set(U,T,G).normalize(),f.push(v.x,v.y,v.z),d.push(I,1-b),R.push(m++)}y.push(R)}for(let _=0;_<i;_++)for(let R=0;R<r;R++){let b=y[R][_],C=y[R+1][_],P=y[R+1][_+1],I=y[R][_+1];(t>0||R!==0)&&(h.push(b,C,I),E+=3),(e>0||R!==r-1)&&(h.push(C,P,I),E+=3)}l.addGroup(p,E,0),p+=E}function w(v){let M=m,E=new Ht,T=new D,_=0,R=v===!0?t:e,b=v===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;let C=m;for(let P=0;P<=i;P++){let N=P/i*c+o,U=Math.cos(N),G=Math.sin(N);T.x=R*G,T.y=g*b,T.z=R*U,u.push(T.x,T.y,T.z),f.push(0,b,0),E.x=U*.5+.5,E.y=G*.5*b+.5,d.push(E.x,E.y),m++}for(let P=0;P<i;P++){let I=M+P,N=C+P;v===!0?h.push(N,N+1,I):h.push(N+1,N,I),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class s extends Bl{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},kl=class s extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let w=new D,v=new D,M=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],w),d(e[E+1],v),d(e[E+2],M),c(w,v,M,x)}function c(x,w,v,M){let E=M+1,T=[];for(let _=0;_<=E;_++){T[_]=[];let R=x.clone().lerp(v,_/E),b=w.clone().lerp(v,_/E),C=E-_;for(let P=0;P<=C;P++)P===0&&_===E?T[_][P]=R:T[_][P]=R.clone().lerp(b,P/C)}for(let _=0;_<E;_++)for(let R=0;R<2*(E-_)-1;R++){let b=Math.floor(R/2);R%2===0?(f(T[_][b+1]),f(T[_+1][b]),f(T[_][b])):(f(T[_][b+1]),f(T[_+1][b+1]),f(T[_+1][b]))}}function l(x){let w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(x),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let x=new D;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];let v=g(x)/2/Math.PI+.5,M=p(x)/Math.PI+.5;a.push(v,1-M)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let w=a[x+0],v=a[x+2],M=a[x+4],E=Math.max(w,v,M),T=Math.min(w,v,M);E>.9&&T<.1&&(w<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),M<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,w){let v=x*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function m(){let x=new D,w=new D,v=new D,M=new D,E=new Ht,T=new Ht,_=new Ht;for(let R=0,b=0;R<r.length;R+=9,b+=6){x.set(r[R+0],r[R+1],r[R+2]),w.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),E.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),_.set(a[b+4],a[b+5]),M.copy(x).add(w).add(v).divideScalar(3);let C=g(M);y(E,b+0,x,C),y(T,b+2,w,C),y(_,b+4,v,C)}}function y(x,w,v,M){M<0&&x.x===1&&(a[w]=x.x-1),v.x===0&&v.z===0&&(a[w]=M/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Br=class s extends kl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Xn=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let x=p*f-a;for(let w=0;w<l;w++){let v=w*u-r;m.push(v,-x,0),y.push(0,0,1),g.push(w/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let w=x+l*p,v=x+l*(p+1),M=x+1+l*(p+1),E=x+1+l*p;d.push(w,v,E),d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ds=class s extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/i,d=new D,m=new Ht;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let y=0;y<i;y++){let g=y*(n+1);for(let p=0;p<n;p++){let x=p+g,w=x,v=x+n+1,M=x+n+2,E=x+1;o.push(w,v,E),o.push(v,M,E)}}this.setIndex(o),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vs=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,f=new D,d=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let x=[],w=p/n,v=a+w*o,M=t*Math.cos(v),E=Math.sqrt(t*t-M*M),T=0;p===0&&a===0?T=.5/e:p===n&&c===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let R=_/e,b=i+R*r;u.x=-E*Math.cos(b),u.y=M,u.z=E*Math.sin(b),m.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(R+T,1-w),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let w=h[p][x+1],v=h[p][x],M=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&d.push(w,v,E),(p!==n-1||c<Math.PI)&&d.push(v,M,E)}this.setIndex(d),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Vp(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Vp(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function yn(s){let t={};for(let e=0;e<s.length;e++){let n=Ws(s[e]);for(let i in n)t[i]=n[i]}return t}function Vp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function dx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function df(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Nm={clone:Ws,merge:yn},px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},zl=class extends Fe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vl=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gl=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Du(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hl=class extends ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ou:r=t,o=2*e-n;break;case Bu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ou:a=t,c=2*n-e;break;case Bu:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),y=m*m,g=y*m,p=-f*g+2*f*y-f*m,x=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*m+1,w=(-1-d)*g+(1.5+d)*y+.5*m,v=d*g-d*y;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+x*a[l+M]+w*a[c+M]+v*a[u+M];return r}},$l=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Wl=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ql=class extends ps{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*y+a[c+g]*m;return r}let f=o*2,d=t-1;for(let m=0;m!==o;++m){let y=a[l+m],g=a[c+m],p=d*f+m*2,x=u[p],w=u[p+1],v=t*f+m*2,M=h[v],E=h[v+1],T=yx(n,e,x,M,i);r[m]=Dm(T,y,w,E,g)}return r}};function Dm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function gx(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function yx(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Dm(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let c=gx(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var kn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mr(e,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mr(t.times,Array),values:Mr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Du(t.settings)&&(n.settings={inTangents:Mr(t.settings.inTangents,Array),outTangents:Mr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Cl:e=this.InterpolantFactoryMethodLinear;break;case yl:e=this.InterpolantFactoryMethodSmooth;break;case Uu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return yl;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Du(this.settings)&&(Gp(this.settings.inTangents,t),Gp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Vt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&qy(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[f+m]||y!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Du(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Gp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Cl;var ms=class extends kn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ia;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};Xl.prototype.ValueTypeName="color";var Yl=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};Yl.prototype.ValueTypeName="number";var jl=class extends ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},$a=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends kn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ia;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends kn{constructor(t,e,n,i){super(t,e,n,i)}};Zl.prototype.ValueTypeName="vector";var vl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Hp(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Hp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hp(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Jl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Um=new Jl,kr=class{constructor(t){this.manager=t!==void 0?t:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=new WeakMap,Kl=class extends kr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=vl.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Sr.get(a);u===void 0&&(u=[],Sr.set(a,u)),u.push({onLoad:e,onError:i})}return a}let o=Cr("img");function c(){h(),e&&e(this);let u=Sr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Sr.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),vl.remove(`image:${t}`);let f=Sr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}Sr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vl.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Wa=class extends kr{constructor(t){super(t)}load(t,e,n,i){let r=new gn,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}};var ml=new D,gl=new Pn,vi=new D,qa=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ml,gl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ml,gl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new D,$p=new Ht,Wp=new Ht,cn=class extends qa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(os.x,os.y).multiplyScalar(-t/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-t/os.z)}getViewSize(t,e){return this.getViewBounds(t,$p,Wp),e.subVectors(Wp,$p)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xa=class extends qa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Gs=class extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Er=-90,Tr=1,Ql=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Er,Tr,t,e);i.layers=this.layers,this.add(i);let r=new cn(Er,Tr,t,e);r.layers=this.layers,this.add(r);let a=new cn(Er,Tr,t,e);a.layers=this.layers,this.add(a);let o=new cn(Er,Tr,t,e);o.layers=this.layers,this.add(o);let c=new cn(Er,Tr,t,e);c.layers=this.layers,this.add(c);let l=new cn(Er,Tr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},tc=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var pf="\\[\\]\\.:\\/",xx=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",vx="[^"+pf.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",mf),bx=/(WCOD+)?/.source.replace("WCOD",vx),wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),Mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),Sx=new RegExp("^"+_x+bx+wx+Mx+"$"),Ex=["material","materials","bones","map"],zu=class{constructor(t,e,n){let i=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=Sx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ex.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=zu;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jE=new Float32Array(1);var qp=new pe,zr=class{constructor(t,e,n=0,i=1/0){this.ray=new Bs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qp),this}intersectObject(t,e=!0,n=[]){return Vu(t,this,n,e),n.sort(Xp),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Vu(t[i],this,n,e);return n.sort(Xp),n}};function Xp(s,t){return s.distance-t.distance}function Vu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Vu(r[a],t,e,!0)}}var bf=class bf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};bf.prototype.isMatrix2=!0;var Gu=bf;function gf(s,t,e,n){let i=Tx(n);switch(e){case lf:return s*t;case lc:return s*t/i.components*i.byteLength;case cc:return s*t/i.components*i.byteLength;case _s:return s*t*2/i.components*i.byteLength;case hc:return s*t*2/i.components*i.byteLength;case cf:return s*t*3/i.components*i.byteLength;case jn:return s*t*4/i.components*i.byteLength;case uc:return s*t*4/i.components*i.byteLength;case Ja:case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qa:case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dc:case mc:return Math.max(s,16)*Math.max(t,8)/4;case fc:case pc:return Math.max(s,8)*Math.max(t,8)/2;case gc:case yc:case vc:case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xc:case eo:case bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case kc:case zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case no:case Vc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tx(s){switch(s){case Vn:case sf:return{byteLength:1,components:1};case Hr:case rf:case li:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case oi:case rc:case Yn:return{byteLength:4,components:1};case af:case of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function i0(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rx(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],y=u[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let y=u[d];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Av=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Lx,alphatest_fragment:Nx,alphatest_pars_fragment:Dx,aomap_fragment:Ux,aomap_pars_fragment:Fx,batching_pars_vertex:Ox,batching_vertex:Bx,begin_vertex:kx,beginnormal_vertex:zx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Xx,color_fragment:Yx,color_pars_fragment:jx,color_pars_vertex:Zx,color_vertex:Jx,common:Kx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:tv,displacementmap_pars_vertex:ev,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,colorspace_fragment:rv,colorspace_pars_fragment:av,envmap_fragment:ov,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:hv,envmap_physical_pars_fragment:bv,envmap_vertex:uv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:yv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:_v,lights_toon_fragment:wv,lights_toon_pars_fragment:Mv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Ev,lights_physical_fragment:Tv,lights_physical_pars_fragment:Av,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Pv,lightprobes_pars_fragment:Iv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Nv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Uv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:kv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Hv,morphnormal_vertex:$v,morphtarget_pars_vertex:Wv,morphtarget_vertex:qv,normal_fragment_begin:Xv,normal_fragment_maps:Yv,normal_pars_fragment:jv,normal_pars_vertex:Zv,normal_vertex:Jv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:e_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:f_,shadowmap_vertex:d_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:y_,skinnormal_vertex:x_,specularmap_fragment:v_,specularmap_pars_fragment:__,tonemapping_fragment:b_,tonemapping_pars_fragment:w_,transmission_fragment:M_,transmission_pars_fragment:S_,uv_pars_fragment:E_,uv_pars_vertex:T_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:P_,backgroundCube_vert:I_,backgroundCube_frag:L_,cube_vert:N_,cube_frag:D_,depth_vert:U_,depth_frag:F_,distance_vert:O_,distance_frag:B_,equirect_vert:k_,equirect_frag:z_,linedashed_vert:V_,linedashed_frag:G_,meshbasic_vert:H_,meshbasic_frag:$_,meshlambert_vert:W_,meshlambert_frag:q_,meshmatcap_vert:X_,meshmatcap_frag:Y_,meshnormal_vert:j_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:K_,meshphysical_vert:Q_,meshphysical_frag:t1,meshtoon_vert:e1,meshtoon_frag:n1,points_vert:i1,points_frag:s1,shadow_vert:r1,shadow_frag:a1,sprite_vert:o1,sprite_frag:l1},Et={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Ii={basic:{uniforms:yn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:yn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:yn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:yn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:yn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:yn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:yn([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:yn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:yn([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:yn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:yn([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:yn([Et.common,Et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:yn([Et.lights,Et.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Ii.physical={uniforms:yn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var $c={r:0,b:0,g:0},c1=new pe,s0=new qt;s0.set(-1,0,0,0,1,0,0,0,1);function h1(s,t,e,n,i,r){let a=new Kt(0),o=i===!0?0:1,c,l,h=null,u=0,f=null;function d(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){let v=x.backgroundBlurriness>0;w=t.get(w,v)}return w}function m(x){let w=!1,v=d(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(x,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===ja)?(l===void 0&&(l=new ae(new Bn(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Ws(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(s0),l.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ae(new Xn(2,2),new Fe({name:"BackgroundMaterial",uniforms:Ws(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,w){x.getRGB($c,df(s)),e.buffers.color.setClear($c.r,$c.g,$c.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:y,dispose:p}}function u1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(C,P,I,N,U){let G=!1,H=u(C,N,I,P);r!==H&&(r=H,l(r.object)),G=d(C,N,I,U),G&&m(C,N,I,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(C,P,I,N),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return s.createVertexArray()}function l(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,P,I,N){let U=N.wireframe===!0,G=n[P.id];G===void 0&&(G={},n[P.id]=G);let H=C.isInstancedMesh===!0?C.id:0,j=G[H];j===void 0&&(j={},G[H]=j);let q=j[I.id];q===void 0&&(q={},j[I.id]=q);let J=q[U];return J===void 0&&(J=f(c()),q[U]=J),J}function f(C){let P=[],I=[],N=[];for(let U=0;U<e;U++)P[U]=0,I[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:C,attributes:{},index:null}}function d(C,P,I,N){let U=r.attributes,G=P.attributes,H=0,j=I.getAttributes();for(let q in j)if(j[q].location>=0){let et=U[q],X=G[q];if(X===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),et===void 0||et.attribute!==X||X&&et.data!==X.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function m(C,P,I,N){let U={},G=P.attributes,H=0,j=I.getAttributes();for(let q in j)if(j[q].location>=0){let et=G[q];et===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));let X={};X.attribute=et,et&&et.data&&(X.data=et.data),U[q]=X,H++}r.attributes=U,r.attributesNum=H,r.index=N}function y(){let C=r.newAttributes;for(let P=0,I=C.length;P<I;P++)C[P]=0}function g(C){p(C,0)}function p(C,P){let I=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;I[C]=1,N[C]===0&&(s.enableVertexAttribArray(C),N[C]=1),U[C]!==P&&(s.vertexAttribDivisor(C,P),U[C]=P)}function x(){let C=r.newAttributes,P=r.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==C[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function w(C,P,I,N,U,G,H){H===!0?s.vertexAttribIPointer(C,P,I,U,G):s.vertexAttribPointer(C,P,I,N,U,G)}function v(C,P,I,N){y();let U=N.attributes,G=I.getAttributes(),H=P.defaultAttributeValues;for(let j in G){let q=G[j];if(q.location>=0){let J=U[j];if(J===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){let et=J.normalized,X=J.itemSize,z=t.get(J);if(z===void 0)continue;let at=z.buffer,ct=z.type,ft=z.bytesPerElement,k=ct===s.INT||ct===s.UNSIGNED_INT||J.gpuType===rc;if(J.isInterleavedBufferAttribute){let K=J.data,xt=K.stride,kt=J.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<q.locationSize;Mt++)p(q.location+Mt,K.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)g(q.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Mt=0;Mt<q.locationSize;Mt++)w(q.location+Mt,X/q.locationSize,ct,et,xt*ft,(kt+X/q.locationSize*Mt)*ft,k)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)p(q.location+K,J.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<q.locationSize;K++)g(q.location+K);s.bindBuffer(s.ARRAY_BUFFER,at);for(let K=0;K<q.locationSize;K++)w(q.location+K,X/q.locationSize,ct,et,X*ft,X/q.locationSize*K*ft,k)}}else if(H!==void 0){let et=H[j];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}x()}function M(){R();for(let C in n){let P=n[C];for(let I in P){let N=P[I];for(let U in N){let G=N[U];for(let H in G)h(G[H].object),delete G[H];delete N[U]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let I in P){let N=P[I];for(let U in N){let G=N[U];for(let H in G)h(G[H].object),delete G[H];delete N[U]}}delete n[C.id]}function T(C){for(let P in n){let I=n[P];for(let N in I){let U=I[N];if(U[C.id]===void 0)continue;let G=U[C.id];for(let H in G)h(G[H].object),delete G[H];delete U[C.id]}}}function _(C){for(let P in n){let I=n[P],N=C.isInstancedMesh===!0?C.id:0,U=I[N];if(U!==void 0){for(let G in U){let H=U[G];for(let j in H)h(H[j].object),delete H[j];delete U[G]}delete I[N],Object.keys(I).length===0&&delete n[P]}}}function R(){b(),a=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function f1(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function d1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==jn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&T!==Yn&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:E}}function p1(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Fn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,w=x*4,v=p.clippingState||null;c.value=v,v=h(m,f,w,d);for(let M=0;M!==w;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=c.value,m!==!0||g===null){let p=d+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,v=d;w!==y;++w,v+=4)a.copy(u[w]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var qr=4,m1=6,g1=20,y1=256,io=new Xa,Fm=new Kt,wf=null,Mf=0,Sf=0,Ef=!1,x1=new D,qs=new D,qc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=x1}=r;wf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wf,Mf,Sf),this._renderer.xr.enabled=Ef,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:li,format:jn,colorSpace:La,depthBuffer:!1},i=Om(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v1(r)),this._blurMaterial=b1(r,t,e),this._ggxMaterial=_1(r,t,e)}return i}_compileMaterial(t){let e=new ae(new Re,t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,i,r){let c=new cn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fm),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Bn,new tn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Fm),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;Wr(i,v*M,w>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(y,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xs||t.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:m}=this,y=this._sizeLods[n],g=3*y*(n>m-qr?n-m+qr:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Wr(r,g,p,3*y,2*y),i.setRenderTarget(r),i.render(o,io),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Wr(t,g,p,3*y,2*y),i.setRenderTarget(t),i.render(o,io)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-qr?i-this._lodMax+qr:0),f=4*(this._cubeSize-h);Wr(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(c,io)}};function v1(s){let t=[],e=[],n=s,i=s-qr+1+m1;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,m=new Float32Array(d*f*u),y=new Float32Array(d*f*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,w=p>2?0:-1,v=[x,w,0,x+2/3,w,0,x+2/3,w+1,0,x,w,0,x+2/3,w+1,0,x,w+1,0];m.set(v,d*f*p);for(let M=0;M<f;M++){let E=h[M*2]*2-1,T=h[M*2+1]*2-1;p===0?qs.set(1,T,E):p===1?qs.set(-E,1,-T):p===2?qs.set(-E,T,1):p===3?qs.set(-1,T,-E):p===4?qs.set(-E,-1,T):qs.set(E,T,-1),qs.toArray(y,(p*f+M)*d)}}let g=new Re;g.setAttribute("position",new Ue(m,d)),g.setAttribute("outputDirection",new Ue(y,d)),e.push(new ae(g,null)),n>qr&&n--}return{lodMeshes:e,sizeLods:t}}function Om(s,t,e){let n=new In(s,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _1(s,t,e){return new Fe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function b1(s,t,e){return new Fe({name:"SphericalGaussianBlur",defines:{SAMPLES:g1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Bm(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function km(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xc=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bn(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ri});r.uniforms.tEquirect.value=e;let a=new ae(i,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Ye),new Ql(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function w1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===nc||d===ic)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new Xc(m.height);return y.fromEquirectangularTexture(s,f),t.set(f,y),f.addEventListener("dispose",l),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===nc||d===ic,y=d===xs||d===$s;if(m||y){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new qc(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return m&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new qc(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===nc?f.mapping=xs:d===ic&&(f.mapping=$s),f}function c(f){let d=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function M1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fs("WebGLRenderer: "+n+" extension not supported."),i}}}function S1(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,y=0;if(m===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let w=0,v=x.length;w<v;w+=3){let M=x[w+0],E=x[w+1],T=x[w+2];f.push(M,E,E,T,T,M)}}else{let x=m.array;y=m.version;for(let w=0,v=x.length/3-1;w<v;w+=3){let M=w+0,E=w+1,T=w+2;f.push(M,E,E,T,T,M)}}let g=new(m.count>=65535?Ba:Oa)(f,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function E1(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let g=0;g<d;g++)y+=f[g];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function T1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function A1(s,t,e){let n=new WeakMap,i=new ke;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let R=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],w=0;d===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*M*4*u),T=new Fa(E,v,M,u);T.type=Yn,T.needsUpdate=!0;let _=w*4;for(let b=0;b<u;b++){let C=g[b],P=p[b],I=x[b],N=v*M*4*b;for(let U=0;U<C.count;U++){let G=U*_;d===!0&&(i.fromBufferAttribute(C,U),E[N+G+0]=i.x,E[N+G+1]=i.y,E[N+G+2]=i.z,E[N+G+3]=0),m===!0&&(i.fromBufferAttribute(P,U),E[N+G+4]=i.x,E[N+G+5]=i.y,E[N+G+6]=i.z,E[N+G+7]=0),y===!0&&(i.fromBufferAttribute(I,U),E[N+G+8]=i.x,E[N+G+9]=i.y,E[N+G+10]=i.z,E[N+G+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new Ht(v,M)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function R1(s,t,e,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var C1={[ju]:"LINEAR_TONE_MAPPING",[Zu]:"REINHARD_TONE_MAPPING",[Ju]:"CINEON_TONE_MAPPING",[Ku]:"ACES_FILMIC_TONE_MAPPING",[tf]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function P1(s,t,e,n,i,r){let a=new In(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Re;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ae(l,h),f=new Xa(-1,1,1,-1,0,1),d=null,m=null,y=!1,g,p=null,x=[],w=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),c!==null&&c.setSize(v,M);for(let E=0;E<x.length;E++){let T=x[E];T.setSize&&T.setSize(v,M)}},this.setEffects=function(v){x=v,w=x.length>0&&x[0].isRenderPass===!0;let M=a.width,E=a.height;x.length>0&&o===null&&(o=new In(M,E,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new In(M,E,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<x.length;T++){let _=x[T];_.setSize&&_.setSize(M,E)}},this.begin=function(v,M){if(y||v.toneMapping===ai&&x.length===0)return!1;if(p=M,M!==null){let E=M.width,T=M.height;(a.width!==E||a.height!==T)&&this.setSize(E,T)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=ai,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=g,y=!0;let E=a,T=o;for(let _=0;_<x.length;_++){let R=x[_];R.enabled!==!1&&(R.render(v,T,E,M),R.needsSwap!==!1&&(E=T,T=T===o?c:o))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},le.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let _=C1[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(u,f),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var r0=new gn,Rf=new us(1,1),a0=new Fa,o0=new Nl,l0=new Va,zm=[],Vm=[],Gm=new Float32Array(16),Hm=new Float32Array(9),$m=new Float32Array(4);function Yr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=zm[i];if(r===void 0&&(r=new Float32Array(i),zm[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function nn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zc(s,t){let e=Vm[t];e===void 0&&(e=new Int32Array(t),Vm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function I1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function L1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function N1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function D1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function U1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;$m.set(n),s.uniformMatrix2fv(this.addr,!1,$m),sn(e,n)}}function F1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Hm.set(n),s.uniformMatrix3fv(this.addr,!1,Hm),sn(e,n)}}function O1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Gm.set(n),s.uniformMatrix4fv(this.addr,!1,Gm),sn(e,n)}}function B1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function k1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function z1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function V1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function G1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function H1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function $1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function W1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function q1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Rf.compareFunction=e.isReversedDepthBuffer()?Hc:Gc,r=Rf):r=r0,e.setTexture2D(t||r,i)}function X1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||o0,i)}function Y1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||l0,i)}function j1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||a0,i)}function Z1(s){switch(s){case 5126:return I1;case 35664:return L1;case 35665:return N1;case 35666:return D1;case 35674:return U1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return B1;case 35667:case 35671:return k1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return H1;case 36295:return $1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return j1}}function J1(s,t){s.uniform1fv(this.addr,t)}function K1(s,t){let e=Yr(t,this.size,2);s.uniform2fv(this.addr,e)}function Q1(s,t){let e=Yr(t,this.size,3);s.uniform3fv(this.addr,e)}function tb(s,t){let e=Yr(t,this.size,4);s.uniform4fv(this.addr,e)}function eb(s,t){let e=Yr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nb(s,t){let e=Yr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ib(s,t){let e=Yr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sb(s,t){s.uniform1iv(this.addr,t)}function rb(s,t){s.uniform2iv(this.addr,t)}function ab(s,t){s.uniform3iv(this.addr,t)}function ob(s,t){s.uniform4iv(this.addr,t)}function lb(s,t){s.uniform1uiv(this.addr,t)}function cb(s,t){s.uniform2uiv(this.addr,t)}function hb(s,t){s.uniform3uiv(this.addr,t)}function ub(s,t){s.uniform4uiv(this.addr,t)}function fb(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Rf:a=r0;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function db(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||o0,r[a])}function pb(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||l0,r[a])}function mb(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||a0,r[a])}function gb(s){switch(s){case 5126:return J1;case 35664:return K1;case 35665:return Q1;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return hb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}var Cf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z1(e.type)}},Pf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gb(e.type)}},If=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Tf=/(\w+)(\])?(\[|\.)?/g;function Wm(s,t){s.seq.push(t),s.map[t.id]=t}function yb(s,t,e){let n=s.name,i=n.length;for(Tf.lastIndex=0;;){let r=Tf.exec(n),a=Tf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wm(e,l===void 0?new Cf(o,s,t):new Pf(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new If(o),Wm(e,u)),e=u}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);yb(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function qm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var xb=37297,vb=0;function _b(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Xm=new qt;function bb(s){le._getMatrix(Xm,le.workingColorSpace,s);let t=`mat3( ${Xm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Na:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ym(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+_b(s.getShaderSource(t),o)}else return r}function wb(s,t){let e=bb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mb={[ju]:"Linear",[Zu]:"Reinhard",[Ju]:"Cineon",[Ku]:"ACESFilmic",[tf]:"AgX",[ef]:"Neutral",[Qu]:"Custom"};function Sb(s,t){let e=Mb[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wc=new D;function Eb(){le.getLuminanceCoefficients(Wc);let s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),e=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Ab(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ro(s){return s!==""}function jm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(Cb,Ib)}var Pb=new Map;function Ib(s,t){let e=te[t];if(e===void 0){let n=Pb.get(t);if(n!==void 0)e=te[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lf(e)}var Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(Lb,Nb)}function Nb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Km(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Db={[Ya]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function Ub(s){return Db[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fb={[xs]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function Ob(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Fb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bb={[$s]:"ENVMAP_MODE_REFRACTION"};function kb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Bb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zb={[Yu]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function Vb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":zb[s.combine]||"ENVMAP_BLENDING_NONE"}function Gb(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hb(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ub(e),l=Ob(e),h=kb(e),u=Vb(e),f=Gb(e),d=Tb(e),m=Ab(r),y=i.createProgram(),g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(g=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[Km(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?te.tonemapping_pars_fragment:"",e.toneMapping!==ai?Sb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,wb("linearToOutputTexel",e.outputColorSpace),Eb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),a=Lf(a),a=jm(a,e),a=Zm(a,e),o=Lf(o),o=jm(o,e),o=Zm(o,e),a=Jm(a),o=Jm(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=x+g+a,v=x+p+o,M=qm(i,i.VERTEX_SHADER,w),E=qm(i,i.FRAGMENT_SHADER,v);i.attachShader(y,M),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(C){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(y)||"",I=i.getShaderInfoLog(M)||"",N=i.getShaderInfoLog(E)||"",U=P.trim(),G=I.trim(),H=N.trim(),j=!0,q=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,M,E);else{let J=Ym(i,M,"vertex"),et=Ym(i,E,"fragment");Vt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+J+`
`+et)}else U!==""?Gt("WebGLProgram: Program Info Log:",U):(G===""||H==="")&&(q=!1);q&&(C.diagnostics={runnable:j,programLog:U,vertexShader:{log:G,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(M),i.deleteShader(E),_=new Xr(i,y),R=Rb(i,y)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(y,xb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=E,this}var $b=0,Nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Df(t),e.set(t,n)),n}},Df=class{constructor(t){this.id=$b++,this.code=t,this.usedTimes=0}};function Wb(s){return s===_s||s===eo||s===no}function qb(s,t,e,n,i,r){let a=new Lr,o=new Nf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,R,b,C,P,I){let N=C.fog,U=P.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||G,H),q=j&&j.mapping===ja?j.image.height:null,J=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,X=et!==void 0?et.length:0,z=0;U.morphAttributes.position!==void 0&&(z=1),U.morphAttributes.normal!==void 0&&(z=2),U.morphAttributes.color!==void 0&&(z=3);let at,ct,ft,k;if(J){let Pe=Ii[J];at=Pe.vertexShader,ct=Pe.fragmentShader}else{at=_.vertexShader,ct=_.fragmentShader;let Pe=o.getVertexShaderStage(_),ye=o.getFragmentShaderStage(_);o.update(_,Pe,ye),ft=Pe.id,k=ye.id}let K=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),kt=P.isInstancedMesh===!0,Mt=P.isBatchedMesh===!0,Xt=!!_.map,Ce=!!_.matcap,Yt=!!j,se=!!_.aoMap,ge=!!_.lightMap,ee=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,ze=!!_.displacementMap,Cn=!!_.emissiveMap,Be=!!_.metalnessMap,Je=!!_.roughnessMap,B=_.anisotropy>0,un=_.clearcoat>0,we=_.dispersion>0,L=_.retroreflectivity>0,S=_.iridescence>0,V=_.sheen>0,Y=_.transmission>0,Q=B&&!!_.anisotropyMap,dt=un&&!!_.clearcoatMap,yt=un&&!!_.clearcoatNormalMap,tt=un&&!!_.clearcoatRoughnessMap,it=S&&!!_.iridescenceMap,vt=S&&!!_.iridescenceThicknessMap,Ft=V&&!!_.sheenColorMap,St=V&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ot=!!_.specularColorMap,zt=!!_.specularIntensityMap,Zt=Y&&!!_.transmissionMap,O=Y&&!!_.thicknessMap,bt=!!_.gradientMap,nt=!!_.alphaMap,wt=_.alphaTest>0,Rt=!!_.alphaHash,rt=!!_.extensions,Bt=ai;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=s.toneMapping);let Nt={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:at,fragmentShader:ct,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:k,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&P._colorsTexture!==null,instancing:kt,instancingColor:kt&&P.instanceColor!==null,instancingMorph:kt&&P.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:Ce,envMap:Yt,envMapMode:Yt&&j.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:ge,bumpMap:ee,normalMap:Se,displacementMap:ze,emissiveMap:Cn,normalMapObjectSpace:Se&&_.normalMapType===vm,normalMapTangentSpace:Se&&_.normalMapType===hf,packedNormalMap:Se&&_.normalMapType===hf&&Wb(_.normalMap.format),metalnessMap:Be,roughnessMap:Je,anisotropy:B,anisotropyMap:Q,clearcoat:un,clearcoatMap:dt,clearcoatNormalMap:yt,clearcoatRoughnessMap:tt,dispersion:we,retroreflection:L,iridescence:S,iridescenceMap:it,iridescenceThicknessMap:vt,sheen:V,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:_t,specularColorMap:Ot,specularIntensityMap:zt,transmission:Y,transmissionMap:Zt,thicknessMap:O,gradientMap:bt,opaque:_.transparent===!1&&_.blending===Gr&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:wt,alphaHash:Rt,combine:_.combine,mapUv:Xt&&m(_.map.channel),aoMapUv:se&&m(_.aoMap.channel),lightMapUv:ge&&m(_.lightMap.channel),bumpMapUv:ee&&m(_.bumpMap.channel),normalMapUv:Se&&m(_.normalMap.channel),displacementMapUv:ze&&m(_.displacementMap.channel),emissiveMapUv:Cn&&m(_.emissiveMap.channel),metalnessMapUv:Be&&m(_.metalnessMap.channel),roughnessMapUv:Je&&m(_.roughnessMap.channel),anisotropyMapUv:Q&&m(_.anisotropyMap.channel),clearcoatMapUv:dt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(_.sheenRoughnessMap.channel),specularMapUv:_t&&m(_.specularMap.channel),specularColorMapUv:Ot&&m(_.specularColorMap.channel),specularIntensityMapUv:zt&&m(_.specularIntensityMap.channel),transmissionMapUv:Zt&&m(_.transmissionMap.channel),thicknessMapUv:O&&m(_.thicknessMap.channel),alphaMapUv:nt&&m(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||B),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Xt||nt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:z,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:Cn&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function g(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let b in _.defines)R.push(b),R.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(p(R,_),x(R,_),R.push(s.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function p(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function x(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let R=d[_.type],b;if(R){let C=Ii[R];b=Nm.clone(C.uniforms)}else b=_.uniforms;return b}function v(_,R){let b=h.get(R);return b!==void 0?++b.usedTimes:(b=new Hb(s,R,_,i),l.push(b),h.set(R,b)),b}function M(_){if(--_.usedTimes===0){let R=l.indexOf(_);l[R]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:T}}function Xb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Yb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Qm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function t0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,y,g,p){let x=s[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:p},s[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=a(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function c(f,d,m,y,g,p,x){x.reversedDepth===!0&&(g=-g);let w=o(f,d,m,y,g,p);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):e.push(w)}function l(f,d,m,y,g,p){let x=o(f,d,m,y,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||Yb),n.length>1&&n.sort(d||Qm),i.length>1&&i.sort(d||Qm)}function u(){for(let f=t,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:h}}function jb(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new t0,s.set(n,[a])):i>=r.length?(a=new t0,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Zb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Jb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Kb=0;function Qb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tw(s){let t=new Zb,e=Jb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new pe,a=new pe;function o(l){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,y=0,g=0,p=0,x=0,w=0,v=0,M=0,E=0,T=0,_=0,R=0,b=0;l.sort(Qb);for(let P=0,I=l.length;P<I;P++){let N=l[P],U=N.color,G=N.intensity,H=N.distance,j=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_s?j=N.shadow.map.texture:j=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=U.r*G,u+=U.g*G,f+=U.b*G;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],G);b++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,et=e.get(N);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=j;let X=J.getViewportCount();for(let z=0;z<X;z++)n.sunShadowMatrix[y+z]=J.getMatrix(z),n.sunShadowCascade[y+z]=J._cascadeData[z];y+=X,m++}n.sun[d]=q,d++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,et=e.get(N);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=q,g++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(U).multiplyScalar(G),q.distance=H,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[x]=q;let J=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,J.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[x]=J.matrix,N.castShadow){let et=e.get(N);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=j,T++}x++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(U).multiplyScalar(G),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=q,w++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let J=N.shadow,et=e.get(N);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=q,p++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(G),q.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[v]=q,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==m||C.numDirectionalShadows!==M||C.numPointShadows!==E||C.numSpotShadows!==T||C.numSpotMaps!==_||C.numLightProbes!==b)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,C.sunLength=d,C.directionalLength=g,C.pointLength=p,C.spotLength=x,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=m,C.numDirectionalShadows=M,C.numPointShadows=E,C.numSpotShadows=T,C.numSpotMaps=_,C.numLightProbes=b,n.version=Kb++)}function c(l,h){let u=0,f=0,d=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let x=0,w=l.length;x<w;x++){let v=l[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function e0(s){let t=new tw(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ew(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new e0(s),t.set(i,[o])):r>=a.length?(o=new e0(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sw=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],rw=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],n0=new pe,so=new D,Af=new D;function aw(s,t,e){let n=new za,i=new Ht,r=new Ht,a=new ke,o=new Vl,c=new Gl,l={},h=e.maxTextureSize,u={[ys]:hn,[hn]:ys,[an]:an},f=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(E,T,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Zp&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);let R=s.getRenderTarget(),b=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Ri),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let I=p!==this.type;I&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(U=>U.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,U=E.length;N<U;N++){let G=E[N],H=G.shadow;if(H===void 0){Gt("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let j=H.getFrameExtents();i.multiply(j),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,H.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Vr){if(G.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new In(i.x,i.y,{format:_s,type:li,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new us(i.x,i.y,Yn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=wi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xe,H.map.depthTexture.magFilter=Xe}else G.isPointLight?(H.map=new Xc(i.x),H.map.depthTexture=new Ol(i.x,oi)):(H.map=new In(i.x,i.y),H.map.depthTexture=new us(i.x,i.y,oi)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=wi,this.type===Ya?(H.map.depthTexture.compareFunction=q?Hc:Gc,H.map.depthTexture.minFilter=Ye,H.map.depthTexture.magFilter=Ye):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xe,H.map.depthTexture.magFilter=Xe);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,_);for(let et=0;et<J;et++){let X=H.getCamera(et);if(G.isPointLight){let z=H.camera,at=H.matrix,ct=G.distance||z.far;ct!==z.far&&(z.far=ct,z.updateProjectionMatrix()),so.setFromMatrixPosition(G.matrixWorld),z.position.copy(so),Af.copy(z.position),Af.add(sw[et]),z.up.copy(rw[et]),z.lookAt(Af),z.updateMatrixWorld(),at.makeTranslation(-so.x,-so.y,-so.z),n0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(n0,z.coordinateSystem,z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,et),s.clear();else{et===0&&(s.setRenderTarget(H.map),s.clear());let z=H.getViewport(et);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),P.viewport(a)}n=H.getFrustum(et),v(T,_,X,G,this.type)}H.isPointLightShadow!==!0&&this.type===Vr&&x(H,_),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(R,b,C)};function x(E,T){let _=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new In(i.x,i.y,{format:_s,type:li}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,_,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,_,d,y,null)}function w(E,T,_,R){let b=null,C=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)b=C;else if(b=_.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=b.uuid,I=T.uuid,N=l[P];N===void 0&&(N={},l[P]=N);let U=N[I];U===void 0&&(U=b.clone(),N[I]=U,T.addEventListener("dispose",M)),b=U}if(b.visible=T.visible,b.wireframe=T.wireframe,R===Vr?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let P=s.properties.get(b);P.light=_}return b}function v(E,T,_,R,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Vr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let I=t.update(E),N=E.material;if(Array.isArray(N)){let U=I.groups;for(let G=0,H=U.length;G<H;G++){let j=U[G],q=N[j.materialIndex];if(q&&q.visible){let J=w(E,q,R,b);E.onBeforeShadow(s,E,T,_,I,J,j),s.renderBufferDirect(_,null,I,J,E,j),E.onAfterShadow(s,E,T,_,I,J,j)}}}else if(N.visible){let U=w(E,N,R,b);E.onBeforeShadow(s,E,T,_,I,U,null),s.renderBufferDirect(_,null,I,U,E,null),E.onAfterShadow(s,E,T,_,I,U,null)}}let P=E.children;for(let I=0,N=P.length;I<N;I++)v(P[I],T,_,R,b)}function M(E){E.target.removeEventListener("dispose",M);for(let _ in l){let R=l[_],b=E.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}function ow(s,t){function e(){let O=!1,bt=new ke,nt=null,wt=new ke(0,0,0,0);return{setMask:function(Rt){nt!==Rt&&!O&&(s.colorMask(Rt,Rt,Rt,Rt),nt=Rt)},setLocked:function(Rt){O=Rt},setClear:function(Rt,rt,Bt,Nt,Pe){Pe===!0&&(Rt*=Nt,rt*=Nt,Bt*=Nt),bt.set(Rt,rt,Bt,Nt),wt.equals(bt)===!1&&(s.clearColor(Rt,rt,Bt,Nt),wt.copy(bt))},reset:function(){O=!1,nt=null,wt.set(-1,0,0,0)}}}function n(){let O=!1,bt=!1,nt=null,wt=null,Rt=null;return{setReversed:function(rt){if(bt!==rt){let Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),bt=rt;let Nt=Rt;Rt=null,this.setClear(Nt)}},getReversed:function(){return bt},setTest:function(rt){rt?K(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!O&&(s.depthMask(rt),nt=rt)},setFunc:function(rt){if(bt&&(rt=Pm[rt]),wt!==rt){switch(rt){case _l:s.depthFunc(s.NEVER);break;case bl:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case Rr:s.depthFunc(s.LEQUAL);break;case Ml:s.depthFunc(s.EQUAL);break;case Sl:s.depthFunc(s.GEQUAL);break;case El:s.depthFunc(s.GREATER);break;case Tl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){Rt!==rt&&(Rt=rt,bt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){O=!1,nt=null,wt=null,Rt=null,bt=!1}}}function i(){let O=!1,bt=null,nt=null,wt=null,Rt=null,rt=null,Bt=null,Nt=null,Pe=null;return{setTest:function(ye){O||(ye?K(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(ye){bt!==ye&&!O&&(s.stencilMask(ye),bt=ye)},setFunc:function(ye,ti,mi){(nt!==ye||wt!==ti||Rt!==mi)&&(s.stencilFunc(ye,ti,mi),nt=ye,wt=ti,Rt=mi)},setOp:function(ye,ti,mi){(rt!==ye||Bt!==ti||Nt!==mi)&&(s.stencilOp(ye,ti,mi),rt=ye,Bt=ti,Nt=mi)},setLocked:function(ye){O=ye},setClear:function(ye){Pe!==ye&&(s.clearStencil(ye),Pe=ye)},reset:function(){O=!1,bt=null,nt=null,wt=null,Rt=null,rt=null,Bt=null,Nt=null,Pe=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],y=null,g=!1,p=null,x=null,w=null,v=null,M=null,E=null,T=null,_=new Kt(0,0,0),R=0,b=!1,C=null,P=null,I=null,N=null,U=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=j>=2);let J=null,et={},X=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),at=new ke().fromArray(X),ct=new ke().fromArray(z);function ft(O,bt,nt,wt){let Rt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(O,rt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<nt;Bt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(bt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return rt}let k={};k[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),k[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),k[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Rr),ee(!1),Se(Hu),K(s.CULL_FACE),se(Ri);function K(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function xt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function kt(O,bt){return f[O]!==bt?(s.bindFramebuffer(O,bt),f[O]=bt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=bt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Mt(O,bt){let nt=m,wt=!1;if(O){nt=d.get(bt),nt===void 0&&(nt=[],d.set(bt,nt));let Rt=O.textures;if(nt.length!==Rt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Bt=Rt.length;rt<Bt;rt++)nt[rt]=s.COLOR_ATTACHMENT0+rt;nt.length=Rt.length,wt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(nt)}function Xt(O){return y!==O?(s.useProgram(O),y=O,!0):!1}let Ce={[Hs]:s.FUNC_ADD,[Kp]:s.FUNC_SUBTRACT,[Qp]:s.FUNC_REVERSE_SUBTRACT};Ce[tm]=s.MIN,Ce[em]=s.MAX;let Yt={[nm]:s.ZERO,[im]:s.ONE,[sm]:s.SRC_COLOR,[qu]:s.SRC_ALPHA,[hm]:s.SRC_ALPHA_SATURATE,[lm]:s.DST_COLOR,[am]:s.DST_ALPHA,[rm]:s.ONE_MINUS_SRC_COLOR,[Xu]:s.ONE_MINUS_SRC_ALPHA,[cm]:s.ONE_MINUS_DST_COLOR,[om]:s.ONE_MINUS_DST_ALPHA,[um]:s.CONSTANT_COLOR,[fm]:s.ONE_MINUS_CONSTANT_COLOR,[dm]:s.CONSTANT_ALPHA,[pm]:s.ONE_MINUS_CONSTANT_ALPHA};function se(O,bt,nt,wt,Rt,rt,Bt,Nt,Pe,ye){if(O===Ri){g===!0&&(xt(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),O!==Jp){if(O!==p||ye!==b){if((x!==Hs||M!==Hs)&&(s.blendEquation(s.FUNC_ADD),x=Hs,M=Hs),ye)switch(O){case Gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFunc(s.ONE,s.ONE);break;case $u:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",O);break}else switch(O){case Gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $u:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",O);break}w=null,v=null,E=null,T=null,_.set(0,0,0),R=0,p=O,b=ye}return}Rt=Rt||bt,rt=rt||nt,Bt=Bt||wt,(bt!==x||Rt!==M)&&(s.blendEquationSeparate(Ce[bt],Ce[Rt]),x=bt,M=Rt),(nt!==w||wt!==v||rt!==E||Bt!==T)&&(s.blendFuncSeparate(Yt[nt],Yt[wt],Yt[rt],Yt[Bt]),w=nt,v=wt,E=rt,T=Bt),(Nt.equals(_)===!1||Pe!==R)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Pe),_.copy(Nt),R=Pe),p=O,b=!1}function ge(O,bt){O.side===an?xt(s.CULL_FACE):K(s.CULL_FACE);let nt=O.side===hn;bt&&(nt=!nt),ee(nt),O.blending===Gr&&O.transparent===!1?se(Ri):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let wt=O.stencilWrite;o.setTest(wt),wt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Cn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){C!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),C=O)}function Se(O){O!==Yp?(K(s.CULL_FACE),O!==P&&(O===Hu?s.cullFace(s.BACK):O===jp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),P=O}function ze(O){O!==I&&(H&&s.lineWidth(O),I=O)}function Cn(O,bt,nt){O?(K(s.POLYGON_OFFSET_FILL),(N!==bt||U!==nt)&&(N=bt,U=nt,a.getReversed()&&(bt=-bt),s.polygonOffset(bt,nt))):xt(s.POLYGON_OFFSET_FILL)}function Be(O){O?K(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function Je(O){O===void 0&&(O=s.TEXTURE0+G-1),J!==O&&(s.activeTexture(O),J=O)}function B(O,bt,nt){nt===void 0&&(J===null?nt=s.TEXTURE0+G-1:nt=J);let wt=et[nt];wt===void 0&&(wt={type:void 0,texture:void 0},et[nt]=wt),(wt.type!==O||wt.texture!==bt)&&(J!==nt&&(s.activeTexture(nt),J=nt),s.bindTexture(O,bt||k[O]),wt.type=O,wt.texture=bt)}function un(){let O=et[J];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function we(){try{s.compressedTexImage2D(...arguments)}catch(O){Vt("WebGLState:",O)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(O){Vt("WebGLState:",O)}}function S(){try{s.texSubImage2D(...arguments)}catch(O){Vt("WebGLState:",O)}}function V(){try{s.texSubImage3D(...arguments)}catch(O){Vt("WebGLState:",O)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Vt("WebGLState:",O)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Vt("WebGLState:",O)}}function dt(){try{s.texStorage2D(...arguments)}catch(O){Vt("WebGLState:",O)}}function yt(){try{s.texStorage3D(...arguments)}catch(O){Vt("WebGLState:",O)}}function tt(){try{s.texImage2D(...arguments)}catch(O){Vt("WebGLState:",O)}}function it(){try{s.texImage3D(...arguments)}catch(O){Vt("WebGLState:",O)}}function vt(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function Ft(O,bt){u[O]!==bt&&(s.pixelStorei(O,bt),u[O]=bt)}function St(O){at.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),at.copy(O))}function _t(O){ct.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ct.copy(O))}function Ot(O,bt){let nt=l.get(bt);nt===void 0&&(nt=new WeakMap,l.set(bt,nt));let wt=nt.get(O);wt===void 0&&(wt=s.getUniformBlockIndex(bt,O.name),nt.set(O,wt))}function zt(O,bt){let wt=l.get(bt).get(O);c.get(bt)!==wt&&(s.uniformBlockBinding(bt,wt,O.__bindingPointIndex),c.set(bt,wt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,et={},f={},d=new WeakMap,m=[],y=null,g=!1,p=null,x=null,w=null,v=null,M=null,E=null,T=null,_=new Kt(0,0,0),R=0,b=!1,C=null,P=null,I=null,N=null,U=null,at.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:xt,bindFramebuffer:kt,drawBuffers:Mt,useProgram:Xt,setBlending:se,setMaterial:ge,setFlipSided:ee,setCullFace:Se,setLineWidth:ze,setPolygonOffset:Cn,setScissorTest:Be,activeTexture:Je,bindTexture:B,unbindTexture:un,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:tt,texImage3D:it,pixelStorei:Ft,getParameter:vt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:dt,texStorage3D:yt,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:St,viewport:_t,reset:Zt}}function lw(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,S){return m?new OffscreenCanvas(L,S):Cr("canvas")}function g(L,S,V){let Y=1,Q=we(L);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let dt=Math.floor(Y*Q.width),yt=Math.floor(Y*Q.height);f===void 0&&(f=y(dt,yt));let tt=S?y(dt,yt):f;return tt.width=dt,tt.height=yt,tt.getContext("2d").drawImage(L,0,0,dt,yt),Gt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+dt+"x"+yt+")."),tt}else return"data"in L&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function p(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,S,V,Y,Q,dt=!1){if(L!==null){if(s[L]!==void 0)return s[L];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt;Y&&(yt=t.get("EXT_texture_norm16"),yt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===s.RED&&(V===s.FLOAT&&(tt=s.R32F),V===s.HALF_FLOAT&&(tt=s.R16F),V===s.UNSIGNED_BYTE&&(tt=s.R8),V===s.UNSIGNED_SHORT&&yt&&(tt=yt.R16_EXT),V===s.SHORT&&yt&&(tt=yt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.R8UI),V===s.UNSIGNED_SHORT&&(tt=s.R16UI),V===s.UNSIGNED_INT&&(tt=s.R32UI),V===s.BYTE&&(tt=s.R8I),V===s.SHORT&&(tt=s.R16I),V===s.INT&&(tt=s.R32I)),S===s.RG&&(V===s.FLOAT&&(tt=s.RG32F),V===s.HALF_FLOAT&&(tt=s.RG16F),V===s.UNSIGNED_BYTE&&(tt=s.RG8),V===s.UNSIGNED_SHORT&&yt&&(tt=yt.RG16_EXT),V===s.SHORT&&yt&&(tt=yt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RG8UI),V===s.UNSIGNED_SHORT&&(tt=s.RG16UI),V===s.UNSIGNED_INT&&(tt=s.RG32UI),V===s.BYTE&&(tt=s.RG8I),V===s.SHORT&&(tt=s.RG16I),V===s.INT&&(tt=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),V===s.UNSIGNED_INT&&(tt=s.RGB32UI),V===s.BYTE&&(tt=s.RGB8I),V===s.SHORT&&(tt=s.RGB16I),V===s.INT&&(tt=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),V===s.UNSIGNED_INT&&(tt=s.RGBA32UI),V===s.BYTE&&(tt=s.RGBA8I),V===s.SHORT&&(tt=s.RGBA16I),V===s.INT&&(tt=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_SHORT&&yt&&(tt=yt.RGB16_EXT),V===s.SHORT&&yt&&(tt=yt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),S===s.RGBA){let it=dt?Na:le.getTransfer(Q);V===s.FLOAT&&(tt=s.RGBA32F),V===s.HALF_FLOAT&&(tt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(tt=it===ve?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&yt&&(tt=yt.RGBA16_EXT),V===s.SHORT&&yt&&(tt=yt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(L,S){let V;return L?S===null||S===oi||S===$r?V=s.DEPTH24_STENCIL8:S===Yn?V=s.DEPTH32F_STENCIL8:S===Hr&&(V=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===$r?V=s.DEPTH_COMPONENT24:S===Yn?V=s.DEPTH_COMPONENT32F:S===Hr&&(V=s.DEPTH_COMPONENT16),V}function E(L,S){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xe&&L.minFilter!==Ye?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function T(L){let S=L.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(L){let S=L.target;S.removeEventListener("dispose",_),C(S)}function R(L){let S=n.get(L);if(S.__webglInit===void 0)return;let V=L.source,Y=d.get(V);if(Y){let Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(L),Object.keys(Y).length===0&&d.delete(V)}n.remove(L)}function b(L){let S=n.get(L);s.deleteTexture(S.__webglTexture);let V=L.source,Y=d.get(V);delete Y[S.__cacheKey],a.memory.textures--}function C(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=L.textures;for(let Y=0,Q=V.length;Y<Q;Y++){let dt=n.get(V[Y]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(L)}let P=0;function I(){P=0}function N(){return P}function U(L){P=L}function G(){let L=P;return L>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function H(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function j(L,S){let V=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){let Y=L.image;if(Y===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,L,S);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function q(L,S){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){xt(V,L,S);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function J(L,S){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){xt(V,L,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function et(L,S){let V=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&V.__version!==L.version){kt(V,L,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let X={[Al]:s.REPEAT,[bi]:s.CLAMP_TO_EDGE,[Rl]:s.MIRRORED_REPEAT},z={[Xe]:s.NEAREST,[ym]:s.NEAREST_MIPMAP_NEAREST,[Za]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[sc]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},at={[bm]:s.NEVER,[Tm]:s.ALWAYS,[wm]:s.LESS,[Gc]:s.LEQUAL,[Mm]:s.EQUAL,[Hc]:s.GEQUAL,[Sm]:s.GREATER,[Em]:s.NOTEQUAL};function ct(L,S){if(S.type===Yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ye||S.magFilter===sc||S.magFilter===Za||S.magFilter===Ci||S.minFilter===Ye||S.minFilter===sc||S.minFilter===Za||S.minFilter===Ci)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,X[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,X[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,X[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,z[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,z[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==Za&&S.minFilter!==Ci||S.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ft(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",T));let Y=S.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let dt=H(S);if(dt!==L.__cacheKey){Q[dt]===void 0&&(Q[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[dt].usedTimes++;let yt=Q[L.__cacheKey];yt!==void 0&&(Q[L.__cacheKey].usedTimes--,yt.usedTimes===0&&b(S)),L.__cacheKey=dt,L.__webglTexture=Q[dt].texture}return V}function k(L,S,V){return Math.floor(Math.floor(L/V)/S)}function K(L,S,V,Y){let dt=L.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,Y,S.data);else{dt.sort((Ft,St)=>Ft.start-St.start);let yt=0;for(let Ft=1;Ft<dt.length;Ft++){let St=dt[yt],_t=dt[Ft],Ot=St.start+St.count,zt=k(_t.start,S.width,4),Zt=k(St.start,S.width,4);_t.start<=Ot+1&&zt===Zt&&k(_t.start+_t.count-1,S.width,4)===zt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++yt,dt[yt]=_t)}dt.length=yt+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ft=0,St=dt.length;Ft<St;Ft++){let _t=dt[Ft],Ot=Math.floor(_t.start/4),zt=Math.ceil(_t.count/4),Zt=Ot%S.width,O=Math.floor(Ot/S.width),bt=zt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Zt,O,bt,nt,V,Y,S.data)}L.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function xt(L,S,V){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);let Q=ft(L,S),dt=S.source;e.bindTexture(Y,L.__webglTexture,s.TEXTURE0+V);let yt=n.get(dt);if(dt.version!==yt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let nt=le.getPrimaries(le.workingColorSpace),wt=S.colorSpace===Hi?null:le.getPrimaries(S.colorSpace),Rt=S.colorSpace===Hi||nt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let it=g(S.image,!1,i.maxTextureSize);it=un(S,it);let vt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),St=v(S.internalFormat,vt,Ft,S.normalized,S.colorSpace,S.isVideoTexture);ct(Y,S);let _t,Ot=S.mipmaps,zt=S.isVideoTexture!==!0,Zt=yt.__version===void 0||Q===!0,O=dt.dataReady,bt=E(S,it);if(S.isDepthTexture)St=M(S.format===vs,S.type),Zt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,St,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,St,it.width,it.height,0,vt,Ft,null));else if(S.isDataTexture)if(Ot.length>0){zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,bt,St,Ot[0].width,Ot[0].height);for(let nt=0,wt=Ot.length;nt<wt;nt++)_t=Ot[nt],zt?O&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,vt,Ft,_t.data):e.texImage2D(s.TEXTURE_2D,nt,St,_t.width,_t.height,0,vt,Ft,_t.data);S.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(s.TEXTURE_2D,bt,St,it.width,it.height),O&&K(S,it,vt,Ft)):e.texImage2D(s.TEXTURE_2D,0,St,it.width,it.height,0,vt,Ft,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,St,Ot[0].width,Ot[0].height,it.depth);for(let nt=0,wt=Ot.length;nt<wt;nt++)if(_t=Ot[nt],S.format!==jn)if(vt!==null)if(zt){if(O)if(S.layerUpdates.size>0){let Rt=gf(_t.width,_t.height,S.format,S.type);for(let rt of S.layerUpdates){let Bt=_t.data.subarray(rt*Rt/_t.data.BYTES_PER_ELEMENT,(rt+1)*Rt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,rt,_t.width,_t.height,1,vt,Bt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,vt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,St,_t.width,_t.height,it.depth,0,_t.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,vt,Ft,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,St,_t.width,_t.height,it.depth,0,vt,Ft,_t.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,bt,St,Ot[0].width,Ot[0].height);for(let nt=0,wt=Ot.length;nt<wt;nt++)_t=Ot[nt],S.format!==jn?vt!==null?zt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,St,_t.width,_t.height,0,_t.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,_t.width,_t.height,vt,Ft,_t.data):e.texImage2D(s.TEXTURE_2D,nt,St,_t.width,_t.height,0,vt,Ft,_t.data)}else if(S.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,St,it.width,it.height,it.depth),O)if(S.layerUpdates.size>0){let nt=gf(it.width,it.height,S.format,S.type);for(let wt of S.layerUpdates){let Rt=it.data.subarray(wt*nt/it.data.BYTES_PER_ELEMENT,(wt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,wt,it.width,it.height,1,vt,Ft,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(S.isData3DTexture)zt?(Zt&&e.texStorage3D(s.TEXTURE_3D,bt,St,it.width,it.height,it.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)):e.texImage3D(s.TEXTURE_3D,0,St,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(S.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(s.TEXTURE_2D,bt,St,it.width,it.height);else{let nt=it.width,wt=it.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,St,nt,wt,0,vt,Ft,null),nt>>=1,wt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),u.add(S),nt.onpaint=wt=>{let Rt=wt.changedElements;for(let rt of u)Rt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let Rt=s.RGBA,rt=s.RGBA,Bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,rt,Bt,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&Zt){let nt=we(Ot[0]);e.texStorage2D(s.TEXTURE_2D,bt,St,nt.width,nt.height)}for(let nt=0,wt=Ot.length;nt<wt;nt++)_t=Ot[nt],zt?O&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,vt,Ft,_t):e.texImage2D(s.TEXTURE_2D,nt,St,vt,Ft,_t);S.generateMipmaps=!1}else if(zt){if(Zt){let nt=we(it);e.texStorage2D(s.TEXTURE_2D,bt,St,nt.width,nt.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ft,it)}else e.texImage2D(s.TEXTURE_2D,0,St,vt,Ft,it);p(S)&&x(Y),yt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function kt(L,S,V){if(S.image.length!==6)return;let Y=ft(L,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);let dt=n.get(Q);if(Q.version!==dt.__version||Y===!0){e.activeTexture(s.TEXTURE0+V);let yt=le.getPrimaries(le.workingColorSpace),tt=S.colorSpace===Hi?null:le.getPrimaries(S.colorSpace),it=S.colorSpace===Hi||yt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ft=S.image[0]&&S.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!vt&&!Ft?St[rt]=g(S.image[rt],!0,i.maxCubemapSize):St[rt]=Ft?S.image[rt].image:S.image[rt],St[rt]=un(S,St[rt]);let _t=St[0],Ot=r.convert(S.format,S.colorSpace),zt=r.convert(S.type),Zt=v(S.internalFormat,Ot,zt,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,bt=dt.__version===void 0||Y===!0,nt=Q.dataReady,wt=E(S,_t);ct(s.TEXTURE_CUBE_MAP,S);let Rt;if(vt){O&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Zt,_t.width,_t.height);for(let rt=0;rt<6;rt++){Rt=St[rt].mipmaps;for(let Bt=0;Bt<Rt.length;Bt++){let Nt=Rt[Bt];S.format!==jn?Ot!==null?O?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Zt,Nt.width,Nt.height,0,Nt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,zt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Zt,Nt.width,Nt.height,0,Ot,zt,Nt.data)}}}else{if(Rt=S.mipmaps,O&&bt){Rt.length>0&&wt++;let rt=we(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ft){O?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Ot,zt,St[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,St[rt].width,St[rt].height,0,Ot,zt,St[rt].data);for(let Bt=0;Bt<Rt.length;Bt++){let Pe=Rt[Bt].image[rt].image;O?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Pe.width,Pe.height,Ot,zt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Zt,Pe.width,Pe.height,0,Ot,zt,Pe.data)}}else{O?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,zt,St[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,Ot,zt,St[rt]);for(let Bt=0;Bt<Rt.length;Bt++){let Nt=Rt[Bt];O?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ot,zt,Nt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Zt,Ot,zt,Nt.image[rt])}}}p(S)&&x(s.TEXTURE_CUBE_MAP),dt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Mt(L,S,V,Y,Q,dt){let yt=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),it=v(V.internalFormat,yt,tt,V.normalized,V.colorSpace),vt=n.get(S),Ft=n.get(V);if(Ft.__renderTarget=S,!vt.__hasExternalTextures){let St=Math.max(1,S.width>>dt),_t=Math.max(1,S.height>>dt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,dt,it,St,_t,S.depth,0,yt,tt,null):e.texImage2D(Q,dt,it,St,_t,0,yt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,Ft.__webglTexture,0,Be(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,Ft.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(L,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){let Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,dt=M(S.stencilBuffer,Q),yt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be(S),dt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be(S),dt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,dt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,L)}else{let Y=S.textures;for(let Q=0;Q<Y.length;Q++){let dt=Y[Q],yt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),it=v(dt.internalFormat,yt,tt,dt.normalized,dt.colorSpace);Je(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be(S),it,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be(S),it,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,it,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(L,S,V){let Y=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),ct(s.TEXTURE_CUBE_MAP,S.depthTexture);let vt=r.convert(S.depthTexture.format),Ft=r.convert(S.depthTexture.type),St;S.depthTexture.format===wi?St=s.DEPTH_COMPONENT24:S.depthTexture.format===vs&&(St=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,S.width,S.height,0,vt,Ft,null)}}else j(S.depthTexture,0);let dt=Q.__webglTexture,yt=Be(S),tt=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,it=S.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===wi)Je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,dt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,dt,0);else if(S.depthTexture.format===vs)Je(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,dt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(L){let S=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let Y=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)Ce(S.__webglFramebuffer[Y],L,Y);else{let Y=L.texture.mipmaps;Y&&Y.length>0?Ce(S.__webglFramebuffer[0],L,0):Ce(S.__webglFramebuffer,L,0)}else if(V){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),Xt(S.__webglDepthbuffer[Y],L,!1);else{let Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,dt)}}else{let Y=L.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Xt(S.__webglDepthbuffer,L,!1);else{let Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function se(L,S,V){let Y=n.get(L);S!==void 0&&Mt(Y.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Yt(L)}function ge(L){let S=L.texture,V=n.get(L),Y=n.get(S);L.addEventListener("dispose",_);let Q=L.textures,dt=L.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++),dt){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let it=0;it<S.mipmaps.length;it++)V.__webglFramebuffer[tt][it]=s.createFramebuffer()}else V.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)V.__webglFramebuffer[tt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(yt)for(let tt=0,it=Q.length;tt<it;tt++){let vt=n.get(Q[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Je(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let it=Q[tt];V.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);let vt=r.convert(it.format,it.colorSpace),Ft=r.convert(it.type),St=v(it.internalFormat,vt,Ft,it.normalized,it.colorSpace,L.isXRRenderTarget===!0),_t=Be(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,St,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ct(s.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)Mt(V.__webglFramebuffer[tt][it],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else Mt(V.__webglFramebuffer[tt],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(S)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let tt=0,it=Q.length;tt<it;tt++){let vt=Q[tt],Ft=n.get(vt),St=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),ct(St,vt),Mt(V.__webglFramebuffer,L,vt,s.COLOR_ATTACHMENT0+tt,St,0),p(vt)&&x(St)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),ct(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)Mt(V.__webglFramebuffer[it],L,S,s.COLOR_ATTACHMENT0,tt,it);else Mt(V.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,tt,0);p(S)&&x(tt),e.unbindTexture()}L.depthBuffer&&Yt(L)}function ee(L){let S=L.textures;for(let V=0,Y=S.length;V<Y;V++){let Q=S[V];if(p(Q)){let dt=w(L),yt=n.get(Q).__webglTexture;e.bindTexture(dt,yt),x(dt),e.unbindTexture()}}}let Se=[],ze=[];function Cn(L){if(L.samples>0){if(Je(L)===!1){let S=L.textures,V=L.width,Y=L.height,Q=s.COLOR_BUFFER_BIT,dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(L),tt=S.length>1;if(tt)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let it=L.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ft=n.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,s.NEAREST),c===!0&&(Se.length=0,ze.length=0,Se.push(s.COLOR_ATTACHMENT0+vt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Se.push(dt),ze.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ft=n.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Be(L){return Math.min(i.maxSamples,L.samples)}function Je(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(L){let S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function un(L,S){let V=L.colorSpace,Y=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==La&&V!==Hi&&(le.getTransfer(V)===ve?(Y!==jn||Q!==Vn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",V)),S}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.getTextureUnits=N,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=se,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cw(s,t){function e(n,i=Hi){let r,a=le.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===ac)return s.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return s.BYTE;if(n===rf)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===rc)return s.INT;if(n===oi)return s.UNSIGNED_INT;if(n===Yn)return s.FLOAT;if(n===li)return s.HALF_FLOAT;if(n===lf)return s.ALPHA;if(n===cf)return s.RGB;if(n===jn)return s.RGBA;if(n===wi)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===lc)return s.RED;if(n===cc)return s.RED_INTEGER;if(n===_s)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===Ja||n===Ka||n===Qa||n===to)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===dc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===yc||n===xc||n===vc||n===_c||n===eo||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===yc)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===eo)return r.COMPRESSED_RG11_EAC;if(n===bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Mc||n===Sc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Nc||n===Dc||n===Uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Oc||n===Bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===zc||n===no||n===Vc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:hw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends Mi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,y=typeof XRWebGLBinding<"u",g=new Uf,p={},x=e.getContextAttributes(),w=null,v=null,M=[],E=[],T=new Ht,_=null,R=null,b=new cn;b.viewport=new ke;let C=new cn;C.viewport=new ke;let P=[b,C],I=new tc,N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=M[k];return K===void 0&&(K=new Nr,M[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=M[k];return K===void 0&&(K=new Nr,M[k]=K),K.getGripSpace()},this.getHand=function(k){let K=M[k];return K===void 0&&(K=new Nr,M[k]=K),K.getHandSpace()};function G(k){let K=E.indexOf(k.inputSource);if(K===-1)return;let xt=M[K];xt!==void 0&&(xt.update(k.inputSource,k.frame,l||a),xt.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",j);for(let k=0;k<M.length;k++){let K=E[k];K!==null&&(E[k]=null,M[k].disconnect(K))}N=null,U=null,g.reset();for(let k in p)delete p[k];if(t.setRenderTarget(w),d=null,f=null,u=null,i=null,v=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),R!==null){let k=R.camera;k.fov=R.fov,k.zoom=R.zoom,k.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",H),i.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,Mt=null;x.depth&&(Mt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?vs:wi,kt=x.stencil?$r:oi);let Xt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new In(f.textureWidth,f.textureHeight,{format:jn,type:Vn,depthTexture:new us(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new In(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(k){for(let K=0;K<k.removed.length;K++){let xt=k.removed[K],kt=E.indexOf(xt);kt>=0&&(E[kt]=null,M[kt].disconnect(xt))}for(let K=0;K<k.added.length;K++){let xt=k.added[K],kt=E.indexOf(xt);if(kt===-1){for(let Xt=0;Xt<M.length;Xt++)if(Xt>=E.length){E.push(xt),kt=Xt;break}else if(E[Xt]===null){E[Xt]=xt,kt=Xt;break}if(kt===-1)break}let Mt=M[kt];Mt&&Mt.connect(xt)}}let q=new D,J=new D;function et(k,K,xt){q.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);let kt=q.distanceTo(J),Mt=K.projectionMatrix.elements,Xt=xt.projectionMatrix.elements,Ce=Mt[14]/(Mt[10]-1),Yt=Mt[14]/(Mt[10]+1),se=(Mt[9]+1)/Mt[5],ge=(Mt[9]-1)/Mt[5],ee=(Mt[8]-1)/Mt[0],Se=(Xt[8]+1)/Xt[0],ze=Ce*ee,Cn=Ce*Se,Be=kt/(-ee+Se),Je=Be*-ee;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Je),k.translateZ(Be),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Mt[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let B=Ce+Be,un=Yt+Be,we=ze-Je,L=Cn+(kt-Je),S=se*Yt/un*B,V=ge*Yt/un*B;k.projectionMatrix.makePerspective(we,L,S,V,B,un),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function X(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let K=k.near,xt=k.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),I.near=C.near=b.near=K,I.far=C.far=b.far=xt,(N!==I.near||U!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,U=I.far),I.layers.mask=k.layers.mask|6,b.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;let kt=k.parent,Mt=I.cameras;X(I,kt);for(let Xt=0;Xt<Mt.length;Xt++)X(Mt[Xt],kt);Mt.length===2?et(I,b,C):I.projectionMatrix.copy(b.projectionMatrix),R===null&&k.isPerspectiveCamera&&(R={camera:k,fov:k.fov,zoom:k.zoom}),z(k,I,kt)};function z(k,K,xt){xt===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(xt.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Pl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(k){return p[k]};let at=null;function ct(k,K){if(h=K.getViewerPose(l||a),m=K,h!==null){let xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let kt=!1;xt.length!==I.cameras.length&&(I.cameras.length=0,kt=!0);for(let Yt=0;Yt<xt.length;Yt++){let se=xt[Yt],ge=null;if(d!==null)ge=d.getViewport(se);else{let Se=u.getViewSubImage(f,se);ge=Se.viewport,Yt===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let ee=P[Yt];ee===void 0&&(ee=new cn,ee.layers.enable(Yt),ee.viewport=new ke,P[Yt]=ee),ee.matrix.fromArray(se.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(se.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ge.x,ge.y,ge.width,ge.height),Yt===0&&(I.matrix.copy(ee.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),kt===!0&&I.cameras.push(ee)}let Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Yt=u.getDepthInformation(xt[0]);Yt&&Yt.isValid&&Yt.texture&&g.init(Yt,i.renderState)}if(Mt&&Mt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let Yt=0;Yt<xt.length;Yt++){let se=xt[Yt].camera;if(se){let ge=p[se];ge||(ge=new Ga,p[se]=ge);let ee=u.getCameraImage(se);ge.sourceTexture=ee}}}}for(let xt=0;xt<M.length;xt++){let kt=E[xt],Mt=M[xt];kt!==null&&Mt!==void 0&&Mt.update(kt,K,l||a)}at&&at(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let ft=new i0;ft.setAnimationLoop(ct),this.setAnimationLoop=function(k){at=k},this.dispose=function(){}}},fw=new pe,c0=new qt;c0.set(-1,0,0,0,1,0,0,0,1);function dw(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,df(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p),w=x.envMap,v=x.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(c0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pw(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let E=M.program;n.uniformBlockBinding(v,E)}function l(v,M){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",x));let T=M.program;n.updateUBOMapping(v,T);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let E=s.createBuffer(),T=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,E),E}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=i[v.id],E=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,R=E.length;_<R;_++){let b=E[_];if(Array.isArray(b))for(let C=0,P=b.length;C<P;C++)d(b[C],_,C,T);else d(b,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,E,T){if(y(v,M,E,T)===!0){let _=v.__offset,R=v.value;if(Array.isArray(R)){let b=0;for(let C=0;C<R.length;C++){let P=R[C],I=p(P);m(P,v.__data,b),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(b+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function m(v,M,E){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,E)}function y(v,M,E,T){let _=v.value,R=M+"_"+E;if(T[R]===void 0)return typeof _=="number"||typeof _=="boolean"?T[R]=_:ArrayBuffer.isView(_)?T[R]=_.slice():T[R]=_.clone(),!0;{let b=T[R];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return T[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(v){let M=v.uniforms,E=0,T=16;for(let R=0,b=M.length;R<b;R++){let C=Array.isArray(M[R])?M[R]:[M[R]];for(let P=0,I=C.length;P<I;P++){let N=C[P],U=Array.isArray(N.value)?N.value:[N.value];for(let G=0,H=U.length;G<H;G++){let j=U[G],q=p(j),J=E%T,et=J%q.boundary,X=J+et;E+=et,X!==0&&T-X<q.storage&&(E+=T-X),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=q.storage}}}let _=E%T;return _>0&&(E+=T-_),v.__size=E,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:w}}var mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function gw(){return Pi===null&&(Pi=new ri(mw,16,16,_s,li),Pi.name="DFG_LUT",Pi.minFilter=Ye,Pi.magFilter=Ye,Pi.wrapS=bi,Pi.wrapT=bi,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var Yc=class{constructor(t={}){let{canvas:e=Am(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Vn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=d,g=new Set([uc,hc,cc]),p=new Set([Vn,oi,Hr,$r,ac,oc]),x=new Uint32Array(4),w=new Int32Array(4),v=new D,M=null,E=null,T=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,C=!1,P=null,I=null,N=null,U=null;this._outputColorSpace=qe;let G=0,H=0,j=null,q=-1,J=null,et=new ke,X=new ke,z=null,at=new Kt(0),ct=0,ft=e.width,k=e.height,K=1,xt=null,kt=null,Mt=new ke(0,0,ft,k),Xt=new ke(0,0,ft,k),Ce=!1,Yt=new za,se=!1,ge=!1,ee=new pe,Se=new D,ze=new ke,Cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function Je(){return j===null?K:1}let B=n;function un(A,F){return e.getContext(A,F)}let we,L,S,V,Y,Q,dt,yt,tt,it,vt,Ft,St,_t,Ot,zt,Zt,O,bt,nt,wt,Rt,rt;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",ti,!1),B===null){let F="webgl2";if(B=un(F,A),B===null)throw un(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(A){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",ti,!1),Vt("WebGLRenderer: "+A.message),A}function Bt(){we=new M1(B),we.init(),wt=new cw(B,we),L=new d1(B,we,t,wt),S=new ow(B,we),L.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),I=B.createFramebuffer(),N=B.createFramebuffer(),U=B.createFramebuffer(),V=new T1(B),Y=new Xb,Q=new lw(B,we,S,Y,L,wt,V),dt=new w1(b),yt=new Rx(B),Rt=new u1(B,yt),tt=new S1(B,yt,V,Rt),it=new R1(B,tt,yt,Rt,V),O=new A1(B,L,Q),Ot=new p1(Y),vt=new qb(b,dt,we,L,Rt,Ot),Ft=new dw(b,Y),St=new jb,_t=new ew(we),Zt=new h1(b,dt,S,it,m,c),zt=new aw(b,it,L),rt=new pw(B,V,L,S),bt=new f1(B,we,V),nt=new E1(B,we,V),V.programs=vt.programs,b.capabilities=L,b.extensions=we,b.properties=Y,b.renderLists=St,b.shadowMap=zt,b.state=S,b.info=V}y!==Vn&&(R=new P1(y,e.width,e.height,o,i,r));let Nt=new Ff(b,B);this.xr=Nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(ft,k,!1))},this.getSize=function(A){return A.set(ft,k)},this.setSize=function(A,F,Z=!0){if(Nt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=A,k=F,e.width=Math.floor(A*K),e.height=Math.floor(F*K),Z===!0&&(e.style.width=A+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(ft*K,k*K).floor()},this.setDrawingBufferSize=function(A,F,Z){ft=A,k=F,K=Z,e.width=Math.floor(A*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(y===Vn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Mt)},this.setViewport=function(A,F,Z,$){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,F,Z,$),S.viewport(et.copy(Mt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(Xt)},this.setScissor=function(A,F,Z,$){A.isVector4?Xt.set(A.x,A.y,A.z,A.w):Xt.set(A,F,Z,$),S.scissor(X.copy(Xt).multiplyScalar(K).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){S.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){kt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Z=!0){let $=0;if(A){let W=!1;if(j!==null){let At=j.texture.format;W=g.has(At)}if(W){let At=j.texture.type,Pt=p.has(At),Tt=Zt.getClearColor(),It=Zt.getClearAlpha(),Dt=Tt.r,Qt=Tt.g,re=Tt.b;Pt?(x[0]=Dt,x[1]=Qt,x[2]=re,x[3]=It,B.clearBufferuiv(B.COLOR,0,x)):(w[0]=Dt,w[1]=Qt,w[2]=re,w[3]=It,B.clearBufferiv(B.COLOR,0,w))}else $|=B.COLOR_BUFFER_BIT}F&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",ti,!1),Zt.dispose(),St.dispose(),_t.dispose(),Y.dispose(),dt.dispose(),it.dispose(),Rt.dispose(),rt.dispose(),vt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",cp),Nt.removeEventListener("sessionend",hp),Is.stop()};function Pe(A){A.preventDefault(),Ua("WebGLRenderer: Context Lost."),C=!0}function ye(){Ua("WebGLRenderer: Context Restored."),C=!1;let A=V.autoReset,F=zt.enabled,Z=zt.autoUpdate,$=zt.needsUpdate,W=zt.type;Bt(),V.autoReset=A,zt.enabled=F,zt.autoUpdate=Z,zt.needsUpdate=$,zt.type=W}function ti(A){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mi(A){let F=A.target;F.removeEventListener("dispose",mi),Oy(F)}function Oy(A){By(A),Y.remove(A)}function By(A){let F=Y.get(A).programs;F!==void 0&&(F.forEach(function(Z){vt.releaseProgram(Z)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,$,W,At){F===null&&(F=Cn);let Pt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Tt=Vy(A,F,Z,$,W);S.setMaterial($,Pt);let It=Z.index,Dt=1;if($.wireframe===!0){if(It=tt.getWireframeAttribute(Z),It===void 0)return;Dt=2}let Qt=Z.drawRange,re=Z.attributes.position,Lt=Qt.start*Dt,xe=(Qt.start+Qt.count)*Dt;At!==null&&(Lt=Math.max(Lt,At.start*Dt),xe=Math.min(xe,(At.start+At.count)*Dt)),It!==null?(Lt=Math.max(Lt,0),xe=Math.min(xe,It.count)):re!=null&&(Lt=Math.max(Lt,0),xe=Math.min(xe,re.count));let Ke=xe-Lt;if(Ke<0||Ke===1/0)return;Rt.setup(W,$,Tt,Z,It);let Le,Ae=bt;if(It!==null&&(Le=yt.get(It),Ae=nt,Ae.setIndex(Le)),W.isMesh)$.wireframe===!0?(S.setLineWidth($.wireframeLinewidth*Je()),Ae.setMode(B.LINES)):Ae.setMode(B.TRIANGLES);else if(W.isLine){let fn=$.linewidth;fn===void 0&&(fn=1),S.setLineWidth(fn*Je()),W.isLineSegments?Ae.setMode(B.LINES):W.isLineLoop?Ae.setMode(B.LINE_LOOP):Ae.setMode(B.LINE_STRIP)}else W.isPoints?Ae.setMode(B.POINTS):W.isSprite&&Ae.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let fn=W._multiDrawStarts,Ct=W._multiDrawCounts,Mn=W._multiDrawCount,de=It?yt.get(It).bytesPerElement:1,Wn=Y.get($).currentProgram.getUniforms();for(let gi=0;gi<Mn;gi++)Wn.setValue(B,"_gl_DrawID",gi),Ae.render(fn[gi]/de,Ct[gi])}else if(W.isInstancedMesh)Ae.renderInstances(Lt,Ke,W.count);else if(Z.isInstancedBufferGeometry){let fn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ct=Math.min(Z.instanceCount,fn);Ae.renderInstances(Lt,Ke,Ct)}else Ae.render(Lt,Ke)};function lp(A,F,Z,$){P!==null&&A.isNodeMaterial&&P.setObject($,A),se===!0&&Ot.setState(A,Z,!1),A.transparent===!0&&A.side===an&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Ho(A,F,$),A.side=ys,A.needsUpdate=!0,Ho(A,F,$),A.side=an):Ho(A,F,$)}this.compile=function(A,F,Z=null){Z===null&&(Z=A),P!==null&&P.renderStart(A,F,Z),E=_t.get(Z),E.init(F),_.push(E),Z.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),ge=this.localClippingEnabled,se=Ot.init(this.clippingPlanes,ge),se===!0&&Ot.setGlobalState(this.clippingPlanes,F),P!==null&&zt.render(E.state.shadowsArray,Z,F);let $=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let At=W.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){let Tt=At[Pt];lp(Tt,Z,F,W),$.add(Tt)}else lp(At,Z,F,W),$.add(At)}),E=_.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(A,F,Z=null){let $=this.compile(A,F,Z);return new Promise(W=>{function At(){if($.forEach(function(Pt){let It=Y.get(Pt).currentProgram;(It===void 0||It.isReady())&&$.delete(Pt)}),$.size===0){W(A);return}setTimeout(At,10)}we.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let cu=null;function ky(A){cu&&cu(A)}function cp(){Is.stop()}function hp(){Is.start()}let Is=new i0;Is.setAnimationLoop(ky),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(A){cu=A,Nt.setAnimationLoop(A),A===null?Is.stop():Is.start()},Nt.addEventListener("sessionstart",cp),Nt.addEventListener("sessionend",hp),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(A,F);let Z=Nt.enabled===!0&&Nt.isPresenting===!0,$=R!==null&&(j===null||Z)&&R.begin(b,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(F),F=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,F,j),E=_t.get(A,_.length),E.init(F),E.state.textureUnits=Q.getTextureUnits(),_.push(E),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Yt.setFromProjectionMatrix(ee,si,F.reversedDepth),ge=this.localClippingEnabled,se=Ot.init(this.clippingPlanes,ge),M=St.get(A,T.length),M.init(),T.push(M),Nt.enabled===!0&&Nt.isPresenting===!0){let Pt=b.xr.getDepthSensingMesh();Pt!==null&&hu(Pt,F,-1/0,b.sortObjects)}hu(A,F,0,b.sortObjects),M.finish(),P!==null&&P.updateLights(E.state.lightsArray),b.sortObjects===!0&&M.sort(xt,kt),Be=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Be&&Zt.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ot.beginShadows();let W=E.state.shadowsArray;if(zt.render(W,A,F),se===!0&&Ot.endShadows(),($&&R.hasRenderPass())===!1){let Pt=M.opaque,Tt=M.transmissive;if(E.setupLights(),F.isArrayCamera){let It=F.cameras;if(Tt.length>0)for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt];fp(Pt,Tt,A,re)}Be&&Zt.render(A);for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt];up(M,A,re,re.viewport)}}else Tt.length>0&&fp(Pt,Tt,A,F),Be&&Zt.render(A),up(M,A,F)}j!==null&&H===0&&(Q.updateMultisampleRenderTarget(j),Q.updateRenderTargetMipmap(j)),$&&R.end(b),A.isScene===!0&&A.onAfterRender(b,A,F),Rt.resetDefaultState(),q=-1,J=null,_.pop(),_.length>0?(E=_[_.length-1],Q.setTextureUnits(E.state.textureUnits),se===!0&&Ot.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,P!==null&&P.renderEnd()};function hu(A,F,Z,$){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Yt)){$&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);let Pt=it.update(A),Tt=A.material;Tt.visible&&M.push(A,Pt,Tt,Z,ze.z,null,F)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Yt))){let Pt=it.update(A),Tt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ze.copy(Pt.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(Tt)){let It=Pt.groups;for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt],Lt=Tt[re.materialIndex];Lt&&Lt.visible&&M.push(A,Pt,Lt,Z,ze.z,re,F)}}else Tt.visible&&M.push(A,Pt,Tt,Z,ze.z,null,F)}}let At=A.children;for(let Pt=0,Tt=At.length;Pt<Tt;Pt++)hu(At[Pt],F,Z,$)}function up(A,F,Z,$){let{opaque:W,transmissive:At,transparent:Pt}=A;E.setupLightsView(Z),se===!0&&Ot.setGlobalState(b.clippingPlanes,Z),$&&S.viewport(et.copy($)),W.length>0&&Go(W,F,Z),At.length>0&&Go(At,F,Z),Pt.length>0&&Go(Pt,F,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function fp(A,F,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Lt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new In(1,1,{generateMipmaps:!0,type:Lt?li:Vn,minFilter:Ci,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let At=E.state.transmissionRenderTarget[$.id],Pt=$.viewport||et;At.setSize(Pt.z*b.transmissionResolutionScale,Pt.w*b.transmissionResolutionScale);let Tt=b.getRenderTarget(),It=b.getActiveCubeFace(),Dt=b.getActiveMipmapLevel();b.setRenderTarget(At),b.getClearColor(at),ct=b.getClearAlpha(),ct<1&&b.setClearColor(16777215,.5),b.clear(),Be&&Zt.render(Z);let Qt=b.toneMapping;b.toneMapping=ai;let re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),se===!0&&Ot.setGlobalState(b.clippingPlanes,$),Go(A,Z,$),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),we.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let xe=0,Ke=F.length;xe<Ke;xe++){let Le=F[xe],{object:Ae,geometry:fn,material:Ct,group:Mn}=Le;if(Ct.side===an&&Ae.layers.test($.layers)){let de=Ct.side;Ct.side=hn,Ct.needsUpdate=!0,dp(Ae,Z,$,fn,Ct,Mn),Ct.side=de,Ct.needsUpdate=!0,Lt=!0}}Lt===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}b.setRenderTarget(Tt,It,Dt),b.setClearColor(at,ct),re!==void 0&&($.viewport=re),b.toneMapping=Qt}function Go(A,F,Z){let $=F.isScene===!0?F.overrideMaterial:null;for(let W=0,At=A.length;W<At;W++){let Pt=A[W],{object:Tt,geometry:It,group:Dt}=Pt,Qt=Pt.material;Qt.allowOverride===!0&&$!==null&&(Qt=$),Tt.layers.test(Z.layers)&&dp(Tt,F,Z,It,Qt,Dt)}}function dp(A,F,Z,$,W,At){P!==null&&W.isNodeMaterial&&P.setObject(A,W),A.onBeforeRender(b,F,Z,$,W,At),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(b,F,Z,$,A,At),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,b.renderBufferDirect(Z,F,$,W,A,At),W.side=ys,W.needsUpdate=!0,b.renderBufferDirect(Z,F,$,W,A,At),W.side=an):b.renderBufferDirect(Z,F,$,W,A,At),A.onAfterRender(b,F,Z,$,W,At)}function Ho(A,F,Z){F.isScene!==!0&&(F=Cn);let $=Y.get(A),W=E.state.lights,At=E.state.shadowsArray,Pt=W.state.version,Tt=vt.getParameters(A,W.state,At,F,Z,E.state.lightProbeGridArray),It=vt.getProgramCacheKey(Tt),Dt=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;let Qt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=dt.get(A.envMap||$.environment,Qt),$.envMapRotation=$.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Dt===void 0&&(A.addEventListener("dispose",mi),Dt=new Map,$.programs=Dt);let re=Dt.get(It);if(re!==void 0){if($.currentProgram===re&&$.lightsStateVersion===Pt)return mp(A,Tt),re}else Tt.uniforms=vt.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,Z,Tt),A.onBeforeCompile(Tt,b),re=vt.acquireProgram(Tt,It),Dt.set(It,re),$.uniforms=Tt.uniforms;let Lt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),mp(A,Tt),$.needsLights=Hy(A),$.lightsStateVersion=Pt,$.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.sunLights.value=W.state.sun,Lt.sunLightShadows.value=W.state.sunShadow,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.sunShadowMatrix.value=W.state.sunShadowMatrix,Lt.sunShadowCascade.value=W.state.sunShadowCascade,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=re,$.uniformsList=null,re}function pp(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function mp(A,F){let Z=Y.get(A);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function zy(A,F){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Z=0,$=A.length;Z<$;Z++){let W=A[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Vy(A,F,Z,$,W){F.isScene!==!0&&(F=Cn),Q.resetTextureUnits();let At=F.fog,Pt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,Tt=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:le.workingColorSpace,It=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Dt=dt.get($.envMap||Pt,It),Qt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,re=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!Z.morphAttributes.position,xe=!!Z.morphAttributes.normal,Ke=!!Z.morphAttributes.color,Le=ai;$.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=b.toneMapping);let Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fn=Ae!==void 0?Ae.length:0,Ct=Y.get($),Mn=E.state.lights;if(se===!0&&(ge===!0||A!==J)){let Ie=A===J&&$.id===q;Ot.setState($,A,Ie)}let de=!1;$.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Mn.state.version||Ct.outputColorSpace!==Tt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Dt||$.fog===!0&&Ct.fog!==At||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ot.numPlanes||Ct.numIntersection!==Ot.numIntersection)||Ct.vertexAlphas!==Qt||Ct.vertexTangents!==re||Ct.morphTargets!==Lt||Ct.morphNormals!==xe||Ct.morphColors!==Ke||Ct.toneMapping!==Le||Ct.morphTargetsCount!==fn||!!Ct.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Ct.__version=$.version);let Wn=Ct.currentProgram;de===!0&&(Wn=Ho($,F,W),P&&$.isNodeMaterial&&P.onUpdateProgram($,Wn,Ct));let gi=!1,ts=!1,ar=!1,Ee=Wn.getUniforms(),We=Ct.uniforms;if(S.useProgram(Wn.program)&&(gi=!0,ts=!0,ar=!0),$.id!==q&&(q=$.id,ts=!0),Ct.needsLights){let Ie=zy(E.state.lightProbeGridArray,W);Ct.lightProbeGrid!==Ie&&(Ct.lightProbeGrid=Ie,ts=!0)}if(gi||J!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(B,"projectionMatrix",A.projectionMatrix),Ee.setValue(B,"viewMatrix",A.matrixWorldInverse);let ns=Ee.map.cameraPosition;ns!==void 0&&ns.setValue(B,Se.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ee.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,ts=!0,ar=!0)}if(Ct.needsLights&&(Mn.state.sunShadowMap.length>0&&Ee.setValue(B,"sunShadowMap",Mn.state.sunShadowMap,Q),Mn.state.directionalShadowMap.length>0&&Ee.setValue(B,"directionalShadowMap",Mn.state.directionalShadowMap,Q),Mn.state.spotShadowMap.length>0&&Ee.setValue(B,"spotShadowMap",Mn.state.spotShadowMap,Q),Mn.state.pointShadowMap.length>0&&Ee.setValue(B,"pointShadowMap",Mn.state.pointShadowMap,Q)),W.isSkinnedMesh){Ee.setOptional(B,W,"bindMatrix"),Ee.setOptional(B,W,"bindMatrixInverse");let Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ee.setValue(B,"boneTexture",Ie.boneTexture,Q))}W.isBatchedMesh&&(Ee.setOptional(B,W,"batchingTexture"),Ee.setValue(B,"batchingTexture",W._matricesTexture,Q),Ee.setOptional(B,W,"batchingIdTexture"),Ee.setValue(B,"batchingIdTexture",W._indirectTexture,Q),Ee.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Ee.setValue(B,"batchingColorTexture",W._colorsTexture,Q));let es=Z.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&O.update(W,Z,Wn),(ts||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,Ee.setValue(B,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(We.envMapIntensity.value=F.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=gw()),ts){if(Ee.setValue(B,"toneMappingExposure",b.toneMappingExposure),Ct.needsLights&&Gy(We,ar),At&&$.fog===!0&&Ft.refreshFogUniforms(We,At),Ft.refreshMaterialUniforms(We,$,K,k,E.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.lightProbeGrid){let Ie=Ct.lightProbeGrid;We.probesSH.value=Ie.texture,We.probesMin.value.copy(Ie.boundingBox.min),We.probesMax.value.copy(Ie.boundingBox.max),We.probesResolution.value.copy(Ie.resolution)}Xr.upload(B,pp(Ct),We,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xr.upload(B,pp(Ct),We,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(B,"center",W.center),Ee.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(B,"normalMatrix",W.normalMatrix),Ee.setValue(B,"modelMatrix",W.matrixWorld),$.uniformsGroups!==void 0){let Ie=$.uniformsGroups;for(let ns=0,or=Ie.length;ns<or;ns++){let yp=Ie[ns];rt.update(yp,Wn),rt.bind(yp,Wn)}}return Wn}function Gy(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Hy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,F,Z){let $=Y.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=F,Y.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let Z=Y.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Z=0){j=A,G=F,H=Z;let $=null,W=!1,At=!1;if(A){let Tt=Y.get(A);if(Tt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Tt.__webglFramebuffer),et.copy(A.viewport),X.copy(A.scissor),z=A.scissorTest,S.viewport(et),S.scissor(X),S.setScissorTest(z),q=-1;return}else if(Tt.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Tt.__hasExternalTextures)Q.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Qt=A.depthTexture;if(Tt.__boundDepthTexture!==Qt){if(Qt!==null&&Y.has(Qt)&&(A.width!==Qt.image.width||A.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}let It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(At=!0);let Dt=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?$=Dt[F][Z]:$=Dt[F],W=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?$=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Dt)?$=Dt[Z]:$=Dt,et.copy(A.viewport),X.copy(A.scissor),z=A.scissorTest}else et.copy(Mt).multiplyScalar(K).floor(),X.copy(Xt).multiplyScalar(K).floor(),z=Ce;if(Z!==0&&($=I),S.bindFramebuffer(B.FRAMEBUFFER,$)&&S.drawBuffers(A,$),S.viewport(et),S.scissor(X),S.setScissorTest(z),W){let Tt=Y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,Z)}else if(At){let Tt=F;for(let It=0;It<A.textures.length;It++){let Dt=Y.get(A.textures[It]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+It,Dt.__webglTexture,Z,Tt)}}else if(A!==null&&Z!==0){let Tt=Y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,Z)}q=-1};function gp(A){let F=Y.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=L.textureFormatReadable(A.format),F.__typeReadable=L.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Z,$,W,At,Pt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){S.bindFramebuffer(B.FRAMEBUFFER,It);try{let Dt=A.textures[Tt],Qt=Dt.format,re=Dt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let Lt=gp(Dt);if(Lt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-$&&Z>=0&&Z<=A.height-W&&B.readPixels(F,Z,$,W,wt.convert(Qt),wt.convert(re),At)}finally{let Dt=j!==null?Y.get(j).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,F,Z,$,W,At,Pt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(F>=0&&F<=A.width-$&&Z>=0&&Z<=A.height-W){S.bindFramebuffer(B.FRAMEBUFFER,It);let Dt=A.textures[Tt],Qt=Dt.format,re=Dt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);let Lt=gp(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.bufferData(B.PIXEL_PACK_BUFFER,At.byteLength,B.STREAM_READ),B.readPixels(F,Z,$,W,wt.convert(Qt),wt.convert(re),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ke=j!==null?Y.get(j).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Ke);let Le=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Cm(B,Le,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,At),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(xe),B.deleteSync(Le),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Z=0){let $=Math.pow(2,-Z),W=Math.floor(A.image.width*$),At=Math.floor(A.image.height*$),Pt=F!==null?F.x:0,Tt=F!==null?F.y:0;Q.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Pt,Tt,W,At),S.unbindTexture()},this.copyTextureToTexture=function(A,F,Z=null,$=null,W=0,At=0){let Pt,Tt,It,Dt,Qt,re,Lt,xe,Ke,Le=A.isCompressedTexture?A.mipmaps[At]:A.image;if(Z!==null)Pt=Z.max.x-Z.min.x,Tt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Dt=Z.min.x,Qt=Z.min.y,re=Z.isBox3?Z.min.z:0;else{let We=Math.pow(2,-W);Pt=Math.floor(Le.width*We),Tt=Math.floor(Le.height*We),A.isDataArrayTexture?It=Le.depth:A.isData3DTexture?It=Math.floor(Le.depth*We):It=1,Dt=0,Qt=0,re=0}$!==null?(Lt=$.x,xe=$.y,Ke=$.z):(Lt=0,xe=0,Ke=0);let Ae=wt.convert(F.format),fn=wt.convert(F.type),Ct;F.isData3DTexture?(Q.setTexture3D(F,0),Ct=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Ct=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Ct=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Mn=S.getParameter(B.UNPACK_ROW_LENGTH),de=S.getParameter(B.UNPACK_IMAGE_HEIGHT),Wn=S.getParameter(B.UNPACK_SKIP_PIXELS),gi=S.getParameter(B.UNPACK_SKIP_ROWS),ts=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),S.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),S.pixelStorei(B.UNPACK_SKIP_IMAGES,re);let ar=A.isDataArrayTexture||A.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let We=Y.get(A),es=Y.get(F),Ie=Y.get(We.__renderTarget),ns=Y.get(es.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,Ie.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let or=0;or<It;or++)ar&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,W,re+or),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,At,Ke+or)),B.blitFramebuffer(Dt,Qt,Pt,Tt,Lt,xe,Pt,Tt,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Y.has(A)){let We=Y.get(A),es=Y.get(F);S.bindFramebuffer(B.READ_FRAMEBUFFER,N),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ie=0;Ie<It;Ie++)ar?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,W,re+Ie):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,We.__webglTexture,W),Ee?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,es.__webglTexture,At,Ke+Ie):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,es.__webglTexture,At),W!==0?B.blitFramebuffer(Dt,Qt,Pt,Tt,Lt,xe,Pt,Tt,B.COLOR_BUFFER_BIT,B.NEAREST):Ee?B.copyTexSubImage3D(Ct,At,Lt,xe,Ke+Ie,Dt,Qt,Pt,Tt):B.copyTexSubImage2D(Ct,At,Lt,xe,Dt,Qt,Pt,Tt);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ee?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ct,At,Lt,xe,Ke,Pt,Tt,It,Ae,fn,Le.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,At,Lt,xe,Ke,Pt,Tt,It,Ae,Le.data):B.texSubImage3D(Ct,At,Lt,xe,Ke,Pt,Tt,It,Ae,fn,Le):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,At,Lt,xe,Pt,Tt,Ae,fn,Le.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,At,Lt,xe,Le.width,Le.height,Ae,Le.data):B.texSubImage2D(B.TEXTURE_2D,At,Lt,xe,Pt,Tt,Ae,fn,Le);S.pixelStorei(B.UNPACK_ROW_LENGTH,Mn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Wn),S.pixelStorei(B.UNPACK_SKIP_ROWS,gi),S.pixelStorei(B.UNPACK_SKIP_IMAGES,ts),At===0&&F.generateMipmaps&&B.generateMipmap(Ct),S.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){G=0,H=0,j=null,S.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Wt=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Oe=s=>(s=Wt(s),s*s*(3-2*s)),h0=s=>(s=Wt(s),s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2),pt=(s,t,e)=>Wt((s-t)/(e-t)),Gn=(s,t,e,n=.4,i=.4)=>Math.min(pt(s,t-n,t),1-pt(s,e,e+i));function ci(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var $i=6371,hi=Math.PI/180;function Wi(s,t,e=1,n=new D){let i=s*hi,r=t*hi;return n.set(e*Math.cos(i)*Math.cos(r),e*Math.sin(i),-e*Math.cos(i)*Math.sin(r))}function u0(s,t){let e=s*hi,n=t*hi;return{up:Wi(s,t),east:new D(-Math.sin(n),0,-Math.cos(n)),north:new D(-Math.sin(e)*Math.cos(n),Math.cos(e),Math.sin(e)*Math.sin(n))}}function yw(s){let t=s.clone().normalize();return{lat:Math.asin(t.y)/hi,lon:Math.atan2(-t.z,t.x)/hi}}function Li(s,t){return s=`#include <common>
#include <logdepthbuf_pars_vertex>
`+s.replace(/}\s*$/,`
#include <logdepthbuf_vertex>
}`),t=`#include <logdepthbuf_pars_fragment>
`+t.replace(/void main\(\) \{/,`void main() {
#include <logdepthbuf_fragment>
`),{vertexShader:s,fragmentShader:t}}var Bf=`
varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main() { vUv = uv; vN = normalize(position); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w; }`,xw=`
uniform sampler2D day, emb; uniform float embMix, sweep, sweepOn, grid, dim, time; uniform vec3 sun, focus; uniform float focusR;
varying vec2 vUv; varying vec3 vN; varying vec3 vW;
void main() {
  vec3 n = normalize(vN);
  float lon = atan(-n.z, n.x), lat = asin(n.y);
  vec3 c = texture2D(day, vUv).rgb;
  vec4 e = texture2D(emb, vUv);
  float lit = 0.8 + 0.45 * max(dot(n, sun), 0.0);
  c *= lit;
  // the sweep: embedding colour behind a meridian that moves east
  float behind = sweepOn > 0.5 ? step(lon, sweep) : 1.0;
  float m = embMix * behind * e.a;
  vec3 ec = e.rgb * 0.92 + 0.04;
  c = mix(c, ec, m);
  // the scan line itself
  if (sweepOn > 0.5) { float d = abs(lon - sweep); c += vec3(0.11, 0.78, 1.0) * (smoothstep(0.035, 0.0, d) * 1.4 + smoothstep(0.35, 0.0, d) * 0.12 * step(lon, sweep)); }
  // a faint graticule every 10 degrees
  float gl = 0.0;
  vec2 g = vec2(lon, lat) / (3.14159265 / 18.0);
  vec2 f = abs(fract(g) - 0.5); vec2 w = fwidth(g) * 1.2;
  gl = max(1.0 - smoothstep(0.0, w.x, 0.5 - f.x), 1.0 - smoothstep(0.0, w.y, 0.5 - f.y));
  c = mix(c, vec3(0.11, 0.78, 1.0), gl * grid * 0.16);
  // a ring around a place the console is looking at
  if (focusR > 0.0) { float d = acos(clamp(dot(n, focus), -1.0, 1.0)); c += vec3(1.0, 0.45, 0.06) * (smoothstep(focusR * 0.08, 0.0, abs(d - focusR)) * 0.9); }
  gl_FragColor = linearToOutputTexel(vec4(c * dim, 1.0));
}`,vw=`
uniform float time, opacity; varying vec3 vN;
float h(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float noise(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h(i), h(i + vec3(1,0,0)), f.x), mix(h(i + vec3(0,1,0)), h(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h(i + vec3(0,0,1)), h(i + vec3(1,0,1)), f.x), mix(h(i + vec3(0,1,1)), h(i + vec3(1,1,1)), f.x), f.y), f.z); }
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 6; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
void main() {
  vec3 n = normalize(vN);
  float c = fbm(n * 3.2 + vec3(time * 0.004, 0.0, time * 0.002));
  float band = 0.75 + 0.25 * cos(asin(n.y) * 5.5);
  float a = smoothstep(0.5, 0.78, c * band) * opacity;
  gl_FragColor = vec4(vec3(0.96), a * 0.85);
}`,_w=`
uniform vec3 camPos; uniform float strength; varying vec3 vW; varying vec3 vN;
void main() { vec3 v = normalize(camPos - vW); float f = pow(1.0 - abs(dot(normalize(vN), v)), 3.0) * strength;
  gl_FragColor = vec4(vec3(0.3, 0.75, 1.0) * f * 1.3, f); }`,bw=`
attribute float delay; attribute vec3 tint; uniform float progress; varying float vA; varying vec3 vC; varying vec2 vP;
void main() { float t = clamp((progress - delay) * 6.0, 0.0, 1.0); vA = t * (1.0 + 1.6 * exp(-8.0 * max(progress - delay, 0.0))); vC = tint; vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,ww=`
uniform float opacity; varying float vA; varying vec3 vC; varying vec2 vP;
void main() { float r = length(vP); float edge = smoothstep(0.62, 0.9, r); gl_FragColor = vec4(vC, (0.16 + edge * 0.8) * vA * opacity); }`,Mw=`
attribute vec3 from; attribute float seed; uniform float progress, size; uniform vec3 core; varying float vA;
void main() { float t = clamp(progress * 1.4 - seed * 0.4, 0.0, 1.0); float e = t * t * (3.0 - 2.0 * t);
  vec3 mid = normalize(from + core) * (length(core) * 0.6 + 1.0) + vec3(sin(seed * 40.0), cos(seed * 31.0), sin(seed * 17.0)) * 0.25;
  vec3 p = mix(mix(from, mid, e), mix(mid, core, e), e);
  vA = t > 0.0 && t < 1.0 ? 1.0 : 0.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = size / -mv.z; gl_Position = projectionMatrix * mv; }`,Sw=`
varying float vA; void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(0.45, 0.92, 1.0, vA * (1.0 - d * 2.0)); }`,Ew="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Tw=`
uniform sampler2D colour, tiles, overlay; uniform float time, m, opacity, overlayMix, scan;
varying vec2 vUv;
void main() {
  vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
  vec2 cell = floor(uv * m), f = fract(uv * m);
  vec4 t = texture2D(tiles, (cell + 0.5) / m);          // r: loaded, g: age in seconds / 4
  float age = t.g * 4.0;
  vec3 cy = vec3(0.11, 0.78, 1.0);
  vec4 c = texture2D(colour, uv);
  vec4 o = texture2D(overlay, uv);
  float edge = step(f.x, 0.03) + step(0.97, f.x) + step(f.y, 0.03) + step(0.97, f.y);
  vec3 col; float a;
  if (t.r < 0.5) {
    float s = fract(uv.y * 1.0 - time * 0.35);
    col = cy * (0.18 * min(edge, 1.0) + 0.5 * smoothstep(0.02, 0.0, abs(s - 0.5)) * scan);
    a = 0.25 + 0.4 * min(edge, 1.0);
  } else {
    col = c.rgb;
    col = mix(col, o.rgb, o.a * overlayMix);
    float flash = exp(-age * 3.5);
    col += cy * flash * (0.6 + 0.8 * min(edge, 1.0));
    a = c.a;
  }
  // a frame of light round the window, so the live data stands apart
  float b = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  float frame = smoothstep(0.006, 0.0, b);
  col = mix(col, cy * 1.4, frame); a = max(a, frame);
  gl_FragColor = linearToOutputTexel(vec4(col, a * opacity));
}`,Jc=class{constructor(t){this.renderer=new Yc({canvas:t,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.autoClear=!1,this.renderer.setClearColor(198413,1),this.globe=new Dr,this.local=new Dr,this.cam=new cn(45,1,1e-5,100),this.lcam=new cn(45,1,1,1e6),this.loader=new Wa,this.sun=new D(1,.4,.6).normalize(),this.origin={lat:52.2,lon:.1},this.build()}tex(t,e=!0){let n=this.loader.load(t);return e&&(n.colorSpace=qe),n.anisotropy=8,n}build(){let t=this.globe;this.u={day:{value:null},emb:{value:null},embMix:{value:0},sweep:{value:-4},sweepOn:{value:0},grid:{value:1},dim:{value:1},time:{value:0},sun:{value:this.sun},focus:{value:new D(1,0,0)},focusR:{value:0}},this.earth=new ae(new Vs(1,256,128),new Fe({uniforms:this.u,...Li(Bf,xw),extensions:{derivatives:!0}})),t.add(this.earth),this.cu={time:this.u.time,opacity:{value:0}},this.clouds=new ae(new Vs(1.008,128,64),new Fe({uniforms:this.cu,...Li(Bf,vw),transparent:!0,depthWrite:!1})),t.add(this.clouds),this.au={camPos:{value:new D},strength:{value:1}};let e=new ae(new Vs(1.025,96,48),new Fe({uniforms:this.au,...Li(Bf,_w),transparent:!0,blending:zn,depthWrite:!1,side:hn}));t.add(e);let n=[],i=ci(7);for(let a=0;a<2600;a++){let o=new D(i()*2-1,i()*2-1,i()*2-1).normalize().multiplyScalar(60);n.push(o.x,o.y,o.z)}let r=new Re;r.setAttribute("position",new _e(n,3)),this.stars=new zs(r,new Fr({color:10476799,size:1.3,sizeAttenuation:!1,transparent:!0,opacity:.75,depthWrite:!1})),t.add(this.stars),this.sats={s2:this.satellite(786,16757575,290),s1:this.satellite(693,16736168,250)},this.buildLocal()}satellite(t,e,n){let i=new mn,r=1+t/$i,a=98.6*hi,o=[];for(let T=0;T<=256;T++){let _=T/256*Math.PI*2;o.push(new D(Math.cos(_)*r,0,-Math.sin(_)*r))}let c=new ks(new Re().setFromPoints(o),new hs({color:e,transparent:!0,opacity:.55})),l=new mn;l.rotation.x=a,l.add(c);let h=new mn,u=new tn({color:e,wireframe:!0,transparent:!0,opacity:.95});h.add(new ae(new Bn(.012,.018,.012),u));let f=new ae(new Xn(.05,.014,5,1),u);f.position.x=.036,h.add(f);let d=f.clone();d.position.x=-.036,h.add(d);let m=new Ur(new Os({map:f0(e),transparent:!0,depthWrite:!1,blending:zn}));m.scale.setScalar(.09),h.add(m),l.add(h);let y=n/2/$i,g=120,p=new Float32Array((g+1)*2*3),x=[];for(let T=0;T<g;T++){let _=T*2,R=_+1,b=_+2,C=_+3;x.push(_,R,b,R,C,b)}let w=new Re;w.setAttribute("position",new Ue(p,3)),w.setIndex(x);let v=new Float32Array((g+1)*2);for(let T=0;T<=g;T++)v[T*2]=v[T*2+1]=T/g;w.setAttribute("fade",new Ue(v,1));let M=new ae(w,new Fe({uniforms:{colour:{value:new Kt(e)},opacity:{value:0}},...Li("attribute float fade; varying float vF; void main() { vF = fade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }","uniform vec3 colour; uniform float opacity; varying float vF; void main() { gl_FragColor = vec4(colour, pow(vF, 1.4) * 0.85 * opacity); }"),transparent:!0,depthWrite:!1,side:an,blending:zn}));l.add(M);let E=new ae(new Ha(y*1,t/$i,24,1,!0),new tn({color:e,transparent:!0,opacity:0,blending:zn,depthWrite:!1,side:an}));return l.add(E),i.add(l),this.globe.add(i),i.visible=!1,{grp:i,plane:l,body:h,orbit:c,swath:M,beam:E,r,half:y,seg:g,altKm:t}}placeSat(t,e,n,i=.5){t.grp.rotation.y=n;let r=(h,u)=>new D(Math.cos(h)*u,0,-Math.sin(h)*u);t.body.position.copy(r(e,t.r)),t.body.lookAt(0,0,0);let a=t.swath.geometry.attributes.position,o=1.0015,c=Math.cos(t.half),l=Math.sin(t.half);for(let h=0;h<=t.seg;h++){let u=e+i*(1-h/t.seg),f=Math.cos(u),d=Math.sin(u);a.setXYZ(h*2,f*o*c,o*l,-d*o*c),a.setXYZ(h*2+1,f*o*c,-o*l,-d*o*c)}a.needsUpdate=!0,t.beam.position.copy(r(e,(t.r+1)/2)),t.beam.quaternion.setFromUnitVectors(new D(0,-1,0),r(e,1).negate().normalize())}passOver(t,e,n){let i=t.plane.rotation.x,r=e*hi,a=Math.asin(Wt(Math.sin(r)/Math.sin(i),-1,1)),o=new D(Math.cos(a),0,-Math.sin(a)).applyEuler(new On(i,0,0));return{node:n*hi-Math.atan2(-o.z,o.x),a0:a}}satWorld(t,e=new D){return t.body.getWorldPosition(e)}hexes(t){if(this.hex)return this.hex;let e=new Gs().copy(new fs(1,6)),n=t.length,i=new Float32Array(n),r=new Float32Array(n*3),a=ci(3012);t.map((w,v)=>[a(),v]).sort((w,v)=>w[0]-v[0]).forEach(([,w],v)=>{i[w]=v/n*.85});for(let w=0;w<n;w++){let v=a();r[w*3]=.37+v*.6,r[w*3+1]=.9-v*.2,r[w*3+2]=1-v*.7}e.setAttribute("delay",new Ai(i,1)),e.setAttribute("tint",new Ai(r,3)),this.hu={progress:{value:0},opacity:{value:1}};let c=new cs(e,new Fe({uniforms:this.hu,...Li(bw,ww),transparent:!0,depthWrite:!1,blending:zn}),n),l=new pe,h=new Pn,u=new D(0,0,1);t.forEach(([w,v],M)=>{let E=Wi(v,w,1.003);h.setFromUnitVectors(u,E.clone().normalize()),l.compose(E,h,new D(.0175,.0175,1)),c.setMatrixAt(M,l)}),c.frustumCulled=!1,this.globe.add(c);let f=3e3,d=new Float32Array(f*3),m=new Float32Array(f);for(let w=0;w<f;w++){let[v,M]=t[Math.floor(a()*n)],E=Wi(M,v,1.004);d.set([E.x,E.y,E.z],w*3),m[w]=a()}let y=new Re;y.setAttribute("position",new Ue(d.slice(),3)),y.setAttribute("from",new Ue(d,3)),y.setAttribute("seed",new Ue(m,1)),this.pu={progress:{value:0},size:{value:.05},core:{value:new D(0,0,3)}},this.parts=new zs(y,new Fe({uniforms:this.pu,...Li(Mw,Sw),transparent:!0,depthWrite:!1,blending:zn})),this.parts.frustumCulled=!1,this.globe.add(this.parts),this.core=new mn;let g=new ae(new Br(.16,1),new tn({color:6285055,wireframe:!0,transparent:!0,opacity:.8})),p=new ae(new Br(.1,0),new tn({color:16757575,wireframe:!0,transparent:!0,opacity:.9})),x=new Ur(new Os({map:f0(6285055),transparent:!0,depthWrite:!1,blending:zn}));return x.scale.setScalar(.7),this.core.add(g,p,x),this.core.visible=!1,this.globe.add(this.core),this.hex=c,c}buildLocal(){this.lgroup=new mn,this.local.add(this.lgroup),this.planes={}}setOrigin(t,e){this.origin={lat:t,lon:e},this.oframe=u0(t,e),this.oECEF=Wi(t,e,$i*1e3)}enu(t,e){let n=Wi(t,e,$i*1e3).sub(this.oECEF);return{e:n.dot(this.oframe.east),n:n.dot(this.oframe.north),u:n.dot(this.oframe.up)}}groundPlane(t,{lat:e,lon:n,size:i,conv:r=0,map:a,order:o=0,opacity:c=1,soft:l=.12}){let h=this.planes[t];if(!h){let f=new Xn(i,i,48,48),d=f.attributes.position,m=$i*1e3;for(let y=0;y<d.count;y++){let g=d.getX(y),p=d.getY(y);d.setZ(y,-(g*g+p*p)/(2*m))}h=new ae(f,new tn({map:a,transparent:!0,opacity:c,depthWrite:!1,alphaMap:Aw(l)})),h.rotation.x=-Math.PI/2,h.renderOrder=o,this.lgroup.add(h),this.planes[t]=h}let u=this.enu(e,n);return h.position.set(u.e,u.u,-u.n),h.rotation.z=r,h.material.opacity=c,h}warm(t){t.image&&this.renderer.initTexture(t)}livePlane(t,e,{lat:n,lon:i,conv:r}){let a=this.planes[t],o=e.n/32;if(!a||a.userData.w!==e){a&&(this.lgroup.remove(a),a.material.dispose());let l=new ri(new Uint8Array(e.n*e.n*4),e.n,e.n);l.colorSpace=qe,l.flipY=!1;let h=new ri(new Uint8Array(o*o*4),o,o),u=new ri(new Uint8Array(e.n*e.n*4),e.n,e.n);u.colorSpace=qe;for(let d of[l,u])d.magFilter=Xe,d.minFilter=Ye,d.needsUpdate=!0;h.magFilter=h.minFilter=Xe;let f={colour:{value:l},tiles:{value:h},overlay:{value:u},time:this.u.time,m:{value:o},opacity:{value:1},overlayMix:{value:0},scan:{value:1}};a=new ae(new Xn(1,1),new Fe({uniforms:f,...Li(Ew,Tw),transparent:!0,depthWrite:!1})),a.rotation.x=-Math.PI/2,a.renderOrder=10,a.userData={w:e,u:f},this.lgroup.add(a),this.planes[t]=a}let c=this.enu(n,i);return a.position.set(c.e,c.u+.5,-c.n),a.scale.set(e.size,e.size,1),a.rotation.z=r,a}ageLive(t){let e=t.userData.w,n=e.n/32,i=t.userData.u.tiles.value,r=performance.now();for(let a=0;a<n*n;a++){let o=e.arrived[a];i.image.data[a*4+1]=o?Math.min(255,(r-o)/4e3*255):0}i.needsUpdate=!0}latlonPlane(t,{lat0:e,lat1:n,lon0:i,lon1:r,map:a,order:o=0,opacity:c=1}){let l=this.planes[t];l||(l=new ae(new Xn(1,1),new tn({transparent:!0,depthWrite:!1})),l.rotation.x=-Math.PI/2,l.renderOrder=o,this.lgroup.add(l),this.planes[t]=l),l.material.map&&l.material.map!==a&&l.material.map.dispose(),l.material.map=a,l.material.opacity=c,l.material.needsUpdate=!0;let h=this.enu(e,i),u=this.enu(n,r);return l.position.set((h.e+u.e)/2,-1,-(h.n+u.n)/2),l.scale.set(Math.abs(u.e-h.e),Math.abs(u.n-h.n),1),l.visible=!0,l}cloud(t,e){let n=this.planes[t];if(n&&n.userData.n===e)return n;n&&(this.lgroup.remove(n),n.geometry.dispose());let i=new Re;i.setAttribute("position",new Ue(new Float32Array(e*3),3)),i.setAttribute("colour",new Ue(new Float32Array(e*3).fill(.6),3)),i.setAttribute("cls",new Ue(new Float32Array(e*3).fill(.6),3)),i.setAttribute("sim",new Ue(new Float32Array(e),1));let r={mode:{value:0},opacity:{value:0},size:{value:3e4},spin:{value:0},grow:{value:0}};return n=new zs(i,new Fe({uniforms:r,transparent:!0,depthWrite:!1,depthTest:!1,...Li(`attribute vec3 colour, cls; attribute float sim; uniform float mode, size, grow; varying vec3 vC; varying float vA;
        void main() { vec3 c = mode < 0.5 ? colour : mode < 1.5 ? mix(vec3(0.3, 0.42, 0.52), vec3(0.37, 0.9, 1.0), sim) : cls;
          vC = c; vA = mode > 0.5 && mode < 1.5 ? 0.35 + 0.65 * sim : 0.85;
          vec4 mv = modelViewMatrix * vec4(position * grow, 1.0);
          gl_PointSize = size * (mode > 0.5 && mode < 1.5 ? 0.8 + 0.9 * sim : 1.0) / -mv.z; gl_Position = projectionMatrix * mv; }`,`uniform float opacity; varying vec3 vC; varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vC * (1.25 - d * 0.6), vA * opacity * smoothstep(0.5, 0.3, d)); }`)})),n.frustumCulled=!1,n.renderOrder=40,n.userData={n:e,u:r},this.lgroup.add(n),this.planes[t]=n,n}setPose({lat:t,lon:e,dist:n,tilt:i=0,heading:r=0,shift:a=0}){let o=u0(t,e),c=i*hi,l=r*hi,h=o.north.clone().multiplyScalar(Math.cos(l)).addScaledVector(o.east,Math.sin(l)),u=o.up.clone().multiplyScalar(Math.cos(c)).addScaledVector(h,-Math.sin(c)),f=o.up.clone().multiplyScalar(Math.sin(c)).addScaledVector(h,Math.cos(c)).normalize(),d=n/$i;this.cam.position.copy(o.up).addScaledVector(u,d),this.cam.up.copy(f),this.cam.lookAt(o.up);let m=this.cam.position.length()-1;this.cam.near=Math.max(m*.02,2e-7),this.cam.far=m+60;let y=this.renderer.domElement,g=y.width||1,p=y.height||1;a?this.cam.setViewOffset(g,p,a*g,0,g,p):this.cam.clearViewOffset(),this.cam.updateProjectionMatrix(),this.au.camPos.value.copy(this.cam.position),this.au.strength.value=Wt((m*$i-300)/1500);let x=new D().crossVectors(this.cam.position,f).normalize();if(this.sun.copy(this.cam.position).normalize().addScaledVector(f,.6).addScaledVector(x,.5).normalize(),this.pose={lat:t,lon:e,dist:n,tilt:i,heading:r,shift:a,alt:m*$i},this.oframe){let w=this.oframe,v=this.enu(t,e),M=n*1e3,E=_=>new D(_.dot(w.east),_.dot(w.up),-_.dot(w.north)),T=new D(v.e,v.u,-v.n);this.lcam.position.copy(T).addScaledVector(E(u),M),this.lcam.up.copy(E(f)),this.lcam.lookAt(T),this.lcam.near=Math.max(M*.02,.5),this.lcam.far=M*40+4e5,this.lcam.updateProjectionMatrix()}}resize(t,e){this.renderer.setSize(t,e,!1);for(let n of[this.cam,this.lcam])n.aspect=t/e,n.updateProjectionMatrix()}render(t){let e=this.renderer;e.clear(),e.render(this.globe,this.cam),t>.001&&(e.clearDepth(),e.render(this.local,this.lcam))}pick(t,e){let n=new zr;n.setFromCamera(new Ht(t,e),this.cam);let i=n.intersectObject(this.earth)[0];return i?yw(i.point):null}pickGround(t,e){let n=new zr;n.setFromCamera(new Ht(t,e),this.lcam);let i=new D;return n.ray.intersectPlane(new Fn(new D(0,1,0),0),i)?i:null}project(t,e=this.cam){let n=t.clone().project(e),i=this.renderer.domElement;return{x:(n.x+1)/2*i.clientWidth,y:(1-n.y)/2*i.clientHeight,behind:n.z>1}}},kf={};function Aw(s){if(kf[s])return kf[s];let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let i=0;i<128;i++)for(let r=0;r<128;r++){let a=Math.min(r,i,127-r,127-i)/127,o=Math.min(1,a/s),c=255*o*o*(3-2*o);n.data.set([c,c,c,255],(i*128+r)*4)}return e.putImageData(n,0,0),kf[s]=new Or(t)}var zf={};function f0(s){if(zf[s])return zf[s];let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32),i=new Kt(s),r=`${i.r*255|0},${i.g*255|0},${i.b*255|0}`;return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,`rgba(${r},0.8)`),n.addColorStop(1,`rgba(${r},0)`),e.fillStyle=n,e.fillRect(0,0,64,64),zf[s]=new Or(t)}var Xs={orbit:1.4,sensors:3.6,dpixel:4.6,inference:4,tasks:5,missions:3.6,yours:3.8},Rw={orbit:1.4,sensors:1.2,dpixel:1.2,inference:1,tasks:2,missions:1.4,yours:0},Cw=.75,Pw=.25,Iw={"orbit.1":.6,"orbit.2":2,"orbit.3":.6,"sensors.2":.6,"dpixel.1":1,"dpixel.3":.8,"inference.1":2,"tasks.1":1.2,"tasks.2":1.6,"tasks.3":1.4,"tasks.4":1.6,"tasks.5":2,"missions.1":.6,"missions.2":.6};function p0(s,t){let e=0,n=[],i=[];for(let o of s.stages){let c={id:o.id,title:o.title,alt:o.alt,t0:e,lines:[]};e+=Xs[o.id],o.lines.forEach((l,h)=>{let u=t[l.id],f={id:l.id,who:l.who,text:u.text,words:u.words,dur:u.dur,t0:e,t1:e+u.dur,stage:o.id};c.lines.push(f),i.push(f),e=f.t1+(Iw[l.id]||0);let d=o.lines[h+1];d&&(e+=d.who==="console"||l.who==="console"?Pw:Cw)}),e+=Rw[o.id],c.t1=e,n.push(c)}let r=Object.fromEntries(i.map(o=>[o.id,o]));return{stages:n,lines:i,T:e,byId:r,cue:(o,c,l=0,h=!1)=>{let u=r[o];if(!c)return h?u.t1:u.t0;let f=c.toLowerCase(),d=0;for(let m of u.words)if(m[0].toLowerCase().replace(/[^a-z0-9'-]/g,"").startsWith(f)&&d++===l)return u.t0+(h?m[2]:m[1]);return console.warn("no cue",o,c),u.t0},stage:o=>n.find(c=>c.id===o)}}var Lw=1.8,Nw=.8,d0=1,Dw=1.2,Uw=.4,Fw=1.4,Ow=.45;function m0(s,t,e,n){let i=[];for(let d of t){let m=i.find(y=>y.after===d.after);m||(m={after:d.after,stage:d.stage,anchor:s.byId[d.after].t1+Ow,trips:[]},i.push(m)),m.trips.push(d)}i.sort((d,m)=>d.anchor-m.anchor);let r=[],a=[],o=0,c=0,l=(d,m,y)=>{let g=e[d],p={id:d,who:g.who||"narrator",text:g.text,words:g.words,dur:g.dur,g0:m,g1:m+g.dur,...y};return r.push(p),p};for(let d of i){d.g0=d.anchor+o;let m=d.g0+Lw;d.notes=d.trips.map(g=>{let p={id:g.id,title:g.title,src:g.src||"",refs:g.refs||[],stage:d.stage,cluster:d,g0:m,lines:[]};return[`${g.id}.0`,...g.text.map((w,v)=>`${g.id}.${v+1}`)].forEach((w,v)=>{let M=l(w,m,{trip:g.id});p.lines.push(M),m=M.g1+(v===0?Nw:d0)}),m+=Dw-d0,p.g1=m,a.push(p),p});let y=`back.${c++%n+1}`;d.back=l(y,m+Uw,{back:!0}),d.backG=m,d.g1=d.back.g1+Fw,d.dur=d.g1-d.g0,o+=d.dur}for(let d of s.lines){let m=i.filter(y=>y.anchor<d.t0).reduce((y,g)=>y+g.dur,0);r.push({...d,g0:d.t0+m,g1:d.t1+m})}return r.sort((d,m)=>d.g0-m.g0),{clusters:i,notes:a,lines:r,toG:d=>d+i.filter(m=>m.anchor<d).reduce((m,y)=>m+y.dur,0),main:d=>{let m=0;for(let y of i){if(d<y.g0)break;if(d<y.g1)return y.anchor;m+=y.dur}return d-m},at:d=>{let m=i.find(y=>d>=y.g0&&d<y.g1);return m?{cluster:m,note:m.notes.find(y=>d>=y.g0&&d<y.g1)||null,back:d>=m.backG}:null},T:s.T+o,note:d=>a.find(m=>m.id===d)}}function g0(s,t){let{cue:e,stage:n}=s,i=[],r=(x,w,v=h0)=>i.push({T:x,pose:w,e:v}),a=x=>n(x),o=x=>x,c=t.cam,l=t.dpixel,h=t.solar,u=t.missions,f=a("orbit").t0,d=e("orbit.3")-.3,m=a("orbit").t1,y=t.tour,g=(d-f)/y.length;r(f,{lat:y[0].lat-5,lon:y[0].lon-20,dist:17e3,tilt:0,heading:0}),y.forEach((x,w)=>{let v={lat:x.lat*.7+8,lon:x.lon,dist:11500,tilt:0,heading:0};r(f+g*(w+.35),v),r(f+g*(w+.9),{...v,dist:11e3},o)}),r(d,{lat:12,lon:128,dist:15e3,tilt:0,heading:0}),[[160,20,.2],[230,25,.2],[300,32,.2]].forEach(([x,w,v],M)=>r(d+(m-1.5-d)*(M+1)/3,{lat:w,lon:x,dist:2e4-M*500,tilt:3,heading:0,shift:v},o)),r(m,{lat:42,lon:-10,dist:18e3,tilt:6,heading:0}),r(a("sensors").t0+Xs.sensors,{lat:43,lon:-9,dist:5600,tilt:38,heading:22}),r(e("sensors.2","sentinel",1),{lat:45,lon:-2,dist:5200,tilt:40,heading:5},o),r(e("sensors.3","the"),{lat:48,lon:5,dist:4800,tilt:38,heading:-12},o),r(a("sensors").t1,{lat:51,lon:2,dist:3e3,tilt:28,heading:0},o),r(a("dpixel").t0+Xs.dpixel,{lat:l.lat,lon:l.lon,dist:3.8,tilt:50,heading:20}),r(e("dpixel.2"),{lat:l.lat,lon:l.lon,dist:3.3,tilt:55,heading:50},o),r(e("dpixel.3","billion")-.6,{lat:l.lat,lon:l.lon,dist:3.1,tilt:57,heading:76},o),r(e("dpixel.3","billion")+2.8,{lat:24,lon:18,dist:19e3,tilt:0,heading:0}),r(a("dpixel").t1,{lat:24,lon:26,dist:19e3,tilt:0,heading:0},o),r(a("inference").t0+Xs.inference,{lat:18,lon:28,dist:17500,tilt:0,heading:0}),r(e("inference.1","works"),{lat:20,lon:22,dist:17e3,tilt:0,heading:0},o),r(e("inference.2"),{lat:26,lon:50,dist:18e3,tilt:0,heading:0},o),r(a("inference").t1,{lat:46,lon:6,dist:6400,tilt:18,heading:0}),r(a("tasks").t0+Xs.tasks,{lat:c.lat-.012,lon:c.lon,dist:6.2,tilt:30,heading:0}),r(e("tasks.2","when"),{lat:c.lat-.012,lon:c.lon,dist:6.6,tilt:44,heading:0}),r(e("tasks.2","choose"),{lat:c.lat-.014,lon:c.lon+.004,dist:6.4,tilt:46,heading:10},o),r(e("tasks.3","farmland"),{lat:c.lat-.012,lon:c.lon,dist:6.2,tilt:44,heading:-6}),r(e("tasks.5","segmenter")-.5,{lat:c.lat-.012,lon:c.lon,dist:6.4,tilt:42,heading:-4},o),r(e("tasks.5","segmenter")+2.9,{lat:h.lat-.012,lon:h.lon,dist:5.4,tilt:34,heading:0}),r(a("tasks").t1,{lat:h.lat-.011,lon:h.lon,dist:5,tilt:32,heading:8},o);let p=[e("missions.2","borneo"),e("missions.2","finland")-.3,e("missions.2","brazil")-.2,a("missions").t1];return r(a("missions").t0+Xs.missions*.6,{lat:40,lon:10,dist:9e3,tilt:10,heading:0}),["borneo","finland","brazil"].forEach((x,w)=>{let v=u[x],M={lat:v.lat-6,lon:v.lon,dist:4200,tilt:25,heading:0},E=p[w]-.5;r(E,M),r(Math.max(E+.2,Math.min(p[w+1]-1.6,E+1.5)),{...M,lon:v.lon+1.5},o)}),r(a("missions").t1,{lat:10,lon:-30,dist:14e3,tilt:0,heading:0}),r(a("yours").t0+Xs.yours,{lat:30,lon:10,dist:15500,tilt:0,heading:0}),r(s.T+60,{lat:30,lon:40,dist:15500,tilt:0,heading:0},o),i.sort((x,w)=>x.T-w.T),x=>{let w=0;for(;w<i.length-2&&i[w+1].T<=x;)w++;let v=i[w],M=i[w+1],E=M.e(pt(x,v.T,M.T));return Kc(v.pose,M.pose,E)}}function Kc(s,t,e){let n=Math.PI/180,i=[Math.cos(s.lat*n)*Math.cos(s.lon*n),Math.sin(s.lat*n),Math.cos(s.lat*n)*Math.sin(s.lon*n)],r=[Math.cos(t.lat*n)*Math.cos(t.lon*n),Math.sin(t.lat*n),Math.cos(t.lat*n)*Math.sin(t.lon*n)],a=Wt(i[0]*r[0]+i[1]*r[1]+i[2]*r[2],-1,1),o=Math.acos(a),c,l=t.dist>s.dist*8?e*e:t.dist*8<s.dist?1-(1-e)*(1-e):e;if(o<1e-6)c=i;else{let d=Math.sin(o),m=Math.sin((1-l)*o)/d,y=Math.sin(l*o)/d;c=i.map((g,p)=>g*m+r[p]*y)}let h=Math.asin(Wt(c[1],-1,1))/n,u=Math.atan2(c[2],c[0])/n,f=t.heading-s.heading;return f>180&&(f-=360),f<-180&&(f+=360),{lat:h,lon:u,dist:Math.exp(Math.log(s.dist)*(1-e)+Math.log(t.dist)*e),tilt:s.tilt+(t.tilt-s.tilt)*e,heading:s.heading+f*e,shift:(s.shift||0)+((t.shift||0)-(s.shift||0))*e}}var en=(s,t=document)=>t.querySelector(s),Bw=(s,t={},e="")=>{let n=document.createElement(s);for(let i in t)n.setAttribute(i,t[i]);return n.innerHTML=e,n},y0=s=>Math.round(s).toLocaleString("en-GB"),jr={A:{short:"Feng et al. 2026, CVPR",title:"TESSERA: Temporal Embeddings of Surface Spectra for Earth Representation and Analysis",href:"https://arxiv.org/html/2506.20380"},B:{short:"Feng et al. 2026, SSRN",title:"Applications of the TESSERA Geospatial Foundation Model to Diverse Environmental Mapping Tasks",href:"https://doi.org/10.2139/ssrn.6142416"},C:{short:"Source Cooperative",title:"The TESSERA embeddings, v1.1 and v1.0, read live from the open archive",href:"https://source.coop/tessera/tessera"},D:{short:"tze on GitHub",title:"tze, the TESSERA Zarr Explorer, and its solar-farm model",href:"https://github.com/ucam-eo/tze"},E:{short:"tessera-eval on GitHub",title:"tessera-eval, which measures how well a class can be mapped from Tessera embeddings",href:"https://github.com/ucam-eo/tessera-eval"},F:{short:"Feng et al. 2026, arXiv",title:"TESSERA v2: Scaling Pixel-wise Earth Foundation Models",href:"https://arxiv.org/html/2607.03949"}},kw=s=>`<a class="cite" data-src="${s}" href="${jr[s].href}" target="_blank" rel="noopener" title="${jr[s].short}: ${jr[s].title}">${s}</a>`,Vf=s=>s.map(([t,e,n])=>`<a href="${jr[t].href}${e||""}" target="_blank" rel="noopener">${n} <span aria-hidden="true">\u2197</span></a>`).join(", "),Qc=class{constructor(t){this.root=t,this.panels={}}panel(t,e,{cls:n="",src:i="",refs:r=null}={}){let a=Bw("section",{class:`panel ${n}`,id:`p-${t}`,"aria-hidden":"true"},`<header><h2>${e}</h2>${i?i.split("").map(kw).join(""):""}</header><div class="body"></div>${r?`<p class="ref">Read it in the source: ${Vf(r)}</p>`:""}`);return this.root.append(a),this.panels[t]=a,en(".body",a)}show(t,e){let n=this.panels[t];n&&e!==n.classList.contains("on")&&(n.classList.toggle("on",e),n.setAttribute("aria-hidden",e?"false":"true"),this.refit())}hold(t,e){let n=this.panels[t];n&&e!==n.classList.contains("held")&&(n.classList.toggle("held",e),this.refit())}refit(){cancelAnimationFrame(this.fitting),this.fitting=requestAnimationFrame(()=>{let t=this.root,e=t.clientHeight;t.style.setProperty("--fit",1);let n=[...t.children].filter(i=>i.classList.contains("on")||i.classList.contains("held")).reduce((i,r)=>i+r.offsetHeight+12,0);t.style.setProperty("--fit",n>e?Math.max(.5,e/n).toFixed(3):1)})}hideAll(){for(let t in this.panels)this.show(t,!1),this.hold(t,!1)}},zw=[["B2",490,"blue",10],["B3",560,"green",10],["B4",665,"red",10],["B5",705,"rededge",20],["B6",740,"rededge",20],["B7",783,"rededge",20],["B8",842,"near",10],["B8A",865,"near",20],["B11",1610,"shortwave",20],["B12",2190,"shortwave",20]];var qi=[["true","True colour","Blue, green and red together, as our eyes would see it on 7 April 2025.",null],["blue","Blue \xB7 B2 \xB7 490 nm","Water, haze and bright roofs stand out.","B2"],["green","Green \xB7 B3 \xB7 560 nm","Leaves reflect a little green light.","B3"],["red","Red \xB7 B4 \xB7 665 nm","Growing plants absorb red light, so crops look dark.","B4"],["rededge1","Red edge \xB7 B5 \xB7 705 nm","Here the light that plants reflect begins to climb steeply.","B5"],["nir","Near infrared \xB7 B8 \xB7 842 nm","Healthy leaves reflect it strongly, so crops glow.","B8"],["swir16","Shortwave infrared \xB7 B11 \xB7 1610 nm","It is sensitive to the water in leaves and soil.","B11"],["false","False colour","Near infrared shown as red: every growing crop turns red.",null],["radar","Sentinel-1 radar \xB7 VV and VH","Red is VV, green is VH, and blue is their ratio. The town and the woods stand out.",null],["cloud","A clear day, and a cloudy one","On 2 May Sentinel-2 saw the ground. On 22 May it saw only cloud, but Sentinel-1\u2019s radar still saw the ground.",null]];function x0(s){let t=s.panel("bands","This is what each band sees over Cambridge.",{cls:"wide",src:"C"}),e=l=>8+(Math.log(l)-Math.log(420))/(Math.log(2350)-Math.log(420))*284,n=l=>`<img src="assets/img/bands/${l}.webp" alt="" loading="lazy" decoding="async">`;t.innerHTML=`<div class="bandview">
    <div class="frames">${qi.map(([l])=>l==="cloud"?`<div class="f f-cloud" data-k="cloud"><figure>${n("s2-clear")}<figcaption>Sentinel-2, 2 May</figcaption></figure><figure>${n("s2-cloudy")}<figcaption>Sentinel-2, 22 May</figcaption></figure><figure>${n("s1-radar")}<figcaption>Sentinel-1, 22 May</figcaption></figure></div>`:`<div class="f" data-k="${l}">${n(l==="radar"?"s1-radar":"s2-"+l)}</div>`).join("")}</div>
    <div class="side"><p class="bname"></p><p class="bnote"></p>
      <svg viewBox="0 0 300 70" class="spectrum" aria-hidden="true"><line x1="8" y1="52" x2="292" y2="52" class="axis"/>
        ${zw.map(([l,h,u])=>`<g class="band" data-id="${l}"><rect x="${e(h)-3}" y="14" width="6" height="38"/><text x="${e(h)}" y="66" class="lbl" text-anchor="middle">${l}</text></g>`).join("")}
      </svg></div></div>`;let i=[...t.querySelectorAll(".f")],r=t.querySelector(".bname"),a=t.querySelector(".bnote"),o=[...t.querySelectorAll(".band")],c=-1;return(l,h)=>{let u=0;for(let m=0;m<h.views.length;m++)l>=h.views[m]&&(u=m);if(u===c)return;c=u,i.forEach((m,y)=>m.classList.toggle("on",y===u)),r.textContent=qi[u][1],a.textContent=qi[u][2];let f=qi[u][3],d=qi[u][0]==="true"||qi[u][0]==="false";o.forEach(m=>m.classList.toggle("in",d?["B2","B3","B4","B8"].includes(m.dataset.id)&&(qi[u][0]==="true"?m.dataset.id!=="B8":m.dataset.id!=="B2"):m.dataset.id===f)),t.querySelector(".spectrum").classList.toggle("dim",qi[u][0]==="radar"||qi[u][0]==="cloud")}}function v0(s,t,e){let n=s.panel("composite","A composite blends the year into one picture, and the seasons are lost.",{cls:"wide",src:"A"});n.innerHTML='<canvas width="440" height="170" aria-hidden="true"></canvas>';let i=en("canvas",n),r=i.getContext("2d"),a=t.s2.map((l,h)=>[l,h]).filter(([l])=>l.ok),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=null;return(l,h)=>{if(!e.complete||!e.naturalWidth)return;if(!c){let p=document.createElement("canvas");p.width=p.height=64;let x=p.getContext("2d",{willReadFrequently:!0}),w=a.map(([,M])=>(x.drawImage(e,M%16*64,Math.floor(M/16)*64,64,64,0,0,64,64),x.getImageData(0,0,64,64).data.slice())),v=x.createImageData(64,64);for(let M=0;M<4096*4;M++){if(M%4===3){v.data[M]=255;continue}let E=w.map(T=>T[M]).sort((T,_)=>T-_);v.data[M]=E[E.length>>1]}x.putImageData(v,0,0),c=p}let u=Oe(pt(l,h.blend,h.blend+4));r.clearRect(0,0,440,170),r.font='11px "Share Tech Mono", monospace',r.textAlign="center";let f=Math.min(12,a.length),d=42,m=312,y=22,g=120;for(let p=0;p<f;p++){let[x,w]=a[Math.floor(p*a.length/f)],v=pt(l,h.comp+.3+p*.3,h.comp+.6+p*.3);if(v<=0)continue;let M=4+p%6*48,E=8+Math.floor(p/6)*78;r.globalAlpha=v*(1-u*.9),r.drawImage(e,w%16*64,Math.floor(w/16)*64,64,64,M+(m+g/2-d/2-M)*u,E+(y+g/2-d/2-E)*u,d,d),u<.05&&(r.fillStyle="rgba(160,220,255,.8)",r.fillText(`${+x.d.slice(8)} ${o[+x.d.slice(5,7)-1]}`,M+d/2,E+d+14))}r.globalAlpha=u,r.drawImage(c,m,y,g,g),r.globalAlpha=1,r.strokeStyle="#5fe6ff",r.strokeRect(m+.5,y+.5,g,g),r.fillStyle=u>.6?"rgba(234,246,255,.9)":"rgba(160,220,255,.5)",r.fillText("the composite",m+g/2,y+g+18)}}var th=["#ffb347","#ff5fa8","#6fe08a","#eaf6ff"];function _0(s,t,e,n){let i=s.panel("dpixels","Stacking a year of passes gives every square its own d-pixel, as for these four.",{cls:"wide",src:"C"});i.innerHTML=`<canvas width="600" height="200" aria-hidden="true"></canvas>
    <p class="fine">Each strip is one square\u2019s true colour on the ${e.clear.length} clear days of 2025, read down through the stack of Sentinel-2 pictures.</p>`;let r=en("canvas",i),a=r.getContext("2d"),o=72,c=180,l=214,h=600-l-8,u=f=>(Date.parse(f)-Date.parse("2025-01-01"))/864e5/365;return(f,d)=>{a.clearRect(0,0,600,200),n.complete&&n.naturalWidth&&(a.imageSmoothingEnabled=!1,a.drawImage(n,o%16*64,Math.floor(o/16)*64,64,64,8,10,c,c)),a.strokeStyle="rgba(95,230,255,.5)",a.strokeRect(8.5,10.5,c,c),a.font='11px "Share Tech Mono", monospace',a.fillStyle="rgba(160,220,255,.75)",a.fillText("June",12,24),["J","F","M","A","M","J","J","A","S","O","N","D"].forEach((m,y)=>a.fillText(m,l+y*h/12+6,12)),e.squares.forEach((m,y)=>{let g=d.pull+.3+y*.55,p=pt(f,g,g+.4);if(p<=0)return;let x=8+(m.x+.5)*c/64,w=10+(m.y+.5)*c/64,v=24+y*44;a.globalAlpha=p,a.strokeStyle=th[y],a.lineWidth=2,a.strokeRect(x-5,w-5,10,10),a.lineWidth=1,a.setLineDash([3,3]),a.beginPath(),a.moveTo(x+5,w),a.lineTo(l-4,v+13),a.stroke(),a.setLineDash([]);let M=Math.floor(e.clear.length*pt(f,g,g+1.2));for(let E=0;E<M;E++){let[T,_,R]=m.rgb[E],b=l+u(t.s2[e.clear[E]].d)*h;a.fillStyle=`rgb(${Math.min(255,T*1.6)|0},${Math.min(255,_*1.6)|0},${Math.min(255,R*1.6)|0})`,a.fillRect(b,v+4,Math.max(3,h/70),18)}a.fillStyle=th[y],a.font="600 13px Rajdhani, sans-serif",a.fillText(m.name,l,v+36),a.globalAlpha=1})}}function b0(s,t){let e=s.panel("dpixel","This is one ten-metre square\u2019s whole year, 2025.",{cls:"wide",src:"AC",refs:[["A","#S3.SS1","CVPR paper, Section 3.1"]]});e.innerHTML=`<canvas width="600" height="210" aria-hidden="true"></canvas>
    <p class="note">${t.s2.length} Sentinel-2 passes, of which ${t.s2.filter(u=>u.ok).length} were clear, and ${t.s1.length} Sentinel-1 passes.</p>`;let n=en("canvas",e),i=n.getContext("2d"),r=u=>(Date.parse(u)-Date.parse("2025-01-01"))/864e5,a=u=>44+r(u)/365*548,o=t.s2.map((u,f)=>u.ok?f:-1).filter(u=>u>=0),c=u=>{let f=ci(u),d=new Set;for(;d.size<16&&d.size<o.length;)d.add(o[Math.floor(f()*o.length)]);return d},l=c(11),h=c(29);return(u,f)=>{i.clearRect(0,0,600,210),i.font='11px "Share Tech Mono", monospace',i.fillStyle="rgba(160,220,255,.75)",["J","F","M","A","M","J","J","A","S","O","N","D"].forEach((y,g)=>i.fillText(y,44+g*548/12+18,10)),t.bands.forEach((y,g)=>i.fillText(y,4,26+g*12+8)),i.fillText("VV",4,172),i.fillText("VH",4,184);let d=pt(u,f.stack,f.stack+2.2),m=pt(u,f.mask,f.mask+.6);t.s2.forEach((y,g)=>{if(g/t.s2.length>d)return;let p=a(y.d);for(let x=0;x<10;x++){let w=Wt(y.b[x]*2.6),v=y.ok?1:1-m*.85;i.fillStyle=`rgba(${40+w*200|0},${120+w*130|0},${200+w*55|0},${.9*v})`,i.fillRect(p,26+x*12,2.4,11)}!y.ok&&m>0&&(i.fillStyle=`rgba(255,95,168,${.5*m})`,i.fillRect(p,146,2.4,3))}),t.s1.forEach((y,g)=>{if(g/t.s1.length>d)return;let p=a(y.d);for(let[x,w]of[[0,y.vv],[1,y.vh]]){let v=Wt((w+25)/20);i.fillStyle=`rgba(255,${95+v*120|0},168,${.25+v*.7})`,i.fillRect(p,164+x*12,2,11)}});for(let[y,g,p,x,w]of[[l,f.drawA,"#ffb347",190,"sample 1"],[h,f.drawB,"#5fe6ff",200,"sample 2"]]){let v=pt(u,g,g+.9);if(!v)continue;let M=0;for(let E of y){if(M++/y.size>v)break;let T=a(t.s2[E].d);i.fillStyle=p,i.fillRect(T,x,2.4,7),i.fillStyle=p+"55",i.fillRect(T,26,2.4,120)}i.fillStyle=p,i.fillText(w,4,x+7)}}}function w0(s){let t=s.panel("train","Tessera learned from about 14 billion d-pixels.",{src:"F",refs:[["F","#A9","TESSERA v2, Appendix I"]]});t.innerHTML=`<dl class="stats"><dt>d-pixels</dt><dd class="n1">0</dd><dt>patches</dt><dd class="n2">0</dd><dt>weights</dt><dd>2 billion</dd></dl>
    <p class="note">The model made one pass through them, without a single label.</p>
    <p class="fine">The hexagons show where the patches lie, not their exact places.</p>`;let e=en(".n1",t),n=en(".n2",t);return(i,r)=>{let a=Oe(pt(i,r.count,r.count+2.5));e.textContent=y0(14e9*a),n.textContent=y0(3420048*a)}}function M0(s){let t=s.panel("encoder","Two transformers read the year, and a third joins them into a fingerprint.",{cls:"wide",src:"AF",refs:[["A","#S3.SS2","CVPR paper, Section 3.2"],["F","#S4","TESSERA v2, Section 4"]]}),e=(r,a,o)=>[0,1,2,3].map(c=>`<rect x="${r+c*26}" y="${a}" width="20" height="34" rx="2" class="blk ${o}"/>`).join("");t.innerHTML=`<svg viewBox="0 0 600 180" role="img" aria-label="Sentinel-2 and Sentinel-1 each pass through a transformer; a third transformer joins them into a fingerprint of 128 values">
    <text x="8" y="40" class="lbl2">Sentinel-2</text><text x="8" y="56" class="sub">10 bands, each clear date</text>
    <text x="8" y="142" class="lbl2">Sentinel-1</text><text x="8" y="158" class="sub">VV and VH, each date</text>
    <path class="flow f1" d="M112 45 H150"/><path class="flow f2" d="M112 147 H150"/>
    ${e(152,28,"a")}${e(152,130,"m")}
    <text x="200" y="18" class="sub" text-anchor="middle">a transformer each</text>
    <path class="flow f1" d="M254 45 H290"/><path class="flow f2" d="M254 147 H290"/>
    <rect x="292" y="31" width="42" height="28" rx="2" class="blk c"/><text x="313" y="49" class="sub" text-anchor="middle">pool</text>
    <rect x="292" y="133" width="42" height="28" rx="2" class="blk c"/><text x="313" y="151" class="sub" text-anchor="middle">pool</text>
    <path class="flow f3" d="M334 45 C370 45 370 96 400 96"/><path class="flow f3" d="M334 147 C370 147 370 96 400 96"/>
    <rect x="402" y="78" width="54" height="36" rx="2" class="blk c"/><text x="429" y="100" class="sub" text-anchor="middle">fuse</text>
    <path class="flow f3" d="M456 96 H486"/>
    <g class="out">${Array.from({length:32},(r,a)=>`<rect x="${490+a%8*13}" y="${66+Math.floor(a/8)*16}" width="10" height="12" rx="1"/>`).join("")}</g>
    <text x="541" y="146" class="lbl2" text-anchor="middle">a fingerprint</text>
  </svg>`;let n=en("svg",t),i=[...t.querySelectorAll(".out rect")];return(r,a)=>{n.style.setProperty("--dash",String(-(r*40)%40)),n.classList.toggle("s1",r>=a.radar2),n.classList.toggle("meet",r>=a.meet),i.forEach((o,c)=>o.classList.toggle("on",r>=a.meet+.3+c*.02))}}function S0(s,t){let e=s.panel("vector","This is the field\u2019s real embedding: 128 small whole numbers.",{src:"C"});e.innerHTML=`<div class="vec" aria-hidden="true">${t.emb.map(r=>`<i style="--v:${r/127}"></i>`).join("")}</div>
    <p class="nums" aria-hidden="true"></p><p class="note">Each number is multiplied by ${t.scale.toFixed(4)} to recover the embedding.</p>`;let n=[...e.querySelectorAll(".vec i")],i=en(".nums",e);return(r,a)=>{let o=pt(r,a.vec,a.vec+1.2);n.forEach((c,l)=>c.classList.toggle("on",l/128<o)),i.textContent=t.emb.slice(0,Math.floor(o*16)).map(c=>(c>=0?"+":"")+c).join(" ")}}function E0(s){let t=s.panel("live","Embeddings are streaming live from the open archive.",{src:"C"});return t.innerHTML='<dl class="stats"><dt>store</dt><dd class="st">Tessera v1.1</dd><dt>year</dt><dd class="yr">2025</dd><dt>chunks</dt><dd class="ch">0</dd><dt>streamed</dt><dd class="mb">0 MB</dd></dl>',{set(e,n){e&&(en(".ch",t).textContent=`${e.loaded.reduce((i,r)=>i+r,0)} of ${e.loaded.length}`,en(".mb",t).textContent=`${(n.bytes/1e6).toFixed(1)} MB`,en(".yr",t).textContent=e.year,en(".st",t).textContent=/\/v1$/.test(e.url)?"Tessera v1.0":"Tessera v1.1")}}}function T0(s){let t=s.panel("cloud","Each dot is one square, placed by its 128 numbers.",{src:"CD"});t.innerHTML=`<p class="text">Squares with similar numbers sit close together. UMAP squeezes the 128 numbers into three so that you can see them.</p>
    <p class="text sim">Closeness is the angle between two squares\u2019 numbers. <span class="k">Squares like Parker\u2019s Piece are lit in blue.</span></p>`;let e=en(".sim",t);return(n,i)=>{e.classList.toggle("in",n>=i.touch)}}function A0(s,t){let e=s.panel("knn","Each square takes the vote of its three nearest labels.",{src:"C"});e.innerHTML=`<ul class="legend">${t.map(([i,r])=>`<li><i style="background:${r}"></i>${i}</li>`).join("")}</ul>
    <p class="text">Fourteen labelled squares are enough to map the whole window.</p>`;let n=[...e.querySelectorAll("li")];return(i,r)=>n.forEach((a,o)=>a.classList.toggle("in",i>=r.classes[o]))}function R0(s,t){let e=s.panel("eval","Accuracy climbs as the model is given more labels.",{cls:"wide",src:"E"}),n=y=>50+Math.log2(y)/10*500,i=y=>150-y*140,r=y=>y.map(([g,p],x)=>`${x?"L":"M"}${n(g).toFixed(1)} ${i(p).toFixed(1)}`).join(" "),a=y=>y.map(([g,p,x])=>`${n(g).toFixed(1)} ${i(p+x).toFixed(1)}`).join(" L")+" L"+y.slice().reverse().map(([g,p,x])=>`${n(g).toFixed(1)} ${i(p-x).toFixed(1)}`).join(" L"),o=t.curves.random_rf,c=t.curves.fields_rf;e.innerHTML=`<svg viewBox="0 0 600 190" role="img" aria-label="Macro F1 rises from ${o[0][1]} with one label per crop to ${o.at(-1)[1]} with 1,024 when random pixels are held back, and to ${c.at(-1)[1]} when whole fields are held back">
    <line x1="50" y1="150" x2="560" y2="150" class="axis"/><line x1="50" y1="10" x2="50" y2="150" class="axis"/>
    ${[0,.25,.5,.75,1].map(y=>`<line x1="46" x2="560" y1="${i(y)}" y2="${i(y)}" class="grid"/><text x="42" y="${i(y)+4}" class="lbl" text-anchor="end">${y}</text>`).join("")}
    ${[1,4,16,64,256,1024].map(y=>`<text x="${n(y)}" y="166" class="lbl" text-anchor="middle">${y}</text>`).join("")}
    <text x="305" y="184" class="sub" text-anchor="middle">labelled pixels of each crop</text>
    <text x="14" y="80" class="sub" transform="rotate(-90 14 80)" text-anchor="middle">macro F1</text>
    <path class="band b1" d="M${a(o)}Z"/><path class="curve c1" d="${r(o)}" pathLength="1"/>
    <path class="band b2" d="M${a(c)}Z"/><path class="curve c2" d="${r(c)}" pathLength="1"/>
  </svg>
  <ul class="legend"><li class="l1"><i style="background:#5fe6ff"></i>Tested on pixels drawn at random</li><li class="l2"><i style="background:#ffb347"></i>Tested on fields it has never seen</li></ul>
  <p class="fine">A random forest on the 2022 embeddings of ${t.fields} fields and ${t.crops.length} crops near Vienna, averaged over repeats.</p>`;let l=en(".c1",e),h=en(".c2",e),u=en(".b1",e),f=en(".b2",e),d=en(".l1",e),m=en(".l2",e);return(y,g)=>{let p=Oe(pt(y,g.evalDraw,g.evalDraw+2.5)),x=Oe(pt(y,g.evalUnseen,g.evalUnseen+2));l.style.strokeDashoffset=String(1-p),h.style.strokeDashoffset=String(1-x),u.style.opacity=String(.2*p),f.style.opacity=String(.2*x),d.classList.toggle("in",p>0),m.classList.toggle("in",x>0)}}function C0(s){let t=s.panel("unet","A small U-Net outlines the solar farms.",{cls:"wide",src:"CD"}),e=(i,r,a,o,c,l="")=>`<rect x="${i}" y="${r}" width="${a}" height="${o}" rx="2" class="blk ${l}"/><text x="${i+a/2}" y="${r+o+12}" class="sub" text-anchor="middle">${c}</text>`;t.innerHTML=`<svg viewBox="0 0 600 150" role="img" aria-label="A U-Net: embeddings go down through smaller layers and back up to a map of solar panels, with skip connections">
    ${e(10,20,22,70,"128","a")}${e(60,25,16,60,"8")}${e(110,45,14,40,"16")}${e(160,62,12,26,"32")}
    ${e(210,45,14,40,"16")}${e(262,25,16,60,"8")}${e(316,32,22,46,"1","o")}
    <path class="flow f3" d="M32 55 H60 M76 55 C92 55 96 65 110 65 M124 65 C140 65 146 75 160 75 M172 75 C188 75 196 65 210 65 M224 65 C240 65 248 55 262 55 M278 55 H316"/>
    <path class="skip" d="M68 22 C68 4 270 4 270 22 M117 42 C117 30 217 30 217 42"/>
    <text x="360" y="40" class="lbl2">in: 128 numbers a square</text>
    <text x="360" y="62" class="lbl2">out: panels or not</text>
    <text x="360" y="92" class="sub">41,665 weights, running in this browser</text>
    <text x="360" y="108" class="sub">on Tessera v1.0 embeddings for 2024</text>
    <rect x="360" y="120" width="220" height="8" class="bar"/><rect x="360" y="120" width="0" height="8" class="fill"/>
  </svg>`;let n=en(".fill",t);return{update:(i,r,a)=>{n.setAttribute("width",String(220*Wt(a)))}}}function P0(s){let t=s.panel("regress","A regression model gives each square a number, not a label.",{src:"B",refs:[["B","","Applications paper, Section 2"]]}),e=[31,44,52,38,27,49,55,41,22,36,47,58];t.innerHTML=`<div class="rg">${e.map(i=>`<span style="--h:${i/60}"><i></i><b>${i} m</b></span>`).join("")}</div>
    <p class="fine">Tree heights along a strip of forest, as an illustration.</p>`;let n=[...t.querySelectorAll(".rg span")];return(i,r)=>n.forEach((a,o)=>a.classList.toggle("in",i>=r.regress+.2+o*.12))}var Ys=[{id:"austria",refs:[["A","#S4.T1","CVPR paper, Table 1"]],lat:48.2,lon:16.8,src:"AB",title:"Crops east of Vienna were mapped from 1% of the labels.",rows:[["Tessera",.6615,"0.66",1],["AlphaEarth",.3722,"0.37"]],max:.8,note:"F1 score. Higher is better."},{id:"california",refs:[["B","","Applications paper, figure 6, p.18"]],lat:38.6,lon:-122.3,src:"B",title:"The scars of California\u2019s 2020 wildfires were mapped from a few hundred pixels.",rows:[["All labels",.96,"above 0.96",1],["330 pixels",.864,"over 90% of that"]],max:1,note:"F1 score. The Hennessey Fire alone burned about 121,000 hectares."},{id:"borneo",refs:[["B","","Applications paper, figure 7, p.19"]],lat:4.96,lon:117.8,src:"B",title:"Tree heights in Borneo\u2019s Danum Valley were checked against airborne lidar.",rows:[["Tessera",8.88,"8.88 m",1],["PRESTO",10.73,"10.73 m"],["AlphaEarth",11.83,"11.83 m"]],max:14,note:"Error in metres. Lower is better."},{id:"finland",refs:[["A","#S4.T1","CVPR paper, Table 1"],["B","","Applications paper, p.22"]],lat:62,lon:25.5,src:"AB",title:"Forest biomass across Finland came close to the best of over 1,000 competition entries.",rows:[["Tessera",27.43,"27.4 t/ha",1],["Winning entry",25.9,"25.9 t/ha"]],max:32,note:"Error in tonnes a hectare. Lower is better."},{id:"brazil",refs:[["B","","Applications paper, figure 9, p.25"]],lat:-3.3,lon:-51.5,src:"B",title:"Tree stocks on agroforestry farms in Par\xE1, Brazil, were checked at 38 field sites.",rows:[["Tessera",.577,"0.58",1],["ETH canopy map",.424,"0.42"],["CTrees",.357,"0.36"]],max:.7,note:"R\xB2, the share of the variation explained. Higher is better."}];function I0(s){return Ys.map(t=>{let e=s.panel("m-"+t.id,t.title,{src:t.src,refs:t.refs});e.innerHTML=t.rows.map(([i,r,a,o])=>`<div class="row${o?" me":""}"><span>${i}</span><i style="--w:${r/t.max}"></i><b>${a}</b></div>`).join("")+`<p class="fine">${t.note}</p>`;let n=[...e.querySelectorAll(".row")];return(i,r)=>n.forEach((a,o)=>a.classList.toggle("in",i>=r+.3+o*.2))})}var eh=s=>`assets/img/bands/${s}.webp`,lt={x:20,y:18,s:232},oe=290,nh=[[10,6,"Download the scenes","passes of one field"],[190,6,"Mask the clouds","of them not clear"],[370,6,"Correct and align","each pass to the next"],[550,6,"Stitch a composite","and lose the seasons"],[550,92,"Label examples","thousands, by hand"],[370,92,"Train a model","for this one task"],[190,92,"Map one place","and check it"]],L0=164,N0=["#e8a94f","#8fe37a","#2f9a5c","#d45fb0"],D0=(s,t,e,n)=>s.map(([i,r])=>`${(t+i*n).toFixed(1)},${(e+r*n).toFixed(1)}`).join(" ");function U0(s,t,e){let n=s.panel("pipeline","Every new map used to take all of these steps.",{cls:"wide",src:"AC"}),i=t.s2.length-t.s2.filter(X=>X.ok).length,r=[`${t.s2.length} passes of one field`,`${i} of them not clear`,...nh.slice(2).map(X=>X[3])],a=(X,[z,at,ct])=>`<g class="step" data-i="${X}"><rect x="${z}" y="${at}" width="160" height="62" rx="4"/>
    <text x="${z+10}" y="${at+24}" class="st1">${ct}</text><text x="${z+10}" y="${at+46}" class="st2">${r[X]}</text></g>`,o='<path class="vframe" d="M4 20 V4 H20 M700 4 H716 V20 M716 262 V278 H700 M20 278 H4 V262"/>',c=(X,z="")=>`<image class="${z}" href="${eh(X)}" x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" preserveAspectRatio="xMidYMid slice"/>`,l=Array.from({length:7},(X,z)=>`<g class="row" data-k="${z}"><text x="36" y="${122+z*20}" class="rt"></text><rect x="226" y="${112+z*20}" width="120" height="6" class="rbar"/><rect x="226" y="${112+z*20}" width="0" height="6" class="rfill"/></g>`).join(""),h=[4,6,6,3].map((X,z)=>Array.from({length:X},(at,ct)=>[40+z*64,139+(ct-(X-1)/2)*34])),u=[];h.slice(0,-1).forEach((X,z)=>X.forEach(at=>h[z+1].forEach(ct=>u.push([at,ct])))),n.innerHTML=`<svg viewBox="0 0 720 530" class="novig" role="img" aria-label="The conventional pipeline, each step acted out: download the scenes, mask the clouds, correct and align them, stitch a composite, label thousands of examples, train a model for one task, map one place, and start again for the next question">
    <defs>
      <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="rgba(255,95,168,.18)"/><line x1="0" y1="0" x2="0" y2="6" stroke="#ff5fa8" stroke-width="2"/></pattern>
      <clipPath id="sqclip"><rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}"/></clipPath>
      <clipPath id="scan"><rect class="scanrect" x="${lt.x}" y="${lt.y}" width="${lt.s}" height="0"/></clipPath>
    </defs>
    <g class="vig" transform="translate(0 ${L0})">
      ${o}<text class="vtitle" x="${oe}" y="36"></text>
      <g class="vg" data-i="0">
        <rect x="20" y="18" width="360" height="248" class="ui"/><rect x="20" y="18" width="360" height="24" class="uibar"/>
        <text x="30" y="35" class="uit">Scene catalogue \xB7 Sentinel-2 L2A</text>
        <rect x="30" y="52" width="250" height="22" class="field"/><text x="38" y="67" class="q"></text>
        <rect x="290" y="52" width="80" height="22" class="btn"/><text x="330" y="67" class="bt" text-anchor="middle">Search</text>
        <text x="30" y="96" class="res"></text>${l}
        <text x="${oe+130}" y="150" class="big n0">0</text><text x="${oe+130}" y="178" class="bsub">scenes downloaded</text>
        <text x="${oe+130}" y="206" class="bsub dim">tile ${e.tile}, ${e.year}</text>
      </g>
      <g class="vg" data-i="1">
        ${c("s2-partly")}
        <g clip-path="url(#sqclip)">${e.clouds.map(X=>`<polygon class="cl" points="${D0(X,lt.x,lt.y,lt.s)}" pathLength="1"/>`).join("")}</g>
        <rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" class="imgedge"/>
        <text x="${oe}" y="80" class="tl">${new Date(e.partly.date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}</text>
        <text x="${oe}" y="140" class="big n1">0%</text><text x="${oe}" y="166" class="bsub">of this pass is cloud or shadow</text>
        <text x="${oe}" y="206" class="bsub dim">traced from Sentinel-2\u2019s own scene classes</text>
        <text x="${oe}" y="230" class="bsub dim">and cut out of every one of the ${t.s2.length} passes</text>
      </g>
      <g class="vg" data-i="2">
        ${c("s2-true","base")}
        <g class="moving">${c("s2-clear","over")}</g>
        <g class="ties"></g>
        <rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" class="imgedge"/>
        <text x="${oe}" y="80" class="tl">7 April over 2 May</text>
        <text x="${oe}" y="140" class="big n2">0 m</text><text x="${oe}" y="166" class="bsub">apart, matched at four tie points</text>
        <text x="${oe}" y="206" class="bsub dim">every pass matched to the one before,</text><text x="${oe}" y="230" class="bsub dim">pixel for pixel (illustration)</text>
      </g>
      <g class="vg" data-i="3">
        <g class="strips">${["s2-true","s2-clear","s2-partly","s2-true"].map((X,z)=>`<svg x="${lt.x+z*lt.s/4}" y="${lt.y}" width="${lt.s/4}" height="${lt.s}" viewBox="${z*lt.s/4} 0 ${lt.s/4} ${lt.s}"><image href="${eh(X)}" x="0" y="0" width="${lt.s}" height="${lt.s}" preserveAspectRatio="xMidYMid slice"/></svg>`).join("")}
          ${[1,2,3].map(X=>`<line x1="${lt.x+X*lt.s/4}" y1="${lt.y}" x2="${lt.x+X*lt.s/4}" y2="${lt.y+lt.s}" class="seam"/>`).join("")}</g>
        <g class="blend">${c("s2-true")}<image href="${eh("s2-clear")}" x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" preserveAspectRatio="xMidYMid slice" opacity=".5"/></g>
        <rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" class="imgedge"/>
        <text x="${oe}" y="80" class="tl">Several passes blended into one</text>
        <path class="axis2" d="M${oe} 210 H${oe+380} M${oe} 110 V210"/>
        <path class="season" d=""/>
        <text x="${oe+4}" y="104" class="bsub dim">greenness through the year</text>
        <text x="${oe+380}" y="232" class="bsub warn cap" text-anchor="end">the seasons flatten into one picture</text>
      </g>
      <g class="vg" data-i="4">
        ${c("tci-window")}
        <g class="fields">${e.fields.map((X,z)=>`<g class="fd" data-k="${z}"><polygon points="${D0(X.poly,lt.x,lt.y,lt.s)}" style="--c:${N0[X.cls]}" pathLength="1"/><text class="ftag" x="${lt.x+X.poly[0][0]*lt.s}" y="${lt.y+X.poly[0][1]*lt.s-4}">${X.name}</text></g>`).join("")}</g>
        <path class="cursor" d="M0 0 L0 16 L4 12 L8 20 L11 18 L7 11 L13 11 Z"/>
        <rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" class="imgedge"/>
        <text x="${oe}" y="80" class="tl">Outlined by hand, field by field</text>
        <text x="${oe}" y="150" class="big n4">0</text><text x="${oe}" y="176" class="bsub">labels drawn so far</text>
        <text x="${oe}" y="216" class="bsub dim">a map usually needs thousands</text>
      </g>
      <g class="vg" data-i="5">
        <g class="net">${u.map(([X,z])=>`<line x1="${X[0]}" y1="${X[1]}" x2="${z[0]}" y2="${z[1]}" class="edge"/>`).join("")}
          ${h.flat().map(([X,z])=>`<circle cx="${X}" cy="${z}" r="7" class="node"/>`).join("")}
          <g class="pulses">${Array.from({length:14},()=>'<circle r="3" class="pulse"/>').join("")}</g></g>
        <path class="axis2" d="M${oe} 220 H${oe+380} M${oe} 90 V220"/><text x="${oe+4}" y="84" class="bsub dim">error while training</text>
        <path class="loss" d="" />
        <text x="${oe+380}" y="84" class="bsub ep" text-anchor="end">epoch 0</text>
        <text x="${oe+380}" y="244" class="bsub warn" text-anchor="end">for this one task, in this one place</text>
      </g>
      <g class="vg" data-i="6">
        ${c("tci-window")}
        <image href="${eh("classes")}" x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" clip-path="url(#scan)" preserveAspectRatio="none" opacity=".85"/>
        <line class="scanline" x1="${lt.x}" x2="${lt.x+lt.s}" y1="0" y2="0"/>
        <rect x="${lt.x}" y="${lt.y}" width="${lt.s}" height="${lt.s}" class="imgedge"/>
        <text x="${oe}" y="80" class="tl">A map of one place, at last</text>
        ${["farmland","parkland","woodland","town"].map((X,z)=>`<g class="lg" data-k="${z}"><rect x="${oe}" y="${108+z*26}" width="14" height="14" fill="${N0[z]}"/><text x="${oe+22}" y="${120+z*26}" class="bsub">${X}</text></g>`).join("")}
        <text x="${oe}" y="236" class="bsub warn again">and for the next question, start again</text>
      </g>
    </g>
    <path class="callout" d=""/><circle class="calldot" r="4"/>
    ${nh.map((X,z)=>a(z,X)).join("")}
    <g class="arrows">
      <path class="ar" d="M170 37 H186"/><path class="ar" d="M350 37 H366"/><path class="ar" d="M530 37 H546"/>
      <path class="ar" d="M630 68 V88"/><path class="ar" d="M546 123 H534"/><path class="ar" d="M366 123 H354"/>
    </g>
    <path class="loop" d="M186 123 C130 123 90 110 90 72"/>
    <text class="looptext" x="16" y="138">then start again</text><text class="looptext" x="16" y="155">for the next question</text>
    <g class="new">
      <rect x="10" y="466" width="700" height="56" rx="6" class="newbox"/>
      <text x="24" y="500" class="st1 nt">With Tessera:</text>
      ${[["Tessera embeddings",130,290],["a few labels",320,430],["a small model",460,580],["a map",610]].map(([X,z,at],ct)=>`<g class="ns" data-i="${ct}"><text x="${z}" y="500" class="st1">${X}</text>${at?`<path d="M${at} 495 H${at+18}" class="nar"/>`:""}</g>`).join("")}
    </g>
  </svg>`;let f=n.querySelector("svg"),d=X=>f.querySelector(X),m=X=>[...f.querySelectorAll(X)],y=m(".step"),g=m(".ar"),p=m(".vg"),x=m(".ns"),w=d(".vtitle"),v=d(".callout"),M=d(".calldot"),E={q:d('.vg[data-i="0"] .q'),res:d(".res"),rows:m(".row"),n:d(".n0")},T={cl:m(".cl"),n:d(".n1")},_={mv:d(".moving"),ties:d(".ties"),n:d(".n2")},R={strips:d(".strips"),blend:d(".blend"),season:d(".season"),cap:d('.vg[data-i="3"] .cap')},b={fd:m(".fd"),cur:d(".cursor"),n:d(".n4")},C={edges:m(".edge"),pulses:m(".pulse"),loss:d(".loss"),ep:d(".ep")},P={scan:d(".scanrect"),line:d(".scanline"),lg:m(".lg"),again:d(".again")},I=ci(4),N=C.pulses.map(()=>Math.floor(I()*u.length)),U=[[.2,.25],[.78,.2],[.25,.8],[.8,.75]];_.ties.innerHTML=U.map(()=>'<g class="tie"><line class="tl1"/><path class="x1"/><path class="x2"/></g>').join("");let G=m(".tie"),H=X=>{let z="";for(let at=0;at<=X;at++){let ct=.1+.85*Math.exp(-at/11)+.05*Math.sin(at*1.7)*Math.exp(-at/25);z+=(at?"L":"M")+(oe+at/60*380).toFixed(1)+" "+(220-ct*125).toFixed(1)}return z},j=X=>{let z="";for(let at=0;at<=48;at++){let ct=at/48,k=205-90*((.5+.42*Math.sin((ct-.2)*Math.PI*2)*(ct<.85?1:1-(ct-.85)*4))*(1-X)+.5*X);z+=(at?"L":"M")+(oe+ct*380).toFixed(1)+" "+k.toFixed(1)}return z},q=[X=>{let z="Cambridge \xB7 2025 \xB7 any cloud cover";E.q.textContent=z.slice(0,Math.floor(z.length*pt(X,0,.6))),E.res.textContent=X>.7?`${t.s2.length} results`:"";let at=Math.floor(t.s2.length*pt(X,.8,2.6)),ct=Math.max(0,Math.min(e.scenes.length-7,at-5));E.rows.forEach((ft,k)=>{let K=e.scenes[ct+k];ft.style.opacity=X>.7?1:0,ft.querySelector(".rt").textContent=K?`${new Date(K[0]).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}   31UCT   ${String(K[1]).padStart(3)}% cloud`:"",ft.querySelector(".rfill").setAttribute("width",120*Wt(at-(ct+k)+1))}),E.n.textContent=at},X=>{let z=pt(X,.2,1.8);T.cl.forEach((at,ct)=>{let ft=Wt(z*1.4-ct/T.cl.length*.4);at.style.strokeDashoffset=String(1-ft),at.classList.toggle("filled",X>1.9)}),T.n.textContent=`${Math.round(e.partly.cloud*Oe(pt(X,.3,2)))}%`},X=>{let z=1-Oe(pt(X,.7,2.2)),at=12*z,ct=-8*z,ft=2.5*z;_.mv.setAttribute("transform",`translate(${at} ${ct}) rotate(${ft} ${lt.x+lt.s/2} ${lt.y+lt.s/2})`),_.mv.style.opacity=.55;let k=Math.cos(ft*Math.PI/180),K=Math.sin(ft*Math.PI/180),xt=lt.x+lt.s/2,kt=lt.y+lt.s/2;G.forEach((Mt,Xt)=>{let Ce=lt.x+U[Xt][0]*lt.s,Yt=lt.y+U[Xt][1]*lt.s,se=xt+(Ce-xt)*k-(Yt-kt)*K+at,ge=kt+(Ce-xt)*K+(Yt-kt)*k+ct,ee=(Se,ze)=>`M${Se-6} ${ze} H${Se+6} M${Se} ${ze-6} V${ze+6}`;Mt.querySelector(".tl1").setAttribute("x1",Ce),Mt.querySelector(".tl1").setAttribute("y1",Yt),Mt.querySelector(".tl1").setAttribute("x2",se),Mt.querySelector(".tl1").setAttribute("y2",ge),Mt.querySelector(".x1").setAttribute("d",ee(Ce,Yt)),Mt.querySelector(".x2").setAttribute("d",ee(se,ge)),Mt.style.opacity=X>.3+Xt*.1?1:0}),_.n.textContent=`${Math.round(Math.hypot(at,ct)/Math.hypot(12,8)*15)} m`},X=>{let z=Oe(pt(X,1,2));R.strips.style.opacity=1-z,R.blend.style.opacity=z,R.season.setAttribute("d",j(Oe(pt(X,1,2)))),R.cap.style.opacity=pt(X,1.6,2.1)},X=>{let at=0;b.fd.forEach((K,xt)=>{let kt=pt(X,.3+xt*.42,.3+xt*.42+.35);K.style.opacity=kt>0?1:0,K.querySelector("polygon").style.strokeDashoffset=String(1-kt),K.classList.toggle("done",kt>=1),kt>=1&&(at=xt+1)});let ct=Math.min(b.fd.length-1,Math.floor(pt(X,.3,.3+b.fd.length*.42)*b.fd.length)),ft=e.fields[ct]?.poly,k=Math.floor(pt(X,.3+ct*.42,.3+ct*.42+.35)*((ft?.length||1)-1));ft&&b.cur.setAttribute("transform",`translate(${lt.x+ft[k][0]*lt.s} ${lt.y+ft[k][1]*lt.s})`),b.n.textContent=Math.round(Oe(pt(X,.3,2.8))*2400).toLocaleString("en-GB")},X=>{let z=X*1.6;C.pulses.forEach((ct,ft)=>{let[k,K]=u[(N[ft]+Math.floor(z+ft*.37))%u.length],xt=(z+ft*.37)%1;ct.setAttribute("cx",k[0]+(K[0]-k[0])*xt),ct.setAttribute("cy",k[1]+(K[1]-k[1])*xt)});let at=Math.floor(60*pt(X,.2,2.6));C.loss.setAttribute("d",at>0?H(at):""),C.ep.textContent=`epoch ${Math.round(200*pt(X,.2,2.6))}`},X=>{let z=pt(X,.3,2)*lt.s;P.scan.setAttribute("height",z),P.line.setAttribute("y1",lt.y+z),P.line.setAttribute("y2",lt.y+z),P.line.style.opacity=z>0&&z<lt.s?1:0,P.lg.forEach((at,ct)=>at.style.opacity=pt(X,.6+ct*.25,.9+ct*.25)),P.again.style.opacity=pt(X,2,2.4)}],J=X=>{let[z,at]=nh[X],ct=L0+4;if(at===6){let ft=X<3?z+140:z+20,k=X<3?z+170:z-10;return{d:`M${ft} 68 V80 H${k} V${ct}`,dot:[ft,68]}}return{d:`M${z+80} 154 V${ct}`,dot:[z+80,154]}},et=-1;return(X,z)=>{let at=-1,ct=0;if(z.pipe.forEach((ft,k)=>{if(X>=ft){at=k;let K=z.pipe[k+1]??z.collapse;ct=(X-ft)*Math.max(1,2.6/Math.max(.5,K-ft))}}),X>=z.collapse&&(at=-1),y.forEach((ft,k)=>{ft.classList.toggle("in",X>=z.pipe[k]),ft.classList.toggle("hot",k===at)}),g.forEach((ft,k)=>ft.classList.toggle("in",X>=z.pipe[k+1]-.2)),f.classList.toggle("looping",X>=z.pipe[6]+.6),f.classList.toggle("done",X>=z.collapse),x.forEach((ft,k)=>ft.classList.toggle("in",X>=z.collapse+.5+k*.35)),at!==et){if(p.forEach((ft,k)=>ft.classList.toggle("on",k===at)),et=at,at>=0){w.textContent=nh[at][2],w.setAttribute("x",at===0?400:oe);let ft=J(at);v.setAttribute("d",ft.d),M.setAttribute("cx",ft.dot[0]),M.setAttribute("cy",ft.dot[1])}f.classList.toggle("novig",at<0)}at>=0&&(q[at](ct),v.style.strokeDashoffset=String(-(X*30)%20))}}function F0(s,t){return{...s,...t,headers:{...s.headers,...t.headers}}}function O0(s,t){let e=typeof s=="string"?new URL(s):s;e.pathname.endsWith("/")||(e.pathname+="/");let n=new URL(t.slice(1),e);return n.search=e.search,n}async function B0(s){if(s.status!==404){if(s.status===200||s.status===206)return new Uint8Array(await s.arrayBuffer());throw new Error(`Unexpected response status ${s.status} ${s.statusText}`)}}var Xi,ao,oo,Ni,Zr,k0,Gf=class{constructor(t,e={}){Jt(this,Ni);gt(this,"url");Jt(this,Xi);Jt(this,ao);Jt(this,oo);this.url=t,$t(this,Xi,e.fetch??(n=>fetch(n))),$t(this,ao,e.overrides??{}),$t(this,oo,e.useSuffixRequest??!1)}async get(t,e={}){let n=O0(this.url,t).href,i=xi(this,Ni,Zr).call(this,n,e),r=await mt(this,Xi).call(this,i);return B0(r)}async getRange(t,e,n={}){let i=O0(this.url,t),r;if("suffixLength"in e)r=await xi(this,Ni,k0).call(this,i,e.suffixLength,n);else{let a={...n,headers:{...n.headers,Range:`bytes=${e.offset}-${e.offset+e.length-1}`}},o=xi(this,Ni,Zr).call(this,i,a);r=await mt(this,Xi).call(this,o)}return B0(r)}};Xi=new WeakMap,ao=new WeakMap,oo=new WeakMap,Ni=new WeakSet,Zr=function(t,e){return new Request(t,F0(mt(this,ao),e))},k0=async function(t,e,n){if(mt(this,oo)){let h={...n,headers:{...n.headers,Range:`bytes=-${e}`}};return mt(this,Xi).call(this,xi(this,Ni,Zr).call(this,t,h))}let i=xi(this,Ni,Zr).call(this,t,{...n,method:"HEAD"}),r=await mt(this,Xi).call(this,i);if(!r.ok)return r;let a=r.headers.get("Content-Length"),o=Number(a),c=o-e,l={...n,headers:{...n.headers,Range:`bytes=${c}-${o-1}`}};return mt(this,Xi).call(this,xi(this,Ni,Zr).call(this,t,l))};var Hf=Gf;var bs=class extends Error{},Yi=class extends bs{constructor(e,n={}){super(`Not found: ${e}`,{cause:n.cause});gt(this,"_tag","NotFoundError");gt(this,"name","NotFoundError");gt(this,"path");gt(this,"found");this.path=n.path,this.found=n.found}},be=class extends bs{constructor(e,n={}){super(e,{cause:n.cause});gt(this,"_tag","InvalidMetadataError");gt(this,"name","InvalidMetadataError");gt(this,"path");this.path=n.path}},ih=class extends bs{constructor(e){super(`Unknown codec: ${e}`);gt(this,"_tag","UnknownCodecError");gt(this,"name","UnknownCodecError");gt(this,"codec");this.codec=e}},sh=class extends bs{constructor(e){let n=[`Failed to ${e.direction} chunk`,e.codec&&`via codec "${e.codec}"`,e.chunkPath&&`at ${e.chunkPath}`].filter(Boolean);super(n.join(" "),{cause:e.cause});gt(this,"_tag","CodecPipelineError");gt(this,"name","CodecPipelineError");gt(this,"direction");gt(this,"codec");gt(this,"chunkPath");this.direction=e.direction,this.codec=e.codec,this.chunkPath=e.chunkPath}},ji=class extends bs{constructor(){super(...arguments);gt(this,"_tag","InvalidSelectionError");gt(this,"name","InvalidSelectionError")}},ws=class extends bs{constructor(e){super(`Unsupported: ${e}`);gt(this,"_tag","UnsupportedError");gt(this,"name","UnsupportedError");gt(this,"feature");this.feature=e}};function Ln(s){return()=>{throw new ws(`${s} encode`)}}var lo=class s{constructor(t,e){gt(this,"kind","array_to_array");gt(this,"encode",Ln("bitround"));if(t.keepbits<0)throw new be("keepbits must be zero or positive")}static fromConfig(t,e){return new s(t,e)}decode(t){return t}};function $f(s){return s instanceof ArrayBuffer||s instanceof SharedArrayBuffer}var Hn,Kr=class{constructor(t,e,n){Jt(this,Hn);typeof t=="number"?$t(this,Hn,new Uint8Array(t)):$f(t)?$t(this,Hn,new Uint8Array(t,e,n)):$t(this,Hn,new Uint8Array(Array.from(t,i=>i?1:0)))}get BYTES_PER_ELEMENT(){return 1}get byteOffset(){return mt(this,Hn).byteOffset}get byteLength(){return mt(this,Hn).byteLength}get buffer(){return mt(this,Hn).buffer}get length(){return mt(this,Hn).length}get(t){let e=mt(this,Hn)[t];return typeof e=="number"?e!==0:e}set(t,e){mt(this,Hn)[t]=e?1:0}fill(t){mt(this,Hn).fill(t?1:0)}*[Symbol.iterator](){for(let t=0;t<this.length;t++)yield this.get(t)}};Hn=new WeakMap;var Jr,js=class{constructor(t,e,n,i){gt(this,"_data");gt(this,"chars");Jt(this,Jr);if(this.chars=t,$t(this,Jr,new TextEncoder),typeof e=="number")this._data=new Uint8Array(e*t);else if($f(e))i&&(i=i*t),this._data=new Uint8Array(e,n,i);else{let r=Array.from(e);this._data=new Uint8Array(r.length*t);for(let a=0;a<r.length;a++)this.set(a,r[a])}}get BYTES_PER_ELEMENT(){return this.chars}get byteOffset(){return this._data.byteOffset}get byteLength(){return this._data.byteLength}get buffer(){return this._data.buffer}get length(){return this.byteLength/this.BYTES_PER_ELEMENT}get(t){let e=new Uint8Array(this.buffer,this.byteOffset+this.chars*t,this.chars);return new TextDecoder().decode(e).replace(/\x00/g,"")}set(t,e){let n=new Uint8Array(this.buffer,this.byteOffset+this.chars*t,this.chars);n.fill(0),n.set(mt(this,Jr).encode(e))}fill(t){let e=mt(this,Jr).encode(t);for(let n=0;n<this.length;n++)this._data.set(e,n*this.chars)}*[Symbol.iterator](){for(let t=0;t<this.length;t++)yield this.get(t)}};Jr=new WeakMap;var xn,Wf=class Wf{constructor(t,e,n,i){Jt(this,xn);gt(this,"chars");if(this.chars=t,typeof e=="number")$t(this,xn,new Int32Array(e*t));else if($f(e))i&&(i*=t),$t(this,xn,new Int32Array(e,n,i));else{let r=e,a=new Wf(t,1);$t(this,xn,new Int32Array((function*(){for(let o of r)a.set(0,o),yield*mt(a,xn)})()))}}get BYTES_PER_ELEMENT(){return mt(this,xn).BYTES_PER_ELEMENT*this.chars}get byteLength(){return mt(this,xn).byteLength}get byteOffset(){return mt(this,xn).byteOffset}get buffer(){return mt(this,xn).buffer}get length(){return mt(this,xn).length/this.chars}get(t){let e=this.chars*t,n="";for(let i=0;i<this.chars;i++)n+=String.fromCodePoint(mt(this,xn)[e+i]);return n.replace(/\u0000/g,"")}set(t,e){let n=this.chars*t,i=mt(this,xn).subarray(n,n+this.chars);i.fill(0);for(let r=0;r<this.chars;r++)i[r]=e.codePointAt(r)??0}fill(t){this.set(0,t);let e=mt(this,xn).subarray(0,this.chars);for(let n=1;n<this.length;n++)mt(this,xn).set(e,n*this.chars)}*[Symbol.iterator](){for(let t=0;t<this.length;t++)yield this.get(t)}};xn=new WeakMap;var Zs=Wf;function ah(){if(typeof SharedArrayBuffer>"u")throw new Error("SharedArrayBuffer is not available. In browsers, this requires Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers to be set.")}function oh(s,t){return t?new SharedArrayBuffer(s):new ArrayBuffer(s)}function Js(s){let t=new TextDecoder().decode(s);try{return JSON.parse(t)}catch(e){throw new be("Failed to decode JSON",{cause:e})}}function qf(s,t){let e=t/2,n=t-1,i=0;for(let r=0;r<s.length;r+=t)for(let a=0;a<e;a+=1)i=s[r+a],s[r+a]=s[r+n-a],s[r+n-a]=i}function Zn(s){if(s==="v2:object")return globalThis.Array;let t=s.match(/v2:([US])(\d+)/);if(t){let[,n,i]=t;return(n==="U"?Zs:js).bind(null,Number(i))}if(s==="string")return globalThis.Array;let e={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:globalThis.BigInt64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:globalThis.BigUint64Array,float16:globalThis.Float16Array,float32:Float32Array,float64:Float64Array,bool:Kr}[s];if(!e)throw new be(`Unknown or unsupported dataType: ${s}`);return e}function ui(s,t){let e=s.length;typeof t=="string"&&(t=t==="C"?Array.from({length:e},(r,a)=>a):Array.from({length:e},(r,a)=>e-1-a)),vn(e===t.length,"Order length must match the number of dimensions.");let n=1,i=new Array(e);for(let r=t.length-1;r>=0;r--)i[t[r]]=n,n*=s[t[r]];return i}function V0({name:s,configuration:t}){if(s==="default"){let e=t?.separator??"/";return n=>["c",...n].join(e)}if(s==="v2"){let e=t?.separator??".";return n=>n.join(e)||"0"}throw new be(`Unknown chunk key encoding: ${s}`)}function z0(s){if(s==="|O")return{dataType:"v2:object"};let t=s.match(/^([<|>])(.*)$/);if(!t)throw new be(`Invalid dtype: ${s}`);let[,e,n]=t,i={b1:"bool",i1:"int8",u1:"uint8",i2:"int16",u2:"uint16",i4:"int32",u4:"uint32",i8:"int64",u8:"uint64",f2:"float16",f4:"float32",f8:"float64"}[n]??(n.startsWith("S")||n.startsWith("U")?`v2:${n}`:void 0);if(!i)throw new be(`Unsupported or unknown dtype: ${s}`);return e==="|"?{dataType:i}:{dataType:i,endian:e==="<"?"little":"big"}}function Gw(s){return(s.id==="fixedscaleoffset"||s.id==="numcodecs.fixedscaleoffset")&&typeof s.scale=="number"&&typeof s.offset=="number"&&(s.astype===void 0||typeof s.astype=="string")&&(s.dtype===void 0||typeof s.dtype=="string")}function G0(s,t={}){let e=[],n=z0(s.dtype);s.order==="F"&&e.push({name:"transpose",configuration:{order:"F"}});for(let r of s.filters??[]){if(r.id==="fixedscaleoffset"||r.id==="numcodecs.fixedscaleoffset"){if(!Gw(r))throw new be(`Invalid fixedscaleoffset filter: ${JSON.stringify(r)}`);e.push({name:"scale_offset",configuration:{scale:r.scale,offset:r.offset}});let c=r.astype??r.dtype;if(c!==void 0&&c!==s.dtype){let l=z0(c).dataType;if(!rh(l,"number")&&!rh(l,"bigint"))throw new be(`fixedscaleoffset astype must be a numeric data type, got ${c}`);e.push({name:"cast_value",configuration:{data_type:l,rounding:"nearest-even",out_of_range:"wrap"}})}continue}let{id:a,...o}=r;e.push({name:`numcodecs.${a}`,configuration:o})}if("endian"in n&&n.endian==="big"&&e.push({name:"bytes",configuration:{endian:"big"}}),s.compressor){let{id:r,...a}=s.compressor;e.push({name:`numcodecs.${r}`,configuration:a})}let i;return globalThis.Array.isArray(t._ARRAY_DIMENSIONS)&&(i=t._ARRAY_DIMENSIONS),{zarr_format:3,node_type:"array",shape:s.shape,data_type:n.dataType,chunk_grid:{name:"regular",configuration:{chunk_shape:s.chunks}},chunk_key_encoding:{name:"v2",configuration:{separator:s.dimension_separator??"."}},codecs:e,fill_value:s.fill_value,dimension_names:i,attributes:t}}function H0(s,t={}){return{zarr_format:3,node_type:"group",attributes:t}}function rh(s,t){if(t!=="number"&&t!=="bigint"&&t!=="boolean"&&t!=="object"&&t!=="string")return s===t;let e=s==="bool";if(t==="boolean")return e;let n=s.startsWith("v2:U")||s.startsWith("v2:S")||s==="string";if(t==="string")return n;let i=s==="int64"||s==="uint64";if(t==="bigint")return i;let r=s==="v2:object";return t==="object"?r:!n&&!i&&!e&&!r}function $0(s){return s?.name==="sharding_indexed"}function lh(s){if((s.data_type==="uint64"||s.data_type==="int64")&&s.fill_value!=null)return BigInt(s.fill_value);let t=s.data_type==="float16"||s.data_type==="float32"||s.data_type==="float64";if(typeof s.fill_value=="string"&&t){let e={NaN:NaN,Infinity:1/0,"-Infinity":-1/0};if(s.fill_value in e)return e[s.fill_value]}return s.fill_value}function W0(s){let t=s.signal,e=s.opts?.signal;return t&&e?AbortSignal.any([t,e]):t??e}function Xf(s,...t){if(!t.some(e=>s instanceof e))throw s}function vn(s,t=""){if(!s)throw new Error(t)}async function ch(s,{format:t,signal:e}){let n;if(s instanceof ArrayBuffer)n=new Response(s);else{let i=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);n=new Response(i.slice().buffer)}vn(n.body,"Response does not contain body.");try{return await new Response(n.body.pipeThrough(new DecompressionStream(t),{signal:e})).arrayBuffer()}catch{throw e?.throwIfAborted(),new Error(`Failed to decode ${t}`)}}var q0=Hw();function Hw(){let s=new Uint32Array([305419896]);return new Uint8Array(s.buffer,s.byteOffset,s.byteLength)[0]!==18}function X0(s){return"BYTES_PER_ELEMENT"in s?s.BYTES_PER_ELEMENT:4}var ho,Ms,Qr,uo,ta,Yf=class Yf{constructor(t,e){gt(this,"kind","array_to_bytes");Jt(this,ho);Jt(this,Ms);Jt(this,Qr);Jt(this,uo);Jt(this,ta);$t(this,ta,t?.endian),$t(this,Ms,Zn(e.dataType)),$t(this,uo,e.shape),$t(this,ho,ui(e.shape,"C"));let n=new(mt(this,Ms))(0);$t(this,Qr,n.BYTES_PER_ELEMENT)}static fromConfig(t,e){return new Yf(t,e)}encode(t){let e=new Uint8Array(t.data.buffer);return q0&&mt(this,ta)==="big"&&(e=e.slice(),qf(e,X0(mt(this,Ms)))),e}computeEncodedSize(t){return t}decode(t){return q0&&mt(this,ta)==="big"&&(t=t.slice(),qf(t,X0(mt(this,Ms)))),t.byteOffset%mt(this,Qr)!==0&&(t=t.slice()),{data:new(mt(this,Ms))(t.buffer,t.byteOffset,t.byteLength/mt(this,Qr)),shape:mt(this,uo),stride:mt(this,ho)}}};ho=new WeakMap,Ms=new WeakMap,Qr=new WeakMap,uo=new WeakMap,ta=new WeakMap;var co=Yf;var Y0={NaN:NaN,Infinity:1/0,"-Infinity":-1/0},j0={float16:2,float32:4,float64:8};function fo(s){return s in j0}function hh(s){return s==="int64"||s==="uint64"}function $w(s,t){let e=BigInt(s),n=new ArrayBuffer(t),i=new DataView(n);if(t===2){if(typeof i.getFloat16!="function")throw new ws("float16 hex-encoded scalar decoding (requires DataView.prototype.getFloat16)");return i.setUint16(0,Number(e)),i.getFloat16(0)}return t===4?(i.setUint32(0,Number(e)),i.getFloat32(0)):(i.setBigUint64(0,e),i.getFloat64(0))}function ea(s,t){if(hh(s)){if(typeof t!="number"||!Number.isInteger(t))throw new be(`Expected an integer value for data type "${s}", got ${JSON.stringify(t)}`);return BigInt(t)}if(typeof t=="number"){if(!fo(s)&&!Number.isInteger(t))throw new be(`Expected an integer value for data type "${s}", got ${t}`);return t}if(!fo(s))throw new be(`String-encoded scalar "${t}" is not valid for non-float data type "${s}"`);return t in Y0?Y0[t]:$w(t,j0[s])}var Z0=new Set(["int8","uint8","int16","uint16","int32","uint32","int64","uint64","float16","float32","float64"]),jf={int8:[-(2**7),2**7-1],uint8:[0,2**8-1],int16:[-(2**15),2**15-1],uint16:[0,2**16-1],int32:[-(2**31),2**31-1],uint32:[0,2**32-1]},Zf={int64:[-(2n**63n),2n**63n-1n],uint64:[0n,2n**64n-1n]};function J0(s,t,e){return s.map(([n,i])=>({src:ea(t,n),tgt:ea(e,i)}))}function Ww(s,t){for(let e of t)if(typeof e.src=="number"&&Number.isNaN(e.src)){if(typeof s=="number"&&Number.isNaN(s))return e.tgt}else if(s===e.src)return e.tgt}function qw(s){if(!Number.isFinite(s))return s;if(Math.abs(s-Math.trunc(s))===.5){let t=Math.floor(s),e=Math.ceil(s);return t%2===0?t:e}return Math.round(s)}function Xw(s){return Math.sign(s)*Math.floor(Math.abs(s)+.5)}function K0(s){switch(s){case"nearest-even":return qw;case"towards-zero":return Math.trunc;case"towards-positive":return Math.ceil;case"towards-negative":return Math.floor;case"nearest-away":return Xw}}function Jf(s,t,e){let n=t-s+1;switch(e){case"clamp":return i=>i<s?s:i>t?t:i;case"wrap":return i=>i>=s&&i<=t?i:((i-s)%n+n)%n+s;default:return i=>{if(i>=s&&i<=t)return i;throw new Error(`Value ${i} out of range [${s}, ${t}]. Set out_of_range='clamp' or out_of_range='wrap' to handle this.`)}}}function Kf(s,t,e){let n=t-s+1n;switch(e){case"clamp":return i=>i<s?s:i>t?t:i;case"wrap":return i=>i>=s&&i<=t?i:((i-s)%n+n)%n+s;default:return i=>{if(i>=s&&i<=t)return i;throw new Error(`Value ${i} out of range [${s}, ${t}]. Set out_of_range='clamp' or out_of_range='wrap' to handle this.`)}}}var po,mo,go,yo,Qf=class Qf{constructor(t,e,n,i,r,a){gt(this,"kind","array_to_array");Jt(this,po);Jt(this,mo);Jt(this,go);Jt(this,yo);gt(this,"encode",Ln("cast_value"));$t(this,po,e),$t(this,mo,Zn(t)),$t(this,go,Q0(e,t,n,i,r)),$t(this,yo,Q0(t,e,n,i,a))}getEncodedMeta(t){let e=t.fillValue;return e!=null&&(e=mt(this,yo).call(this,e)),{...t,dataType:mt(this,po),fillValue:e}}static fromConfig(t,e){let n=e.dataType,i=t.data_type;if(!Z0.has(n))throw new be(`cast_value codec does not support array data type: ${n}`);if(!Z0.has(i))throw new be(`cast_value codec does not support encoded data type: ${i}`);let r=t.rounding??"nearest-even",a=t.scalar_map?.decode?J0(t.scalar_map.decode,i,n):[],o=t.scalar_map?.encode?J0(t.scalar_map.encode,n,i):[];return new Qf(n,i,r,t.out_of_range,a,o)}decode(t){let e=t.data,n=new(mt(this,mo))(e.length);for(let i=0;i<e.length;i++)n[i]=mt(this,go).call(this,e[i]);return{data:n,shape:t.shape,stride:t.stride}}};po=new WeakMap,mo=new WeakMap,go=new WeakMap,yo=new WeakMap;var uh=Qf;function Q0(s,t,e,n,i){let r=fo(s),a=hh(s),o=fo(t),c=hh(t),l;if(r&&o){if(e!=="nearest-even")throw new be(`cast_value float -> float only supports "nearest-even" rounding, got "${e}"`);l=u=>u}else if(r&&!o&&!c){let u=K0(e),f=Jf(...jf[t],n);l=d=>{if(!Number.isFinite(d))throw new Error(`Cannot cast ${d} to integer type without scalar_map`);return f(u(d))}}else if(r&&c){let u=K0(e),f=Kf(...Zf[t],n);l=d=>{if(!Number.isFinite(d))throw new Error(`Cannot cast ${d} to integer type without scalar_map`);return f(BigInt(u(d)))}}else if(!r&&!a&&o)l=u=>u;else if(a&&o)l=u=>Number(u);else if(!r&&!a&&!o&&!c)l=Jf(...jf[t],n);else if(!r&&!a&&c){let u=Kf(...Zf[t],n);l=f=>u(BigInt(f))}else if(a&&!o&&!c){let u=Jf(...jf[t],n);l=f=>u(Number(f))}else if(a&&c)l=Kf(...Zf[t],n);else throw new Error(`Unhandled type combination: ${s} -> ${t}`);return i.length===0?l:u=>{let f=Ww(u,i);return f!==void 0?f:l(u)}}var fh=class s{constructor(){gt(this,"kind","bytes_to_bytes");gt(this,"encode",Ln("crc32c"))}static fromConfig(){return new s}decode(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength-4)}computeEncodedSize(t){return t+4}};var Yw=new Set(["int8","uint8","int16","uint16","int32","uint32","int64","uint64","float16","float32","float64"]);function tg(s,t){let e=s.length,n=e===0||t[e-1]===1;for(let r=e-2;r>=0&&n;r--)n=t[r]===t[r+1]*s[r+1];if(n)return;let i=e===0||t[0]===1;for(let r=1;r<e&&i;r++)i=t[r]===t[r-1]*s[r-1];if(!i)throw new Error(`DeltaCodec requires C- or Fortran-contiguous strides, got shape=${JSON.stringify(s)} stride=${JSON.stringify(t)}`)}var na,td=class td{constructor(t){gt(this,"kind","array_to_array");Jt(this,na);$t(this,na,t)}static fromConfig(t,e){if(!Yw.has(e.dataType))throw new be(`Delta codec does not support data type: ${e.dataType}`);return new td(Zn(e.dataType))}encode(t){tg(t.shape,t.stride);let e=t.data,n=new(mt(this,na))(e.length);n[0]=e[0];for(let i=1;i<e.length;i++)n[i]=e[i]-e[i-1];return{data:n,shape:t.shape,stride:t.stride}}decode(t){tg(t.shape,t.stride);let e=t.data,n=new(mt(this,na))(e.length);n[0]=e[0];for(let i=1;i<e.length;i++)n[i]=n[i-1]+e[i];return{data:n,shape:t.shape,stride:t.stride}}};na=new WeakMap;var dh=td;var ph=class s{constructor(){gt(this,"kind","bytes_to_bytes");gt(this,"encode",Ln("gzip"))}static fromConfig(t){return new s}async decode(t){let e=await ch(t,{format:"gzip"});return new Uint8Array(e)}};function jw(s,t){return vn(!Number.isNaN(t),"JsonCodec allow_nan is false but NaN was encountered during encoding."),vn(t!==Number.POSITIVE_INFINITY,"JsonCodec allow_nan is false but Infinity was encountered during encoding."),vn(t!==Number.NEGATIVE_INFINITY,"JsonCodec allow_nan is false but -Infinity was encountered during encoding."),t}function Zw(s,t){return t instanceof Object&&!Array.isArray(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t}var vo,_o,ed=class ed{constructor(t={}){gt(this,"configuration");gt(this,"kind","array_to_bytes");Jt(this,vo);Jt(this,_o);this.configuration=t;let{encoding:e="utf-8",skipkeys:n=!1,ensure_ascii:i=!0,check_circular:r=!0,allow_nan:a=!0,sort_keys:o=!0,indent:c,strict:l=!0}=t,h=t.separators;h||(c?h=[", ",": "]:h=[",",":"]),$t(this,vo,{encoding:e,skipkeys:n,ensure_ascii:i,check_circular:r,allow_nan:a,indent:c,separators:h,sort_keys:o}),$t(this,_o,{strict:l})}static fromConfig(t){return new ed(t)}encode(t){let{indent:e,encoding:n,ensure_ascii:i,check_circular:r,allow_nan:a,sort_keys:o}=mt(this,vo);vn(n==="utf-8","JsonCodec does not yet support non-utf-8 encoding.");let c=[];vn(r,"JsonCodec does not yet support skipping the check for circular references during encoding."),a||c.push(jw),o&&c.push(Zw);let l=Array.from(t.data);l.push("|O"),l.push(t.shape);let h;c.length&&(h=(f,d)=>{let m=d;for(let y of c)m=y(f,m);return m});let u=JSON.stringify(l,h,e);return i&&(u=u.replace(/[\u007F-\uFFFF]/g,f=>{let d=`0000${f.charCodeAt(0).toString(16)}`;return`\\u${d.substring(d.length-4)}`})),new TextEncoder().encode(u)}decode(t){let{strict:e}=mt(this,_o);vn(e,"JsonCodec does not yet support non-strict decoding.");let n=Js(t),i=n.pop();n.pop(),vn(i,"0D not implemented for JsonCodec.");let r=ui(i,"C");return{data:n,shape:i,stride:r}}};vo=new WeakMap,_o=new WeakMap;var xo=ed;var Jw=new Set(["int8","uint8","int16","uint16","int32","uint32","int64","uint64","float16","float32","float64"]),bo,wo,Mo,nd=class nd{constructor(t,e,n){gt(this,"kind","array_to_array");Jt(this,bo);Jt(this,wo);Jt(this,Mo);gt(this,"encode",Ln("scale_offset"));$t(this,wo,t),$t(this,Mo,e),$t(this,bo,n)}static fromConfig(t,e){if(!Jw.has(e.dataType))throw new be(`scale_offset codec does not support data type: ${e.dataType}`);return new nd(ea(e.dataType,t.scale??1),ea(e.dataType,t.offset??0),Zn(e.dataType))}decode(t){let e=t.data,n=new(mt(this,bo))(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]/mt(this,wo)+mt(this,Mo);return{data:n,shape:t.shape,stride:t.stride}}};bo=new WeakMap,wo=new WeakMap,Mo=new WeakMap;var mh=nd;var Ks,id=class id{constructor(t,e){gt(this,"kind","bytes_to_bytes");Jt(this,Ks);if(e){let n=new(Zn(e.dataType))(0);vn("BYTES_PER_ELEMENT"in n,`Shuffle codec requires a fixed-size dtype, got "${e.dataType}"`),$t(this,Ks,n.BYTES_PER_ELEMENT)}else $t(this,Ks,t.elementsize??4)}static fromConfig(t,e){return new id(t,e)}encode(t){return Kw(t,mt(this,Ks))}decode(t){return Qw(t,mt(this,Ks))}};Ks=new WeakMap;var gh=id;function Kw(s,t){let e=s.length,n=Math.floor(e/t),i=new Uint8Array(e);for(let r=0;r<t;r++)for(let a=0;a<n;a++)i[r*n+a]=s[a*t+r];return i}function Qw(s,t){let e=s.length,n=Math.floor(e/t),i=new Uint8Array(e);for(let r=0;r<t;r++)for(let a=0;a<n;a++)i[a*t+r]=s[r*n+a];return i}function eg(s){return s instanceof Kr||s instanceof js||s instanceof Zs?new Proxy(s,{get(e,n){return e.get(Number(n))},set(e,n,i){return e.set(Number(n),i),!0}}):s}function tM(s,t){let e;return s.data instanceof js||s.data instanceof Zs?e=new s.data.constructor(s.data.chars,s.data.length):e=new s.data.constructor(s.data.length),{data:e,shape:s.shape,stride:ui(s.shape,t)}}function eM(s,t){let e=tM(s,t),n=s.shape.length,i=s.shape.reduce((c,l)=>c*l,1),r=Array(n).fill(0),a=eg(s.data),o=eg(e.data);for(let c=0;c<i;c++){let l=0,h=0;for(let u=0;u<n;u++)l+=r[u]*s.stride[u],h+=r[u]*e.stride[u];o[h]=a[l],r[0]+=1;for(let u=0;u<n;u++)if(r[u]===s.shape[u]){if(u+1===n)break;r[u]=0,r[u+1]+=1}}return e}function nM(s){let t=s.shape.length;return vn(t===s.stride.length,"Shape and stride must have the same length."),s.stride.map((e,n)=>({stride:e,index:n})).sort((e,n)=>n.stride-e.stride).map(e=>e.index)}function iM(s,t){let e=nM(s);return vn(e.length===t.length,"Orders must match"),e.every((n,i)=>n===t[i])}var Qs,sd=class sd{constructor(t,e){gt(this,"kind","array_to_array");Jt(this,Qs);let n=t.order??"C",i=e.shape.length,r=new Array(i);if(n==="C")for(let a=0;a<i;++a)r[a]=a;else if(n==="F")for(let a=0;a<i;++a)r[a]=i-a-1;else{r=n;let a=new Array(i);r.forEach(o=>{vn(!a[o],`Invalid permutation: ${JSON.stringify(n)}`),a[o]=!0})}$t(this,Qs,r)}static fromConfig(t,e){return new sd(t,e)}encode(t){return iM(t,mt(this,Qs))?t:eM(t,mt(this,Qs))}decode(t){return{data:t.data,shape:t.shape,stride:ui(t.shape,mt(this,Qs))}}};Qs=new WeakMap;var yh=sd;var Eo,To,rd=class rd{constructor(t){gt(this,"kind","array_to_bytes");Jt(this,Eo);Jt(this,To);gt(this,"encode",Ln("vlen-utf8"));$t(this,Eo,t),$t(this,To,ui(t,"C"))}static fromConfig(t,e){return new rd(e.shape)}decode(t){let e=new TextDecoder,n=new DataView(t.buffer),i=Array(n.getUint32(0,!0)),r=4;for(let a=0;a<i.length;a++){let o=n.getUint32(r,!0);r+=4,i[a]=e.decode(t.buffer.slice(r,r+o)),r+=o}return{data:i,shape:mt(this,Eo),stride:mt(this,To)}}};Eo=new WeakMap,To=new WeakMap;var So=rd;var xh=class s{constructor(){gt(this,"kind","bytes_to_bytes");gt(this,"encode",Ln("zlib"))}static fromConfig(t){return new s}async decode(t){let e=await ch(t,{format:"deflate"});return new Uint8Array(e)}};function sM(){let s=()=>import("./blosc-T6STIBEH.js").then(r=>r.default),t=()=>import("./lz4-VHDAYZOP.js").then(r=>r.default),e=()=>import("./zstd-4UZG6X6Q.js").then(r=>r.default),n=()=>ph,i=()=>xh;return new Map().set("blosc",s).set("lz4",t).set("zstd",e).set("gzip",n).set("zlib",i).set("transpose",()=>yh).set("bytes",()=>co).set("crc32c",()=>fh).set("vlen-utf8",()=>So).set("json2",()=>xo).set("bitround",()=>lo).set("cast_value",()=>uh).set("scale_offset",()=>mh).set("numcodecs.blosc",s).set("numcodecs.lz4",t).set("numcodecs.zstd",e).set("numcodecs.gzip",n).set("numcodecs.zlib",i).set("numcodecs.vlen-utf8",()=>So).set("numcodecs.shuffle",()=>gh).set("numcodecs.delta",()=>dh).set("numcodecs.bitround",()=>lo).set("numcodecs.json2",()=>xo)}var rM=sM();function Ao(s){let t;function e(){return t||(t=aM(s)),t}async function n(i,r,a){try{return await a()}catch(o){throw new sh({direction:i,codec:r,cause:o})}}return{async encode(i){let r=await e();for(let{name:o,codec:c}of r.arrayToArray)i=await n("encode",o,()=>c.encode(i));let a=await n("encode",r.arrayToBytes.name,()=>r.arrayToBytes.codec.encode(i));for(let{name:o,codec:c}of r.bytesToBytes)a=await n("encode",o,()=>c.encode(a));return a},async decode(i){let r=await e();for(let o=r.bytesToBytes.length-1;o>=0;o--){let{name:c,codec:l}=r.bytesToBytes[o];i=await n("decode",c,()=>l.decode(i))}let a=await n("decode",r.arrayToBytes.name,()=>r.arrayToBytes.codec.decode(i));for(let o=r.arrayToArray.length-1;o>=0;o--){let{name:c,codec:l}=r.arrayToArray[o];a=await n("decode",c,()=>l.decode(a))}return a},async computeEncodedSize(i){let r=await e(),a=ng(r.arrayToBytes.name,r.arrayToBytes.codec,i);for(let{name:o,codec:c}of r.bytesToBytes)a=ng(o,c,a);return a}}}function ng(s,t,e){if(!t.computeEncodedSize)throw new be(`Codec "${s}" cannot compute its encoded size; it is not a fixed-size codec and cannot be used in a sharding index pipeline`);return t.computeEncodedSize(e)}async function aM(s){let t=s.codecs.map(async a=>{let o=await rM.get(a.name)?.();if(!o)throw new ih(a.name);return{Codec:o,meta:a}}),e=[],n,i=[],r={...s};for await(let{Codec:a,meta:o}of t){let c=a.fromConfig(o.configuration,r);switch(c.kind){case"array_to_array":e.push({name:o.name,codec:c}),c.getEncodedMeta&&(r=c.getEncodedMeta(r));break;case"array_to_bytes":n={name:o.name,codec:c};break;default:i.push({name:o.name,codec:c})}}if(!n){if(!oM(r))throw new be(`Cannot encode ${r.dataType} to bytes without a codec`);n={name:"bytes",codec:co.fromConfig({endian:"little"},r)}}return{arrayToArray:e,arrayToBytes:n,bytesToBytes:i}}function oM(s){return s.dataType!=="v2:object"&&s.dataType!=="string"}var ig=18446744073709551615n;function sg(s,t,e,n){if(!s.store.getRange)throw new ws("sharding requires a store with getRange");let i=s.store.getRange.bind(s.store),r=t.map((l,h)=>l/n.chunk_shape[h]),a=Ao({dataType:"uint64",shape:[...r,2],codecs:n.index_codecs,fillValue:null}),o=16*r.reduce((l,h)=>l*h,1),c={};return async(l,h)=>{let u=l.map((v,M)=>Math.floor(v/r[M])),f=s.resolve(e(u)).path;f in c||(c[f]=(async()=>{let v=await a.computeEncodedSize(o),M=await i(f,{suffixLength:v},h);return M?await a.decode(M):null})().catch(v=>{throw delete c[f],v}));let d=await c[f];if(d===null)return;let{data:m,shape:y,stride:g}=d,p=l.map((v,M)=>v%y[M]).reduce((v,M,E)=>v+M*g[E],0),x=m[p],w=m[p+1];if(!(x===ig&&w===ig))return i(f,{offset:Number(x),length:Number(w)},h)}}var Zi=class s{constructor(t,e="/"){gt(this,"store");gt(this,"path");this.store=t,this.path=e}resolve(t){let e=new URL(`file://${this.path.endsWith("/")?this.path:`${this.path}/`}`);return new s(this.store,decodeURIComponent(new URL(t,e).pathname))}};function ad(s){return new Zi(s??new Map)}var Co,tr=class extends Zi{constructor(e,n,i){super(e,n);gt(this,"kind","group");Jt(this,Co);$t(this,Co,i)}get attrs(){return mt(this,Co).attributes}};Co=new WeakMap;function rg(s){return s.find(e=>e.name==="transpose")?.configuration?.order??"C"}function lM(s,t){let e=new Map(t.map((n,i)=>[n,i]));return s.filter(n=>e.has(n)).map(n=>e.get(n))}function ag(s){return(t,e)=>{let n=globalThis.Array.isArray(s)&&e?lM(s,e):s;return ui(t,n)}}var Ro=Symbol("zarrita.context");function cg(s){return s[Ro]}function cM(s,t){let{configuration:e}=t.codecs.find($0)??{},n={encodeChunkKey:V0(t.chunk_key_encoding),TypedArray:Zn(t.data_type),fillValue:t.fill_value};if(e){let r=rg(e.codecs);return{...n,kind:"sharded",chunkShape:e.chunk_shape,codec:Ao({dataType:t.data_type,shape:e.chunk_shape,codecs:e.codecs,fillValue:t.fill_value}),getStrides:ag(r),getChunkBytes:sg(s,t.chunk_grid.configuration.chunk_shape,n.encodeChunkKey,e)}}let i=rg(t.codecs);return{...n,kind:"regular",chunkShape:t.chunk_grid.configuration.chunk_shape,codec:Ao({dataType:t.data_type,shape:t.chunk_grid.configuration.chunk_shape,codecs:t.codecs,fillValue:t.fill_value}),getStrides:ag(i),async getChunkBytes(r,a){let o=n.encodeChunkKey(r),c=s.resolve(o).path;return s.store.get(c,a)}}}var og,lg,Di,Ss=class extends(lg=Zi,og=Ro,lg){constructor(e,n,i){super(e,n);gt(this,"kind","array");Jt(this,Di);gt(this,og);$t(this,Di,{...i,fill_value:lh(i)}),this[Ro]=cM(this,mt(this,Di))}get attrs(){return mt(this,Di).attributes}get dimensionNames(){return mt(this,Di).dimension_names}get fillValue(){return mt(this,Di).fill_value}get shape(){return mt(this,Di).shape}get chunks(){return this[Ro].chunkShape}get dtype(){return mt(this,Di).data_type}async getChunk(e,n,i){i?.useSharedArrayBuffer&&ah();let r=this[Ro],a=await r.getChunkBytes(e,n);if(!a){let o=r.chunkShape.reduce((l,h)=>l*h,1),c;if(i?.useSharedArrayBuffer){let l=new r.TypedArray(0);if(!("BYTES_PER_ELEMENT"in l))console.warn("zarrita: useSharedArrayBuffer is not supported for non-buffer-backed data types."),c=new r.TypedArray(o);else{let h=oh(o*l.BYTES_PER_ELEMENT,!0);c=new r.TypedArray(h,0,o)}}else c=new r.TypedArray(o);return c.fill(r.fillValue),{data:c,shape:r.chunkShape,stride:r.getStrides(r.chunkShape)}}return r.codec.decode(a)}is(e){return rh(this.dtype,e)}};Di=new WeakMap;function hg(s,t){let e=s;for(let n of t)e instanceof Promise?e=e.then(i=>n(i)):e=n(e);return e}function ug(s,...t){return hg(s,t)}async function pg(s){let t=s.store.arrayExtensions;return t?.length?await ug(s,...t):s}var vh=hM();function hM(){let s=new WeakMap;function t(e){let n=s.get(e)??{v2:0,v3:0};return s.set(e,n),n}return{increment(e,n){t(e)[n]+=1},versionMax(e){let n=t(e);return n.v3>n.v2?"v3":"v2"}}}async function uM(s,t){let e=await s.store.get(s.resolve(".zattrs").path,{signal:t});return e?Js(e):{}}async function fM(s,t={}){let e="store"in s?s:new Zi(s),{signal:n}=t,i={};return(t.attrs??!0)&&(i=await uM(e,n)),n?.throwIfAborted(),t.kind==="array"?fg(e,i,n):t.kind==="group"?dg(e,i,n):fg(e,i,n).catch(r=>(Xf(r,Yi,be),dg(e,i,n)))}async function fg(s,t,e){let{path:n}=s.resolve(".zarray"),i=await s.store.get(n,{signal:e});if(!i)throw new Yi("v2 array",{path:n});return vh.increment(s.store,"v2"),pg(new Ss(s.store,s.path,G0(Js(i),t)))}async function dg(s,t,e){let{path:n}=s.resolve(".zgroup"),i=await s.store.get(n,{signal:e});if(!i)throw new Yi("v2 group",{path:n});return vh.increment(s.store,"v2"),new tr(s.store,s.path,H0(Js(i),t))}async function dM(s,t){let{store:e,path:n}=s.resolve("zarr.json"),i=await s.store.get(n,{signal:t});if(!i)throw new Yi("v3 array or group",{path:n});let r=Js(i);return r.node_type==="array"&&(r.fill_value=lh(r)),r.node_type==="array"?pg(new Ss(e,s.path,r)):new tr(e,s.path,r)}async function pM(s,t={}){let e="store"in s?s:new Zi(s),n=await dM(e,t.signal);if(vh.increment(e.store,"v3"),t.kind===void 0||t.kind==="array"&&n instanceof Ss||t.kind==="group"&&n instanceof tr)return n;let i=n instanceof Ss?"array":"group";throw new Yi(`${t.kind} at ${e.path}`,{path:e.path,found:i})}async function Ji(s,t={}){let e="store"in s?s.store:s,n=vh.versionMax(e),i=n==="v2"?Ji.v2:Ji.v3,r=n==="v2"?Ji.v3:Ji.v2;return i(s,t).catch(a=>(Xf(a,Yi,be),r(s,t)))}Ji.v2=fM;Ji.v3=pM;function*mg(s,t,e=1){t===void 0&&(t=s,s=0);for(let n=s;n<t;n+=e)yield n}function*gg(...s){if(s.length===0)return;let t=s.map(n=>n[Symbol.iterator]()),e=t.map(n=>n.next());if(e.some(n=>n.done))throw new Error("Input contains an empty iterator.");for(let n=0;;){if(e[n].done){if(t[n]=s[n][Symbol.iterator](),e[n]=t[n].next(),++n>=t.length)return}else yield e.map(({value:i})=>i),n=0;e[n]=t[n].next()}}function ld({start:s,stop:t,step:e},n){if(e===0)throw new ji("slice step cannot be zero");e=e??1;let i=e<0,[r,a]=i?[-1,n-1]:[0,n];return s===null?s=i?a:r:s<0?(s+=n,s<r&&(s=r)):s>a&&(s=a),t===null?t=i?r:a:t<0?(t+=n,t<r&&(t=r)):t>a&&(t=a),[s,t,e]}function od(s){if(s==null)return null;if(typeof s=="bigint"){if(s>Number.MAX_SAFE_INTEGER||s<Number.MIN_SAFE_INTEGER)throw new ji(`Cannot safely convert ${s} to a number. Value exceeds Number.MAX_SAFE_INTEGER.`);return Number(s)}return s}function fi(s,t,e=null){return t===void 0&&(t=s,s=null),{start:od(s),stop:od(t),step:od(e)}}function yg(){let s=[];return{add:t=>s.push(t()),onIdle:()=>Promise.all(s)}}function mM(s,t){throw new ji(`too many indicies for array; expected ${t.length}, got ${s.length}`)}function gM(s){throw new ji(`index out of bounds for dimension with length ${s}`)}function yM(){throw new ji("only slices with step >= 1 are supported")}function xM(s,t){s.length>t.length&&mM(s,t)}function vM(s,t){return s=Math.trunc(s),s<0&&(s=t+s),(s>=t||s<0)&&gM(t),s}var cd=class{constructor({dimSel:t,dimLen:e,dimChunkLen:n}){gt(this,"dimSel");gt(this,"dimLen");gt(this,"dimChunkLen");gt(this,"nitems");t=vM(t,e),this.dimSel=t,this.dimLen=e,this.dimChunkLen=n,this.nitems=1}*[Symbol.iterator](){let t=Math.floor(this.dimSel/this.dimChunkLen),e=t*this.dimChunkLen,n=this.dimSel-e;yield{dimChunkIx:t,dimChunkSel:n}}},Po=class{constructor({dimSel:t,dimLen:e,dimChunkLen:n}){gt(this,"start");gt(this,"stop");gt(this,"step");gt(this,"dimLen");gt(this,"dimChunkLen");gt(this,"nitems");gt(this,"nchunks");let[i,r,a]=ld(t,e);this.start=i,this.stop=r,this.step=a,this.step<1&&yM(),this.dimLen=e,this.dimChunkLen=n,this.nitems=Math.max(0,Math.ceil((this.stop-this.start)/this.step)),this.nchunks=Math.ceil(this.dimLen/this.dimChunkLen)}*[Symbol.iterator](){let t=Math.floor(this.start/this.dimChunkLen),e=Math.ceil(this.stop/this.dimChunkLen);for(let n of mg(t,e)){let i=n*this.dimChunkLen,r=Math.min(this.dimLen,(n+1)*this.dimChunkLen),a=r-i,o=0,c=0;if(this.start<i){let d=(i-this.start)%this.step;d&&(c+=this.step-d),o=Math.ceil((i-this.start)/this.step)}else c=this.start-i;let l=this.stop>r?a:this.stop-i,h=[c,l,this.step],u=Math.ceil((l-c)/this.step),f=[o,o+u,1];yield{dimChunkIx:n,dimChunkSel:h,dimOutSel:f}}}};function _M(s,t){let e=[];return s===null?e=t.map(n=>fi(null)):Array.isArray(s)&&(e=s.map(n=>n??fi(null))),xM(e,t),e}var _h=class{constructor({selection:t,shape:e,chunkShape:n}){gt(this,"dimIndexers");gt(this,"shape");gt(this,"outputAxes");this.dimIndexers=_M(t,e).map((i,r)=>new(typeof i=="number"?cd:Po)({dimSel:i,dimLen:e[r],dimChunkLen:n[r]})),this.shape=this.dimIndexers.filter(i=>i instanceof Po).map(i=>i.nitems),this.outputAxes=this.dimIndexers.map((i,r)=>({ixr:i,axis:r})).filter(({ixr:i})=>i instanceof Po).map(({axis:i})=>i)}*[Symbol.iterator](){for(let t of gg(...this.dimIndexers)){let e=t.map(i=>i.dimChunkIx),n=t.map(i=>"dimOutSel"in i?{from:i.dimChunkSel,to:i.dimOutSel}:{from:i.dimChunkSel,to:null});yield{chunkCoords:e,mapping:n}}}};function xg(s,t){return"get"in s?s.get(t):s[t]}async function vg(s,t,e,n){e.useSharedArrayBuffer&&ah();let i=W0(e),r=cg(s),a=new _h({selection:t,shape:s.shape,chunkShape:s.chunks});if(s.shape.length===0){let{data:u}=await s.getChunk([],{signal:i},{useSharedArrayBuffer:e.useSharedArrayBuffer});return xg(u,0)}let o=a.shape.reduce((u,f)=>u*f,1),c;if(e.useSharedArrayBuffer){let u=new r.TypedArray(0);if(!("BYTES_PER_ELEMENT"in u))console.warn("zarrita: useSharedArrayBuffer is not supported for non-buffer-backed data types."),c=new r.TypedArray(o);else{let f=oh(o*u.BYTES_PER_ELEMENT,!0);c=new r.TypedArray(f,0,o)}}else c=new r.TypedArray(o);let l=n.prepare(c,a.shape,r.getStrides(a.shape,a.outputAxes)),h=e.createQueue?.()??yg();for(let{chunkCoords:u,mapping:f}of a)h.add(async()=>{i?.throwIfAborted();let{data:d,shape:m,stride:y}=await s.getChunk(u,{signal:i},{useSharedArrayBuffer:e.useSharedArrayBuffer}),g=n.prepare(d,m,y);n.setFromChunk(l,g,f)});return await h.onIdle(),a.shape.length===0?xg(l.data,0):l}function fd(s,t=0,e){let n=e??s.length-t;return{length:n,subarray(i,r=n){return fd(s,t+i,r-i)},set(i,r=0){for(let a=0;a<i.length;a++)s[t+r+a]=i.get(a)},get(i){return s[t+i]}}}function hd(s){return globalThis.Array.isArray(s.data)?{data:fd(s.data),stride:s.stride,bytesPerElement:1}:{data:new Uint8Array(s.data.buffer,s.data.byteOffset,s.data.byteLength),stride:s.stride,bytesPerElement:s.data.BYTES_PER_ELEMENT}}function bM(s){return"chars"in s?s.constructor.bind(null,s.chars):s.constructor}function wM(s,t){if(globalThis.Array.isArray(s.data))return fd([t]);let e=bM(s.data),n=new e([t]);return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}var MM={prepare(s,t,e){return{data:s,shape:t,stride:e}},setScalar(s,t,e){let n=hd(s);ud(n,t,wM(s,e),n.bytesPerElement)},setFromChunk(s,t,e){let n=hd(s);bh(n,hd(t),n.bytesPerElement,e)}};async function ia(s,t=null,e={}){return vg(s,t,e,MM)}function dd(s,t,e){return e<0&&t<s?Math.floor((s-t-1)/-e)+1:s<t?Math.floor((t-s-1)/e)+1:0}function ud(s,t,e,n){if(t.length===0){s.data.set(e,0);return}let[i,...r]=t,[a,...o]=s.stride;if(typeof i=="number"){let f=s.data.subarray(a*i*n);ud({data:f,stride:o},r,e,n);return}let[c,l,h]=i,u=dd(c,l,h);if(r.length===0){for(let f=0;f<u;f++)s.data.set(e,a*(c+h*f)*n);return}for(let f=0;f<u;f++){let d=s.data.subarray(a*(c+h*f)*n);ud({data:d,stride:o},r,e,n)}}function SM(s,t,e){if(s.length!==t.length||s.length!==e.length)return null;let n=1,i=0,r=0;for(let a=s.length-1;a>=0;a--){let o=s[a];if(o.from===null||o.to===null||t[a]!==n||e[a]!==n)return null;let[c,l,h]=o.to,[u,,f]=o.from;if(h!==1||f!==1)return null;i+=n*c,r+=n*u,n*=dd(c,l,h)}return{size:n,destOffset:i,srcOffset:r}}function bh(s,t,e,n){let i=SM(n,s.stride,t.stride);if(i!==null){let x=i.srcOffset*e;s.data.set(t.data.subarray(x,x+i.size*e),i.destOffset*e);return}let[r,...a]=n,[o,...c]=s.stride,[l,...h]=t.stride;if(r.from===null){if(a.length===0){s.data.set(t.data.subarray(0,e),o*r.to*e);return}bh({data:s.data.subarray(o*r.to*e),stride:c},t,e,a);return}if(r.to===null){if(a.length===0){let x=l*r.from*e;s.data.set(t.data.subarray(x,x+e),0);return}bh(s,{data:t.data.subarray(l*r.from*e),stride:h},e,a);return}let[u,f,d]=r.to,[m,y,g]=r.from,p=dd(u,f,d);if(a.length===0){for(let x=0;x<p;x++){let w=l*(m+g*x)*e;s.data.set(t.data.subarray(w,w+e),o*(u+d*x)*e)}return}for(let x=0;x<p;x++)bh({data:s.data.subarray(o*(u+x*d)*e),stride:c},{data:t.data.subarray(l*(m+x*g)*e),stride:h},e,a)}var wh="https://data.source.coop/tessera/tessera/zarr/v1.1-dclimate",Mh="https://data.source.coop/tessera/tessera/zarr/v1",bg=[2017,2018,2019,2020,2021,2022,2023,2024,2025],Io=10,Ve=32,ne=128;function nr(s,t,e=Math.floor((s+180)/6)+1){let n=(e-1)*6-180+3,i=6378137,r=1/298.257223563,a=.9996,o=r/(2-r),c=i/(1+o)*(1+o*o/4+o**4/64),l=[o/2-2*o*o/3+5*o**3/16,13*o*o/48-3*o**3/5,61*o**3/240],h=t*Math.PI/180,u=(s-n)*Math.PI/180,f=Math.sqrt(r*(2-r)),d=Math.sinh(Math.atanh(Math.sin(h))-f*Math.atanh(f*Math.sin(h))),m=Math.atan2(d,Math.cos(u)),y=Math.atanh(Math.sin(u)/Math.sqrt(1+d*d)),g=y,p=m;for(let w=1;w<=3;w++)g+=l[w-1]*Math.cos(2*w*m)*Math.sinh(2*w*y),p+=l[w-1]*Math.sin(2*w*m)*Math.cosh(2*w*y);let x=Math.atan(Math.tan(u)*Math.sin(h));return{zone:e,E:5e5+a*c*g,N:a*c*p,conv:x}}function TM(s,t,e){let i=.0033528106647474805,r=.9996,a=i/(2-i),o=6378137/(1+a)*(1+a*a/4+a**4/64),c=[a/2-2*a*a/3+37*a**3/96,a*a/48+a**3/15,17*a**3/480],l=[2*a-2*a*a/3-2*a**3,7*a*a/3-8*a**3/5,56*a**3/15],h=t/(r*o),u=(s-5e5)/(r*o),f=h,d=u;for(let p=1;p<=3;p++)f-=c[p-1]*Math.sin(2*p*h)*Math.cosh(2*p*u),d-=c[p-1]*Math.cos(2*p*h)*Math.sinh(2*p*u);let m=Math.asin(Math.sin(f)/Math.cosh(d)),y=m;for(let p=1;p<=3;p++)y+=l[p-1]*Math.sin(2*p*m);let g=(e-1)*6-180+3;return{lat:y*180/Math.PI,lon:g+Math.atan2(Math.sinh(d),Math.cos(f))*180/Math.PI}}var er={bytes:0,requests:0};async function _g(s){let t;for(let e=0;e<5;e++){try{if(t=await fetch(s.clone()),t.status<500)break}catch(n){if(e===4||s.signal?.aborted)throw n}await new Promise(n=>setTimeout(n,400*2**e))}return s.method!=="HEAD"&&(er.requests++,er.bytes+=+t.headers.get("content-length")||0),t}var pd=new Map;function md(s=wh){if(pd.has(s))return pd.get(s);let t=ad(new Hf(s,{overrides:{cache:"no-store"},fetch:_g})),e=new Map,n=new Map,i={url:s,open(r){return e.has(r)||e.set(r,Ji.v3(t.resolve(r),{kind:"array"})),e.get(r)},zone(r){let a=`utm${String(r).padStart(2,"0")}`;return n.has(r)||n.set(r,(async()=>{let c=(await(await _g(new Request(`${s}/${a}/zarr.json`))).json()).attributes?.["spatial:transform"]||[10,0,163840,0,-10,9338880],l=Array.from((await ia(await i.open(`${a}/time`))).data,Number);return{g:a,x0:c[2],y0:c[5],years:l}})()),n.get(r)}};return pd.set(s,i),i}var Es=class s{constructor({zone:t,row0:e,col0:n,n:i,year:r=2025,url:a=wh,x0:o=163840,y0:c=9338880}){Object.assign(this,{zone:t,row0:e,col0:n,n:i,year:r,url:a,x0:o,y0:c}),this.emb=new Float32Array(i*i*ne).fill(NaN),this.ok=new Uint8Array(i*i),this.loaded=new Uint8Array(i/Ve*(i/Ve)),this.arrived=new Float64Array(i/Ve*(i/Ve)),this.done=!1}static async around(t,e,n=256,i=2025,r=wh){let{zone:a,E:o,N:c}=nr(e,t),{x0:l,y0:h}=await md(r).zone(a),u=Math.floor((h-c)/Io),f=Math.floor((o-l)/Io);return new s({zone:a,row0:Math.round((u-n/2)/Ve)*Ve,col0:Math.round((f-n/2)/Ve)*Ve,n,year:i,url:r,x0:l,y0:h})}get E0(){return this.x0+this.col0*Io}get N0(){return this.y0-this.row0*Io}get size(){return this.n*Io}centre(){return TM(this.E0+this.size/2,this.N0-this.size/2,this.zone)}async load({onChunk:t,signal:e,concurrency:n=8,order:i}={}){let r=md(this.url),{g:a,years:o}=await r.zone(this.zone),[c,l]=await Promise.all([r.open(`${a}/embeddings`),r.open(`${a}/scales`)]),h=o.indexOf(this.year),u=this.n/Ve,f=this.n;if(h<0)throw new Error(`no ${this.year} in this store`);let d=[];for(let g=0;g<u;g++)for(let p=0;p<u;p++)d.push([g,p]);d=i?i(d):d.sort((g,p)=>Math.hypot(g[0]-u/2+.5,g[1]-u/2+.5)-Math.hypot(p[0]-u/2+.5,p[1]-u/2+.5));let m=0,y=async()=>{for(;m<d.length;){if(e?.aborted)return;let[g,p]=d[m++],x=this.row0+g*Ve,w=this.col0+p*Ve,[v,M]=await Promise.all([ia(c,[h,null,fi(x,x+Ve),fi(w,w+Ve)],{opts:{signal:e}}),ia(l,[h,fi(x,x+Ve),fi(w,w+Ve)],{opts:{signal:e}})]),E=v.data,T=M.data,_=Ve*Ve;for(let R=0;R<Ve;R++)for(let b=0;b<Ve;b++){let C=R*Ve+b,P=T[C],I=(g*Ve+R)*f+p*Ve+b;if(!(P>0)||!isFinite(P))continue;let N=I*ne;for(let U=0;U<ne;U++)this.emb[N+U]=E[U*_+C]*P;this.ok[I]=1}this.loaded[g*u+p]=1,this.arrived[g*u+p]=performance.now(),t?.(g,p)}};return await Promise.all(Array.from({length:n},y)),this.done=!e?.aborted,this}at(t,e){let n=t*this.n+e;return this.ok[n]?this.emb.subarray(n*ne,n*ne+ne):null}};function Ts(s,t,e=new Uint8ClampedArray(s.n*s.n*4)){let n=t.cdf,i=n[0].length-1;for(let r=0;r<s.n*s.n;r++){if(!s.ok[r]){e[r*4+3]=0;continue}for(let a=0;a<3;a++){let o=s.emb[r*ne+t.bands[a]],c=n[a],l=0,h=i;for(;h-l>1;){let f=l+h>>1;c[f]<=o?l=f:h=f}let u=c[h]>c[l]?(l+Math.min(1,Math.max(0,(o-c[l])/(c[h]-c[l]))))/i:l/i;e[r*4+a]=255*u}e[r*4+3]=255}return e}function wg(s,t=new Uint8ClampedArray(s.n*s.n*4)){let e=s.n*s.n,n=new Float64Array(ne),i=new Float64Array(ne*ne),r=new Float64Array(ne),a=0;for(let l=0;l<e;l+=3)if(s.ok[l]){a++;for(let h=0;h<ne;h++)r[h]=s.emb[l*ne+h],n[h]+=r[h];for(let h=0;h<ne;h++){let u=r[h];for(let f=h;f<ne;f++)i[h*ne+f]+=u*r[f]}}if(!a)return t;for(let l=0;l<ne;l++)n[l]/=a;for(let l=0;l<ne;l++)for(let h=l;h<ne;h++){let u=i[l*ne+h]/a-n[l]*n[h];i[l*ne+h]=i[h*ne+l]=u}let o=[];for(let l=0;l<3;l++){let h=new Float64Array(ne).map((u,f)=>Math.sin(f*7+l+1));for(let u=0;u<60;u++){let f=new Float64Array(ne);for(let m=0;m<ne;m++){let y=0;for(let g=0;g<ne;g++)y+=i[m*ne+g]*h[g];f[m]=y}for(let m of o){let y=0;for(let g=0;g<ne;g++)y+=f[g]*m[g];for(let g=0;g<ne;g++)f[g]-=y*m[g]}let d=0;for(let m=0;m<ne;m++)d+=f[m]*f[m];d=Math.sqrt(d)||1,h=f.map(m=>m/d)}o.push(h)}let c=[0,1,2].map(()=>new Float32Array(e));for(let l=0;l<e;l++)if(s.ok[l])for(let h=0;h<3;h++){let u=0,f=o[h];for(let d=0;d<ne;d++)u+=(s.emb[l*ne+d]-n[d])*f[d];c[h][l]=u}for(let l=0;l<3;l++){let h=[];for(let d=0;d<e;d+=7)s.ok[d]&&h.push(c[l][d]);h.sort((d,m)=>d-m);let u=h[Math.floor(h.length*.02)],f=h[Math.floor(h.length*.98)];for(let d=0;d<e;d++)t[d*4+l]=255*(c[l][d]-u)/(f-u||1)}for(let l=0;l<e;l++)t[l*4+3]=s.ok[l]?255:0;return t}function Sh(s,t){let e=s.n*s.n,n=new Float32Array(e).fill(NaN),i=0;for(let r=0;r<ne;r++)i+=t[r]*t[r];i=Math.sqrt(i)||1;for(let r=0;r<e;r++){if(!s.ok[r])continue;let a=0,o=0,c=r*ne;for(let l=0;l<ne;l++){let h=s.emb[c+l];a+=h*t[l],o+=h*h}n[r]=a/(Math.sqrt(o)*i)}return n}function Eh(s,t,e=3){let n=s.n*s.n,i=new Int8Array(n).fill(-1),r=t.length;if(!r)return i;let a=t.map(d=>{let m=0;for(let y=0;y<ne;y++)m+=d.emb[y]*d.emb[y];return m=Math.sqrt(m)||1,Float32Array.from(d.emb,y=>y/m)}),o=t.map(d=>d.cls),c=Math.max(...o)+1,l=new Float32Array(r),h=new Float32Array(c),u=Math.min(e,r),f=new Int32Array(u);for(let d=0;d<n;d++){if(!s.ok[d])continue;let m=d*ne;for(let g=0;g<r;g++){let p=0,x=a[g];for(let w=0;w<ne;w++)p+=s.emb[m+w]*x[w];l[g]=p}for(let g=0;g<u;g++){let p=-1,x=-1/0;for(let w=0;w<r;w++)l[w]>x&&(x=l[w],p=w);f[g]=p,l[p]=-1/0}h.fill(0);for(let g=0;g<u;g++)h[o[f[g]]]+=1+(u-g)*.01;let y=0;for(let g=1;g<c;g++)h[g]>h[y]&&(y=g);i[d]=y}return i}async function Mg(s,t,e,n=2){let i=await md(wh).open(`global_rgb/${n}/rgb`),r=1e-4*2**n,a=Math.max(0,Math.floor((90-s-e)/r)),o=Math.ceil((90-s+e)/r),c=Math.floor((t-e+180)/r),l=Math.ceil((t+e+180)/r),h=await ia(i,[fi(a,o),fi(c,l),null]);return{data:new Uint8ClampedArray(h.data.buffer,h.data.byteOffset,h.data.length),w:l-c,h:o-a,lat0:90-o*r,lat1:90-a*r,lon0:c*r-180,lon1:l*r-180}}var gd=[["Farmland","#e8a94f"],["Parkland","#8fe37a"],["Woodland","#2f9a5c"],["Town","#d45fb0"]],Sg=["1024","256","64","16","6.4"],Th=class{constructor({scene:t,hudRoot:e,tl:n,data:i,base:r}){Object.assign(this,{scene:t,tl:n,data:i,base:r});let{cue:a,stage:o}=n,c=i.demo;this.H=new Qc(e),this.cues={pipe:(()=>{let f=a("orbit.3","masking"),d=a("orbit.3","stitching"),m=a("orbit.3","downloading"),y=a("orbit.3","here")-.6;return[m,f,(f+d)/2,d,a("orbit.3","label"),a("orbit.3","training"),a("orbit.3","scratch")].map((g,p)=>Math.max(g,m+p*(y-m)/7))})(),pipeOpen:a("orbit.3")-.3,tour:[n.stage("orbit").t0,a("orbit.3")-.3],collapse:a("orbit.3","here")-.3,bands:a("sensors.2","10"),views:(()=>{let f=a("sensors.2","measures"),d=a("sensors.2","10"),m=a("sensors.2","radar")-1.1,y=(m-d)/6;return[f,d,d+y,d+2*y,d+3*y,d+4*y,d+5*y,m,a("sensors.2","radar"),a("sensors.2","cloud")]})(),radar:a("sensors.2","sentinel",1),blend:a("sensors.3","blends"),comp:a("sensors.3")-.3,clouds:a("sensors.2","radar"),pull:a("dpixel.1","works"),stack:a("dpixel.1","gathers"),mask:a("dpixel.2"),drawA:a("dpixel.3","small"),drawB:a("dpixel.3","second"),pair:a("dpixel.3","same"),count:a("dpixel.3","billion")-.6,shuffle:a("dpixel.3","world"),encoder:a("inference.1"),radar2:a("inference.1","radar"),meet:a("inference.1","joins"),vec:a("inference.1","fingerprint"),sweep:a("inference.1","works"),sweepEnd:a("inference.2")+.3,stream:a("tasks.1","streaming"),cloud:a("tasks.2","cloud"),touch:a("tasks.2","parker"),evalAt:a("tasks.4"),evalDraw:a("tasks.4","classifier"),evalUnseen:a("tasks.4","vienna"),results:[a("tasks.4","vienna")-.2,a("tasks.4","california")-.2],classes:[a("tasks.3","farmland"),a("tasks.3","parkland"),a("tasks.3","woodland"),a("tasks.3","town")],classify:a("tasks.3","takes"),solar:a("tasks.5","segmenter")-.3,outline:a("tasks.6","outlines"),regress:a("missions.1","instead"),missions:[a("missions.2","borneo")-.3,a("missions.2","finland")-.3,a("missions.2","brazil")-.3],nest:a("orbit.2","each")-.2,missionsEnd:a("missions.3")};let l=this.H,h=i.dpixel;this.atlas=new Image,this.atlas.src=`${r}/assets/img/stack.webp`,this.panels={pipeline:U0(l,h,i.pipeline),bands:x0(l),composite:v0(l,h,this.atlas),dpixels:_0(l,h,i.dpixels,this.atlas),dpixel:b0(l,h),train:w0(l),encoder:M0(l),vector:S0(l,h),cloud:T0(l),knn:A0(l,gd),eval:R0(l,i.curve),regress:P0(l)},this.live=E0(l),this.unet=C0(l),this.missions=I0(l),this.tags={s2:document.getElementById("tag-s2"),s1:document.getElementById("tag-s1")};let u=this.win=new Es({zone:c.zone,row0:c.row0,col0:c.col0,n:c.n,year:2025});this.centre=u.centre(),this.conv=-nr(this.centre.lon,this.centre.lat).conv,t.setOrigin(this.centre.lat,this.centre.lon),this.built=!1,this.unetProgress=0}preload(){if(this.preloading)return this.preloading;let t=this.scene,e=this.centre,n=i=>new Promise(r=>t.loader.load(`${this.base}/assets/img/${i}.webp`,a=>{a.colorSpace=qe,a.anisotropy=8,r(a)},void 0,()=>r(null)));return this.ground={},this.preloading=(async()=>{for(let[i,r]of Sg.entries())for(let a of["tci"]){let o=await n(`${a}-${r}`),c=t.groundPlane(a+r,{lat:e.lat,lon:e.lon,size:parseFloat(r)*1e3,conv:this.conv,map:o,order:i*2+(a==="emb"?1:0),opacity:0,soft:r==="6.4"?.05:r==="1024"?.12:.25});o&&t.warm(o),this.ground[a+r]=c}this.buildStack(),this.livePlane=t.livePlane("live",this.win,{lat:e.lat,lon:e.lon,conv:this.conv}),this.buildMarkers(),this.buildCloud(),this.built=!0})(),this.preloading}buildStack(){let t=this.scene,e=this.data.dpixel,n=e.s2.length,i=1e3,r=640,a=b=>(Date.parse(b)-Date.parse("2025-01-01"))/864e5/365,o=t.enu(e.lat,e.lon),c=new Gs().copy(new Xn(r,r)),l=new Float32Array(n),h=new Float32Array(n),u=new Float32Array(n),f=new Float32Array(n),d=new Float32Array(n),m=new Float32Array(n);e.s2.forEach((b,C)=>{l[C]=C,h[C]=b.ok?1:0,d[C]=C/n});let y=e.s2.map((b,C)=>b.ok?C:-1).filter(b=>b>=0);[[11,u],[29,f]].forEach(([b,C])=>{let P=ci(b),I=new Set;for(;I.size<16&&I.size<y.length;)I.add(y[Math.floor(P()*y.length)]);I.forEach(N=>{C[N]=1})});for(let b=0;b<n;b++)u[b]&&(f[b]=0);for(let b of[u,f]){let C=0;for(let P=0;P<n;P++)b[P]&&(m[P]=C++)}for(let[b,C]of Object.entries({idx:l,ok:h,inA:u,inB:f,frac:d,rank:m}))c.setAttribute(b,new Ai(C,1));let g=t.tex(`${this.base}/assets/img/stack.webp`);this.su={atlas:{value:g},reveal:{value:0},mask:{value:0},drawA:{value:0},drawB:{value:0},opacity:{value:0},pullA:{value:0},pullB:{value:0},pair:{value:0},side:{value:new D(1,0,0)},cy:{value:o.u+25+i*.42}};let p=new Fe({uniforms:this.su,transparent:!0,depthWrite:!1,side:an,...Li(`attribute float idx, ok, inA, inB, frac, rank; varying vec2 vUv; varying float vOk, vA, vB, vShow, vRest;
        uniform float reveal, pullA, pullB, pair, cy; uniform vec3 side;
        void main() { float c = mod(idx, 16.0), r = floor(idx / 16.0);
          vUv = vec2((c + uv.x) / 16.0, 1.0 - (r + 1.0 - uv.y) / 11.0); vOk = ok; vA = inA; vB = inB;
          vShow = clamp((reveal - frac) * 30.0, 0.0, 1.0);
          vec3 p = position; p.y += (1.0 - vShow) * 400.0;
          vec4 w = instanceMatrix * vec4(p, 1.0);
          // out to the side, then closed up into a pile
          float pulled = inA * pullA + inB * pullB;
          w.xyz += side * (inB - inA) * 900.0 * pulled;
          w.y = mix(w.y, cy + rank * 22.0, (inA + inB) * pair);
          vRest = 1.0 - max(pullA, pullB) * (1.0 - inA - inB) * 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * w; }`,`uniform sampler2D atlas; uniform float mask, drawA, drawB, opacity; varying vec2 vUv; varying float vOk, vA, vB, vShow, vRest;
        void main() { vec3 c = texture2D(atlas, vUv).rgb; float a = 0.34 * vRest;
          float cloudy = (1.0 - vOk) * mask; a *= 1.0 - cloudy * 0.8; c = mix(c, vec3(0.02, 0.05, 0.1), cloudy * 0.7);
          vec2 e = abs(vUv * vec2(16.0, 11.0) - floor(vUv * vec2(16.0, 11.0)) - 0.5);
          float edge = step(0.47, max(e.x, e.y));
          vec3 hl = vec3(0.0); float ha = 0.0;
          if (vA * drawA > 0.5) { hl = vec3(1.0, 0.45, 0.06); ha = 1.0; }
          if (vB * drawB > 0.5) { hl = mix(hl, vec3(0.11, 0.78, 1.0), ha > 0.0 ? 0.5 : 1.0); ha = 1.0; }
          c = mix(c, hl, edge * ha); a = max(a, edge * ha * 0.95) + ha * 0.25;
          gl_FragColor = linearToOutputTexel(vec4(c, a * vShow * opacity)); }`)}),x=new cs(c,p,n),w=new pe,v=new Pn().setFromEuler(new On(-Math.PI/2,0,this.conv));e.s2.forEach((b,C)=>{w.compose(new D(o.e+5,o.u+25+a(b.d)*i,-o.n+5),v,new D(1,1,1)),x.setMatrixAt(C,w)}),x.frustumCulled=!1,x.renderOrder=20,t.lgroup.add(x),this.stack=x;let M=new cs(new Bn(60,2,60),new tn({color:16736168,transparent:!0,opacity:0,depthWrite:!1}),e.s1.length);e.s1.forEach((b,C)=>{w.compose(new D(o.e+5,o.u+25+a(b.d)*i,-o.n+5),v,new D(1,1,1)),M.setMatrixAt(C,w)}),M.frustumCulled=!1,M.renderOrder=21,t.lgroup.add(M),this.ticks=M;let E=new ae(new Bn(10,i+60,10),new tn({color:6285055,transparent:!0,opacity:0,blending:zn,depthWrite:!1}));E.position.set(o.e+5,o.u+25+i/2,-o.n+5),E.renderOrder=22,t.lgroup.add(E),this.beam=E;let T=new ae(new Bn(44,i+60,44),E.material.clone());T.position.copy(E.position),T.renderOrder=22,t.lgroup.add(T),this.halo=T;let _=Math.cos(this.conv),R=Math.sin(this.conv);this.pulls=(this.data.dpixels?.squares||[]).map((b,C)=>{let P=(b.x+.5-32)*10,I=(32-b.y-.5)*10,N=P*_-I*R,U=P*R+I*_,G=new ae(new Bn(9,i+60,9),new tn({color:new Kt(th[C]),transparent:!0,opacity:0,depthWrite:!1}));return G.position.set(o.e+5+N,o.u+25+i/2,-o.n+5-U),G.renderOrder=22,t.lgroup.add(G),G}),this.pairTag=document.getElementById("pairtag"),this.stackAt=new D(o.e+5,o.u+25,-o.n+5)}groundAt(t,e,[n,i],r=3){let a=(i+.5)/t.n-.5,o=.5-(n+.5)/t.n,c=t.size,l=e.rotation.z,h=a*c,u=o*c;return new D(e.position.x+h*Math.cos(l)-u*Math.sin(l),e.position.y+r,e.position.z-(h*Math.sin(l)+u*Math.cos(l)))}buildMarkers(){let t=this.scene,e=this.data.demo,n=this.win,i=(r,a)=>{let o=new mn,c=new tn({color:r,transparent:!0,opacity:0,depthWrite:!1,side:an}),l=new ae(new ds(a*.72,a,48),c),h=new ae(new fs(a*.28,24),c.clone());return l.rotation.x=h.rotation.x=-Math.PI/2,o.add(l,h),l.renderOrder=h.renderOrder=30,t.lgroup.add(o),o};this.touch=i(6285055,60),this.touch.position.copy(this.groundAt(n,this.livePlane,e.touch)),this.labelMarks=e.labels.map(([r,a])=>{let o=i(gd[r][1],38);return o.position.copy(this.groundAt(n,this.livePlane,a)),{cls:r,g:o}})}buildCloud(){let t=this.scene,e=this.data.umap,n=t.cloud("cloud",e.length),i=n.geometry.attributes.position;e.forEach(([,,h,u,f],d)=>i.setXYZ(d,h*1100,u*1100,f*1100)),i.needsUpdate=!0,n.position.set(this.livePlane.position.x+900,2100,this.livePlane.position.z-400),this.cloud=n;let r=new mn,a=(h,u)=>new tn({color:h,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),o=new ae(new fs(1,72),a(200732)),c=new ae(new ds(.985,1,96),a(6285055));o.renderOrder=38,c.renderOrder=39,r.add(o,c),r.visible=!1,t.lgroup.add(r),this.cloudBg=r;let l=new Re().setFromPoints([new D,new D]);this.thread=new ks(l,new hs({color:6285055,transparent:!0,opacity:0,depthWrite:!1})),this.thread.renderOrder=41,t.lgroup.add(this.thread)}stream(){if(this.streaming)return this.streaming;let t=this.win,e=this.data.stretch,n=this.livePlane.userData.u.tiles.value,i=this.livePlane.userData.u.colour.value,r=t.n/32,a=!1,o=()=>{a=!1,Ts(t,e,i.image.data),i.needsUpdate=!0};return this.streaming=t.load({concurrency:8,onChunk:(c,l)=>{n.image.data[(c*r+l)*4]=255,n.needsUpdate=!0,a||(a=!0,requestAnimationFrame(o))}}).then(()=>{o(),this.analyse()}).catch(c=>{console.warn("live window failed",c),this.failed=!0}),this.streaming}analyse(){let t=this.win,e=this.data.demo,n=t.n,i=this.data.umap,r=this.data.stretch,a=t.at(...e.touch);if(!a)return;let o=Sh(t,a);this.simImg=new Uint8Array(n*n*4);for(let M=0;M<n*n;M++){let E=Wt((o[M]-e.simThreshold)/.04);this.simImg.set([95,230,255,230*E],M*4)}let c=e.labels.map(([M,E])=>({cls:M,emb:t.at(...E)})).filter(M=>M.emb),l=Eh(t,c,3),h=gd.map(([,M])=>[1,3,5].map(E=>parseInt(M.slice(E,E+2),16)));this.classImg=new Uint8Array(n*n*4);for(let M=0;M<n*n;M++)l[M]>=0&&this.classImg.set([...h[l[M]],235],M*4);let u=this.cloud.geometry,f=u.attributes.colour,d=u.attributes.cls,m=u.attributes.sim,y=Ts(t,r),g=-1,p=-2;i.forEach(([M,E],T)=>{let _=M*n+E;f.setXYZ(T,y[_*4]/255,y[_*4+1]/255,y[_*4+2]/255);let R=l[_]>=0?h[l[_]]:[80,80,80];d.setXYZ(T,R[0]/255,R[1]/255,R[2]/255);let b=o[_];m.setX(T,Wt((b-e.simThreshold)/.06)),b>p&&(p=b,g=T)}),f.needsUpdate=d.needsUpdate=m.needsUpdate=!0;let x=this.cloud.geometry.attributes.position,w=this.thread.geometry.attributes.position,v=this.touch.position;w.setXYZ(0,v.x,v.y,v.z),this.threadEnd=new D(x.getX(g),x.getY(g),x.getZ(g)),this.analysed=!0}async solar(){if(this.solaring)return this.solaring;let t=this.data.solar,e=this.scene;return this.solaring=(async()=>{let n=this.solarWin=await Es.around(t.lat,t.lon,t.n,2024,Mh),i=n.centre();this.solarPlane=e.livePlane("solar",n,{lat:i.lat,lon:i.lon,conv:-nr(i.lon,i.lat).conv});let r=this.solarPlane.userData.u,a=n.n/32,o=!1,c=()=>{o=!1,Ts(n,window.STRETCH_V1,r.colour.value.image.data),r.colour.value.needsUpdate=!0};await n.load({concurrency:8,onChunk:(y,g)=>{r.tiles.value.image.data[(y*a+g)*4]=255,r.tiles.value.needsUpdate=!0,o||(o=!0,requestAnimationFrame(c))}});let[l,h]=await Promise.all([fetch(`${this.base}/assets/models/solar.json`).then(y=>y.json()),fetch(`${this.base}/assets/models/solar.bin`).then(y=>y.arrayBuffer())]),u=await new Promise((y,g)=>{let p=new Worker(new URL("./unet-worker.js",import.meta.url),{type:"module"});p.onmessage=x=>{x.data.progress!=null?this.unetProgress=x.data.progress:(y(x.data.probs),p.terminate())},p.onerror=g,p.postMessage({spec:l,weights:h,emb:n.emb.buffer.slice(0),ok:n.ok.buffer.slice(0),n:n.n})}),f=n.n,d=new Uint8Array(f*f*4),m=0;for(let y=0;y<f;y++)for(let g=0;g<f;g++){let p=y*f+g;if(!(u[p]>.5))continue;m++;let w=g<2||y<2||g>f-3||y>f-3;for(let v=-2;v<=2&&!w;v++)for(let M=-2;M<=2&&!w;M++)u[p+v*f+M]<=.5&&(w=!0);d.set(w?[255,200,110,255]:[255,150,40,175],p*4)}r.overlay.value.image.data.set(d),r.overlay.value.needsUpdate=!0,this.solarFound=m,this.unetProgress=1})().catch(n=>{console.warn("solar failed",n),this.solarFailed=!0}),this.solaring}hideGround(){if(this.built){for(let t in this.ground)this.ground[t].material.opacity=0;this.stack.visible=!1,this.pairTag.style.opacity=0,this.ticks.material.opacity=0,this.beam.material.opacity=0,this.halo.material.opacity=0,this.pulls.forEach(t=>{t.material.opacity=0}),this.livePlane.visible=!1,this.solarPlane&&(this.solarPlane.visible=!1),this.cloud.visible=!1,this.cloudBg.visible=!1,this.thread.material.opacity=0,this.touch.children.forEach(t=>{t.material.opacity=0}),this.labelMarks.forEach(({g:t})=>t.children.forEach(e=>{e.material.opacity=0})),this.scene.hex&&(this.scene.hex.visible=!1,this.scene.core.visible=!1,this.scene.parts.visible=!1);for(let t in this.scene.sats)this.scene.sats[t].grp.visible=!1;for(let t in this.tags)this.tags[t].style.opacity=0}}satPasses(){let t=this.scene,e=this.cues;return this.passes||(this.passes={s2:[t.passOver(t.sats.s2,44,-8),e.bands],s1:[t.passOver(t.sats.s1,47,4),e.radar+2]})}satPoint(t,e){let n=this.scene,i=n.sats[t],[{node:r,a0:a},o]=this.satPasses()[t],c=a-(e-o)*.03,l=new D(Math.cos(c),0,-Math.sin(c)).applyEuler(new On(i.plane.rotation.x,0,0)).applyAxisAngle(new D(0,1,0),r);return{lat:Math.asin(Wt(l.y,-1,1))*180/Math.PI,lon:Math.atan2(-l.z,l.x)*180/Math.PI}}satFollow(t){let e=this.cues,n=this.tl.stage("sensors"),i=Gn(t,n.t0+1.2,e.radar-.6,1.6,1.2),r=Gn(t,e.radar-.6,n.t1-1.2,1.2,1.6);if(i+r<=.001)return null;let a=i>=r?"s2":"s1",o=this.satPoint(a,t);return{pose:{lat:o.lat+1.5,lon:o.lon,dist:5e3,tilt:28,heading:0,shift:.17},w:Math.max(i,r)}}sourcesAt(t){let e=this.cues,n=r=>this.tl.stage(r),i=new Set;return t<n("tasks").t0&&i.add("A"),t>=e.stack-.5&&t<n("dpixel").t1&&i.add("C"),t>=e.vec&&t<e.sweepEnd&&i.add("C"),t>=n("tasks").t0&&t<n("tasks").t1&&((t<e.evalAt||t>=e.solar)&&i.add("C"),t>=e.evalAt&&t<e.solar?i.add("E"):t>=e.cloud&&i.add("D")),t>=e.results[0]&&t<e.solar&&i.add("B"),t>=n("missions").t0&&t<n("missions").t1&&(i.add("B"),t>=e.missions[1]&&t<e.missions[2]&&i.add("A")),t>=e.nest&&t<e.tour[1]&&i.add("F"),t>=e.count-.3&&t<n("inference").t1&&i.add("F"),i}draw(t,e,n){let i=this.scene,r=i.u,a=this.cues,o=this.tl,c=this.panels,l=this.H,h=w=>o.stage(w);r.time.value=n;let u=pt(t,a.sweep,a.sweepEnd);r.sweepOn.value=t>=a.sweep-.5&&t<a.sweepEnd?1:0,r.sweep.value=-Math.PI+u*2*Math.PI+.001,r.embMix.value=t<a.sweep?0:1-Gn(t,h("inference").t1-2.5,h("tasks").t1,1.5,1.5),r.grid.value=.35+.65*(1-pt(e.dist,3e3,800)),i.cu.opacity.value=t>=h("inference").t0?0:Wt(.3*(1-pt(t,h("dpixel").t0,h("dpixel").t0+2))+.55*Gn(t,a.clouds-.6,a.blend,.8,1.5));let f=a.missions.findIndex((w,v)=>t>=w-.3&&t<(a.missions[v+1]??a.missionsEnd+1)-.3);r.focusR.value=f>=0?.035:0,f>=0&&Wi(Ys[f+2].lat,Ys[f+2].lon,1,r.focus.value);let d=Gn(t,h("sensors").t0+.6,h("sensors").t1-.8,.8,.8);this.satPasses();for(let w of["s2","s1"]){let v=i.sats[w];if(v.grp.visible=d>.01,!v.grp.visible){this.tags[w].style.opacity=0;continue}let[{node:M,a0:E},T]=this.passes[w];i.placeSat(v,E-(t-T)*.03,M,.35);let _=w==="s2"?1:pt(t,a.radar-.5,a.radar+.3);v.orbit.material.opacity=.55*d*_,v.swath.material.uniforms.opacity.value=d*_,v.body.children.forEach(C=>{C.material.opacity=d*_}),v.beam.material.opacity=.12*d*_;let R=this.tags[w],b=i.project(i.satWorld(v));R.style.opacity=(d*_).toFixed(2),R.style.transform=`translate(${(b.x+18).toFixed(0)}px, ${(b.y-26).toFixed(0)}px)`}if(this.data.hexes&&t>a.count-3&&t<h("inference").t0+2){i.hexes(this.data.hexes),i.hex.visible=!0,i.hu.progress.value=pt(t,a.count,a.count+3.5),i.hu.opacity.value=1-pt(t,h("dpixel").t1-.5,h("inference").t0+1.5),i.core.visible=t>a.shuffle-1;let w=new D(.52,.5,.5).unproject(i.cam).sub(i.cam.position).normalize();i.core.position.copy(i.cam.position).addScaledVector(w,i.cam.position.length()*.5),i.core.rotation.set(n*.3,n*.45,0),i.core.children.forEach(v=>{v.material.opacity=.85*Gn(t,a.shuffle-.5,h("dpixel").t1-.3,.8,1)}),i.pu.core.value.copy(i.core.position),i.pu.progress.value=pt(t,a.shuffle-.2,a.shuffle+4.5),i.parts.visible=i.pu.progress.value>0&&i.pu.progress.value<1}else i.hex&&(i.hex.visible=!1,i.core.visible=!1,i.parts.visible=!1);let m=0;if(this.built){let w=Gn(t,h("sensors").t1-3,a.count+1.2,1,1.2),v=Gn(t,h("inference").t1-3,h("tasks").t1+1,1,1.5),M=Math.max(w,v),E=Math.log(e.dist);Sg.forEach((j,q)=>{let J=parseFloat(j),et=M*pt(-E,-Math.log(J*4.5),-Math.log(J*1.2));this.ground["tci"+j].material.opacity=et}),m=M*pt(-E,-Math.log(1024*3.2),-Math.log(1024*1.3));let T=this.su;T.opacity.value=w*pt(-E,-Math.log(40),-Math.log(12)),this.stack.visible=T.opacity.value>.001,T.reveal.value=pt(t,a.stack,a.stack+2.2)*1.04,T.mask.value=pt(t,a.mask,a.mask+.6),T.drawA.value=t>=a.drawA?1:0,T.drawB.value=t>=a.drawB?1:0,T.pullA.value=Oe(pt(t,a.drawA,a.drawA+1.4)),T.pullB.value=Oe(pt(t,a.drawB,a.drawB+1.4)),T.pair.value=Oe(pt(t,a.pair,a.pair+1.2));let _=new D().setFromMatrixColumn(i.lcam.matrixWorld,0);_.y=0,_.lengthSq()>1e-6&&T.side.value.copy(_.normalize());let R=T.opacity.value*T.pair.value;if(this.pairTag.style.opacity=R.toFixed(2),R>.01){let j=i.project(new D(this.stackAt.x,T.cy.value+180,this.stackAt.z),i.lcam);this.pairTag.style.transform=`translate(calc(${j.x.toFixed(0)}px - 50%), ${j.y.toFixed(0)}px)`}this.ticks.material.opacity=.8*T.opacity.value*pt(t,a.stack+.8,a.stack+2.2);let b=T.opacity.value*pt(t,a.stack-1,a.stack);this.beam.material.opacity=.9*b,this.halo.material.opacity=.12*b*(.8+.2*Math.sin(n*4)),this.pulls.forEach((j,q)=>{j.material.opacity=.85*w*pt(-E,-Math.log(40),-Math.log(12))*Gn(t,a.pull+.3+q*.55,a.stack+1.8,.4,.8)});let C=this.livePlane.userData.u;C.opacity.value=v*pt(t,a.stream,a.stream+.5)*pt(-E,-Math.log(60),-Math.log(20)),this.livePlane.visible=C.opacity.value>.001,this.livePlane.visible&&i.ageLive(this.livePlane);let P=C.overlay.value,I=pt(t,a.touch+.2,a.touch+.8)*(1-pt(t,a.classes[0]-.4,a.classes[0])),N=pt(t,a.classify-1.4,a.classify-.6),U=N>0?"cls":I>0?"sim":null;this.analysed&&U!==this.overlayShown&&(U&&(P.image.data.set(U==="cls"?this.classImg:this.simImg),P.needsUpdate=!0),this.overlayShown=U),C.overlayMix.value=this.analysed?Math.max(I,N):0,this.touch.children.forEach(j=>{j.material.opacity=C.opacity.value*Gn(t,a.touch,a.classes[0]-.4,.2,.4)}),this.touch.scale.setScalar(1+.15*Math.sin(n*5)),this.labelMarks.forEach(({cls:j,g:q},J)=>{let et=a.classes[j]+J%3*.12;q.children.forEach(X=>{X.material.opacity=C.opacity.value*pt(t,et,et+.2)*(1-pt(t,a.solar,a.solar+.8))})});let G=this.cloud.userData.u,H=v*Gn(t,a.cloud-.3,a.solar+.6,1,1.2)*(this.analysed?1:.4);if(this.cloud.visible=H>.001,G.opacity.value=H,this.cloudBg.visible=this.cloud.visible,this.cloudBg.children[0].material.opacity=.62*H,this.cloudBg.children[1].material.opacity=.55*H,G.grow.value=Oe(pt(t,a.cloud-.3,a.cloud+1.5)),G.mode.value=t>=a.classes[0]?2:t>=a.touch+.2?1:0,this.cloud.rotation.y=(t-a.cloud)*.25,this.cloud.visible){let j=i.lcam,q=new D(-.42,-.22,.5).unproject(j).sub(j.position).normalize(),J=e.dist*1e3;this.cloud.position.copy(j.position).addScaledVector(q,J*.62),this.cloud.scale.setScalar(J*.11/1100),this.cloudBg.position.copy(this.cloud.position),this.cloudBg.quaternion.copy(j.quaternion),this.cloudBg.scale.setScalar(J*.11*1.3)}if(this.threadEnd){let j=this.thread.geometry.attributes.position,q=this.threadEnd.clone().multiplyScalar(G.grow.value).applyEuler(this.cloud.rotation).multiplyScalar(this.cloud.scale.x).add(this.cloud.position);j.setXYZ(1,q.x,q.y,q.z),j.needsUpdate=!0,this.thread.material.opacity=H*Gn(t,a.touch+.2,a.classes[0]-.4,.3,.3)}if(v>0&&t>=a.stream-4&&!this.streaming&&this.stream(),v>0&&t>=a.classes[0]&&!this.solaring&&this.solar(),this.solarPlane){let j=this.solarPlane.userData.u;j.opacity.value=v*pt(t,a.solar,a.solar+.8)*pt(-E,-Math.log(60),-Math.log(20)),this.solarPlane.visible=j.opacity.value>.001,this.solarPlane.visible&&i.ageLive(this.solarPlane),j.overlayMix.value=this.unetProgress>=1?pt(t,a.outline-.4,a.outline+.6):0}}let y=(w,v,M,E)=>{let T=t>=v&&t<M;l.show(w,T),T&&E&&E(t,a)},g=(w,v,M)=>M.forEach(([E,T,_,R])=>{let b=t>=T&&t<_;l.show(E,b),l.hold(E,!b&&t>=w&&t<v),b&&R&&R(t,a)});y("pipeline",a.pipeOpen,h("orbit").t1+.3,c.pipeline),y("bands",a.views[0]-.4,a.comp,c.bands),y("composite",a.comp,h("sensors").t1+.3,c.composite),g(a.pull-.2,a.count-.3,[["dpixels",a.pull-.2,a.mask+1,c.dpixels],["dpixel",a.stack-.6,a.count-.3,c.dpixel]]),y("train",a.count-.3,h("dpixel").t1+.3,c.train),g(a.encoder-.3,a.sweepEnd,[["encoder",a.encoder-.3,a.sweep,c.encoder],["vector",a.vec-.2,a.sweepEnd,c.vector]]),y("cloud",a.cloud-.3,a.classes[0]-.4,c.cloud),y("knn",a.classes[0]-.4,a.evalAt-.2,c.knn),y("eval",a.evalAt-.2,a.solar,c.eval),y("regress",a.regress-.4,a.missions[0]-.3,c.regress);let p=t>=a.stream-.3&&t<h("tasks").t1+.3;l.show("live",p),p&&this.live.set(t>=a.solar&&this.solarWin?this.solarWin:this.win,er);let x=t>=a.solar-.2&&t<h("tasks").t1+.3;return l.show("unet",x),x&&this.unet.update(t,a,this.unetProgress),Ys.forEach((w,v)=>{let M=a.results[v],E=M!==void 0?t>=M&&t<a.solar-.3:v-2===f;l.show("m-"+w.id,E),E&&this.missions[v](t,M??a.missions[f]),M!==void 0&&l.hold("m-"+w.id,!E&&t>=a.evalAt-.2&&t<a.solar-.3)}),{groundOn:m}}};var Ah=class{constructor(t,e=""){this.base=t,this.narrator=e,this.ctx=null,this.buffers=new Map,this.loading=new Map,this.voices=[],this.bed=null,this.muted=!1}init(t=new AudioContext({latencyHint:"playback"})){this.ctx||(this.ctx=t,this.master=t.createGain(),this.master.connect(t.destination),this.music=t.createGain(),this.music.gain.value=.4,this.music.connect(this.master),this.voice=t.createGain(),this.voice.connect(this.master),this.fx=t.createGain(),this.fx.gain.value=.22,this.fx.connect(this.master),this.out=t.createAnalyser(),this.out.fftSize=256,this.out.smoothingTimeConstant=.7,this.master.connect(this.out),this.outFreq=new Uint8Array(this.out.frequencyBinCount))}get now(){return this.ctx?this.ctx.currentTime:0}load(t){return this.buffers.has(t)?Promise.resolve(this.buffers.get(t)):(this.loading.has(t)||this.loading.set(t,fetch(`${this.base}/${t.includes(".")?`lines/${this.narrator?this.narrator+"/":""}`:""}${t}.mp3`).then(e=>e.arrayBuffer()).then(e=>(this.ctx||new OfflineAudioContext(1,1,48e3)).decodeAudioData(e)).then(e=>(this.buffers.set(t,e),e))),this.loading.get(t))}ready(t){return this.buffers.has(t)}playBed(t,e,n){let i=this.buffers.get(t),r=this.ctx;if(!i||!r||this.bed&&this.bed.stage===t)return;this.stopBed(2.5);let a=r.createBufferSource(),o=r.createGain();a.buffer=i,a.loop=!0,a.loopStart=n.loopStart,a.loopEnd=n.loopEnd;let c=e;c>n.loopEnd&&(c=n.loopStart+(c-n.loopStart)%(n.loopEnd-n.loopStart)),o.gain.setValueAtTime(0,r.currentTime),o.gain.linearRampToValueAtTime(1,r.currentTime+(e>.5?2.5:.8)),a.connect(o),o.connect(this.music),a.start(r.currentTime,Math.max(0,c)),this.bed={stage:t,src:a,g:o}}stopBed(t=.6){if(!this.bed||!this.ctx)return;let{src:e,g:n}=this.bed,i=this.ctx.currentTime;n.gain.cancelScheduledValues(i),n.gain.setValueAtTime(n.gain.value,i),n.gain.linearRampToValueAtTime(0,i+t),e.stop(i+t+.05),this.bed=null}playLine(t,e,n=0){let i=this.buffers.get(t),r=this.ctx;if(!i||!r||n>=i.duration)return;let a=r.createBufferSource();a.buffer=i,a.connect(this.voice),a.start(Math.max(e,r.currentTime),n);let o={name:t,src:a};this.voices.push(o),a.onended=()=>{this.voices=this.voices.filter(c=>c!==o)}}stopVoices(){for(let t of this.voices)try{t.src.stop()}catch{}this.voices=[]}duck(t){let e=this.music.gain,n=this.ctx.currentTime;e.cancelScheduledValues(n),e.setValueAtTime(e.value,n);let i=.4;for(let[r,a]of t){if(a<n)continue;let o=Math.max(n,r-.35);e.setTargetAtTime(.4*.28,o,.12),e.setTargetAtTime(.4,a+.25,.5)}t.some(([r,a])=>a>=n)||e.setTargetAtTime(i,n,.4)}release(){if(!this.ctx)return;let t=this.music.gain,e=this.ctx.currentTime;t.cancelScheduledValues(e),t.setTargetAtTime(.4,e,.4)}outputLevel(t){if(!this.out)return t.fill(0),0;this.out.getByteFrequencyData(this.outFreq);let e=t.length,n=80;for(let i=0;i<e;i++){let r=Math.floor(2+(n-2)*(i/e)**1.6),a=Math.max(r+1,Math.floor(2+(n-2)*((i+1)/e)**1.6)),o=0;for(let c=r;c<a;c++)o=Math.max(o,this.outFreq[c]);t[i]=o/255}return t.reduce((i,r)=>i+r,0)/e}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.05)}async suspend(){this.ctx&&this.ctx.state==="running"&&await this.ctx.suspend()}async resume(){this.ctx&&this.ctx.state!=="running"&&await this.ctx.resume()}chirp(t=1400,e=2200,n=.09,i=0,r=.5){let a=this.ctx;if(!a)return;let o=Math.max(a.currentTime,i),c=a.createOscillator(),l=a.createGain();c.type="sine",c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(e,o+n),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(r,o+.008),l.gain.exponentialRampToValueAtTime(.001,o+n+.06),c.connect(l),l.connect(this.fx),c.start(o),c.stop(o+n+.08)}tick(t=0,e=.25){this.chirp(3200,2600,.015,t,e)}whoosh(t=2.5,e=0,n=.5){let i=this.ctx;if(!i)return;let r=Math.max(i.currentTime,e),a=i.createBufferSource(),o=Math.ceil(i.sampleRate*t),c=i.createBuffer(1,o,i.sampleRate),l=c.getChannelData(0),h=17;for(let d=0;d<o;d++)h=h*16807%2147483647,l[d]=h/2147483647*2-1;a.buffer=c;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=.8,u.frequency.setValueAtTime(200,r),u.frequency.exponentialRampToValueAtTime(1800,r+t*.6),u.frequency.exponentialRampToValueAtTime(300,r+t);let f=i.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(n,r+t*.5),f.gain.linearRampToValueAtTime(0,r+t),a.connect(u),u.connect(f),f.connect(this.fx),a.start(r),a.stop(r+t)}sting(t=!0,e=0){let n=this.ctx;if(!n)return;let i=Math.max(n.currentTime,e);this.whoosh(1.4,i,.35),(t?[587.33,880]:[880,587.33]).forEach((r,a)=>this.bell(r,i+.45+a*.22,.32-a*.06))}bell(t,e=0,n=.3){let i=this.ctx;if(!i)return;let r=Math.max(i.currentTime,e),a=i.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(n,r+.006),a.gain.exponentialRampToValueAtTime(.001,r+1.8);for(let[o,c]of[[1,1],[2.01,.35],[3.02,.12]]){let l=i.createOscillator(),h=i.createGain();l.type="sine",l.frequency.value=t*o,h.gain.value=c,l.connect(h),h.connect(a),l.start(r),l.stop(r+1.9)}a.connect(this.fx)}hum(t=1.5,e=0,n=.3){let i=this.ctx;if(!i)return;let r=Math.max(i.currentTime,e),a=i.createGain();a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(n,r+.2),a.gain.linearRampToValueAtTime(0,r+t);for(let o of[110,165.4]){let c=i.createOscillator();c.type="triangle",c.frequency.value=o,c.connect(a),c.start(r),c.stop(r+t)}a.connect(this.fx)}};var uy=$y(ay());var oy=[{name:"Cambridge",place:"England",lat:52.2023,lon:.0942,why:"fields, commons and a city"},{name:"Solar farms",place:"east of Cambridge",lat:52.2839,lon:.3037,why:"try Find solar farms here"},{name:"Danum Valley",place:"Borneo",lat:4.965,lon:117.79,why:"lowland rainforest"},{name:"Benban",place:"Egypt",lat:24.456,lon:32.735,why:"one of the largest solar parks"},{name:"Story County",place:"Iowa",lat:42.03,lon:-93.47,why:"maize and soy, square by square"},{name:"Nile Delta",place:"Egypt",lat:30.87,lon:31.03,why:"small fields on the river"},{name:"Manaus",place:"Brazil",lat:-3.07,lon:-60.02,why:"where two rivers meet"}],qh=["#e8a94f","#8fe37a","#2f9a5c","#d45fb0"],ly=256,Xh=class{constructor({scene:t,root:e,say:n,setAddress:i,audio:r}){Object.assign(this,{scene:t,root:e,say:n,setAddress:i,audio:r}),this.pose={lat:30,lon:12,dist:15500,tilt:0,heading:0},this.goal=null,this.active=!1,this.year=2025,this.view="stretch",this.tool="scan",this.cls=0,this.labels=[],this.w=null,this.buildUI(),this.bindInput()}buildUI(){let t=this.root;t.innerHTML=`
      <header><h2>The console is yours.</h2></header>
      <p class="hint" id="x-hint">Drag to turn the planet, and scroll or pinch to zoom. Click any land to scan it.</p>
      <div class="group" role="group" aria-label="Tool">
        <button data-tool="scan" aria-pressed="true">Scan</button>
        <button data-tool="similar" aria-pressed="false" disabled>Find similar</button>
        <button data-tool="label" aria-pressed="false" disabled>Label</button>
      </div>
      <div class="classes" hidden role="group" aria-label="Class to label">
        ${qh.map((n,i)=>`<button data-cls="${i}" aria-pressed="${i===0}" style="--c:${n}">${"ABCD"[i]}</button>`).join("")}
        <button class="classify">Classify</button><button class="clear">Clear</button>
      </div>
      <label class="thr" hidden>Match <input type="range" min="0.6" max="0.98" step="0.01" value="0.86"></label>
      <div class="group">
        <button class="cloudbtn" aria-pressed="false" disabled>Show the cloud</button>
        <button class="solarbtn" disabled>Find solar farms</button>
      </div>
      <div class="row">
        <label>Year <select class="year">${bg.map(n=>`<option${n===2025?" selected":""}>${n}</option>`).join("")}</select></label>
        <label>Colour <select class="view"><option value="stretch">global</option><option value="pca">local PCA</option></select></label>
      </div>
      <div class="targets"><span class="tag">Places to try</span>${oy.map((n,i)=>`<button data-t="${i}" title="${n.why}">${n.name} <small>${n.place}</small></button>`).join("")}</div>
      <button class="up">Back to orbit</button>
      <p class="status" aria-live="polite"></p>`;let e=n=>t.querySelector(n);this.ui={status:e(".status"),classes:e(".classes"),thr:e(".thr"),thrIn:e(".thr input"),year:e(".year"),view:e(".view"),hint:e("#x-hint")},t.querySelectorAll("[data-tool]").forEach(n=>n.addEventListener("click",()=>this.setTool(n.dataset.tool))),t.querySelectorAll("[data-cls]").forEach(n=>n.addEventListener("click",()=>{this.cls=+n.dataset.cls,t.querySelectorAll("[data-cls]").forEach(i=>i.setAttribute("aria-pressed",i===n))})),e(".classify").addEventListener("click",()=>this.classify()),e(".clear").addEventListener("click",()=>{this.labels=[],this.markers(),this.overlay(null),this.status("Labels cleared.")}),this.ui.thrIn.addEventListener("input",()=>this.similar()),this.ui.year.addEventListener("change",()=>{this.year=+this.ui.year.value,this.w&&this.scan(this.w.centre().lat,this.w.centre().lon,!0)}),this.ui.view.addEventListener("change",()=>{this.view=this.ui.view.value,this.paint()}),t.querySelectorAll("[data-t]").forEach(n=>n.addEventListener("click",()=>{let i=oy[+n.dataset.t];this.scan(i.lat,i.lon)})),e(".up").addEventListener("click",()=>this.flyTo({...this.pose,dist:15500,tilt:0},3)),e(".cloudbtn").addEventListener("click",n=>{let i=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",i),i?this.startCloud():this.stopCloud()}),e(".solarbtn").addEventListener("click",()=>this.findSolar())}status(t){this.ui.status.textContent=t}setTool(t){this.tool=t,this.root.querySelectorAll("[data-tool]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.tool===t)),this.ui.classes.hidden=t!=="label",this.ui.thr.hidden=t!=="similar",this.ui.hint.textContent=t==="scan"?"Click any land to scan it.":t==="similar"?"Click a place in the scan to light up everywhere like it.":"Pick a class, click a few examples of each, and then press Classify."}bindInput(){let t=this.scene.renderer.domElement,e=null,n=null,i=new Map;t.addEventListener("pointerdown",a=>{if(this.active)if(t.setPointerCapture(a.pointerId),i.set(a.pointerId,[a.clientX,a.clientY]),i.size===2){let[o,c]=[...i.values()];n={d:Math.hypot(o[0]-c[0],o[1]-c[1]),dist:this.pose.dist},e=null}else e={x:a.clientX,y:a.clientY,x0:a.clientX,y0:a.clientY,tilt:a.shiftKey||a.button===2,moved:!1}}),t.addEventListener("pointermove",a=>{if(!this.active||!i.has(a.pointerId))return;if(i.set(a.pointerId,[a.clientX,a.clientY]),n&&i.size===2){let[d,m]=[...i.values()];this.pose.dist=Wt(n.dist*n.d/Math.hypot(d[0]-m[0],d[1]-m[1]),1.2,4e4),this.goal=null;return}if(!e)return;let o=a.clientX-e.x,c=a.clientY-e.y;if(e.x=a.clientX,e.y=a.clientY,Math.hypot(a.clientX-e.x0,a.clientY-e.y0)>4&&(e.moved=!0),this.goal=null,e.tilt){this.pose.heading-=o*.3,this.pose.tilt=Wt(this.pose.tilt+c*.3,0,70);return}let l=this.pose.dist/6371/t.clientHeight*1.4*57.3,h=this.pose.heading*Math.PI/180,u=c*Math.cos(h)+o*Math.sin(h),f=-o*Math.cos(h)+c*Math.sin(h);this.pose.lat=Wt(this.pose.lat+u*l,-85,85),this.pose.lon=(this.pose.lon+f*l/Math.max(.2,Math.cos(this.pose.lat*Math.PI/180))+540)%360-180});let r=a=>{i.has(a.pointerId)&&(i.delete(a.pointerId),i.size<2&&(n=null),e&&!e.moved&&this.active&&this.click(a),e=null)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("contextmenu",a=>{this.active&&a.preventDefault()}),t.addEventListener("wheel",a=>{this.active&&(a.preventDefault(),this.goal=null,this.pose.dist=Wt(this.pose.dist*Math.exp(a.deltaY*.0015),1.2,4e4))},{passive:!1}),this.keys=a=>{if(!this.active||a.target.closest("input, select, textarea"))return!1;let o=this.pose.dist/6371*57.3*.08,c={ArrowUp:[o,0],ArrowDown:[-o,0],ArrowLeft:[0,-o],ArrowRight:[0,o]}[a.key];return c?(this.pose.lat=Wt(this.pose.lat+c[0],-85,85),this.pose.lon+=c[1],this.goal=null,!0):a.key==="+"||a.key==="="?(this.pose.dist=Math.max(1.2,this.pose.dist/1.4),!0):a.key==="-"||a.key==="_"?(this.pose.dist=Math.min(4e4,this.pose.dist*1.4),!0):a.key==="Enter"&&a.target===document.body?(this.scan(this.pose.lat,this.pose.lon),!0):!1}}click(t){let e=this.scene.renderer.domElement,n=e.getBoundingClientRect(),i=(t.clientX-n.left)/n.width*2-1,r=-(t.clientY-n.top)/n.height*2+1;if(this.tool!=="scan"&&this.w&&this.plane){let o=this.scene.pickGround(i,r);if(!o)return;let c=this.toPixel(o);if(!c)return;this.tool==="similar"?(this.ref=c,this.similar()):(this.labels.push({cls:this.cls,rc:c}),this.markers(),this.status(`${this.labels.length} labels. ${this.labels.length>=2?"Classify when ready.":""}`));return}let a=this.scene.pick(i,r);a&&this.scan(a.lat,a.lon)}toPixel(t){let e=this.plane,n=e.rotation.z,i=t.x-e.position.x,r=-(t.z-e.position.z),a=i*Math.cos(n)+r*Math.sin(n),o=-i*Math.sin(n)+r*Math.cos(n),c=Math.floor((a/this.w.size+.5)*this.w.n),l=Math.floor((.5-o/this.w.size)*this.w.n);return l>=0&&c>=0&&l<this.w.n&&c<this.w.n?[l,c]:null}async scan(t,e,n=!1){this.abort?.abort();let i=this.abort=new AbortController,r;try{r=await Es.around(t,e,ly,this.year)}catch{this.status("The archive did not answer. Try again, or another place.");return}if(i.signal.aborted)return;let a=r.centre();this.w=r,this.labels=[],this.ref=null,this.markers(),this.overlay(null),this.stopCloud(),this.hideSolar(),this.root.querySelector(".cloudbtn").setAttribute("aria-pressed","false"),this.setAddress(`scan/${a.lat.toFixed(4)},${a.lon.toFixed(4)}${this.year!==2025?"/"+this.year:""}`),n||this.flyTo({lat:a.lat-.004,lon:a.lon,dist:5.2,tilt:26,heading:0},3.5),this.scene.setOrigin(a.lat,a.lon),this.plane=this.scene.livePlane("xlive",r,{lat:a.lat,lon:a.lon,conv:-nr(a.lon,a.lat).conv}),this.plane.visible=!0;let o=this.plane.userData.u;o.opacity.value=1,o.overlayMix.value=0;let c=r.n/32,l=o.tiles.value;this.scene.u.focus.value.set(0,0,0),Mg(a.lat,a.lon,.12,2).then(m=>{if(i.signal.aborted)return;let y=new ri(m.data,m.w,m.h);y.flipY=!0,y.colorSpace=qe,y.magFilter=Ye,y.minFilter=Ci,y.generateMipmaps=!0,y.needsUpdate=!0,this.context=this.scene.latlonPlane("xctx",{...m,map:y,order:1,opacity:.8})}).catch(()=>{}),this.status(`Scanning ${cy(a.lat)} ${hy(a.lon)} \xB7 ${this.year} \u2026`),this.say?.(`Scanning ${cy(a.lat)}, ${hy(a.lon)}, ${this.year}.`),this.audio?.hum(1.2);let h=er.bytes,u=!1,f=()=>{u=!1,this.paint()};try{await r.load({signal:i.signal,onChunk:(m,y)=>{l.image.data[(m*c+y)*4]=255,l.needsUpdate=!0,this.audio?.tick(0,.08),u||(u=!0,requestAnimationFrame(f))}})}catch{if(i.signal.aborted)return;this.status("The archive did not answer. Try again, or another place.");return}if(i.signal.aborted)return;this.paint();let d=r.ok.reduce((m,y)=>m+y,0)/r.ok.length;if(d<.05){this.status(`No embeddings here for ${this.year}: the store covers land only.`);return}this.status(`${c*c} chunks \xB7 ${((er.bytes-h)/1e6).toFixed(1)} MB \xB7 ${(d*100).toFixed(0)}% land. Try Similar or Label.`),this.root.querySelectorAll("[data-tool], .cloudbtn, .solarbtn").forEach(m=>{m.disabled=!1})}paint(){if(!this.w||!this.plane)return;let t=this.plane.userData.u.colour.value;(this.view==="pca"&&this.w.done?wg:Ts)(this.w,window.STRETCH,t.image.data),t.needsUpdate=!0}overlay(t){if(!this.plane)return;let e=this.plane.userData.u;if(!t){e.overlayMix.value=0;return}e.overlay.value.image.data.set(t),e.overlay.value.needsUpdate=!0,e.overlayMix.value=1}similar(){if(!this.w?.done||!this.ref)return;let t=this.w.at(...this.ref);if(!t)return;let e=Sh(this.w,t),n=+this.ui.thrIn.value,i=this.w.n,r=new Uint8Array(i*i*4),a=0;for(let o=0;o<i*i;o++){let c=Wt((e[o]-n)/.04);c>.5&&a++,r.set([95,230,255,230*c],o*4)}this.overlay(r),this.status(`${(a/(i*i)*100).toFixed(1)}% of the scan is like the place you chose.`),this.cloudSim=e,this.cloudClasses=null,this.cloudTint()}classify(){if(!this.w?.done)return;let t=this.labels.map(o=>({cls:o.cls,emb:this.w.at(...o.rc)})).filter(o=>o.emb);if(new Set(t.map(o=>o.cls)).size<2){this.status("Label at least two classes first.");return}let e=Eh(this.w,t,3),n=this.w.n,i=new Uint8Array(n*n*4),r=qh.map(o=>[1,3,5].map(c=>parseInt(o.slice(c,c+2),16))),a=[0,0,0,0];for(let o=0;o<n*n;o++)e[o]>=0&&(i.set([...r[e[o]],235],o*4),a[e[o]]++);this.overlay(i),this.cloudClasses=e,this.cloudSim=null,this.cloudTint(),this.status(a.map((o,c)=>o?`${"ABCD"[c]} ${(o/(n*n)*100).toFixed(0)}%`:"").filter(Boolean).join(" \xB7 "))}markers(){let t=this.scene;if((this.marks||[]).forEach(e=>t.lgroup.remove(e)),this.marks=[],!!this.plane)for(let e of this.labels){let n=new ae(new ds(18,26,32),new tn({color:qh[e.cls],transparent:!0,depthWrite:!1,side:an})),i=(e.rc[1]+.5)/this.w.n-.5,r=.5-(e.rc[0]+.5)/this.w.n,a=this.plane.rotation.z,o=this.w.size,c=i*o,l=r*o;n.position.set(this.plane.position.x+c*Math.cos(a)-l*Math.sin(a),3,this.plane.position.z-(c*Math.sin(a)+l*Math.cos(a))),n.rotation.x=-Math.PI/2,n.renderOrder=30,t.lgroup.add(n),this.marks.push(n)}}startCloud(){if(!this.w?.done)return;let t=this.w,e=t.n,n=ci(5),i=[],r=[];for(;i.length<1500;){let a=Math.floor(n()*e*e);t.ok[a]&&(i.push(a),r.push(Array.from(t.emb.subarray(a*128,a*128+128))))}this.umap=new uy.UMAP({nComponents:3,nNeighbors:15,nEpochs:200,minDist:.1,random:n}),this.status("Laying out the cloud\u2026"),setTimeout(()=>{this.umapEpochs=this.umap.initializeFit(r),this.umapStep=0,this.cloudPts=i,this.cloudObj=this.scene.cloud("xcloud",i.length),this.cloudObj.visible=!0;let a=this.cloudObj.userData.u;a.opacity.value=1,a.grow.value=1,a.mode.value=0;let o=Ts(t,window.STRETCH),c=this.cloudObj.geometry.attributes.colour;i.forEach((l,h)=>c.setXYZ(h,o[l*4]/255,o[l*4+1]/255,o[l*4+2]/255)),c.needsUpdate=!0,this.cloudTint(),this.status("Each dot is one square of the scan. Squares with similar numbers gather together.")},30)}stopCloud(){this.umap=null,this.cloudObj&&(this.cloudObj.visible=!1)}cloudTint(){if(!this.cloudObj||!this.cloudPts)return;let t=this.cloudObj.geometry,e=this.cloudObj.userData.u;if(this.cloudClasses){let n=qh.map(r=>[1,3,5].map(a=>parseInt(r.slice(a,a+2),16)/255)),i=t.attributes.cls;this.cloudPts.forEach((r,a)=>{let o=this.cloudClasses[r];i.setXYZ(a,...o>=0?n[o]:[.3,.3,.3])}),i.needsUpdate=!0,e.mode.value=2}else if(this.cloudSim){let n=+this.ui.thrIn.value,i=t.attributes.sim;this.cloudPts.forEach((r,a)=>i.setX(a,Wt((this.cloudSim[r]-n)/.06))),i.needsUpdate=!0,e.mode.value=1}}stepCloud(t){if(!this.umap||!this.cloudObj)return;if(this.umapStep<this.umapEpochs){for(let l=0;l<4&&this.umapStep<this.umapEpochs;l++,this.umapStep++)this.umap.step();let r=this.umap.getEmbedding(),a=this.cloudObj.geometry.attributes.position,o=[0,1,2].map(l=>r.reduce((h,u)=>h+u[l],0)/r.length),c=r.map(l=>Math.hypot(l[0]-o[0],l[1]-o[1],l[2]-o[2])).sort((l,h)=>l-h)[Math.floor(r.length*.95)]||1;r.forEach((l,h)=>a.setXYZ(h,(l[0]-o[0])/c*1100,(l[1]-o[1])/c*1100,(l[2]-o[2])/c*1100)),a.needsUpdate=!0}let e=this.scene.lcam,n=new D(-.42,.5,.5).unproject(e).sub(e.position).normalize(),i=t.dist*1e3;this.cloudObj.position.copy(e.position).addScaledVector(n,i*.62),this.cloudObj.scale.setScalar(i*.16/1100),this.cloudObj.rotation.y+=.004}async findSolar(){if(!this.w)return;let t=this.w.centre(),e=this.root.querySelector(".solarbtn");e.disabled=!0,this.status("Reading Tessera v1.0 embeddings for 2024, which the solar model was trained on\u2026");try{let n=await Es.around(t.lat,t.lon,ly,2024,Mh),i=n.centre();this.solarPlane=this.scene.livePlane("xsolar",n,{lat:i.lat,lon:i.lon,conv:-nr(i.lon,i.lat).conv}),this.solarPlane.visible=!0,this.plane.visible=!1;let r=this.solarPlane.userData.u,a=n.n/32;r.opacity.value=1,r.overlayMix.value=0,await n.load({onChunk:(d,m)=>{r.tiles.value.image.data[(d*a+m)*4]=255,r.tiles.value.needsUpdate=!0}}),Ts(n,window.STRETCH_V1,r.colour.value.image.data),r.colour.value.needsUpdate=!0,this.status("Running the U-Net in this browser\u2026");let[o,c]=await Promise.all([fetch("assets/models/solar.json").then(d=>d.json()),fetch("assets/models/solar.bin").then(d=>d.arrayBuffer())]),l=await new Promise((d,m)=>{let y=new Worker(new URL("./unet-worker.js",import.meta.url),{type:"module"});y.onmessage=g=>{g.data.probs&&(d(g.data.probs),y.terminate())},y.onerror=m,y.postMessage({spec:o,weights:c,emb:n.emb.buffer.slice(0),ok:n.ok.buffer.slice(0),n:n.n})}),h=n.n,u=new Uint8Array(h*h*4),f=0;for(let d=0;d<h;d++)for(let m=0;m<h;m++){let y=d*h+m;if(l[y]<=.5)continue;f++;let g=m===0||d===0||m===h-1||d===h-1||l[y-1]<=.5||l[y+1]<=.5||l[y-h]<=.5||l[y+h]<=.5;u.set(g?[255,200,110,255]:[255,150,40,175],y*4)}r.overlay.value.image.data.set(u),r.overlay.value.needsUpdate=!0,r.overlayMix.value=1,this.status(f?`The model found about ${Math.round(f/100)} hectares of solar panels here in 2024.`:"The model found no solar farms in this scan.")}catch{this.status("The solar model could not run here. Try another place.")}e.disabled=!1}hideSolar(){this.solarPlane&&(this.solarPlane.visible=!1),this.plane&&(this.plane.visible=!0)}flyTo(t,e=3){let n=this.pose,i=Math.PI/180,r=Math.sin(n.lat*i)*Math.sin(t.lat*i)+Math.cos(n.lat*i)*Math.cos(t.lat*i)*Math.cos((t.lon-n.lon)*i),a=Math.acos(Wt(r,-1,1))*6371,o=Math.min(16e3,a*.9),c=o>Math.max(n.dist,t.dist)*1.4?o:0;c&&(e=Math.max(e,Math.min(6.5,2.2+Math.log10(1+a)))),this.goal={from:{...n},to:t,t0:performance.now(),secs:e,peak:c}}enter(t){this.active=!0,this.pose={...t},this.root.hidden=!1,this.scene.renderer.domElement.classList.add("grab")}leave(){this.active=!1,this.root.hidden=!0,this.abort?.abort(),this.plane&&(this.plane.visible=!1),this.context&&(this.context.visible=!1),this.stopCloud(),this.solarPlane&&(this.solarPlane.visible=!1),this.scene.renderer.domElement.classList.remove("grab")}step(t){if(this.plane?.visible&&this.scene.ageLive(this.plane),this.solarPlane?.visible&&this.scene.ageLive(this.solarPlane),this.cloudObj?.visible&&this.stepCloud(this.pose),this.goal){let e=this.goal,n=Wt((performance.now()-e.t0)/1e3/e.secs),i=r=>r*r*(3-2*r);if(e.peak){let r=i(Wt(n/.5)),a=i(Wt((n-.5)/.5)),o=Math.log(e.from.dist),c=Math.log(e.peak),l=Math.log(e.to.dist),h=t(e.from,e.to,i(Wt((n-.2)/.6)));this.pose={...h,dist:Math.exp(n<.5?o+(c-o)*r:c+(l-c)*a),tilt:n<.5?e.from.tilt*(1-r):e.to.tilt*a}}else{let r=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;this.pose=t(e.from,e.to,r)}n>=1&&(this.goal=null)}return this.pose}},cy=s=>`${Math.abs(s).toFixed(2)}\xB0 ${s>=0?"N":"S"}`,hy=s=>`${Math.abs(s).toFixed(2)}\xB0 ${s>=0?"E":"W"}`;var Hd=["fire","forest","habitat","crops","solar","canopy"],fy=["#e8a94f","#8fe37a","#2f9a5c","#d45fb0"],Yh=(s,t=256)=>s.map(([e,n])=>`${(e*t).toFixed(1)},${(n*t).toFixed(1)}`).join(" "),jh=class{constructor(t,e,n,i){this.scene=e,this.root=t,this.places=Hd.map(l=>n.find(h=>h.id===l));let r=i,a={fire:`${r.fire.map(l=>`<polygon class="o fire" points="${Yh(l)}" pathLength="1"/>`).join("")}<text class="otag" x="10" y="184">burned ground</text>`,forest:`${r.forest.map(l=>`<polygon class="o clear" points="${Yh(l)}" pathLength="1"/>`).join("")}<text class="otag n" x="10" y="184"></text>`,habitat:`<image class="cls" href="assets/img/tasks/habitat.webp" width="256" height="256" clip-path="url(#twipe)" opacity=".85"/><line class="wipe" y1="0" y2="256"/>
        ${["farmland","parkland","woodland","town"].map((l,h)=>`<g class="lg" data-k="${h}"><rect x="${8+h*62}" y="175" width="11" height="11" fill="${fy[h]}"/><text x="${23+h*62}" y="185" class="otag small">${l}</text></g>`).join("")}`,crops:`${r.crops.map(l=>`<polygon class="o field" style="--c:${fy[l.cls]}" points="${Yh(l.poly)}" pathLength="1"/>`).join("")}<text class="otag" x="10" y="184">four kinds of field</text>`,solar:`${r.solar.map(l=>`<polygon class="o panel" points="${Yh(l)}" pathLength="1"/>`).join("")}<text class="otag" x="10" y="184">solar panels</text>`,canopy:'<line class="transect" x1="0" x2="256"/><path class="profile2"/><path class="profile"/><text class="otag" x="10" y="184">height along the line (illustration)</text>'},o=[[16,"92%"],[32,"97%"],[64,"99%"],[128,"100%"]],c=`<figure class="nest" aria-label="The first 16 of the 128 values keep about 92% of the accuracy, 32 keep 97% and 64 keep 99%.">
      <figcaption>The most important values come first in every fingerprint. <a href="https://arxiv.org/html/2607.03949#S5.F4" target="_blank" rel="noopener">TESSERA v2, Figure 4 <span aria-hidden="true">\u2197</span></a></figcaption>
      <svg viewBox="0 0 520 86" aria-hidden="true">${Array.from({length:128},(l,h)=>`<rect class="v" x="${4+h*4}" y="8" width="3" height="26" style="--k:${h}"/>`).join("")}
        ${o.map(([l,h],u)=>`<g class="br" data-k="${u}"><path d="M4 ${42+u*11}h${l*4-1}"/><path d="M4 ${38+u*11}v8M${3+l*4} ${38+u*11}v8"/>
          <text x="${l*4+8}" y="${46+u*11}">${l} values \xB7 ${h}</text></g>`).join("")}</svg></figure>`;t.innerHTML=`${c}
      <svg class="leaders" aria-hidden="true"><line/><circle r="5"/><circle r="12" class="ring"/></svg>
      ${this.places.map(l=>`<figure class="feature" data-id="${l.id}">
        <svg viewBox="0 64 256 128" class="pic" role="img" aria-label="${l.task}, ${l.place}">
          ${l.id==="habitat"?'<defs><clipPath id="twipe"><rect class="wiperect" x="0" y="0" width="0" height="256"/></clipPath></defs>':""}
          <image href="assets/img/${l.id==="habitat"?"bands/tci-window":"tasks/"+l.id}.webp" width="256" height="256" preserveAspectRatio="xMidYMid slice"/>
          <g class="over">${a[l.id]||""}</g>
          <path class="brk" d="M2 82V66H18M238 66H254V82M254 174V190H238M18 190H2V174"/>
        </svg>
        <figcaption title="${l.id==="habitat"?"Classes from the live embeddings, 2025.":`${l.pass}. Shapes traced from the picture, to illustrate the task.`}"><b>${l.task}</b><span>${l.place}</span></figcaption></figure>`).join("")}`,this.feats=[...t.querySelectorAll(".feature")],this.lead=t.querySelector(".leaders"),this.profile=Array.from({length:65},(l,h)=>{let u=h/64;return[u*256,150-60*(.55+.3*Math.sin(u*19)*Math.sin(u*7.3+1)+.12*Math.sin(u*53))]})}layout(){let t=innerWidth,e=innerHeight,n=100,i=e-205,r=20,a=Wt(t*.21,180,330),o=a/2+44,c=(i-n-24)/3;o>c&&(o=c,a=(o-44)*2),this.slots=[0,1,2,3,4,5].map(f=>({x:f<3?r:t-20-a,y:n+f%3*(o+12),w:a}));let l=r+a+12,h=t-20-a-12,u=this.root.querySelector(".nest");u&&(u.style.left=`${(l+h)/2}px`,u.style.width=`${Math.max(260,Math.min(520,h-l))}px`),this.W=t,this.H=e}update(t,e,n,i){if(this.root.style.display=i>.001?"":"none",i<=.001)return;(this.W!==innerWidth||this.H!==innerHeight)&&this.layout();let r=this.places.length,a=(n-e)/r,o=Wt(Math.floor((t-e)/a),0,r-1),c=Wt((t-e)/a-o);this.root.style.opacity=i,this.feats.forEach((p,x)=>{let w=this.slots[x],v=x<o||x===o&&c>.05;p.classList.toggle("on",v),p.classList.toggle("current",x===o&&t<n),p.style.width=`${w.w}px`,p.style.transform=`translate(${w.x}px, ${w.y}px)`,v&&(p.style.opacity=x===o?pt(c,.05,.2):.92,this.animate(p,this.places[x].id,x<o?1:pt(c,.15,.75)))});let l=this.feats[o],h=this.scene.project(Wi(this.places[o].lat,this.places[o].lon,1.003)),u=this.slots[o],[f,d,m]=this.lead.children,y=o<3?u.x+u.w:u.x,g=u.y+u.w/4;f.setAttribute("x1",h.x),f.setAttribute("y1",h.y),f.setAttribute("x2",y),f.setAttribute("y2",g);for(let p of[d,m])p.setAttribute("cx",h.x),p.setAttribute("cy",h.y);this.lead.style.opacity=pt(c,.12,.28)*(1-pt(c,.92,1))*(h.behind?0:1)}nestAt(t,e,n){let i=this.root.querySelector(".nest"),r=t>=e&&t<n;if(i.classList.toggle("on",r),!r)return;let a=pt(t,e,e+1.2);i.querySelectorAll(".v").forEach((o,c)=>o.classList.toggle("lit",c<a*128)),i.querySelectorAll(".br").forEach((o,c)=>o.classList.toggle("in",t>=e+1.2+c*.5))}animate(t,e,n){let i=r=>[...t.querySelectorAll(r)];if(e==="fire"||e==="forest"||e==="crops"||e==="solar"){let r=i(".o");r.forEach((a,o)=>{let c=Wt(n*1.5-o/r.length*.5);a.style.strokeDashoffset=String(1-c),a.classList.toggle("filled",c>=1)}),e==="forest"&&(t.querySelector(".n").textContent=`${r.filter(a=>a.classList.contains("filled")).length} clearings`),i(".otag").forEach(a=>{a.style.opacity=pt(n,.4,.7)})}if(e==="habitat"){let r=256*Oe(n);t.querySelector(".wiperect").setAttribute("width",r);let a=t.querySelector(".wipe");a.setAttribute("x1",r),a.setAttribute("x2",r),a.style.opacity=r>0&&r<256?1:0,i(".lg").forEach((o,c)=>{o.style.opacity=pt(n,.3+c*.12,.45+c*.12)})}if(e==="canopy"){let r=Oe(n),a=80+100*r,o=this.profile,c=Math.max(2,Math.floor(o.length*r)),l=t.querySelector(".transect");l.setAttribute("y1",a),l.setAttribute("y2",a);let h=o.slice(0,c).map(([u,f],d)=>`${d?"L":"M"}${u.toFixed(1)} ${f.toFixed(1)}`).join("");t.querySelector(".profile").setAttribute("d",h),t.querySelector(".profile2").setAttribute("d",`${h}L${o[c-1][0].toFixed(1)} 150 L0 150Z`),t.querySelector(".otag").style.opacity=pt(n,.4,.7)}}};var ua=s=>document.querySelector(s),fa=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Zh=class{constructor(t,{onOpen:e,onClose:n,onTrip:i,setAddress:r}){Object.assign(this,{D:t,onOpen:e,onClose:n,onTrip:i,setAddress:r}),this.stageTitle=Object.fromEntries(t.stages.map(a=>[a.id,a.title]));for(let a of document.querySelectorAll("#rail > ol > li")){let o=a.querySelector("button[data-stage]");if(!o)continue;let c=o.dataset.stage,l=t.trips.filter(u=>u.stage===c);if(!l.length)continue;let h=document.createElement("ul");h.className="extras",h.setAttribute("aria-label","Side notes"),h.innerHTML=l.map(u=>`<li><button data-trip="${u.id}" aria-label="Side note: ${fa(u.title)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h7c3 0 4-6 8-6M10 12c3 0 4 6 8 6"/></svg>${fa(u.title)}</button></li>`).join(""),a.append(h)}document.querySelectorAll("#rail [data-trip]").forEach(a=>a.addEventListener("click",()=>this.onTrip(a.dataset.trip))),ua("#script-close").addEventListener("click",()=>this.close()),this.buildScript()}openScript(){this.show("#scriptpage","script")}show(t,e){this.close(!0),this.from=document.activeElement,this.open=t,ua(t).hidden=!1,this.onOpen(),ua(`${t} h1`).focus(),this.setAddress(e)}close(t){this.open&&(ua(this.open).hidden=!0,this.open=null,t||(this.onClose(),this.from?.focus?.()))}isOpen(){return!!this.open}buildScript(){let t=this.D,e=new Set(t.changed);ua("#script-body").innerHTML='<p class="status">Everything the narrator says, stage by stage. The side notes are optional: take one from the list of stages, or when the story offers it.</p>'+t.stages.map((n,i)=>`<h2><span class="n">${String(i+1).padStart(2,"0")}</span> ${fa(n.title)}</h2>`+n.lines.map(r=>{let a=t.trips.filter(o=>o.after===r.id);return`<p class="say${e.has(r.id)?" changed":""}">${fa(r.text)}${e.has(r.id)?" <mark>changed</mark>":""}</p>`+a.map(o=>`<aside class="trip"><p class="kind">Side note</p><h3><button data-trip="${o.id}">${fa(o.title)}</button></h3>${o.text.map(c=>`<p>${fa(c)}</p>`).join("")}</aside>`).join("")}).join("")).join(""),ua("#script-body").querySelectorAll("[data-trip]").forEach(n=>n.addEventListener("click",()=>{this.close(),this.onTrip(n.dataset.trip)}))}};var AE=960,RE=440,Nn=(s,t=1)=>{let e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},CE=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"),ot=(s,t,e,{cls:n="t",at:i="",anchor:r="start",size:a}={})=>`<text x="${s}" y="${t}" class="${n}"${i?` data-at="${i}"`:""} text-anchor="${r}"${a?` font-size="${a}"`:""}>${CE(e)}</text>`,PE=s=>(Date.parse(s)-Date.parse(s.slice(0,4)+"-01-01"))/864e5;function $d(s,t,e,n,i,{at:r="",cls:a=""}={}){return`<g class="strip ${a}"${r?` data-at="${r}"`:""}>${s.s2.map((o,c)=>`<rect class="pass${o.ok?" ok":""}" data-i="${c}" x="${(t+PE(o.d)/365*n).toFixed(1)}" y="${e}" width="2.2" height="${i}"/>`).join("")}
    <path class="axis" d="M${t} ${e+i+4}h${n}"/>${["Jan","Apr","Jul","Oct"].map((o,c)=>ot(t+c*n/4,e+i+20,o,{cls:"d s"})).join("")}</g>`}var Wd=(s,t,e,n,i,r="")=>`<g class="fp ${r}">${s.map((a,o)=>`<rect data-i="${o}" x="${(t+o*n/s.length).toFixed(1)}" y="${e}" width="${Math.max(1,n/s.length-1).toFixed(1)}" height="${i}" style="--v:${a.toFixed(3)}"/>`).join("")}</g>`,IE={sentinels(s){let t=[["1",60,443],["2",10,490],["3",10,560],["4",10,665],["5",20,705],["6",20,740],["7",20,783],["8",10,842],["8A",20,865],["9",60,945],["10",60,1375],["11",20,1610],["12",20,2190]],e=n=>n<500?"#6aa8ff":n<600?"#6fe08a":n<700?"#ff6b6b":n<1e3?"#c98bff":"#ffb347";return`
      <path class="limb" d="M0 430 Q480 350 960 430"/>
      <g data-at="1"><image href="assets/img/notes/sentinel2.webp" x="40" y="10" width="190" height="190"/>
        ${ot(40,222,"Sentinel-2",{cls:"t b"})}${ot(40,246,"786 km up \xB7 a pair",{cls:"d"})}</g>
      <polygon class="swath" data-at="1:photographs" points="128,170 30,415 226,415"/>
      <g data-at="1:photographs">${ot(128,406,"290 km wide",{cls:"a s",anchor:"middle"})}</g>
      <g class="bands" data-at="1:13">${ot(262,60,"13 bands of light",{cls:"t"})}
        ${t.map(([n,i,r],a)=>`<g class="bd${i===10?" ten":""}"><rect x="${262+a*15}" y="${i===10?74:i===20?94:110}" width="11" height="${i===10?66:i===20?46:30}" fill="${e(r)}"/>${i===10?ot(267+a*15,156,n,{cls:"d xs",anchor:"middle"}):""}</g>`).join("")}
        <g data-at="1:sharpest">${ot(262,182,"the four brightest: 10 m detail",{cls:"a s"})}</g></g>
      <g data-at="1:together">${ot(262,222,"the pair: the equator every 5 days",{cls:"t s"})}</g>
      <path class="split" d="M480 20V400"/>
      <g data-at="2"><image href="assets/img/notes/sentinel1.webp" x="520" y="0" width="200" height="200"/>
        ${ot(740,60,"Sentinel-1",{cls:"t b"})}${ot(740,84,"693 km up \xB7 a radar",{cls:"d"})}</g>
      <g class="pulses" data-at="2:microwave">${[0,1,2].map(n=>`<path class="pulse" style="--k:${n}" d="M${560+n*8} ${230+n*40} q60 ${22+n*6} 120 0"/>`).join("")}</g>
      <path class="ground" d="M520 380H930"/>
      <g data-at="2:vv"><path class="echo" d="M600 378 L620 330 L640 378"/>${ot(525,404,"VV: the surface",{cls:"c s"})}</g>
      <g data-at="2:vh">${[780,820,860].map(n=>`<path class="tree" d="M${n} 380v-24m-14 0a14 18 0 1 0 28 0a14 18 0 1 0 -28 0"/>`).join("")}
        <path class="echo a" d="M820 340 l-16 -26 m16 26 l18 -24 m-18 24 l2 -32"/>${ot(760,404,"VH: leaves and branches",{cls:"a s"})}</g>
      <g class="stamp" data-at="3"><rect x="300" y="150" width="360" height="92" rx="4"/>
        ${ot(480,186,"Copernicus \xB7 European Union",{cls:"t b",anchor:"middle"})}${ot(480,218,"free and open data for anyone",{cls:"a",anchor:"middle"})}</g>`},barlow(s){let t=s.dpixel,e=t.s2.map((h,u)=>h.ok?u:-1).filter(h=>h>=0),n=h=>new Set(e.filter((u,f)=>Nn(f,h)<12/e.length)),i=n(3),r=n(7),a=t.emb.slice(0,48).map(h=>h/127),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=(h,u,f,d)=>[...h].sort((m,y)=>m-y).slice(0,6).map((m,y)=>{let g=u+y*40,p=t.s2[m].d;return`<g class="chip-img ${f}" data-at="${d}+${(.25+y*.18).toFixed(2)}"><svg x="${g}" y="126" width="36" height="36" viewBox="${m%16*64} ${Math.floor(m/16)*64} 64 64"><image href="assets/img/stack.webp" width="1024" height="704"/></svg>
        <rect x="${g}" y="126" width="36" height="36"/>${ot(g+18,175,`${+p.slice(8)} ${o[+p.slice(5,7)-1]}`,{cls:"d xxs",anchor:"middle"})}</g>`}).join(""),l=h=>a.map((u,f)=>Wt(u+(Nn(f,h)-.5)*.9,-1,1));return{svg:`
        <g data-at="1">${ot(40,34,"A year of passes over one square: no labels anywhere",{cls:"t s"})}</g>
        ${$d(t,40,44,520,34,{at:"1"})}
        <g class="nolabel" data-at="1:without"><rect x="600" y="40" width="150" height="40" rx="4"/>${ot(675,66,"label: ?",{cls:"d",anchor:"middle"})}<path d="M600 80L750 40"/></g>
        <g data-at="2">${ot(40,117,"Two random samples of the clear passes",{cls:"t s"})}</g>
        ${c(i,40,"a","2:two")}${c(r,300,"b","2:different")}
        <g data-at="2:learns"><path class="wire a" d="M150 180v8"/><path class="wire" d="M410 180v8"/>
          <polygon class="enc a" points="90,190 210,190 190,226 110,226"/><polygon class="enc" points="350,190 470,190 450,226 370,226"/>
          ${ot(150,213,"encoder",{cls:"d s",anchor:"middle"})}${ot(410,213,"encoder",{cls:"d s",anchor:"middle"})}</g>
        <g data-at="2:same">${Wd(l(1),40,240,240,30,"fa")}${Wd(l(2),300,240,240,30,"fb")}</g>
        <g data-at="2:whatever">${ot(40,298,"Goal one, consistency: the same place, the same fingerprint",{cls:"a s"})}</g>
        <g class="mat" data-at="3">${ot(620,118,"Goal two, variety",{cls:"t s"})}
          ${Array.from({length:144},(h,u)=>{let f=u%12,d=Math.floor(u/12);return`<rect class="${f===d?"dg":"od"}" data-k="${u}" x="${620+f*22}" y="${130+d*22}" width="20" height="20"/>`}).join("")}
          <g data-at="3:record">${ot(620,412,"each part records something different",{cls:"c s"})}</g></g>
        <g data-at="4"><rect class="proj" x="40" y="322" width="240" height="24"/>${ot(40,370,"a much larger version, for training only",{cls:"d s"})}</g>
        <g data-at="4:thrown">${ot(40,396,"thrown away when training ends",{cls:"a s"})}</g>`,update(h,u,f){let d=pt(h,u.cue(2),u.cue(2)+1);f.querySelectorAll(".strip .pass").forEach(T=>{let _=+T.dataset.i;T.classList.toggle("A",d>0&&i.has(_)),T.classList.toggle("B",d>0&&r.has(_))});let m=Oe(pt(h,u.cue(2,"same"),u.cue(2,"same")+2.5)),y=f.querySelectorAll(".fa rect"),g=f.querySelectorAll(".fb rect"),p=l(1),x=l(2);y.forEach((T,_)=>T.style.setProperty("--v",(p[_]*(1-m)+a[_]*m).toFixed(3))),g.forEach((T,_)=>T.style.setProperty("--v",(x[_]*(1-m)+a[_]*m).toFixed(3)));let w=Oe(pt(h,u.cue(3,"each"),u.cue(3,"each")+3));f.querySelectorAll(".mat rect").forEach(T=>{let _=+T.dataset.k,R=_%12,b=Math.floor(_/12),C=R===b?.45+.3*Nn(_,5):.8*Nn(_,9);T.style.setProperty("--v",(R===b?C+(1-C)*w:C*(1-w)).toFixed(3))});let v=Oe(pt(h,u.cue(4),u.cue(4)+1.5)),M=pt(h,u.cue(4,"thrown"),u.cue(4,"thrown")+1.2),E=f.querySelector(".proj");E.setAttribute("width",(240+640*v).toFixed(0)),E.style.opacity=1-.8*M}}},forty(s){let t=s.dpixel,e=t.s2.map((i,r)=>i.ok?r:-1).filter(i=>i>=0),n=new Set(e.filter((i,r)=>r%7===3));return{svg:`
        <g data-at="1:some">${ot(40,40,"A cloudy place: a handful of clear passes (an illustration)",{cls:"t s"})}
          ${$d({s2:t.s2.map((i,r)=>({...i,ok:n.has(r)}))},40,52,880,30)}</g>
        <g data-at="1:others">${ot(40,128,`The field near Cambridge: ${e.length} clear passes in 2025`,{cls:"t s"})}
          ${$d(t,40,140,880,30,{cls:"many"})}</g>
        <g data-at="2">${ot(40,212,"In training: eight or sixteen at a time, at random",{cls:"a s"})}<text class="a b n8" x="920" y="212" text-anchor="end"></text>
          <g class="hand">${Array.from({length:16},(i,r)=>`<g class="hc" data-k="${r}"><svg x="${40+r*55}" y="222" width="48" height="48" viewBox="0 0 64 64"><image href="assets/img/stack.webp" width="1024" height="704"/></svg><rect x="${40+r*55}" y="222" width="48" height="48"/></g>`).join("")}</g></g>
        <g data-at="3:every">${ot(40,290,"Making the fingerprints: every clear pass",{cls:"c s"})}</g>
        <g class="bins" data-at="3:similar">${[16,32,48].map((i,r)=>`<g><rect class="bin" x="${160+r*240}" y="304" width="170" height="96"/>${ot(245+r*240,424,`up to ${i} passes`,{cls:"d s",anchor:"middle"})}
            ${Array.from({length:9},(a,o)=>`<rect class="drop" style="--j:${o+r*9}" x="${175+r*240+o%3*50}" y="${320+Math.floor(o/3)*26}" width="40" height="18"/>`).join("")}</g>`).join("")}</g>
        <g data-at="3:none">${ot(920,290,"none thrown away, none repeated",{cls:"a s",anchor:"end"})}</g>`,update(i,r,a){let o=r.cue(2),c=r.cue(3),l=i>=r.cue(3,"every"),h=i>=o&&i<c,u=Math.floor((i-o)*1.6),f=u%2?16:8,d=new Set(e.filter((y,g)=>Nn(g,u+11)<f/e.length*1.1).slice(0,f));a.querySelectorAll(".many .pass").forEach(y=>{let g=+y.dataset.i;y.classList.toggle("A",h&&d.has(g)),y.classList.toggle("all",l&&y.classList.contains("ok"))}),a.querySelector(".n8").textContent=h?`${f} passes`:"";let m=[...d].sort((y,g)=>y-g);a.querySelectorAll(".hc").forEach((y,g)=>{let p=m[g],x=h&&p!==void 0;y.style.display=x?"":"none",x&&y.dataset.i!==String(p)&&(y.dataset.i=p,y.firstElementChild.setAttribute("viewBox",`${p%16*64} ${Math.floor(p/16)*64} 64 64`))})}}},storage(s){let t=s.dpixel.emb,e=s.dpixel.scale;return`
      <g data-at="1">${ot(40,40,"One square\u2019s fingerprint: 128 whole numbers",{cls:"t s"})}${Wd(Array.from(t,n=>n/127),40,60,880,90,"int")}</g>
      <g data-at="1:minus">${Array.from(t.slice(0,8)).map((n,i)=>`<g><rect class="cell" x="${40+i*74}" y="176" width="66" height="38"/>${ot(73+i*74,202,(n>0?"+":"")+n,{cls:"c",anchor:"middle"})}</g>`).join("")}${ot(640,202,"\u2026",{cls:"d"})}</g>
      <g data-at="1:plus">${ot(700,202,`\xD7 ${e.toFixed(4)} for this square`,{cls:"a"})}</g>
      <g data-at="2:petabyte">${ot(40,262,"One year of the planet at full precision",{cls:"d s"})}<rect class="store" x="40" y="272" width="880" height="24"/>${ot(930,290,"1 PB",{cls:"t s",anchor:"end"})}</g>
      <g data-at="2:quarter">${ot(40,322,"As whole numbers",{cls:"d s"})}<rect class="store a" x="40" y="332" width="220" height="24"/>${ot(270,350,"a quarter",{cls:"a s"})}</g>
      <g data-at="2:loses">${ot(480,350,"less than one point of accuracy lost",{cls:"c s"})}</g>
      <g data-at="3"><path class="brk a" d="M40 158v8h108v-8"/>${ot(40,404,"The newest fingerprints: the first 16 alone keep about 92% of the accuracy, at an eighth of the size",{cls:"a s"})}</g>`},distil(s){let t=(e,n,i,r,a)=>Array.from({length:r},(o,c)=>{let l=Nn(c,a)*6.283,h=Math.sqrt(Nn(c,a+1))*i;return`<circle class="node" cx="${(e+Math.cos(l)*h).toFixed(1)}" cy="${(n+Math.sin(l)*h).toFixed(1)}" r="${i>60?3:2.2}"/>`}).join("");return`
      <g data-at="1:large">${t(200,150,110,160,2)}${ot(200,286,"2 billion weights",{cls:"t b",anchor:"middle"})}</g>
      <g data-at="1:learns">${ot(200,312,"about 14 billion d-pixels, one pass",{cls:"d s",anchor:"middle"})}</g>
      <g data-at="1:running">${ot(40,356,"One year of the planet, on one graphics processor",{cls:"d s"})}<rect class="cost" x="40" y="366" width="400" height="20"/>${ot(450,382,"about 100 years",{cls:"t s"})}</g>
      <g data-at="2">${t(640,150,40,40,5)}${ot(640,226,"44 million weights",{cls:"t b",anchor:"middle"})}</g>
      <g class="flow" data-at="2:trained">${[0,1,2].map(e=>`<path class="fl" style="--k:${e}" d="M320 ${130+e*20} C 440 ${110+e*20} 520 ${130+e*20} 590 ${140+e*10}"/>`).join("")}${ot(455,104,"the same fingerprints",{cls:"a s",anchor:"middle"})}</g>
      <g data-at="2:does"><rect class="cost a" x="40" y="396" width="8" height="20"/>${ot(62,412,"about 2 years, and almost as accurate",{cls:"a s"})}</g>
      <g class="nest2" data-at="3">${ot(600,250,"Most important first",{cls:"t s"})}
        ${[[16,"92%"],[32,"97%"],[64,"99%"],[128,"100%"]].map(([e,n],i)=>`<g data-at="3:${["16","32","64","nesting"][i]}"><rect class="doll" x="600" y="${262+i*24}" width="${e*2.1}" height="18"/>${ot(608+e*2.1,276+i*24,`${e} \xB7 ${n}`,{cls:"a xs"})}</g>`).join("")}</g>`},cosine(s){let i=(o,c,l=180)=>{let h=-o*Math.PI/180,u=260+Math.cos(h)*l,f=250+Math.sin(h)*l;return`<g class="arrow ${c}"><path d="M260 250L${u.toFixed(1)} ${f.toFixed(1)}"/><circle cx="${u.toFixed(1)}" cy="${f.toFixed(1)}" r="4"/></g>`},r=(o,c,l,h="")=>{let u=g=>[260+Math.cos(-g*Math.PI/180)*l,250+Math.sin(-g*Math.PI/180)*l],[f,d]=u(o),[m,y]=u(c);return`<path class="arc ${h}" d="M${f.toFixed(1)} ${d.toFixed(1)}A${l} ${l} 0 0 0 ${m.toFixed(1)} ${y.toFixed(1)}"/>`},a=()=>{let o=c=>`${(260+Math.cos(-c*Math.PI/180)*180).toFixed(1)},${(250+Math.sin(-c*Math.PI/180)*180).toFixed(1)}`;return`<polygon class="cone" points="260,250 ${o(8)} ${o(40)} ${o(72)}"/>`};return`
      <path class="axis" d="M60 250H470M260 400V40"/>
      <g data-at="1:arrow">${i(40,"a")}${i(125,"",150)}${i(200,"",120)}${i(-30,"",160)}${i(55,"",170)}${ot(410,120,"the square you chose",{cls:"a s"})}</g>
      <g data-at="1:angle">${r(40,55,90,"a")}${ot(360,160,"angle",{cls:"t s"})}</g>
      <g data-at="1:cosine">${ot(520,70,"cosine similarity",{cls:"t b"})}${ot(520,98,"the cosine of the angle between two fingerprints",{cls:"d s"})}</g>
      <g data-at="2:arrows">${ot(520,160,"the same direction: 1",{cls:"a"})}</g>
      <g data-at="2:unrelated">${r(40,125,50)}${ot(520,200,"at right angles, unrelated: close to 0",{cls:"c"})}</g>
      <g data-at="2:page">${a()}${ot(520,260,"on this page: within about 32\xB0",{cls:"a"})}${ot(520,286,"a similarity above 0.85",{cls:"d s"})}</g>`},umap(s){let t=s.umap.filter((e,n)=>n%5===0);return{svg:`<g class="pts">${t.map((e,n)=>`<circle class="pt" data-i="${n}" r="2.4"/>`).join("")}</g><g class="links"></g>
        <g data-at="1">${ot(40,40,"128 dimensions: nobody can picture them",{cls:"d s"})}</g>
        <g data-at="2:links">${ot(40,70,"each square linked to its 15 most similar",{cls:"c s"})}</g>
        <g data-at="2:adjusts">${ot(40,100,"linked squares pulled together, others pushed apart",{cls:"a s"})}</g>
        <g data-at="3">${ot(920,400,"close in the cloud: really similar",{cls:"t s",anchor:"end"})}</g>
        <g data-at="3:distances">${ot(920,426,"far apart: less reliable",{cls:"d s",anchor:"end"})}</g>
        <g data-at="3:cloud">${ot(40,426,"4,000 squares of Cambridge (one in five drawn here)",{cls:"d s"})}</g>`,init(e){let n=e.querySelector(".links"),i=[];for(let r=0;r<t.length;r+=40){let a=t.map((o,c)=>[Math.hypot(o[2]-t[r][2],o[3]-t[r][3],o[4]-t[r][4]),c]).sort((o,c)=>o[0]-c[0]).slice(1,16);for(let[,o]of a)i.push(`<line class="lk" data-a="${r}" data-b="${o}"/>`)}n.innerHTML=i.join("")},update(e,n,i){let r=Oe(pt(e,n.cue(2,"places"),n.cue(2,"apart")+1.5)),a=e*.08,o=t.map((h,u)=>{let f=[Nn(u,1)*2-1,Nn(u,2)*2-1,Nn(u,3)*2-1],d=[h[2],h[3],h[4]].map(g=>g*1.1),m=f.map((g,p)=>g*(1-r)+d[p]*r);return[480+(m[0]*Math.cos(a)-m[2]*Math.sin(a))*190,240-m[1]*170]});i.querySelectorAll(".pt").forEach((h,u)=>{h.setAttribute("cx",o[u][0].toFixed(1)),h.setAttribute("cy",o[u][1].toFixed(1)),h.style.setProperty("--h",((t[u][2]+1)*90+(t[u][3]+1)*40).toFixed(0))});let l=e>=n.cue(2,"links");i.querySelectorAll(".lk").forEach(h=>{let u=o[+h.dataset.a],f=o[+h.dataset.b];h.setAttribute("x1",u[0].toFixed(1)),h.setAttribute("y1",u[1].toFixed(1)),h.setAttribute("x2",f[0].toFixed(1)),h.setAttribute("y2",f[1].toFixed(1)),h.classList.toggle("in",l)}),i.classList.toggle("coloured",e>=n.cue(3))}}},labels(s){let t=s.curve,e=t.curves.random_rf,n=t.curves.fields_rf,i=c=>60+c*380/(e.length-1),r=c=>300-c*240,a=(c,l)=>`<path class="curve ${l}" pathLength="1" d="${c.map((h,u)=>`${u?"L":"M"}${i(u).toFixed(1)} ${r(h[1]).toFixed(1)}`).join("")}"/>`,o=Array.from({length:20},(c,l)=>({x:560+l%5*76,y:60+Math.floor(l/5)*60,g:90+Nn(l,4)*80}));return{svg:`
        <g data-at="1:trains">${ot(60,34,"Near Vienna: accuracy against labelled pixels of each crop",{cls:"t s"})}
          <path class="axis" d="M60 300H440M60 300V56"/>${e.map((c,l)=>l%2?"":ot(i(l),322,c[0],{cls:"d xs",anchor:"middle"})).join("")}
          ${[0,.5,1].map(c=>ot(52,r(c)+4,c,{cls:"d xs",anchor:"end"})).join("")}</g>
        <g data-at="1:accuracy">${a(e,"r")}</g>
        <g data-at="2:tougher">${a(n,"f")}</g>
        <g data-at="2:with">${ot(446,r(e.at(-1)[1])+4,e.at(-1)[1].toFixed(2),{cls:"c s"})}${ot(446,r(n.at(-1)[1])+4,n.at(-1)[1].toFixed(2),{cls:"a s"})}</g>
        <g data-at="2">${o.map((c,l)=>`<rect class="field" data-k="${l}" x="${c.x}" y="${c.y}" width="70" height="54" style="fill:rgb(40,${c.g|0},70)"/>`).join("")}
          <g class="dots">${Array.from({length:60},(c,l)=>`<circle class="${l%3?"tr":"te"}" cx="${(566+Nn(l,6)*370).toFixed(1)}" cy="${(66+Nn(l,8)*228).toFixed(1)}" r="3.4"/>`).join("")}</g>
          ${ot(560,316,"random test pixels sit beside training pixels",{cls:"c xs"})}</g>
        <g data-at="2:tougher">${ot(560,336,"the tougher test holds back whole fields",{cls:"a xs"})}</g>
        <g data-at="3">${["1%","30%","all"].map((c,l)=>`<g><rect class="chip${l===0?" a":""}" x="${60+l*150}" y="372" width="130" height="40"/>${ot(125+l*150,398,`${c} of the labels`,{cls:l===0?"a s":"d s",anchor:"middle"})}</g>`).join("")}</g>
        <g data-at="3:widest">${ot(530,398,"Tessera\u2019s lead: widest with the fewest labels",{cls:"a s"})}</g>`,update(c,l,h){h.querySelectorAll(".curve.r").forEach(f=>f.style.strokeDashoffset=1-pt(c,l.cue(1,"accuracy"),l.cue(1,"accuracy")+2.5)),h.querySelectorAll(".curve.f").forEach(f=>f.style.strokeDashoffset=1-pt(c,l.cue(2,"tougher"),l.cue(2,"tougher")+2.5));let u=c>=l.cue(2,"tougher");h.querySelectorAll(".field").forEach(f=>f.classList.toggle("held",u&&[3,8,14,17].includes(+f.dataset.k))),h.querySelector(".dots").style.opacity=u?.25:1}}},unet(s){let t=(e,n,i,r,a="",o="")=>`<g class="grid ${o}"${a?` data-at="${a}"`:""}>${Array.from({length:r*r},(c,l)=>`<rect x="${(e+l%r*i/r).toFixed(1)}" y="${(n+Math.floor(l/r)*i/r).toFixed(1)}" width="${(i/r-1).toFixed(1)}" height="${(i/r-1).toFixed(1)}" style="--h:${160+Nn(l,r)*80|0}"/>`).join("")}</g>`;return`
      ${t(40,60,150,12,"1")}<g data-at="1">${ot(40,240,"a patch of fingerprints",{cls:"d s"})}</g>
      <g data-at="1:shrinks">${t(240,140,100,8)}${t(390,220,60,5)}<path class="wire a" d="M195 150l40 30M345 200l40 30"/>${ot(290,330,"shrinks in steps: sees the whole farm",{cls:"a s",anchor:"middle"})}</g>
      <g data-at="2">${t(500,140,100,8)}${t(650,60,150,12,"","out")}<path class="wire c" d="M455 230l40 -30M605 180l40 -30"/>${ot(730,240,"back to full size",{cls:"c s",anchor:"middle"})}</g>
      <g data-at="2:links"><path class="skip" d="M190 70 C 400 10 560 10 650 70"/><path class="skip" d="M340 150 C 400 110 460 110 500 150"/>${ot(420,16,"links across the U carry the detail",{cls:"t s",anchor:"middle"})}</g>
      <g data-at="2:edges"><polygon class="farm" points="690,90 770,80 790,150 700,170"/>${ot(730,262,"sharp edges",{cls:"a s",anchor:"middle"})}</g>
      <g data-at="2:network">${ot(480,400,"41,665 weights, running in your browser",{cls:"t",anchor:"middle"})}</g>`},heads(s){let t=(n,i,r,a)=>[n,i+(a-(r-1)/2)*18],e=(n,i,r)=>r.slice(1).map((a,o)=>Array.from({length:a*r[o]},(c,l)=>{let[h,u]=t(n+o*44,i,r[o],l%r[o]),[f,d]=t(n+(o+1)*44,i,a,Math.floor(l/r[o]));return`<line class="edge" x1="${h}" y1="${u}" x2="${f}" y2="${d}"/>`}).join("")).join("")+r.map((a,o)=>Array.from({length:a},(c,l)=>{let[h,u]=t(n+o*44,i,a,l);return`<circle class="node" cx="${h}" cy="${u}" r="5"/>`}).join("")).join("");return`
      <g data-at="1:simplest">${ot(120,40,"a vote of the nearest",{cls:"t s",anchor:"middle"})}
        ${[[70,110],[150,90],[110,150],[190,140],[60,170]].map(([n,i],r)=>`<circle class="${r<3?"lab a":"lab"}" cx="${n}" cy="${i}" r="6"/>`).join("")}<circle class="q" cx="120" cy="115" r="7"/>
        <path class="wire a" d="M120 115L70 110M120 115L150 90M120 115L110 150"/></g>
      <g data-at="1:forests">${ot(400,40,"a random forest",{cls:"t s",anchor:"middle"})}${[340,400,460].map(n=>`<path class="tree2" d="M${n} 170v-30l-22 -30m22 30l20 -34m-20 4v-30"/>`).join("")}</g>
      <g data-at="1:networks">${ot(700,40,"a small neural network",{cls:"t s",anchor:"middle"})}${e(640,115,[4,5,3])}</g>
      <g data-at="2:label">${[.2,.7,.1].map((n,i)=>`<rect class="sm${i===1?" a":""}" x="${800+i*22}" y="${160-n*60}" width="16" height="${n*60}"/>`).join("")}${ot(830,186,"a class",{cls:"a s",anchor:"middle"})}</g>
      <g data-at="2:number"><circle class="node a" cx="780" cy="230" r="8"/>${ot(798,236,"a number",{cls:"a s"})}</g>
      <g data-at="2:shapes"><rect class="patch" x="560" y="270" width="80" height="80"/>${ot(600,370,"64 \xD7 64 squares",{cls:"d xs",anchor:"middle"})}
        <path class="u" d="M660 280 L700 340 L740 280"/>${ot(700,370,"U-Net",{cls:"c xs",anchor:"middle"})}<rect class="patch a" x="760" y="270" width="80" height="80"/>${ot(800,370,"a map",{cls:"a xs",anchor:"middle"})}</g>
      <g data-at="3">${ot(40,250,"City mapping tasks, average rank",{cls:"t s"})}${ot(40,276,"a head that sees one square",{cls:"d xs"})}
        ${[["OlmoEarth","1.50"],["Tessera","1.75"],["AlphaEarth","3.25"],["first Tessera","3.50"]].map(([n,i],r)=>ot(40,304+r*24,`${r+1}  ${n} (${i})`,{cls:n==="Tessera"?"a s":"d s"})).join("")}</g>
      <g data-at="3:small">${ot(300,276,"a small head that sees the neighbours",{cls:"c xs"})}${ot(300,304,"1  Tessera",{cls:"a b"})}</g>`},compare(s){let t=[["Tessera",.647,"44 million weights",1],["OlmoEarth",.614,"308 million"],["first Tessera",.614,""],["AlphaEarth",.59,"480 million"]],e=n=>220+(n-.5)*3200;return`
      <g data-at="1:compared">${t.map(([n],i)=>ot(200,84+i*50,n,{cls:i===0?"a b":"t",anchor:"end"})).join("")}</g>
      <g data-at="1:tested">${ot(40,40,"14 mapping tasks held out from building Tessera: overall score",{cls:"t s"})}</g>
      <g data-at="2:scored">${t.map(([n,i,r,a],o)=>`<rect class="bar${a?" a":""}" x="220" y="${64+o*50}" width="${(e(i)-220).toFixed(0)}" height="30"/>${ot(e(i)+10,86+o*50,i.toFixed(3),{cls:a?"a s":"t s"})}${r?ot(e(i)+80,86+o*50,r,{cls:"d xs"}):""}`).join("")}
        ${ot(220,280,"bars start at 0.5",{cls:"d xs"})}</g>
      <g data-at="2:lead">${ot(560,280,"widest lead with 1% of the labels",{cls:"a s"})}</g>
      <g data-at="3:remove"><defs><pattern id="stripes" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)"><rect width="22" height="22" fill="#2a6f8f"/><rect width="7" height="22" fill="#3d8faf"/></pattern>
        <linearGradient id="smooth" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#2d7aa0"/><stop offset="1" stop-color="#3a8f6f"/></linearGradient></defs>
        <rect x="220" y="310" width="200" height="100" fill="url(#stripes)"/><rect x="460" y="310" width="200" height="100" fill="url(#smooth)"/>
        ${ot(320,432,"earlier: stripes along the orbits",{cls:"d xs",anchor:"middle"})}${ot(560,432,"newest: far fewer (an illustration)",{cls:"d xs",anchor:"middle"})}</g>
      <g data-at="3:steady">${ot(700,350,"steady from year to year",{cls:"c s"})}${ot(700,374,"where the land hasn\u2019t changed",{cls:"d xs"})}</g>`}},Jh=class{constructor(t,e){this.root=t,this.data=e,this.built=new Map,this.cur=null,this.stage=t.querySelector(".note-stage")}timer(t){return{cue:(e,n,i=0)=>{let r=t.lines[e];if(!r)return 1e9;let a=r.g0-t.g0;if(!n)return a;let o=0;for(let c of r.words)if(c[0].toLowerCase().replace(/[^a-z0-9'-]/g,"").startsWith(n)&&o++===i)return a+c[1];return this.warned?.has(`${t.id}${e}${n}`)||((this.warned||(this.warned=new Set)).add(`${t.id}${e}${n}`),console.warn("no cue",t.id,e,n)),a+r.dur*.3}}}build(t){if(this.built.has(t.id))return this.built.get(t.id);let e=IE[t.id](this.data),n=typeof e=="string"?{svg:e}:e,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox",`0 0 ${AE} ${RE}`),i.setAttribute("class",`note-svg note-${t.id}`),i.setAttribute("aria-hidden","true"),i.innerHTML=n.svg,this.stage.append(i);let r=this.timer(t),a=[...i.querySelectorAll("[data-at]")].map(c=>{let l=c.dataset.at.match(/^(\d+)(?::([a-z0-9'-]+))?(?::(\d+))?([+-][\d.]+)?$/);return[c,l?r.cue(+l[1],l[2],+(l[3]||0))+ +(l[4]||0):0]});n.init?.(i);let o={el:i,spec:n,ats:a,c:r};return this.built.set(t.id,o),o}update(t,e){if(this.cur&&(!t||this.cur.id!==t.id)&&this.built.get(this.cur.id).el.classList.remove("on"),this.cur=t,!t)return;let n=this.build(t),i=e-t.g0;n.el.classList.add("on"),n.el.dataset.line=t.lines.filter(r=>e>=r.g0).length-1;for(let[r,a]of n.ats)r.classList.toggle("in",i>=a);n.spec.update?.(i,n.c,n.el)}};var st=s=>document.querySelector(s),Yd=new URLSearchParams(location.search),vy=Yd.has("debug"),Me=p0({stages:window.STAGES},window.LINES),jt=m0(Me,window.TRIPS,window.LINES,window.BACKS),Qh={pipeline:window.PIPELINE,dpixel:window.DPIXEL,dpixels:window.DPIXELS,hexes:window.HEXES,stretch:window.STRETCH,demo:window.DEMO,umap:window.UMAP,curve:window.CURVE,solar:{lat:52.28386,lon:.30366,n:320}},Ze=new Jc(st("#gl")),Rn=new Th({scene:Ze,hudRoot:st("#panels"),tl:Me,data:Qh,base:"."}),_y=g0(Me,{tour:Hd.map(s=>window.TASKS.find(t=>t.id===s)),cam:Rn.centre,dpixel:Qh.dpixel,solar:Qh.solar,missions:Object.fromEntries(Ys.map(s=>[s.id,s]))}),Ut=new Ah("assets/audio",window.NARRATOR),Rs=new Xh({scene:Ze,root:st("#explore"),say:Ty,setAddress:xa,audio:Ut}),dy=new jh(st("#tour"),Ze,window.TASKS,window.TASK_SHAPES),LE=new Jh(st("#note"),Qh);window.TESSERA={tl:Me,sn:jt,scene:Ze,show:Rn,audio:Ut,explore:Rs,play:s=>Qn(s),at(s){this.atG(jt.toG(s))},atG(s){fe==="explore"&&_a(),fe="story",ht.playing=!1,ht.T=s,$n=s},take(s,t=!0){Cs.set(s,t)}};var NE=innerWidth*devicePixelRatio>1600;Ze.u.day.value=Ze.tex("assets/img/earth-2048.webp");Ze.u.emb.value=Ze.tex("assets/img/emb-2048.webp");function jd(){if(!NE||jd.done)return;jd.done=!0;let s=Ze.loader.load("assets/img/earth-4096.webp",e=>{e.colorSpace="srgb",e.anisotropy=8,Ze.u.day.value=e}),t=Ze.loader.load("assets/img/emb-4096.webp",e=>{e.colorSpace="srgb",e.anisotropy=8,Ze.u.emb.value=e})}var ht={T:0,playing:!1,T0:0,c0:0,p0:0,free:!1,userPaused:!1},ma=new Set,$n=0,fe="story";function Ui(){return ht.playing?ht.free?Wt(ht.T0+(performance.now()-ht.p0)/1e3,0,jt.T+30):Ut.ctx?Wt(ht.T0+(Ut.now-ht.c0),0,jt.T+30):ht.T:ht.T}var Zd=s=>ht.c0+(s-ht.T0),Bo=()=>Ut.ctx&&Ut.ctx.state==="running",Jd=0;async function Qn(s=ht.T){let t=++Jd;if(document.body.classList.contains("waiting")&&Vo(),Ut.stopVoices(),ma=new Set,ht.userPaused=!1,$n=s,document.body.classList.add("playing"),document.body.classList.remove("paused"),st("#play").setAttribute("aria-label","Pause"),st("#play").dataset.state="playing",!Bo()){ht.free=!0,ht.T0=s,ht.p0=performance.now(),ht.playing=!0,ht.starting=!1,eu();return}ht.T=s,ht.playing=!1,ht.starting=!0,ht.free=!1;let e=My(s);await Promise.all([Ut.load(e.name),...jt.lines.filter(n=>n.g1>s&&n.g0<s+12).map(n=>Ut.load(n.id))]),!(t!==Jd||!ht.starting||fe!=="story")&&(ht.starting=!1,ht.T0=s,ht.c0=Ut.now+.05,ht.playing=!0,$n=s,Ut.stopBed(.6),Ut.playBed(e.name,e.offset,window.BEDS[e.name]),Sy(),Ey(s),eu())}async function ep(){if(!Bo()){if(Ut.init(),await Ut.resume(),Bo()&&fe==="story"&&ht.playing&&ht.free){let s=Ui(),t=jt.lines.find(e=>s>=e.g0&&s<e.g1);Qn(t?t.g0-.2:s)}eu()}}function va(){ht.T=Ui(),ht.playing=!1,ht.starting=!1,ht.userPaused=!0,Jd++,Ut.stopVoices(),Ut.stopBed(.8),Ut.release(),ma=new Set,document.body.classList.remove("playing"),document.body.classList.add("paused"),st("#play").setAttribute("aria-label","Play"),st("#play").dataset.state="paused"}function by(s){let t=ht.playing||ht.starting;ht.T=Wt(s,0,jt.T),$n=ht.T,t?Qn(ht.T):(Ut.stopVoices(),ma=new Set)}function wy(s){if(Ut.stopVoices(),ma=new Set,$n=s,!ht.playing){ht.T=s;return}ht.free?(ht.T0=s,ht.p0=performance.now()):(ht.T0=s,ht.c0=Ut.now,Sy())}function My(s){let t=jt.at(s);if(t&&!t.back)return{name:"sidenote",offset:s-t.cluster.g0};let e=jt.main(s),n=Ps(e),i=Rn.cues.missions;return n.id==="missions"&&e>=i[0]-.4&&e<i[1]-.2?{name:"rainforest",offset:e-i[0]+.4}:{name:n.id,offset:e-n.t0}}var Ps=s=>Me.stages.find(t=>s<t.t1)||Me.stages[Me.stages.length-1];function Sy(){let s=[],t=null;for(let e of jt.lines){let n=Zd(e.g0),i=Zd(e.g1);t&&n-t[1]<1.4?t[1]=i:(t=[n,i],s.push(t))}Ut.duck(s)}function Ey(s){let t=Me.stages.indexOf(Ps(jt.main(s)));for(let n of Me.stages.slice(t,t+2))Ut.load(n.id),n.id==="missions"&&Ut.load("rainforest"),n.lines.forEach(i=>Ut.load(i.id));let e=jt.clusters.find(n=>n.g1>s&&n.g0<s+90);e&&(Ut.load("sidenote"),Ut.load(e.back.id),e.notes.forEach(n=>{rr(n.id)!==!1&&n.lines.forEach(i=>Ut.load(i.id))}))}function Kd(s){for(let e of jt.lines)if(!(ma.has(e.id)||e.g1<=s||e.g0>s+1.5)){if(!Ut.ready(e.id)){Ut.load(e.id);continue}ma.add(e.id),Ut.playLine(e.id,Zd(Math.max(e.g0,s)),Math.max(0,s-e.g0))}let t=My(s);Ut.bed?.stage!==t.name&&(Ut.ready(t.name)?Ut.playBed(t.name,t.offset,window.BEDS[t.name]):Ut.load(t.name)),Math.floor(s/10)!==Kd.k&&(Kd.k=Math.floor(s/10),Ey(s))}var sr=[];{let s=Rn.cues,t=(e,n,i)=>sr.push([e,()=>Ut.chirp(n,i)]);s.pipe.forEach(e=>t(e,1500,2100)),t(s.collapse,900,1800),s.views.forEach((e,n)=>t(e,1500+n*90,2100+n*90)),t(s.blend,1200,800),t(s.stack,1300,2e3),t(s.mask,900,600),t(s.drawA,1600,2300),t(s.drawB,1700,2500),t(s.count,1e3,2e3),t(s.meet,1100,2100),t(s.vec,1600,2600),t(s.cloud,1200,2400),t(s.touch,1500,2600),s.classes.forEach(e=>t(e,1900,2400)),t(s.classify,1e3,2600),t(s.evalDraw,1200,2200),t(s.evalUnseen,1e3,700),t(s.solar,800,1600),t(s.outline,1400,2800),s.missions.forEach(e=>t(e,1300,2200)),sr.push([s.sweep,()=>Ut.hum(3,0,.25)]);for(let e of Me.stages.slice(1))sr.push([e.t0+.2,()=>Ut.whoosh(2.4,0,.3)]);for(let e of sr)e[0]=jt.toG(e[0]);for(let e of jt.clusters)sr.push([e.g0+.05,()=>Ut.sting(!0)]),sr.push([e.backG-.1,()=>Ut.sting(!1)])}function DE(s,t){for(let[e,n]of sr)e>s&&e<=t&&n()}var Kh=null;function UE(s){let t=jt.lines.find(o=>s>=o.g0-.05&&s<o.g1+.6),e=st("#captions");if(!t){Kh&&(e.classList.remove("on"),Kh=null);return}t!==Kh&&(Kh=t,e.classList.add("on"),e.dataset.who=t.who,st("#cap-who").textContent=t.who==="console"?"Console":t.who==="explorer"?"Explorer":"",st("#cap-text").innerHTML=t.text.split(" ").map(o=>`<span>${o} </span>`).join(""),FE(t));let n=st("#cap-text").children,i=s-t.g0,r=t.words.filter(o=>i>=o[1]-.02).length,a=i>=t.dur-.2?n.length:Math.round(r/t.words.length*n.length);for(let o=0;o<n.length;o++)n[o].classList.toggle("said",o<a)}function FE(s){st("#captions").hidden||Ty(s.text)}function Ty(s){let t=st("#sr");t.textContent="",setTimeout(()=>{t.textContent=s},30)}var wn=st("#rail"),Qi=st("#chapters-btn"),nu=!1,np=0;function Ay(){let s=st(".timeline").getBoundingClientRect(),t=st(".top .bar").getBoundingClientRect(),e=wn.offsetWidth;wn.style.left=`${Wt(s.left+s.width/2-e/2,12,innerWidth-e-12)}px`,wn.style.top=`${t.bottom+6}px`}function Ry(s,t){clearTimeout(np),s&&(nu=!0),wn.hidden&&(wn.hidden=!1,Qi.setAttribute("aria-expanded","true"),Ay()),t&&(wn.querySelector("button[aria-current]")||wn.querySelector("button")).focus()}function zo(s){clearTimeout(np),nu=!1,!wn.hidden&&(wn.hidden=!0,Qi.setAttribute("aria-expanded","false"),s&&Qi.focus())}Qi.addEventListener("click",s=>{wn.hidden||!nu?Ry(!0,s.detail===0):zo()});for(let s of[Qi,wn])s.addEventListener("pointerenter",t=>{t.pointerType==="mouse"&&Ry(!1)}),s.addEventListener("pointerleave",t=>{t.pointerType==="mouse"&&!nu&&(np=setTimeout(()=>zo(),350))});addEventListener("pointerdown",s=>{!wn.hidden&&!wn.contains(s.target)&&!Qi.contains(s.target)&&zo()},!0);wn.addEventListener("click",s=>{s.target.closest("button, a")&&zo()});addEventListener("resize",()=>{wn.hidden||Ay()});var py=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;st("#segs").innerHTML=Me.stages.map(s=>`<button data-stage="${s.id}" style="flex-grow:${(s.t1-s.t0).toFixed(2)}" aria-label="${s.title}" title="${s.title}"></button>`).join("");var Cy=[...document.querySelectorAll("#segs button")],Py=[...document.querySelectorAll(".vu i")],my=new Float32Array(Py.length);Cy.forEach(s=>s.addEventListener("click",()=>{fe==="explore"&&_a(),lu(jt.toG(Me.stage(s.dataset.stage).t0))}));function OE(s,t,e){let n=Ps(t),i=e?.note;Cy.forEach((o,c)=>{let l=Me.stages[c];o.style.setProperty("--fill",Wt((t-l.t0)/(l.t1-l.t0)).toFixed(3)),o.toggleAttribute("aria-current",l===n)}),st("#t-now").textContent=py(i?s-i.g0:t),st("#t-all").textContent=py(i?i.g1-i.g0:Me.T);let r=fe==="explore"?"your console":i?`Side note: ${i.title}`:e?"Side note":n.title;Qi.dataset.stage!==r&&(Qi.dataset.stage=r,Qi.setAttribute("aria-label",`Stages and side notes. Now: ${r}`));let a=Ut.outputLevel(my);Py.forEach((o,c)=>{o.style.transform=`scaleY(${Math.max(.08,ht.playing&&!ht.free?my[c]:0).toFixed(2)})`})}function tu(s,t){let e=Ps(s),n=t?.note,i=e.id+(n?n.id:"");tu.id!==i&&(tu.id=i,document.querySelectorAll("#rail [data-stage]").forEach(r=>r.toggleAttribute("aria-current",r.dataset.stage===e.id)),document.querySelectorAll("#rail [data-trip]").forEach(r=>r.toggleAttribute("aria-current",!!n&&r.dataset.trip===n.id)),fe==="story"&&xa(n?`t/${n.id}`:e.id==="orbit"?"":`s/${e.id}`))}var gy=performance.now(),qd=0,BE=performance.now();function Iy(s){if(requestAnimationFrame(Iy),document.hidden)return;let t=s/1e3,e=Ui();if(fe==="story"){let o=WE(e);o!==null&&(wy(o),e=o)}ht.playing&&fe==="story"&&$n<Xd&&e>=Xd&&(va(),ht.T=e=Xd,$n=e,HE()),ht.playing&&(ht.free||(Kd(e),DE($n,e)),$n=e,e>=jt.T&&(kE(),e=jt.T),e>8&&jd());let n=jt.main(e),i=fe==="story"?jt.at(e):null,r;if(fe==="explore")r=Rs.step(Kc),Rn.hideGround();else{r=_y(n);let o=Rn.satFollow(n);if(o&&(r=Kc(r,o.pose,o.w)),i){let c=e-i.cluster.g0;r={...r,heading:r.heading+6*Math.sin(c*.12),dist:r.dist*(1+.03*Math.sin(c*.09))}}}Ze.setPose(r);let{groundOn:a}=fe==="explore"?{groundOn:1}:Rn.draw(n,r,t);fe==="explore"&&(Ze.u.time.value=t,Ze.u.embMix.value=1,Ze.u.sweepOn.value=0,Ze.cu.opacity.value=0),Ze.render(fe==="explore"?r.dist<400?1:0:a),fe==="story"&&(UE(e),tu(n,i),zE(i?.note?new Set(i.note.src):Rn.sourcesAt(n)));{let[o,c]=Rn.cues.tour;dy.update(n,o,c,fe==="story"?Math.min(pt(n,o,o+.5),1-pt(n,c-.3,c+.3)):0),dy.nestAt(fe==="story"?n:-1,Rn.cues.nest,c)}qE(e,i),XE(e),s-BE>1500&&Rn.preload(),OE(e,n,i),Qd(n),vy&&(qd=qd*.95+.05*1e3/(s-gy),gy=s,st("#debug").textContent=`G ${e.toFixed(2)} / ${jt.T.toFixed(1)} \xB7 T ${n.toFixed(2)} \xB7 ${qd.toFixed(0)} fps \xB7 ${r.dist.toFixed(1)} km`)}function kE(){ht.T=jt.T,ht.playing=!1,ip(!0)}function ip(s=!1){(ht.playing||ht.starting)&&va(),Vo(),fe="explore",document.body.classList.add("exploring"),Rn.H.hideAll(),st("#captions").classList.remove("on"),Rs.enter(_y(jt.main(ht.T))),s?Ut.ctx&&Ut.playBed("yours",0,window.BEDS.yours):(Ut.init(),Ut.resume().then(()=>{Ut.load("yours").then(()=>Ut.playBed("yours",0,window.BEDS.yours))})),st("#explore").focus()}function _a(){Rs.leave(),fe="story",document.body.classList.remove("exploring"),Ze.setOrigin(Rn.centre.lat,Rn.centre.lon),Ut.stopBed(.8),ht.T>=jt.T-.1&&(ht.T=jt.toG(Me.stage("yours").t0)),tu.id=null}var Ly=st("#sources ol");Ly.innerHTML=Object.entries(jr).map(([s,t])=>`<li data-src="${s}"><a href="${t.href}" target="_blank" rel="noopener"><span class="cite">${s}</span><span class="short">${t.short}</span><span class="full">${t.title}</span></a></li>`).join("");var yy="";function zE(s){let t=[...s].sort().join("");t!==yy&&(yy=t,Ly.querySelectorAll("li").forEach(e=>e.classList.toggle("on",s.has(e.dataset.src))))}function VE(s){ht.T=s,ht.playing=!1,$n=s,document.body.classList.add("waiting","paused"),document.body.classList.remove("playing"),st("#play").setAttribute("aria-label","Play"),st("#play").dataset.state="paused",st("#start-cc").setAttribute("aria-pressed",!st("#captions").hidden),st("#starter").hidden=!1,st("#start").focus()}st("#start-cc").addEventListener("click",()=>{let s=st("#captions").hidden;iu(s),st("#start-cc").setAttribute("aria-pressed",s)});st("#start").addEventListener("click",async()=>{Ut.init(),await Promise.race([Ut.resume(),new Promise(s=>setTimeout(s,1e3))]),Qn(ht.T)});function eu(){let s=Ut.muted?"muted":Bo()||!ht.playing?"on":"blocked",t=st("#mute");if(t.dataset.state===s)return;t.dataset.state=s,t.setAttribute("aria-pressed",s==="muted");let e=s==="blocked"?"Turn on sound":s==="muted"?"Sound: muted. Unmute":"Sound: on. Mute";t.setAttribute("aria-label",e),t.title=e}for(let s of["pointerdown","touchstart","mousedown"])addEventListener(s,()=>ep(),{capture:!0,passive:!0});addEventListener("keydown",()=>ep(),{capture:!0});st("#play").addEventListener("click",()=>ht.playing||ht.starting?va():(fe==="explore"&&_a(),Qn(ht.T)));st("#prev").addEventListener("click",()=>{let s=jt.main(Ui()),t=Me.stages.indexOf(Ps(s)),e=Me.stages[Math.max(0,s-Me.stages[t].t0<2?t-1:t)];by(jt.toG(e.t0))});st("#next").addEventListener("click",()=>{let s=Me.stages.indexOf(Ps(jt.main(Ui())));s<Me.stages.length-1&&by(jt.toG(Me.stages[s+1].t0))});st("#mute").addEventListener("click",()=>{if(st("#mute").dataset.state==="blocked"){ep();return}Ut.setMuted(!Ut.muted),eu()});function iu(s){st("#captions").hidden=!s,st("#cc").setAttribute("aria-pressed",s);try{localStorage.setItem("tessera-captions",s?"on":"off")}catch{}}st("#cc").addEventListener("click",()=>iu(st("#captions").hidden));try{localStorage.getItem("tessera-captions")==="on"&&iu(!0)}catch{}var Ny={tour:["orbit","sensors","dpixel"],deeper:["inference","tasks","missions","yours"]},Dy=s=>Me.stage(Ny[s][0]).t0,Xd=jt.toG(Me.stage("dpixel").t1),su=s=>{let t=Dy(s),e=Me.stage(Ny[s].at(-1)).t1;return`${Math.round((e-t)/60)} min`};for(let s of["tour","deeper"])document.querySelector(`#rail .part[data-part="${s}"] .len`).textContent=`\xB7 ${su(s)}`;st("#len-tour").textContent=`${su("tour")}, narrated`;st("#len-deeper").textContent=`${su("deeper")}: what the fingerprints can map`;st("#len-deeper2").textContent=su("deeper");document.querySelector('#segs button[data-stage="inference"]').classList.add("p2");async function sp(s){Ut.init(),await Promise.race([Ut.resume(),new Promise(t=>setTimeout(t,1e3))]),s()}function ru(s){Vo(),fe==="explore"&&_a(),sp(()=>lu(jt.toG(Dy(s))))}function au(){Vo(),sp(()=>{fe!=="explore"&&ip()})}st("#m-tour").addEventListener("click",()=>ru("tour"));st("#m-deeper").addEventListener("click",()=>ru("deeper"));st("#m-map").addEventListener("click",au);st("#go-tour").addEventListener("click",()=>ru("tour"));st("#go-deeper").addEventListener("click",()=>ru("deeper"));st("#go-map").addEventListener("click",au);st("#pc-deeper").addEventListener("click",()=>{Vo(),sp(()=>Qn(ht.T))});st("#pc-map").addEventListener("click",au);st("#rail-map").addEventListener("click",au);function Qd(s){let t=fe==="explore"?"map":st("#landing").hidden?s>Me.stage("inference").t0+.05?"deeper":"tour":"";if(Qd.cur!==t){Qd.cur=t;for(let[e,n]of[["m-tour","tour"],["m-deeper","deeper"],["m-map","map"]])st(`#${e}`).setAttribute("aria-pressed",t===n)}}function GE(){ht.T=0,$n=0,ht.playing=!1,document.body.classList.add("waiting","paused"),document.body.classList.remove("playing"),st("#play").setAttribute("aria-label","Play"),st("#play").dataset.state="paused",st("#landing-cc").setAttribute("aria-pressed",!st("#captions").hidden),st("#landing").hidden=!1,st("#go-tour").focus()}function HE(){st("#partcard").hidden=!1,document.body.classList.add("waiting"),st("#pc-deeper").focus()}function Vo(){for(let s of["#landing","#partcard","#starter"])st(s).hidden=!0;document.body.classList.remove("waiting")}st("#landing-cc").addEventListener("click",()=>{let s=st("#captions").hidden;iu(s),st("#landing-cc").setAttribute("aria-pressed",s)});var pi=st("#about-menu"),ko=st("#about-btn");function ou(s=pi.hidden,t=!1){if(pi.hidden=!s,ko.setAttribute("aria-expanded",s),s){let e=ko.getBoundingClientRect(),n=st(".top .bar").getBoundingClientRect();pi.style.top=`${n.bottom+6}px`,pi.style.left=`${Math.min(innerWidth-pi.offsetWidth-12,e.right-pi.offsetWidth)}px`,t&&pi.querySelector("a").focus()}}ko.addEventListener("click",s=>ou(void 0,s.detail===0));pi.addEventListener("click",s=>{s.target.closest("a")&&ou(!1)});addEventListener("pointerdown",s=>{!pi.hidden&&!pi.contains(s.target)&&!ko.contains(s.target)&&ou(!1)},!0);function $E(){_a(),Qn(ht.T)}document.querySelectorAll("#rail button[data-stage]").forEach(s=>s.addEventListener("click",()=>lu(jt.toG(Me.stage(s.dataset.stage).t0))));function lu(s){fe==="explore"&&_a(),ht.T=s,$n=s,Qn(s)}addEventListener("keydown",s=>{if(!(s.target.closest("input, select, textarea")||s.metaKey||s.ctrlKey||s.altKey)){if(!wn.hidden&&s.key==="Escape"){zo(!0);return}if(!pi.hidden&&s.key==="Escape"){ou(!1),ko.focus();return}if(!st("#about").hidden){s.key==="Escape"&&op();return}if(ya.isOpen()){s.key==="Escape"&&ya.close();return}if(s.key==="Escape"&&fe==="story"&&jt.at(Ui())?.note){st("#note-close").click();return}if(s.key==="t"&&fe==="story"&&da){YE();return}if(fe==="explore"&&Rs.keys(s)){s.preventDefault();return}s.key===" "&&!s.target.closest("button, a")?(s.preventDefault(),st("#play").click()):s.key==="ArrowRight"&&fe==="story"?st("#next").click():s.key==="ArrowLeft"&&fe==="story"?st("#prev").click():s.key==="m"?st("#mute").click():s.key==="c"?st("#cc").click():s.key==="e"&&fe==="story"?st("#m-map").click():s.key==="Escape"&&fe==="explore"&&$E()}});document.addEventListener("visibilitychange",()=>{document.hidden&&ht.playing&&(va(),ht.userPaused=!1,ht.autoPaused=!0)});var Cs=new Map,ga=!1,da=null,pa=null;try{ga=localStorage.getItem("tessera-notes")==="always"}catch{}var rr=s=>Cs.has(s)?Cs.get(s):ga;function rp(s){ga=s;try{localStorage.setItem("tessera-notes",s?"always":"offer")}catch{}st("#notes-mode").setAttribute("aria-pressed",s),st("#offer-always").checked=s,pa=null}st("#notes-mode").addEventListener("click",()=>{rp(!ga),tp(ga?"Every side note will now play as the story reaches it.":"Side notes will be offered as the story passes them.")});function tp(s){let t=st("#toast");t.textContent=s,t.classList.add("on"),clearTimeout(tp.timer),tp.timer=setTimeout(()=>t.classList.remove("on"),3200)}st("#offer-always").addEventListener("change",s=>rp(s.target.checked));rp(ga);function WE(s){let t=jt.at(s);if(!t)return null;let e=t.cluster,n=e.notes.filter(i=>rr(i.id));if(!t.note&&!t.back)return n.length?null:e.g1;if(t.note&&!rr(t.note.id)){let i=n.find(r=>r.g0>s);return i?i.g0:n.length?e.backG:e.g1}return t.back&&!n.length?e.g1:null}function ap(s){let t=jt.note(s);t&&(Cs.set(s,!0),pa=null,lu(t.g0-.3),t.cluster.notes.some(e=>e.g0<t.g0&&rr(e.id))||Ut.sting(!0))}function qE(s,t){let e=t?.note||null,n=!!t&&(!!e||!t.back);document.body.classList.toggle("in-note",n);let i=st("#note");n!==!i.hidden&&(i.hidden=!n),e&&i.dataset.id!==e.id&&(i.dataset.id=e.id,st("#note-title").textContent=e.title,st("#note-refs").innerHTML=e.refs?.length?`Read it in the source: ${Vf(e.refs)}`:"",st("#note-steps").innerHTML=e.lines.slice(1).map(()=>"<i></i>").join("")),e&&[...st("#note-steps").children].forEach((r,a)=>r.classList.toggle("on",s>=e.lines[a+1].g0)),LE.update(e,s)}st("#note-close").addEventListener("click",()=>{let s=jt.at(Ui());s&&(s.cluster.notes.forEach(t=>{t.g0>=Ui()-.5&&Cs.set(t.id,!1)}),wy(s.cluster.backG),ht.playing||Qn(s.cluster.backG))});function XE(s){let t=null;fe==="story"&&(t=jt.clusters.find(n=>s>=jt.toG(n.anchor)-9&&s<n.g0||s>=n.g1&&s<n.g1+4&&!n.notes.some(i=>rr(i.id)))),da=t;let e=st("#offer");if(document.body.classList.toggle("offering",!!t),!t){e.hidden||(e.hidden=!0),pa=null;return}pa!==t&&(pa=t,e.hidden=!1,st("#offer-list").innerHTML=t.notes.map(n=>`<li><button data-note="${n.id}" aria-pressed="${rr(n.id)}"><span class="tick" aria-hidden="true"></span>${n.title}</button></li>`).join(""),st("#offer-list").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{let i=n.dataset.note,r=!rr(i);Cs.set(i,r),n.setAttribute("aria-pressed",r),r&&Ui()>=t.g1&&ap(i)})),st("#offer-kicker").textContent=t.notes.length>1?"Side notes coming up":"Side note coming up"),e.classList.toggle("late",s>=t.g1)}function YE(){da&&(da.notes.forEach(s=>Cs.set(s.id,!0)),pa=null,Ui()>=da.g1&&ap(da.notes[0].id))}var Uy=null;function xy(){Uy=document.activeElement,st("#about").hidden=!1,st("#app").inert=!0,ht.playing&&(va(),ht.resumeAfterAbout=!0),st("#about h1").focus(),xa("about")}function op(){st("#about").hidden=!0,st("#app").inert=!1,Uy?.focus?.(),ht.resumeAfterAbout&&(ht.resumeAfterAbout=!1,Qn(ht.T)),xa(fe==="explore"?"scan":`s/${Ps(jt.main(ht.T)).id}`)}st("#about-close").addEventListener("click",op);var ya=new Zh(window.DRAFT,{onOpen(){st("#app").inert=!0,ht.playing&&(va(),ht.resumeAfterDraft=!0)},onClose(){st("#app").inert=!1,ht.resumeAfterDraft&&(ht.resumeAfterDraft=!1,Qn(ht.T)),xa(fe==="explore"?"scan":`s/${Ps(jt.main(ht.T)).id}`)},onTrip:s=>ap(s),setAddress:xa});st("#script-link").addEventListener("click",s=>{s.preventDefault(),ya.openScript()});function xa(s){let t=s?`#/${s}`:location.pathname+location.search;(s?location.hash:"")!==(s?t:"")&&history.replaceState(null,"",s?t:location.pathname+location.search)}function Fy(){let s=location.hash.replace(/^#\/?/,"").split("/");if(s[0]==="scan"&&s[1]){let[n,i]=s[1].split(",").map(Number);if(isFinite(n)&&isFinite(i)){ip(),s[2]&&(Rs.year=+s[2],Rs.ui.year.value=s[2]),Rs.scan(n,i);return}}let t=s[0]==="t"?jt.note(s[1]):null;t&&Cs.set(t.id,!0);let e=t?t.g0-.3:s[0]==="s"&&Me.stage(s[1])?jt.toG(Me.stage(s[1]).t0):0;ht.T=e,$n=e,Ut.init(),Promise.race([Ut.resume(),new Promise(n=>setTimeout(n,400))]).finally(()=>{!s[0]&&!Yd.has("start")?GE():Bo()&&!Yd.has("start")?Qn(e):VE(e)}),s[0]==="about"&&xy(),s[0]==="credits"&&(xy(),st("#credits").scrollIntoView()),s[0]==="script"&&ya.openScript()}addEventListener("hashchange",()=>{ya.isOpen()&&ya.close(!0),st("#about").hidden||op(),Fy()});addEventListener("resize",()=>{Ze.resize(innerWidth,innerHeight),Rn.H.refit()});Ze.resize(innerWidth,innerHeight);Fy();vy&&(st("#debug").hidden=!1);requestAnimationFrame(Iy);Ut.load("orbit");Me.stages[0].lines.forEach(s=>Ut.load(s.id));
