import{j as W,r as a,R as ce,a as de}from"./vendor.07001dbe.js";const ae=function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))j(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&j(f)}).observe(document,{childList:!0,subtree:!0});function h(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function j(r){if(r.ep)return;r.ep=!0;const c=h(r);fetch(r.href,c)}};ae();const e=W.exports.jsx,t=W.exports.jsxs,Q=W.exports.Fragment,ue=({number:x})=>{const[F,h]=a.exports.useState("black");return t("div",{children:[t("h5",{style:{color:F},children:["Sector N\xB0",x]}),t("div",{children:[e("label",{htmlFor:"sectorColor",children:"Selecciona un color para el sector: "}),e("input",{onChange:r=>{h(r.target.value)},type:"color",name:"sectorColor",id:"sectorColor"})]}),t("div",{children:[e("label",{htmlFor:"iFrom",children:"Posici\xF3n i inicial: "}),e("input",{type:"text",name:"iFrom",id:"iFrom"})]}),t("div",{children:[e("label",{htmlFor:"jFrom",children:"Posici\xF3n j inicial: "}),e("input",{type:"text",name:"jFrom",id:"jFrom"})]}),t("div",{children:[e("label",{htmlFor:"kFrom",children:"Posici\xF3n k inicial: "}),e("input",{type:"text",name:"kFrom",id:"kFrom"})]}),t("div",{children:[e("label",{htmlFor:"iTo",children:"Posici\xF3n i final: "}),e("input",{type:"text",name:"iTo",id:"iTo"})]}),t("div",{children:[e("label",{htmlFor:"jTo",children:"Posici\xF3n j final: "}),e("input",{type:"text",name:"jTo",id:"jTo"})]}),t("div",{children:[e("label",{htmlFor:"kTo",children:"Posici\xF3n k final: "}),e("input",{type:"text",name:"kTo",id:"kTo"})]}),t("div",{children:[e("label",{htmlFor:"porosity",children:"Porosidad espec\xEDfica del sector: "}),e("input",{type:"text",name:"porosity",id:"porosity"})]}),t("div",{children:[e("label",{htmlFor:"sw",children:"Sw espec\xEDfica del sector: "}),e("input",{type:"text",name:"sw",id:"sw"})]}),t("div",{children:[e("label",{htmlFor:"boi",children:"Boi espec\xEDfico del sector: "}),e("input",{type:"text",name:"boi",id:"boi"})]})]})},U=({color:x})=>e("div",{style:{backgroundColor:x}});function he(){const[x,F]=a.exports.useState([]),[h,j]=a.exports.useState([]),[r,c]=a.exports.useState(0),[f,X]=a.exports.useState([]),[A,Y]=a.exports.useState([]),[H,Z]=a.exports.useState([]),[$,_]=a.exports.useState([]),[p,ee]=a.exports.useState([]),[me,te]=a.exports.useState([]),[oe,le]=a.exports.useState([]),[re,ie]=a.exports.useState([]);return t(Q,{children:[t("form",{onSubmit:o=>{o.preventDefault();const i=Number(o.target.i.value),k=Number(o.target.j.value),C=Number(o.target.k.value),M=o.target.cellWidth.value,N=o.target.cellHeight.value,w=o.target.cellThickness.value,P=M*N*w*3.28**3/43560;c(P);const B=o.target.sectorsLength.value,S=[];for(let y=0;y<B;y++)S.push(e(ue,{number:y+1},y));j(S),ee([i,k,C])},children:[t("div",{children:[e("h5",{children:"N\xFAmero de sectores en los que se puede subdividir el yacimiento"}),t("div",{children:[e("label",{htmlFor:"i",children:"Ingrese i: "}),e("input",{type:"text",name:"i",id:"i"})]}),t("div",{children:[e("label",{htmlFor:"j",children:"Ingrese j: "}),e("input",{type:"text",name:"j",id:"j"})]}),t("div",{children:[e("label",{htmlFor:"k",children:"Ingrese k: "}),e("input",{type:"text",name:"k",id:"k"})]})]}),t("div",{children:[e("h5",{children:"Tama\xF1o de la celda"}),t("div",{children:[e("label",{htmlFor:"cellWidth",children:"Ingrese el ancho (m): "}),e("input",{type:"text",name:"cellWidth",id:"cellWidth"})]}),t("div",{children:[e("label",{htmlFor:"cellHeight",children:"Ingrese el largo (m): "}),e("input",{type:"text",name:"cellHeight",id:"cellHeight"})]}),t("div",{children:[e("label",{htmlFor:"cellThickness",children:"Ingrese el espesor (m): "}),e("input",{type:"text",name:"cellThickness",id:"cellThickness"})]})]}),t("div",{children:[e("h5",{children:"Sectores"}),t("div",{children:[e("label",{htmlFor:"sectorsLength",children:"Ingrese el n\xFAmero de sectores: "}),e("input",{type:"text",name:"sectorsLength",id:"sectorsLength"})]})]}),e("button",{type:"submit",children:"submit"})]}),e("form",{onSubmit:o=>{o.preventDefault();const i=l=>{const[n,s]=l;let m=1;for(let u=0;u<n.length;u++)m*=s[u]-n[u]+1;return 7758*m*r/10**6},k=(l,n)=>{const s=[];for(let m=0;m<n;m++){const u=[];for(let g=0;g<l;g++)u.push(0);s.push(u)}return s},C=l=>{const[n,s]=l,m=p[0],u=p[1],g=k(u,m);for(let d=0;d<h.length;d++){const[I,R,O]=n[d],D=s[d][0],E=s[d][1];if(O===1)for(let v=R-1;v<E;v++)for(let b=I-1;b<D;b++)g[v][b]=e(U,{color:x[d]})}return g},M=l=>{const[n,s]=l,m=p[2],u=p[1],g=k(u,m);for(let d=0;d<h.length;d++){const[I,R,O]=n[d],D=s[d][2],E=s[d][1];if(I===1)for(let v=O-1;v<D;v++)for(let b=R-1;b<E;b++)g[v][b]=e(U,{color:x[d]})}return g},N=[...o.target.sectorColor].map(l=>l.value);F(N);const w=[...o.target.iFrom],P=[...o.target.jFrom],B=[...o.target.kFrom],S=[...o.target.iTo],y=[...o.target.jTo],ne=[...o.target.kTo],L=[...o.target.porosity].map(l=>l.value),G=[...o.target.sw].map(l=>l.value),se=[...o.target.boi].map(l=>l.value),T=w.map((l,n)=>[Number(l.value),Number(P[n].value),Number(B[n].value)]),V=S.map((l,n)=>[Number(l.value),Number(y[n].value),Number(ne[n].value)]);le(C([T,V]).reverse()),ie(M([T,V]));let q=[],K=[],z=[],J=[];for(let l=0;l<h.length;l++){const n=[T[l],V[l]],s=i(n);q.push(s),K.push(s*L[l]),z.push(s*L[l]*G[l]),J.push(s*L[l]*(1-G[l])/se[l])}te([T,V]),X(q),Y(K),Z(z),_(J)},children:h.length>0&&t(Q,{children:[h,e("button",{type:"submit",children:"submit"})]})}),t("div",{children:[e("h5",{children:"Resultados"}),t("p",{children:["Volumen de la celda: ",r.toFixed(2)," acres*ft"]}),e("div",{className:"Resultados-por-sector",children:f.map((o,i)=>t("div",{children:[t("h5",{children:["Sector ",i+1]}),t("p",{children:["Volumen total: ",o.toFixed(2)," MM Bls"]}),t("p",{children:["Volumen poroso: ",A[i].toFixed(2)," MM Bls"]}),t("p",{children:["Volumen de agua: ",H[i].toFixed(2)," MM Bls"]}),t("p",{children:["Volumen de petr\xF3leo: ",$[i].toFixed(2)," MM Bls"]})]},i))}),f.length>0&&t("div",{children:[e("h5",{children:"Global"}),t("p",{children:["Volumen total: ",f.reduce((o,i)=>o+i).toFixed(2),"MM Bls"]}),t("p",{children:["Volumen poroso total: ",A.reduce((o,i)=>o+i).toFixed(2),"MM Bls"]}),t("p",{children:["Volumen de agua total: ",H.reduce((o,i)=>o+i).toFixed(2),"MM Bls"]}),t("p",{children:["POES: ",$.reduce((o,i)=>o+i).toFixed(2),"MM Bls"]})]})]}),e("h5",{children:"Vista de planta"}),e("div",{className:"Grid",style:{gridTemplateColumns:`repeat(${p[0]}, 1fr)`,gridTemplateRows:`repeat(${p[1]}, 1fr)`},children:oe}),e("h5",{children:"Vista lateral"}),e("div",{className:"Grid",style:{gridTemplateColumns:`repeat(${p[1]}, 1fr)`,gridTemplateRows:`repeat(${p[2]}, 1fr)`},children:re})]})}ce.render(e(de.StrictMode,{children:e(he,{})}),document.getElementById("root"));
