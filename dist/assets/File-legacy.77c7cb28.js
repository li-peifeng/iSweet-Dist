!function(){function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.c36084be.js","./icon-legacy.efe6c5ef.js","./index-legacy.8dc268bc.js","./Layout-legacy.127bbc92.js"],(function(t,r){"use strict";var o,i,a,u,c,s,f,l,h,d,g,p,v,m,w,y,b,E,A,C,I,P,T,B,M,N,R,x,S,L,j,k,U,O,_,D,z,$,F,H,K,J,Y,V,Q,q,X,W,Z;return{setters:[function(t){o=t.c,i=t.av,a=t.I,u=t.ai,c=t.a3,s=t.a6,f=t.bN,l=t.b5,h=t.aN,d=t.ce,g=t.cJ,p=t.d,v=t.q,m=t.cK,w=t.a7,y=t.aq,b=t.ag,E=t.G,A=t.am,C=t.K,I=t.an,P=t.cp,T=t.S,B=t.aH,M=t.r,N=t.as,R=t.cL,x=t.cM,S=t.ah,L=t.cN,j=t.cO,k=t.cP,U=t.cQ,O=t.ct,_=t.Q,D=t.cR,z=t.Y,$=t.Z,F=t.e,H=t.cu,K=t.cS,J=t.bc,Y=t.$,V=t.a0,Q=t.ao},function(t){q=t.g,X=t.O},function(t){W=t.k},function(t){Z=t.T}],execute:function(){var G,tt=t("F",(function(t){return o(s,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{boxSize:"$20",get fallback(){return o(a,{get color(){return u()},boxSize:"$20",get as(){return q(c.obj)}})},get src(){return c.obj.thumb}}),o(s,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return c.obj.name}}),o(l,{color:"$neutral10",size:"sm",get children(){return[h((function(){return d(c.obj.size)}))," · ",h((function(){return g(c.obj.modified)}))]}})]}}),o(s,{spacing:"$2",get children(){return t.children}})]}})})),et=function(){var t=p(),e=v((function(){return m(c.obj.name)})),r=w().currentObjLink;return o(T,{get when(){return e().length},get children(){return o(y,{get children(){return[o(b,{as:E,colorScheme:"success",get rightIcon(){return o(a,{as:W})},get children(){return t("home.preview.open_with")}}),o(A,{get children(){return o(C,{get each(){return e()},children:function(t){return o(I,{as:"a",target:"_blank",get href(){return P(t.value,{raw_url:c.raw_url,name:c.obj.name,d_url:r(!0)})},get children(){return t.key}})}})}})]}})}})},rt={},nt={},ot={},it=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ot.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},ot.getSymbolTotalCodewords=function(t){return it[t]},ot.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},ot.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');G=t},ot.isKanjiModeEnabled=function(){return void 0!==G},ot.toSJIS=function(t){return G(t)};var at={};function ut(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}}(at),ut.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ct=ut;function st(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}st.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},st.prototype.get=function(t,e){return this.data[t*this.size+e]},st.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},st.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ft=st,lt={};!function(t){var e=ot.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),i=[n-7],a=1;a<r-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}}(lt);var ht={},dt=ot.getSymbolSize;ht.getPositions=function(t){var e=dt(t);return[[0,0],[e-7,0],[0,e-7]]};var gt={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,r=3,n=40,o=10;function i(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){for(var r=t.size,n=0,o=0,i=0,a=null,u=null,c=0;c<r;c++){o=i=0,a=u=null;for(var s=0;s<r;s++){var f=t.get(c,s);f===a?o++:(o>=5&&(n+=e+(o-5)),a=f,o=1),(f=t.get(s,c))===u?i++:(i>=5&&(n+=e+(i-5)),u=f,i=1)}o>=5&&(n+=e+(o-5)),i>=5&&(n+=e+(i-5))}return n},t.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r},t.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&r++}return r*n},t.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,i(t,o,n))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),t.applyMask(a,e);var u=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),u<i&&(i=u,o=a)}return o}}(gt);var pt={},vt=at,mt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],wt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];pt.getBlocksCount=function(t,e){switch(e){case vt.L:return mt[4*(t-1)+0];case vt.M:return mt[4*(t-1)+1];case vt.Q:return mt[4*(t-1)+2];case vt.H:return mt[4*(t-1)+3];default:return}},pt.getTotalCodewordsCount=function(t,e){switch(e){case vt.L:return wt[4*(t-1)+0];case vt.M:return wt[4*(t-1)+1];case vt.Q:return wt[4*(t-1)+2];case vt.H:return wt[4*(t-1)+3];default:return}};var yt={},bt={},Et=new Uint8Array(512),At=new Uint8Array(256);!function(){for(var t=1,e=0;e<255;e++)Et[e]=t,At[t]=e,256&(t<<=1)&&(t^=285);for(var r=255;r<512;r++)Et[r]=Et[r-255]}(),bt.log=function(t){if(t<1)throw new Error("log("+t+")");return At[t]},bt.exp=function(t){return Et[t]},bt.mul=function(t,e){return 0===t||0===e?0:Et[At[t]+At[e]]},function(t){var e=bt;t.mul=function(t,r){for(var n=new Uint8Array(t.length+r.length-1),o=0;o<t.length;o++)for(var i=0;i<r.length;i++)n[o+i]^=e.mul(t[o],r[i]);return n},t.mod=function(t,r){for(var n=new Uint8Array(t);n.length-r.length>=0;){for(var o=n[0],i=0;i<r.length;i++)n[i]^=e.mul(r[i],o);for(var a=0;a<n.length&&0===n[a];)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(r){for(var n=new Uint8Array([1]),o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(yt);var Ct=yt;function It(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}It.prototype.initialize=function(t){this.degree=t,this.genPoly=Ct.generateECPolynomial(this.degree)},It.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=Ct.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var Pt=It,Tt={},Bt={},Mt={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},Nt={},Rt="[0-9]+",xt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",St="(?:(?![A-Z0-9 $%*+\\-./:]|"+(xt=xt.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";Nt.KANJI=new RegExp(xt,"g"),Nt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Nt.BYTE=new RegExp(St,"g"),Nt.NUMERIC=new RegExp(Rt,"g"),Nt.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var Lt=new RegExp("^"+xt+"$"),jt=new RegExp("^[0-9]+$"),kt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Nt.testKanji=function(t){return Lt.test(t)},Nt.testNumeric=function(t){return jt.test(t)},Nt.testAlphanumeric=function(t){return kt.test(t)},function(t){var e=Mt,r=Nt;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}}(Bt),function(t){var e=ot,r=pt,n=at,o=Bt,i=Mt,a=e.getBCHDigit(7973);function u(t,e){return o.getCharCountIndicator(t,e)+4}function c(t,e){var r=0;return t.forEach((function(t){var n=u(t.mode,e);r+=n+t.getBitsLength()})),r}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);var c=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(a===o.MIXED)return c;var s=c-u(a,t);switch(a){case o.NUMERIC:return Math.floor(s/10*3);case o.ALPHANUMERIC:return Math.floor(s/11*2);case o.KANJI:return Math.floor(s/13);case o.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(e,r){var i,a=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(var n=1;n<=40;n++)if(c(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-a>=0;)r^=7973<<e.getBCHDigit(r)-a;return t<<12|r}}(Tt);var Ut={},Ot=ot,_t=Ot.getBCHDigit(1335);Ut.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,n=r<<10;Ot.getBCHDigit(n)-_t>=0;)n^=1335<<Ot.getBCHDigit(n)-_t;return 21522^(r<<10|n)};var Dt={},zt=Bt;function $t(t){this.mode=zt.NUMERIC,this.data=t.toString()}$t.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},$t.prototype.getLength=function(){return this.data.length},$t.prototype.getBitsLength=function(){return $t.getBitsLength(this.data.length)},$t.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var Ft=$t,Ht=Bt,Kt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Jt(t){this.mode=Ht.ALPHANUMERIC,this.data=t}Jt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Jt.prototype.getLength=function(){return this.data.length},Jt.prototype.getBitsLength=function(){return Jt.getBitsLength(this.data.length)},Jt.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*Kt.indexOf(this.data[e]);r+=Kt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Kt.indexOf(this.data[e]),6)};var Yt=Jt,Vt=Bt;function Qt(t){this.mode=Vt.BYTE,this.data="string"==typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}Qt.getBitsLength=function(t){return 8*t},Qt.prototype.getLength=function(){return this.data.length},Qt.prototype.getBitsLength=function(){return Qt.getBitsLength(this.data.length)},Qt.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var qt=Qt,Xt=Bt,Wt=ot;function Zt(t){this.mode=Xt.KANJI,this.data=t}Zt.getBitsLength=function(t){return 13*t},Zt.prototype.getLength=function(){return this.data.length},Zt.prototype.getBitsLength=function(){return Zt.getBitsLength(this.data.length)},Zt.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=Wt.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var Gt=Zt,te={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,c,s,f,l,h,d=e.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(c in u=(a=d.pop()).value,s=a.cost,f=t[u]||{})f.hasOwnProperty(c)&&(l=s+f[c],h=i[c],(void 0===i[c]||h>l)&&(i[c]=l,d.push(c,l),o[c]=u));if(void 0!==n&&void 0===i[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(te),function(t){var e=Bt,r=Ft,n=Yt,o=qt,i=Gt,a=Nt,u=ot,c=te.exports;function s(t){return unescape(encodeURIComponent(t)).length}function f(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var r,n,o=f(a.NUMERIC,e.NUMERIC,t),i=f(a.ALPHANUMERIC,e.ALPHANUMERIC,t);return u.isKanjiModeEnabled()?(r=f(a.BYTE,e.BYTE,t),n=f(a.KANJI,e.KANJI,t)):(r=f(a.BYTE_KANJI,e.BYTE,t),n=[]),o.concat(i,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function h(t,a){switch(a){case e.NUMERIC:return r.getBitsLength(t);case e.ALPHANUMERIC:return n.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function d(t,a){var c,s=e.getBestModeForData(t);if((c=e.from(a,s))!==e.BYTE&&c.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(c)+".\n Suggested mode is: "+e.toString(s));switch(c!==e.KANJI||u.isKanjiModeEnabled()||(c=e.BYTE),c){case e.NUMERIC:return new r(t);case e.ALPHANUMERIC:return new n(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(d(e,null)):e.data&&t.push(d(e.data,e.mode)),t}),[])},t.fromString=function(r,n){for(var o=function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:s(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:s(o.data)}])}}return r}(l(r,u.isKanjiModeEnabled())),i=function(t,r){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],c=[],s=0;s<u.length;s++){var f=u[s],l=""+a+s;c.push(l),n[l]={node:f,lastCount:0},o[l]={};for(var d=0;d<i.length;d++){var g=i[d];n[g]&&n[g].node.mode===f.mode?(o[g][l]=h(n[g].lastCount+f.length,f.mode)-h(n[g].lastCount,f.mode),n[g].lastCount+=f.length):(n[g]&&(n[g].lastCount=f.length),o[g][l]=h(f.length,f.mode)+4+e.getCharCountIndicator(f.mode,r))}}i=c}for(var p=0;p<i.length;p++)o[i[p]].end=0;return{map:o,table:n}}(o,n),a=c.find_path(i.map,"start","end"),f=[],d=1;d<a.length-1;d++)f.push(i.table[a[d]].node);return t.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(f))},t.rawSplit=function(e){return t.fromArray(l(e,u.isKanjiModeEnabled()))}}(Dt);var ee=ot,re=at,ne=ct,oe=ft,ie=lt,ae=ht,ue=gt,ce=pt,se=Pt,fe=Tt,le=Ut,he=Bt,de=Dt;function ge(t,e,r){var n,o,i=t.size,a=le.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function pe(t,e,r){var n=new ne;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),he.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(ee.getSymbolTotalCodewords(t)-ce.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,e,r){for(var n=ee.getSymbolTotalCodewords(e),o=ce.getTotalCodewordsCount(e,r),i=n-o,a=ce.getBlocksCount(e,r),u=a-n%a,c=Math.floor(n/a),s=Math.floor(i/a),f=s+1,l=c-s,h=new se(l),d=0,g=new Array(a),p=new Array(a),v=0,m=new Uint8Array(t.buffer),w=0;w<a;w++){var y=w<u?s:f;g[w]=m.slice(d,d+y),p[w]=h.encode(g[w]),d+=y,v=Math.max(v,y)}var b,E,A=new Uint8Array(n),C=0;for(b=0;b<v;b++)for(E=0;E<a;E++)b<g[E].length&&(A[C++]=g[E][b]);for(b=0;b<l;b++)for(E=0;E<a;E++)A[C++]=p[E][b];return A}(n,t,e)}function ve(t,e,r,n){var o;if(Array.isArray(t))o=de.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=de.rawSplit(t);i=fe.getBestVersionForData(a,r)}o=de.fromString(t,i||40)}var u=fe.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var c=pe(e,r,o),s=ee.getSymbolSize(e),f=new oe(s);return function(t,e){for(var r=t.size,n=ae.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var c=-1;c<=7;c++)a+c<=-1||r<=a+c||(u>=0&&u<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===u||6===u)||u>=2&&u<=4&&c>=2&&c<=4?t.set(i+u,a+c,!0,!0):t.set(i+u,a+c,!1,!0))}(f,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(f),function(t,e){for(var r=ie.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(f,e),ge(f,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=fe.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(f,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2)for(6===u&&u--;;){for(var c=0;c<2;c++)if(!t.isReserved(o,u-c)){var s=!1;a<e.length&&(s=1==(e[a]>>>i&1)),t.set(o,u-c,s),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(f,c),isNaN(n)&&(n=ue.getBestMask(f,ge.bind(null,f,r))),ue.applyMask(n,f),ge(f,r,n),{modules:f,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}nt.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=re.M;return void 0!==e&&(o=re.from(e.errorCorrectionLevel,re.M),r=fe.from(e.version),n=ue.from(e.maskPattern),e.toSJISFunc&&ee.setToSJISFunction(e.toSJISFunc)),ve(t,r,o,n)};var me={},we={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),u=Math.floor((o+2*n.margin)*a),c=n.margin*a,s=[n.color.light,n.color.dark],f=0;f<u;f++)for(var l=0;l<u;l++){var h=4*(f*u+l),d=n.color.light;if(f>=c&&l>=c&&f<u-c&&l<u-c)d=s[i[Math.floor((f-c)/a)*o+Math.floor((l-c)/a)]?1:0];e[h++]=d.r,e[h++]=d.g,e[h++]=d.b,e[h]=d.a}}}(we),function(t){var e=we;t.render=function(t,r,n){var o=n,i=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);var a=e.getImageWidth(t.modules.size,o),u=i.getContext("2d"),c=u.createImageData(a,a);return e.qrToImageData(c.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(u,i,a),u.putImageData(c,0,0),i},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=t.render(e,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}(me);var ye={},be=we;function Ee(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function Ae(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}ye.render=function(t,e,r){var n=be.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Ee(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Ee(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var c=Math.floor(u%e),s=Math.floor(u/e);c||i||(i=!0),t[u]?(a++,u>0&&c>0&&t[u-1]||(n+=i?Ae("M",c+r,.5+s+r):Ae("m",o,0),o=0,i=!1),c+1<e&&t[u+1]||(n+=Ae("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',s='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+s+' shape-rendering="crispEdges">'+u+c+"</svg>\n";return"function"==typeof r&&r(null,f),f};var Ce=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Ie=nt,Pe=me,Te=ye;function Be(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!Ce())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=Ie.create(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var c=Ie.create(r,n);o(null,t(c,e,n))}catch(s){o(s)}}rt.create=Ie.create,rt.toCanvas=Be.bind(null,Pe.render),rt.toDataURL=Be.bind(null,Pe.renderToDataURL),rt.toString=Be.bind(null,(function(t,e,r){return Te.render(t,r)}));var Me=function(t){var e=p(),r=B().copyCurrentRawLink,a=n(M(""),2),u=a[0],s=a[1];rt.toDataURL(c.raw_url,{type:"image/jpeg",scale:2}).then((function(t){return s(t)}));var f=n(M(!1),2),l=f[0],h=f[1],d=n(M(!1),2),g=d[0],v=d[1];return o(tt,{get children(){return[o(N,{spacing:"$2",get children(){return[o(E,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return e("home.toolbar.copy_link")}}),o(R,{get opened(){return l()||g()},motionPreset:"none",get children(){return[o(x,{as:S,get icon(){return o(L,{})},"aria-label":"QRCode",colorScheme:"warning",onClick:function(){h(!l())},onMouseOver:function(){return v(!0)},onMouseOut:function(){return v(!1)}}),o(j,{width:"fit-content",get children(){return[o(k,{}),o(U,{get children(){return o(i,{maxWidth:"156px",get src(){return u()},alt:"下载链接二维码",objectFit:"cover"})}})]}})]}}),o(E,{as:"a",get href(){return c.raw_url},target:"_blank",get children(){return e("home.preview.download")}})]}}),o(T,{get when(){return t.openWith},get children(){return o(et,{})}})]}})},Ne=Object.freeze(Object.defineProperty({__proto__:null,Download:Me,default:Me},Symbol.toStringTag,{value:"Module"})),Re=function(t){var e=w().currentObjLink,r=v((function(){return P(t.scheme,{raw_url:c.raw_url,name:c.obj.name,d_url:e(!0),ts:!0})}));return o(D,{w:"$full",h:"70vh",get children(){return[o(O.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(a,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:Z,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return _()},p:"$1",boxSize:"$7"})]}})},xe=[{name:"HTML 渲染",exts:["html"],component:z((function(){return $((function(){return r.import("./html-legacy.3cdeba57.js")}),void 0)}))},{name:"在线阿里视频",type:X.VIDEO,provider:/^Aliyundrive(Open)?$/,component:z((function(){return $((function(){return r.import("./aliyun_video-legacy.3acce79d.js")}),void 0)}))},{name:"Markdown 在线预览",type:X.TEXT,component:z((function(){return $((function(){return r.import("./markdown-legacy.c3176543.js")}),void 0)}))},{name:"Markdown 自动换行",type:X.TEXT,component:z((function(){return $((function(){return r.import("./markdown_with_word_wrap-legacy.1ef99f83.js")}),void 0)}))},{name:"打开 URL",exts:["url"],component:z((function(){return $((function(){return r.import("./url-legacy.20f65eea.js")}),void 0)}))},{name:"TXT 在线预览",type:X.TEXT,exts:["url"],component:z((function(){return $((function(){return r.import("./text-editor-legacy.402cac8c.js")}),void 0)}))},{name:"在线图片预览",type:X.IMAGE,component:z((function(){return $((function(){return r.import("./image-legacy.d0339beb.js")}),void 0)}))},{name:"在线视频播放",type:X.VIDEO,component:z((function(){return $((function(){return r.import("./video-legacy.6ee08d1f.js")}),void 0)}))},{name:"在线播放音乐",type:X.AUDIO,component:z((function(){return $((function(){return r.import("./audio-legacy.2eed2b9a.js")}),void 0)}))},{name:"IPA 文件",exts:["ipa","tipa"],component:z((function(){return $((function(){return r.import("./ipa-legacy.2268c133.js")}),void 0)}))},{name:"PLIST 文件",exts:["plist"],component:z((function(){return $((function(){return r.import("./plist-legacy.ba46441c.js")}),void 0)}))},{name:"在线办公文档",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:z((function(){return $((function(){return r.import("./aliyun_office-legacy.ba6efb4c.js")}),void 0)}))},{name:"播放终端录屏",exts:["cast"],component:z((function(){return $((function(){return r.import("./asciinema-legacy.b6c6cefb.js")}),void 0)}))}],Se=function(t){var e,r=F().searchParams,n=X[null===(e=r.type)||void 0===e?void 0:e.toUpperCase()],i=[];return xe.forEach((function(e){var r;e.provider&&!e.provider.test(t.provider)||(e.type===t.type||n&&e.type===n||"*"===e.exts||null!==(r=e.exts)&&void 0!==r&&r.includes(H(t.name).toLowerCase()))&&i.push({name:e.name,component:e.component})})),K(t.name).forEach((function(t){var e;i.push({name:t.key,component:(e=t.value,function(){return o(Re,{scheme:e})})})})),i.push({name:"下载保存文件",component:z((function(){return $((function(){return Promise.resolve().then((function(){return Ne}))}),void 0)}))}),i},Le=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var t=v((function(){return Se(e(e({},c.obj),{},{provider:c.provider}))})),r=n(M(t()[0]),2),i=r[0],a=r[1];return o(T,{get when(){return t().length>1},get fallback(){return o(Me,{openWith:!0})},get children(){return o(s,{w:"$full",spacing:"$2",get children(){return[o(N,{w:"$full",spacing:"$2",get children(){return[o(J,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){a(t().find((function(t){return t.name===e})))},get options(){return t().map((function(t){return{value:t.name}}))}}),o(et,{})]}}),o(Y,{get fallback(){return o(V,{})},get children(){return o(Q,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));t("a",Le)}}}))}();
