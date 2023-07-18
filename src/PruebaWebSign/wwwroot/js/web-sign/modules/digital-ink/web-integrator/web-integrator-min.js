var DigitalInkWebIntegrator=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i,n,s,c=function(){function i(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e(this,i),this.cdn=t||"function"==typeof DedicatedWorkerGlobalScope,this.src=n+i.DEPENDENCIES_SRC}var n,s,c;return n=i,s=[{key:"dependenciesESM",get:function(){return{quickselect:"".concat(this.src,"/quickselect/index.js"),rbush:"".concat(this.src,"/rbush/index.js"),long:"".concat(this.src,"/long/index.js"),"gl-matrix":"".concat(this.src,"/gl-matrix/esm/index.js"),"js-ext":"".concat(this.src,"/js-ext/js-ext-min.mjs"),"digital-ink":"".concat(this.src,"/digital-ink/digital-ink-min.mjs")}}},{key:"devDependenciesESM",get:function(){return Object.assign({},this.dependenciesESM,{"js-ext":"".concat(this.src,"/js-ext/js-ext.mjs"),"digital-ink":"".concat(this.src,"/digital-ink/digital-ink.mjs")})}},{key:"dependenciesUMD",get:function(){return{"clipper-lib":"".concat(this.src,"/clipper-lib/clipper.js"),poly2tri:"".concat(this.src,"/poly2tri/dist/poly2tri.min.js"),protobufjs:"".concat(this.src,"/protobufjs/dist/protobuf.min.js"),"js-md5":"".concat(this.src,"/js-md5/build/md5.min.js"),jszip:"".concat(this.src,"/jszip/dist/jszip.min.js"),rbush:"".concat(this.src,"/rbush/rbush.js"),long:"".concat(this.src,"/long/umd/index.js"),"gl-matrix":"".concat(this.src,"/gl-matrix/gl-matrix.js"),"js-ext":"".concat(this.src,"/js-ext/js-ext-min.js"),"digital-ink":"".concat(this.src,"/digital-ink/digital-ink-min.js")}}},{key:"devDependenciesUMD",get:function(){return Object.assign({},this.dependenciesUMD,{poly2tri:"".concat(this.src,"/poly2tri/dist/poly2tri.js"),protobufjs:"".concat(this.src,"/protobufjs/dist/protobuf.js"),"js-md5":"".concat(this.src,"/js-md5/src/md5.js"),jszip:"".concat(this.src,"/jszip/dist/jszip.js"),"js-ext":"".concat(this.src,"/js-ext/js-ext.js"),"digital-ink":"".concat(this.src,"/digital-ink/digital-ink.js")})}},{key:"build",value:function(){return this.dependencies||(i.dev?this.cdn?this.dependencies=Object.assign({},this.devDependenciesUMD):this.dependencies=Object.assign({},this.devDependenciesUMD,this.devDependenciesESM):this.cdn?this.dependencies=Object.assign({},this.dependenciesUMD):this.dependencies=Object.assign({},this.dependenciesUMD,this.dependenciesESM)),this.dependencies}},{key:"include",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dependencies=Object.assign(this.build(),e)}},{key:"integrate",value:function(){if(this.build(),this.cdn)if("function"==typeof DedicatedWorkerGlobalScope)Object.values(this.dependencies).forEach((function(e){return self.importScripts(e)}));else{if("undefined"==typeof document)throw new Error("Integration failed. Supported env is browser - main or worker thread!");Object.values(this.dependencies).forEach((function(e){return document.write('<script type="text/javascript" src="'.concat(e,'"><\/script>'))}))}else{if("undefined"==typeof document)throw new Error("Integration failed. Supported env is browser - main thread!");var e={imports:this.dependencies},t=document.createElement("script");t.setAttribute("type","importmap"),t.textContent=JSON.stringify(e,0,4),document.currentScript?document.currentScript.after(t):document.head.appendChild(t)}}}],c=[{key:"linkWorkers",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];for(var n=0,s=t;n<s.length;n++){var c=s[n],r=c.buildWorkerURL().split(location.host).last,o=document.createElement("link");o.setAttribute("rel","modulepreload"),o.setAttribute("href",r),document.head.appendChild(o)}}},{key:"integrate",value:function(e){new i(!0,e).integrate()}},{key:"integrateECMA6",value:function(e,t){var n=new i(!1,t);n.include(e),n.integrate()}},{key:"getCDNImports",value:function(e){return new i(!0,e).build()}}],s&&t(n.prototype,s),c&&t(n,c),Object.defineProperty(n,"prototype",{writable:!1}),i}();return s="/node_modules",(n="DEPENDENCIES_SRC")in(i=c)?Object.defineProperty(i,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[n]=s,c}();
