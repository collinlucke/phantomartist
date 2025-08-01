import{u as x,a as e,b as E,j as a,B as r}from"./Button-tyhV8qOq.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const o=({children:t,className:c,direction:p="horizontal",gap:m="medium",dataTestId:j,ariaLabel:g="Button group"})=>{const n=x();return console.log(g),e("div",{"aria-label":g,role:"group",css:[E.buttonGroup({direction:p,gap:m}),(n==null?void 0:n.buttonGroup)&&n.buttonGroup({direction:p,gap:m}),c==null?void 0:c.buttonGroup],className:`pa-button-group ${p} ${m}`,"data-testid":j,children:t})};o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""},className:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  buttonGroup?: CSSObject;
}`,signature:{properties:[{key:"buttonGroup",value:{name:"CSSObject",required:!1}}]}},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},dataTestId:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button group'",computed:!1}}}};const _={title:"PhantomArtist/ButtonGroup",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{options:["horizontal","vertical"],control:{type:"inline-radio"}},gap:{options:["small","medium","large"],control:{type:"inline-radio"}}}},s={args:{direction:"horizontal",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},i={args:{direction:"vertical",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},d={args:{direction:"horizontal",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"primary",children:"Primary"}),e(r,{kind:"secondary",children:"Secondary"}),e(r,{kind:"ghost",children:"Ghost"})]})},u={args:{direction:"horizontal",gap:"large"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},l={args:{direction:"horizontal",gap:"small"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})};var h,B,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var G,v,y;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,f,b;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="ghost">Ghost</Button>
    </ButtonGroup>
}`,...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,S,L;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'large'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var M,T,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'small'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const O=["Default","Vertical","MixedKinds","LargeGap","SmallGap"];export{s as Default,u as LargeGap,d as MixedKinds,l as SmallGap,i as Vertical,O as __namedExportsOrder,_ as default};
