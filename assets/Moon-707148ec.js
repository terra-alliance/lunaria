import{r as a,u as m,a as p,b as l,j as t,c as h}from"./index-560f8749.js";import{u as x}from"./useCursor-02116409.js";function v({...n}){const[r,o]=a.useState(!1),u=m({map:"https://res.cloudinary.com/dexin8o58/image/upload/v1684959064/moon_s8cjwu.webp"});x(r);const e=a.useRef(),{gl:i}=p();return l((d,s)=>{var c=h.getElapsedTime();e.current.rotation.y+=s*.1,e.current.rotation.z+=s*.1,e.current.position.y=Math.sin(c*.1)*10+2}),t.jsxs("mesh",{ref:e,onUpdate:()=>i.autoClear=!1,onClick:()=>{},onPointerOver:()=>o(!0),onPointerOut:()=>o(!1),...n,children:[t.jsx("sphereGeometry",{args:[1,64,32]}),t.jsx("meshStandardMaterial",{...u,bumpScale:.2,color:r?"hotpink":"white"})]})}export{v as default};