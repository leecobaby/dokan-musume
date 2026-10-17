import{D as e,h as t}from"./CanvasPool-B4Lq94db.js";import"./lib-BfefGiwE.js";import{n,t as r}from"./isWebGPUSupported-BCCYneJm.js";var i=class extends e{constructor(e){super({...e,mipLevelCount:e.resource.length}),this.uploadMethodId=`compressed`}},a;function o(){if(a)return a;let e=t.get().createCanvas(1,1).getContext(`webgl`);return e?(a=[...e.getExtension(`EXT_texture_compression_bptc`)?[`bc6h-rgb-ufloat`,`bc6h-rgb-float`,`bc7-rgba-unorm`,`bc7-rgba-unorm-srgb`]:[],...e.getExtension(`WEBGL_compressed_texture_s3tc`)?[`bc1-rgba-unorm`,`bc2-rgba-unorm`,`bc3-rgba-unorm`]:[],...e.getExtension(`WEBGL_compressed_texture_s3tc_srgb`)?[`bc1-rgba-unorm-srgb`,`bc2-rgba-unorm-srgb`,`bc3-rgba-unorm-srgb`]:[],...e.getExtension(`EXT_texture_compression_rgtc`)?[`bc4-r-unorm`,`bc4-r-snorm`,`bc5-rg-unorm`,`bc5-rg-snorm`]:[],...e.getExtension(`WEBGL_compressed_texture_etc`)?[`etc2-rgb8unorm`,`etc2-rgb8unorm-srgb`,`etc2-rgba8unorm`,`etc2-rgba8unorm-srgb`,`etc2-rgb8a1unorm`,`etc2-rgb8a1unorm-srgb`,`eac-r11unorm`,`eac-rg11unorm`]:[],...e.getExtension(`WEBGL_compressed_texture_astc`)?`astc-4x4-unorm.astc-4x4-unorm-srgb.astc-5x4-unorm.astc-5x4-unorm-srgb.astc-5x5-unorm.astc-5x5-unorm-srgb.astc-6x5-unorm.astc-6x5-unorm-srgb.astc-6x6-unorm.astc-6x6-unorm-srgb.astc-8x5-unorm.astc-8x5-unorm-srgb.astc-8x6-unorm.astc-8x6-unorm-srgb.astc-8x8-unorm.astc-8x8-unorm-srgb.astc-10x5-unorm.astc-10x5-unorm-srgb.astc-10x6-unorm.astc-10x6-unorm-srgb.astc-10x8-unorm.astc-10x8-unorm-srgb.astc-10x10-unorm.astc-10x10-unorm-srgb.astc-12x10-unorm.astc-12x10-unorm-srgb.astc-12x12-unorm.astc-12x12-unorm-srgb`.split(`.`):[]],a):[]}var s;async function c(){if(s)return s;let e=await t.get().getNavigator().gpu.requestAdapter();return s=[...e.features.has(`texture-compression-bc`)?[`bc1-rgba-unorm`,`bc1-rgba-unorm-srgb`,`bc2-rgba-unorm`,`bc2-rgba-unorm-srgb`,`bc3-rgba-unorm`,`bc3-rgba-unorm-srgb`,`bc4-r-unorm`,`bc4-r-snorm`,`bc5-rg-unorm`,`bc5-rg-snorm`,`bc6h-rgb-ufloat`,`bc6h-rgb-float`,`bc7-rgba-unorm`,`bc7-rgba-unorm-srgb`]:[],...e.features.has(`texture-compression-etc2`)?[`etc2-rgb8unorm`,`etc2-rgb8unorm-srgb`,`etc2-rgb8a1unorm`,`etc2-rgb8a1unorm-srgb`,`etc2-rgba8unorm`,`etc2-rgba8unorm-srgb`,`eac-r11unorm`,`eac-r11snorm`,`eac-rg11unorm`,`eac-rg11snorm`]:[],...e.features.has(`texture-compression-astc`)?`astc-4x4-unorm.astc-4x4-unorm-srgb.astc-5x4-unorm.astc-5x4-unorm-srgb.astc-5x5-unorm.astc-5x5-unorm-srgb.astc-6x5-unorm.astc-6x5-unorm-srgb.astc-6x6-unorm.astc-6x6-unorm-srgb.astc-8x5-unorm.astc-8x5-unorm-srgb.astc-8x6-unorm.astc-8x6-unorm-srgb.astc-8x8-unorm.astc-8x8-unorm-srgb.astc-10x5-unorm.astc-10x5-unorm-srgb.astc-10x6-unorm.astc-10x6-unorm-srgb.astc-10x8-unorm.astc-10x8-unorm-srgb.astc-10x10-unorm.astc-10x10-unorm-srgb.astc-12x10-unorm.astc-12x10-unorm-srgb.astc-12x12-unorm.astc-12x12-unorm-srgb`.split(`.`):[]],s}var l;async function u(){return l===void 0&&(l=await(async()=>{let e=await r(),t=n();if(e&&t){let e=await c(),t=o();return e.filter(e=>t.includes(e))}return e?await c():t?o():[]})()),l}var d=`r8unorm.r8snorm.r8uint.r8sint.r16uint.r16sint.r16float.rg8unorm.rg8snorm.rg8uint.rg8sint.r32uint.r32sint.r32float.rg16uint.rg16sint.rg16float.rgba8unorm.rgba8unorm-srgb.rgba8snorm.rgba8uint.rgba8sint.bgra8unorm.bgra8unorm-srgb.rgb9e5ufloat.rgb10a2unorm.rg11b10ufloat.rg32uint.rg32sint.rg32float.rgba16uint.rgba16sint.rgba16float.rgba32uint.rgba32sint.rgba32float.stencil8.depth16unorm.depth24plus.depth24plus-stencil8.depth32float.depth32float-stencil8`.split(`.`),f;async function p(){if(f!==void 0)return f;let e=await u();return f=[...d,...e],f}var m=`(function () {
    'use strict';

    const converters = {
      rgb8unorm: {
        convertedFormat: "rgba8unorm",
        convertFunction: convertRGBtoRGBA
      },
      "rgb8unorm-srgb": {
        convertedFormat: "rgba8unorm-srgb",
        convertFunction: convertRGBtoRGBA
      }
    };
    function convertFormatIfRequired(textureOptions) {
      const format = textureOptions.format;
      if (converters[format]) {
        const convertFunction = converters[format].convertFunction;
        const levelBuffers = textureOptions.resource;
        for (let i = 0; i < levelBuffers.length; i++) {
          levelBuffers[i] = convertFunction(levelBuffers[i]);
        }
        textureOptions.format = converters[format].convertedFormat;
      }
    }
    function convertRGBtoRGBA(levelBuffer) {
      const pixelCount = levelBuffer.byteLength / 3;
      const levelBufferWithAlpha = new Uint32Array(pixelCount);
      for (let i = 0; i < pixelCount; ++i) {
        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;
      }
      return new Uint8Array(levelBufferWithAlpha.buffer);
    }

    function createLevelBuffersFromKTX(ktxTexture) {
      const levelBuffers = [];
      for (let i = 0; i < ktxTexture.numLevels; i++) {
        const imageData = ktxTexture.getImageData(i, 0, 0);
        const levelBuffer = new Uint8Array(imageData.byteLength);
        levelBuffer.set(imageData);
        levelBuffers.push(levelBuffer);
      }
      return levelBuffers;
    }

    const glFormatToGPUFormatMap = {
      6408: "rgba8unorm",
      32856: "bgra8unorm",
      //
      32857: "rgb10a2unorm",
      33189: "depth16unorm",
      33190: "depth24plus",
      33321: "r8unorm",
      33323: "rg8unorm",
      33325: "r16float",
      33326: "r32float",
      33327: "rg16float",
      33328: "rg32float",
      33329: "r8sint",
      33330: "r8uint",
      33331: "r16sint",
      33332: "r16uint",
      33333: "r32sint",
      33334: "r32uint",
      33335: "rg8sint",
      33336: "rg8uint",
      33337: "rg16sint",
      33338: "rg16uint",
      33339: "rg32sint",
      33340: "rg32uint",
      33778: "bc2-rgba-unorm",
      33779: "bc3-rgba-unorm",
      34836: "rgba32float",
      34842: "rgba16float",
      35056: "depth24plus-stencil8",
      35898: "rg11b10ufloat",
      35901: "rgb9e5ufloat",
      35907: "rgba8unorm-srgb",
      // bgra8unorm-srgb
      36012: "depth32float",
      36013: "depth32float-stencil8",
      36168: "stencil8",
      36208: "rgba32uint",
      36214: "rgba16uint",
      36220: "rgba8uint",
      36226: "rgba32sint",
      36232: "rgba16sint",
      36238: "rgba8sint",
      36492: "bc7-rgba-unorm",
      36756: "r8snorm",
      36757: "rg8snorm",
      36759: "rgba8snorm",
      37496: "etc2-rgba8unorm",
      37808: "astc-4x4-unorm"
    };
    function glFormatToGPUFormat(glInternalFormat) {
      const format = glFormatToGPUFormatMap[glInternalFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported glInternalFormat: \${glInternalFormat}\`);
    }

    const vkFormatToGPUFormatMap = {
      23: "rgb8unorm",
      // VK_FORMAT_R8G8B8_UNORM
      37: "rgba8unorm",
      // VK_FORMAT_R8G8B8A8_UNORM
      43: "rgba8unorm-srgb"
      // VK_FORMAT_R8G8B8A8_SRGB
      // TODO add more!
    };
    function vkFormatToGPUFormat(vkFormat) {
      const format = vkFormatToGPUFormatMap[vkFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported VkFormat: \${vkFormat}\`);
    }

    function getTextureFormatFromKTXTexture(ktxTexture) {
      if (ktxTexture.classId === 2) {
        return vkFormatToGPUFormat(ktxTexture.vkFormat);
      }
      return glFormatToGPUFormat(ktxTexture.glInternalformat);
    }

    const gpuFormatToBasisTranscoderFormatMap = {
      "bc3-rgba-unorm": "BC3_RGBA",
      "bc7-rgba-unorm": "BC7_M5_RGBA",
      "etc2-rgba8unorm": "ETC2_RGBA",
      "astc-4x4-unorm": "ASTC_4x4_RGBA",
      // Uncompressed
      rgba8unorm: "RGBA32",
      rg11b10ufloat: "R11F_G11F_B10F"
    };
    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {
      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported transcoderFormat: \${transcoderFormat}\`);
    }

    const settings = {
      jsUrl: "",
      wasmUrl: ""
    };
    let basisTranscoderFormat;
    let basisTranscodedTextureFormat;
    let ktxPromise;
    async function getKTX() {
      if (!ktxPromise) {
        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;
        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;
        importScripts(absoluteJsUrl);
        ktxPromise = new Promise((resolve) => {
          LIBKTX({
            locateFile: (_file) => absoluteWasmUrl
          }).then((libktx) => {
            resolve(libktx);
          });
        });
      }
      return ktxPromise;
    }
    async function fetchKTXTexture(url, ktx) {
      const ktx2Response = await fetch(url);
      if (ktx2Response.ok) {
        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();
        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));
      }
      throw new Error(\`Failed to load KTX(2) texture: \${url}\`);
    }
    const preferredTranscodedFormat = [
      "bc7-rgba-unorm",
      "astc-4x4-unorm",
      "etc2-rgba8unorm",
      "bc3-rgba-unorm",
      "rgba8unorm"
    ];
    async function load(url) {
      const ktx = await getKTX();
      const ktxTexture = await fetchKTXTexture(url, ktx);
      let format;
      if (ktxTexture.needsTranscoding) {
        format = basisTranscodedTextureFormat;
        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];
        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);
        if (result !== ktx.ErrorCode.SUCCESS) {
          throw new Error("Unable to transcode basis texture.");
        }
      } else {
        format = getTextureFormatFromKTXTexture(ktxTexture);
      }
      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);
      const textureOptions = {
        width: ktxTexture.baseWidth,
        height: ktxTexture.baseHeight,
        format,
        mipLevelCount: ktxTexture.numLevels,
        resource: levelBuffers,
        alphaMode: "no-premultiply-alpha"
      };
      convertFormatIfRequired(textureOptions);
      return textureOptions;
    }
    async function init(jsUrl, wasmUrl, supportedTextures) {
      if (jsUrl) settings.jsUrl = jsUrl;
      if (wasmUrl) settings.wasmUrl = wasmUrl;
      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];
      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);
      await getKTX();
    }
    const messageHandlers = {
      init: async (data) => {
        const { jsUrl, wasmUrl, supportedTextures } = data;
        await init(jsUrl, wasmUrl, supportedTextures);
      },
      load: async (data) => {
        try {
          const textureOptions = await load(data.url);
          return {
            type: "load",
            url: data.url,
            success: true,
            textureOptions,
            transferables: textureOptions.resource?.map((arr) => arr.buffer)
          };
        } catch (e) {
          throw e;
        }
      }
    };
    self.onmessage = (async (messageEvent) => {
      const message = messageEvent.data;
      try {
        const response = await messageHandlers[message.type]?.(message);
        if (response) {
          self.postMessage(response, response.transferables);
        }
      } catch (err) {
        self.postMessage({
          type: "error",
          err,
          url: message.url
        });
      }
    });

})();
`,h=null,g=class{constructor(){h||=URL.createObjectURL(new Blob([m],{type:`application/javascript`})),this.worker=new Worker(h)}};g.revokeObjectURL=function(){h&&=(URL.revokeObjectURL(h),null)};var _={jsUrl:`https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.js`,wasmUrl:`https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.wasm`};function v(e){Object.assign(_,e)}var y,b={},x={};function S(e){return y||(y=new g().worker,y.onmessage=e=>{let{err:t,success:n,url:r,textureOptions:i}=e.data;if(t){x[r](t);return}n||console.warn(`Failed to load KTX texture`,r),b[r](i)},y.postMessage({type:`init`,jsUrl:_.jsUrl,wasmUrl:_.wasmUrl,supportedTextures:e})),y}function C(e,t){let n=S(t);return new Promise((t,r)=>{b[e]=t,x[e]=r,n.postMessage({type:`load`,url:e})})}var w=new URL(new URL(`libktx-CRuLf3bZ.js`,import.meta.url).href,``+import.meta.url).href,T=new URL(new URL(`libktx-BCvgV3xP.wasm`,import.meta.url).href,``+import.meta.url).href;async function E(e){v({jsUrl:w,wasmUrl:T});let t=await p(),n=[],r=0,a=``,o=await Promise.all(e.map(async e=>{let n=URL.createObjectURL(e);try{return await C(n,t)}finally{URL.revokeObjectURL(n)}}));for(let e of o){let t=new i({...e,alphaMode:`premultiplied-alpha`,scaleMode:`linear`,autoGenerateMipmaps:!1}),o=t.resource??[];for(let e of o)r+=e.byteLength;a=String(t.format),n.push(t)}return{sources:n,gpuBytes:r,format:a}}export{E as ktx2Sources};