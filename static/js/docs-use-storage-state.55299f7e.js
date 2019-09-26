(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docs/useStorageState.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./src/index.ts"),s=n("./node_modules/docz/dist/index.m.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,m(t).call(this,e))).layout=null,n}var n,u,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(u=[{key:"render",value:function(){var e=this.props,t=e.components,n=l(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"usestoragestate"}},"useStorageState"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Combine ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"useState")," with ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"localStorage")," is easy, you can write below codes in a minute."),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"function useStorage(key, initialValue) {\n  const [state, setState] = useState(() => localStorage.getItem(key) || initialValue);\n  return [\n    state,\n    (value) => {\n      setState(value);\n      localStorage.setItem(key, value);\n    }\n  ];\n}\n")),a.a.createElement(o.MDXTag,{name:"p",components:t},"But if you need to use updater function in ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setState")," and ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"initialValue"),", or reload when key changed, it will be more complex.\nThis hook will help you to get rid of complex codes."),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-typescript"}},"type SetStateAction<S> = S | ((prevState: S) => S);\nfunction useStorageState<S>(key: string): [S | null, (updater: SetStateAction<S | null>) => void];\nfunction useStorageState<S>(key: string, initialState: S | (() => S)): [S, (updater: SetStateAction<S>) => void];\n")),a.a.createElement(o.MDXTag,{name:"ul",components:t},a.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"key"),": used as key of localStorage, state will be reset when key changed."),a.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"initialState"),": same as paramter in ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"useState"),".")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import React from 'react';\nimport { useStorageState } from 'react-hooks-common';\n\nconst Com = () => {\n  const [count, setCount] = useStorageState('PERSISTENT_COUNT', () => 25);\n\n  return (\n    <p>\n      persistent count: {count}\n      <button onClick={() => setCount(c => c + 1)}>increase</button>\n    </p>\n  );\n};\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"example"),a.a.createElement(s.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgFyOAYGcAgsnYeQ3RNBVzX9AV7SgmC4IiTI0ngxDkONOV2k9OABHIDDIPYIMpRQ0izSVO0NXYaDNB8Yj3XaAABGAiBEAZUEBYUYHacFUF0VFjlOAAveDEmxdhuDY9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnbSABZDPYAA2QzjPWMAQIAMR9aBEm0_hnEORFHUwdgAAUhH4JYBJ-OAzMRJyaxcmhnAgWTLnYABGKyTPkCSpKmABBOZlPYSNoPIGwoHQcMkM5ZSxCKmMZHYVFFJgbhgEPeSCGauB5G3WtgFK6AKuCAAyYbxkSeZKGaAbysq7h5vlMBQkkntUHadgAH4NkG8NI2qq4ZqG1AsprKQZGrd8zFhVjMDAMIoCmPaarq078pXGsLGAJ7uFq4BVwsHL2AAbSoZaCCWWCCEcMGAF1CryXDhVcAiENoJ8gvPUVnAaZxLHPAA5SwAH17F1ABVQnjKK6qfvYAAmABWd9a1rLoCD6cxow-lm63enmebhfJUVdUGaCufq2hoE7-ZZxgPCOLd_p5uXwgicxqHsKBYm2VrvtqyHoZoSNyGek2AGo0s5Hq0HIM1YKkDxVeoXr-eXF3a2Z2t5GlutJDei6zG_EAKPISRVGwHACC0CgQP0BhrodaDbvuqZ_BwkLIhpJCGI9SQEYtAdM9g_0E-whHtRgLxlsRJYEesIQblgWvYMIjxYH1fiRy41D86gJx_DwK1K8lxELQmBuCD9VUXSwLC2OOGA7tCB6QjsBGGj0ARWD7bvSM9fO0FoLf4hL2fWKTxeU9XnCO5YVwAEVGQEZJd_lfPjzv0-54vpeV7ThGQowD-IMbOJFc75wHEAgYeQv7nwXr_VOa9YLai4GTGY6AiI5zInnWCVouAWlCOgrIsDE7wKvv_ZBAo6D5GoHYV-2D84sGvDQ1AcASHYWTsvRBOF4JIxRpgsBDDcGoj4TAC0qJiHT1LvPThf8kEwENlMeh-9cGi1fFIs-pDZHcPLsPauMAABq8RGSgO4iosRmAq6STEdvKAjJ_RBxDjgsRhciA0kjtHYCegwIQTngA2UNJRSuDGIIpiloIEBNwfEI-qBohsDEhoue2ijTV1WunSJMBGDigZCvFSyJGyuJpFcDObj7bZK4bVAAPrReAXD2DVMjHrIqJSaRZNqQ9KpNSckEE5JyJYmA7gbSuMiIGMNORXCBvweYGACj8HqewfgXQ4CUCgKwbIczqmLJgOoLYtB0BhS6XU6py1bpoGyEsc8AghACDhn9GsgMgZLK4UsDI1yIaoxgHDFS_ii4wCCSMSMhTYLX2RP0mAdxPzrDZhzYGEjaBLCeQ9F5VzhQw2nidRxlFnEWkPhkWxHigK6FAgYcCmE4EI3PGAMAuzm5_MXqY1CYT2FkLqUtFaQkcIbyPrYyMYAtLsFcqkoSYKoCuC8uwVAoQiCBAEGCwZwzUCJFGUsHAqqzKZCIPcEIirRnVTuQDWh0pUDimaN82CJrGCCvZc7XlH5p4WD5Saj4fRwxTBUny-1OFKXUqlI0mmv1VyA1xcfKAD5CqQy5Xi-IjTVU4HVT6OA_rVLcwdcaxezqrn6EjLG-NmrIXcyUAvUViQVVqtcBqxNnqLDQoEJzJN-qebkApAISNIbIzBtsQ-fNLMfaFoGZWswGKlDByxREqBgwCXaCJXHUlNFoIIxNbS71uyGVyi2eafg08rqaKmMktlUoOX-PHXkRglhCr5MjLYxkQyrB6vWIDLopqcIWrPcciMkAXToEbCcxeZz0Ddq9VS3ZfrnoNurem3omaswqSvTAT18gAM1vMI-jNrr0WB2HU4xh-DCEYNoJOmO3iSW-PJeaxeS6gP0VfuuqUm6JLSL3UKlk5dUFELRnyq4VqD3UDlXAG9IyxnJoNawlsksCAmvhmRsAkY0SMgAxSyjBAQO0zA5wZokYBJgydZB11d6U3sE0zQbTLrXTuviLBKt2cFzAtU-B9mtajSoD2pZ3tvH81DuUFh3BTDqFCTgARrxxKGBkodCx5hfmsFhIId5qhrC_P-gPFsUVXQUnWvMGF3ztDT0wiwKBdAdhLz8VM-wQr14CCNnGcDdYkZLBJtYJQLgJkLAhnFPRapwAlDrEsGYNF26kmXzqRluLtDp6YtDvnER-ExFwv_FHQlscfEhews4MchFaC5W46gCjPrwY8I-au00WoEuoH3WkvunZXKyl4VN09jZtgwHFaiGcKRKuvolcvKAQmiwifYLBwqfc4hQGu8jf8Z5mz8UjPdxIAGIDqb-_NFSkrFxfbszCv7ackdQHg-sNEyRVNIfYAAKWcLqfGcby2wUvcYmAAHkJxAIKVIqNOUffeWbAHArzhSRmKEDBGwP-G0DhstWEuy8yaBZAAEmALB-QxQXkAdRw5zH2PjoSVOxy2wXHVq3cvVcN7MbVXlpSFqgTSbkS9KuBwWwRVY1G5NzqwTtNkRfYJ51SazQOAI8Wkxta6GAwz36wg1Lm29uiLW5k5wd2HtXCewUSrQNnDzMx0sSMuGsjlnYCtgg4eNva8T9UzHYg6sNfQL1gPN0Bsr3V8xlueEQfh8YJHyH0fGpogKEsNALwIDxHD1cfPRUmnOAt8DZwKe09Hz76tj5uehKN6L89erXAy8Mcr9KH3oepsN6b1DmPbfZwd9QF3nvHyb39-U7VIf8f-_J6KuPjIk_s_T8243pPH35-00X6Xr71fzBg8PzEY_LIJ6VTQGAHeIIxOxboFSc7dAS7SIfnCPKPaHSzWHIqMAqACAkxL3THdgUaTgf_bvIHD5PTfmAnTXH3dtAgwA2gaqLaTvAAogoA_afAo_Rg2gFzVcAndAzAuDdYE6e9Q1WFD5CGKfLIL5PbIAv_Vg8PfNdYBTHbc_FnSGcPSMKQhglQ3peDJYIGKHMZLdOKdfO_FQu_DPLPHPZ_a_N_Eg2sZQj5RpSBVgetJWQGGeR_RCFScgtLVPNjDIWg3IHwgQQFLoRw9gK4EwyzCwdAhAnACNWgIgZvEtInEnMnWPWcWHRISMVwmQhXVmMcGFLIj5FzWnCSRXcwIGGbWuHw8PMvDzEdcbVRMTALadRbOdCQ2gA7NCJUfQlfIPH_HCRRSg1gxRK4SVaVDIeZRQ0YmVGmdgHSePKYjIFPKaMASGG9BYgQYvJfL7B5NREQqGMTcQvnOw-gwgxRADPom2O2GASMZY1YkYqVaYlnVAmTCaGAKaPYKlSGdgAAQgWnaHWLfBZwsFuLHEKlSg4O5gNjE0aXICTXNg-JWLHG-OKJrAJxBjEwP1tglFghqIw081HW8z0WsQtFgyaIW2IyW3nl0SsX8noV7n7jgEHksRHjEXHhEEngSRYlISOIEW4iZWnkpJY3QDQTw26EEXMTwXQAIR8OOzd26CCnLR9DHAyDgHPCwERBmAIFcggAEFRGy2wDyzsGzUNw0nt2h2enyUKjPQNLoHyyKjAAVUSNt1NKuDQGpSOCCjN0VU2mClCIlSAQyGnjlN9JUgVI1WVN1LVI1K1J1L1LlPeOpJZLEG6J3RZSr0MOQSJMRB4J10yBGB4L11LXJwrWKWsIeWZP0XQB4L2IrhpOyB4MONryALzJ4IA0Bjvx4MkxgFrJZMaRCJU1XEhh7MrJ4MvVpyLNzQHX9wsCFJFKAKaVUw7Op0jBbOp3HOBlXMgL0KhTyIcwrOsSrOpz9yDmim2BBwAmWVQHmyIwYAbX4FiWPH4CuH4CBGJCqG8AyAtF_HJCZBACawWRADWV1KEifIAp0hwHAp0jCnWH4HKFtggE1JAqQAAtykakwlgByx9B_IXnJEoESDzDyAKEnC1AtFfJBA_IEGgprH4CiDQFAv4HDg0DgCoosFgvBVtIRAgHgFAtUxo1EGQv4AAD1Uo7IcAAAOHAOmFi2sfgekjBRkoeOssePACeWAeikAQS8C5MHABmaS1ikAd-bIbvdS4SySiCvSgCqLCJX5C0aJDIWJGINZEy8CumHAVKWyh6VKCyvi6LCxWLFhZigSjS1KNyyS7ywQEi60EykS8SsKkAPgwdRxci3AXQSAFIC86ga8oLcCP6EAOI8kLIJ8l8s0WgC0KLWYGYfgeQBQb2IAA",__position:0,__code:"() => {\n  const [count, setCount] = useStorageState('PERSISTENT_COUNT', () => 25)\n  return (\n    <p>\n      persistent count: {count}\n      <br />\n      <button onClick={() => setCount(c => c + 1)}>increase</button>\n    </p>\n  )\n}",__scope:{props:this?this.props:n,useState:r.useState,useStorageState:i.j}},(function(){var e=c(Object(i.j)("PERSISTENT_COUNT",(function(){return 25})),2),t=e[0],n=e[1];return a.a.createElement("p",null,"persistent count: ",t,a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return n((function(e){return e+1}))}},"increase"))})))}}])&&p(n.prototype,u),f&&p(n,f),t}(a.a.Component)},"./src/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/react-use-promise-alternative/dist/index.js"),a=n.n(r);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,t){var n=o(a()(e,t),3),r=n[0],i=n[1];return[n[2],r,i]}var s=n("./node_modules/use-lodash-debounce-throttle/es/index.js"),u=n("./node_modules/react/index.js");function c(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];var i=Object(u.useRef)(e);i.current=e,Object(u.useEffect)((function(){var e=setInterval.apply(void 0,[function(){i.current.apply(i,arguments)},t].concat(a));return function(){clearInterval(e)}}),n)}var l=n("./node_modules/use-media/lib/index.js"),p=n.n(l);function g(e){var t=Object(u.useRef)(void 0);return Object(u.useEffect)((function(){t.current=e})),t.current}try{useprevious.displayName="useprevious",useprevious.__docgenInfo={description:"",displayName:"useprevious",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/use-previous.ts#useprevious"]={docgenInfo:useprevious.__docgenInfo,name:"useprevious",path:"src/use-previous.ts#useprevious"})}catch(C){}function m(e,t){var n=Object(u.useRef)(!0);Object(u.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)}var d=n("./node_modules/react-use-dimensions/es/index.js").a;function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e){return"function"===typeof e}function A(e,t){function n(){var n=function(e){var t=localStorage.getItem(e);if(null===t)return t;try{return JSON.parse(t)}catch(n){return console.error("[useStorageState] unexpected json ".concat(t),n),null}}(e);return null===n&&t?h(t)?t():t:n}var r=f(Object(u.useState)(n),2),a=r[0],o=r[1];return Object(u.useEffect)((function(){o(n())}),[e]),[a,function(t){o((function(n){var r=h(t)?t(n):t;return localStorage.setItem(e,JSON.stringify(r)),r}))}]}try{usestoragestate.displayName="usestoragestate",usestoragestate.__docgenInfo={description:"",displayName:"usestoragestate",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"match",required:!0,type:{name:"(regexp: string | RegExp) => RegExpMatchArray"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.",name:"search",required:!0,type:{name:"(regexp: string | RegExp) => number"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\rIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"(separator: string | RegExp, limit?: number) => string[]"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\rIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/use-storage-state.ts#usestoragestate"]={docgenInfo:usestoragestate.__docgenInfo,name:"usestoragestate",path:"src/use-storage-state.ts#usestoragestate"})}catch(C){}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=y(Object(u.useState)(e),2),n=t[0],r=t[1];return[n,function(e){"number"!==typeof e&&(e=1),r((function(t){return t+e}))}]}try{usecount.displayName="usecount",usecount.__docgenInfo={description:"",displayName:"usecount",props:{toString:{defaultValue:null,description:"Returns a string representation of an object.\nReturns a string representation of a function.\n@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.",name:"toString",required:!1,type:{name:"((radix?: number) => string) | (() => string)"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.\nReturns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"(() => number) | (() => Object)"}},toLocaleString:{defaultValue:null,description:"Converts a number to a string by using the current or specified locale.\nReturns a date converted to a string using the current locale.\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\n@param options An object that contains one or more properties that specify comparison options.",name:"toLocaleString",required:!1,type:{name:"((locales?: string | string[], options?: NumberFormatOptions) => string) | (() => string)"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/use-count.ts#usecount"]={docgenInfo:usecount.__docgenInfo,name:"usecount",path:"src/use-count.ts#usecount"})}catch(C){}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e){for(var t=b(Object(u.useState)(e),2),n=t[0],r=t[1],a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var c=s.a.apply(void 0,[function(e){r(e)}].concat(o));return m((function(){c(e)}),[e]),n}n.d(t,"i",(function(){return i})),n.d(t,"b",(function(){return s.a})),n.d(t,"k",(function(){return s.b})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return p.a})),n.d(t,"h",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return d})),n.d(t,"j",(function(){return A})),n.d(t,"a",(function(){return S})),n.d(t,"c",(function(){return v}));try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{toString:{defaultValue:null,description:"Returns a string representation of an object.\nReturns a string representation of a function.\n@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.",name:"toString",required:!1,type:{name:"((radix?: number) => string) | (() => string)"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.\nReturns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"(() => number) | (() => Object)"}},toLocaleString:{defaultValue:null,description:"Converts a number to a string by using the current or specified locale.\nReturns a date converted to a string using the current locale.\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\n@param options An object that contains one or more properties that specify comparison options.",name:"toLocaleString",required:!1,type:{name:"((locales?: string | string[], options?: NumberFormatOptions) => string) | (() => string)"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.ts#src"})}catch(C){}}}]);
//# sourceMappingURL=docs-use-storage-state.e87c81efc497ae50313c.js.map