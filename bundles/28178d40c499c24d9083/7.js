(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1465:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(3),n=r(2),s=r(30);const o=window.crypto.subtle||window.crypto.webkitSubtle;function i(e,t){return{message:e,friendlyText:t}}function c(){return Object(n.b)("Your browser does not support the required cryptography extensions")}async function l(e,t){const r=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let r=0;for(;;){const e=t.indexOf("\n",r);if(e<0)throw new Error("Header line not found");const a=t.slice(r,e).trim();if(r=e+1,a===u)break}const a=r;for(;;){const e=t.indexOf("\n",r);if(t.slice(r,e<0?void 0:e).trim()===d)break;if(e<0)throw new Error("Trailer line not found");r=e+1}const n=r;return function(e){const t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}(t.slice(a,n))}(e),a=s.b.get().brand;if(r.length<1)throw i("Invalid file: too short",Object(n.b)("Not a valid %(brand)s keyfile",{brand:a}));if(1!==r[0])throw i("Unsupported version",Object(n.b)("Not a valid %(brand)s keyfile",{brand:a}));const l=r.length-69;if(l<0)throw i("Invalid file: too short",Object(n.b)("Not a valid %(brand)s keyfile",{brand:a}));const h=r.subarray(1,17),y=r.subarray(17,33),b=r[33]<<24|r[34]<<16|r[35]<<8|r[36],m=r.subarray(37,37+l),w=r.subarray(-32),[f,g]=await p(h,b,t),E=r.subarray(0,-32);let x,v;try{x=await o.verify({name:"HMAC"},g,w,E)}catch(e){throw i("subtleCrypto.verify failed: "+e,c())}if(!x)throw i("hmac mismatch",Object(n.b)("Authentication check failed: incorrect password?"));try{v=await o.decrypt({name:"AES-CTR",counter:y,length:64},f,m)}catch(e){throw i("subtleCrypto.decrypt failed: "+e,c())}return(new TextDecoder).decode(new Uint8Array(v))}async function h(e,t,r){const a=(r=r||{}).kdf_rounds||5e5,n=new Uint8Array(16);window.crypto.getRandomValues(n);const s=new Uint8Array(16);window.crypto.getRandomValues(s),s[8]&=127;const[l,h]=await p(n,a,t),b=(new TextEncoder).encode(e);let m;try{m=await o.encrypt({name:"AES-CTR",counter:s,length:64},l,b)}catch(e){throw i("subtleCrypto.encrypt failed: "+e,c())}const w=new Uint8Array(m),f=1+n.length+s.length+4+w.length+32,g=new Uint8Array(f);let E=0;g[E++]=1,g.set(n,E),E+=n.length,g.set(s,E),E+=s.length,g[E++]=a>>24,g[E++]=a>>16&255,g[E++]=a>>8&255,g[E++]=255&a,g.set(w,E),E+=w.length;const x=g.subarray(0,E);let v;try{v=await o.sign({name:"HMAC"},h,x)}catch(e){throw i("subtleCrypto.sign failed: "+e,c())}const C=new Uint8Array(v);return g.set(C,E),function(e){const t=96,r=Math.ceil(e.length/t),a=new Array(r+3);a[0]=u;let n,s=0;for(n=1;n<=r;n++)a[n]=y(e.subarray(s,s+t)),s+=t;return a[n++]=d,a[n]="",(new TextEncoder).encode(a.join("\n")).buffer}(g)}async function p(e,t,r){const n=new Date;let s,l;try{s=await o.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw i("subtleCrypto.importKey failed: "+e,c())}try{l=await o.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},s,512)}catch(e){throw i("subtleCrypto.deriveBits failed: "+e,c())}const h=new Date;a.a.log("E2e import/export: deriveKeys took "+(h.getTime()-n.getTime())+"ms");const p=l.slice(0,32),u=l.slice(32),d=o.importKey("raw",p,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch((e=>{throw i("subtleCrypto.importKey failed for AES key: "+e,c())})),y=o.importKey("raw",u,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch((e=>{throw i("subtleCrypto.importKey failed for HMAC key: "+e,c())}));return Promise.all([d,y])}const u="-----BEGIN MEGOLM SESSION DATA-----",d="-----END MEGOLM SESSION DATA-----";function y(e){const t=String.fromCharCode.apply(null,Array.from(e));return window.btoa(t)}},1675:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(1),n=r.n(a),s=r(1418),o=r.n(s),i=r(0),c=r.n(i),l=r(3),h=r(2),p=r(1465),u=r(38),d=r(50),y=function(e){return e.Edit="edit",e.Exporting="exporting",e}(y||{});class b extends c.a.Component{constructor(e){super(e),n()(this,"unmounted",!1),n()(this,"onPassphraseFormSubmit",(e=>{e.preventDefault();const t=this.state.passphrase1;return t!==this.state.passphrase2?(this.setState({errStr:Object(h.b)("Passphrases must match")}),!1):t?(this.startExport(t),!1):(this.setState({errStr:Object(h.b)("Passphrase must not be empty")}),!1)})),n()(this,"onCancelClick",(e=>(e.preventDefault(),this.props.onFinished(!1),!1))),n()(this,"onPassphraseChange",((e,t)=>{this.setState({[t]:e.target.value})})),this.state={phase:y.Edit,errStr:null,passphrase1:"",passphrase2:""}}componentWillUnmount(){this.unmounted=!0}startExport(e){Promise.resolve().then((()=>this.props.matrixClient.exportRoomKeys())).then((t=>p.b(JSON.stringify(t),e))).then((e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});o.a.saveAs(t,"element-keys.txt"),this.props.onFinished(!0)})).catch((e=>{if(l.a.error("Error exporting e2e keys:",e),this.unmounted)return;const t=e.friendlyText||Object(h.b)("Unknown error");this.setState({errStr:t,phase:y.Edit})})),this.setState({errStr:null,phase:y.Exporting})}render(){const e=this.state.phase===y.Exporting;return c.a.createElement(u.a,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:Object(h.b)("Export room keys")},c.a.createElement("form",{onSubmit:this.onPassphraseFormSubmit},c.a.createElement("div",{className:"mx_Dialog_content"},c.a.createElement("p",null,Object(h.b)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),c.a.createElement("p",null,Object(h.b)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a passphrase below, which will be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),c.a.createElement("div",{className:"error"},this.state.errStr),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement(d.a,{label:Object(h.b)("Enter passphrase"),value:this.state.passphrase1,onChange:e=>this.onPassphraseChange(e,"passphrase1"),autoFocus:!0,size:64,type:"password",disabled:e})),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement(d.a,{label:Object(h.b)("Confirm passphrase"),value:this.state.passphrase2,onChange:e=>this.onPassphraseChange(e,"passphrase2"),size:64,type:"password",disabled:e})))),c.a.createElement("div",{className:"mx_Dialog_buttons"},c.a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:Object(h.b)("Export"),disabled:e}),c.a.createElement("button",{onClick:this.onCancelClick,disabled:e},Object(h.b)("Cancel")))))}}}}]);
//# sourceMappingURL=7.js.map