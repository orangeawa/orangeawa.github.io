import{g as h,h as x,i as k,r as u,o,f as d,F as g,j as v,c as C,w as t,b as _,t as a,a as l,d as c}from"./index-Bkk8wHdS.js";const w={class:"max-w-screen-md mx-auto"},B={class:"flex justify-between"},N=h({__name:"ArticleList",setup(b){const n=x([]);return k.get("http://localhost:25567/articles/list").then(function(e){n.value=e.data}).catch(function(e){console.error("Error fetching data:",e)}),(e,y)=>{const s=u("el-text"),f=u("el-card");return o(),d("div",w,[(o(!0),d(g,null,v(n.value,({content:m,title:p,_id:r,time:i})=>(o(),C(f,{class:"mb-4",key:r,onClick:()=>e.$router.push(`/article/${r}`)},{default:t(()=>[_("h1",null,a(p),1),l(s,{class:"mx-1",size:"small",truncated:""},{default:t(()=>[c(a(m),1)]),_:2},1024),_("div",B,[l(s,null,{default:t(()=>[c(a(i),1)]),_:2},1024),l(s,null,{default:t(()=>[c(a(i),1)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))])}}});export{N as default};
