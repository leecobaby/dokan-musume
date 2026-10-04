import{C as e,G as t,L as n,O as r,S as i,W as a,a as o,d as s,f as c,i as l,l as u,n as d,r as f,u as p,v as m,w as h,z as g}from"./CanvasPool-B4Lq94db.js";import"./lib-BfefGiwE.js";import{c as _,m as v,r as y,u as b}from"./Filter-13JcV7ZJ.js";import{t as x}from"./canvasUtils-abpS0dNQ.js";import{f as S}from"./RenderTargetSystem-T9jKldLQ.js";import{g as C,p as ee,t as te}from"./GCManagedHash-C3VmVxzI.js";import{n as w,t as T}from"./Mesh-C3JB_0GJ.js";var E=class{execute(e,t){let n=e.renderer,r=n.canvasContext.activeContext,i=t.particleChildren,a=t.texture;r.save(),n.canvasContext.setContextTransform(t.worldTransform,t.roundPixels),n.canvasContext.setBlendMode(t.groupBlendMode);let o=t.groupColorAlpha,s=n.filter?.alphaMultiplier??1,c=(o>>>24&255)/255*s;for(let e=0;e<i.length;e++){let t=i[e],n=t.texture||a;if(!n?.source?.resource)continue;let o=t.color,s=(o>>>24&255)/255*c;if(s<=0)continue;let l=o&16777215,u=((l&255)<<16)+(l&65280)+(l>>16&255),d=n.source.resource;u!==16777215&&(d=x.getTintedCanvas({texture:n},u));let f=n.frame,p=n.source.resolution,m=f.x*p,h=f.y*p,g=f.width*p,_=f.height*p;r.globalAlpha=s;let v=-t.anchorX*f.width,y=-t.anchorY*f.height;t.rotation!==0||t.scaleX!==1||t.scaleY!==1?(r.save(),r.translate(t.x,t.y),r.rotate(t.rotation),r.scale(t.scaleX,t.scaleY),r.drawImage(d,m,h,g,_,v,y,f.width,f.height),r.restore()):r.drawImage(d,m,h,g,_,t.x+v,t.y+y,f.width,f.height)}r.restore()}};function D(e,t=null){let n=e*6;if(t||=n>65535?new Uint32Array(n):new Uint16Array(n),t.length!==n)throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${n}`);for(let e=0,r=0;e<n;e+=6,r+=4)t[e+0]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3;return t}function ne(e){return{dynamicUpdate:O(e,!0),staticUpdate:O(e,!1)}}function O(e,t){let n=[];n.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let r=0;for(let i in e){let a=e[i];if(t!==a.dynamic)continue;n.push(`offset = index + ${r}`),n.push(a.code);let o=s(a.format);r+=o.stride/4}n.push(`
            index += stride * 4;
        }
    `),n.unshift(`
        var stride = ${r};
    `);let i=n.join(`
`);return Function(`ps`,`f32v`,`u32v`,i)}var re=class{constructor(e){this._size=0,this._generateParticleUpdateCache={};let t=this._size=e.size??1e3,n=e.properties,r=0,i=0;for(let e in n){let t=n[e],a=s(t.format);t.dynamic?i+=a.stride:r+=a.stride}this._dynamicStride=i/4,this._staticStride=r/4,this.staticAttributeBuffer=new C(t*4*r),this.dynamicAttributeBuffer=new C(t*4*i),this.indexBuffer=D(t);let a=new d,o=0,c=0;this._staticBuffer=new f({data:new Float32Array(1),label:`static-particle-buffer`,shrinkToFit:!1,usage:l.VERTEX|l.COPY_DST}),this._dynamicBuffer=new f({data:new Float32Array(1),label:`dynamic-particle-buffer`,shrinkToFit:!1,usage:l.VERTEX|l.COPY_DST});for(let e in n){let t=n[e],r=s(t.format);t.dynamic?(a.addAttribute(t.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:o*4,format:t.format}),o+=r.size):(a.addAttribute(t.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:c*4,format:t.format}),c+=r.size)}a.addIndex(this.indexBuffer);let u=this.getParticleUpdate(n);this._dynamicUpload=u.dynamicUpdate,this._staticUpload=u.staticUpdate,this.geometry=a}getParticleUpdate(e){let t=ie(e);return this._generateParticleUpdateCache[t]||(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e)),this._generateParticleUpdateCache[t]}generateParticleUpdate(e){return ne(e)}update(e,t){e.length>this._size&&(t=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new C(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new C(this._size*this._dynamicStride*4*4),this.indexBuffer=D(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));let n=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,n.float32View,n.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),t){let t=this.staticAttributeBuffer;this._staticUpload(e,t.float32View,t.uint32View),this._staticBuffer.setDataWithSize(t.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}};function ie(e){let t=[];for(let n in e){let r=e[n];t.push(n,r.code,r.dynamic?`d`:`s`)}return t.join(`_`)}var ae=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`,k=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,A=`
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`,j=class extends o{constructor(){let e=c.from({vertex:k,fragment:ae}),t=p.from({fragment:{source:A,entryPoint:`mainFragment`},vertex:{source:A,entryPoint:`mainVertex`}});super({glProgram:e,gpuProgram:t,resources:{uTexture:h.WHITE.source,uSampler:new r({}),uniforms:{uTranslationMatrix:{value:new g,type:`mat3x3<f32>`},uColor:{value:new i(16777215),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}}})}},M=class{constructor(e,t){this.state=y.for2d(),this.localUniforms=new u({uTranslationMatrix:{value:new g,type:`mat3x3<f32>`},uColor:{value:new Float32Array(4),type:`vec4<f32>`},uRound:{value:1,type:`f32`},uResolution:{value:[0,0],type:`vec2<f32>`}}),this.renderer=e,this.adaptor=t,this.defaultShader=new j,this.state=y.for2d(),this._managedContainers=new te({renderer:e,type:`renderable`,name:`particleContainer`})}validateRenderable(e){return!1}addRenderable(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}getBuffers(e){return e._gpuData[this.renderer.uid]||this._initBuffer(e)}_initBuffer(e){return e._gpuData[this.renderer.uid]=new re({size:e.particleChildren.length,properties:e._properties}),this._managedContainers.add(e),e._gpuData[this.renderer.uid]}updateRenderable(e){}execute(e){let t=e.particleChildren;if(t.length===0)return;let n=this.renderer,r=this.getBuffers(e);e.texture||=t[0].texture;let i=this.state;r.update(t,e._childrenDirty),e._childrenDirty=!1,i.blendMode=ee(e.groupBlendMode,e.texture._source);let a=this.localUniforms.uniforms,o=a.uTranslationMatrix;e.worldTransform.copyTo(o);let s=n.globalUniforms.globalUniformData;o.tx-=s.offset.x,o.ty-=s.offset.y,o.prepend(s.projectionMatrix),a.uResolution=s.resolution,a.uRound=n._roundPixels|e._roundPixels;let c=e.groupColorAlpha,l=s.worldColor,u=(c>>>24)*(l>>>24)/255|0,d=m(c&16777215,l&16777215);S((u<<24|d)>>>0,a.uColor,0),this.adaptor.execute(this,e)}destroy(){this._managedContainers.destroy(),this.renderer=null,this.defaultShader&&=(this.defaultShader.destroy(),null)}};M.extension={type:[a.CanvasPipes],name:`particle`};var N=class extends M{constructor(e){super(e,new E)}};N.extension={type:[a.CanvasPipes],name:`particle`};var oe=class{execute(e,t){let n=e.state,r=e.renderer,i=t.shader||e.defaultShader;i.resources.uTexture=t.texture._source,i.resources.uniforms=e.localUniforms;let a=r.gl,o=e.getBuffers(t);r.shader.bind(i),r.state.set(n),r.geometry.bind(o.geometry,i.glProgram);let s=o.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?a.UNSIGNED_SHORT:a.UNSIGNED_INT;a.drawElements(a.TRIANGLES,t.particleChildren.length*6,s,0)}},P=class extends M{constructor(e){super(e,new oe)}};P.extension={type:[a.WebGLPipes],name:`particle`};var se=class{execute(e,t){let n=e.renderer,r=t.shader||e.defaultShader;r.groups[0]=n.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),r.groups[1]=n.texture.getTextureBindGroup(t.texture);let i=e.state,a=e.getBuffers(t);n.encoder.draw({geometry:a.geometry,shader:t.shader||e.defaultShader,state:i,size:t.particleChildren.length*6})}},F=class extends M{constructor(e){super(e,new se)}};F.extension={type:[a.WebGPUPipes],name:`particle`};var I=class e{constructor(t){if(t instanceof h)this.texture=t,b(this,e.defaultOptions,{});else{let n={...e.defaultOptions,...t};b(this,n,{})}}get alpha(){return this._alpha}set alpha(e){this._alpha=Math.min(Math.max(e,0),1),this._updateColor()}get tint(){return v(this._tint)}set tint(e){this._tint=i.shared.setValue(e??16777215).toBgrNumber(),this._updateColor()}_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};I.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1};var L=I,R={vertex:{attributeName:`aVertex`,format:`float32x2`,code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:`aPosition`,format:`float32x2`,code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:`aRotation`,format:`float32`,code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:`aUV`,format:`float32x2`,code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:`aColor`,format:`unorm8x4`,code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}};t.add(P),t.add(F),t.add(N);var z=new e(0,0,0,0),B=class e extends _{constructor(t={}){t={...e.defaultOptions,...t,dynamicProperties:{...e.defaultOptions.dynamicProperties,...t?.dynamicProperties}};let{dynamicProperties:n,shader:r,roundPixels:i,texture:a,particles:o,...s}=t;super({label:`ParticleContainer`,...s}),this.renderPipeId=`particle`,this.batched=!1,this._childrenDirty=!1,this.texture=a||null,this.shader=r,this._properties={};for(let e in R){let t=R[e],r=n[e];this._properties[e]={...t,dynamic:r}}this.allowChildren=!0,this.roundPixels=i??!1,this.particleChildren=o??[]}addParticle(...e){for(let t=0;t<e.length;t++)this.particleChildren.push(e[t]);return this.onViewUpdate(),e[0]}removeParticle(...e){let t=!1;for(let n=0;n<e.length;n++){let r=this.particleChildren.indexOf(e[n]);r>-1&&(this.particleChildren.splice(r,1),t=!0)}return t&&this.onViewUpdate(),e[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return z}updateBounds(){}destroy(e=!1){if(super.destroy(e),typeof e==`boolean`?e:e?.texture){let t=typeof e==`boolean`?e:e?.textureSource,n=this.texture??this.particleChildren[0]?.texture;n&&n.destroy(t)}this.texture=null,this.shader?.destroy()}removeParticles(e,t){e??=0,t??=this.particleChildren.length;let n=this.particleChildren.splice(e,t-e);return this.onViewUpdate(),n}removeParticleAt(e){let t=this.particleChildren.splice(e,1);return this.onViewUpdate(),t[0]}addParticleAt(e,t){return this.particleChildren.splice(t,0,e),this.onViewUpdate(),e}addChild(...e){throw Error(`ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()`)}removeChild(...e){throw Error(`ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()`)}removeChildren(e,t){throw Error(`ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()`)}removeChildAt(e){throw Error(`ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()`)}getChildAt(e){throw Error(`ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()`)}setChildIndex(e,t){throw Error(`ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()`)}getChildIndex(e){throw Error(`ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()`)}addChildAt(e,t){throw Error(`ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()`)}swapChildren(e,t){throw Error(`ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()`)}reparentChild(...e){throw Error(`ParticleContainer.reparentChild() is not available with the particle container`)}reparentChildAt(e,t){throw Error(`ParticleContainer.reparentChildAt() is not available with the particle container`)}};B.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};var V=B,H=`in vec2 aPosition;
in vec2 aUV;
out vec2 vPos;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vPos = aPosition;
  vUV = aUV;
}`,U=`
float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
`,W=`precision highp float;
in vec2 vPos;
out vec4 finalColor;
uniform vec2 uC; uniform vec2 uIn; uniform float uN; uniform float uSeed; uniform float uAlpha;
uniform vec3 uInk; uniform float uBg; uniform vec3 uBgCol; uniform float uBlack;
${U}
void main() {
  vec2 d = vPos - uC;
  float ang = atan(d.y, d.x) / 6.2831853 + 0.5;
  float r = length(d / uIn);
  float x = ang * uN;
  float id = floor(x);
  float f = fract(x) - 0.5;
  float rnd = h11(id + uSeed);
  float w = 0.08 + 0.42 * pow(h11(id * 1.7 + uSeed + 3.1), 2.0);      // random width (fraction of a slot)
  float start = 1.0 + 0.9 * h11(id * 3.3 + uSeed);                    // where the line starts (× clear ellipse)
  float on = step(0.22, rnd);                                         // irregular density: some slots empty
  float taper = smoothstep(start, start + 0.6, r);                    // thin in, thick out
  float line = on * (1.0 - smoothstep(w * taper * 0.5, w * taper * 0.5 + 0.06, abs(f)));
  // a ring of solid black at the rim (black: 0..1)
  float rim = uBlack * smoothstep(2.6, 3.4, r);
  float a = max(line, rim);
  vec4 ink = vec4(uInk, 1.0) * a;
  vec4 bg = vec4(uBgCol, 1.0) * uBg * (1.0 - a);
  finalColor = (ink + bg) * uAlpha;
}`,G=`precision highp float;
in vec2 vPos;
out vec4 finalColor;
uniform float uAng; uniform float uT; uniform float uSeed; uniform float uAlpha; uniform vec4 uClr; uniform float uGap;
${U}
void main() {
  float a = radians(uAng);
  vec2 dir = vec2(cos(a), sin(a));
  vec2 nrm = vec2(-dir.y, dir.x);
  float u = dot(vPos, dir), v = dot(vPos, nrm);
  float lane = floor(v / uGap);
  float fv = fract(v / uGap) - 0.5;
  float w = 0.06 + 0.3 * pow(h11(lane + uSeed), 3.0);
  float speed = 900.0 + 900.0 * h11(lane * 2.1 + uSeed);
  float seg = 260.0 + 420.0 * h11(lane * 5.7 + uSeed);
  float s = fract((u + uT * speed + h11(lane * 9.1) * 1000.0) / seg);
  float dash = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.55, 0.85, s));
  float on = step(0.18, h11(lane * 1.3 + uSeed + 7.0));
  float line = on * dash * (1.0 - smoothstep(w * 0.5, w * 0.5 + 0.08, abs(fv)));
  vec2 q = (vPos - uClr.xy) / uClr.zw;
  float clr = smoothstep(1.0, 1.6, length(q));
  finalColor = vec4(0.07, 0.07, 0.09, 1.0) * line * clr * uAlpha;
}`,K=`precision highp float;
in vec2 vPos;
out vec4 finalColor;
uniform vec2 uC; uniform float uR; uniform float uW; uniform float uRings; uniform float uAlpha; uniform float uRainbow; uniform float uSquash;
uniform vec2 uDash;   // dash, gap along the ring (page units); 0 = solid
vec3 rainbow(float t) { return 0.55 + 0.45 * cos(6.2831853 * (t + vec3(0.0, 0.33, 0.67))); }
void main() {
  vec2 d = vPos - uC; d.y /= uSquash;
  float r = length(d);
  vec4 acc = vec4(0.0);
  for (int i = 0; i < 6; i++) {
    if (float(i) >= uRings) break;
    float ri = uR * (1.0 - float(i) * 0.16);
    if (ri <= 0.0) continue;
    float w = uW * (1.0 - float(i) * 0.12);
    float k = 1.0 - smoothstep(w * 0.5, w * 0.5 + 2.5, abs(r - ri));
    if (uDash.x > 0.0) {
      // arc length on this ring; echoes are offset half a dash so they interleave
      float s = (atan(d.y, d.x) + 3.14159265) * ri + float(i) * uDash.x * 0.5;
      float m = mod(s, uDash.x + uDash.y);
      k *= smoothstep(-1.0, 0.5, m) * (1.0 - smoothstep(uDash.x - 0.5, uDash.x + 1.0, m));
    }
    float fade = 1.0 - float(i) / max(1.0, uRings);
    vec3 col = uRainbow > 0.5 ? rainbow(float(i) * 0.19 + r * 0.0007) : vec3(0.06, 0.06, 0.08);
    acc = max(acc, vec4(col, 1.0) * k * fade);
  }
  finalColor = acc * uAlpha;
}`,q=class{mesh;u;constructor(e,t,n=[-40,-40,1080,1494]){let[r,i,a,s]=n,c=new w({positions:new Float32Array([r,i,r+a,i,r+a,i+s,r,i+s]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),l=o.from({gl:{vertex:H,fragment:e},resources:{fx:t}});this.mesh=new T({geometry:c,shader:l}),this.u=l.resources.fx.uniforms}fit(e,t){let n=Math.max(-40,e[0]-t),r=Math.max(-40,e[1]-t),i=Math.min(1040,e[0]+t),a=Math.min(1454,e[1]+t),o=this.mesh.geometry.positions;o[0]=n,o[1]=r,o[2]=i,o[3]=r,o[4]=i,o[5]=a,o[6]=n,o[7]=a,this.mesh.geometry.getBuffer(`aPosition`).update()}set(e,t){this.u[e]=t}},J=e=>({value:e,type:`f32`}),Y=(e,t)=>({value:[e,t],type:`vec2<f32>`}),X=(e,t,n)=>({value:[e,t,n],type:`vec3<f32>`}),Z=(e,t,n,r)=>({value:[e,t,n,r],type:`vec4<f32>`}),ce=(e,t,n={})=>new q(W,{uC:Y(e[0],e[1]),uIn:Y(t[0],t[1]),uN:J(n.n??220),uSeed:J(n.seed??1),uAlpha:J(1),uInk:X(...n.ink??[.06,.06,.08]),uBg:J(n.bg??0),uBgCol:X(...n.bgCol??[.06,.06,.08]),uBlack:J(n.black??0)}),le=(e,t,n=1)=>new q(G,{uAng:J(e),uT:J(0),uSeed:J(n),uAlpha:J(1),uClr:Z(...t),uGap:J(7)}),ue=(e,t={})=>new q(K,{uC:Y(e[0],e[1]),uR:J(0),uW:J(t.w??10),uRings:J(t.rings??3),uAlpha:J(1),uRainbow:J(+!!t.rainbow),uSquash:J(t.squash??1),uDash:Y(t.dash?.[0]??0,t.dash?.[1]??0)}),de=`precision highp float;
in vec2 vPos;
in vec2 vUV;
out vec4 finalColor;
uniform sampler2D uTex;
uniform vec4 uBurst;
void main() {
  float a = 1.0 - smoothstep(uBurst.z - uBurst.w, uBurst.z, length(vPos - uBurst.xy));
  if (a <= 0.0) discard;
  finalColor = texture(uTex, vUV) * a;
}`,fe=`precision highp float;
in vec2 vPos;
in vec2 vUV;
out vec4 finalColor;
uniform sampler2D uTex;
uniform sampler2D uMask;
uniform vec4 uBurst;
uniform float uCell; uniform float uGray; uniform float uHasMask; uniform float uMono;
void main() {
  vec3 rgb = texture(uTex, vUV).rgb;
  float L = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
  L = pow(L, 0.75); // ≈ perceptual lightness
  vec3 paper = vec3(1.0);
  vec3 inkC = vec3(0.09, 0.075, 0.1);
  float ink = 1.0 - smoothstep(0.2, 0.27, L);           // lines and solid ink keep their edge
  float white = smoothstep(0.86, 0.92, L);               // paper
  vec3 mono;
  if (uGray > 0.5) {
    float g = mix(0.42, 0.93, clamp((L - 0.25) / 0.62, 0.0, 1.0));
    mono = mix(mix(vec3(g), paper, white), inkC, ink);
  } else {
    // three tone levels (dot coverage), hard band edges like cut screentone
    float cov = L > 0.72 ? 0.12 : L > 0.5 ? 0.3 : 0.5;
    vec2 q = mat2(0.7071, -0.7071, 0.7071, 0.7071) * vPos / uCell;
    float d = length(fract(q) - 0.5);
    float r = sqrt(cov / 3.14159);
    float aa = 0.7 / uCell;
    float dot = 1.0 - smoothstep(r - aa, r + aa, d);
    mono = mix(mix(mix(paper, inkC, dot), paper, white), inkC, ink);
  }
  float colour = 1.0 - uMono;
  if (uHasMask > 0.5) colour = max(colour, step(0.06, max(max(texture(uMask, vUV).r, texture(uMask, vUV).g), texture(uMask, vUV).b)));
  if (uBurst.z > 0.0) colour = max(colour, 1.0 - smoothstep(uBurst.z - uBurst.w, uBurst.z, length(vPos - uBurst.xy)));
  finalColor = vec4(mix(mono, rgb, colour), 1.0);
}`,Q=class{mesh;shader;u;constructor(e,t,n,r,i){let a=new w({positions:new Float32Array([0,0,r,0,r,i,0,i]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])});this.shader=o.from({gl:{vertex:H,fragment:e},resources:{...t,fx:n}}),this.mesh=new T({geometry:a,shader:this.shader}),this.u=this.shader.resources.fx.uniforms}tex(e,t){this.shader.resources[e]=t}},pe=(e,t,n)=>new Q(de,{uTex:e},{uBurst:Z(0,0,0,1)},t,n),me=(e,t,n,r,i)=>new Q(fe,{uTex:e,uMask:t},{uBurst:Z(0,0,0,1),uCell:J(7),uGray:J(+!!i),uHasMask:J(0),uMono:J(1)},n,r);function $(e,t,n){let r=document.createElement(`canvas`);return r.width=e,r.height=t,n(r.getContext(`2d`)),h.from(r)}var he=()=>$(256,256,e=>{let t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.25,`rgba(255,255,255,0.55)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,256,256)}),ge=()=>$(4,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.72,`rgba(255,255,255,1)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,4,256)}),_e=()=>$(32,24,e=>{e.fillStyle=`#fff`,e.beginPath(),e.moveTo(2,4),e.lineTo(30,1),e.lineTo(27,21),e.lineTo(5,23),e.closePath(),e.fill()}),ve=()=>$(48,32,e=>{e.fillStyle=`#fff`,e.beginPath(),e.ellipse(24,16,21,11,0,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`destination-out`,e.beginPath(),e.arc(46,16,6,0,Math.PI*2),e.fill()}),ye=()=>$(64,40,e=>{let t=()=>{e.beginPath(),e.moveTo(4,20),e.bezierCurveTo(14,6,34,1,52,5),e.quadraticCurveTo(60,7,61,13),e.lineTo(54,20),e.lineTo(61,27),e.quadraticCurveTo(60,33,52,35),e.bezierCurveTo(34,39,14,34,4,20),e.closePath()},n=e.createLinearGradient(4,0,62,0);n.addColorStop(0,`rgb(205,205,205)`),n.addColorStop(.35,`rgb(245,245,245)`),n.addColorStop(1,`rgb(255,255,255)`),t(),e.fillStyle=n,e.fill(),e.lineWidth=2,e.strokeStyle=`rgba(120,120,120,0.85)`,e.stroke(),e.beginPath(),e.moveTo(7,20),e.quadraticCurveTo(28,18,46,20),e.lineWidth=1.2,e.strokeStyle=`rgba(170,170,170,0.7)`,e.stroke()}),be=()=>$(48,32,e=>{e.fillStyle=`#fff`,e.beginPath(),e.moveTo(3,16),e.bezierCurveTo(14,12,22,6,33,6),e.arc(35,16,10,-Math.PI/2-.2,Math.PI/2+.2),e.bezierCurveTo(22,26,14,20,3,16),e.closePath(),e.fill()});function xe(e,t){let r=document.createElement(`canvas`);r.width=400,r.height=56*Math.ceil(e.length/2);let i=r.getContext(`2d`);i.font=`900 40px "Hiragino Sans","PingFang SC","Noto Sans CJK SC",sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.lineJoin=`round`,e.forEach((e,n)=>{let r=n%2*200+100,a=Math.floor(n/2)*56+28;i.lineWidth=7,i.strokeStyle=`#1a1418`,i.strokeText(e,r,a),i.fillStyle=t[n%t.length],i.fillText(e,r,a)});let a=h.from(r);return e.map((e,t)=>new h({source:a.source,frame:new n(t%2*200,Math.floor(t/2)*56,200,56)}))}var Se=()=>$(64,64,e=>{e.fillStyle=`#fff`,e.beginPath();for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=t%2?6:31;e.lineTo(32+Math.cos(n)*r,32+Math.sin(n)*r)}e.closePath(),e.fill()}),Ce=class{n;spawn;step;rnd;c;ps=[];st=[];on=!1;rate=1;flip=!0;look;warmFill=!1;fade;constructor(e,t,n,r,i,a){this.n=t,this.spawn=n,this.step=r,this.rnd=i,this.c=new V({dynamicProperties:{position:!0,rotation:!0,color:!0,vertex:!0}}),a===`add`&&(this.c.blendMode=`add`);for(let r=0;r<t;r++){let t=new L({texture:typeof e==`function`?e(r):e,anchorX:.5,anchorY:.5,alpha:0});this.ps.push(t),this.c.addParticle(t);let a=n(r,i);a.age=a.life*i(),this.st.push(a)}}reseed(){for(let e=0;e<this.n;e++){let t=this.st[e]=this.spawn(e,this.rnd);t.age=t.life*this.rnd()}}start(e=!0){if(this.on=!0,e&&this.warmFill&&this.reseed(),!e)for(let e=0;e<this.n;e++)this.st[e]=this.spawn(e,this.rnd),this.st[e].age=-this.rnd()*this.st[e].life*.3}stop(){this.on=!1}kill(){this.on=!1;for(let e=0;e<this.n;e++)this.st[e].age=this.st[e].life+1,this.ps[e].alpha=0}update(e,t){for(let n=0;n<this.n;n++){let r=this.st[n];if(r.age+=e,r.age>r.life){if(!this.on){this.ps[n].alpha=0;continue}r=this.st[n]=this.spawn(n,this.rnd)}if(r.age<0){this.ps[n].alpha=0;continue}this.step(r,e,t);let i=this.ps[n];if(i.x=r.x,i.y=r.y,this.look?this.look(i,r,t):(i.rotation=r.r,i.scaleX=this.flip?r.s*(.35+.65*Math.abs(Math.cos(r.ph+t*3))):r.s,i.scaleY=r.s,i.tint=r.tint),this.fade)i.alpha=r.a*Math.min(1,r.age/this.fade,(r.life-r.age)/this.fade);else{let e=r.age/r.life;i.alpha=r.a*Math.min(1,e*6)*Math.min(1,(1-e)*4)}}}};export{ce as a,me as c,ge as d,le as f,_e as i,ue as l,xe as m,pe as n,he as o,Se as p,be as r,ve as s,Ce as t,ye as u};