import e from"react";import{createPortal as r}from"react-dom";import{ModalContext as t}from"../ModalContext.js";import{useModalToProvider as o}from"../useModal.js";var m=function(m){var a=m.children,d=m.portalId,l=o();return d?r(e.createElement(t.Provider,{value:l},a),document.getElementById(d)):e.createElement(t.Provider,{value:l},a)};export{m as Provider};
//# sourceMappingURL=Provider.js.map
