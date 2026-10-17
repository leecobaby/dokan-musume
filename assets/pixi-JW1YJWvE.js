const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./svg.es-BQvTXwvq.js","./rolldown-runtime-hePW80VL.js","./CanvasPool-B4Lq94db.js","./lib-BfefGiwE.js","./preload-helper-uBIymjUX.js","./init-CImovQFG.js","./Filter-13JcV7ZJ.js","./canvasUtils-abpS0dNQ.js","./Cache-BnZuwjCK.js","./RenderTargetSystem-T9jKldLQ.js","./GCManagedHash-C3VmVxzI.js","./CanvasRenderer-fvYZnQAz.js","./GraphicsContext-MvbCmIZj.js","./getTextureBatchBindGroup-CNIJIKYk.js","./BitmapFont-uqVufP7y.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-uBIymjUX.js";import{n as t,t as n}from"./types-BoE2V4SU.js";import{B as r,D as i,G as a,L as o,M as s,N as c,O as l,S as u,W as d,f,h as p,j as m,l as h,s as g,t as _,u as v,w as y,x as b,z as x}from"./CanvasPool-B4Lq94db.js";import"./lib-BfefGiwE.js";import{S,c as C,f as w,l as T,s as ee,t as E,x as te}from"./Filter-13JcV7ZJ.js";import{d as ne,i as re,m as ie}from"./RenderTargetSystem-T9jKldLQ.js";import{a as D,l as O,t as ae}from"./GraphicsContext-MvbCmIZj.js";import{t as oe}from"./autoDetectRenderer-BDDsQL0z.js";import{t as se}from"./GCManagedHash-C3VmVxzI.js";import{t as ce}from"./getPo2TextureFromSource-D3obLmHR.js";import{t as k}from"./defaultFilter.vert-Bj4g9K4z.js";import{t as A}from"./ColorMatrixFilter-CcwbD9s5.js";import{n as le}from"./CanvasRenderer-fvYZnQAz.js";import{a as j,i as M,n as N,r as P}from"./BitmapFont-uqVufP7y.js";import{i as ue,l as F,n as I,o as L,r as de,t as R}from"./parse-Q7juk_Vt.js";import{n as z,t as fe}from"./ir-Bu1fWQN4.js";var pe=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,B=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`,V=class e extends E{constructor(t){t={...e.defaultOptions,...t};let n=v.from({vertex:{source:B,entryPoint:`mainVertex`},fragment:{source:B,entryPoint:`mainFragment`}}),r=f.from({vertex:k,fragment:pe,name:`alpha-filter`}),{alpha:i,...a}=t,o=new h({uAlpha:{value:i,type:`f32`}});super({...a,gpuProgram:n,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};V.defaultOptions={alpha:1};var me=V,he={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},ge=[`in vec2 vBlurTexCoords[%size%];`,`uniform sampler2D uTexture;`,`uniform vec4 uInputClamp;`,`out vec4 finalColor;`,`void main(void)`,`{`,`    %blur%`,`}`].join(`
`);function _e(e){let t=he[e],n=t.length,r=``;for(let i=0;i<e;i++){let a=i===0?`finalColor = `:`    + `,o=i<n?i:e-i-1,s=`texture(uTexture, clamp(vBlurTexCoords[%index%], uInputClamp.xy, uInputClamp.zw)) * %value%`.replace(`%index%`,i.toString()).replace(`%value%`,t[o].toString());r+=`${a}${s}
`}return ge.replace(`%blur%`,`${r};`).replace(`%size%`,e.toString())}var ve=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function ye(e,t){let n=Math.ceil(e/2),r=ve,i=``,a;a=t?`vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);`:`vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);`;for(let t=0;t<e;t++){let e=a.replace(`%index%`,t.toString());e=e.replace(`%sampleIndex%`,`${t-(n-1)}.0`),i+=e,i+=`
`}return r=r.replace(`%blur%`,i),r=r.replace(`%size%`,e.toString()),r=r.replace(`%dimension%`,t?`z`:`w`),r}function be(e,t){let n=ye(t,e),r=_e(t);return f.from({vertex:n,fragment:r,name:`blur-${e?`horizontal`:`vertical`}-pass-filter`})}var H=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}
`;function xe(e,t){let n=he[t],r=n.length,i=[],a=[],o=[];for(let s=0;s<t;s++){i[s]=`@location(${s}) offset${s}: vec2<f32>,`,e?a[s]=`filteredCord + vec2(${s-r+1} * pixelStrength, 0.0),`:a[s]=`filteredCord + vec2(0.0, ${s-r+1} * pixelStrength),`;let c=n[s<r?s:t-s-1].toString();o[s]=`finalColor += textureSample(uTexture, uSampler,
            clamp(offset${s}, gfu.uInputClamp.xy, gfu.uInputClamp.zw)) * ${c};`}let s=i.join(`
`),c=a.join(`
`),l=o.join(`
`),u=H.replace(`%blur-struct%`,s).replace(`%blur-vertex-out%`,c).replace(`%blur-fragment-in%`,s).replace(`%blur-sampling%`,l).replace(`%dimension%`,e?`z`:`w`);return v.from({vertex:{source:u,entryPoint:`mainVertex`},fragment:{source:u,entryPoint:`mainFragment`}})}var Se=class e extends E{constructor(t){t={...e.defaultOptions,...t};let n=be(t.horizontal,t.kernelSize),r=xe(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:`f32`}}},...t}),this.horizontal=t.horizontal,this.legacy=t.legacy??!1,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._blurUniforms=this.resources.blurUniforms,this._uniforms=this._blurUniforms.uniforms}apply(e,t,n,r){this.legacy?this._applyLegacy(e,t,n,r):this._applyOptimized(e,t,n,r)}_applyLegacy(e,t,n,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,n,r);else{let i=w.getSameSizeTexture(t),a=t,o=i;this._state.blend=!1;let s=e.renderer.type===g.WEBGPU;for(let t=0;t<this.passes-1;t++){e.applyFilter(this,a,o,t===0||s);let n=o;o=a,a=n}this._state.blend=!0,e.applyFilter(this,a,n,r),w.returnTexture(i)}}_applyOptimized(e,t,n,r){if(this._uniforms.uStrength=this._calculateInitialStrength(),this.passes===1)e.applyFilter(this,t,n,r);else{let i=w.getSameSizeTexture(t),a=t,o=i;this._state.blend=!1;let s=e.renderer,c=s.type===g.WEBGPU,l=c?s.renderPipes.uniformBatch:null;for(let t=0;t<this.passes-1;t++){l&&this.groups[1].setResource(l.getUboResource(this._blurUniforms),0),e.applyFilter(this,a,o,c);let t=o;o=a,a=t,this._uniforms.uStrength*=.5}l&&this.groups[1].setResource(l.getUboResource(this._blurUniforms),0),this._state.blend=!0,e.applyFilter(this,a,n,r),w.returnTexture(i)}}_calculateInitialStrength(){let e=1,t=.5;for(let n=1;n<this.passes;n++)e+=t*t,t*=.5;return this.strength/Math.sqrt(e)}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};Se.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var U=Se,Ce=class extends E{constructor(...e){let t=e[0]??{};typeof t==`number`&&(s(c,`BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }`),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]||`inherit`),e[3]!==void 0&&(t.kernelSize=e[3])),t={...U.defaultOptions,...t};let{strength:n,strengthX:r,strengthY:i,quality:a,...o}=t;super({...o,compatibleRenderers:g.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new U({horizontal:!0,...t}),this.blurYFilter=new U({horizontal:!1,...t}),this.quality=a,this.strengthX=r??n,this.strengthY=i??n,this.repeatEdgePixels=!1}apply(e,t,n,r){let i=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(i&&a){let i=w.getSameSizeTexture(t);this.blurXFilter.blendMode=`normal`,this.blurXFilter.apply(e,t,i,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,i,n,r),w.returnTexture(i)}else a?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,t,n,r)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,t,n,r))}updatePadding(){this.padding=this._repeatEdgePixels?0:Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw Error(`BlurFilter's strengthX and strengthY are different`);return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return s(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength}set blur(e){s(`8.3.0`,`BlurFilter.blur is deprecated, please use BlurFilter.strength instead.`),this.strength=e}get blurX(){return s(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX}set blurX(e){s(`8.3.0`,`BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.`),this.strengthX=e}get blurY(){return s(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY}set blurY(e){s(`8.3.0`,`BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.`),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}};Ce.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var W=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`,G=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`,we=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`,Te=class extends E{constructor(...e){let t=e[0];t instanceof ee&&(e[1]&&s(c,`DisplacementFilter now uses options object instead of params. {sprite, scale}`),t={sprite:t,scale:e[1]});let{sprite:n,scale:i,...a}=t,o=i??20;typeof o==`number`&&(o=new r(o,o));let l=new h({uFilterMatrix:{value:new x,type:`mat3x3<f32>`},uScale:{value:o,type:`vec2<f32>`},uRotation:{value:new Float32Array([0,0,0,0]),type:`mat2x2<f32>`}}),u=f.from({vertex:G,fragment:W,name:`displacement-filter`}),d=v.from({vertex:{source:we,entryPoint:`mainVertex`},fragment:{source:we,entryPoint:`mainFragment`}}),p=n.texture.source;super({...a,gpuProgram:d,glProgram:u,resources:{filterUniforms:l,uMapTexture:p,uMapSampler:p.style}}),this._sprite=t.sprite,this._sprite.renderable=!1}apply(e,t,n,r){let i=this.resources.filterUniforms.uniforms;e.calculateSpriteMatrix(i.uFilterMatrix,this._sprite);let a=this._sprite.worldTransform,o=Math.sqrt(a.a*a.a+a.b*a.b),s=Math.sqrt(a.c*a.c+a.d*a.d);o!==0&&s!==0&&(i.uRotation[0]=a.a/o,i.uRotation[1]=a.b/o,i.uRotation[2]=a.c/s,i.uRotation[3]=a.d/s),this.resources.uMapTexture=this._sprite.texture.source,e.applyFilter(this,t,n,r)}get scale(){return this.resources.filterUniforms.uniforms.uScale}},Ee=class extends C{constructor(e,t){let{text:n,resolution:r,style:i,anchor:a,width:o,height:s,roundPixels:c,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=n??``,this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new S({_onUpdate:()=>{this.onViewUpdate()}}),a&&(this.anchor=a),this.roundPixels=c??!1,o!==void 0&&(this.width=o),s!==void 0&&(this.height=s)}get anchor(){return this._anchor}set anchor(e){typeof e==`number`?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||={},this._style?.off(`update`,this.onViewUpdate,this),this._style=e instanceof this._styleClass?e:new this._styleClass(e),this._style.on(`update`,this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||={},e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e==`object`?(t=e.height??e.width,e=e.width):t??=e,e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}containsPoint(e){let t=this.bounds.width,n=this.bounds.height,r=-t*this.anchor.x,i=0;return e.x>=r&&e.x<=r+t&&(i=-n*this.anchor.y,e.y>=i&&e.y<=i+n)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(e=!1){this._style?.off(`update`,this.onViewUpdate,this),super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e==`boolean`?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}};function De(e,t){let n=e[0]??{};return(typeof n==`string`||e[1])&&(s(c,`use new ${t}({ text: "hi!", style }) instead`),n={text:n,style:e[1]}),n}var K=null,q=null;function Oe(e,t){K||(K=p.get().createCanvas(256,128),q=K.getContext(`2d`,{willReadFrequently:!0}),q.globalCompositeOperation=`copy`,q.globalAlpha=1),(K.width<e||K.height<t)&&(K.width=m(e),K.height=m(t))}function ke(e,t,n){for(let r=0,i=4*n*t;r<t;++r,i+=4)if(e[i+3]!==0)return!1;return!0}function Ae(e,t,n,r,i){let a=4*t;for(let t=r,o=r*a+4*n;t<=i;++t,o+=a)if(e[o+3]!==0)return!1;return!0}function je(...e){let t=e[0];t.canvas||(t={canvas:e[0],resolution:e[1]});let{canvas:n}=t,r=Math.min(t.resolution??1,1),i=t.width??n.width,a=t.height??n.height,s=t.output;if(Oe(i,a),!q)throw TypeError(`Failed to get canvas 2D context`);q.drawImage(n,0,0,i,a,0,0,i*r,a*r);let c=q.getImageData(0,0,i,a).data,l=0,u=0,d=i-1,f=a-1;for(;u<a&&ke(c,i,u);)++u;if(u===a)return o.EMPTY;for(;ke(c,i,f);)--f;for(;Ae(c,i,l,u,f);)++l;for(;Ae(c,i,d,u,f);)--d;return++d,++f,q.globalCompositeOperation=`source-over`,q.strokeRect(l,u,d-l,f-u),q.globalCompositeOperation=`copy`,s??=new o,s.set(l/r,u/r,(d-l)/r,(f-u)/r),s}var Me=new o;function J(e){let t=0;for(let n=0;n<e.length;n++)e.charCodeAt(n)===32&&t++;return t}var Y=new class{getCanvasAndContext(e){let{text:t,style:n,resolution:r=1}=e,i=n._getFinalPadding(),a=j.measureText(t||` `,n),o=Math.ceil(Math.ceil(Math.max(1,a.width)+i*2)*r),s=Math.ceil(Math.ceil(Math.max(1,a.height)+i*2)*r),c=_.getOptimalCanvasAndContext(o,s);return this._renderTextToCanvas(n,i,r,c,a),{canvasAndContext:c,frame:n.trim?je({canvas:c.canvas,width:o,height:s,resolution:1,output:Me}):Me.set(0,0,o,s)}}returnCanvasAndContext(e){_.returnCanvasAndContext(e)}_renderTextToCanvas(e,t,n,r,i){if(i.runsByLine&&i.runsByLine.length>0){this._renderTaggedTextToCanvas(i,e,t,n,r);return}let{canvas:a,context:o}=r,s=M(e),c=i.lines,l=i.lineHeight,u=i.lineWidths,d=i.maxLineWidth,f=i.fontProperties,p=a.height;if(o.resetTransform(),o.scale(n,n),o.textBaseline=e.textBaseline,e._stroke?.width){let t=e._stroke;o.lineWidth=t.width,o.miterLimit=t.miterLimit,o.lineJoin=t.join,o.lineCap=t.cap}o.font=s;let m,h,g=e.dropShadow?2:1,_=(e._stroke?.width??0)/2,v=(l-f.fontSize)/2;l-f.fontSize<0&&(v=0);for(let a=0;a<g;++a){let s=e.dropShadow&&a===0,g=s?Math.ceil(Math.max(1,p)+t*2):0,y=g*n;if(s)this._setupDropShadow(o,e,n,y);else{let n=e._gradientBounds,r=e._gradientOffset;if(n){let a={width:n.width,height:n.height,lineHeight:n.height,lines:i.lines};this._setFillAndStrokeStyles(o,e,a,t,_,r?.x??0,r?.y??0)}else r?this._setFillAndStrokeStyles(o,e,i,t,_,r.x,r.y):this._setFillAndStrokeStyles(o,e,i,t,_);o.shadowColor=`rgba(0,0,0,0)`}for(let n=0;n<c.length;n++){m=_,h=_+n*l+f.ascent+v,m+=this._getAlignmentOffset(u[n],d,e.align);let i=0;if(e.align===`justify`&&e.wordWrap&&n<c.length-1){let e=J(c[n]);e>0&&(i=(d-u[n])/e)}e._stroke?.width&&this._drawLetterSpacing(c[n],e,r,m+t,h+t-g,!0,i),e._fill!==void 0&&this._drawLetterSpacing(c[n],e,r,m+t,h+t-g,!1,i)}}}_renderTaggedTextToCanvas(e,t,n,r,i){let{canvas:a,context:o}=i,{runsByLine:s,lineWidths:c,maxLineWidth:l,lineAscents:u,lineHeights:d,hasDropShadow:f}=e,p=a.height;o.resetTransform(),o.scale(r,r),o.textBaseline=t.textBaseline;let m=f?2:1,h=t._stroke?.width??0;for(let e of s)for(let t of e){let e=t.style._stroke?.width??0;e>h&&(h=e)}let g=h/2,_=[];for(let e=0;e<s.length;e++){let t=s[e],n=[];for(let e of t){let t=M(e.style);o.font=t,n.push({width:j._measureText(e.text,e.style.letterSpacing,o),font:t})}_.push(n)}for(let e=0;e<m;++e){let a=f&&e===0,m=a?Math.ceil(Math.max(1,p)+n*2):0,h=m*r;a||(o.shadowColor=`rgba(0,0,0,0)`);let v=g;for(let e=0;e<s.length;e++){let f=s[e],p=c[e],y=u[e],b=d[e],x=_[e],S=g;S+=this._getAlignmentOffset(p,l,t.align);let C=0;if(t.align===`justify`&&t.wordWrap&&e<s.length-1){let e=0;for(let t of f)e+=J(t.text);e>0&&(C=(l-p)/e)}let w=v+y,T=S+n;for(let e=0;e<f.length;e++){let t=f[e],{width:s,font:c}=x[e];if(o.font=c,o.textBaseline=t.style.textBaseline,t.style._stroke?.width){let e=t.style._stroke;if(o.lineWidth=e.width,o.miterLimit=e.miterLimit,o.lineJoin=e.join,o.lineCap=e.cap,a){if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,h);else{let e=J(t.text);T+=s+e*C;continue}}else{let r=j.measureFont(c),i=t.style.lineHeight||r.fontSize,a={width:s,height:i,lineHeight:i,lines:[t.text]};o.strokeStyle=P(e,o,a,n*2,T-n,v)}this._drawLetterSpacing(t.text,t.style,i,T,w+n-m,!0,C)}let l=J(t.text);T+=s+l*C}T=S+n;for(let e=0;e<f.length;e++){let t=f[e],{width:s,font:c}=x[e];if(o.font=c,o.textBaseline=t.style.textBaseline,t.style._fill!==void 0){if(a){if(t.style.dropShadow)this._setupDropShadow(o,t.style,r,h);else{let e=J(t.text);T+=s+e*C;continue}}else{let e=j.measureFont(c),r=t.style.lineHeight||e.fontSize,i={width:s,height:r,lineHeight:r,lines:[t.text]};o.fillStyle=P(t.style._fill,o,i,n*2,T-n,v)}this._drawLetterSpacing(t.text,t.style,i,T,w+n-m,!1,C)}let l=J(t.text);T+=s+l*C}v+=b}}}_setFillAndStrokeStyles(e,t,n,r,i,a=0,o=0){if(e.fillStyle=t._fill?P(t._fill,e,n,r*2,a,o):null,t._stroke?.width){let s=i+r*2;e.strokeStyle=P(t._stroke,e,n,s,a,o)}}_setupDropShadow(e,t,n,r){e.fillStyle=`black`,e.strokeStyle=`black`;let i=t.dropShadow,a=i.color,o=i.alpha;e.shadowColor=u.shared.setValue(a).setAlpha(o).toRgbaString();let s=i.blur*n,c=i.distance*n;e.shadowBlur=s,e.shadowOffsetX=Math.cos(i.angle)*c,e.shadowOffsetY=Math.sin(i.angle)*c+r}_getAlignmentOffset(e,t,n){return n===`right`?t-e:n===`center`?(t-e)/2:0}_drawLetterSpacing(e,t,n,r,i,a=!1,o=0){let{context:s}=n,c=t.letterSpacing,l=!1;if(j.experimentalLetterSpacingSupported&&(j.experimentalLetterSpacing?(s.letterSpacing=`${c}px`,s.textLetterSpacing=`${c}px`,l=!0):(s.letterSpacing=`0px`,s.textLetterSpacing=`0px`)),(c===0||l)&&o===0){a?s.strokeText(e,r,i):s.fillText(e,r,i);return}if(o!==0&&(c===0||l)){let t=e.split(` `),n=r,c=s.measureText(` `).width;for(let e=0;e<t.length;e++)a?s.strokeText(t[e],n,i):s.fillText(t[e],n,i),n+=s.measureText(t[e]).width+c+o;return}let u=r,d=j.graphemeSegmenter(e),f=s.measureText(e).width,p=0;for(let e=0;e<d.length;++e){let t=d[e];a?s.strokeText(t,u,i):s.fillText(t,u,i);let n=``;for(let t=e+1;t<d.length;++t)n+=d[t];p=s.measureText(n).width,u+=f-p+c,t===` `&&(u+=o),f=p}}},Ne=!1;function Pe(e){if(Ne)return;let t=new l({scaleMode:e.scaleMode});e._resourceId!==t._resourceId&&(Ne=!0,b(`Text textureStyle: only scaleMode is applied to a text texture, the other fields are ignored`))}function Fe(e,t){let{texture:n,bounds:r}=e,i=t._style._getFinalPadding();te(r,t._anchor,n);let a=t._anchor._x*i*2,o=t._anchor._y*i*2;r.minX-=i-a,r.minY-=i-o,r.maxX-=i-a,r.maxY-=i-o}var Ie=class extends ne{},Le=class{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),e.runners.contextChange.add(this),this._managedTexts=new se({renderer:e,type:`renderable`,onUnload:this.onTextUnload.bind(this),name:`canvasText`})}resolutionChange(){for(let e in this._managedTexts.items){let t=this._managedTexts.items[e];t?._autoResolution&&t.onViewUpdate()}}contextChange(){for(let e in this._managedTexts.items)this._managedTexts.items[e]?.unload()}validateRenderable(e){let t=this._getGpuText(e),n=e.styleKey;return t.currentKey!==n||e._didTextUpdate}addRenderable(e,t){let n=this._getGpuText(e);if(e._didTextUpdate||n.currentKey!==e.styleKey){let t=e._autoResolution?this._renderer.resolution:e.resolution;(n.currentKey!==e.styleKey||e._resolution!==t)&&this._updateGpuText(e),e._didTextUpdate=!1,Fe(n,e)}this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){let t=this._getGpuText(e);t._batcher.updateElement(t)}_updateGpuText(e){let t=this._getGpuText(e);t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,t.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let t=new Ie;return t.currentKey=`--`,t.renderable=e,t.transform=e.groupTransform,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,this._managedTexts.add(e),t}onTextUnload(e){let t=e._gpuData[this._renderer.uid];if(!t)return;let{canvasText:n}=this._renderer;n.getReferenceCount(t.currentKey)>0?n.decreaseReferenceCount(t.currentKey):t.texture&&n.returnTexture(t.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}};Le.extension={type:[d.WebGLPipes,d.WebGPUPipes,d.CanvasPipes],name:`text`};var Re=class{constructor(e,t){this._activeTextures={},this._renderer=e,this._retainCanvasContext=t}getTexture(e,t,n,r){typeof e==`string`&&(s(`8.0.0`,`CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments`),e={text:e,style:n,resolution:t}),e.style instanceof N||(e.style=new N(e.style)),typeof e.text!=`string`&&(e.text=e.text.toString());let{text:i,style:a,textureStyle:o,autoGenerateMipmaps:c}=e,l=e.resolution??this._renderer.resolution,{frame:u,canvasAndContext:d}=Y.getCanvasAndContext({text:i,style:a,resolution:l}),f=ce(d.canvas,u.width,u.height,l,c,o?.scaleMode);if(a.trim&&(u.pad(a.padding),f.frame.copyFrom(u),f.frame.scale(1/l),f.updateUvs()),a.filters){let e=this._applyFilters(f,a.filters);return this.returnTexture(f),Y.returnCanvasAndContext(d),e}return this._renderer.texture.initSource(f._source),this._retainCanvasContext||Y.returnCanvasAndContext(d),f}returnTexture(e){let t=e.source,n=t.resource;if(this._retainCanvasContext&&n?.getContext){let e=n.getContext(`2d`);e&&Y.returnCanvasAndContext({canvas:n,context:e})}t.resource=null,t.uploadMethodId=`unknown`,t.alphaMode=`no-premultiply-alpha`,w.returnTexture(e)}renderTextToCanvas(){s(`8.10.0`,`CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead`)}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;let n=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle,autoGenerateMipmaps:e.autoGenerateMipmaps});return this._activeTextures[t]={texture:n,usageCount:1},n}decreaseReferenceCount(e){let t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(this.returnTexture(t.texture),this._activeTextures[e]=null))}getReferenceCount(e){return this._activeTextures[e]?.usageCount??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,t){let n=this._renderer.renderTarget.renderTarget,r=this._renderer.filter.generateFilteredTexture({texture:e,filters:t});return this._renderer.renderTarget.bind({target:n,clear:!1}),r}destroy(){this._renderer=null;for(let e in this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}},ze=class extends Re{constructor(e){super(e,!0)}};ze.extension={type:[d.CanvasSystem],name:`canvasText`};var Be=class extends Re{constructor(e){super(e,!1)}};Be.extension={type:[d.WebGLSystem,d.WebGPUSystem],name:`canvasText`},a.add(ze),a.add(Be),a.add(Le);var Ve=class extends Ee{constructor(...e){let t=De(e,`Text`);super(t,N),this.renderPipeId=`text`,t.textureStyle&&(this.textureStyle=t.textureStyle instanceof l?t.textureStyle:new l(t.textureStyle),Pe(this.textureStyle)),this.autoGenerateMipmaps=t.autoGenerateMipmaps??i.defaultOptions.autoGenerateMipmaps}updateBounds(){let e=this._bounds,t=this._anchor,n=0,r=0;if(this._style.trim){let{frame:e,canvasAndContext:t}=Y.getCanvasAndContext({text:this.text,style:this._style,resolution:1});Y.returnCanvasAndContext(t),n=e.width,r=e.height}else{let e=j.measureText(this._text,this._style);n=e.width,r=e.height}e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*r,e.maxY=e.minY+r}},X=(e,t,n=1)=>{e[t]=(e[t]||0)+n},He=e=>Math.round(e[0]*255)<<16|Math.round(e[1]*255)<<8|Math.round(e[2]*255),Ue=class{m;counters;grads=new Map;tiles=new Map;flatTone=!1;noGrad=!1;constructor(e,t){this.m=e,this.counters=t}key(e){return e?e.kind===`color`?e.c.join(`,`):e.id+`@`+(this.m.byId.get(e.id)?.treeVer??0):`-`}style(e,t,n){if(!e)return null;if(e.kind===`color`)return e.c[3]*t>0?{color:He(e.c),alpha:e.c[3]*t}:null;let r=this.m.paintServer(e.id);if(!r)return null;if(r.kind===`tone`)return this.tone(e.id,r,t,n);if(r.kind===`pattern`)return X(this.counters(),`patternFallback`),{color:8421504,alpha:.5*t};if(this.noGrad)return null;let i=e.id+`@`+(this.m.byId.get(e.id)?.treeVer??0),a=this.grads.get(i);if(!a){let e=r.units===`objectBoundingBox`,t=r.transform??R,n=(e,n)=>({x:t[0]*e+t[2]*n+t[4],y:t[1]*e+t[3]*n+t[5]}),o=r.stops.length?r.stops.map(e=>({offset:e.offset,color:`rgba(${Math.round(e.color[0]*255)},${Math.round(e.color[1]*255)},${Math.round(e.color[2]*255)},${e.color[3]})`})):[{offset:0,color:`rgba(0,0,0,0)`},{offset:1,color:`rgba(0,0,0,0)`}];a=r.kind===`linear`?new O({type:`linear`,start:n(r.x1,r.y1),end:n(r.x2,r.y2),colorStops:o,textureSpace:e?`local`:`global`}):new O({type:`radial`,center:n(r.fx,r.fy),innerRadius:0,outerCenter:n(r.cx,r.cy),outerRadius:r.r*F(t),colorStops:o,textureSpace:e?`local`:`global`}),this.grads.size>2e3&&this.grads.clear(),this.grads.set(i,a),X(this.counters(),`gradientsBuilt`)}return{fill:a,alpha:t}}tone(e,t,n,r){if(this.flatTone){let e=Math.round((1-t.level)*255);return{color:e<<16|e<<8|e,alpha:n}}let i=t.transform?F(t.transform):1,a=Math.max(.5,Math.round(r*i*4)/4),o=Math.max(2,Math.round(t.cell*a)),s=`${e}@${o}@${t.node.treeVer}`,c=this.tiles.get(s);if(!c){let e=document.createElement(`canvas`);e.width=e.height=o;let n=e.getContext(`2d`),r=e=>`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},${e[3]})`;n.fillStyle=r(t.bg),n.fillRect(0,0,o,o),n.fillStyle=r(t.dot),n.beginPath(),n.arc(o/2,o/2,t.r*(o/t.cell),0,Math.PI*2),n.fill(),c=y.from(e),c.source.style.addressMode=`repeat`,c.source.style.update(),this.tiles.size>600&&this.tiles.clear(),this.tiles.set(s,c),X(this.counters(),`toneTiles`)}let l=t.transform??R,u=t.cell/o,d=new x(l[0]*u,l[1]*u,l[2]*u,l[3]*u,l[4],l[5]);return X(this.counters(),`tone`),{texture:c,matrix:d,color:16777215,alpha:n,textureSpace:`global`}}destroy(){for(let e of this.grads.values())e.destroy();for(let e of this.tiles.values())e.destroy(!0);this.grads.clear(),this.tiles.clear()}};function We(e){let t=L(e),n=new D(void 0,!0),r=t.pts,i=[],a=0,o=0,s=0,c=1/0,l=1/0,u=-1/0,d=-1/0,f=e=>{e>o&&i.push([o,e,s,(u-c)*(d-l)])};for(let e=0;e<t.verbs.length;e++){let n=t.verbs[e];n===I.M&&e>o&&(f(e),o=e,s=a,c=l=1/0,u=d=-1/0);let i=n===I.M||n===I.L?2:n===I.Q?4:n===I.C?6:0;for(let e=0;e<i;e+=2){let t=r[a+e],n=r[a+e+1];t<c&&(c=t),t>u&&(u=t),n<l&&(l=n),n>d&&(d=n)}a+=i}f(t.verbs.length),i.length>1&&i.sort((e,t)=>t[3]-e[3]);for(let[e,a,o]of i){let i=o;for(let o=e;o<a;o++)switch(t.verbs[o]){case I.M:n.moveTo(r[i],r[i+1]),i+=2;break;case I.L:n.lineTo(r[i],r[i+1]),i+=2;break;case I.Q:n.quadraticCurveTo(r[i],r[i+1],r[i+2],r[i+3]),i+=4;break;case I.C:n.bezierCurveTo(r[i],r[i+1],r[i+2],r[i+3],r[i+4],r[i+5]),i+=6;break;case I.Z:n.closePath()}}return n}function Ge(e,t,n){let r=L(e),i=t.length%2?t.concat(t):t,a=i.reduce((e,t)=>e+t,0),o=new D;if(a<=0)return We(e);let s=[],c=[],l=0,u=0,d=0,f=0,p=r.pts,m=0,h=(e,t)=>{for(let n=1;n<=e;n++){let r=t(n/e);c.push(r[0],r[1])}};for(let e=0;e<r.verbs.length;e++){let t=r.verbs[e];if(t===I.M)c.length>2&&s.push(c),d=l=p[m],f=u=p[m+1],c=[d,f],m+=2;else if(t===I.L)d=p[m],f=p[m+1],c.push(d,f),m+=2;else if(t===I.Q){let e=d,t=f,[n,r,i,a]=[p[m],p[m+1],p[m+2],p[m+3]];h(8,o=>{let s=1-o;return[s*s*e+2*s*o*n+o*o*i,s*s*t+2*s*o*r+o*o*a]}),d=i,f=a,m+=4}else if(t===I.C){let e=d,t=f,[n,r,i,a,o,s]=[p[m],p[m+1],p[m+2],p[m+3],p[m+4],p[m+5]];h(12,c=>{let l=1-c;return[l*l*l*e+3*l*l*c*n+3*l*c*c*i+c*c*c*o,l*l*l*t+3*l*l*c*r+3*l*c*c*a+c*c*c*s]}),d=o,f=s,m+=6}else t===I.Z&&(c.push(l,u),d=l,f=u)}c.length>2&&s.push(c);for(let e of s){let t=0,r=i[0],s=!0,c=(n%a+a)%a;for(;c>0;)c>=r?(c-=r,t=(t+1)%i.length,r=i[t],s=!s):(r-=c,c=0);s&&o.moveTo(e[0],e[1]);for(let n=2;n<e.length;n+=2){let a=e[n-2],c=e[n-1],l=e[n],u=e[n+1],d=Math.hypot(l-a,u-c);for(;d>0;){let e=Math.min(r,d),n=e/d,f=a+(l-a)*n,p=c+(u-c)*n;s&&o.lineTo(f,p),a=f,c=p,d-=e,r-=e,r<=1e-9&&(t=(t+1)%i.length,r=i[t],s=!s,s&&o.moveTo(a,c))}}}return o}function Ke(e,t){return{...t,width:e.strokeWidth,cap:e.linecap,join:e.linejoin,miterLimit:e.miter,alignment:.5}}var qe=(e,t)=>`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},${e[3]*t})`,Je=e=>e.split(`,`).map(e=>e.trim().replace(/^['"]|['"]$/g,``)).filter(Boolean);function Ye(e,t,n){let r=e.text;return[r.content,r.x,r.y,t.fontFamily,t.fontSize,t.fontWeight,t.textAnchor,t.baseline,t.letterSpacing,t.paintOrder,JSON.stringify(t.fill),t.fillOpacity,JSON.stringify(t.stroke),t.strokeOpacity,t.strokeWidth,t.linejoin,t.visible,n].join(`|`)}function Xe(e,t,n,r,i,a=!1){for(let t of e.removeChildren())t.destroy();let o=t.text;if(!o.content||!n.visible)return;let s=Je(n.fontFamily),c={fontFamily:s,fontSize:n.fontSize,fontWeight:n.fontWeight,letterSpacing:n.letterSpacing,padding:Math.ceil(n.strokeWidth+2)},l=a?[1,1,1,1]:n.fill&&n.fill.kind===`color`?n.fill.c:null;!a&&n.fill&&n.fill.kind!==`color`&&X(i,`textPaintFallback`);let u=!a&&n.stroke&&n.strokeWidth>0?n.stroke.kind===`color`?n.stroke.c:[0,0,0,1]:null,d=l?qe(l,n.fillOpacity):`rgba(0,0,0,0)`,f=u?{color:qe(u,n.strokeOpacity),width:n.strokeWidth,join:n.linejoin}:void 0,p=[];!f||n.paintOrder.startsWith(`stroke`)?p.push({...c,fill:d,stroke:f}):p.push({...c,fill:d},{...c,fill:`rgba(0,0,0,0)`,stroke:f});let m=n.textAnchor===`middle`?.5:+(n.textAnchor===`end`),h=n.baseline===`central`||n.baseline===`middle`;for(let t of p){let a=new N(t),c=new Ve({text:o.content,style:a,resolution:r});if(h)c.anchor.set(m,.5),c.position.set(o.x,o.y);else{let e=j.measureFont(a.fontStyle+` `+a.fontWeight+` `+n.fontSize+`px `+s.map(e=>`"${e}"`).join(`,`));c.anchor.set(m,0),c.position.set(o.x,o.y-e.ascent-a.padding)}e.addChild(c),X(i,`textObjects`)}}var Ze=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Qe=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,$e=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,et=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,tt=Object.defineProperty,nt=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rt=(e,t,n)=>(nt(e,typeof t==`symbol`?t:t+``,n),n),it=class e extends E{constructor(t){t={...e.DEFAULT_OPTIONS,...t};let n=t.distance??10,r=t.quality??.1,i=v.from({vertex:{source:Qe,entryPoint:`mainVertex`},fragment:{source:et,entryPoint:`mainFragment`}}),a=f.from({vertex:Ze,fragment:$e.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:`glow-filter`});super({gpuProgram:i,glProgram:a,resources:{glowUniforms:{uDistance:{value:n,type:`f32`},uStrength:{value:[t.innerStrength,t.outerStrength],type:`vec2<f32>`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:t.alpha,type:`f32`},uQuality:{value:r,type:`f32`},uKnockout:{value:t?.knockout??!1?1:0,type:`f32`}}},padding:n}),rt(this,`uniforms`),rt(this,`_color`),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new u,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=+!!e}};rt(it,`DEFAULT_OPTIONS`,{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var at=it,ot=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,st=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,ct=Object.defineProperty,lt=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t,n)=>(lt(e,typeof t==`symbol`?t:t+``,n),n),ut=class e extends E{constructor(...t){let n=t[0]??{};typeof n==`number`&&(s(`6.0.0`,`OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }`),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...e.DEFAULT_OPTIONS,...n};let r=n.quality??.1,i=v.from({vertex:{source:Qe,entryPoint:`mainVertex`},fragment:{source:st,entryPoint:`mainFragment`}}),a=f.from({vertex:Ze,fragment:ot.replace(/\$\{ANGLE_STEP\}/,e.getAngleStep(r).toFixed(7)),name:`outline-filter`});super({gpuProgram:i,glProgram:a,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:`vec2<f32>`},uColor:{value:new Float32Array(3),type:`vec3<f32>`},uAlpha:{value:n.alpha,type:`f32`},uAngleStep:{value:0,type:`f32`},uKnockout:{value:+!!n.knockout,type:`f32`}}}}),Z(this,`uniforms`),Z(this,`_thickness`),Z(this,`_quality`),Z(this,`_color`),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=e.getAngleStep(r),this._color=new u,this.color=n.color??0,Object.assign(this,n)}apply(e,t,n,r){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,n,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,n,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=e.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=+!!e}};Z(ut,`DEFAULT_OPTIONS`,{thickness:1,color:0,alpha:1,quality:.1,knockout:!1}),Z(ut,`MIN_SAMPLES`,1),Z(ut,`MAX_SAMPLES`,100);var dt=ut,Q=(e,t=0)=>{let n=parseFloat(e??``);return isFinite(n)?n:t},ft=e=>Math.round(e[0]*255)<<16|Math.round(e[1]*255)<<8|Math.round(e[2]*255),$=null;function pt(){if($)return $;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createImageData(256,256),r=1234567,i=()=>(r=r*1103515245+12345&2147483647)/2147483647,a=[new Float32Array(1024),new Float32Array(1024)];for(let e of a)for(let t=0;t<e.length;t++)e[t]=i();let o=e=>e*e*(3-2*e);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let r=t/256*32,i=e/256*32,s=Math.floor(r),c=Math.floor(i),l=o(r-s),u=o(i-c),d=(e,t,n)=>e[n%32*32+t%32],f=e=>{let t=d(e,s,c),n=d(e,s+1,c),r=d(e,s,c+1),i=d(e,s+1,c+1);return(t+(n-t)*l)*(1-u)+(r+(i-r)*l)*u},p=(e*256+t)*4;n.data[p]=f(a[0])*255,n.data[p+1]=f(a[1])*255,n.data[p+2]=128,n.data[p+3]=255}return t.putImageData(n,0,0),$=y.from(e),$.source.style.addressMode=`repeat`,$.source.style.update(),$}function mt(e,t,n,r){let i=new Set(e.prims.map(e=>e.type)),a=t=>e.prims.find(e=>e.type===t),o=a(`feFlood`),s=o?ue(o.attrs[`flood-color`]??`#000`)??[0,0,0,1]:null,c=o?Q(o.attrs[`flood-opacity`],1):1;if(X(n,`filters`),i.has(`feTurbulence`)&&i.has(`feDisplacementMap`)){let e=a(`feDisplacementMap`),n=new ee(pt()),i=Q(a(`feTurbulence`).attrs.baseFrequency?.split(/[\s,]+/)[0],.05);n.scale.set(1/Math.max(.001,i)/8),n.renderable=!1;let o=new Te({sprite:n,scale:Q(e.attrs.scale,4)*t});return X(r,`filter:displacement(noise-tex)`),{filters:[o],sprite:n,kind:`displace`}}if(i.has(`feMorphology`)){let e=Q(a(`feMorphology`).attrs.radius?.split(/[\s,]+/)[0],1),n=[new dt({thickness:Math.max(.5,e*t),color:s?ft(s):0,alpha:c*(s?.[3]??1),quality:.15})];return i.has(`feGaussianBlur`)&&n.push(new Ce({strength:Q(a(`feGaussianBlur`).attrs.stdDeviation,1)*t,quality:2})),X(r,`filter:morphology→outline`),{filters:n,kind:`outline`}}if(i.has(`feGaussianBlur`)){let e=Q(a(`feGaussianBlur`).attrs.stdDeviation?.split(/[\s,]+/)[0],1);if(i.has(`feMerge`)||o){let n=new at({distance:Math.max(2,Math.round(e*t*2.5)),outerStrength:1.5,innerStrength:0,color:s?ft(s):16777215,alpha:c,quality:.2});return X(r,`filter:blur+merge→glow`),{filters:[n],kind:`glow`}}return{filters:[new Ce({strength:e*t*2,quality:3})],kind:`blur`}}if(i.has(`feComponentTransfer`)){let e=a(`feComponentTransfer`).children.find(e=>e.type===`feFuncA`),t=new A;if(e){let n=(e.attrs.tableValues??``).split(/[\s,]+/).map(Number).filter(isFinite),r=Math.max(1,n.length),i=n.findIndex(e=>e>.5);t.matrix=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,8,-8*(i<0?1:i/r)+.5]}return X(r,`filter:componentTransfer→colorMatrix`),{filters:[t],kind:`alphaRamp`}}if(i.has(`feColorMatrix`)){let e=new A,t=a(`feColorMatrix`);if((t.attrs.type??`matrix`)===`matrix`){let n=(t.attrs.values??``).split(/[\s,]+/).map(Number);n.length===20&&(e.matrix=n)}return{filters:[e],kind:`colorMatrix`}}return X(r,`filter:unsupported`),null}var ht=e=>(e.clip?`c`:``)+(e.mask?`m`:``),gt=(e,t)=>!z.has(e.tag)&&(t||!e.inDef),_t=e=>{let t=L(e),n=1/0,r=1/0,i=-1/0,a=-1/0;for(let e=0;e<t.pts.length;e+=2){let o=t.pts[e],s=t.pts[e+1];o<n&&(n=o),o>i&&(i=o),s<r&&(r=s),s>a&&(a=s)}return{x:n,y:r,w:Math.max(1e-6,i-n),h:Math.max(1e-6,a-r)}};function vt(r){let i,a,s,c=new T,l=null,u,d=0,f={},p={},m=r.get(`opt`)===`0`?0:1,h=parseInt(r.get(`cacheMs`)??`500`,10)||500,g=0,_=0,v=parseInt(r.get(`cacheMin`)??`40`,10)||40,y=r.get(`iso`)===`1`,b=r.get(`batch`)??`auto`,S=r.get(`renderer`)===`webgpu`?`webgpu`:`webgl`,C=r.get(`finish`)===`1`,w=r.get(`aa`)!==`0`,E=r.get(`dbg`)??``,te=r.get(`log`)===`1`?window.__pixiLog=[]:null,ne=new Uint8Array(4),D=1,O=0,se=0,ce=0,k=!1,A=new Map,j=(e,t)=>{let n=A.get(e);if(n)X(f,`ctxShared`);else{let r=performance.now(),i=t(),a=performance.now();s.graphicsContext.updateGpuContext(i),X(f,`ctxBuildMs`,a-r),X(f,`tessMs`,performance.now()-a),X(f,`ctxBuilt`),n={ctx:i,refs:0},A.set(e,n)}return n.refs++,n.ctx},M=e=>{if(!e)return;let t=A.get(e);t&&--t.refs<=0&&(A.delete(e),t.ctx.destroy(!1))},N=(e,t)=>{let n=e=>e&&e.kind===`ref`&&a.byId.get(e.id)?.tag===`pattern`?`~`+Math.round(t*4):``;return[u.key(e.fill),n(e.fill),e.fillOpacity,e.fillRule,u.key(e.stroke),n(e.stroke),e.strokeOpacity,e.strokeWidth,e.linecap,e.linejoin,e.miter,e.dash?e.dash.join(`,`):``,e.dashOffset,e.paintOrder[0]].join(`|`)},P=(e,t,n)=>{let r=new ae;r.batchMode=b;let i=u.style(t.fill,t.fillOpacity,n),a=t.stroke&&t.strokeWidth>0?u.style(t.stroke,t.strokeOpacity,n):null,o=We(e),s=()=>{i&&r.path(o).fill(i)},c=()=>{a&&(t.dash&&t.dash.some(e=>e>0)?(r.path(Ge(e,t.dash,t.dashOffset)),X(p,`dash:emulated`)):r.path(o),r.stroke(Ke(t,a)))};return t.paintOrder.startsWith(`stroke`)?(c(),s()):(s(),c()),r},ue,I=new Set([`path`,`rect`,`circle`,`ellipse`,`line`,`polygon`,`polyline`]),L=(e,t)=>{let n=e.tag===`use`?`use`:e.tag===`text`?`text`:I.has(e.tag)?`path`:`group`,r=ht(e),i=n===`path`?new le(ue):new T,a=i,o=null;return r&&(a=new T,a.addChild(i)),r===`cm`?(o=new T,a.removeChild(i),o.addChild(i),a.addChild(o)):r===`c`&&(o=a),{n:e,ver:-1,obj:a,body:i,wrapped:r,clipHost:o,clipObj:null,clipTex:null,kind:n,kids:[],via:t,ctxKey:``,effKey:``,maskObj:null,maskTex:null,maskOcc:null,filterSprite:null,changedAt:g,cached:!1,cacheRes:0,size:1,wm:R}},z=e=>{e.maskObj&&=(e.obj.mask=null,e.maskObj.destroy({children:!0}),null),e.maskTex&&=(e.maskTex.destroy(!0),null),e.maskOcc&&=(B(e.maskOcc),null)},pe=e=>{e.clipObj&&=(e.clipHost.mask=null,e.clipObj.destroy({children:!0}),null),e.clipTex&&=(e.clipTex.destroy(!0),null)},B=e=>{for(let t of e.kids)B(t);e.kids=[],e.kind===`path`&&M(e.ctxKey),e.ctxKey=``,z(e),pe(e),e.cached&&O--,e.obj.destroy({children:!0})},V=e=>i.dpr*D*F(e.wm),he=e=>{let t=e.n,n=a.clipPath(t.clip);if(!n)return;let r=n.units===`objectBoundingBox`&&t.d?_t(t.d):null,i=r?[r.w,0,0,r.h,r.x,r.y]:R,o=n.transform?de(i,n.transform):i,s=[],c=[],l=(e,t)=>{if(!e.display)return;let n=e.transform?de(t,e.transform):t;if(e.tag===`use`&&e.href){let t=a.byId.get(e.href);t&&l(t,n);return}if(e.tag===`text`){c.push({n:e,M:n});return}e.d&&s.push({d:e.d,M:n});for(let t of e.children)l(t,n)};for(let e of n.node.children)l(e,o);let u=new ae;for(let e of s){let t=We(e.d);e.M!==R&&t.transform(new x(e.M[0],e.M[1],e.M[2],e.M[3],e.M[4],e.M[5])),u.path(t).fill(16777215)}let d=new le(u);if(d._ownedContext=u,X(f,`clipBuilt`),!c.length){e.clipHost.addChildAt(d,0),e.clipHost.mask=d,e.clipObj=d;return}X(p,`clip:text→alphaMask`);let m=new T;m.addChild(d);let h=a.style(n.node);for(let e of c){let t=new T;t.setFromMatrix(new x(e.M[0],e.M[1],e.M[2],e.M[3],e.M[4],e.M[5])),Xe(t,e.n,a.styleUnder(e.n,h),1,f,!0),m.addChild(t)}ge(e,m,`alpha`,!0),m.destroy({children:!0})},ge=(e,t,n,r)=>{let i=performance.now(),a=t.getLocalBounds(),c=Math.max(1,a.width),l=Math.max(1,a.height),u=Math.min(V(e),4096/Math.max(c,l)),d=s.generateTexture({target:t,resolution:u,antialias:!0,frame:new o(a.x,a.y,c,l)}),p=new ee(d);p.position.set(a.x,a.y);let m=r?e.clipHost:e.obj;m.addChildAt(p,0),m.setMask({mask:p,channel:n}),r?(e.clipObj=p,e.clipTex=d):(e.maskObj=p,e.maskTex=d),X(f,`maskRenderMs`,performance.now()-i),X(f,`maskRendered`)},_e=e=>{let t=a.mask(e.n.mask);if(!t){z(e);return}if(!e.maskOcc||e.maskOcc.n!==t.node){z(e);let n=L(t.node,!0);n.kind=`group`,e.maskOcc=n,X(p,`mask:luminance→redChannelSprite`)}let n=e.maskOcc;H(n,a.style(t.node),R,!1);let r=performance.now(),i=n.obj.getLocalBounds(),o=Math.max(1,Math.ceil(i.width)),c=Math.max(1,Math.ceil(i.height)),l=be(Math.min(V(e),4096/Math.max(o,c))),u=e.maskTex;(!u||u.width!==o||u.height!==c||u.source.resolution!==l)&&(u?.destroy(!0),u=re.create({width:o,height:c,resolution:l,antialias:!0}),e.maskTex=u,X(f,`maskTexNew`)),s.render({container:n.obj,target:u,clear:!0,transform:new x(1,0,0,1,-i.x,-i.y)});let d=e.maskObj;d?d.texture!==u&&(d.texture=u):(d=new ee(u),e.obj.addChildAt(d,0),e.obj.setMask({mask:d,channel:`red`}),e.maskObj=d),d.position.set(i.x,i.y),X(f,`maskRenderMs`,performance.now()-r),X(f,`maskRendered`)},ve=(e,t,n)=>{let r=e.n,i=e.effKey.split(``);if(n[0]!==i[0]&&(pe(e),r.clip&&e.clipHost&&!E.includes(`noclip`)&&he(e)),n[1]!==i[1]&&(r.mask&&e.wrapped.includes(`m`)&&!E.includes(`nomask`)?_e(e):z(e)),n[2]!==i[2]||n[3]!==i[3]){let n=[];if(r.filter){let t=a.filter(r.filter),i=t?mt(t,D*F(e.wm),f,p):null;i&&n.push(...i.filters)}t&&n.push(new me({alpha:r.opacity}));let i=e.obj.filters;if(e.obj.filters=n.length?n:null,Array.isArray(i))for(let e of i)e.destroy();e.obj.blendMode=r.blend??`inherit`,r.blend&&r.blend!==`screen`&&r.blend!==`multiply`&&X(p,`blend:`+r.blend)}},ye=(e,t)=>{t?e.setFromMatrix(new x(t[0],t[1],t[2],t[3],t[4],t[5])):(e.position.x||e.position.y||e.scale.x!==1||e.scale.y!==1||e.rotation||e.skew.x||e.skew.y)&&e.setFromMatrix(new x)},be=e=>Math.min(4,Math.max(.5,Math.round(e*4)/4));function H(e,t,n,r){let i=e.n;if(!r&&e.ver===i.treeVer)return;e.ver=i.treeVer,e.changedAt=g,X(f,`visited`),e.cached&&(e.obj.cacheAsTexture(!1),e.cached=!1,O--,X(f,`uncached`)),e.wm=i.transform?de(n,i.transform):n,ye(e.obj,i.transform);let o=i.display&&i.opacity>0;if(e.obj.visible=o,!o)return;let s=t?a.styleUnder(i,t):a.style(i),c=y&&i.opacity<1&&e.kind!==`path`&&i.children.length>1,l=e=>e?e+`@`+(a.byId.get(e)?.treeVer??0):``,u=[l(i.clip)+(i.clip&&i.d?`#`+i.d.length:``),l(i.mask),i.filter?l(i.filter)+`~`+Math.round(Math.log2(D*F(e.wm))*4):``,`${i.blend}|${c}`],d=u.join(``);if(d!==e.effKey&&(ve(e,c,u),e.effKey=d),c){e.obj.alpha=1;let t=Array.isArray(e.obj.filters)?e.obj.filters.find(e=>e instanceof me):void 0;t&&(t.alpha=i.opacity)}else e.obj.alpha=i.opacity;if(e.kind===`path`){let t=e.body;if(!i.d||!s.visible){t.visible=!1;return}t.visible=!0;let n=V(e),r=i.d+`#`+N(s,n);r!==e.ctxKey&&(t.context=j(r,()=>P(i.d,s,n)),M(e.ctxKey),e.ctxKey=r);return}if(e.kind===`text`){if(!i.text)return;let t=be(V(e)),n=Ye(i,s,t);n!==e.ctxKey&&(Xe(e.body,i,s,t,f),e.ctxKey=n);return}if(e.kind===`use`){let t=i.href?a.byId.get(i.href):null,n=e.kids[0];if(!t){n&&(B(n),e.kids=[]);return}(!n||n.n!==t)&&(n&&B(n),n=L(t,!0),e.kids=[n],e.body.addChild(n.obj)),H(n,s,e.wm,r||(i.dirty&(fe.STYLE|fe.NEW))!==0),e.size=1+n.size;return}let p=i.children.filter(t=>gt(t,e.via)),m=p.length===e.kids.length;if(m)for(let t=0;t<p.length;t++){let n=e.kids[t];if(n.n!==p[t]||n.wrapped!==ht(n.n)){m=!1;break}}if(!m){let t=new Map;for(let n of e.kids)t.set(n.n,n);let n=[];for(let r of p){let i=t.get(r);i&&i.wrapped===ht(r)?t.delete(r):i=L(r,e.via),n.push(i)}for(let e of t.values())B(e);e.body.removeChildren();for(let t of n)e.body.addChild(t.obj);e.kids=n,X(f,`reconciled`)}let h=1,_=e.via?s:void 0;for(let t of e.kids)H(t,_,e.wm,r),h+=t.size;e.size=h}let xe=e=>{if(!e.obj.visible||e.kind===`path`||e.kind===`text`)return;let t=e.obj.worldTransform,n=Math.sqrt(Math.abs(t.a*t.d-t.b*t.c))*i.dpr;if(e.cached){if(n/e.cacheRes>1.34||n/e.cacheRes<.74)e.obj.cacheAsTexture(!1),e.cached=!1,O--,X(f,`recache`);else return}if(e!==l&&g-e.changedAt>=h&&e.size>=v){let t=e.obj.getLocalBounds(),r=Math.max(1,t.width,t.height),i=Math.max(.25,Math.min(n*2,4096/r));e.obj.cacheAsTexture({resolution:i,antialias:!0}),e.cached=!0,e.cacheRes=i,O++,X(f,`cachedNew`);return}for(let t of e.kids)xe(t)},Se=()=>{l&&(c.removeChild(l.obj),B(l)),l=L(a.root,!1),l.kind=`group`,c.addChild(l.obj),H(l,void 0,R,!0)},U=null,Ce=()=>{let e=performance.now(),t=new XMLSerializer().serializeToString(a.svg),n=performance.now(),r=new le,i=``;try{r.svg(t)}catch(e){i=String(e)}let o=performance.now();c.addChild(r),U={serializeMs:Math.round(n-e),svgParseMs:Math.round(o-n),chars:t.length,instructions:r.context.instructions.length,err:i}},W=!1,G=!1,we=()=>{s.render({container:c}),W||(W=!0,requestAnimationFrame(()=>{W=!1}))},Te=()=>{G&&(G=!1,W=!1,we())};return{name:`pixi`,async init(o){i=o,a=o.mirror,s=await oe({preference:S,canvas:o.canvas,width:o.width,height:o.height,resolution:o.dpr,autoDensity:!1,antialias:w,background:16777215,powerPreference:`high-performance`}),ue=new ae,u=new Ue(a,()=>f),u.flatTone=E.includes(`flattone`),u.noGrad=E.includes(`nograd`),D=Math.min(o.width/t,o.height/n),c.scale.set(D);let l=o.canvas;l.addEventListener(`webglcontextlost`,()=>{se++}),l.addEventListener(`webglcontextrestored`,()=>{ce++,k=!0});let d=parseFloat(r.get(`loseCtx`)??``);if(d>0&&s.name===`webgl`&&setTimeout(()=>s.context.forceContextLoss(),d*1e3),r.get(`import`)===`svg`&&Ce(),r.get(`import`)===`essentials`){let t=performance.now();try{let n=await e(()=>import(`./svg.es-BQvTXwvq.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url),r=performance.now(),i=new n.SVGScene(a.svg.cloneNode(!0));c.addChild(i),U={lib:`@pixi-essentials/svg`,importMs:Math.round(r-t),buildMs:Math.round(performance.now()-r)}}catch(e){U={lib:`@pixi-essentials/svg`,err:String(e).slice(0,300)}}}},render(){f={},d++;let e=performance.now();if(g=e,k&&l){k=!1;let e=t=>{if(t.cached&&(t.obj.cacheAsTexture(!1),t.cached=!1,O--),t.maskOcc||t.clipTex){let e=t.effKey.split(``);t.maskOcc&&(e[1]=``),t.clipTex&&(e[0]=``),t.effKey=e.join(``)}for(let n of t.kids)e(n)};e(l),H(l,void 0,R,!0)}U||(a.full||!l?Se():H(l,void 0,R,!1),m===1&&l&&d>3&&g-_>200&&(_=g,xe(l)));let t=performance.now();W?(X(f,`drawDeferred`),G||(G=!0,requestAnimationFrame(Te))):we();let n=performance.now();if(C){let e=s.gl;e&&(e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,ne),f.gpuWaitMs=performance.now()-n)}return f.cached=O,te&&te.push({f:d,tr:+(t-e).toFixed(1),sub:+(n-t).toFixed(1),...f}),{translateMs:t-e,submitMs:n-t,counters:f}},info:()=>({verts:[...A.values()].reduce((e,t)=>e+s.graphicsContext.getGpuContext(t.ctx).geometryData.vertices.length/2,0),api:s?.name,pixi:ie,opt:m,iso:y,batchMode:b,cacheMs:h,cacheMin:v,cached:O,contexts:A.size,ctxLost:se,ctxRestored:ce,fallbacks:p,...U?{import:U}:{},maxTex:s?.gl?.getParameter(3379)}),destroy(){l&&B(l),l=null,u?.destroy(),s?.destroy()}}}export{vt as create};