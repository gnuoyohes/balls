(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))g(B);new MutationObserver(B=>{for(const Q of B)if(Q.type==="childList")for(const E of Q.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(B){const Q={};return B.integrity&&(Q.integrity=B.integrity),B.referrerPolicy&&(Q.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?Q.credentials="include":B.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(B){if(B.ep)return;B.ep=!0;const Q=I(B);fetch(B.href,Q)}})();const SI={backgroundColor:15658734,wallColor:14540253,lightColor:16777215,lightShadowMapSize:2048,boxDimensions:{x:6,y:6,z:6},wallThickness:.2,launchVelocityFactor:3,objectRestitution:1,objectDensity:1,objectFriction:0};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fi="171",XC={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},VC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fD=0,Jo=1,HD=2,ae=1,uD=2,fg=3,CC=0,PI=1,ug=2,IC=0,zC=1,Fo=2,Ro=3,po=4,mD=5,cC=100,TD=101,xD=102,bD=103,OD=104,_D=200,ZD=201,vD=202,WD=203,LE=204,fE=205,PD=206,VD=207,jD=208,XD=209,zD=210,$D=211,Aa=212,Ia=213,ga=214,HE=0,uE=1,mE=2,IB=3,TE=4,xE=5,bE=6,OE=7,Hi=0,Ca=1,Ba=2,gC=0,Qa=1,Ea=2,ia=3,oa=4,ta=5,ea=6,Da=7,se=300,gB=301,CB=302,_E=303,ZE=304,mQ=306,vE=1e3,lC=1001,WE=1002,cg=1003,aa=1004,PB=1005,Kg=1006,IE=1007,kC=1008,Og=1009,he=1010,ne=1011,dB=1012,ui=1013,UC=1014,Tg=1015,xB=1016,mi=1017,Ti=1018,BB=1020,Se=35902,we=1021,re=1022,rg=1023,ce=1024,Ge=1025,$C=1026,QB=1027,le=1028,xi=1029,ke=1030,bi=1031,Oi=1033,GQ=33776,lQ=33777,kQ=33778,yQ=33779,PE=35840,VE=35841,jE=35842,XE=35843,zE=36196,$E=37492,Ai=37496,Ii=37808,gi=37809,Ci=37810,Bi=37811,Qi=37812,Ei=37813,ii=37814,oi=37815,ti=37816,ei=37817,Di=37818,ai=37819,si=37820,hi=37821,UQ=36492,ni=36494,Si=36495,ye=36283,wi=36284,ri=36285,ci=36286,sa=3200,ha=3201,Ue=0,na=1,AC="",Qg="srgb",EB="srgb-linear",KQ="linear",QI="srgb",pC=7680,qo=519,Sa=512,wa=513,ra=514,Me=515,ca=516,Ga=517,la=518,ka=519,Yo=35044,Lo="300 es",xg=2e3,JQ=2001;class JC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const Q=B.indexOf(I);Q!==-1&&B.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let Q=0,E=B.length;Q<E;Q++)B[Q].call(this,A);A.target=null}}}const mI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fo=1234567;const JB=Math.PI/180,qB=180/Math.PI;function eB(){const C=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(mI[C&255]+mI[C>>8&255]+mI[C>>16&255]+mI[C>>24&255]+"-"+mI[A&255]+mI[A>>8&255]+"-"+mI[A>>16&15|64]+mI[A>>24&255]+"-"+mI[I&63|128]+mI[I>>8&255]+"-"+mI[I>>16&255]+mI[I>>24&255]+mI[g&255]+mI[g>>8&255]+mI[g>>16&255]+mI[g>>24&255]).toLowerCase()}function xA(C,A,I){return Math.max(A,Math.min(I,C))}function _i(C,A){return(C%A+A)%A}function ya(C,A,I,g,B){return g+(C-A)*(B-g)/(I-A)}function Ua(C,A,I){return C!==A?(I-C)/(A-C):0}function FB(C,A,I){return(1-I)*C+I*A}function Ma(C,A,I,g){return FB(C,A,1-Math.exp(-I*g))}function Na(C,A=1){return A-Math.abs(_i(C,A*2)-A)}function Ka(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*(3-2*C))}function Ja(C,A,I){return C<=A?0:C>=I?1:(C=(C-A)/(I-A),C*C*C*(C*(C*6-15)+10))}function Fa(C,A){return C+Math.floor(Math.random()*(A-C+1))}function Ra(C,A){return C+Math.random()*(A-C)}function pa(C){return C*(.5-Math.random())}function da(C){C!==void 0&&(fo=C);let A=fo+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function qa(C){return C*JB}function Ya(C){return C*qB}function La(C){return(C&C-1)===0&&C!==0}function fa(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function Ha(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function ua(C,A,I,g,B){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),t=Q((A+g)/2),D=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),n=Q((g-A)/2),w=E((g-A)/2);switch(B){case"XYX":C.set(i*D,o*a,o*s,i*t);break;case"YZY":C.set(o*s,i*D,o*a,i*t);break;case"ZXZ":C.set(o*a,o*s,i*D,i*t);break;case"XZX":C.set(i*D,o*w,o*n,i*t);break;case"YXY":C.set(o*n,i*D,o*w,i*t);break;case"ZYZ":C.set(o*w,o*n,i*D,i*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+B)}}function vC(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function OI(C,A){switch(A.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("Invalid component type.")}}const ma={DEG2RAD:JB,RAD2DEG:qB,generateUUID:eB,clamp:xA,euclideanModulo:_i,mapLinear:ya,inverseLerp:Ua,lerp:FB,damp:Ma,pingpong:Na,smoothstep:Ka,smootherstep:Ja,randInt:Fa,randFloat:Ra,randFloatSpread:pa,seededRandom:da,degToRad:qa,radToDeg:Ya,isPowerOfTwo:La,ceilPowerOfTwo:fa,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:ua,normalize:OI,denormalize:vC};class qA{constructor(A=0,I=0){qA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=xA(this.x,A.x,I.x),this.y=xA(this.y,A.y,I.y),this}clampScalar(A,I){return this.x=xA(this.x,A,I),this.y=xA(this.y,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(xA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*B+A.x,this.y=Q*B+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class HA{constructor(A,I,g,B,Q,E,i,o,t){HA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,E,i,o,t)}set(A,I,g,B,Q,E,i,o,t){const D=this.elements;return D[0]=A,D[1]=B,D[2]=i,D[3]=I,D[4]=Q,D[5]=o,D[6]=g,D[7]=E,D[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],t=g[1],D=g[4],a=g[7],s=g[2],n=g[5],w=g[8],c=B[0],S=B[3],h=B[6],M=B[1],U=B[4],k=B[7],Y=B[2],J=B[5],F=B[8];return Q[0]=E*c+i*M+o*Y,Q[3]=E*S+i*U+o*J,Q[6]=E*h+i*k+o*F,Q[1]=t*c+D*M+a*Y,Q[4]=t*S+D*U+a*J,Q[7]=t*h+D*k+a*F,Q[2]=s*c+n*M+w*Y,Q[5]=s*S+n*U+w*J,Q[8]=s*h+n*k+w*F,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],D=A[8];return I*E*D-I*i*t-g*Q*D+g*i*o+B*Q*t-B*E*o}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],D=A[8],a=D*E-i*t,s=i*o-D*Q,n=t*Q-E*o,w=I*a+g*s+B*n;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const c=1/w;return A[0]=a*c,A[1]=(B*t-D*g)*c,A[2]=(i*g-B*E)*c,A[3]=s*c,A[4]=(D*I-B*o)*c,A[5]=(B*Q-i*I)*c,A[6]=n*c,A[7]=(g*o-t*I)*c,A[8]=(E*I-g*Q)*c,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,Q,E,i){const o=Math.cos(Q),t=Math.sin(Q);return this.set(g*o,g*t,-g*(o*E+t*i)+E+A,-B*t,B*o,-B*(-t*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(gE.makeScale(A,I)),this}rotate(A){return this.premultiply(gE.makeRotation(-A)),this}translate(A,I){return this.premultiply(gE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const gE=new HA;function Ne(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}function FQ(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function Ta(){const C=FQ("canvas");return C.style.display="block",C}const Ho={};function WC(C){C in Ho||(Ho[C]=!0,console.warn(C))}function xa(C,A,I){return new Promise(function(g,B){function Q(){switch(C.clientWaitSync(A,C.SYNC_FLUSH_COMMANDS_BIT,0)){case C.WAIT_FAILED:B();break;case C.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function ba(C){const A=C.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function Oa(C){const A=C.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const uo=new HA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mo=new HA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _a(){const C={enabled:!0,workingColorSpace:EB,spaces:{},convert:function(B,Q,E){return this.enabled===!1||Q===E||!Q||!E||(this.spaces[Q].transfer===QI&&(B.r=bg(B.r),B.g=bg(B.g),B.b=bg(B.b)),this.spaces[Q].primaries!==this.spaces[E].primaries&&(B.applyMatrix3(this.spaces[Q].toXYZ),B.applyMatrix3(this.spaces[E].fromXYZ)),this.spaces[E].transfer===QI&&(B.r=AB(B.r),B.g=AB(B.g),B.b=AB(B.b))),B},fromWorkingColorSpace:function(B,Q){return this.convert(B,this.workingColorSpace,Q)},toWorkingColorSpace:function(B,Q){return this.convert(B,Q,this.workingColorSpace)},getPrimaries:function(B){return this.spaces[B].primaries},getTransfer:function(B){return B===AC?KQ:this.spaces[B].transfer},getLuminanceCoefficients:function(B,Q=this.workingColorSpace){return B.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(B){Object.assign(this.spaces,B)},_getMatrix:function(B,Q,E){return B.copy(this.spaces[Q].toXYZ).multiply(this.spaces[E].fromXYZ)},_getDrawingBufferColorSpace:function(B){return this.spaces[B].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(B=this.workingColorSpace){return this.spaces[B].workingColorSpaceConfig.unpackColorSpace}},A=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],g=[.3127,.329];return C.define({[EB]:{primaries:A,whitePoint:g,transfer:KQ,toXYZ:uo,fromXYZ:mo,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:Qg},outputColorSpaceConfig:{drawingBufferColorSpace:Qg}},[Qg]:{primaries:A,whitePoint:g,transfer:QI,toXYZ:uo,fromXYZ:mo,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:Qg}}}),C}const AI=_a();function bg(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function AB(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}let dC;class Za{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{dC===void 0&&(dC=FQ("canvas")),dC.width=A.width,dC.height=A.height;const g=dC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=dC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=FQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),Q=B.data;for(let E=0;E<Q.length;E++)Q[E]=bg(Q[E]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(bg(I[g]/255)*255):I[g]=bg(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let va=0;class Ke{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:va++}),this.uuid=eB(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let E=0,i=B.length;E<i;E++)B[E].isDataTexture?Q.push(CE(B[E].image)):Q.push(CE(B[E]))}else Q=CE(B);g.url=Q}return I||(A.images[this.uuid]=g),g}}function CE(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?Za.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wa=0;class VI extends JC{constructor(A=VI.DEFAULT_IMAGE,I=VI.DEFAULT_MAPPING,g=lC,B=lC,Q=Kg,E=kC,i=rg,o=Og,t=VI.DEFAULT_ANISOTROPY,D=AC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wa++}),this.uuid=eB(),this.name="",this.source=new Ke(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=B,this.magFilter=Q,this.minFilter=E,this.anisotropy=t,this.format=i,this.internalFormat=null,this.type=o,this.offset=new qA(0,0),this.repeat=new qA(1,1),this.center=new qA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new HA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=D,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==se)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case vE:A.x=A.x-Math.floor(A.x);break;case lC:A.x=A.x<0?0:1;break;case WE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case vE:A.y=A.y-Math.floor(A.y);break;case lC:A.y=A.y<0?0:1;break;case WE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}VI.DEFAULT_IMAGE=null;VI.DEFAULT_MAPPING=se;VI.DEFAULT_ANISOTROPY=1;class GI{constructor(A=0,I=0,g=0,B=1){GI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*B+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*B+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*B+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*B+E[15]*Q,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,Q;const o=A.elements,t=o[0],D=o[4],a=o[8],s=o[1],n=o[5],w=o[9],c=o[2],S=o[6],h=o[10];if(Math.abs(D-s)<.01&&Math.abs(a-c)<.01&&Math.abs(w-S)<.01){if(Math.abs(D+s)<.1&&Math.abs(a+c)<.1&&Math.abs(w+S)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const U=(t+1)/2,k=(n+1)/2,Y=(h+1)/2,J=(D+s)/4,F=(a+c)/4,f=(w+S)/4;return U>k&&U>Y?U<.01?(g=0,B=.707106781,Q=.707106781):(g=Math.sqrt(U),B=J/g,Q=F/g):k>Y?k<.01?(g=.707106781,B=0,Q=.707106781):(B=Math.sqrt(k),g=J/B,Q=f/B):Y<.01?(g=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(Y),g=F/Q,B=f/Q),this.set(g,B,Q,I),this}let M=Math.sqrt((S-w)*(S-w)+(a-c)*(a-c)+(s-D)*(s-D));return Math.abs(M)<.001&&(M=1),this.x=(S-w)/M,this.y=(a-c)/M,this.z=(s-D)/M,this.w=Math.acos((t+n+h-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=xA(this.x,A.x,I.x),this.y=xA(this.y,A.y,I.y),this.z=xA(this.z,A.z,I.z),this.w=xA(this.w,A.w,I.w),this}clampScalar(A,I){return this.x=xA(this.x,A,I),this.y=xA(this.y,A,I),this.z=xA(this.z,A,I),this.w=xA(this.w,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(xA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pa extends JC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new GI(0,0,A,I),this.scissorTest=!1,this.viewport=new GI(0,0,A,I);const B={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kg,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new VI(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let B=0,Q=this.textures.length;B<Q;B++)this.textures[B].image.width=A,this.textures[B].image.height=I,this.textures[B].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,B=A.textures.length;g<B;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ke(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class MC extends Pa{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Je extends VI{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=cg,this.minFilter=cg,this.wrapR=lC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Va extends VI{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=cg,this.minFilter=cg,this.wrapR=lC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BC{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,Q,E,i){let o=g[B+0],t=g[B+1],D=g[B+2],a=g[B+3];const s=Q[E+0],n=Q[E+1],w=Q[E+2],c=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=t,A[I+2]=D,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=n,A[I+2]=w,A[I+3]=c;return}if(a!==c||o!==s||t!==n||D!==w){let S=1-i;const h=o*s+t*n+D*w+a*c,M=h>=0?1:-1,U=1-h*h;if(U>Number.EPSILON){const Y=Math.sqrt(U),J=Math.atan2(Y,h*M);S=Math.sin(S*J)/Y,i=Math.sin(i*J)/Y}const k=i*M;if(o=o*S+s*k,t=t*S+n*k,D=D*S+w*k,a=a*S+c*k,S===1-i){const Y=1/Math.sqrt(o*o+t*t+D*D+a*a);o*=Y,t*=Y,D*=Y,a*=Y}}A[I]=o,A[I+1]=t,A[I+2]=D,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,B,Q,E){const i=g[B],o=g[B+1],t=g[B+2],D=g[B+3],a=Q[E],s=Q[E+1],n=Q[E+2],w=Q[E+3];return A[I]=i*w+D*a+o*n-t*s,A[I+1]=o*w+D*s+t*a-i*n,A[I+2]=t*w+D*n+i*s-o*a,A[I+3]=D*w-i*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,B=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,t=i(g/2),D=i(B/2),a=i(Q/2),s=o(g/2),n=o(B/2),w=o(Q/2);switch(E){case"XYZ":this._x=s*D*a+t*n*w,this._y=t*n*a-s*D*w,this._z=t*D*w+s*n*a,this._w=t*D*a-s*n*w;break;case"YXZ":this._x=s*D*a+t*n*w,this._y=t*n*a-s*D*w,this._z=t*D*w-s*n*a,this._w=t*D*a+s*n*w;break;case"ZXY":this._x=s*D*a-t*n*w,this._y=t*n*a+s*D*w,this._z=t*D*w+s*n*a,this._w=t*D*a-s*n*w;break;case"ZYX":this._x=s*D*a-t*n*w,this._y=t*n*a+s*D*w,this._z=t*D*w-s*n*a,this._w=t*D*a+s*n*w;break;case"YZX":this._x=s*D*a+t*n*w,this._y=t*n*a+s*D*w,this._z=t*D*w-s*n*a,this._w=t*D*a-s*n*w;break;case"XZY":this._x=s*D*a-t*n*w,this._y=t*n*a-s*D*w,this._z=t*D*w+s*n*a,this._w=t*D*a+s*n*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],t=I[2],D=I[6],a=I[10],s=g+i+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(D-o)*n,this._y=(Q-t)*n,this._z=(E-B)*n}else if(g>i&&g>a){const n=2*Math.sqrt(1+g-i-a);this._w=(D-o)/n,this._x=.25*n,this._y=(B+E)/n,this._z=(Q+t)/n}else if(i>a){const n=2*Math.sqrt(1+i-g-a);this._w=(Q-t)/n,this._x=(B+E)/n,this._y=.25*n,this._z=(o+D)/n}else{const n=2*Math.sqrt(1+a-g-i);this._w=(E-B)/n,this._x=(Q+t)/n,this._y=(o+D)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(xA(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,t=I._z,D=I._w;return this._x=g*D+E*i+B*t-Q*o,this._y=B*D+E*o+Q*i-g*t,this._z=Q*D+E*t+g*o-B*i,this._w=E*D-g*i-B*o-Q*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+B*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=B,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const n=1-I;return this._w=n*E+I*this._w,this._x=n*g+I*this._x,this._y=n*B+I*this._y,this._z=n*Q+I*this._z,this.normalize(),this}const t=Math.sqrt(o),D=Math.atan2(t,i),a=Math.sin((1-I)*D)/t,s=Math.sin(I*D)/t;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=B*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),B=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(B*Math.sin(A),B*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class m{constructor(A=0,I=0,g=0){m.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(To.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(To.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*B,this.y=Q[1]*I+Q[4]*g+Q[7]*B,this.z=Q[2]*I+Q[5]*g+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*B+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*B+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*B+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*B+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,t=2*(E*B-i*g),D=2*(i*I-Q*B),a=2*(Q*g-E*I);return this.x=I+o*t+E*a-i*D,this.y=g+o*D+i*t-Q*a,this.z=B+o*a+Q*D-E*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=xA(this.x,A.x,I.x),this.y=xA(this.y,A.y,I.y),this.z=xA(this.z,A.z,I.z),this}clampScalar(A,I){return this.x=xA(this.x,A,I),this.y=xA(this.y,A,I),this.z=xA(this.z,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(xA(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=B*o-Q*i,this.y=Q*E-g*o,this.z=g*i-B*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return BE.copy(this).projectOnVector(A),this.sub(BE)}reflect(A){return this.sub(BE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(xA(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const BE=new m,To=new BC;class bB{constructor(A=new m(1/0,1/0,1/0),I=new m(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(tg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(tg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=tg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,tg):tg.fromBufferAttribute(Q,E),tg.applyMatrix4(A.matrixWorld),this.expandByPoint(tg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),VB.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),VB.copy(g.boundingBox)),VB.applyMatrix4(A.matrixWorld),this.union(VB)}const B=A.children;for(let Q=0,E=B.length;Q<E;Q++)this.expandByObject(B[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,tg),tg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(nB),jB.subVectors(this.max,nB),qC.subVectors(A.a,nB),YC.subVectors(A.b,nB),LC.subVectors(A.c,nB),Wg.subVectors(YC,qC),Pg.subVectors(LC,YC),DC.subVectors(qC,LC);let I=[0,-Wg.z,Wg.y,0,-Pg.z,Pg.y,0,-DC.z,DC.y,Wg.z,0,-Wg.x,Pg.z,0,-Pg.x,DC.z,0,-DC.x,-Wg.y,Wg.x,0,-Pg.y,Pg.x,0,-DC.y,DC.x,0];return!QE(I,qC,YC,LC,jB)||(I=[1,0,0,0,1,0,0,0,1],!QE(I,qC,YC,LC,jB))?!1:(XB.crossVectors(Wg,Pg),I=[XB.x,XB.y,XB.z],QE(I,qC,YC,LC,jB))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,tg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(tg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(pg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),pg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),pg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),pg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),pg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),pg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),pg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),pg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(pg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const pg=[new m,new m,new m,new m,new m,new m,new m,new m],tg=new m,VB=new bB,qC=new m,YC=new m,LC=new m,Wg=new m,Pg=new m,DC=new m,nB=new m,jB=new m,XB=new m,aC=new m;function QE(C,A,I,g,B){for(let Q=0,E=C.length-3;Q<=E;Q+=3){aC.fromArray(C,Q);const i=B.x*Math.abs(aC.x)+B.y*Math.abs(aC.y)+B.z*Math.abs(aC.z),o=A.dot(aC),t=I.dot(aC),D=g.dot(aC);if(Math.max(-Math.max(o,t,D),Math.min(o,t,D))>i)return!1}return!0}const ja=new bB,SB=new m,EE=new m;class TQ{constructor(A=new m,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):ja.setFromPoints(A).getCenter(g);let B=0;for(let Q=0,E=A.length;Q<E;Q++)B=Math.max(B,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;SB.subVectors(A,this.center);const I=SB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.addScaledVector(SB,B/g),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(EE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(SB.copy(A.center).add(EE)),this.expandByPoint(SB.copy(A.center).sub(EE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dg=new m,iE=new m,zB=new m,Vg=new m,oE=new m,$B=new m,tE=new m;class xQ{constructor(A=new m,I=new m(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,dg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=dg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(dg.copy(this.origin).addScaledVector(this.direction,I),dg.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){iE.copy(A).add(I).multiplyScalar(.5),zB.copy(I).sub(A).normalize(),Vg.copy(this.origin).sub(iE);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(zB),i=Vg.dot(this.direction),o=-Vg.dot(zB),t=Vg.lengthSq(),D=Math.abs(1-E*E);let a,s,n,w;if(D>0)if(a=E*o-i,s=E*i-o,w=Q*D,a>=0)if(s>=-w)if(s<=w){const c=1/D;a*=c,s*=c,n=a*(a+E*s+2*i)+s*(E*a+s+2*o)+t}else s=Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;else s=-Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;else s<=-w?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t):s<=w?(a=0,s=Math.min(Math.max(-Q,-o),Q),n=s*(s+2*o)+t):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),B&&B.copy(iE).addScaledVector(zB,s),n}intersectSphere(A,I){dg.subVectors(A.center,this.origin);const g=dg.dot(this.direction),B=dg.dot(dg)-g*g,Q=A.radius*A.radius;if(B>Q)return null;const E=Math.sqrt(Q-B),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,Q,E,i,o;const t=1/this.direction.x,D=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,B=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,B=(A.min.x-s.x)*t),D>=0?(Q=(A.min.y-s.y)*D,E=(A.max.y-s.y)*D):(Q=(A.max.y-s.y)*D,E=(A.min.y-s.y)*D),g>E||Q>B||((Q>g||isNaN(g))&&(g=Q),(E<B||isNaN(B))&&(B=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>B)||((i>g||g!==g)&&(g=i),(o<B||B!==B)&&(B=o),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,dg)!==null}intersectTriangle(A,I,g,B,Q){oE.subVectors(I,A),$B.subVectors(g,A),tE.crossVectors(oE,$B);let E=this.direction.dot(tE),i;if(E>0){if(B)return null;i=1}else if(E<0)i=-1,E=-E;else return null;Vg.subVectors(this.origin,A);const o=i*this.direction.dot($B.crossVectors(Vg,$B));if(o<0)return null;const t=i*this.direction.dot(oE.cross(Vg));if(t<0||o+t>E)return null;const D=-i*Vg.dot(tE);return D<0?null:this.at(D/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hI{constructor(A,I,g,B,Q,E,i,o,t,D,a,s,n,w,c,S){hI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,B,Q,E,i,o,t,D,a,s,n,w,c,S)}set(A,I,g,B,Q,E,i,o,t,D,a,s,n,w,c,S){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=B,h[1]=Q,h[5]=E,h[9]=i,h[13]=o,h[2]=t,h[6]=D,h[10]=a,h[14]=s,h[3]=n,h[7]=w,h[11]=c,h[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/fC.setFromMatrixColumn(A,0).length(),Q=1/fC.setFromMatrixColumn(A,1).length(),E=1/fC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(B),t=Math.sin(B),D=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*D,n=E*a,w=i*D,c=i*a;I[0]=o*D,I[4]=-o*a,I[8]=t,I[1]=n+w*t,I[5]=s-c*t,I[9]=-i*o,I[2]=c-s*t,I[6]=w+n*t,I[10]=E*o}else if(A.order==="YXZ"){const s=o*D,n=o*a,w=t*D,c=t*a;I[0]=s+c*i,I[4]=w*i-n,I[8]=E*t,I[1]=E*a,I[5]=E*D,I[9]=-i,I[2]=n*i-w,I[6]=c+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*D,n=o*a,w=t*D,c=t*a;I[0]=s-c*i,I[4]=-E*a,I[8]=w+n*i,I[1]=n+w*i,I[5]=E*D,I[9]=c-s*i,I[2]=-E*t,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*D,n=E*a,w=i*D,c=i*a;I[0]=o*D,I[4]=w*t-n,I[8]=s*t+c,I[1]=o*a,I[5]=c*t+s,I[9]=n*t-w,I[2]=-t,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,n=E*t,w=i*o,c=i*t;I[0]=o*D,I[4]=c-s*a,I[8]=w*a+n,I[1]=a,I[5]=E*D,I[9]=-i*D,I[2]=-t*D,I[6]=n*a+w,I[10]=s-c*a}else if(A.order==="XZY"){const s=E*o,n=E*t,w=i*o,c=i*t;I[0]=o*D,I[4]=-a,I[8]=t*D,I[1]=s*a+c,I[5]=E*D,I[9]=n*a-w,I[2]=w*a-n,I[6]=i*D,I[10]=c*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Xa,A,za)}lookAt(A,I,g){const B=this.elements;return XI.subVectors(A,I),XI.lengthSq()===0&&(XI.z=1),XI.normalize(),jg.crossVectors(g,XI),jg.lengthSq()===0&&(Math.abs(g.z)===1?XI.x+=1e-4:XI.z+=1e-4,XI.normalize(),jg.crossVectors(g,XI)),jg.normalize(),AQ.crossVectors(XI,jg),B[0]=jg.x,B[4]=AQ.x,B[8]=XI.x,B[1]=jg.y,B[5]=AQ.y,B[9]=XI.y,B[2]=jg.z,B[6]=AQ.z,B[10]=XI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],t=g[12],D=g[1],a=g[5],s=g[9],n=g[13],w=g[2],c=g[6],S=g[10],h=g[14],M=g[3],U=g[7],k=g[11],Y=g[15],J=B[0],F=B[4],f=B[8],y=B[12],l=B[1],p=B[5],v=B[9],O=B[13],V=B[2],AA=B[6],W=B[10],CA=B[14],Z=B[3],oA=B[7],hA=B[11],kA=B[15];return Q[0]=E*J+i*l+o*V+t*Z,Q[4]=E*F+i*p+o*AA+t*oA,Q[8]=E*f+i*v+o*W+t*hA,Q[12]=E*y+i*O+o*CA+t*kA,Q[1]=D*J+a*l+s*V+n*Z,Q[5]=D*F+a*p+s*AA+n*oA,Q[9]=D*f+a*v+s*W+n*hA,Q[13]=D*y+a*O+s*CA+n*kA,Q[2]=w*J+c*l+S*V+h*Z,Q[6]=w*F+c*p+S*AA+h*oA,Q[10]=w*f+c*v+S*W+h*hA,Q[14]=w*y+c*O+S*CA+h*kA,Q[3]=M*J+U*l+k*V+Y*Z,Q[7]=M*F+U*p+k*AA+Y*oA,Q[11]=M*f+U*v+k*W+Y*hA,Q[15]=M*y+U*O+k*CA+Y*kA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],t=A[13],D=A[2],a=A[6],s=A[10],n=A[14],w=A[3],c=A[7],S=A[11],h=A[15];return w*(+Q*o*a-B*t*a-Q*i*s+g*t*s+B*i*n-g*o*n)+c*(+I*o*n-I*t*s+Q*E*s-B*E*n+B*t*D-Q*o*D)+S*(+I*t*a-I*i*n-Q*E*a+g*E*n+Q*i*D-g*t*D)+h*(-B*i*D-I*o*a+I*i*s+B*E*a-g*E*s+g*o*D)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],D=A[8],a=A[9],s=A[10],n=A[11],w=A[12],c=A[13],S=A[14],h=A[15],M=a*S*t-c*s*t+c*o*n-i*S*n-a*o*h+i*s*h,U=w*s*t-D*S*t-w*o*n+E*S*n+D*o*h-E*s*h,k=D*c*t-w*a*t+w*i*n-E*c*n-D*i*h+E*a*h,Y=w*a*o-D*c*o-w*i*s+E*c*s+D*i*S-E*a*S,J=I*M+g*U+B*k+Q*Y;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/J;return A[0]=M*F,A[1]=(c*s*Q-a*S*Q-c*B*n+g*S*n+a*B*h-g*s*h)*F,A[2]=(i*S*Q-c*o*Q+c*B*t-g*S*t-i*B*h+g*o*h)*F,A[3]=(a*o*Q-i*s*Q-a*B*t+g*s*t+i*B*n-g*o*n)*F,A[4]=U*F,A[5]=(D*S*Q-w*s*Q+w*B*n-I*S*n-D*B*h+I*s*h)*F,A[6]=(w*o*Q-E*S*Q-w*B*t+I*S*t+E*B*h-I*o*h)*F,A[7]=(E*s*Q-D*o*Q+D*B*t-I*s*t-E*B*n+I*o*n)*F,A[8]=k*F,A[9]=(w*a*Q-D*c*Q-w*g*n+I*c*n+D*g*h-I*a*h)*F,A[10]=(E*c*Q-w*i*Q+w*g*t-I*c*t-E*g*h+I*i*h)*F,A[11]=(D*i*Q-E*a*Q-D*g*t+I*a*t+E*g*n-I*i*n)*F,A[12]=Y*F,A[13]=(D*c*B-w*a*B+w*g*s-I*c*s-D*g*S+I*a*S)*F,A[14]=(w*i*B-E*c*B-w*g*o+I*c*o+E*g*S-I*i*S)*F,A[15]=(E*a*B-D*i*B+D*g*o-I*a*o-E*g*s+I*i*s)*F,this}scale(A){const I=this.elements,g=A.x,B=A.y,Q=A.z;return I[0]*=g,I[4]*=B,I[8]*=Q,I[1]*=g,I[5]*=B,I[9]*=Q,I[2]*=g,I[6]*=B,I[10]*=Q,I[3]*=g,I[7]*=B,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,t=Q*E,D=Q*i;return this.set(t*E+g,t*i-B*o,t*o+B*i,0,t*i+B*o,D*i+g,D*o-B*E,0,t*o-B*i,D*o+B*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,t=Q+Q,D=E+E,a=i+i,s=Q*t,n=Q*D,w=Q*a,c=E*D,S=E*a,h=i*a,M=o*t,U=o*D,k=o*a,Y=g.x,J=g.y,F=g.z;return B[0]=(1-(c+h))*Y,B[1]=(n+k)*Y,B[2]=(w-U)*Y,B[3]=0,B[4]=(n-k)*J,B[5]=(1-(s+h))*J,B[6]=(S+M)*J,B[7]=0,B[8]=(w+U)*F,B[9]=(S-M)*F,B[10]=(1-(s+c))*F,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let Q=fC.set(B[0],B[1],B[2]).length();const E=fC.set(B[4],B[5],B[6]).length(),i=fC.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],eg.copy(this);const t=1/Q,D=1/E,a=1/i;return eg.elements[0]*=t,eg.elements[1]*=t,eg.elements[2]*=t,eg.elements[4]*=D,eg.elements[5]*=D,eg.elements[6]*=D,eg.elements[8]*=a,eg.elements[9]*=a,eg.elements[10]*=a,I.setFromRotationMatrix(eg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,B,Q,E,i=xg){const o=this.elements,t=2*Q/(I-A),D=2*Q/(g-B),a=(I+A)/(I-A),s=(g+B)/(g-B);let n,w;if(i===xg)n=-(E+Q)/(E-Q),w=-2*E*Q/(E-Q);else if(i===JQ)n=-E/(E-Q),w=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=D,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=w,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,B,Q,E,i=xg){const o=this.elements,t=1/(I-A),D=1/(g-B),a=1/(E-Q),s=(I+A)*t,n=(g+B)*D;let w,c;if(i===xg)w=(E+Q)*a,c=-2*a;else if(i===JQ)w=Q*a,c=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*D,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=c,o[14]=-w,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const fC=new m,eg=new hI,Xa=new m(0,0,0),za=new m(1,1,1),jg=new m,AQ=new m,XI=new m,xo=new hI,bo=new BC;class Gg{constructor(A=0,I=0,g=0,B=Gg.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,Q=B[0],E=B[4],i=B[8],o=B[1],t=B[5],D=B[9],a=B[2],s=B[6],n=B[10];switch(I){case"XYZ":this._y=Math.asin(xA(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-D,n),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-xA(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(i,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(xA(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-E,t)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-xA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,t));break;case"YZX":this._z=Math.asin(xA(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-D,t),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,n));break;case"XZY":this._z=Math.asin(-xA(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-D,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return xo.makeRotationFromQuaternion(A),this.setFromRotationMatrix(xo,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return bo.setFromEuler(this),this.setFromQuaternion(bo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gg.DEFAULT_ORDER="XYZ";class Zi{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let $a=0;const Oo=new m,HC=new BC,qg=new hI,IQ=new m,wB=new m,As=new m,Is=new BC,_o=new m(1,0,0),Zo=new m(0,1,0),vo=new m(0,0,1),Wo={type:"added"},gs={type:"removed"},uC={type:"childadded",child:null},eE={type:"childremoved",child:null};class YI extends JC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$a++}),this.uuid=eB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=YI.DEFAULT_UP.clone();const A=new m,I=new Gg,g=new BC,B=new m(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new hI},normalMatrix:{value:new HA}}),this.matrix=new hI,this.matrixWorld=new hI,this.matrixAutoUpdate=YI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return HC.setFromAxisAngle(A,I),this.quaternion.multiply(HC),this}rotateOnWorldAxis(A,I){return HC.setFromAxisAngle(A,I),this.quaternion.premultiply(HC),this}rotateX(A){return this.rotateOnAxis(_o,A)}rotateY(A){return this.rotateOnAxis(Zo,A)}rotateZ(A){return this.rotateOnAxis(vo,A)}translateOnAxis(A,I){return Oo.copy(A).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(_o,A)}translateY(A){return this.translateOnAxis(Zo,A)}translateZ(A){return this.translateOnAxis(vo,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(qg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?IQ.copy(A):IQ.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),wB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qg.lookAt(wB,IQ,this.up):qg.lookAt(IQ,wB,this.up),this.quaternion.setFromRotationMatrix(qg),B&&(qg.extractRotation(B.matrixWorld),HC.setFromRotationMatrix(qg),this.quaternion.premultiply(HC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Wo),uC.child=A,this.dispatchEvent(uC),uC.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(gs),eE.child=A,this.dispatchEvent(eE),eE.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),qg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),qg.multiply(A.parent.matrixWorld)),A.applyMatrix4(qg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Wo),uC.child=A,this.dispatchEvent(uC),uC.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const B=this.children;for(let Q=0,E=B.length;Q<E;Q++)B[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wB,A,As),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wB,Is,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const B=this.children;for(let Q=0,E=B.length;Q<E;Q++)B[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),B.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(B.type="BatchedMesh",B.perObjectFrustumCulled=this.perObjectFrustumCulled,B.sortObjects=this.sortObjects,B.drawRanges=this._drawRanges,B.reservedRanges=this._reservedRanges,B.visibility=this._visibility,B.active=this._active,B.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),B.maxInstanceCount=this._maxInstanceCount,B.maxVertexCount=this._maxVertexCount,B.maxIndexCount=this._maxIndexCount,B.geometryInitialized=this._geometryInitialized,B.geometryCount=this._geometryCount,B.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(B.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(B.boundingSphere={center:B.boundingSphere.center.toArray(),radius:B.boundingSphere.radius}),this.boundingBox!==null&&(B.boundingBox={min:B.boundingBox.min.toArray(),max:B.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let t=0,D=o.length;t<D;t++){const a=o[t];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,t=this.material.length;o<t;o++)i.push(Q(A.materials,this.material[o]));B.material=i}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let i=0;i<this.children.length;i++)B.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];B.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),t=E(A.textures),D=E(A.images),a=E(A.shapes),s=E(A.skeletons),n=E(A.animations),w=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),D.length>0&&(g.images=D),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),w.length>0&&(g.nodes=w)}return g.object=B,g;function E(i){const o=[];for(const t in i){const D=i[t];delete D.metadata,o.push(D)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}YI.DEFAULT_UP=new m(0,1,0);YI.DEFAULT_MATRIX_AUTO_UPDATE=!0;YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dg=new m,Yg=new m,DE=new m,Lg=new m,mC=new m,TC=new m,Po=new m,aE=new m,sE=new m,hE=new m,nE=new GI,SE=new GI,wE=new GI;class wg{constructor(A=new m,I=new m,g=new m){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),Dg.subVectors(A,I),B.cross(Dg);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,I,g,B,Q){Dg.subVectors(B,I),Yg.subVectors(g,I),DE.subVectors(A,I);const E=Dg.dot(Dg),i=Dg.dot(Yg),o=Dg.dot(DE),t=Yg.dot(Yg),D=Yg.dot(DE),a=E*t-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,n=(t*o-i*D)*s,w=(E*D-i*o)*s;return Q.set(1-n-w,w,n)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,Lg)===null?!1:Lg.x>=0&&Lg.y>=0&&Lg.x+Lg.y<=1}static getInterpolation(A,I,g,B,Q,E,i,o){return this.getBarycoord(A,I,g,B,Lg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,Lg.x),o.addScaledVector(E,Lg.y),o.addScaledVector(i,Lg.z),o)}static getInterpolatedAttribute(A,I,g,B,Q,E){return nE.setScalar(0),SE.setScalar(0),wE.setScalar(0),nE.fromBufferAttribute(A,I),SE.fromBufferAttribute(A,g),wE.fromBufferAttribute(A,B),E.setScalar(0),E.addScaledVector(nE,Q.x),E.addScaledVector(SE,Q.y),E.addScaledVector(wE,Q.z),E}static isFrontFacing(A,I,g,B){return Dg.subVectors(g,I),Yg.subVectors(A,I),Dg.cross(Yg).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Dg.subVectors(this.c,this.b),Yg.subVectors(this.a,this.b),Dg.cross(Yg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return wg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return wg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,B,Q){return wg.getInterpolation(A,this.a,this.b,this.c,I,g,B,Q)}containsPoint(A){return wg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return wg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,Q=this.c;let E,i;mC.subVectors(B,g),TC.subVectors(Q,g),aE.subVectors(A,g);const o=mC.dot(aE),t=TC.dot(aE);if(o<=0&&t<=0)return I.copy(g);sE.subVectors(A,B);const D=mC.dot(sE),a=TC.dot(sE);if(D>=0&&a<=D)return I.copy(B);const s=o*a-D*t;if(s<=0&&o>=0&&D<=0)return E=o/(o-D),I.copy(g).addScaledVector(mC,E);hE.subVectors(A,Q);const n=mC.dot(hE),w=TC.dot(hE);if(w>=0&&n<=w)return I.copy(Q);const c=n*t-o*w;if(c<=0&&t>=0&&w<=0)return i=t/(t-w),I.copy(g).addScaledVector(TC,i);const S=D*w-n*a;if(S<=0&&a-D>=0&&n-w>=0)return Po.subVectors(Q,B),i=(a-D)/(a-D+(n-w)),I.copy(B).addScaledVector(Po,i);const h=1/(S+c+s);return E=c*h,i=s*h,I.copy(g).addScaledVector(mC,E).addScaledVector(TC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const Fe={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xg={h:0,s:0,l:0},gQ={h:0,s:0,l:0};function rE(C,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?C+(A-C)*6*I:I<1/2?A:I<2/3?C+(A-C)*6*(2/3-I):C}class ZA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const B=A;B&&B.isColor?this.copy(B):typeof B=="number"?this.setHex(B):typeof B=="string"&&this.setStyle(B)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=Qg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,AI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=AI.workingColorSpace){return this.r=A,this.g=I,this.b=g,AI.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=AI.workingColorSpace){if(A=_i(A,1),I=xA(I,0,1),g=xA(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=rE(E,Q,A+1/3),this.g=rE(E,Q,A),this.b=rE(E,Q,A-1/3)}return AI.toWorkingColorSpace(this,B),this}setStyle(A,I=Qg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=B[1],i=B[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=B[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=Qg){const g=Fe[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=bg(A.r),this.g=bg(A.g),this.b=bg(A.b),this}copyLinearToSRGB(A){return this.r=AB(A.r),this.g=AB(A.g),this.b=AB(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Qg){return AI.fromWorkingColorSpace(TI.copy(this),A),Math.round(xA(TI.r*255,0,255))*65536+Math.round(xA(TI.g*255,0,255))*256+Math.round(xA(TI.b*255,0,255))}getHexString(A=Qg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=AI.workingColorSpace){AI.fromWorkingColorSpace(TI.copy(this),I);const g=TI.r,B=TI.g,Q=TI.b,E=Math.max(g,B,Q),i=Math.min(g,B,Q);let o,t;const D=(i+E)/2;if(i===E)o=0,t=0;else{const a=E-i;switch(t=D<=.5?a/(E+i):a/(2-E-i),E){case g:o=(B-Q)/a+(B<Q?6:0);break;case B:o=(Q-g)/a+2;break;case Q:o=(g-B)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=D,A}getRGB(A,I=AI.workingColorSpace){return AI.fromWorkingColorSpace(TI.copy(this),I),A.r=TI.r,A.g=TI.g,A.b=TI.b,A}getStyle(A=Qg){AI.fromWorkingColorSpace(TI.copy(this),A);const I=TI.r,g=TI.g,B=TI.b;return A!==Qg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${B.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(B*255)})`}offsetHSL(A,I,g){return this.getHSL(Xg),this.setHSL(Xg.h+A,Xg.s+I,Xg.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Xg),A.getHSL(gQ);const g=FB(Xg.h,gQ.h,I),B=FB(Xg.s,gQ.s,I),Q=FB(Xg.l,gQ.l,I);return this.setHSL(g,B,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,B=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*B,this.g=Q[1]*I+Q[4]*g+Q[7]*B,this.b=Q[2]*I+Q[5]*g+Q[8]*B,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const TI=new ZA;ZA.NAMES=Fe;let Cs=0;class FC extends JC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cs++}),this.uuid=eB(),this.name="",this.type="Material",this.blending=zC,this.side=CC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=LE,this.blendDst=fE,this.blendEquation=cC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ZA(0,0,0),this.blendAlpha=0,this.depthFunc=IB,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pC,this.stencilZFail=pC,this.stencilZPass=pC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const B=this[I];if(B===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==zC&&(g.blending=this.blending),this.side!==CC&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==LE&&(g.blendSrc=this.blendSrc),this.blendDst!==fE&&(g.blendDst=this.blendDst),this.blendEquation!==cC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==IB&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==pC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==pC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function B(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=B(A.textures),E=B(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let Q=0;Q!==B;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends FC{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ZA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gg,this.combine=Hi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const UI=new m,CQ=new qA;class Jg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Yo,this.updateRanges=[],this.gpuType=Tg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)CQ.fromBufferAttribute(this,I),CQ.applyMatrix3(A),this.setXY(I,CQ.x,CQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)UI.fromBufferAttribute(this,I),UI.applyMatrix3(A),this.setXYZ(I,UI.x,UI.y,UI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)UI.fromBufferAttribute(this,I),UI.applyMatrix4(A),this.setXYZ(I,UI.x,UI.y,UI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)UI.fromBufferAttribute(this,I),UI.applyNormalMatrix(A),this.setXYZ(I,UI.x,UI.y,UI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)UI.fromBufferAttribute(this,I),UI.transformDirection(A),this.setXYZ(I,UI.x,UI.y,UI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=vC(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=OI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=vC(I,this.array)),I}setX(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=vC(I,this.array)),I}setY(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=vC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=vC(I,this.array)),I}setW(A,I){return this.normalized&&(I=OI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array),B=OI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,Q){return A*=this.itemSize,this.normalized&&(I=OI(I,this.array),g=OI(g,this.array),B=OI(B,this.array),Q=OI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Yo&&(A.usage=this.usage),A}}class Re extends Jg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class pe extends Jg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class xI extends Jg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Bs=0;const Cg=new hI,cE=new YI,xC=new m,zI=new bB,rB=new bB,dI=new m;class kg extends JC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bs++}),this.uuid=eB(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ne(A)?pe:Re)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new HA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Cg.makeRotationFromQuaternion(A),this.applyMatrix4(Cg),this}rotateX(A){return Cg.makeRotationX(A),this.applyMatrix4(Cg),this}rotateY(A){return Cg.makeRotationY(A),this.applyMatrix4(Cg),this}rotateZ(A){return Cg.makeRotationZ(A),this.applyMatrix4(Cg),this}translate(A,I,g){return Cg.makeTranslation(A,I,g),this.applyMatrix4(Cg),this}scale(A,I,g){return Cg.makeScale(A,I,g),this.applyMatrix4(Cg),this}lookAt(A){return cE.lookAt(A),cE.updateMatrix(),this.applyMatrix4(cE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xC).negate(),this.translate(xC.x,xC.y,xC.z),this}setFromPoints(A){const I=this.getAttribute("position");if(I===void 0){const g=[];for(let B=0,Q=A.length;B<Q;B++){const E=A[B];g.push(E.x,E.y,E.z||0)}this.setAttribute("position",new xI(g,3))}else{const g=Math.min(A.length,I.count);for(let B=0;B<g;B++){const Q=A[B];I.setXYZ(B,Q.x,Q.y,Q.z||0)}A.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new m(-1/0,-1/0,-1/0),new m(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const Q=I[g];zI.setFromBufferAttribute(Q),this.morphTargetsRelative?(dI.addVectors(this.boundingBox.min,zI.min),this.boundingBox.expandByPoint(dI),dI.addVectors(this.boundingBox.max,zI.max),this.boundingBox.expandByPoint(dI)):(this.boundingBox.expandByPoint(zI.min),this.boundingBox.expandByPoint(zI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new TQ);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new m,1/0);return}if(A){const g=this.boundingSphere.center;if(zI.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];rB.setFromBufferAttribute(i),this.morphTargetsRelative?(dI.addVectors(zI.min,rB.min),zI.expandByPoint(dI),dI.addVectors(zI.max,rB.max),zI.expandByPoint(dI)):(zI.expandByPoint(rB.min),zI.expandByPoint(rB.max))}zI.getCenter(g);let B=0;for(let Q=0,E=A.count;Q<E;Q++)dI.fromBufferAttribute(A,Q),B=Math.max(B,g.distanceToSquared(dI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let t=0,D=i.count;t<D;t++)dI.fromBufferAttribute(i,t),o&&(xC.fromBufferAttribute(A,t),dI.add(xC)),B=Math.max(B,g.distanceToSquared(dI))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,B=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jg(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let f=0;f<g.count;f++)i[f]=new m,o[f]=new m;const t=new m,D=new m,a=new m,s=new qA,n=new qA,w=new qA,c=new m,S=new m;function h(f,y,l){t.fromBufferAttribute(g,f),D.fromBufferAttribute(g,y),a.fromBufferAttribute(g,l),s.fromBufferAttribute(Q,f),n.fromBufferAttribute(Q,y),w.fromBufferAttribute(Q,l),D.sub(t),a.sub(t),n.sub(s),w.sub(s);const p=1/(n.x*w.y-w.x*n.y);isFinite(p)&&(c.copy(D).multiplyScalar(w.y).addScaledVector(a,-n.y).multiplyScalar(p),S.copy(a).multiplyScalar(n.x).addScaledVector(D,-w.x).multiplyScalar(p),i[f].add(c),i[y].add(c),i[l].add(c),o[f].add(S),o[y].add(S),o[l].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:A.count}]);for(let f=0,y=M.length;f<y;++f){const l=M[f],p=l.start,v=l.count;for(let O=p,V=p+v;O<V;O+=3)h(A.getX(O+0),A.getX(O+1),A.getX(O+2))}const U=new m,k=new m,Y=new m,J=new m;function F(f){Y.fromBufferAttribute(B,f),J.copy(Y);const y=i[f];U.copy(y),U.sub(Y.multiplyScalar(Y.dot(y))).normalize(),k.crossVectors(J,y);const p=k.dot(o[f])<0?-1:1;E.setXYZW(f,U.x,U.y,U.z,p)}for(let f=0,y=M.length;f<y;++f){const l=M[f],p=l.start,v=l.count;for(let O=p,V=p+v;O<V;O+=3)F(A.getX(O+0)),F(A.getX(O+1)),F(A.getX(O+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Jg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const B=new m,Q=new m,E=new m,i=new m,o=new m,t=new m,D=new m,a=new m;if(A)for(let s=0,n=A.count;s<n;s+=3){const w=A.getX(s+0),c=A.getX(s+1),S=A.getX(s+2);B.fromBufferAttribute(I,w),Q.fromBufferAttribute(I,c),E.fromBufferAttribute(I,S),D.subVectors(E,Q),a.subVectors(B,Q),D.cross(a),i.fromBufferAttribute(g,w),o.fromBufferAttribute(g,c),t.fromBufferAttribute(g,S),i.add(D),o.add(D),t.add(D),g.setXYZ(w,i.x,i.y,i.z),g.setXYZ(c,o.x,o.y,o.z),g.setXYZ(S,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)B.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),D.subVectors(E,Q),a.subVectors(B,Q),D.cross(a),g.setXYZ(s+0,D.x,D.y,D.z),g.setXYZ(s+1,D.x,D.y,D.z),g.setXYZ(s+2,D.x,D.y,D.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)dI.fromBufferAttribute(A,I),dI.normalize(),A.setXYZ(I,dI.x,dI.y,dI.z)}toNonIndexed(){function A(i,o){const t=i.array,D=i.itemSize,a=i.normalized,s=new t.constructor(o.length*D);let n=0,w=0;for(let c=0,S=o.length;c<S;c++){i.isInterleavedBufferAttribute?n=o[c]*i.data.stride+i.offset:n=o[c]*D;for(let h=0;h<D;h++)s[w++]=t[n++]}return new Jg(s,D,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new kg,g=this.index.array,B=this.attributes;for(const i in B){const o=B[i],t=A(o,g);I.setAttribute(i,t)}const Q=this.morphAttributes;for(const i in Q){const o=[],t=Q[i];for(let D=0,a=t.length;D<a;D++){const s=t[D],n=A(s,g);o.push(n)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const t=E[i];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const B={};let Q=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],D=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];D.push(n.toJSON(A.data))}D.length>0&&(B[o]=D,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const t in B){const D=B[t];this.setAttribute(t,D.clone(I))}const Q=A.morphAttributes;for(const t in Q){const D=[],a=Q[t];for(let s=0,n=a.length;s<n;s++)D.push(a[s].clone(I));this.morphAttributes[t]=D}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let t=0,D=E.length;t<D;t++){const a=E[t];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new hI,sC=new xQ,BQ=new TQ,jo=new m,QQ=new m,EQ=new m,iQ=new m,GE=new m,oQ=new m,Xo=new m,tQ=new m;class WI extends YI{constructor(A=new kg,I=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=B.length;Q<E;Q++){const i=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,B=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(B,A);const i=this.morphTargetInfluences;if(Q&&i){oQ.set(0,0,0);for(let o=0,t=Q.length;o<t;o++){const D=i[o],a=Q[o];D!==0&&(GE.fromBufferAttribute(a,A),E?oQ.addScaledVector(GE,D):oQ.addScaledVector(GE.sub(I),D))}I.add(oQ)}return I}raycast(A,I){const g=this.geometry,B=this.material,Q=this.matrixWorld;B!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),BQ.copy(g.boundingSphere),BQ.applyMatrix4(Q),sC.copy(A.ray).recast(A.near),!(BQ.containsPoint(sC.origin)===!1&&(sC.intersectSphere(BQ,jo)===null||sC.origin.distanceToSquared(jo)>(A.far-A.near)**2))&&(Vo.copy(Q).invert(),sC.copy(A.ray).applyMatrix4(Vo),!(g.boundingBox!==null&&sC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,sC)))}_computeIntersections(A,I,g){let B;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,t=Q.attributes.uv,D=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,n=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let w=0,c=s.length;w<c;w++){const S=s[w],h=E[S.materialIndex],M=Math.max(S.start,n.start),U=Math.min(i.count,Math.min(S.start+S.count,n.start+n.count));for(let k=M,Y=U;k<Y;k+=3){const J=i.getX(k),F=i.getX(k+1),f=i.getX(k+2);B=eQ(this,h,A,g,t,D,a,J,F,f),B&&(B.faceIndex=Math.floor(k/3),B.face.materialIndex=S.materialIndex,I.push(B))}}else{const w=Math.max(0,n.start),c=Math.min(i.count,n.start+n.count);for(let S=w,h=c;S<h;S+=3){const M=i.getX(S),U=i.getX(S+1),k=i.getX(S+2);B=eQ(this,E,A,g,t,D,a,M,U,k),B&&(B.faceIndex=Math.floor(S/3),I.push(B))}}else if(o!==void 0)if(Array.isArray(E))for(let w=0,c=s.length;w<c;w++){const S=s[w],h=E[S.materialIndex],M=Math.max(S.start,n.start),U=Math.min(o.count,Math.min(S.start+S.count,n.start+n.count));for(let k=M,Y=U;k<Y;k+=3){const J=k,F=k+1,f=k+2;B=eQ(this,h,A,g,t,D,a,J,F,f),B&&(B.faceIndex=Math.floor(k/3),B.face.materialIndex=S.materialIndex,I.push(B))}}else{const w=Math.max(0,n.start),c=Math.min(o.count,n.start+n.count);for(let S=w,h=c;S<h;S+=3){const M=S,U=S+1,k=S+2;B=eQ(this,E,A,g,t,D,a,M,U,k),B&&(B.faceIndex=Math.floor(S/3),I.push(B))}}}}function Qs(C,A,I,g,B,Q,E,i){let o;if(A.side===PI?o=g.intersectTriangle(E,Q,B,!0,i):o=g.intersectTriangle(B,Q,E,A.side===CC,i),o===null)return null;tQ.copy(i),tQ.applyMatrix4(C.matrixWorld);const t=I.ray.origin.distanceTo(tQ);return t<I.near||t>I.far?null:{distance:t,point:tQ.clone(),object:C}}function eQ(C,A,I,g,B,Q,E,i,o,t){C.getVertexPosition(i,QQ),C.getVertexPosition(o,EQ),C.getVertexPosition(t,iQ);const D=Qs(C,A,I,g,QQ,EQ,iQ,Xo);if(D){const a=new m;wg.getBarycoord(Xo,QQ,EQ,iQ,a),B&&(D.uv=wg.getInterpolatedAttribute(B,i,o,t,a,new qA)),Q&&(D.uv1=wg.getInterpolatedAttribute(Q,i,o,t,a,new qA)),E&&(D.normal=wg.getInterpolatedAttribute(E,i,o,t,a,new m),D.normal.dot(g.direction)>0&&D.normal.multiplyScalar(-1));const s={a:i,b:o,c:t,normal:new m,materialIndex:0};wg.getNormal(QQ,EQ,iQ,s.normal),D.face=s,D.barycoord=a}return D}class QC extends kg{constructor(A=1,I=1,g=1,B=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:Q,depthSegments:E};const i=this;B=Math.floor(B),Q=Math.floor(Q),E=Math.floor(E);const o=[],t=[],D=[],a=[];let s=0,n=0;w("z","y","x",-1,-1,g,I,A,E,Q,0),w("z","y","x",1,-1,g,I,-A,E,Q,1),w("x","z","y",1,1,A,g,I,B,E,2),w("x","z","y",1,-1,A,g,-I,B,E,3),w("x","y","z",1,-1,A,I,g,B,Q,4),w("x","y","z",-1,-1,A,I,-g,B,Q,5),this.setIndex(o),this.setAttribute("position",new xI(t,3)),this.setAttribute("normal",new xI(D,3)),this.setAttribute("uv",new xI(a,2));function w(c,S,h,M,U,k,Y,J,F,f,y){const l=k/F,p=Y/f,v=k/2,O=Y/2,V=J/2,AA=F+1,W=f+1;let CA=0,Z=0;const oA=new m;for(let hA=0;hA<W;hA++){const kA=hA*p-O;for(let bA=0;bA<AA;bA++){const iI=bA*l-v;oA[c]=iI*M,oA[S]=kA*U,oA[h]=V,t.push(oA.x,oA.y,oA.z),oA[c]=0,oA[S]=0,oA[h]=J>0?1:-1,D.push(oA.x,oA.y,oA.z),a.push(bA/F),a.push(1-hA/f),CA+=1}}for(let hA=0;hA<f;hA++)for(let kA=0;kA<F;kA++){const bA=s+kA+AA*hA,iI=s+kA+AA*(hA+1),j=s+(kA+1)+AA*(hA+1),BA=s+(kA+1)+AA*hA;o.push(bA,iI,BA),o.push(iI,j,BA),Z+=6}i.addGroup(n,Z,y),n+=Z,s+=CA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new QC(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function iB(C){const A={};for(const I in C){A[I]={};for(const g in C[I]){const B=C[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?B.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function _I(C){const A={};for(let I=0;I<C.length;I++){const g=iB(C[I]);for(const B in g)A[B]=g[B]}return A}function Es(C){const A=[];for(let I=0;I<C.length;I++)A.push(C[I].clone());return A}function de(C){const A=C.getRenderTarget();return A===null?C.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:AI.workingColorSpace}const is={clone:iB,merge:_I};var os=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ts=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class EC extends FC{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=os,this.fragmentShader=ts,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=iB(A.uniforms),this.uniformsGroups=Es(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const E=this.uniforms[B].value;E&&E.isTexture?I.uniforms[B]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[B]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[B]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[B]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[B]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[B]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[B]={type:"m4",value:E.toArray()}:I.uniforms[B]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class qe extends YI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hI,this.projectionMatrix=new hI,this.projectionMatrixInverse=new hI,this.coordinateSystem=xg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zg=new m,zo=new qA,$o=new qA;class Eg extends qe{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=qB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(JB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return qB*2*Math.atan(Math.tan(JB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){zg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(zg.x,zg.y).multiplyScalar(-A/zg.z),zg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(zg.x,zg.y).multiplyScalar(-A/zg.z)}getViewSize(A,I){return this.getViewBounds(A,zo,$o),I.subVectors($o,zo)}setViewOffset(A,I,g,B,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(JB*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,Q=-.5*B;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,t=E.fullHeight;Q+=E.offsetX*B/o,I-=E.offsetY*g/t,B*=E.width/o,g*=E.height/t}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const bC=-90,OC=1;class es extends YI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const B=new Eg(bC,OC,A,I);B.layers=this.layers,this.add(B);const Q=new Eg(bC,OC,A,I);Q.layers=this.layers,this.add(Q);const E=new Eg(bC,OC,A,I);E.layers=this.layers,this.add(E);const i=new Eg(bC,OC,A,I);i.layers=this.layers,this.add(i);const o=new Eg(bC,OC,A,I);o.layers=this.layers,this.add(o);const t=new Eg(bC,OC,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,B,Q,E,i,o]=I;for(const t of I)this.remove(t);if(A===xg)g.up.set(0,1,0),g.lookAt(1,0,0),B.up.set(0,1,0),B.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===JQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),B.up.set(0,-1,0),B.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:B}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,t,D]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),w=A.xr.enabled;A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,B),A.render(I,Q),A.setRenderTarget(g,1,B),A.render(I,E),A.setRenderTarget(g,2,B),A.render(I,i),A.setRenderTarget(g,3,B),A.render(I,o),A.setRenderTarget(g,4,B),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5,B),A.render(I,D),A.setRenderTarget(a,s,n),A.xr.enabled=w,g.texture.needsPMREMUpdate=!0}}class Ye extends VI{constructor(A,I,g,B,Q,E,i,o,t,D){A=A!==void 0?A:[],I=I!==void 0?I:gB,super(A,I,g,B,Q,E,i,o,t,D),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Ds extends MC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new Ye(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Kg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new QC(5,5,5),Q=new EC({name:"CubemapFromEquirect",uniforms:iB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:PI,blending:IC});Q.uniforms.tEquirect.value=I;const E=new WI(B,Q),i=I.minFilter;return I.minFilter===kC&&(I.minFilter=Kg),new es(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,B){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,B);A.setRenderTarget(Q)}}class as extends YI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gg,this.environmentIntensity=1,this.environmentRotation=new Gg,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}const lE=new m,ss=new m,hs=new HA;class $g{constructor(A=new m(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=lE.subVectors(g,I).cross(ss.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(lE),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||hs.getNormalMatrix(A),B=this.coplanarPoint(lE).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hC=new TQ,DQ=new m;class Wi{constructor(A=new $g,I=new $g,g=new $g,B=new $g,Q=new $g,E=new $g){this.planes=[A,I,g,B,Q,E]}set(A,I,g,B,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(B),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=xg){const g=this.planes,B=A.elements,Q=B[0],E=B[1],i=B[2],o=B[3],t=B[4],D=B[5],a=B[6],s=B[7],n=B[8],w=B[9],c=B[10],S=B[11],h=B[12],M=B[13],U=B[14],k=B[15];if(g[0].setComponents(o-Q,s-t,S-n,k-h).normalize(),g[1].setComponents(o+Q,s+t,S+n,k+h).normalize(),g[2].setComponents(o+E,s+D,S+w,k+M).normalize(),g[3].setComponents(o-E,s-D,S-w,k-M).normalize(),g[4].setComponents(o-i,s-a,S-c,k-U).normalize(),I===xg)g[5].setComponents(o+i,s+a,S+c,k+U).normalize();else if(I===JQ)g[5].setComponents(i,a,c,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),hC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),hC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(hC)}intersectsSprite(A){return hC.center.set(0,0,0),hC.radius=.7071067811865476,hC.applyMatrix4(A.matrixWorld),this.intersectsSphere(hC)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(DQ.x=B.normal.x>0?A.max.x:A.min.x,DQ.y=B.normal.y>0?A.max.y:A.min.y,DQ.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(DQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Le extends FC{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ZA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const RQ=new m,pQ=new m,At=new hI,cB=new xQ,aQ=new TQ,kE=new m,It=new m;class ns extends YI{constructor(A=new kg,I=new Le){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let B=1,Q=I.count;B<Q;B++)RQ.fromBufferAttribute(I,B-1),pQ.fromBufferAttribute(I,B),g[B]=g[B-1],g[B]+=RQ.distanceTo(pQ);A.setAttribute("lineDistance",new xI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,B=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),aQ.copy(g.boundingSphere),aQ.applyMatrix4(B),aQ.radius+=Q,A.ray.intersectsSphere(aQ)===!1)return;At.copy(B).invert(),cB.copy(A.ray).applyMatrix4(At);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,t=this.isLineSegments?2:1,D=g.index,s=g.attributes.position;if(D!==null){const n=Math.max(0,E.start),w=Math.min(D.count,E.start+E.count);for(let c=n,S=w-1;c<S;c+=t){const h=D.getX(c),M=D.getX(c+1),U=sQ(this,A,cB,o,h,M);U&&I.push(U)}if(this.isLineLoop){const c=D.getX(w-1),S=D.getX(n),h=sQ(this,A,cB,o,c,S);h&&I.push(h)}}else{const n=Math.max(0,E.start),w=Math.min(s.count,E.start+E.count);for(let c=n,S=w-1;c<S;c+=t){const h=sQ(this,A,cB,o,c,c+1);h&&I.push(h)}if(this.isLineLoop){const c=sQ(this,A,cB,o,w-1,n);c&&I.push(c)}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=B.length;Q<E;Q++){const i=B[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}}function sQ(C,A,I,g,B,Q){const E=C.geometry.attributes.position;if(RQ.fromBufferAttribute(E,B),pQ.fromBufferAttribute(E,Q),I.distanceSqToSegment(RQ,pQ,kE,It)>g)return;kE.applyMatrix4(C.matrixWorld);const o=A.ray.origin.distanceTo(kE);if(!(o<A.near||o>A.far))return{distance:o,point:It.clone().applyMatrix4(C.matrixWorld),index:B,face:null,faceIndex:null,barycoord:null,object:C}}const gt=new m,Ct=new m;class Ss extends ns{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let B=0,Q=I.count;B<Q;B+=2)gt.fromBufferAttribute(I,B),Ct.fromBufferAttribute(I,B+1),g[B]=B===0?0:g[B-1],g[B+1]=g[B]+gt.distanceTo(Ct);A.setAttribute("lineDistance",new xI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hQ extends YI{constructor(){super(),this.isGroup=!0,this.type="Group"}}class fe extends VI{constructor(A,I,g,B,Q,E,i,o,t,D=$C){if(D!==$C&&D!==QB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&D===$C&&(g=UC),g===void 0&&D===QB&&(g=BB),super(null,B,Q,E,i,o,D,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:cg,this.minFilter=o!==void 0?o:cg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class Pi extends kg{constructor(A=[],I=[],g=1,B=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:B};const Q=[],E=[];i(B),t(g),D(),this.setAttribute("position",new xI(Q,3)),this.setAttribute("normal",new xI(Q.slice(),3)),this.setAttribute("uv",new xI(E,2)),B===0?this.computeVertexNormals():this.normalizeNormals();function i(M){const U=new m,k=new m,Y=new m;for(let J=0;J<I.length;J+=3)n(I[J+0],U),n(I[J+1],k),n(I[J+2],Y),o(U,k,Y,M)}function o(M,U,k,Y){const J=Y+1,F=[];for(let f=0;f<=J;f++){F[f]=[];const y=M.clone().lerp(k,f/J),l=U.clone().lerp(k,f/J),p=J-f;for(let v=0;v<=p;v++)v===0&&f===J?F[f][v]=y:F[f][v]=y.clone().lerp(l,v/p)}for(let f=0;f<J;f++)for(let y=0;y<2*(J-f)-1;y++){const l=Math.floor(y/2);y%2===0?(s(F[f][l+1]),s(F[f+1][l]),s(F[f][l])):(s(F[f][l+1]),s(F[f+1][l+1]),s(F[f+1][l]))}}function t(M){const U=new m;for(let k=0;k<Q.length;k+=3)U.x=Q[k+0],U.y=Q[k+1],U.z=Q[k+2],U.normalize().multiplyScalar(M),Q[k+0]=U.x,Q[k+1]=U.y,Q[k+2]=U.z}function D(){const M=new m;for(let U=0;U<Q.length;U+=3){M.x=Q[U+0],M.y=Q[U+1],M.z=Q[U+2];const k=S(M)/2/Math.PI+.5,Y=h(M)/Math.PI+.5;E.push(k,1-Y)}w(),a()}function a(){for(let M=0;M<E.length;M+=6){const U=E[M+0],k=E[M+2],Y=E[M+4],J=Math.max(U,k,Y),F=Math.min(U,k,Y);J>.9&&F<.1&&(U<.2&&(E[M+0]+=1),k<.2&&(E[M+2]+=1),Y<.2&&(E[M+4]+=1))}}function s(M){Q.push(M.x,M.y,M.z)}function n(M,U){const k=M*3;U.x=A[k+0],U.y=A[k+1],U.z=A[k+2]}function w(){const M=new m,U=new m,k=new m,Y=new m,J=new qA,F=new qA,f=new qA;for(let y=0,l=0;y<Q.length;y+=9,l+=6){M.set(Q[y+0],Q[y+1],Q[y+2]),U.set(Q[y+3],Q[y+4],Q[y+5]),k.set(Q[y+6],Q[y+7],Q[y+8]),J.set(E[l+0],E[l+1]),F.set(E[l+2],E[l+3]),f.set(E[l+4],E[l+5]),Y.copy(M).add(U).add(k).divideScalar(3);const p=S(Y);c(J,l+0,M,p),c(F,l+2,U,p),c(f,l+4,k,p)}}function c(M,U,k,Y){Y<0&&M.x===1&&(E[U]=M.x-1),k.x===0&&k.z===0&&(E[U]=Y/2/Math.PI+.5)}function S(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Pi(A.vertices,A.indices,A.radius,A.details)}}class bQ extends kg{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(B),t=i+1,D=o+1,a=A/i,s=I/o,n=[],w=[],c=[],S=[];for(let h=0;h<D;h++){const M=h*s-E;for(let U=0;U<t;U++){const k=U*a-Q;w.push(k,-M,0),c.push(0,0,1),S.push(U/i),S.push(1-h/o)}}for(let h=0;h<o;h++)for(let M=0;M<i;M++){const U=M+t*h,k=M+t*(h+1),Y=M+1+t*(h+1),J=M+1+t*h;n.push(U,k,J),n.push(k,Y,J)}this.setIndex(n),this.setAttribute("position",new xI(w,3)),this.setAttribute("normal",new xI(c,3)),this.setAttribute("uv",new xI(S,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new bQ(A.width,A.height,A.widthSegments,A.heightSegments)}}class Vi extends kg{constructor(A=1,I=32,g=16,B=0,Q=Math.PI*2,E=0,i=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:g,phiStart:B,phiLength:Q,thetaStart:E,thetaLength:i},I=Math.max(3,Math.floor(I)),g=Math.max(2,Math.floor(g));const o=Math.min(E+i,Math.PI);let t=0;const D=[],a=new m,s=new m,n=[],w=[],c=[],S=[];for(let h=0;h<=g;h++){const M=[],U=h/g;let k=0;h===0&&E===0?k=.5/I:h===g&&o===Math.PI&&(k=-.5/I);for(let Y=0;Y<=I;Y++){const J=Y/I;a.x=-A*Math.cos(B+J*Q)*Math.sin(E+U*i),a.y=A*Math.cos(E+U*i),a.z=A*Math.sin(B+J*Q)*Math.sin(E+U*i),w.push(a.x,a.y,a.z),s.copy(a).normalize(),c.push(s.x,s.y,s.z),S.push(J+k,1-U),M.push(t++)}D.push(M)}for(let h=0;h<g;h++)for(let M=0;M<I;M++){const U=D[h][M+1],k=D[h][M],Y=D[h+1][M],J=D[h+1][M+1];(h!==0||E>0)&&n.push(U,k,J),(h!==g-1||o<Math.PI)&&n.push(k,Y,J)}this.setIndex(n),this.setAttribute("position",new xI(w,3)),this.setAttribute("normal",new xI(c,3)),this.setAttribute("uv",new xI(S,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Vi(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class ji extends Pi{constructor(A=1,I=0){const g=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],B=[2,1,0,0,3,2,1,3,0,2,3,1];super(g,B,A,I),this.type="TetrahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new ji(A.radius,A.detail)}}class ws extends FC{constructor(A){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ZA(0),this.transparent=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.fog=A.fog,this}}class rs extends FC{constructor(A){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ZA(16777215),this.specular=new ZA(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ZA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ue,this.normalScale=new qA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gg,this.combine=Hi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.specular.copy(A.specular),this.shininess=A.shininess,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class cs extends FC{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Gs extends FC{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}class He extends YI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new ZA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}class ls extends He{constructor(A,I,g){super(A,g),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(YI.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ZA(I)}copy(A,I){return super.copy(A,I),this.groundColor.copy(A.groundColor),this}}const yE=new hI,Bt=new m,Qt=new m;class ks{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qA(512,512),this.map=null,this.mapPass=null,this.matrix=new hI,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new qA(1,1),this._viewportCount=1,this._viewports=[new GI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Bt.setFromMatrixPosition(A.matrixWorld),I.position.copy(Bt),Qt.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Qt),I.updateMatrixWorld(),yE.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yE),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(yE)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class ue extends qe{constructor(A=-1,I=1,g=1,B=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=B+I,o=B-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,D=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=t*this.view.offsetX,E=Q+t*this.view.width,i-=D*this.view.offsetY,o=i-D*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}class ys extends ks{constructor(){super(new ue(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Us extends He{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(YI.DEFAULT_UP),this.updateMatrix(),this.target=new YI,this.shadow=new ys}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class Ms extends Eg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Ns{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Et(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Et();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Et(){return performance.now()}const it=new hI;class Ks{constructor(A,I,g=0,B=1/0){this.ray=new xQ(A,I),this.near=g,this.far=B,this.camera=null,this.layers=new Zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}setFromXRController(A){return it.identity().extractRotation(A.matrixWorld),this.ray.origin.setFromMatrixPosition(A.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(it),this}intersectObject(A,I=!0,g=[]){return Gi(A,this,g,I),g.sort(ot),g}intersectObjects(A,I=!0,g=[]){for(let B=0,Q=A.length;B<Q;B++)Gi(A[B],this,g,I);return g.sort(ot),g}}function ot(C,A){return C.distance-A.distance}function Gi(C,A,I,g){let B=!0;if(C.layers.test(A.layers)&&C.raycast(A,I)===!1&&(B=!1),B===!0&&g===!0){const Q=C.children;for(let E=0,i=Q.length;E<i;E++)Gi(Q[E],A,I,!0)}}class tt{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=xA(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(xA(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Js extends JC{constructor(A,I=null){super(),this.object=A,this.domElement=I,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function et(C,A,I,g){const B=Fs(g);switch(I){case we:return C*A;case ce:return C*A;case Ge:return C*A*2;case le:return C*A/B.components*B.byteLength;case xi:return C*A/B.components*B.byteLength;case ke:return C*A*2/B.components*B.byteLength;case bi:return C*A*2/B.components*B.byteLength;case re:return C*A*3/B.components*B.byteLength;case rg:return C*A*4/B.components*B.byteLength;case Oi:return C*A*4/B.components*B.byteLength;case GQ:case lQ:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*8;case kQ:case yQ:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case VE:case XE:return Math.max(C,16)*Math.max(A,8)/4;case PE:case jE:return Math.max(C,8)*Math.max(A,8)/2;case zE:case $E:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*8;case Ai:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case Ii:return Math.floor((C+3)/4)*Math.floor((A+3)/4)*16;case gi:return Math.floor((C+4)/5)*Math.floor((A+3)/4)*16;case Ci:return Math.floor((C+4)/5)*Math.floor((A+4)/5)*16;case Bi:return Math.floor((C+5)/6)*Math.floor((A+4)/5)*16;case Qi:return Math.floor((C+5)/6)*Math.floor((A+5)/6)*16;case Ei:return Math.floor((C+7)/8)*Math.floor((A+4)/5)*16;case ii:return Math.floor((C+7)/8)*Math.floor((A+5)/6)*16;case oi:return Math.floor((C+7)/8)*Math.floor((A+7)/8)*16;case ti:return Math.floor((C+9)/10)*Math.floor((A+4)/5)*16;case ei:return Math.floor((C+9)/10)*Math.floor((A+5)/6)*16;case Di:return Math.floor((C+9)/10)*Math.floor((A+7)/8)*16;case ai:return Math.floor((C+9)/10)*Math.floor((A+9)/10)*16;case si:return Math.floor((C+11)/12)*Math.floor((A+9)/10)*16;case hi:return Math.floor((C+11)/12)*Math.floor((A+11)/12)*16;case UQ:case ni:case Si:return Math.ceil(C/4)*Math.ceil(A/4)*16;case ye:case wi:return Math.ceil(C/4)*Math.ceil(A/4)*8;case ri:case ci:return Math.ceil(C/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function Fs(C){switch(C){case Og:case he:return{byteLength:1,components:1};case dB:case ne:case xB:return{byteLength:2,components:1};case mi:case Ti:return{byteLength:2,components:4};case UC:case ui:case Tg:return{byteLength:4,components:1};case Se:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${C}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fi);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function me(){let C=null,A=!1,I=null,g=null;function B(Q,E){I(Q,E),g=C.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=C.requestAnimationFrame(B),A=!0)},stop:function(){C.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){C=Q}}}function Rs(C){const A=new WeakMap;function I(i,o){const t=i.array,D=i.usage,a=t.byteLength,s=C.createBuffer();C.bindBuffer(o,s),C.bufferData(o,t,D),i.onUploadCallback();let n;if(t instanceof Float32Array)n=C.FLOAT;else if(t instanceof Uint16Array)i.isFloat16BufferAttribute?n=C.HALF_FLOAT:n=C.UNSIGNED_SHORT;else if(t instanceof Int16Array)n=C.SHORT;else if(t instanceof Uint32Array)n=C.UNSIGNED_INT;else if(t instanceof Int32Array)n=C.INT;else if(t instanceof Int8Array)n=C.BYTE;else if(t instanceof Uint8Array)n=C.UNSIGNED_BYTE;else if(t instanceof Uint8ClampedArray)n=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+t);return{buffer:s,type:n,bytesPerElement:t.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,t){const D=o.array,a=o.updateRanges;if(C.bindBuffer(t,i),a.length===0)C.bufferSubData(t,0,D);else{a.sort((n,w)=>n.start-w.start);let s=0;for(let n=1;n<a.length;n++){const w=a[s],c=a[n];c.start<=w.start+w.count+1?w.count=Math.max(w.count,c.start+c.count-w.start):(++s,a[s]=c)}a.length=s+1;for(let n=0,w=a.length;n<w;n++){const c=a[n];C.bufferSubData(t,c.start*D.BYTES_PER_ELEMENT,D,c.start,c.count)}o.clearUpdateRanges()}o.onUploadCallback()}function B(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(C.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const D=A.get(i);(!D||D.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const t=A.get(i);if(t===void 0)A.set(i,I(i,o));else if(t.version<i.version){if(t.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(t.buffer,i,o),t.version=i.version}}return{get:B,remove:Q,update:E}}var ps=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ds=`#ifdef USE_ALPHAHASH
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
#endif`,qs=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ys=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ls=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hs=`#ifdef USE_AOMAP
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
#endif`,us=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ms=`#ifdef USE_BATCHING
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
#endif`,Ts=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Os=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_s=`#ifdef USE_IRIDESCENCE
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
#endif`,Zs=`#ifdef USE_BUMPMAP
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
#endif`,vs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ws=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ps=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,js=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$s=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ah=`#define PI 3.141592653589793
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
} // validated`,Ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",oh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,th=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
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
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
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
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
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
#endif`,Fh=`struct PhysicalMaterial {
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
}`,Rh=`
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_h=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vh=`#ifdef USE_MORPHTARGETS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,An=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,In=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gn=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cn=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qn=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,En=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,on=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tn=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,en=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,an=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nn=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sn=`float getShadowMask() {
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
}`,wn=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rn=`#ifdef USE_SKINNING
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
#endif`,cn=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gn=`#ifdef USE_SKINNING
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
#endif`,ln=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Un=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mn=`#ifdef USE_TRANSMISSION
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
#endif`,Nn=`#ifdef USE_TRANSMISSION
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
#endif`,Kn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dn=`uniform sampler2D t2D;
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
}`,qn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yn=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ln=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hn=`#include <common>
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
}`,un=`#if DEPTH_PACKING == 3200
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
}`,mn=`#define DISTANCE
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
}`,Tn=`#define DISTANCE
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
}`,xn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bn=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,On=`uniform float scale;
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
}`,_n=`uniform vec3 diffuse;
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
}`,Zn=`#include <common>
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
}`,vn=`uniform vec3 diffuse;
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
}`,Wn=`#define LAMBERT
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
}`,Pn=`#define LAMBERT
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
}`,Vn=`#define MATCAP
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
}`,jn=`#define MATCAP
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
}`,Xn=`#define NORMAL
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
}`,zn=`#define NORMAL
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
}`,$n=`#define PHONG
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
}`,AS=`#define PHONG
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
}`,IS=`#define STANDARD
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
}`,gS=`#define STANDARD
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
}`,CS=`#define TOON
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
}`,BS=`#define TOON
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
}`,QS=`uniform float size;
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
}`,ES=`uniform vec3 diffuse;
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
}`,iS=`#include <common>
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
}`,oS=`uniform vec3 color;
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
}`,tS=`uniform float rotation;
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
}`,eS=`uniform vec3 diffuse;
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
}`,mA={alphahash_fragment:ps,alphahash_pars_fragment:ds,alphamap_fragment:qs,alphamap_pars_fragment:Ys,alphatest_fragment:Ls,alphatest_pars_fragment:fs,aomap_fragment:Hs,aomap_pars_fragment:us,batching_pars_vertex:ms,batching_vertex:Ts,begin_vertex:xs,beginnormal_vertex:bs,bsdfs:Os,iridescence_fragment:_s,bumpmap_pars_fragment:Zs,clipping_planes_fragment:vs,clipping_planes_pars_fragment:Ws,clipping_planes_pars_vertex:Ps,clipping_planes_vertex:Vs,color_fragment:js,color_pars_fragment:Xs,color_pars_vertex:zs,color_vertex:$s,common:Ah,cube_uv_reflection_fragment:Ih,defaultnormal_vertex:gh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Bh,emissivemap_fragment:Qh,emissivemap_pars_fragment:Eh,colorspace_fragment:ih,colorspace_pars_fragment:oh,envmap_fragment:th,envmap_common_pars_fragment:eh,envmap_pars_fragment:Dh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:yh,envmap_vertex:sh,fog_vertex:hh,fog_pars_vertex:nh,fog_fragment:Sh,fog_pars_fragment:wh,gradientmap_pars_fragment:rh,lightmap_pars_fragment:ch,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:lh,lights_pars_begin:kh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Mh,lights_phong_fragment:Nh,lights_phong_pars_fragment:Kh,lights_physical_fragment:Jh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Rh,lights_fragment_maps:ph,lights_fragment_end:dh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:Yh,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:fh,map_fragment:Hh,map_pars_fragment:uh,map_particle_fragment:mh,map_particle_pars_fragment:Th,metalnessmap_fragment:xh,metalnessmap_pars_fragment:bh,morphinstance_vertex:Oh,morphcolor_vertex:_h,morphnormal_vertex:Zh,morphtarget_pars_vertex:vh,morphtarget_vertex:Wh,normal_fragment_begin:Ph,normal_fragment_maps:Vh,normal_pars_fragment:jh,normal_pars_vertex:Xh,normal_vertex:zh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:An,clearcoat_normal_fragment_maps:In,clearcoat_pars_fragment:gn,iridescence_pars_fragment:Cn,opaque_fragment:Bn,packing:Qn,premultiplied_alpha_fragment:En,project_vertex:on,dithering_fragment:tn,dithering_pars_fragment:en,roughnessmap_fragment:Dn,roughnessmap_pars_fragment:an,shadowmap_pars_fragment:sn,shadowmap_pars_vertex:hn,shadowmap_vertex:nn,shadowmask_pars_fragment:Sn,skinbase_vertex:wn,skinning_pars_vertex:rn,skinning_vertex:cn,skinnormal_vertex:Gn,specularmap_fragment:ln,specularmap_pars_fragment:kn,tonemapping_fragment:yn,tonemapping_pars_fragment:Un,transmission_fragment:Mn,transmission_pars_fragment:Nn,uv_pars_fragment:Kn,uv_pars_vertex:Jn,uv_vertex:Fn,worldpos_vertex:Rn,background_vert:pn,background_frag:dn,backgroundCube_vert:qn,backgroundCube_frag:Yn,cube_vert:Ln,cube_frag:fn,depth_vert:Hn,depth_frag:un,distanceRGBA_vert:mn,distanceRGBA_frag:Tn,equirect_vert:xn,equirect_frag:bn,linedashed_vert:On,linedashed_frag:_n,meshbasic_vert:Zn,meshbasic_frag:vn,meshlambert_vert:Wn,meshlambert_frag:Pn,meshmatcap_vert:Vn,meshmatcap_frag:jn,meshnormal_vert:Xn,meshnormal_frag:zn,meshphong_vert:$n,meshphong_frag:AS,meshphysical_vert:IS,meshphysical_frag:gS,meshtoon_vert:CS,meshtoon_frag:BS,points_vert:QS,points_frag:ES,shadow_vert:iS,shadow_frag:oS,sprite_vert:tS,sprite_frag:eS},QA={common:{diffuse:{value:new ZA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new HA},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new HA}},envmap:{envMap:{value:null},envMapRotation:{value:new HA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new HA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new HA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new HA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new HA},normalScale:{value:new qA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new HA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new HA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new HA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new HA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ZA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ZA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0},uvTransform:{value:new HA}},sprite:{diffuse:{value:new ZA(16777215)},opacity:{value:1},center:{value:new qA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new HA},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0}}},Ug={basic:{uniforms:_I([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.fog]),vertexShader:mA.meshbasic_vert,fragmentShader:mA.meshbasic_frag},lambert:{uniforms:_I([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:mA.meshlambert_vert,fragmentShader:mA.meshlambert_frag},phong:{uniforms:_I([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)},specular:{value:new ZA(1118481)},shininess:{value:30}}]),vertexShader:mA.meshphong_vert,fragmentShader:mA.meshphong_frag},standard:{uniforms:_I([QA.common,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.roughnessmap,QA.metalnessmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag},toon:{uniforms:_I([QA.common,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.gradientmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:mA.meshtoon_vert,fragmentShader:mA.meshtoon_frag},matcap:{uniforms:_I([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,{matcap:{value:null}}]),vertexShader:mA.meshmatcap_vert,fragmentShader:mA.meshmatcap_frag},points:{uniforms:_I([QA.points,QA.fog]),vertexShader:mA.points_vert,fragmentShader:mA.points_frag},dashed:{uniforms:_I([QA.common,QA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mA.linedashed_vert,fragmentShader:mA.linedashed_frag},depth:{uniforms:_I([QA.common,QA.displacementmap]),vertexShader:mA.depth_vert,fragmentShader:mA.depth_frag},normal:{uniforms:_I([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,{opacity:{value:1}}]),vertexShader:mA.meshnormal_vert,fragmentShader:mA.meshnormal_frag},sprite:{uniforms:_I([QA.sprite,QA.fog]),vertexShader:mA.sprite_vert,fragmentShader:mA.sprite_frag},background:{uniforms:{uvTransform:{value:new HA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mA.background_vert,fragmentShader:mA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new HA}},vertexShader:mA.backgroundCube_vert,fragmentShader:mA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mA.cube_vert,fragmentShader:mA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mA.equirect_vert,fragmentShader:mA.equirect_frag},distanceRGBA:{uniforms:_I([QA.common,QA.displacementmap,{referencePosition:{value:new m},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mA.distanceRGBA_vert,fragmentShader:mA.distanceRGBA_frag},shadow:{uniforms:_I([QA.lights,QA.fog,{color:{value:new ZA(0)},opacity:{value:1}}]),vertexShader:mA.shadow_vert,fragmentShader:mA.shadow_frag}};Ug.physical={uniforms:_I([Ug.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new HA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new HA},clearcoatNormalScale:{value:new qA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new HA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new HA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new HA},sheen:{value:0},sheenColor:{value:new ZA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new HA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new HA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new HA},transmissionSamplerSize:{value:new qA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new HA},attenuationDistance:{value:0},attenuationColor:{value:new ZA(0)},specularColor:{value:new ZA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new HA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new HA},anisotropyVector:{value:new qA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new HA}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag};const nQ={r:0,b:0,g:0},nC=new Gg,DS=new hI;function aS(C,A,I,g,B,Q,E){const i=new ZA(0);let o=Q===!0?0:1,t,D,a=null,s=0,n=null;function w(U){let k=U.isScene===!0?U.background:null;return k&&k.isTexture&&(k=(U.backgroundBlurriness>0?I:A).get(k)),k}function c(U){let k=!1;const Y=w(U);Y===null?h(i,o):Y&&Y.isColor&&(h(Y,1),k=!0);const J=C.xr.getEnvironmentBlendMode();J==="additive"?g.buffers.color.setClear(0,0,0,1,E):J==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(C.autoClear||k)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil))}function S(U,k){const Y=w(k);Y&&(Y.isCubeTexture||Y.mapping===mQ)?(D===void 0&&(D=new WI(new QC(1,1,1),new EC({name:"BackgroundCubeMaterial",uniforms:iB(Ug.backgroundCube.uniforms),vertexShader:Ug.backgroundCube.vertexShader,fragmentShader:Ug.backgroundCube.fragmentShader,side:PI,depthTest:!1,depthWrite:!1,fog:!1})),D.geometry.deleteAttribute("normal"),D.geometry.deleteAttribute("uv"),D.onBeforeRender=function(J,F,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(D.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(D)),nC.copy(k.backgroundRotation),nC.x*=-1,nC.y*=-1,nC.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(nC.y*=-1,nC.z*=-1),D.material.uniforms.envMap.value=Y,D.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,D.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,D.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,D.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(nC)),D.material.toneMapped=AI.getTransfer(Y.colorSpace)!==QI,(a!==Y||s!==Y.version||n!==C.toneMapping)&&(D.material.needsUpdate=!0,a=Y,s=Y.version,n=C.toneMapping),D.layers.enableAll(),U.unshift(D,D.geometry,D.material,0,0,null)):Y&&Y.isTexture&&(t===void 0&&(t=new WI(new bQ(2,2),new EC({name:"BackgroundMaterial",uniforms:iB(Ug.background.uniforms),vertexShader:Ug.background.vertexShader,fragmentShader:Ug.background.fragmentShader,side:CC,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(t)),t.material.uniforms.t2D.value=Y,t.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,t.material.toneMapped=AI.getTransfer(Y.colorSpace)!==QI,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),t.material.uniforms.uvTransform.value.copy(Y.matrix),(a!==Y||s!==Y.version||n!==C.toneMapping)&&(t.material.needsUpdate=!0,a=Y,s=Y.version,n=C.toneMapping),t.layers.enableAll(),U.unshift(t,t.geometry,t.material,0,0,null))}function h(U,k){U.getRGB(nQ,de(C)),g.buffers.color.setClear(nQ.r,nQ.g,nQ.b,k,E)}function M(){D!==void 0&&(D.geometry.dispose(),D.material.dispose()),t!==void 0&&(t.geometry.dispose(),t.material.dispose())}return{getClearColor:function(){return i},setClearColor:function(U,k=1){i.set(U),o=k,h(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(U){o=U,h(i,o)},render:c,addToRenderList:S,dispose:M}}function sS(C,A){const I=C.getParameter(C.MAX_VERTEX_ATTRIBS),g={},B=s(null);let Q=B,E=!1;function i(l,p,v,O,V){let AA=!1;const W=a(O,v,p);Q!==W&&(Q=W,t(Q.object)),AA=n(l,O,v,V),AA&&w(l,O,v,V),V!==null&&A.update(V,C.ELEMENT_ARRAY_BUFFER),(AA||E)&&(E=!1,k(l,p,v,O),V!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,A.get(V).buffer))}function o(){return C.createVertexArray()}function t(l){return C.bindVertexArray(l)}function D(l){return C.deleteVertexArray(l)}function a(l,p,v){const O=v.wireframe===!0;let V=g[l.id];V===void 0&&(V={},g[l.id]=V);let AA=V[p.id];AA===void 0&&(AA={},V[p.id]=AA);let W=AA[O];return W===void 0&&(W=s(o()),AA[O]=W),W}function s(l){const p=[],v=[],O=[];for(let V=0;V<I;V++)p[V]=0,v[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:v,attributeDivisors:O,object:l,attributes:{},index:null}}function n(l,p,v,O){const V=Q.attributes,AA=p.attributes;let W=0;const CA=v.getAttributes();for(const Z in CA)if(CA[Z].location>=0){const hA=V[Z];let kA=AA[Z];if(kA===void 0&&(Z==="instanceMatrix"&&l.instanceMatrix&&(kA=l.instanceMatrix),Z==="instanceColor"&&l.instanceColor&&(kA=l.instanceColor)),hA===void 0||hA.attribute!==kA||kA&&hA.data!==kA.data)return!0;W++}return Q.attributesNum!==W||Q.index!==O}function w(l,p,v,O){const V={},AA=p.attributes;let W=0;const CA=v.getAttributes();for(const Z in CA)if(CA[Z].location>=0){let hA=AA[Z];hA===void 0&&(Z==="instanceMatrix"&&l.instanceMatrix&&(hA=l.instanceMatrix),Z==="instanceColor"&&l.instanceColor&&(hA=l.instanceColor));const kA={};kA.attribute=hA,hA&&hA.data&&(kA.data=hA.data),V[Z]=kA,W++}Q.attributes=V,Q.attributesNum=W,Q.index=O}function c(){const l=Q.newAttributes;for(let p=0,v=l.length;p<v;p++)l[p]=0}function S(l){h(l,0)}function h(l,p){const v=Q.newAttributes,O=Q.enabledAttributes,V=Q.attributeDivisors;v[l]=1,O[l]===0&&(C.enableVertexAttribArray(l),O[l]=1),V[l]!==p&&(C.vertexAttribDivisor(l,p),V[l]=p)}function M(){const l=Q.newAttributes,p=Q.enabledAttributes;for(let v=0,O=p.length;v<O;v++)p[v]!==l[v]&&(C.disableVertexAttribArray(v),p[v]=0)}function U(l,p,v,O,V,AA,W){W===!0?C.vertexAttribIPointer(l,p,v,V,AA):C.vertexAttribPointer(l,p,v,O,V,AA)}function k(l,p,v,O){c();const V=O.attributes,AA=v.getAttributes(),W=p.defaultAttributeValues;for(const CA in AA){const Z=AA[CA];if(Z.location>=0){let oA=V[CA];if(oA===void 0&&(CA==="instanceMatrix"&&l.instanceMatrix&&(oA=l.instanceMatrix),CA==="instanceColor"&&l.instanceColor&&(oA=l.instanceColor)),oA!==void 0){const hA=oA.normalized,kA=oA.itemSize,bA=A.get(oA);if(bA===void 0)continue;const iI=bA.buffer,j=bA.type,BA=bA.bytesPerElement,GA=j===C.INT||j===C.UNSIGNED_INT||oA.gpuType===ui;if(oA.isInterleavedBufferAttribute){const tA=oA.data,RA=tA.stride,LA=oA.offset;if(tA.isInstancedInterleavedBuffer){for(let OA=0;OA<Z.locationSize;OA++)h(Z.location+OA,tA.meshPerAttribute);l.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tA.meshPerAttribute*tA.count)}else for(let OA=0;OA<Z.locationSize;OA++)S(Z.location+OA);C.bindBuffer(C.ARRAY_BUFFER,iI);for(let OA=0;OA<Z.locationSize;OA++)U(Z.location+OA,kA/Z.locationSize,j,hA,RA*BA,(LA+kA/Z.locationSize*OA)*BA,GA)}else{if(oA.isInstancedBufferAttribute){for(let tA=0;tA<Z.locationSize;tA++)h(Z.location+tA,oA.meshPerAttribute);l.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oA.meshPerAttribute*oA.count)}else for(let tA=0;tA<Z.locationSize;tA++)S(Z.location+tA);C.bindBuffer(C.ARRAY_BUFFER,iI);for(let tA=0;tA<Z.locationSize;tA++)U(Z.location+tA,kA/Z.locationSize,j,hA,kA*BA,kA/Z.locationSize*tA*BA,GA)}}else if(W!==void 0){const hA=W[CA];if(hA!==void 0)switch(hA.length){case 2:C.vertexAttrib2fv(Z.location,hA);break;case 3:C.vertexAttrib3fv(Z.location,hA);break;case 4:C.vertexAttrib4fv(Z.location,hA);break;default:C.vertexAttrib1fv(Z.location,hA)}}}}M()}function Y(){f();for(const l in g){const p=g[l];for(const v in p){const O=p[v];for(const V in O)D(O[V].object),delete O[V];delete p[v]}delete g[l]}}function J(l){if(g[l.id]===void 0)return;const p=g[l.id];for(const v in p){const O=p[v];for(const V in O)D(O[V].object),delete O[V];delete p[v]}delete g[l.id]}function F(l){for(const p in g){const v=g[p];if(v[l.id]===void 0)continue;const O=v[l.id];for(const V in O)D(O[V].object),delete O[V];delete v[l.id]}}function f(){y(),E=!0,Q!==B&&(Q=B,t(Q.object))}function y(){B.geometry=null,B.program=null,B.wireframe=!1}return{setup:i,reset:f,resetDefaultState:y,dispose:Y,releaseStatesOfGeometry:J,releaseStatesOfProgram:F,initAttributes:c,enableAttribute:S,disableUnusedAttributes:M}}function hS(C,A,I){let g;function B(t){g=t}function Q(t,D){C.drawArrays(g,t,D),I.update(D,g,1)}function E(t,D,a){a!==0&&(C.drawArraysInstanced(g,t,D,a),I.update(D,g,a))}function i(t,D,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,t,0,D,0,a);let n=0;for(let w=0;w<a;w++)n+=D[w];I.update(n,g,1)}function o(t,D,a,s){if(a===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let w=0;w<t.length;w++)E(t[w],D[w],s[w]);else{n.multiDrawArraysInstancedWEBGL(g,t,0,D,0,s,0,a);let w=0;for(let c=0;c<a;c++)w+=D[c]*s[c];I.update(w,g,1)}}this.setMode=B,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function nS(C,A,I,g){let B;function Q(){if(B!==void 0)return B;if(A.has("EXT_texture_filter_anisotropic")===!0){const F=A.get("EXT_texture_filter_anisotropic");B=C.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else B=0;return B}function E(F){return!(F!==rg&&g.convert(F)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(F){const f=F===xB&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(F!==Og&&g.convert(F)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Tg&&!f)}function o(F){if(F==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let t=I.precision!==void 0?I.precision:"highp";const D=o(t);D!==t&&(console.warn("THREE.WebGLRenderer:",t,"not supported, using",D,"instead."),t=D);const a=I.logarithmicDepthBuffer===!0,s=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),n=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),w=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=C.getParameter(C.MAX_TEXTURE_SIZE),S=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),h=C.getParameter(C.MAX_VERTEX_ATTRIBS),M=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),U=C.getParameter(C.MAX_VARYING_VECTORS),k=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),Y=w>0,J=C.getParameter(C.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:t,logarithmicDepthBuffer:a,reverseDepthBuffer:s,maxTextures:n,maxVertexTextures:w,maxTextureSize:c,maxCubemapSize:S,maxAttributes:h,maxVertexUniforms:M,maxVaryings:U,maxFragmentUniforms:k,vertexTextures:Y,maxSamples:J}}function SS(C){const A=this;let I=null,g=0,B=!1,Q=!1;const E=new $g,i=new HA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||B;return B=s,g=a.length,n},this.beginShadows=function(){Q=!0,D(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=D(a,s,0)},this.setState=function(a,s,n){const w=a.clippingPlanes,c=a.clipIntersection,S=a.clipShadows,h=C.get(a);if(!B||w===null||w.length===0||Q&&!S)Q?D(null):t();else{const M=Q?0:g,U=M*4;let k=h.clippingState||null;o.value=k,k=D(w,s,U,n);for(let Y=0;Y!==U;++Y)k[Y]=I[Y];h.clippingState=k,this.numIntersection=c?this.numPlanes:0,this.numPlanes+=M}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function D(a,s,n,w){const c=a!==null?a.length:0;let S=null;if(c!==0){if(S=o.value,w!==!0||S===null){const h=n+c*4,M=s.matrixWorldInverse;i.getNormalMatrix(M),(S===null||S.length<h)&&(S=new Float32Array(h));for(let U=0,k=n;U!==c;++U,k+=4)E.copy(a[U]).applyMatrix4(M,i),E.normal.toArray(S,k),S[k+3]=E.constant}o.value=S,o.needsUpdate=!0}return A.numPlanes=c,A.numIntersection=0,S}}function wS(C){let A=new WeakMap;function I(E,i){return i===_E?E.mapping=gB:i===ZE&&(E.mapping=CB),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===_E||i===ZE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const t=new Ds(o.height);return t.fromEquirectangularTexture(C,E),A.set(E,t),E.addEventListener("dispose",B),I(t.texture,E.mapping)}else return null}}return E}function B(E){const i=E.target;i.removeEventListener("dispose",B);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}const jC=4,Dt=[.125,.215,.35,.446,.526,.582],GC=20,UE=new ue,at=new ZA;let ME=null,NE=0,KE=0,JE=!1;const rC=(1+Math.sqrt(5))/2,_C=1/rC,st=[new m(-rC,_C,0),new m(rC,_C,0),new m(-_C,0,rC),new m(_C,0,rC),new m(0,rC,-_C),new m(0,rC,_C),new m(-1,1,-1),new m(1,1,-1),new m(-1,1,1),new m(1,1,1)];class ht{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){ME=this._renderer.getRenderTarget(),NE=this._renderer.getActiveCubeFace(),KE=this._renderer.getActiveMipmapLevel(),JE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,B,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=St(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ME,NE,KE),this._renderer.xr.enabled=JE,A.scissorTest=!1,SQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===gB||A.mapping===CB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ME=this._renderer.getRenderTarget(),NE=this._renderer.getActiveCubeFace(),KE=this._renderer.getActiveMipmapLevel(),JE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Kg,minFilter:Kg,generateMipmaps:!1,type:xB,format:rg,colorSpace:EB,depthBuffer:!1},B=nt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rS(Q)),this._blurMaterial=cS(Q,A,I)}return B}_compileMaterial(A){const I=new WI(this._lodPlanes[0],A);this._renderer.compile(I,UE)}_sceneToCubeUV(A,I,g,B){const i=new Eg(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],D=this._renderer,a=D.autoClear,s=D.toneMapping;D.getClearColor(at),D.toneMapping=gC,D.autoClear=!1;const n=new vi({name:"PMREM.Background",side:PI,depthWrite:!1,depthTest:!1}),w=new WI(new QC,n);let c=!1;const S=A.background;S?S.isColor&&(n.color.copy(S),A.background=null,c=!0):(n.color.copy(at),c=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(i.up.set(0,o[h],0),i.lookAt(t[h],0,0)):M===1?(i.up.set(0,0,o[h]),i.lookAt(0,t[h],0)):(i.up.set(0,o[h],0),i.lookAt(0,0,t[h]));const U=this._cubeSize;SQ(B,M*U,h>2?U:0,U,U),D.setRenderTarget(B),c&&D.render(w,i),D.render(A,i)}w.geometry.dispose(),w.material.dispose(),D.toneMapping=s,D.autoClear=a,A.background=S}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===gB||A.mapping===CB;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=wt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=St());const Q=B?this._cubemapMaterial:this._equirectMaterial,E=new WI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;SQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,UE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const B=this._lodPlanes.length;for(let Q=1;Q<B;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=st[(B-Q-1)%st.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,B,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,B,"latitudinal",Q),this._halfBlur(E,A,g,g,B,"longitudinal",Q)}_halfBlur(A,I,g,B,Q,E,i){const o=this._renderer,t=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const D=3,a=new WI(this._lodPlanes[B],t),s=t.uniforms,n=this._sizeLods[g]-1,w=isFinite(Q)?Math.PI/(2*n):2*Math.PI/(2*GC-1),c=Q/w,S=isFinite(Q)?1+Math.floor(D*c):GC;S>GC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${GC}`);const h=[];let M=0;for(let F=0;F<GC;++F){const f=F/c,y=Math.exp(-f*f/2);h.push(y),F===0?M+=y:F<S&&(M+=2*y)}for(let F=0;F<h.length;F++)h[F]=h[F]/M;s.envMap.value=A.texture,s.samples.value=S,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:U}=this;s.dTheta.value=w,s.mipInt.value=U-g;const k=this._sizeLods[B],Y=3*k*(B>U-jC?B-U+jC:0),J=4*(this._cubeSize-k);SQ(I,Y,J,3*k,2*k),o.setRenderTarget(I),o.render(a,UE)}}function rS(C){const A=[],I=[],g=[];let B=C;const Q=C-jC+1+Dt.length;for(let E=0;E<Q;E++){const i=Math.pow(2,B);I.push(i);let o=1/i;E>C-jC?o=Dt[E-C+jC-1]:E===0&&(o=0),g.push(o);const t=1/(i-2),D=-t,a=1+t,s=[D,D,a,D,a,a,D,D,a,a,D,a],n=6,w=6,c=3,S=2,h=1,M=new Float32Array(c*w*n),U=new Float32Array(S*w*n),k=new Float32Array(h*w*n);for(let J=0;J<n;J++){const F=J%3*2/3-1,f=J>2?0:-1,y=[F,f,0,F+2/3,f,0,F+2/3,f+1,0,F,f,0,F+2/3,f+1,0,F,f+1,0];M.set(y,c*w*J),U.set(s,S*w*J);const l=[J,J,J,J,J,J];k.set(l,h*w*J)}const Y=new kg;Y.setAttribute("position",new Jg(M,c)),Y.setAttribute("uv",new Jg(U,S)),Y.setAttribute("faceIndex",new Jg(k,h)),A.push(Y),B>jC&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function nt(C,A,I){const g=new MC(C,A,I);return g.texture.mapping=mQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function SQ(C,A,I,g,B){C.viewport.set(A,I,g,B),C.scissor.set(A,I,g,B)}function cS(C,A,I){const g=new Float32Array(GC),B=new m(0,1,0);return new EC({name:"SphericalGaussianBlur",defines:{n:GC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:Xi(),fragmentShader:`

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
		`,blending:IC,depthTest:!1,depthWrite:!1})}function St(){return new EC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xi(),fragmentShader:`

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
		`,blending:IC,depthTest:!1,depthWrite:!1})}function wt(){return new EC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:IC,depthTest:!1,depthWrite:!1})}function Xi(){return`

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
	`}function GS(C){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,t=o===_E||o===ZE,D=o===gB||o===CB;if(t||D){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new ht(C)),a=t?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const n=i.image;return t&&n&&n.height>0||D&&n&&B(n)?(I===null&&(I=new ht(C)),a=t?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function B(i){let o=0;const t=6;for(let D=0;D<t;D++)i[D]!==void 0&&o++;return o===t}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function lS(C){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=C.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const B=I(g);return B===null&&WC("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function kS(C,A,I,g){const B={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const w in s.attributes)A.remove(s.attributes[w]);s.removeEventListener("dispose",E),delete B[s.id];const n=Q.get(s);n&&(A.remove(n),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return B[s.id]===!0||(s.addEventListener("dispose",E),B[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const n in s)A.update(s[n],C.ARRAY_BUFFER)}function t(a){const s=[],n=a.index,w=a.attributes.position;let c=0;if(n!==null){const M=n.array;c=n.version;for(let U=0,k=M.length;U<k;U+=3){const Y=M[U+0],J=M[U+1],F=M[U+2];s.push(Y,J,J,F,F,Y)}}else if(w!==void 0){const M=w.array;c=w.version;for(let U=0,k=M.length/3-1;U<k;U+=3){const Y=U+0,J=U+1,F=U+2;s.push(Y,J,J,F,F,Y)}}else return;const S=new(Ne(s)?pe:Re)(s,1);S.version=c;const h=Q.get(a);h&&A.remove(h),Q.set(a,S)}function D(a){const s=Q.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:D}}function yS(C,A,I){let g;function B(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,n){C.drawElements(g,n,Q,s*E),I.update(n,g,1)}function t(s,n,w){w!==0&&(C.drawElementsInstanced(g,n,Q,s*E,w),I.update(n,g,w))}function D(s,n,w){if(w===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,n,0,Q,s,0,w);let S=0;for(let h=0;h<w;h++)S+=n[h];I.update(S,g,1)}function a(s,n,w,c){if(w===0)return;const S=A.get("WEBGL_multi_draw");if(S===null)for(let h=0;h<s.length;h++)t(s[h]/E,n[h],c[h]);else{S.multiDrawElementsInstancedWEBGL(g,n,0,Q,s,0,c,0,w);let h=0;for(let M=0;M<w;M++)h+=n[M]*c[M];I.update(h,g,1)}}this.setMode=B,this.setIndex=i,this.render=o,this.renderInstances=t,this.renderMultiDraw=D,this.renderMultiDrawInstances=a}function US(C){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case C.TRIANGLES:I.triangles+=i*(Q/3);break;case C.LINES:I.lines+=i*(Q/2);break;case C.LINE_STRIP:I.lines+=i*(Q-1);break;case C.LINE_LOOP:I.lines+=i*Q;break;case C.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function B(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function MS(C,A,I){const g=new WeakMap,B=new GI;function Q(E,i,o){const t=E.morphTargetInfluences,D=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=D!==void 0?D.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let y=function(){F.dispose(),g.delete(i),i.removeEventListener("dispose",y)};s!==void 0&&s.texture.dispose();const n=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,c=i.morphAttributes.color!==void 0,S=i.morphAttributes.position||[],h=i.morphAttributes.normal||[],M=i.morphAttributes.color||[];let U=0;n===!0&&(U=1),w===!0&&(U=2),c===!0&&(U=3);let k=i.attributes.position.count*U,Y=1;k>A.maxTextureSize&&(Y=Math.ceil(k/A.maxTextureSize),k=A.maxTextureSize);const J=new Float32Array(k*Y*4*a),F=new Je(J,k,Y,a);F.type=Tg,F.needsUpdate=!0;const f=U*4;for(let l=0;l<a;l++){const p=S[l],v=h[l],O=M[l],V=k*Y*4*l;for(let AA=0;AA<p.count;AA++){const W=AA*f;n===!0&&(B.fromBufferAttribute(p,AA),J[V+W+0]=B.x,J[V+W+1]=B.y,J[V+W+2]=B.z,J[V+W+3]=0),w===!0&&(B.fromBufferAttribute(v,AA),J[V+W+4]=B.x,J[V+W+5]=B.y,J[V+W+6]=B.z,J[V+W+7]=0),c===!0&&(B.fromBufferAttribute(O,AA),J[V+W+8]=B.x,J[V+W+9]=B.y,J[V+W+10]=B.z,J[V+W+11]=O.itemSize===4?B.w:1)}}s={count:a,texture:F,size:new qA(k,Y)},g.set(i,s),i.addEventListener("dispose",y)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(C,"morphTexture",E.morphTexture,I);else{let n=0;for(let c=0;c<t.length;c++)n+=t[c];const w=i.morphTargetsRelative?1:1-n;o.getUniforms().setValue(C,"morphTargetBaseInfluence",w),o.getUniforms().setValue(C,"morphTargetInfluences",t)}o.getUniforms().setValue(C,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(C,"morphTargetsTextureSize",s.size)}return{update:Q}}function NS(C,A,I,g){let B=new WeakMap;function Q(o){const t=g.render.frame,D=o.geometry,a=A.get(o,D);if(B.get(a)!==t&&(A.update(a),B.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),B.get(o)!==t&&(I.update(o.instanceMatrix,C.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,C.ARRAY_BUFFER),B.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;B.get(s)!==t&&(s.update(),B.set(s,t))}return a}function E(){B=new WeakMap}function i(o){const t=o.target;t.removeEventListener("dispose",i),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:Q,dispose:E}}const Te=new VI,rt=new fe(1,1),xe=new Je,be=new Va,Oe=new Ye,ct=[],Gt=[],lt=new Float32Array(16),kt=new Float32Array(9),yt=new Float32Array(4);function DB(C,A,I){const g=C[0];if(g<=0||g>0)return C;const B=A*I;let Q=ct[B];if(Q===void 0&&(Q=new Float32Array(B),ct[B]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,C[E].toArray(Q,i)}return Q}function FI(C,A){if(C.length!==A.length)return!1;for(let I=0,g=C.length;I<g;I++)if(C[I]!==A[I])return!1;return!0}function RI(C,A){for(let I=0,g=A.length;I<g;I++)C[I]=A[I]}function OQ(C,A){let I=Gt[A];I===void 0&&(I=new Int32Array(A),Gt[A]=I);for(let g=0;g!==A;++g)I[g]=C.allocateTextureUnit();return I}function KS(C,A){const I=this.cache;I[0]!==A&&(C.uniform1f(this.addr,A),I[0]=A)}function JS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(FI(I,A))return;C.uniform2fv(this.addr,A),RI(I,A)}}function FS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(C.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(FI(I,A))return;C.uniform3fv(this.addr,A),RI(I,A)}}function RS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(FI(I,A))return;C.uniform4fv(this.addr,A),RI(I,A)}}function pS(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(FI(I,A))return;C.uniformMatrix2fv(this.addr,!1,A),RI(I,A)}else{if(FI(I,g))return;yt.set(g),C.uniformMatrix2fv(this.addr,!1,yt),RI(I,g)}}function dS(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(FI(I,A))return;C.uniformMatrix3fv(this.addr,!1,A),RI(I,A)}else{if(FI(I,g))return;kt.set(g),C.uniformMatrix3fv(this.addr,!1,kt),RI(I,g)}}function qS(C,A){const I=this.cache,g=A.elements;if(g===void 0){if(FI(I,A))return;C.uniformMatrix4fv(this.addr,!1,A),RI(I,A)}else{if(FI(I,g))return;lt.set(g),C.uniformMatrix4fv(this.addr,!1,lt),RI(I,g)}}function YS(C,A){const I=this.cache;I[0]!==A&&(C.uniform1i(this.addr,A),I[0]=A)}function LS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(FI(I,A))return;C.uniform2iv(this.addr,A),RI(I,A)}}function fS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(FI(I,A))return;C.uniform3iv(this.addr,A),RI(I,A)}}function HS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(FI(I,A))return;C.uniform4iv(this.addr,A),RI(I,A)}}function uS(C,A){const I=this.cache;I[0]!==A&&(C.uniform1ui(this.addr,A),I[0]=A)}function mS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(C.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(FI(I,A))return;C.uniform2uiv(this.addr,A),RI(I,A)}}function TS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(C.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(FI(I,A))return;C.uniform3uiv(this.addr,A),RI(I,A)}}function xS(C,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(FI(I,A))return;C.uniform4uiv(this.addr,A),RI(I,A)}}function bS(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B);let Q;this.type===C.SAMPLER_2D_SHADOW?(rt.compareFunction=Me,Q=rt):Q=Te,I.setTexture2D(A||Q,B)}function OS(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||be,B)}function _S(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||Oe,B)}function ZS(C,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(C.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||xe,B)}function vS(C){switch(C){case 5126:return KS;case 35664:return JS;case 35665:return FS;case 35666:return RS;case 35674:return pS;case 35675:return dS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return LS;case 35668:case 35672:return fS;case 35669:case 35673:return HS;case 5125:return uS;case 36294:return mS;case 36295:return TS;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return ZS}}function WS(C,A){C.uniform1fv(this.addr,A)}function PS(C,A){const I=DB(A,this.size,2);C.uniform2fv(this.addr,I)}function VS(C,A){const I=DB(A,this.size,3);C.uniform3fv(this.addr,I)}function jS(C,A){const I=DB(A,this.size,4);C.uniform4fv(this.addr,I)}function XS(C,A){const I=DB(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,I)}function zS(C,A){const I=DB(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,I)}function $S(C,A){const I=DB(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,I)}function Aw(C,A){C.uniform1iv(this.addr,A)}function Iw(C,A){C.uniform2iv(this.addr,A)}function gw(C,A){C.uniform3iv(this.addr,A)}function Cw(C,A){C.uniform4iv(this.addr,A)}function Bw(C,A){C.uniform1uiv(this.addr,A)}function Qw(C,A){C.uniform2uiv(this.addr,A)}function Ew(C,A){C.uniform3uiv(this.addr,A)}function iw(C,A){C.uniform4uiv(this.addr,A)}function ow(C,A,I){const g=this.cache,B=A.length,Q=OQ(I,B);FI(g,Q)||(C.uniform1iv(this.addr,Q),RI(g,Q));for(let E=0;E!==B;++E)I.setTexture2D(A[E]||Te,Q[E])}function tw(C,A,I){const g=this.cache,B=A.length,Q=OQ(I,B);FI(g,Q)||(C.uniform1iv(this.addr,Q),RI(g,Q));for(let E=0;E!==B;++E)I.setTexture3D(A[E]||be,Q[E])}function ew(C,A,I){const g=this.cache,B=A.length,Q=OQ(I,B);FI(g,Q)||(C.uniform1iv(this.addr,Q),RI(g,Q));for(let E=0;E!==B;++E)I.setTextureCube(A[E]||Oe,Q[E])}function Dw(C,A,I){const g=this.cache,B=A.length,Q=OQ(I,B);FI(g,Q)||(C.uniform1iv(this.addr,Q),RI(g,Q));for(let E=0;E!==B;++E)I.setTexture2DArray(A[E]||xe,Q[E])}function aw(C){switch(C){case 5126:return WS;case 35664:return PS;case 35665:return VS;case 35666:return jS;case 35674:return XS;case 35675:return zS;case 35676:return $S;case 5124:case 35670:return Aw;case 35667:case 35671:return Iw;case 35668:case 35672:return gw;case 35669:case 35673:return Cw;case 5125:return Bw;case 36294:return Qw;case 36295:return Ew;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return Dw}}class sw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=vS(I.type)}}class hw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=aw(I.type)}}class nw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const B=this.seq;for(let Q=0,E=B.length;Q!==E;++Q){const i=B[Q];i.setValue(A,I[i.id],g)}}}const FE=/(\w+)(\])?(\[|\.)?/g;function Ut(C,A){C.seq.push(A),C.map[A.id]=A}function Sw(C,A,I){const g=C.name,B=g.length;for(FE.lastIndex=0;;){const Q=FE.exec(g),E=FE.lastIndex;let i=Q[1];const o=Q[2]==="]",t=Q[3];if(o&&(i=i|0),t===void 0||t==="["&&E+2===B){Ut(I,t===void 0?new sw(i,C,A):new hw(i,C,A));break}else{let a=I.map[i];a===void 0&&(a=new nw(i),Ut(I,a)),I=a}}}class MQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let B=0;B<g;++B){const Q=A.getActiveUniform(I,B),E=A.getUniformLocation(I,Q.name);Sw(Q,E,this)}}setValue(A,I,g,B){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,B)}setOptional(A,I,g){const B=I[g];B!==void 0&&this.setValue(A,g,B)}static upload(A,I,g,B){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,B)}}static seqWithValue(A,I){const g=[];for(let B=0,Q=A.length;B!==Q;++B){const E=A[B];E.id in I&&g.push(E)}return g}}function Mt(C,A,I){const g=C.createShader(A);return C.shaderSource(g,I),C.compileShader(g),g}const ww=37297;let rw=0;function cw(C,A){const I=C.split(`
`),g=[],B=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=B;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}const Nt=new HA;function Gw(C){AI._getMatrix(Nt,AI.workingColorSpace,C);const A=`mat3( ${Nt.elements.map(I=>I.toFixed(4))} )`;switch(AI.getTransfer(C)){case KQ:return[A,"LinearTransferOETF"];case QI:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",C),[A,"LinearTransferOETF"]}}function Kt(C,A,I){const g=C.getShaderParameter(A,C.COMPILE_STATUS),B=C.getShaderInfoLog(A).trim();if(g&&B==="")return"";const Q=/ERROR: 0:(\d+)/.exec(B);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+B+`

`+cw(C.getShaderSource(A),E)}else return B}function lw(C,A){const I=Gw(A);return[`vec4 ${C}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function kw(C,A){let I;switch(A){case Qa:I="Linear";break;case Ea:I="Reinhard";break;case ia:I="Cineon";break;case oa:I="ACESFilmic";break;case ea:I="AgX";break;case Da:I="Neutral";break;case ta:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+C+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const wQ=new m;function yw(){AI.getLuminanceCoefficients(wQ);const C=wQ.x.toFixed(4),A=wQ.y.toFixed(4),I=wQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${C}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uw(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(GB).join(`
`)}function Mw(C){const A=[];for(const I in C){const g=C[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Nw(C,A){const I={},g=C.getProgramParameter(A,C.ACTIVE_ATTRIBUTES);for(let B=0;B<g;B++){const Q=C.getActiveAttrib(A,B),E=Q.name;let i=1;Q.type===C.FLOAT_MAT2&&(i=2),Q.type===C.FLOAT_MAT3&&(i=3),Q.type===C.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:C.getAttribLocation(A,E),locationSize:i}}return I}function GB(C){return C!==""}function Jt(C,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Ft(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function li(C){return C.replace(Kw,Fw)}const Jw=new Map;function Fw(C,A){let I=mA[A];if(I===void 0){const g=Jw.get(A);if(g!==void 0)I=mA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return li(I)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rt(C){return C.replace(Rw,pw)}function pw(C,A,I,g){let B="";for(let Q=parseInt(A);Q<parseInt(I);Q++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function pt(C){let A=`precision ${C.precision} float;
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
#define LOW_PRECISION`),A}function dw(C){let A="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===ae?A="SHADOWMAP_TYPE_PCF":C.shadowMapType===uD?A="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===fg&&(A="SHADOWMAP_TYPE_VSM"),A}function qw(C){let A="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case gB:case CB:A="ENVMAP_TYPE_CUBE";break;case mQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Yw(C){let A="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case CB:A="ENVMAP_MODE_REFRACTION";break}return A}function Lw(C){let A="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Hi:A="ENVMAP_BLENDING_MULTIPLY";break;case Ca:A="ENVMAP_BLENDING_MIX";break;case Ba:A="ENVMAP_BLENDING_ADD";break}return A}function fw(C){const A=C.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Hw(C,A,I,g){const B=C.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=dw(I),t=qw(I),D=Yw(I),a=Lw(I),s=fw(I),n=Uw(I),w=Mw(Q),c=B.createProgram();let S,h,M=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(S=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(GB).join(`
`),S.length>0&&(S+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(GB).join(`
`),h.length>0&&(h+=`
`)):(S=[pt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+D:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(GB).join(`
`),h=[pt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+D:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==gC?"#define TONE_MAPPING":"",I.toneMapping!==gC?mA.tonemapping_pars_fragment:"",I.toneMapping!==gC?kw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",mA.colorspace_pars_fragment,lw("linearToOutputTexel",I.outputColorSpace),yw(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(GB).join(`
`)),E=li(E),E=Jt(E,I),E=Ft(E,I),i=li(i),i=Jt(i,I),i=Ft(i,I),E=Rt(E),i=Rt(i),I.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,S=[n,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,h=["#define varying in",I.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const U=M+S+E,k=M+h+i,Y=Mt(B,B.VERTEX_SHADER,U),J=Mt(B,B.FRAGMENT_SHADER,k);B.attachShader(c,Y),B.attachShader(c,J),I.index0AttributeName!==void 0?B.bindAttribLocation(c,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(c,0,"position"),B.linkProgram(c);function F(p){if(C.debug.checkShaderErrors){const v=B.getProgramInfoLog(c).trim(),O=B.getShaderInfoLog(Y).trim(),V=B.getShaderInfoLog(J).trim();let AA=!0,W=!0;if(B.getProgramParameter(c,B.LINK_STATUS)===!1)if(AA=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(B,c,Y,J);else{const CA=Kt(B,Y,"vertex"),Z=Kt(B,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(c,B.VALIDATE_STATUS)+`

Material Name: `+p.name+`
Material Type: `+p.type+`

Program Info Log: `+v+`
`+CA+`
`+Z)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(O===""||V==="")&&(W=!1);W&&(p.diagnostics={runnable:AA,programLog:v,vertexShader:{log:O,prefix:S},fragmentShader:{log:V,prefix:h}})}B.deleteShader(Y),B.deleteShader(J),f=new MQ(B,c),y=Nw(B,c)}let f;this.getUniforms=function(){return f===void 0&&F(this),f};let y;this.getAttributes=function(){return y===void 0&&F(this),y};let l=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return l===!1&&(l=B.getProgramParameter(c,ww)),l},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(c),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=rw++,this.cacheKey=A,this.usedTimes=1,this.program=c,this.vertexShader=Y,this.fragmentShader=J,this}let uw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(B)===!1&&(E.add(B),B.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Tw(A),I.set(A,g)),g}}class Tw{constructor(A){this.id=uw++,this.code=A,this.usedTimes=0}}function xw(C,A,I,g,B,Q,E){const i=new Zi,o=new mw,t=new Set,D=[],a=B.logarithmicDepthBuffer,s=B.vertexTextures;let n=B.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(y){return t.add(y),y===0?"uv":`uv${y}`}function S(y,l,p,v,O){const V=v.fog,AA=O.geometry,W=y.isMeshStandardMaterial?v.environment:null,CA=(y.isMeshStandardMaterial?I:A).get(y.envMap||W),Z=CA&&CA.mapping===mQ?CA.image.height:null,oA=w[y.type];y.precision!==null&&(n=B.getMaxPrecision(y.precision),n!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",n,"instead."));const hA=AA.morphAttributes.position||AA.morphAttributes.normal||AA.morphAttributes.color,kA=hA!==void 0?hA.length:0;let bA=0;AA.morphAttributes.position!==void 0&&(bA=1),AA.morphAttributes.normal!==void 0&&(bA=2),AA.morphAttributes.color!==void 0&&(bA=3);let iI,j,BA,GA;if(oA){const BI=Ug[oA];iI=BI.vertexShader,j=BI.fragmentShader}else iI=y.vertexShader,j=y.fragmentShader,o.update(y),BA=o.getVertexShaderID(y),GA=o.getFragmentShaderID(y);const tA=C.getRenderTarget(),RA=C.state.buffers.depth.getReversed(),LA=O.isInstancedMesh===!0,OA=O.isBatchedMesh===!0,nI=!!y.map,jA=!!y.matcap,lI=!!CA,R=!!y.aoMap,Ag=!!y.lightMap,vA=!!y.bumpMap,WA=!!y.normalMap,yA=!!y.displacementMap,eI=!!y.emissiveMap,UA=!!y.metalnessMap,N=!!y.roughnessMap,r=y.anisotropy>0,T=y.clearcoat>0,X=y.dispersion>0,$=y.iridescence>0,P=y.sheen>0,lA=y.transmission>0,eA=r&&!!y.anisotropyMap,nA=T&&!!y.clearcoatMap,XA=T&&!!y.clearcoatNormalMap,gA=T&&!!y.clearcoatRoughnessMap,SA=$&&!!y.iridescenceMap,FA=$&&!!y.iridescenceThicknessMap,pA=P&&!!y.sheenColorMap,wA=P&&!!y.sheenRoughnessMap,PA=!!y.specularMap,uA=!!y.specularColorMap,tI=!!y.specularIntensityMap,L=lA&&!!y.transmissionMap,EA=lA&&!!y.thicknessMap,_=!!y.gradientMap,z=!!y.alphaMap,aA=y.alphaTest>0,DA=!!y.alphaHash,fA=!!y.extensions;let rI=gC;y.toneMapped&&(tA===null||tA.isXRRenderTarget===!0)&&(rI=C.toneMapping);const uI={shaderID:oA,shaderType:y.type,shaderName:y.name,vertexShader:iI,fragmentShader:j,defines:y.defines,customVertexShaderID:BA,customFragmentShaderID:GA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:n,batching:OA,batchingColor:OA&&O._colorsTexture!==null,instancing:LA,instancingColor:LA&&O.instanceColor!==null,instancingMorph:LA&&O.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:tA===null?C.outputColorSpace:tA.isXRRenderTarget===!0?tA.texture.colorSpace:EB,alphaToCoverage:!!y.alphaToCoverage,map:nI,matcap:jA,envMap:lI,envMapMode:lI&&CA.mapping,envMapCubeUVHeight:Z,aoMap:R,lightMap:Ag,bumpMap:vA,normalMap:WA,displacementMap:s&&yA,emissiveMap:eI,normalMapObjectSpace:WA&&y.normalMapType===na,normalMapTangentSpace:WA&&y.normalMapType===Ue,metalnessMap:UA,roughnessMap:N,anisotropy:r,anisotropyMap:eA,clearcoat:T,clearcoatMap:nA,clearcoatNormalMap:XA,clearcoatRoughnessMap:gA,dispersion:X,iridescence:$,iridescenceMap:SA,iridescenceThicknessMap:FA,sheen:P,sheenColorMap:pA,sheenRoughnessMap:wA,specularMap:PA,specularColorMap:uA,specularIntensityMap:tI,transmission:lA,transmissionMap:L,thicknessMap:EA,gradientMap:_,opaque:y.transparent===!1&&y.blending===zC&&y.alphaToCoverage===!1,alphaMap:z,alphaTest:aA,alphaHash:DA,combine:y.combine,mapUv:nI&&c(y.map.channel),aoMapUv:R&&c(y.aoMap.channel),lightMapUv:Ag&&c(y.lightMap.channel),bumpMapUv:vA&&c(y.bumpMap.channel),normalMapUv:WA&&c(y.normalMap.channel),displacementMapUv:yA&&c(y.displacementMap.channel),emissiveMapUv:eI&&c(y.emissiveMap.channel),metalnessMapUv:UA&&c(y.metalnessMap.channel),roughnessMapUv:N&&c(y.roughnessMap.channel),anisotropyMapUv:eA&&c(y.anisotropyMap.channel),clearcoatMapUv:nA&&c(y.clearcoatMap.channel),clearcoatNormalMapUv:XA&&c(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gA&&c(y.clearcoatRoughnessMap.channel),iridescenceMapUv:SA&&c(y.iridescenceMap.channel),iridescenceThicknessMapUv:FA&&c(y.iridescenceThicknessMap.channel),sheenColorMapUv:pA&&c(y.sheenColorMap.channel),sheenRoughnessMapUv:wA&&c(y.sheenRoughnessMap.channel),specularMapUv:PA&&c(y.specularMap.channel),specularColorMapUv:uA&&c(y.specularColorMap.channel),specularIntensityMapUv:tI&&c(y.specularIntensityMap.channel),transmissionMapUv:L&&c(y.transmissionMap.channel),thicknessMapUv:EA&&c(y.thicknessMap.channel),alphaMapUv:z&&c(y.alphaMap.channel),vertexTangents:!!AA.attributes.tangent&&(WA||r),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!AA.attributes.color&&AA.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!AA.attributes.uv&&(nI||z),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:RA,skinning:O.isSkinnedMesh===!0,morphTargets:AA.morphAttributes.position!==void 0,morphNormals:AA.morphAttributes.normal!==void 0,morphColors:AA.morphAttributes.color!==void 0,morphTargetsCount:kA,morphTextureStride:bA,numDirLights:l.directional.length,numPointLights:l.point.length,numSpotLights:l.spot.length,numSpotLightMaps:l.spotLightMap.length,numRectAreaLights:l.rectArea.length,numHemiLights:l.hemi.length,numDirLightShadows:l.directionalShadowMap.length,numPointLightShadows:l.pointShadowMap.length,numSpotLightShadows:l.spotShadowMap.length,numSpotLightShadowsWithMaps:l.numSpotLightShadowsWithMaps,numLightProbes:l.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:C.shadowMap.enabled&&p.length>0,shadowMapType:C.shadowMap.type,toneMapping:rI,decodeVideoTexture:nI&&y.map.isVideoTexture===!0&&AI.getTransfer(y.map.colorSpace)===QI,decodeVideoTextureEmissive:eI&&y.emissiveMap.isVideoTexture===!0&&AI.getTransfer(y.emissiveMap.colorSpace)===QI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ug,flipSided:y.side===PI,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fA&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fA&&y.extensions.multiDraw===!0||OA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return uI.vertexUv1s=t.has(1),uI.vertexUv2s=t.has(2),uI.vertexUv3s=t.has(3),t.clear(),uI}function h(y){const l=[];if(y.shaderID?l.push(y.shaderID):(l.push(y.customVertexShaderID),l.push(y.customFragmentShaderID)),y.defines!==void 0)for(const p in y.defines)l.push(p),l.push(y.defines[p]);return y.isRawShaderMaterial===!1&&(M(l,y),U(l,y),l.push(C.outputColorSpace)),l.push(y.customProgramCacheKey),l.join()}function M(y,l){y.push(l.precision),y.push(l.outputColorSpace),y.push(l.envMapMode),y.push(l.envMapCubeUVHeight),y.push(l.mapUv),y.push(l.alphaMapUv),y.push(l.lightMapUv),y.push(l.aoMapUv),y.push(l.bumpMapUv),y.push(l.normalMapUv),y.push(l.displacementMapUv),y.push(l.emissiveMapUv),y.push(l.metalnessMapUv),y.push(l.roughnessMapUv),y.push(l.anisotropyMapUv),y.push(l.clearcoatMapUv),y.push(l.clearcoatNormalMapUv),y.push(l.clearcoatRoughnessMapUv),y.push(l.iridescenceMapUv),y.push(l.iridescenceThicknessMapUv),y.push(l.sheenColorMapUv),y.push(l.sheenRoughnessMapUv),y.push(l.specularMapUv),y.push(l.specularColorMapUv),y.push(l.specularIntensityMapUv),y.push(l.transmissionMapUv),y.push(l.thicknessMapUv),y.push(l.combine),y.push(l.fogExp2),y.push(l.sizeAttenuation),y.push(l.morphTargetsCount),y.push(l.morphAttributeCount),y.push(l.numDirLights),y.push(l.numPointLights),y.push(l.numSpotLights),y.push(l.numSpotLightMaps),y.push(l.numHemiLights),y.push(l.numRectAreaLights),y.push(l.numDirLightShadows),y.push(l.numPointLightShadows),y.push(l.numSpotLightShadows),y.push(l.numSpotLightShadowsWithMaps),y.push(l.numLightProbes),y.push(l.shadowMapType),y.push(l.toneMapping),y.push(l.numClippingPlanes),y.push(l.numClipIntersection),y.push(l.depthPacking)}function U(y,l){i.disableAll(),l.supportsVertexTextures&&i.enable(0),l.instancing&&i.enable(1),l.instancingColor&&i.enable(2),l.instancingMorph&&i.enable(3),l.matcap&&i.enable(4),l.envMap&&i.enable(5),l.normalMapObjectSpace&&i.enable(6),l.normalMapTangentSpace&&i.enable(7),l.clearcoat&&i.enable(8),l.iridescence&&i.enable(9),l.alphaTest&&i.enable(10),l.vertexColors&&i.enable(11),l.vertexAlphas&&i.enable(12),l.vertexUv1s&&i.enable(13),l.vertexUv2s&&i.enable(14),l.vertexUv3s&&i.enable(15),l.vertexTangents&&i.enable(16),l.anisotropy&&i.enable(17),l.alphaHash&&i.enable(18),l.batching&&i.enable(19),l.dispersion&&i.enable(20),l.batchingColor&&i.enable(21),y.push(i.mask),i.disableAll(),l.fog&&i.enable(0),l.useFog&&i.enable(1),l.flatShading&&i.enable(2),l.logarithmicDepthBuffer&&i.enable(3),l.reverseDepthBuffer&&i.enable(4),l.skinning&&i.enable(5),l.morphTargets&&i.enable(6),l.morphNormals&&i.enable(7),l.morphColors&&i.enable(8),l.premultipliedAlpha&&i.enable(9),l.shadowMapEnabled&&i.enable(10),l.doubleSided&&i.enable(11),l.flipSided&&i.enable(12),l.useDepthPacking&&i.enable(13),l.dithering&&i.enable(14),l.transmission&&i.enable(15),l.sheen&&i.enable(16),l.opaque&&i.enable(17),l.pointsUvs&&i.enable(18),l.decodeVideoTexture&&i.enable(19),l.decodeVideoTextureEmissive&&i.enable(20),l.alphaToCoverage&&i.enable(21),y.push(i.mask)}function k(y){const l=w[y.type];let p;if(l){const v=Ug[l];p=is.clone(v.uniforms)}else p=y.uniforms;return p}function Y(y,l){let p;for(let v=0,O=D.length;v<O;v++){const V=D[v];if(V.cacheKey===l){p=V,++p.usedTimes;break}}return p===void 0&&(p=new Hw(C,l,y,Q),D.push(p)),p}function J(y){if(--y.usedTimes===0){const l=D.indexOf(y);D[l]=D[D.length-1],D.pop(),y.destroy()}}function F(y){o.remove(y)}function f(){o.dispose()}return{getParameters:S,getProgramCacheKey:h,getUniforms:k,acquireProgram:Y,releaseProgram:J,releaseShaderCache:F,programs:D,dispose:f}}function bw(){let C=new WeakMap;function A(E){return C.has(E)}function I(E){let i=C.get(E);return i===void 0&&(i={},C.set(E,i)),i}function g(E){C.delete(E)}function B(E,i,o){C.get(E)[i]=o}function Q(){C=new WeakMap}return{has:A,get:I,remove:g,update:B,dispose:Q}}function Ow(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function dt(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function qt(){const C=[];let A=0;const I=[],g=[],B=[];function Q(){A=0,I.length=0,g.length=0,B.length=0}function E(a,s,n,w,c,S){let h=C[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:w,renderOrder:a.renderOrder,z:c,group:S},C[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=w,h.renderOrder=a.renderOrder,h.z=c,h.group=S),A++,h}function i(a,s,n,w,c,S){const h=E(a,s,n,w,c,S);n.transmission>0?g.push(h):n.transparent===!0?B.push(h):I.push(h)}function o(a,s,n,w,c,S){const h=E(a,s,n,w,c,S);n.transmission>0?g.unshift(h):n.transparent===!0?B.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||Ow),g.length>1&&g.sort(s||dt),B.length>1&&B.sort(s||dt)}function D(){for(let a=A,s=C.length;a<s;a++){const n=C[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:B,init:Q,push:i,unshift:o,finish:D,sort:t}}function _w(){let C=new WeakMap;function A(g,B){const Q=C.get(g);let E;return Q===void 0?(E=new qt,C.set(g,[E])):B>=Q.length?(E=new qt,Q.push(E)):E=Q[B],E}function I(){C=new WeakMap}return{get:A,dispose:I}}function Zw(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new m,color:new ZA};break;case"SpotLight":I={position:new m,direction:new m,color:new ZA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new m,color:new ZA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new m,skyColor:new ZA,groundColor:new ZA};break;case"RectAreaLight":I={color:new ZA,position:new m,halfWidth:new m,halfHeight:new m};break}return C[A.id]=I,I}}}function vw(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qA,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[A.id]=I,I}}}let Ww=0;function Pw(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function Vw(C){const A=new Zw,I=vw(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)g.probe.push(new m);const B=new m,Q=new hI,E=new hI;function i(t){let D=0,a=0,s=0;for(let y=0;y<9;y++)g.probe[y].set(0,0,0);let n=0,w=0,c=0,S=0,h=0,M=0,U=0,k=0,Y=0,J=0,F=0;t.sort(Pw);for(let y=0,l=t.length;y<l;y++){const p=t[y],v=p.color,O=p.intensity,V=p.distance,AA=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)D+=v.r*O,a+=v.g*O,s+=v.b*O;else if(p.isLightProbe){for(let W=0;W<9;W++)g.probe[W].addScaledVector(p.sh.coefficients[W],O);F++}else if(p.isDirectionalLight){const W=A.get(p);if(W.color.copy(p.color).multiplyScalar(p.intensity),p.castShadow){const CA=p.shadow,Z=I.get(p);Z.shadowIntensity=CA.intensity,Z.shadowBias=CA.bias,Z.shadowNormalBias=CA.normalBias,Z.shadowRadius=CA.radius,Z.shadowMapSize=CA.mapSize,g.directionalShadow[n]=Z,g.directionalShadowMap[n]=AA,g.directionalShadowMatrix[n]=p.shadow.matrix,M++}g.directional[n]=W,n++}else if(p.isSpotLight){const W=A.get(p);W.position.setFromMatrixPosition(p.matrixWorld),W.color.copy(v).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(p.angle),W.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),W.decay=p.decay,g.spot[c]=W;const CA=p.shadow;if(p.map&&(g.spotLightMap[Y]=p.map,Y++,CA.updateMatrices(p),p.castShadow&&J++),g.spotLightMatrix[c]=CA.matrix,p.castShadow){const Z=I.get(p);Z.shadowIntensity=CA.intensity,Z.shadowBias=CA.bias,Z.shadowNormalBias=CA.normalBias,Z.shadowRadius=CA.radius,Z.shadowMapSize=CA.mapSize,g.spotShadow[c]=Z,g.spotShadowMap[c]=AA,k++}c++}else if(p.isRectAreaLight){const W=A.get(p);W.color.copy(v).multiplyScalar(O),W.halfWidth.set(p.width*.5,0,0),W.halfHeight.set(0,p.height*.5,0),g.rectArea[S]=W,S++}else if(p.isPointLight){const W=A.get(p);if(W.color.copy(p.color).multiplyScalar(p.intensity),W.distance=p.distance,W.decay=p.decay,p.castShadow){const CA=p.shadow,Z=I.get(p);Z.shadowIntensity=CA.intensity,Z.shadowBias=CA.bias,Z.shadowNormalBias=CA.normalBias,Z.shadowRadius=CA.radius,Z.shadowMapSize=CA.mapSize,Z.shadowCameraNear=CA.camera.near,Z.shadowCameraFar=CA.camera.far,g.pointShadow[w]=Z,g.pointShadowMap[w]=AA,g.pointShadowMatrix[w]=p.shadow.matrix,U++}g.point[w]=W,w++}else if(p.isHemisphereLight){const W=A.get(p);W.skyColor.copy(p.color).multiplyScalar(O),W.groundColor.copy(p.groundColor).multiplyScalar(O),g.hemi[h]=W,h++}}S>0&&(C.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=QA.LTC_FLOAT_1,g.rectAreaLTC2=QA.LTC_FLOAT_2):(g.rectAreaLTC1=QA.LTC_HALF_1,g.rectAreaLTC2=QA.LTC_HALF_2)),g.ambient[0]=D,g.ambient[1]=a,g.ambient[2]=s;const f=g.hash;(f.directionalLength!==n||f.pointLength!==w||f.spotLength!==c||f.rectAreaLength!==S||f.hemiLength!==h||f.numDirectionalShadows!==M||f.numPointShadows!==U||f.numSpotShadows!==k||f.numSpotMaps!==Y||f.numLightProbes!==F)&&(g.directional.length=n,g.spot.length=c,g.rectArea.length=S,g.point.length=w,g.hemi.length=h,g.directionalShadow.length=M,g.directionalShadowMap.length=M,g.pointShadow.length=U,g.pointShadowMap.length=U,g.spotShadow.length=k,g.spotShadowMap.length=k,g.directionalShadowMatrix.length=M,g.pointShadowMatrix.length=U,g.spotLightMatrix.length=k+Y-J,g.spotLightMap.length=Y,g.numSpotLightShadowsWithMaps=J,g.numLightProbes=F,f.directionalLength=n,f.pointLength=w,f.spotLength=c,f.rectAreaLength=S,f.hemiLength=h,f.numDirectionalShadows=M,f.numPointShadows=U,f.numSpotShadows=k,f.numSpotMaps=Y,f.numLightProbes=F,g.version=Ww++)}function o(t,D){let a=0,s=0,n=0,w=0,c=0;const S=D.matrixWorldInverse;for(let h=0,M=t.length;h<M;h++){const U=t[h];if(U.isDirectionalLight){const k=g.directional[a];k.direction.setFromMatrixPosition(U.matrixWorld),B.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(B),k.direction.transformDirection(S),a++}else if(U.isSpotLight){const k=g.spot[n];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),k.direction.setFromMatrixPosition(U.matrixWorld),B.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(B),k.direction.transformDirection(S),n++}else if(U.isRectAreaLight){const k=g.rectArea[w];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),E.identity(),Q.copy(U.matrixWorld),Q.premultiply(S),E.extractRotation(Q),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),k.halfWidth.applyMatrix4(E),k.halfHeight.applyMatrix4(E),w++}else if(U.isPointLight){const k=g.point[s];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(S),s++}else if(U.isHemisphereLight){const k=g.hemi[c];k.direction.setFromMatrixPosition(U.matrixWorld),k.direction.transformDirection(S),c++}}}return{setup:i,setupView:o,state:g}}function Yt(C){const A=new Vw(C),I=[],g=[];function B(D){t.camera=D,I.length=0,g.length=0}function Q(D){I.push(D)}function E(D){g.push(D)}function i(){A.setup(I)}function o(D){A.setupView(I,D)}const t={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:B,state:t,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function jw(C){let A=new WeakMap;function I(B,Q=0){const E=A.get(B);let i;return E===void 0?(i=new Yt(C),A.set(B,[i])):Q>=E.length?(i=new Yt(C),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
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
}`;function $w(C,A,I){let g=new Wi;const B=new qA,Q=new qA,E=new GI,i=new cs({depthPacking:ha}),o=new Gs,t={},D=I.maxTextureSize,a={[CC]:PI,[PI]:CC,[ug]:ug},s=new EC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qA},radius:{value:4}},vertexShader:Xw,fragmentShader:zw}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const w=new kg;w.setAttribute("position",new Jg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const c=new WI(w,s),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ae;let h=this.type;this.render=function(J,F,f){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||J.length===0)return;const y=C.getRenderTarget(),l=C.getActiveCubeFace(),p=C.getActiveMipmapLevel(),v=C.state;v.setBlending(IC),v.buffers.color.setClear(1,1,1,1),v.buffers.depth.setTest(!0),v.setScissorTest(!1);const O=h!==fg&&this.type===fg,V=h===fg&&this.type!==fg;for(let AA=0,W=J.length;AA<W;AA++){const CA=J[AA],Z=CA.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",CA,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;B.copy(Z.mapSize);const oA=Z.getFrameExtents();if(B.multiply(oA),Q.copy(Z.mapSize),(B.x>D||B.y>D)&&(B.x>D&&(Q.x=Math.floor(D/oA.x),B.x=Q.x*oA.x,Z.mapSize.x=Q.x),B.y>D&&(Q.y=Math.floor(D/oA.y),B.y=Q.y*oA.y,Z.mapSize.y=Q.y)),Z.map===null||O===!0||V===!0){const kA=this.type!==fg?{minFilter:cg,magFilter:cg}:{};Z.map!==null&&Z.map.dispose(),Z.map=new MC(B.x,B.y,kA),Z.map.texture.name=CA.name+".shadowMap",Z.camera.updateProjectionMatrix()}C.setRenderTarget(Z.map),C.clear();const hA=Z.getViewportCount();for(let kA=0;kA<hA;kA++){const bA=Z.getViewport(kA);E.set(Q.x*bA.x,Q.y*bA.y,Q.x*bA.z,Q.y*bA.w),v.viewport(E),Z.updateMatrices(CA,kA),g=Z.getFrustum(),k(F,f,Z.camera,CA,this.type)}Z.isPointLightShadow!==!0&&this.type===fg&&M(Z,f),Z.needsUpdate=!1}h=this.type,S.needsUpdate=!1,C.setRenderTarget(y,l,p)};function M(J,F){const f=A.update(c);s.defines.VSM_SAMPLES!==J.blurSamples&&(s.defines.VSM_SAMPLES=J.blurSamples,n.defines.VSM_SAMPLES=J.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),J.mapPass===null&&(J.mapPass=new MC(B.x,B.y)),s.uniforms.shadow_pass.value=J.map.texture,s.uniforms.resolution.value=J.mapSize,s.uniforms.radius.value=J.radius,C.setRenderTarget(J.mapPass),C.clear(),C.renderBufferDirect(F,null,f,s,c,null),n.uniforms.shadow_pass.value=J.mapPass.texture,n.uniforms.resolution.value=J.mapSize,n.uniforms.radius.value=J.radius,C.setRenderTarget(J.map),C.clear(),C.renderBufferDirect(F,null,f,n,c,null)}function U(J,F,f,y){let l=null;const p=f.isPointLight===!0?J.customDistanceMaterial:J.customDepthMaterial;if(p!==void 0)l=p;else if(l=f.isPointLight===!0?o:i,C.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const v=l.uuid,O=F.uuid;let V=t[v];V===void 0&&(V={},t[v]=V);let AA=V[O];AA===void 0&&(AA=l.clone(),V[O]=AA,F.addEventListener("dispose",Y)),l=AA}if(l.visible=F.visible,l.wireframe=F.wireframe,y===fg?l.side=F.shadowSide!==null?F.shadowSide:F.side:l.side=F.shadowSide!==null?F.shadowSide:a[F.side],l.alphaMap=F.alphaMap,l.alphaTest=F.alphaTest,l.map=F.map,l.clipShadows=F.clipShadows,l.clippingPlanes=F.clippingPlanes,l.clipIntersection=F.clipIntersection,l.displacementMap=F.displacementMap,l.displacementScale=F.displacementScale,l.displacementBias=F.displacementBias,l.wireframeLinewidth=F.wireframeLinewidth,l.linewidth=F.linewidth,f.isPointLight===!0&&l.isMeshDistanceMaterial===!0){const v=C.properties.get(l);v.light=f}return l}function k(J,F,f,y,l){if(J.visible===!1)return;if(J.layers.test(F.layers)&&(J.isMesh||J.isLine||J.isPoints)&&(J.castShadow||J.receiveShadow&&l===fg)&&(!J.frustumCulled||g.intersectsObject(J))){J.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,J.matrixWorld);const O=A.update(J),V=J.material;if(Array.isArray(V)){const AA=O.groups;for(let W=0,CA=AA.length;W<CA;W++){const Z=AA[W],oA=V[Z.materialIndex];if(oA&&oA.visible){const hA=U(J,oA,y,l);J.onBeforeShadow(C,J,F,f,O,hA,Z),C.renderBufferDirect(f,null,O,hA,J,Z),J.onAfterShadow(C,J,F,f,O,hA,Z)}}}else if(V.visible){const AA=U(J,V,y,l);J.onBeforeShadow(C,J,F,f,O,AA,null),C.renderBufferDirect(f,null,O,AA,J,null),J.onAfterShadow(C,J,F,f,O,AA,null)}}const v=J.children;for(let O=0,V=v.length;O<V;O++)k(v[O],F,f,y,l)}function Y(J){J.target.removeEventListener("dispose",Y);for(const f in t){const y=t[f],l=J.target.uuid;l in y&&(y[l].dispose(),delete y[l])}}}const Ar={[HE]:uE,[mE]:bE,[TE]:OE,[IB]:xE,[uE]:HE,[bE]:mE,[OE]:TE,[xE]:IB};function Ir(C,A){function I(){let L=!1;const EA=new GI;let _=null;const z=new GI(0,0,0,0);return{setMask:function(aA){_!==aA&&!L&&(C.colorMask(aA,aA,aA,aA),_=aA)},setLocked:function(aA){L=aA},setClear:function(aA,DA,fA,rI,uI){uI===!0&&(aA*=rI,DA*=rI,fA*=rI),EA.set(aA,DA,fA,rI),z.equals(EA)===!1&&(C.clearColor(aA,DA,fA,rI),z.copy(EA))},reset:function(){L=!1,_=null,z.set(-1,0,0,0)}}}function g(){let L=!1,EA=!1,_=null,z=null,aA=null;return{setReversed:function(DA){if(EA!==DA){const fA=A.get("EXT_clip_control");EA?fA.clipControlEXT(fA.LOWER_LEFT_EXT,fA.ZERO_TO_ONE_EXT):fA.clipControlEXT(fA.LOWER_LEFT_EXT,fA.NEGATIVE_ONE_TO_ONE_EXT);const rI=aA;aA=null,this.setClear(rI)}EA=DA},getReversed:function(){return EA},setTest:function(DA){DA?tA(C.DEPTH_TEST):RA(C.DEPTH_TEST)},setMask:function(DA){_!==DA&&!L&&(C.depthMask(DA),_=DA)},setFunc:function(DA){if(EA&&(DA=Ar[DA]),z!==DA){switch(DA){case HE:C.depthFunc(C.NEVER);break;case uE:C.depthFunc(C.ALWAYS);break;case mE:C.depthFunc(C.LESS);break;case IB:C.depthFunc(C.LEQUAL);break;case TE:C.depthFunc(C.EQUAL);break;case xE:C.depthFunc(C.GEQUAL);break;case bE:C.depthFunc(C.GREATER);break;case OE:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}z=DA}},setLocked:function(DA){L=DA},setClear:function(DA){aA!==DA&&(EA&&(DA=1-DA),C.clearDepth(DA),aA=DA)},reset:function(){L=!1,_=null,z=null,aA=null,EA=!1}}}function B(){let L=!1,EA=null,_=null,z=null,aA=null,DA=null,fA=null,rI=null,uI=null;return{setTest:function(BI){L||(BI?tA(C.STENCIL_TEST):RA(C.STENCIL_TEST))},setMask:function(BI){EA!==BI&&!L&&(C.stencilMask(BI),EA=BI)},setFunc:function(BI,ig,Rg){(_!==BI||z!==ig||aA!==Rg)&&(C.stencilFunc(BI,ig,Rg),_=BI,z=ig,aA=Rg)},setOp:function(BI,ig,Rg){(DA!==BI||fA!==ig||rI!==Rg)&&(C.stencilOp(BI,ig,Rg),DA=BI,fA=ig,rI=Rg)},setLocked:function(BI){L=BI},setClear:function(BI){uI!==BI&&(C.clearStencil(BI),uI=BI)},reset:function(){L=!1,EA=null,_=null,z=null,aA=null,DA=null,fA=null,rI=null,uI=null}}}const Q=new I,E=new g,i=new B,o=new WeakMap,t=new WeakMap;let D={},a={},s=new WeakMap,n=[],w=null,c=!1,S=null,h=null,M=null,U=null,k=null,Y=null,J=null,F=new ZA(0,0,0),f=0,y=!1,l=null,p=null,v=null,O=null,V=null;const AA=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,CA=0;const Z=C.getParameter(C.VERSION);Z.indexOf("WebGL")!==-1?(CA=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=CA>=1):Z.indexOf("OpenGL ES")!==-1&&(CA=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=CA>=2);let oA=null,hA={};const kA=C.getParameter(C.SCISSOR_BOX),bA=C.getParameter(C.VIEWPORT),iI=new GI().fromArray(kA),j=new GI().fromArray(bA);function BA(L,EA,_,z){const aA=new Uint8Array(4),DA=C.createTexture();C.bindTexture(L,DA),C.texParameteri(L,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(L,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let fA=0;fA<_;fA++)L===C.TEXTURE_3D||L===C.TEXTURE_2D_ARRAY?C.texImage3D(EA,0,C.RGBA,1,1,z,0,C.RGBA,C.UNSIGNED_BYTE,aA):C.texImage2D(EA+fA,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,aA);return DA}const GA={};GA[C.TEXTURE_2D]=BA(C.TEXTURE_2D,C.TEXTURE_2D,1),GA[C.TEXTURE_CUBE_MAP]=BA(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),GA[C.TEXTURE_2D_ARRAY]=BA(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),GA[C.TEXTURE_3D]=BA(C.TEXTURE_3D,C.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),E.setClear(1),i.setClear(0),tA(C.DEPTH_TEST),E.setFunc(IB),vA(!1),WA(Jo),tA(C.CULL_FACE),R(IC);function tA(L){D[L]!==!0&&(C.enable(L),D[L]=!0)}function RA(L){D[L]!==!1&&(C.disable(L),D[L]=!1)}function LA(L,EA){return a[L]!==EA?(C.bindFramebuffer(L,EA),a[L]=EA,L===C.DRAW_FRAMEBUFFER&&(a[C.FRAMEBUFFER]=EA),L===C.FRAMEBUFFER&&(a[C.DRAW_FRAMEBUFFER]=EA),!0):!1}function OA(L,EA){let _=n,z=!1;if(L){_=s.get(EA),_===void 0&&(_=[],s.set(EA,_));const aA=L.textures;if(_.length!==aA.length||_[0]!==C.COLOR_ATTACHMENT0){for(let DA=0,fA=aA.length;DA<fA;DA++)_[DA]=C.COLOR_ATTACHMENT0+DA;_.length=aA.length,z=!0}}else _[0]!==C.BACK&&(_[0]=C.BACK,z=!0);z&&C.drawBuffers(_)}function nI(L){return w!==L?(C.useProgram(L),w=L,!0):!1}const jA={[cC]:C.FUNC_ADD,[TD]:C.FUNC_SUBTRACT,[xD]:C.FUNC_REVERSE_SUBTRACT};jA[bD]=C.MIN,jA[OD]=C.MAX;const lI={[_D]:C.ZERO,[ZD]:C.ONE,[vD]:C.SRC_COLOR,[LE]:C.SRC_ALPHA,[zD]:C.SRC_ALPHA_SATURATE,[jD]:C.DST_COLOR,[PD]:C.DST_ALPHA,[WD]:C.ONE_MINUS_SRC_COLOR,[fE]:C.ONE_MINUS_SRC_ALPHA,[XD]:C.ONE_MINUS_DST_COLOR,[VD]:C.ONE_MINUS_DST_ALPHA,[$D]:C.CONSTANT_COLOR,[Aa]:C.ONE_MINUS_CONSTANT_COLOR,[Ia]:C.CONSTANT_ALPHA,[ga]:C.ONE_MINUS_CONSTANT_ALPHA};function R(L,EA,_,z,aA,DA,fA,rI,uI,BI){if(L===IC){c===!0&&(RA(C.BLEND),c=!1);return}if(c===!1&&(tA(C.BLEND),c=!0),L!==mD){if(L!==S||BI!==y){if((h!==cC||k!==cC)&&(C.blendEquation(C.FUNC_ADD),h=cC,k=cC),BI)switch(L){case zC:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Fo:C.blendFunc(C.ONE,C.ONE);break;case Ro:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case po:C.blendFuncSeparate(C.ZERO,C.SRC_COLOR,C.ZERO,C.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zC:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case Fo:C.blendFunc(C.SRC_ALPHA,C.ONE);break;case Ro:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case po:C.blendFunc(C.ZERO,C.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,U=null,Y=null,J=null,F.set(0,0,0),f=0,S=L,y=BI}return}aA=aA||EA,DA=DA||_,fA=fA||z,(EA!==h||aA!==k)&&(C.blendEquationSeparate(jA[EA],jA[aA]),h=EA,k=aA),(_!==M||z!==U||DA!==Y||fA!==J)&&(C.blendFuncSeparate(lI[_],lI[z],lI[DA],lI[fA]),M=_,U=z,Y=DA,J=fA),(rI.equals(F)===!1||uI!==f)&&(C.blendColor(rI.r,rI.g,rI.b,uI),F.copy(rI),f=uI),S=L,y=!1}function Ag(L,EA){L.side===ug?RA(C.CULL_FACE):tA(C.CULL_FACE);let _=L.side===PI;EA&&(_=!_),vA(_),L.blending===zC&&L.transparent===!1?R(IC):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),E.setFunc(L.depthFunc),E.setTest(L.depthTest),E.setMask(L.depthWrite),Q.setMask(L.colorWrite);const z=L.stencilWrite;i.setTest(z),z&&(i.setMask(L.stencilWriteMask),i.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),i.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),eI(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?tA(C.SAMPLE_ALPHA_TO_COVERAGE):RA(C.SAMPLE_ALPHA_TO_COVERAGE)}function vA(L){l!==L&&(L?C.frontFace(C.CW):C.frontFace(C.CCW),l=L)}function WA(L){L!==fD?(tA(C.CULL_FACE),L!==p&&(L===Jo?C.cullFace(C.BACK):L===HD?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):RA(C.CULL_FACE),p=L}function yA(L){L!==v&&(W&&C.lineWidth(L),v=L)}function eI(L,EA,_){L?(tA(C.POLYGON_OFFSET_FILL),(O!==EA||V!==_)&&(C.polygonOffset(EA,_),O=EA,V=_)):RA(C.POLYGON_OFFSET_FILL)}function UA(L){L?tA(C.SCISSOR_TEST):RA(C.SCISSOR_TEST)}function N(L){L===void 0&&(L=C.TEXTURE0+AA-1),oA!==L&&(C.activeTexture(L),oA=L)}function r(L,EA,_){_===void 0&&(oA===null?_=C.TEXTURE0+AA-1:_=oA);let z=hA[_];z===void 0&&(z={type:void 0,texture:void 0},hA[_]=z),(z.type!==L||z.texture!==EA)&&(oA!==_&&(C.activeTexture(_),oA=_),C.bindTexture(L,EA||GA[L]),z.type=L,z.texture=EA)}function T(){const L=hA[oA];L!==void 0&&L.type!==void 0&&(C.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{C.compressedTexImage2D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{C.compressedTexImage3D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{C.texSubImage2D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lA(){try{C.texSubImage3D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function eA(){try{C.compressedTexSubImage2D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nA(){try{C.compressedTexSubImage3D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function XA(){try{C.texStorage2D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gA(){try{C.texStorage3D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function SA(){try{C.texImage2D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function FA(){try{C.texImage3D.apply(C,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pA(L){iI.equals(L)===!1&&(C.scissor(L.x,L.y,L.z,L.w),iI.copy(L))}function wA(L){j.equals(L)===!1&&(C.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function PA(L,EA){let _=t.get(EA);_===void 0&&(_=new WeakMap,t.set(EA,_));let z=_.get(L);z===void 0&&(z=C.getUniformBlockIndex(EA,L.name),_.set(L,z))}function uA(L,EA){const z=t.get(EA).get(L);o.get(EA)!==z&&(C.uniformBlockBinding(EA,z,L.__bindingPointIndex),o.set(EA,z))}function tI(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),E.setReversed(!1),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),D={},oA=null,hA={},a={},s=new WeakMap,n=[],w=null,c=!1,S=null,h=null,M=null,U=null,k=null,Y=null,J=null,F=new ZA(0,0,0),f=0,y=!1,l=null,p=null,v=null,O=null,V=null,iI.set(0,0,C.canvas.width,C.canvas.height),j.set(0,0,C.canvas.width,C.canvas.height),Q.reset(),E.reset(),i.reset()}return{buffers:{color:Q,depth:E,stencil:i},enable:tA,disable:RA,bindFramebuffer:LA,drawBuffers:OA,useProgram:nI,setBlending:R,setMaterial:Ag,setFlipSided:vA,setCullFace:WA,setLineWidth:yA,setPolygonOffset:eI,setScissorTest:UA,activeTexture:N,bindTexture:r,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:SA,texImage3D:FA,updateUBOMapping:PA,uniformBlockBinding:uA,texStorage2D:XA,texStorage3D:gA,texSubImage2D:P,texSubImage3D:lA,compressedTexSubImage2D:eA,compressedTexSubImage3D:nA,scissor:pA,viewport:wA,reset:tI}}function gr(C,A,I,g,B,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),t=new qA,D=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,r){return n?new OffscreenCanvas(N,r):FQ("canvas")}function c(N,r,T){let X=1;const $=UA(N);if(($.width>T||$.height>T)&&(X=T/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const P=Math.floor(X*$.width),lA=Math.floor(X*$.height);a===void 0&&(a=w(P,lA));const eA=r?w(P,lA):a;return eA.width=P,eA.height=lA,eA.getContext("2d").drawImage(N,0,0,P,lA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+P+"x"+lA+")."),eA}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),N;return N}function S(N){return N.generateMipmaps}function h(N){C.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?C.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?C.TEXTURE_2D_ARRAY:C.TEXTURE_2D}function U(N,r,T,X,$=!1){if(N!==null){if(C[N]!==void 0)return C[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let P=r;if(r===C.RED&&(T===C.FLOAT&&(P=C.R32F),T===C.HALF_FLOAT&&(P=C.R16F),T===C.UNSIGNED_BYTE&&(P=C.R8)),r===C.RED_INTEGER&&(T===C.UNSIGNED_BYTE&&(P=C.R8UI),T===C.UNSIGNED_SHORT&&(P=C.R16UI),T===C.UNSIGNED_INT&&(P=C.R32UI),T===C.BYTE&&(P=C.R8I),T===C.SHORT&&(P=C.R16I),T===C.INT&&(P=C.R32I)),r===C.RG&&(T===C.FLOAT&&(P=C.RG32F),T===C.HALF_FLOAT&&(P=C.RG16F),T===C.UNSIGNED_BYTE&&(P=C.RG8)),r===C.RG_INTEGER&&(T===C.UNSIGNED_BYTE&&(P=C.RG8UI),T===C.UNSIGNED_SHORT&&(P=C.RG16UI),T===C.UNSIGNED_INT&&(P=C.RG32UI),T===C.BYTE&&(P=C.RG8I),T===C.SHORT&&(P=C.RG16I),T===C.INT&&(P=C.RG32I)),r===C.RGB_INTEGER&&(T===C.UNSIGNED_BYTE&&(P=C.RGB8UI),T===C.UNSIGNED_SHORT&&(P=C.RGB16UI),T===C.UNSIGNED_INT&&(P=C.RGB32UI),T===C.BYTE&&(P=C.RGB8I),T===C.SHORT&&(P=C.RGB16I),T===C.INT&&(P=C.RGB32I)),r===C.RGBA_INTEGER&&(T===C.UNSIGNED_BYTE&&(P=C.RGBA8UI),T===C.UNSIGNED_SHORT&&(P=C.RGBA16UI),T===C.UNSIGNED_INT&&(P=C.RGBA32UI),T===C.BYTE&&(P=C.RGBA8I),T===C.SHORT&&(P=C.RGBA16I),T===C.INT&&(P=C.RGBA32I)),r===C.RGB&&T===C.UNSIGNED_INT_5_9_9_9_REV&&(P=C.RGB9_E5),r===C.RGBA){const lA=$?KQ:AI.getTransfer(X);T===C.FLOAT&&(P=C.RGBA32F),T===C.HALF_FLOAT&&(P=C.RGBA16F),T===C.UNSIGNED_BYTE&&(P=lA===QI?C.SRGB8_ALPHA8:C.RGBA8),T===C.UNSIGNED_SHORT_4_4_4_4&&(P=C.RGBA4),T===C.UNSIGNED_SHORT_5_5_5_1&&(P=C.RGB5_A1)}return(P===C.R16F||P===C.R32F||P===C.RG16F||P===C.RG32F||P===C.RGBA16F||P===C.RGBA32F)&&A.get("EXT_color_buffer_float"),P}function k(N,r){let T;return N?r===null||r===UC||r===BB?T=C.DEPTH24_STENCIL8:r===Tg?T=C.DEPTH32F_STENCIL8:r===dB&&(T=C.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===UC||r===BB?T=C.DEPTH_COMPONENT24:r===Tg?T=C.DEPTH_COMPONENT32F:r===dB&&(T=C.DEPTH_COMPONENT16),T}function Y(N,r){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==cg&&N.minFilter!==Kg?Math.log2(Math.max(r.width,r.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?r.mipmaps.length:1}function J(N){const r=N.target;r.removeEventListener("dispose",J),f(r),r.isVideoTexture&&D.delete(r)}function F(N){const r=N.target;r.removeEventListener("dispose",F),l(r)}function f(N){const r=g.get(N);if(r.__webglInit===void 0)return;const T=N.source,X=s.get(T);if(X){const $=X[r.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(N),Object.keys(X).length===0&&s.delete(T)}g.remove(N)}function y(N){const r=g.get(N);C.deleteTexture(r.__webglTexture);const T=N.source,X=s.get(T);delete X[r.__cacheKey],E.memory.textures--}function l(N){const r=g.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),g.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(r.__webglFramebuffer[X]))for(let $=0;$<r.__webglFramebuffer[X].length;$++)C.deleteFramebuffer(r.__webglFramebuffer[X][$]);else C.deleteFramebuffer(r.__webglFramebuffer[X]);r.__webglDepthbuffer&&C.deleteRenderbuffer(r.__webglDepthbuffer[X])}else{if(Array.isArray(r.__webglFramebuffer))for(let X=0;X<r.__webglFramebuffer.length;X++)C.deleteFramebuffer(r.__webglFramebuffer[X]);else C.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&C.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&C.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let X=0;X<r.__webglColorRenderbuffer.length;X++)r.__webglColorRenderbuffer[X]&&C.deleteRenderbuffer(r.__webglColorRenderbuffer[X]);r.__webglDepthRenderbuffer&&C.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const T=N.textures;for(let X=0,$=T.length;X<$;X++){const P=g.get(T[X]);P.__webglTexture&&(C.deleteTexture(P.__webglTexture),E.memory.textures--),g.remove(T[X])}g.remove(N)}let p=0;function v(){p=0}function O(){const N=p;return N>=B.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+B.maxTextures),p+=1,N}function V(N){const r=[];return r.push(N.wrapS),r.push(N.wrapT),r.push(N.wrapR||0),r.push(N.magFilter),r.push(N.minFilter),r.push(N.anisotropy),r.push(N.internalFormat),r.push(N.format),r.push(N.type),r.push(N.generateMipmaps),r.push(N.premultiplyAlpha),r.push(N.flipY),r.push(N.unpackAlignment),r.push(N.colorSpace),r.join()}function AA(N,r){const T=g.get(N);if(N.isVideoTexture&&yA(N),N.isRenderTargetTexture===!1&&N.version>0&&T.__version!==N.version){const X=N.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(T,N,r);return}}I.bindTexture(C.TEXTURE_2D,T.__webglTexture,C.TEXTURE0+r)}function W(N,r){const T=g.get(N);if(N.version>0&&T.__version!==N.version){j(T,N,r);return}I.bindTexture(C.TEXTURE_2D_ARRAY,T.__webglTexture,C.TEXTURE0+r)}function CA(N,r){const T=g.get(N);if(N.version>0&&T.__version!==N.version){j(T,N,r);return}I.bindTexture(C.TEXTURE_3D,T.__webglTexture,C.TEXTURE0+r)}function Z(N,r){const T=g.get(N);if(N.version>0&&T.__version!==N.version){BA(T,N,r);return}I.bindTexture(C.TEXTURE_CUBE_MAP,T.__webglTexture,C.TEXTURE0+r)}const oA={[vE]:C.REPEAT,[lC]:C.CLAMP_TO_EDGE,[WE]:C.MIRRORED_REPEAT},hA={[cg]:C.NEAREST,[aa]:C.NEAREST_MIPMAP_NEAREST,[PB]:C.NEAREST_MIPMAP_LINEAR,[Kg]:C.LINEAR,[IE]:C.LINEAR_MIPMAP_NEAREST,[kC]:C.LINEAR_MIPMAP_LINEAR},kA={[Sa]:C.NEVER,[ka]:C.ALWAYS,[wa]:C.LESS,[Me]:C.LEQUAL,[ra]:C.EQUAL,[la]:C.GEQUAL,[ca]:C.GREATER,[Ga]:C.NOTEQUAL};function bA(N,r){if(r.type===Tg&&A.has("OES_texture_float_linear")===!1&&(r.magFilter===Kg||r.magFilter===IE||r.magFilter===PB||r.magFilter===kC||r.minFilter===Kg||r.minFilter===IE||r.minFilter===PB||r.minFilter===kC)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),C.texParameteri(N,C.TEXTURE_WRAP_S,oA[r.wrapS]),C.texParameteri(N,C.TEXTURE_WRAP_T,oA[r.wrapT]),(N===C.TEXTURE_3D||N===C.TEXTURE_2D_ARRAY)&&C.texParameteri(N,C.TEXTURE_WRAP_R,oA[r.wrapR]),C.texParameteri(N,C.TEXTURE_MAG_FILTER,hA[r.magFilter]),C.texParameteri(N,C.TEXTURE_MIN_FILTER,hA[r.minFilter]),r.compareFunction&&(C.texParameteri(N,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(N,C.TEXTURE_COMPARE_FUNC,kA[r.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===cg||r.minFilter!==PB&&r.minFilter!==kC||r.type===Tg&&A.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||g.get(r).__currentAnisotropy){const T=A.get("EXT_texture_filter_anisotropic");C.texParameterf(N,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,B.getMaxAnisotropy())),g.get(r).__currentAnisotropy=r.anisotropy}}}function iI(N,r){let T=!1;N.__webglInit===void 0&&(N.__webglInit=!0,r.addEventListener("dispose",J));const X=r.source;let $=s.get(X);$===void 0&&($={},s.set(X,$));const P=V(r);if(P!==N.__cacheKey){$[P]===void 0&&($[P]={texture:C.createTexture(),usedTimes:0},E.memory.textures++,T=!0),$[P].usedTimes++;const lA=$[N.__cacheKey];lA!==void 0&&($[N.__cacheKey].usedTimes--,lA.usedTimes===0&&y(r)),N.__cacheKey=P,N.__webglTexture=$[P].texture}return T}function j(N,r,T){let X=C.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(X=C.TEXTURE_2D_ARRAY),r.isData3DTexture&&(X=C.TEXTURE_3D);const $=iI(N,r),P=r.source;I.bindTexture(X,N.__webglTexture,C.TEXTURE0+T);const lA=g.get(P);if(P.version!==lA.__version||$===!0){I.activeTexture(C.TEXTURE0+T);const eA=AI.getPrimaries(AI.workingColorSpace),nA=r.colorSpace===AC?null:AI.getPrimaries(r.colorSpace),XA=r.colorSpace===AC||eA===nA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,r.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,r.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,XA);let gA=c(r.image,!1,B.maxTextureSize);gA=eI(r,gA);const SA=Q.convert(r.format,r.colorSpace),FA=Q.convert(r.type);let pA=U(r.internalFormat,SA,FA,r.colorSpace,r.isVideoTexture);bA(X,r);let wA;const PA=r.mipmaps,uA=r.isVideoTexture!==!0,tI=lA.__version===void 0||$===!0,L=P.dataReady,EA=Y(r,gA);if(r.isDepthTexture)pA=k(r.format===QB,r.type),tI&&(uA?I.texStorage2D(C.TEXTURE_2D,1,pA,gA.width,gA.height):I.texImage2D(C.TEXTURE_2D,0,pA,gA.width,gA.height,0,SA,FA,null));else if(r.isDataTexture)if(PA.length>0){uA&&tI&&I.texStorage2D(C.TEXTURE_2D,EA,pA,PA[0].width,PA[0].height);for(let _=0,z=PA.length;_<z;_++)wA=PA[_],uA?L&&I.texSubImage2D(C.TEXTURE_2D,_,0,0,wA.width,wA.height,SA,FA,wA.data):I.texImage2D(C.TEXTURE_2D,_,pA,wA.width,wA.height,0,SA,FA,wA.data);r.generateMipmaps=!1}else uA?(tI&&I.texStorage2D(C.TEXTURE_2D,EA,pA,gA.width,gA.height),L&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,gA.width,gA.height,SA,FA,gA.data)):I.texImage2D(C.TEXTURE_2D,0,pA,gA.width,gA.height,0,SA,FA,gA.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){uA&&tI&&I.texStorage3D(C.TEXTURE_2D_ARRAY,EA,pA,PA[0].width,PA[0].height,gA.depth);for(let _=0,z=PA.length;_<z;_++)if(wA=PA[_],r.format!==rg)if(SA!==null)if(uA){if(L)if(r.layerUpdates.size>0){const aA=et(wA.width,wA.height,r.format,r.type);for(const DA of r.layerUpdates){const fA=wA.data.subarray(DA*aA/wA.data.BYTES_PER_ELEMENT,(DA+1)*aA/wA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,_,0,0,DA,wA.width,wA.height,1,SA,fA)}r.clearLayerUpdates()}else I.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,_,0,0,0,wA.width,wA.height,gA.depth,SA,wA.data)}else I.compressedTexImage3D(C.TEXTURE_2D_ARRAY,_,pA,wA.width,wA.height,gA.depth,0,wA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else uA?L&&I.texSubImage3D(C.TEXTURE_2D_ARRAY,_,0,0,0,wA.width,wA.height,gA.depth,SA,FA,wA.data):I.texImage3D(C.TEXTURE_2D_ARRAY,_,pA,wA.width,wA.height,gA.depth,0,SA,FA,wA.data)}else{uA&&tI&&I.texStorage2D(C.TEXTURE_2D,EA,pA,PA[0].width,PA[0].height);for(let _=0,z=PA.length;_<z;_++)wA=PA[_],r.format!==rg?SA!==null?uA?L&&I.compressedTexSubImage2D(C.TEXTURE_2D,_,0,0,wA.width,wA.height,SA,wA.data):I.compressedTexImage2D(C.TEXTURE_2D,_,pA,wA.width,wA.height,0,wA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):uA?L&&I.texSubImage2D(C.TEXTURE_2D,_,0,0,wA.width,wA.height,SA,FA,wA.data):I.texImage2D(C.TEXTURE_2D,_,pA,wA.width,wA.height,0,SA,FA,wA.data)}else if(r.isDataArrayTexture)if(uA){if(tI&&I.texStorage3D(C.TEXTURE_2D_ARRAY,EA,pA,gA.width,gA.height,gA.depth),L)if(r.layerUpdates.size>0){const _=et(gA.width,gA.height,r.format,r.type);for(const z of r.layerUpdates){const aA=gA.data.subarray(z*_/gA.data.BYTES_PER_ELEMENT,(z+1)*_/gA.data.BYTES_PER_ELEMENT);I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,z,gA.width,gA.height,1,SA,FA,aA)}r.clearLayerUpdates()}else I.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,gA.width,gA.height,gA.depth,SA,FA,gA.data)}else I.texImage3D(C.TEXTURE_2D_ARRAY,0,pA,gA.width,gA.height,gA.depth,0,SA,FA,gA.data);else if(r.isData3DTexture)uA?(tI&&I.texStorage3D(C.TEXTURE_3D,EA,pA,gA.width,gA.height,gA.depth),L&&I.texSubImage3D(C.TEXTURE_3D,0,0,0,0,gA.width,gA.height,gA.depth,SA,FA,gA.data)):I.texImage3D(C.TEXTURE_3D,0,pA,gA.width,gA.height,gA.depth,0,SA,FA,gA.data);else if(r.isFramebufferTexture){if(tI)if(uA)I.texStorage2D(C.TEXTURE_2D,EA,pA,gA.width,gA.height);else{let _=gA.width,z=gA.height;for(let aA=0;aA<EA;aA++)I.texImage2D(C.TEXTURE_2D,aA,pA,_,z,0,SA,FA,null),_>>=1,z>>=1}}else if(PA.length>0){if(uA&&tI){const _=UA(PA[0]);I.texStorage2D(C.TEXTURE_2D,EA,pA,_.width,_.height)}for(let _=0,z=PA.length;_<z;_++)wA=PA[_],uA?L&&I.texSubImage2D(C.TEXTURE_2D,_,0,0,SA,FA,wA):I.texImage2D(C.TEXTURE_2D,_,pA,SA,FA,wA);r.generateMipmaps=!1}else if(uA){if(tI){const _=UA(gA);I.texStorage2D(C.TEXTURE_2D,EA,pA,_.width,_.height)}L&&I.texSubImage2D(C.TEXTURE_2D,0,0,0,SA,FA,gA)}else I.texImage2D(C.TEXTURE_2D,0,pA,SA,FA,gA);S(r)&&h(X),lA.__version=P.version,r.onUpdate&&r.onUpdate(r)}N.__version=r.version}function BA(N,r,T){if(r.image.length!==6)return;const X=iI(N,r),$=r.source;I.bindTexture(C.TEXTURE_CUBE_MAP,N.__webglTexture,C.TEXTURE0+T);const P=g.get($);if($.version!==P.__version||X===!0){I.activeTexture(C.TEXTURE0+T);const lA=AI.getPrimaries(AI.workingColorSpace),eA=r.colorSpace===AC?null:AI.getPrimaries(r.colorSpace),nA=r.colorSpace===AC||lA===eA?C.NONE:C.BROWSER_DEFAULT_WEBGL;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,r.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,r.unpackAlignment),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,nA);const XA=r.isCompressedTexture||r.image[0].isCompressedTexture,gA=r.image[0]&&r.image[0].isDataTexture,SA=[];for(let z=0;z<6;z++)!XA&&!gA?SA[z]=c(r.image[z],!0,B.maxCubemapSize):SA[z]=gA?r.image[z].image:r.image[z],SA[z]=eI(r,SA[z]);const FA=SA[0],pA=Q.convert(r.format,r.colorSpace),wA=Q.convert(r.type),PA=U(r.internalFormat,pA,wA,r.colorSpace),uA=r.isVideoTexture!==!0,tI=P.__version===void 0||X===!0,L=$.dataReady;let EA=Y(r,FA);bA(C.TEXTURE_CUBE_MAP,r);let _;if(XA){uA&&tI&&I.texStorage2D(C.TEXTURE_CUBE_MAP,EA,PA,FA.width,FA.height);for(let z=0;z<6;z++){_=SA[z].mipmaps;for(let aA=0;aA<_.length;aA++){const DA=_[aA];r.format!==rg?pA!==null?uA?L&&I.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,DA.width,DA.height,pA,DA.data):I.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,PA,DA.width,DA.height,0,DA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):uA?L&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,DA.width,DA.height,pA,wA,DA.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,PA,DA.width,DA.height,0,pA,wA,DA.data)}}}else{if(_=r.mipmaps,uA&&tI){_.length>0&&EA++;const z=UA(SA[0]);I.texStorage2D(C.TEXTURE_CUBE_MAP,EA,PA,z.width,z.height)}for(let z=0;z<6;z++)if(gA){uA?L&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,SA[z].width,SA[z].height,pA,wA,SA[z].data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,SA[z].width,SA[z].height,0,pA,wA,SA[z].data);for(let aA=0;aA<_.length;aA++){const fA=_[aA].image[z].image;uA?L&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,fA.width,fA.height,pA,wA,fA.data):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,PA,fA.width,fA.height,0,pA,wA,fA.data)}}else{uA?L&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,pA,wA,SA[z]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,pA,wA,SA[z]);for(let aA=0;aA<_.length;aA++){const DA=_[aA];uA?L&&I.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,pA,wA,DA.image[z]):I.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,PA,pA,wA,DA.image[z])}}}S(r)&&h(C.TEXTURE_CUBE_MAP),P.__version=$.version,r.onUpdate&&r.onUpdate(r)}N.__version=r.version}function GA(N,r,T,X,$,P){const lA=Q.convert(T.format,T.colorSpace),eA=Q.convert(T.type),nA=U(T.internalFormat,lA,eA,T.colorSpace),XA=g.get(r),gA=g.get(T);if(gA.__renderTarget=r,!XA.__hasExternalTextures){const SA=Math.max(1,r.width>>P),FA=Math.max(1,r.height>>P);$===C.TEXTURE_3D||$===C.TEXTURE_2D_ARRAY?I.texImage3D($,P,nA,SA,FA,r.depth,0,lA,eA,null):I.texImage2D($,P,nA,SA,FA,0,lA,eA,null)}I.bindFramebuffer(C.FRAMEBUFFER,N),WA(r)?i.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,X,$,gA.__webglTexture,0,vA(r)):($===C.TEXTURE_2D||$>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,X,$,gA.__webglTexture,P),I.bindFramebuffer(C.FRAMEBUFFER,null)}function tA(N,r,T){if(C.bindRenderbuffer(C.RENDERBUFFER,N),r.depthBuffer){const X=r.depthTexture,$=X&&X.isDepthTexture?X.type:null,P=k(r.stencilBuffer,$),lA=r.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,eA=vA(r);WA(r)?i.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,eA,P,r.width,r.height):T?C.renderbufferStorageMultisample(C.RENDERBUFFER,eA,P,r.width,r.height):C.renderbufferStorage(C.RENDERBUFFER,P,r.width,r.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,lA,C.RENDERBUFFER,N)}else{const X=r.textures;for(let $=0;$<X.length;$++){const P=X[$],lA=Q.convert(P.format,P.colorSpace),eA=Q.convert(P.type),nA=U(P.internalFormat,lA,eA,P.colorSpace),XA=vA(r);T&&WA(r)===!1?C.renderbufferStorageMultisample(C.RENDERBUFFER,XA,nA,r.width,r.height):WA(r)?i.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,XA,nA,r.width,r.height):C.renderbufferStorage(C.RENDERBUFFER,nA,r.width,r.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function RA(N,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(C.FRAMEBUFFER,N),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=g.get(r.depthTexture);X.__renderTarget=r,(!X.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),AA(r.depthTexture,0);const $=X.__webglTexture,P=vA(r);if(r.depthTexture.format===$C)WA(r)?i.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,$,0,P):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_ATTACHMENT,C.TEXTURE_2D,$,0);else if(r.depthTexture.format===QB)WA(r)?i.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,$,0,P):C.framebufferTexture2D(C.FRAMEBUFFER,C.DEPTH_STENCIL_ATTACHMENT,C.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function LA(N){const r=g.get(N),T=N.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==N.depthTexture){const X=N.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),X){const $=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),r.__depthDisposeCallback=$}r.__boundDepthTexture=X}if(N.depthTexture&&!r.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");RA(r.__webglFramebuffer,N)}else if(T){r.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(I.bindFramebuffer(C.FRAMEBUFFER,r.__webglFramebuffer[X]),r.__webglDepthbuffer[X]===void 0)r.__webglDepthbuffer[X]=C.createRenderbuffer(),tA(r.__webglDepthbuffer[X],N,!1);else{const $=N.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,P=r.__webglDepthbuffer[X];C.bindRenderbuffer(C.RENDERBUFFER,P),C.framebufferRenderbuffer(C.FRAMEBUFFER,$,C.RENDERBUFFER,P)}}else if(I.bindFramebuffer(C.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=C.createRenderbuffer(),tA(r.__webglDepthbuffer,N,!1);else{const X=N.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,$=r.__webglDepthbuffer;C.bindRenderbuffer(C.RENDERBUFFER,$),C.framebufferRenderbuffer(C.FRAMEBUFFER,X,C.RENDERBUFFER,$)}I.bindFramebuffer(C.FRAMEBUFFER,null)}function OA(N,r,T){const X=g.get(N);r!==void 0&&GA(X.__webglFramebuffer,N,N.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),T!==void 0&&LA(N)}function nI(N){const r=N.texture,T=g.get(N),X=g.get(r);N.addEventListener("dispose",F);const $=N.textures,P=N.isWebGLCubeRenderTarget===!0,lA=$.length>1;if(lA||(X.__webglTexture===void 0&&(X.__webglTexture=C.createTexture()),X.__version=r.version,E.memory.textures++),P){T.__webglFramebuffer=[];for(let eA=0;eA<6;eA++)if(r.mipmaps&&r.mipmaps.length>0){T.__webglFramebuffer[eA]=[];for(let nA=0;nA<r.mipmaps.length;nA++)T.__webglFramebuffer[eA][nA]=C.createFramebuffer()}else T.__webglFramebuffer[eA]=C.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){T.__webglFramebuffer=[];for(let eA=0;eA<r.mipmaps.length;eA++)T.__webglFramebuffer[eA]=C.createFramebuffer()}else T.__webglFramebuffer=C.createFramebuffer();if(lA)for(let eA=0,nA=$.length;eA<nA;eA++){const XA=g.get($[eA]);XA.__webglTexture===void 0&&(XA.__webglTexture=C.createTexture(),E.memory.textures++)}if(N.samples>0&&WA(N)===!1){T.__webglMultisampledFramebuffer=C.createFramebuffer(),T.__webglColorRenderbuffer=[],I.bindFramebuffer(C.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let eA=0;eA<$.length;eA++){const nA=$[eA];T.__webglColorRenderbuffer[eA]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,T.__webglColorRenderbuffer[eA]);const XA=Q.convert(nA.format,nA.colorSpace),gA=Q.convert(nA.type),SA=U(nA.internalFormat,XA,gA,nA.colorSpace,N.isXRRenderTarget===!0),FA=vA(N);C.renderbufferStorageMultisample(C.RENDERBUFFER,FA,SA,N.width,N.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+eA,C.RENDERBUFFER,T.__webglColorRenderbuffer[eA])}C.bindRenderbuffer(C.RENDERBUFFER,null),N.depthBuffer&&(T.__webglDepthRenderbuffer=C.createRenderbuffer(),tA(T.__webglDepthRenderbuffer,N,!0)),I.bindFramebuffer(C.FRAMEBUFFER,null)}}if(P){I.bindTexture(C.TEXTURE_CUBE_MAP,X.__webglTexture),bA(C.TEXTURE_CUBE_MAP,r);for(let eA=0;eA<6;eA++)if(r.mipmaps&&r.mipmaps.length>0)for(let nA=0;nA<r.mipmaps.length;nA++)GA(T.__webglFramebuffer[eA][nA],N,r,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+eA,nA);else GA(T.__webglFramebuffer[eA],N,r,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0);S(r)&&h(C.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(lA){for(let eA=0,nA=$.length;eA<nA;eA++){const XA=$[eA],gA=g.get(XA);I.bindTexture(C.TEXTURE_2D,gA.__webglTexture),bA(C.TEXTURE_2D,XA),GA(T.__webglFramebuffer,N,XA,C.COLOR_ATTACHMENT0+eA,C.TEXTURE_2D,0),S(XA)&&h(C.TEXTURE_2D)}I.unbindTexture()}else{let eA=C.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(eA=N.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),I.bindTexture(eA,X.__webglTexture),bA(eA,r),r.mipmaps&&r.mipmaps.length>0)for(let nA=0;nA<r.mipmaps.length;nA++)GA(T.__webglFramebuffer[nA],N,r,C.COLOR_ATTACHMENT0,eA,nA);else GA(T.__webglFramebuffer,N,r,C.COLOR_ATTACHMENT0,eA,0);S(r)&&h(eA),I.unbindTexture()}N.depthBuffer&&LA(N)}function jA(N){const r=N.textures;for(let T=0,X=r.length;T<X;T++){const $=r[T];if(S($)){const P=M(N),lA=g.get($).__webglTexture;I.bindTexture(P,lA),h(P),I.unbindTexture()}}}const lI=[],R=[];function Ag(N){if(N.samples>0){if(WA(N)===!1){const r=N.textures,T=N.width,X=N.height;let $=C.COLOR_BUFFER_BIT;const P=N.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,lA=g.get(N),eA=r.length>1;if(eA)for(let nA=0;nA<r.length;nA++)I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+nA,C.RENDERBUFFER,null),I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+nA,C.TEXTURE_2D,null,0);I.bindFramebuffer(C.READ_FRAMEBUFFER,lA.__webglMultisampledFramebuffer),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,lA.__webglFramebuffer);for(let nA=0;nA<r.length;nA++){if(N.resolveDepthBuffer&&(N.depthBuffer&&($|=C.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&($|=C.STENCIL_BUFFER_BIT)),eA){C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,lA.__webglColorRenderbuffer[nA]);const XA=g.get(r[nA]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,XA,0)}C.blitFramebuffer(0,0,T,X,0,0,T,X,$,C.NEAREST),o===!0&&(lI.length=0,R.length=0,lI.push(C.COLOR_ATTACHMENT0+nA),N.depthBuffer&&N.resolveDepthBuffer===!1&&(lI.push(P),R.push(P),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,R)),C.invalidateFramebuffer(C.READ_FRAMEBUFFER,lI))}if(I.bindFramebuffer(C.READ_FRAMEBUFFER,null),I.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),eA)for(let nA=0;nA<r.length;nA++){I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+nA,C.RENDERBUFFER,lA.__webglColorRenderbuffer[nA]);const XA=g.get(r[nA]).__webglTexture;I.bindFramebuffer(C.FRAMEBUFFER,lA.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+nA,C.TEXTURE_2D,XA,0)}I.bindFramebuffer(C.DRAW_FRAMEBUFFER,lA.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&o){const r=N.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[r])}}}function vA(N){return Math.min(B.maxSamples,N.samples)}function WA(N){const r=g.get(N);return N.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function yA(N){const r=E.render.frame;D.get(N)!==r&&(D.set(N,r),N.update())}function eI(N,r){const T=N.colorSpace,X=N.format,$=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||T!==EB&&T!==AC&&(AI.getTransfer(T)===QI?(X!==rg||$!==Og)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),r}function UA(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(t.width=N.naturalWidth||N.width,t.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(t.width=N.displayWidth,t.height=N.displayHeight):(t.width=N.width,t.height=N.height),t}this.allocateTextureUnit=O,this.resetTextureUnits=v,this.setTexture2D=AA,this.setTexture2DArray=W,this.setTexture3D=CA,this.setTextureCube=Z,this.rebindTextures=OA,this.setupRenderTarget=nI,this.updateRenderTargetMipmap=jA,this.updateMultisampleRenderTarget=Ag,this.setupDepthRenderbuffer=LA,this.setupFrameBufferTexture=GA,this.useMultisampledRTT=WA}function Cr(C,A){function I(g,B=AC){let Q;const E=AI.getTransfer(B);if(g===Og)return C.UNSIGNED_BYTE;if(g===mi)return C.UNSIGNED_SHORT_4_4_4_4;if(g===Ti)return C.UNSIGNED_SHORT_5_5_5_1;if(g===Se)return C.UNSIGNED_INT_5_9_9_9_REV;if(g===he)return C.BYTE;if(g===ne)return C.SHORT;if(g===dB)return C.UNSIGNED_SHORT;if(g===ui)return C.INT;if(g===UC)return C.UNSIGNED_INT;if(g===Tg)return C.FLOAT;if(g===xB)return C.HALF_FLOAT;if(g===we)return C.ALPHA;if(g===re)return C.RGB;if(g===rg)return C.RGBA;if(g===ce)return C.LUMINANCE;if(g===Ge)return C.LUMINANCE_ALPHA;if(g===$C)return C.DEPTH_COMPONENT;if(g===QB)return C.DEPTH_STENCIL;if(g===le)return C.RED;if(g===xi)return C.RED_INTEGER;if(g===ke)return C.RG;if(g===bi)return C.RG_INTEGER;if(g===Oi)return C.RGBA_INTEGER;if(g===GQ||g===lQ||g===kQ||g===yQ)if(E===QI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===GQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===lQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===kQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===yQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===GQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===lQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===kQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===yQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===PE||g===VE||g===jE||g===XE)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===PE)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===VE)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===jE)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===XE)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===zE||g===$E||g===Ai)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===zE||g===$E)return E===QI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===Ai)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===Ii||g===gi||g===Ci||g===Bi||g===Qi||g===Ei||g===ii||g===oi||g===ti||g===ei||g===Di||g===ai||g===si||g===hi)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===Ii)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===gi)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===Ci)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===Bi)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===Qi)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===Ei)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===ii)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===oi)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ti)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===ei)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===Di)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===ai)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===si)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===hi)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===UQ||g===ni||g===Si)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===UQ)return E===QI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===ni)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Si)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===ye||g===wi||g===ri||g===ci)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===UQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===wi)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===ri)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===ci)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===BB?C.UNSIGNED_INT_24_8:C[g]!==void 0?C[g]:null}return{convert:I}}const Br={type:"move"};class RE{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hQ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hQ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new m,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new m),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hQ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new m,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new m),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let B=null,Q=null,E=null;const i=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){E=!0;for(const c of A.hand.values()){const S=I.getJointPose(c,g),h=this._getHandJoint(t,c);S!==null&&(h.matrix.fromArray(S.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=S.radius),h.visible=S!==null}const D=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=D.position.distanceTo(a.position),n=.02,w=.005;t.inputState.pinching&&s>n+w?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-w&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(B=I.getPose(A.targetRaySpace,g),B===null&&Q!==null&&(B=Q),B!==null&&(i.matrix.fromArray(B.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,B.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(B.linearVelocity)):i.hasLinearVelocity=!1,B.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(B.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Br)))}return i!==null&&(i.visible=B!==null),o!==null&&(o.visible=Q!==null),t!==null&&(t.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new hQ;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Qr=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Er=`
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

}`;class ir{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,I,g){if(this.texture===null){const B=new VI,Q=A.properties.get(B);Q.__webglTexture=I.texture,(I.depthNear!=g.depthNear||I.depthFar!=g.depthFar)&&(this.depthNear=I.depthNear,this.depthFar=I.depthFar),this.texture=B}}getMesh(A){if(this.texture!==null&&this.mesh===null){const I=A.cameras[0].viewport,g=new EC({vertexShader:Qr,fragmentShader:Er,uniforms:{depthColor:{value:this.texture},depthWidth:{value:I.z},depthHeight:{value:I.w}}});this.mesh=new WI(new bQ(20,20),g)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class or extends JC{constructor(A,I){super();const g=this;let B=null,Q=1,E=null,i="local-floor",o=1,t=null,D=null,a=null,s=null,n=null,w=null;const c=new ir,S=I.getContextAttributes();let h=null,M=null;const U=[],k=[],Y=new qA;let J=null;const F=new Eg;F.viewport=new GI;const f=new Eg;f.viewport=new GI;const y=[F,f],l=new Ms;let p=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let BA=U[j];return BA===void 0&&(BA=new RE,U[j]=BA),BA.getTargetRaySpace()},this.getControllerGrip=function(j){let BA=U[j];return BA===void 0&&(BA=new RE,U[j]=BA),BA.getGripSpace()},this.getHand=function(j){let BA=U[j];return BA===void 0&&(BA=new RE,U[j]=BA),BA.getHandSpace()};function O(j){const BA=k.indexOf(j.inputSource);if(BA===-1)return;const GA=U[BA];GA!==void 0&&(GA.update(j.inputSource,j.frame,t||E),GA.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){B.removeEventListener("select",O),B.removeEventListener("selectstart",O),B.removeEventListener("selectend",O),B.removeEventListener("squeeze",O),B.removeEventListener("squeezestart",O),B.removeEventListener("squeezeend",O),B.removeEventListener("end",V),B.removeEventListener("inputsourceschange",AA);for(let j=0;j<U.length;j++){const BA=k[j];BA!==null&&(k[j]=null,U[j].disconnect(BA))}p=null,v=null,c.reset(),A.setRenderTarget(h),n=null,s=null,a=null,B=null,M=null,iI.stop(),g.isPresenting=!1,A.setPixelRatio(J),A.setSize(Y.width,Y.height,!1),g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){Q=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){i=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return t||E},this.setReferenceSpace=function(j){t=j},this.getBaseLayer=function(){return s!==null?s:n},this.getBinding=function(){return a},this.getFrame=function(){return w},this.getSession=function(){return B},this.setSession=async function(j){if(B=j,B!==null){if(h=A.getRenderTarget(),B.addEventListener("select",O),B.addEventListener("selectstart",O),B.addEventListener("selectend",O),B.addEventListener("squeeze",O),B.addEventListener("squeezestart",O),B.addEventListener("squeezeend",O),B.addEventListener("end",V),B.addEventListener("inputsourceschange",AA),S.xrCompatible!==!0&&await I.makeXRCompatible(),J=A.getPixelRatio(),A.getSize(Y),B.renderState.layers===void 0){const BA={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:Q};n=new XRWebGLLayer(B,I,BA),B.updateRenderState({baseLayer:n}),A.setPixelRatio(1),A.setSize(n.framebufferWidth,n.framebufferHeight,!1),M=new MC(n.framebufferWidth,n.framebufferHeight,{format:rg,type:Og,colorSpace:A.outputColorSpace,stencilBuffer:S.stencil})}else{let BA=null,GA=null,tA=null;S.depth&&(tA=S.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,BA=S.stencil?QB:$C,GA=S.stencil?BB:UC);const RA={colorFormat:I.RGBA8,depthFormat:tA,scaleFactor:Q};a=new XRWebGLBinding(B,I),s=a.createProjectionLayer(RA),B.updateRenderState({layers:[s]}),A.setPixelRatio(1),A.setSize(s.textureWidth,s.textureHeight,!1),M=new MC(s.textureWidth,s.textureHeight,{format:rg,type:Og,depthTexture:new fe(s.textureWidth,s.textureHeight,GA,void 0,void 0,void 0,void 0,void 0,void 0,BA),stencilBuffer:S.stencil,colorSpace:A.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),t=null,E=await B.requestReferenceSpace(i),iI.setContext(B),iI.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(B!==null)return B.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function AA(j){for(let BA=0;BA<j.removed.length;BA++){const GA=j.removed[BA],tA=k.indexOf(GA);tA>=0&&(k[tA]=null,U[tA].disconnect(GA))}for(let BA=0;BA<j.added.length;BA++){const GA=j.added[BA];let tA=k.indexOf(GA);if(tA===-1){for(let LA=0;LA<U.length;LA++)if(LA>=k.length){k.push(GA),tA=LA;break}else if(k[LA]===null){k[LA]=GA,tA=LA;break}if(tA===-1)break}const RA=U[tA];RA&&RA.connect(GA)}}const W=new m,CA=new m;function Z(j,BA,GA){W.setFromMatrixPosition(BA.matrixWorld),CA.setFromMatrixPosition(GA.matrixWorld);const tA=W.distanceTo(CA),RA=BA.projectionMatrix.elements,LA=GA.projectionMatrix.elements,OA=RA[14]/(RA[10]-1),nI=RA[14]/(RA[10]+1),jA=(RA[9]+1)/RA[5],lI=(RA[9]-1)/RA[5],R=(RA[8]-1)/RA[0],Ag=(LA[8]+1)/LA[0],vA=OA*R,WA=OA*Ag,yA=tA/(-R+Ag),eI=yA*-R;if(BA.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(eI),j.translateZ(yA),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),RA[10]===-1)j.projectionMatrix.copy(BA.projectionMatrix),j.projectionMatrixInverse.copy(BA.projectionMatrixInverse);else{const UA=OA+yA,N=nI+yA,r=vA-eI,T=WA+(tA-eI),X=jA*nI/N*UA,$=lI*nI/N*UA;j.projectionMatrix.makePerspective(r,T,X,$,UA,N),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oA(j,BA){BA===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(BA.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(B===null)return;let BA=j.near,GA=j.far;c.texture!==null&&(c.depthNear>0&&(BA=c.depthNear),c.depthFar>0&&(GA=c.depthFar)),l.near=f.near=F.near=BA,l.far=f.far=F.far=GA,(p!==l.near||v!==l.far)&&(B.updateRenderState({depthNear:l.near,depthFar:l.far}),p=l.near,v=l.far),F.layers.mask=j.layers.mask|2,f.layers.mask=j.layers.mask|4,l.layers.mask=F.layers.mask|f.layers.mask;const tA=j.parent,RA=l.cameras;oA(l,tA);for(let LA=0;LA<RA.length;LA++)oA(RA[LA],tA);RA.length===2?Z(l,F,f):l.projectionMatrix.copy(F.projectionMatrix),hA(j,l,tA)};function hA(j,BA,GA){GA===null?j.matrix.copy(BA.matrixWorld):(j.matrix.copy(GA.matrixWorld),j.matrix.invert(),j.matrix.multiply(BA.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(BA.projectionMatrix),j.projectionMatrixInverse.copy(BA.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qB*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return l},this.getFoveation=function(){if(!(s===null&&n===null))return o},this.setFoveation=function(j){o=j,s!==null&&(s.fixedFoveation=j),n!==null&&n.fixedFoveation!==void 0&&(n.fixedFoveation=j)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(l)};let kA=null;function bA(j,BA){if(D=BA.getViewerPose(t||E),w=BA,D!==null){const GA=D.views;n!==null&&(A.setRenderTargetFramebuffer(M,n.framebuffer),A.setRenderTarget(M));let tA=!1;GA.length!==l.cameras.length&&(l.cameras.length=0,tA=!0);for(let LA=0;LA<GA.length;LA++){const OA=GA[LA];let nI=null;if(n!==null)nI=n.getViewport(OA);else{const lI=a.getViewSubImage(s,OA);nI=lI.viewport,LA===0&&(A.setRenderTargetTextures(M,lI.colorTexture,s.ignoreDepthValues?void 0:lI.depthStencilTexture),A.setRenderTarget(M))}let jA=y[LA];jA===void 0&&(jA=new Eg,jA.layers.enable(LA),jA.viewport=new GI,y[LA]=jA),jA.matrix.fromArray(OA.transform.matrix),jA.matrix.decompose(jA.position,jA.quaternion,jA.scale),jA.projectionMatrix.fromArray(OA.projectionMatrix),jA.projectionMatrixInverse.copy(jA.projectionMatrix).invert(),jA.viewport.set(nI.x,nI.y,nI.width,nI.height),LA===0&&(l.matrix.copy(jA.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale)),tA===!0&&l.cameras.push(jA)}const RA=B.enabledFeatures;if(RA&&RA.includes("depth-sensing")){const LA=a.getDepthInformation(GA[0]);LA&&LA.isValid&&LA.texture&&c.init(A,LA,B.renderState)}}for(let GA=0;GA<U.length;GA++){const tA=k[GA],RA=U[GA];tA!==null&&RA!==void 0&&RA.update(tA,BA,t||E)}kA&&kA(j,BA),BA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:BA}),w=null}const iI=new me;iI.setAnimationLoop(bA),this.setAnimationLoop=function(j){kA=j},this.dispose=function(){}}}const SC=new Gg,tr=new hI;function er(C,A){function I(S,h){S.matrixAutoUpdate===!0&&S.updateMatrix(),h.value.copy(S.matrix)}function g(S,h){h.color.getRGB(S.fogColor.value,de(C)),h.isFog?(S.fogNear.value=h.near,S.fogFar.value=h.far):h.isFogExp2&&(S.fogDensity.value=h.density)}function B(S,h,M,U,k){h.isMeshBasicMaterial||h.isMeshLambertMaterial?Q(S,h):h.isMeshToonMaterial?(Q(S,h),a(S,h)):h.isMeshPhongMaterial?(Q(S,h),D(S,h)):h.isMeshStandardMaterial?(Q(S,h),s(S,h),h.isMeshPhysicalMaterial&&n(S,h,k)):h.isMeshMatcapMaterial?(Q(S,h),w(S,h)):h.isMeshDepthMaterial?Q(S,h):h.isMeshDistanceMaterial?(Q(S,h),c(S,h)):h.isMeshNormalMaterial?Q(S,h):h.isLineBasicMaterial?(E(S,h),h.isLineDashedMaterial&&i(S,h)):h.isPointsMaterial?o(S,h,M,U):h.isSpriteMaterial?t(S,h):h.isShadowMaterial?(S.color.value.copy(h.color),S.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function Q(S,h){S.opacity.value=h.opacity,h.color&&S.diffuse.value.copy(h.color),h.emissive&&S.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(S.map.value=h.map,I(h.map,S.mapTransform)),h.alphaMap&&(S.alphaMap.value=h.alphaMap,I(h.alphaMap,S.alphaMapTransform)),h.bumpMap&&(S.bumpMap.value=h.bumpMap,I(h.bumpMap,S.bumpMapTransform),S.bumpScale.value=h.bumpScale,h.side===PI&&(S.bumpScale.value*=-1)),h.normalMap&&(S.normalMap.value=h.normalMap,I(h.normalMap,S.normalMapTransform),S.normalScale.value.copy(h.normalScale),h.side===PI&&S.normalScale.value.negate()),h.displacementMap&&(S.displacementMap.value=h.displacementMap,I(h.displacementMap,S.displacementMapTransform),S.displacementScale.value=h.displacementScale,S.displacementBias.value=h.displacementBias),h.emissiveMap&&(S.emissiveMap.value=h.emissiveMap,I(h.emissiveMap,S.emissiveMapTransform)),h.specularMap&&(S.specularMap.value=h.specularMap,I(h.specularMap,S.specularMapTransform)),h.alphaTest>0&&(S.alphaTest.value=h.alphaTest);const M=A.get(h),U=M.envMap,k=M.envMapRotation;U&&(S.envMap.value=U,SC.copy(k),SC.x*=-1,SC.y*=-1,SC.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(SC.y*=-1,SC.z*=-1),S.envMapRotation.value.setFromMatrix4(tr.makeRotationFromEuler(SC)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=h.reflectivity,S.ior.value=h.ior,S.refractionRatio.value=h.refractionRatio),h.lightMap&&(S.lightMap.value=h.lightMap,S.lightMapIntensity.value=h.lightMapIntensity,I(h.lightMap,S.lightMapTransform)),h.aoMap&&(S.aoMap.value=h.aoMap,S.aoMapIntensity.value=h.aoMapIntensity,I(h.aoMap,S.aoMapTransform))}function E(S,h){S.diffuse.value.copy(h.color),S.opacity.value=h.opacity,h.map&&(S.map.value=h.map,I(h.map,S.mapTransform))}function i(S,h){S.dashSize.value=h.dashSize,S.totalSize.value=h.dashSize+h.gapSize,S.scale.value=h.scale}function o(S,h,M,U){S.diffuse.value.copy(h.color),S.opacity.value=h.opacity,S.size.value=h.size*M,S.scale.value=U*.5,h.map&&(S.map.value=h.map,I(h.map,S.uvTransform)),h.alphaMap&&(S.alphaMap.value=h.alphaMap,I(h.alphaMap,S.alphaMapTransform)),h.alphaTest>0&&(S.alphaTest.value=h.alphaTest)}function t(S,h){S.diffuse.value.copy(h.color),S.opacity.value=h.opacity,S.rotation.value=h.rotation,h.map&&(S.map.value=h.map,I(h.map,S.mapTransform)),h.alphaMap&&(S.alphaMap.value=h.alphaMap,I(h.alphaMap,S.alphaMapTransform)),h.alphaTest>0&&(S.alphaTest.value=h.alphaTest)}function D(S,h){S.specular.value.copy(h.specular),S.shininess.value=Math.max(h.shininess,1e-4)}function a(S,h){h.gradientMap&&(S.gradientMap.value=h.gradientMap)}function s(S,h){S.metalness.value=h.metalness,h.metalnessMap&&(S.metalnessMap.value=h.metalnessMap,I(h.metalnessMap,S.metalnessMapTransform)),S.roughness.value=h.roughness,h.roughnessMap&&(S.roughnessMap.value=h.roughnessMap,I(h.roughnessMap,S.roughnessMapTransform)),h.envMap&&(S.envMapIntensity.value=h.envMapIntensity)}function n(S,h,M){S.ior.value=h.ior,h.sheen>0&&(S.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),S.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(S.sheenColorMap.value=h.sheenColorMap,I(h.sheenColorMap,S.sheenColorMapTransform)),h.sheenRoughnessMap&&(S.sheenRoughnessMap.value=h.sheenRoughnessMap,I(h.sheenRoughnessMap,S.sheenRoughnessMapTransform))),h.clearcoat>0&&(S.clearcoat.value=h.clearcoat,S.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(S.clearcoatMap.value=h.clearcoatMap,I(h.clearcoatMap,S.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,I(h.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(S.clearcoatNormalMap.value=h.clearcoatNormalMap,I(h.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===PI&&S.clearcoatNormalScale.value.negate())),h.dispersion>0&&(S.dispersion.value=h.dispersion),h.iridescence>0&&(S.iridescence.value=h.iridescence,S.iridescenceIOR.value=h.iridescenceIOR,S.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(S.iridescenceMap.value=h.iridescenceMap,I(h.iridescenceMap,S.iridescenceMapTransform)),h.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=h.iridescenceThicknessMap,I(h.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),h.transmission>0&&(S.transmission.value=h.transmission,S.transmissionSamplerMap.value=M.texture,S.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(S.transmissionMap.value=h.transmissionMap,I(h.transmissionMap,S.transmissionMapTransform)),S.thickness.value=h.thickness,h.thicknessMap&&(S.thicknessMap.value=h.thicknessMap,I(h.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=h.attenuationDistance,S.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(S.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(S.anisotropyMap.value=h.anisotropyMap,I(h.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=h.specularIntensity,S.specularColor.value.copy(h.specularColor),h.specularColorMap&&(S.specularColorMap.value=h.specularColorMap,I(h.specularColorMap,S.specularColorMapTransform)),h.specularIntensityMap&&(S.specularIntensityMap.value=h.specularIntensityMap,I(h.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,h){h.matcap&&(S.matcap.value=h.matcap)}function c(S,h){const M=A.get(h).light;S.referencePosition.value.setFromMatrixPosition(M.matrixWorld),S.nearDistance.value=M.shadow.camera.near,S.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:B}}function Dr(C,A,I,g){let B={},Q={},E=[];const i=C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,U){const k=U.program;g.uniformBlockBinding(M,k)}function t(M,U){let k=B[M.id];k===void 0&&(w(M),k=D(M),B[M.id]=k,M.addEventListener("dispose",S));const Y=U.program;g.updateUBOMapping(M,Y);const J=A.render.frame;Q[M.id]!==J&&(s(M),Q[M.id]=J)}function D(M){const U=a();M.__bindingPointIndex=U;const k=C.createBuffer(),Y=M.__size,J=M.usage;return C.bindBuffer(C.UNIFORM_BUFFER,k),C.bufferData(C.UNIFORM_BUFFER,Y,J),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,U,k),k}function a(){for(let M=0;M<i;M++)if(E.indexOf(M)===-1)return E.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(M){const U=B[M.id],k=M.uniforms,Y=M.__cache;C.bindBuffer(C.UNIFORM_BUFFER,U);for(let J=0,F=k.length;J<F;J++){const f=Array.isArray(k[J])?k[J]:[k[J]];for(let y=0,l=f.length;y<l;y++){const p=f[y];if(n(p,J,y,Y)===!0){const v=p.__offset,O=Array.isArray(p.value)?p.value:[p.value];let V=0;for(let AA=0;AA<O.length;AA++){const W=O[AA],CA=c(W);typeof W=="number"||typeof W=="boolean"?(p.__data[0]=W,C.bufferSubData(C.UNIFORM_BUFFER,v+V,p.__data)):W.isMatrix3?(p.__data[0]=W.elements[0],p.__data[1]=W.elements[1],p.__data[2]=W.elements[2],p.__data[3]=0,p.__data[4]=W.elements[3],p.__data[5]=W.elements[4],p.__data[6]=W.elements[5],p.__data[7]=0,p.__data[8]=W.elements[6],p.__data[9]=W.elements[7],p.__data[10]=W.elements[8],p.__data[11]=0):(W.toArray(p.__data,V),V+=CA.storage/Float32Array.BYTES_PER_ELEMENT)}C.bufferSubData(C.UNIFORM_BUFFER,v,p.__data)}}}C.bindBuffer(C.UNIFORM_BUFFER,null)}function n(M,U,k,Y){const J=M.value,F=U+"_"+k;if(Y[F]===void 0)return typeof J=="number"||typeof J=="boolean"?Y[F]=J:Y[F]=J.clone(),!0;{const f=Y[F];if(typeof J=="number"||typeof J=="boolean"){if(f!==J)return Y[F]=J,!0}else if(f.equals(J)===!1)return f.copy(J),!0}return!1}function w(M){const U=M.uniforms;let k=0;const Y=16;for(let F=0,f=U.length;F<f;F++){const y=Array.isArray(U[F])?U[F]:[U[F]];for(let l=0,p=y.length;l<p;l++){const v=y[l],O=Array.isArray(v.value)?v.value:[v.value];for(let V=0,AA=O.length;V<AA;V++){const W=O[V],CA=c(W),Z=k%Y,oA=Z%CA.boundary,hA=Z+oA;k+=oA,hA!==0&&Y-hA<CA.storage&&(k+=Y-hA),v.__data=new Float32Array(CA.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=k,k+=CA.storage}}}const J=k%Y;return J>0&&(k+=Y-J),M.__size=k,M.__cache={},this}function c(M){const U={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(U.boundary=4,U.storage=4):M.isVector2?(U.boundary=8,U.storage=8):M.isVector3||M.isColor?(U.boundary=16,U.storage=12):M.isVector4?(U.boundary=16,U.storage=16):M.isMatrix3?(U.boundary=48,U.storage=48):M.isMatrix4?(U.boundary=64,U.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),U}function S(M){const U=M.target;U.removeEventListener("dispose",S);const k=E.indexOf(U.__bindingPointIndex);E.splice(k,1),C.deleteBuffer(B[U.id]),delete B[U.id],delete Q[U.id]}function h(){for(const M in B)C.deleteBuffer(B[M]);E=[],B={},Q={}}return{bind:o,update:t,dispose:h}}class ar{constructor(A={}){const{canvas:I=Ta(),context:g=null,depth:B=!0,stencil:Q=!1,alpha:E=!1,antialias:i=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:t=!1,powerPreference:D="default",failIfMajorPerformanceCaveat:a=!1,reverseDepthBuffer:s=!1}=A;this.isWebGLRenderer=!0;let n;if(g!==null){if(typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");n=g.getContextAttributes().alpha}else n=E;const w=new Uint32Array(4),c=new Int32Array(4);let S=null,h=null;const M=[],U=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qg,this.toneMapping=gC,this.toneMappingExposure=1;const k=this;let Y=!1,J=0,F=0,f=null,y=-1,l=null;const p=new GI,v=new GI;let O=null;const V=new ZA(0);let AA=0,W=I.width,CA=I.height,Z=1,oA=null,hA=null;const kA=new GI(0,0,W,CA),bA=new GI(0,0,W,CA);let iI=!1;const j=new Wi;let BA=!1,GA=!1;const tA=new hI,RA=new hI,LA=new m,OA=new GI,nI={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jA=!1;function lI(){return f===null?Z:1}let R=g;function Ag(G,H){return I.getContext(G,H)}try{const G={alpha:!0,depth:B,stencil:Q,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:t,powerPreference:D,failIfMajorPerformanceCaveat:a};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${fi}`),I.addEventListener("webglcontextlost",z,!1),I.addEventListener("webglcontextrestored",aA,!1),I.addEventListener("webglcontextcreationerror",DA,!1),R===null){const H="webgl2";if(R=Ag(H,G),R===null)throw Ag(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(G){throw console.error("THREE.WebGLRenderer: "+G.message),G}let vA,WA,yA,eI,UA,N,r,T,X,$,P,lA,eA,nA,XA,gA,SA,FA,pA,wA,PA,uA,tI,L;function EA(){vA=new lS(R),vA.init(),uA=new Cr(R,vA),WA=new nS(R,vA,A,uA),yA=new Ir(R,vA),WA.reverseDepthBuffer&&s&&yA.buffers.depth.setReversed(!0),eI=new US(R),UA=new bw,N=new gr(R,vA,yA,UA,WA,uA,eI),r=new wS(k),T=new GS(k),X=new Rs(R),tI=new sS(R,X),$=new kS(R,X,eI,tI),P=new NS(R,$,X,eI),pA=new MS(R,WA,N),gA=new SS(UA),lA=new xw(k,r,T,vA,WA,tI,gA),eA=new er(k,UA),nA=new _w,XA=new jw(vA),FA=new aS(k,r,T,yA,P,n,o),SA=new $w(k,P,WA),L=new Dr(R,eI,WA,yA),wA=new hS(R,vA,eI),PA=new yS(R,vA,eI),eI.programs=lA.programs,k.capabilities=WA,k.extensions=vA,k.properties=UA,k.renderLists=nA,k.shadowMap=SA,k.state=yA,k.info=eI}EA();const _=new or(k,R);this.xr=_,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const G=vA.get("WEBGL_lose_context");G&&G.loseContext()},this.forceContextRestore=function(){const G=vA.get("WEBGL_lose_context");G&&G.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(G){G!==void 0&&(Z=G,this.setSize(W,CA,!1))},this.getSize=function(G){return G.set(W,CA)},this.setSize=function(G,H,x=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=G,CA=H,I.width=Math.floor(G*Z),I.height=Math.floor(H*Z),x===!0&&(I.style.width=G+"px",I.style.height=H+"px"),this.setViewport(0,0,G,H)},this.getDrawingBufferSize=function(G){return G.set(W*Z,CA*Z).floor()},this.setDrawingBufferSize=function(G,H,x){W=G,CA=H,Z=x,I.width=Math.floor(G*x),I.height=Math.floor(H*x),this.setViewport(0,0,G,H)},this.getCurrentViewport=function(G){return G.copy(p)},this.getViewport=function(G){return G.copy(kA)},this.setViewport=function(G,H,x,b){G.isVector4?kA.set(G.x,G.y,G.z,G.w):kA.set(G,H,x,b),yA.viewport(p.copy(kA).multiplyScalar(Z).round())},this.getScissor=function(G){return G.copy(bA)},this.setScissor=function(G,H,x,b){G.isVector4?bA.set(G.x,G.y,G.z,G.w):bA.set(G,H,x,b),yA.scissor(v.copy(bA).multiplyScalar(Z).round())},this.getScissorTest=function(){return iI},this.setScissorTest=function(G){yA.setScissorTest(iI=G)},this.setOpaqueSort=function(G){oA=G},this.setTransparentSort=function(G){hA=G},this.getClearColor=function(G){return G.copy(FA.getClearColor())},this.setClearColor=function(){FA.setClearColor.apply(FA,arguments)},this.getClearAlpha=function(){return FA.getClearAlpha()},this.setClearAlpha=function(){FA.setClearAlpha.apply(FA,arguments)},this.clear=function(G=!0,H=!0,x=!0){let b=0;if(G){let u=!1;if(f!==null){const IA=f.texture.format;u=IA===Oi||IA===bi||IA===xi}if(u){const IA=f.texture.type,iA=IA===Og||IA===UC||IA===dB||IA===BB||IA===mi||IA===Ti,sA=FA.getClearColor(),cA=FA.getClearAlpha(),dA=sA.r,YA=sA.g,MA=sA.b;iA?(w[0]=dA,w[1]=YA,w[2]=MA,w[3]=cA,R.clearBufferuiv(R.COLOR,0,w)):(c[0]=dA,c[1]=YA,c[2]=MA,c[3]=cA,R.clearBufferiv(R.COLOR,0,c))}else b|=R.COLOR_BUFFER_BIT}H&&(b|=R.DEPTH_BUFFER_BIT),x&&(b|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",z,!1),I.removeEventListener("webglcontextrestored",aA,!1),I.removeEventListener("webglcontextcreationerror",DA,!1),FA.dispose(),nA.dispose(),XA.dispose(),UA.dispose(),r.dispose(),T.dispose(),P.dispose(),tI.dispose(),L.dispose(),lA.dispose(),_.dispose(),_.removeEventListener("sessionstart",lo),_.removeEventListener("sessionend",ko),tC.stop()};function z(G){G.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function aA(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const G=eI.autoReset,H=SA.enabled,x=SA.autoUpdate,b=SA.needsUpdate,u=SA.type;EA(),eI.autoReset=G,SA.enabled=H,SA.autoUpdate=x,SA.needsUpdate=b,SA.type=u}function DA(G){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",G.statusMessage)}function fA(G){const H=G.target;H.removeEventListener("dispose",fA),rI(H)}function rI(G){uI(G),UA.remove(G)}function uI(G){const H=UA.get(G).programs;H!==void 0&&(H.forEach(function(x){lA.releaseProgram(x)}),G.isShaderMaterial&&lA.releaseShaderCache(G))}this.renderBufferDirect=function(G,H,x,b,u,IA){H===null&&(H=nI);const iA=u.isMesh&&u.matrixWorld.determinant()<0,sA=pD(G,H,x,b,u);yA.setMaterial(b,iA);let cA=x.index,dA=1;if(b.wireframe===!0){if(cA=$.getWireframeAttribute(x),cA===void 0)return;dA=2}const YA=x.drawRange,MA=x.attributes.position;let zA=YA.start*dA,II=(YA.start+YA.count)*dA;IA!==null&&(zA=Math.max(zA,IA.start*dA),II=Math.min(II,(IA.start+IA.count)*dA)),cA!==null?(zA=Math.max(zA,0),II=Math.min(II,cA.count)):MA!=null&&(zA=Math.max(zA,0),II=Math.min(II,MA.count));const yI=II-zA;if(yI<0||yI===1/0)return;tI.setup(u,b,sA,x,cA);let cI,$A=wA;if(cA!==null&&(cI=X.get(cA),$A=PA,$A.setIndex(cI)),u.isMesh)b.wireframe===!0?(yA.setLineWidth(b.wireframeLinewidth*lI()),$A.setMode(R.LINES)):$A.setMode(R.TRIANGLES);else if(u.isLine){let NA=b.linewidth;NA===void 0&&(NA=1),yA.setLineWidth(NA*lI()),u.isLineSegments?$A.setMode(R.LINES):u.isLineLoop?$A.setMode(R.LINE_LOOP):$A.setMode(R.LINE_STRIP)}else u.isPoints?$A.setMode(R.POINTS):u.isSprite&&$A.setMode(R.TRIANGLES);if(u.isBatchedMesh)if(u._multiDrawInstances!==null)$A.renderMultiDrawInstances(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount,u._multiDrawInstances);else if(vA.get("WEBGL_multi_draw"))$A.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else{const NA=u._multiDrawStarts,LI=u._multiDrawCounts,gI=u._multiDrawCount,og=cA?X.get(cA).bytesPerElement:1,RC=UA.get(b).currentProgram.getUniforms();for(let jI=0;jI<gI;jI++)RC.setValue(R,"_gl_DrawID",jI),$A.render(NA[jI]/og,LI[jI])}else if(u.isInstancedMesh)$A.renderInstances(zA,yI,u.count);else if(x.isInstancedBufferGeometry){const NA=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,LI=Math.min(x.instanceCount,NA);$A.renderInstances(zA,yI,LI)}else $A.render(zA,yI)};function BI(G,H,x){G.transparent===!0&&G.side===ug&&G.forceSinglePass===!1?(G.side=PI,G.needsUpdate=!0,WB(G,H,x),G.side=CC,G.needsUpdate=!0,WB(G,H,x),G.side=ug):WB(G,H,x)}this.compile=function(G,H,x=null){x===null&&(x=G),h=XA.get(x),h.init(H),U.push(h),x.traverseVisible(function(u){u.isLight&&u.layers.test(H.layers)&&(h.pushLight(u),u.castShadow&&h.pushShadow(u))}),G!==x&&G.traverseVisible(function(u){u.isLight&&u.layers.test(H.layers)&&(h.pushLight(u),u.castShadow&&h.pushShadow(u))}),h.setupLights();const b=new Set;return G.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite))return;const IA=u.material;if(IA)if(Array.isArray(IA))for(let iA=0;iA<IA.length;iA++){const sA=IA[iA];BI(sA,x,u),b.add(sA)}else BI(IA,x,u),b.add(IA)}),U.pop(),h=null,b},this.compileAsync=function(G,H,x=null){const b=this.compile(G,H,x);return new Promise(u=>{function IA(){if(b.forEach(function(iA){UA.get(iA).currentProgram.isReady()&&b.delete(iA)}),b.size===0){u(G);return}setTimeout(IA,10)}vA.get("KHR_parallel_shader_compile")!==null?IA():setTimeout(IA,10)})};let ig=null;function Rg(G){ig&&ig(G)}function lo(){tC.stop()}function ko(){tC.start()}const tC=new me;tC.setAnimationLoop(Rg),typeof self<"u"&&tC.setContext(self),this.setAnimationLoop=function(G){ig=G,_.setAnimationLoop(G),G===null?tC.stop():tC.start()},_.addEventListener("sessionstart",lo),_.addEventListener("sessionend",ko),this.render=function(G,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(H),H=_.getCamera()),G.isScene===!0&&G.onBeforeRender(k,G,H,f),h=XA.get(G,U.length),h.init(H),U.push(h),RA.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(RA),GA=this.localClippingEnabled,BA=gA.init(this.clippingPlanes,GA),S=nA.get(G,M.length),S.init(),M.push(S),_.enabled===!0&&_.isPresenting===!0){const IA=k.xr.getDepthSensingMesh();IA!==null&&$Q(IA,H,-1/0,k.sortObjects)}$Q(G,H,0,k.sortObjects),S.finish(),k.sortObjects===!0&&S.sort(oA,hA),jA=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,jA&&FA.addToRenderList(S,G),this.info.render.frame++,BA===!0&&gA.beginShadows();const x=h.state.shadowsArray;SA.render(x,G,H),BA===!0&&gA.endShadows(),this.info.autoReset===!0&&this.info.reset();const b=S.opaque,u=S.transmissive;if(h.setupLights(),H.isArrayCamera){const IA=H.cameras;if(u.length>0)for(let iA=0,sA=IA.length;iA<sA;iA++){const cA=IA[iA];Uo(b,u,G,cA)}jA&&FA.render(G);for(let iA=0,sA=IA.length;iA<sA;iA++){const cA=IA[iA];yo(S,G,cA,cA.viewport)}}else u.length>0&&Uo(b,u,G,H),jA&&FA.render(G),yo(S,G,H);f!==null&&(N.updateMultisampleRenderTarget(f),N.updateRenderTargetMipmap(f)),G.isScene===!0&&G.onAfterRender(k,G,H),tI.resetDefaultState(),y=-1,l=null,U.pop(),U.length>0?(h=U[U.length-1],BA===!0&&gA.setGlobalState(k.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function $Q(G,H,x,b){if(G.visible===!1)return;if(G.layers.test(H.layers)){if(G.isGroup)x=G.renderOrder;else if(G.isLOD)G.autoUpdate===!0&&G.update(H);else if(G.isLight)h.pushLight(G),G.castShadow&&h.pushShadow(G);else if(G.isSprite){if(!G.frustumCulled||j.intersectsSprite(G)){b&&OA.setFromMatrixPosition(G.matrixWorld).applyMatrix4(RA);const iA=P.update(G),sA=G.material;sA.visible&&S.push(G,iA,sA,x,OA.z,null)}}else if((G.isMesh||G.isLine||G.isPoints)&&(!G.frustumCulled||j.intersectsObject(G))){const iA=P.update(G),sA=G.material;if(b&&(G.boundingSphere!==void 0?(G.boundingSphere===null&&G.computeBoundingSphere(),OA.copy(G.boundingSphere.center)):(iA.boundingSphere===null&&iA.computeBoundingSphere(),OA.copy(iA.boundingSphere.center)),OA.applyMatrix4(G.matrixWorld).applyMatrix4(RA)),Array.isArray(sA)){const cA=iA.groups;for(let dA=0,YA=cA.length;dA<YA;dA++){const MA=cA[dA],zA=sA[MA.materialIndex];zA&&zA.visible&&S.push(G,iA,zA,x,OA.z,MA)}}else sA.visible&&S.push(G,iA,sA,x,OA.z,null)}}const IA=G.children;for(let iA=0,sA=IA.length;iA<sA;iA++)$Q(IA[iA],H,x,b)}function yo(G,H,x,b){const u=G.opaque,IA=G.transmissive,iA=G.transparent;h.setupLightsView(x),BA===!0&&gA.setGlobalState(k.clippingPlanes,x),b&&yA.viewport(p.copy(b)),u.length>0&&vB(u,H,x),IA.length>0&&vB(IA,H,x),iA.length>0&&vB(iA,H,x),yA.buffers.depth.setTest(!0),yA.buffers.depth.setMask(!0),yA.buffers.color.setMask(!0),yA.setPolygonOffset(!1)}function Uo(G,H,x,b){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[b.id]===void 0&&(h.state.transmissionRenderTarget[b.id]=new MC(1,1,{generateMipmaps:!0,type:vA.has("EXT_color_buffer_half_float")||vA.has("EXT_color_buffer_float")?xB:Og,minFilter:kC,samples:4,stencilBuffer:Q,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:AI.workingColorSpace}));const IA=h.state.transmissionRenderTarget[b.id],iA=b.viewport||p;IA.setSize(iA.z,iA.w);const sA=k.getRenderTarget();k.setRenderTarget(IA),k.getClearColor(V),AA=k.getClearAlpha(),AA<1&&k.setClearColor(16777215,.5),k.clear(),jA&&FA.render(x);const cA=k.toneMapping;k.toneMapping=gC;const dA=b.viewport;if(b.viewport!==void 0&&(b.viewport=void 0),h.setupLightsView(b),BA===!0&&gA.setGlobalState(k.clippingPlanes,b),vB(G,x,b),N.updateMultisampleRenderTarget(IA),N.updateRenderTargetMipmap(IA),vA.has("WEBGL_multisampled_render_to_texture")===!1){let YA=!1;for(let MA=0,zA=H.length;MA<zA;MA++){const II=H[MA],yI=II.object,cI=II.geometry,$A=II.material,NA=II.group;if($A.side===ug&&yI.layers.test(b.layers)){const LI=$A.side;$A.side=PI,$A.needsUpdate=!0,Mo(yI,x,b,cI,$A,NA),$A.side=LI,$A.needsUpdate=!0,YA=!0}}YA===!0&&(N.updateMultisampleRenderTarget(IA),N.updateRenderTargetMipmap(IA))}k.setRenderTarget(sA),k.setClearColor(V,AA),dA!==void 0&&(b.viewport=dA),k.toneMapping=cA}function vB(G,H,x){const b=H.isScene===!0?H.overrideMaterial:null;for(let u=0,IA=G.length;u<IA;u++){const iA=G[u],sA=iA.object,cA=iA.geometry,dA=b===null?iA.material:b,YA=iA.group;sA.layers.test(x.layers)&&Mo(sA,H,x,cA,dA,YA)}}function Mo(G,H,x,b,u,IA){G.onBeforeRender(k,H,x,b,u,IA),G.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,G.matrixWorld),G.normalMatrix.getNormalMatrix(G.modelViewMatrix),u.onBeforeRender(k,H,x,b,G,IA),u.transparent===!0&&u.side===ug&&u.forceSinglePass===!1?(u.side=PI,u.needsUpdate=!0,k.renderBufferDirect(x,H,b,u,G,IA),u.side=CC,u.needsUpdate=!0,k.renderBufferDirect(x,H,b,u,G,IA),u.side=ug):k.renderBufferDirect(x,H,b,u,G,IA),G.onAfterRender(k,H,x,b,u,IA)}function WB(G,H,x){H.isScene!==!0&&(H=nI);const b=UA.get(G),u=h.state.lights,IA=h.state.shadowsArray,iA=u.state.version,sA=lA.getParameters(G,u.state,IA,H,x),cA=lA.getProgramCacheKey(sA);let dA=b.programs;b.environment=G.isMeshStandardMaterial?H.environment:null,b.fog=H.fog,b.envMap=(G.isMeshStandardMaterial?T:r).get(G.envMap||b.environment),b.envMapRotation=b.environment!==null&&G.envMap===null?H.environmentRotation:G.envMapRotation,dA===void 0&&(G.addEventListener("dispose",fA),dA=new Map,b.programs=dA);let YA=dA.get(cA);if(YA!==void 0){if(b.currentProgram===YA&&b.lightsStateVersion===iA)return Ko(G,sA),YA}else sA.uniforms=lA.getUniforms(G),G.onBeforeCompile(sA,k),YA=lA.acquireProgram(sA,cA),dA.set(cA,YA),b.uniforms=sA.uniforms;const MA=b.uniforms;return(!G.isShaderMaterial&&!G.isRawShaderMaterial||G.clipping===!0)&&(MA.clippingPlanes=gA.uniform),Ko(G,sA),b.needsLights=qD(G),b.lightsStateVersion=iA,b.needsLights&&(MA.ambientLightColor.value=u.state.ambient,MA.lightProbe.value=u.state.probe,MA.directionalLights.value=u.state.directional,MA.directionalLightShadows.value=u.state.directionalShadow,MA.spotLights.value=u.state.spot,MA.spotLightShadows.value=u.state.spotShadow,MA.rectAreaLights.value=u.state.rectArea,MA.ltc_1.value=u.state.rectAreaLTC1,MA.ltc_2.value=u.state.rectAreaLTC2,MA.pointLights.value=u.state.point,MA.pointLightShadows.value=u.state.pointShadow,MA.hemisphereLights.value=u.state.hemi,MA.directionalShadowMap.value=u.state.directionalShadowMap,MA.directionalShadowMatrix.value=u.state.directionalShadowMatrix,MA.spotShadowMap.value=u.state.spotShadowMap,MA.spotLightMatrix.value=u.state.spotLightMatrix,MA.spotLightMap.value=u.state.spotLightMap,MA.pointShadowMap.value=u.state.pointShadowMap,MA.pointShadowMatrix.value=u.state.pointShadowMatrix),b.currentProgram=YA,b.uniformsList=null,YA}function No(G){if(G.uniformsList===null){const H=G.currentProgram.getUniforms();G.uniformsList=MQ.seqWithValue(H.seq,G.uniforms)}return G.uniformsList}function Ko(G,H){const x=UA.get(G);x.outputColorSpace=H.outputColorSpace,x.batching=H.batching,x.batchingColor=H.batchingColor,x.instancing=H.instancing,x.instancingColor=H.instancingColor,x.instancingMorph=H.instancingMorph,x.skinning=H.skinning,x.morphTargets=H.morphTargets,x.morphNormals=H.morphNormals,x.morphColors=H.morphColors,x.morphTargetsCount=H.morphTargetsCount,x.numClippingPlanes=H.numClippingPlanes,x.numIntersection=H.numClipIntersection,x.vertexAlphas=H.vertexAlphas,x.vertexTangents=H.vertexTangents,x.toneMapping=H.toneMapping}function pD(G,H,x,b,u){H.isScene!==!0&&(H=nI),N.resetTextureUnits();const IA=H.fog,iA=b.isMeshStandardMaterial?H.environment:null,sA=f===null?k.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:EB,cA=(b.isMeshStandardMaterial?T:r).get(b.envMap||iA),dA=b.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,YA=!!x.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),MA=!!x.morphAttributes.position,zA=!!x.morphAttributes.normal,II=!!x.morphAttributes.color;let yI=gC;b.toneMapped&&(f===null||f.isXRRenderTarget===!0)&&(yI=k.toneMapping);const cI=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,$A=cI!==void 0?cI.length:0,NA=UA.get(b),LI=h.state.lights;if(BA===!0&&(GA===!0||G!==l)){const bI=G===l&&b.id===y;gA.setState(b,G,bI)}let gI=!1;b.version===NA.__version?(NA.needsLights&&NA.lightsStateVersion!==LI.state.version||NA.outputColorSpace!==sA||u.isBatchedMesh&&NA.batching===!1||!u.isBatchedMesh&&NA.batching===!0||u.isBatchedMesh&&NA.batchingColor===!0&&u.colorTexture===null||u.isBatchedMesh&&NA.batchingColor===!1&&u.colorTexture!==null||u.isInstancedMesh&&NA.instancing===!1||!u.isInstancedMesh&&NA.instancing===!0||u.isSkinnedMesh&&NA.skinning===!1||!u.isSkinnedMesh&&NA.skinning===!0||u.isInstancedMesh&&NA.instancingColor===!0&&u.instanceColor===null||u.isInstancedMesh&&NA.instancingColor===!1&&u.instanceColor!==null||u.isInstancedMesh&&NA.instancingMorph===!0&&u.morphTexture===null||u.isInstancedMesh&&NA.instancingMorph===!1&&u.morphTexture!==null||NA.envMap!==cA||b.fog===!0&&NA.fog!==IA||NA.numClippingPlanes!==void 0&&(NA.numClippingPlanes!==gA.numPlanes||NA.numIntersection!==gA.numIntersection)||NA.vertexAlphas!==dA||NA.vertexTangents!==YA||NA.morphTargets!==MA||NA.morphNormals!==zA||NA.morphColors!==II||NA.toneMapping!==yI||NA.morphTargetsCount!==$A)&&(gI=!0):(gI=!0,NA.__version=b.version);let og=NA.currentProgram;gI===!0&&(og=WB(b,H,u));let RC=!1,jI=!1,hB=!1;const aI=og.getUniforms(),Ig=NA.uniforms;if(yA.useProgram(og.program)&&(RC=!0,jI=!0,hB=!0),b.id!==y&&(y=b.id,jI=!0),RC||l!==G){yA.buffers.depth.getReversed()?(tA.copy(G.projectionMatrix),ba(tA),Oa(tA),aI.setValue(R,"projectionMatrix",tA)):aI.setValue(R,"projectionMatrix",G.projectionMatrix),aI.setValue(R,"viewMatrix",G.matrixWorldInverse);const ZI=aI.map.cameraPosition;ZI!==void 0&&ZI.setValue(R,LA.setFromMatrixPosition(G.matrixWorld)),WA.logarithmicDepthBuffer&&aI.setValue(R,"logDepthBufFC",2/(Math.log(G.far+1)/Math.LN2)),(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)&&aI.setValue(R,"isOrthographic",G.isOrthographicCamera===!0),l!==G&&(l=G,jI=!0,hB=!0)}if(u.isSkinnedMesh){aI.setOptional(R,u,"bindMatrix"),aI.setOptional(R,u,"bindMatrixInverse");const bI=u.skeleton;bI&&(bI.boneTexture===null&&bI.computeBoneTexture(),aI.setValue(R,"boneTexture",bI.boneTexture,N))}u.isBatchedMesh&&(aI.setOptional(R,u,"batchingTexture"),aI.setValue(R,"batchingTexture",u._matricesTexture,N),aI.setOptional(R,u,"batchingIdTexture"),aI.setValue(R,"batchingIdTexture",u._indirectTexture,N),aI.setOptional(R,u,"batchingColorTexture"),u._colorsTexture!==null&&aI.setValue(R,"batchingColorTexture",u._colorsTexture,N));const gg=x.morphAttributes;if((gg.position!==void 0||gg.normal!==void 0||gg.color!==void 0)&&pA.update(u,x,og),(jI||NA.receiveShadow!==u.receiveShadow)&&(NA.receiveShadow=u.receiveShadow,aI.setValue(R,"receiveShadow",u.receiveShadow)),b.isMeshGouraudMaterial&&b.envMap!==null&&(Ig.envMap.value=cA,Ig.flipEnvMap.value=cA.isCubeTexture&&cA.isRenderTargetTexture===!1?-1:1),b.isMeshStandardMaterial&&b.envMap===null&&H.environment!==null&&(Ig.envMapIntensity.value=H.environmentIntensity),jI&&(aI.setValue(R,"toneMappingExposure",k.toneMappingExposure),NA.needsLights&&dD(Ig,hB),IA&&b.fog===!0&&eA.refreshFogUniforms(Ig,IA),eA.refreshMaterialUniforms(Ig,b,Z,CA,h.state.transmissionRenderTarget[G.id]),MQ.upload(R,No(NA),Ig,N)),b.isShaderMaterial&&b.uniformsNeedUpdate===!0&&(MQ.upload(R,No(NA),Ig,N),b.uniformsNeedUpdate=!1),b.isSpriteMaterial&&aI.setValue(R,"center",u.center),aI.setValue(R,"modelViewMatrix",u.modelViewMatrix),aI.setValue(R,"normalMatrix",u.normalMatrix),aI.setValue(R,"modelMatrix",u.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){const bI=b.uniformsGroups;for(let ZI=0,AE=bI.length;ZI<AE;ZI++){const eC=bI[ZI];L.update(eC,og),L.bind(eC,og)}}return og}function dD(G,H){G.ambientLightColor.needsUpdate=H,G.lightProbe.needsUpdate=H,G.directionalLights.needsUpdate=H,G.directionalLightShadows.needsUpdate=H,G.pointLights.needsUpdate=H,G.pointLightShadows.needsUpdate=H,G.spotLights.needsUpdate=H,G.spotLightShadows.needsUpdate=H,G.rectAreaLights.needsUpdate=H,G.hemisphereLights.needsUpdate=H}function qD(G){return G.isMeshLambertMaterial||G.isMeshToonMaterial||G.isMeshPhongMaterial||G.isMeshStandardMaterial||G.isShadowMaterial||G.isShaderMaterial&&G.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(G,H,x){UA.get(G.texture).__webglTexture=H,UA.get(G.depthTexture).__webglTexture=x;const b=UA.get(G);b.__hasExternalTextures=!0,b.__autoAllocateDepthBuffer=x===void 0,b.__autoAllocateDepthBuffer||vA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),b.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(G,H){const x=UA.get(G);x.__webglFramebuffer=H,x.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(G,H=0,x=0){f=G,J=H,F=x;let b=!0,u=null,IA=!1,iA=!1;if(G){const cA=UA.get(G);if(cA.__useDefaultFramebuffer!==void 0)yA.bindFramebuffer(R.FRAMEBUFFER,null),b=!1;else if(cA.__webglFramebuffer===void 0)N.setupRenderTarget(G);else if(cA.__hasExternalTextures)N.rebindTextures(G,UA.get(G.texture).__webglTexture,UA.get(G.depthTexture).__webglTexture);else if(G.depthBuffer){const MA=G.depthTexture;if(cA.__boundDepthTexture!==MA){if(MA!==null&&UA.has(MA)&&(G.width!==MA.image.width||G.height!==MA.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(G)}}const dA=G.texture;(dA.isData3DTexture||dA.isDataArrayTexture||dA.isCompressedArrayTexture)&&(iA=!0);const YA=UA.get(G).__webglFramebuffer;G.isWebGLCubeRenderTarget?(Array.isArray(YA[H])?u=YA[H][x]:u=YA[H],IA=!0):G.samples>0&&N.useMultisampledRTT(G)===!1?u=UA.get(G).__webglMultisampledFramebuffer:Array.isArray(YA)?u=YA[x]:u=YA,p.copy(G.viewport),v.copy(G.scissor),O=G.scissorTest}else p.copy(kA).multiplyScalar(Z).floor(),v.copy(bA).multiplyScalar(Z).floor(),O=iI;if(yA.bindFramebuffer(R.FRAMEBUFFER,u)&&b&&yA.drawBuffers(G,u),yA.viewport(p),yA.scissor(v),yA.setScissorTest(O),IA){const cA=UA.get(G.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,cA.__webglTexture,x)}else if(iA){const cA=UA.get(G.texture),dA=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,cA.__webglTexture,x||0,dA)}y=-1},this.readRenderTargetPixels=function(G,H,x,b,u,IA,iA){if(!(G&&G.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let sA=UA.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&iA!==void 0&&(sA=sA[iA]),sA){yA.bindFramebuffer(R.FRAMEBUFFER,sA);try{const cA=G.texture,dA=cA.format,YA=cA.type;if(!WA.textureFormatReadable(dA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!WA.textureTypeReadable(YA)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=G.width-b&&x>=0&&x<=G.height-u&&R.readPixels(H,x,b,u,uA.convert(dA),uA.convert(YA),IA)}finally{const cA=f!==null?UA.get(f).__webglFramebuffer:null;yA.bindFramebuffer(R.FRAMEBUFFER,cA)}}},this.readRenderTargetPixelsAsync=async function(G,H,x,b,u,IA,iA){if(!(G&&G.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let sA=UA.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&iA!==void 0&&(sA=sA[iA]),sA){const cA=G.texture,dA=cA.format,YA=cA.type;if(!WA.textureFormatReadable(dA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!WA.textureTypeReadable(YA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=G.width-b&&x>=0&&x<=G.height-u){yA.bindFramebuffer(R.FRAMEBUFFER,sA);const MA=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,MA),R.bufferData(R.PIXEL_PACK_BUFFER,IA.byteLength,R.STREAM_READ),R.readPixels(H,x,b,u,uA.convert(dA),uA.convert(YA),0);const zA=f!==null?UA.get(f).__webglFramebuffer:null;yA.bindFramebuffer(R.FRAMEBUFFER,zA);const II=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xa(R,II,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,MA),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,IA),R.deleteBuffer(MA),R.deleteSync(II),IA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(G,H=null,x=0){G.isTexture!==!0&&(WC("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,G=arguments[1]);const b=Math.pow(2,-x),u=Math.floor(G.image.width*b),IA=Math.floor(G.image.height*b),iA=H!==null?H.x:0,sA=H!==null?H.y:0;N.setTexture2D(G,0),R.copyTexSubImage2D(R.TEXTURE_2D,x,0,0,iA,sA,u,IA),yA.unbindTexture()};const YD=R.createFramebuffer(),LD=R.createFramebuffer();this.copyTextureToTexture=function(G,H,x=null,b=null,u=0,IA=null){G.isTexture!==!0&&(WC("WebGLRenderer: copyTextureToTexture function signature has changed."),b=arguments[0]||null,G=arguments[1],H=arguments[2],IA=arguments[3]||0,x=null),IA===null&&(u!==0?(WC("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),IA=u,u=0):IA=0);let iA,sA,cA,dA,YA,MA,zA,II,yI;const cI=G.isCompressedTexture?G.mipmaps[IA]:G.image;if(x!==null)iA=x.max.x-x.min.x,sA=x.max.y-x.min.y,cA=x.isBox3?x.max.z-x.min.z:1,dA=x.min.x,YA=x.min.y,MA=x.isBox3?x.min.z:0;else{const gg=Math.pow(2,-u);iA=Math.floor(cI.width*gg),sA=Math.floor(cI.height*gg),G.isDataArrayTexture?cA=cI.depth:G.isData3DTexture?cA=Math.floor(cI.depth*gg):cA=1,dA=0,YA=0,MA=0}b!==null?(zA=b.x,II=b.y,yI=b.z):(zA=0,II=0,yI=0);const $A=uA.convert(H.format),NA=uA.convert(H.type);let LI;H.isData3DTexture?(N.setTexture3D(H,0),LI=R.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),LI=R.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),LI=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const gI=R.getParameter(R.UNPACK_ROW_LENGTH),og=R.getParameter(R.UNPACK_IMAGE_HEIGHT),RC=R.getParameter(R.UNPACK_SKIP_PIXELS),jI=R.getParameter(R.UNPACK_SKIP_ROWS),hB=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,cI.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,cI.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dA),R.pixelStorei(R.UNPACK_SKIP_ROWS,YA),R.pixelStorei(R.UNPACK_SKIP_IMAGES,MA);const aI=G.isDataArrayTexture||G.isData3DTexture,Ig=H.isDataArrayTexture||H.isData3DTexture;if(G.isDepthTexture){const gg=UA.get(G),bI=UA.get(H),ZI=UA.get(gg.__renderTarget),AE=UA.get(bI.__renderTarget);yA.bindFramebuffer(R.READ_FRAMEBUFFER,ZI.__webglFramebuffer),yA.bindFramebuffer(R.DRAW_FRAMEBUFFER,AE.__webglFramebuffer);for(let eC=0;eC<cA;eC++)aI&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,UA.get(G).__webglTexture,u,MA+eC),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,UA.get(H).__webglTexture,IA,yI+eC)),R.blitFramebuffer(dA,YA,iA,sA,zA,II,iA,sA,R.DEPTH_BUFFER_BIT,R.NEAREST);yA.bindFramebuffer(R.READ_FRAMEBUFFER,null),yA.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(u!==0||G.isRenderTargetTexture||UA.has(G)){const gg=UA.get(G),bI=UA.get(H);yA.bindFramebuffer(R.READ_FRAMEBUFFER,YD),yA.bindFramebuffer(R.DRAW_FRAMEBUFFER,LD);for(let ZI=0;ZI<cA;ZI++)aI?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gg.__webglTexture,u,MA+ZI):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gg.__webglTexture,u),Ig?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bI.__webglTexture,IA,yI+ZI):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bI.__webglTexture,IA),u!==0?R.blitFramebuffer(dA,YA,iA,sA,zA,II,iA,sA,R.COLOR_BUFFER_BIT,R.NEAREST):Ig?R.copyTexSubImage3D(LI,IA,zA,II,yI+ZI,dA,YA,iA,sA):R.copyTexSubImage2D(LI,IA,zA,II,dA,YA,iA,sA);yA.bindFramebuffer(R.READ_FRAMEBUFFER,null),yA.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ig?G.isDataTexture||G.isData3DTexture?R.texSubImage3D(LI,IA,zA,II,yI,iA,sA,cA,$A,NA,cI.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(LI,IA,zA,II,yI,iA,sA,cA,$A,cI.data):R.texSubImage3D(LI,IA,zA,II,yI,iA,sA,cA,$A,NA,cI):G.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,IA,zA,II,iA,sA,$A,NA,cI.data):G.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,IA,zA,II,cI.width,cI.height,$A,cI.data):R.texSubImage2D(R.TEXTURE_2D,IA,zA,II,iA,sA,$A,NA,cI);R.pixelStorei(R.UNPACK_ROW_LENGTH,gI),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,og),R.pixelStorei(R.UNPACK_SKIP_PIXELS,RC),R.pixelStorei(R.UNPACK_SKIP_ROWS,jI),R.pixelStorei(R.UNPACK_SKIP_IMAGES,hB),IA===0&&H.generateMipmaps&&R.generateMipmap(LI),yA.unbindTexture()},this.copyTextureToTexture3D=function(G,H,x=null,b=null,u=0){return G.isTexture!==!0&&(WC("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,b=arguments[1]||null,G=arguments[2],H=arguments[3],u=arguments[4]||0),WC('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(G,H,x,b,u)},this.initRenderTarget=function(G){UA.get(G).__webglFramebuffer===void 0&&N.setupRenderTarget(G)},this.initTexture=function(G){G.isCubeTexture?N.setTextureCube(G,0):G.isData3DTexture?N.setTexture3D(G,0):G.isDataArrayTexture||G.isCompressedArrayTexture?N.setTexture2DArray(G,0):N.setTexture2D(G,0),yA.unbindTexture()},this.resetState=function(){J=0,F=0,f=null,yA.reset(),tI.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xg}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const I=this.getContext();I.drawingBufferColorspace=AI._getDrawingBufferColorSpace(A),I.unpackColorSpace=AI._getUnpackColorSpace()}}const Lt={type:"change"},zi={type:"start"},_e={type:"end"},rQ=new xQ,ft=new $g,sr=Math.cos(70*ma.DEG2RAD),JI=new m,vI=2*Math.PI,EI={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pE=1e-6;class hr extends Js{constructor(A,I=null){super(A,I),this.state=EI.NONE,this.enabled=!0,this.target=new m,this.cursor=new m,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:XC.ROTATE,MIDDLE:XC.DOLLY,RIGHT:XC.PAN},this.touches={ONE:VC.ROTATE,TWO:VC.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new m,this._lastQuaternion=new BC,this._lastTargetPosition=new m,this._quat=new BC().setFromUnitVectors(A.up,new m(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tt,this._sphericalDelta=new tt,this._scale=1,this._panOffset=new m,this._rotateStart=new qA,this._rotateEnd=new qA,this._rotateDelta=new qA,this._panStart=new qA,this._panEnd=new qA,this._panDelta=new qA,this._dollyStart=new qA,this._dollyEnd=new qA,this._dollyDelta=new qA,this._dollyDirection=new m,this._mouse=new qA,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sr.bind(this),this._onPointerDown=nr.bind(this),this._onPointerUp=wr.bind(this),this._onContextMenu=Ur.bind(this),this._onMouseWheel=Gr.bind(this),this._onKeyDown=lr.bind(this),this._onTouchStart=kr.bind(this),this._onTouchMove=yr.bind(this),this._onMouseDown=rr.bind(this),this._onMouseMove=cr.bind(this),this._interceptControlDown=Mr.bind(this),this._interceptControlUp=Nr.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(A){A.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=A}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lt),this.update(),this.state=EI.NONE}update(A=null){const I=this.object.position;JI.copy(I).sub(this.target),JI.applyQuaternion(this._quat),this._spherical.setFromVector3(JI),this.autoRotate&&this.state===EI.NONE&&this._rotateLeft(this._getAutoRotationAngle(A)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let g=this.minAzimuthAngle,B=this.maxAzimuthAngle;isFinite(g)&&isFinite(B)&&(g<-Math.PI?g+=vI:g>Math.PI&&(g-=vI),B<-Math.PI?B+=vI:B>Math.PI&&(B-=vI),g<=B?this._spherical.theta=Math.max(g,Math.min(B,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(g+B)/2?Math.max(g,this._spherical.theta):Math.min(B,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Q=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const E=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Q=E!=this._spherical.radius}if(JI.setFromSpherical(this._spherical),JI.applyQuaternion(this._quatInverse),I.copy(this.target).add(JI),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let E=null;if(this.object.isPerspectiveCamera){const i=JI.length();E=this._clampDistance(i*this._scale);const o=i-E;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),Q=!!o}else if(this.object.isOrthographicCamera){const i=new m(this._mouse.x,this._mouse.y,0);i.unproject(this.object);const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Q=o!==this.object.zoom;const t=new m(this._mouse.x,this._mouse.y,0);t.unproject(this.object),this.object.position.sub(t).add(i),this.object.updateMatrixWorld(),E=JI.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;E!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(E).add(this.object.position):(rQ.origin.copy(this.object.position),rQ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rQ.direction))<sr?this.object.lookAt(this.target):(ft.setFromNormalAndCoplanarPoint(this.object.up,this.target),rQ.intersectPlane(ft,this.target))))}else if(this.object.isOrthographicCamera){const E=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),E!==this.object.zoom&&(this.object.updateProjectionMatrix(),Q=!0)}return this._scale=1,this._performCursorZoom=!1,Q||this._lastPosition.distanceToSquared(this.object.position)>pE||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pE||this._lastTargetPosition.distanceToSquared(this.target)>pE?(this.dispatchEvent(Lt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(A){return A!==null?vI/60*this.autoRotateSpeed*A:vI/60/60*this.autoRotateSpeed}_getZoomScale(A){const I=Math.abs(A*.01);return Math.pow(.95,this.zoomSpeed*I)}_rotateLeft(A){this._sphericalDelta.theta-=A}_rotateUp(A){this._sphericalDelta.phi-=A}_panLeft(A,I){JI.setFromMatrixColumn(I,0),JI.multiplyScalar(-A),this._panOffset.add(JI)}_panUp(A,I){this.screenSpacePanning===!0?JI.setFromMatrixColumn(I,1):(JI.setFromMatrixColumn(I,0),JI.crossVectors(this.object.up,JI)),JI.multiplyScalar(A),this._panOffset.add(JI)}_pan(A,I){const g=this.domElement;if(this.object.isPerspectiveCamera){const B=this.object.position;JI.copy(B).sub(this.target);let Q=JI.length();Q*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*A*Q/g.clientHeight,this.object.matrix),this._panUp(2*I*Q/g.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(A*(this.object.right-this.object.left)/this.object.zoom/g.clientWidth,this.object.matrix),this._panUp(I*(this.object.top-this.object.bottom)/this.object.zoom/g.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(A){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(A,I){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const g=this.domElement.getBoundingClientRect(),B=A-g.left,Q=I-g.top,E=g.width,i=g.height;this._mouse.x=B/E*2-1,this._mouse.y=-(Q/i)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(A){return Math.max(this.minDistance,Math.min(this.maxDistance,A))}_handleMouseDownRotate(A){this._rotateStart.set(A.clientX,A.clientY)}_handleMouseDownDolly(A){this._updateZoomParameters(A.clientX,A.clientX),this._dollyStart.set(A.clientX,A.clientY)}_handleMouseDownPan(A){this._panStart.set(A.clientX,A.clientY)}_handleMouseMoveRotate(A){this._rotateEnd.set(A.clientX,A.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const I=this.domElement;this._rotateLeft(vI*this._rotateDelta.x/I.clientHeight),this._rotateUp(vI*this._rotateDelta.y/I.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(A){this._dollyEnd.set(A.clientX,A.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(A){this._panEnd.set(A.clientX,A.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(A){this._updateZoomParameters(A.clientX,A.clientY),A.deltaY<0?this._dollyIn(this._getZoomScale(A.deltaY)):A.deltaY>0&&this._dollyOut(this._getZoomScale(A.deltaY)),this.update()}_handleKeyDown(A){let I=!1;switch(A.code){case this.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(vI*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),I=!0;break;case this.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateUp(-vI*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),I=!0;break;case this.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(vI*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),I=!0;break;case this.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?this.enableRotate&&this._rotateLeft(-vI*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),I=!0;break}I&&(A.preventDefault(),this.update())}_handleTouchStartRotate(A){if(this._pointers.length===1)this._rotateStart.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._rotateStart.set(g,B)}}_handleTouchStartPan(A){if(this._pointers.length===1)this._panStart.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._panStart.set(g,B)}}_handleTouchStartDolly(A){const I=this._getSecondPointerPosition(A),g=A.pageX-I.x,B=A.pageY-I.y,Q=Math.sqrt(g*g+B*B);this._dollyStart.set(0,Q)}_handleTouchStartDollyPan(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enablePan&&this._handleTouchStartPan(A)}_handleTouchStartDollyRotate(A){this.enableZoom&&this._handleTouchStartDolly(A),this.enableRotate&&this._handleTouchStartRotate(A)}_handleTouchMoveRotate(A){if(this._pointers.length==1)this._rotateEnd.set(A.pageX,A.pageY);else{const g=this._getSecondPointerPosition(A),B=.5*(A.pageX+g.x),Q=.5*(A.pageY+g.y);this._rotateEnd.set(B,Q)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const I=this.domElement;this._rotateLeft(vI*this._rotateDelta.x/I.clientHeight),this._rotateUp(vI*this._rotateDelta.y/I.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(A){if(this._pointers.length===1)this._panEnd.set(A.pageX,A.pageY);else{const I=this._getSecondPointerPosition(A),g=.5*(A.pageX+I.x),B=.5*(A.pageY+I.y);this._panEnd.set(g,B)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(A){const I=this._getSecondPointerPosition(A),g=A.pageX-I.x,B=A.pageY-I.y,Q=Math.sqrt(g*g+B*B);this._dollyEnd.set(0,Q),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const E=(A.pageX+I.x)*.5,i=(A.pageY+I.y)*.5;this._updateZoomParameters(E,i)}_handleTouchMoveDollyPan(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enablePan&&this._handleTouchMovePan(A)}_handleTouchMoveDollyRotate(A){this.enableZoom&&this._handleTouchMoveDolly(A),this.enableRotate&&this._handleTouchMoveRotate(A)}_addPointer(A){this._pointers.push(A.pointerId)}_removePointer(A){delete this._pointerPositions[A.pointerId];for(let I=0;I<this._pointers.length;I++)if(this._pointers[I]==A.pointerId){this._pointers.splice(I,1);return}}_isTrackingPointer(A){for(let I=0;I<this._pointers.length;I++)if(this._pointers[I]==A.pointerId)return!0;return!1}_trackPointer(A){let I=this._pointerPositions[A.pointerId];I===void 0&&(I=new qA,this._pointerPositions[A.pointerId]=I),I.set(A.pageX,A.pageY)}_getSecondPointerPosition(A){const I=A.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[I]}_customWheelEvent(A){const I=A.deltaMode,g={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(I){case 1:g.deltaY*=16;break;case 2:g.deltaY*=100;break}return A.ctrlKey&&!this._controlActive&&(g.deltaY*=10),g}}function nr(C){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(C.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(C)&&(this._addPointer(C),C.pointerType==="touch"?this._onTouchStart(C):this._onMouseDown(C)))}function Sr(C){this.enabled!==!1&&(C.pointerType==="touch"?this._onTouchMove(C):this._onMouseMove(C))}function wr(C){switch(this._removePointer(C),this._pointers.length){case 0:this.domElement.releasePointerCapture(C.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_e),this.state=EI.NONE;break;case 1:const A=this._pointers[0],I=this._pointerPositions[A];this._onTouchStart({pointerId:A,pageX:I.x,pageY:I.y});break}}function rr(C){let A;switch(C.button){case 0:A=this.mouseButtons.LEFT;break;case 1:A=this.mouseButtons.MIDDLE;break;case 2:A=this.mouseButtons.RIGHT;break;default:A=-1}switch(A){case XC.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(C),this.state=EI.DOLLY;break;case XC.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(C),this.state=EI.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(C),this.state=EI.ROTATE}break;case XC.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(C),this.state=EI.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(C),this.state=EI.PAN}break;default:this.state=EI.NONE}this.state!==EI.NONE&&this.dispatchEvent(zi)}function cr(C){switch(this.state){case EI.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(C);break;case EI.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(C);break;case EI.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(C);break}}function Gr(C){this.enabled===!1||this.enableZoom===!1||this.state!==EI.NONE||(C.preventDefault(),this.dispatchEvent(zi),this._handleMouseWheel(this._customWheelEvent(C)),this.dispatchEvent(_e))}function lr(C){this.enabled!==!1&&this._handleKeyDown(C)}function kr(C){switch(this._trackPointer(C),this._pointers.length){case 1:switch(this.touches.ONE){case VC.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(C),this.state=EI.TOUCH_ROTATE;break;case VC.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(C),this.state=EI.TOUCH_PAN;break;default:this.state=EI.NONE}break;case 2:switch(this.touches.TWO){case VC.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(C),this.state=EI.TOUCH_DOLLY_PAN;break;case VC.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(C),this.state=EI.TOUCH_DOLLY_ROTATE;break;default:this.state=EI.NONE}break;default:this.state=EI.NONE}this.state!==EI.NONE&&this.dispatchEvent(zi)}function yr(C){switch(this._trackPointer(C),this.state){case EI.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(C),this.update();break;case EI.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(C),this.update();break;case EI.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(C),this.update();break;case EI.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(C),this.update();break;default:this.state=EI.NONE}}function Ur(C){this.enabled!==!1&&C.preventDefault()}function Mr(C){C.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nr(C){C.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Kr extends kg{constructor(A=1,I=1,g=1,B=1,Q=1,E=1){super(),B=Math.floor(B),Q=Math.floor(Q),E=Math.floor(E);const i=A/2,o=I/2,t=g/2,D=A/B,a=I/Q,s=g/E,n=[];let w=-i,c=-o,S=-t;for(let h=0;h<=B;h++)n.push(w,-o,-t,w,o,-t),n.push(w,o,-t,w,o,t),n.push(w,o,t,w,-o,t),n.push(w,-o,t,w,-o,-t),w+=D;for(let h=0;h<=Q;h++)n.push(-i,c,-t,i,c,-t),n.push(i,c,-t,i,c,t),n.push(i,c,t,-i,c,t),n.push(-i,c,t,-i,c,-t),c+=a;for(let h=0;h<=E;h++)n.push(-i,-o,S,-i,o,S),n.push(-i,o,S,i,o,S),n.push(i,o,S,i,-o,S),n.push(i,-o,S,-i,-o,S),S+=s;this.setAttribute("position",new xI(n,3))}}var RB=function(){var C=0,A=document.createElement("div");A.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",A.addEventListener("click",function(D){D.preventDefault(),g(++C%A.children.length)},!1);function I(D){return A.appendChild(D.dom),D}function g(D){for(var a=0;a<A.children.length;a++)A.children[a].style.display=a===D?"block":"none";C=D}var B=(performance||Date).now(),Q=B,E=0,i=I(new RB.Panel("FPS","#0ff","#002")),o=I(new RB.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=I(new RB.Panel("MB","#f08","#201"));return g(0),{REVISION:16,dom:A,addPanel:I,showPanel:g,begin:function(){B=(performance||Date).now()},end:function(){E++;var D=(performance||Date).now();if(o.update(D-B,200),D>=Q+1e3&&(i.update(E*1e3/(D-Q),100),Q=D,E=0,t)){var a=performance.memory;t.update(a.usedJSHeapSize/1048576,a.jsHeapSizeLimit/1048576)}return D},update:function(){B=this.end()},domElement:A,setMode:g}};RB.Panel=function(C,A,I){var g=1/0,B=0,Q=Math.round,E=Q(window.devicePixelRatio||1),i=80*E,o=48*E,t=3*E,D=2*E,a=3*E,s=15*E,n=74*E,w=30*E,c=document.createElement("canvas");c.width=i,c.height=o,c.style.cssText="width:80px;height:48px";var S=c.getContext("2d");return S.font="bold "+9*E+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=I,S.fillRect(0,0,i,o),S.fillStyle=A,S.fillText(C,t,D),S.fillRect(a,s,n,w),S.fillStyle=I,S.globalAlpha=.9,S.fillRect(a,s,n,w),{dom:c,update:function(h,M){g=Math.min(g,h),B=Math.max(B,h),S.fillStyle=I,S.globalAlpha=1,S.fillRect(0,0,i,s),S.fillStyle=A,S.fillText(Q(h)+" "+C+" ("+Q(g)+"-"+Q(B)+")",t,D),S.drawImage(c,a+E,s,n-E,w,a,s,n-E,w),S.fillRect(a+n-E,s,E,w),S.fillStyle=I,S.globalAlpha=.9,S.fillRect(a+n-E,s,E,Q((1-h/M)*w))}}};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */let aB=class NQ{constructor(A,I,g,B,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(B),this.$name=document.createElement("div"),this.$name.classList.add("name"),NQ.nextNameID=NQ.nextNameID||0,this.$name.id="lil-gui-name-"+ ++NQ.nextNameID,this.$widget=document.createElement(Q),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Jr=class extends aB{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function ki(C){let A,I;return(A=C.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=C.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=C.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const Fr={isPrimitive:!0,match:C=>typeof C=="string",fromHexString:ki,toHexString:ki},YB={isPrimitive:!0,match:C=>typeof C=="number",fromHexString:C=>parseInt(C.substring(1),16),toHexString:C=>"#"+C.toString(16).padStart(6,0)},Rr={isPrimitive:!1,match:Array.isArray,fromHexString(C,A,I=1){const g=YB.fromHexString(C);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([C,A,I],g=1)=>YB.toHexString(C*(g=255/g)<<16^A*g<<8^I*g<<0)},pr={isPrimitive:!1,match:C=>Object(C)===C,fromHexString(C,A,I=1){const g=YB.fromHexString(C);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:C,g:A,b:I},g=1)=>YB.toHexString(C*(g=255/g)<<16^A*g<<8^I*g<<0)},dr=[Fr,YB,Rr,pr];let qr=class extends aB{constructor(A,I,g,B){var Q;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(Q=this.initialValue,dr.find(E=>E.match(Q))),this._rgbScale=B,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const E=ki(this.$text.value);E&&this._setValueFromHexString(E)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},dE=class extends aB{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",B=>{B.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},Yr=class extends aB{constructor(A,I,g,B,Q,E){super(A,I,g,"number"),this._initInput(),this.min(B),this.max(Q);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=D=>{const a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+D),this.$input.value=this.getValue())};let I,g,B,Q,E,i=!1;const o=D=>{if(i){const a=D.clientX-I,s=D.clientY-g;Math.abs(s)>5?(D.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&t()}if(!i){const a=D.clientY-B;E-=a*this._step*this._arrowKeyMultiplier(D),Q+E>this._max?E=this._max-Q:Q+E<this._min&&(E=this._min-Q),this._snapClampSetValue(Q+E)}B=D.clientY},t=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",t)};this.$input.addEventListener("input",()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))}),this.$input.addEventListener("keydown",D=>{D.code==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),A(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),A(this._step*this._arrowKeyMultiplier(D)*-1))}),this.$input.addEventListener("wheel",D=>{this._inputFocused&&(D.preventDefault(),A(this._step*this._normalizeMouseWheel(D)))},{passive:!1}),this.$input.addEventListener("mousedown",D=>{I=D.clientX,g=B=D.clientY,i=!0,Q=this.getValue(),E=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",t)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=s=>{const n=this.$slider.getBoundingClientRect();let w=(c=s,S=n.left,h=n.right,M=this._min,U=this._max,(c-S)/(h-S)*(U-M)+M);var c,S,h,M,U;this._snapClampSetValue(w)},I=s=>{A(s.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let B,Q,E=!1;const i=s=>{s.preventDefault(),this._setDraggingStyle(!0),A(s.touches[0].clientX),E=!1},o=s=>{if(E){const n=s.touches[0].clientX-B,w=s.touches[0].clientY-Q;Math.abs(n)>Math.abs(w)?i(s):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",t))}else s.preventDefault(),A(s.touches[0].clientX)},t=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",t)},D=this._callOnFinishChange.bind(this);let a;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),A(s.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",s=>{s.touches.length>1||(this._hasScrollBar?(B=s.touches[0].clientX,Q=s.touches[0].clientY,E=!0):i(s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",t))},{passive:!1}),this.$slider.addEventListener("wheel",s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const n=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+n),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(D,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Lr=class extends aB{constructor(A,I,g,B){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(B)?B:Object.values(B),this._names=Array.isArray(B)?B:Object.keys(B),this._names.forEach(Q=>{const E=document.createElement("option");E.innerHTML=Q,this.$select.appendChild(E)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}},fr=class extends aB{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",B=>{B.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Ht=!1,Hr=class Ze{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:B,title:Q="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ht&&E&&(function(o){const t=document.createElement("style");t.innerHTML=o;const D=document.querySelector("head link[rel=stylesheet], head style");D?document.head.insertBefore(t,D):document.head.appendChild(t)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ht=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),B&&this.domElement.style.setProperty("--width",B+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,B,Q){if(Object(g)===g)return new Lr(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new Yr(this,A,I,g,B,Q);case"boolean":return new Jr(this,A,I);case"string":return new fr(this,A,I);case"function":return new dE(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`