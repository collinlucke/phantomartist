const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-ChEI-nsM.js","./index-DRjF_FHU.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./iframe-BZmXCv41.js";import{r as s,R as n}from"./index-DRjF_FHU.js";import{ak as p,al as h,am as E,an as d}from"./index-BmqCvpxa.js";import{c as R}from"./client-CVljWSDJ.js";import"../sb-preview/runtime.js";import"./index-rX-Bn4lm.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";var a=new Map;function v(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await g(t,r);if(v()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(f,{callback:m},e)),i},_=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},g=async(e,t)=>{let r=a.get(e);return r||(r=R(e,t),a.set(e,r)),r},x={code:p,a:h,...E},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},P=class{constructor(){this.render=async(e,t,r)=>{let o={...x,...t==null?void 0:t.components},i=d;return new Promise((m,c)=>{l(async()=>{const{MDXProvider:u}=await import("./index-ChEI-nsM.js");return{MDXProvider:u}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:u})=>w(n.createElement(y,{showException:c,key:Math.random()},n.createElement(u,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{_(e)}}};export{P as DocsRenderer,x as defaultComponents};