(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))g(B);new MutationObserver(B=>{for(const Q of B)if(Q.type==="childList")for(const i of Q.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function I(B){const Q={};return B.integrity&&(Q.integrity=B.integrity),B.referrerPolicy&&(Q.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?Q.credentials="include":B.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(B){if(B.ep)return;B.ep=!0;const Q=I(B);fetch(B.href,Q)}})();const KA={mouseClickMS:200,backgroundColor:15658734,wallColor:14540253,lightColor:16777215,lightShadowMapSize:2048,boxDimensions:{x:6,y:6,z:6},wallThickness:.2,launchVelocityFactor:3,object:{restitution:1,density:1,friction:0,sizeLow:1,sizeHigh:6,sizeDefault:3,sizeScale:1/6},sound:{chromaticScale:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],octaveLow:2,octaveHigh:7,volLow:-12,volHigh:0,rootDefault:"D",scaleDefault:"pentatonic",sets:{diatonicMajor:[0,2,4,5,7,9,11],diatonicMinor:[0,2,3,5,7,8,10],chromatic:[0,1,2,3,4,5,6,7,8,9,10,11],pentatonic:[0,2,4,7,9],bluesMinor:[0,3,5,6,7,10],bluesMajor:[0,2,3,4,7,9],octatonic1:[0,1,3,4,6,7,9,10],octatonic2:[0,2,3,5,6,8,9,11],wholeTone:[0,2,4,6,8,10]}}},qD="15.0.4",Ma=(C,A,I)=>({endTime:A,insertTime:I,type:"exponentialRampToValue",value:C}),Ua=(C,A,I)=>({endTime:A,insertTime:I,type:"linearRampToValue",value:C}),uo=(C,A)=>({startTime:A,type:"setValue",value:C}),YD=(C,A,I)=>({duration:I,startTime:A,type:"setValueCurve",values:C}),fD=(C,A,{startTime:I,target:g,timeConstant:B})=>g+(A-g)*Math.exp((I-C)/B),lQ=C=>C.type==="exponentialRampToValue",mE=C=>C.type==="linearRampToValue",CB=C=>lQ(C)||mE(C),Ze=C=>C.type==="setValue",uC=C=>C.type==="setValueCurve",HE=(C,A,I,g)=>{const B=C[A];return B===void 0?g:CB(B)||Ze(B)?B.value:uC(B)?B.values[B.values.length-1]:fD(I,HE(C,A-1,B.startTime,g),B)},Na=(C,A,I,g,B)=>I===void 0?[g.insertTime,B]:CB(I)?[I.endTime,I.value]:Ze(I)?[I.startTime,I.value]:uC(I)?[I.startTime+I.duration,I.values[I.values.length-1]]:[I.startTime,HE(C,A-1,I.startTime,B)],qo=C=>C.type==="cancelAndHold",Yo=C=>C.type==="cancelScheduledValues",jC=C=>qo(C)||Yo(C)?C.cancelTime:lQ(C)||mE(C)?C.endTime:C.startTime,Ka=(C,A,I,{endTime:g,value:B})=>I===B?B:0<I&&0<B||I<0&&B<0?I*(B/I)**((C-A)/(g-A)):0,Ja=(C,A,I,{endTime:g,value:B})=>I+(C-A)/(g-A)*(B-I),ac=(C,A)=>{const I=Math.floor(A),g=Math.ceil(A);return I===g?C[I]:(1-(A-I))*C[I]+(1-(g-A))*C[g]},nc=(C,{duration:A,startTime:I,values:g})=>{const B=(C-I)/A*(g.length-1);return ac(g,B)},$i=C=>C.type==="setTarget";class Dc{constructor(A){this._automationEvents=[],this._currenTime=0,this._defaultValue=A}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(A){const I=jC(A);if(qo(A)||Yo(A)){const g=this._automationEvents.findIndex(Q=>Yo(A)&&uC(Q)?Q.startTime+Q.duration>=I:jC(Q)>=I),B=this._automationEvents[g];if(g!==-1&&(this._automationEvents=this._automationEvents.slice(0,g)),qo(A)){const Q=this._automationEvents[this._automationEvents.length-1];if(B!==void 0&&CB(B)){if(Q!==void 0&&$i(Q))throw new Error("The internal list is malformed.");const i=Q===void 0?B.insertTime:uC(Q)?Q.startTime+Q.duration:jC(Q),E=Q===void 0?this._defaultValue:uC(Q)?Q.values[Q.values.length-1]:Q.value,t=lQ(B)?Ka(I,i,E,B):Ja(I,i,E,B),o=lQ(B)?Ma(t,I,this._currenTime):Ua(t,I,this._currenTime);this._automationEvents.push(o)}if(Q!==void 0&&$i(Q)&&this._automationEvents.push(uo(this.getValue(I),I)),Q!==void 0&&uC(Q)&&Q.startTime+Q.duration>I){const i=I-Q.startTime,E=(Q.values.length-1)/Q.duration,t=Math.max(2,1+Math.ceil(i*E)),o=i/(t-1)*E,e=Q.values.slice(0,t);if(o<1)for(let s=1;s<t;s+=1){const a=o*s%1;e[s]=Q.values[s-1]*(1-a)+Q.values[s]*a}this._automationEvents[this._automationEvents.length-1]=YD(e,Q.startTime,i)}}}else{const g=this._automationEvents.findIndex(i=>jC(i)>I),B=g===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[g-1];if(B!==void 0&&uC(B)&&jC(B)+B.duration>I)return!1;const Q=lQ(A)?Ma(A.value,A.endTime,this._currenTime):mE(A)?Ua(A.value,I,this._currenTime):A;if(g===-1)this._automationEvents.push(Q);else{if(uC(A)&&I+A.duration>jC(this._automationEvents[g]))return!1;this._automationEvents.splice(g,0,Q)}}return!0}flush(A){const I=this._automationEvents.findIndex(g=>jC(g)>A);if(I>1){const g=this._automationEvents.slice(I-1),B=g[0];$i(B)&&g.unshift(uo(HE(this._automationEvents,I-2,B.startTime,this._defaultValue),B.startTime)),this._automationEvents=g}}getValue(A){if(this._automationEvents.length===0)return this._defaultValue;const I=this._automationEvents.findIndex(i=>jC(i)>A),g=this._automationEvents[I],B=(I===-1?this._automationEvents.length:I)-1,Q=this._automationEvents[B];if(Q!==void 0&&$i(Q)&&(g===void 0||!CB(g)||g.insertTime>A))return fD(A,HE(this._automationEvents,B-1,Q.startTime,this._defaultValue),Q);if(Q!==void 0&&Ze(Q)&&(g===void 0||!CB(g)))return Q.value;if(Q!==void 0&&uC(Q)&&(g===void 0||!CB(g)||Q.startTime+Q.duration>A))return A<Q.startTime+Q.duration?nc(A,Q):Q.values[Q.values.length-1];if(Q!==void 0&&CB(Q)&&(g===void 0||!CB(g)))return Q.value;if(g!==void 0&&lQ(g)){const[i,E]=Na(this._automationEvents,B,Q,g,this._defaultValue);return Ka(A,i,E,g)}if(g!==void 0&&mE(g)){const[i,E]=Na(this._automationEvents,B,Q,g,this._defaultValue);return Ja(A,i,E,g)}return this._defaultValue}}const hc=C=>({cancelTime:C,type:"cancelAndHold"}),rc=C=>({cancelTime:C,type:"cancelScheduledValues"}),cc=(C,A)=>({endTime:A,type:"exponentialRampToValue",value:C}),lc=(C,A)=>({endTime:A,type:"linearRampToValue",value:C}),Sc=(C,A,I)=>({startTime:A,target:C,timeConstant:I,type:"setTarget"}),wc=()=>new DOMException("","AbortError"),Gc=C=>(A,I,[g,B,Q],i)=>{C(A[B],[I,g,Q],E=>E[0]===I&&E[1]===g,i)},kc=C=>(A,I,g)=>{const B=[];for(let Q=0;Q<g.numberOfInputs;Q+=1)B.push(new Set);C.set(A,{activeInputs:B,outputs:new Set,passiveInputs:new WeakMap,renderer:I})},yc=C=>(A,I)=>{C.set(A,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:I})},pQ=new WeakSet,LD=new WeakMap,We=new WeakMap,mD=new WeakMap,Pe=new WeakMap,at=new WeakMap,HD=new WeakMap,fo=new WeakMap,Lo=new WeakMap,mo=new WeakMap,TD={construct(){return TD}},Mc=C=>{try{const A=new Proxy(C,TD);new A}catch{return!1}return!0},Fa=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,pa=(C,A)=>{const I=[];let g=C.replace(/^[\s]+/,""),B=g.match(Fa);for(;B!==null;){const Q=B[1].slice(1,-1),i=B[0].replace(/([\s]+)?;?$/,"").replace(Q,new URL(Q,A).toString());I.push(i),g=g.slice(B[0].length).replace(/^[\s]+/,""),B=g.match(Fa)}return[I.join(";"),g]},da=C=>{if(C!==void 0&&!Array.isArray(C))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Ra=C=>{if(!Mc(C))throw new TypeError("The given value for processorCtor should be a constructor.");if(C.prototype===null||typeof C.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Uc=(C,A,I,g,B,Q,i,E,t,o,e,s,a)=>{let n=0;return(c,l,h={credentials:"omit"})=>{const D=e.get(c);if(D!==void 0&&D.has(l))return Promise.resolve();const k=o.get(c);if(k!==void 0){const M=k.get(l);if(M!==void 0)return M}const G=Q(c),w=G.audioWorklet===void 0?B(l).then(([M,U])=>{const[J,K]=pa(M,U),y=`${J};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${K}
})})(window,'_AWGS')`;return I(y)}).then(()=>{const M=a._AWGS.pop();if(M===void 0)throw new SyntaxError;g(G.currentTime,G.sampleRate,()=>M(class{},void 0,(U,J)=>{if(U.trim()==="")throw A();const K=Lo.get(G);if(K!==void 0){if(K.has(U))throw A();Ra(J),da(J.parameterDescriptors),K.set(U,J)}else Ra(J),da(J.parameterDescriptors),Lo.set(G,new Map([[U,J]]))},G.sampleRate,void 0,void 0))}):Promise.all([B(l),Promise.resolve(C(s,s))]).then(([[M,U],J])=>{const K=n+1;n=K;const[y,S]=pa(M,U),H=`${y};((AudioWorkletProcessor,registerProcessor)=>{${S}
})(${J?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${J?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${J?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${K}',class extends AudioWorkletProcessor{process(){return !1}})`,Z=new Blob([H],{type:"application/javascript; charset=utf-8"}),x=URL.createObjectURL(Z);return G.audioWorklet.addModule(x,h).then(()=>{if(E(G))return G;const P=i(G);return P.audioWorklet.addModule(x,h).then(()=>P)}).then(P=>{if(t===null)throw new SyntaxError;try{new t(P,`__sac${K}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(x))});return k===void 0?o.set(c,new Map([[l,w]])):k.set(l,w),w.then(()=>{const M=e.get(c);M===void 0?e.set(c,new Set([l])):M.add(l)}).finally(()=>{const M=o.get(c);M!==void 0&&M.delete(l)}),w}},iC=(C,A)=>{const I=C.get(A);if(I===void 0)throw new Error("A value with the given key could not be found.");return I},nt=(C,A)=>{const I=Array.from(C).filter(A);if(I.length>1)throw Error("More than one element was found.");if(I.length===0)throw Error("No element was found.");const[g]=I;return C.delete(g),g},xD=(C,A,I,g)=>{const B=iC(C,A),Q=nt(B,i=>i[0]===I&&i[1]===g);return B.size===0&&C.delete(A),Q},qi=C=>iC(HD,C),dQ=C=>{if(pQ.has(C))throw new Error("The AudioNode is already stored.");pQ.add(C),qi(C).forEach(A=>A(!0))},bD=C=>"port"in C,Yi=C=>{if(!pQ.has(C))throw new Error("The AudioNode is not stored.");pQ.delete(C),qi(C).forEach(A=>A(!1))},Ho=(C,A)=>{!bD(C)&&A.every(I=>I.size===0)&&Yi(C)},Nc=(C,A,I,g,B,Q,i,E,t,o,e,s,a)=>{const n=new WeakMap;return(c,l,h,D,k)=>{const{activeInputs:G,passiveInputs:w}=Q(l),{outputs:M}=Q(c),U=E(c),J=K=>{const y=t(l),S=t(c);if(K){const p=xD(w,c,h,D);C(G,c,p,!1),!k&&!s(c)&&I(S,y,h,D),a(l)&&dQ(l)}else{const p=g(G,c,h,D);A(w,D,p,!1),!k&&!s(c)&&B(S,y,h,D);const R=i(l);if(R===0)e(l)&&Ho(l,G);else{const q=n.get(l);q!==void 0&&clearTimeout(q),n.set(l,setTimeout(()=>{e(l)&&Ho(l,G)},R*1e3))}}};return o(M,[l,h,D],K=>K[0]===l&&K[1]===h&&K[2]===D,!0)?(U.add(J),e(c)?C(G,c,[h,D,J],!0):A(w,D,[c,h,J],!0),!0):!1}},Kc=C=>(A,I,[g,B,Q],i)=>{const E=A.get(g);E===void 0?A.set(g,new Set([[B,I,Q]])):C(E,[B,I,Q],t=>t[0]===B&&t[1]===I,i)},Jc=C=>(A,I)=>{const g=C(A,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});I.connect(g).connect(A.destination);const B=()=>{I.removeEventListener("ended",B),I.disconnect(g),g.disconnect()};I.addEventListener("ended",B)},Fc=C=>(A,I)=>{C(A).add(I)},pc={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},dc=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=B(E),e={...pc,...t},s=g(o,e),a=Q(o)?A():null;super(E,!1,s,a),this._nativeAnalyserNode=s}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(E){this._nativeAnalyserNode.fftSize=E}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(E){const t=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=E,!(E>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=t,I()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(E){const t=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=E,!(this._nativeAnalyserNode.maxDecibels>E))throw this._nativeAnalyserNode.minDecibels=t,I()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(E){this._nativeAnalyserNode.smoothingTimeConstant=E}getByteFrequencyData(E){this._nativeAnalyserNode.getByteFrequencyData(E)}getByteTimeDomainData(E){this._nativeAnalyserNode.getByteTimeDomainData(E)}getFloatFrequencyData(E){this._nativeAnalyserNode.getFloatFrequencyData(E)}getFloatTimeDomainData(E){this._nativeAnalyserNode.getFloatTimeDomainData(E)}},ng=(C,A)=>C.context===A,Rc=(C,A,I)=>()=>{const g=new WeakMap,B=async(Q,i)=>{let E=A(Q);if(!ng(E,i)){const o={channelCount:E.channelCount,channelCountMode:E.channelCountMode,channelInterpretation:E.channelInterpretation,fftSize:E.fftSize,maxDecibels:E.maxDecibels,minDecibels:E.minDecibels,smoothingTimeConstant:E.smoothingTimeConstant};E=C(i,o)}return g.set(i,E),await I(Q,i,E),E};return{render(Q,i){const E=g.get(i);return E!==void 0?Promise.resolve(E):B(Q,i)}}},TE=C=>{try{C.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},kC=()=>new DOMException("","IndexSizeError"),Ve=C=>{C.getChannelData=(A=>I=>{try{return A.call(C,I)}catch(g){throw g.code===12?kC():g}})(C.getChannelData)},uc={numberOfChannels:1},qc=(C,A,I,g,B,Q,i,E)=>{let t=null;return class _D{constructor(e){if(B===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:s,numberOfChannels:a,sampleRate:n}={...uc,...e};t===null&&(t=new B(1,1,44100));const c=g!==null&&A(Q,Q)?new g({length:s,numberOfChannels:a,sampleRate:n}):t.createBuffer(a,s,n);if(c.numberOfChannels===0)throw I();return typeof c.copyFromChannel!="function"?(i(c),Ve(c)):A(TE,()=>TE(c))||E(c),C.add(c),c}static[Symbol.hasInstance](e){return e!==null&&typeof e=="object"&&Object.getPrototypeOf(e)===_D.prototype||C.has(e)}}},yg=-34028234663852886e22,cg=-yg,HC=C=>pQ.has(C),Yc={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},fc=(C,A,I,g,B,Q,i,E)=>class extends C{constructor(o,e){const s=Q(o),a={...Yc,...e},n=B(s,a),c=i(s),l=c?A():null;super(o,!1,n,l),this._audioBufferSourceNodeRenderer=l,this._isBufferNullified=!1,this._isBufferSet=a.buffer!==null,this._nativeAudioBufferSourceNode=n,this._onended=null,this._playbackRate=I(this,c,n.playbackRate,cg,yg)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(o){if(this._nativeAudioBufferSourceNode.buffer=o,o!==null){if(this._isBufferSet)throw g();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(o){this._nativeAudioBufferSourceNode.loop=o}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(o){this._nativeAudioBufferSourceNode.loopEnd=o}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(o){this._nativeAudioBufferSourceNode.loopStart=o}get onended(){return this._onended}set onended(o){const e=typeof o=="function"?E(this,o):null;this._nativeAudioBufferSourceNode.onended=e;const s=this._nativeAudioBufferSourceNode.onended;this._onended=s!==null&&s===e?o:s}get playbackRate(){return this._playbackRate}start(o=0,e=0,s){if(this._nativeAudioBufferSourceNode.start(o,e,s),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=s===void 0?[o,e]:[o,e,s]),this.context.state!=="closed"){dQ(this);const a=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",a),HC(this)&&Yi(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",a)}}stop(o=0){this._nativeAudioBufferSourceNode.stop(o),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=o)}},Lc=(C,A,I,g,B)=>()=>{const Q=new WeakMap;let i=null,E=null;const t=async(o,e)=>{let s=I(o);const a=ng(s,e);if(!a){const n={buffer:s.buffer,channelCount:s.channelCount,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,loop:s.loop,loopEnd:s.loopEnd,loopStart:s.loopStart,playbackRate:s.playbackRate.value};s=A(e,n),i!==null&&s.start(...i),E!==null&&s.stop(E)}return Q.set(e,s),a?await C(e,o.playbackRate,s.playbackRate):await g(e,o.playbackRate,s.playbackRate),await B(o,e,s),s};return{set start(o){i=o},set stop(o){E=o},render(o,e){const s=Q.get(e);return s!==void 0?Promise.resolve(s):t(o,e)}}},mc=C=>"playbackRate"in C,Hc=C=>"frequency"in C&&"gain"in C,Tc=C=>"offset"in C,xc=C=>!("frequency"in C)&&"gain"in C,bc=C=>"detune"in C&&"frequency"in C&&!("gain"in C),_c=C=>"pan"in C,lg=C=>iC(LD,C),fi=C=>iC(mD,C),To=(C,A)=>{const{activeInputs:I}=lg(C);I.forEach(B=>B.forEach(([Q])=>{A.includes(C)||To(Q,[...A,C])}));const g=mc(C)?[C.playbackRate]:bD(C)?Array.from(C.parameters.values()):Hc(C)?[C.Q,C.detune,C.frequency,C.gain]:Tc(C)?[C.offset]:xc(C)?[C.gain]:bc(C)?[C.detune,C.frequency]:_c(C)?[C.pan]:[];for(const B of g){const Q=fi(B);Q!==void 0&&Q.activeInputs.forEach(([i])=>To(i,A))}HC(C)&&Yi(C)},OD=C=>{To(C.destination,[])},Oc=C=>C===void 0||typeof C=="number"||typeof C=="string"&&(C==="balanced"||C==="interactive"||C==="playback"),vc=(C,A,I,g,B,Q,i,E,t)=>class extends C{constructor(e={}){if(t===null)throw new Error("Missing the native AudioContext constructor.");let s;try{s=new t(e)}catch(c){throw c.code===12&&c.message==="sampleRate is not in range"?I():c}if(s===null)throw g();if(!Oc(e.latencyHint))throw new TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(e.sampleRate!==void 0&&s.sampleRate!==e.sampleRate)throw I();super(s,2);const{latencyHint:a}=e,{sampleRate:n}=s;if(this._baseLatency=typeof s.baseLatency=="number"?s.baseLatency:a==="balanced"?512/n:a==="interactive"||a===void 0?256/n:a==="playback"?1024/n:Math.max(2,Math.min(128,Math.round(a*n/128)))*128/n,this._nativeAudioContext=s,t.name==="webkitAudioContext"?(this._nativeGainNode=s.createGain(),this._nativeOscillatorNode=s.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(s.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,s.state==="running"){this._state="suspended";const c=()=>{this._state==="suspended"&&(this._state=null),s.removeEventListener("statechange",c)};s.addEventListener("statechange",c)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw A()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),OD(this)}))}createMediaElementSource(e){return new B(this,{mediaElement:e})}createMediaStreamDestination(){return new Q(this)}createMediaStreamSource(e){return new i(this,{mediaStream:e})}createMediaStreamTrackSource(e){return new E(this,{mediaStreamTrack:e})}resume(){return this._state==="suspended"?new Promise((e,s)=>{const a=()=>{this._nativeAudioContext.removeEventListener("statechange",a),this._nativeAudioContext.state==="running"?e():this.resume().then(e,s)};this._nativeAudioContext.addEventListener("statechange",a)}):this._nativeAudioContext.resume().catch(e=>{throw e===void 0||e.code===15?A():e})}suspend(){return this._nativeAudioContext.suspend().catch(e=>{throw e===void 0?A():e})}},Zc=(C,A,I,g,B,Q,i,E)=>class extends C{constructor(o,e){const s=Q(o),a=i(s),n=B(s,e,a),c=a?A(E):null;super(o,!1,n,c),this._isNodeOfNativeOfflineAudioContext=a,this._nativeAudioDestinationNode=n}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(o){if(this._isNodeOfNativeOfflineAudioContext)throw g();if(o>this._nativeAudioDestinationNode.maxChannelCount)throw I();this._nativeAudioDestinationNode.channelCount=o}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(o){if(this._isNodeOfNativeOfflineAudioContext)throw g();this._nativeAudioDestinationNode.channelCountMode=o}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Wc=C=>{const A=new WeakMap,I=async(g,B)=>{const Q=B.destination;return A.set(B,Q),await C(g,B,Q),Q};return{render(g,B){const Q=A.get(B);return Q!==void 0?Promise.resolve(Q):I(g,B)}}},Pc=(C,A,I,g,B,Q,i,E)=>(t,o)=>{const e=o.listener,s=()=>{const M=new Float32Array(1),U=A(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),J=i(o);let K=!1,y=[0,0,-1,0,1,0],S=[0,0,0];const p=()=>{if(K)return;K=!0;const Z=g(o,256,9,0);Z.onaudioprocess=({inputBuffer:x})=>{const P=[Q(x,M,0),Q(x,M,1),Q(x,M,2),Q(x,M,3),Q(x,M,4),Q(x,M,5)];P.some((z,gA)=>z!==y[gA])&&(e.setOrientation(...P),y=P);const O=[Q(x,M,6),Q(x,M,7),Q(x,M,8)];O.some((z,gA)=>z!==S[gA])&&(e.setPosition(...O),S=O)},U.connect(Z)},R=Z=>x=>{x!==y[Z]&&(y[Z]=x,e.setOrientation(...y))},q=Z=>x=>{x!==S[Z]&&(S[Z]=x,e.setPosition(...S))},H=(Z,x,P)=>{const O=I(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:x});O.connect(U,0,Z),O.start(),Object.defineProperty(O.offset,"defaultValue",{get(){return x}});const z=C({context:t},J,O.offset,cg,yg);return E(z,"value",gA=>()=>gA.call(z),gA=>iA=>{try{gA.call(z,iA)}catch(GA){if(GA.code!==9)throw GA}p(),J&&P(iA)}),z.cancelAndHoldAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.cancelAndHoldAtTime),z.cancelScheduledValues=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.cancelScheduledValues),z.exponentialRampToValueAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.exponentialRampToValueAtTime),z.linearRampToValueAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.linearRampToValueAtTime),z.setTargetAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.setTargetAtTime),z.setValueAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.setValueAtTime),z.setValueCurveAtTime=(gA=>J?()=>{throw B()}:(...iA)=>{const GA=gA.apply(z,iA);return p(),GA})(z.setValueCurveAtTime),z};return{forwardX:H(0,0,R(0)),forwardY:H(1,0,R(1)),forwardZ:H(2,-1,R(2)),positionX:H(6,0,q(0)),positionY:H(7,0,q(1)),positionZ:H(8,0,q(2)),upX:H(3,0,R(3)),upY:H(4,1,R(4)),upZ:H(5,0,R(5))}},{forwardX:a,forwardY:n,forwardZ:c,positionX:l,positionY:h,positionZ:D,upX:k,upY:G,upZ:w}=e.forwardX===void 0?s():e;return{get forwardX(){return a},get forwardY(){return n},get forwardZ(){return c},get positionX(){return l},get positionY(){return h},get positionZ(){return D},get upX(){return k},get upY(){return G},get upZ(){return w}}},xE=C=>"context"in C,Li=C=>xE(C[0]),WB=(C,A,I,g)=>{for(const B of C)if(I(B)){if(g)return!1;throw Error("The set contains at least one similar element.")}return C.add(A),!0},ua=(C,A,[I,g],B)=>{WB(C,[A,I,g],Q=>Q[0]===A&&Q[1]===I,B)},qa=(C,[A,I,g],B)=>{const Q=C.get(A);Q===void 0?C.set(A,new Set([[I,g]])):WB(Q,[I,g],i=>i[0]===I,B)},vQ=C=>"inputs"in C,bE=(C,A,I,g)=>{if(vQ(A)){const B=A.inputs[g];return C.connect(B,I,0),[B,I,0]}return C.connect(A,I,g),[A,I,g]},vD=(C,A,I)=>{for(const g of C)if(g[0]===A&&g[1]===I)return C.delete(g),g;return null},Vc=(C,A,I)=>nt(C,g=>g[0]===A&&g[1]===I),ZD=(C,A)=>{if(!qi(C).delete(A))throw new Error("Missing the expected event listener.")},WD=(C,A,I)=>{const g=iC(C,A),B=nt(g,Q=>Q[0]===I);return g.size===0&&C.delete(A),B},_E=(C,A,I,g)=>{vQ(A)?C.disconnect(A.inputs[g],I,0):C.disconnect(A,I,g)},KI=C=>iC(We,C),wi=C=>iC(Pe,C),TB=C=>fo.has(C),FE=C=>!pQ.has(C),Ya=(C,A)=>new Promise(I=>{if(A!==null)I(!0);else{const g=C.createScriptProcessor(256,1,1),B=C.createGain(),Q=C.createBuffer(1,2,44100),i=Q.getChannelData(0);i[0]=1,i[1]=1;const E=C.createBufferSource();E.buffer=Q,E.loop=!0,E.connect(g).connect(C.destination),E.connect(B),E.disconnect(B),g.onaudioprocess=t=>{const o=t.inputBuffer.getChannelData(0);Array.prototype.some.call(o,e=>e===1)?I(!0):I(!1),E.stop(),g.onaudioprocess=null,E.disconnect(g),g.disconnect(C.destination)},E.start()}}),Vt=(C,A)=>{const I=new Map;for(const g of C)for(const B of g){const Q=I.get(B);I.set(B,Q===void 0?1:Q+1)}I.forEach((g,B)=>A(B,g))},OE=C=>"context"in C,jc=C=>{const A=new Map;C.connect=(I=>(g,B=0,Q=0)=>{const i=OE(g)?I(g,B,Q):I(g,B),E=A.get(g);return E===void 0?A.set(g,[{input:Q,output:B}]):E.every(t=>t.input!==Q||t.output!==B)&&E.push({input:Q,output:B}),i})(C.connect.bind(C)),C.disconnect=(I=>(g,B,Q)=>{if(I.apply(C),g===void 0)A.clear();else if(typeof g=="number")for(const[i,E]of A){const t=E.filter(o=>o.output!==g);t.length===0?A.delete(i):A.set(i,t)}else if(A.has(g))if(B===void 0)A.delete(g);else{const i=A.get(g);if(i!==void 0){const E=i.filter(t=>t.output!==B&&(t.input!==Q||Q===void 0));E.length===0?A.delete(g):A.set(g,E)}}for(const[i,E]of A)E.forEach(t=>{OE(i)?C.connect(i,t.output,t.input):C.connect(i,t.output)})})(C.disconnect)},Xc=(C,A,I,g)=>{const{activeInputs:B,passiveInputs:Q}=fi(A),{outputs:i}=lg(C),E=qi(C),t=o=>{const e=KI(C),s=wi(A);if(o){const a=WD(Q,C,I);ua(B,C,a,!1),!g&&!TB(C)&&e.connect(s,I)}else{const a=Vc(B,C,I);qa(Q,a,!1),!g&&!TB(C)&&e.disconnect(s,I)}};return WB(i,[A,I],o=>o[0]===A&&o[1]===I,!0)?(E.add(t),HC(C)?ua(B,C,[I,t],!0):qa(Q,[C,I,t],!0),!0):!1},zc=(C,A,I,g)=>{const{activeInputs:B,passiveInputs:Q}=lg(A),i=vD(B[g],C,I);return i===null?[xD(Q,C,I,g)[2],!1]:[i[2],!0]},$c=(C,A,I)=>{const{activeInputs:g,passiveInputs:B}=fi(A),Q=vD(g,C,I);return Q===null?[WD(B,C,I)[1],!1]:[Q[2],!0]},je=(C,A,I,g,B)=>{const[Q,i]=zc(C,I,g,B);if(Q!==null&&(ZD(C,Q),i&&!A&&!TB(C)&&_E(KI(C),KI(I),g,B)),HC(I)){const{activeInputs:E}=lg(I);Ho(I,E)}},Xe=(C,A,I,g)=>{const[B,Q]=$c(C,I,g);B!==null&&(ZD(C,B),Q&&!A&&!TB(C)&&KI(C).disconnect(wi(I),g))},Al=(C,A)=>{const I=lg(C),g=[];for(const B of I.outputs)Li(B)?je(C,A,...B):Xe(C,A,...B),g.push(B[0]);return I.outputs.clear(),g},Il=(C,A,I)=>{const g=lg(C),B=[];for(const Q of g.outputs)Q[1]===I&&(Li(Q)?je(C,A,...Q):Xe(C,A,...Q),B.push(Q[0]),g.outputs.delete(Q));return B},gl=(C,A,I,g,B)=>{const Q=lg(C);return Array.from(Q.outputs).filter(i=>i[0]===I&&(g===void 0||i[1]===g)&&(B===void 0||i[2]===B)).map(i=>(Li(i)?je(C,A,...i):Xe(C,A,...i),Q.outputs.delete(i),i[0]))},Cl=(C,A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l)=>class extends o{constructor(D,k,G,w){super(G),this._context=D,this._nativeAudioNode=G;const M=e(D);s(M)&&I(Ya,()=>Ya(M,l))!==!0&&jc(G),We.set(this,G),HD.set(this,new Set),D.state!=="closed"&&k&&dQ(this),C(this,w,G)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(D){this._nativeAudioNode.channelCount=D}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(D){this._nativeAudioNode.channelCountMode=D}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(D){this._nativeAudioNode.channelInterpretation=D}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(D,k=0,G=0){if(k<0||k>=this._nativeAudioNode.numberOfOutputs)throw B();const w=e(this._context),M=c(w);if(a(D)||n(D))throw Q();if(xE(D)){const K=KI(D);try{const S=bE(this._nativeAudioNode,K,k,G),p=FE(this);(M||p)&&this._nativeAudioNode.disconnect(...S),this.context.state!=="closed"&&!p&&FE(D)&&dQ(D)}catch(S){throw S.code===12?Q():S}if(A(this,D,k,G,M)){const S=t([this],D);Vt(S,g(M))}return D}const U=wi(D);if(U.name==="playbackRate"&&U.maxValue===1024)throw i();try{this._nativeAudioNode.connect(U,k),(M||FE(this))&&this._nativeAudioNode.disconnect(U,k)}catch(K){throw K.code===12?Q():K}if(Xc(this,D,k,M)){const K=t([this],D);Vt(K,g(M))}}disconnect(D,k,G){let w;const M=e(this._context),U=c(M);if(D===void 0)w=Al(this,U);else if(typeof D=="number"){if(D<0||D>=this.numberOfOutputs)throw B();w=Il(this,U,D)}else{if(k!==void 0&&(k<0||k>=this.numberOfOutputs)||xE(D)&&G!==void 0&&(G<0||G>=D.numberOfInputs))throw B();if(w=gl(this,U,D,k,G),w.length===0)throw Q()}for(const J of w){const K=t([this],J);Vt(K,E)}}},Bl=(C,A,I,g,B,Q,i,E,t,o,e,s,a)=>(n,c,l,h=null,D=null)=>{const k=l.value,G=new Dc(k),w=c?g(G):null,M={get defaultValue(){return k},get maxValue(){return h===null?l.maxValue:h},get minValue(){return D===null?l.minValue:D},get value(){return l.value},set value(U){l.value=U,M.setValueAtTime(U,n.context.currentTime)},cancelAndHoldAtTime(U){if(typeof l.cancelAndHoldAtTime=="function")w===null&&G.flush(n.context.currentTime),G.add(B(U)),l.cancelAndHoldAtTime(U);else{const J=Array.from(G).pop();w===null&&G.flush(n.context.currentTime),G.add(B(U));const K=Array.from(G).pop();l.cancelScheduledValues(U),J!==K&&K!==void 0&&(K.type==="exponentialRampToValue"?l.exponentialRampToValueAtTime(K.value,K.endTime):K.type==="linearRampToValue"?l.linearRampToValueAtTime(K.value,K.endTime):K.type==="setValue"?l.setValueAtTime(K.value,K.startTime):K.type==="setValueCurve"&&l.setValueCurveAtTime(K.values,K.startTime,K.duration))}return M},cancelScheduledValues(U){return w===null&&G.flush(n.context.currentTime),G.add(Q(U)),l.cancelScheduledValues(U),M},exponentialRampToValueAtTime(U,J){if(U===0)throw new RangeError;if(!Number.isFinite(J)||J<0)throw new RangeError;const K=n.context.currentTime;return w===null&&G.flush(K),Array.from(G).length===0&&(G.add(o(k,K)),l.setValueAtTime(k,K)),G.add(i(U,J)),l.exponentialRampToValueAtTime(U,J),M},linearRampToValueAtTime(U,J){const K=n.context.currentTime;return w===null&&G.flush(K),Array.from(G).length===0&&(G.add(o(k,K)),l.setValueAtTime(k,K)),G.add(E(U,J)),l.linearRampToValueAtTime(U,J),M},setTargetAtTime(U,J,K){return w===null&&G.flush(n.context.currentTime),G.add(t(U,J,K)),l.setTargetAtTime(U,J,K),M},setValueAtTime(U,J){return w===null&&G.flush(n.context.currentTime),G.add(o(U,J)),l.setValueAtTime(U,J),M},setValueCurveAtTime(U,J,K){const y=U instanceof Float32Array?U:new Float32Array(U);if(s!==null&&s.name==="webkitAudioContext"){const S=J+K,p=n.context.sampleRate,R=Math.ceil(J*p),q=Math.floor(S*p),H=q-R,Z=new Float32Array(H);for(let P=0;P<H;P+=1){const O=(y.length-1)/K*((R+P)/p-J),z=Math.floor(O),gA=Math.ceil(O);Z[P]=z===gA?y[z]:(1-(O-z))*y[z]+(1-(gA-O))*y[gA]}w===null&&G.flush(n.context.currentTime),G.add(e(Z,J,K)),l.setValueCurveAtTime(Z,J,K);const x=q/p;x<S&&a(M,Z[Z.length-1],x),a(M,y[y.length-1],S)}else w===null&&G.flush(n.context.currentTime),G.add(e(y,J,K)),l.setValueCurveAtTime(y,J,K);return M}};return I.set(M,l),A.set(M,n),C(M,w),M},Ql=C=>({replay(A){for(const I of C)if(I.type==="exponentialRampToValue"){const{endTime:g,value:B}=I;A.exponentialRampToValueAtTime(B,g)}else if(I.type==="linearRampToValue"){const{endTime:g,value:B}=I;A.linearRampToValueAtTime(B,g)}else if(I.type==="setTarget"){const{startTime:g,target:B,timeConstant:Q}=I;A.setTargetAtTime(B,g,Q)}else if(I.type==="setValue"){const{startTime:g,value:B}=I;A.setValueAtTime(B,g)}else if(I.type==="setValueCurve"){const{duration:g,startTime:B,values:Q}=I;A.setValueCurveAtTime(Q,B,g)}else throw new Error("Can't apply an unknown automation.")}});class PD{constructor(A){this._map=new Map(A)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(A,I=null){return this._map.forEach((g,B)=>A.call(I,g,B,this))}get(A){return this._map.get(A)}has(A){return this._map.has(A)}keys(){return this._map.keys()}values(){return this._map.values()}}const il={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},El=(C,A,I,g,B,Q,i,E,t,o,e,s,a,n)=>class extends A{constructor(l,h,D){var k;const G=E(l),w=t(G),M=e({...il,...D});a(M);const U=Lo.get(G),J=U?.get(h),K=w||G.state!=="closed"?G:(k=i(G))!==null&&k!==void 0?k:G,y=B(K,w?null:l.baseLatency,o,h,J,M),S=w?g(h,M,J):null;super(l,!0,y,S);const p=[];y.parameters.forEach((q,H)=>{const Z=I(this,w,q);p.push([H,Z])}),this._nativeAudioWorkletNode=y,this._onprocessorerror=null,this._parameters=new PD(p),w&&C(G,this);const{activeInputs:R}=Q(this);s(y,R)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(l){const h=typeof l=="function"?n(this,l):null;this._nativeAudioWorkletNode.onprocessorerror=h;const D=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=D!==null&&D===h?l:D}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function vE(C,A,I,g,B){if(typeof C.copyFromChannel=="function")A[I].byteLength===0&&(A[I]=new Float32Array(128)),C.copyFromChannel(A[I],g,B);else{const Q=C.getChannelData(g);if(A[I].byteLength===0)A[I]=Q.slice(B,B+128);else{const i=new Float32Array(Q.buffer,B*Float32Array.BYTES_PER_ELEMENT,128);A[I].set(i)}}}const VD=(C,A,I,g,B)=>{typeof C.copyToChannel=="function"?A[I].byteLength!==0&&C.copyToChannel(A[I],g,B):A[I].byteLength!==0&&C.getChannelData(g).set(A[I],B)},ZE=(C,A)=>{const I=[];for(let g=0;g<C;g+=1){const B=[],Q=typeof A=="number"?A:A[g];for(let i=0;i<Q;i+=1)B.push(new Float32Array(128));I.push(B)}return I},tl=(C,A)=>{const I=iC(mo,C),g=KI(A);return iC(I,g)},ol=async(C,A,I,g,B,Q,i)=>{const E=A===null?Math.ceil(C.context.length/128)*128:A.length,t=g.channelCount*g.numberOfInputs,o=B.reduce((h,D)=>h+D,0),e=o===0?null:I.createBuffer(o,E,I.sampleRate);if(Q===void 0)throw new Error("Missing the processor constructor.");const s=lg(C),a=await tl(I,C),n=ZE(g.numberOfInputs,g.channelCount),c=ZE(g.numberOfOutputs,B),l=Array.from(C.parameters.keys()).reduce((h,D)=>({...h,[D]:new Float32Array(128)}),{});for(let h=0;h<E;h+=128){if(g.numberOfInputs>0&&A!==null)for(let D=0;D<g.numberOfInputs;D+=1)for(let k=0;k<g.channelCount;k+=1)vE(A,n[D],k,k,h);Q.parameterDescriptors!==void 0&&A!==null&&Q.parameterDescriptors.forEach(({name:D},k)=>{vE(A,l,D,t+k,h)});for(let D=0;D<g.numberOfInputs;D+=1)for(let k=0;k<B[D];k+=1)c[D][k].byteLength===0&&(c[D][k]=new Float32Array(128));try{const D=n.map((G,w)=>s.activeInputs[w].size===0?[]:G),k=i(h/I.sampleRate,I.sampleRate,()=>a.process(D,c,l));if(e!==null)for(let G=0,w=0;G<g.numberOfOutputs;G+=1){for(let M=0;M<B[G];M+=1)VD(e,c[G],M,w+M,h);w+=B[G]}if(!k)break}catch(D){C.dispatchEvent(new ErrorEvent("processorerror",{colno:D.colno,filename:D.filename,lineno:D.lineno,message:D.message}));break}}return e},el=(C,A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l)=>(h,D,k)=>{const G=new WeakMap;let w=null;const M=async(U,J)=>{let K=e(U),y=null;const S=ng(K,J),p=Array.isArray(D.outputChannelCount)?D.outputChannelCount:Array.from(D.outputChannelCount);if(s===null){const R=p.reduce((x,P)=>x+P,0),q=B(J,{channelCount:Math.max(1,R),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,R)}),H=[];for(let x=0;x<U.numberOfOutputs;x+=1)H.push(g(J,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[x]}));const Z=i(J,{channelCount:D.channelCount,channelCountMode:D.channelCountMode,channelInterpretation:D.channelInterpretation,gain:1});Z.connect=A.bind(null,H),Z.disconnect=t.bind(null,H),y=[q,H,Z]}else S||(K=new s(J,h));if(G.set(J,y===null?K:y[2]),y!==null){if(w===null){if(k===void 0)throw new Error("Missing the processor constructor.");if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const P=U.channelCount*U.numberOfInputs,O=k.parameterDescriptors===void 0?0:k.parameterDescriptors.length,z=P+O;w=ol(U,z===0?null:await(async()=>{const iA=new a(z,Math.ceil(U.context.length/128)*128,J.sampleRate),GA=[],ZA=[];for(let eA=0;eA<D.numberOfInputs;eA+=1)GA.push(i(iA,{channelCount:D.channelCount,channelCountMode:D.channelCountMode,channelInterpretation:D.channelInterpretation,gain:1})),ZA.push(B(iA,{channelCount:D.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:D.channelCount}));const X=await Promise.all(Array.from(U.parameters.values()).map(async eA=>{const tA=Q(iA,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:eA.value});return await n(iA,eA,tA.offset),tA})),$=g(iA,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,P+O)});for(let eA=0;eA<D.numberOfInputs;eA+=1){GA[eA].connect(ZA[eA]);for(let tA=0;tA<D.channelCount;tA+=1)ZA[eA].connect($,tA,eA*D.channelCount+tA)}for(const[eA,tA]of X.entries())tA.connect($,0,P+eA),tA.start(0);return $.connect(iA.destination),await Promise.all(GA.map(eA=>c(U,iA,eA))),l(iA)})(),J,D,p,k,o)}const R=await w,q=I(J,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[H,Z,x]=y;R!==null&&(q.buffer=R,q.start(0)),q.connect(H);for(let P=0,O=0;P<U.numberOfOutputs;P+=1){const z=Z[P];for(let gA=0;gA<p[P];gA+=1)H.connect(z,O+gA,gA);O+=p[P]}return x}if(S)for(const[R,q]of U.parameters.entries())await C(J,q,K.parameters.get(R));else for(const[R,q]of U.parameters.entries())await n(J,q,K.parameters.get(R));return await c(U,J,K),K};return{render(U,J){E(J,U);const K=G.get(J);return K!==void 0?Promise.resolve(K):M(U,J)}}},sl=(C,A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l,h,D,k,G)=>class extends c{constructor(M,U){super(M,U),this._nativeContext=M,this._audioWorklet=C===void 0?void 0:{addModule:(J,K)=>C(this,J,K)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new A(this)}createBiquadFilter(){return new B(this)}createBuffer(M,U,J){return new I({length:U,numberOfChannels:M,sampleRate:J})}createBufferSource(){return new g(this)}createChannelMerger(M=6){return new Q(this,{numberOfInputs:M})}createChannelSplitter(M=6){return new i(this,{numberOfOutputs:M})}createConstantSource(){return new E(this)}createConvolver(){return new t(this)}createDelay(M=1){return new e(this,{maxDelayTime:M})}createDynamicsCompressor(){return new s(this)}createGain(){return new a(this)}createIIRFilter(M,U){return new n(this,{feedback:U,feedforward:M})}createOscillator(){return new l(this)}createPanner(){return new h(this)}createPeriodicWave(M,U,J={disableNormalization:!1}){return new D(this,{...J,imag:U,real:M})}createStereoPanner(){return new k(this)}createWaveShaper(){return new G(this)}decodeAudioData(M,U,J){return o(this._nativeContext,M).then(K=>(typeof U=="function"&&U(K),K),K=>{throw typeof J=="function"&&J(K),K})}},al={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},nl=(C,A,I,g,B,Q,i,E)=>class extends C{constructor(o,e){const s=Q(o),a={...al,...e},n=B(s,a),c=i(s),l=c?I():null;super(o,!1,n,l),this._Q=A(this,c,n.Q,cg,yg),this._detune=A(this,c,n.detune,1200*Math.log2(cg),-1200*Math.log2(cg)),this._frequency=A(this,c,n.frequency,o.sampleRate/2,0),this._gain=A(this,c,n.gain,40*Math.log10(cg),yg),this._nativeBiquadFilterNode=n,E(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(o){this._nativeBiquadFilterNode.type=o}getFrequencyResponse(o,e,s){try{this._nativeBiquadFilterNode.getFrequencyResponse(o,e,s)}catch(a){throw a.code===11?g():a}if(o.length!==e.length||e.length!==s.length)throw g()}},Dl=(C,A,I,g,B)=>()=>{const Q=new WeakMap,i=async(E,t)=>{let o=I(E);const e=ng(o,t);if(!e){const s={Q:o.Q.value,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,detune:o.detune.value,frequency:o.frequency.value,gain:o.gain.value,type:o.type};o=A(t,s)}return Q.set(t,o),e?(await C(t,E.Q,o.Q),await C(t,E.detune,o.detune),await C(t,E.frequency,o.frequency),await C(t,E.gain,o.gain)):(await g(t,E.Q,o.Q),await g(t,E.detune,o.detune),await g(t,E.frequency,o.frequency),await g(t,E.gain,o.gain)),await B(E,t,o),o};return{render(E,t){const o=Q.get(t);return o!==void 0?Promise.resolve(o):i(E,t)}}},hl=(C,A)=>(I,g)=>{const B=A.get(I);if(B!==void 0)return B;const Q=C.get(I);if(Q!==void 0)return Q;try{const i=g();return i instanceof Promise?(C.set(I,i),i.catch(()=>!1).then(E=>(C.delete(I),A.set(I,E),E))):(A.set(I,i),i)}catch{return A.set(I,!1),!1}},rl={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},cl=(C,A,I,g,B)=>class extends C{constructor(i,E){const t=g(i),o={...rl,...E},e=I(t,o),s=B(t)?A():null;super(i,!1,e,s)}},ll=(C,A,I)=>()=>{const g=new WeakMap,B=async(Q,i)=>{let E=A(Q);if(!ng(E,i)){const o={channelCount:E.channelCount,channelCountMode:E.channelCountMode,channelInterpretation:E.channelInterpretation,numberOfInputs:E.numberOfInputs};E=C(i,o)}return g.set(i,E),await I(Q,i,E),E};return{render(Q,i){const E=g.get(i);return E!==void 0?Promise.resolve(E):B(Q,i)}}},Sl={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},wl=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=g(E),e=Q({...Sl,...t}),s=I(o,e),a=B(o)?A():null;super(E,!1,s,a)}},Gl=(C,A,I)=>()=>{const g=new WeakMap,B=async(Q,i)=>{let E=A(Q);if(!ng(E,i)){const o={channelCount:E.channelCount,channelCountMode:E.channelCountMode,channelInterpretation:E.channelInterpretation,numberOfOutputs:E.numberOfOutputs};E=C(i,o)}return g.set(i,E),await I(Q,i,E),E};return{render(Q,i){const E=g.get(i);return E!==void 0?Promise.resolve(E):B(Q,i)}}},kl=C=>(A,I,g)=>C(I,A,g),yl=C=>(A,I,g=0,B=0)=>{const Q=A[g];if(Q===void 0)throw C();return OE(I)?Q.connect(I,0,B):Q.connect(I,0)},Ml=C=>(A,I)=>{const g=C(A,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),B=A.createBuffer(1,2,44100);return g.buffer=B,g.loop=!0,g.connect(I),g.start(),()=>{g.stop(),g.disconnect(I)}},Ul={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Nl=(C,A,I,g,B,Q,i)=>class extends C{constructor(t,o){const e=B(t),s={...Ul,...o},a=g(e,s),n=Q(e),c=n?I():null;super(t,!1,a,c),this._constantSourceNodeRenderer=c,this._nativeConstantSourceNode=a,this._offset=A(this,n,a.offset,cg,yg),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(t){const o=typeof t=="function"?i(this,t):null;this._nativeConstantSourceNode.onended=o;const e=this._nativeConstantSourceNode.onended;this._onended=e!==null&&e===o?t:e}start(t=0){if(this._nativeConstantSourceNode.start(t),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=t),this.context.state!=="closed"){dQ(this);const o=()=>{this._nativeConstantSourceNode.removeEventListener("ended",o),HC(this)&&Yi(this)};this._nativeConstantSourceNode.addEventListener("ended",o)}}stop(t=0){this._nativeConstantSourceNode.stop(t),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=t)}},Kl=(C,A,I,g,B)=>()=>{const Q=new WeakMap;let i=null,E=null;const t=async(o,e)=>{let s=I(o);const a=ng(s,e);if(!a){const n={channelCount:s.channelCount,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,offset:s.offset.value};s=A(e,n),i!==null&&s.start(i),E!==null&&s.stop(E)}return Q.set(e,s),a?await C(e,o.offset,s.offset):await g(e,o.offset,s.offset),await B(o,e,s),s};return{set start(o){i=o},set stop(o){E=o},render(o,e){const s=Q.get(e);return s!==void 0?Promise.resolve(s):t(o,e)}}},Jl=C=>A=>(C[0]=A,C[0]),Fl={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},pl=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=g(E),e={...Fl,...t},s=I(o,e),n=B(o)?A():null;super(E,!1,s,n),this._isBufferNullified=!1,this._nativeConvolverNode=s,e.buffer!==null&&Q(this,e.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(E){if(this._nativeConvolverNode.buffer=E,E===null&&this._nativeConvolverNode.buffer!==null){const t=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=t.createBuffer(1,1,t.sampleRate),this._isBufferNullified=!0,Q(this,0)}else this._isBufferNullified=!1,Q(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(E){this._nativeConvolverNode.normalize=E}},dl=(C,A,I)=>()=>{const g=new WeakMap,B=async(Q,i)=>{let E=A(Q);if(!ng(E,i)){const o={buffer:E.buffer,channelCount:E.channelCount,channelCountMode:E.channelCountMode,channelInterpretation:E.channelInterpretation,disableNormalization:!E.normalize};E=C(i,o)}return g.set(i,E),vQ(E)?await I(Q,i,E.inputs[0]):await I(Q,i,E),E};return{render(Q,i){const E=g.get(i);return E!==void 0?Promise.resolve(E):B(Q,i)}}},Rl=(C,A)=>(I,g,B)=>{if(A===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new A(I,g,B)}catch(Q){throw Q.name==="SyntaxError"?C():Q}},ul=()=>new DOMException("","DataCloneError"),fa=C=>{const{port1:A,port2:I}=new MessageChannel;return new Promise(g=>{const B=()=>{I.onmessage=null,A.close(),I.close(),g()};I.onmessage=()=>B();try{A.postMessage(C,[C])}catch{}finally{B()}})},ql=(C,A,I,g,B,Q,i,E,t,o,e)=>(s,a)=>{const n=i(s)?s:Q(s);if(B.has(a)){const c=I();return Promise.reject(c)}try{B.add(a)}catch{}return A(t,()=>t(n))?n.decodeAudioData(a).then(c=>(fa(a).catch(()=>{}),A(E,()=>E(c))||e(c),C.add(c),c)):new Promise((c,l)=>{const h=async()=>{try{await fa(a)}catch{}},D=k=>{l(k),h()};try{n.decodeAudioData(a,k=>{typeof k.copyFromChannel!="function"&&(o(k),Ve(k)),C.add(k),h().then(()=>c(k))},k=>{D(k===null?g():k)})}catch(k){D(k)}})},Yl=(C,A,I,g,B,Q,i,E)=>(t,o)=>{const e=A.get(t);if(e===void 0)throw new Error("Missing the expected cycle count.");const s=Q(t.context),a=E(s);if(e===o){if(A.delete(t),!a&&i(t)){const n=g(t),{outputs:c}=I(t);for(const l of c)if(Li(l)){const h=g(l[0]);C(n,h,l[1],l[2])}else{const h=B(l[0]);n.connect(h,l[1])}}}else A.set(t,e-o)},fl={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Ll=(C,A,I,g,B,Q,i)=>class extends C{constructor(t,o){const e=B(t),s={...fl,...o},a=g(e,s),n=Q(e),c=n?I(s.maxDelayTime):null;super(t,!1,a,c),this._delayTime=A(this,n,a.delayTime),i(this,s.maxDelayTime)}get delayTime(){return this._delayTime}},ml=(C,A,I,g,B)=>Q=>{const i=new WeakMap,E=async(t,o)=>{let e=I(t);const s=ng(e,o);if(!s){const a={channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation,delayTime:e.delayTime.value,maxDelayTime:Q};e=A(o,a)}return i.set(o,e),s?await C(o,t.delayTime,e.delayTime):await g(o,t.delayTime,e.delayTime),await B(t,o,e),e};return{render(t,o){const e=i.get(o);return e!==void 0?Promise.resolve(e):E(t,o)}}},Hl=C=>(A,I,g,B)=>C(A[B],Q=>Q[0]===I&&Q[1]===g),Tl=C=>(A,I)=>{C(A).delete(I)},xl=C=>"delayTime"in C,bl=(C,A,I)=>function g(B,Q){const i=xE(Q)?Q:I(C,Q);if(xl(i))return[];if(B[0]===i)return[B];if(B.includes(i))return[];const{outputs:E}=A(i);return Array.from(E).map(t=>g([...B,i],t[0])).reduce((t,o)=>t.concat(o),[])},AE=(C,A,I)=>{const g=A[I];if(g===void 0)throw C();return g},_l=C=>(A,I=void 0,g=void 0,B=0)=>I===void 0?A.forEach(Q=>Q.disconnect()):typeof I=="number"?AE(C,A,I).disconnect():OE(I)?g===void 0?A.forEach(Q=>Q.disconnect(I)):B===void 0?AE(C,A,g).disconnect(I,0):AE(C,A,g).disconnect(I,0,B):g===void 0?A.forEach(Q=>Q.disconnect(I)):AE(C,A,g).disconnect(I,0),Ol={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},vl=(C,A,I,g,B,Q,i,E)=>class extends C{constructor(o,e){const s=Q(o),a={...Ol,...e},n=g(s,a),c=i(s),l=c?I():null;super(o,!1,n,l),this._attack=A(this,c,n.attack),this._knee=A(this,c,n.knee),this._nativeDynamicsCompressorNode=n,this._ratio=A(this,c,n.ratio),this._release=A(this,c,n.release),this._threshold=A(this,c,n.threshold),E(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(o){const e=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=o,o>2)throw this._nativeDynamicsCompressorNode.channelCount=e,B()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(o){const e=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=o,o==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=e,B()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Zl=(C,A,I,g,B)=>()=>{const Q=new WeakMap,i=async(E,t)=>{let o=I(E);const e=ng(o,t);if(!e){const s={attack:o.attack.value,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,knee:o.knee.value,ratio:o.ratio.value,release:o.release.value,threshold:o.threshold.value};o=A(t,s)}return Q.set(t,o),e?(await C(t,E.attack,o.attack),await C(t,E.knee,o.knee),await C(t,E.ratio,o.ratio),await C(t,E.release,o.release),await C(t,E.threshold,o.threshold)):(await g(t,E.attack,o.attack),await g(t,E.knee,o.knee),await g(t,E.ratio,o.ratio),await g(t,E.release,o.release),await g(t,E.threshold,o.threshold)),await B(E,t,o),o};return{render(E,t){const o=Q.get(t);return o!==void 0?Promise.resolve(o):i(E,t)}}},Wl=()=>new DOMException("","EncodingError"),Pl=C=>A=>new Promise((I,g)=>{if(C===null){g(new SyntaxError);return}const B=C.document.head;if(B===null)g(new SyntaxError);else{const Q=C.document.createElement("script"),i=new Blob([A],{type:"application/javascript"}),E=URL.createObjectURL(i),t=C.onerror,o=()=>{C.onerror=t,URL.revokeObjectURL(E)};C.onerror=(e,s,a,n,c)=>{if(s===E||s===C.location.href&&a===1&&n===1)return o(),g(c),!1;if(t!==null)return t(e,s,a,n,c)},Q.onerror=()=>{o(),g(new SyntaxError)},Q.onload=()=>{o(),I()},Q.src=E,Q.type="module",B.appendChild(Q)}}),Vl=C=>class{constructor(I){this._nativeEventTarget=I,this._listeners=new WeakMap}addEventListener(I,g,B){if(g!==null){let Q=this._listeners.get(g);Q===void 0&&(Q=C(this,g),typeof g=="function"&&this._listeners.set(g,Q)),this._nativeEventTarget.addEventListener(I,Q,B)}}dispatchEvent(I){return this._nativeEventTarget.dispatchEvent(I)}removeEventListener(I,g,B){const Q=g===null?void 0:this._listeners.get(g);this._nativeEventTarget.removeEventListener(I,Q===void 0?null:Q,B)}},jl=C=>(A,I,g)=>{Object.defineProperties(C,{currentFrame:{configurable:!0,get(){return Math.round(A*I)}},currentTime:{configurable:!0,get(){return A}}});try{return g()}finally{C!==null&&(delete C.currentFrame,delete C.currentTime)}},Xl=C=>async A=>{try{const I=await fetch(A);if(I.ok)return[await I.text(),I.url]}catch{}throw C()},zl={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},$l=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=B(E),e={...zl,...t},s=g(o,e),a=Q(o),n=a?I():null;super(E,!1,s,n),this._gain=A(this,a,s.gain,cg,yg)}get gain(){return this._gain}},AS=(C,A,I,g,B)=>()=>{const Q=new WeakMap,i=async(E,t)=>{let o=I(E);const e=ng(o,t);if(!e){const s={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,gain:o.gain.value};o=A(t,s)}return Q.set(t,o),e?await C(t,E.gain,o.gain):await g(t,E.gain,o.gain),await B(E,t,o),o};return{render(E,t){const o=Q.get(t);return o!==void 0?Promise.resolve(o):i(E,t)}}},IS=(C,A)=>I=>A(C,I),gS=C=>A=>{const I=C(A);if(I.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return I.renderer},CS=C=>A=>{var I;return(I=C.get(A))!==null&&I!==void 0?I:0},BS=C=>A=>{const I=C(A);if(I.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return I.renderer},QS=C=>A=>C.get(A),gg=()=>new DOMException("","InvalidStateError"),iS=C=>A=>{const I=C.get(A);if(I===void 0)throw gg();return I},ES=(C,A)=>I=>{let g=C.get(I);if(g!==void 0)return g;if(A===null)throw new Error("Missing the native OfflineAudioContext constructor.");return g=new A(1,1,44100),C.set(I,g),g},tS=C=>A=>{const I=C.get(A);if(I===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return I},Dt=()=>new DOMException("","InvalidAccessError"),oS=C=>{C.getFrequencyResponse=(A=>(I,g,B)=>{if(I.length!==g.length||g.length!==B.length)throw Dt();return A.call(C,I,g,B)})(C.getFrequencyResponse)},eS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},sS=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=g(E),e=B(o),s={...eS,...t},a=A(o,e?null:E.baseLatency,s),n=e?I(s.feedback,s.feedforward):null;super(E,!1,a,n),oS(a),this._nativeIIRFilterNode=a,Q(this,1)}getFrequencyResponse(E,t,o){return this._nativeIIRFilterNode.getFrequencyResponse(E,t,o)}},jD=(C,A,I,g,B,Q,i,E,t,o,e)=>{const s=o.length;let a=E;for(let n=0;n<s;n+=1){let c=I[0]*o[n];for(let l=1;l<B;l+=1){const h=a-l&t-1;c+=I[l]*Q[h],c-=C[l]*i[h]}for(let l=B;l<g;l+=1)c+=I[l]*Q[a-l&t-1];for(let l=B;l<A;l+=1)c-=C[l]*i[a-l&t-1];Q[a]=o[n],i[a]=c,a=a+1&t-1,e[n]=c}return a},aS=(C,A,I,g)=>{const B=I instanceof Float64Array?I:new Float64Array(I),Q=g instanceof Float64Array?g:new Float64Array(g),i=B.length,E=Q.length,t=Math.min(i,E);if(B[0]!==1){for(let c=0;c<i;c+=1)Q[c]/=B[0];for(let c=1;c<E;c+=1)B[c]/=B[0]}const o=32,e=new Float32Array(o),s=new Float32Array(o),a=A.createBuffer(C.numberOfChannels,C.length,C.sampleRate),n=C.numberOfChannels;for(let c=0;c<n;c+=1){const l=C.getChannelData(c),h=a.getChannelData(c);e.fill(0),s.fill(0),jD(B,i,Q,E,t,e,s,0,o,l,h)}return a},nS=(C,A,I,g,B)=>(Q,i)=>{const E=new WeakMap;let t=null;const o=async(e,s)=>{let a=null,n=A(e);const c=ng(n,s);if(s.createIIRFilter===void 0?a=C(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):c||(n=s.createIIRFilter(i,Q)),E.set(s,a===null?n:a),a!==null){if(t===null){if(I===null)throw new Error("Missing the native OfflineAudioContext constructor.");const h=new I(e.context.destination.channelCount,e.context.length,s.sampleRate);t=(async()=>{await g(e,h,h.destination);const D=await B(h);return aS(D,s,Q,i)})()}const l=await t;return a.buffer=l,a.start(0),a}return await g(e,s,n),n};return{render(e,s){const a=E.get(s);return a!==void 0?Promise.resolve(a):o(e,s)}}},DS=(C,A,I,g,B,Q)=>i=>(E,t)=>{const o=C.get(E);if(o===void 0){if(!i&&Q(E)){const e=g(E),{outputs:s}=I(E);for(const a of s)if(Li(a)){const n=g(a[0]);A(e,n,a[1],a[2])}else{const n=B(a[0]);e.disconnect(n,a[1])}}C.set(E,t)}else C.set(E,o+t)},hS=(C,A)=>I=>{const g=C.get(I);return A(g)||A(I)},rS=(C,A)=>I=>C.has(I)||A(I),cS=(C,A)=>I=>C.has(I)||A(I),lS=(C,A)=>I=>{const g=C.get(I);return A(g)||A(I)},SS=C=>A=>C!==null&&A instanceof C,wS=C=>A=>C!==null&&typeof C.AudioNode=="function"&&A instanceof C.AudioNode,GS=C=>A=>C!==null&&typeof C.AudioParam=="function"&&A instanceof C.AudioParam,kS=(C,A)=>I=>C(I)||A(I),yS=C=>A=>C!==null&&A instanceof C,MS=C=>C!==null&&C.isSecureContext,US=(C,A,I,g)=>class extends C{constructor(Q,i){const E=I(Q),t=A(E,i);if(g(E))throw TypeError();super(Q,!0,t,null),this._nativeMediaElementAudioSourceNode=t}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},NS={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},KS=(C,A,I,g)=>class extends C{constructor(Q,i){const E=I(Q);if(g(E))throw new TypeError;const t={...NS,...i},o=A(E,t);super(Q,!1,o,null),this._nativeMediaStreamAudioDestinationNode=o}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},JS=(C,A,I,g)=>class extends C{constructor(Q,i){const E=I(Q),t=A(E,i);if(g(E))throw new TypeError;super(Q,!0,t,null),this._nativeMediaStreamAudioSourceNode=t}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},FS=(C,A,I)=>class extends C{constructor(B,Q){const i=I(B),E=A(i,Q);super(B,!0,E,null)}},pS=(C,A,I,g,B,Q)=>class extends I{constructor(E,t){super(E),this._nativeContext=E,at.set(this,E),g(E)&&B.set(E,new Set),this._destination=new C(this,t),this._listener=A(this,E),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(E){const t=typeof E=="function"?Q(this,E):null;this._nativeContext.onstatechange=t;const o=this._nativeContext.onstatechange;this._onstatechange=o!==null&&o===t?E:o}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Gi=C=>{const A=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const I=C.decodeAudioData(A.buffer,()=>{});return I===void 0?!1:(I.catch(()=>{}),!0)}catch{}return!1},dS=(C,A)=>(I,g,B)=>{const Q=new Set;return I.connect=(i=>(E,t=0,o=0)=>{const e=Q.size===0;if(A(E))return i.call(I,E,t,o),C(Q,[E,t,o],s=>s[0]===E&&s[1]===t&&s[2]===o,!0),e&&g(),E;i.call(I,E,t),C(Q,[E,t],s=>s[0]===E&&s[1]===t,!0),e&&g()})(I.connect),I.disconnect=(i=>(E,t,o)=>{const e=Q.size>0;if(E===void 0)i.apply(I),Q.clear();else if(typeof E=="number"){i.call(I,E);for(const a of Q)a[1]===E&&Q.delete(a)}else{A(E)?i.call(I,E,t,o):i.call(I,E,t);for(const a of Q)a[0]===E&&(t===void 0||a[1]===t)&&(o===void 0||a[2]===o)&&Q.delete(a)}const s=Q.size===0;e&&s&&B()})(I.disconnect),I},pI=(C,A,I)=>{const g=A[I];g!==void 0&&g!==C[I]&&(C[I]=g)},jI=(C,A)=>{pI(C,A,"channelCount"),pI(C,A,"channelCountMode"),pI(C,A,"channelInterpretation")},La=C=>typeof C.getFloatTimeDomainData=="function",RS=C=>{C.getFloatTimeDomainData=A=>{const I=new Uint8Array(A.length);C.getByteTimeDomainData(I);const g=Math.max(I.length,C.fftSize);for(let B=0;B<g;B+=1)A[B]=(I[B]-128)*.0078125;return A}},uS=(C,A)=>(I,g)=>{const B=I.createAnalyser();if(jI(B,g),!(g.maxDecibels>g.minDecibels))throw A();return pI(B,g,"fftSize"),pI(B,g,"maxDecibels"),pI(B,g,"minDecibels"),pI(B,g,"smoothingTimeConstant"),C(La,()=>La(B))||RS(B),B},qS=C=>C===null?null:C.hasOwnProperty("AudioBuffer")?C.AudioBuffer:null,fI=(C,A,I)=>{const g=A[I];g!==void 0&&g!==C[I].value&&(C[I].value=g)},YS=C=>{C.start=(A=>{let I=!1;return(g=0,B=0,Q)=>{if(I)throw gg();A.call(C,g,B,Q),I=!0}})(C.start)},ze=C=>{C.start=(A=>(I=0,g=0,B)=>{if(typeof B=="number"&&B<0||g<0||I<0)throw new RangeError("The parameters can't be negative.");A.call(C,I,g,B)})(C.start)},$e=C=>{C.stop=(A=>(I=0)=>{if(I<0)throw new RangeError("The parameter can't be negative.");A.call(C,I)})(C.stop)},fS=(C,A,I,g,B,Q,i,E,t,o,e)=>(s,a)=>{const n=s.createBufferSource();return jI(n,a),fI(n,a,"playbackRate"),pI(n,a,"buffer"),pI(n,a,"loop"),pI(n,a,"loopEnd"),pI(n,a,"loopStart"),A(I,()=>I(s))||YS(n),A(g,()=>g(s))||t(n),A(B,()=>B(s))||o(n,s),A(Q,()=>Q(s))||ze(n),A(i,()=>i(s))||e(n,s),A(E,()=>E(s))||$e(n),C(s,n),n},LS=C=>C===null?null:C.hasOwnProperty("AudioContext")?C.AudioContext:C.hasOwnProperty("webkitAudioContext")?C.webkitAudioContext:null,mS=(C,A)=>(I,g,B)=>{const Q=I.destination;if(Q.channelCount!==g)try{Q.channelCount=g}catch{}B&&Q.channelCountMode!=="explicit"&&(Q.channelCountMode="explicit"),Q.maxChannelCount===0&&Object.defineProperty(Q,"maxChannelCount",{value:g});const i=C(I,{channelCount:g,channelCountMode:Q.channelCountMode,channelInterpretation:Q.channelInterpretation,gain:1});return A(i,"channelCount",E=>()=>E.call(i),E=>t=>{E.call(i,t);try{Q.channelCount=t}catch(o){if(t>Q.maxChannelCount)throw o}}),A(i,"channelCountMode",E=>()=>E.call(i),E=>t=>{E.call(i,t),Q.channelCountMode=t}),A(i,"channelInterpretation",E=>()=>E.call(i),E=>t=>{E.call(i,t),Q.channelInterpretation=t}),Object.defineProperty(i,"maxChannelCount",{get:()=>Q.maxChannelCount}),i.connect(Q),i},HS=C=>C===null?null:C.hasOwnProperty("AudioWorkletNode")?C.AudioWorkletNode:null,TS=C=>{const{port1:A}=new MessageChannel;try{A.postMessage(C)}finally{A.close()}},xS=(C,A,I,g,B)=>(Q,i,E,t,o,e)=>{if(E!==null)try{const s=new E(Q,t,e),a=new Map;let n=null;if(Object.defineProperties(s,{channelCount:{get:()=>e.channelCount,set:()=>{throw C()}},channelCountMode:{get:()=>"explicit",set:()=>{throw C()}},onprocessorerror:{get:()=>n,set:c=>{typeof n=="function"&&s.removeEventListener("processorerror",n),n=typeof c=="function"?c:null,typeof n=="function"&&s.addEventListener("processorerror",n)}}}),s.addEventListener=(c=>(...l)=>{if(l[0]==="processorerror"){const h=typeof l[1]=="function"?l[1]:typeof l[1]=="object"&&l[1]!==null&&typeof l[1].handleEvent=="function"?l[1].handleEvent:null;if(h!==null){const D=a.get(l[1]);D!==void 0?l[1]=D:(l[1]=k=>{k.type==="error"?(Object.defineProperties(k,{type:{value:"processorerror"}}),h(k)):h(new ErrorEvent(l[0],{...k}))},a.set(h,l[1]))}}return c.call(s,"error",l[1],l[2]),c.call(s,...l)})(s.addEventListener),s.removeEventListener=(c=>(...l)=>{if(l[0]==="processorerror"){const h=a.get(l[1]);h!==void 0&&(a.delete(l[1]),l[1]=h)}return c.call(s,"error",l[1],l[2]),c.call(s,l[0],l[1],l[2])})(s.removeEventListener),e.numberOfOutputs!==0){const c=I(Q,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return s.connect(c).connect(Q.destination),B(s,()=>c.disconnect(),()=>c.connect(Q.destination))}return s}catch(s){throw s.code===11?g():s}if(o===void 0)throw g();return TS(e),A(Q,i,o,e)},XD=(C,A)=>C===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(C*A))))),bS=C=>new Promise((A,I)=>{const{port1:g,port2:B}=new MessageChannel;g.onmessage=({data:Q})=>{g.close(),B.close(),A(Q)},g.onmessageerror=({data:Q})=>{g.close(),B.close(),I(Q)},B.postMessage(C)}),_S=async(C,A)=>{const I=await bS(A);return new C(I)},OS=(C,A,I,g)=>{let B=mo.get(C);B===void 0&&(B=new WeakMap,mo.set(C,B));const Q=_S(I,g);return B.set(A,Q),Q},vS=(C,A,I,g,B,Q,i,E,t,o,e,s,a)=>(n,c,l,h)=>{if(h.numberOfInputs===0&&h.numberOfOutputs===0)throw t();const D=Array.isArray(h.outputChannelCount)?h.outputChannelCount:Array.from(h.outputChannelCount);if(D.some(aA=>aA<1))throw t();if(D.length!==h.numberOfOutputs)throw A();if(h.channelCountMode!=="explicit")throw t();const k=h.channelCount*h.numberOfInputs,G=D.reduce((aA,sA)=>aA+sA,0),w=l.parameterDescriptors===void 0?0:l.parameterDescriptors.length;if(k+w>6||G>6)throw t();const M=new MessageChannel,U=[],J=[];for(let aA=0;aA<h.numberOfInputs;aA+=1)U.push(i(n,{channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,gain:1})),J.push(B(n,{channelCount:h.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:h.channelCount}));const K=[];if(l.parameterDescriptors!==void 0)for(const{defaultValue:aA,maxValue:sA,minValue:dA,name:nA}of l.parameterDescriptors){const FA=Q(n,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:h.parameterData[nA]!==void 0?h.parameterData[nA]:aA===void 0?0:aA});Object.defineProperties(FA.offset,{defaultValue:{get:()=>aA===void 0?0:aA},maxValue:{get:()=>sA===void 0?cg:sA},minValue:{get:()=>dA===void 0?yg:dA}}),K.push(FA)}const y=g(n,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,k+w)}),S=XD(c,n.sampleRate),p=E(n,S,k+w,Math.max(1,G)),R=B(n,{channelCount:Math.max(1,G),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,G)}),q=[];for(let aA=0;aA<h.numberOfOutputs;aA+=1)q.push(g(n,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:D[aA]}));for(let aA=0;aA<h.numberOfInputs;aA+=1){U[aA].connect(J[aA]);for(let sA=0;sA<h.channelCount;sA+=1)J[aA].connect(y,sA,aA*h.channelCount+sA)}const H=new PD(l.parameterDescriptors===void 0?[]:l.parameterDescriptors.map(({name:aA},sA)=>{const dA=K[sA];return dA.connect(y,0,k+sA),dA.start(0),[aA,dA.offset]}));y.connect(p);let Z=h.channelInterpretation,x=null;const P=h.numberOfOutputs===0?[p]:q,O={get bufferSize(){return S},get channelCount(){return h.channelCount},set channelCount(aA){throw I()},get channelCountMode(){return h.channelCountMode},set channelCountMode(aA){throw I()},get channelInterpretation(){return Z},set channelInterpretation(aA){for(const sA of U)sA.channelInterpretation=aA;Z=aA},get context(){return p.context},get inputs(){return U},get numberOfInputs(){return h.numberOfInputs},get numberOfOutputs(){return h.numberOfOutputs},get onprocessorerror(){return x},set onprocessorerror(aA){typeof x=="function"&&O.removeEventListener("processorerror",x),x=typeof aA=="function"?aA:null,typeof x=="function"&&O.addEventListener("processorerror",x)},get parameters(){return H},get port(){return M.port2},addEventListener(...aA){return p.addEventListener(aA[0],aA[1],aA[2])},connect:C.bind(null,P),disconnect:o.bind(null,P),dispatchEvent(...aA){return p.dispatchEvent(aA[0])},removeEventListener(...aA){return p.removeEventListener(aA[0],aA[1],aA[2])}},z=new Map;M.port1.addEventListener=(aA=>(...sA)=>{if(sA[0]==="message"){const dA=typeof sA[1]=="function"?sA[1]:typeof sA[1]=="object"&&sA[1]!==null&&typeof sA[1].handleEvent=="function"?sA[1].handleEvent:null;if(dA!==null){const nA=z.get(sA[1]);nA!==void 0?sA[1]=nA:(sA[1]=FA=>{e(n.currentTime,n.sampleRate,()=>dA(FA))},z.set(dA,sA[1]))}}return aA.call(M.port1,sA[0],sA[1],sA[2])})(M.port1.addEventListener),M.port1.removeEventListener=(aA=>(...sA)=>{if(sA[0]==="message"){const dA=z.get(sA[1]);dA!==void 0&&(z.delete(sA[1]),sA[1]=dA)}return aA.call(M.port1,sA[0],sA[1],sA[2])})(M.port1.removeEventListener);let gA=null;Object.defineProperty(M.port1,"onmessage",{get:()=>gA,set:aA=>{typeof gA=="function"&&M.port1.removeEventListener("message",gA),gA=typeof aA=="function"?aA:null,typeof gA=="function"&&(M.port1.addEventListener("message",gA),M.port1.start())}}),l.prototype.port=M.port1;let iA=null;OS(n,O,l,h).then(aA=>iA=aA);const ZA=ZE(h.numberOfInputs,h.channelCount),X=ZE(h.numberOfOutputs,D),$=l.parameterDescriptors===void 0?[]:l.parameterDescriptors.reduce((aA,{name:sA})=>({...aA,[sA]:new Float32Array(128)}),{});let eA=!0;const tA=()=>{h.numberOfOutputs>0&&p.disconnect(R);for(let aA=0,sA=0;aA<h.numberOfOutputs;aA+=1){const dA=q[aA];for(let nA=0;nA<D[aA];nA+=1)R.disconnect(dA,sA+nA,nA);sA+=D[aA]}},BA=new Map;p.onaudioprocess=({inputBuffer:aA,outputBuffer:sA})=>{if(iA!==null){const dA=s(O);for(let nA=0;nA<S;nA+=128){for(let FA=0;FA<h.numberOfInputs;FA+=1)for(let DA=0;DA<h.channelCount;DA+=1)vE(aA,ZA[FA],DA,DA,nA);l.parameterDescriptors!==void 0&&l.parameterDescriptors.forEach(({name:FA},DA)=>{vE(aA,$,FA,k+DA,nA)});for(let FA=0;FA<h.numberOfInputs;FA+=1)for(let DA=0;DA<D[FA];DA+=1)X[FA][DA].byteLength===0&&(X[FA][DA]=new Float32Array(128));try{const FA=ZA.map((d,N)=>{if(dA[N].size>0)return BA.set(N,S/128),d;const IA=BA.get(N);return IA===void 0?[]:(d.every(QA=>QA.every(AA=>AA===0))&&(IA===1?BA.delete(N):BA.set(N,IA-1)),d)});eA=e(n.currentTime+nA/n.sampleRate,n.sampleRate,()=>iA.process(FA,X,$));for(let d=0,N=0;d<h.numberOfOutputs;d+=1){for(let v=0;v<D[d];v+=1)VD(sA,X[d],v,N+v,nA);N+=D[d]}}catch(FA){eA=!1,O.dispatchEvent(new ErrorEvent("processorerror",{colno:FA.colno,filename:FA.filename,lineno:FA.lineno,message:FA.message}))}if(!eA){for(let FA=0;FA<h.numberOfInputs;FA+=1){U[FA].disconnect(J[FA]);for(let DA=0;DA<h.channelCount;DA+=1)J[nA].disconnect(y,DA,FA*h.channelCount+DA)}if(l.parameterDescriptors!==void 0){const FA=l.parameterDescriptors.length;for(let DA=0;DA<FA;DA+=1){const d=K[DA];d.disconnect(y,0,k+DA),d.stop()}}y.disconnect(p),p.onaudioprocess=null,fA?tA():VA();break}}}};let fA=!1;const TA=i(n,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),oI=()=>p.connect(TA).connect(n.destination),VA=()=>{p.disconnect(TA),TA.disconnect()},RI=()=>{if(eA){VA(),h.numberOfOutputs>0&&p.connect(R);for(let aA=0,sA=0;aA<h.numberOfOutputs;aA+=1){const dA=q[aA];for(let nA=0;nA<D[aA];nA+=1)R.connect(dA,sA+nA,nA);sA+=D[aA]}}fA=!0},Y=()=>{eA&&(oI(),tA()),fA=!1};return oI(),a(O,RI,Y)},zD=(C,A)=>{const I=C.createBiquadFilter();return jI(I,A),fI(I,A,"Q"),fI(I,A,"detune"),fI(I,A,"frequency"),fI(I,A,"gain"),pI(I,A,"type"),I},ZS=(C,A)=>(I,g)=>{const B=I.createChannelMerger(g.numberOfInputs);return C!==null&&C.name==="webkitAudioContext"&&A(I,B),jI(B,g),B},WS=C=>{const A=C.numberOfOutputs;Object.defineProperty(C,"channelCount",{get:()=>A,set:I=>{if(I!==A)throw gg()}}),Object.defineProperty(C,"channelCountMode",{get:()=>"explicit",set:I=>{if(I!=="explicit")throw gg()}}),Object.defineProperty(C,"channelInterpretation",{get:()=>"discrete",set:I=>{if(I!=="discrete")throw gg()}})},mi=(C,A)=>{const I=C.createChannelSplitter(A.numberOfOutputs);return jI(I,A),WS(I),I},PS=(C,A,I,g,B)=>(Q,i)=>{if(Q.createConstantSource===void 0)return I(Q,i);const E=Q.createConstantSource();return jI(E,i),fI(E,i,"offset"),A(g,()=>g(Q))||ze(E),A(B,()=>B(Q))||$e(E),C(Q,E),E},ZQ=(C,A)=>(C.connect=A.connect.bind(A),C.disconnect=A.disconnect.bind(A),C),VS=(C,A,I,g)=>(B,{offset:Q,...i})=>{const E=B.createBuffer(1,2,44100),t=A(B,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),o=I(B,{...i,gain:Q}),e=E.getChannelData(0);e[0]=1,e[1]=1,t.buffer=E,t.loop=!0;const s={get bufferSize(){},get channelCount(){return o.channelCount},set channelCount(c){o.channelCount=c},get channelCountMode(){return o.channelCountMode},set channelCountMode(c){o.channelCountMode=c},get channelInterpretation(){return o.channelInterpretation},set channelInterpretation(c){o.channelInterpretation=c},get context(){return o.context},get inputs(){return[]},get numberOfInputs(){return t.numberOfInputs},get numberOfOutputs(){return o.numberOfOutputs},get offset(){return o.gain},get onended(){return t.onended},set onended(c){t.onended=c},addEventListener(...c){return t.addEventListener(c[0],c[1],c[2])},dispatchEvent(...c){return t.dispatchEvent(c[0])},removeEventListener(...c){return t.removeEventListener(c[0],c[1],c[2])},start(c=0){t.start.call(t,c)},stop(c=0){t.stop.call(t,c)}},a=()=>t.connect(o),n=()=>t.disconnect(o);return C(B,t),g(ZQ(s,o),a,n)},jS=(C,A)=>(I,g)=>{const B=I.createConvolver();if(jI(B,g),g.disableNormalization===B.normalize&&(B.normalize=!g.disableNormalization),pI(B,g,"buffer"),g.channelCount>2||(A(B,"channelCount",Q=>()=>Q.call(B),Q=>i=>{if(i>2)throw C();return Q.call(B,i)}),g.channelCountMode==="max"))throw C();return A(B,"channelCountMode",Q=>()=>Q.call(B),Q=>i=>{if(i==="max")throw C();return Q.call(B,i)}),B},$D=(C,A)=>{const I=C.createDelay(A.maxDelayTime);return jI(I,A),fI(I,A,"delayTime"),I},XS=C=>(A,I)=>{const g=A.createDynamicsCompressor();if(jI(g,I),I.channelCount>2||I.channelCountMode==="max")throw C();return fI(g,I,"attack"),fI(g,I,"knee"),fI(g,I,"ratio"),fI(g,I,"release"),fI(g,I,"threshold"),g},Jg=(C,A)=>{const I=C.createGain();return jI(I,A),fI(I,A,"gain"),I},zS=C=>(A,I,g)=>{if(A.createIIRFilter===void 0)return C(A,I,g);const B=A.createIIRFilter(g.feedforward,g.feedback);return jI(B,g),B};function $S(C,A){const I=A[0]*A[0]+A[1]*A[1];return[(C[0]*A[0]+C[1]*A[1])/I,(C[1]*A[0]-C[0]*A[1])/I]}function Aw(C,A){return[C[0]*A[0]-C[1]*A[1],C[0]*A[1]+C[1]*A[0]]}function ma(C,A){let I=[0,0];for(let g=C.length-1;g>=0;g-=1)I=Aw(I,A),I[0]+=C[g];return I}const Iw=(C,A,I,g)=>(B,Q,{channelCount:i,channelCountMode:E,channelInterpretation:t,feedback:o,feedforward:e})=>{const s=XD(Q,B.sampleRate),a=o instanceof Float64Array?o:new Float64Array(o),n=e instanceof Float64Array?e:new Float64Array(e),c=a.length,l=n.length,h=Math.min(c,l);if(c===0||c>20)throw g();if(a[0]===0)throw A();if(l===0||l>20)throw g();if(n[0]===0)throw A();if(a[0]!==1){for(let K=0;K<l;K+=1)n[K]/=a[0];for(let K=1;K<c;K+=1)a[K]/=a[0]}const D=I(B,s,i,i);D.channelCount=i,D.channelCountMode=E,D.channelInterpretation=t;const k=32,G=[],w=[],M=[];for(let K=0;K<i;K+=1){G.push(0);const y=new Float32Array(k),S=new Float32Array(k);y.fill(0),S.fill(0),w.push(y),M.push(S)}D.onaudioprocess=K=>{const y=K.inputBuffer,S=K.outputBuffer,p=y.numberOfChannels;for(let R=0;R<p;R+=1){const q=y.getChannelData(R),H=S.getChannelData(R);G[R]=jD(a,c,n,l,h,w[R],M[R],G[R],k,q,H)}};const U=B.sampleRate/2;return ZQ({get bufferSize(){return s},get channelCount(){return D.channelCount},set channelCount(K){D.channelCount=K},get channelCountMode(){return D.channelCountMode},set channelCountMode(K){D.channelCountMode=K},get channelInterpretation(){return D.channelInterpretation},set channelInterpretation(K){D.channelInterpretation=K},get context(){return D.context},get inputs(){return[D]},get numberOfInputs(){return D.numberOfInputs},get numberOfOutputs(){return D.numberOfOutputs},addEventListener(...K){return D.addEventListener(K[0],K[1],K[2])},dispatchEvent(...K){return D.dispatchEvent(K[0])},getFrequencyResponse(K,y,S){if(K.length!==y.length||y.length!==S.length)throw C();const p=K.length;for(let R=0;R<p;R+=1){const q=-Math.PI*(K[R]/U),H=[Math.cos(q),Math.sin(q)],Z=ma(n,H),x=ma(a,H),P=$S(Z,x);y[R]=Math.sqrt(P[0]*P[0]+P[1]*P[1]),S[R]=Math.atan2(P[1],P[0])}},removeEventListener(...K){return D.removeEventListener(K[0],K[1],K[2])}},D)},gw=(C,A)=>C.createMediaElementSource(A.mediaElement),Cw=(C,A)=>{const I=C.createMediaStreamDestination();return jI(I,A),I.numberOfOutputs===1&&Object.defineProperty(I,"numberOfOutputs",{get:()=>0}),I},Bw=(C,{mediaStream:A})=>{const I=A.getAudioTracks();I.sort((Q,i)=>Q.id<i.id?-1:Q.id>i.id?1:0);const g=I.slice(0,1),B=C.createMediaStreamSource(new MediaStream(g));return Object.defineProperty(B,"mediaStream",{value:A}),B},Qw=(C,A)=>(I,{mediaStreamTrack:g})=>{if(typeof I.createMediaStreamTrackSource=="function")return I.createMediaStreamTrackSource(g);const B=new MediaStream([g]),Q=I.createMediaStreamSource(B);if(g.kind!=="audio")throw C();if(A(I))throw new TypeError;return Q},iw=C=>C===null?null:C.hasOwnProperty("OfflineAudioContext")?C.OfflineAudioContext:C.hasOwnProperty("webkitOfflineAudioContext")?C.webkitOfflineAudioContext:null,Ew=(C,A,I,g,B,Q)=>(i,E)=>{const t=i.createOscillator();return jI(t,E),fI(t,E,"detune"),fI(t,E,"frequency"),E.periodicWave!==void 0?t.setPeriodicWave(E.periodicWave):pI(t,E,"type"),A(I,()=>I(i))||ze(t),A(g,()=>g(i))||Q(t,i),A(B,()=>B(i))||$e(t),C(i,t),t},tw=C=>(A,I)=>{const g=A.createPanner();return g.orientationX===void 0?C(A,I):(jI(g,I),fI(g,I,"orientationX"),fI(g,I,"orientationY"),fI(g,I,"orientationZ"),fI(g,I,"positionX"),fI(g,I,"positionY"),fI(g,I,"positionZ"),pI(g,I,"coneInnerAngle"),pI(g,I,"coneOuterAngle"),pI(g,I,"coneOuterGain"),pI(g,I,"distanceModel"),pI(g,I,"maxDistance"),pI(g,I,"panningModel"),pI(g,I,"refDistance"),pI(g,I,"rolloffFactor"),g)},ow=(C,A,I,g,B,Q,i,E,t,o)=>(e,{coneInnerAngle:s,coneOuterAngle:a,coneOuterGain:n,distanceModel:c,maxDistance:l,orientationX:h,orientationY:D,orientationZ:k,panningModel:G,positionX:w,positionY:M,positionZ:U,refDistance:J,rolloffFactor:K,...y})=>{const S=e.createPanner();if(y.channelCount>2||y.channelCountMode==="max")throw i();jI(S,y);const p={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},R=I(e,{...p,channelInterpretation:"speakers",numberOfInputs:6}),q=g(e,{...y,gain:1}),H=g(e,{...p,gain:1}),Z=g(e,{...p,gain:0}),x=g(e,{...p,gain:0}),P=g(e,{...p,gain:0}),O=g(e,{...p,gain:0}),z=g(e,{...p,gain:0}),gA=B(e,256,6,1),iA=Q(e,{...p,curve:new Float32Array([1,1]),oversample:"none"});let GA=[h,D,k],ZA=[w,M,U];const X=new Float32Array(1);gA.onaudioprocess=({inputBuffer:BA})=>{const fA=[t(BA,X,0),t(BA,X,1),t(BA,X,2)];fA.some((oI,VA)=>oI!==GA[VA])&&(S.setOrientation(...fA),GA=fA);const TA=[t(BA,X,3),t(BA,X,4),t(BA,X,5)];TA.some((oI,VA)=>oI!==ZA[VA])&&(S.setPosition(...TA),ZA=TA)},Object.defineProperty(Z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(x.gain,"defaultValue",{get:()=>0}),Object.defineProperty(P.gain,"defaultValue",{get:()=>0}),Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0});const $={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(BA){if(BA>2)throw i();q.channelCount=BA,S.channelCount=BA},get channelCountMode(){return S.channelCountMode},set channelCountMode(BA){if(BA==="max")throw i();q.channelCountMode=BA,S.channelCountMode=BA},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(BA){q.channelInterpretation=BA,S.channelInterpretation=BA},get coneInnerAngle(){return S.coneInnerAngle},set coneInnerAngle(BA){S.coneInnerAngle=BA},get coneOuterAngle(){return S.coneOuterAngle},set coneOuterAngle(BA){S.coneOuterAngle=BA},get coneOuterGain(){return S.coneOuterGain},set coneOuterGain(BA){if(BA<0||BA>1)throw A();S.coneOuterGain=BA},get context(){return S.context},get distanceModel(){return S.distanceModel},set distanceModel(BA){S.distanceModel=BA},get inputs(){return[q]},get maxDistance(){return S.maxDistance},set maxDistance(BA){if(BA<0)throw new RangeError;S.maxDistance=BA},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get orientationX(){return H.gain},get orientationY(){return Z.gain},get orientationZ(){return x.gain},get panningModel(){return S.panningModel},set panningModel(BA){S.panningModel=BA},get positionX(){return P.gain},get positionY(){return O.gain},get positionZ(){return z.gain},get refDistance(){return S.refDistance},set refDistance(BA){if(BA<0)throw new RangeError;S.refDistance=BA},get rolloffFactor(){return S.rolloffFactor},set rolloffFactor(BA){if(BA<0)throw new RangeError;S.rolloffFactor=BA},addEventListener(...BA){return q.addEventListener(BA[0],BA[1],BA[2])},dispatchEvent(...BA){return q.dispatchEvent(BA[0])},removeEventListener(...BA){return q.removeEventListener(BA[0],BA[1],BA[2])}};s!==$.coneInnerAngle&&($.coneInnerAngle=s),a!==$.coneOuterAngle&&($.coneOuterAngle=a),n!==$.coneOuterGain&&($.coneOuterGain=n),c!==$.distanceModel&&($.distanceModel=c),l!==$.maxDistance&&($.maxDistance=l),h!==$.orientationX.value&&($.orientationX.value=h),D!==$.orientationY.value&&($.orientationY.value=D),k!==$.orientationZ.value&&($.orientationZ.value=k),G!==$.panningModel&&($.panningModel=G),w!==$.positionX.value&&($.positionX.value=w),M!==$.positionY.value&&($.positionY.value=M),U!==$.positionZ.value&&($.positionZ.value=U),J!==$.refDistance&&($.refDistance=J),K!==$.rolloffFactor&&($.rolloffFactor=K),(GA[0]!==1||GA[1]!==0||GA[2]!==0)&&S.setOrientation(...GA),(ZA[0]!==0||ZA[1]!==0||ZA[2]!==0)&&S.setPosition(...ZA);const eA=()=>{q.connect(S),C(q,iA,0,0),iA.connect(H).connect(R,0,0),iA.connect(Z).connect(R,0,1),iA.connect(x).connect(R,0,2),iA.connect(P).connect(R,0,3),iA.connect(O).connect(R,0,4),iA.connect(z).connect(R,0,5),R.connect(gA).connect(e.destination)},tA=()=>{q.disconnect(S),E(q,iA,0,0),iA.disconnect(H),H.disconnect(R),iA.disconnect(Z),Z.disconnect(R),iA.disconnect(x),x.disconnect(R),iA.disconnect(P),P.disconnect(R),iA.disconnect(O),O.disconnect(R),iA.disconnect(z),z.disconnect(R),R.disconnect(gA),gA.disconnect(e.destination)};return o(ZQ($,S),eA,tA)},ew=C=>(A,{disableNormalization:I,imag:g,real:B})=>{const Q=g instanceof Float32Array?g:new Float32Array(g),i=B instanceof Float32Array?B:new Float32Array(B),E=A.createPeriodicWave(i,Q,{disableNormalization:I});if(Array.from(g).length<2)throw C();return E},Hi=(C,A,I,g)=>C.createScriptProcessor(A,I,g),sw=(C,A)=>(I,g)=>{const B=g.channelCountMode;if(B==="clamped-max")throw A();if(I.createStereoPanner===void 0)return C(I,g);const Q=I.createStereoPanner();return jI(Q,g),fI(Q,g,"pan"),Object.defineProperty(Q,"channelCountMode",{get:()=>B,set:i=>{if(i!==B)throw A()}}),Q},aw=(C,A,I,g,B,Q)=>{const E=new Float32Array([1,1]),t=Math.PI/2,o={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},e={...o,oversample:"none"},s=(c,l,h,D)=>{const k=new Float32Array(16385),G=new Float32Array(16385);for(let y=0;y<16385;y+=1){const S=y/16384*t;k[y]=Math.cos(S),G[y]=Math.sin(S)}const w=I(c,{...o,gain:0}),M=g(c,{...e,curve:k}),U=g(c,{...e,curve:E}),J=I(c,{...o,gain:0}),K=g(c,{...e,curve:G});return{connectGraph(){l.connect(w),l.connect(U.inputs===void 0?U:U.inputs[0]),l.connect(J),U.connect(h),h.connect(M.inputs===void 0?M:M.inputs[0]),h.connect(K.inputs===void 0?K:K.inputs[0]),M.connect(w.gain),K.connect(J.gain),w.connect(D,0,0),J.connect(D,0,1)},disconnectGraph(){l.disconnect(w),l.disconnect(U.inputs===void 0?U:U.inputs[0]),l.disconnect(J),U.disconnect(h),h.disconnect(M.inputs===void 0?M:M.inputs[0]),h.disconnect(K.inputs===void 0?K:K.inputs[0]),M.disconnect(w.gain),K.disconnect(J.gain),w.disconnect(D,0,0),J.disconnect(D,0,1)}}},a=(c,l,h,D)=>{const k=new Float32Array(16385),G=new Float32Array(16385),w=new Float32Array(16385),M=new Float32Array(16385),U=Math.floor(16385/2);for(let P=0;P<16385;P+=1)if(P>U){const O=(P-U)/(16384-U)*t;k[P]=Math.cos(O),G[P]=Math.sin(O),w[P]=0,M[P]=1}else{const O=P/(16384-U)*t;k[P]=1,G[P]=0,w[P]=Math.cos(O),M[P]=Math.sin(O)}const J=A(c,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),K=I(c,{...o,gain:0}),y=g(c,{...e,curve:k}),S=I(c,{...o,gain:0}),p=g(c,{...e,curve:G}),R=g(c,{...e,curve:E}),q=I(c,{...o,gain:0}),H=g(c,{...e,curve:w}),Z=I(c,{...o,gain:0}),x=g(c,{...e,curve:M});return{connectGraph(){l.connect(J),l.connect(R.inputs===void 0?R:R.inputs[0]),J.connect(K,0),J.connect(S,0),J.connect(q,1),J.connect(Z,1),R.connect(h),h.connect(y.inputs===void 0?y:y.inputs[0]),h.connect(p.inputs===void 0?p:p.inputs[0]),h.connect(H.inputs===void 0?H:H.inputs[0]),h.connect(x.inputs===void 0?x:x.inputs[0]),y.connect(K.gain),p.connect(S.gain),H.connect(q.gain),x.connect(Z.gain),K.connect(D,0,0),q.connect(D,0,0),S.connect(D,0,1),Z.connect(D,0,1)},disconnectGraph(){l.disconnect(J),l.disconnect(R.inputs===void 0?R:R.inputs[0]),J.disconnect(K,0),J.disconnect(S,0),J.disconnect(q,1),J.disconnect(Z,1),R.disconnect(h),h.disconnect(y.inputs===void 0?y:y.inputs[0]),h.disconnect(p.inputs===void 0?p:p.inputs[0]),h.disconnect(H.inputs===void 0?H:H.inputs[0]),h.disconnect(x.inputs===void 0?x:x.inputs[0]),y.disconnect(K.gain),p.disconnect(S.gain),H.disconnect(q.gain),x.disconnect(Z.gain),K.disconnect(D,0,0),q.disconnect(D,0,0),S.disconnect(D,0,1),Z.disconnect(D,0,1)}}},n=(c,l,h,D,k)=>{if(l===1)return s(c,h,D,k);if(l===2)return a(c,h,D,k);throw B()};return(c,{channelCount:l,channelCountMode:h,pan:D,...k})=>{if(h==="max")throw B();const G=C(c,{...k,channelCount:1,channelCountMode:h,numberOfInputs:2}),w=I(c,{...k,channelCount:l,channelCountMode:h,gain:1}),M=I(c,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:D});let{connectGraph:U,disconnectGraph:J}=n(c,l,w,M,G);Object.defineProperty(M.gain,"defaultValue",{get:()=>0}),Object.defineProperty(M.gain,"maxValue",{get:()=>1}),Object.defineProperty(M.gain,"minValue",{get:()=>-1});const K={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(R){w.channelCount!==R&&(y&&J(),{connectGraph:U,disconnectGraph:J}=n(c,R,w,M,G),y&&U()),w.channelCount=R},get channelCountMode(){return w.channelCountMode},set channelCountMode(R){if(R==="clamped-max"||R==="max")throw B();w.channelCountMode=R},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(R){w.channelInterpretation=R},get context(){return w.context},get inputs(){return[w]},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get pan(){return M.gain},addEventListener(...R){return w.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return w.dispatchEvent(R[0])},removeEventListener(...R){return w.removeEventListener(R[0],R[1],R[2])}};let y=!1;const S=()=>{U(),y=!0},p=()=>{J(),y=!1};return Q(ZQ(K,G),S,p)}},nw=(C,A,I,g,B,Q,i)=>(E,t)=>{const o=E.createWaveShaper();if(Q!==null&&Q.name==="webkitAudioContext"&&E.createGain().gain.automationRate===void 0)return I(E,t);jI(o,t);const e=t.curve===null||t.curve instanceof Float32Array?t.curve:new Float32Array(t.curve);if(e!==null&&e.length<2)throw A();pI(o,{curve:e},"curve"),pI(o,t,"oversample");let s=null,a=!1;return i(o,"curve",l=>()=>l.call(o),l=>h=>(l.call(o,h),a&&(g(h)&&s===null?s=C(E,o):!g(h)&&s!==null&&(s(),s=null)),h)),B(o,()=>{a=!0,g(o.curve)&&(s=C(E,o))},()=>{a=!1,s!==null&&(s(),s=null)})},Dw=(C,A,I,g,B)=>(Q,{curve:i,oversample:E,...t})=>{const o=Q.createWaveShaper(),e=Q.createWaveShaper();jI(o,t),jI(e,t);const s=I(Q,{...t,gain:1}),a=I(Q,{...t,gain:-1}),n=I(Q,{...t,gain:1}),c=I(Q,{...t,gain:-1});let l=null,h=!1,D=null;const k={get bufferSize(){},get channelCount(){return o.channelCount},set channelCount(M){s.channelCount=M,a.channelCount=M,o.channelCount=M,n.channelCount=M,e.channelCount=M,c.channelCount=M},get channelCountMode(){return o.channelCountMode},set channelCountMode(M){s.channelCountMode=M,a.channelCountMode=M,o.channelCountMode=M,n.channelCountMode=M,e.channelCountMode=M,c.channelCountMode=M},get channelInterpretation(){return o.channelInterpretation},set channelInterpretation(M){s.channelInterpretation=M,a.channelInterpretation=M,o.channelInterpretation=M,n.channelInterpretation=M,e.channelInterpretation=M,c.channelInterpretation=M},get context(){return o.context},get curve(){return D},set curve(M){if(M!==null&&M.length<2)throw A();if(M===null)o.curve=M,e.curve=M;else{const U=M.length,J=new Float32Array(U+2-U%2),K=new Float32Array(U+2-U%2);J[0]=M[0],K[0]=-M[U-1];const y=Math.ceil((U+1)/2),S=(U+1)/2-1;for(let p=1;p<y;p+=1){const R=p/y*S,q=Math.floor(R),H=Math.ceil(R);J[p]=q===H?M[q]:(1-(R-q))*M[q]+(1-(H-R))*M[H],K[p]=q===H?-M[U-1-q]:-((1-(R-q))*M[U-1-q])-(1-(H-R))*M[U-1-H]}J[y]=U%2===1?M[y-1]:(M[y-2]+M[y-1])/2,o.curve=J,e.curve=K}D=M,h&&(g(D)&&l===null?l=C(Q,s):l!==null&&(l(),l=null))},get inputs(){return[s]},get numberOfInputs(){return o.numberOfInputs},get numberOfOutputs(){return o.numberOfOutputs},get oversample(){return o.oversample},set oversample(M){o.oversample=M,e.oversample=M},addEventListener(...M){return s.addEventListener(M[0],M[1],M[2])},dispatchEvent(...M){return s.dispatchEvent(M[0])},removeEventListener(...M){return s.removeEventListener(M[0],M[1],M[2])}};i!==null&&(k.curve=i instanceof Float32Array?i:new Float32Array(i)),E!==k.oversample&&(k.oversample=E);const G=()=>{s.connect(o).connect(n),s.connect(a).connect(e).connect(c).connect(n),h=!0,g(D)&&(l=C(Q,s))},w=()=>{s.disconnect(o),o.disconnect(n),s.disconnect(a),a.disconnect(e),e.disconnect(c),c.disconnect(n),h=!1,l!==null&&(l(),l=null)};return B(ZQ(k,n),G,w)},wg=()=>new DOMException("","NotSupportedError"),hw={numberOfChannels:1},rw=(C,A,I,g,B)=>class extends C{constructor(i,E,t){let o;if(typeof i=="number"&&E!==void 0&&t!==void 0)o={length:E,numberOfChannels:i,sampleRate:t};else if(typeof i=="object")o=i;else throw new Error("The given parameters are not valid.");const{length:e,numberOfChannels:s,sampleRate:a}={...hw,...o},n=g(s,e,a);A(Gi,()=>Gi(n))||n.addEventListener("statechange",(()=>{let c=0;const l=h=>{this._state==="running"&&(c>0?(n.removeEventListener("statechange",l),h.stopImmediatePropagation(),this._waitForThePromiseToSettle(h)):c+=1)};return l})()),super(n,s),this._length=e,this._nativeOfflineAudioContext=n,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(I()):(this._state="running",B(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,OD(this)}))}_waitForThePromiseToSettle(i){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(i):setTimeout(()=>this._waitForThePromiseToSettle(i))}},cw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},lw=(C,A,I,g,B,Q,i)=>class extends C{constructor(t,o){const e=B(t),s={...cw,...o},a=I(e,s),n=Q(e),c=n?g():null,l=t.sampleRate/2;super(t,!1,a,c),this._detune=A(this,n,a.detune,153600,-153600),this._frequency=A(this,n,a.frequency,l,-l),this._nativeOscillatorNode=a,this._onended=null,this._oscillatorNodeRenderer=c,this._oscillatorNodeRenderer!==null&&s.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=s.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(t){const o=typeof t=="function"?i(this,t):null;this._nativeOscillatorNode.onended=o;const e=this._nativeOscillatorNode.onended;this._onended=e!==null&&e===o?t:e}get type(){return this._nativeOscillatorNode.type}set type(t){this._nativeOscillatorNode.type=t,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(t){this._nativeOscillatorNode.setPeriodicWave(t),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=t)}start(t=0){if(this._nativeOscillatorNode.start(t),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=t),this.context.state!=="closed"){dQ(this);const o=()=>{this._nativeOscillatorNode.removeEventListener("ended",o),HC(this)&&Yi(this)};this._nativeOscillatorNode.addEventListener("ended",o)}}stop(t=0){this._nativeOscillatorNode.stop(t),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=t)}},Sw=(C,A,I,g,B)=>()=>{const Q=new WeakMap;let i=null,E=null,t=null;const o=async(e,s)=>{let a=I(e);const n=ng(a,s);if(!n){const c={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,detune:a.detune.value,frequency:a.frequency.value,periodicWave:i===null?void 0:i,type:a.type};a=A(s,c),E!==null&&a.start(E),t!==null&&a.stop(t)}return Q.set(s,a),n?(await C(s,e.detune,a.detune),await C(s,e.frequency,a.frequency)):(await g(s,e.detune,a.detune),await g(s,e.frequency,a.frequency)),await B(e,s,a),a};return{set periodicWave(e){i=e},set start(e){E=e},set stop(e){t=e},render(e,s){const a=Q.get(s);return a!==void 0?Promise.resolve(a):o(e,s)}}},ww={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Gw=(C,A,I,g,B,Q,i)=>class extends C{constructor(t,o){const e=B(t),s={...ww,...o},a=I(e,s),n=Q(e),c=n?g():null;super(t,!1,a,c),this._nativePannerNode=a,this._orientationX=A(this,n,a.orientationX,cg,yg),this._orientationY=A(this,n,a.orientationY,cg,yg),this._orientationZ=A(this,n,a.orientationZ,cg,yg),this._positionX=A(this,n,a.positionX,cg,yg),this._positionY=A(this,n,a.positionY,cg,yg),this._positionZ=A(this,n,a.positionZ,cg,yg),i(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(t){this._nativePannerNode.coneInnerAngle=t}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(t){this._nativePannerNode.coneOuterAngle=t}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(t){this._nativePannerNode.coneOuterGain=t}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(t){this._nativePannerNode.distanceModel=t}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(t){this._nativePannerNode.maxDistance=t}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(t){this._nativePannerNode.panningModel=t}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(t){this._nativePannerNode.refDistance=t}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(t){this._nativePannerNode.rolloffFactor=t}},kw=(C,A,I,g,B,Q,i,E,t,o)=>()=>{const e=new WeakMap;let s=null;const a=async(n,c)=>{let l=null,h=Q(n);const D={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation},k={...D,coneInnerAngle:h.coneInnerAngle,coneOuterAngle:h.coneOuterAngle,coneOuterGain:h.coneOuterGain,distanceModel:h.distanceModel,maxDistance:h.maxDistance,panningModel:h.panningModel,refDistance:h.refDistance,rolloffFactor:h.rolloffFactor},G=ng(h,c);if("bufferSize"in h)l=g(c,{...D,gain:1});else if(!G){const w={...k,orientationX:h.orientationX.value,orientationY:h.orientationY.value,orientationZ:h.orientationZ.value,positionX:h.positionX.value,positionY:h.positionY.value,positionZ:h.positionZ.value};h=B(c,w)}if(e.set(c,l===null?h:l),l!==null){if(s===null){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const p=new i(6,n.context.length,c.sampleRate),R=A(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});R.connect(p.destination),s=(async()=>{const q=await Promise.all([n.orientationX,n.orientationY,n.orientationZ,n.positionX,n.positionY,n.positionZ].map(async(H,Z)=>{const x=I(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:Z===0?1:0});return await E(p,H,x.offset),x}));for(let H=0;H<6;H+=1)q[H].connect(R,0,H),q[H].start(0);return o(p)})()}const w=await s,M=g(c,{...D,gain:1});await t(n,c,M);const U=[];for(let p=0;p<w.numberOfChannels;p+=1)U.push(w.getChannelData(p));let J=[U[0][0],U[1][0],U[2][0]],K=[U[3][0],U[4][0],U[5][0]],y=g(c,{...D,gain:1}),S=B(c,{...k,orientationX:J[0],orientationY:J[1],orientationZ:J[2],positionX:K[0],positionY:K[1],positionZ:K[2]});M.connect(y).connect(S.inputs[0]),S.connect(l);for(let p=128;p<w.length;p+=128){const R=[U[0][p],U[1][p],U[2][p]],q=[U[3][p],U[4][p],U[5][p]];if(R.some((H,Z)=>H!==J[Z])||q.some((H,Z)=>H!==K[Z])){J=R,K=q;const H=p/c.sampleRate;y.gain.setValueAtTime(0,H),y=g(c,{...D,gain:0}),S=B(c,{...k,orientationX:J[0],orientationY:J[1],orientationZ:J[2],positionX:K[0],positionY:K[1],positionZ:K[2]}),y.gain.setValueAtTime(1,H),M.connect(y).connect(S.inputs[0]),S.connect(l)}}return l}return G?(await C(c,n.orientationX,h.orientationX),await C(c,n.orientationY,h.orientationY),await C(c,n.orientationZ,h.orientationZ),await C(c,n.positionX,h.positionX),await C(c,n.positionY,h.positionY),await C(c,n.positionZ,h.positionZ)):(await E(c,n.orientationX,h.orientationX),await E(c,n.orientationY,h.orientationY),await E(c,n.orientationZ,h.orientationZ),await E(c,n.positionX,h.positionX),await E(c,n.positionY,h.positionY),await E(c,n.positionZ,h.positionZ)),vQ(h)?await t(n,c,h.inputs[0]):await t(n,c,h),h};return{render(n,c){const l=e.get(c);return l!==void 0?Promise.resolve(l):a(n,c)}}},yw={disableNormalization:!1},Mw=(C,A,I,g)=>class Ah{constructor(Q,i){const E=A(Q),t=g({...yw,...i}),o=C(E,t);return I.add(o),o}static[Symbol.hasInstance](Q){return Q!==null&&typeof Q=="object"&&Object.getPrototypeOf(Q)===Ah.prototype||I.has(Q)}},Uw=(C,A)=>(I,g,B)=>(C(g).replay(B),A(g,I,B)),Nw=(C,A,I)=>async(g,B,Q)=>{const i=C(g);await Promise.all(i.activeInputs.map((E,t)=>Array.from(E).map(async([o,e])=>{const a=await A(o).render(o,B),n=g.context.destination;!I(o)&&(g!==n||!I(g))&&a.connect(Q,e,t)})).reduce((E,t)=>[...E,...t],[]))},Kw=(C,A,I)=>async(g,B,Q)=>{const i=A(g);await Promise.all(Array.from(i.activeInputs).map(async([E,t])=>{const e=await C(E).render(E,B);I(E)||e.connect(Q,t)}))},Jw=(C,A,I,g)=>B=>C(Gi,()=>Gi(B))?Promise.resolve(C(g,g)).then(Q=>{if(!Q){const i=I(B,512,0,1);B.oncomplete=()=>{i.onaudioprocess=null,i.disconnect()},i.onaudioprocess=()=>B.currentTime,i.connect(B.destination)}return B.startRendering()}):new Promise(Q=>{const i=A(B,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});B.oncomplete=E=>{i.disconnect(),Q(E.renderedBuffer)},i.connect(B.destination),B.startRendering()}),Fw=C=>(A,I)=>{C.set(A,I)},pw=C=>(A,I)=>C.set(A,I),dw=(C,A,I,g,B,Q,i,E)=>(t,o)=>I(t).render(t,o).then(()=>Promise.all(Array.from(g(o)).map(e=>I(e).render(e,o)))).then(()=>B(o)).then(e=>(typeof e.copyFromChannel!="function"?(i(e),Ve(e)):A(Q,()=>Q(e))||E(e),C.add(e),e)),Rw={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},uw=(C,A,I,g,B,Q)=>class extends C{constructor(E,t){const o=B(E),e={...Rw,...t},s=I(o,e),a=Q(o),n=a?g():null;super(E,!1,s,n),this._pan=A(this,a,s.pan)}get pan(){return this._pan}},qw=(C,A,I,g,B)=>()=>{const Q=new WeakMap,i=async(E,t)=>{let o=I(E);const e=ng(o,t);if(!e){const s={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,pan:o.pan.value};o=A(t,s)}return Q.set(t,o),e?await C(t,E.pan,o.pan):await g(t,E.pan,o.pan),vQ(o)?await B(E,t,o.inputs[0]):await B(E,t,o),o};return{render(E,t){const o=Q.get(t);return o!==void 0?Promise.resolve(o):i(E,t)}}},Yw=C=>()=>{if(C===null)return!1;try{new C({length:1,sampleRate:44100})}catch{return!1}return!0},fw=(C,A)=>async()=>{if(C===null)return!0;if(A===null)return!1;const I=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),g=new A(1,128,44100),B=URL.createObjectURL(I);let Q=!1,i=!1;try{await g.audioWorklet.addModule(B);const E=new C(g,"a",{numberOfOutputs:0}),t=g.createOscillator();E.port.onmessage=()=>Q=!0,E.onprocessorerror=()=>i=!0,t.connect(E),t.start(0),await g.startRendering(),await new Promise(o=>setTimeout(o))}catch{}finally{URL.revokeObjectURL(B)}return Q&&!i},Lw=(C,A)=>()=>{if(A===null)return Promise.resolve(!1);const I=new A(1,1,44100),g=C(I,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(B=>{I.oncomplete=()=>{g.disconnect(),B(I.currentTime!==0)},I.startRendering()})},mw=()=>new DOMException("","UnknownError"),Hw={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Tw=(C,A,I,g,B,Q,i)=>class extends C{constructor(t,o){const e=B(t),s={...Hw,...o},a=I(e,s),c=Q(e)?g():null;super(t,!0,a,c),this._isCurveNullified=!1,this._nativeWaveShaperNode=a,i(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(t){if(t===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(t.length<2)throw A();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=t}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(t){this._nativeWaveShaperNode.oversample=t}},xw=(C,A,I)=>()=>{const g=new WeakMap,B=async(Q,i)=>{let E=A(Q);if(!ng(E,i)){const o={channelCount:E.channelCount,channelCountMode:E.channelCountMode,channelInterpretation:E.channelInterpretation,curve:E.curve,oversample:E.oversample};E=C(i,o)}return g.set(i,E),vQ(E)?await I(Q,i,E.inputs[0]):await I(Q,i,E),E};return{render(Q,i){const E=g.get(i);return E!==void 0?Promise.resolve(E):B(Q,i)}}},bw=()=>typeof window>"u"?null:window,_w=(C,A)=>I=>{I.copyFromChannel=(g,B,Q=0)=>{const i=C(Q),E=C(B);if(E>=I.numberOfChannels)throw A();const t=I.length,o=I.getChannelData(E),e=g.length;for(let s=i<0?-i:0;s+i<t&&s<e;s+=1)g[s]=o[s+i]},I.copyToChannel=(g,B,Q=0)=>{const i=C(Q),E=C(B);if(E>=I.numberOfChannels)throw A();const t=I.length,o=I.getChannelData(E),e=g.length;for(let s=i<0?-i:0;s+i<t&&s<e;s+=1)o[s+i]=g[s]}},Ow=C=>A=>{A.copyFromChannel=(I=>(g,B,Q=0)=>{const i=C(Q),E=C(B);if(i<A.length)return I.call(A,g,E,i)})(A.copyFromChannel),A.copyToChannel=(I=>(g,B,Q=0)=>{const i=C(Q),E=C(B);if(i<A.length)return I.call(A,g,E,i)})(A.copyToChannel)},vw=C=>(A,I)=>{const g=I.createBuffer(1,1,44100);A.buffer===null&&(A.buffer=g),C(A,"buffer",B=>()=>{const Q=B.call(A);return Q===g?null:Q},B=>Q=>B.call(A,Q===null?g:Q))},Zw=(C,A)=>(I,g)=>{g.channelCount=1,g.channelCountMode="explicit",Object.defineProperty(g,"channelCount",{get:()=>1,set:()=>{throw C()}}),Object.defineProperty(g,"channelCountMode",{get:()=>"explicit",set:()=>{throw C()}});const B=I.createBufferSource();A(g,()=>{const E=g.numberOfInputs;for(let t=0;t<E;t+=1)B.connect(g,0,t)},()=>B.disconnect(g))},Ih=(C,A,I)=>C.copyFromChannel===void 0?C.getChannelData(I)[0]:(C.copyFromChannel(A,I),A[0]),gh=C=>{if(C===null)return!1;const A=C.length;return A%2!==0?C[Math.floor(A/2)]!==0:C[A/2-1]+C[A/2]!==0},Ti=(C,A,I,g)=>{let B=C;for(;!B.hasOwnProperty(A);)B=Object.getPrototypeOf(B);const{get:Q,set:i}=Object.getOwnPropertyDescriptor(B,A);Object.defineProperty(C,A,{get:I(Q),set:g(i)})},Ww=C=>({...C,outputChannelCount:C.outputChannelCount!==void 0?C.outputChannelCount:C.numberOfInputs===1&&C.numberOfOutputs===1?[C.channelCount]:Array.from({length:C.numberOfOutputs},()=>1)}),Pw=C=>({...C,channelCount:C.numberOfOutputs}),Vw=C=>{const{imag:A,real:I}=C;return A===void 0?I===void 0?{...C,imag:[0,0],real:[0,0]}:{...C,imag:Array.from(I,()=>0),real:I}:I===void 0?{...C,imag:A,real:Array.from(A,()=>0)}:{...C,imag:A,real:I}},Ch=(C,A,I)=>{try{C.setValueAtTime(A,I)}catch(g){if(g.code!==9)throw g;Ch(C,A,I+1e-7)}},jw=C=>{const A=C.createBufferSource();A.start();try{A.start()}catch{return!0}return!1},Xw=C=>{const A=C.createBufferSource(),I=C.createBuffer(1,1,44100);A.buffer=I;try{A.start(0,1)}catch{return!1}return!0},zw=C=>{const A=C.createBufferSource();A.start();try{A.stop()}catch{return!1}return!0},As=C=>{const A=C.createOscillator();try{A.start(-1)}catch(I){return I instanceof RangeError}return!1},Bh=C=>{const A=C.createBuffer(1,1,44100),I=C.createBufferSource();I.buffer=A,I.start(),I.stop();try{return I.stop(),!0}catch{return!1}},Is=C=>{const A=C.createOscillator();try{A.stop(-1)}catch(I){return I instanceof RangeError}return!1},$w=C=>{const{port1:A,port2:I}=new MessageChannel;try{A.postMessage(C)}finally{A.close(),I.close()}},AG=C=>{C.start=(A=>(I=0,g=0,B)=>{const Q=C.buffer,i=Q===null?g:Math.min(Q.duration,g);Q!==null&&i>Q.duration-.5/C.context.sampleRate?A.call(C,I,0,0):A.call(C,I,i,B)})(C.start)},Qh=(C,A)=>{const I=A.createGain();C.connect(I);const g=(B=>()=>{B.call(C,I),C.removeEventListener("ended",g)})(C.disconnect);C.addEventListener("ended",g),ZQ(C,I),C.stop=(B=>{let Q=!1;return(i=0)=>{if(Q)try{B.call(C,i)}catch{I.gain.setValueAtTime(0,i)}else B.call(C,i),Q=!0}})(C.stop)},WQ=(C,A)=>I=>{const g={value:C};return Object.defineProperties(I,{currentTarget:g,target:g}),typeof A=="function"?A.call(C,I):A.handleEvent.call(C,I)},IG=Gc(WB),gG=Kc(WB),CG=Hl(nt),ih=new WeakMap,BG=CS(ih),sC=hl(new Map,new WeakMap),GC=bw(),Eh=uS(sC,kC),gs=gS(lg),Eg=Nw(lg,gs,TB),QG=Rc(Eh,KI,Eg),yI=iS(at),WC=iw(GC),lI=yS(WC),th=new WeakMap,oh=Vl(WQ),xi=LS(GC),Cs=SS(xi),Bs=wS(GC),eh=GS(GC),ki=HS(GC),TI=Cl(kc(LD),Nc(IG,gG,bE,CG,_E,lg,BG,qi,KI,WB,HC,TB,FE),sC,DS(fo,_E,lg,KI,wi,HC),kC,Dt,wg,Yl(bE,fo,lg,KI,wi,yI,HC,lI),bl(th,lg,iC),oh,yI,Cs,Bs,eh,lI,ki),iG=dc(TI,QG,kC,Eh,yI,lI),Qs=new WeakSet,Ha=qS(GC),sh=Jl(new Uint32Array(1)),is=_w(sh,kC),Es=Ow(sh),ah=qc(Qs,sC,wg,Ha,WC,Yw(Ha),is,Es),ht=Jc(Jg),nh=Kw(gs,fi,TB),yC=kl(nh),PQ=fS(ht,sC,jw,Xw,zw,As,Bh,Is,AG,vw(Ti),Qh),MC=Uw(BS(fi),nh),EG=Lc(yC,PQ,KI,MC,Eg),aC=Bl(yc(mD),th,Pe,Ql,hc,rc,cc,lc,Sc,uo,YD,xi,Ch),tG=fc(TI,EG,aC,gg,PQ,yI,lI,WQ),oG=Zc(TI,Wc,kC,gg,mS(Jg,Ti),yI,lI,Eg),eG=Dl(yC,zD,KI,MC,Eg),PB=pw(ih),sG=nl(TI,aC,eG,Dt,zD,yI,lI,PB),GB=dS(WB,Bs),aG=Zw(gg,GB),kB=ZS(xi,aG),nG=ll(kB,KI,Eg),DG=cl(TI,nG,kB,yI,lI),hG=Gl(mi,KI,Eg),rG=wl(TI,hG,mi,yI,lI,Pw),cG=VS(ht,PQ,Jg,GB),VQ=PS(ht,sC,cG,As,Is),lG=Kl(yC,VQ,KI,MC,Eg),SG=Nl(TI,aC,lG,VQ,yI,lI,WQ),Dh=jS(wg,Ti),wG=dl(Dh,KI,Eg),GG=pl(TI,wG,Dh,yI,lI,PB),kG=ml(yC,$D,KI,MC,Eg),yG=Ll(TI,aC,kG,$D,yI,lI,PB),hh=XS(wg),MG=Zl(yC,hh,KI,MC,Eg),UG=vl(TI,aC,MG,hh,wg,yI,lI,PB),NG=AS(yC,Jg,KI,MC,Eg),KG=$l(TI,aC,NG,Jg,yI,lI),JG=Iw(Dt,gg,Hi,wg),rt=Jw(sC,Jg,Hi,Lw(Jg,WC)),FG=nS(PQ,KI,WC,Eg,rt),pG=zS(JG),dG=sS(TI,pG,FG,yI,lI,PB),RG=Pc(aC,kB,VQ,Hi,wg,Ih,lI,Ti),rh=new WeakMap,uG=pS(oG,RG,oh,lI,rh,WQ),ch=Ew(ht,sC,As,Bh,Is,Qh),qG=Sw(yC,ch,KI,MC,Eg),YG=lw(TI,aC,ch,qG,yI,lI,WQ),lh=Ml(PQ),fG=Dw(lh,gg,Jg,gh,GB),ct=nw(lh,gg,fG,gh,GB,xi,Ti),LG=ow(bE,gg,kB,Jg,Hi,ct,wg,_E,Ih,GB),Sh=tw(LG),mG=kw(yC,kB,VQ,Jg,Sh,KI,WC,MC,Eg,rt),HG=Gw(TI,aC,Sh,mG,yI,lI,PB),TG=ew(kC),xG=Mw(TG,yI,new WeakSet,Vw),bG=aw(kB,mi,Jg,ct,wg,GB),wh=sw(bG,wg),_G=qw(yC,wh,KI,MC,Eg),OG=uw(TI,aC,wh,_G,yI,lI),vG=xw(ct,KI,Eg),ZG=Tw(TI,gg,ct,vG,yI,lI,PB),Gh=MS(GC),ts=jl(GC),kh=new WeakMap,WG=ES(kh,WC),PG=Gh?Uc(sC,wg,Pl(GC),ts,Xl(wc),yI,WG,lI,ki,new WeakMap,new WeakMap,fw(ki,WC),GC):void 0,VG=kS(Cs,lI),jG=ql(Qs,sC,ul,Wl,new WeakSet,yI,VG,TE,Gi,is,Es),yh=sl(PG,iG,ah,tG,sG,DG,rG,SG,GG,jG,yG,UG,KG,dG,uG,YG,HG,xG,OG,ZG),XG=US(TI,gw,yI,lI),zG=KS(TI,Cw,yI,lI),$G=JS(TI,Bw,yI,lI),Ak=Qw(gg,lI),Ik=FS(TI,Ak,yI),gk=vc(yh,gg,wg,mw,XG,zG,$G,Ik,xi),os=tS(rh),Ck=Fc(os),Mh=yl(kC),Bk=Tl(os),Uh=_l(kC),Nh=new WeakMap,Qk=IS(Nh,iC),ik=vS(Mh,kC,gg,kB,mi,VQ,Jg,Hi,wg,Uh,ts,Qk,GB),Ek=xS(gg,ik,Jg,wg,GB),tk=el(yC,Mh,PQ,kB,mi,VQ,Jg,Bk,Uh,ts,KI,ki,WC,MC,Eg,rt),ok=QS(kh),ek=Fw(Nh),Ta=Gh?El(Ck,TI,aC,tk,Ek,lg,ok,yI,lI,ki,Ww,ek,$w,WQ):void 0,sk=Rl(wg,WC),ak=dw(Qs,sC,gs,os,rt,TE,is,Es),nk=rw(yh,sC,gg,sk,ak),Dk=hS(at,Cs),hk=rS(We,Bs),rk=cS(Pe,eh),ck=lS(at,lI);function _g(C){return C===void 0}function II(C){return C!==void 0}function lk(C){return typeof C=="function"}function sB(C){return typeof C=="number"}function HB(C){return Object.prototype.toString.call(C)==="[object Object]"&&C.constructor===Object}function Sk(C){return typeof C=="boolean"}function CC(C){return Array.isArray(C)}function xC(C){return typeof C=="string"}function IE(C){return xC(C)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(C)}function vA(C,A){if(!C)throw new Error(A)}function EC(C,A,I=1/0){if(!(A<=C&&C<=I))throw new RangeError(`Value must be within [${A}, ${I}], got: ${C}`)}function Kh(C){!C.isOffline&&C.state!=="running"&&es('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Jh=!1,xa=!1;function ba(C){Jh=C}function wk(C){_g(C)&&Jh&&!xa&&(xa=!0,es("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Fh=console;function Gk(...C){Fh.log(...C)}function es(...C){Fh.warn(...C)}function kk(C){return new gk(C)}function yk(C,A,I){return new nk(C,A,I)}const qg=typeof self=="object"?self:null,Mk=qg&&(qg.hasOwnProperty("AudioContext")||qg.hasOwnProperty("webkitAudioContext"));function Uk(C,A,I){return vA(II(Ta),"AudioWorkletNode only works in a secure context (https or localhost)"),new(C instanceof qg?.BaseAudioContext?qg?.AudioWorkletNode:Ta)(C,A,I)}function nC(C,A,I,g){var B=arguments.length,Q=B<3?A:g===null?g=Object.getOwnPropertyDescriptor(A,I):g,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Q=Reflect.decorate(C,A,I,g);else for(var E=C.length-1;E>=0;E--)(i=C[E])&&(Q=(B<3?i(Q):B>3?i(A,I,Q):i(A,I))||Q);return B>3&&Q&&Object.defineProperty(A,I,Q),Q}function HI(C,A,I,g){function B(Q){return Q instanceof I?Q:new I(function(i){i(Q)})}return new(I||(I=Promise))(function(Q,i){function E(e){try{o(g.next(e))}catch(s){i(s)}}function t(e){try{o(g.throw(e))}catch(s){i(s)}}function o(e){e.done?Q(e.value):B(e.value).then(E,t)}o((g=g.apply(C,A||[])).next())})}class Nk{constructor(A,I,g,B){this._callback=A,this._type=I,this._minimumUpdateInterval=Math.max(128/(B||44100),.001),this.updateInterval=g,this._createClock()}_createWorker(){const A=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),I=URL.createObjectURL(A),g=new Worker(I);g.onmessage=this._callback.bind(this),this._worker=g}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(A){var I;this._updateInterval=Math.max(A,this._minimumUpdateInterval),this._type==="worker"&&((I=this._worker)===null||I===void 0||I.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(A){this._disposeClock(),this._type=A,this._createClock()}dispose(){this._disposeClock()}}function xB(C){return rk(C)}function tB(C){return hk(C)}function pE(C){return ck(C)}function hQ(C){return Dk(C)}function Kk(C){return C instanceof ah}function Jk(C,A){return C==="value"||xB(A)||tB(A)||Kk(A)}function MQ(C,...A){if(!A.length)return C;const I=A.shift();if(HB(C)&&HB(I))for(const g in I)Jk(g,I[g])?C[g]=I[g]:HB(I[g])?(C[g]||Object.assign(C,{[g]:{}}),MQ(C[g],I[g])):Object.assign(C,{[g]:I[g]});return MQ(C,...A)}function Fk(C,A){return C.length===A.length&&C.every((I,g)=>A[g]===I)}function YA(C,A,I=[],g){const B={},Q=Array.from(A);if(HB(Q[0])&&g&&!Reflect.has(Q[0],g)&&(Object.keys(Q[0]).some(E=>Reflect.has(C,E))||(MQ(B,{[g]:Q[0]}),I.splice(I.indexOf(g),1),Q.shift())),Q.length===1&&HB(Q[0]))MQ(B,Q[0]);else for(let i=0;i<I.length;i++)II(Q[i])&&(B[I[i]]=Q[i]);return MQ(C,B)}function pk(C){return C.constructor.getDefaults()}function UQ(C,A){return _g(C)?A:C}function SQ(C,A){return A.forEach(I=>{Reflect.has(C,I)&&delete C[I]}),C}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class PC{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...A){(this.debug||qg&&this.toString()===qg.TONE_DEBUG_CLASS)&&Gk(this,...A)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}PC.version=qD;const ss=1e-6;function RQ(C,A){return C>A+ss}function xo(C,A){return RQ(C,A)||zg(C,A)}function WE(C,A){return C+ss<A}function zg(C,A){return Math.abs(C-A)<ss}function dk(C,A,I){return Math.max(Math.min(C,I),A)}class Og extends PC{constructor(){super(),this.name="Timeline",this._timeline=[];const A=YA(Og.getDefaults(),arguments,["memory"]);this.memory=A.memory,this.increasing=A.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(A){if(vA(Reflect.has(A,"time"),"Timeline: events must have a time attribute"),A.time=A.time.valueOf(),this.increasing&&this.length){const I=this._timeline[this.length-1];vA(xo(A.time,I.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(A)}else{const I=this._search(A.time);this._timeline.splice(I+1,0,A)}if(this.length>this.memory){const I=this.length-this.memory;this._timeline.splice(0,I)}return this}remove(A){const I=this._timeline.indexOf(A);return I!==-1&&this._timeline.splice(I,1),this}get(A,I="time"){const g=this._search(A,I);return g!==-1?this._timeline[g]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(A,I="time"){const g=this._search(A,I);return g+1<this._timeline.length?this._timeline[g+1]:null}getBefore(A){const I=this._timeline.length;if(I>0&&this._timeline[I-1].time<A)return this._timeline[I-1];const g=this._search(A);return g-1>=0?this._timeline[g-1]:null}cancel(A){if(this._timeline.length>1){let I=this._search(A);if(I>=0)if(zg(this._timeline[I].time,A)){for(let g=I;g>=0&&zg(this._timeline[g].time,A);g--)I=g;this._timeline=this._timeline.slice(0,I)}else this._timeline=this._timeline.slice(0,I+1);else this._timeline=[]}else this._timeline.length===1&&xo(this._timeline[0].time,A)&&(this._timeline=[]);return this}cancelBefore(A){const I=this._search(A);return I>=0&&(this._timeline=this._timeline.slice(I+1)),this}previousEvent(A){const I=this._timeline.indexOf(A);return I>0?this._timeline[I-1]:null}_search(A,I="time"){if(this._timeline.length===0)return-1;let g=0;const B=this._timeline.length;let Q=B;if(B>0&&this._timeline[B-1][I]<=A)return B-1;for(;g<Q;){let i=Math.floor(g+(Q-g)/2);const E=this._timeline[i],t=this._timeline[i+1];if(zg(E[I],A)){for(let o=i;o<this._timeline.length;o++){const e=this._timeline[o];if(zg(e[I],A))i=o;else break}return i}else{if(WE(E[I],A)&&RQ(t[I],A))return i;RQ(E[I],A)?Q=i:g=i+1}}return-1}_iterate(A,I=0,g=this._timeline.length-1){this._timeline.slice(I,g+1).forEach(A)}forEach(A){return this._iterate(A),this}forEachBefore(A,I){const g=this._search(A);return g!==-1&&this._iterate(I,0,g),this}forEachAfter(A,I){const g=this._search(A);return this._iterate(I,g+1),this}forEachBetween(A,I,g){let B=this._search(A),Q=this._search(I);return B!==-1&&Q!==-1?(this._timeline[B].time!==A&&(B+=1),this._timeline[Q].time===I&&(Q-=1),this._iterate(g,B,Q)):B===-1&&this._iterate(g,0,Q),this}forEachFrom(A,I){let g=this._search(A);for(;g>=0&&this._timeline[g].time>=A;)g--;return this._iterate(I,g+1),this}forEachAtTime(A,I){const g=this._search(A);if(g!==-1&&zg(this._timeline[g].time,A)){let B=g;for(let Q=g;Q>=0&&zg(this._timeline[Q].time,A);Q--)B=Q;this._iterate(Q=>{I(Q)},B,g)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const ph=[];function lt(C){ph.push(C)}function Rk(C){ph.forEach(A=>A(C))}const dh=[];function St(C){dh.push(C)}function uk(C){dh.forEach(A=>A(C))}class bi extends PC{constructor(){super(...arguments),this.name="Emitter"}on(A,I){return A.split(/\W+/).forEach(B=>{_g(this._events)&&(this._events={}),this._events.hasOwnProperty(B)||(this._events[B]=[]),this._events[B].push(I)}),this}once(A,I){const g=(...B)=>{I(...B),this.off(A,g)};return this.on(A,g),this}off(A,I){return A.split(/\W+/).forEach(B=>{if(_g(this._events)&&(this._events={}),this._events.hasOwnProperty(B))if(_g(I))this._events[B]=[];else{const Q=this._events[B];for(let i=Q.length-1;i>=0;i--)Q[i]===I&&Q.splice(i,1)}}),this}emit(A,...I){if(this._events&&this._events.hasOwnProperty(A)){const g=this._events[A].slice(0);for(let B=0,Q=g.length;B<Q;B++)g[B].apply(this,I)}return this}static mixin(A){["on","once","off","emit"].forEach(I=>{const g=Object.getOwnPropertyDescriptor(bi.prototype,I);Object.defineProperty(A.prototype,I,g)})}dispose(){return super.dispose(),this._events=void 0,this}}class Rh extends bi{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class _i extends Rh{constructor(){var A,I;super(),this.name="Context",this._constants=new Map,this._timeouts=new Og,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const g=YA(_i.getDefaults(),arguments,["context"]);g.context?(this._context=g.context,this._latencyHint=((A=arguments[0])===null||A===void 0?void 0:A.latencyHint)||""):(this._context=kk({latencyHint:g.latencyHint}),this._latencyHint=g.latencyHint),this._ticker=new Nk(this.emit.bind(this,"tick"),g.clockSource,g.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((I=arguments[0])===null||I===void 0)&&I.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=g.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Rk(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(A,I,g){return this._context.createBuffer(A,I,g)}createChannelMerger(A){return this._context.createChannelMerger(A)}createChannelSplitter(A){return this._context.createChannelSplitter(A)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(A){return this._context.createDelay(A)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(A,I){return this._context.createIIRFilter(A,I)}createPanner(){return this._context.createPanner()}createPeriodicWave(A,I,g){return this._context.createPeriodicWave(A,I,g)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(A){return vA(hQ(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(A)}createMediaElementSource(A){return vA(hQ(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(A)}createMediaStreamDestination(){return vA(hQ(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(A){return this._context.decodeAudioData(A)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(A){vA(!this._initialized,"The listener cannot be set after initialization."),this._listener=A}get transport(){return this.initialize(),this._transport}set transport(A){vA(!this._initialized,"The transport cannot be set after initialization."),this._transport=A}get draw(){return this.initialize(),this._draw}set draw(A){vA(!this._initialized,"Draw cannot be set after initialization."),this._draw=A}get destination(){return this.initialize(),this._destination}set destination(A){vA(!this._initialized,"The destination cannot be set after initialization."),this._destination=A}createAudioWorkletNode(A,I){return Uk(this.rawContext,A,I)}addAudioWorkletModule(A){return HI(this,void 0,void 0,function*(){vA(II(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(A)),yield this._workletPromise})}workletsAreReady(){return HI(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(A){this._ticker.updateInterval=A}get clockSource(){return this._ticker.type}set clockSource(A){this._ticker.type=A}get lookAhead(){return this._lookAhead}set lookAhead(A){this._lookAhead=A,this.updateInterval=A?A/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return hQ(this._context)?this._context.resume():Promise.resolve()}close(){return HI(this,void 0,void 0,function*(){hQ(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&uk(this)})}getConstant(A){if(this._constants.has(A))return this._constants.get(A);{const I=this._context.createBuffer(1,128,this._context.sampleRate),g=I.getChannelData(0);for(let Q=0;Q<g.length;Q++)g[Q]=A;const B=this._context.createBufferSource();return B.channelCount=1,B.channelCountMode="explicit",B.buffer=I,B.loop=!0,B.start(0),this._constants.set(A,B),B}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(A=>this._constants[A].disconnect()),this.close(),this}_timeoutLoop(){const A=this.now();let I=this._timeouts.peek();for(;this._timeouts.length&&I&&I.time<=A;)I.callback(),this._timeouts.shift(),I=this._timeouts.peek()}setTimeout(A,I){this._timeoutIds++;const g=this.now();return this._timeouts.add({callback:A,id:this._timeoutIds,time:g+I}),this._timeoutIds}clearTimeout(A){return this._timeouts.forEach(I=>{I.id===A&&this._timeouts.remove(I)}),this}clearInterval(A){return this.clearTimeout(A)}setInterval(A,I){const g=++this._timeoutIds,B=()=>{const Q=this.now();this._timeouts.add({callback:()=>{A(),B()},id:g,time:Q+I})};return B(),g}}class qk extends Rh{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(A,I,g){return{}}createChannelMerger(A){return{}}createChannelSplitter(A){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(A){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(A,I){return{}}createPanner(){return{}}createPeriodicWave(A,I,g){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(A){return{}}createMediaElementSource(A){return{}}createMediaStreamDestination(){return{}}decodeAudioData(A){return Promise.resolve({})}createAudioWorkletNode(A,I){return{}}get rawContext(){return{}}addAudioWorkletModule(A){return HI(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(A,I){return 0}clearTimeout(A){return this}setInterval(A,I){return 0}clearInterval(A){return this}getConstant(A){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(A){}get destination(){return{}}set destination(A){}now(){return 0}immediate(){return 0}}function MI(C,A){CC(A)?A.forEach(I=>MI(C,I)):Object.defineProperty(C,A,{enumerable:!0,writable:!1})}function as(C,A){CC(A)?A.forEach(I=>as(C,I)):Object.defineProperty(C,A,{writable:!0})}const DI=()=>{};class rI extends PC{constructor(){super(),this.name="ToneAudioBuffer",this.onload=DI;const A=YA(rI.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=A.reverse,this.onload=A.onload,xC(A.url)?this.load(A.url).catch(A.onerror):A.url&&this.set(A.url)}static getDefaults(){return{onerror:DI,onload:DI,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:AC().sampleRate}set(A){return A instanceof rI?A.loaded?this._buffer=A.get():A.onload=()=>{this.set(A),this.onload(this)}:this._buffer=A,this._reversed&&this._reverse(),this}get(){return this._buffer}load(A){return HI(this,void 0,void 0,function*(){const I=rI.load(A).then(g=>{this.set(g),this.onload(this)});rI.downloads.push(I);try{yield I}finally{const g=rI.downloads.indexOf(I);rI.downloads.splice(g,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(A){const I=CC(A)&&A[0].length>0,g=I?A.length:1,B=I?A[0].length:A.length,Q=AC(),i=Q.createBuffer(g,B,Q.sampleRate),E=!I&&g===1?[A]:A;for(let t=0;t<g;t++)i.copyToChannel(E[t],t);return this._buffer=i,this}toMono(A){if(sB(A))this.fromArray(this.toArray(A));else{let I=new Float32Array(this.length);const g=this.numberOfChannels;for(let B=0;B<g;B++){const Q=this.toArray(B);for(let i=0;i<Q.length;i++)I[i]+=Q[i]}I=I.map(B=>B/g),this.fromArray(I)}return this}toArray(A){if(sB(A))return this.getChannelData(A);if(this.numberOfChannels===1)return this.toArray(0);{const I=[];for(let g=0;g<this.numberOfChannels;g++)I[g]=this.getChannelData(g);return I}}getChannelData(A){return this._buffer?this._buffer.getChannelData(A):new Float32Array(0)}slice(A,I=this.duration){vA(this.loaded,"Buffer is not loaded");const g=Math.floor(A*this.sampleRate),B=Math.floor(I*this.sampleRate);vA(g<B,"The start time must be less than the end time");const Q=B-g,i=AC().createBuffer(this.numberOfChannels,Q,this.sampleRate);for(let E=0;E<this.numberOfChannels;E++)i.copyToChannel(this.getChannelData(E).subarray(g,B),E);return new rI(i)}_reverse(){if(this.loaded)for(let A=0;A<this.numberOfChannels;A++)this.getChannelData(A).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(A){this._reversed!==A&&(this._reversed=A,this._reverse())}static fromArray(A){return new rI().fromArray(A)}static fromUrl(A){return HI(this,void 0,void 0,function*(){return yield new rI().load(A)})}static load(A){return HI(this,void 0,void 0,function*(){const I=A.match(/\[([^\]\[]+\|.+)\]$/);if(I){const t=I[1].split("|");let o=t[0];for(const e of t)if(rI.supportsType(e)){o=e;break}A=A.replace(I[0],o)}const g=rI.baseUrl===""||rI.baseUrl.endsWith("/")?rI.baseUrl:rI.baseUrl+"/",B=document.createElement("a");B.href=g+A,B.pathname=(B.pathname+B.hash).split("/").map(encodeURIComponent).join("/");const Q=yield fetch(B.href);if(!Q.ok)throw new Error(`could not load url: ${A}`);const i=yield Q.arrayBuffer();return yield AC().decodeAudioData(i)})}static supportsType(A){const I=A.split("."),g=I[I.length-1];return document.createElement("audio").canPlayType("audio/"+g)!==""}static loaded(){return HI(this,void 0,void 0,function*(){for(yield Promise.resolve();rI.downloads.length;)yield rI.downloads[0]})}}rI.baseUrl="";rI.downloads=[];class wt extends _i{constructor(){super({clockSource:"offline",context:pE(arguments[0])?arguments[0]:yk(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:pE(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=pE(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(A){return HI(this,void 0,void 0,function*(){let I=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,I++;const g=Math.floor(this.sampleRate/128);A&&I%g===0&&(yield new Promise(B=>setTimeout(B,1)))}})}render(){return HI(this,arguments,void 0,function*(A=!0){yield this.workletsAreReady(),yield this._renderClock(A);const I=yield this._context.startRendering();return new rI(I)})}close(){return Promise.resolve()}}const uh=new qk;let YB=uh;function AC(){return YB===uh&&Mk&&Yk(new _i),YB}function Yk(C,A=!1){A&&YB.dispose(),hQ(C)?YB=new _i(C):pE(C)?YB=new wt(C):YB=C}function fk(){return YB.resume()}if(qg&&!qg.TONE_SILENCE_LOGGING){const A=` * Tone.js v${qD} * `;console.log(`%c${A}`,"background: #000; color: #fff")}function Lk(C){return Math.pow(10,C/20)}function mk(C){return 20*(Math.log(C)/Math.LN10)}function qh(C){return Math.pow(2,C/12)}let Gt=440;function Hk(){return Gt}function Tk(C){Gt=C}function bo(C){return Math.round(Yh(C))}function Yh(C){return 69+12*Math.log2(C/Gt)}function xk(C){return Gt*Math.pow(2,(C-69)/12)}class ns extends PC{constructor(A,I,g){super(),this.defaultUnits="s",this._val=I,this._units=g,this.context=A,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:A=>this._frequencyToUnits(parseFloat(A)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:A=>this._ticksToUnits(parseInt(A,10)),regexp:/^(\d+)i$/i},m:{method:A=>this._beatsToUnits(parseInt(A,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(A,I)=>{const g=parseInt(A,10),B=I==="."?1.5:1;return g===1?this._beatsToUnits(this._getTimeSignature())*B:this._beatsToUnits(4/g)*B},regexp:/^(\d+)n(\.?)$/i},number:{method:A=>this._expressions[this.defaultUnits].method.call(this,A),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:A=>this._secondsToUnits(parseFloat(A)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:A=>parseInt(A,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:A=>{const I=parseInt(A,10);return this._beatsToUnits(8/(Math.floor(I)*3))},regexp:/^(\d+)t$/i},tr:{method:(A,I,g)=>{let B=0;return A&&A!=="0"&&(B+=this._beatsToUnits(this._getTimeSignature()*parseFloat(A))),I&&I!=="0"&&(B+=this._beatsToUnits(parseFloat(I))),g&&g!=="0"&&(B+=this._beatsToUnits(parseFloat(g)/4)),B},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof ns&&this.fromType(this._val),_g(this._val))return this._noArg();if(xC(this._val)&&_g(this._units)){for(const A in this._expressions)if(this._expressions[A].regexp.test(this._val.trim())){this._units=A;break}}else if(HB(this._val)){let A=0;for(const I in this._val)if(II(this._val[I])){const g=this._val[I],B=new this.constructor(this.context,I).valueOf()*g;A+=B}return A}if(II(this._units)){const A=this._expressions[this._units],I=this._val.toString().trim().match(A.regexp);return I?A.method.apply(this,I.slice(1)):A.method.call(this,this._val)}else return xC(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(A){return 1/A}_beatsToUnits(A){return 60/this._getBpm()*A}_secondsToUnits(A){return A}_ticksToUnits(A){return A*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(A){switch(this._units=void 0,this.defaultUnits){case"s":this._val=A.toSeconds();break;case"i":this._val=A.toTicks();break;case"hz":this._val=A.toFrequency();break;case"midi":this._val=A.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class IC extends ns{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:A=>this._now()+new this.constructor(this.context,A).valueOf(),regexp:/^\+(.+)/},quantize:{method:A=>{const I=new IC(this.context,A).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(I))},regexp:/^@(.+)/}})}quantize(A,I=1){const g=new this.constructor(this.context,A).valueOf(),B=this.valueOf(),E=Math.round(B/g)*g-B;return B+E*I}toNotation(){const A=this.toSeconds(),I=["1m"];for(let Q=1;Q<9;Q++){const i=Math.pow(2,Q);I.push(i+"n."),I.push(i+"n"),I.push(i+"t")}I.push("0");let g=I[0],B=new IC(this.context,I[0]).toSeconds();return I.forEach(Q=>{const i=new IC(this.context,Q).toSeconds();Math.abs(i-A)<Math.abs(B-A)&&(g=Q,B=i)}),g}toBarsBeatsSixteenths(){const A=this._beatsToUnits(1);let I=this.valueOf()/A;I=parseFloat(I.toFixed(4));const g=Math.floor(I/this._getTimeSignature());let B=I%1*4;I=Math.floor(I)%this._getTimeSignature();const Q=B.toString();return Q.length>3&&(B=parseFloat(parseFloat(Q).toFixed(3))),[g,I,B].join(":")}toTicks(){const A=this._beatsToUnits(1);return this.valueOf()/A*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return bo(this.toFrequency())}_now(){return this.context.now()}}class bg extends IC{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Hk()}static set A4(A){Tk(A)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(A){return this.defaultUnits==="midi"?A:bg.mtof(A)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(A,I){const B=bk[A.toLowerCase()]+(parseInt(I,10)+1)*12;return this.defaultUnits==="midi"?B:bg.mtof(B)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(A,I,g){let B=1;return A&&A!=="0"&&(B*=this._beatsToUnits(this._getTimeSignature()*parseFloat(A))),I&&I!=="0"&&(B*=this._beatsToUnits(parseFloat(I))),g&&g!=="0"&&(B*=this._beatsToUnits(parseFloat(g)/4)),B}}})}transpose(A){return new bg(this.context,this.valueOf()*qh(A))}harmonize(A){return A.map(I=>this.transpose(I))}toMidi(){return bo(this.valueOf())}toNote(){const A=this.toFrequency(),I=Math.log2(A/bg.A4);let g=Math.round(12*I)+57;const B=Math.floor(g/12);return B<0&&(g+=-12*B),_k[g%12]+B.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const A=this._beatsToUnits(1),I=this.valueOf()/A;return Math.floor(I*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(A){return A}_ticksToUnits(A){return 1/(A*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(A){return 1/super._beatsToUnits(A)}_secondsToUnits(A){return 1/A}static mtof(A){return xk(A)}static ftom(A){return bo(A)}}const bk={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},_k=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Di extends IC{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Ug extends PC{constructor(){super();const A=YA(Ug.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=A.context}static getDefaults(){return{context:AC()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(A){return wk(A),new IC(this.context,A).toSeconds()}toFrequency(A){return new bg(this.context,A).toFrequency()}toTicks(A){return new Di(this.context,A).toTicks()}_getPartialProperties(A){const I=this.get();return Object.keys(I).forEach(g=>{_g(A[g])&&delete I[g]}),I}get(){const A=pk(this);return Object.keys(A).forEach(I=>{if(Reflect.has(this,I)){const g=this[I];II(g)&&II(g.value)&&II(g.setValueAtTime)?A[I]=g.value:g instanceof Ug?A[I]=g._getPartialProperties(A[I]):CC(g)||sB(g)||xC(g)||Sk(g)?A[I]=g:delete A[I]}}),A}set(A){return Object.keys(A).forEach(I=>{Reflect.has(this,I)&&II(this[I])&&(this[I]&&II(this[I].value)&&II(this[I].setValueAtTime)?this[I].value!==A[I]&&(this[I].value=A[I]):this[I]instanceof Ug?this[I].set(A[I]):this[I]=A[I])}),this}}class Ds extends Og{constructor(A="stopped"){super(),this.name="StateTimeline",this._initial=A,this.setStateAtTime(this._initial,0)}getValueAtTime(A){const I=this.get(A);return I!==null?I.state:this._initial}setStateAtTime(A,I,g){return EC(I,0),this.add(Object.assign({},g,{state:A,time:I})),this}getLastState(A,I){const g=this._search(I);for(let B=g;B>=0;B--){const Q=this._timeline[B];if(Q.state===A)return Q}}getNextState(A,I){const g=this._search(I);if(g!==-1)for(let B=g;B<this._timeline.length;B++){const Q=this._timeline[B];if(Q.state===A)return Q}}}class wI extends Ug{constructor(){const A=YA(wI.getDefaults(),arguments,["param","units","convert"]);for(super(A),this.name="Param",this.overridden=!1,this._minOutput=1e-7,vA(II(A.param)&&(xB(A.param)||A.param instanceof wI),"param must be an AudioParam");!xB(A.param);)A.param=A.param._param;this._swappable=II(A.swappable)?A.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=A.param,this.input.connect(this._param)):this._param=this.input=A.param,this._events=new Og(1e3),this._initialValue=this._param.defaultValue,this.units=A.units,this.convert=A.convert,this._minValue=A.minValue,this._maxValue=A.maxValue,II(A.value)&&A.value!==this._toType(this._initialValue)&&this.setValueAtTime(A.value,0)}static getDefaults(){return Object.assign(Ug.getDefaults(),{convert:!0,units:"number"})}get value(){const A=this.now();return this.getValueAtTime(A)}set value(A){this.cancelScheduledValues(this.now()),this.setValueAtTime(A,this.now())}get minValue(){return II(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return II(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(A,I){return this.units===I}_assertRange(A){return II(this.maxValue)&&II(this.minValue)&&EC(A,this._fromType(this.minValue),this._fromType(this.maxValue)),A}_fromType(A){return this.convert&&!this.overridden?this._is(A,"time")?this.toSeconds(A):this._is(A,"decibels")?Lk(A):this._is(A,"frequency")?this.toFrequency(A):A:this.overridden?0:A}_toType(A){return this.convert&&this.units==="decibels"?mk(A):A}setValueAtTime(A,I){const g=this.toSeconds(I),B=this._fromType(A);return vA(isFinite(B)&&isFinite(g),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(A)}, ${JSON.stringify(I)}`),this._assertRange(B),this.log(this.units,"setValueAtTime",A,g),this._events.add({time:g,type:"setValueAtTime",value:B}),this._param.setValueAtTime(B,g),this}getValueAtTime(A){const I=Math.max(this.toSeconds(A),0),g=this._events.getAfter(I),B=this._events.get(I);let Q=this._initialValue;if(B===null)Q=this._initialValue;else if(B.type==="setTargetAtTime"&&(g===null||g.type==="setValueAtTime")){const i=this._events.getBefore(B.time);let E;i===null?E=this._initialValue:E=i.value,B.type==="setTargetAtTime"&&(Q=this._exponentialApproach(B.time,E,B.value,B.constant,I))}else if(g===null)Q=B.value;else if(g.type==="linearRampToValueAtTime"||g.type==="exponentialRampToValueAtTime"){let i=B.value;if(B.type==="setTargetAtTime"){const E=this._events.getBefore(B.time);E===null?i=this._initialValue:i=E.value}g.type==="linearRampToValueAtTime"?Q=this._linearInterpolate(B.time,i,g.time,g.value,I):Q=this._exponentialInterpolate(B.time,i,g.time,g.value,I)}else Q=B.value;return this._toType(Q)}setRampPoint(A){A=this.toSeconds(A);let I=this.getValueAtTime(A);return this.cancelAndHoldAtTime(A),this._fromType(I)===0&&(I=this._toType(this._minOutput)),this.setValueAtTime(I,A),this}linearRampToValueAtTime(A,I){const g=this._fromType(A),B=this.toSeconds(I);return vA(isFinite(g)&&isFinite(B),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(A)}, ${JSON.stringify(I)}`),this._assertRange(g),this._events.add({time:B,type:"linearRampToValueAtTime",value:g}),this.log(this.units,"linearRampToValueAtTime",A,B),this._param.linearRampToValueAtTime(g,B),this}exponentialRampToValueAtTime(A,I){let g=this._fromType(A);g=zg(g,0)?this._minOutput:g,this._assertRange(g);const B=this.toSeconds(I);return vA(isFinite(g)&&isFinite(B),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(A)}, ${JSON.stringify(I)}`),this._events.add({time:B,type:"exponentialRampToValueAtTime",value:g}),this.log(this.units,"exponentialRampToValueAtTime",A,B),this._param.exponentialRampToValueAtTime(g,B),this}exponentialRampTo(A,I,g){return g=this.toSeconds(g),this.setRampPoint(g),this.exponentialRampToValueAtTime(A,g+this.toSeconds(I)),this}linearRampTo(A,I,g){return g=this.toSeconds(g),this.setRampPoint(g),this.linearRampToValueAtTime(A,g+this.toSeconds(I)),this}targetRampTo(A,I,g){return g=this.toSeconds(g),this.setRampPoint(g),this.exponentialApproachValueAtTime(A,g,I),this}exponentialApproachValueAtTime(A,I,g){I=this.toSeconds(I),g=this.toSeconds(g);const B=Math.log(g+1)/Math.log(200);return this.setTargetAtTime(A,I,B),this.cancelAndHoldAtTime(I+g*.9),this.linearRampToValueAtTime(A,I+g),this}setTargetAtTime(A,I,g){const B=this._fromType(A);vA(isFinite(g)&&g>0,"timeConstant must be a number greater than 0");const Q=this.toSeconds(I);return this._assertRange(B),vA(isFinite(B)&&isFinite(Q),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(A)}, ${JSON.stringify(I)}`),this._events.add({constant:g,time:Q,type:"setTargetAtTime",value:B}),this.log(this.units,"setTargetAtTime",A,Q,g),this._param.setTargetAtTime(B,Q,g),this}setValueCurveAtTime(A,I,g,B=1){g=this.toSeconds(g),I=this.toSeconds(I);const Q=this._fromType(A[0])*B;this.setValueAtTime(this._toType(Q),I);const i=g/(A.length-1);for(let E=1;E<A.length;E++){const t=this._fromType(A[E])*B;this.linearRampToValueAtTime(this._toType(t),I+E*i)}return this}cancelScheduledValues(A){const I=this.toSeconds(A);return vA(isFinite(I),`Invalid argument to cancelScheduledValues: ${JSON.stringify(A)}`),this._events.cancel(I),this._param.cancelScheduledValues(I),this.log(this.units,"cancelScheduledValues",I),this}cancelAndHoldAtTime(A){const I=this.toSeconds(A),g=this._fromType(this.getValueAtTime(I));vA(isFinite(I),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(A)}`),this.log(this.units,"cancelAndHoldAtTime",I,"value="+g);const B=this._events.get(I),Q=this._events.getAfter(I);return B&&zg(B.time,I)?Q?(this._param.cancelScheduledValues(Q.time),this._events.cancel(Q.time)):(this._param.cancelAndHoldAtTime(I),this._events.cancel(I+this.sampleTime)):Q&&(this._param.cancelScheduledValues(Q.time),this._events.cancel(Q.time),Q.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(g),I):Q.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(g),I)),this._events.add({time:I,type:"setValueAtTime",value:g}),this._param.setValueAtTime(g,I),this}rampTo(A,I=.1,g){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(A,I,g):this.linearRampTo(A,I,g),this}apply(A){const I=this.context.currentTime;A.setValueAtTime(this.getValueAtTime(I),I);const g=this._events.get(I);if(g&&g.type==="setTargetAtTime"){const B=this._events.getAfter(g.time),Q=B?B.time:I+2,i=(Q-I)/10;for(let E=I;E<Q;E+=i)A.linearRampToValueAtTime(this.getValueAtTime(E),E)}return this._events.forEachAfter(this.context.currentTime,B=>{B.type==="cancelScheduledValues"?A.cancelScheduledValues(B.time):B.type==="setTargetAtTime"?A.setTargetAtTime(B.value,B.time,B.constant):A[B.type](B.value,B.time)}),this}setParam(A){vA(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const I=this.input;return I.disconnect(this._param),this.apply(A),this._param=A,I.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(A,I,g,B,Q){return g+(I-g)*Math.exp(-(Q-A)/B)}_linearInterpolate(A,I,g,B,Q){return I+(B-I)*((Q-A)/(g-A))}_exponentialInterpolate(A,I,g,B,Q){return I*Math.pow(B/I,(Q-A)/(g-A))}}class mA extends Ug{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return II(this.input)?xB(this.input)||this.input instanceof wI?1:this.input.numberOfInputs:0}get numberOfOutputs(){return II(this.output)?this.output.numberOfOutputs:0}_isAudioNode(A){return II(A)&&(A instanceof mA||tB(A))}_getInternalNodes(){const A=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&A.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&A.push(this.output),A}_setChannelProperties(A){this._getInternalNodes().forEach(g=>{g.channelCount=A.channelCount,g.channelCountMode=A.channelCountMode,g.channelInterpretation=A.channelInterpretation})}_getChannelProperties(){const A=this._getInternalNodes();vA(A.length>0,"ToneAudioNode does not have any internal nodes");const I=A[0];return{channelCount:I.channelCount,channelCountMode:I.channelCountMode,channelInterpretation:I.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(A){const I=this._getChannelProperties();this._setChannelProperties(Object.assign(I,{channelCount:A}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(A){const I=this._getChannelProperties();this._setChannelProperties(Object.assign(I,{channelCountMode:A}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(A){const I=this._getChannelProperties();this._setChannelProperties(Object.assign(I,{channelInterpretation:A}))}connect(A,I=0,g=0){return aB(this,A,I,g),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return es("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(A,I=0,g=0){return Ok(this,A,I,g),this}chain(...A){return yi(this,...A),this}fan(...A){return A.forEach(I=>this.connect(I)),this}dispose(){return super.dispose(),II(this.input)&&(this.input instanceof mA?this.input.dispose():tB(this.input)&&this.input.disconnect()),II(this.output)&&(this.output instanceof mA?this.output.dispose():tB(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function yi(...C){const A=C.shift();C.reduce((I,g)=>(I instanceof mA?I.connect(g):tB(I)&&aB(I,g),g),A)}function aB(C,A,I=0,g=0){for(vA(II(C),"Cannot connect from undefined node"),vA(II(A),"Cannot connect to undefined node"),(A instanceof mA||tB(A))&&vA(A.numberOfInputs>0,"Cannot connect to node with no inputs"),vA(C.numberOfOutputs>0,"Cannot connect from node with no outputs");A instanceof mA||A instanceof wI;)II(A.input)&&(A=A.input);for(;C instanceof mA;)II(C.output)&&(C=C.output);xB(A)?C.connect(A,I):C.connect(A,I,g)}function Ok(C,A,I=0,g=0){if(II(A))for(;A instanceof mA;)A=A.input;for(;!tB(C);)II(C.output)&&(C=C.output);xB(A)?C.disconnect(A,I):tB(A)?C.disconnect(A,I,g):C.disconnect()}class kI extends mA{constructor(){const A=YA(kI.getDefaults(),arguments,["gain","units"]);super(A),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new wI({context:this.context,convert:A.convert,param:this._gainNode.gain,units:A.units,value:A.gain,minValue:A.minValue,maxValue:A.maxValue}),MI(this,"gain")}static getDefaults(){return Object.assign(mA.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class uQ extends mA{constructor(A){super(A),this.onended=DI,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new kI({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(I){const g=this.toSeconds(I);return this._startTime!==-1&&g>=this._startTime&&(this._stopTime===-1||g<=this._stopTime)?"started":"stopped"},this._fadeIn=A.fadeIn,this._fadeOut=A.fadeOut,this._curve=A.curve,this.onended=A.onended}static getDefaults(){return Object.assign(mA.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:DI})}_startGain(A,I=1){vA(this._startTime===-1,"Source cannot be started more than once");const g=this.toSeconds(this._fadeIn);return this._startTime=A+g,this._startTime=Math.max(this._startTime,this.context.currentTime),g>0?(this._gainNode.gain.setValueAtTime(0,A),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(I,A+g):this._gainNode.gain.exponentialApproachValueAtTime(I,A,g)):this._gainNode.gain.setValueAtTime(I,A),this}stop(A){return this.log("stop",A),this._stopGain(this.toSeconds(A)),this}_stopGain(A){vA(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const I=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(A)+I,this._stopTime=Math.max(this._stopTime,this.now()),I>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,I,A):this._gainNode.gain.targetRampTo(0,I,A):(this._gainNode.gain.cancelAndHoldAtTime(A),this._gainNode.gain.setValueAtTime(0,A)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const g=this._curve==="exponential"?I*2:0;this._stopSource(this.now()+g),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==DI&&(this.onended(this),this.onended=DI,!this.context.isOffline)){const A=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(A):setTimeout(A,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),vA(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=DI,this}}class hs extends uQ{constructor(){const A=YA(hs.getDefaults(),arguments,["offset"]);super(A),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),aB(this._source,this._gainNode),this.offset=new wI({context:this.context,convert:A.convert,param:this._source.offset,units:A.units,value:A.offset,minValue:A.minValue,maxValue:A.maxValue})}static getDefaults(){return Object.assign(uQ.getDefaults(),{convert:!0,offset:1,units:"number"})}start(A){const I=this.toSeconds(A);return this.log("start",I),this._startGain(I),this._source.start(I),this}_stopSource(A){this._source.stop(A)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class NI extends mA{constructor(){const A=YA(NI.getDefaults(),arguments,["value","units"]);super(A),this.name="Signal",this.override=!0,this.output=this._constantSource=new hs({context:this.context,convert:A.convert,offset:A.value,units:A.units,minValue:A.minValue,maxValue:A.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(mA.getDefaults(),{convert:!0,units:"number",value:0})}connect(A,I=0,g=0){return rs(this,A,I,g),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(A,I){return this._param.setValueAtTime(A,I),this}getValueAtTime(A){return this._param.getValueAtTime(A)}setRampPoint(A){return this._param.setRampPoint(A),this}linearRampToValueAtTime(A,I){return this._param.linearRampToValueAtTime(A,I),this}exponentialRampToValueAtTime(A,I){return this._param.exponentialRampToValueAtTime(A,I),this}exponentialRampTo(A,I,g){return this._param.exponentialRampTo(A,I,g),this}linearRampTo(A,I,g){return this._param.linearRampTo(A,I,g),this}targetRampTo(A,I,g){return this._param.targetRampTo(A,I,g),this}exponentialApproachValueAtTime(A,I,g){return this._param.exponentialApproachValueAtTime(A,I,g),this}setTargetAtTime(A,I,g){return this._param.setTargetAtTime(A,I,g),this}setValueCurveAtTime(A,I,g,B){return this._param.setValueCurveAtTime(A,I,g,B),this}cancelScheduledValues(A){return this._param.cancelScheduledValues(A),this}cancelAndHoldAtTime(A){return this._param.cancelAndHoldAtTime(A),this}rampTo(A,I,g){return this._param.rampTo(A,I,g),this}get value(){return this._param.value}set value(A){this._param.value=A}get convert(){return this._param.convert}set convert(A){this._param.convert=A}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(A){this._param.overridden=A}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(A){return this._param.apply(A),this}}function rs(C,A,I,g){(A instanceof wI||xB(A)||A instanceof NI&&A.override)&&(A.cancelScheduledValues(0),A.setValueAtTime(0,0),A instanceof NI&&(A.overridden=!0)),aB(C,A,I,g)}class cs extends wI{constructor(){const A=YA(cs.getDefaults(),arguments,["value"]);super(A),this.name="TickParam",this._events=new Og(1/0),this._multiplier=1,this._multiplier=A.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(A.value)}),this.setValueAtTime(A.value,0)}static getDefaults(){return Object.assign(wI.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(A,I,g){I=this.toSeconds(I),this.setRampPoint(I);const B=this._fromType(A),Q=this._events.get(I),i=Math.round(Math.max(1/g,1));for(let E=0;E<=i;E++){const t=g*E+I,o=this._exponentialApproach(Q.time,Q.value,B,g,t);this.linearRampToValueAtTime(this._toType(o),t)}return this}setValueAtTime(A,I){const g=this.toSeconds(I);super.setValueAtTime(A,I);const B=this._events.get(g),Q=this._events.previousEvent(B),i=this._getTicksUntilEvent(Q,g);return B.ticks=Math.max(i,0),this}linearRampToValueAtTime(A,I){const g=this.toSeconds(I);super.linearRampToValueAtTime(A,I);const B=this._events.get(g),Q=this._events.previousEvent(B),i=this._getTicksUntilEvent(Q,g);return B.ticks=Math.max(i,0),this}exponentialRampToValueAtTime(A,I){I=this.toSeconds(I);const g=this._fromType(A),B=this._events.get(I),Q=Math.round(Math.max((I-B.time)*10,1)),i=(I-B.time)/Q;for(let E=0;E<=Q;E++){const t=i*E+B.time,o=this._exponentialInterpolate(B.time,B.value,I,g,t);this.linearRampToValueAtTime(this._toType(o),t)}return this}_getTicksUntilEvent(A,I){if(A===null)A={ticks:0,time:0,type:"setValueAtTime",value:0};else if(_g(A.ticks)){const i=this._events.previousEvent(A);A.ticks=this._getTicksUntilEvent(i,A.time)}const g=this._fromType(this.getValueAtTime(A.time));let B=this._fromType(this.getValueAtTime(I));const Q=this._events.get(I);return Q&&Q.time===I&&Q.type==="setValueAtTime"&&(B=this._fromType(this.getValueAtTime(I-this.sampleTime))),.5*(I-A.time)*(g+B)+A.ticks}getTicksAtTime(A){const I=this.toSeconds(A),g=this._events.get(I);return Math.max(this._getTicksUntilEvent(g,I),0)}getDurationOfTicks(A,I){const g=this.toSeconds(I),B=this.getTicksAtTime(I);return this.getTimeOfTick(B+A)-g}getTimeOfTick(A){const I=this._events.get(A,"ticks"),g=this._events.getAfter(A,"ticks");if(I&&I.ticks===A)return I.time;if(I&&g&&g.type==="linearRampToValueAtTime"&&I.value!==g.value){const B=this._fromType(this.getValueAtTime(I.time)),i=(this._fromType(this.getValueAtTime(g.time))-B)/(g.time-I.time),E=Math.sqrt(Math.pow(B,2)-2*i*(I.ticks-A)),t=(-B+E)/i,o=(-B-E)/i;return(t>0?t:o)+I.time}else return I?I.value===0?1/0:I.time+(A-I.ticks)/I.value:A/this._initialValue}ticksToTime(A,I){return this.getDurationOfTicks(A,I)}timeToTicks(A,I){const g=this.toSeconds(I),B=this.toSeconds(A),Q=this.getTicksAtTime(g);return this.getTicksAtTime(g+B)-Q}_fromType(A){return this.units==="bpm"&&this.multiplier?1/(60/A/this.multiplier):super._fromType(A)}_toType(A){return this.units==="bpm"&&this.multiplier?A/this.multiplier*60:super._toType(A)}get multiplier(){return this._multiplier}set multiplier(A){const I=this.value;this._multiplier=A,this.cancelScheduledValues(0),this.setValueAtTime(I,0)}}class ls extends NI{constructor(){const A=YA(ls.getDefaults(),arguments,["value"]);super(A),this.name="TickSignal",this.input=this._param=new cs({context:this.context,convert:A.convert,multiplier:A.multiplier,param:this._constantSource.offset,units:A.units,value:A.value})}static getDefaults(){return Object.assign(NI.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(A,I){return this._param.ticksToTime(A,I)}timeToTicks(A,I){return this._param.timeToTicks(A,I)}getTimeOfTick(A){return this._param.getTimeOfTick(A)}getDurationOfTicks(A,I){return this._param.getDurationOfTicks(A,I)}getTicksAtTime(A){return this._param.getTicksAtTime(A)}get multiplier(){return this._param.multiplier}set multiplier(A){this._param.multiplier=A}dispose(){return super.dispose(),this._param.dispose(),this}}class Ss extends Ug{constructor(){const A=YA(Ss.getDefaults(),arguments,["frequency"]);super(A),this.name="TickSource",this._state=new Ds,this._tickOffset=new Og,this._ticksAtTime=new Og,this._secondsAtTime=new Og,this.frequency=new ls({context:this.context,units:A.units,value:A.frequency}),MI(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Ug.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(A,I){const g=this.toSeconds(A);return this._state.getValueAtTime(g)!=="started"&&(this._state.setStateAtTime("started",g),II(I)&&this.setTicksAtTime(I,g),this._ticksAtTime.cancel(g),this._secondsAtTime.cancel(g)),this}stop(A){const I=this.toSeconds(A);if(this._state.getValueAtTime(I)==="stopped"){const g=this._state.get(I);g&&g.time>0&&(this._tickOffset.cancel(g.time),this._state.cancel(g.time))}return this._state.cancel(I),this._state.setStateAtTime("stopped",I),this.setTicksAtTime(0,I),this._ticksAtTime.cancel(I),this._secondsAtTime.cancel(I),this}pause(A){const I=this.toSeconds(A);return this._state.getValueAtTime(I)==="started"&&(this._state.setStateAtTime("paused",I),this._ticksAtTime.cancel(I),this._secondsAtTime.cancel(I)),this}cancel(A){return A=this.toSeconds(A),this._state.cancel(A),this._tickOffset.cancel(A),this._ticksAtTime.cancel(A),this._secondsAtTime.cancel(A),this}getTicksAtTime(A){const I=this.toSeconds(A),g=this._state.getLastState("stopped",I),B=this._ticksAtTime.get(I),Q={state:"paused",time:I};this._state.add(Q);let i=B||g,E=B?B.ticks:0,t=null;return this._state.forEachBetween(i.time,I+this.sampleTime,o=>{let e=i.time;const s=this._tickOffset.get(o.time);s&&s.time>=i.time&&(E=s.ticks,e=s.time),i.state==="started"&&o.state!=="started"&&(E+=this.frequency.getTicksAtTime(o.time)-this.frequency.getTicksAtTime(e),o.time!==Q.time&&(t={state:o.state,time:o.time,ticks:E})),i=o}),this._state.remove(Q),t&&this._ticksAtTime.add(t),E}get ticks(){return this.getTicksAtTime(this.now())}set ticks(A){this.setTicksAtTime(A,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(A){const I=this.now(),g=this.frequency.timeToTicks(A,I);this.setTicksAtTime(g,I)}getSecondsAtTime(A){A=this.toSeconds(A);const I=this._state.getLastState("stopped",A),g={state:"paused",time:A};this._state.add(g);const B=this._secondsAtTime.get(A);let Q=B||I,i=B?B.seconds:0,E=null;return this._state.forEachBetween(Q.time,A+this.sampleTime,t=>{let o=Q.time;const e=this._tickOffset.get(t.time);e&&e.time>=Q.time&&(i=e.seconds,o=e.time),Q.state==="started"&&t.state!=="started"&&(i+=t.time-o,t.time!==g.time&&(E={state:t.state,time:t.time,seconds:i})),Q=t}),this._state.remove(g),E&&this._secondsAtTime.add(E),i}setTicksAtTime(A,I){return I=this.toSeconds(I),this._tickOffset.cancel(I),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(A,I),ticks:A,time:I}),this._ticksAtTime.cancel(I),this._secondsAtTime.cancel(I),this}getStateAtTime(A){return A=this.toSeconds(A),this._state.getValueAtTime(A)}getTimeOfTick(A,I=this.now()){const g=this._tickOffset.get(I),B=this._state.get(I),Q=Math.max(g.time,B.time),i=this.frequency.getTicksAtTime(Q)+A-g.ticks;return this.frequency.getTimeOfTick(i)}forEachTickBetween(A,I,g){let B=this._state.get(A);this._state.forEachBetween(A,I,i=>{B&&B.state==="started"&&i.state!=="started"&&this.forEachTickBetween(Math.max(B.time,A),i.time-this.sampleTime,g),B=i});let Q=null;if(B&&B.state==="started"){const i=Math.max(B.time,A),E=this.frequency.getTicksAtTime(i),t=this.frequency.getTicksAtTime(B.time),o=E-t;let e=Math.ceil(o)-o;e=zg(e,1)?0:e;let s=this.frequency.getTimeOfTick(E+e);for(;s<I;){try{g(s,Math.round(this.getTicksAtTime(s)))}catch(a){Q=a;break}s+=this.frequency.getDurationOfTicks(1,s)}}if(Q)throw Q;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}let fh=class Lh extends Ug{constructor(){const A=YA(Lh.getDefaults(),arguments,["callback","frequency"]);super(A),this.name="Clock",this.callback=DI,this._lastUpdate=0,this._state=new Ds("stopped"),this._boundLoop=this._loop.bind(this),this.callback=A.callback,this._tickSource=new Ss({context:this.context,frequency:A.frequency,units:A.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,MI(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Ug.getDefaults(),{callback:DI,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(A,I){Kh(this.context);const g=this.toSeconds(A);return this.log("start",g),this._state.getValueAtTime(g)!=="started"&&(this._state.setStateAtTime("started",g),this._tickSource.start(g,I),g<this._lastUpdate&&this.emit("start",g,I)),this}stop(A){const I=this.toSeconds(A);return this.log("stop",I),this._state.cancel(I),this._state.setStateAtTime("stopped",I),this._tickSource.stop(I),I<this._lastUpdate&&this.emit("stop",I),this}pause(A){const I=this.toSeconds(A);return this._state.getValueAtTime(I)==="started"&&(this._state.setStateAtTime("paused",I),this._tickSource.pause(I),I<this._lastUpdate&&this.emit("pause",I)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(A){this._tickSource.ticks=A}get seconds(){return this._tickSource.seconds}set seconds(A){this._tickSource.seconds=A}getSecondsAtTime(A){return this._tickSource.getSecondsAtTime(A)}setTicksAtTime(A,I){return this._tickSource.setTicksAtTime(A,I),this}getTimeOfTick(A,I=this.now()){return this._tickSource.getTimeOfTick(A,I)}getTicksAtTime(A){return this._tickSource.getTicksAtTime(A)}nextTickTime(A,I){const g=this.toSeconds(I),B=this.getTicksAtTime(g);return this._tickSource.getTimeOfTick(B+A,g)}_loop(){const A=this._lastUpdate,I=this.now();this._lastUpdate=I,this.log("loop",A,I),A!==I&&(this._state.forEachBetween(A,I,g=>{switch(g.state){case"started":const B=this._tickSource.getTicksAtTime(g.time);this.emit("start",g.time,B);break;case"stopped":g.time!==0&&this.emit("stop",g.time);break;case"paused":this.emit("pause",g.time);break}}),this._tickSource.forEachTickBetween(A,I,(g,B)=>{this.callback(g,B)}))}getStateAtTime(A){const I=this.toSeconds(A);return this._state.getValueAtTime(I)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};bi.mixin(fh);class jQ extends mA{constructor(){const A=YA(jQ.getDefaults(),arguments,["volume"]);super(A),this.name="Volume",this.input=this.output=new kI({context:this.context,gain:A.volume,units:"decibels"}),this.volume=this.output.gain,MI(this,"volume"),this._unmutedVolume=A.volume,this.mute=A.mute}static getDefaults(){return Object.assign(mA.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(A){!this.mute&&A?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!A&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class ws extends mA{constructor(){const A=YA(ws.getDefaults(),arguments);super(A),this.name="Destination",this.input=new jQ({context:this.context}),this.output=new kI({context:this.context}),this.volume=this.input.volume,yi(this.input,this.output,this.context.rawContext.destination),this.mute=A.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(mA.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(A){this.input.mute=A}chain(...A){return this.input.disconnect(),A.unshift(this.input),A.push(this.output),yi(...A),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}lt(C=>{C.destination=new ws({context:C})});St(C=>{C.destination.dispose()});class vk extends mA{constructor(){super(...arguments),this.name="Listener",this.positionX=new wI({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new wI({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new wI({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new wI({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new wI({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new wI({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new wI({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new wI({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new wI({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(mA.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}lt(C=>{C.listener=new vk({context:C})});St(C=>{C.listener.dispose()});class Gs extends PC{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const A=YA(Gs.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=A.baseUrl,Object.keys(A.urls).forEach(I=>{this._loadingCount++;const g=A.urls[I];this.add(I,g,this._bufferLoaded.bind(this,A.onload),A.onerror)})}static getDefaults(){return{baseUrl:"",onerror:DI,onload:DI,urls:{}}}has(A){return this._buffers.has(A.toString())}get(A){return vA(this.has(A),`ToneAudioBuffers has no buffer named: ${A}`),this._buffers.get(A.toString())}_bufferLoaded(A){this._loadingCount--,this._loadingCount===0&&A&&A()}get loaded(){return Array.from(this._buffers).every(([A,I])=>I.loaded)}add(A,I,g=DI,B=DI){return xC(I)?(this.baseUrl&&I.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(A.toString(),new rI(this.baseUrl+I,g,B))):this._buffers.set(A.toString(),new rI(I,g,B)),this}dispose(){return super.dispose(),this._buffers.forEach(A=>A.dispose()),this._buffers.clear(),this}}class wQ extends Di{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(A){return this._getPPQ()*A}_secondsToUnits(A){return Math.floor(A/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(A){return A}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class Zk extends Ug{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Og,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(A,I){return this._events.add({callback:A,time:this.toSeconds(I)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(A){return this._events.cancel(this.toSeconds(A)),this}_drawLoop(){const A=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=A;){const I=this._events.shift();I&&A-I.time<=this.expiration&&I.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}lt(C=>{C.draw=new Zk({context:C})});St(C=>{C.draw.dispose()});class Wk extends PC{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(A){vA(II(A.time),"Events must have a time property"),vA(II(A.duration),"Events must have a duration parameter"),A.time=A.time.valueOf();let I=new Pk(A.time,A.time+A.duration,A);for(this._root===null?this._root=I:this._root.insert(I),this._length++;I!==null;)I.updateHeight(),I.updateMax(),this._rebalance(I),I=I.parent;return this}remove(A){if(this._root!==null){const I=[];this._root.search(A.time,I);for(const g of I)if(g.event===A){this._removeNode(g),this._length--;break}}return this}get length(){return this._length}cancel(A){return this.forEachFrom(A,I=>this.remove(I)),this}_setRoot(A){this._root=A,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(A,I){A.parent!==null?(A.isLeftChild()?A.parent.left=I:A.parent.right=I,this._rebalance(A.parent)):this._setRoot(I)}_removeNode(A){if(A.left===null&&A.right===null)this._replaceNodeInParent(A,null);else if(A.right===null)this._replaceNodeInParent(A,A.left);else if(A.left===null)this._replaceNodeInParent(A,A.right);else{const I=A.getBalance();let g,B=null;if(I>0)if(A.left.right===null)g=A.left,g.right=A.right,B=g;else{for(g=A.left.right;g.right!==null;)g=g.right;g.parent&&(g.parent.right=g.left,B=g.parent,g.left=A.left,g.right=A.right)}else if(A.right.left===null)g=A.right,g.left=A.left,B=g;else{for(g=A.right.left;g.left!==null;)g=g.left;g.parent&&(g.parent.left=g.right,B=g.parent,g.left=A.left,g.right=A.right)}A.parent!==null?A.isLeftChild()?A.parent.left=g:A.parent.right=g:this._setRoot(g),B&&this._rebalance(B)}A.dispose()}_rotateLeft(A){const I=A.parent,g=A.isLeftChild(),B=A.right;B&&(A.right=B.left,B.left=A),I!==null?g?I.left=B:I.right=B:this._setRoot(B)}_rotateRight(A){const I=A.parent,g=A.isLeftChild(),B=A.left;B&&(A.left=B.right,B.right=A),I!==null?g?I.left=B:I.right=B:this._setRoot(B)}_rebalance(A){const I=A.getBalance();I>1&&A.left?A.left.getBalance()<0?this._rotateLeft(A.left):this._rotateRight(A):I<-1&&A.right&&(A.right.getBalance()>0?this._rotateRight(A.right):this._rotateLeft(A))}get(A){if(this._root!==null){const I=[];if(this._root.search(A,I),I.length>0){let g=I[0];for(let B=1;B<I.length;B++)I[B].low>g.low&&(g=I[B]);return g.event}}return null}forEach(A){if(this._root!==null){const I=[];this._root.traverse(g=>I.push(g)),I.forEach(g=>{g.event&&A(g.event)})}return this}forEachAtTime(A,I){if(this._root!==null){const g=[];this._root.search(A,g),g.forEach(B=>{B.event&&I(B.event)})}return this}forEachFrom(A,I){if(this._root!==null){const g=[];this._root.searchAfter(A,g),g.forEach(B=>{B.event&&I(B.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(A=>A.dispose()),this._root=null,this}}class Pk{constructor(A,I,g){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=g,this.low=A,this.high=I,this.max=this.high}insert(A){A.low<=this.low?this.left===null?this.left=A:this.left.insert(A):this.right===null?this.right=A:this.right.insert(A)}search(A,I){A>this.max||(this.left!==null&&this.left.search(A,I),this.low<=A&&this.high>A&&I.push(this),!(this.low>A)&&this.right!==null&&this.right.search(A,I))}searchAfter(A,I){this.low>=A&&(I.push(this),this.left!==null&&this.left.searchAfter(A,I)),this.right!==null&&this.right.searchAfter(A,I)}traverse(A){A(this),this.left!==null&&this.left.traverse(A),this.right!==null&&this.right.traverse(A)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let A=0;return this.left!==null&&this.right!==null?A=this.left.height-this.right.height:this.left!==null?A=this.left.height+1:this.right!==null&&(A=-(this.right.height+1)),A}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(A){this._left=A,A!==null&&(A.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(A){this._right=A,A!==null&&(A.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class Vk extends PC{constructor(A){super(),this.name="TimelineValue",this._timeline=new Og({memory:10}),this._initialValue=A}set(A,I){return this._timeline.add({value:A,time:I}),this}get(A){const I=this._timeline.get(A);return I?I.value:this._initialValue}}class bC extends mA{constructor(){super(YA(bC.getDefaults(),arguments,["context"]))}connect(A,I=0,g=0){return rs(this,A,I,g),this}}class XQ extends bC{constructor(){const A=YA(XQ.getDefaults(),arguments,["mapping","length"]);super(A),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,CC(A.mapping)||A.mapping instanceof Float32Array?this.curve=Float32Array.from(A.mapping):lk(A.mapping)&&this.setMap(A.mapping,A.length)}static getDefaults(){return Object.assign(NI.getDefaults(),{length:1024})}setMap(A,I=1024){const g=new Float32Array(I);for(let B=0,Q=I;B<Q;B++){const i=B/(Q-1)*2-1;g[B]=A(i,B)}return this.curve=g,this}get curve(){return this._shaper.curve}set curve(A){this._shaper.curve=A}get oversample(){return this._shaper.oversample}set oversample(A){const I=["none","2x","4x"].some(g=>g.includes(A));vA(I,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=A}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class kt extends bC{constructor(){const A=YA(kt.getDefaults(),arguments,["value"]);super(A),this.name="Pow",this._exponentScaler=this.input=this.output=new XQ({context:this.context,mapping:this._expFunc(A.value),length:8192}),this._exponent=A.value}static getDefaults(){return Object.assign(bC.getDefaults(),{value:1})}_expFunc(A){return I=>Math.pow(Math.abs(I),A)}get value(){return this._exponent}set value(A){this._exponent=A,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class nB{constructor(A,I){this.id=nB._eventId++,this._remainderTime=0;const g=Object.assign(nB.getDefaults(),I);this.transport=A,this.callback=g.callback,this._once=g.once,this.time=Math.floor(g.time),this._remainderTime=g.time-this.time}static getDefaults(){return{callback:DI,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(A){if(this.callback){const I=this.transport.bpm.getDurationOfTicks(1,A);this.callback(A+this._remainderTime*I),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}nB._eventId=0;class ks extends nB{constructor(A,I){super(A,I),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const g=Object.assign(ks.getDefaults(),I);this.duration=g.duration,this._interval=g.interval,this._nextTick=g.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},nB.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(A){this._createEvents(A),super.invoke(A)}_createEvent(){return WE(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new wQ(this.context,this._nextTick).toSeconds()):-1}_createEvents(A){WE(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new wQ(this.context,this._nextTick).toSeconds()))}_restart(A){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const I=this.transport.getTicksAtTime(A);RQ(I,this.time)&&(this._nextTick=this.floatTime+Math.ceil((I-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class yt extends Ug{constructor(){const A=YA(yt.getDefaults(),arguments);super(A),this.name="Transport",this._loop=new Vk(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Og,this._repeatedEvents=new Wk,this._syncedSignals=[],this._swingAmount=0,this._ppq=A.ppq,this._clock=new fh({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=A.ppq,this.bpm.setValueAtTime(A.bpm,0),MI(this,"bpm"),this._timeSignature=A.timeSignature,this._swingTicks=A.ppq/2}static getDefaults(){return Object.assign(Ug.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(A,I){if(this._loop.get(A)&&I>=this._loopEnd&&(this.emit("loopEnd",A),this._clock.setTicksAtTime(this._loopStart,A),I=this._loopStart,this.emit("loopStart",A,this._clock.getSecondsAtTime(A)),this.emit("loop",A)),this._swingAmount>0&&I%this._ppq!==0&&I%(this._swingTicks*2)!==0){const g=I%(this._swingTicks*2)/(this._swingTicks*2),B=Math.sin(g*Math.PI)*this._swingAmount;A+=new wQ(this.context,this._swingTicks*2/3).toSeconds()*B}ba(!0),this._timeline.forEachAtTime(I,g=>g.invoke(A)),ba(!1)}schedule(A,I){const g=new nB(this,{callback:A,time:new Di(this.context,I).toTicks()});return this._addEvent(g,this._timeline)}scheduleRepeat(A,I,g,B=1/0){const Q=new ks(this,{callback:A,duration:new IC(this.context,B).toTicks(),interval:new IC(this.context,I).toTicks(),time:new Di(this.context,g).toTicks()});return this._addEvent(Q,this._repeatedEvents)}scheduleOnce(A,I){const g=new nB(this,{callback:A,once:!0,time:new Di(this.context,I).toTicks()});return this._addEvent(g,this._timeline)}clear(A){if(this._scheduledEvents.hasOwnProperty(A)){const I=this._scheduledEvents[A.toString()];I.timeline.remove(I.event),I.event.dispose(),delete this._scheduledEvents[A.toString()]}return this}_addEvent(A,I){return this._scheduledEvents[A.id.toString()]={event:A,timeline:I},I.add(A),A.id}cancel(A=0){const I=this.toTicks(A);return this._timeline.forEachFrom(I,g=>this.clear(g.id)),this._repeatedEvents.forEachFrom(I,g=>this.clear(g.id)),this}_bindClockEvents(){this._clock.on("start",(A,I)=>{I=new wQ(this.context,I).toSeconds(),this.emit("start",A,I)}),this._clock.on("stop",A=>{this.emit("stop",A)}),this._clock.on("pause",A=>{this.emit("pause",A)})}get state(){return this._clock.getStateAtTime(this.now())}start(A,I){this.context.resume();let g;return II(I)&&(g=this.toTicks(I)),this._clock.start(A,g),this}stop(A){return this._clock.stop(A),this}pause(A){return this._clock.pause(A),this}toggle(A){return A=this.toSeconds(A),this._clock.getStateAtTime(A)!=="started"?this.start(A):this.stop(A),this}get timeSignature(){return this._timeSignature}set timeSignature(A){CC(A)&&(A=A[0]/A[1]*4),this._timeSignature=A}get loopStart(){return new IC(this.context,this._loopStart,"i").toSeconds()}set loopStart(A){this._loopStart=this.toTicks(A)}get loopEnd(){return new IC(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(A){this._loopEnd=this.toTicks(A)}get loop(){return this._loop.get(this.now())}set loop(A){this._loop.set(A,this.now())}setLoopPoints(A,I){return this.loopStart=A,this.loopEnd=I,this}get swing(){return this._swingAmount}set swing(A){this._swingAmount=A}get swingSubdivision(){return new wQ(this.context,this._swingTicks).toNotation()}set swingSubdivision(A){this._swingTicks=this.toTicks(A)}get position(){const A=this.now(),I=this._clock.getTicksAtTime(A);return new wQ(this.context,I).toBarsBeatsSixteenths()}set position(A){const I=this.toTicks(A);this.ticks=I}get seconds(){return this._clock.seconds}set seconds(A){const I=this.now(),g=this._clock.frequency.timeToTicks(A,I);this.ticks=g}get progress(){if(this.loop){const A=this.now();return(this._clock.getTicksAtTime(A)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(A){if(this._clock.ticks!==A){const I=this.now();if(this.state==="started"){const g=this._clock.getTicksAtTime(I),B=this._clock.frequency.getDurationOfTicks(Math.ceil(g)-g,I),Q=I+B;this.emit("stop",Q),this._clock.setTicksAtTime(A,Q),this.emit("start",Q,this._clock.getSecondsAtTime(Q))}else this.emit("ticks",I),this._clock.setTicksAtTime(A,I)}}getTicksAtTime(A){return this._clock.getTicksAtTime(A)}getSecondsAtTime(A){return this._clock.getSecondsAtTime(A)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(A){this._clock.frequency.multiplier=A}nextSubdivision(A){if(A=this.toTicks(A),this.state!=="started")return 0;{const I=this.now(),g=this.getTicksAtTime(I),B=A-g%A;return this._clock.nextTickTime(B,I)}}syncSignal(A,I){const g=this.now();let B=this.bpm,Q=1/(60/B.getValueAtTime(g)/this.PPQ),i=[];if(A.units==="time"){const t=.015625/Q,o=new kI(t),e=new kt(-1),s=new kI(t);B.chain(o,e,s),B=s,Q=1/Q,i=[o,e,s]}I||(A.getValueAtTime(g)!==0?I=A.getValueAtTime(g)/Q:I=0);const E=new kI(I);return B.connect(E),E.connect(A._param),i.push(E),this._syncedSignals.push({initial:A.value,nodes:i,signal:A}),A.value=0,this}unsyncSignal(A){for(let I=this._syncedSignals.length-1;I>=0;I--){const g=this._syncedSignals[I];g.signal===A&&(g.nodes.forEach(B=>B.dispose()),g.signal.value=g.initial,this._syncedSignals.splice(I,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),as(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}bi.mixin(yt);lt(C=>{C.transport=new yt({context:C})});St(C=>{C.transport.dispose()});let ag=class extends mA{constructor(A){super(A),this.input=void 0,this._state=new Ds("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=DI,this._syncedStop=DI,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new jQ({context:this.context,mute:A.mute,volume:A.volume}),this.volume=this._volume.volume,MI(this,"volume"),this.onstop=A.onstop}static getDefaults(){return Object.assign(mA.getDefaults(),{mute:!1,onstop:DI,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(A){this._volume.mute=A}_clampToCurrentTime(A){return this._synced?A:Math.max(A,this.context.currentTime)}start(A,I,g){let B=_g(A)&&this._synced?this.context.transport.seconds:this.toSeconds(A);if(B=this._clampToCurrentTime(B),!this._synced&&this._state.getValueAtTime(B)==="started")vA(RQ(B,this._state.get(B).time),"Start time must be strictly greater than previous start time"),this._state.cancel(B),this._state.setStateAtTime("started",B),this.log("restart",B),this.restart(B,I,g);else if(this.log("start",B),this._state.setStateAtTime("started",B),this._synced){const Q=this._state.get(B);Q&&(Q.offset=this.toSeconds(UQ(I,0)),Q.duration=g?this.toSeconds(g):void 0);const i=this.context.transport.schedule(E=>{this._start(E,I,g)},B);this._scheduled.push(i),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>B&&this._syncedStart(this.now(),this.context.transport.seconds)}else Kh(this.context),this._start(B,I,g);return this}stop(A){let I=_g(A)&&this._synced?this.context.transport.seconds:this.toSeconds(A);if(I=this._clampToCurrentTime(I),this._state.getValueAtTime(I)==="started"||II(this._state.getNextState("started",I))){if(this.log("stop",I),!this._synced)this._stop(I);else{const g=this.context.transport.schedule(this._stop.bind(this),I);this._scheduled.push(g)}this._state.cancel(I),this._state.setStateAtTime("stopped",I)}return this}restart(A,I,g){return A=this.toSeconds(A),this._state.getValueAtTime(A)==="started"&&(this._state.cancel(A),this._restart(A,I,g)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(A,I)=>{if(RQ(I,0)){const g=this._state.get(I);if(g&&g.state==="started"&&g.time!==I){const B=I-this.toSeconds(g.time);let Q;g.duration&&(Q=this.toSeconds(g.duration)-B),this._start(A,this.toSeconds(g.offset)+B,Q)}}},this._syncedStop=A=>{const I=this.context.transport.getSecondsAtTime(Math.max(A-this.sampleTime,0));this._state.getValueAtTime(I)==="started"&&this._stop(A)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(A=>this.context.transport.clear(A)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=DI,this.unsync(),this._volume.dispose(),this._state.dispose(),this}};class Oi extends uQ{constructor(){const A=YA(Oi.getDefaults(),arguments,["url","onload"]);super(A),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,aB(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new wI({context:this.context,param:this._source.playbackRate,units:"positive",value:A.playbackRate}),this.loop=A.loop,this.loopStart=A.loopStart,this.loopEnd=A.loopEnd,this._buffer=new rI(A.url,A.onload,A.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(uQ.getDefaults(),{url:new rI,loop:!1,loopEnd:0,loopStart:0,onload:DI,onerror:DI,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(A){this._fadeIn=A}get fadeOut(){return this._fadeOut}set fadeOut(A){this._fadeOut=A}get curve(){return this._curve}set curve(A){this._curve=A}start(A,I,g,B=1){vA(this.buffer.loaded,"buffer is either not set or not loaded");const Q=this.toSeconds(A);this._startGain(Q,B),this.loop?I=UQ(I,this.loopStart):I=UQ(I,0);let i=Math.max(this.toSeconds(I),0);if(this.loop){const E=this.toSeconds(this.loopEnd)||this.buffer.duration,t=this.toSeconds(this.loopStart),o=E-t;xo(i,E)&&(i=(i-t)%o+t),zg(i,this.buffer.duration)&&(i=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,WE(i,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(Q,i)),II(g)){let E=this.toSeconds(g);E=Math.max(E,0),this.stop(Q+E)}return this}_stopSource(A){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(A)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(A){this._source.loopStart=this.toSeconds(A)}get loopEnd(){return this._source.loopEnd}set loopEnd(A){this._source.loopEnd=this.toSeconds(A)}get buffer(){return this._buffer}set buffer(A){this._buffer.set(A)}get loop(){return this._source.loop}set loop(A){this._source.loop=A,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class PE extends ag{constructor(){const A=YA(PE.getDefaults(),arguments,["type"]);super(A),this.name="Noise",this._source=null,this._playbackRate=A.playbackRate,this.type=A.type,this._fadeIn=A.fadeIn,this._fadeOut=A.fadeOut}static getDefaults(){return Object.assign(ag.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(A){if(vA(A in _a,"Noise: invalid type: "+A),this._type!==A&&(this._type=A,this.state==="started")){const I=this.now();this._stop(I),this._start(I)}}get playbackRate(){return this._playbackRate}set playbackRate(A){this._playbackRate=A,this._source&&(this._source.playbackRate.value=A)}_start(A){const I=_a[this._type];this._source=new Oi({url:I,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(A),Math.random()*(I.duration-.001))}_stop(A){this._source&&(this._source.stop(this.toSeconds(A)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(A){this._fadeIn=A,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(A){this._fadeOut=A,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(A){this._stop(A),this._start(A)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const $B=44100*5,jt=2,NC={brown:null,pink:null,white:null},_a={get brown(){if(!NC.brown){const C=[];for(let A=0;A<jt;A++){const I=new Float32Array($B);C[A]=I;let g=0;for(let B=0;B<$B;B++){const Q=Math.random()*2-1;I[B]=(g+.02*Q)/1.02,g=I[B],I[B]*=3.5}}NC.brown=new rI().fromArray(C)}return NC.brown},get pink(){if(!NC.pink){const C=[];for(let A=0;A<jt;A++){const I=new Float32Array($B);C[A]=I;let g,B,Q,i,E,t,o;g=B=Q=i=E=t=o=0;for(let e=0;e<$B;e++){const s=Math.random()*2-1;g=.99886*g+s*.0555179,B=.99332*B+s*.0750759,Q=.969*Q+s*.153852,i=.8665*i+s*.3104856,E=.55*E+s*.5329522,t=-.7616*t-s*.016898,I[e]=g+B+Q+i+E+t+o+s*.5362,I[e]*=.11,o=s*.115926}}NC.pink=new rI().fromArray(C)}return NC.pink},get white(){if(!NC.white){const C=[];for(let A=0;A<jt;A++){const I=new Float32Array($B);C[A]=I;for(let g=0;g<$B;g++)I[g]=Math.random()*2-1}NC.white=new rI().fromArray(C)}return NC.white}};function VB(C,A){return HI(this,void 0,void 0,function*(){const I=A/C.context.sampleRate,g=new wt(1,I,C.context.sampleRate);return new C.constructor(Object.assign(C.get(),{frequency:2/I,detune:0,context:g})).toDestination().start(0),(yield g.render()).getChannelData(0)})}class ys extends uQ{constructor(){const A=YA(ys.getDefaults(),arguments,["frequency","type"]);super(A),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],aB(this._oscillator,this._gainNode),this.type=A.type,this.frequency=new wI({context:this.context,param:this._oscillator.frequency,units:"frequency",value:A.frequency}),this.detune=new wI({context:this.context,param:this._oscillator.detune,units:"cents",value:A.detune}),MI(this,["frequency","detune"])}static getDefaults(){return Object.assign(uQ.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(A){const I=this.toSeconds(A);return this.log("start",I),this._startGain(I),this._oscillator.start(I),this}_stopSource(A){this._oscillator.stop(A)}setPeriodicWave(A){return this._oscillator.setPeriodicWave(A),this}get type(){return this._oscillator.type}set type(A){this._oscillator.type=A}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class WI extends ag{constructor(){const A=YA(WI.getDefaults(),arguments,["frequency","type"]);super(A),this.name="Oscillator",this._oscillator=null,this.frequency=new NI({context:this.context,units:"frequency",value:A.frequency}),MI(this,"frequency"),this.detune=new NI({context:this.context,units:"cents",value:A.detune}),MI(this,"detune"),this._partials=A.partials,this._partialCount=A.partialCount,this._type=A.type,A.partialCount&&A.type!=="custom"&&(this._type=this.baseType+A.partialCount.toString()),this.phase=A.phase}static getDefaults(){return Object.assign(ag.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(A){const I=this.toSeconds(A),g=new ys({context:this.context,onended:()=>this.onstop(this)});this._oscillator=g,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(I)}_stop(A){const I=this.toSeconds(A);this._oscillator&&this._oscillator.stop(I)}_restart(A){const I=this.toSeconds(A);return this.log("restart",I),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(I),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return WI._periodicWaveCache.find(I=>I.phase===this._phase&&Fk(I.partials,this._partials));{const A=WI._periodicWaveCache.find(I=>I.type===this._type&&I.phase===this._phase);return this._partialCount=A?A.partialCount:this._partialCount,A}}get type(){return this._type}set type(A){this._type=A;const I=["sine","square","sawtooth","triangle"].indexOf(A)!==-1;if(this._phase===0&&I)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=A);else{const g=this._getCachedPeriodicWave();if(II(g)){const{partials:B,wave:Q}=g;this._wave=Q,this._partials=B,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[B,Q]=this._getRealImaginary(A,this._phase),i=this.context.createPeriodicWave(B,Q);this._wave=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),WI._periodicWaveCache.push({imag:Q,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:B,type:this._type,wave:this._wave}),WI._periodicWaveCache.length>100&&WI._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(A){this.partialCount&&this._type!=="custom"&&A!=="custom"?this.type=A+this.partialCount:this.type=A}get partialCount(){return this._partialCount}set partialCount(A){EC(A,0);let I=this._type;const g=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(g&&(I=g[1]),this._type!=="custom")A===0?this.type=I:this.type=I+A.toString();else{const B=new Float32Array(A);this._partials.forEach((Q,i)=>B[i]=Q),this._partials=Array.from(B),this.type=this._type}}_getRealImaginary(A,I){let B=2048;const Q=new Float32Array(B),i=new Float32Array(B);let E=1;if(A==="custom"){if(E=this._partials.length+1,this._partialCount=this._partials.length,B=E,this._partials.length===0)return[Q,i]}else{const t=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(A);t?(E=parseInt(t[2],10)+1,this._partialCount=parseInt(t[2],10),A=t[1],E=Math.max(E,2),B=E):this._partialCount=0,this._partials=[]}for(let t=1;t<B;++t){const o=2/(t*Math.PI);let e;switch(A){case"sine":e=t<=E?1:0,this._partials[t-1]=e;break;case"square":e=t&1?2*o:0,this._partials[t-1]=e;break;case"sawtooth":e=o*(t&1?1:-1),this._partials[t-1]=e;break;case"triangle":t&1?e=2*(o*o)*(t-1>>1&1?-1:1):e=0,this._partials[t-1]=e;break;case"custom":e=this._partials[t-1];break;default:throw new TypeError("Oscillator: invalid type: "+A)}e!==0?(Q[t]=-e*Math.sin(I*t),i[t]=e*Math.cos(I*t)):(Q[t]=0,i[t]=0)}return[Q,i]}_inverseFFT(A,I,g){let B=0;const Q=A.length;for(let i=0;i<Q;i++)B+=A[i]*Math.cos(i*g)+I[i]*Math.sin(i*g);return B}getInitialValue(){const[A,I]=this._getRealImaginary(this._type,0);let g=0;const B=Math.PI*2,Q=32;for(let i=0;i<Q;i++)g=Math.max(this._inverseFFT(A,I,i/Q*B),g);return dk(-this._inverseFFT(A,I,this._phase)/g,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(A){this._partials=A,this._partialCount=this._partials.length,A.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(A){this._phase=A*Math.PI/180,this.type=this._type}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}WI._periodicWaveCache=[];class jk extends bC{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new XQ({context:this.context,mapping:A=>(A+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class bB extends NI{constructor(){const A=YA(bB.getDefaults(),arguments,["value"]);super(A),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new kI({context:this.context,minValue:A.minValue,maxValue:A.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(A.value,0)}static getDefaults(){return Object.assign(NI.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Mt extends ag{constructor(){const A=YA(Mt.getDefaults(),arguments,["frequency","type","modulationType"]);super(A),this.name="AMOscillator",this._modulationScale=new jk({context:this.context}),this._modulationNode=new kI({context:this.context}),this._carrier=new WI({context:this.context,detune:A.detune,frequency:A.frequency,onstop:()=>this.onstop(this),phase:A.phase,type:A.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new WI({context:this.context,phase:A.phase,type:A.modulationType}),this.harmonicity=new bB({context:this.context,units:"positive",value:A.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),MI(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(WI.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(A){this._modulator.start(A),this._carrier.start(A)}_stop(A){this._modulator.stop(A),this._carrier.stop(A)}_restart(A){this._modulator.restart(A),this._carrier.restart(A)}get type(){return this._carrier.type}set type(A){this._carrier.type=A}get baseType(){return this._carrier.baseType}set baseType(A){this._carrier.baseType=A}get partialCount(){return this._carrier.partialCount}set partialCount(A){this._carrier.partialCount=A}get modulationType(){return this._modulator.type}set modulationType(A){this._modulator.type=A}get phase(){return this._carrier.phase}set phase(A){this._carrier.phase=A,this._modulator.phase=A}get partials(){return this._carrier.partials}set partials(A){this._carrier.partials=A}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Ut extends ag{constructor(){const A=YA(Ut.getDefaults(),arguments,["frequency","type","modulationType"]);super(A),this.name="FMOscillator",this._modulationNode=new kI({context:this.context,gain:0}),this._carrier=new WI({context:this.context,detune:A.detune,frequency:0,onstop:()=>this.onstop(this),phase:A.phase,type:A.type}),this.detune=this._carrier.detune,this.frequency=new NI({context:this.context,units:"frequency",value:A.frequency}),this._modulator=new WI({context:this.context,phase:A.phase,type:A.modulationType}),this.harmonicity=new bB({context:this.context,units:"positive",value:A.harmonicity}),this.modulationIndex=new bB({context:this.context,units:"positive",value:A.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),MI(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(WI.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(A){this._modulator.start(A),this._carrier.start(A)}_stop(A){this._modulator.stop(A),this._carrier.stop(A)}_restart(A){return this._modulator.restart(A),this._carrier.restart(A),this}get type(){return this._carrier.type}set type(A){this._carrier.type=A}get baseType(){return this._carrier.baseType}set baseType(A){this._carrier.baseType=A}get partialCount(){return this._carrier.partialCount}set partialCount(A){this._carrier.partialCount=A}get modulationType(){return this._modulator.type}set modulationType(A){this._modulator.type=A}get phase(){return this._carrier.phase}set phase(A){this._carrier.phase=A,this._modulator.phase=A}get partials(){return this._carrier.partials}set partials(A){this._carrier.partials=A}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class vi extends ag{constructor(){const A=YA(vi.getDefaults(),arguments,["frequency","width"]);super(A),this.name="PulseOscillator",this._widthGate=new kI({context:this.context,gain:0}),this._thresh=new XQ({context:this.context,mapping:I=>I<=0?-1:1}),this.width=new NI({context:this.context,units:"audioRange",value:A.width}),this._triangle=new WI({context:this.context,detune:A.detune,frequency:A.frequency,onstop:()=>this.onstop(this),phase:A.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),MI(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(ag.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(A){A=this.toSeconds(A),this._triangle.start(A),this._widthGate.gain.setValueAtTime(1,A)}_stop(A){A=this.toSeconds(A),this._triangle.stop(A),this._widthGate.gain.cancelScheduledValues(A),this._widthGate.gain.setValueAtTime(0,A)}_restart(A){this._triangle.restart(A),this._widthGate.gain.cancelScheduledValues(A),this._widthGate.gain.setValueAtTime(1,A)}get phase(){return this._triangle.phase}set phase(A){this._triangle.phase=A}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(A){this._triangle.type=A}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Nt extends ag{constructor(){const A=YA(Nt.getDefaults(),arguments,["frequency","type","spread"]);super(A),this.name="FatOscillator",this._oscillators=[],this.frequency=new NI({context:this.context,units:"frequency",value:A.frequency}),this.detune=new NI({context:this.context,units:"cents",value:A.detune}),this._spread=A.spread,this._type=A.type,this._phase=A.phase,this._partials=A.partials,this._partialCount=A.partialCount,this.count=A.count,MI(this,["frequency","detune"])}static getDefaults(){return Object.assign(WI.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(A){A=this.toSeconds(A),this._forEach(I=>I.start(A))}_stop(A){A=this.toSeconds(A),this._forEach(I=>I.stop(A))}_restart(A){this._forEach(I=>I.restart(A))}_forEach(A){for(let I=0;I<this._oscillators.length;I++)A(this._oscillators[I],I)}get type(){return this._type}set type(A){this._type=A,this._forEach(I=>I.type=A)}get spread(){return this._spread}set spread(A){if(this._spread=A,this._oscillators.length>1){const I=-A/2,g=A/(this._oscillators.length-1);this._forEach((B,Q)=>B.detune.value=I+g*Q)}}get count(){return this._oscillators.length}set count(A){if(EC(A,1),this._oscillators.length!==A){this._forEach(I=>I.dispose()),this._oscillators=[];for(let I=0;I<A;I++){const g=new WI({context:this.context,volume:-6-A*1.1,type:this._type,phase:this._phase+I/A*360,partialCount:this._partialCount,onstop:I===0?()=>this.onstop(this):DI});this.type==="custom"&&(g.partials=this._partials),this.frequency.connect(g.frequency),this.detune.connect(g.detune),g.detune.overridden=!1,g.connect(this.output),this._oscillators[I]=g}this.spread=this._spread,this.state==="started"&&this._forEach(I=>I.start())}}get phase(){return this._phase}set phase(A){this._phase=A,this._forEach((I,g)=>I.phase=this._phase+g/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(A){this._forEach(I=>I.baseType=A),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(A){this._partials=A,this._partialCount=this._partials.length,A.length&&(this._type="custom",this._forEach(I=>I.partials=A))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(A){this._partialCount=A,this._forEach(I=>I.partialCount=A),this._type=this._oscillators[0].type}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(A=>A.dispose()),this}}class Kt extends ag{constructor(){const A=YA(Kt.getDefaults(),arguments,["frequency","modulationFrequency"]);super(A),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new bB({context:this.context,value:2}),this._pulse=new vi({context:this.context,frequency:A.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new WI({context:this.context,detune:A.detune,frequency:A.frequency,onstop:()=>this.onstop(this),phase:A.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),MI(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(ag.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(A){A=this.toSeconds(A),this._modulator.start(A),this._pulse.start(A)}_stop(A){A=this.toSeconds(A),this._modulator.stop(A),this._pulse.stop(A)}_restart(A){this._modulator.restart(A),this._pulse.restart(A)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(A){this._modulator.phase=A}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Oa={am:Mt,fat:Nt,fm:Ut,oscillator:WI,pulse:vi,pwm:Kt};class qQ extends ag{constructor(){const A=YA(qQ.getDefaults(),arguments,["frequency","type"]);super(A),this.name="OmniOscillator",this.frequency=new NI({context:this.context,units:"frequency",value:A.frequency}),this.detune=new NI({context:this.context,units:"cents",value:A.detune}),MI(this,["frequency","detune"]),this.set(A)}static getDefaults(){return Object.assign(WI.getDefaults(),Ut.getDefaults(),Mt.getDefaults(),Nt.getDefaults(),vi.getDefaults(),Kt.getDefaults())}_start(A){this._oscillator.start(A)}_stop(A){this._oscillator.stop(A)}_restart(A){return this._oscillator.restart(A),this}get type(){let A="";return["am","fm","fat"].some(I=>this._sourceType===I)&&(A=this._sourceType),A+this._oscillator.type}set type(A){A.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=A.substr(2)):A.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=A.substr(2)):A.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=A.substr(3)):A==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):A==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=A)}get partials(){return this._oscillator.partials}set partials(A){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=A)}get partialCount(){return this._oscillator.partialCount}set partialCount(A){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=A)}set(A){return Reflect.has(A,"type")&&A.type&&(this.type=A.type),super.set(A),this}_createNewOscillator(A){if(A!==this._sourceType){this._sourceType=A;const I=Oa[A],g=this.now();if(this._oscillator){const B=this._oscillator;B.stop(g),this.context.setTimeout(()=>B.dispose(),this.blockTime)}this._oscillator=new I({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(g)}}get phase(){return this._oscillator.phase}set phase(A){this._oscillator.phase=A}get sourceType(){return this._sourceType}set sourceType(A){let I="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(I=this._oscillator.type),A==="fm"?this.type="fm"+I:A==="am"?this.type="am"+I:A==="fat"?this.type="fat"+I:A==="oscillator"?this.type=I:A==="pulse"?this.type="pulse":A==="pwm"&&(this.type="pwm")}_getOscType(A,I){return A instanceof Oa[I]}get baseType(){return this._oscillator.baseType}set baseType(A){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&A!=="pulse"&&A!=="pwm"&&(this._oscillator.baseType=A)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(A){this._getOscType(this._oscillator,"fat")&&sB(A)&&(this._oscillator.count=A)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(A){this._getOscType(this._oscillator,"fat")&&sB(A)&&(this._oscillator.spread=A)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(A){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&xC(A)&&(this._oscillator.modulationType=A)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return HI(this,arguments,void 0,function*(A=1024){return VB(this,A)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class Ms extends NI{constructor(){super(YA(Ms.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new kI({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,yi(this._constantSource,this._sum)}static getDefaults(){return Object.assign(NI.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class Us extends bC{constructor(){const A=YA(Us.getDefaults(),arguments,["min","max"]);super(A),this.name="Scale",this._mult=this.input=new bB({context:this.context,value:A.max-A.min}),this._add=this.output=new Ms({context:this.context,value:A.min}),this._min=A.min,this._max=A.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(bC.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(A){this._min=A,this._setRange()}get max(){return this._max}set max(A){this._max=A,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}function mh(C,A=1/0){const I=new WeakMap;return function(g,B){Reflect.defineProperty(g,B,{configurable:!0,enumerable:!0,get:function(){return I.get(this)},set:function(Q){EC(Q,C,A),I.set(this,Q)}})}}function VC(C,A=1/0){const I=new WeakMap;return function(g,B){Reflect.defineProperty(g,B,{configurable:!0,enumerable:!0,get:function(){return I.get(this)},set:function(Q){EC(this.toSeconds(Q),C,A),I.set(this,Q)}})}}class Jt extends ag{constructor(){const A=YA(Jt.getDefaults(),arguments,["url","onload"]);super(A),this.name="Player",this._activeSources=new Set,this._buffer=new rI({onload:this._onload.bind(this,A.onload),onerror:A.onerror,reverse:A.reverse,url:A.url}),this.autostart=A.autostart,this._loop=A.loop,this._loopStart=A.loopStart,this._loopEnd=A.loopEnd,this._playbackRate=A.playbackRate,this.fadeIn=A.fadeIn,this.fadeOut=A.fadeOut}static getDefaults(){return Object.assign(ag.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:DI,onerror:DI,playbackRate:1,reverse:!1})}load(A){return HI(this,void 0,void 0,function*(){return yield this._buffer.load(A),this._onload(),this})}_onload(A=DI){A(),this.autostart&&this.start()}_onSourceEnd(A){this.onstop(this),this._activeSources.delete(A),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(A,I,g){return super.start(A,I,g),this}_start(A,I,g){this._loop?I=UQ(I,this._loopStart):I=UQ(I,0);const B=this.toSeconds(I),Q=g;g=UQ(g,Math.max(this._buffer.duration-B,0));let i=this.toSeconds(g);i=i/this._playbackRate,A=this.toSeconds(A);const E=new Oi({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(A+i),this._state.setStateAtTime("stopped",A+i,{implicitEnd:!0})),this._activeSources.add(E),this._loop&&_g(Q)?E.start(A,B):E.start(A,B,i-this.toSeconds(this.fadeOut))}_stop(A){const I=this.toSeconds(A);this._activeSources.forEach(g=>g.stop(I))}restart(A,I,g){return super.restart(A,I,g),this}_restart(A,I,g){var B;(B=[...this._activeSources].pop())===null||B===void 0||B.stop(A),this._start(A,I,g)}seek(A,I){const g=this.toSeconds(I);if(this._state.getValueAtTime(g)==="started"){const B=this.toSeconds(A);this._stop(g),this._start(g,B)}return this}setLoopPoints(A,I){return this.loopStart=A,this.loopEnd=I,this}get loopStart(){return this._loopStart}set loopStart(A){this._loopStart=A,this.buffer.loaded&&EC(this.toSeconds(A),0,this.buffer.duration),this._activeSources.forEach(I=>{I.loopStart=A})}get loopEnd(){return this._loopEnd}set loopEnd(A){this._loopEnd=A,this.buffer.loaded&&EC(this.toSeconds(A),0,this.buffer.duration),this._activeSources.forEach(I=>{I.loopEnd=A})}get buffer(){return this._buffer}set buffer(A){this._buffer.set(A)}get loop(){return this._loop}set loop(A){if(this._loop!==A&&(this._loop=A,this._activeSources.forEach(I=>{I.loop=A}),A)){const I=this._state.getNextState("stopped",this.now());I&&this._state.cancel(I.time)}}get playbackRate(){return this._playbackRate}set playbackRate(A){this._playbackRate=A;const I=this.now(),g=this._state.getNextState("stopped",I);g&&g.implicitEnd&&(this._state.cancel(g.time),this._activeSources.forEach(B=>B.cancelStop())),this._activeSources.forEach(B=>{B.playbackRate.setValueAtTime(A,I)})}get reverse(){return this._buffer.reverse}set reverse(A){this._buffer.reverse=A}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(A=>A.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}nC([VC(0)],Jt.prototype,"fadeIn",void 0);nC([VC(0)],Jt.prototype,"fadeOut",void 0);class Xk extends bC{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new XQ({context:this.context,mapping:A=>Math.abs(A)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class tC extends mA{constructor(){const A=YA(tC.getDefaults(),arguments,["attack","decay","sustain","release"]);super(A),this.name="Envelope",this._sig=new NI({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=A.attack,this.decay=A.decay,this.sustain=A.sustain,this.release=A.release,this.attackCurve=A.attackCurve,this.releaseCurve=A.releaseCurve,this.decayCurve=A.decayCurve}static getDefaults(){return Object.assign(mA.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(A,I){if(xC(A))return A;{let g;for(g in gE)if(gE[g][I]===A)return g;return A}}_setCurve(A,I,g){if(xC(g)&&Reflect.has(gE,g)){const B=gE[g];HB(B)?A!=="_decayCurve"&&(this[A]=B[I]):this[A]=B}else if(CC(g)&&A!=="_decayCurve")this[A]=g;else throw new Error("Envelope: invalid curve: "+g)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(A){this._setCurve("_attackCurve","In",A)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(A){this._setCurve("_releaseCurve","Out",A)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(A){this._setCurve("_decayCurve","Out",A)}triggerAttack(A,I=1){this.log("triggerAttack",A,I),A=this.toSeconds(A);let B=this.toSeconds(this.attack);const Q=this.toSeconds(this.decay),i=this.getValueAtTime(A);if(i>0){const E=1/B;B=(1-i)/E}if(B<this.sampleTime)this._sig.cancelScheduledValues(A),this._sig.setValueAtTime(I,A);else if(this._attackCurve==="linear")this._sig.linearRampTo(I,B,A);else if(this._attackCurve==="exponential")this._sig.targetRampTo(I,B,A);else{this._sig.cancelAndHoldAtTime(A);let E=this._attackCurve;for(let t=1;t<E.length;t++)if(E[t-1]<=i&&i<=E[t]){E=this._attackCurve.slice(t),E[0]=i;break}this._sig.setValueCurveAtTime(E,A,B,I)}if(Q&&this.sustain<1){const E=I*this.sustain,t=A+B;this.log("decay",t),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(E,Q+t):this._sig.exponentialApproachValueAtTime(E,t,Q)}return this}triggerRelease(A){this.log("triggerRelease",A),A=this.toSeconds(A);const I=this.getValueAtTime(A);if(I>0){const g=this.toSeconds(this.release);g<this.sampleTime?this._sig.setValueAtTime(0,A):this._releaseCurve==="linear"?this._sig.linearRampTo(0,g,A):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,g,A):(vA(CC(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(A),this._sig.setValueCurveAtTime(this._releaseCurve,A,g,I))}return this}getValueAtTime(A){return this._sig.getValueAtTime(A)}triggerAttackRelease(A,I,g=1){return I=this.toSeconds(I),this.triggerAttack(I,g),this.triggerRelease(I+this.toSeconds(A)),this}cancel(A){return this._sig.cancelScheduledValues(this.toSeconds(A)),this}connect(A,I=0,g=0){return rs(this,A,I,g),this}asArray(){return HI(this,arguments,void 0,function*(A=1024){const I=A/this.context.sampleRate,g=new wt(1,I,this.context.sampleRate),B=this.toSeconds(this.attack)+this.toSeconds(this.decay),Q=B+this.toSeconds(this.release),i=Q*.1,E=Q+i,t=new this.constructor(Object.assign(this.get(),{attack:I*this.toSeconds(this.attack)/E,decay:I*this.toSeconds(this.decay)/E,release:I*this.toSeconds(this.release)/E,context:g}));return t._sig.toDestination(),t.triggerAttackRelease(I*(B+i)/E,0),(yield g.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}nC([VC(0)],tC.prototype,"attack",void 0);nC([VC(0)],tC.prototype,"decay",void 0);nC([mh(0,1)],tC.prototype,"sustain",void 0);nC([VC(0)],tC.prototype,"release",void 0);const gE=(()=>{let A,I;const g=[];for(A=0;A<128;A++)g[A]=Math.sin(A/127*(Math.PI/2));const B=[],Q=6.4;for(A=0;A<127;A++){I=A/127;const a=Math.sin(I*(Math.PI*2)*Q-Math.PI/2)+1;B[A]=a/10+I*.83}B[127]=1;const i=[],E=5;for(A=0;A<128;A++)i[A]=Math.ceil(A/127*E)/E;const t=[];for(A=0;A<128;A++)I=A/127,t[A]=.5*(1-Math.cos(Math.PI*I));const o=[];for(A=0;A<128;A++){I=A/127;const a=Math.pow(I,3)*4+.2,n=Math.cos(a*Math.PI*2*I);o[A]=Math.abs(n*(1-I))}function e(a){const n=new Array(a.length);for(let c=0;c<a.length;c++)n[c]=1-a[c];return n}function s(a){return a.slice(0).reverse()}return{bounce:{In:e(o),Out:o},cosine:{In:g,Out:s(g)},exponential:"exponential",linear:"linear",ripple:{In:B,Out:e(B)},sine:{In:t,Out:e(t)},step:{In:i,Out:e(i)}}})();class YQ extends mA{constructor(){const A=YA(YQ.getDefaults(),arguments);super(A),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=I=>this._original_triggerRelease(I),this._volume=this.output=new jQ({context:this.context,volume:A.volume}),this.volume=this._volume.volume,MI(this,"volume")}static getDefaults(){return Object.assign(mA.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let A=!1;return this._synced||(this._synced=!0,A=!0),A}_syncMethod(A,I){const g=this["_original_"+A]=this[A];this[A]=(...B)=>{const Q=B[I],i=this.context.transport.schedule(E=>{B[I]=E,g.apply(this,B)},Q);this._scheduledEvents.push(i)}}unsync(){return this._scheduledEvents.forEach(A=>this.context.transport.clear(A)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(A,I,g,B){const Q=this.toSeconds(g),i=this.toSeconds(I);return this.triggerAttack(A,Q,B),this.triggerRelease(Q+i),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class DB extends YQ{constructor(){const A=YA(DB.getDefaults(),arguments);super(A),this.portamento=A.portamento,this.onsilence=A.onsilence}static getDefaults(){return Object.assign(YQ.getDefaults(),{detune:0,onsilence:DI,portamento:0})}triggerAttack(A,I,g=1){this.log("triggerAttack",A,I,g);const B=this.toSeconds(I);return this._triggerEnvelopeAttack(B,g),this.setNote(A,B),this}triggerRelease(A){this.log("triggerRelease",A);const I=this.toSeconds(A);return this._triggerEnvelopeRelease(I),this}setNote(A,I){const g=this.toSeconds(I),B=A instanceof bg?A.toFrequency():A;if(this.portamento>0&&this.getLevelAtTime(g)>.05){const Q=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(B,Q,g)}else this.frequency.setValueAtTime(B,g);return this}}nC([VC(0)],DB.prototype,"portamento",void 0);class Ft extends tC{constructor(){super(YA(Ft.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new kI({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class VE extends DB{constructor(){const A=YA(VE.getDefaults(),arguments);super(A),this.name="Synth",this.oscillator=new qQ(Object.assign({context:this.context,detune:A.detune,onstop:()=>this.onsilence(this)},A.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ft(Object.assign({context:this.context},A.envelope)),this.oscillator.chain(this.envelope,this.output),MI(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(DB.getDefaults(),{envelope:Object.assign(SQ(tC.getDefaults(),Object.keys(mA.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(SQ(qQ.getDefaults(),[...Object.keys(ag.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(A,I){if(this.envelope.triggerAttack(A,I),this.oscillator.start(A),this.envelope.sustain===0){const g=this.toSeconds(this.envelope.attack),B=this.toSeconds(this.envelope.decay);this.oscillator.stop(A+g+B)}}_triggerEnvelopeRelease(A){this.envelope.triggerRelease(A),this.oscillator.stop(A+this.toSeconds(this.envelope.release))}getLevelAtTime(A){return A=this.toSeconds(A),this.envelope.getValueAtTime(A)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class jE extends mA{constructor(){const A=YA(jE.getDefaults(),arguments,["frequency","type"]);super(A),this.name="BiquadFilter",this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new wI({context:this.context,units:"number",value:A.Q,param:this._filter.Q}),this.frequency=new wI({context:this.context,units:"frequency",value:A.frequency,param:this._filter.frequency}),this.detune=new wI({context:this.context,units:"cents",value:A.detune,param:this._filter.detune}),this.gain=new wI({context:this.context,units:"decibels",convert:!1,value:A.gain,param:this._filter.gain}),this.type=A.type}static getDefaults(){return Object.assign(mA.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(A){vA(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(A)!==-1,`Invalid filter type: ${A}`),this._filter.type=A}getFrequencyResponse(A=128){const I=new Float32Array(A);for(let i=0;i<A;i++){const t=Math.pow(i/A,2)*19980+20;I[i]=t}const g=new Float32Array(A),B=new Float32Array(A),Q=this.context.createBiquadFilter();return Q.type=this.type,Q.Q.value=this.Q.value,Q.frequency.value=this.frequency.value,Q.gain.value=this.gain.value,Q.getFrequencyResponse(I,g,B),g}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class XE extends mA{constructor(){const A=YA(XE.getDefaults(),arguments,["frequency","type","rolloff"]);super(A),this.name="Filter",this.input=new kI({context:this.context}),this.output=new kI({context:this.context}),this._filters=[],this._filters=[],this.Q=new NI({context:this.context,units:"positive",value:A.Q}),this.frequency=new NI({context:this.context,units:"frequency",value:A.frequency}),this.detune=new NI({context:this.context,units:"cents",value:A.detune}),this.gain=new NI({context:this.context,units:"decibels",convert:!1,value:A.gain}),this._type=A.type,this.rolloff=A.rolloff,MI(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(mA.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(A){vA(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(A)!==-1,`Invalid filter type: ${A}`),this._type=A,this._filters.forEach(g=>g.type=A)}get rolloff(){return this._rolloff}set rolloff(A){const I=sB(A)?A:parseInt(A,10),g=[-12,-24,-48,-96];let B=g.indexOf(I);vA(B!==-1,`rolloff can only be ${g.join(", ")}`),B+=1,this._rolloff=I,this.input.disconnect(),this._filters.forEach(Q=>Q.disconnect()),this._filters=new Array(B);for(let Q=0;Q<B;Q++){const i=new jE({context:this.context});i.type=this._type,this.frequency.connect(i.frequency),this.detune.connect(i.detune),this.Q.connect(i.Q),this.gain.connect(i.gain),this._filters[Q]=i}this._internalChannels=this._filters,yi(this.input,...this._internalChannels,this.output)}getFrequencyResponse(A=128){const I=new jE({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),g=new Float32Array(A).map(()=>1);return this._filters.forEach(()=>{I.getFrequencyResponse(A).forEach((Q,i)=>g[i]*=Q)}),I.dispose(),g}dispose(){return super.dispose(),this._filters.forEach(A=>{A.dispose()}),as(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class zE extends tC{constructor(){const A=YA(zE.getDefaults(),arguments,["attack","decay","sustain","release"]);super(A),this.name="FrequencyEnvelope",this._octaves=A.octaves,this._baseFrequency=this.toFrequency(A.baseFrequency),this._exponent=this.input=new kt({context:this.context,value:A.exponent}),this._scale=this.output=new Us({context:this.context,min:this._baseFrequency,max:this._baseFrequency*Math.pow(2,this._octaves)}),this._sig.chain(this._exponent,this._scale)}static getDefaults(){return Object.assign(tC.getDefaults(),{baseFrequency:200,exponent:1,octaves:4})}get baseFrequency(){return this._baseFrequency}set baseFrequency(A){const I=this.toFrequency(A);EC(I,0),this._baseFrequency=I,this._scale.min=this._baseFrequency,this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(A){this._octaves=A,this._scale.max=this._baseFrequency*Math.pow(2,A)}get exponent(){return this._exponent.value}set exponent(A){this._exponent.value=A}dispose(){return super.dispose(),this._exponent.dispose(),this._scale.dispose(),this}}class Ns extends DB{constructor(){const A=YA(Ns.getDefaults(),arguments);super(A),this.name="MonoSynth",this.oscillator=new qQ(Object.assign(A.oscillator,{context:this.context,detune:A.detune,onstop:()=>this.onsilence(this)})),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new XE(Object.assign(A.filter,{context:this.context})),this.filterEnvelope=new zE(Object.assign(A.filterEnvelope,{context:this.context})),this.envelope=new Ft(Object.assign(A.envelope,{context:this.context})),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),MI(this,["oscillator","frequency","detune","filter","filterEnvelope","envelope"])}static getDefaults(){return Object.assign(DB.getDefaults(),{envelope:Object.assign(SQ(tC.getDefaults(),Object.keys(mA.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.9}),filter:Object.assign(SQ(XE.getDefaults(),Object.keys(mA.getDefaults())),{Q:1,rolloff:-12,type:"lowpass"}),filterEnvelope:Object.assign(SQ(zE.getDefaults(),Object.keys(mA.getDefaults())),{attack:.6,baseFrequency:200,decay:.2,exponent:2,octaves:3,release:2,sustain:.5}),oscillator:Object.assign(SQ(qQ.getDefaults(),Object.keys(ag.getDefaults())),{type:"sawtooth"})})}_triggerEnvelopeAttack(A,I=1){if(this.envelope.triggerAttack(A,I),this.filterEnvelope.triggerAttack(A),this.oscillator.start(A),this.envelope.sustain===0){const g=this.toSeconds(this.envelope.attack),B=this.toSeconds(this.envelope.decay);this.oscillator.stop(A+g+B)}}_triggerEnvelopeRelease(A){this.envelope.triggerRelease(A),this.filterEnvelope.triggerRelease(A),this.oscillator.stop(A+this.toSeconds(this.envelope.release))}getLevelAtTime(A){return A=this.toSeconds(A),this.envelope.getValueAtTime(A)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this.filterEnvelope.dispose(),this.filter.dispose(),this}}class pt extends VE{constructor(){const A=YA(pt.getDefaults(),arguments);super(A),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=A.pitchDecay,this.octaves=A.octaves,MI(this,["oscillator","envelope"])}static getDefaults(){return MQ(DB.getDefaults(),VE.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(A,I){const g=this.toSeconds(I),B=this.toFrequency(A instanceof bg?A.toFrequency():A),Q=B*this.octaves;return this.oscillator.frequency.setValueAtTime(Q,g),this.oscillator.frequency.exponentialRampToValueAtTime(B,g+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}nC([mh(0)],pt.prototype,"octaves",void 0);nC([VC(0)],pt.prototype,"pitchDecay",void 0);const Hh=new Set;function Ks(C){Hh.add(C)}function Th(C,A){const I=`registerProcessor("${C}", ${A})`;Hh.add(I)}const zk=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Ks(zk);const $k=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Ks($k);const Ay=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Ks(Ay);const Iy="feedback-comb-filter",gy=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;Th(Iy,gy);class dt extends YQ{constructor(){const A=YA(dt.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(A),this.name="Sampler",this._activeSources=new Map;const I={};Object.keys(A.urls).forEach(g=>{const B=parseInt(g,10);if(vA(IE(g)||sB(B)&&isFinite(B),`url key is neither a note or midi pitch: ${g}`),IE(g)){const Q=new bg(this.context,g).toMidi();I[Q]=A.urls[g]}else sB(B)&&isFinite(B)&&(I[B]=A.urls[B])}),this._buffers=new Gs({urls:I,onload:A.onload,baseUrl:A.baseUrl,onerror:A.onerror}),this.attack=A.attack,this.release=A.release,this.curve=A.curve,this._buffers.loaded&&Promise.resolve().then(A.onload)}static getDefaults(){return Object.assign(YQ.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:DI,onerror:DI,release:.1,urls:{}})}_findClosest(A){let g=0;for(;g<96;){if(this._buffers.has(A+g))return-g;if(this._buffers.has(A-g))return g;g++}throw new Error(`No available buffers for note: ${A}`)}triggerAttack(A,I,g=1){return this.log("triggerAttack",A,I,g),Array.isArray(A)||(A=[A]),A.forEach(B=>{const Q=Yh(new bg(this.context,B).toFrequency()),i=Math.round(Q),E=Q-i,t=this._findClosest(i),o=i-t,e=this._buffers.get(o),s=qh(t+E),a=new Oi({url:e,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:s}).connect(this.output);a.start(I,0,e.duration/s,g),CC(this._activeSources.get(i))||this._activeSources.set(i,[]),this._activeSources.get(i).push(a),a.onended=()=>{if(this._activeSources&&this._activeSources.has(i)){const n=this._activeSources.get(i),c=n.indexOf(a);c!==-1&&n.splice(c,1)}}}),this}triggerRelease(A,I){return this.log("triggerRelease",A,I),Array.isArray(A)||(A=[A]),A.forEach(g=>{const B=new bg(this.context,g).toMidi();if(this._activeSources.has(B)&&this._activeSources.get(B).length){const Q=this._activeSources.get(B);I=this.toSeconds(I),Q.forEach(i=>{i.stop(I)}),this._activeSources.set(B,[])}}),this}releaseAll(A){const I=this.toSeconds(A);return this._activeSources.forEach(g=>{for(;g.length;)g.shift().stop(I)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(A,I,g,B=1){const Q=this.toSeconds(g);return this.triggerAttack(A,Q,B),CC(I)?(vA(CC(A),"notes must be an array when duration is array"),A.forEach((i,E)=>{const t=I[Math.min(E,I.length-1)];this.triggerRelease(i,Q+this.toSeconds(t))})):this.triggerRelease(A,Q+this.toSeconds(I)),this}add(A,I,g){if(vA(IE(A)||isFinite(A),`note must be a pitch or midi: ${A}`),IE(A)){const B=new bg(this.context,A).toMidi();this._buffers.add(B,I,g)}else this._buffers.add(A,I,g);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(A=>{A.forEach(I=>I.dispose())}),this._activeSources.clear(),this}}nC([VC(0)],dt.prototype,"attack",void 0);nC([VC(0)],dt.prototype,"release",void 0);class Js extends mA{constructor(){const A=YA(Js.getDefaults(),arguments,["fade"]);super(A),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new Xk({context:this.context}),this.a=new kI({context:this.context,gain:0}),this.b=new kI({context:this.context,gain:0}),this.output=new kI({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new NI({context:this.context,units:"normalRange",value:A.fade}),MI(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",aB(this._split,this.a.gain,0),aB(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(mA.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class va extends mA{constructor(A){super(A),this.name="Effect",this._dryWet=new Js({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new kI({context:this.context}),this.effectReturn=new kI({context:this.context}),this.input=new kI({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(A.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],MI(this,"wet")}static getDefaults(){return Object.assign(mA.getDefaults(),{wet:1})}connectEffect(A){return this._internalChannels.push(A),this.effectSend.chain(A,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Fs extends mA{constructor(){const A=YA(Fs.getDefaults(),arguments,["pan"]);super(A),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new wI({context:this.context,param:this._panner.pan,value:A.pan,minValue:-1,maxValue:1}),this._panner.channelCount=A.channelCount,this._panner.channelCountMode="explicit",MI(this,"pan")}static getDefaults(){return Object.assign(mA.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const Cy="bit-crusher",By=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;Th(Cy,By);class ps extends mA{constructor(){const A=YA(ps.getDefaults(),arguments,["channels"]);super(A),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(A.channels)}static getDefaults(){return Object.assign(mA.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class ds extends va{constructor(){const A=YA(ds.getDefaults(),arguments,["decay"]);super(A),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve(),this._decay=A.decay,this._preDelay=A.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(va.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(A){A=this.toSeconds(A),EC(A,.001),this._decay=A,this.generate()}get preDelay(){return this._preDelay}set preDelay(A){A=this.toSeconds(A),EC(A,0),this._preDelay=A,this.generate()}generate(){return HI(this,void 0,void 0,function*(){const A=this.ready,I=new wt(2,this._decay+this._preDelay,this.context.sampleRate),g=new PE({context:I}),B=new PE({context:I}),Q=new ps({context:I});g.connect(Q,0,0),B.connect(Q,0,1);const i=new kI({context:I}).toDestination();Q.connect(i),g.start(0),B.start(0),i.gain.setValueAtTime(0,0),i.gain.setValueAtTime(1,this._preDelay),i.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const E=I.render();return this.ready=E.then(DI),yield A,this._convolver.buffer=(yield E).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class OI extends mA{constructor(){const A=YA(OI.getDefaults(),arguments,["solo"]);super(A),this.name="Solo",this.input=this.output=new kI({context:this.context}),OI._allSolos.has(this.context)||OI._allSolos.set(this.context,new Set),OI._allSolos.get(this.context).add(this),this.solo=A.solo}static getDefaults(){return Object.assign(mA.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(A){A?this._addSolo():this._removeSolo(),OI._allSolos.get(this.context).forEach(I=>I._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){OI._soloed.has(this.context)||OI._soloed.set(this.context,new Set),OI._soloed.get(this.context).add(this)}_removeSolo(){OI._soloed.has(this.context)&&OI._soloed.get(this.context).delete(this)}_isSoloed(){return OI._soloed.has(this.context)&&OI._soloed.get(this.context).has(this)}_noSolos(){return!OI._soloed.has(this.context)||OI._soloed.has(this.context)&&OI._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),OI._allSolos.get(this.context).delete(this),this._removeSolo(),this}}OI._allSolos=new Map;OI._soloed=new Map;class Rt extends mA{constructor(){const A=YA(Rt.getDefaults(),arguments,["pan","volume"]);super(A),this.name="PanVol",this._panner=this.input=new Fs({context:this.context,pan:A.pan,channelCount:A.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new jQ({context:this.context,volume:A.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=A.mute,MI(this,["pan","volume"])}static getDefaults(){return Object.assign(mA.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(A){this._volume.mute=A}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class GQ extends mA{constructor(){const A=YA(GQ.getDefaults(),arguments,["volume","pan"]);super(A),this.name="Channel",this._solo=this.input=new OI({solo:A.solo,context:this.context}),this._panVol=this.output=new Rt({context:this.context,pan:A.pan,volume:A.volume,mute:A.mute,channelCount:A.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),MI(this,["pan","volume"])}static getDefaults(){return Object.assign(mA.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(A){this._solo.solo=A}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(A){this._panVol.mute=A}_getBus(A){return GQ.buses.has(A)||GQ.buses.set(A,new kI({context:this.context})),GQ.buses.get(A)}send(A,I=0){const g=this._getBus(A),B=new kI({context:this.context,units:"decibels",gain:I});return this.connect(B),B.connect(g),B}receive(A){return this._getBus(A).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}GQ.buses=new Map;AC().transport;AC().destination;AC().destination;AC().listener;AC().draw;AC();let _o=KA.sound.rootDefault,Mi=[],Za=!1,Wa,hi;function Qy(){document.addEventListener("click",async()=>{Za||(await fk(),console.log("audio is ready"),Za=!0)});for(let C of KA.sound.sets[KA.sound.scaleDefault]){const I=(KA.sound.chromaticScale.indexOf(_o)+C)%12;Mi.push(KA.sound.chromaticScale[I])}Wa=new ds({decay:.8,preDelay:.01,wet:.8}).toDestination(),hi=[];for(let C=-1;C<=1;C+=.2){let A=[];for(let I=KA.sound.volLow;I<=KA.sound.volHigh;I++){const g=new Rt(C,I).connect(Wa),B=new Ns({oscillator:{type:"sine"},envelope:{attack:.1,decay:.1,sustain:.1,release:.1}}).connect(g);A.push(B)}hi.push(A)}console.log(hi)}function iy(C){return KA.sound.volLow+(C-KA.object.sizeLow)/(KA.object.sizeHigh-KA.object.sizeLow)*(KA.sound.volHigh-KA.sound.volLow)}function Ey(C){const A=C.y,I=C.z,g=KA.sound.octaveLow+Math.round(A/KA.boxDimensions.y*(KA.sound.octaveHigh-KA.sound.octaveLow)),B=Math.floor((-1*I+KA.boxDimensions.z/2)/KA.boxDimensions.z*Mi.length);return Mi[B]+g}function Pa(C,A){_o=C,Mi=[];for(let I of KA.sound.sets[A]){const B=(KA.sound.chromaticScale.indexOf(_o)+I)%12;Mi.push(KA.sound.chromaticScale[B])}}function Va(C,A,I,g){const B=Math.round(iy(A)),Q=Ey(g),i=g.x,E=Math.floor((i+KA.boxDimensions.x/2)/KA.boxDimensions.x*hi.length),t=B-KA.sound.volLow,o=hi[E][t];switch(C){case"Sphere":o.oscillator.type="sine";break;case"Pyramid":o.oscillator.type="sawtooth";break;case"Cube":o.oscillator.type="square";break}o.triggerAttackRelease(Q,.08)}Qy();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="171",NQ={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kQ={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ty=0,ja=1,oy=2,xh=1,ey=2,RC=3,hB=0,Ng=1,fC=2,oB=0,KQ=1,Xa=2,za=3,$a=4,sy=5,uB=100,ay=101,ny=102,Dy=103,hy=104,ry=200,cy=201,ly=202,Sy=203,Oo=204,vo=205,wy=206,Gy=207,ky=208,yy=209,My=210,Uy=211,Ny=212,Ky=213,Jy=214,Zo=0,Wo=1,Po=2,fQ=3,Vo=4,jo=5,Xo=6,zo=7,us=0,Fy=1,py=2,eB=0,dy=1,Ry=2,uy=3,qy=4,Yy=5,fy=6,Ly=7,bh=300,LQ=301,mQ=302,$o=303,Ae=304,ut=306,Ie=1e3,fB=1001,ge=1002,BC=1003,my=1004,CE=1005,lC=1006,Xt=1007,LB=1008,_C=1009,_h=1010,Oh=1011,Ui=1012,qs=1013,_B=1014,LC=1015,Zi=1016,Ys=1017,fs=1018,HQ=1020,vh=35902,Zh=1021,Wh=1022,gC=1023,Ph=1024,Vh=1025,JQ=1026,TQ=1027,jh=1028,Ls=1029,Xh=1030,ms=1031,Hs=1033,dE=33776,RE=33777,uE=33778,qE=33779,Ce=35840,Be=35841,Qe=35842,ie=35843,Ee=36196,te=37492,oe=37496,ee=37808,se=37809,ae=37810,ne=37811,De=37812,he=37813,re=37814,ce=37815,le=37816,Se=37817,we=37818,Ge=37819,ke=37820,ye=37821,YE=36492,Me=36494,Ue=36495,zh=36283,Ne=36284,Ke=36285,Je=36286,Hy=3200,Ty=3201,$h=0,xy=1,QB="",Tg="srgb",xQ="srgb-linear",$E="linear",hI="srgb",AQ=7680,An=519,by=512,_y=513,Oy=514,Ar=515,vy=516,Zy=517,Wy=518,Py=519,In=35044,gn="300 es",mC=2e3,At=2001;class jB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const Q=B.indexOf(I);Q!==-1&&B.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let Q=0,i=B.length;Q<i;Q++)B[Q].call(this,A);A.target=null}}}const og=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cn=1234567;const ri=Math.PI/180,Ni=180/Math.PI;function zQ(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(og[C&255]+og[C>>8&255]+og[C>>16&255]+og[C>>24&255]+"-"+og[A&255]+og[A>>8&255]+"-"+og[A>>16&15|64]+og[A>>24&255]+"-"+og[I&63|128]+og[I>>8&255]+"-"+og[I>>16&255]+og[I>>24&255]+og[g&255]+og[g>>8&255]+og[g>>16&255]+og[g>>24&255]).toLowerCase()}function $A(C,A,I){return Math.max(A,Math.min(I,C))}function Ts(C,A){return(C%A+A)%A}function Vy(C,A,I,g,B){return g+(C-A)*(B-g)/(I-A)}function jy(C,A,I){return C!==A?(I-C)/(A-C):0}function ci(C,A,I){return(1-I)*C+I*A}function Xy(C,A,I,g){return ci(C,A,1-Math.exp(-I*g))}function zy(C,A=1){return A-Math.abs(Ts(C,A*2)-A)}function $y(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*(3-2*C))}function AM(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*C*(C*(C*6-15)+10))}function IM(C,A){return C+Math.floor(Math.random()*(A-C+1))}function gM(C,A){return C+Math.random()*(A-C)}function CM(C){return C*(.5-Math.random())}function BM(C){C!==void 0&&(Cn=C);let A=Cn+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function QM(C){return C*ri}function iM(C){return C*Ni}function EM(C){return(C&C-1)===0&&C!==0}function tM(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function oM(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function eM(C,A,I,g,B){const Q=Math.cos,i=Math.sin,E=Q(I/2),t=i(I/2),o=Q((A+g)/2),e=i((A+g)/2),s=Q((A-g)/2),a=i((A-g)/2),n=Q((g-A)/2),c=i((g-A)/2);switch(B){case"XYX":C.set(E*e,t*s,t*a,E*o);break;case"YZY":C.set(t*a,E*e,t*s,E*o);break;case"ZXZ":C.set(t*s,t*a,E*e,E*o);break;case"XZX":C.set(E*e,t*c,t*n,E*o);break;case"YXY":C.set(t*n,E*e,t*c,E*o);break;case"ZYZ":C.set(t*c,t*n,E*e,E*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+B)}}function rQ(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function hg(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}const sM={DEG2RAD:ri,RAD2DEG:Ni,generateUUID:zQ,clamp:$A,euclideanModulo:Ts,mapLinear:Vy,inverseLerp:jy,lerp:ci,damp:Xy,pingpong:zy,smoothstep:$y,smootherstep:AM,randInt:IM,randFloat:gM,randFloatSpread:CM,seededRandom:BM,degToRad:QM,radToDeg:iM,isPowerOfTwo:EM,ceilPowerOfTwo:tM,floorPowerOfTwo:oM,setQuaternionFromProperEuler:eM,normalize:hg,denormalize:rQ};class _A{constructor(A=0,I=0){_A.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=$A(this.x,A.x,I.x),this.y=$A(this.y,A.y,I.y),this}clampScalar(A,I){return this.x=$A(this.x,A,I),this.y=$A(this.y,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar($A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos($A(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),Q=this.x-A.x,i=this.y-A.y;return this.x=Q*g-i*B+A.x,this.y=Q*B+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PA{constructor(A,I,g,B,Q,i,E,t,o){PA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,i,E,t,o)}set(A,I,g,B,Q,i,E,t,o){const e=this.elements;return e[0]=A,e[1]=B,e[2]=E,e[3]=I,e[4]=Q,e[5]=t,e[6]=g,e[7]=i,e[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,i=g[0],E=g[3],t=g[6],o=g[1],e=g[4],s=g[7],a=g[2],n=g[5],c=g[8],l=B[0],h=B[3],D=B[6],k=B[1],G=B[4],w=B[7],M=B[2],U=B[5],J=B[8];return Q[0]=i*l+E*k+t*M,Q[3]=i*h+E*G+t*U,Q[6]=i*D+E*w+t*J,Q[1]=o*l+e*k+s*M,Q[4]=o*h+e*G+s*U,Q[7]=o*D+e*w+s*J,Q[2]=a*l+n*k+c*M,Q[5]=a*h+n*G+c*U,Q[8]=a*D+n*w+c*J,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],t=A[6],o=A[7],e=A[8];return I*i*e-I*E*o-g*Q*e+g*E*t+B*Q*o-B*i*t}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],t=A[6],o=A[7],e=A[8],s=e*i-E*o,a=E*t-e*Q,n=o*Q-i*t,c=I*s+g*a+B*n;if(c===0)return this.set(0,0,0,0,0,0,0,0,0);const l=1/c;return A[0]=s*l,A[1]=(B*o-e*g)*l,A[2]=(E*g-B*i)*l,A[3]=a*l,A[4]=(e*I-B*t)*l,A[5]=(B*Q-E*I)*l,A[6]=n*l,A[7]=(g*t-o*I)*l,A[8]=(i*I-g*Q)*l,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,Q,i,E){const t=Math.cos(Q),o=Math.sin(Q);return this.set(g*t,g*o,-g*(t*i+o*E)+i+A,-B*o,B*t,-B*(-o*i+t*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(zt.makeScale(A,I)),this}rotate(A){return this.premultiply(zt.makeRotation(-A)),this}translate(A,I){return this.premultiply(zt.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const zt=new PA;function Ir(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}function It(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function aM(){const C=It("canvas");return C.style.display="block",C}const Bn={};function cQ(C){C in Bn||(Bn[C]=!0,console.warn(C))}function nM(C,A,I){return new Promise(function(g,B){function Q(){switch(C.clientWaitSync(A,C.SYNC_FLUSH_COMMANDS_BIT,0)){case C.WAIT_FAILED:B();break;case C.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function DM(C){const A=C.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function hM(C){const A=C.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const Qn=new PA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),En=new PA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const C={enabled:!0,workingColorSpace:xQ,spaces:{},convert:function(B,Q,i){return this.enabled===!1||Q===i||!Q||!i||(this.spaces[Q].transfer===hI&&(B.r=TC(B.r),B.g=TC(B.g),B.b=TC(B.b)),this.spaces[Q].primaries!==this.spaces[i].primaries&&(B.applyMatrix3(this.spaces[Q].toXYZ),B.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===hI&&(B.r=FQ(B.r),B.g=FQ(B.g),B.b=FQ(B.b))),B},fromWorkingColorSpace:function(B,Q){return this.convert(B,this.workingColorSpace,Q)},toWorkingColorSpace:function(B,Q){return this.convert(B,Q,this.workingColorSpace)},getPrimaries:function(B){return this.spaces[B].primaries},getTransfer:function(B){return B===QB?$E:this.spaces[B].transfer},getLuminanceCoefficients:function(B,Q=this.workingColorSpace){return B.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(B){Object.assign(this.spaces,B)},_getMatrix:function(B,Q,i){return B.copy(this.spaces[Q].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(B){return this.spaces[B].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(B=this.workingColorSpace){return this.spaces[B].workingColorSpaceConfig.unpackColorSpace}},A=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],g=[.3127,.329];return C.define({[xQ]:{primaries:A,whitePoint:g,transfer:$E,toXYZ:Qn,fromXYZ:En,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:Tg},outputColorSpaceConfig:{drawingBufferColorSpace:Tg}},[Tg]:{primaries:A,whitePoint:g,transfer:hI,toXYZ:Qn,fromXYZ:En,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:Tg}}}),C}const tI=rM();function TC(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function FQ(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}let IQ;class cM{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{IQ===void 0&&(IQ=It("canvas")),IQ.width=A.width,IQ.height=A.height;const g=IQ.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=IQ}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=It("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),Q=B.data;for(let i=0;i<Q.length;i++)Q[i]=TC(Q[i]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(TC(I[g]/255)*255):I[g]=TC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let lM=0;class gr{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=zQ(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let i=0,E=B.length;i<E;i++)B[i].isDataTexture?Q.push($t(B[i].image)):Q.push($t(B[i]))}else Q=$t(B);g.url=Q}return I||(A.images[this.uuid]=g),g}}function $t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?cM.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;class Kg extends jB{constructor(A=Kg.DEFAULT_IMAGE,I=Kg.DEFAULT_MAPPING,g=fB,B=fB,Q=lC,i=LB,E=gC,t=_C,o=Kg.DEFAULT_ANISOTROPY,e=QB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=zQ(),this.name="",this.source=new gr(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=B,this.magFilter=Q,this.minFilter=i,this.anisotropy=o,this.format=E,this.internalFormat=null,this.type=t,this.offset=new _A(0,0),this.repeat=new _A(1,1),this.center=new _A(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new PA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==bh)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Ie:A.x=A.x-Math.floor(A.x);break;case fB:A.x=A.x<0?0:1;break;case ge:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Ie:A.y=A.y-Math.floor(A.y);break;case fB:A.y=A.y<0?0:1;break;case ge:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}Kg.DEFAULT_IMAGE=null;Kg.DEFAULT_MAPPING=bh;Kg.DEFAULT_ANISOTROPY=1;class LI{constructor(A=0,I=0,g=0,B=1){LI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*B+i[12]*Q,this.y=i[1]*I+i[5]*g+i[9]*B+i[13]*Q,this.z=i[2]*I+i[6]*g+i[10]*B+i[14]*Q,this.w=i[3]*I+i[7]*g+i[11]*B+i[15]*Q,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,Q;const t=A.elements,o=t[0],e=t[4],s=t[8],a=t[1],n=t[5],c=t[9],l=t[2],h=t[6],D=t[10];if(Math.abs(e-a)<.01&&Math.abs(s-l)<.01&&Math.abs(c-h)<.01){if(Math.abs(e+a)<.1&&Math.abs(s+l)<.1&&Math.abs(c+h)<.1&&Math.abs(o+n+D-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const G=(o+1)/2,w=(n+1)/2,M=(D+1)/2,U=(e+a)/4,J=(s+l)/4,K=(c+h)/4;return G>w&&G>M?G<.01?(g=0,B=.707106781,Q=.707106781):(g=Math.sqrt(G),B=U/g,Q=J/g):w>M?w<.01?(g=.707106781,B=0,Q=.707106781):(B=Math.sqrt(w),g=U/B,Q=K/B):M<.01?(g=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(M),g=J/Q,B=K/Q),this.set(g,B,Q,I),this}let k=Math.sqrt((h-c)*(h-c)+(s-l)*(s-l)+(a-e)*(a-e));return Math.abs(k)<.001&&(k=1),this.x=(h-c)/k,this.y=(s-l)/k,this.z=(a-e)/k,this.w=Math.acos((o+n+D-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=$A(this.x,A.x,I.x),this.y=$A(this.y,A.y,I.y),this.z=$A(this.z,A.z,I.z),this.w=$A(this.w,A.w,I.w),this}clampScalar(A,I){return this.x=$A(this.x,A,I),this.y=$A(this.y,A,I),this.z=$A(this.z,A,I),this.w=$A(this.w,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar($A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends jB{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new LI(0,0,A,I),this.scissorTest=!1,this.viewport=new LI(0,0,A,I);const B={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lC,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new Kg(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const i=g.count;for(let E=0;E<i;E++)this.textures[E]=Q.clone(),this.textures[E].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let B=0,Q=this.textures.length;B<Q;B++)this.textures[B].image.width=A,this.textures[B].image.height=I,this.textures[B].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,B=A.textures.length;g<B;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new gr(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OB extends wM{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Cr extends Kg{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=BC,this.minFilter=BC,this.wrapR=fB,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class GM extends Kg{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=BC,this.minFilter=BC,this.wrapR=fB,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rB{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,Q,i,E){let t=g[B+0],o=g[B+1],e=g[B+2],s=g[B+3];const a=Q[i+0],n=Q[i+1],c=Q[i+2],l=Q[i+3];if(E===0){A[I+0]=t,A[I+1]=o,A[I+2]=e,A[I+3]=s;return}if(E===1){A[I+0]=a,A[I+1]=n,A[I+2]=c,A[I+3]=l;return}if(s!==l||t!==a||o!==n||e!==c){let h=1-E;const D=t*a+o*n+e*c+s*l,k=D>=0?1:-1,G=1-D*D;if(G>Number.EPSILON){const M=Math.sqrt(G),U=Math.atan2(M,D*k);h=Math.sin(h*U)/M,E=Math.sin(E*U)/M}const w=E*k;if(t=t*h+a*w,o=o*h+n*w,e=e*h+c*w,s=s*h+l*w,h===1-E){const M=1/Math.sqrt(t*t+o*o+e*e+s*s);t*=M,o*=M,e*=M,s*=M}}A[I]=t,A[I+1]=o,A[I+2]=e,A[I+3]=s}static multiplyQuaternionsFlat(A,I,g,B,Q,i){const E=g[B],t=g[B+1],o=g[B+2],e=g[B+3],s=Q[i],a=Q[i+1],n=Q[i+2],c=Q[i+3];return A[I]=E*c+e*s+t*n-o*a,A[I+1]=t*c+e*a+o*s-E*n,A[I+2]=o*c+e*n+E*a-t*s,A[I+3]=e*c-E*s-t*a-o*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,B=A._y,Q=A._z,i=A._order,E=Math.cos,t=Math.sin,o=E(g/2),e=E(B/2),s=E(Q/2),a=t(g/2),n=t(B/2),c=t(Q/2);switch(i){case"XYZ":this._x=a*e*s+o*n*c,this._y=o*n*s-a*e*c,this._z=o*e*c+a*n*s,this._w=o*e*s-a*n*c;break;case"YXZ":this._x=a*e*s+o*n*c,this._y=o*n*s-a*e*c,this._z=o*e*c-a*n*s,this._w=o*e*s+a*n*c;break;case"ZXY":this._x=a*e*s-o*n*c,this._y=o*n*s+a*e*c,this._z=o*e*c+a*n*s,this._w=o*e*s-a*n*c;break;case"ZYX":this._x=a*e*s-o*n*c,this._y=o*n*s+a*e*c,this._z=o*e*c-a*n*s,this._w=o*e*s+a*n*c;break;case"YZX":this._x=a*e*s+o*n*c,this._y=o*n*s+a*e*c,this._z=o*e*c-a*n*s,this._w=o*e*s-a*n*c;break;case"XZY":this._x=a*e*s-o*n*c,this._y=o*n*s-a*e*c,this._z=o*e*c+a*n*s,this._w=o*e*s+a*n*c;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],Q=I[8],i=I[1],E=I[5],t=I[9],o=I[2],e=I[6],s=I[10],a=g+E+s;if(a>0){const n=.5/Math.sqrt(a+1);this._w=.25/n,this._x=(e-t)*n,this._y=(Q-o)*n,this._z=(i-B)*n}else if(g>E&&g>s){const n=2*Math.sqrt(1+g-E-s);this._w=(e-t)/n,this._x=.25*n,this._y=(B+i)/n,this._z=(Q+o)/n}else if(E>s){const n=2*Math.sqrt(1+E-g-s);this._w=(Q-o)/n,this._x=(B+i)/n,this._y=.25*n,this._z=(t+e)/n}else{const n=2*Math.sqrt(1+s-g-E);this._w=(i-B)/n,this._x=(Q+o)/n,this._y=(t+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs($A(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,Q=A._z,i=A._w,E=I._x,t=I._y,o=I._z,e=I._w;return this._x=g*e+i*E+B*o-Q*t,this._y=B*e+i*t+Q*E-g*o,this._z=Q*e+i*o+g*t-B*E,this._w=i*e-g*E-B*t-Q*o,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,Q=this._z,i=this._w;let E=i*A._w+g*A._x+B*A._y+Q*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=B,this._z=Q,this;const t=1-E*E;if(t<=Number.EPSILON){const n=1-I;return this._w=n*i+I*this._w,this._x=n*g+I*this._x,this._y=n*B+I*this._y,this._z=n*Q+I*this._z,this.normalize(),this}const o=Math.sqrt(t),e=Math.atan2(o,E),s=Math.sin((1-I)*e)/o,a=Math.sin(I*e)/o;return this._w=i*s+this._w*a,this._x=g*s+this._x*a,this._y=B*s+this._y*a,this._z=Q*s+this._z*a,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),B=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(B*Math.sin(A),B*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(A=0,I=0,g=0){_.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(tn.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(tn.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*B,this.y=Q[1]*I+Q[4]*g+Q[7]*B,this.z=Q[2]*I+Q[5]*g+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=A.elements,i=1/(Q[3]*I+Q[7]*g+Q[11]*B+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*B+Q[12])*i,this.y=(Q[1]*I+Q[5]*g+Q[9]*B+Q[13])*i,this.z=(Q[2]*I+Q[6]*g+Q[10]*B+Q[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,Q=A.x,i=A.y,E=A.z,t=A.w,o=2*(i*B-E*g),e=2*(E*I-Q*B),s=2*(Q*g-i*I);return this.x=I+t*o+i*s-E*e,this.y=g+t*e+E*o-Q*s,this.z=B+t*s+Q*e-i*o,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=$A(this.x,A.x,I.x),this.y=$A(this.y,A.y,I.y),this.z=$A(this.z,A.z,I.z),this}clampScalar(A,I){return this.x=$A(this.x,A,I),this.y=$A(this.y,A,I),this.z=$A(this.z,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar($A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,Q=A.z,i=I.x,E=I.y,t=I.z;return this.x=B*t-Q*E,this.y=Q*i-g*t,this.z=g*E-B*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Ao.copy(this).projectOnVector(A),this.sub(Ao)}reflect(A){return this.sub(Ao.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos($A(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new _,tn=new rB;class Wi{constructor(A=new _(1/0,1/0,1/0),I=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Wg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Wg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Wg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let i=0,E=Q.count;i<E;i++)A.isMesh===!0?A.getVertexPosition(i,Wg):Wg.fromBufferAttribute(Q,i),Wg.applyMatrix4(A.matrixWorld),this.expandByPoint(Wg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),BE.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),BE.copy(g.boundingBox)),BE.applyMatrix4(A.matrixWorld),this.union(BE)}const B=A.children;for(let Q=0,i=B.length;Q<i;Q++)this.expandByObject(B[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Wg),Wg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Ci),QE.subVectors(this.max,Ci),gQ.subVectors(A.a,Ci),CQ.subVectors(A.b,Ci),BQ.subVectors(A.c,Ci),XC.subVectors(CQ,gQ),zC.subVectors(BQ,CQ),UB.subVectors(gQ,BQ);let I=[0,-XC.z,XC.y,0,-zC.z,zC.y,0,-UB.z,UB.y,XC.z,0,-XC.x,zC.z,0,-zC.x,UB.z,0,-UB.x,-XC.y,XC.x,0,-zC.y,zC.x,0,-UB.y,UB.x,0];return!Io(I,gQ,CQ,BQ,QE)||(I=[1,0,0,0,1,0,0,0,1],!Io(I,gQ,CQ,BQ,QE))?!1:(iE.crossVectors(XC,zC),I=[iE.x,iE.y,iE.z],Io(I,gQ,CQ,BQ,QE))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Wg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Wg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(KC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),KC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),KC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),KC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),KC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),KC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),KC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),KC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(KC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const KC=[new _,new _,new _,new _,new _,new _,new _,new _],Wg=new _,BE=new Wi,gQ=new _,CQ=new _,BQ=new _,XC=new _,zC=new _,UB=new _,Ci=new _,QE=new _,iE=new _,NB=new _;function Io(C,A,I,g,B){for(let Q=0,i=C.length-3;Q<=i;Q+=3){NB.fromArray(C,Q);const E=B.x*Math.abs(NB.x)+B.y*Math.abs(NB.y)+B.z*Math.abs(NB.z),t=A.dot(NB),o=I.dot(NB),e=g.dot(NB);if(Math.max(-Math.max(t,o,e),Math.min(t,o,e))>E)return!1}return!0}const kM=new Wi,Bi=new _,go=new _;class qt{constructor(A=new _,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):kM.setFromPoints(A).getCenter(g);let B=0;for(let Q=0,i=A.length;Q<i;Q++)B=Math.max(B,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;Bi.subVectors(A,this.center);const I=Bi.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.addScaledVector(Bi,B/g),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(go.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(Bi.copy(A.center).add(go)),this.expandByPoint(Bi.copy(A.center).sub(go))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const JC=new _,Co=new _,EE=new _,$C=new _,Bo=new _,tE=new _,Qo=new _;class Yt{constructor(A=new _,I=new _(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,JC)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=JC.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(JC.copy(this.origin).addScaledVector(this.direction,I),JC.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){Co.copy(A).add(I).multiplyScalar(.5),EE.copy(I).sub(A).normalize(),$C.copy(this.origin).sub(Co);const Q=A.distanceTo(I)*.5,i=-this.direction.dot(EE),E=$C.dot(this.direction),t=-$C.dot(EE),o=$C.lengthSq(),e=Math.abs(1-i*i);let s,a,n,c;if(e>0)if(s=i*t-E,a=i*E-t,c=Q*e,s>=0)if(a>=-c)if(a<=c){const l=1/e;s*=l,a*=l,n=s*(s+i*a+2*E)+a*(i*s+a+2*t)+o}else a=Q,s=Math.max(0,-(i*a+E)),n=-s*s+a*(a+2*t)+o;else a=-Q,s=Math.max(0,-(i*a+E)),n=-s*s+a*(a+2*t)+o;else a<=-c?(s=Math.max(0,-(-i*Q+E)),a=s>0?-Q:Math.min(Math.max(-Q,-t),Q),n=-s*s+a*(a+2*t)+o):a<=c?(s=0,a=Math.min(Math.max(-Q,-t),Q),n=a*(a+2*t)+o):(s=Math.max(0,-(i*Q+E)),a=s>0?Q:Math.min(Math.max(-Q,-t),Q),n=-s*s+a*(a+2*t)+o);else a=i>0?-Q:Q,s=Math.max(0,-(i*a+E)),n=-s*s+a*(a+2*t)+o;return g&&g.copy(this.origin).addScaledVector(this.direction,s),B&&B.copy(Co).addScaledVector(EE,a),n}intersectSphere(A,I){JC.subVectors(A.center,this.origin);const g=JC.dot(this.direction),B=JC.dot(JC)-g*g,Q=A.radius*A.radius;if(B>Q)return null;const i=Math.sqrt(Q-B),E=g-i,t=g+i;return t<0?null:E<0?this.at(t,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,Q,i,E,t;const o=1/this.direction.x,e=1/this.direction.y,s=1/this.direction.z,a=this.origin;return o>=0?(g=(A.min.x-a.x)*o,B=(A.max.x-a.x)*o):(g=(A.max.x-a.x)*o,B=(A.min.x-a.x)*o),e>=0?(Q=(A.min.y-a.y)*e,i=(A.max.y-a.y)*e):(Q=(A.max.y-a.y)*e,i=(A.min.y-a.y)*e),g>i||Q>B||((Q>g||isNaN(g))&&(g=Q),(i<B||isNaN(B))&&(B=i),s>=0?(E=(A.min.z-a.z)*s,t=(A.max.z-a.z)*s):(E=(A.max.z-a.z)*s,t=(A.min.z-a.z)*s),g>t||E>B)||((E>g||g!==g)&&(g=E),(t<B||B!==B)&&(B=t),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,JC)!==null}intersectTriangle(A,I,g,B,Q){Bo.subVectors(I,A),tE.subVectors(g,A),Qo.crossVectors(Bo,tE);let i=this.direction.dot(Qo),E;if(i>0){if(B)return null;E=1}else if(i<0)E=-1,i=-i;else return null;$C.subVectors(this.origin,A);const t=E*this.direction.dot(tE.crossVectors($C,tE));if(t<0)return null;const o=E*this.direction.dot(Bo.cross($C));if(o<0||t+o>i)return null;const e=-E*$C.dot(Qo);return e<0?null:this.at(e/i,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dI{constructor(A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l,h){dI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l,h)}set(A,I,g,B,Q,i,E,t,o,e,s,a,n,c,l,h){const D=this.elements;return D[0]=A,D[4]=I,D[8]=g,D[12]=B,D[1]=Q,D[5]=i,D[9]=E,D[13]=t,D[2]=o,D[6]=e,D[10]=s,D[14]=a,D[3]=n,D[7]=c,D[11]=l,D[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/QQ.setFromMatrixColumn(A,0).length(),Q=1/QQ.setFromMatrixColumn(A,1).length(),i=1/QQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,Q=A.z,i=Math.cos(g),E=Math.sin(g),t=Math.cos(B),o=Math.sin(B),e=Math.cos(Q),s=Math.sin(Q);if(A.order==="XYZ"){const a=i*e,n=i*s,c=E*e,l=E*s;I[0]=t*e,I[4]=-t*s,I[8]=o,I[1]=n+c*o,I[5]=a-l*o,I[9]=-E*t,I[2]=l-a*o,I[6]=c+n*o,I[10]=i*t}else if(A.order==="YXZ"){const a=t*e,n=t*s,c=o*e,l=o*s;I[0]=a+l*E,I[4]=c*E-n,I[8]=i*o,I[1]=i*s,I[5]=i*e,I[9]=-E,I[2]=n*E-c,I[6]=l+a*E,I[10]=i*t}else if(A.order==="ZXY"){const a=t*e,n=t*s,c=o*e,l=o*s;I[0]=a-l*E,I[4]=-i*s,I[8]=c+n*E,I[1]=n+c*E,I[5]=i*e,I[9]=l-a*E,I[2]=-i*o,I[6]=E,I[10]=i*t}else if(A.order==="ZYX"){const a=i*e,n=i*s,c=E*e,l=E*s;I[0]=t*e,I[4]=c*o-n,I[8]=a*o+l,I[1]=t*s,I[5]=l*o+a,I[9]=n*o-c,I[2]=-o,I[6]=E*t,I[10]=i*t}else if(A.order==="YZX"){const a=i*t,n=i*o,c=E*t,l=E*o;I[0]=t*e,I[4]=l-a*s,I[8]=c*s+n,I[1]=s,I[5]=i*e,I[9]=-E*e,I[2]=-o*e,I[6]=n*s+c,I[10]=a-l*s}else if(A.order==="XZY"){const a=i*t,n=i*o,c=E*t,l=E*o;I[0]=t*e,I[4]=-s,I[8]=o*e,I[1]=a*s+l,I[5]=i*e,I[9]=n*s-c,I[2]=c*s-n,I[6]=E*e,I[10]=l*s+a}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(yM,A,MM)}lookAt(A,I,g){const B=this.elements;return pg.subVectors(A,I),pg.lengthSq()===0&&(pg.z=1),pg.normalize(),AB.crossVectors(g,pg),AB.lengthSq()===0&&(Math.abs(g.z)===1?pg.x+=1e-4:pg.z+=1e-4,pg.normalize(),AB.crossVectors(g,pg)),AB.normalize(),oE.crossVectors(pg,AB),B[0]=AB.x,B[4]=oE.x,B[8]=pg.x,B[1]=AB.y,B[5]=oE.y,B[9]=pg.y,B[2]=AB.z,B[6]=oE.z,B[10]=pg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,i=g[0],E=g[4],t=g[8],o=g[12],e=g[1],s=g[5],a=g[9],n=g[13],c=g[2],l=g[6],h=g[10],D=g[14],k=g[3],G=g[7],w=g[11],M=g[15],U=B[0],J=B[4],K=B[8],y=B[12],S=B[1],p=B[5],R=B[9],q=B[13],H=B[2],Z=B[6],x=B[10],P=B[14],O=B[3],z=B[7],gA=B[11],iA=B[15];return Q[0]=i*U+E*S+t*H+o*O,Q[4]=i*J+E*p+t*Z+o*z,Q[8]=i*K+E*R+t*x+o*gA,Q[12]=i*y+E*q+t*P+o*iA,Q[1]=e*U+s*S+a*H+n*O,Q[5]=e*J+s*p+a*Z+n*z,Q[9]=e*K+s*R+a*x+n*gA,Q[13]=e*y+s*q+a*P+n*iA,Q[2]=c*U+l*S+h*H+D*O,Q[6]=c*J+l*p+h*Z+D*z,Q[10]=c*K+l*R+h*x+D*gA,Q[14]=c*y+l*q+h*P+D*iA,Q[3]=k*U+G*S+w*H+M*O,Q[7]=k*J+G*p+w*Z+M*z,Q[11]=k*K+G*R+w*x+M*gA,Q[15]=k*y+G*q+w*P+M*iA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],Q=A[12],i=A[1],E=A[5],t=A[9],o=A[13],e=A[2],s=A[6],a=A[10],n=A[14],c=A[3],l=A[7],h=A[11],D=A[15];return c*(+Q*t*s-B*o*s-Q*E*a+g*o*a+B*E*n-g*t*n)+l*(+I*t*n-I*o*a+Q*i*a-B*i*n+B*o*e-Q*t*e)+h*(+I*o*s-I*E*n-Q*i*s+g*i*n+Q*E*e-g*o*e)+D*(-B*E*e-I*t*s+I*E*a+B*i*s-g*i*a+g*t*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],i=A[4],E=A[5],t=A[6],o=A[7],e=A[8],s=A[9],a=A[10],n=A[11],c=A[12],l=A[13],h=A[14],D=A[15],k=s*h*o-l*a*o+l*t*n-E*h*n-s*t*D+E*a*D,G=c*a*o-e*h*o-c*t*n+i*h*n+e*t*D-i*a*D,w=e*l*o-c*s*o+c*E*n-i*l*n-e*E*D+i*s*D,M=c*s*t-e*l*t-c*E*a+i*l*a+e*E*h-i*s*h,U=I*k+g*G+B*w+Q*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/U;return A[0]=k*J,A[1]=(l*a*Q-s*h*Q-l*B*n+g*h*n+s*B*D-g*a*D)*J,A[2]=(E*h*Q-l*t*Q+l*B*o-g*h*o-E*B*D+g*t*D)*J,A[3]=(s*t*Q-E*a*Q-s*B*o+g*a*o+E*B*n-g*t*n)*J,A[4]=G*J,A[5]=(e*h*Q-c*a*Q+c*B*n-I*h*n-e*B*D+I*a*D)*J,A[6]=(c*t*Q-i*h*Q-c*B*o+I*h*o+i*B*D-I*t*D)*J,A[7]=(i*a*Q-e*t*Q+e*B*o-I*a*o-i*B*n+I*t*n)*J,A[8]=w*J,A[9]=(c*s*Q-e*l*Q-c*g*n+I*l*n+e*g*D-I*s*D)*J,A[10]=(i*l*Q-c*E*Q+c*g*o-I*l*o-i*g*D+I*E*D)*J,A[11]=(e*E*Q-i*s*Q-e*g*o+I*s*o+i*g*n-I*E*n)*J,A[12]=M*J,A[13]=(e*l*B-c*s*B+c*g*a-I*l*a-e*g*h+I*s*h)*J,A[14]=(c*E*B-i*l*B-c*g*t+I*l*t+i*g*h-I*E*h)*J,A[15]=(i*s*B-e*E*B+e*g*t-I*s*t-i*g*a+I*E*a)*J,this}scale(A){const I=this.elements,g=A.x,B=A.y,Q=A.z;return I[0]*=g,I[4]*=B,I[8]*=Q,I[1]*=g,I[5]*=B,I[9]*=Q,I[2]*=g,I[6]*=B,I[10]*=Q,I[3]*=g,I[7]*=B,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),Q=1-g,i=A.x,E=A.y,t=A.z,o=Q*i,e=Q*E;return this.set(o*i+g,o*E-B*t,o*t+B*E,0,o*E+B*t,e*E+g,e*t-B*i,0,o*t-B*E,e*t+B*i,Q*t*t+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,Q,i){return this.set(1,g,Q,0,A,1,i,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,Q=I._x,i=I._y,E=I._z,t=I._w,o=Q+Q,e=i+i,s=E+E,a=Q*o,n=Q*e,c=Q*s,l=i*e,h=i*s,D=E*s,k=t*o,G=t*e,w=t*s,M=g.x,U=g.y,J=g.z;return B[0]=(1-(l+D))*M,B[1]=(n+w)*M,B[2]=(c-G)*M,B[3]=0,B[4]=(n-w)*U,B[5]=(1-(a+D))*U,B[6]=(h+k)*U,B[7]=0,B[8]=(c+G)*J,B[9]=(h-k)*J,B[10]=(1-(a+l))*J,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let Q=QQ.set(B[0],B[1],B[2]).length();const i=QQ.set(B[4],B[5],B[6]).length(),E=QQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],Pg.copy(this);const o=1/Q,e=1/i,s=1/E;return Pg.elements[0]*=o,Pg.elements[1]*=o,Pg.elements[2]*=o,Pg.elements[4]*=e,Pg.elements[5]*=e,Pg.elements[6]*=e,Pg.elements[8]*=s,Pg.elements[9]*=s,Pg.elements[10]*=s,I.setFromRotationMatrix(Pg),g.x=Q,g.y=i,g.z=E,this}makePerspective(A,I,g,B,Q,i,E=mC){const t=this.elements,o=2*Q/(I-A),e=2*Q/(g-B),s=(I+A)/(I-A),a=(g+B)/(g-B);let n,c;if(E===mC)n=-(i+Q)/(i-Q),c=-2*i*Q/(i-Q);else if(E===At)n=-i/(i-Q),c=-i*Q/(i-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+E);return t[0]=o,t[4]=0,t[8]=s,t[12]=0,t[1]=0,t[5]=e,t[9]=a,t[13]=0,t[2]=0,t[6]=0,t[10]=n,t[14]=c,t[3]=0,t[7]=0,t[11]=-1,t[15]=0,this}makeOrthographic(A,I,g,B,Q,i,E=mC){const t=this.elements,o=1/(I-A),e=1/(g-B),s=1/(i-Q),a=(I+A)*o,n=(g+B)*e;let c,l;if(E===mC)c=(i+Q)*s,l=-2*s;else if(E===At)c=Q*s,l=-1*s;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+E);return t[0]=2*o,t[4]=0,t[8]=0,t[12]=-a,t[1]=0,t[5]=2*e,t[9]=0,t[13]=-n,t[2]=0,t[6]=0,t[10]=l,t[14]=-c,t[3]=0,t[7]=0,t[11]=0,t[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const QQ=new _,Pg=new dI,yM=new _(0,0,0),MM=new _(1,1,1),AB=new _,oE=new _,pg=new _,on=new dI,en=new rB;class oC{constructor(A=0,I=0,g=0,B=oC.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,Q=B[0],i=B[4],E=B[8],t=B[1],o=B[5],e=B[9],s=B[2],a=B[6],n=B[10];switch(I){case"XYZ":this._y=Math.asin($A(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-i,Q)):(this._x=Math.atan2(a,o),this._z=0);break;case"YXZ":this._x=Math.asin(-$A(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,n),this._z=Math.atan2(t,o)):(this._y=Math.atan2(-s,Q),this._z=0);break;case"ZXY":this._x=Math.asin($A(a,-1,1)),Math.abs(a)<.9999999?(this._y=Math.atan2(-s,n),this._z=Math.atan2(-i,o)):(this._y=0,this._z=Math.atan2(t,Q));break;case"ZYX":this._y=Math.asin(-$A(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(a,n),this._z=Math.atan2(t,Q)):(this._x=0,this._z=Math.atan2(-i,o));break;case"YZX":this._z=Math.asin($A(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-e,o),this._y=Math.atan2(-s,Q)):(this._x=0,this._y=Math.atan2(E,n));break;case"XZY":this._z=Math.asin(-$A(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(a,o),this._y=Math.atan2(E,Q)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return on.makeRotationFromQuaternion(A),this.setFromRotationMatrix(on,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return en.setFromEuler(this),this.setFromQuaternion(en,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oC.DEFAULT_ORDER="XYZ";class xs{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let UM=0;const sn=new _,iQ=new rB,FC=new dI,eE=new _,Qi=new _,NM=new _,KM=new rB,an=new _(1,0,0),nn=new _(0,1,0),Dn=new _(0,0,1),hn={type:"added"},JM={type:"removed"},EQ={type:"childadded",child:null},io={type:"childremoved",child:null};class Cg extends jB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=zQ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cg.DEFAULT_UP.clone();const A=new _,I=new oC,g=new rB,B=new _(1,1,1);function Q(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new dI},normalMatrix:{value:new PA}}),this.matrix=new dI,this.matrixWorld=new dI,this.matrixAutoUpdate=Cg.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return iQ.setFromAxisAngle(A,I),this.quaternion.multiply(iQ),this}rotateOnWorldAxis(A,I){return iQ.setFromAxisAngle(A,I),this.quaternion.premultiply(iQ),this}rotateX(A){return this.rotateOnAxis(an,A)}rotateY(A){return this.rotateOnAxis(nn,A)}rotateZ(A){return this.rotateOnAxis(Dn,A)}translateOnAxis(A,I){return sn.copy(A).applyQuaternion(this.quaternion),this.position.add(sn.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(an,A)}translateY(A){return this.translateOnAxis(nn,A)}translateZ(A){return this.translateOnAxis(Dn,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(FC.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?eE.copy(A):eE.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?FC.lookAt(Qi,eE,this.up):FC.lookAt(eE,Qi,this.up),this.quaternion.setFromRotationMatrix(FC),B&&(FC.extractRotation(B.matrixWorld),iQ.setFromRotationMatrix(FC),this.quaternion.premultiply(iQ.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(hn),EQ.child=A,this.dispatchEvent(EQ),EQ.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(JM),io.child=A,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),FC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),FC.multiply(A.parent.matrixWorld)),A.applyMatrix4(FC),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(hn),EQ.child=A,this.dispatchEvent(EQ),EQ.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const B=this.children;for(let Q=0,i=B.length;Q<i;Q++)B[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,A,NM),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,KM,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const B=this.children;for(let Q=0,i=B.length;Q<i;Q++)B[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),B.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(B.type="BatchedMesh",B.perObjectFrustumCulled=this.perObjectFrustumCulled,B.sortObjects=this.sortObjects,B.drawRanges=this._drawRanges,B.reservedRanges=this._reservedRanges,B.visibility=this._visibility,B.active=this._active,B.bounds=this._bounds.map(E=>({boxInitialized:E.boxInitialized,boxMin:E.box.min.toArray(),boxMax:E.box.max.toArray(),sphereInitialized:E.sphereInitialized,sphereRadius:E.sphere.radius,sphereCenter:E.sphere.center.toArray()})),B.maxInstanceCount=this._maxInstanceCount,B.maxVertexCount=this._maxVertexCount,B.maxIndexCount=this._maxIndexCount,B.geometryInitialized=this._geometryInitialized,B.geometryCount=this._geometryCount,B.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(B.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(B.boundingSphere={center:B.boundingSphere.center.toArray(),radius:B.boundingSphere.radius}),this.boundingBox!==null&&(B.boundingBox={min:B.boundingBox.min.toArray(),max:B.boundingBox.max.toArray()}));function Q(E,t){return E[t.uuid]===void 0&&(E[t.uuid]=t.toJSON(A)),t.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const t=E.shapes;if(Array.isArray(t))for(let o=0,e=t.length;o<e;o++){const s=t[o];Q(A.shapes,s)}else Q(A.shapes,t)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let t=0,o=this.material.length;t<o;t++)E.push(Q(A.materials,this.material[t]));B.material=E}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let E=0;E<this.children.length;E++)B.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let E=0;E<this.animations.length;E++){const t=this.animations[E];B.animations.push(Q(A.animations,t))}}if(I){const E=i(A.geometries),t=i(A.materials),o=i(A.textures),e=i(A.images),s=i(A.shapes),a=i(A.skeletons),n=i(A.animations),c=i(A.nodes);E.length>0&&(g.geometries=E),t.length>0&&(g.materials=t),o.length>0&&(g.textures=o),e.length>0&&(g.images=e),s.length>0&&(g.shapes=s),a.length>0&&(g.skeletons=a),n.length>0&&(g.animations=n),c.length>0&&(g.nodes=c)}return g.object=B,g;function i(E){const t=[];for(const o in E){const e=E[o];delete e.metadata,t.push(e)}return t}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}Cg.DEFAULT_UP=new _(0,1,0);Cg.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cg.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vg=new _,pC=new _,Eo=new _,dC=new _,tQ=new _,oQ=new _,rn=new _,to=new _,oo=new _,eo=new _,so=new LI,ao=new LI,no=new LI;class $g{constructor(A=new _,I=new _,g=new _){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),Vg.subVectors(A,I),B.cross(Vg);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,I,g,B,Q){Vg.subVectors(B,I),pC.subVectors(g,I),Eo.subVectors(A,I);const i=Vg.dot(Vg),E=Vg.dot(pC),t=Vg.dot(Eo),o=pC.dot(pC),e=pC.dot(Eo),s=i*o-E*E;if(s===0)return Q.set(0,0,0),null;const a=1/s,n=(o*t-E*e)*a,c=(i*e-E*t)*a;return Q.set(1-n-c,c,n)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,dC)===null?!1:dC.x>=0&&dC.y>=0&&dC.x+dC.y<=1}static getInterpolation(A,I,g,B,Q,i,E,t){return this.getBarycoord(A,I,g,B,dC)===null?(t.x=0,t.y=0,"z"in t&&(t.z=0),"w"in t&&(t.w=0),null):(t.setScalar(0),t.addScaledVector(Q,dC.x),t.addScaledVector(i,dC.y),t.addScaledVector(E,dC.z),t)}static getInterpolatedAttribute(A,I,g,B,Q,i){return so.setScalar(0),ao.setScalar(0),no.setScalar(0),so.fromBufferAttribute(A,I),ao.fromBufferAttribute(A,g),no.fromBufferAttribute(A,B),i.setScalar(0),i.addScaledVector(so,Q.x),i.addScaledVector(ao,Q.y),i.addScaledVector(no,Q.z),i}static isFrontFacing(A,I,g,B){return Vg.subVectors(g,I),pC.subVectors(A,I),Vg.cross(pC).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Vg.subVectors(this.c,this.b),pC.subVectors(this.a,this.b),Vg.cross(pC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return $g.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return $g.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,B,Q){return $g.getInterpolation(A,this.a,this.b,this.c,I,g,B,Q)}containsPoint(A){return $g.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return $g.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,Q=this.c;let i,E;tQ.subVectors(B,g),oQ.subVectors(Q,g),to.subVectors(A,g);const t=tQ.dot(to),o=oQ.dot(to);if(t<=0&&o<=0)return I.copy(g);oo.subVectors(A,B);const e=tQ.dot(oo),s=oQ.dot(oo);if(e>=0&&s<=e)return I.copy(B);const a=t*s-e*o;if(a<=0&&t>=0&&e<=0)return i=t/(t-e),I.copy(g).addScaledVector(tQ,i);eo.subVectors(A,Q);const n=tQ.dot(eo),c=oQ.dot(eo);if(c>=0&&n<=c)return I.copy(Q);const l=n*o-t*c;if(l<=0&&o>=0&&c<=0)return E=o/(o-c),I.copy(g).addScaledVector(oQ,E);const h=e*c-n*s;if(h<=0&&s-e>=0&&n-c>=0)return rn.subVectors(Q,B),E=(s-e)/(s-e+(n-c)),I.copy(B).addScaledVector(rn,E);const D=1/(h+l+a);return i=l*D,E=a*D,I.copy(g).addScaledVector(tQ,i).addScaledVector(oQ,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Br={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},IB={h:0,s:0,l:0},sE={h:0,s:0,l:0};function Do(C,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+(A-C)*6*I:I<1/2?A:I<2/3?C+(A-C)*6*(2/3-I):C}class gI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const B=A;B&&B.isColor?this.copy(B):typeof B=="number"?this.setHex(B):typeof B=="string"&&this.setStyle(B)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=Tg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,tI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=tI.workingColorSpace){return this.r=A,this.g=I,this.b=g,tI.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=tI.workingColorSpace){if(A=Ts(A,1),I=$A(I,0,1),g=$A(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,i=2*g-Q;this.r=Do(i,Q,A+1/3),this.g=Do(i,Q,A),this.b=Do(i,Q,A-1/3)}return tI.toWorkingColorSpace(this,B),this}setStyle(A,I=Tg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const i=B[1],E=B[2];switch(i){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=B[1],i=Q.length;if(i===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=Tg){const g=Br[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=TC(A.r),this.g=TC(A.g),this.b=TC(A.b),this}copyLinearToSRGB(A){return this.r=FQ(A.r),this.g=FQ(A.g),this.b=FQ(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Tg){return tI.fromWorkingColorSpace(eg.copy(this),A),Math.round($A(eg.r*255,0,255))*65536+Math.round($A(eg.g*255,0,255))*256+Math.round($A(eg.b*255,0,255))}getHexString(A=Tg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=tI.workingColorSpace){tI.fromWorkingColorSpace(eg.copy(this),I);const g=eg.r,B=eg.g,Q=eg.b,i=Math.max(g,B,Q),E=Math.min(g,B,Q);let t,o;const e=(E+i)/2;if(E===i)t=0,o=0;else{const s=i-E;switch(o=e<=.5?s/(i+E):s/(2-i-E),i){case g:t=(B-Q)/s+(B<Q?6:0);break;case B:t=(Q-g)/s+2;break;case Q:t=(g-B)/s+4;break}t/=6}return A.h=t,A.s=o,A.l=e,A}getRGB(A,I=tI.workingColorSpace){return tI.fromWorkingColorSpace(eg.copy(this),I),A.r=eg.r,A.g=eg.g,A.b=eg.b,A}getStyle(A=Tg){tI.fromWorkingColorSpace(eg.copy(this),A);const I=eg.r,g=eg.g,B=eg.b;return A!==Tg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${B.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(B*255)})`}offsetHSL(A,I,g){return this.getHSL(IB),this.setHSL(IB.h+A,IB.s+I,IB.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(IB),A.getHSL(sE);const g=ci(IB.h,sE.h,I),B=ci(IB.s,sE.s,I),Q=ci(IB.l,sE.l,I);return this.setHSL(g,B,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,B=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*B,this.g=Q[1]*I+Q[4]*g+Q[7]*B,this.b=Q[2]*I+Q[5]*g+Q[8]*B,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const eg=new gI;gI.NAMES=Br;let FM=0;class XB extends jB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=zQ(),this.name="",this.type="Material",this.blending=KQ,this.side=hB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=vo,this.blendEquation=uB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gI(0,0,0),this.blendAlpha=0,this.depthFunc=fQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=An,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=AQ,this.stencilZFail=AQ,this.stencilZPass=AQ,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const B=this[I];if(B===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==KQ&&(g.blending=this.blending),this.side!==hB&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==Oo&&(g.blendSrc=this.blendSrc),this.blendDst!==vo&&(g.blendDst=this.blendDst),this.blendEquation!==uB&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==fQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==An&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==AQ&&(g.stencilFail=this.stencilFail),this.stencilZFail!==AQ&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==AQ&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function B(Q){const i=[];for(const E in Q){const t=Q[E];delete t.metadata,i.push(t)}return i}if(I){const Q=B(A.textures),i=B(A.images);Q.length>0&&(g.textures=Q),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let Q=0;Q!==B;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bs extends XB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oC,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const bI=new _,aE=new _A;class wC{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=In,this.updateRanges=[],this.gpuType=LC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)aE.fromBufferAttribute(this,I),aE.applyMatrix3(A),this.setXY(I,aE.x,aE.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)bI.fromBufferAttribute(this,I),bI.applyMatrix3(A),this.setXYZ(I,bI.x,bI.y,bI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)bI.fromBufferAttribute(this,I),bI.applyMatrix4(A),this.setXYZ(I,bI.x,bI.y,bI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)bI.fromBufferAttribute(this,I),bI.applyNormalMatrix(A),this.setXYZ(I,bI.x,bI.y,bI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)bI.fromBufferAttribute(this,I),bI.transformDirection(A),this.setXYZ(I,bI.x,bI.y,bI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=rQ(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=hg(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=rQ(I,this.array)),I}setX(A,I){return this.normalized&&(I=hg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=rQ(I,this.array)),I}setY(A,I){return this.normalized&&(I=hg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=rQ(I,this.array)),I}setZ(A,I){return this.normalized&&(I=hg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=rQ(I,this.array)),I}setW(A,I){return this.normalized&&(I=hg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=hg(I,this.array),g=hg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=hg(I,this.array),g=hg(g,this.array),B=hg(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,Q){return A*=this.itemSize,this.normalized&&(I=hg(I,this.array),g=hg(g,this.array),B=hg(B,this.array),Q=hg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==In&&(A.usage=this.usage),A}}class Qr extends wC{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class ir extends wC{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class sg extends wC{constructor(A,I,g){super(new Float32Array(A),I,g)}}let pM=0;const Lg=new dI,ho=new Cg,eQ=new _,dg=new Wi,ii=new Wi,Ag=new _;class DC extends jB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=zQ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ir(A)?ir:Qr)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new PA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Lg.makeRotationFromQuaternion(A),this.applyMatrix4(Lg),this}rotateX(A){return Lg.makeRotationX(A),this.applyMatrix4(Lg),this}rotateY(A){return Lg.makeRotationY(A),this.applyMatrix4(Lg),this}rotateZ(A){return Lg.makeRotationZ(A),this.applyMatrix4(Lg),this}translate(A,I,g){return Lg.makeTranslation(A,I,g),this.applyMatrix4(Lg),this}scale(A,I,g){return Lg.makeScale(A,I,g),this.applyMatrix4(Lg),this}lookAt(A){return ho.lookAt(A),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eQ).negate(),this.translate(eQ.x,eQ.y,eQ.z),this}setFromPoints(A){const I=this.getAttribute("position");if(I===void 0){const g=[];for(let B=0,Q=A.length;B<Q;B++){const i=A[B];g.push(i.x,i.y,i.z||0)}this.setAttribute("position",new sg(g,3))}else{const g=Math.min(A.length,I.count);for(let B=0;B<g;B++){const Q=A[B];I.setXYZ(B,Q.x,Q.y,Q.z||0)}A.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const Q=I[g];dg.setFromBufferAttribute(Q),this.morphTargetsRelative?(Ag.addVectors(this.boundingBox.min,dg.min),this.boundingBox.expandByPoint(Ag),Ag.addVectors(this.boundingBox.max,dg.max),this.boundingBox.expandByPoint(Ag)):(this.boundingBox.expandByPoint(dg.min),this.boundingBox.expandByPoint(dg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(A){const g=this.boundingSphere.center;if(dg.setFromBufferAttribute(A),I)for(let Q=0,i=I.length;Q<i;Q++){const E=I[Q];ii.setFromBufferAttribute(E),this.morphTargetsRelative?(Ag.addVectors(dg.min,ii.min),dg.expandByPoint(Ag),Ag.addVectors(dg.max,ii.max),dg.expandByPoint(Ag)):(dg.expandByPoint(ii.min),dg.expandByPoint(ii.max))}dg.getCenter(g);let B=0;for(let Q=0,i=A.count;Q<i;Q++)Ag.fromBufferAttribute(A,Q),B=Math.max(B,g.distanceToSquared(Ag));if(I)for(let Q=0,i=I.length;Q<i;Q++){const E=I[Q],t=this.morphTargetsRelative;for(let o=0,e=E.count;o<e;o++)Ag.fromBufferAttribute(E,o),t&&(eQ.fromBufferAttribute(A,o),Ag.add(eQ)),B=Math.max(B,g.distanceToSquared(Ag))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,B=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wC(new Float32Array(4*g.count),4));const i=this.getAttribute("tangent"),E=[],t=[];for(let K=0;K<g.count;K++)E[K]=new _,t[K]=new _;const o=new _,e=new _,s=new _,a=new _A,n=new _A,c=new _A,l=new _,h=new _;function D(K,y,S){o.fromBufferAttribute(g,K),e.fromBufferAttribute(g,y),s.fromBufferAttribute(g,S),a.fromBufferAttribute(Q,K),n.fromBufferAttribute(Q,y),c.fromBufferAttribute(Q,S),e.sub(o),s.sub(o),n.sub(a),c.sub(a);const p=1/(n.x*c.y-c.x*n.y);isFinite(p)&&(l.copy(e).multiplyScalar(c.y).addScaledVector(s,-n.y).multiplyScalar(p),h.copy(s).multiplyScalar(n.x).addScaledVector(e,-c.x).multiplyScalar(p),E[K].add(l),E[y].add(l),E[S].add(l),t[K].add(h),t[y].add(h),t[S].add(h))}let k=this.groups;k.length===0&&(k=[{start:0,count:A.count}]);for(let K=0,y=k.length;K<y;++K){const S=k[K],p=S.start,R=S.count;for(let q=p,H=p+R;q<H;q+=3)D(A.getX(q+0),A.getX(q+1),A.getX(q+2))}const G=new _,w=new _,M=new _,U=new _;function J(K){M.fromBufferAttribute(B,K),U.copy(M);const y=E[K];G.copy(y),G.sub(M.multiplyScalar(M.dot(y))).normalize(),w.crossVectors(U,y);const p=w.dot(t[K])<0?-1:1;i.setXYZW(K,G.x,G.y,G.z,p)}for(let K=0,y=k.length;K<y;++K){const S=k[K],p=S.start,R=S.count;for(let q=p,H=p+R;q<H;q+=3)J(A.getX(q+0)),J(A.getX(q+1)),J(A.getX(q+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new wC(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let a=0,n=g.count;a<n;a++)g.setXYZ(a,0,0,0);const B=new _,Q=new _,i=new _,E=new _,t=new _,o=new _,e=new _,s=new _;if(A)for(let a=0,n=A.count;a<n;a+=3){const c=A.getX(a+0),l=A.getX(a+1),h=A.getX(a+2);B.fromBufferAttribute(I,c),Q.fromBufferAttribute(I,l),i.fromBufferAttribute(I,h),e.subVectors(i,Q),s.subVectors(B,Q),e.cross(s),E.fromBufferAttribute(g,c),t.fromBufferAttribute(g,l),o.fromBufferAttribute(g,h),E.add(e),t.add(e),o.add(e),g.setXYZ(c,E.x,E.y,E.z),g.setXYZ(l,t.x,t.y,t.z),g.setXYZ(h,o.x,o.y,o.z)}else for(let a=0,n=I.count;a<n;a+=3)B.fromBufferAttribute(I,a+0),Q.fromBufferAttribute(I,a+1),i.fromBufferAttribute(I,a+2),e.subVectors(i,Q),s.subVectors(B,Q),e.cross(s),g.setXYZ(a+0,e.x,e.y,e.z),g.setXYZ(a+1,e.x,e.y,e.z),g.setXYZ(a+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)Ag.fromBufferAttribute(A,I),Ag.normalize(),A.setXYZ(I,Ag.x,Ag.y,Ag.z)}toNonIndexed(){function A(E,t){const o=E.array,e=E.itemSize,s=E.normalized,a=new o.constructor(t.length*e);let n=0,c=0;for(let l=0,h=t.length;l<h;l++){E.isInterleavedBufferAttribute?n=t[l]*E.data.stride+E.offset:n=t[l]*e;for(let D=0;D<e;D++)a[c++]=o[n++]}return new wC(a,e,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new DC,g=this.index.array,B=this.attributes;for(const E in B){const t=B[E],o=A(t,g);I.setAttribute(E,o)}const Q=this.morphAttributes;for(const E in Q){const t=[],o=Q[E];for(let e=0,s=o.length;e<s;e++){const a=o[e],n=A(a,g);t.push(n)}I.morphAttributes[E]=t}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,t=i.length;E<t;E++){const o=i[E];I.addGroup(o.start,o.count,o.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const o in t)t[o]!==void 0&&(A[o]=t[o]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const t in g){const o=g[t];A.data.attributes[t]=o.toJSON(A.data)}const B={};let Q=!1;for(const t in this.morphAttributes){const o=this.morphAttributes[t],e=[];for(let s=0,a=o.length;s<a;s++){const n=o[s];e.push(n.toJSON(A.data))}e.length>0&&(B[t]=e,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const o in B){const e=B[o];this.setAttribute(o,e.clone(I))}const Q=A.morphAttributes;for(const o in Q){const e=[],s=Q[o];for(let a=0,n=s.length;a<n;a++)e.push(s[a].clone(I));this.morphAttributes[o]=e}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let o=0,e=i.length;o<e;o++){const s=i[o];this.addGroup(s.start,s.count,s.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const t=A.boundingSphere;return t!==null&&(this.boundingSphere=t.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cn=new dI,KB=new Yt,nE=new qt,ln=new _,DE=new _,hE=new _,rE=new _,ro=new _,cE=new _,Sn=new _,lE=new _;class Mg extends Cg{constructor(A=new DC,I=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=B.length;Q<i;Q++){const E=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=Q}}}}getVertexPosition(A,I){const g=this.geometry,B=g.attributes.position,Q=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(B,A);const E=this.morphTargetInfluences;if(Q&&E){cE.set(0,0,0);for(let t=0,o=Q.length;t<o;t++){const e=E[t],s=Q[t];e!==0&&(ro.fromBufferAttribute(s,A),i?cE.addScaledVector(ro,e):cE.addScaledVector(ro.sub(I),e))}I.add(cE)}return I}raycast(A,I){const g=this.geometry,B=this.material,Q=this.matrixWorld;B!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),nE.copy(g.boundingSphere),nE.applyMatrix4(Q),KB.copy(A.ray).recast(A.near),!(nE.containsPoint(KB.origin)===!1&&(KB.intersectSphere(nE,ln)===null||KB.origin.distanceToSquared(ln)>(A.far-A.near)**2))&&(cn.copy(Q).invert(),KB.copy(A.ray).applyMatrix4(cn),!(g.boundingBox!==null&&KB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,KB)))}_computeIntersections(A,I,g){let B;const Q=this.geometry,i=this.material,E=Q.index,t=Q.attributes.position,o=Q.attributes.uv,e=Q.attributes.uv1,s=Q.attributes.normal,a=Q.groups,n=Q.drawRange;if(E!==null)if(Array.isArray(i))for(let c=0,l=a.length;c<l;c++){const h=a[c],D=i[h.materialIndex],k=Math.max(h.start,n.start),G=Math.min(E.count,Math.min(h.start+h.count,n.start+n.count));for(let w=k,M=G;w<M;w+=3){const U=E.getX(w),J=E.getX(w+1),K=E.getX(w+2);B=SE(this,D,A,g,o,e,s,U,J,K),B&&(B.faceIndex=Math.floor(w/3),B.face.materialIndex=h.materialIndex,I.push(B))}}else{const c=Math.max(0,n.start),l=Math.min(E.count,n.start+n.count);for(let h=c,D=l;h<D;h+=3){const k=E.getX(h),G=E.getX(h+1),w=E.getX(h+2);B=SE(this,i,A,g,o,e,s,k,G,w),B&&(B.faceIndex=Math.floor(h/3),I.push(B))}}else if(t!==void 0)if(Array.isArray(i))for(let c=0,l=a.length;c<l;c++){const h=a[c],D=i[h.materialIndex],k=Math.max(h.start,n.start),G=Math.min(t.count,Math.min(h.start+h.count,n.start+n.count));for(let w=k,M=G;w<M;w+=3){const U=w,J=w+1,K=w+2;B=SE(this,D,A,g,o,e,s,U,J,K),B&&(B.faceIndex=Math.floor(w/3),B.face.materialIndex=h.materialIndex,I.push(B))}}else{const c=Math.max(0,n.start),l=Math.min(t.count,n.start+n.count);for(let h=c,D=l;h<D;h+=3){const k=h,G=h+1,w=h+2;B=SE(this,i,A,g,o,e,s,k,G,w),B&&(B.faceIndex=Math.floor(h/3),I.push(B))}}}}function dM(C,A,I,g,B,Q,i,E){let t;if(A.side===Ng?t=g.intersectTriangle(i,Q,B,!0,E):t=g.intersectTriangle(B,Q,i,A.side===hB,E),t===null)return null;lE.copy(E),lE.applyMatrix4(C.matrixWorld);const o=I.ray.origin.distanceTo(lE);return o<I.near||o>I.far?null:{distance:o,point:lE.clone(),object:C}}function SE(C,A,I,g,B,Q,i,E,t,o){C.getVertexPosition(E,DE),C.getVertexPosition(t,hE),C.getVertexPosition(o,rE);const e=dM(C,A,I,g,DE,hE,rE,Sn);if(e){const s=new _;$g.getBarycoord(Sn,DE,hE,rE,s),B&&(e.uv=$g.getInterpolatedAttribute(B,E,t,o,s,new _A)),Q&&(e.uv1=$g.getInterpolatedAttribute(Q,E,t,o,s,new _A)),i&&(e.normal=$g.getInterpolatedAttribute(i,E,t,o,s,new _),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:E,b:t,c:o,normal:new _,materialIndex:0};$g.getNormal(DE,hE,rE,a.normal),e.face=a,e.barycoord=s}return e}class cB extends DC{constructor(A=1,I=1,g=1,B=1,Q=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:Q,depthSegments:i};const E=this;B=Math.floor(B),Q=Math.floor(Q),i=Math.floor(i);const t=[],o=[],e=[],s=[];let a=0,n=0;c("z","y","x",-1,-1,g,I,A,i,Q,0),c("z","y","x",1,-1,g,I,-A,i,Q,1),c("x","z","y",1,1,A,g,I,B,i,2),c("x","z","y",1,-1,A,g,-I,B,i,3),c("x","y","z",1,-1,A,I,g,B,Q,4),c("x","y","z",-1,-1,A,I,-g,B,Q,5),this.setIndex(t),this.setAttribute("position",new sg(o,3)),this.setAttribute("normal",new sg(e,3)),this.setAttribute("uv",new sg(s,2));function c(l,h,D,k,G,w,M,U,J,K,y){const S=w/J,p=M/K,R=w/2,q=M/2,H=U/2,Z=J+1,x=K+1;let P=0,O=0;const z=new _;for(let gA=0;gA<x;gA++){const iA=gA*p-q;for(let GA=0;GA<Z;GA++){const ZA=GA*S-R;z[l]=ZA*k,z[h]=iA*G,z[D]=H,o.push(z.x,z.y,z.z),z[l]=0,z[h]=0,z[D]=U>0?1:-1,e.push(z.x,z.y,z.z),s.push(GA/J),s.push(1-gA/K),P+=1}}for(let gA=0;gA<K;gA++)for(let iA=0;iA<J;iA++){const GA=a+iA+Z*gA,ZA=a+iA+Z*(gA+1),X=a+(iA+1)+Z*(gA+1),$=a+(iA+1)+Z*gA;t.push(GA,ZA,$),t.push(ZA,X,$),O+=6}E.addGroup(n,O,y),n+=O,a+=P}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new cB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function bQ(C){const A={};for(const I in C){A[I]={};for(const g in C[I]){const B=C[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?B.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function rg(C){const A={};for(let I=0;I<C.length;I++){const g=bQ(C[I]);for(const B in g)A[B]=g[B]}return A}function RM(C){const A=[];for(let I=0;I<C.length;I++)A.push(C[I].clone());return A}function Er(C){const A=C.getRenderTarget();return A===null?C.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tI.workingColorSpace}const uM={clone:bQ,merge:rg};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lB extends XB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=bQ(A.uniforms),this.uniformsGroups=RM(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const i=this.uniforms[B].value;i&&i.isTexture?I.uniforms[B]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[B]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[B]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[B]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[B]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[B]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[B]={type:"m4",value:i.toArray()}:I.uniforms[B]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class tr extends Cg{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dI,this.projectionMatrix=new dI,this.projectionMatrixInverse=new dI,this.coordinateSystem=mC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gB=new _,wn=new _A,Gn=new _A;class xg extends tr{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Ni*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(ri*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){gB.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(gB.x,gB.y).multiplyScalar(-A/gB.z),gB.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(gB.x,gB.y).multiplyScalar(-A/gB.z)}getViewSize(A,I){return this.getViewBounds(A,wn,Gn),I.subVectors(Gn,wn)}setViewOffset(A,I,g,B,Q,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(ri*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,Q=-.5*B;const i=this.view;if(this.view!==null&&this.view.enabled){const t=i.fullWidth,o=i.fullHeight;Q+=i.offsetX*B/t,I-=i.offsetY*g/o,B*=i.width/t,g*=i.height/o}const E=this.filmOffset;E!==0&&(Q+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const sQ=-90,aQ=1;class fM extends Cg{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const B=new xg(sQ,aQ,A,I);B.layers=this.layers,this.add(B);const Q=new xg(sQ,aQ,A,I);Q.layers=this.layers,this.add(Q);const i=new xg(sQ,aQ,A,I);i.layers=this.layers,this.add(i);const E=new xg(sQ,aQ,A,I);E.layers=this.layers,this.add(E);const t=new xg(sQ,aQ,A,I);t.layers=this.layers,this.add(t);const o=new xg(sQ,aQ,A,I);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,B,Q,i,E,t]=I;for(const o of I)this.remove(o);if(A===mC)g.up.set(0,1,0),g.lookAt(1,0,0),B.up.set(0,1,0),B.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),E.up.set(0,1,0),E.lookAt(0,0,1),t.up.set(0,1,0),t.lookAt(0,0,-1);else if(A===At)g.up.set(0,-1,0),g.lookAt(-1,0,0),B.up.set(0,-1,0),B.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),E.up.set(0,-1,0),E.lookAt(0,0,1),t.up.set(0,-1,0),t.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const o of I)this.add(o),o.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:B}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,i,E,t,o,e]=this.children,s=A.getRenderTarget(),a=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),c=A.xr.enabled;A.xr.enabled=!1;const l=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,B),A.render(I,Q),A.setRenderTarget(g,1,B),A.render(I,i),A.setRenderTarget(g,2,B),A.render(I,E),A.setRenderTarget(g,3,B),A.render(I,t),A.setRenderTarget(g,4,B),A.render(I,o),g.texture.generateMipmaps=l,A.setRenderTarget(g,5,B),A.render(I,e),A.setRenderTarget(s,a,n),A.xr.enabled=c,g.texture.needsPMREMUpdate=!0}}class or extends Kg{constructor(A,I,g,B,Q,i,E,t,o,e){A=A!==void 0?A:[],I=I!==void 0?I:LQ,super(A,I,g,B,Q,i,E,t,o,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class LM extends OB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new or(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:lC}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new cB(5,5,5),Q=new lB({name:"CubemapFromEquirect",uniforms:bQ(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Ng,blending:oB});Q.uniforms.tEquirect.value=I;const i=new Mg(B,Q),E=I.minFilter;return I.minFilter===LB&&(I.minFilter=lC),new fM(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,B){const Q=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,B);A.setRenderTarget(Q)}}class mM extends Cg{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oC,this.environmentIntensity=1,this.environmentRotation=new oC,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}const co=new _,HM=new _,TM=new PA;class BB{constructor(A=new _(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=co.subVectors(g,I).cross(HM.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(co),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||TM.getNormalMatrix(A),B=this.coplanarPoint(co).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const JB=new qt,wE=new _;class _s{constructor(A=new BB,I=new BB,g=new BB,B=new BB,Q=new BB,i=new BB){this.planes=[A,I,g,B,Q,i]}set(A,I,g,B,Q,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(B),E[4].copy(Q),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=mC){const g=this.planes,B=A.elements,Q=B[0],i=B[1],E=B[2],t=B[3],o=B[4],e=B[5],s=B[6],a=B[7],n=B[8],c=B[9],l=B[10],h=B[11],D=B[12],k=B[13],G=B[14],w=B[15];if(g[0].setComponents(t-Q,a-o,h-n,w-D).normalize(),g[1].setComponents(t+Q,a+o,h+n,w+D).normalize(),g[2].setComponents(t+i,a+e,h+c,w+k).normalize(),g[3].setComponents(t-i,a-e,h-c,w-k).normalize(),g[4].setComponents(t-E,a-s,h-l,w-G).normalize(),I===mC)g[5].setComponents(t+E,a+s,h+l,w+G).normalize();else if(I===At)g[5].setComponents(E,s,l,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),JB.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),JB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(JB)}intersectsSprite(A){return JB.center.set(0,0,0),JB.radius=.7071067811865476,JB.applyMatrix4(A.matrixWorld),this.intersectsSphere(JB)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(wE.x=B.normal.x>0?A.max.x:A.min.x,wE.y=B.normal.y>0?A.max.y:A.min.y,wE.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(wE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class er extends XB{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gI(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const gt=new _,Ct=new _,kn=new dI,Ei=new Yt,GE=new qt,lo=new _,yn=new _;class xM extends Cg{constructor(A=new DC,I=new er){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let B=1,Q=I.count;B<Q;B++)gt.fromBufferAttribute(I,B-1),Ct.fromBufferAttribute(I,B),g[B]=g[B-1],g[B]+=gt.distanceTo(Ct);A.setAttribute("lineDistance",new sg(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,B=this.matrixWorld,Q=A.params.Line.threshold,i=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),GE.copy(g.boundingSphere),GE.applyMatrix4(B),GE.radius+=Q,A.ray.intersectsSphere(GE)===!1)return;kn.copy(B).invert(),Ei.copy(A.ray).applyMatrix4(kn);const E=Q/((this.scale.x+this.scale.y+this.scale.z)/3),t=E*E,o=this.isLineSegments?2:1,e=g.index,a=g.attributes.position;if(e!==null){const n=Math.max(0,i.start),c=Math.min(e.count,i.start+i.count);for(let l=n,h=c-1;l<h;l+=o){const D=e.getX(l),k=e.getX(l+1),G=kE(this,A,Ei,t,D,k);G&&I.push(G)}if(this.isLineLoop){const l=e.getX(c-1),h=e.getX(n),D=kE(this,A,Ei,t,l,h);D&&I.push(D)}}else{const n=Math.max(0,i.start),c=Math.min(a.count,i.start+i.count);for(let l=n,h=c-1;l<h;l+=o){const D=kE(this,A,Ei,t,l,l+1);D&&I.push(D)}if(this.isLineLoop){const l=kE(this,A,Ei,t,c-1,n);l&&I.push(l)}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,i=B.length;Q<i;Q++){const E=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=Q}}}}}function kE(C,A,I,g,B,Q){const i=C.geometry.attributes.position;if(gt.fromBufferAttribute(i,B),Ct.fromBufferAttribute(i,Q),I.distanceSqToSegment(gt,Ct,lo,yn)>g)return;lo.applyMatrix4(C.matrixWorld);const t=A.ray.origin.distanceTo(lo);if(!(t<A.near||t>A.far))return{distance:t,point:yn.clone().applyMatrix4(C.matrixWorld),index:B,face:null,faceIndex:null,barycoord:null,object:C}}const Mn=new _,Un=new _;class bM extends xM{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let B=0,Q=I.count;B<Q;B+=2)Mn.fromBufferAttribute(I,B),Un.fromBufferAttribute(I,B+1),g[B]=B===0?0:g[B-1],g[B+1]=g[B]+Mn.distanceTo(Un);A.setAttribute("lineDistance",new sg(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yE extends Cg{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sr extends Kg{constructor(A,I,g,B,Q,i,E,t,o,e=JQ){if(e!==JQ&&e!==TQ)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===JQ&&(g=_B),g===void 0&&e===TQ&&(g=HQ),super(null,B,Q,i,E,t,e,g,o),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=E!==void 0?E:BC,this.minFilter=t!==void 0?t:BC,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class Os extends DC{constructor(A=[],I=[],g=1,B=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:B};const Q=[],i=[];E(B),o(g),e(),this.setAttribute("position",new sg(Q,3)),this.setAttribute("normal",new sg(Q.slice(),3)),this.setAttribute("uv",new sg(i,2)),B===0?this.computeVertexNormals():this.normalizeNormals();function E(k){const G=new _,w=new _,M=new _;for(let U=0;U<I.length;U+=3)n(I[U+0],G),n(I[U+1],w),n(I[U+2],M),t(G,w,M,k)}function t(k,G,w,M){const U=M+1,J=[];for(let K=0;K<=U;K++){J[K]=[];const y=k.clone().lerp(w,K/U),S=G.clone().lerp(w,K/U),p=U-K;for(let R=0;R<=p;R++)R===0&&K===U?J[K][R]=y:J[K][R]=y.clone().lerp(S,R/p)}for(let K=0;K<U;K++)for(let y=0;y<2*(U-K)-1;y++){const S=Math.floor(y/2);y%2===0?(a(J[K][S+1]),a(J[K+1][S]),a(J[K][S])):(a(J[K][S+1]),a(J[K+1][S+1]),a(J[K+1][S]))}}function o(k){const G=new _;for(let w=0;w<Q.length;w+=3)G.x=Q[w+0],G.y=Q[w+1],G.z=Q[w+2],G.normalize().multiplyScalar(k),Q[w+0]=G.x,Q[w+1]=G.y,Q[w+2]=G.z}function e(){const k=new _;for(let G=0;G<Q.length;G+=3){k.x=Q[G+0],k.y=Q[G+1],k.z=Q[G+2];const w=h(k)/2/Math.PI+.5,M=D(k)/Math.PI+.5;i.push(w,1-M)}c(),s()}function s(){for(let k=0;k<i.length;k+=6){const G=i[k+0],w=i[k+2],M=i[k+4],U=Math.max(G,w,M),J=Math.min(G,w,M);U>.9&&J<.1&&(G<.2&&(i[k+0]+=1),w<.2&&(i[k+2]+=1),M<.2&&(i[k+4]+=1))}}function a(k){Q.push(k.x,k.y,k.z)}function n(k,G){const w=k*3;G.x=A[w+0],G.y=A[w+1],G.z=A[w+2]}function c(){const k=new _,G=new _,w=new _,M=new _,U=new _A,J=new _A,K=new _A;for(let y=0,S=0;y<Q.length;y+=9,S+=6){k.set(Q[y+0],Q[y+1],Q[y+2]),G.set(Q[y+3],Q[y+4],Q[y+5]),w.set(Q[y+6],Q[y+7],Q[y+8]),U.set(i[S+0],i[S+1]),J.set(i[S+2],i[S+3]),K.set(i[S+4],i[S+5]),M.copy(k).add(G).add(w).divideScalar(3);const p=h(M);l(U,S+0,k,p),l(J,S+2,G,p),l(K,S+4,w,p)}}function l(k,G,w,M){M<0&&k.x===1&&(i[G]=k.x-1),w.x===0&&w.z===0&&(i[G]=M/2/Math.PI+.5)}function h(k){return Math.atan2(k.z,-k.x)}function D(k){return Math.atan2(-k.y,Math.sqrt(k.x*k.x+k.z*k.z))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Os(A.vertices,A.indices,A.radius,A.details)}}class ft extends DC{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const Q=A/2,i=I/2,E=Math.floor(g),t=Math.floor(B),o=E+1,e=t+1,s=A/E,a=I/t,n=[],c=[],l=[],h=[];for(let D=0;D<e;D++){const k=D*a-i;for(let G=0;G<o;G++){const w=G*s-Q;c.push(w,-k,0),l.push(0,0,1),h.push(G/E),h.push(1-D/t)}}for(let D=0;D<t;D++)for(let k=0;k<E;k++){const G=k+o*D,w=k+o*(D+1),M=k+1+o*(D+1),U=k+1+o*D;n.push(G,w,U),n.push(w,M,U)}this.setIndex(n),this.setAttribute("position",new sg(c,3)),this.setAttribute("normal",new sg(l,3)),this.setAttribute("uv",new sg(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ft(A.width,A.height,A.widthSegments,A.heightSegments)}}class vs extends DC{constructor(A=1,I=32,g=16,B=0,Q=Math.PI*2,i=0,E=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:g,phiStart:B,phiLength:Q,thetaStart:i,thetaLength:E},I=Math.max(3,Math.floor(I)),g=Math.max(2,Math.floor(g));const t=Math.min(i+E,Math.PI);let o=0;const e=[],s=new _,a=new _,n=[],c=[],l=[],h=[];for(let D=0;D<=g;D++){const k=[],G=D/g;let w=0;D===0&&i===0?w=.5/I:D===g&&t===Math.PI&&(w=-.5/I);for(let M=0;M<=I;M++){const U=M/I;s.x=-A*Math.cos(B+U*Q)*Math.sin(i+G*E),s.y=A*Math.cos(i+G*E),s.z=A*Math.sin(B+U*Q)*Math.sin(i+G*E),c.push(s.x,s.y,s.z),a.copy(s).normalize(),l.push(a.x,a.y,a.z),h.push(U+w,1-G),k.push(o++)}e.push(k)}for(let D=0;D<g;D++)for(let k=0;k<I;k++){const G=e[D][k+1],w=e[D][k],M=e[D+1][k],U=e[D+1][k+1];(D!==0||i>0)&&n.push(G,w,U),(D!==g-1||t<Math.PI)&&n.push(w,M,U)}this.setIndex(n),this.setAttribute("position",new sg(c,3)),this.setAttribute("normal",new sg(l,3)),this.setAttribute("uv",new sg(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new vs(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class Zs extends Os{constructor(A=1,I=0){const g=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],B=[2,1,0,0,3,2,1,3,0,2,3,1];super(g,B,A,I),this.type="TetrahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new Zs(A.radius,A.detail)}}class _M extends XB{constructor(A){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new gI(0),this.transparent=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.fog=A.fog,this}}class OM extends XB{constructor(A){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new gI(16777215),this.specular=new gI(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new _A(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oC,this.combine=us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class vM extends XB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class ZM extends XB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}class ar extends Cg{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new gI(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}class WM extends ar{constructor(A,I,g){super(A,g),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cg.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gI(I)}copy(A,I){return super.copy(A,I),this.groundColor.copy(A.groundColor),this}}const So=new dI,Nn=new _,Kn=new _;class PM{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _A(512,512),this.map=null,this.mapPass=null,this.matrix=new dI,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new _A(1,1),this._viewportCount=1,this._viewports=[new LI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Nn.setFromMatrixPosition(A.matrixWorld),I.position.copy(Nn),Kn.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Kn),I.updateMatrixWorld(),So.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(So)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class nr extends tr{constructor(A=-1,I=1,g=1,B=-1,Q=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=Q,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,Q,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=g-A,i=g+A,E=B+I,t=B-I;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=o*this.view.offsetX,i=Q+o*this.view.width,E-=e*this.view.offsetY,t=E-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,i,E,t,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}class VM extends PM{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jM extends ar{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cg.DEFAULT_UP),this.updateMatrix(),this.target=new Cg,this.shadow=new VM}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class XM extends xg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class zM{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jn(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Jn();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Jn(){return performance.now()}const Fn=new dI;class $M{constructor(A,I,g=0,B=1/0){this.ray=new Yt(A,I),this.near=g,this.far=B,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}setFromXRController(A){return Fn.identity().extractRotation(A.matrixWorld),this.ray.origin.setFromMatrixPosition(A.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fn),this}intersectObject(A,I=!0,g=[]){return Fe(A,this,g,I),g.sort(pn),g}intersectObjects(A,I=!0,g=[]){for(let B=0,Q=A.length;B<Q;B++)Fe(A[B],this,g,I);return g.sort(pn),g}}function pn(C,A){return C.distance-A.distance}function Fe(C,A,I,g){let B=!0;if(C.layers.test(A.layers)&&C.raycast(A,I)===!1&&(B=!1),B===!0&&g===!0){const Q=C.children;for(let i=0,E=Q.length;i<E;i++)Fe(Q[i],A,I,!0)}}class dn{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=$A(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos($A(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AU extends jB{constructor(A,I=null){super(),this.object=A,this.domElement=I,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Rn(C,A,I,g){const B=IU(g);switch(I){case Zh:return C*A;case Ph:return C*A;case Vh:return C*A*2;case jh:return C*A/B.components*B.byteLength;case Ls:return C*A/B.components*B.byteLength;case Xh:return C*A*2/B.components*B.byteLength;case ms:return C*A*2/B.components*B.byteLength;case Wh:return C*A*3/B.components*B.byteLength;case gC:return C*A*4/B.components*B.byteLength;case Hs:return C*A*4/B.components*B.byteLength;case dE:case RE:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*8;case uE:case qE:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case Be:case ie:return Math.max(C,16)*Math.max(A,8)/4;case Ce:case Qe:return Math.max(C,8)*Math.max(A,8)/2;case Ee:case te:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*8;case oe:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case ee:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case se:return Math.floor((C+4)/5)*Math.floor((A+3)/4)*16;case ae:return Math.floor((C+4)/5)*Math.floor((A+4)/5)*16;case ne:return Math.floor((C+5)/6)*Math.floor((A+4)/5)*16;case De:return Math.floor((C+5)/6)*Math.floor((A+5)/6)*16;case he:return Math.floor((C+7)/8)*Math.floor((A+4)/5)*16;case re:return Math.floor((C+7)/8)*Math.floor((A+5)/6)*16;case ce:return Math.floor((C+7)/8)*Math.floor((A+7)/8)*16;case le:return Math.floor((C+9)/10)*Math.floor((A+4)/5)*16;case Se:return Math.floor((C+9)/10)*Math.floor((A+5)/6)*16;case we:return Math.floor((C+9)/10)*Math.floor((A+7)/8)*16;case Ge:return Math.floor((C+9)/10)*Math.floor((A+9)/10)*16;case ke:return Math.floor((C+11)/12)*Math.floor((A+9)/10)*16;case ye:return Math.floor((C+11)/12)*Math.floor((A+11)/12)*16;case YE:case Me:case Ue:return Math.ceil(C/4)*Math.ceil(A/4)*16;case zh:case Ne:return Math.ceil(C/4)*Math.ceil(A/4)*8;case Ke:case Je:return Math.ceil(C/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function IU(C){switch(C){case _C:case _h:return{byteLength:1,components:1};case Ui:case Oh:case Zi:return{byteLength:2,components:1};case Ys:case fs:return{byteLength:2,components:4};case _B:case qs:case LC:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${C}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dr(){let C=null,A=!1,I=null,g=null;function B(Q,i){I(Q,i),g=C.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=C.requestAnimationFrame(B),A=!0)},stop:function(){C.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){C=Q}}}function gU(C){const A=new WeakMap;function I(E,t){const o=E.array,e=E.usage,s=o.byteLength,a=C.createBuffer();C.bindBuffer(t,a),C.bufferData(t,o,e),E.onUploadCallback();let n;if(o instanceof Float32Array)n=C.FLOAT;else if(o instanceof Uint16Array)E.isFloat16BufferAttribute?n=C.HALF_FLOAT:n=C.UNSIGNED_SHORT;else if(o instanceof Int16Array)n=C.SHORT;else if(o instanceof Uint32Array)n=C.UNSIGNED_INT;else if(o instanceof Int32Array)n=C.INT;else if(o instanceof Int8Array)n=C.BYTE;else if(o instanceof Uint8Array)n=C.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)n=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:a,type:n,bytesPerElement:o.BYTES_PER_ELEMENT,version:E.version,size:s}}function g(E,t,o){const e=t.array,s=t.updateRanges;if(C.bindBuffer(o,E),s.length===0)C.bufferSubData(o,0,e);else{s.sort((n,c)=>n.start-c.start);let a=0;for(let n=1;n<s.length;n++){const c=s[a],l=s[n];l.start<=c.start+c.count+1?c.count=Math.max(c.count,l.start+l.count-c.start):(++a,s[a]=l)}s.length=a+1;for(let n=0,c=s.length;n<c;n++){const l=s[n];C.bufferSubData(o,l.start*e.BYTES_PER_ELEMENT,e,l.start,l.count)}t.clearUpdateRanges()}t.onUploadCallback()}function B(E){return E.isInterleavedBufferAttribute&&(E=E.data),A.get(E)}function Q(E){E.isInterleavedBufferAttribute&&(E=E.data);const t=A.get(E);t&&(C.deleteBuffer(t.buffer),A.delete(E))}function i(E,t){if(E.isInterleavedBufferAttribute&&(E=E.data),E.isGLBufferAttribute){const e=A.get(E);(!e||e.version<E.version)&&A.set(E,{buffer:E.buffer,type:E.type,bytesPerElement:E.elementSize,version:E.version});return}const o=A.get(E);if(o===void 0)A.set(E,I(E,t));else if(o.version<E.version){if(o.size!==E.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(o.buffer,E,t),o.version=E.version}}return{get:B,remove:Q,update:i}}var CU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BU=`#ifdef USE_ALPHAHASH
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
#endif`,QU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oU=`#ifdef USE_AOMAP
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
#endif`,eU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sU=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rU=`#ifdef USE_IRIDESCENCE
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
#endif`,cU=`#ifdef USE_BUMPMAP
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
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NU=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,KU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JU=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uU="gl_FragColor = linearToOutputTexel( gl_FragColor );",qU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LU=`#ifdef USE_ENVMAP
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
#endif`,mU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_U=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OU=`#ifdef USE_GRADIENTMAP
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
}`,vU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PU=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,VU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,jU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$U=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,IN=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gN=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QN=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iN=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EN=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tN=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aN=`#if defined( USE_POINTS_UV )
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
#endif`,nN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lN=`#ifdef USE_MORPHTARGETS
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
#endif`,SN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UN=`#ifdef USE_NORMALMAP
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
#endif`,NN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,TN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,xN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,bN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_N=`#ifdef USE_SKINNING
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
#endif`,ON=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vN=`#ifdef USE_SKINNING
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
#endif`,ZN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jN=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XN=`#ifdef USE_TRANSMISSION
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
#endif`,zN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$N=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,w0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
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
}`,U0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,N0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,J0=`#define TOON
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
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,p0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,u0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,q0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,XA={alphahash_fragment:CU,alphahash_pars_fragment:BU,alphamap_fragment:QU,alphamap_pars_fragment:iU,alphatest_fragment:EU,alphatest_pars_fragment:tU,aomap_fragment:oU,aomap_pars_fragment:eU,batching_pars_vertex:sU,batching_vertex:aU,begin_vertex:nU,beginnormal_vertex:DU,bsdfs:hU,iridescence_fragment:rU,bumpmap_pars_fragment:cU,clipping_planes_fragment:lU,clipping_planes_pars_fragment:SU,clipping_planes_pars_vertex:wU,clipping_planes_vertex:GU,color_fragment:kU,color_pars_fragment:yU,color_pars_vertex:MU,color_vertex:UU,common:NU,cube_uv_reflection_fragment:KU,defaultnormal_vertex:JU,displacementmap_pars_vertex:FU,displacementmap_vertex:pU,emissivemap_fragment:dU,emissivemap_pars_fragment:RU,colorspace_fragment:uU,colorspace_pars_fragment:qU,envmap_fragment:YU,envmap_common_pars_fragment:fU,envmap_pars_fragment:LU,envmap_pars_vertex:mU,envmap_physical_pars_fragment:VU,envmap_vertex:HU,fog_vertex:TU,fog_pars_vertex:xU,fog_fragment:bU,fog_pars_fragment:_U,gradientmap_pars_fragment:OU,lightmap_pars_fragment:vU,lights_lambert_fragment:ZU,lights_lambert_pars_fragment:WU,lights_pars_begin:PU,lights_toon_fragment:jU,lights_toon_pars_fragment:XU,lights_phong_fragment:zU,lights_phong_pars_fragment:$U,lights_physical_fragment:AN,lights_physical_pars_fragment:IN,lights_fragment_begin:gN,lights_fragment_maps:CN,lights_fragment_end:BN,logdepthbuf_fragment:QN,logdepthbuf_pars_fragment:iN,logdepthbuf_pars_vertex:EN,logdepthbuf_vertex:tN,map_fragment:oN,map_pars_fragment:eN,map_particle_fragment:sN,map_particle_pars_fragment:aN,metalnessmap_fragment:nN,metalnessmap_pars_fragment:DN,morphinstance_vertex:hN,morphcolor_vertex:rN,morphnormal_vertex:cN,morphtarget_pars_vertex:lN,morphtarget_vertex:SN,normal_fragment_begin:wN,normal_fragment_maps:GN,normal_pars_fragment:kN,normal_pars_vertex:yN,normal_vertex:MN,normalmap_pars_fragment:UN,clearcoat_normal_fragment_begin:NN,clearcoat_normal_fragment_maps:KN,clearcoat_pars_fragment:JN,iridescence_pars_fragment:FN,opaque_fragment:pN,packing:dN,premultiplied_alpha_fragment:RN,project_vertex:uN,dithering_fragment:qN,dithering_pars_fragment:YN,roughnessmap_fragment:fN,roughnessmap_pars_fragment:LN,shadowmap_pars_fragment:mN,shadowmap_pars_vertex:HN,shadowmap_vertex:TN,shadowmask_pars_fragment:xN,skinbase_vertex:bN,skinning_pars_vertex:_N,skinning_vertex:ON,skinnormal_vertex:vN,specularmap_fragment:ZN,specularmap_pars_fragment:WN,tonemapping_fragment:PN,tonemapping_pars_fragment:VN,transmission_fragment:jN,transmission_pars_fragment:XN,uv_pars_fragment:zN,uv_pars_vertex:$N,uv_vertex:A0,worldpos_vertex:I0,background_vert:g0,background_frag:C0,backgroundCube_vert:B0,backgroundCube_frag:Q0,cube_vert:i0,cube_frag:E0,depth_vert:t0,depth_frag:o0,distanceRGBA_vert:e0,distanceRGBA_frag:s0,equirect_vert:a0,equirect_frag:n0,linedashed_vert:D0,linedashed_frag:h0,meshbasic_vert:r0,meshbasic_frag:c0,meshlambert_vert:l0,meshlambert_frag:S0,meshmatcap_vert:w0,meshmatcap_frag:G0,meshnormal_vert:k0,meshnormal_frag:y0,meshphong_vert:M0,meshphong_frag:U0,meshphysical_vert:N0,meshphysical_frag:K0,meshtoon_vert:J0,meshtoon_frag:F0,points_vert:p0,points_frag:d0,shadow_vert:R0,shadow_frag:u0,sprite_vert:q0,sprite_frag:Y0},hA={common:{diffuse:{value:new gI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new PA}},envmap:{envMap:{value:null},envMapRotation:{value:new PA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new PA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new PA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new PA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new PA},normalScale:{value:new _A(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new PA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new PA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new PA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new PA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0},uvTransform:{value:new PA}},sprite:{diffuse:{value:new gI(16777215)},opacity:{value:1},center:{value:new _A(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}}},rC={basic:{uniforms:rg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.fog]),vertexShader:XA.meshbasic_vert,fragmentShader:XA.meshbasic_frag},lambert:{uniforms:rg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,hA.lights,{emissive:{value:new gI(0)}}]),vertexShader:XA.meshlambert_vert,fragmentShader:XA.meshlambert_frag},phong:{uniforms:rg([hA.common,hA.specularmap,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,hA.lights,{emissive:{value:new gI(0)},specular:{value:new gI(1118481)},shininess:{value:30}}]),vertexShader:XA.meshphong_vert,fragmentShader:XA.meshphong_frag},standard:{uniforms:rg([hA.common,hA.envmap,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.roughnessmap,hA.metalnessmap,hA.fog,hA.lights,{emissive:{value:new gI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag},toon:{uniforms:rg([hA.common,hA.aomap,hA.lightmap,hA.emissivemap,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.gradientmap,hA.fog,hA.lights,{emissive:{value:new gI(0)}}]),vertexShader:XA.meshtoon_vert,fragmentShader:XA.meshtoon_frag},matcap:{uniforms:rg([hA.common,hA.bumpmap,hA.normalmap,hA.displacementmap,hA.fog,{matcap:{value:null}}]),vertexShader:XA.meshmatcap_vert,fragmentShader:XA.meshmatcap_frag},points:{uniforms:rg([hA.points,hA.fog]),vertexShader:XA.points_vert,fragmentShader:XA.points_frag},dashed:{uniforms:rg([hA.common,hA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:XA.linedashed_vert,fragmentShader:XA.linedashed_frag},depth:{uniforms:rg([hA.common,hA.displacementmap]),vertexShader:XA.depth_vert,fragmentShader:XA.depth_frag},normal:{uniforms:rg([hA.common,hA.bumpmap,hA.normalmap,hA.displacementmap,{opacity:{value:1}}]),vertexShader:XA.meshnormal_vert,fragmentShader:XA.meshnormal_frag},sprite:{uniforms:rg([hA.sprite,hA.fog]),vertexShader:XA.sprite_vert,fragmentShader:XA.sprite_frag},background:{uniforms:{uvTransform:{value:new PA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:XA.background_vert,fragmentShader:XA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new PA}},vertexShader:XA.backgroundCube_vert,fragmentShader:XA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:XA.cube_vert,fragmentShader:XA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:XA.equirect_vert,fragmentShader:XA.equirect_frag},distanceRGBA:{uniforms:rg([hA.common,hA.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:XA.distanceRGBA_vert,fragmentShader:XA.distanceRGBA_frag},shadow:{uniforms:rg([hA.lights,hA.fog,{color:{value:new gI(0)},opacity:{value:1}}]),vertexShader:XA.shadow_vert,fragmentShader:XA.shadow_frag}};rC.physical={uniforms:rg([rC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new PA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new PA},clearcoatNormalScale:{value:new _A(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new PA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new PA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new PA},sheen:{value:0},sheenColor:{value:new gI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new PA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new PA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new PA},transmissionSamplerSize:{value:new _A},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new PA},attenuationDistance:{value:0},attenuationColor:{value:new gI(0)},specularColor:{value:new gI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new PA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new PA},anisotropyVector:{value:new _A},anisotropyMap:{value:null},anisotropyMapTransform:{value:new PA}}]),vertexShader:XA.meshphysical_vert,fragmentShader:XA.meshphysical_frag};const ME={r:0,b:0,g:0},FB=new oC,f0=new dI;function L0(C,A,I,g,B,Q,i){const E=new gI(0);let t=Q===!0?0:1,o,e,s=null,a=0,n=null;function c(G){let w=G.isScene===!0?G.background:null;return w&&w.isTexture&&(w=(G.backgroundBlurriness>0?I:A).get(w)),w}function l(G){let w=!1;const M=c(G);M===null?D(E,t):M&&M.isColor&&(D(M,1),w=!0);const U=C.xr.getEnvironmentBlendMode();U==="additive"?g.buffers.color.setClear(0,0,0,1,i):U==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,i),(C.autoClear||w)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil))}function h(G,w){const M=c(w);M&&(M.isCubeTexture||M.mapping===ut)?(e===void 0&&(e=new Mg(new cB(1,1,1),new lB({name:"BackgroundCubeMaterial",uniforms:bQ(rC.backgroundCube.uniforms),vertexShader:rC.backgroundCube.vertexShader,fragmentShader:rC.backgroundCube.fragmentShader,side:Ng,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(U,J,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(e)),FB.copy(w.backgroundRotation),FB.x*=-1,FB.y*=-1,FB.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(FB.y*=-1,FB.z*=-1),e.material.uniforms.envMap.value=M,e.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,e.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(FB)),e.material.toneMapped=tI.getTransfer(M.colorSpace)!==hI,(s!==M||a!==M.version||n!==C.toneMapping)&&(e.material.needsUpdate=!0,s=M,a=M.version,n=C.toneMapping),e.layers.enableAll(),G.unshift(e,e.geometry,e.material,0,0,null)):M&&M.isTexture&&(o===void 0&&(o=new Mg(new ft(2,2),new lB({name:"BackgroundMaterial",uniforms:bQ(rC.background.uniforms),vertexShader:rC.background.vertexShader,fragmentShader:rC.background.fragmentShader,side:hB,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(o)),o.material.uniforms.t2D.value=M,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.toneMapped=tI.getTransfer(M.colorSpace)!==hI,M.matrixAutoUpdate===!0&&M.updateMatrix(),o.material.uniforms.uvTransform.value.copy(M.matrix),(s!==M||a!==M.version||n!==C.toneMapping)&&(o.material.needsUpdate=!0,s=M,a=M.version,n=C.toneMapping),o.layers.enableAll(),G.unshift(o,o.geometry,o.material,0,0,null))}function D(G,w){G.getRGB(ME,Er(C)),g.buffers.color.setClear(ME.r,ME.g,ME.b,w,i)}function k(){e!==void 0&&(e.geometry.dispose(),e.material.dispose()),o!==void 0&&(o.geometry.dispose(),o.material.dispose())}return{getClearColor:function(){return E},setClearColor:function(G,w=1){E.set(G),t=w,D(E,t)},getClearAlpha:function(){return t},setClearAlpha:function(G){t=G,D(E,t)},render:l,addToRenderList:h,dispose:k}}function m0(C,A){const I=C.getParameter(C.MAX_VERTEX_ATTRIBS),g={},B=a(null);let Q=B,i=!1;function E(S,p,R,q,H){let Z=!1;const x=s(q,R,p);Q!==x&&(Q=x,o(Q.object)),Z=n(S,q,R,H),Z&&c(S,q,R,H),H!==null&&A.update(H,C.ELEMENT_ARRAY_BUFFER),(Z||i)&&(i=!1,w(S,p,R,q),H!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,A.get(H).buffer))}function t(){return C.createVertexArray()}function o(S){return C.bindVertexArray(S)}function e(S){return C.deleteVertexArray(S)}function s(S,p,R){const q=R.wireframe===!0;let H=g[S.id];H===void 0&&(H={},g[S.id]=H);let Z=H[p.id];Z===void 0&&(Z={},H[p.id]=Z);let x=Z[q];return x===void 0&&(x=a(t()),Z[q]=x),x}function a(S){const p=[],R=[],q=[];for(let H=0;H<I;H++)p[H]=0,R[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:R,attributeDivisors:q,object:S,attributes:{},index:null}}function n(S,p,R,q){const H=Q.attributes,Z=p.attributes;let x=0;const P=R.getAttributes();for(const O in P)if(P[O].location>=0){const gA=H[O];let iA=Z[O];if(iA===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(iA=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(iA=S.instanceColor)),gA===void 0||gA.attribute!==iA||iA&&gA.data!==iA.data)return!0;x++}return Q.attributesNum!==x||Q.index!==q}function c(S,p,R,q){const H={},Z=p.attributes;let x=0;const P=R.getAttributes();for(const O in P)if(P[O].location>=0){let gA=Z[O];gA===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(gA=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(gA=S.instanceColor));const iA={};iA.attribute=gA,gA&&gA.data&&(iA.data=gA.data),H[O]=iA,x++}Q.attributes=H,Q.attributesNum=x,Q.index=q}function l(){const S=Q.newAttributes;for(let p=0,R=S.length;p<R;p++)S[p]=0}function h(S){D(S,0)}function D(S,p){const R=Q.newAttributes,q=Q.enabledAttributes,H=Q.attributeDivisors;R[S]=1,q[S]===0&&(C.enableVertexAttribArray(S),q[S]=1),H[S]!==p&&(C.vertexAttribDivisor(S,p),H[S]=p)}function k(){const S=Q.newAttributes,p=Q.enabledAttributes;for(let R=0,q=p.length;R<q;R++)p[R]!==S[R]&&(C.disableVertexAttribArray(R),p[R]=0)}function G(S,p,R,q,H,Z,x){x===!0?C.vertexAttribIPointer(S,p,R,H,Z):C.vertexAttribPointer(S,p,R,q,H,Z)}function w(S,p,R,q){l();const H=q.attributes,Z=R.getAttributes(),x=p.defaultAttributeValues;for(const P in Z){const O=Z[P];if(O.location>=0){let z=H[P];if(z===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),z!==void 0){const gA=z.normalized,iA=z.itemSize,GA=A.get(z);if(GA===void 0)continue;const ZA=GA.buffer,X=GA.type,$=GA.bytesPerElement,eA=X===C.INT||X===C.UNSIGNED_INT||z.gpuType===qs;if(z.isInterleavedBufferAttribute){const tA=z.data,BA=tA.stride,fA=z.offset;if(tA.isInstancedInterleavedBuffer){for(let TA=0;TA<O.locationSize;TA++)D(O.location+TA,tA.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=tA.meshPerAttribute*tA.count)}else for(let TA=0;TA<O.locationSize;TA++)h(O.location+TA);C.bindBuffer(C.ARRAY_BUFFER,ZA);for(let TA=0;TA<O.locationSize;TA++)G(O.location+TA,iA/O.locationSize,X,gA,BA*$,(fA+iA/O.locationSize*TA)*$,eA)}else{if(z.isInstancedBufferAttribute){for(let tA=0;tA<O.locationSize;tA++)D(O.location+tA,z.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let tA=0;tA<O.locationSize;tA++)h(O.location+tA);C.bindBuffer(C.ARRAY_BUFFER,ZA);for(let tA=0;tA<O.locationSize;tA++)G(O.location+tA,iA/O.locationSize,X,gA,iA*$,iA/O.locationSize*tA*$,eA)}}else if(x!==void 0){const gA=x[P];if(gA!==void 0)switch(gA.length){case 2:C.vertexAttrib2fv(O.location,gA);break;case 3:C.vertexAttrib3fv(O.location,gA);break;case 4:C.vertexAttrib4fv(O.location,gA);break;default:C.vertexAttrib1fv(O.location,gA)}}}}k()}function M(){K();for(const S in g){const p=g[S];for(const R in p){const q=p[R];for(const H in q)e(q[H].object),delete q[H];delete p[R]}delete g[S]}}function U(S){if(g[S.id]===void 0)return;const p=g[S.id];for(const R in p){const q=p[R];for(const H in q)e(q[H].object),delete q[H];delete p[R]}delete g[S.id]}function J(S){for(const p in g){const R=g[p];if(R[S.id]===void 0)continue;const q=R[S.id];for(const H in q)e(q[H].object),delete q[H];delete R[S.id]}}function K(){y(),i=!0,Q!==B&&(Q=B,o(Q.object))}function y(){B.geometry=null,B.program=null,B.wireframe=!1}return{setup:E,reset:K,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:U,releaseStatesOfProgram:J,initAttributes:l,enableAttribute:h,disableUnusedAttributes:k}}function H0(C,A,I){let g;function B(o){g=o}function Q(o,e){C.drawArrays(g,o,e),I.update(e,g,1)}function i(o,e,s){s!==0&&(C.drawArraysInstanced(g,o,e,s),I.update(e,g,s))}function E(o,e,s){if(s===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,o,0,e,0,s);let n=0;for(let c=0;c<s;c++)n+=e[c];I.update(n,g,1)}function t(o,e,s,a){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let c=0;c<o.length;c++)i(o[c],e[c],a[c]);else{n.multiDrawArraysInstancedWEBGL(g,o,0,e,0,a,0,s);let c=0;for(let l=0;l<s;l++)c+=e[l]*a[l];I.update(c,g,1)}}this.setMode=B,this.render=Q,this.renderInstances=i,this.renderMultiDraw=E,this.renderMultiDrawInstances=t}function T0(C,A,I,g){let B;function Q(){if(B!==void 0)return B;if(A.has("EXT_texture_filter_anisotropic")===!0){const J=A.get("EXT_texture_filter_anisotropic");B=C.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else B=0;return B}function i(J){return!(J!==gC&&g.convert(J)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT))}function E(J){const K=J===Zi&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(J!==_C&&g.convert(J)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&J!==LC&&!K)}function t(J){if(J==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";J="mediump"}return J==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=I.precision!==void 0?I.precision:"highp";const e=t(o);e!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",e,"instead."),o=e);const s=I.logarithmicDepthBuffer===!0,a=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),n=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),c=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=C.getParameter(C.MAX_TEXTURE_SIZE),h=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),D=C.getParameter(C.MAX_VERTEX_ATTRIBS),k=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),G=C.getParameter(C.MAX_VARYING_VECTORS),w=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),M=c>0,U=C.getParameter(C.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:t,textureFormatReadable:i,textureTypeReadable:E,precision:o,logarithmicDepthBuffer:s,reverseDepthBuffer:a,maxTextures:n,maxVertexTextures:c,maxTextureSize:l,maxCubemapSize:h,maxAttributes:D,maxVertexUniforms:k,maxVaryings:G,maxFragmentUniforms:w,vertexTextures:M,maxSamples:U}}function x0(C){const A=this;let I=null,g=0,B=!1,Q=!1;const i=new BB,E=new PA,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(s,a){const n=s.length!==0||a||g!==0||B;return B=a,g=s.length,n},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(s,a){I=e(s,a,0)},this.setState=function(s,a,n){const c=s.clippingPlanes,l=s.clipIntersection,h=s.clipShadows,D=C.get(s);if(!B||c===null||c.length===0||Q&&!h)Q?e(null):o();else{const k=Q?0:g,G=k*4;let w=D.clippingState||null;t.value=w,w=e(c,a,G,n);for(let M=0;M!==G;++M)w[M]=I[M];D.clippingState=w,this.numIntersection=l?this.numPlanes:0,this.numPlanes+=k}};function o(){t.value!==I&&(t.value=I,t.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(s,a,n,c){const l=s!==null?s.length:0;let h=null;if(l!==0){if(h=t.value,c!==!0||h===null){const D=n+l*4,k=a.matrixWorldInverse;E.getNormalMatrix(k),(h===null||h.length<D)&&(h=new Float32Array(D));for(let G=0,w=n;G!==l;++G,w+=4)i.copy(s[G]).applyMatrix4(k,E),i.normal.toArray(h,w),h[w+3]=i.constant}t.value=h,t.needsUpdate=!0}return A.numPlanes=l,A.numIntersection=0,h}}function b0(C){let A=new WeakMap;function I(i,E){return E===$o?i.mapping=LQ:E===Ae&&(i.mapping=mQ),i}function g(i){if(i&&i.isTexture){const E=i.mapping;if(E===$o||E===Ae)if(A.has(i)){const t=A.get(i).texture;return I(t,i.mapping)}else{const t=i.image;if(t&&t.height>0){const o=new LM(t.height);return o.fromEquirectangularTexture(C,i),A.set(i,o),i.addEventListener("dispose",B),I(o.texture,i.mapping)}else return null}}return i}function B(i){const E=i.target;E.removeEventListener("dispose",B);const t=A.get(E);t!==void 0&&(A.delete(E),t.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}const yQ=4,un=[.125,.215,.35,.446,.526,.582],qB=20,wo=new nr,qn=new gI;let Go=null,ko=0,yo=0,Mo=!1;const RB=(1+Math.sqrt(5))/2,nQ=1/RB,Yn=[new _(-RB,nQ,0),new _(RB,nQ,0),new _(-nQ,0,RB),new _(nQ,0,RB),new _(0,RB,-nQ),new _(0,RB,nQ),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)];class fn{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){Go=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,B,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Go,ko,yo),this._renderer.xr.enabled=Mo,A.scissorTest=!1,UE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===LQ||A.mapping===mQ?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Go=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:lC,minFilter:lC,generateMipmaps:!1,type:Zi,format:gC,colorSpace:xQ,depthBuffer:!1},B=Ln(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ln(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(Q)),this._blurMaterial=O0(Q,A,I)}return B}_compileMaterial(A){const I=new Mg(this._lodPlanes[0],A);this._renderer.compile(I,wo)}_sceneToCubeUV(A,I,g,B){const E=new xg(90,1,I,g),t=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],e=this._renderer,s=e.autoClear,a=e.toneMapping;e.getClearColor(qn),e.toneMapping=eB,e.autoClear=!1;const n=new bs({name:"PMREM.Background",side:Ng,depthWrite:!1,depthTest:!1}),c=new Mg(new cB,n);let l=!1;const h=A.background;h?h.isColor&&(n.color.copy(h),A.background=null,l=!0):(n.color.copy(qn),l=!0);for(let D=0;D<6;D++){const k=D%3;k===0?(E.up.set(0,t[D],0),E.lookAt(o[D],0,0)):k===1?(E.up.set(0,0,t[D]),E.lookAt(0,o[D],0)):(E.up.set(0,t[D],0),E.lookAt(0,0,o[D]));const G=this._cubeSize;UE(B,k*G,D>2?G:0,G,G),e.setRenderTarget(B),l&&e.render(c,E),e.render(A,E)}c.geometry.dispose(),c.material.dispose(),e.toneMapping=a,e.autoClear=s,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===LQ||A.mapping===mQ;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hn()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mn());const Q=B?this._cubemapMaterial:this._equirectMaterial,i=new Mg(this._lodPlanes[0],Q),E=Q.uniforms;E.envMap.value=A;const t=this._cubeSize;UE(I,0,0,3*t,2*t),g.setRenderTarget(I),g.render(i,wo)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const B=this._lodPlanes.length;for(let Q=1;Q<B;Q++){const i=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),E=Yn[(B-Q-1)%Yn.length];this._blur(A,Q-1,Q,i,E)}I.autoClear=g}_blur(A,I,g,B,Q){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,B,"latitudinal",Q),this._halfBlur(i,A,g,g,B,"longitudinal",Q)}_halfBlur(A,I,g,B,Q,i,E){const t=this._renderer,o=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,s=new Mg(this._lodPlanes[B],o),a=o.uniforms,n=this._sizeLods[g]-1,c=isFinite(Q)?Math.PI/(2*n):2*Math.PI/(2*qB-1),l=Q/c,h=isFinite(Q)?1+Math.floor(e*l):qB;h>qB&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${qB}`);const D=[];let k=0;for(let J=0;J<qB;++J){const K=J/l,y=Math.exp(-K*K/2);D.push(y),J===0?k+=y:J<h&&(k+=2*y)}for(let J=0;J<D.length;J++)D[J]=D[J]/k;a.envMap.value=A.texture,a.samples.value=h,a.weights.value=D,a.latitudinal.value=i==="latitudinal",E&&(a.poleAxis.value=E);const{_lodMax:G}=this;a.dTheta.value=c,a.mipInt.value=G-g;const w=this._sizeLods[B],M=3*w*(B>G-yQ?B-G+yQ:0),U=4*(this._cubeSize-w);UE(I,M,U,3*w,2*w),t.setRenderTarget(I),t.render(s,wo)}}function _0(C){const A=[],I=[],g=[];let B=C;const Q=C-yQ+1+un.length;for(let i=0;i<Q;i++){const E=Math.pow(2,B);I.push(E);let t=1/E;i>C-yQ?t=un[i-C+yQ-1]:i===0&&(t=0),g.push(t);const o=1/(E-2),e=-o,s=1+o,a=[e,e,s,e,s,s,e,e,s,s,e,s],n=6,c=6,l=3,h=2,D=1,k=new Float32Array(l*c*n),G=new Float32Array(h*c*n),w=new Float32Array(D*c*n);for(let U=0;U<n;U++){const J=U%3*2/3-1,K=U>2?0:-1,y=[J,K,0,J+2/3,K,0,J+2/3,K+1,0,J,K,0,J+2/3,K+1,0,J,K+1,0];k.set(y,l*c*U),G.set(a,h*c*U);const S=[U,U,U,U,U,U];w.set(S,D*c*U)}const M=new DC;M.setAttribute("position",new wC(k,l)),M.setAttribute("uv",new wC(G,h)),M.setAttribute("faceIndex",new wC(w,D)),A.push(M),B>yQ&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Ln(C,A,I){const g=new OB(C,A,I);return g.texture.mapping=ut,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function UE(C,A,I,g,B){C.viewport.set(A,I,g,B),C.scissor.set(A,I,g,B)}function O0(C,A,I){const g=new Float32Array(qB),B=new _(0,1,0);return new lB({name:"SphericalGaussianBlur",defines:{n:qB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oB,depthTest:!1,depthWrite:!1})}function mn(){return new lB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:oB,depthTest:!1,depthWrite:!1})}function Hn(){return new lB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oB,depthTest:!1,depthWrite:!1})}function Ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(C){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const t=E.mapping,o=t===$o||t===Ae,e=t===LQ||t===mQ;if(o||e){let s=A.get(E);const a=s!==void 0?s.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==a)return I===null&&(I=new fn(C)),s=o?I.fromEquirectangular(E,s):I.fromCubemap(E,s),s.texture.pmremVersion=E.pmremVersion,A.set(E,s),s.texture;if(s!==void 0)return s.texture;{const n=E.image;return o&&n&&n.height>0||e&&n&&B(n)?(I===null&&(I=new fn(C)),s=o?I.fromEquirectangular(E):I.fromCubemap(E),s.texture.pmremVersion=E.pmremVersion,A.set(E,s),E.addEventListener("dispose",Q),s.texture):null}}}return E}function B(E){let t=0;const o=6;for(let e=0;e<o;e++)E[e]!==void 0&&t++;return t===o}function Q(E){const t=E.target;t.removeEventListener("dispose",Q);const o=A.get(t);o!==void 0&&(A.delete(t),o.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function Z0(C){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=C.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const B=I(g);return B===null&&cQ("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function W0(C,A,I,g){const B={},Q=new WeakMap;function i(s){const a=s.target;a.index!==null&&A.remove(a.index);for(const c in a.attributes)A.remove(a.attributes[c]);a.removeEventListener("dispose",i),delete B[a.id];const n=Q.get(a);n&&(A.remove(n),Q.delete(a)),g.releaseStatesOfGeometry(a),a.isInstancedBufferGeometry===!0&&delete a._maxInstanceCount,I.memory.geometries--}function E(s,a){return B[a.id]===!0||(a.addEventListener("dispose",i),B[a.id]=!0,I.memory.geometries++),a}function t(s){const a=s.attributes;for(const n in a)A.update(a[n],C.ARRAY_BUFFER)}function o(s){const a=[],n=s.index,c=s.attributes.position;let l=0;if(n!==null){const k=n.array;l=n.version;for(let G=0,w=k.length;G<w;G+=3){const M=k[G+0],U=k[G+1],J=k[G+2];a.push(M,U,U,J,J,M)}}else if(c!==void 0){const k=c.array;l=c.version;for(let G=0,w=k.length/3-1;G<w;G+=3){const M=G+0,U=G+1,J=G+2;a.push(M,U,U,J,J,M)}}else return;const h=new(Ir(a)?ir:Qr)(a,1);h.version=l;const D=Q.get(s);D&&A.remove(D),Q.set(s,h)}function e(s){const a=Q.get(s);if(a){const n=s.index;n!==null&&a.version<n.version&&o(s)}else o(s);return Q.get(s)}return{get:E,update:t,getWireframeAttribute:e}}function P0(C,A,I){let g;function B(a){g=a}let Q,i;function E(a){Q=a.type,i=a.bytesPerElement}function t(a,n){C.drawElements(g,n,Q,a*i),I.update(n,g,1)}function o(a,n,c){c!==0&&(C.drawElementsInstanced(g,n,Q,a*i,c),I.update(n,g,c))}function e(a,n,c){if(c===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,n,0,Q,a,0,c);let h=0;for(let D=0;D<c;D++)h+=n[D];I.update(h,g,1)}function s(a,n,c,l){if(c===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let D=0;D<a.length;D++)o(a[D]/i,n[D],l[D]);else{h.multiDrawElementsInstancedWEBGL(g,n,0,Q,a,0,l,0,c);let D=0;for(let k=0;k<c;k++)D+=n[k]*l[k];I.update(D,g,1)}}this.setMode=B,this.setIndex=E,this.render=t,this.renderInstances=o,this.renderMultiDraw=e,this.renderMultiDrawInstances=s}function V0(C){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,i,E){switch(I.calls++,i){case C.TRIANGLES:I.triangles+=E*(Q/3);break;case C.LINES:I.lines+=E*(Q/2);break;case C.LINE_STRIP:I.lines+=E*(Q-1);break;case C.LINE_LOOP:I.lines+=E*Q;break;case C.POINTS:I.points+=E*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function B(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function j0(C,A,I){const g=new WeakMap,B=new LI;function Q(i,E,t){const o=i.morphTargetInfluences,e=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,s=e!==void 0?e.length:0;let a=g.get(E);if(a===void 0||a.count!==s){let y=function(){J.dispose(),g.delete(E),E.removeEventListener("dispose",y)};a!==void 0&&a.texture.dispose();const n=E.morphAttributes.position!==void 0,c=E.morphAttributes.normal!==void 0,l=E.morphAttributes.color!==void 0,h=E.morphAttributes.position||[],D=E.morphAttributes.normal||[],k=E.morphAttributes.color||[];let G=0;n===!0&&(G=1),c===!0&&(G=2),l===!0&&(G=3);let w=E.attributes.position.count*G,M=1;w>A.maxTextureSize&&(M=Math.ceil(w/A.maxTextureSize),w=A.maxTextureSize);const U=new Float32Array(w*M*4*s),J=new Cr(U,w,M,s);J.type=LC,J.needsUpdate=!0;const K=G*4;for(let S=0;S<s;S++){const p=h[S],R=D[S],q=k[S],H=w*M*4*S;for(let Z=0;Z<p.count;Z++){const x=Z*K;n===!0&&(B.fromBufferAttribute(p,Z),U[H+x+0]=B.x,U[H+x+1]=B.y,U[H+x+2]=B.z,U[H+x+3]=0),c===!0&&(B.fromBufferAttribute(R,Z),U[H+x+4]=B.x,U[H+x+5]=B.y,U[H+x+6]=B.z,U[H+x+7]=0),l===!0&&(B.fromBufferAttribute(q,Z),U[H+x+8]=B.x,U[H+x+9]=B.y,U[H+x+10]=B.z,U[H+x+11]=q.itemSize===4?B.w:1)}}a={count:s,texture:J,size:new _A(w,M)},g.set(E,a),E.addEventListener("dispose",y)}if(i.isInstancedMesh===!0&&i.morphTexture!==null)t.getUniforms().setValue(C,"morphTexture",i.morphTexture,I);else{let n=0;for(let l=0;l<o.length;l++)n+=o[l];const c=E.morphTargetsRelative?1:1-n;t.getUniforms().setValue(C,"morphTargetBaseInfluence",c),t.getUniforms().setValue(C,"morphTargetInfluences",o)}t.getUniforms().setValue(C,"morphTargetsTexture",a.texture,I),t.getUniforms().setValue(C,"morphTargetsTextureSize",a.size)}return{update:Q}}function X0(C,A,I,g){let B=new WeakMap;function Q(t){const o=g.render.frame,e=t.geometry,s=A.get(t,e);if(B.get(s)!==o&&(A.update(s),B.set(s,o)),t.isInstancedMesh&&(t.hasEventListener("dispose",E)===!1&&t.addEventListener("dispose",E),B.get(t)!==o&&(I.update(t.instanceMatrix,C.ARRAY_BUFFER),t.instanceColor!==null&&I.update(t.instanceColor,C.ARRAY_BUFFER),B.set(t,o))),t.isSkinnedMesh){const a=t.skeleton;B.get(a)!==o&&(a.update(),B.set(a,o))}return s}function i(){B=new WeakMap}function E(t){const o=t.target;o.removeEventListener("dispose",E),I.remove(o.instanceMatrix),o.instanceColor!==null&&I.remove(o.instanceColor)}return{update:Q,dispose:i}}const hr=new Kg,Tn=new sr(1,1),rr=new Cr,cr=new GM,lr=new or,xn=[],bn=[],_n=new Float32Array(16),On=new Float32Array(9),vn=new Float32Array(4);function $Q(C,A,I){const g=C[0];if(g<=0||g>0)return C;const B=A*I;let Q=xn[B];if(Q===void 0&&(Q=new Float32Array(B),xn[B]=Q),A!==0){g.toArray(Q,0);for(let i=1,E=0;i!==A;++i)E+=I,C[i].toArray(Q,E)}return Q}function XI(C,A){if(C.length!==A.length)return!1;for(let I=0,g=C.length;I<g;I++)if(C[I]!==A[I])return!1;return!0}function zI(C,A){for(let I=0,g=A.length;I<g;I++)C[I]=A[I]}function Lt(C,A){let I=bn[A];I===void 0&&(I=new Int32Array(A),bn[A]=I);for(let g=0;g!==A;++g)I[g]=C.allocateTextureUnit();return I}function z0(C,A){const I=this.cache;I[0]!==A&&(C.uniform1f(this.addr,A),I[0]=A)}function $0(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(XI(I,A))return;C.uniform2fv(this.addr,A),zI(I,A)}}function AK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(XI(I,A))return;C.uniform3fv(this.addr,A),zI(I,A)}}function IK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(XI(I,A))return;C.uniform4fv(this.addr,A),zI(I,A)}}function gK(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(XI(I,A))return;C.uniformMatrix2fv(this.addr,!1,A),zI(I,A)}else{if(XI(I,g))return;vn.set(g),C.uniformMatrix2fv(this.addr,!1,vn),zI(I,g)}}function CK(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(XI(I,A))return;C.uniformMatrix3fv(this.addr,!1,A),zI(I,A)}else{if(XI(I,g))return;On.set(g),C.uniformMatrix3fv(this.addr,!1,On),zI(I,g)}}function BK(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(XI(I,A))return;C.uniformMatrix4fv(this.addr,!1,A),zI(I,A)}else{if(XI(I,g))return;_n.set(g),C.uniformMatrix4fv(this.addr,!1,_n),zI(I,g)}}function QK(C,A){const I=this.cache;I[0]!==A&&(C.uniform1i(this.addr,A),I[0]=A)}function iK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(XI(I,A))return;C.uniform2iv(this.addr,A),zI(I,A)}}function EK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(XI(I,A))return;C.uniform3iv(this.addr,A),zI(I,A)}}function tK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(XI(I,A))return;C.uniform4iv(this.addr,A),zI(I,A)}}function oK(C,A){const I=this.cache;I[0]!==A&&(C.uniform1ui(this.addr,A),I[0]=A)}function eK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(XI(I,A))return;C.uniform2uiv(this.addr,A),zI(I,A)}}function sK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(XI(I,A))return;C.uniform3uiv(this.addr,A),zI(I,A)}}function aK(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(XI(I,A))return;C.uniform4uiv(this.addr,A),zI(I,A)}}function nK(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B);let Q;this.type===C.SAMPLER_2D_SHADOW?(Tn.compareFunction=Ar,Q=Tn):Q=hr,I.setTexture2D(A||Q,B)}function DK(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||cr,B)}function hK(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||lr,B)}function rK(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||rr,B)}function cK(C){switch(C){case 5126:return z0;case 35664:return $0;case 35665:return AK;case 35666:return IK;case 35674:return gK;case 35675:return CK;case 35676:return BK;case 5124:case 35670:return QK;case 35667:case 35671:return iK;case 35668:case 35672:return EK;case 35669:case 35673:return tK;case 5125:return oK;case 36294:return eK;case 36295:return sK;case 36296:return aK;case 35678:case 36198:case 36298:case 36306:case 35682:return nK;case 35679:case 36299:case 36307:return DK;case 35680:case 36300:case 36308:case 36293:return hK;case 36289:case 36303:case 36311:case 36292:return rK}}function lK(C,A){C.uniform1fv(this.addr,A)}function SK(C,A){const I=$Q(A,this.size,2);C.uniform2fv(this.addr,I)}function wK(C,A){const I=$Q(A,this.size,3);C.uniform3fv(this.addr,I)}function GK(C,A){const I=$Q(A,this.size,4);C.uniform4fv(this.addr,I)}function kK(C,A){const I=$Q(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,I)}function yK(C,A){const I=$Q(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,I)}function MK(C,A){const I=$Q(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,I)}function UK(C,A){C.uniform1iv(this.addr,A)}function NK(C,A){C.uniform2iv(this.addr,A)}function KK(C,A){C.uniform3iv(this.addr,A)}function JK(C,A){C.uniform4iv(this.addr,A)}function FK(C,A){C.uniform1uiv(this.addr,A)}function pK(C,A){C.uniform2uiv(this.addr,A)}function dK(C,A){C.uniform3uiv(this.addr,A)}function RK(C,A){C.uniform4uiv(this.addr,A)}function uK(C,A,I){const g=this.cache,B=A.length,Q=Lt(I,B);XI(g,Q)||(C.uniform1iv(this.addr,Q),zI(g,Q));for(let i=0;i!==B;++i)I.setTexture2D(A[i]||hr,Q[i])}function qK(C,A,I){const g=this.cache,B=A.length,Q=Lt(I,B);XI(g,Q)||(C.uniform1iv(this.addr,Q),zI(g,Q));for(let i=0;i!==B;++i)I.setTexture3D(A[i]||cr,Q[i])}function YK(C,A,I){const g=this.cache,B=A.length,Q=Lt(I,B);XI(g,Q)||(C.uniform1iv(this.addr,Q),zI(g,Q));for(let i=0;i!==B;++i)I.setTextureCube(A[i]||lr,Q[i])}function fK(C,A,I){const g=this.cache,B=A.length,Q=Lt(I,B);XI(g,Q)||(C.uniform1iv(this.addr,Q),zI(g,Q));for(let i=0;i!==B;++i)I.setTexture2DArray(A[i]||rr,Q[i])}function LK(C){switch(C){case 5126:return lK;case 35664:return SK;case 35665:return wK;case 35666:return GK;case 35674:return kK;case 35675:return yK;case 35676:return MK;case 5124:case 35670:return UK;case 35667:case 35671:return NK;case 35668:case 35672:return KK;case 35669:case 35673:return JK;case 5125:return FK;case 36294:return pK;case 36295:return dK;case 36296:return RK;case 35678:case 36198:case 36298:case 36306:case 35682:return uK;case 35679:case 36299:case 36307:return qK;case 35680:case 36300:case 36308:case 36293:return YK;case 36289:case 36303:case 36311:case 36292:return fK}}class mK{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=cK(I.type)}}class HK{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=LK(I.type)}}class TK{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const B=this.seq;for(let Q=0,i=B.length;Q!==i;++Q){const E=B[Q];E.setValue(A,I[E.id],g)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Zn(C,A){C.seq.push(A),C.map[A.id]=A}function xK(C,A,I){const g=C.name,B=g.length;for(Uo.lastIndex=0;;){const Q=Uo.exec(g),i=Uo.lastIndex;let E=Q[1];const t=Q[2]==="]",o=Q[3];if(t&&(E=E|0),o===void 0||o==="["&&i+2===B){Zn(I,o===void 0?new mK(E,C,A):new HK(E,C,A));break}else{let s=I.map[E];s===void 0&&(s=new TK(E),Zn(I,s)),I=s}}}class fE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let B=0;B<g;++B){const Q=A.getActiveUniform(I,B),i=A.getUniformLocation(I,Q.name);xK(Q,i,this)}}setValue(A,I,g,B){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,B)}setOptional(A,I,g){const B=I[g];B!==void 0&&this.setValue(A,g,B)}static upload(A,I,g,B){for(let Q=0,i=I.length;Q!==i;++Q){const E=I[Q],t=g[E.id];t.needsUpdate!==!1&&E.setValue(A,t.value,B)}}static seqWithValue(A,I){const g=[];for(let B=0,Q=A.length;B!==Q;++B){const i=A[B];i.id in I&&g.push(i)}return g}}function Wn(C,A,I){const g=C.createShader(A);return C.shaderSource(g,I),C.compileShader(g),g}const bK=37297;let _K=0;function OK(C,A){const I=C.split(`
`),g=[],B=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let i=B;i<Q;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}const Pn=new PA;function vK(C){tI._getMatrix(Pn,tI.workingColorSpace,C);const A=`mat3( ${Pn.elements.map(I=>I.toFixed(4))} )`;switch(tI.getTransfer(C)){case $E:return[A,"LinearTransferOETF"];case hI:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",C),[A,"LinearTransferOETF"]}}function Vn(C,A,I){const g=C.getShaderParameter(A,C.COMPILE_STATUS),B=C.getShaderInfoLog(A).trim();if(g&&B==="")return"";const Q=/ERROR: 0:(\d+)/.exec(B);if(Q){const i=parseInt(Q[1]);return I.toUpperCase()+`

`+B+`

`+OK(C.getShaderSource(A),i)}else return B}function ZK(C,A){const I=vK(A);return[`vec4 ${C}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function WK(C,A){let I;switch(A){case dy:I="Linear";break;case Ry:I="Reinhard";break;case uy:I="Cineon";break;case qy:I="ACESFilmic";break;case fy:I="AgX";break;case Ly:I="Neutral";break;case Yy:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+C+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const NE=new _;function PK(){tI.getLuminanceCoefficients(NE);const C=NE.x.toFixed(4),A=NE.y.toFixed(4),I=NE.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${C}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VK(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ti).join(`
`)}function jK(C){const A=[];for(const I in C){const g=C[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function XK(C,A){const I={},g=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let B=0;B<g;B++){const Q=C.getActiveAttrib(A,B),i=Q.name;let E=1;Q.type===C.FLOAT_MAT2&&(E=2),Q.type===C.FLOAT_MAT3&&(E=3),Q.type===C.FLOAT_MAT4&&(E=4),I[i]={type:Q.type,location:C.getAttribLocation(A,i),locationSize:E}}return I}function ti(C){return C!==""}function jn(C,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Xn(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const zK=/^[ \t]*#include +<([\w\d./]+)>/gm;function pe(C){return C.replace(zK,AJ)}const $K=new Map;function AJ(C,A){let I=XA[A];if(I===void 0){const g=$K.get(A);if(g!==void 0)I=XA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return pe(I)}const IJ=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zn(C){return C.replace(IJ,gJ)}function gJ(C,A,I,g){let B="";for(let Q=parseInt(A);Q<parseInt(I);Q++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function $n(C){let A=`precision ${C.precision} float;
	precision ${C.precision} int;
	precision ${C.precision} sampler2D;
	precision ${C.precision} samplerCube;
	precision ${C.precision} sampler3D;
	precision ${C.precision} sampler2DArray;
	precision ${C.precision} sampler2DShadow;
	precision ${C.precision} samplerCubeShadow;
	precision ${C.precision} sampler2DArrayShadow;
	precision ${C.precision} isampler2D;
	precision ${C.precision} isampler3D;
	precision ${C.precision} isamplerCube;
	precision ${C.precision} isampler2DArray;
	precision ${C.precision} usampler2D;
	precision ${C.precision} usampler3D;
	precision ${C.precision} usamplerCube;
	precision ${C.precision} usampler2DArray;
	`;return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function CJ(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===xh?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===ey?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===RC&&(A="SHADOWMAP_TYPE_VSM"),A}function BJ(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case LQ:case mQ:A="ENVMAP_TYPE_CUBE";break;case ut:A="ENVMAP_TYPE_CUBE_UV";break}return A}function QJ(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case mQ:A="ENVMAP_MODE_REFRACTION";break}return A}function iJ(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case us:A="ENVMAP_BLENDING_MULTIPLY";break;case Fy:A="ENVMAP_BLENDING_MIX";break;case py:A="ENVMAP_BLENDING_ADD";break}return A}function EJ(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function tJ(C,A,I,g){const B=C.getContext(),Q=I.defines;let i=I.vertexShader,E=I.fragmentShader;const t=CJ(I),o=BJ(I),e=QJ(I),s=iJ(I),a=EJ(I),n=VK(I),c=jK(Q),l=B.createProgram();let h,D,k=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(ti).join(`
`),h.length>0&&(h+=`
`),D=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c].filter(ti).join(`
`),D.length>0&&(D+=`
`)):(h=[$n(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ti).join(`
`),D=[$n(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,c,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+o:"",I.envMap?"#define "+e:"",I.envMap?"#define "+s:"",a?"#define CUBEUV_TEXEL_WIDTH "+a.texelWidth:"",a?"#define CUBEUV_TEXEL_HEIGHT "+a.texelHeight:"",a?"#define CUBEUV_MAX_MIP "+a.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==eB?"#define TONE_MAPPING":"",I.toneMapping!==eB?XA.tonemapping_pars_fragment:"",I.toneMapping!==eB?WK("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",XA.colorspace_pars_fragment,ZK("linearToOutputTexel",I.outputColorSpace),PK(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(ti).join(`
`)),i=pe(i),i=jn(i,I),i=Xn(i,I),E=pe(E),E=jn(E,I),E=Xn(E,I),i=zn(i),E=zn(E),I.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,h=[n,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,D=["#define varying in",I.glslVersion===gn?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===gn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const G=k+h+i,w=k+D+E,M=Wn(B,B.VERTEX_SHADER,G),U=Wn(B,B.FRAGMENT_SHADER,w);B.attachShader(l,M),B.attachShader(l,U),I.index0AttributeName!==void 0?B.bindAttribLocation(l,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(l,0,"position"),B.linkProgram(l);function J(p){if(C.debug.checkShaderErrors){const R=B.getProgramInfoLog(l).trim(),q=B.getShaderInfoLog(M).trim(),H=B.getShaderInfoLog(U).trim();let Z=!0,x=!0;if(B.getProgramParameter(l,B.LINK_STATUS)===!1)if(Z=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(B,l,M,U);else{const P=Vn(B,M,"vertex"),O=Vn(B,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(l,B.VALIDATE_STATUS)+`

Material Name: `+p.name+`
Material Type: `+p.type+`

Program Info Log: `+R+`
`+P+`
`+O)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(q===""||H==="")&&(x=!1);x&&(p.diagnostics={runnable:Z,programLog:R,vertexShader:{log:q,prefix:h},fragmentShader:{log:H,prefix:D}})}B.deleteShader(M),B.deleteShader(U),K=new fE(B,l),y=XK(B,l)}let K;this.getUniforms=function(){return K===void 0&&J(this),K};let y;this.getAttributes=function(){return y===void 0&&J(this),y};let S=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=B.getProgramParameter(l,bK)),S},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(l),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=_K++,this.cacheKey=A,this.usedTimes=1,this.program=l,this.vertexShader=M,this.fragmentShader=U,this}let oJ=0;class eJ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),Q=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(B)===!1&&(i.add(B),B.usedTimes++),i.has(Q)===!1&&(i.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new sJ(A),I.set(A,g)),g}}class sJ{constructor(A){this.id=oJ++,this.code=A,this.usedTimes=0}}function aJ(C,A,I,g,B,Q,i){const E=new xs,t=new eJ,o=new Set,e=[],s=B.logarithmicDepthBuffer,a=B.vertexTextures;let n=B.precision;const c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(y){return o.add(y),y===0?"uv":`uv${y}`}function h(y,S,p,R,q){const H=R.fog,Z=q.geometry,x=y.isMeshStandardMaterial?R.environment:null,P=(y.isMeshStandardMaterial?I:A).get(y.envMap||x),O=P&&P.mapping===ut?P.image.height:null,z=c[y.type];y.precision!==null&&(n=B.getMaxPrecision(y.precision),n!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",n,"instead."));const gA=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,iA=gA!==void 0?gA.length:0;let GA=0;Z.morphAttributes.position!==void 0&&(GA=1),Z.morphAttributes.normal!==void 0&&(GA=2),Z.morphAttributes.color!==void 0&&(GA=3);let ZA,X,$,eA;if(z){const nI=rC[z];ZA=nI.vertexShader,X=nI.fragmentShader}else ZA=y.vertexShader,X=y.fragmentShader,t.update(y),$=t.getVertexShaderID(y),eA=t.getFragmentShaderID(y);const tA=C.getRenderTarget(),BA=C.state.buffers.depth.getReversed(),fA=q.isInstancedMesh===!0,TA=q.isBatchedMesh===!0,oI=!!y.map,VA=!!y.matcap,RI=!!P,Y=!!y.aoMap,aA=!!y.lightMap,sA=!!y.bumpMap,dA=!!y.normalMap,nA=!!y.displacementMap,FA=!!y.emissiveMap,DA=!!y.metalnessMap,d=!!y.roughnessMap,N=y.anisotropy>0,v=y.clearcoat>0,IA=y.dispersion>0,QA=y.iridescence>0,AA=y.sheen>0,pA=y.transmission>0,lA=N&&!!y.anisotropyMap,yA=v&&!!y.clearcoatMap,QI=v&&!!y.clearcoatNormalMap,oA=v&&!!y.clearcoatRoughnessMap,MA=QA&&!!y.iridescenceMap,HA=QA&&!!y.iridescenceThicknessMap,xA=AA&&!!y.sheenColorMap,UA=AA&&!!y.sheenRoughnessMap,CI=!!y.specularMap,jA=!!y.specularColorMap,GI=!!y.specularIntensityMap,m=pA&&!!y.transmissionMap,rA=pA&&!!y.thicknessMap,j=!!y.gradientMap,CA=!!y.alphaMap,wA=y.alphaTest>0,SA=!!y.alphaHash,WA=!!y.extensions;let qI=eB;y.toneMapped&&(tA===null||tA.isXRRenderTarget===!0)&&(qI=C.toneMapping);const tg={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:ZA,fragmentShader:X,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:eA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:n,batching:TA,batchingColor:TA&&q._colorsTexture!==null,instancing:fA,instancingColor:fA&&q.instanceColor!==null,instancingMorph:fA&&q.morphTexture!==null,supportsVertexTextures:a,outputColorSpace:tA===null?C.outputColorSpace:tA.isXRRenderTarget===!0?tA.texture.colorSpace:xQ,alphaToCoverage:!!y.alphaToCoverage,map:oI,matcap:VA,envMap:RI,envMapMode:RI&&P.mapping,envMapCubeUVHeight:O,aoMap:Y,lightMap:aA,bumpMap:sA,normalMap:dA,displacementMap:a&&nA,emissiveMap:FA,normalMapObjectSpace:dA&&y.normalMapType===xy,normalMapTangentSpace:dA&&y.normalMapType===$h,metalnessMap:DA,roughnessMap:d,anisotropy:N,anisotropyMap:lA,clearcoat:v,clearcoatMap:yA,clearcoatNormalMap:QI,clearcoatRoughnessMap:oA,dispersion:IA,iridescence:QA,iridescenceMap:MA,iridescenceThicknessMap:HA,sheen:AA,sheenColorMap:xA,sheenRoughnessMap:UA,specularMap:CI,specularColorMap:jA,specularIntensityMap:GI,transmission:pA,transmissionMap:m,thicknessMap:rA,gradientMap:j,opaque:y.transparent===!1&&y.blending===KQ&&y.alphaToCoverage===!1,alphaMap:CA,alphaTest:wA,alphaHash:SA,combine:y.combine,mapUv:oI&&l(y.map.channel),aoMapUv:Y&&l(y.aoMap.channel),lightMapUv:aA&&l(y.lightMap.channel),bumpMapUv:sA&&l(y.bumpMap.channel),normalMapUv:dA&&l(y.normalMap.channel),displacementMapUv:nA&&l(y.displacementMap.channel),emissiveMapUv:FA&&l(y.emissiveMap.channel),metalnessMapUv:DA&&l(y.metalnessMap.channel),roughnessMapUv:d&&l(y.roughnessMap.channel),anisotropyMapUv:lA&&l(y.anisotropyMap.channel),clearcoatMapUv:yA&&l(y.clearcoatMap.channel),clearcoatNormalMapUv:QI&&l(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oA&&l(y.clearcoatRoughnessMap.channel),iridescenceMapUv:MA&&l(y.iridescenceMap.channel),iridescenceThicknessMapUv:HA&&l(y.iridescenceThicknessMap.channel),sheenColorMapUv:xA&&l(y.sheenColorMap.channel),sheenRoughnessMapUv:UA&&l(y.sheenRoughnessMap.channel),specularMapUv:CI&&l(y.specularMap.channel),specularColorMapUv:jA&&l(y.specularColorMap.channel),specularIntensityMapUv:GI&&l(y.specularIntensityMap.channel),transmissionMapUv:m&&l(y.transmissionMap.channel),thicknessMapUv:rA&&l(y.thicknessMap.channel),alphaMapUv:CA&&l(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(dA||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Z.attributes.uv&&(oI||CA),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:s,reverseDepthBuffer:BA,skinning:q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:iA,morphTextureStride:GA,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:y.dithering,shadowMapEnabled:C.shadowMap.enabled&&p.length>0,shadowMapType:C.shadowMap.type,toneMapping:qI,decodeVideoTexture:oI&&y.map.isVideoTexture===!0&&tI.getTransfer(y.map.colorSpace)===hI,decodeVideoTextureEmissive:FA&&y.emissiveMap.isVideoTexture===!0&&tI.getTransfer(y.emissiveMap.colorSpace)===hI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fC,flipSided:y.side===Ng,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:WA&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(WA&&y.extensions.multiDraw===!0||TA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tg.vertexUv1s=o.has(1),tg.vertexUv2s=o.has(2),tg.vertexUv3s=o.has(3),o.clear(),tg}function D(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const p in y.defines)S.push(p),S.push(y.defines[p]);return y.isRawShaderMaterial===!1&&(k(S,y),G(S,y),S.push(C.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function k(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function G(y,S){E.disableAll(),S.supportsVertexTextures&&E.enable(0),S.instancing&&E.enable(1),S.instancingColor&&E.enable(2),S.instancingMorph&&E.enable(3),S.matcap&&E.enable(4),S.envMap&&E.enable(5),S.normalMapObjectSpace&&E.enable(6),S.normalMapTangentSpace&&E.enable(7),S.clearcoat&&E.enable(8),S.iridescence&&E.enable(9),S.alphaTest&&E.enable(10),S.vertexColors&&E.enable(11),S.vertexAlphas&&E.enable(12),S.vertexUv1s&&E.enable(13),S.vertexUv2s&&E.enable(14),S.vertexUv3s&&E.enable(15),S.vertexTangents&&E.enable(16),S.anisotropy&&E.enable(17),S.alphaHash&&E.enable(18),S.batching&&E.enable(19),S.dispersion&&E.enable(20),S.batchingColor&&E.enable(21),y.push(E.mask),E.disableAll(),S.fog&&E.enable(0),S.useFog&&E.enable(1),S.flatShading&&E.enable(2),S.logarithmicDepthBuffer&&E.enable(3),S.reverseDepthBuffer&&E.enable(4),S.skinning&&E.enable(5),S.morphTargets&&E.enable(6),S.morphNormals&&E.enable(7),S.morphColors&&E.enable(8),S.premultipliedAlpha&&E.enable(9),S.shadowMapEnabled&&E.enable(10),S.doubleSided&&E.enable(11),S.flipSided&&E.enable(12),S.useDepthPacking&&E.enable(13),S.dithering&&E.enable(14),S.transmission&&E.enable(15),S.sheen&&E.enable(16),S.opaque&&E.enable(17),S.pointsUvs&&E.enable(18),S.decodeVideoTexture&&E.enable(19),S.decodeVideoTextureEmissive&&E.enable(20),S.alphaToCoverage&&E.enable(21),y.push(E.mask)}function w(y){const S=c[y.type];let p;if(S){const R=rC[S];p=uM.clone(R.uniforms)}else p=y.uniforms;return p}function M(y,S){let p;for(let R=0,q=e.length;R<q;R++){const H=e[R];if(H.cacheKey===S){p=H,++p.usedTimes;break}}return p===void 0&&(p=new tJ(C,S,y,Q),e.push(p)),p}function U(y){if(--y.usedTimes===0){const S=e.indexOf(y);e[S]=e[e.length-1],e.pop(),y.destroy()}}function J(y){t.remove(y)}function K(){t.dispose()}return{getParameters:h,getProgramCacheKey:D,getUniforms:w,acquireProgram:M,releaseProgram:U,releaseShaderCache:J,programs:e,dispose:K}}function nJ(){let C=new WeakMap;function A(i){return C.has(i)}function I(i){let E=C.get(i);return E===void 0&&(E={},C.set(i,E)),E}function g(i){C.delete(i)}function B(i,E,t){C.get(i)[E]=t}function Q(){C=new WeakMap}return{has:A,get:I,remove:g,update:B,dispose:Q}}function DJ(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function AD(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function ID(){const C=[];let A=0;const I=[],g=[],B=[];function Q(){A=0,I.length=0,g.length=0,B.length=0}function i(s,a,n,c,l,h){let D=C[A];return D===void 0?(D={id:s.id,object:s,geometry:a,material:n,groupOrder:c,renderOrder:s.renderOrder,z:l,group:h},C[A]=D):(D.id=s.id,D.object=s,D.geometry=a,D.material=n,D.groupOrder=c,D.renderOrder=s.renderOrder,D.z=l,D.group=h),A++,D}function E(s,a,n,c,l,h){const D=i(s,a,n,c,l,h);n.transmission>0?g.push(D):n.transparent===!0?B.push(D):I.push(D)}function t(s,a,n,c,l,h){const D=i(s,a,n,c,l,h);n.transmission>0?g.unshift(D):n.transparent===!0?B.unshift(D):I.unshift(D)}function o(s,a){I.length>1&&I.sort(s||DJ),g.length>1&&g.sort(a||AD),B.length>1&&B.sort(a||AD)}function e(){for(let s=A,a=C.length;s<a;s++){const n=C[s];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:B,init:Q,push:E,unshift:t,finish:e,sort:o}}function hJ(){let C=new WeakMap;function A(g,B){const Q=C.get(g);let i;return Q===void 0?(i=new ID,C.set(g,[i])):B>=Q.length?(i=new ID,Q.push(i)):i=Q[B],i}function I(){C=new WeakMap}return{get:A,dispose:I}}function rJ(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new _,color:new gI};break;case"SpotLight":I={position:new _,direction:new _,color:new gI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new _,color:new gI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new _,skyColor:new gI,groundColor:new gI};break;case"RectAreaLight":I={color:new gI,position:new _,halfWidth:new _,halfHeight:new _};break}return C[A.id]=I,I}}}function cJ(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _A};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _A};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _A,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=I,I}}}let lJ=0;function SJ(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function wJ(C){const A=new rJ,I=cJ(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)g.probe.push(new _);const B=new _,Q=new dI,i=new dI;function E(o){let e=0,s=0,a=0;for(let y=0;y<9;y++)g.probe[y].set(0,0,0);let n=0,c=0,l=0,h=0,D=0,k=0,G=0,w=0,M=0,U=0,J=0;o.sort(SJ);for(let y=0,S=o.length;y<S;y++){const p=o[y],R=p.color,q=p.intensity,H=p.distance,Z=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)e+=R.r*q,s+=R.g*q,a+=R.b*q;else if(p.isLightProbe){for(let x=0;x<9;x++)g.probe[x].addScaledVector(p.sh.coefficients[x],q);J++}else if(p.isDirectionalLight){const x=A.get(p);if(x.color.copy(p.color).multiplyScalar(p.intensity),p.castShadow){const P=p.shadow,O=I.get(p);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,g.directionalShadow[n]=O,g.directionalShadowMap[n]=Z,g.directionalShadowMatrix[n]=p.shadow.matrix,k++}g.directional[n]=x,n++}else if(p.isSpotLight){const x=A.get(p);x.position.setFromMatrixPosition(p.matrixWorld),x.color.copy(R).multiplyScalar(q),x.distance=H,x.coneCos=Math.cos(p.angle),x.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),x.decay=p.decay,g.spot[l]=x;const P=p.shadow;if(p.map&&(g.spotLightMap[M]=p.map,M++,P.updateMatrices(p),p.castShadow&&U++),g.spotLightMatrix[l]=P.matrix,p.castShadow){const O=I.get(p);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,g.spotShadow[l]=O,g.spotShadowMap[l]=Z,w++}l++}else if(p.isRectAreaLight){const x=A.get(p);x.color.copy(R).multiplyScalar(q),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),g.rectArea[h]=x,h++}else if(p.isPointLight){const x=A.get(p);if(x.color.copy(p.color).multiplyScalar(p.intensity),x.distance=p.distance,x.decay=p.decay,p.castShadow){const P=p.shadow,O=I.get(p);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,O.shadowCameraNear=P.camera.near,O.shadowCameraFar=P.camera.far,g.pointShadow[c]=O,g.pointShadowMap[c]=Z,g.pointShadowMatrix[c]=p.shadow.matrix,G++}g.point[c]=x,c++}else if(p.isHemisphereLight){const x=A.get(p);x.skyColor.copy(p.color).multiplyScalar(q),x.groundColor.copy(p.groundColor).multiplyScalar(q),g.hemi[D]=x,D++}}h>0&&(C.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=hA.LTC_FLOAT_1,g.rectAreaLTC2=hA.LTC_FLOAT_2):(g.rectAreaLTC1=hA.LTC_HALF_1,g.rectAreaLTC2=hA.LTC_HALF_2)),g.ambient[0]=e,g.ambient[1]=s,g.ambient[2]=a;const K=g.hash;(K.directionalLength!==n||K.pointLength!==c||K.spotLength!==l||K.rectAreaLength!==h||K.hemiLength!==D||K.numDirectionalShadows!==k||K.numPointShadows!==G||K.numSpotShadows!==w||K.numSpotMaps!==M||K.numLightProbes!==J)&&(g.directional.length=n,g.spot.length=l,g.rectArea.length=h,g.point.length=c,g.hemi.length=D,g.directionalShadow.length=k,g.directionalShadowMap.length=k,g.pointShadow.length=G,g.pointShadowMap.length=G,g.spotShadow.length=w,g.spotShadowMap.length=w,g.directionalShadowMatrix.length=k,g.pointShadowMatrix.length=G,g.spotLightMatrix.length=w+M-U,g.spotLightMap.length=M,g.numSpotLightShadowsWithMaps=U,g.numLightProbes=J,K.directionalLength=n,K.pointLength=c,K.spotLength=l,K.rectAreaLength=h,K.hemiLength=D,K.numDirectionalShadows=k,K.numPointShadows=G,K.numSpotShadows=w,K.numSpotMaps=M,K.numLightProbes=J,g.version=lJ++)}function t(o,e){let s=0,a=0,n=0,c=0,l=0;const h=e.matrixWorldInverse;for(let D=0,k=o.length;D<k;D++){const G=o[D];if(G.isDirectionalLight){const w=g.directional[s];w.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),w.direction.sub(B),w.direction.transformDirection(h),s++}else if(G.isSpotLight){const w=g.spot[n];w.position.setFromMatrixPosition(G.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(G.target.matrixWorld),w.direction.sub(B),w.direction.transformDirection(h),n++}else if(G.isRectAreaLight){const w=g.rectArea[c];w.position.setFromMatrixPosition(G.matrixWorld),w.position.applyMatrix4(h),i.identity(),Q.copy(G.matrixWorld),Q.premultiply(h),i.extractRotation(Q),w.halfWidth.set(G.width*.5,0,0),w.halfHeight.set(0,G.height*.5,0),w.halfWidth.applyMatrix4(i),w.halfHeight.applyMatrix4(i),c++}else if(G.isPointLight){const w=g.point[a];w.position.setFromMatrixPosition(G.matrixWorld),w.position.applyMatrix4(h),a++}else if(G.isHemisphereLight){const w=g.hemi[l];w.direction.setFromMatrixPosition(G.matrixWorld),w.direction.transformDirection(h),l++}}}return{setup:E,setupView:t,state:g}}function gD(C){const A=new wJ(C),I=[],g=[];function B(e){o.camera=e,I.length=0,g.length=0}function Q(e){I.push(e)}function i(e){g.push(e)}function E(){A.setup(I)}function t(e){A.setupView(I,e)}const o={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:B,state:o,setupLights:E,setupLightsView:t,pushLight:Q,pushShadow:i}}function GJ(C){let A=new WeakMap;function I(B,Q=0){const i=A.get(B);let E;return i===void 0?(E=new gD(C),A.set(B,[E])):Q>=i.length?(E=new gD(C),i.push(E)):E=i[Q],E}function g(){A=new WeakMap}return{get:I,dispose:g}}const kJ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yJ=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MJ(C,A,I){let g=new _s;const B=new _A,Q=new _A,i=new LI,E=new vM({depthPacking:Ty}),t=new ZM,o={},e=I.maxTextureSize,s={[hB]:Ng,[Ng]:hB,[fC]:fC},a=new lB({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _A},radius:{value:4}},vertexShader:kJ,fragmentShader:yJ}),n=a.clone();n.defines.HORIZONTAL_PASS=1;const c=new DC;c.setAttribute("position",new wC(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const l=new Mg(c,a),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let D=this.type;this.render=function(U,J,K){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||U.length===0)return;const y=C.getRenderTarget(),S=C.getActiveCubeFace(),p=C.getActiveMipmapLevel(),R=C.state;R.setBlending(oB),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const q=D!==RC&&this.type===RC,H=D===RC&&this.type!==RC;for(let Z=0,x=U.length;Z<x;Z++){const P=U[Z],O=P.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;B.copy(O.mapSize);const z=O.getFrameExtents();if(B.multiply(z),Q.copy(O.mapSize),(B.x>e||B.y>e)&&(B.x>e&&(Q.x=Math.floor(e/z.x),B.x=Q.x*z.x,O.mapSize.x=Q.x),B.y>e&&(Q.y=Math.floor(e/z.y),B.y=Q.y*z.y,O.mapSize.y=Q.y)),O.map===null||q===!0||H===!0){const iA=this.type!==RC?{minFilter:BC,magFilter:BC}:{};O.map!==null&&O.map.dispose(),O.map=new OB(B.x,B.y,iA),O.map.texture.name=P.name+".shadowMap",O.camera.updateProjectionMatrix()}C.setRenderTarget(O.map),C.clear();const gA=O.getViewportCount();for(let iA=0;iA<gA;iA++){const GA=O.getViewport(iA);i.set(Q.x*GA.x,Q.y*GA.y,Q.x*GA.z,Q.y*GA.w),R.viewport(i),O.updateMatrices(P,iA),g=O.getFrustum(),w(J,K,O.camera,P,this.type)}O.isPointLightShadow!==!0&&this.type===RC&&k(O,K),O.needsUpdate=!1}D=this.type,h.needsUpdate=!1,C.setRenderTarget(y,S,p)};function k(U,J){const K=A.update(l);a.defines.VSM_SAMPLES!==U.blurSamples&&(a.defines.VSM_SAMPLES=U.blurSamples,n.defines.VSM_SAMPLES=U.blurSamples,a.needsUpdate=!0,n.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new OB(B.x,B.y)),a.uniforms.shadow_pass.value=U.map.texture,a.uniforms.resolution.value=U.mapSize,a.uniforms.radius.value=U.radius,C.setRenderTarget(U.mapPass),C.clear(),C.renderBufferDirect(J,null,K,a,l,null),n.uniforms.shadow_pass.value=U.mapPass.texture,n.uniforms.resolution.value=U.mapSize,n.uniforms.radius.value=U.radius,C.setRenderTarget(U.map),C.clear(),C.renderBufferDirect(J,null,K,n,l,null)}function G(U,J,K,y){let S=null;const p=K.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(p!==void 0)S=p;else if(S=K.isPointLight===!0?t:E,C.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0){const R=S.uuid,q=J.uuid;let H=o[R];H===void 0&&(H={},o[R]=H);let Z=H[q];Z===void 0&&(Z=S.clone(),H[q]=Z,J.addEventListener("dispose",M)),S=Z}if(S.visible=J.visible,S.wireframe=J.wireframe,y===RC?S.side=J.shadowSide!==null?J.shadowSide:J.side:S.side=J.shadowSide!==null?J.shadowSide:s[J.side],S.alphaMap=J.alphaMap,S.alphaTest=J.alphaTest,S.map=J.map,S.clipShadows=J.clipShadows,S.clippingPlanes=J.clippingPlanes,S.clipIntersection=J.clipIntersection,S.displacementMap=J.displacementMap,S.displacementScale=J.displacementScale,S.displacementBias=J.displacementBias,S.wireframeLinewidth=J.wireframeLinewidth,S.linewidth=J.linewidth,K.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=C.properties.get(S);R.light=K}return S}function w(U,J,K,y,S){if(U.visible===!1)return;if(U.layers.test(J.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&S===RC)&&(!U.frustumCulled||g.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,U.matrixWorld);const q=A.update(U),H=U.material;if(Array.isArray(H)){const Z=q.groups;for(let x=0,P=Z.length;x<P;x++){const O=Z[x],z=H[O.materialIndex];if(z&&z.visible){const gA=G(U,z,y,S);U.onBeforeShadow(C,U,J,K,q,gA,O),C.renderBufferDirect(K,null,q,gA,U,O),U.onAfterShadow(C,U,J,K,q,gA,O)}}}else if(H.visible){const Z=G(U,H,y,S);U.onBeforeShadow(C,U,J,K,q,Z,null),C.renderBufferDirect(K,null,q,Z,U,null),U.onAfterShadow(C,U,J,K,q,Z,null)}}const R=U.children;for(let q=0,H=R.length;q<H;q++)w(R[q],J,K,y,S)}function M(U){U.target.removeEventListener("dispose",M);for(const K in o){const y=o[K],S=U.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const UJ={[Zo]:Wo,[Po]:Xo,[Vo]:zo,[fQ]:jo,[Wo]:Zo,[Xo]:Po,[zo]:Vo,[jo]:fQ};function NJ(C,A){function I(){let m=!1;const rA=new LI;let j=null;const CA=new LI(0,0,0,0);return{setMask:function(wA){j!==wA&&!m&&(C.colorMask(wA,wA,wA,wA),j=wA)},setLocked:function(wA){m=wA},setClear:function(wA,SA,WA,qI,tg){tg===!0&&(wA*=qI,SA*=qI,WA*=qI),rA.set(wA,SA,WA,qI),CA.equals(rA)===!1&&(C.clearColor(wA,SA,WA,qI),CA.copy(rA))},reset:function(){m=!1,j=null,CA.set(-1,0,0,0)}}}function g(){let m=!1,rA=!1,j=null,CA=null,wA=null;return{setReversed:function(SA){if(rA!==SA){const WA=A.get("EXT_clip_control");rA?WA.clipControlEXT(WA.LOWER_LEFT_EXT,WA.ZERO_TO_ONE_EXT):WA.clipControlEXT(WA.LOWER_LEFT_EXT,WA.NEGATIVE_ONE_TO_ONE_EXT);const qI=wA;wA=null,this.setClear(qI)}rA=SA},getReversed:function(){return rA},setTest:function(SA){SA?tA(C.DEPTH_TEST):BA(C.DEPTH_TEST)},setMask:function(SA){j!==SA&&!m&&(C.depthMask(SA),j=SA)},setFunc:function(SA){if(rA&&(SA=UJ[SA]),CA!==SA){switch(SA){case Zo:C.depthFunc(C.NEVER);break;case Wo:C.depthFunc(C.ALWAYS);break;case Po:C.depthFunc(C.LESS);break;case fQ:C.depthFunc(C.LEQUAL);break;case Vo:C.depthFunc(C.EQUAL);break;case jo:C.depthFunc(C.GEQUAL);break;case Xo:C.depthFunc(C.GREATER);break;case zo:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}CA=SA}},setLocked:function(SA){m=SA},setClear:function(SA){wA!==SA&&(rA&&(SA=1-SA),C.clearDepth(SA),wA=SA)},reset:function(){m=!1,j=null,CA=null,wA=null,rA=!1}}}function B(){let m=!1,rA=null,j=null,CA=null,wA=null,SA=null,WA=null,qI=null,tg=null;return{setTest:function(nI){m||(nI?tA(C.STENCIL_TEST):BA(C.STENCIL_TEST))},setMask:function(nI){rA!==nI&&!m&&(C.stencilMask(nI),rA=nI)},setFunc:function(nI,vg,UC){(j!==nI||CA!==vg||wA!==UC)&&(C.stencilFunc(nI,vg,UC),j=nI,CA=vg,wA=UC)},setOp:function(nI,vg,UC){(SA!==nI||WA!==vg||qI!==UC)&&(C.stencilOp(nI,vg,UC),SA=nI,WA=vg,qI=UC)},setLocked:function(nI){m=nI},setClear:function(nI){tg!==nI&&(C.clearStencil(nI),tg=nI)},reset:function(){m=!1,rA=null,j=null,CA=null,wA=null,SA=null,WA=null,qI=null,tg=null}}}const Q=new I,i=new g,E=new B,t=new WeakMap,o=new WeakMap;let e={},s={},a=new WeakMap,n=[],c=null,l=!1,h=null,D=null,k=null,G=null,w=null,M=null,U=null,J=new gI(0,0,0),K=0,y=!1,S=null,p=null,R=null,q=null,H=null;const Z=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let x=!1,P=0;const O=C.getParameter(C.VERSION);O.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(O)[1]),x=P>=1):O.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),x=P>=2);let z=null,gA={};const iA=C.getParameter(C.SCISSOR_BOX),GA=C.getParameter(C.VIEWPORT),ZA=new LI().fromArray(iA),X=new LI().fromArray(GA);function $(m,rA,j,CA){const wA=new Uint8Array(4),SA=C.createTexture();C.bindTexture(m,SA),C.texParameteri(m,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(m,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let WA=0;WA<j;WA++)m===C.TEXTURE_3D||m===C.TEXTURE_2D_ARRAY?C.texImage3D(rA,0,C.RGBA,1,1,CA,0,C.RGBA,C.UNSIGNED_BYTE,wA):C.texImage2D(rA+WA,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,wA);return SA}const eA={};eA[C.TEXTURE_2D]=$(C.TEXTURE_2D,C.TEXTURE_2D,1),eA[C.TEXTURE_CUBE_MAP]=$(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),eA[C.TEXTURE_2D_ARRAY]=$(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),eA[C.TEXTURE_3D]=$(C.TEXTURE_3D,C.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),i.setClear(1),E.setClear(0),tA(C.DEPTH_TEST),i.setFunc(fQ),sA(!1),dA(ja),tA(C.CULL_FACE),Y(oB);function tA(m){e[m]!==!0&&(C.enable(m),e[m]=!0)}function BA(m){e[m]!==!1&&(C.disable(m),e[m]=!1)}function fA(m,rA){return s[m]!==rA?(C.bindFramebuffer(m,rA),s[m]=rA,m===C.DRAW_FRAMEBUFFER&&(s[C.FRAMEBUFFER]=rA),m===C.FRAMEBUFFER&&(s[C.DRAW_FRAMEBUFFER]=rA),!0):!1}function TA(m,rA){let j=n,CA=!1;if(m){j=a.get(rA),j===void 0&&(j=[],a.set(rA,j));const wA=m.textures;if(j.length!==wA.length||j[0]!==C.COLOR_ATTACHMENT0){for(let SA=0,WA=wA.length;SA<WA;SA++)j[SA]=C.COLOR_ATTACHMENT0+SA;j.length=wA.length,CA=!0}}else j[0]!==C.BACK&&(j[0]=C.BACK,CA=!0);CA&&C.drawBuffers(j)}function oI(m){return c!==m?(C.useProgram(m),c=m,!0):!1}const VA={[uB]:C.FUNC_ADD,[ay]:C.FUNC_SUBTRACT,[ny]:C.FUNC_REVERSE_SUBTRACT};VA[Dy]=C.MIN,VA[hy]=C.MAX;const RI={[ry]:C.ZERO,[cy]:C.ONE,[ly]:C.SRC_COLOR,[Oo]:C.SRC_ALPHA,[My]:C.SRC_ALPHA_SATURATE,[ky]:C.DST_COLOR,[wy]:C.DST_ALPHA,[Sy]:C.ONE_MINUS_SRC_COLOR,[vo]:C.ONE_MINUS_SRC_ALPHA,[yy]:C.ONE_MINUS_DST_COLOR,[Gy]:C.ONE_MINUS_DST_ALPHA,[Uy]:C.CONSTANT_COLOR,[Ny]:C.ONE_MINUS_CONSTANT_COLOR,[Ky]:C.CONSTANT_ALPHA,[Jy]:C.ONE_MINUS_CONSTANT_ALPHA};function Y(m,rA,j,CA,wA,SA,WA,qI,tg,nI){if(m===oB){l===!0&&(BA(C.BLEND),l=!1);return}if(l===!1&&(tA(C.BLEND),l=!0),m!==sy){if(m!==h||nI!==y){if((D!==uB||w!==uB)&&(C.blendEquation(C.FUNC_ADD),D=uB,w=uB),nI)switch(m){case KQ:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Xa:C.blendFunc(C.ONE,C.ONE);break;case za:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case $a:C.blendFuncSeparate(C.ZERO,C.SRC_COLOR,C.ZERO,C.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}else switch(m){case KQ:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Xa:C.blendFunc(C.SRC_ALPHA,C.ONE);break;case za:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case $a:C.blendFunc(C.ZERO,C.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",m);break}k=null,G=null,M=null,U=null,J.set(0,0,0),K=0,h=m,y=nI}return}wA=wA||rA,SA=SA||j,WA=WA||CA,(rA!==D||wA!==w)&&(C.blendEquationSeparate(VA[rA],VA[wA]),D=rA,w=wA),(j!==k||CA!==G||SA!==M||WA!==U)&&(C.blendFuncSeparate(RI[j],RI[CA],RI[SA],RI[WA]),k=j,G=CA,M=SA,U=WA),(qI.equals(J)===!1||tg!==K)&&(C.blendColor(qI.r,qI.g,qI.b,tg),J.copy(qI),K=tg),h=m,y=!1}function aA(m,rA){m.side===fC?BA(C.CULL_FACE):tA(C.CULL_FACE);let j=m.side===Ng;rA&&(j=!j),sA(j),m.blending===KQ&&m.transparent===!1?Y(oB):Y(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),i.setFunc(m.depthFunc),i.setTest(m.depthTest),i.setMask(m.depthWrite),Q.setMask(m.colorWrite);const CA=m.stencilWrite;E.setTest(CA),CA&&(E.setMask(m.stencilWriteMask),E.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),E.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),FA(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?tA(C.SAMPLE_ALPHA_TO_COVERAGE):BA(C.SAMPLE_ALPHA_TO_COVERAGE)}function sA(m){S!==m&&(m?C.frontFace(C.CW):C.frontFace(C.CCW),S=m)}function dA(m){m!==ty?(tA(C.CULL_FACE),m!==p&&(m===ja?C.cullFace(C.BACK):m===oy?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):BA(C.CULL_FACE),p=m}function nA(m){m!==R&&(x&&C.lineWidth(m),R=m)}function FA(m,rA,j){m?(tA(C.POLYGON_OFFSET_FILL),(q!==rA||H!==j)&&(C.polygonOffset(rA,j),q=rA,H=j)):BA(C.POLYGON_OFFSET_FILL)}function DA(m){m?tA(C.SCISSOR_TEST):BA(C.SCISSOR_TEST)}function d(m){m===void 0&&(m=C.TEXTURE0+Z-1),z!==m&&(C.activeTexture(m),z=m)}function N(m,rA,j){j===void 0&&(z===null?j=C.TEXTURE0+Z-1:j=z);let CA=gA[j];CA===void 0&&(CA={type:void 0,texture:void 0},gA[j]=CA),(CA.type!==m||CA.texture!==rA)&&(z!==j&&(C.activeTexture(j),z=j),C.bindTexture(m,rA||eA[m]),CA.type=m,CA.texture=rA)}function v(){const m=gA[z];m!==void 0&&m.type!==void 0&&(C.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function IA(){try{C.compressedTexImage2D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function QA(){try{C.compressedTexImage3D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function AA(){try{C.texSubImage2D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function pA(){try{C.texSubImage3D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function lA(){try{C.compressedTexSubImage2D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function yA(){try{C.compressedTexSubImage3D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function QI(){try{C.texStorage2D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function oA(){try{C.texStorage3D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function MA(){try{C.texImage2D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function HA(){try{C.texImage3D.apply(C,arguments)}catch(m){console.error("THREE.WebGLState:",m)}}function xA(m){ZA.equals(m)===!1&&(C.scissor(m.x,m.y,m.z,m.w),ZA.copy(m))}function UA(m){X.equals(m)===!1&&(C.viewport(m.x,m.y,m.z,m.w),X.copy(m))}function CI(m,rA){let j=o.get(rA);j===void 0&&(j=new WeakMap,o.set(rA,j));let CA=j.get(m);CA===void 0&&(CA=C.getUniformBlockIndex(rA,m.name),j.set(m,CA))}function jA(m,rA){const CA=o.get(rA).get(m);t.get(rA)!==CA&&(C.uniformBlockBinding(rA,CA,m.__bindingPointIndex),t.set(rA,CA))}function GI(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),i.setReversed(!1),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),e={},z=null,gA={},s={},a=new WeakMap,n=[],c=null,l=!1,h=null,D=null,k=null,G=null,w=null,M=null,U=null,J=new gI(0,0,0),K=0,y=!1,S=null,p=null,R=null,q=null,H=null,ZA.set(0,0,C.canvas.width,C.canvas.height),X.set(0,0,C.canvas.width,C.canvas.height),Q.reset(),i.reset(),E.reset()}return{buffers:{color:Q,depth:i,stencil:E},enable:tA,disable:BA,bindFramebuffer:fA,drawBuffers:TA,useProgram:oI,setBlending:Y,setMaterial:aA,setFlipSided:sA,setCullFace:dA,setLineWidth:nA,setPolygonOffset:FA,setScissorTest:DA,activeTexture:d,bindTexture:N,unbindTexture:v,compressedTexImage2D:IA,compressedTexImage3D:QA,texImage2D:MA,texImage3D:HA,updateUBOMapping:CI,uniformBlockBinding:jA,texStorage2D:QI,texStorage3D:oA,texSubImage2D:AA,texSubImage3D:pA,compressedTexSubImage2D:lA,compressedTexSubImage3D:yA,scissor:xA,viewport:UA,reset:GI}}function KJ(C,A,I,g,B,Q,i){const E=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new _A,e=new WeakMap;let s;const a=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(d,N){return n?new OffscreenCanvas(d,N):It("canvas")}function l(d,N,v){let IA=1;const QA=DA(d);if((QA.width>v||QA.height>v)&&(IA=v/Math.max(QA.width,QA.height)),IA<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const AA=Math.floor(IA*QA.width),pA=Math.floor(IA*QA.height);s===void 0&&(s=c(AA,pA));const lA=N?c(AA,pA):s;return lA.width=AA,lA.height=pA,lA.getContext("2d").drawImage(d,0,0,AA,pA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+QA.width+"x"+QA.height+") to ("+AA+"x"+pA+")."),lA}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+QA.width+"x"+QA.height+")."),d;return d}function h(d){return d.generateMipmaps}function D(d){C.generateMipmap(d)}function k(d){return d.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?C.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?C.TEXTURE_2D_ARRAY:C.TEXTURE_2D}function G(d,N,v,IA,QA=!1){if(d!==null){if(C[d]!==void 0)return C[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let AA=N;if(N===C.RED&&(v===C.FLOAT&&(AA=C.R32F),v===C.HALF_FLOAT&&(AA=C.R16F),v===C.UNSIGNED_BYTE&&(AA=C.R8)),N===C.RED_INTEGER&&(v===C.UNSIGNED_BYTE&&(AA=C.R8UI),v===C.UNSIGNED_SHORT&&(AA=C.R16UI),v===C.UNSIGNED_INT&&(AA=C.R32UI),v===C.BYTE&&(AA=C.R8I),v===C.SHORT&&(AA=C.R16I),v===C.INT&&(AA=C.R32I)),N===C.RG&&(v===C.FLOAT&&(AA=C.RG32F),v===C.HALF_FLOAT&&(AA=C.RG16F),v===C.UNSIGNED_BYTE&&(AA=C.RG8)),N===C.RG_INTEGER&&(v===C.UNSIGNED_BYTE&&(AA=C.RG8UI),v===C.UNSIGNED_SHORT&&(AA=C.RG16UI),v===C.UNSIGNED_INT&&(AA=C.RG32UI),v===C.BYTE&&(AA=C.RG8I),v===C.SHORT&&(AA=C.RG16I),v===C.INT&&(AA=C.RG32I)),N===C.RGB_INTEGER&&(v===C.UNSIGNED_BYTE&&(AA=C.RGB8UI),v===C.UNSIGNED_SHORT&&(AA=C.RGB16UI),v===C.UNSIGNED_INT&&(AA=C.RGB32UI),v===C.BYTE&&(AA=C.RGB8I),v===C.SHORT&&(AA=C.RGB16I),v===C.INT&&(AA=C.RGB32I)),N===C.RGBA_INTEGER&&(v===C.UNSIGNED_BYTE&&(AA=C.RGBA8UI),v===C.UNSIGNED_SHORT&&(AA=C.RGBA16UI),v===C.UNSIGNED_INT&&(AA=C.RGBA32UI),v===C.BYTE&&(AA=C.RGBA8I),v===C.SHORT&&(AA=C.RGBA16I),v===C.INT&&(AA=C.RGBA32I)),N===C.RGB&&v===C.UNSIGNED_INT_5_9_9_9_REV&&(AA=C.RGB9_E5),N===C.RGBA){const pA=QA?$E:tI.getTransfer(IA);v===C.FLOAT&&(AA=C.RGBA32F),v===C.HALF_FLOAT&&(AA=C.RGBA16F),v===C.UNSIGNED_BYTE&&(AA=pA===hI?C.SRGB8_ALPHA8:C.RGBA8),v===C.UNSIGNED_SHORT_4_4_4_4&&(AA=C.RGBA4),v===C.UNSIGNED_SHORT_5_5_5_1&&(AA=C.RGB5_A1)}return(AA===C.R16F||AA===C.R32F||AA===C.RG16F||AA===C.RG32F||AA===C.RGBA16F||AA===C.RGBA32F)&&A.get("EXT_color_buffer_float"),AA}function w(d,N){let v;return d?N===null||N===_B||N===HQ?v=C.DEPTH24_STENCIL8:N===LC?v=C.DEPTH32F_STENCIL8:N===Ui&&(v=C.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):N===null||N===_B||N===HQ?v=C.DEPTH_COMPONENT24:N===LC?v=C.DEPTH_COMPONENT32F:N===Ui&&(v=C.DEPTH_COMPONENT16),v}function M(d,N){return h(d)===!0||d.isFramebufferTexture&&d.minFilter!==BC&&d.minFilter!==lC?Math.log2(Math.max(N.width,N.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?N.mipmaps.length:1}function U(d){const N=d.target;N.removeEventListener("dispose",U),K(N),N.isVideoTexture&&e.delete(N)}function J(d){const N=d.target;N.removeEventListener("dispose",J),S(N)}function K(d){const N=g.get(d);if(N.__webglInit===void 0)return;const v=d.source,IA=a.get(v);if(IA){const QA=IA[N.__cacheKey];QA.usedTimes--,QA.usedTimes===0&&y(d),Object.keys(IA).length===0&&a.delete(v)}g.remove(d)}function y(d){const N=g.get(d);C.deleteTexture(N.__webglTexture);const v=d.source,IA=a.get(v);delete IA[N.__cacheKey],i.memory.textures--}function S(d){const N=g.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),g.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let IA=0;IA<6;IA++){if(Array.isArray(N.__webglFramebuffer[IA]))for(let QA=0;QA<N.__webglFramebuffer[IA].length;QA++)C.deleteFramebuffer(N.__webglFramebuffer[IA][QA]);else C.deleteFramebuffer(N.__webglFramebuffer[IA]);N.__webglDepthbuffer&&C.deleteRenderbuffer(N.__webglDepthbuffer[IA])}else{if(Array.isArray(N.__webglFramebuffer))for(let IA=0;IA<N.__webglFramebuffer.length;IA++)C.deleteFramebuffer(N.__webglFramebuffer[IA]);else C.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&C.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&C.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let IA=0;IA<N.__webglColorRenderbuffer.length;IA++)N.__webglColorRenderbuffer[IA]&&C.deleteRenderbuffer(N.__webglColorRenderbuffer[IA]);N.__webglDepthRenderbuffer&&C.deleteRenderbuffer(N.__webglDepthRenderbuffer)}const v=d.textures;for(let IA=0,QA=v.length;IA<QA;IA++){const AA=g.get(v[IA]);AA.__webglTexture&&(C.deleteTexture(AA.__webglTexture),i.memory.textures--),g.remove(v[IA])}g.remove(d)}let p=0;function R(){p=0}function q(){const d=p;return d>=B.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+B.maxTextures),p+=1,d}function H(d){const N=[];return N.push(d.wrapS),N.push(d.wrapT),N.push(d.wrapR||0),N.push(d.magFilter),N.push(d.minFilter),N.push(d.anisotropy),N.push(d.internalFormat),N.push(d.format),N.push(d.type),N.push(d.generateMipmaps),N.push(d.premultiplyAlpha),N.push(d.flipY),N.push(d.unpackAlignment),N.push(d.colorSpace),N.join()}function Z(d,N){const v=g.get(d);if(d.isVideoTexture&&nA(d),d.isRenderTargetTexture===!1&&d.version>0&&v.__version!==d.version){const IA=d.image;if(IA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(IA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(v,d,N);return}}I.bindTexture(C.TEXTURE_2D,v.__webglTexture,C.TEXTURE0+N)}function x(d,N){const v=g.get(d);if(d.version>0&&v.__version!==d.version){X(v,d,N);return}I.bindTexture(C.TEXTURE_2D_ARRAY,v.__webglTexture,C.TEXTURE0+N)}function P(d,N){const v=g.get(d);if(d.version>0&&v.__version!==d.version){X(v,d,N);return}I.bindTexture(C.TEXTURE_3D,v.__webglTexture,C.TEXTURE0+N)}function O(d,N){const v=g.get(d);if(d.version>0&&v.__version!==d.version){$(v,d,N);return}I.bindTexture(C.TEXTURE_CUBE_MAP,v.__webglTexture,C.TEXTURE0+N)}const z={[Ie]:C.REPEAT,[fB]:C.CLAMP_TO_EDGE,[ge]:C.MIRRORED_REPEAT},gA={[BC]:C.NEAREST,[my]:C.NEAREST_MIPMAP_NEAREST,[CE]:C.NEAREST_MIPMAP_LINEAR,[lC]:C.LINEAR,[Xt]:C.LINEAR_MIPMAP_NEAREST,[LB]:C.LINEAR_MIPMAP_LINEAR},iA={[by]:C.NEVER,[Py]:C.ALWAYS,[_y]:C.LESS,[Ar]:C.LEQUAL,[Oy]:C.EQUAL,[Wy]:C.GEQUAL,[vy]:C.GREATER,[Zy]:C.NOTEQUAL};function GA(d,N){if(N.type===LC&&A.has("OES_texture_float_linear")===!1&&(N.magFilter===lC||N.magFilter===Xt||N.magFilter===CE||N.magFilter===LB||N.minFilter===lC||N.minFilter===Xt||N.minFilter===CE||N.minFilter===LB)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),C.texParameteri(d,C.TEXTURE_WRAP_S,z[N.wrapS]),C.texParameteri(d,C.TEXTURE_WRAP_T,z[N.wrapT]),(d===C.TEXTURE_3D||d===C.TEXTURE_2D_ARRAY)&&C.texParameteri(d,C.TEXTURE_WRAP_R,z[N.wrapR]),C.texParameteri(d,C.TEXTURE_MAG_FILTER,gA[N.magFilter]),C.texParameteri(d,C.TEXTURE_MIN_FILTER,gA[N.minFilter]),N.compareFunction&&(C.texParameteri(d,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(d,C.TEXTURE_COMPARE_FUNC,iA[N.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===BC||N.minFilter!==CE&&N.minFilter!==LB||N.type===LC&&A.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||g.get(N).__currentAnisotropy){const v=A.get("EXT_texture_filter_anisotropic");C.texParameterf(d,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,B.getMaxAnisotropy())),g.get(N).__currentAnisotropy=N.anisotropy}}}function ZA(d,N){let v=!1;d.__webglInit===void 0&&(d.__webglInit=!0,N.addEventListener("dispose",U));const IA=N.source;let QA=a.get(IA);QA===void 0&&(QA={},a.set(IA,QA));const AA=H(N);if(AA!==d.__cacheKey){QA[AA]===void 0&&(QA[AA]={texture:C.createTexture(),usedTimes:0},i.memory.textures++,v=!0),QA[AA].usedTimes++;const pA=QA[d.__cacheKey];pA!==void 0&&(QA[d.__cacheKey].usedTimes--,pA.usedTimes===0&&y(N)),d.__cacheKey=AA,d.__webglTexture=QA[AA].texture}return v}function X(d,N,v){let IA=C.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(IA=C.TEXTURE_2D_ARRAY),N.isData3DTexture&&(IA=C.TEXTURE_3D);const QA=ZA(d,N),AA=N.source;I.bindTexture(IA,d.__webglTexture,C.TEXTURE0+v);const pA=g.get(AA);if(AA.version!==pA.__version||QA===!0){I.activeTexture(C.TEXTURE0+v);const lA=tI.getPrimaries(tI.workingColorSpace),yA=N.colorSpace===QB?null:tI.getPrimaries(N.colorSpace),QI=N.colorSpace===QB||lA===yA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,QI);let oA=l(N.image,!1,B.maxTextureSize);oA=FA(N,oA);const MA=Q.convert(N.format,N.colorSpace),HA=Q.convert(N.type);let xA=G(N.internalFormat,MA,HA,N.colorSpace,N.isVideoTexture);GA(IA,N);let UA;const CI=N.mipmaps,jA=N.isVideoTexture!==!0,GI=pA.__version===void 0||QA===!0,m=AA.dataReady,rA=M(N,oA);if(N.isDepthTexture)xA=w(N.format===TQ,N.type),GI&&(jA?I.texStorage2D(C.TEXTURE_2D,1,xA,oA.width,oA.height):I.texImage2D(C.TEXTURE_2D,0,xA,oA.width,oA.height,0,MA,HA,null));else if(N.isDataTexture)if(CI.length>0){jA&&GI&&I.texStorage2D(C.TEXTURE_2D,rA,xA,CI[0].width,CI[0].height);for(let j=0,CA=CI.length;j<CA;j++)UA=CI[j],jA?m&&I.texSubImage2D(C.TEXTURE_2D,j,0,0,UA.width,UA.height,MA,HA,UA.data):I.texImage2D(C.TEXTURE_2D,j,xA,UA.width,UA.height,0,MA,HA,UA.data);N.generateMipmaps=!1}else jA?(GI&&I.texStorage2D(C.TEXTURE_2D,rA,xA,oA.width,oA.height),m&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,oA.width,oA.height,MA,HA,oA.data)):I.texImage2D(C.TEXTURE_2D,0,xA,oA.width,oA.height,0,MA,HA,oA.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){jA&&GI&&I.texStorage3D(C.TEXTURE_2D_ARRAY,rA,xA,CI[0].width,CI[0].height,oA.depth);for(let j=0,CA=CI.length;j<CA;j++)if(UA=CI[j],N.format!==gC)if(MA!==null)if(jA){if(m)if(N.layerUpdates.size>0){const wA=Rn(UA.width,UA.height,N.format,N.type);for(const SA of N.layerUpdates){const WA=UA.data.subarray(SA*wA/UA.data.BYTES_PER_ELEMENT,(SA+1)*wA/UA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,j,0,0,SA,UA.width,UA.height,1,MA,WA)}N.clearLayerUpdates()}else I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,j,0,0,0,UA.width,UA.height,oA.depth,MA,UA.data)}else I.compressedTexImage3D(C.TEXTURE_2D_ARRAY,j,xA,UA.width,UA.height,oA.depth,0,UA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jA?m&&I.texSubImage3D(C.TEXTURE_2D_ARRAY,j,0,0,0,UA.width,UA.height,oA.depth,MA,HA,UA.data):I.texImage3D(C.TEXTURE_2D_ARRAY,j,xA,UA.width,UA.height,oA.depth,0,MA,HA,UA.data)}else{jA&&GI&&I.texStorage2D(C.TEXTURE_2D,rA,xA,CI[0].width,CI[0].height);for(let j=0,CA=CI.length;j<CA;j++)UA=CI[j],N.format!==gC?MA!==null?jA?m&&I.compressedTexSubImage2D(C.TEXTURE_2D,j,0,0,UA.width,UA.height,MA,UA.data):I.compressedTexImage2D(C.TEXTURE_2D,j,xA,UA.width,UA.height,0,UA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jA?m&&I.texSubImage2D(C.TEXTURE_2D,j,0,0,UA.width,UA.height,MA,HA,UA.data):I.texImage2D(C.TEXTURE_2D,j,xA,UA.width,UA.height,0,MA,HA,UA.data)}else if(N.isDataArrayTexture)if(jA){if(GI&&I.texStorage3D(C.TEXTURE_2D_ARRAY,rA,xA,oA.width,oA.height,oA.depth),m)if(N.layerUpdates.size>0){const j=Rn(oA.width,oA.height,N.format,N.type);for(const CA of N.layerUpdates){const wA=oA.data.subarray(CA*j/oA.data.BYTES_PER_ELEMENT,(CA+1)*j/oA.data.BYTES_PER_ELEMENT);I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,CA,oA.width,oA.height,1,MA,HA,wA)}N.clearLayerUpdates()}else I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,oA.width,oA.height,oA.depth,MA,HA,oA.data)}else I.texImage3D(C.TEXTURE_2D_ARRAY,0,xA,oA.width,oA.height,oA.depth,0,MA,HA,oA.data);else if(N.isData3DTexture)jA?(GI&&I.texStorage3D(C.TEXTURE_3D,rA,xA,oA.width,oA.height,oA.depth),m&&I.texSubImage3D(C.TEXTURE_3D,0,0,0,0,oA.width,oA.height,oA.depth,MA,HA,oA.data)):I.texImage3D(C.TEXTURE_3D,0,xA,oA.width,oA.height,oA.depth,0,MA,HA,oA.data);else if(N.isFramebufferTexture){if(GI)if(jA)I.texStorage2D(C.TEXTURE_2D,rA,xA,oA.width,oA.height);else{let j=oA.width,CA=oA.height;for(let wA=0;wA<rA;wA++)I.texImage2D(C.TEXTURE_2D,wA,xA,j,CA,0,MA,HA,null),j>>=1,CA>>=1}}else if(CI.length>0){if(jA&&GI){const j=DA(CI[0]);I.texStorage2D(C.TEXTURE_2D,rA,xA,j.width,j.height)}for(let j=0,CA=CI.length;j<CA;j++)UA=CI[j],jA?m&&I.texSubImage2D(C.TEXTURE_2D,j,0,0,MA,HA,UA):I.texImage2D(C.TEXTURE_2D,j,xA,MA,HA,UA);N.generateMipmaps=!1}else if(jA){if(GI){const j=DA(oA);I.texStorage2D(C.TEXTURE_2D,rA,xA,j.width,j.height)}m&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,MA,HA,oA)}else I.texImage2D(C.TEXTURE_2D,0,xA,MA,HA,oA);h(N)&&D(IA),pA.__version=AA.version,N.onUpdate&&N.onUpdate(N)}d.__version=N.version}function $(d,N,v){if(N.image.length!==6)return;const IA=ZA(d,N),QA=N.source;I.bindTexture(C.TEXTURE_CUBE_MAP,d.__webglTexture,C.TEXTURE0+v);const AA=g.get(QA);if(QA.version!==AA.__version||IA===!0){I.activeTexture(C.TEXTURE0+v);const pA=tI.getPrimaries(tI.workingColorSpace),lA=N.colorSpace===QB?null:tI.getPrimaries(N.colorSpace),yA=N.colorSpace===QB||pA===lA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,yA);const QI=N.isCompressedTexture||N.image[0].isCompressedTexture,oA=N.image[0]&&N.image[0].isDataTexture,MA=[];for(let CA=0;CA<6;CA++)!QI&&!oA?MA[CA]=l(N.image[CA],!0,B.maxCubemapSize):MA[CA]=oA?N.image[CA].image:N.image[CA],MA[CA]=FA(N,MA[CA]);const HA=MA[0],xA=Q.convert(N.format,N.colorSpace),UA=Q.convert(N.type),CI=G(N.internalFormat,xA,UA,N.colorSpace),jA=N.isVideoTexture!==!0,GI=AA.__version===void 0||IA===!0,m=QA.dataReady;let rA=M(N,HA);GA(C.TEXTURE_CUBE_MAP,N);let j;if(QI){jA&&GI&&I.texStorage2D(C.TEXTURE_CUBE_MAP,rA,CI,HA.width,HA.height);for(let CA=0;CA<6;CA++){j=MA[CA].mipmaps;for(let wA=0;wA<j.length;wA++){const SA=j[wA];N.format!==gC?xA!==null?jA?m&&I.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA,0,0,SA.width,SA.height,xA,SA.data):I.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA,CI,SA.width,SA.height,0,SA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jA?m&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA,0,0,SA.width,SA.height,xA,UA,SA.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA,CI,SA.width,SA.height,0,xA,UA,SA.data)}}}else{if(j=N.mipmaps,jA&&GI){j.length>0&&rA++;const CA=DA(MA[0]);I.texStorage2D(C.TEXTURE_CUBE_MAP,rA,CI,CA.width,CA.height)}for(let CA=0;CA<6;CA++)if(oA){jA?m&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,0,0,0,MA[CA].width,MA[CA].height,xA,UA,MA[CA].data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,0,CI,MA[CA].width,MA[CA].height,0,xA,UA,MA[CA].data);for(let wA=0;wA<j.length;wA++){const WA=j[wA].image[CA].image;jA?m&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA+1,0,0,WA.width,WA.height,xA,UA,WA.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA+1,CI,WA.width,WA.height,0,xA,UA,WA.data)}}else{jA?m&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,0,0,0,xA,UA,MA[CA]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,0,CI,xA,UA,MA[CA]);for(let wA=0;wA<j.length;wA++){const SA=j[wA];jA?m&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA+1,0,0,xA,UA,SA.image[CA]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+CA,wA+1,CI,xA,UA,SA.image[CA])}}}h(N)&&D(C.TEXTURE_CUBE_MAP),AA.__version=QA.version,N.onUpdate&&N.onUpdate(N)}d.__version=N.version}function eA(d,N,v,IA,QA,AA){const pA=Q.convert(v.format,v.colorSpace),lA=Q.convert(v.type),yA=G(v.internalFormat,pA,lA,v.colorSpace),QI=g.get(N),oA=g.get(v);if(oA.__renderTarget=N,!QI.__hasExternalTextures){const MA=Math.max(1,N.width>>AA),HA=Math.max(1,N.height>>AA);QA===C.TEXTURE_3D||QA===C.TEXTURE_2D_ARRAY?I.texImage3D(QA,AA,yA,MA,HA,N.depth,0,pA,lA,null):I.texImage2D(QA,AA,yA,MA,HA,0,pA,lA,null)}I.bindFramebuffer(C.FRAMEBUFFER,d),dA(N)?E.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,IA,QA,oA.__webglTexture,0,sA(N)):(QA===C.TEXTURE_2D||QA>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&QA<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,IA,QA,oA.__webglTexture,AA),I.bindFramebuffer(C.FRAMEBUFFER,null)}function tA(d,N,v){if(C.bindRenderbuffer(C.RENDERBUFFER,d),N.depthBuffer){const IA=N.depthTexture,QA=IA&&IA.isDepthTexture?IA.type:null,AA=w(N.stencilBuffer,QA),pA=N.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,lA=sA(N);dA(N)?E.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,lA,AA,N.width,N.height):v?C.renderbufferStorageMultisample(C.RENDERBUFFER,lA,AA,N.width,N.height):C.renderbufferStorage(C.RENDERBUFFER,AA,N.width,N.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,pA,C.RENDERBUFFER,d)}else{const IA=N.textures;for(let QA=0;QA<IA.length;QA++){const AA=IA[QA],pA=Q.convert(AA.format,AA.colorSpace),lA=Q.convert(AA.type),yA=G(AA.internalFormat,pA,lA,AA.colorSpace),QI=sA(N);v&&dA(N)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,QI,yA,N.width,N.height):dA(N)?E.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,QI,yA,N.width,N.height):C.renderbufferStorage(C.RENDERBUFFER,yA,N.width,N.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function BA(d,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(C.FRAMEBUFFER,d),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const IA=g.get(N.depthTexture);IA.__renderTarget=N,(!IA.__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),Z(N.depthTexture,0);const QA=IA.__webglTexture,AA=sA(N);if(N.depthTexture.format===JQ)dA(N)?E.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,QA,0,AA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,QA,0);else if(N.depthTexture.format===TQ)dA(N)?E.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,QA,0,AA):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,QA,0);else throw new Error("Unknown depthTexture format")}function fA(d){const N=g.get(d),v=d.isWebGLCubeRenderTarget===!0;if(N.__boundDepthTexture!==d.depthTexture){const IA=d.depthTexture;if(N.__depthDisposeCallback&&N.__depthDisposeCallback(),IA){const QA=()=>{delete N.__boundDepthTexture,delete N.__depthDisposeCallback,IA.removeEventListener("dispose",QA)};IA.addEventListener("dispose",QA),N.__depthDisposeCallback=QA}N.__boundDepthTexture=IA}if(d.depthTexture&&!N.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");BA(N.__webglFramebuffer,d)}else if(v){N.__webglDepthbuffer=[];for(let IA=0;IA<6;IA++)if(I.bindFramebuffer(C.FRAMEBUFFER,N.__webglFramebuffer[IA]),N.__webglDepthbuffer[IA]===void 0)N.__webglDepthbuffer[IA]=C.createRenderbuffer(),tA(N.__webglDepthbuffer[IA],d,!1);else{const QA=d.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,AA=N.__webglDepthbuffer[IA];C.bindRenderbuffer(C.RENDERBUFFER,AA),C.framebufferRenderbuffer(C.FRAMEBUFFER,QA,C.RENDERBUFFER,AA)}}else if(I.bindFramebuffer(C.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer===void 0)N.__webglDepthbuffer=C.createRenderbuffer(),tA(N.__webglDepthbuffer,d,!1);else{const IA=d.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,QA=N.__webglDepthbuffer;C.bindRenderbuffer(C.RENDERBUFFER,QA),C.framebufferRenderbuffer(C.FRAMEBUFFER,IA,C.RENDERBUFFER,QA)}I.bindFramebuffer(C.FRAMEBUFFER,null)}function TA(d,N,v){const IA=g.get(d);N!==void 0&&eA(IA.__webglFramebuffer,d,d.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),v!==void 0&&fA(d)}function oI(d){const N=d.texture,v=g.get(d),IA=g.get(N);d.addEventListener("dispose",J);const QA=d.textures,AA=d.isWebGLCubeRenderTarget===!0,pA=QA.length>1;if(pA||(IA.__webglTexture===void 0&&(IA.__webglTexture=C.createTexture()),IA.__version=N.version,i.memory.textures++),AA){v.__webglFramebuffer=[];for(let lA=0;lA<6;lA++)if(N.mipmaps&&N.mipmaps.length>0){v.__webglFramebuffer[lA]=[];for(let yA=0;yA<N.mipmaps.length;yA++)v.__webglFramebuffer[lA][yA]=C.createFramebuffer()}else v.__webglFramebuffer[lA]=C.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){v.__webglFramebuffer=[];for(let lA=0;lA<N.mipmaps.length;lA++)v.__webglFramebuffer[lA]=C.createFramebuffer()}else v.__webglFramebuffer=C.createFramebuffer();if(pA)for(let lA=0,yA=QA.length;lA<yA;lA++){const QI=g.get(QA[lA]);QI.__webglTexture===void 0&&(QI.__webglTexture=C.createTexture(),i.memory.textures++)}if(d.samples>0&&dA(d)===!1){v.__webglMultisampledFramebuffer=C.createFramebuffer(),v.__webglColorRenderbuffer=[],I.bindFramebuffer(C.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let lA=0;lA<QA.length;lA++){const yA=QA[lA];v.__webglColorRenderbuffer[lA]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,v.__webglColorRenderbuffer[lA]);const QI=Q.convert(yA.format,yA.colorSpace),oA=Q.convert(yA.type),MA=G(yA.internalFormat,QI,oA,yA.colorSpace,d.isXRRenderTarget===!0),HA=sA(d);C.renderbufferStorageMultisample(C.RENDERBUFFER,HA,MA,d.width,d.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+lA,C.RENDERBUFFER,v.__webglColorRenderbuffer[lA])}C.bindRenderbuffer(C.RENDERBUFFER,null),d.depthBuffer&&(v.__webglDepthRenderbuffer=C.createRenderbuffer(),tA(v.__webglDepthRenderbuffer,d,!0)),I.bindFramebuffer(C.FRAMEBUFFER,null)}}if(AA){I.bindTexture(C.TEXTURE_CUBE_MAP,IA.__webglTexture),GA(C.TEXTURE_CUBE_MAP,N);for(let lA=0;lA<6;lA++)if(N.mipmaps&&N.mipmaps.length>0)for(let yA=0;yA<N.mipmaps.length;yA++)eA(v.__webglFramebuffer[lA][yA],d,N,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+lA,yA);else eA(v.__webglFramebuffer[lA],d,N,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+lA,0);h(N)&&D(C.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(pA){for(let lA=0,yA=QA.length;lA<yA;lA++){const QI=QA[lA],oA=g.get(QI);I.bindTexture(C.TEXTURE_2D,oA.__webglTexture),GA(C.TEXTURE_2D,QI),eA(v.__webglFramebuffer,d,QI,C.COLOR_ATTACHMENT0+lA,C.TEXTURE_2D,0),h(QI)&&D(C.TEXTURE_2D)}I.unbindTexture()}else{let lA=C.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(lA=d.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),I.bindTexture(lA,IA.__webglTexture),GA(lA,N),N.mipmaps&&N.mipmaps.length>0)for(let yA=0;yA<N.mipmaps.length;yA++)eA(v.__webglFramebuffer[yA],d,N,C.COLOR_ATTACHMENT0,lA,yA);else eA(v.__webglFramebuffer,d,N,C.COLOR_ATTACHMENT0,lA,0);h(N)&&D(lA),I.unbindTexture()}d.depthBuffer&&fA(d)}function VA(d){const N=d.textures;for(let v=0,IA=N.length;v<IA;v++){const QA=N[v];if(h(QA)){const AA=k(d),pA=g.get(QA).__webglTexture;I.bindTexture(AA,pA),D(AA),I.unbindTexture()}}}const RI=[],Y=[];function aA(d){if(d.samples>0){if(dA(d)===!1){const N=d.textures,v=d.width,IA=d.height;let QA=C.COLOR_BUFFER_BIT;const AA=d.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,pA=g.get(d),lA=N.length>1;if(lA)for(let yA=0;yA<N.length;yA++)I.bindFramebuffer(C.FRAMEBUFFER,pA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+yA,C.RENDERBUFFER,null),I.bindFramebuffer(C.FRAMEBUFFER,pA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+yA,C.TEXTURE_2D,null,0);I.bindFramebuffer(C.READ_FRAMEBUFFER,pA.__webglMultisampledFramebuffer),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,pA.__webglFramebuffer);for(let yA=0;yA<N.length;yA++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(QA|=C.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(QA|=C.STENCIL_BUFFER_BIT)),lA){C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,pA.__webglColorRenderbuffer[yA]);const QI=g.get(N[yA]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,QI,0)}C.blitFramebuffer(0,0,v,IA,0,0,v,IA,QA,C.NEAREST),t===!0&&(RI.length=0,Y.length=0,RI.push(C.COLOR_ATTACHMENT0+yA),d.depthBuffer&&d.resolveDepthBuffer===!1&&(RI.push(AA),Y.push(AA),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,Y)),C.invalidateFramebuffer(C.READ_FRAMEBUFFER,RI))}if(I.bindFramebuffer(C.READ_FRAMEBUFFER,null),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),lA)for(let yA=0;yA<N.length;yA++){I.bindFramebuffer(C.FRAMEBUFFER,pA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+yA,C.RENDERBUFFER,pA.__webglColorRenderbuffer[yA]);const QI=g.get(N[yA]).__webglTexture;I.bindFramebuffer(C.FRAMEBUFFER,pA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+yA,C.TEXTURE_2D,QI,0)}I.bindFramebuffer(C.DRAW_FRAMEBUFFER,pA.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&t){const N=d.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[N])}}}function sA(d){return Math.min(B.maxSamples,d.samples)}function dA(d){const N=g.get(d);return d.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function nA(d){const N=i.render.frame;e.get(d)!==N&&(e.set(d,N),d.update())}function FA(d,N){const v=d.colorSpace,IA=d.format,QA=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||v!==xQ&&v!==QB&&(tI.getTransfer(v)===hI?(IA!==gC||QA!==_C)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v)),N}function DA(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(o.width=d.naturalWidth||d.width,o.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(o.width=d.displayWidth,o.height=d.displayHeight):(o.width=d.width,o.height=d.height),o}this.allocateTextureUnit=q,this.resetTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=x,this.setTexture3D=P,this.setTextureCube=O,this.rebindTextures=TA,this.setupRenderTarget=oI,this.updateRenderTargetMipmap=VA,this.updateMultisampleRenderTarget=aA,this.setupDepthRenderbuffer=fA,this.setupFrameBufferTexture=eA,this.useMultisampledRTT=dA}function JJ(C,A){function I(g,B=QB){let Q;const i=tI.getTransfer(B);if(g===_C)return C.UNSIGNED_BYTE;if(g===Ys)return C.UNSIGNED_SHORT_4_4_4_4;if(g===fs)return C.UNSIGNED_SHORT_5_5_5_1;if(g===vh)return C.UNSIGNED_INT_5_9_9_9_REV;if(g===_h)return C.BYTE;if(g===Oh)return C.SHORT;if(g===Ui)return C.UNSIGNED_SHORT;if(g===qs)return C.INT;if(g===_B)return C.UNSIGNED_INT;if(g===LC)return C.FLOAT;if(g===Zi)return C.HALF_FLOAT;if(g===Zh)return C.ALPHA;if(g===Wh)return C.RGB;if(g===gC)return C.RGBA;if(g===Ph)return C.LUMINANCE;if(g===Vh)return C.LUMINANCE_ALPHA;if(g===JQ)return C.DEPTH_COMPONENT;if(g===TQ)return C.DEPTH_STENCIL;if(g===jh)return C.RED;if(g===Ls)return C.RED_INTEGER;if(g===Xh)return C.RG;if(g===ms)return C.RG_INTEGER;if(g===Hs)return C.RGBA_INTEGER;if(g===dE||g===RE||g===uE||g===qE)if(i===hI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===dE)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===RE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===uE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===qE)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===dE)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===RE)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===uE)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===qE)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Ce||g===Be||g===Qe||g===ie)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===Ce)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Be)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Qe)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===ie)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Ee||g===te||g===oe)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===Ee||g===te)return i===hI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===oe)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===ee||g===se||g===ae||g===ne||g===De||g===he||g===re||g===ce||g===le||g===Se||g===we||g===Ge||g===ke||g===ye)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===ee)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===se)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===ae)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===ne)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===De)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===he)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===re)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===ce)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===le)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===Se)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===we)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===Ge)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===ke)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===ye)return i===hI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===YE||g===Me||g===Ue)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===YE)return i===hI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Me)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Ue)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===zh||g===Ne||g===Ke||g===Je)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===YE)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===Ne)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Ke)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Je)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===HQ?C.UNSIGNED_INT_24_8:C[g]!==void 0?C[g]:null}return{convert:I}}const FJ={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yE,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yE,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yE,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let B=null,Q=null,i=null;const E=this._targetRay,t=this._grip,o=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(o&&A.hand){i=!0;for(const l of A.hand.values()){const h=I.getJointPose(l,g),D=this._getHandJoint(o,l);h!==null&&(D.matrix.fromArray(h.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=h.radius),D.visible=h!==null}const e=o.joints["index-finger-tip"],s=o.joints["thumb-tip"],a=e.position.distanceTo(s.position),n=.02,c=.005;o.inputState.pinching&&a>n+c?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!o.inputState.pinching&&a<=n-c&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else t!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(t.matrix.fromArray(Q.transform.matrix),t.matrix.decompose(t.position,t.rotation,t.scale),t.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(t.hasLinearVelocity=!0,t.linearVelocity.copy(Q.linearVelocity)):t.hasLinearVelocity=!1,Q.angularVelocity?(t.hasAngularVelocity=!0,t.angularVelocity.copy(Q.angularVelocity)):t.hasAngularVelocity=!1));E!==null&&(B=I.getPose(A.targetRaySpace,g),B===null&&Q!==null&&(B=Q),B!==null&&(E.matrix.fromArray(B.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,B.linearVelocity?(E.hasLinearVelocity=!0,E.linearVelocity.copy(B.linearVelocity)):E.hasLinearVelocity=!1,B.angularVelocity?(E.hasAngularVelocity=!0,E.angularVelocity.copy(B.angularVelocity)):E.hasAngularVelocity=!1,this.dispatchEvent(FJ)))}return E!==null&&(E.visible=B!==null),t!==null&&(t.visible=Q!==null),o!==null&&(o.visible=i!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new yE;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const pJ=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dJ=`
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

}`;class RJ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,I,g){if(this.texture===null){const B=new Kg,Q=A.properties.get(B);Q.__webglTexture=I.texture,(I.depthNear!=g.depthNear||I.depthFar!=g.depthFar)&&(this.depthNear=I.depthNear,this.depthFar=I.depthFar),this.texture=B}}getMesh(A){if(this.texture!==null&&this.mesh===null){const I=A.cameras[0].viewport,g=new lB({vertexShader:pJ,fragmentShader:dJ,uniforms:{depthColor:{value:this.texture},depthWidth:{value:I.z},depthHeight:{value:I.w}}});this.mesh=new Mg(new ft(20,20),g)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uJ extends jB{constructor(A,I){super();const g=this;let B=null,Q=1,i=null,E="local-floor",t=1,o=null,e=null,s=null,a=null,n=null,c=null;const l=new RJ,h=I.getContextAttributes();let D=null,k=null;const G=[],w=[],M=new _A;let U=null;const J=new xg;J.viewport=new LI;const K=new xg;K.viewport=new LI;const y=[J,K],S=new XM;let p=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=G[X];return $===void 0&&($=new No,G[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=G[X];return $===void 0&&($=new No,G[X]=$),$.getGripSpace()},this.getHand=function(X){let $=G[X];return $===void 0&&($=new No,G[X]=$),$.getHandSpace()};function q(X){const $=w.indexOf(X.inputSource);if($===-1)return;const eA=G[$];eA!==void 0&&(eA.update(X.inputSource,X.frame,o||i),eA.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){B.removeEventListener("select",q),B.removeEventListener("selectstart",q),B.removeEventListener("selectend",q),B.removeEventListener("squeeze",q),B.removeEventListener("squeezestart",q),B.removeEventListener("squeezeend",q),B.removeEventListener("end",H),B.removeEventListener("inputsourceschange",Z);for(let X=0;X<G.length;X++){const $=w[X];$!==null&&(w[X]=null,G[X].disconnect($))}p=null,R=null,l.reset(),A.setRenderTarget(D),n=null,a=null,s=null,B=null,k=null,ZA.stop(),g.isPresenting=!1,A.setPixelRatio(U),A.setSize(M.width,M.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){Q=X,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){E=X,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||i},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return a!==null?a:n},this.getBinding=function(){return s},this.getFrame=function(){return c},this.getSession=function(){return B},this.setSession=async function(X){if(B=X,B!==null){if(D=A.getRenderTarget(),B.addEventListener("select",q),B.addEventListener("selectstart",q),B.addEventListener("selectend",q),B.addEventListener("squeeze",q),B.addEventListener("squeezestart",q),B.addEventListener("squeezeend",q),B.addEventListener("end",H),B.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await I.makeXRCompatible(),U=A.getPixelRatio(),A.getSize(M),B.renderState.layers===void 0){const $={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:Q};n=new XRWebGLLayer(B,I,$),B.updateRenderState({baseLayer:n}),A.setPixelRatio(1),A.setSize(n.framebufferWidth,n.framebufferHeight,!1),k=new OB(n.framebufferWidth,n.framebufferHeight,{format:gC,type:_C,colorSpace:A.outputColorSpace,stencilBuffer:h.stencil})}else{let $=null,eA=null,tA=null;h.depth&&(tA=h.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,$=h.stencil?TQ:JQ,eA=h.stencil?HQ:_B);const BA={colorFormat:I.RGBA8,depthFormat:tA,scaleFactor:Q};s=new XRWebGLBinding(B,I),a=s.createProjectionLayer(BA),B.updateRenderState({layers:[a]}),A.setPixelRatio(1),A.setSize(a.textureWidth,a.textureHeight,!1),k=new OB(a.textureWidth,a.textureHeight,{format:gC,type:_C,depthTexture:new sr(a.textureWidth,a.textureHeight,eA,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:h.stencil,colorSpace:A.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:a.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(t),o=null,i=await B.requestReferenceSpace(E),ZA.setContext(B),ZA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(B!==null)return B.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function Z(X){for(let $=0;$<X.removed.length;$++){const eA=X.removed[$],tA=w.indexOf(eA);tA>=0&&(w[tA]=null,G[tA].disconnect(eA))}for(let $=0;$<X.added.length;$++){const eA=X.added[$];let tA=w.indexOf(eA);if(tA===-1){for(let fA=0;fA<G.length;fA++)if(fA>=w.length){w.push(eA),tA=fA;break}else if(w[fA]===null){w[fA]=eA,tA=fA;break}if(tA===-1)break}const BA=G[tA];BA&&BA.connect(eA)}}const x=new _,P=new _;function O(X,$,eA){x.setFromMatrixPosition($.matrixWorld),P.setFromMatrixPosition(eA.matrixWorld);const tA=x.distanceTo(P),BA=$.projectionMatrix.elements,fA=eA.projectionMatrix.elements,TA=BA[14]/(BA[10]-1),oI=BA[14]/(BA[10]+1),VA=(BA[9]+1)/BA[5],RI=(BA[9]-1)/BA[5],Y=(BA[8]-1)/BA[0],aA=(fA[8]+1)/fA[0],sA=TA*Y,dA=TA*aA,nA=tA/(-Y+aA),FA=nA*-Y;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(FA),X.translateZ(nA),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),BA[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const DA=TA+nA,d=oI+nA,N=sA-FA,v=dA+(tA-FA),IA=VA*oI/d*DA,QA=RI*oI/d*DA;X.projectionMatrix.makePerspective(N,v,IA,QA,DA,d),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function z(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(B===null)return;let $=X.near,eA=X.far;l.texture!==null&&(l.depthNear>0&&($=l.depthNear),l.depthFar>0&&(eA=l.depthFar)),S.near=K.near=J.near=$,S.far=K.far=J.far=eA,(p!==S.near||R!==S.far)&&(B.updateRenderState({depthNear:S.near,depthFar:S.far}),p=S.near,R=S.far),J.layers.mask=X.layers.mask|2,K.layers.mask=X.layers.mask|4,S.layers.mask=J.layers.mask|K.layers.mask;const tA=X.parent,BA=S.cameras;z(S,tA);for(let fA=0;fA<BA.length;fA++)z(BA[fA],tA);BA.length===2?O(S,J,K):S.projectionMatrix.copy(J.projectionMatrix),gA(X,S,tA)};function gA(X,$,eA){eA===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(eA.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ni*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(a===null&&n===null))return t},this.setFoveation=function(X){t=X,a!==null&&(a.fixedFoveation=X),n!==null&&n.fixedFoveation!==void 0&&(n.fixedFoveation=X)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(S)};let iA=null;function GA(X,$){if(e=$.getViewerPose(o||i),c=$,e!==null){const eA=e.views;n!==null&&(A.setRenderTargetFramebuffer(k,n.framebuffer),A.setRenderTarget(k));let tA=!1;eA.length!==S.cameras.length&&(S.cameras.length=0,tA=!0);for(let fA=0;fA<eA.length;fA++){const TA=eA[fA];let oI=null;if(n!==null)oI=n.getViewport(TA);else{const RI=s.getViewSubImage(a,TA);oI=RI.viewport,fA===0&&(A.setRenderTargetTextures(k,RI.colorTexture,a.ignoreDepthValues?void 0:RI.depthStencilTexture),A.setRenderTarget(k))}let VA=y[fA];VA===void 0&&(VA=new xg,VA.layers.enable(fA),VA.viewport=new LI,y[fA]=VA),VA.matrix.fromArray(TA.transform.matrix),VA.matrix.decompose(VA.position,VA.quaternion,VA.scale),VA.projectionMatrix.fromArray(TA.projectionMatrix),VA.projectionMatrixInverse.copy(VA.projectionMatrix).invert(),VA.viewport.set(oI.x,oI.y,oI.width,oI.height),fA===0&&(S.matrix.copy(VA.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),tA===!0&&S.cameras.push(VA)}const BA=B.enabledFeatures;if(BA&&BA.includes("depth-sensing")){const fA=s.getDepthInformation(eA[0]);fA&&fA.isValid&&fA.texture&&l.init(A,fA,B.renderState)}}for(let eA=0;eA<G.length;eA++){const tA=w[eA],BA=G[eA];tA!==null&&BA!==void 0&&BA.update(tA,$,o||i)}iA&&iA(X,$),$.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:$}),c=null}const ZA=new Dr;ZA.setAnimationLoop(GA),this.setAnimationLoop=function(X){iA=X},this.dispose=function(){}}}const pB=new oC,qJ=new dI;function YJ(C,A){function I(h,D){h.matrixAutoUpdate===!0&&h.updateMatrix(),D.value.copy(h.matrix)}function g(h,D){D.color.getRGB(h.fogColor.value,Er(C)),D.isFog?(h.fogNear.value=D.near,h.fogFar.value=D.far):D.isFogExp2&&(h.fogDensity.value=D.density)}function B(h,D,k,G,w){D.isMeshBasicMaterial||D.isMeshLambertMaterial?Q(h,D):D.isMeshToonMaterial?(Q(h,D),s(h,D)):D.isMeshPhongMaterial?(Q(h,D),e(h,D)):D.isMeshStandardMaterial?(Q(h,D),a(h,D),D.isMeshPhysicalMaterial&&n(h,D,w)):D.isMeshMatcapMaterial?(Q(h,D),c(h,D)):D.isMeshDepthMaterial?Q(h,D):D.isMeshDistanceMaterial?(Q(h,D),l(h,D)):D.isMeshNormalMaterial?Q(h,D):D.isLineBasicMaterial?(i(h,D),D.isLineDashedMaterial&&E(h,D)):D.isPointsMaterial?t(h,D,k,G):D.isSpriteMaterial?o(h,D):D.isShadowMaterial?(h.color.value.copy(D.color),h.opacity.value=D.opacity):D.isShaderMaterial&&(D.uniformsNeedUpdate=!1)}function Q(h,D){h.opacity.value=D.opacity,D.color&&h.diffuse.value.copy(D.color),D.emissive&&h.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity),D.map&&(h.map.value=D.map,I(D.map,h.mapTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.bumpMap&&(h.bumpMap.value=D.bumpMap,I(D.bumpMap,h.bumpMapTransform),h.bumpScale.value=D.bumpScale,D.side===Ng&&(h.bumpScale.value*=-1)),D.normalMap&&(h.normalMap.value=D.normalMap,I(D.normalMap,h.normalMapTransform),h.normalScale.value.copy(D.normalScale),D.side===Ng&&h.normalScale.value.negate()),D.displacementMap&&(h.displacementMap.value=D.displacementMap,I(D.displacementMap,h.displacementMapTransform),h.displacementScale.value=D.displacementScale,h.displacementBias.value=D.displacementBias),D.emissiveMap&&(h.emissiveMap.value=D.emissiveMap,I(D.emissiveMap,h.emissiveMapTransform)),D.specularMap&&(h.specularMap.value=D.specularMap,I(D.specularMap,h.specularMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest);const k=A.get(D),G=k.envMap,w=k.envMapRotation;G&&(h.envMap.value=G,pB.copy(w),pB.x*=-1,pB.y*=-1,pB.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(pB.y*=-1,pB.z*=-1),h.envMapRotation.value.setFromMatrix4(qJ.makeRotationFromEuler(pB)),h.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=D.reflectivity,h.ior.value=D.ior,h.refractionRatio.value=D.refractionRatio),D.lightMap&&(h.lightMap.value=D.lightMap,h.lightMapIntensity.value=D.lightMapIntensity,I(D.lightMap,h.lightMapTransform)),D.aoMap&&(h.aoMap.value=D.aoMap,h.aoMapIntensity.value=D.aoMapIntensity,I(D.aoMap,h.aoMapTransform))}function i(h,D){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,D.map&&(h.map.value=D.map,I(D.map,h.mapTransform))}function E(h,D){h.dashSize.value=D.dashSize,h.totalSize.value=D.dashSize+D.gapSize,h.scale.value=D.scale}function t(h,D,k,G){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,h.size.value=D.size*k,h.scale.value=G*.5,D.map&&(h.map.value=D.map,I(D.map,h.uvTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest)}function o(h,D){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,h.rotation.value=D.rotation,D.map&&(h.map.value=D.map,I(D.map,h.mapTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest)}function e(h,D){h.specular.value.copy(D.specular),h.shininess.value=Math.max(D.shininess,1e-4)}function s(h,D){D.gradientMap&&(h.gradientMap.value=D.gradientMap)}function a(h,D){h.metalness.value=D.metalness,D.metalnessMap&&(h.metalnessMap.value=D.metalnessMap,I(D.metalnessMap,h.metalnessMapTransform)),h.roughness.value=D.roughness,D.roughnessMap&&(h.roughnessMap.value=D.roughnessMap,I(D.roughnessMap,h.roughnessMapTransform)),D.envMap&&(h.envMapIntensity.value=D.envMapIntensity)}function n(h,D,k){h.ior.value=D.ior,D.sheen>0&&(h.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),h.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap&&(h.sheenColorMap.value=D.sheenColorMap,I(D.sheenColorMap,h.sheenColorMapTransform)),D.sheenRoughnessMap&&(h.sheenRoughnessMap.value=D.sheenRoughnessMap,I(D.sheenRoughnessMap,h.sheenRoughnessMapTransform))),D.clearcoat>0&&(h.clearcoat.value=D.clearcoat,h.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap&&(h.clearcoatMap.value=D.clearcoatMap,I(D.clearcoatMap,h.clearcoatMapTransform)),D.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,I(D.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),D.clearcoatNormalMap&&(h.clearcoatNormalMap.value=D.clearcoatNormalMap,I(D.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===Ng&&h.clearcoatNormalScale.value.negate())),D.dispersion>0&&(h.dispersion.value=D.dispersion),D.iridescence>0&&(h.iridescence.value=D.iridescence,h.iridescenceIOR.value=D.iridescenceIOR,h.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap&&(h.iridescenceMap.value=D.iridescenceMap,I(D.iridescenceMap,h.iridescenceMapTransform)),D.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=D.iridescenceThicknessMap,I(D.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),D.transmission>0&&(h.transmission.value=D.transmission,h.transmissionSamplerMap.value=k.texture,h.transmissionSamplerSize.value.set(k.width,k.height),D.transmissionMap&&(h.transmissionMap.value=D.transmissionMap,I(D.transmissionMap,h.transmissionMapTransform)),h.thickness.value=D.thickness,D.thicknessMap&&(h.thicknessMap.value=D.thicknessMap,I(D.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=D.attenuationDistance,h.attenuationColor.value.copy(D.attenuationColor)),D.anisotropy>0&&(h.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap&&(h.anisotropyMap.value=D.anisotropyMap,I(D.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=D.specularIntensity,h.specularColor.value.copy(D.specularColor),D.specularColorMap&&(h.specularColorMap.value=D.specularColorMap,I(D.specularColorMap,h.specularColorMapTransform)),D.specularIntensityMap&&(h.specularIntensityMap.value=D.specularIntensityMap,I(D.specularIntensityMap,h.specularIntensityMapTransform))}function c(h,D){D.matcap&&(h.matcap.value=D.matcap)}function l(h,D){const k=A.get(D).light;h.referencePosition.value.setFromMatrixPosition(k.matrixWorld),h.nearDistance.value=k.shadow.camera.near,h.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:B}}function fJ(C,A,I,g){let B={},Q={},i=[];const E=C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS);function t(k,G){const w=G.program;g.uniformBlockBinding(k,w)}function o(k,G){let w=B[k.id];w===void 0&&(c(k),w=e(k),B[k.id]=w,k.addEventListener("dispose",h));const M=G.program;g.updateUBOMapping(k,M);const U=A.render.frame;Q[k.id]!==U&&(a(k),Q[k.id]=U)}function e(k){const G=s();k.__bindingPointIndex=G;const w=C.createBuffer(),M=k.__size,U=k.usage;return C.bindBuffer(C.UNIFORM_BUFFER,w),C.bufferData(C.UNIFORM_BUFFER,M,U),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,G,w),w}function s(){for(let k=0;k<E;k++)if(i.indexOf(k)===-1)return i.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function a(k){const G=B[k.id],w=k.uniforms,M=k.__cache;C.bindBuffer(C.UNIFORM_BUFFER,G);for(let U=0,J=w.length;U<J;U++){const K=Array.isArray(w[U])?w[U]:[w[U]];for(let y=0,S=K.length;y<S;y++){const p=K[y];if(n(p,U,y,M)===!0){const R=p.__offset,q=Array.isArray(p.value)?p.value:[p.value];let H=0;for(let Z=0;Z<q.length;Z++){const x=q[Z],P=l(x);typeof x=="number"||typeof x=="boolean"?(p.__data[0]=x,C.bufferSubData(C.UNIFORM_BUFFER,R+H,p.__data)):x.isMatrix3?(p.__data[0]=x.elements[0],p.__data[1]=x.elements[1],p.__data[2]=x.elements[2],p.__data[3]=0,p.__data[4]=x.elements[3],p.__data[5]=x.elements[4],p.__data[6]=x.elements[5],p.__data[7]=0,p.__data[8]=x.elements[6],p.__data[9]=x.elements[7],p.__data[10]=x.elements[8],p.__data[11]=0):(x.toArray(p.__data,H),H+=P.storage/Float32Array.BYTES_PER_ELEMENT)}C.bufferSubData(C.UNIFORM_BUFFER,R,p.__data)}}}C.bindBuffer(C.UNIFORM_BUFFER,null)}function n(k,G,w,M){const U=k.value,J=G+"_"+w;if(M[J]===void 0)return typeof U=="number"||typeof U=="boolean"?M[J]=U:M[J]=U.clone(),!0;{const K=M[J];if(typeof U=="number"||typeof U=="boolean"){if(K!==U)return M[J]=U,!0}else if(K.equals(U)===!1)return K.copy(U),!0}return!1}function c(k){const G=k.uniforms;let w=0;const M=16;for(let J=0,K=G.length;J<K;J++){const y=Array.isArray(G[J])?G[J]:[G[J]];for(let S=0,p=y.length;S<p;S++){const R=y[S],q=Array.isArray(R.value)?R.value:[R.value];for(let H=0,Z=q.length;H<Z;H++){const x=q[H],P=l(x),O=w%M,z=O%P.boundary,gA=O+z;w+=z,gA!==0&&M-gA<P.storage&&(w+=M-gA),R.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=P.storage}}}const U=w%M;return U>0&&(w+=M-U),k.__size=w,k.__cache={},this}function l(k){const G={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(G.boundary=4,G.storage=4):k.isVector2?(G.boundary=8,G.storage=8):k.isVector3||k.isColor?(G.boundary=16,G.storage=12):k.isVector4?(G.boundary=16,G.storage=16):k.isMatrix3?(G.boundary=48,G.storage=48):k.isMatrix4?(G.boundary=64,G.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),G}function h(k){const G=k.target;G.removeEventListener("dispose",h);const w=i.indexOf(G.__bindingPointIndex);i.splice(w,1),C.deleteBuffer(B[G.id]),delete B[G.id],delete Q[G.id]}function D(){for(const k in B)C.deleteBuffer(B[k]);i=[],B={},Q={}}return{bind:t,update:o,dispose:D}}class LJ{constructor(A={}){const{canvas:I=aM(),context:g=null,depth:B=!0,stencil:Q=!1,alpha:i=!1,antialias:E=!1,premultipliedAlpha:t=!0,preserveDrawingBuffer:o=!1,powerPreference:e="default",failIfMajorPerformanceCaveat:s=!1,reverseDepthBuffer:a=!1}=A;this.isWebGLRenderer=!0;let n;if(g!==null){if(typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");n=g.getContextAttributes().alpha}else n=i;const c=new Uint32Array(4),l=new Int32Array(4);let h=null,D=null;const k=[],G=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tg,this.toneMapping=eB,this.toneMappingExposure=1;const w=this;let M=!1,U=0,J=0,K=null,y=-1,S=null;const p=new LI,R=new LI;let q=null;const H=new gI(0);let Z=0,x=I.width,P=I.height,O=1,z=null,gA=null;const iA=new LI(0,0,x,P),GA=new LI(0,0,x,P);let ZA=!1;const X=new _s;let $=!1,eA=!1;const tA=new dI,BA=new dI,fA=new _,TA=new LI,oI={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let VA=!1;function RI(){return K===null?O:1}let Y=g;function aA(F,T){return I.getContext(F,T)}try{const F={alpha:!0,depth:B,stencil:Q,antialias:E,premultipliedAlpha:t,preserveDrawingBuffer:o,powerPreference:e,failIfMajorPerformanceCaveat:s};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${Rs}`),I.addEventListener("webglcontextlost",CA,!1),I.addEventListener("webglcontextrestored",wA,!1),I.addEventListener("webglcontextcreationerror",SA,!1),Y===null){const T="webgl2";if(Y=aA(T,F),Y===null)throw aA(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let sA,dA,nA,FA,DA,d,N,v,IA,QA,AA,pA,lA,yA,QI,oA,MA,HA,xA,UA,CI,jA,GI,m;function rA(){sA=new Z0(Y),sA.init(),jA=new JJ(Y,sA),dA=new T0(Y,sA,A,jA),nA=new NJ(Y,sA),dA.reverseDepthBuffer&&a&&nA.buffers.depth.setReversed(!0),FA=new V0(Y),DA=new nJ,d=new KJ(Y,sA,nA,DA,dA,jA,FA),N=new b0(w),v=new v0(w),IA=new gU(Y),GI=new m0(Y,IA),QA=new W0(Y,IA,FA,GI),AA=new X0(Y,QA,IA,FA),xA=new j0(Y,dA,d),oA=new x0(DA),pA=new aJ(w,N,v,sA,dA,GI,oA),lA=new YJ(w,DA),yA=new hJ,QI=new GJ(sA),HA=new L0(w,N,v,nA,AA,n,t),MA=new MJ(w,AA,dA),m=new fJ(Y,FA,dA,nA),UA=new H0(Y,sA,FA),CI=new P0(Y,sA,FA),FA.programs=pA.programs,w.capabilities=dA,w.extensions=sA,w.properties=DA,w.renderLists=yA,w.shadowMap=MA,w.state=nA,w.info=FA}rA();const j=new uJ(w,Y);this.xr=j,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const F=sA.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=sA.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(F){F!==void 0&&(O=F,this.setSize(x,P,!1))},this.getSize=function(F){return F.set(x,P)},this.setSize=function(F,T,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}x=F,P=T,I.width=Math.floor(F*O),I.height=Math.floor(T*O),W===!0&&(I.style.width=F+"px",I.style.height=T+"px"),this.setViewport(0,0,F,T)},this.getDrawingBufferSize=function(F){return F.set(x*O,P*O).floor()},this.setDrawingBufferSize=function(F,T,W){x=F,P=T,O=W,I.width=Math.floor(F*W),I.height=Math.floor(T*W),this.setViewport(0,0,F,T)},this.getCurrentViewport=function(F){return F.copy(p)},this.getViewport=function(F){return F.copy(iA)},this.setViewport=function(F,T,W,V){F.isVector4?iA.set(F.x,F.y,F.z,F.w):iA.set(F,T,W,V),nA.viewport(p.copy(iA).multiplyScalar(O).round())},this.getScissor=function(F){return F.copy(GA)},this.setScissor=function(F,T,W,V){F.isVector4?GA.set(F.x,F.y,F.z,F.w):GA.set(F,T,W,V),nA.scissor(R.copy(GA).multiplyScalar(O).round())},this.getScissorTest=function(){return ZA},this.setScissorTest=function(F){nA.setScissorTest(ZA=F)},this.setOpaqueSort=function(F){z=F},this.setTransparentSort=function(F){gA=F},this.getClearColor=function(F){return F.copy(HA.getClearColor())},this.setClearColor=function(){HA.setClearColor.apply(HA,arguments)},this.getClearAlpha=function(){return HA.getClearAlpha()},this.setClearAlpha=function(){HA.setClearAlpha.apply(HA,arguments)},this.clear=function(F=!0,T=!0,W=!0){let V=0;if(F){let b=!1;if(K!==null){const EA=K.texture.format;b=EA===Hs||EA===ms||EA===Ls}if(b){const EA=K.texture.type,cA=EA===_C||EA===_B||EA===Ui||EA===HQ||EA===Ys||EA===fs,kA=HA.getClearColor(),JA=HA.getClearAlpha(),bA=kA.r,OA=kA.g,RA=kA.b;cA?(c[0]=bA,c[1]=OA,c[2]=RA,c[3]=JA,Y.clearBufferuiv(Y.COLOR,0,c)):(l[0]=bA,l[1]=OA,l[2]=RA,l[3]=JA,Y.clearBufferiv(Y.COLOR,0,l))}else V|=Y.COLOR_BUFFER_BIT}T&&(V|=Y.DEPTH_BUFFER_BIT),W&&(V|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",CA,!1),I.removeEventListener("webglcontextrestored",wA,!1),I.removeEventListener("webglcontextcreationerror",SA,!1),HA.dispose(),yA.dispose(),QI.dispose(),DA.dispose(),N.dispose(),v.dispose(),AA.dispose(),GI.dispose(),m.dispose(),pA.dispose(),j.dispose(),j.removeEventListener("sessionstart",ca),j.removeEventListener("sessionend",la),yB.stop()};function CA(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wA(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const F=FA.autoReset,T=MA.enabled,W=MA.autoUpdate,V=MA.needsUpdate,b=MA.type;rA(),FA.autoReset=F,MA.enabled=T,MA.autoUpdate=W,MA.needsUpdate=V,MA.type=b}function SA(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function WA(F){const T=F.target;T.removeEventListener("dispose",WA),qI(T)}function qI(F){tg(F),DA.remove(F)}function tg(F){const T=DA.get(F).programs;T!==void 0&&(T.forEach(function(W){pA.releaseProgram(W)}),F.isShaderMaterial&&pA.releaseShaderCache(F))}this.renderBufferDirect=function(F,T,W,V,b,EA){T===null&&(T=oI);const cA=b.isMesh&&b.matrixWorld.determinant()<0,kA=Ec(F,T,W,V,b);nA.setMaterial(V,cA);let JA=W.index,bA=1;if(V.wireframe===!0){if(JA=QA.getWireframeAttribute(W),JA===void 0)return;bA=2}const OA=W.drawRange,RA=W.attributes.position;let iI=OA.start*bA,eI=(OA.start+OA.count)*bA;EA!==null&&(iI=Math.max(iI,EA.start*bA),eI=Math.min(eI,(EA.start+EA.count)*bA)),JA!==null?(iI=Math.max(iI,0),eI=Math.min(eI,JA.count)):RA!=null&&(iI=Math.max(iI,0),eI=Math.min(eI,RA.count));const xI=eI-iI;if(xI<0||xI===1/0)return;GI.setup(b,V,kA,W,JA);let YI,EI=UA;if(JA!==null&&(YI=IA.get(JA),EI=CI,EI.setIndex(YI)),b.isMesh)V.wireframe===!0?(nA.setLineWidth(V.wireframeLinewidth*RI()),EI.setMode(Y.LINES)):EI.setMode(Y.TRIANGLES);else if(b.isLine){let uA=V.linewidth;uA===void 0&&(uA=1),nA.setLineWidth(uA*RI()),b.isLineSegments?EI.setMode(Y.LINES):b.isLineLoop?EI.setMode(Y.LINE_LOOP):EI.setMode(Y.LINE_STRIP)}else b.isPoints?EI.setMode(Y.POINTS):b.isSprite&&EI.setMode(Y.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)EI.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(sA.get("WEBGL_multi_draw"))EI.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const uA=b._multiDrawStarts,Bg=b._multiDrawCounts,sI=b._multiDrawCount,Zg=JA?IA.get(JA).bytesPerElement:1,zB=DA.get(V).currentProgram.getUniforms();for(let Fg=0;Fg<sI;Fg++)zB.setValue(Y,"_gl_DrawID",Fg),EI.render(uA[Fg]/Zg,Bg[Fg])}else if(b.isInstancedMesh)EI.renderInstances(iI,xI,b.count);else if(W.isInstancedBufferGeometry){const uA=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Bg=Math.min(W.instanceCount,uA);EI.renderInstances(iI,xI,Bg)}else EI.render(iI,xI)};function nI(F,T,W){F.transparent===!0&&F.side===fC&&F.forceSinglePass===!1?(F.side=Ng,F.needsUpdate=!0,zi(F,T,W),F.side=hB,F.needsUpdate=!0,zi(F,T,W),F.side=fC):zi(F,T,W)}this.compile=function(F,T,W=null){W===null&&(W=F),D=QI.get(W),D.init(T),G.push(D),W.traverseVisible(function(b){b.isLight&&b.layers.test(T.layers)&&(D.pushLight(b),b.castShadow&&D.pushShadow(b))}),F!==W&&F.traverseVisible(function(b){b.isLight&&b.layers.test(T.layers)&&(D.pushLight(b),b.castShadow&&D.pushShadow(b))}),D.setupLights();const V=new Set;return F.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const EA=b.material;if(EA)if(Array.isArray(EA))for(let cA=0;cA<EA.length;cA++){const kA=EA[cA];nI(kA,W,b),V.add(kA)}else nI(EA,W,b),V.add(EA)}),G.pop(),D=null,V},this.compileAsync=function(F,T,W=null){const V=this.compile(F,T,W);return new Promise(b=>{function EA(){if(V.forEach(function(cA){DA.get(cA).currentProgram.isReady()&&V.delete(cA)}),V.size===0){b(F);return}setTimeout(EA,10)}sA.get("KHR_parallel_shader_compile")!==null?EA():setTimeout(EA,10)})};let vg=null;function UC(F){vg&&vg(F)}function ca(){yB.stop()}function la(){yB.start()}const yB=new Dr;yB.setAnimationLoop(UC),typeof self<"u"&&yB.setContext(self),this.setAnimationLoop=function(F){vg=F,j.setAnimationLoop(F),F===null?yB.stop():yB.start()},j.addEventListener("sessionstart",ca),j.addEventListener("sessionend",la),this.render=function(F,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(T),T=j.getCamera()),F.isScene===!0&&F.onBeforeRender(w,F,T,K),D=QI.get(F,G.length),D.init(T),G.push(D),BA.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),X.setFromProjectionMatrix(BA),eA=this.localClippingEnabled,$=oA.init(this.clippingPlanes,eA),h=yA.get(F,k.length),h.init(),k.push(h),j.enabled===!0&&j.isPresenting===!0){const EA=w.xr.getDepthSensingMesh();EA!==null&&Wt(EA,T,-1/0,w.sortObjects)}Wt(F,T,0,w.sortObjects),h.finish(),w.sortObjects===!0&&h.sort(z,gA),VA=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,VA&&HA.addToRenderList(h,F),this.info.render.frame++,$===!0&&oA.beginShadows();const W=D.state.shadowsArray;MA.render(W,F,T),$===!0&&oA.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=h.opaque,b=h.transmissive;if(D.setupLights(),T.isArrayCamera){const EA=T.cameras;if(b.length>0)for(let cA=0,kA=EA.length;cA<kA;cA++){const JA=EA[cA];wa(V,b,F,JA)}VA&&HA.render(F);for(let cA=0,kA=EA.length;cA<kA;cA++){const JA=EA[cA];Sa(h,F,JA,JA.viewport)}}else b.length>0&&wa(V,b,F,T),VA&&HA.render(F),Sa(h,F,T);K!==null&&(d.updateMultisampleRenderTarget(K),d.updateRenderTargetMipmap(K)),F.isScene===!0&&F.onAfterRender(w,F,T),GI.resetDefaultState(),y=-1,S=null,G.pop(),G.length>0?(D=G[G.length-1],$===!0&&oA.setGlobalState(w.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?h=k[k.length-1]:h=null};function Wt(F,T,W,V){if(F.visible===!1)return;if(F.layers.test(T.layers)){if(F.isGroup)W=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(T);else if(F.isLight)D.pushLight(F),F.castShadow&&D.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||X.intersectsSprite(F)){V&&TA.setFromMatrixPosition(F.matrixWorld).applyMatrix4(BA);const cA=AA.update(F),kA=F.material;kA.visible&&h.push(F,cA,kA,W,TA.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||X.intersectsObject(F))){const cA=AA.update(F),kA=F.material;if(V&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),TA.copy(F.boundingSphere.center)):(cA.boundingSphere===null&&cA.computeBoundingSphere(),TA.copy(cA.boundingSphere.center)),TA.applyMatrix4(F.matrixWorld).applyMatrix4(BA)),Array.isArray(kA)){const JA=cA.groups;for(let bA=0,OA=JA.length;bA<OA;bA++){const RA=JA[bA],iI=kA[RA.materialIndex];iI&&iI.visible&&h.push(F,cA,iI,W,TA.z,RA)}}else kA.visible&&h.push(F,cA,kA,W,TA.z,null)}}const EA=F.children;for(let cA=0,kA=EA.length;cA<kA;cA++)Wt(EA[cA],T,W,V)}function Sa(F,T,W,V){const b=F.opaque,EA=F.transmissive,cA=F.transparent;D.setupLightsView(W),$===!0&&oA.setGlobalState(w.clippingPlanes,W),V&&nA.viewport(p.copy(V)),b.length>0&&Xi(b,T,W),EA.length>0&&Xi(EA,T,W),cA.length>0&&Xi(cA,T,W),nA.buffers.depth.setTest(!0),nA.buffers.depth.setMask(!0),nA.buffers.color.setMask(!0),nA.setPolygonOffset(!1)}function wa(F,T,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[V.id]===void 0&&(D.state.transmissionRenderTarget[V.id]=new OB(1,1,{generateMipmaps:!0,type:sA.has("EXT_color_buffer_half_float")||sA.has("EXT_color_buffer_float")?Zi:_C,minFilter:LB,samples:4,stencilBuffer:Q,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tI.workingColorSpace}));const EA=D.state.transmissionRenderTarget[V.id],cA=V.viewport||p;EA.setSize(cA.z,cA.w);const kA=w.getRenderTarget();w.setRenderTarget(EA),w.getClearColor(H),Z=w.getClearAlpha(),Z<1&&w.setClearColor(16777215,.5),w.clear(),VA&&HA.render(W);const JA=w.toneMapping;w.toneMapping=eB;const bA=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),D.setupLightsView(V),$===!0&&oA.setGlobalState(w.clippingPlanes,V),Xi(F,W,V),d.updateMultisampleRenderTarget(EA),d.updateRenderTargetMipmap(EA),sA.has("WEBGL_multisampled_render_to_texture")===!1){let OA=!1;for(let RA=0,iI=T.length;RA<iI;RA++){const eI=T[RA],xI=eI.object,YI=eI.geometry,EI=eI.material,uA=eI.group;if(EI.side===fC&&xI.layers.test(V.layers)){const Bg=EI.side;EI.side=Ng,EI.needsUpdate=!0,Ga(xI,W,V,YI,EI,uA),EI.side=Bg,EI.needsUpdate=!0,OA=!0}}OA===!0&&(d.updateMultisampleRenderTarget(EA),d.updateRenderTargetMipmap(EA))}w.setRenderTarget(kA),w.setClearColor(H,Z),bA!==void 0&&(V.viewport=bA),w.toneMapping=JA}function Xi(F,T,W){const V=T.isScene===!0?T.overrideMaterial:null;for(let b=0,EA=F.length;b<EA;b++){const cA=F[b],kA=cA.object,JA=cA.geometry,bA=V===null?cA.material:V,OA=cA.group;kA.layers.test(W.layers)&&Ga(kA,T,W,JA,bA,OA)}}function Ga(F,T,W,V,b,EA){F.onBeforeRender(w,T,W,V,b,EA),F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),b.onBeforeRender(w,T,W,V,F,EA),b.transparent===!0&&b.side===fC&&b.forceSinglePass===!1?(b.side=Ng,b.needsUpdate=!0,w.renderBufferDirect(W,T,V,b,F,EA),b.side=hB,b.needsUpdate=!0,w.renderBufferDirect(W,T,V,b,F,EA),b.side=fC):w.renderBufferDirect(W,T,V,b,F,EA),F.onAfterRender(w,T,W,V,b,EA)}function zi(F,T,W){T.isScene!==!0&&(T=oI);const V=DA.get(F),b=D.state.lights,EA=D.state.shadowsArray,cA=b.state.version,kA=pA.getParameters(F,b.state,EA,T,W),JA=pA.getProgramCacheKey(kA);let bA=V.programs;V.environment=F.isMeshStandardMaterial?T.environment:null,V.fog=T.fog,V.envMap=(F.isMeshStandardMaterial?v:N).get(F.envMap||V.environment),V.envMapRotation=V.environment!==null&&F.envMap===null?T.environmentRotation:F.envMapRotation,bA===void 0&&(F.addEventListener("dispose",WA),bA=new Map,V.programs=bA);let OA=bA.get(JA);if(OA!==void 0){if(V.currentProgram===OA&&V.lightsStateVersion===cA)return ya(F,kA),OA}else kA.uniforms=pA.getUniforms(F),F.onBeforeCompile(kA,w),OA=pA.acquireProgram(kA,JA),bA.set(JA,OA),V.uniforms=kA.uniforms;const RA=V.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(RA.clippingPlanes=oA.uniform),ya(F,kA),V.needsLights=oc(F),V.lightsStateVersion=cA,V.needsLights&&(RA.ambientLightColor.value=b.state.ambient,RA.lightProbe.value=b.state.probe,RA.directionalLights.value=b.state.directional,RA.directionalLightShadows.value=b.state.directionalShadow,RA.spotLights.value=b.state.spot,RA.spotLightShadows.value=b.state.spotShadow,RA.rectAreaLights.value=b.state.rectArea,RA.ltc_1.value=b.state.rectAreaLTC1,RA.ltc_2.value=b.state.rectAreaLTC2,RA.pointLights.value=b.state.point,RA.pointLightShadows.value=b.state.pointShadow,RA.hemisphereLights.value=b.state.hemi,RA.directionalShadowMap.value=b.state.directionalShadowMap,RA.directionalShadowMatrix.value=b.state.directionalShadowMatrix,RA.spotShadowMap.value=b.state.spotShadowMap,RA.spotLightMatrix.value=b.state.spotLightMatrix,RA.spotLightMap.value=b.state.spotLightMap,RA.pointShadowMap.value=b.state.pointShadowMap,RA.pointShadowMatrix.value=b.state.pointShadowMatrix),V.currentProgram=OA,V.uniformsList=null,OA}function ka(F){if(F.uniformsList===null){const T=F.currentProgram.getUniforms();F.uniformsList=fE.seqWithValue(T.seq,F.uniforms)}return F.uniformsList}function ya(F,T){const W=DA.get(F);W.outputColorSpace=T.outputColorSpace,W.batching=T.batching,W.batchingColor=T.batchingColor,W.instancing=T.instancing,W.instancingColor=T.instancingColor,W.instancingMorph=T.instancingMorph,W.skinning=T.skinning,W.morphTargets=T.morphTargets,W.morphNormals=T.morphNormals,W.morphColors=T.morphColors,W.morphTargetsCount=T.morphTargetsCount,W.numClippingPlanes=T.numClippingPlanes,W.numIntersection=T.numClipIntersection,W.vertexAlphas=T.vertexAlphas,W.vertexTangents=T.vertexTangents,W.toneMapping=T.toneMapping}function Ec(F,T,W,V,b){T.isScene!==!0&&(T=oI),d.resetTextureUnits();const EA=T.fog,cA=V.isMeshStandardMaterial?T.environment:null,kA=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xQ,JA=(V.isMeshStandardMaterial?v:N).get(V.envMap||cA),bA=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,OA=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),RA=!!W.morphAttributes.position,iI=!!W.morphAttributes.normal,eI=!!W.morphAttributes.color;let xI=eB;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(xI=w.toneMapping);const YI=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,EI=YI!==void 0?YI.length:0,uA=DA.get(V),Bg=D.state.lights;if($===!0&&(eA===!0||F!==S)){const Dg=F===S&&V.id===y;oA.setState(V,F,Dg)}let sI=!1;V.version===uA.__version?(uA.needsLights&&uA.lightsStateVersion!==Bg.state.version||uA.outputColorSpace!==kA||b.isBatchedMesh&&uA.batching===!1||!b.isBatchedMesh&&uA.batching===!0||b.isBatchedMesh&&uA.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&uA.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&uA.instancing===!1||!b.isInstancedMesh&&uA.instancing===!0||b.isSkinnedMesh&&uA.skinning===!1||!b.isSkinnedMesh&&uA.skinning===!0||b.isInstancedMesh&&uA.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&uA.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&uA.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&uA.instancingMorph===!1&&b.morphTexture!==null||uA.envMap!==JA||V.fog===!0&&uA.fog!==EA||uA.numClippingPlanes!==void 0&&(uA.numClippingPlanes!==oA.numPlanes||uA.numIntersection!==oA.numIntersection)||uA.vertexAlphas!==bA||uA.vertexTangents!==OA||uA.morphTargets!==RA||uA.morphNormals!==iI||uA.morphColors!==eI||uA.toneMapping!==xI||uA.morphTargetsCount!==EI)&&(sI=!0):(sI=!0,uA.__version=V.version);let Zg=uA.currentProgram;sI===!0&&(Zg=zi(V,T,b));let zB=!1,Fg=!1,gi=!1;const JI=Zg.getUniforms(),Yg=uA.uniforms;if(nA.useProgram(Zg.program)&&(zB=!0,Fg=!0,gi=!0),V.id!==y&&(y=V.id,Fg=!0),zB||S!==F){nA.buffers.depth.getReversed()?(tA.copy(F.projectionMatrix),DM(tA),hM(tA),JI.setValue(Y,"projectionMatrix",tA)):JI.setValue(Y,"projectionMatrix",F.projectionMatrix),JI.setValue(Y,"viewMatrix",F.matrixWorldInverse);const Gg=JI.map.cameraPosition;Gg!==void 0&&Gg.setValue(Y,fA.setFromMatrixPosition(F.matrixWorld)),dA.logarithmicDepthBuffer&&JI.setValue(Y,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&JI.setValue(Y,"isOrthographic",F.isOrthographicCamera===!0),S!==F&&(S=F,Fg=!0,gi=!0)}if(b.isSkinnedMesh){JI.setOptional(Y,b,"bindMatrix"),JI.setOptional(Y,b,"bindMatrixInverse");const Dg=b.skeleton;Dg&&(Dg.boneTexture===null&&Dg.computeBoneTexture(),JI.setValue(Y,"boneTexture",Dg.boneTexture,d))}b.isBatchedMesh&&(JI.setOptional(Y,b,"batchingTexture"),JI.setValue(Y,"batchingTexture",b._matricesTexture,d),JI.setOptional(Y,b,"batchingIdTexture"),JI.setValue(Y,"batchingIdTexture",b._indirectTexture,d),JI.setOptional(Y,b,"batchingColorTexture"),b._colorsTexture!==null&&JI.setValue(Y,"batchingColorTexture",b._colorsTexture,d));const fg=W.morphAttributes;if((fg.position!==void 0||fg.normal!==void 0||fg.color!==void 0)&&xA.update(b,W,Zg),(Fg||uA.receiveShadow!==b.receiveShadow)&&(uA.receiveShadow=b.receiveShadow,JI.setValue(Y,"receiveShadow",b.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yg.envMap.value=JA,Yg.flipEnvMap.value=JA.isCubeTexture&&JA.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&T.environment!==null&&(Yg.envMapIntensity.value=T.environmentIntensity),Fg&&(JI.setValue(Y,"toneMappingExposure",w.toneMappingExposure),uA.needsLights&&tc(Yg,gi),EA&&V.fog===!0&&lA.refreshFogUniforms(Yg,EA),lA.refreshMaterialUniforms(Yg,V,O,P,D.state.transmissionRenderTarget[F.id]),fE.upload(Y,ka(uA),Yg,d)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fE.upload(Y,ka(uA),Yg,d),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&JI.setValue(Y,"center",b.center),JI.setValue(Y,"modelViewMatrix",b.modelViewMatrix),JI.setValue(Y,"normalMatrix",b.normalMatrix),JI.setValue(Y,"modelMatrix",b.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Dg=V.uniformsGroups;for(let Gg=0,Pt=Dg.length;Gg<Pt;Gg++){const MB=Dg[Gg];m.update(MB,Zg),m.bind(MB,Zg)}}return Zg}function tc(F,T){F.ambientLightColor.needsUpdate=T,F.lightProbe.needsUpdate=T,F.directionalLights.needsUpdate=T,F.directionalLightShadows.needsUpdate=T,F.pointLights.needsUpdate=T,F.pointLightShadows.needsUpdate=T,F.spotLights.needsUpdate=T,F.spotLightShadows.needsUpdate=T,F.rectAreaLights.needsUpdate=T,F.hemisphereLights.needsUpdate=T}function oc(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(F,T,W){DA.get(F.texture).__webglTexture=T,DA.get(F.depthTexture).__webglTexture=W;const V=DA.get(F);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||sA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,T){const W=DA.get(F);W.__webglFramebuffer=T,W.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(F,T=0,W=0){K=F,U=T,J=W;let V=!0,b=null,EA=!1,cA=!1;if(F){const JA=DA.get(F);if(JA.__useDefaultFramebuffer!==void 0)nA.bindFramebuffer(Y.FRAMEBUFFER,null),V=!1;else if(JA.__webglFramebuffer===void 0)d.setupRenderTarget(F);else if(JA.__hasExternalTextures)d.rebindTextures(F,DA.get(F.texture).__webglTexture,DA.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const RA=F.depthTexture;if(JA.__boundDepthTexture!==RA){if(RA!==null&&DA.has(RA)&&(F.width!==RA.image.width||F.height!==RA.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");d.setupDepthRenderbuffer(F)}}const bA=F.texture;(bA.isData3DTexture||bA.isDataArrayTexture||bA.isCompressedArrayTexture)&&(cA=!0);const OA=DA.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(OA[T])?b=OA[T][W]:b=OA[T],EA=!0):F.samples>0&&d.useMultisampledRTT(F)===!1?b=DA.get(F).__webglMultisampledFramebuffer:Array.isArray(OA)?b=OA[W]:b=OA,p.copy(F.viewport),R.copy(F.scissor),q=F.scissorTest}else p.copy(iA).multiplyScalar(O).floor(),R.copy(GA).multiplyScalar(O).floor(),q=ZA;if(nA.bindFramebuffer(Y.FRAMEBUFFER,b)&&V&&nA.drawBuffers(F,b),nA.viewport(p),nA.scissor(R),nA.setScissorTest(q),EA){const JA=DA.get(F.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+T,JA.__webglTexture,W)}else if(cA){const JA=DA.get(F.texture),bA=T||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,JA.__webglTexture,W||0,bA)}y=-1},this.readRenderTargetPixels=function(F,T,W,V,b,EA,cA){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kA=DA.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&cA!==void 0&&(kA=kA[cA]),kA){nA.bindFramebuffer(Y.FRAMEBUFFER,kA);try{const JA=F.texture,bA=JA.format,OA=JA.type;if(!dA.textureFormatReadable(bA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dA.textureTypeReadable(OA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=F.width-V&&W>=0&&W<=F.height-b&&Y.readPixels(T,W,V,b,jA.convert(bA),jA.convert(OA),EA)}finally{const JA=K!==null?DA.get(K).__webglFramebuffer:null;nA.bindFramebuffer(Y.FRAMEBUFFER,JA)}}},this.readRenderTargetPixelsAsync=async function(F,T,W,V,b,EA,cA){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kA=DA.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&cA!==void 0&&(kA=kA[cA]),kA){const JA=F.texture,bA=JA.format,OA=JA.type;if(!dA.textureFormatReadable(bA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dA.textureTypeReadable(OA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(T>=0&&T<=F.width-V&&W>=0&&W<=F.height-b){nA.bindFramebuffer(Y.FRAMEBUFFER,kA);const RA=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,RA),Y.bufferData(Y.PIXEL_PACK_BUFFER,EA.byteLength,Y.STREAM_READ),Y.readPixels(T,W,V,b,jA.convert(bA),jA.convert(OA),0);const iI=K!==null?DA.get(K).__webglFramebuffer:null;nA.bindFramebuffer(Y.FRAMEBUFFER,iI);const eI=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nM(Y,eI,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,RA),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,EA),Y.deleteBuffer(RA),Y.deleteSync(eI),EA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,T=null,W=0){F.isTexture!==!0&&(cQ("WebGLRenderer: copyFramebufferToTexture function signature has changed."),T=arguments[0]||null,F=arguments[1]);const V=Math.pow(2,-W),b=Math.floor(F.image.width*V),EA=Math.floor(F.image.height*V),cA=T!==null?T.x:0,kA=T!==null?T.y:0;d.setTexture2D(F,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,W,0,0,cA,kA,b,EA),nA.unbindTexture()};const ec=Y.createFramebuffer(),sc=Y.createFramebuffer();this.copyTextureToTexture=function(F,T,W=null,V=null,b=0,EA=null){F.isTexture!==!0&&(cQ("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,F=arguments[1],T=arguments[2],EA=arguments[3]||0,W=null),EA===null&&(b!==0?(cQ("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),EA=b,b=0):EA=0);let cA,kA,JA,bA,OA,RA,iI,eI,xI;const YI=F.isCompressedTexture?F.mipmaps[EA]:F.image;if(W!==null)cA=W.max.x-W.min.x,kA=W.max.y-W.min.y,JA=W.isBox3?W.max.z-W.min.z:1,bA=W.min.x,OA=W.min.y,RA=W.isBox3?W.min.z:0;else{const fg=Math.pow(2,-b);cA=Math.floor(YI.width*fg),kA=Math.floor(YI.height*fg),F.isDataArrayTexture?JA=YI.depth:F.isData3DTexture?JA=Math.floor(YI.depth*fg):JA=1,bA=0,OA=0,RA=0}V!==null?(iI=V.x,eI=V.y,xI=V.z):(iI=0,eI=0,xI=0);const EI=jA.convert(T.format),uA=jA.convert(T.type);let Bg;T.isData3DTexture?(d.setTexture3D(T,0),Bg=Y.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(d.setTexture2DArray(T,0),Bg=Y.TEXTURE_2D_ARRAY):(d.setTexture2D(T,0),Bg=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,T.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,T.unpackAlignment);const sI=Y.getParameter(Y.UNPACK_ROW_LENGTH),Zg=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),zB=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Fg=Y.getParameter(Y.UNPACK_SKIP_ROWS),gi=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,YI.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,YI.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,bA),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,OA),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,RA);const JI=F.isDataArrayTexture||F.isData3DTexture,Yg=T.isDataArrayTexture||T.isData3DTexture;if(F.isDepthTexture){const fg=DA.get(F),Dg=DA.get(T),Gg=DA.get(fg.__renderTarget),Pt=DA.get(Dg.__renderTarget);nA.bindFramebuffer(Y.READ_FRAMEBUFFER,Gg.__webglFramebuffer),nA.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let MB=0;MB<JA;MB++)JI&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,DA.get(F).__webglTexture,b,RA+MB),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,DA.get(T).__webglTexture,EA,xI+MB)),Y.blitFramebuffer(bA,OA,cA,kA,iI,eI,cA,kA,Y.DEPTH_BUFFER_BIT,Y.NEAREST);nA.bindFramebuffer(Y.READ_FRAMEBUFFER,null),nA.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(b!==0||F.isRenderTargetTexture||DA.has(F)){const fg=DA.get(F),Dg=DA.get(T);nA.bindFramebuffer(Y.READ_FRAMEBUFFER,ec),nA.bindFramebuffer(Y.DRAW_FRAMEBUFFER,sc);for(let Gg=0;Gg<JA;Gg++)JI?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,fg.__webglTexture,b,RA+Gg):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,fg.__webglTexture,b),Yg?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Dg.__webglTexture,EA,xI+Gg):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Dg.__webglTexture,EA),b!==0?Y.blitFramebuffer(bA,OA,cA,kA,iI,eI,cA,kA,Y.COLOR_BUFFER_BIT,Y.NEAREST):Yg?Y.copyTexSubImage3D(Bg,EA,iI,eI,xI+Gg,bA,OA,cA,kA):Y.copyTexSubImage2D(Bg,EA,iI,eI,bA,OA,cA,kA);nA.bindFramebuffer(Y.READ_FRAMEBUFFER,null),nA.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Yg?F.isDataTexture||F.isData3DTexture?Y.texSubImage3D(Bg,EA,iI,eI,xI,cA,kA,JA,EI,uA,YI.data):T.isCompressedArrayTexture?Y.compressedTexSubImage3D(Bg,EA,iI,eI,xI,cA,kA,JA,EI,YI.data):Y.texSubImage3D(Bg,EA,iI,eI,xI,cA,kA,JA,EI,uA,YI):F.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,EA,iI,eI,cA,kA,EI,uA,YI.data):F.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,EA,iI,eI,YI.width,YI.height,EI,YI.data):Y.texSubImage2D(Y.TEXTURE_2D,EA,iI,eI,cA,kA,EI,uA,YI);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,sI),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Zg),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,zB),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Fg),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,gi),EA===0&&T.generateMipmaps&&Y.generateMipmap(Bg),nA.unbindTexture()},this.copyTextureToTexture3D=function(F,T,W=null,V=null,b=0){return F.isTexture!==!0&&(cQ("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,V=arguments[1]||null,F=arguments[2],T=arguments[3],b=arguments[4]||0),cQ('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,T,W,V,b)},this.initRenderTarget=function(F){DA.get(F).__webglFramebuffer===void 0&&d.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?d.setTextureCube(F,0):F.isData3DTexture?d.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?d.setTexture2DArray(F,0):d.setTexture2D(F,0),nA.unbindTexture()},this.resetState=function(){U=0,J=0,K=null,nA.reset(),GI.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mC}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const I=this.getContext();I.drawingBufferColorspace=tI._getDrawingBufferColorSpace(A),I.unpackColorSpace=tI._getUnpackColorSpace()}}const CD={type:"change"},Ps={type:"start"},Sr={type:"end"},KE=new Yt,BD=new BB,mJ=Math.cos(70*sM.DEG2RAD),VI=new _,kg=2*Math.PI,cI={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class HJ extends AU{constructor(A,I=null){super(A,I),this.state=cI.NONE,this.enabled=!0,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:NQ.ROTATE,MIDDLE:NQ.DOLLY,RIGHT:NQ.PAN},this.touches={ONE:kQ.ROTATE,TWO:kQ.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new rB,this._lastTargetPosition=new _,this._quat=new rB().setFromUnitVectors(A.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dn,this._sphericalDelta=new dn,this._scale=1,this._panOffset=new _,this._rotateStart=new _A,this._rotateEnd=new _A,this._rotateDelta=new _A,this._panStart=new _A,this._panEnd=new _A,this._panDelta=new _A,this._dollyStart=new _A,this._dollyEnd=new _A,this._dollyDelta=new _A,this._dollyDirection=new _,this._mouse=new _A,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xJ.bind(this),this._onPointerDown=TJ.bind(this),this._onPointerUp=bJ.bind(this),this._onContextMenu=VJ.bind(this),this._onMouseWheel=vJ.bind(this),this._onKeyDown=ZJ.bind(this),this._onTouchStart=WJ.bind(this),this._onTouchMove=PJ.bind(this),this._onMouseDown=_J.bind(this),this._onMouseMove=OJ.bind(this),this._interceptControlDown=jJ.bind(this),this._interceptControlUp=XJ.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(A){A.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=A}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(CD),this.update(),this.state=cI.NONE}update(A=null){const I=this.object.position;VI.copy(I).sub(this.target),VI.applyQuaternion(this._quat),this._spherical.setFromVector3(VI),this.autoRotate&&this.state===cI.NONE&&this._rotateLeft(this._getAutoRotationAngle(A)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let g=this.minAzimuthAngle,B=this.maxAzimuthAngle;isFinite(g)&&isFinite(B)&&(g<-Math.PI?g+=kg:g>Math.PI&&(g-=kg),B<-Math.PI?B+=kg:B>Math.PI&&(B-=kg),g<=B?this._spherical.theta=Math.max(g,Math.min(B,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(g+B)/2?Math.max(g,this._spherical.theta):Math.min(B,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Q=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const i=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Q=i!=this._spherical.radius}if(VI.setFromSpherical(this._spherical),VI.applyQuaternion(this._quatInverse),I.copy(this.target).add(VI),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let i=null;if(this.object.isPerspectiveCamera){const E=VI.length();i=this._clampDistance(E*this._scale);const t=E-i;this.object.position.addScaledVector(this._dollyDirection,t),this.object.updateMatrixWorld(),Q=!!t}else if(this.object.isOrthographicCamera){const E=new _(this._mouse.x,this._mouse.y,0);E.unproject(this.object);const t=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Q=t!==this.object.zoom;const o=new _(this._mouse.x,this._mouse.y,0);o.unproject(this.object),this.object.position.sub(o).add(E),this.object.updateMatrixWorld(),i=VI.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;i!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(i).add(this.object.position):(KE.origin.copy(this.object.position),KE.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(KE.direction))<mJ?this.object.lookAt(this.target):(BD.setFromNormalAndCoplanarPoint(this.object.up,this.target),KE.intersectPlane(BD,this.target))))}else if(this.object.isOrthographicCamera){const i=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),i!==this.object.zoom&&(this.object.updateProjectionMatrix(),Q=!0)}return this._scale=1,this._performCursorZoom=!1,Q||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(CD),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(A){return A!==null?kg/60*this.autoRotateSpeed*A:kg/60/60*this.autoRotateSpeed}_getZoomScale(A){const I=Math.abs(A*.01);return Math.pow(.95,this.zoomSpeed*I)}_rotateLeft(A){this._sphericalDelta.theta-=A}_rotateUp(A){this._sphericalDelta.phi-=A}_panLeft(A,I){VI.setFromMatrixColumn(I,0),VI.multiplyScalar(-A),this._panOffset.add(VI)}_panUp(A,I){this.screenSpacePanning===!0?VI.setFromMatrixColumn(I,1):(VI.setFromMatrixColumn(I,0),VI.crossVectors(this.object.up,VI)),VI.multiplyScalar(A),this._panOffset.add(VI)}_pan(A,I){const g=this.domElement;if(this.object.isPerspectiveCamera){const B=this.object.position;VI.copy(B).sub(this.target);let Q=VI.length();Q*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*A*Q/g.clientHeight,this.object.matrix),this._panUp(2*I*Q/g.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(A*(this.object.right-this.object.left)/this.object.zoom/g.clientWidth,this.object.matrix),this._panUp(I*(this.object.top-this.object.bottom)/this.object.zoom/g.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(A,I){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const g=this.domElement.getBoundingClientRect(),B=A-g.left,Q=I-g.top,i=g.width,E=g.height;this._mouse.x=B/i*2-1,this._mouse.y=-(Q/E)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(A){return Math.max(this.minDistance,Math.min(this.maxDistance,A))}_handleMouseDownRotate(A){this._rotateStart.set(A.clientX,A.clientY)}_handleMouseDownDolly(A){this._updateZoomParameters(A.clientX,A.clientX),this._dollyStart.set(A.clientX,A.clientY)}_handleMouseDownPan(A){this._panStart.set(A.clientX,A.clientY)}_handleMouseMoveRotate(A){this._rotateEnd.set(A.clientX,A.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const I=this.domElement;this._rotateLeft(kg*this._rotateDelta.x/I.clientHeight),this._rotateUp(kg*this._rotateDelta.y/I.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(A){this._dollyEnd.set(A.clientX,A.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(A){this._panEnd.set(A.clientX,A.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(A){this._updateZoomParameters(A.clientX,A.clientY),A.deltaY<0?this._dollyIn(this._getZoomScale(A.deltaY)):A.deltaY>0&&this._dollyOut(this._getZoomScale(A.deltaY)),this.update()}_handleKeyDown(A){let I=!1;switch(A.code){case this.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(kg*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),I=!0;break;case this.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(-kg*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),I=!0;break;case this.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(kg*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),I=!0;break;case this.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(-kg*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),I=!0;break}I&&(A.preventDefault(),this.update())}_handleTouchStartRotate(A){if(this._pointers.length===1)this._rotateStart.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._rotateStart.set(g,B)}}_handleTouchStartPan(A){if(this._pointers.length===1)this._panStart.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._panStart.set(g,B)}}_handleTouchStartDolly(A){const I=this._getSecondPointerPosition(A),g=A.pageX-I.x,B=A.pageY-I.y,Q=Math.sqrt(g*g+B*B);this._dollyStart.set(0,Q)}_handleTouchStartDollyPan(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enablePan&&this._handleTouchStartPan(A)}_handleTouchStartDollyRotate(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enableRotate&&this._handleTouchStartRotate(A)}_handleTouchMoveRotate(A){if(this._pointers.length==1)this._rotateEnd.set(A.pageX,A.pageY);else{const g=this._getSecondPointerPosition(A),B=.5*(A.pageX+g.x),Q=.5*(A.pageY+g.y);this._rotateEnd.set(B,Q)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const I=this.domElement;this._rotateLeft(kg*this._rotateDelta.x/I.clientHeight),this._rotateUp(kg*this._rotateDelta.y/I.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(A){if(this._pointers.length===1)this._panEnd.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._panEnd.set(g,B)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(A){const I=this._getSecondPointerPosition(A),g=A.pageX-I.x,B=A.pageY-I.y,Q=Math.sqrt(g*g+B*B);this._dollyEnd.set(0,Q),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const i=(A.pageX+I.x)*.5,E=(A.pageY+I.y)*.5;this._updateZoomParameters(i,E)}_handleTouchMoveDollyPan(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enablePan&&this._handleTouchMovePan(A)}_handleTouchMoveDollyRotate(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enableRotate&&this._handleTouchMoveRotate(A)}_addPointer(A){this._pointers.push(A.pointerId)}_removePointer(A){delete this._pointerPositions[A.pointerId];for(let I=0;I<this._pointers.length;I++)if(this._pointers[I]==A.pointerId){this._pointers.splice(I,1);return}}_isTrackingPointer(A){for(let I=0;I<this._pointers.length;I++)if(this._pointers[I]==A.pointerId)return!0;return!1}_trackPointer(A){let I=this._pointerPositions[A.pointerId];I===void 0&&(I=new _A,this._pointerPositions[A.pointerId]=I),I.set(A.pageX,A.pageY)}_getSecondPointerPosition(A){const I=A.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[I]}_customWheelEvent(A){const I=A.deltaMode,g={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(I){case 1:g.deltaY*=16;break;case 2:g.deltaY*=100;break}return A.ctrlKey&&!this._controlActive&&(g.deltaY*=10),g}}function TJ(C){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(C.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(C)&&(this._addPointer(C),C.pointerType==="touch"?this._onTouchStart(C):this._onMouseDown(C)))}function xJ(C){this.enabled!==!1&&(C.pointerType==="touch"?this._onTouchMove(C):this._onMouseMove(C))}function bJ(C){switch(this._removePointer(C),this._pointers.length){case 0:this.domElement.releasePointerCapture(C.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sr),this.state=cI.NONE;break;case 1:const A=this._pointers[0],I=this._pointerPositions[A];this._onTouchStart({pointerId:A,pageX:I.x,pageY:I.y});break}}function _J(C){let A;switch(C.button){case 0:A=this.mouseButtons.LEFT;break;case 1:A=this.mouseButtons.MIDDLE;break;case 2:A=this.mouseButtons.RIGHT;break;default:A=-1}switch(A){case NQ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(C),this.state=cI.DOLLY;break;case NQ.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(C),this.state=cI.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(C),this.state=cI.ROTATE}break;case NQ.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(C),this.state=cI.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(C),this.state=cI.PAN}break;default:this.state=cI.NONE}this.state!==cI.NONE&&this.dispatchEvent(Ps)}function OJ(C){switch(this.state){case cI.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(C);break;case cI.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(C);break;case cI.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(C);break}}function vJ(C){this.enabled===!1||this.enableZoom===!1||this.state!==cI.NONE||(C.preventDefault(),this.dispatchEvent(Ps),this._handleMouseWheel(this._customWheelEvent(C)),this.dispatchEvent(Sr))}function ZJ(C){this.enabled!==!1&&this._handleKeyDown(C)}function WJ(C){switch(this._trackPointer(C),this._pointers.length){case 1:switch(this.touches.ONE){case kQ.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(C),this.state=cI.TOUCH_ROTATE;break;case kQ.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(C),this.state=cI.TOUCH_PAN;break;default:this.state=cI.NONE}break;case 2:switch(this.touches.TWO){case kQ.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(C),this.state=cI.TOUCH_DOLLY_PAN;break;case kQ.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(C),this.state=cI.TOUCH_DOLLY_ROTATE;break;default:this.state=cI.NONE}break;default:this.state=cI.NONE}this.state!==cI.NONE&&this.dispatchEvent(Ps)}function PJ(C){switch(this._trackPointer(C),this.state){case cI.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(C),this.update();break;case cI.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(C),this.update();break;case cI.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(C),this.update();break;case cI.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(C),this.update();break;default:this.state=cI.NONE}}function VJ(C){this.enabled!==!1&&C.preventDefault()}function jJ(C){C.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XJ(C){C.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class zJ extends DC{constructor(A=1,I=1,g=1,B=1,Q=1,i=1){super(),B=Math.floor(B),Q=Math.floor(Q),i=Math.floor(i);const E=A/2,t=I/2,o=g/2,e=A/B,s=I/Q,a=g/i,n=[];let c=-E,l=-t,h=-o;for(let D=0;D<=B;D++)n.push(c,-t,-o,c,t,-o),n.push(c,t,-o,c,t,o),n.push(c,t,o,c,-t,o),n.push(c,-t,o,c,-t,-o),c+=e;for(let D=0;D<=Q;D++)n.push(-E,l,-o,E,l,-o),n.push(E,l,-o,E,l,o),n.push(E,l,o,-E,l,o),n.push(-E,l,o,-E,l,-o),l+=s;for(let D=0;D<=i;D++)n.push(-E,-t,h,-E,t,h),n.push(-E,t,h,E,t,h),n.push(E,t,h,E,-t,h),n.push(E,-t,h,-E,-t,h),h+=a;this.setAttribute("position",new sg(n,3))}}var li=function(){var C=0,A=document.createElement("div");A.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",A.addEventListener("click",function(e){e.preventDefault(),g(++C%A.children.length)},!1);function I(e){return A.appendChild(e.dom),e}function g(e){for(var s=0;s<A.children.length;s++)A.children[s].style.display=s===e?"block":"none";C=e}var B=(performance||Date).now(),Q=B,i=0,E=I(new li.Panel("FPS","#0ff","#002")),t=I(new li.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var o=I(new li.Panel("MB","#f08","#201"));return g(0),{REVISION:16,dom:A,addPanel:I,showPanel:g,begin:function(){B=(performance||Date).now()},end:function(){i++;var e=(performance||Date).now();if(t.update(e-B,200),e>=Q+1e3&&(E.update(i*1e3/(e-Q),100),Q=e,i=0,o)){var s=performance.memory;o.update(s.usedJSHeapSize/1048576,s.jsHeapSizeLimit/1048576)}return e},update:function(){B=this.end()},domElement:A,setMode:g}};li.Panel=function(C,A,I){var g=1/0,B=0,Q=Math.round,i=Q(window.devicePixelRatio||1),E=80*i,t=48*i,o=3*i,e=2*i,s=3*i,a=15*i,n=74*i,c=30*i,l=document.createElement("canvas");l.width=E,l.height=t,l.style.cssText="width:80px;height:48px";var h=l.getContext("2d");return h.font="bold "+9*i+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=I,h.fillRect(0,0,E,t),h.fillStyle=A,h.fillText(C,o,e),h.fillRect(s,a,n,c),h.fillStyle=I,h.globalAlpha=.9,h.fillRect(s,a,n,c),{dom:l,update:function(D,k){g=Math.min(g,D),B=Math.max(B,D),h.fillStyle=I,h.globalAlpha=1,h.fillRect(0,0,E,a),h.fillStyle=A,h.fillText(Q(D)+" "+C+" ("+Q(g)+"-"+Q(B)+")",o,e),h.drawImage(l,s+i,a,n-i,c,s,a,n-i,c),h.fillRect(s+n-i,a,i,c),h.fillStyle=I,h.globalAlpha=.9,h.fillRect(s+n-i,a,i,Q((1-D/k)*c))}}};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */let Ai=class LE{constructor(A,I,g,B,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(B),this.$name=document.createElement("div"),this.$name.classList.add("name"),LE.nextNameID=LE.nextNameID||0,this.$name.id="lil-gui-name-"+ ++LE.nextNameID,this.$widget=document.createElement(Q),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},$J=class extends Ai{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function de(C){let A,I;return(A=C.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=C.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=C.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const AF={isPrimitive:!0,match:C=>typeof C=="string",fromHexString:de,toHexString:de},Ki={isPrimitive:!0,match:C=>typeof C=="number",fromHexString:C=>parseInt(C.substring(1),16),toHexString:C=>"#"+C.toString(16).padStart(6,0)},IF={isPrimitive:!1,match:Array.isArray,fromHexString(C,A,I=1){const g=Ki.fromHexString(C);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([C,A,I],g=1)=>Ki.toHexString(C*(g=255/g)<<16^A*g<<8^I*g<<0)},gF={isPrimitive:!1,match:C=>Object(C)===C,fromHexString(C,A,I=1){const g=Ki.fromHexString(C);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:C,g:A,b:I},g=1)=>Ki.toHexString(C*(g=255/g)<<16^A*g<<8^I*g<<0)},CF=[AF,Ki,IF,gF];let BF=class extends Ai{constructor(A,I,g,B){var Q;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(Q=this.initialValue,CF.find(i=>i.match(Q))),this._rgbScale=B,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=de(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Jo=class extends Ai{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",B=>{B.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},QF=class extends Ai{constructor(A,I,g,B,Q,i){super(A,I,g,"number"),this._initInput(),this.min(B),this.max(Q);const E=i!==void 0;this.step(E?i:this._getImplicitStep(),E),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=e=>{const s=parseFloat(this.$input.value);isNaN(s)||(this._snapClampSetValue(s+e),this.$input.value=this.getValue())};let I,g,B,Q,i,E=!1;const t=e=>{if(E){const s=e.clientX-I,a=e.clientY-g;Math.abs(a)>5?(e.preventDefault(),this.$input.blur(),E=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(s)>5&&o()}if(!E){const s=e.clientY-B;i-=s*this._step*this._arrowKeyMultiplier(e),Q+i>this._max?i=this._max-Q:Q+i<this._min&&(i=this._min-Q),this._snapClampSetValue(Q+i)}B=e.clientY},o=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",o)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener("keydown",e=>{e.code==="Enter"&&this.$input.blur(),e.code==="ArrowUp"&&(e.preventDefault(),A(this._step*this._arrowKeyMultiplier(e))),e.code==="ArrowDown"&&(e.preventDefault(),A(this._step*this._arrowKeyMultiplier(e)*-1))}),this.$input.addEventListener("wheel",e=>{this._inputFocused&&(e.preventDefault(),A(this._step*this._normalizeMouseWheel(e)))},{passive:!1}),this.$input.addEventListener("mousedown",e=>{I=e.clientX,g=B=e.clientY,E=!0,Q=this.getValue(),i=0,window.addEventListener("mousemove",t),window.addEventListener("mouseup",o)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=a=>{const n=this.$slider.getBoundingClientRect();let c=(l=a,h=n.left,D=n.right,k=this._min,G=this._max,(l-h)/(D-h)*(G-k)+k);var l,h,D,k,G;this._snapClampSetValue(c)},I=a=>{A(a.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let B,Q,i=!1;const E=a=>{a.preventDefault(),this._setDraggingStyle(!0),A(a.touches[0].clientX),i=!1},t=a=>{if(i){const n=a.touches[0].clientX-B,c=a.touches[0].clientY-Q;Math.abs(n)>Math.abs(c)?E(a):(window.removeEventListener("touchmove",t),window.removeEventListener("touchend",o))}else a.preventDefault(),A(a.touches[0].clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",t),window.removeEventListener("touchend",o)},e=this._callOnFinishChange.bind(this);let s;this.$slider.addEventListener("mousedown",a=>{this._setDraggingStyle(!0),A(a.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",a=>{a.touches.length>1||(this._hasScrollBar?(B=a.touches[0].clientX,Q=a.touches[0].clientY,i=!0):E(a),window.addEventListener("touchmove",t,{passive:!1}),window.addEventListener("touchend",o))},{passive:!1}),this.$slider.addEventListener("wheel",a=>{if(Math.abs(a.deltaX)<Math.abs(a.deltaY)&&this._hasScrollBar)return;a.preventDefault();const n=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+n),this.$input.value=this.getValue(),clearTimeout(s),s=setTimeout(e,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},iF=class extends Ai{constructor(A,I,g,B){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(B)?B:Object.values(B),this._names=Array.isArray(B)?B:Object.keys(B),this._names.forEach(Q=>{const i=document.createElement("option");i.innerHTML=Q,this.$select.appendChild(i)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}},EF=class extends Ai{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",B=>{B.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},QD=!1,tF=class wr{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:B,title:Q="Controls",injectStyles:i=!0,touchStyles:E=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{t.code!=="Enter"&&t.code!=="Space"||(t.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),E&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!QD&&i&&(function(t){const o=document.createElement("style");o.innerHTML=t;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(o,e):document.head.appendChild(o)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),QD=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),B&&this.domElement.style.setProperty("--width",B+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(A,I,g,B,Q){if(Object(g)===g)return new iF(this,A,I,g);const i=A[I];switch(typeof i){case"number":return new QF(this,A,I,g,B,Q);case"boolean":return new $J(this,A,I);case"string":return new EF(this,A,I);case"function":return new Jo(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`