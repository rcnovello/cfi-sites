import{useStore as e,useSelector as n,useState as t,className as r,useEffect as o}from"gridjs";var l,c,i;function s(e,n,t,r,o){var l={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++i:o};return null==o&&null!=c.vnode&&c.vnode(l),l}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}l=[].slice,c={__e:function(e,n,t,r){for(var o,l,c;n=n.__;)if((o=n.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),c=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(n){e=n}throw e}},i=0;const u=e=>n=>{var t;const r=(null==(t=n.rowSelection)?void 0:t.rowIds)||[];return r.indexOf(e)>-1?n:a({},n,{rowSelection:{rowIds:[e,...r]}})},d=e=>n=>{var t;const r=(null==(t=n.rowSelection)?void 0:t.rowIds)||[],o=r.indexOf(e);if(-1===o)return n;const l=[...r];return l.splice(o,1),a({},n,{rowSelection:{rowIds:l}})};var _={__proto__:null,CheckRow:u,UncheckRow:d};function f(c){const{dispatch:i}=e(),a=n(e=>e.rowSelection),[_,f]=t(!1),p=r("tr","selected"),v=r("checkbox"),h=e=>void 0!==e.row,w=()=>this.base&&this.base.parentElement&&this.base.parentElement.parentElement;o(()=>{var e;null!=(e=c.cell)&&e.data&&h(c)&&m()},[]),o(()=>{const e=w();if(!e)return;const n=((null==a?void 0:a.rowIds)||[]).indexOf(c.row.id)>-1;f(n),n?e.classList.add(p):e.classList.remove(p)},[a]);const m=()=>{var e;i(u(c.row.id)),null==(e=c.cell)||e.update(!0)};return h(c)?function(e,n,t){var r,o,c,i={};for(c in n)"key"==c?r=n[c]:"ref"==c?o=n[c]:i[c]=n[c];if(arguments.length>2&&(i.children=arguments.length>3?l.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(c in e.defaultProps)void 0===i[c]&&(i[c]=e.defaultProps[c]);return s(e,i,r,o,null)}("input",{type:"checkbox",checked:_,onChange:()=>{var e;_?(i(d(c.row.id)),null==(e=c.cell)||e.update(!1)):m()},className:v}):null}export{f as RowSelection,_ as RowSelectionActions};
//# sourceMappingURL=selection.modern.mjs.map
