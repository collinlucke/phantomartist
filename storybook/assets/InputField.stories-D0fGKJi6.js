import{j as p,a,c as T,F as be,B as ue}from"./Button-DqZuBoNp.js";import{r as b}from"./index-DRjF_FHU.js";import{T as ye,D as ve,S as xe,P as we,C as Te}from"./index-Dhgg0TSy.js";import"./jsx-runtime-DiklIkkE.js";import"./iframe-BapO7jI7.js";import"./index-B7ki2Uzk.js";import"./index-FTTXbSiM.js";import"./index-DrFu-skq.js";const r=({label:e,name:l,type:t="text",value:o,onChange:n,placeholder:s,required:i=!1,error:c,disabled:y=!1,readonly:h=!1,id:me,"data-testid":R,labelPosition:d="above",size:g="medium",autoResize:u=!1,className:m,onKeyDown:V,onDark:F=!1})=>{const x=b.useRef(null),w=me||(typeof e=="string"?`input-${e.toLowerCase().replace(/\s+/g,"-")}`:l?`input-${l}`:`input-${Math.random().toString(36).substring(2,9)}`),ce=v=>{n(v)},he=v=>{n(v),u&&x.current&&M(x.current)},M=v=>{v.style.height="auto",v.style.height=`${v.scrollHeight}px`};b.useLayoutEffect(()=>{x.current&&t==="textarea"&&(u?M(x.current):x.current.style.height="")},[o,u,t]);const W=e?p("label",{css:[f({labelPosition:d,size:g,autoResize:u,onDark:F}).label,m==null?void 0:m.label],htmlFor:w,children:[e,i&&a("span",{css:f({labelPosition:d,size:g,autoResize:u,onDark:F}).required,children:"*"})]}):null,ge=t==="textarea"?a("textarea",{ref:x,id:w,name:l,value:o,onChange:he,placeholder:s,required:i,disabled:y,readOnly:h,onKeyDown:V,"data-testid":R,css:[f({labelPosition:d,size:g,autoResize:u}).textarea,c&&f({labelPosition:d,size:g,autoResize:u}).inputError,y&&f({labelPosition:d,size:g,autoResize:u}).inputDisabled,h&&f({labelPosition:d,size:g,autoResize:u}).inputReadonly,m==null?void 0:m.input],"aria-describedby":c?`${w}-error`:void 0}):a("input",{id:w,name:l,type:t,value:o,onChange:ce,placeholder:s,required:i,disabled:y,readOnly:h,"data-testid":R,onKeyDown:V,css:[f({labelPosition:d,size:g,autoResize:u}).input,c&&f({labelPosition:d,size:g,autoResize:u}).inputError,y&&f({labelPosition:d,size:g,autoResize:u}).inputDisabled,h&&f({labelPosition:d,size:g,autoResize:u}).inputReadonly,m==null?void 0:m.input],"aria-describedby":c?`${w}-error`:void 0}),fe=c?a("div",{css:[f({labelPosition:d,size:g,autoResize:u}).error,m==null?void 0:m.error],id:`${w}-error`,role:"alert",children:c}):null;return p("div",{css:[f({labelPosition:d,size:g,autoResize:u}).container,m==null?void 0:m.container],children:[(d==="above"||d==="left")&&W,ge,(d==="below"||d==="right")&&W,fe]})},H=e=>{switch(e){case"large":return{padding:"0.75rem",fontSize:"1rem"};case"small":return{padding:"0.3rem",fontSize:"0.625rem"};default:return{padding:"0.5rem",fontSize:"0.875rem"}}},f=({labelPosition:e,size:l,autoResize:t,onDark:o})=>{var n,s;return{container:{display:"flex",flexDirection:e==="above"||e==="below"?"column":"row",gap:e==="left"||e==="right"?"0.75rem":"0.5rem",flex:"1 1 0%",width:"-webkit-fill-available",minWidth:0,alignItems:e==="left"||e==="right"?"center":"stretch"},label:{fontSize:"0.875rem",fontWeight:500,color:o?T.tertiary[50]:T.primary[900],display:"flex",alignItems:"center",gap:"0.25rem",marginTop:e==="below"?"0.25rem":"0",marginRight:e==="left"?"0.5rem":"0",marginLeft:e==="right"?"0.5rem":"0",alignSelf:e==="left"||e==="right"?"center":"flex-start"},required:{color:"#ef4444",fontSize:"0.875rem"},input:{...H(l),border:`1px solid ${(n=T)==null?void 0:n.tertiary[500]}`,borderRadius:"6px",transition:"all 0.2s ease",minWidth:0,"&:focus":{outline:"2px solid #3b82f6",outlineOffset:"2px",borderColor:"#3b82f6"},"&::placeholder":{color:"#9ca3af"}},textarea:{...H(l),border:`1px solid ${(s=T)==null?void 0:s.tertiary[500]}`,borderRadius:"6px",transition:"border-color 0.2s ease, box-shadow 0.2s ease",minWidth:0,minHeight:"3rem",resize:t?"none":"vertical",overflow:t?"hidden":"auto","&:focus":{outline:"2px solid #3b82f6",outlineOffset:"2px",borderColor:"#3b82f6"},"&::placeholder":{color:"#9ca3af"}},inputError:{borderColor:"#ef4444","&:focus":{outline:"2px solid #ef4444",borderColor:"#ef4444"}},inputDisabled:{backgroundColor:"#f9fafb",color:"#6b7280",cursor:"not-allowed"},inputReadonly:{backgroundColor:"transparent",outline:"none",border:"none",cursor:"default"},error:{fontSize:"0.875rem",color:"#ef4444",marginTop:"0.25rem"}}};r.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:`| 'text'
| 'email'
| 'password'
| 'tel'
| 'url'
| 'textarea'
| 'search'
| 'number'`,elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'textarea'"},{name:"literal",value:"'search'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void`,signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readonly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},onDark:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onKeyDown:{required:!1,tsType:{name:"ReactKeyboardEventHandler",raw:`React.KeyboardEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>`,elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'above' | 'below'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'above'"},{name:"literal",value:"'below'"}]},description:"",defaultValue:{value:"'above'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  container?: CSSObject;
  input?: CSSObject;
  label?: CSSObject;
  error?: CSSObject;
}`,signature:{properties:[{key:"container",value:{name:"CSSObject",required:!1}},{key:"input",value:{name:"CSSObject",required:!1}},{key:"label",value:{name:"CSSObject",required:!1}},{key:"error",value:{name:"CSSObject",required:!1}}]}},description:""}}};const He={component:r,title:"PhantomArtist/InputField",tags:["autodocs"],parameters:{componentSubtitle:"A consolidated form input component with flexible configuration options.",docs:{page:()=>p(be,{children:[a(ye,{}),a(ve,{}),a(xe,{}),a(we,{}),a(Te,{})]})}},argTypes:{type:{control:"select",options:["text","email","password","textarea","tel","url"],description:"Input type - supports all standard HTML input types plus textarea"},labelPosition:{control:"select",options:["above","below","left","right"],description:"Position of the label relative to the input"},size:{control:"select",options:["small","medium","large"],description:"Size variant for the input"},autoResize:{control:"boolean",description:"Auto-resize textarea based on content (only applies to textarea type)"},error:{control:"text",description:"Error message to display (empty string for no error)"},readonly:{control:"boolean",description:"Make the input read-only"},required:{control:"boolean",description:"Mark the input as required"}}},C={args:{label:"Default Input",placeholder:"Enter some text...",type:"text",labelPosition:"above",size:"medium"}},Ce=()=>{const[e,l]=b.useState({text:"",email:"",password:"",tel:"",url:"",textarea:""}),t=o=>{const{name:n,value:s}=o.target;l(i=>({...i,[n]:s}))};return p("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"400px"},children:[a(r,{label:"Text Input",type:"text",name:"text",value:e.text,onChange:t,placeholder:"Enter text..."}),a(r,{label:"Email Input",type:"email",name:"email",value:e.email,onChange:t,placeholder:"Enter email..."}),a(r,{label:"Password Input",type:"password",name:"password",value:e.password,onChange:t,placeholder:"Enter password..."}),a(r,{label:"Phone Number",type:"tel",name:"tel",value:e.tel,onChange:t,placeholder:"(555) 123-4567"}),a(r,{label:"Website URL",type:"url",name:"url",value:e.url,onChange:t,placeholder:"https://example.com"}),a(r,{label:"Text Area",type:"textarea",name:"textarea",value:e.textarea,onChange:t,placeholder:"Enter some longer text..."})]})},S={controls:{disable:!0},render:Ce,docs:{description:{story:"Demonstrates all supported input types with their respective placeholder text and validation."}}},Se=()=>{const[e,l]=b.useState(""),[t,o]=b.useState("Type multiple lines here to test toggling auto-resize on and off..."),[n,s]=b.useState(!0);return p("div",{style:{maxWidth:"500px"},children:[a("div",{style:{marginBottom:"2rem"},children:a(r,{label:"Auto-Resizing Textarea",type:"textarea",value:e,onChange:y=>{l(y.target.value)},placeholder:"Start typing and watch the textarea grow automatically...",autoResize:!0})}),p("div",{children:[a("h3",{children:"Toggle Auto-Resize Test"}),p("div",{style:{marginBottom:"1rem",display:"flex",gap:"1rem",alignItems:"center"},children:[a(ue,{onClick:()=>s(!n),kind:n?"secondary":"primary",children:n?"Disable Auto-Resize":"Enable Auto-Resize"}),p("span",{style:{fontWeight:"bold"},children:["Current: ",n?"Auto-Resize ON":"Auto-Resize OFF"]})]}),a(r,{label:"Toggle Textarea",type:"textarea",value:t,onChange:y=>{o(y.target.value)},autoResize:n,placeholder:"Test toggling auto-resize with this textarea..."}),p("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f0f0f0",borderRadius:"4px"},children:[a("strong",{children:"Test:"})," Add multiple lines, then toggle auto-resize on/off. When disabled, height should reset to CSS default."]})]})]})},E={args:{autoResize:!1},render:Se,parameters:{docs:{description:{story:"Textarea that automatically adjusts its height based on content. Try typing multiple lines!"}}}},Ee=()=>{const[e,l]=b.useState({above:"",below:"",left:"",right:""}),t=o=>{const{name:n,value:s}=o.target;l(i=>({...i,[n]:s}))};return p("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:"600px"},children:[a(r,{label:"Label Above (Default)",labelPosition:"above",name:"above",value:e.above,onChange:t,placeholder:"Label is positioned above..."}),a(r,{label:"Label Below",labelPosition:"below",name:"below",value:e.below,onChange:t,placeholder:"Label is positioned below..."}),a(r,{label:"Label Left",labelPosition:"left",name:"left",value:e.left,onChange:t,placeholder:"Label is on the left..."}),a(r,{label:"Label Right",labelPosition:"right",name:"right",value:e.right,onChange:t,placeholder:"Label is on the right..."})]})},I={render:Ee,parameters:{docs:{description:{story:"Shows all available label positioning options. Each position uses flexbox for proper alignment."}}}},Ie=()=>{const[e,l]=b.useState({small:"",medium:"",large:""}),t=o=>{const{name:n,value:s}=o.target;l(i=>({...i,[n]:s}))};return p("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"400px"},children:[a(r,{label:"Small Size",size:"small",name:"small",value:e.small,onChange:t,placeholder:"Small input..."}),a(r,{label:"Medium Size (Default)",size:"medium",name:"medium",value:e.medium,onChange:t,placeholder:"Medium input..."}),a(r,{label:"Large Size",size:"large",name:"large",value:e.large,onChange:t,placeholder:"Large input..."})]})},L={render:Ie,parameters:{docs:{description:{story:"Demonstrates the three available size variants: small, medium (default), and large."}}}},Le=()=>{const[e,l]=b.useState({normal:"",error:"invalid@email"}),t=o=>{const{name:n,value:s}=o.target;l(i=>({...i,[n]:s}))};return p("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"400px"},children:[a(r,{label:"Normal State",name:"normal",value:e.normal,onChange:t,placeholder:"This is a normal input..."}),a(r,{label:"Error State",type:"email",name:"error",value:e.error,onChange:t,placeholder:"Enter valid email...",error:"Please enter a valid email address"})]})},z={render:Le,parameters:{docs:{description:{story:"Shows normal and error states. Error state applies visual styling to indicate validation issues."}}}},q={render:()=>p("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"400px"},children:[a(r,{label:"Normal Input",value:"You can edit this",onChange:()=>{},placeholder:"Normal input..."}),a(r,{label:"Read-only Input",value:"You cannot edit this",onChange:()=>{},readonly:!0}),a(r,{label:"Disabled Input",value:"This is disabled",onChange:()=>{},disabled:!0})]}),parameters:{docs:{description:{story:"Demonstrates readonly and disabled states for different use cases."}}}},ze=()=>{const[e,l]=b.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:"",bio:"",website:"",age:""}),[t,o]=b.useState({email:"",password:"",confirmPassword:""}),n=i=>{const{name:c,value:y}=i.target;l(h=>({...h,[c]:y})),c==="email"&&t.email&&o(h=>({...h,email:""})),c==="password"&&t.password&&o(h=>({...h,password:""})),c==="confirmPassword"&&t.confirmPassword&&o(h=>({...h,confirmPassword:""}))},s=()=>{const i={email:e.email.includes("@")?"":"Please enter a valid email address",password:e.password.length<6?"Password must be at least 6 characters":"",confirmPassword:e.password!==e.confirmPassword?"Passwords do not match":""};o(i)};return p("div",{style:{maxWidth:"600px",padding:"2rem"},children:[a("h3",{style:{marginBottom:"2rem"},children:"User Registration Form"}),p("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[p("div",{style:{display:"flex",gap:"1rem"},children:[a(r,{label:"First Name",name:"firstName",value:e.firstName,onChange:n,placeholder:"John",required:!0,size:"medium"}),a(r,{label:"Last Name",name:"lastName",value:e.lastName,onChange:n,placeholder:"Doe",required:!0,size:"medium"})]}),a(r,{label:"Email Address",type:"email",name:"email",value:e.email,onChange:n,placeholder:"john.doe@example.com",required:!0,error:t.email}),a(r,{label:"Password",type:"password",name:"password",value:e.password,onChange:n,placeholder:"Minimum 6 characters",required:!0,error:t.password,labelPosition:"left"}),a(r,{label:"Confirm Password",type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:n,placeholder:"Re-enter your password",required:!0,error:t.confirmPassword,labelPosition:"left"}),a(r,{label:"Phone Number",type:"tel",name:"phone",value:e.phone,onChange:n,placeholder:"(555) 123-4567",size:"small"}),a(r,{label:"Website",type:"url",name:"website",value:e.website,onChange:n,placeholder:"https://yourwebsite.com"}),a(r,{label:"Age",type:"text",name:"age",value:e.age,onChange:n,placeholder:"25",size:"small"}),a(r,{label:"Tell us about yourself",type:"textarea",name:"bio",value:e.bio,onChange:n,placeholder:"Share a bit about your background, interests, or anything you'd like others to know...",autoResize:!0}),a("div",{style:{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid #eee"},children:a(ue,{type:"button",onClick:s,children:"Validate Form"})})]})]})},D={args:{autoResize:!0},render:ze,parameters:{docs:{description:{story:"A complete form example showcasing all InputField features in a realistic registration form scenario. Includes validation, different input types, sizes, and label positions."}}}},A={args:{label:"Interactive Input",placeholder:"Try changing the controls...",type:"text",labelPosition:"above",size:"medium",autoResize:!1,error:"",readonly:!1,required:!1}};var k,P,j;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Default Input',
    placeholder: 'Enter some text...',
    type: 'text',
    labelPosition: 'above',
    size: 'medium'
  }
}`,...(j=(P=C.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var O,$,B;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  controls: {
    disable: true
  },
  render: InputTypesComponent,
  docs: {
    description: {
      story: 'Demonstrates all supported input types with their respective placeholder text and validation.'
    }
  }
}`,...(B=($=S.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var Y,_,K;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    autoResize: false
  },
  render: TextareaWithAutoResizeComponent,
  parameters: {
    docs: {
      description: {
        story: 'Textarea that automatically adjusts its height based on content. Try typing multiple lines!'
      }
    }
  }
}`,...(K=(_=E.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var U,J,G;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: LabelPositionsComponent,
  parameters: {
    docs: {
      description: {
        story: 'Shows all available label positioning options. Each position uses flexbox for proper alignment.'
      }
    }
  }
}`,...(G=(J=I.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Q,X,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: SizeVariantsComponent,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three available size variants: small, medium (default), and large.'
      }
    }
  }
}`,...(Z=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var N,ee,ae;z.parameters={...z.parameters,docs:{...(N=z.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ErrorStatesComponent,
  parameters: {
    docs: {
      description: {
        story: 'Shows normal and error states. Error state applies visual styling to indicate validation issues.'
      }
    }
  }
}`,...(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '400px'
  }}>
      <InputField label="Normal Input" value="You can edit this" onChange={() => {}} placeholder="Normal input..." />
      <InputField label="Read-only Input" value="You cannot edit this" onChange={() => {}} readonly={true} />
      <InputField label="Disabled Input" value="This is disabled" onChange={() => {}} disabled={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates readonly and disabled states for different use cases.'
      }
    }
  }
}`,...(ne=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,le,se;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    autoResize: true
  },
  render: CompleteFormExampleComponent,
  parameters: {
    docs: {
      description: {
        story: 'A complete form example showcasing all InputField features in a realistic registration form scenario. Includes validation, different input types, sizes, and label positions.'
      }
    }
  }
}`,...(se=(le=D.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,pe;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Input',
    placeholder: 'Try changing the controls...',
    type: 'text',
    labelPosition: 'above',
    size: 'medium',
    autoResize: false,
    error: '',
    readonly: false,
    required: false
  }
}`,...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const ke=["Default","InputTypes","TextareaWithAutoResize","LabelPositions","SizeVariants","ErrorStates","SpecialStates","CompleteFormExample","Playground"];export{D as CompleteFormExample,C as Default,z as ErrorStates,S as InputTypes,I as LabelPositions,A as Playground,L as SizeVariants,q as SpecialStates,E as TextareaWithAutoResize,ke as __namedExportsOrder,He as default};
