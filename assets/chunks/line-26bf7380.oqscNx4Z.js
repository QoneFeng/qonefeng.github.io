import{a as h}from"./array-b7dcf730.Nw74a44z.js";import{w as v,c as o}from"./path-39bad7e2.aUcfwwLI.js";import{r as d}from"../app.GR63D2vF.js";function w(t){return t[0]}function b(t){return t[1]}function P(t,r){var s=o(!0),f=null,l=d,u=null,m=v(e);t=typeof t=="function"?t:t===void 0?w:o(t),r=typeof r=="function"?r:r===void 0?b:o(r);function e(n){var i,g=(n=h(n)).length,p,c=!1,a;for(f==null&&(u=l(a=m())),i=0;i<=g;++i)!(i<g&&s(p=n[i],i,n))===c&&((c=!c)?u.lineStart():u.lineEnd()),c&&u.point(+t(p,i,n),+r(p,i,n));if(a)return u=null,a+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:o(+n),e):t},e.y=function(n){return arguments.length?(r=typeof n=="function"?n:o(+n),e):r},e.defined=function(n){return arguments.length?(s=typeof n=="function"?n:o(!!n),e):s},e.curve=function(n){return arguments.length?(l=n,f!=null&&(u=l(f)),e):l},e.context=function(n){return arguments.length?(n==null?f=u=null:u=l(f=n),e):f},e}export{P as l};
