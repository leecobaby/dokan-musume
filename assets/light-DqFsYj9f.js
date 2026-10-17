import{f as e}from"./CanvasPool-B4Lq94db.js";import"./lib-BfefGiwE.js";import{t}from"./Filter-13JcV7ZJ.js";var n=`in vec2 aPosition;
out vec2 vTextureCoord;
uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
vec4 filterVertexPosition(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  return vec4(position, 0.0, 1.0);
}
void main(void) {
  gl_Position = filterVertexPosition();
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
}`,r=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec2 uDir;      // towards the light, filter px
uniform vec3 uTop;      // multiply colour at the top of the layer
uniform vec3 uBot;      // … at the bottom
uniform vec3 uRim;      // rim colour
uniform float uGrade;   // 0..1
uniform float uRimAmt;  // 0..1.5
void main(void) {
  vec4 c = texture(uTexture, vTextureCoord);
  if (c.a <= 0.002) { finalColor = c; return; }
  float yN = clamp(vTextureCoord.y * uInputSize.y / max(1.0, uOutputFrame.w), 0.0, 1.0);
  vec3 g = mix(uTop, uBot, smoothstep(0.25, 1.0, yN));
  vec3 rgb = c.rgb * mix(vec3(1.0), g, uGrade);
  vec2 o = uDir * uInputSize.zw;
  float a2 = 0.5 * texture(uTexture, vTextureCoord + o).a + 0.5 * texture(uTexture, vTextureCoord + o * 0.5).a;
  float rim = c.a * (1.0 - a2);
  rgb += uRim * rim * uRimAmt * c.a;
  finalColor = vec4(min(rgb, vec3(c.a)), c.a);
}`,i=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255],a=class extends t{u;constructor(){let t={uDir:{value:[7,2],type:`vec2<f32>`},uTop:{value:i(16767408),type:`vec3<f32>`},uBot:{value:i(10783936),type:`vec3<f32>`},uRim:{value:i(16757340),type:`vec3<f32>`},uGrade:{value:.3,type:`f32`},uRimAmt:{value:.8,type:`f32`}};super({glProgram:e.from({vertex:n,fragment:r,name:`sunset-light`}),resources:{lightUniforms:t}}),this.u=this.resources.lightUniforms.uniforms}set(e){e.grade!==void 0&&(this.u.uGrade=e.grade),e.rim!==void 0&&(this.u.uRimAmt=e.rim),e.dir&&(this.u.uDir=e.dir),e.top!==void 0&&(this.u.uTop=i(e.top)),e.bot!==void 0&&(this.u.uBot=i(e.bot)),e.rimColor!==void 0&&(this.u.uRim=i(e.rimColor))}},o=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;
uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uC01;      // ring 0 / 1 centres (page units)
uniform vec4 uC23;      // ring 2 / 3 centres
uniform vec4 uR;        // radii (page units; < 0 = not started)
uniform vec4 uStep;     // saturation step per ring
uniform vec2 uKF;       // render px per page unit, feather (page units)
uniform vec2 uOff;      // render px of the page origin (a page view offset inside the canvas)
float cov(vec2 p, vec2 c, float r) { return r <= 0.0 ? 0.0 : 1.0 - smoothstep(r - uKF.y, r + uKF.y, distance(p, c)); }
void main(void) {
  vec4 c = texture(uTexture, vTextureCoord);
  vec2 p = (vTextureCoord * uInputSize.xy + uOutputFrame.xy - uOff) / uKF.x;
  float c0 = cov(p, uC01.xy, uR.x);
  float sat = c0 * uStep.x + cov(p, uC01.zw, uR.y) * uStep.y + cov(p, uC23.xy, uR.z) * uStep.z + cov(p, uC23.zw, uR.w) * uStep.w;
  sat = clamp(sat / max(c0, 1e-3), 0.0, 1.0);
  float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
  finalColor = vec4(mix(vec3(g), c.rgb, sat), c.a) * c0;
}`,s=class extends t{u;constructor(t=[.35,.35,.3,0]){let r={uC01:{value:[0,0,0,0],type:`vec4<f32>`},uC23:{value:[0,0,0,0],type:`vec4<f32>`},uR:{value:[-1,-1,-1,-1],type:`vec4<f32>`},uStep:{value:[t[0]??1,t[1]??0,t[2]??0,t[3]??0],type:`vec4<f32>`},uKF:{value:[1,60],type:`vec2<f32>`},uOff:{value:[0,0],type:`vec2<f32>`}};super({glProgram:e.from({vertex:n,fragment:o,name:`ring-burst`}),resources:{ringUniforms:r}}),this.u=this.resources.ringUniforms.uniforms}set(e,t,n,r=[0,0]){let i=[-1,-1,-1,-1],a=[0,0,0,0,0,0,0,0];e.slice(0,4).forEach((e,t)=>{i[t]=e.r,a[t*2]=e.c[0],a[t*2+1]=e.c[1]}),this.u.uR=i,this.u.uC01=a.slice(0,4),this.u.uC23=a.slice(4),this.u.uKF=[t,n],this.u.uOff=r}};export{a as n,s as t};