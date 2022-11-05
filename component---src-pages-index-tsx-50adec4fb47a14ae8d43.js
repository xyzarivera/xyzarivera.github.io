"use strict";(self.webpackChunkxyzarivera_github_io=self.webpackChunkxyzarivera_github_io||[]).push([[691],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return u},M:function(){return y},P:function(){return x},S:function(){return O},_:function(){return l},a:function(){return i},b:function(){return o},g:function(){return m},h:function(){return c}});var r=a(7294),n=(a(72),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function o(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,l,c){var o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),l&&(o.objectFit=l),c&&(o.objectPosition=c);var m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return m}var d,p=["children"],f=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},u=function(e){var t=e.children,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(f,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],A=function(e){var t=e.src,a=e.srcSet,n=e.loading,s=e.alt,c=void 0===s?"":s,o=e.shouldLoad,m=l(e,g);return r.createElement("img",i({},m,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:c}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,s=e.shouldLoad,c=void 0===s||s,o=l(e,h),m=o.sizes||(null==t?void 0:t.sizes),d=r.createElement(A,i({},o,t,{sizes:m,shouldLoad:c}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:m})})),d):d};A.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],x=function(e){var t=e.fallback,a=l(e,b);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(d=w.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var y=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};y.displayName="MainImage",y.propTypes=w.propTypes;var v,E,N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:s().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],z=new Set,L=function(e){var t=e.as,n=void 0===t?"div":t,s=e.image,o=e.style,m=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,u=e.onLoad,g=e.onError,h=l(e,S),A=s.width,w=s.height,b=s.layout,x=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(A,w,b),y=x.style,N=x.className,C=l(x,k),L=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(s.images)}),[s.images]);p&&(d=p);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,A,w);return(0,r.useEffect)((function(){v||(v=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=L.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==f||f({wasCached:!0}),null==u||u({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==u||u({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(T)):E&&z.has(T)?void 0:(v.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;L.current&&(L.current.innerHTML=r(i({isLoading:!0,isLoaded:z.has(T),image:s},h)),z.has(T)||(e=requestAnimationFrame((function(){L.current&&(t=n(L.current,T,z,o,f,u,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[s]),(0,r.useLayoutEffect)((function(){z.has(T)&&E&&(L.current.innerHTML=E(i({isLoading:z.has(T),isLoaded:z.has(T),image:s},h)),null==f||f({wasCached:!0}),null==u||u({wasCached:!0}))}),[s]),(0,r.createElement)(n,i({},C,{style:i({},y,o,{backgroundColor:m}),className:N+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(L,e):null}));T.propTypes=C,T.displayName="GatsbyImage";var I,R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},B=new Set(["fixed","fullWidth","constrained"]),U={src:s().string.isRequired,alt:N,width:j,height:j,sizes:s().string,layout:function(e){if(void 0!==e.layout&&!B.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},O=(I=T,function(e){var t=e.src,a=e.__imageData,n=e.__error,s=l(e,R);return n&&console.warn(n),a?r.createElement(I,i({image:a},s)):(console.warn("Image not loaded",t),null)});O.displayName="StaticImage",O.propTypes=U},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s}});var r=a(7294),n=a(3723);t.default=function(){return r.createElement("div",null,r.createElement("main",{className:"flex flex-col"},r.createElement("section",null,r.createElement("h1",{className:"my-6"},"Xyza Rivera"),r.createElement("h2",{className:"mt-16 mb-10"},"Software Engineer | Visual Creative")),r.createElement("section",{className:"flex px-20 pb-16"},r.createElement("div",{className:"basis-1/2 p-5 flex justify-end align-center"},r.createElement(n.S,{alt:"xyza's picture",src:"../images/xyza.png",placeholder:"blurred",layout:"fixed",width:435,height:435,__imageData:a(1742)})),r.createElement("div",{className:"basis-1/2 p-5"},r.createElement("p",{className:"mb-2 mt-10 font-serif"},"I am a ",r.createElement("strong",null,"software engineer")," passionate about building products focused on user value and productivity."),r.createElement("p",{className:"mb-2 text-sm"},"Currently improving workplace processes at ",r.createElement("a",{href:"https://www.globe.com.ph",target:"_blank",rel:"noreferrer"},"Globe Telecom")),r.createElement("p",{className:"mb-5 text-sm italic"},"ReactJS, JavaScript, TypeScript, Google Cloud Platform, Firebase"),r.createElement("p",{className:"mb-2 font-serif"},"Also, a visual creative on the weekends."),r.createElement("p",{className:"text-sm mb-2"},"always taking photos on ",r.createElement("a",{href:"https://www.instagram.com/xyzarivera_film/",target:"_blank",rel:"noreferrer"},"film")," or ",r.createElement("a",{href:"https://www.instagram.com/xyzarivera_/",target:"_blank",rel:"noreferrer"},"digital")),r.createElement("p",{className:"text-sm mb-2"},"re-learning ",r.createElement("a",{href:"https://www.instagram.com/xyzarivera_art/",target:"_blank",rel:"noreferrer"},"illustrations")),r.createElement("p",{className:"text-sm mb-2"},"learning ",r.createElement("a",{href:"https://www.youtube.com/c/XyzaRivera",target:"_blank",rel:"noreferrer"},"cinematography")))),r.createElement("section",{className:"w-screen bg-violet-200 flex align-center px-28 py-24"},r.createElement("h3",{className:"basis-5/12 text-left my-auto"},"Skills"),r.createElement("div",{className:"basis-7/12"},r.createElement("p",{className:"text-2xl py-2"},"Full-stack Web Development"),r.createElement("p",{className:"text-2xl py-2"},"Serverless Architecture"),r.createElement("p",{className:"text-2xl py-2"},"User Experience Design"))),r.createElement("section",{className:"w-screen flex align-center px-28 py-32"},r.createElement("h3",{className:"basis-5/12 text-left  my-auto"},"Certifications"),r.createElement("div",{className:"basis-7/12 flex flex-col"},r.createElement("a",{className:"text-2xl py-2 text-current no-underline hover:underline",href:"https://www.credential.net/a3221740-82d3-4fbc-af4e-b474cc487bd0",target:"_blank",rel:"noreferrer"},"Google Cloud Certified Associate Cloud Engineer"),r.createElement("a",{className:"text-2xl py-2 text-current no-underline hover:underline",href:"https://www.credly.com/badges/4beef1a3-898f-4998-85c5-cad57b71f597/linked_in_profile",target:"_blank",rel:"noreferrer"},"AWS Certified Solutions Architect - Associate"))),r.createElement("section",{className:"w-screen bg-black px-28 py-20"},r.createElement("h3",{className:"my-auto text-left text-white"},"Projects"),r.createElement("div",{className:"flex flex-start justify-between py-10"},r.createElement("div",{className:"basis-1/3 flex flex-col items-center p-2"},r.createElement("a",{href:"https://xyzarivera.notion.site/xyzarivera/8b07afbfc547484c871413528acc4daf?v=fa6d552026cb424eb756a112d46b6e93",target:"_blank",rel:"noreferrer",className:"transition transform hover:-translate-y-2"},r.createElement(n.S,{alt:"codex",src:"../images/codex.png",placeholder:"blurred",layout:"fixed",width:340,height:195,__imageData:a(5563)})),r.createElement("a",{className:"font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline",href:"https://xyzarivera.notion.site/xyzarivera/8b07afbfc547484c871413528acc4daf?v=fa6d552026cb424eb756a112d46b6e93",target:"_blank",rel:"noreferrer"},"Codex"),r.createElement("p",{className:"italic text-center text-sm text-white py-2"},"Notion"),r.createElement("p",{className:"text-center text-sm text-white py-2"},"My Developer Notes made public. I document my learnings in project setup, programming concepts, and commonly used commands")),r.createElement("div",{className:"basis-1/3 flex flex-col items-center p-2"},r.createElement("a",{href:"https://memo.ph/",target:"_blank",rel:"noreferrer",className:"transition transform hover:-translate-y-2"},r.createElement(n.S,{alt:"memo picture",src:"../images/memo.png",placeholder:"blurred",layout:"fixed",width:340,height:195,__imageData:a(6558)})),r.createElement("a",{className:"font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline",href:"https://memo.ph/",target:"_blank",rel:"noreferrer"},"Memo.ph"),r.createElement("p",{className:"italic text-center text-sm text-white py-2"},"TypeScript, ReactJS, TailwindCSS, GCP, Firebase"),r.createElement("p",{className:"text-center text-sm text-white py-2"},"A memo approval system used by companies under the Globe Group. Built on modern tools and architecture, we were able to greatly reduce infrastructure cost without compromise on performance.")),r.createElement("div",{className:"basis-1/3 flex flex-col items-center p-2"},r.createElement("a",{href:"https://github.com/YACT-jp/e-mina-mobile-frontend",target:"_blank",rel:"noreferrer",className:"transition transform hover:-translate-y-2"},r.createElement(n.S,{alt:"emina picture",src:"../images/emina.png",placeholder:"blurred",layout:"fixed",width:340,height:195,__imageData:a(1495)})),r.createElement("a",{className:"font-serif text-xl text-center text-white mt-8 py-2 text-current no-underline hover:underline",href:"https://github.com/YACT-jp/e-mina-mobile-frontend",target:"_blank",rel:"noreferrer"},"E-mina"),r.createElement("p",{className:"italic text-center text-sm text-white py-2"},"React Native, NativeBase, Express, MongoDB, Realm"),r.createElement("p",{className:"text-center text-sm text-white py-2"},"A pop-cultute tourism app that introduces travellers to famous Japanese pop-culture locations. Mainly worked as tech lead for this project with major contributions on authentication and asynchronous storage.")))),r.createElement("section",{className:"w-screen flex align-center px-28 py-44"},r.createElement("h3",{className:"basis-8/12 text-left my-auto"},"Let's Connect"),r.createElement("div",{className:"basis-4/12 flex flex-col"},r.createElement("a",{className:"text-2xl py-2 text-current decoration-1 hover:decoration-2",href:"https://www.linkedin.com/in/xyzarivera/",target:"_blank",rel:"noreferrer"},"LinkedIn"),r.createElement("a",{className:"text-2xl py-2 text-current decoration-1 hover:decoration-2",href:"https://github.com/xyzarivera",target:"_blank",rel:"noreferrer"},"Github"),r.createElement("a",{className:"text-2xl py-2 text-current decoration-1 hover:decoration-2",href:"https://www.instagram.com/xyzarivera_/",target:"_blank",rel:"noreferrer"},"Instagram"),r.createElement("a",{className:"text-2xl py-2 text-current decoration-1 hover:decoration-2",href:"https://twitter.com/xyza_rivera",target:"_blank",rel:"noreferrer"},"Twitter"),r.createElement("a",{className:"text-2xl py-2 text-current decoration-1 hover:decoration-2",href:"https://www.youtube.com/c/XyzaRivera",target:"_blank",rel:"noreferrer"},"Youtube")))),r.createElement("footer",{className:"w-full bg-black px-28 py-20 flex"},r.createElement("div",{className:"basis-8/12 flex flex-col"},r.createElement("h3",{className:"text-lg text-white font-serif"},"Xyza Rivera"),r.createElement("p",{className:"text-gray-500 py-2"},"Software Engineer | Visual Creative"),r.createElement("p",{className:"text-white mt-48 text-xs"},"Copyright © 2022 Xyza Rivera. All rights reserved.")),r.createElement("div",{className:"basis-4/12 flex flex-col"},r.createElement("h4",{className:"text-white font-serif"},"Location"),r.createElement("p",{className:"text-gray-500 py-2"},"Manila, Philippines"))))};var s=function(){return r.createElement("title",null,"Xyza Rivera")}},1495:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGUlEQVQoz1WSy04UQRSG5yl8FB+IjTGycGnUhXsTEmK87UDAeItOTEAuKgbGDJjIgOAEBhzmRjc93dVVderUtau7TY8mxi9nc5Lzbf7z155s3Zr5NP26NauUQkSpFEpUSkmJxhhrDEgjpLHWWGudNtZYrXWcAGFYkwpBgEDJKHXWGS6sVJRRRGl0hTFaGyWEGCdxBDTlPE6i09FhTKIaCgQOAoAxfqKi6OtGL+ilCCBBO+W8Kye4zMUXIWudyCAJk6B5tnoZX9RSko7HMWc0ZrAzPvoRHXT52PnM5VleFHlRFGXZTVqBGtnd0/L2UlbfTa1y0nLGa/1+fzQaEUI4h+qwoiidLb0vJ6vNst1u4xc9N8dB+fSLXTsSudVKUUprg8EgDENCCCK2zjuLw+OFEhY8fZbzRZ/OwWWzdxIvr/FLhLS5/eoqBHNc5EZLxlgtDMMoikhKNIc3Lr0XtB99+/ygu/94vzHT3rljwnd72zA9pdsdmmwt3b/Cz2ddXmaZqeR0QkKIhj/yz/rmxspOY3199e3HD3dl73m//77e7l0wo2jZ3zRsBJNH/JMJIRKg6WDeJsueL9NoBZO6hxcFfdnp3pw//D6UOZLi4VTW2RM2k4j/yQBQhWSdt9Y7V40xpc9pHA/O2siZUpKGp0oKgeicqwJjEyilQqDLnJp04m85jFFau6x6dZ7ng+Hw2vUb242G995aCwC/AVxuUZ1pWTG/AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/cff7fed9579849cf84acf7aac6336ead/78558/emina.png","srcSet":"/static/cff7fed9579849cf84acf7aac6336ead/78558/emina.png 340w,\\n/static/cff7fed9579849cf84acf7aac6336ead/8e2c1/emina.png 680w","sizes":"340px"},"sources":[{"srcSet":"/static/cff7fed9579849cf84acf7aac6336ead/d4a6a/emina.webp 340w,\\n/static/cff7fed9579849cf84acf7aac6336ead/c7ebc/emina.webp 680w","type":"image/webp","sizes":"340px"}]},"width":340,"height":195}')},5563:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVQoz52Py07bQBSG/UpI3fYF2KOKrlmwRFDxDKirbirEAhZcRFER4uIKDA4oEJI4kdpUEEiM0yS4ZDJgh/GMHV/mhgIorLi0n/7FOdL59OsozVoFe25IOjwJfOLZAJrNlnXZCnycREHUxVEXi8Rnsc9CjwadAEHs/L2FtgsaSnnna0mbaf3akm5JXV9+/3FiYPjTu6GxyakvxaJu5DTr5w75k/ZqaWSmnN9r7cLilbF0VfjWzM4rM9OfzzMr9bPUxcle/USfXZgbHJkc+DC+8n3hzNgqZNWyoZLaAbZSnrWPTP22ot2cboPSZt1YVXKZH5nc3pqm5osHmq7uplR1e2N0atqxsuFlHlQO29Ujv5nHjWwv9Rxu5FHt2DHT9qmucE4btl0+rzrOTRCECPtRHHe7IWeJ4FRyKgUTjPKnJP1BkVKCFrDMKoRQ/iM9mRCCMXnYxT1cvASjlHMupejJCKF2GwAAXNdhjL1aGMU0jJN+M4YQXveAnocIIQghSulzMkEIu51H+b/py4//vMURQj4c3gHK3VpAwpcPvAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/6e583faf7825e818285ebd9e9eae8e82/78558/codex.png","srcSet":"/static/6e583faf7825e818285ebd9e9eae8e82/78558/codex.png 340w,\\n/static/6e583faf7825e818285ebd9e9eae8e82/8e2c1/codex.png 680w","sizes":"340px"},"sources":[{"srcSet":"/static/6e583faf7825e818285ebd9e9eae8e82/d4a6a/codex.webp 340w,\\n/static/6e583faf7825e818285ebd9e9eae8e82/c7ebc/codex.webp 680w","type":"image/webp","sizes":"340px"}]},"width":340,"height":195}')},6558:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVQoz52Rz2oaURjFXfQBsssTdNuHyAtkn+667KbbQjYtIia0aQmlJCEuQkJRIU0VhCQtrdiYoCBKscnEUNTRcXT+6Dj/7nfvnXvnFkOLMTRQAmfxLb4f53BOxMP83or81x+wia4PB03kAvdvwT7hLtwmfcw9Ktwg9IAB5mEohBBAueHSKewAszwKNLxJIsx1CEddze/pTiAMwvdKg8fvqrFPDZuwCexiDjRUTFQ812UDzdhSYZsOkSSWOxaVxsfdysPF5PxSdu9MGUPwxxmRsG+RescpXg5VC//1Z0M/GI2c15unp+8/k3RhsJKVdwup+GFR8XQbT2MjwjENb8Y2PapYoAHPfJdPsj80IWQUkLG7tZx9+62DMJ0pzIVpYQ4w1caqjU2gV01Dztfbprd+0lSu+tuvvi4k2/F8799T+ZiPUaDaWBmBpNFniYudDz/bFnmRvJAlNfry+MHq+ZP91p07O8A0l7T6fqIA22W+VeJVnSuZX16tF419mXsjPc20Iz7hd2kMQdeAgypN1YJ0jbXSZWUtR1YPNmJHj3aazw87vwH801OPdHP6gwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/afd48b5a5f73a2e21a652daa50ba5ba0/78558/memo.png","srcSet":"/static/afd48b5a5f73a2e21a652daa50ba5ba0/78558/memo.png 340w,\\n/static/afd48b5a5f73a2e21a652daa50ba5ba0/8e2c1/memo.png 680w","sizes":"340px"},"sources":[{"srcSet":"/static/afd48b5a5f73a2e21a652daa50ba5ba0/d4a6a/memo.webp 340w,\\n/static/afd48b5a5f73a2e21a652daa50ba5ba0/c7ebc/memo.webp 680w","type":"image/webp","sizes":"340px"}]},"width":340,"height":195}')},1742:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AFQFLVcHN3UCI+woLv9mYP6Fhfhicu5Ofv58lv2OmvaAkfqDnPRpiOdId/pmbf9lXP89Qf8eN/0YMfkZKQBrBjJhACvTHx7/fGn6bVn3Ry/uTEGiH0CSJUKOIjeGFTaaI0vSP279don/oYv/z0//1zv/xDj+h2T9XHEAnAtQxwMx/0RC/rGu/XVy/zMsnB02QQAzSwEjWgITagEgdwEolgAn40Bc/62Z/t1C/+4f/+0P/+An/7pjAK8QYfwQQf9MT/6dlf92cuk/V24JNl0DMmEFPGkDNo0IPpcGNqACM9gALP9veP/gbf/uL//kIf/sJf/vFQC3LoD5K2H+SFX8Z1T/n3nDTlFqAC9xBS1vBC58BS7KNVfSN1ShBCDTACj/Ozr/7SD/rDf/yiz/8TD/4iIAwzqH/0pu/l1x/lJQ/5R5oTxWZQAocQwraAAcjRQn1kZq5E5ptBYavwAF+iEX/581/2da/+g8/+gj/3JQAN40ff81WvMvTf1EWfJkZoAPNV8JIV4AGYEaLtRfaLk5UMY0TOxPUdUeLvQjK/92Xv9RVf+SSP+RSv+WTACwGVeVBCtuAC/POXHcYXV1Cy5dCB5XAA3RX17/majsXn/xYoL4b4/ySWn0JTj+dIb/cqn/Woz/gYf/7mAAhSVgmkhojDh4zi91ti5NZgooVgQdaxQa+YyE/6Cf+HB96GJ59neO/2WC/Exl/alP/6x7/3OX/3qi/5KUAJg4eLhSc6U0ZM4mVIMZLVcHIGADKXEXJvuIfO9wY85IROdeZehIV/VPXO4hNvyPP//4M//ULv/MM/+qOACCLmWeL0qjHE+qFD9VChZXCCBoBzJcAR+2ST/obFvrcGzrXGruO2TtP07JAA75YGr/xJ3/1IL/4nr/7ywAnUFv33CFqi9egQsqTAkYWQojXQosXwQmeQ0Ps0A18ndu+3Bx60dcqRMbrwAN9FZq/7Gz/qCl/6er/816ALFfg/qSmJYoV38ILVELHUwIG1EJIFsKJpEhIqAmG6kiIZ0aIn4ID30BBa0AGe9fef++w/6nrv+gof+woQCZTF61WFBrHUWLDT9SCBpOCxtIBRRSBBWQKSnKTjrAOzZyCRBYAAN/AhGwACP4do3/wcr+ssD/q7X/pKIAcyk2UhQOSBQ7mg08ohszfBIlchIeTgISiCIr3FdU2VFVoy03bQcTcAAVpAIm616J/7jQ/rbE/6e0/6KnAGUqQj8NEkcTM9NmlO6DtpwnRb9HVH8iOWwLKtVOafNdcfBger80T3wBIYoIL7MVVvNus/+yyP6frP+bmwBeKU9tJjnZjLf/suf3q+zqi8n0g5jqeH+gOFjDS37+eJ75a5TpUXe6IkaTEUPPWantbcT/isD/lab/l5sAVSNQ2Yqv/7nq9aLZ8qDe+arw9ZjZ+Ien/4ui94Kn/IOs/oGq9nCb/WSKyzpk3XjD94rh+HLA/3GZ/2+KAHNBcfmv1Pqr2vCf1OuT0fKj3Piq7fSX1/iFsf2Hq/yJr/iFsPV/rvd+sfJ4svWQ1PaH0u53yvtfmvsfPgCVXo/9tNf3qtnpmc7kjMbpnNDnlcfzpeL4pOX5mdT5l9L3mNj2nuL1oej5oe38oer5m93ja7raUo+4ABLwMmBjw3mlAwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/f4f55180195299a1f37e407874169134/35575/xyza.png","srcSet":"/static/f4f55180195299a1f37e407874169134/35575/xyza.png 435w,\\n/static/f4f55180195299a1f37e407874169134/17d09/xyza.png 870w","sizes":"435px"},"sources":[{"srcSet":"/static/f4f55180195299a1f37e407874169134/6a77e/xyza.webp 435w,\\n/static/f4f55180195299a1f37e407874169134/221b5/xyza.webp 870w","type":"image/webp","sizes":"435px"}]},"width":435,"height":435}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-50adec4fb47a14ae8d43.js.map