var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){t.parentNode.removeChild(t)}let u;function a(t){u=t}const f=[],i=[],l=[],d=[],$=Promise.resolve();let p=!1;function h(t){l.push(t)}const g=new Set;let m=0;function y(){const t=u;do{for(;m<f.length;){const t=f[m];m++,a(t),_(t.$$)}for(a(null),f.length=0,m=0;i.length;)i.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];g.has(n)||(g.add(n),n())}l.length=0}while(f.length);for(;d.length;)d.pop()();p=!1,g.clear(),a(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const b=new Set;function x(t,n){-1===t.$$.dirty[0]&&(f.push(t),p||(p=!0,$.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,f,i,l,d,$,p,g=[-1]){const m=u;a(c);const _=c.$$={fragment:null,ctx:null,props:$,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:f.target||m.$$.root};p&&p(_.root);let k=!1;if(_.ctx=i?i(c,f.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return _.ctx&&d(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),k&&x(c,t)),n})):[],_.update(),k=!0,o(_.before_update),_.fragment=!!l&&l(_.ctx),f.target){if(f.hydrate){const t=(E=f.target,Array.from(E.childNodes));_.fragment&&_.fragment.l(t),t.forEach(s)}else _.fragment&&_.fragment.c();f.intro&&((v=c.$$.fragment)&&v.i&&(b.delete(v),v.i(w))),function(t,e,c,s){const{fragment:u,on_mount:a,on_destroy:f,after_update:i}=t.$$;u&&u.m(e,c),s||h((()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(h)}(c,f.target,f.anchor,f.customElement),y()}var v,w,E;a(m)}function v(t){return[]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),k(this,t,v,null,c,{})}}({target:document.body})}();
//# sourceMappingURL=MainPanel.js.map