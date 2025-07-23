import{u as q,a as e,b as x,j as a,B as r}from"./Button-C7FraPUY.js";import"./jsx-runtime-DwRxq3ZX.js";import"./index-BX3iQpgp.js";const o=({children:t,className:c,direction:p="horizontal",gap:m="medium",dataTestId:j})=>{const n=q();return e("div",{css:[x.buttonGroup({direction:p,gap:m}),(n==null?void 0:n.buttonGroup)&&n.buttonGroup({direction:p,gap:m}),c==null?void 0:c.buttonGroup],className:`pa-button-group ${p} ${m}`,"data-testid":j,children:t})};o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""},className:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  buttonGroup?: CSSObject;
}`,signature:{properties:[{key:"buttonGroup",value:{name:"CSSObject",required:!1}}]}},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},dataTestId:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"Components/ButtonGroup",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{options:["horizontal","vertical"],control:{type:"inline-radio"}},gap:{options:["small","medium","large"],control:{type:"inline-radio"}}}},s={args:{direction:"horizontal",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},i={args:{direction:"vertical",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},d={args:{direction:"horizontal",gap:"medium"},render:t=>a(o,{...t,children:[e(r,{kind:"primary",children:"Primary"}),e(r,{kind:"secondary",children:"Secondary"}),e(r,{kind:"ghost",children:"Ghost"})]})},u={args:{direction:"horizontal",gap:"large"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})},l={args:{direction:"horizontal",gap:"small"},render:t=>a(o,{...t,children:[e(r,{kind:"ghost",children:"Arena"}),e(r,{kind:"ghost",children:"Leader Boards"}),e(r,{kind:"ghost",children:"All Movies"})]})};var g,h,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var k,G,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(v=(G=i.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var y,A,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'medium'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="primary">Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="ghost">Ghost</Button>
    </ButtonGroup>
}`,...(f=(A=d.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var z,S,b;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'large'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var L,M,T;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'small'
  },
  render: args => <ButtonGroup {...args}>
      <Button kind="ghost">Arena</Button>
      <Button kind="ghost">Leader Boards</Button>
      <Button kind="ghost">All Movies</Button>
    </ButtonGroup>
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const _=["Default","Vertical","MixedKinds","LargeGap","SmallGap"];export{s as Default,u as LargeGap,d as MixedKinds,l as SmallGap,i as Vertical,_ as __namedExportsOrder,V as default};
