import e from"../../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js";import r from"../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js";import t from"../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js";import o from"@emotion/styled";import{useTab as n}from"../Hooks/useTab.js";import{jsx as i}from"react/jsx-runtime";var c,l=["tabId","children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var a=function(e){var r=e.tabId,o=e.children,c=t(e,l),p=n().changeTab;return i(b,s(s({},c),{},{tabId:r,onClick:function(e){e.preventDefault(),p({tabId:r})},children:o}))},b=o.div(c||(c=e(["\n  padding          : 16px;\n  color: black;\n  background-color : ",";\n  border-top       : 1px solid #dee2e6;\n  display          : flex;\n  justify-content  : flex-end;\n"])),(function(e){var r=e.b;return null!=r?r:"#fff1f1"}));export{a as Item};
//# sourceMappingURL=Item.js.map
