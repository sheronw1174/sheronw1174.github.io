(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(138)),i={title:"IMGUI \u4e2d\u6587\u652f\u6301\u65b9\u6848",tags:["\u6298\u817e\u8bb0\u5f55"]},c={permalink:"/blog/2020/07/01/imgui-chinese",source:"@site/blog/2020-07-01-imgui-chinese.md",description:"\u6ca1\u5b66\u8fc7 c++\uff0c\u5355\u7eaf\u60f3\u5934\u94c1\u6c49\u5316\u4e2a\u4e1c\u897f\uff0c\u5c31\u67e5\u8d44\u6599\u6298\u817e\u4e86\u4e00\u4e0b\uff0c\u8fd9\u91cc\u505a\u4e00\u4e2a\u5c0f\u7684\u603b\u7ed3\u3002\u5982\u679c\u6709\u66f4\u597d\u7684\u65b9\u6848\u8bf7\u6307\u6b63\u3002",date:"2020-07-01T00:00:00.000Z",tags:[{label:"\u6298\u817e\u8bb0\u5f55",permalink:"/blog/tags/\u6298\u817e\u8bb0\u5f55"}],title:"IMGUI \u4e2d\u6587\u652f\u6301\u65b9\u6848",readingTime:.405,truncated:!0,prevItem:{title:"\u6211\u5df2\u7ecf\u5fd8\u8bb0\u534a\u5e74\u524d\u5728\u505a\u4ec0\u4e48\u4e86",permalink:"/blog/2020/08/14/my-pandemic-life"},nextItem:{title:"\u5173\u4e8e\u71b5\u7684\u7b80\u77ed\u79d1\u666e\uff08\uff1f\uff09",permalink:"/blog/2020/05/18/this_is_not_entropy"}},p=[{value:"\u52a0\u8f7d\u5b57\u4f53",id:"\u52a0\u8f7d\u5b57\u4f53",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6ca1\u5b66\u8fc7 c++\uff0c\u5355\u7eaf\u60f3\u5934\u94c1\u6c49\u5316\u4e2a\u4e1c\u897f\uff0c\u5c31\u67e5\u8d44\u6599\u6298\u817e\u4e86\u4e00\u4e0b\uff0c\u8fd9\u91cc\u505a\u4e00\u4e2a\u5c0f\u7684\u603b\u7ed3\u3002\u5982\u679c\u6709\u66f4\u597d\u7684\u65b9\u6848\u8bf7\u6307\u6b63\u3002"),Object(a.b)("h2",{id:"\u52a0\u8f7d\u5b57\u4f53"},"\u52a0\u8f7d\u5b57\u4f53"),Object(a.b)("p",null,"\u9996\u5148\u9700\u8981\u52a0\u8f7d\u652f\u6301\u4e2d\u6587\u7684\u5b57\u4f53\u3002\n\u7f51\u4e0a\u6700\u591a\u7684\u89e3\u51b3\u65b9\u6848\u662f\u8bfb\u53d6\u5916\u90e8\u7684",Object(a.b)("inlineCode",{parentName:"p"},".ttf/.otf"),"\u5b57\u4f53\uff0c\u4eb2\u6d4b\u53ef\u7528\u3002\u4f46\u9700\u8981\u7528\u6237\u7684\u76ee\u5f55\u8bfb\u53d6\u6743\u9650\uff0c\u800c\u4e14\u53ef\u80fd\u51fa\u73b0\u5b57\u4f53\u4e0d\u5b58\u5728\u7684\u60c5\u51b5\u3002"),Object(a.b)("p",null,"\u5bf9\u4e8e\u6e90\u7801\u5185\u5d4c\u5b57\u4f53\uff0cIMGUI \u7684\u4f5c\u8005\u5176\u5b9e\u4e5f\u7ed9\u51fa\u4e86\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\uff1a",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ocornut/imgui/blob/0738611559b0a51c7fa0c376eb9601587231f841/misc/fonts/binary_to_compressed_c.cpp"}),"\u5c06 binary \u8f6c\u6362\u4e3a C array \u7684\u5de5\u5177"),"\u3002\u5982\u679c\u8f6f\u4ef6\u53ea\u662f\u4f7f\u7528\u62c9\u4e01\u5b57\u96c6\u7684\u8bdd\uff0c\u6587\u4ef6\u4e0d\u5927\u5e94\u8be5\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u6211\u6253\u7b97\u6c49\u5316\u7684\u8f6f\u4ef6\u672c\u8eab\u7528\u7684\u4e5f\u662f\u8fd9\u4e2a\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u5c06\u4e2d\u6587\u5b57\u96c6\u8f6c\u6362\u4e3a C Array \u7684\u8bdd\u5927\u5c0f\u81f3\u5c11\u662f\u897f\u6587\u5b57\u96c6\u7684\u51e0\u5343\u500d\u5427\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'ImGuiIO& io = ImGui::GetIO();\nIMFont* ttf_font = io.Fonts->AddFontFromFileTTF("res/simhei.ttf", 16.0f, Null, io.Fonts->GetGlyphRangesChinese());\nIMFont* compressed_font = io.Fonts->AddFontFromMemoryCompressedTTF(SimHei_compressed_data,SimHei_compressed_size, 16.f, Null, io.Fonts->GetGlyphRangesChinese());\n')),Object(a.b)("p",null,"\u8fd9\u91cc\u89e3\u91ca\u4e00\u4e0b\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"GetGlyphRangesChinese()")," \u7528\u6765\u6307\u5b9a\u52a0\u8f7d\u5b57\u7b26\u96c6\uff0c\u6211\u9700\u8981\u6539\u52a8\u7684\u8f6f\u4ef6\u57fa\u4e8e IMGUI 1.4\uff0c\u6240\u4ee5\u53ea\u6709\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5728\u66f4\u65b0\u7684\u7248\u672c\u4e2d\uff0c\u8fd9\u4e2a\u88ab\u52a0\u8f7d\u5e38\u7528\u6c49\u5b57\u7684",Object(a.b)("inlineCode",{parentName:"p"},"GetGlyphRangesChineseSimplifiedCommon()"),"\u548c\u52a0\u8f7d\u6240\u6709\u6c49\u5b57\u7684",Object(a.b)("inlineCode",{parentName:"p"},"GetGlyphRangesChineseFull()"),"\u6240\u53d6\u4ee3\u3002"))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);