(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/useDebounce.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return f});var t=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),d=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=o("./node_modules/react/index.js"),m=o.n(i),p=o("./node_modules/@mdx-js/tag/dist/index.js"),l=o("./node_modules/docz/dist/index.m.js"),b=o("./src/index.ts"),f=function(e){function n(e){var o;return Object(r.a)(this,n),(o=Object(a.a)(this,Object(u.a)(n).call(this,e))).layout=null,o}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,o=Object(s.a)(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",components:n},m.a.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"usedebounce"}},"useDebounce"),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"api"}},"API"),m.a.createElement(p.MDXTag,{name:"p",components:n},"same as ",m.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://lodash.com/docs/4.17.11#debounce"}},"https://lodash.com/docs/4.17.11#debounce")),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),m.a.createElement(p.MDXTag,{name:"pre",components:n},m.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport { useDebounce } from 'react-hooks-common';\n\nconst Com = () => {\n  const debouncedChange = useDebounce((v) => {\n    postUpdate();\n  }, 500, { maxWait: 2000 });\n\n  return (\n    <input\n      type=\"text\"\n      onChange={(e) => {\n        debouncedChange(e.target.value)\n      }}\n    />\n  )\n}\n")),m.a.createElement(p.MDXTag,{name:"h2",components:n,props:{id:"example"}},"example"),m.a.createElement(l.e,{__codesandbox:"undefined",__position:0,__code:"() => {\n  const [debouncedValue, setDebouncedValue] = useState('')\n  const debouncedChange = useDebounce(\n    v => {\n      setDebouncedValue(v)\n    },\n    500,\n    { maxWait: 2000 },\n  )\n  return (\n    <div>\n      <input\n        type=\"text\"\n        onChange={e => {\n          debouncedChange(e.target.value)\n        }}\n      />\n      <div>debounced value: {debouncedValue}</div>\n    </div>\n  )\n}",__scope:{props:this?this.props:o,useState:i.useState,useEffect:i.useEffect,useDebounce:b.a}},function(){var e=Object(i.useState)(""),n=Object(t.a)(e,2),o=n[0],s=n[1],r=Object(b.a)(function(e){s(e)},500,{maxWait:2e3});return m.a.createElement("div",null,m.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)}}),m.a.createElement("div",null,"debounced value: ",o))}))}}]),n}(m.a.Component)},"./src/index.ts":function(e,n,o){"use strict";var t=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/react-use-promise/dist/index.js"),r=o.n(s);function c(e,n){var o=r()(e,n),s=Object(t.a)(o,3),c=s[0],a=s[1];return[s[2],c||void 0,a]}var a=o("./node_modules/use-lodash-debounce-throttle/lib/index.js"),u=o("./node_modules/react/index.js");function d(e,n,o){for(var t=arguments.length,s=new Array(t>3?t-3:0),r=3;r<t;r++)s[r-3]=arguments[r];var c=Object(u.useRef)(e);c.current=e,Object(u.useEffect)(function(){var e=setInterval.apply(void 0,[function(){c.current.apply(c,arguments)},n].concat(s));return function(){clearInterval(e)}},o)}var i=o("./node_modules/use-media/lib/index.js"),m=o.n(i);function p(e){var n=Object(u.useRef)(void 0);return Object(u.useEffect)(function(){n.current=e}),n.current}try{useprevious.displayName="useprevious",useprevious.__docgenInfo={description:"",displayName:"useprevious",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/use-previous.ts#useprevious"]={docgenInfo:useprevious.__docgenInfo,name:"useprevious",path:"src/use-previous.ts#useprevious"})}catch(b){}function l(e,n){var o=Object(u.useRef)(!0);Object(u.useEffect)(function(){if(!o.current)return e();o.current=!1},n)}o.d(n,"f",function(){return c}),o.d(n,"a",function(){return a.a}),o.d(n,"g",function(){return a.b}),o.d(n,"c",function(){return d}),o.d(n,"d",function(){return m.a}),o.d(n,"e",function(){return p}),o.d(n,"b",function(){return l});try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.ts#src"})}catch(b){}}}]);
//# sourceMappingURL=docs-use-debounce.a0655bf5b421bff063d2.js.map