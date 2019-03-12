(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/usePromise.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),a=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=t("./node_modules/react/index.js"),m=t.n(d),p=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/docz/dist/index.m.js"),f=t("./src/index.ts"),b=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).layout=null,t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=Object(s.a)(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",components:n},m.a.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"usepromise"}},"usePromise"),m.a.createElement(p.MDXTag,{name:"p",components:n},"depend on ",m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/bsonntag/react-use-promise"}},"https://github.com/bsonntag/react-use-promise"),", but ",m.a.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"API CHANGED"),"."),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"api"}},"API"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},'function usePromise<Result = any>(\n  promise: Promise<Result> | (() => Promise<Result>),\n  deps?: any[]\n) : ["pending" | "resolved" | "rejected", Result | undefined, Error];\n')),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport { usePromise } from 'react-hooks-common';\n\nfunction Example() {\n  const [state, result = 'default value', error] = usePromise(\n    () => new Promise(resolve => {\n      setTimeout(() => resolve('foo'), 2000);\n    }),\n    []\n  );\n\n  return (\n    <div>\n      <p>{state}</p>\n      <p>{result || error}</p>\n    </div>\n  );\n}\n")),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"example"}},"example"),m.a.createElement(l.e,{__codesandbox:"undefined",__position:0,__code:"() => {\n  const [fetchTimes, updateFetchTimes] = useState(0)\n  const [state, result = 'loading', error] = usePromise(\n    () =>\n      new Promise(resolve => {\n        setTimeout(() => resolve('result'), 2000)\n      }),\n    [fetchTimes],\n  )\n  return (\n    <div>\n      <p>{state}</p>\n      <p>{result || error}</p>\n      <button onClick={() => updateFetchTimes(fetchTimes + 1)}>\n        update promise\n      </button>\n    </div>\n  )\n}",__scope:{props:this?this.props:t,useState:d.useState,useEffect:d.useEffect,usePromise:f.f}},function(){var e=Object(d.useState)(0),n=Object(o.a)(e,2),t=n[0],s=n[1],r=Object(f.f)(function(){return new Promise(function(e){setTimeout(function(){return e("result")},2e3)})},[t]),a=Object(o.a)(r,3),c=a[0],u=a[1],i=void 0===u?"loading":u,p=a[2];return m.a.createElement("div",null,m.a.createElement("p",null,c),m.a.createElement("p",null,i||p),m.a.createElement("button",{onClick:function(){return s(t+1)}},"update promise"))}))}}]),n}(m.a.Component)},"./src/index.ts":function(e,n,t){"use strict";var o=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/react-use-promise/dist/index.js"),r=t.n(s);function a(e,n){var t=r()(e,n),s=Object(o.a)(t,3),a=s[0],c=s[1];return[s[2],a||void 0,c]}var c=t("./node_modules/use-lodash-debounce-throttle/lib/index.js"),u=t("./node_modules/react/index.js");function i(e,n,t){for(var o=arguments.length,s=new Array(o>3?o-3:0),r=3;r<o;r++)s[r-3]=arguments[r];var a=Object(u.useRef)(e);a.current=e,Object(u.useEffect)(function(){var e=setInterval.apply(void 0,[function(){a.current.apply(a,arguments)},n].concat(s));return function(){clearInterval(e)}},t)}var d=t("./node_modules/use-media/lib/index.js"),m=t.n(d);function p(e){var n=Object(u.useRef)(void 0);return Object(u.useEffect)(function(){n.current=e}),n.current}try{useprevious.displayName="useprevious",useprevious.__docgenInfo={description:"",displayName:"useprevious",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/use-previous.ts#useprevious"]={docgenInfo:useprevious.__docgenInfo,name:"useprevious",path:"src/use-previous.ts#useprevious"})}catch(f){}function l(e,n){var t=Object(u.useRef)(!0);Object(u.useEffect)(function(){if(!t.current)return e();t.current=!1},n)}t.d(n,"f",function(){return a}),t.d(n,"a",function(){return c.a}),t.d(n,"g",function(){return c.b}),t.d(n,"c",function(){return i}),t.d(n,"d",function(){return m.a}),t.d(n,"e",function(){return p}),t.d(n,"b",function(){return l});try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.ts#src"})}catch(f){}}}]);
//# sourceMappingURL=docs-use-promise.a0655bf5b421bff063d2.js.map