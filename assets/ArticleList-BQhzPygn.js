import{u as w,h as d,l as b,i as _,r as s,o as y,f as v,b as l,a as t,w as p,x as a,d as x}from"./index-B1gjNjIi.js";const g=l("div",null,"ArticleList",-1),k={class:"max-w-screen-md mx-auto py-14"},A={class:"flex py-4"},N={__name:"ArticleList",setup(B){const u=w(),n=d(null),r=d([]);b(()=>{c()});const c=()=>{_.get("/articles/list").then(o=>{r.value=o.data})},h=()=>{const o=n.value.getSelectionRows();if(o.length===0){a({type:"error",message:"请选择要删除的文章"});return}o.map(i=>{_.delete(`/articles/${i._id}`,{headers:{Authorization:u.token}}).then(()=>{c(),a({type:"success",message:"删除成功!"})}).catch(e=>{a({type:"error",message:"删除失败: "+e.response.data})})})};return(o,i)=>{const e=s("el-table-column"),m=s("el-table"),f=s("el-button");return y(),v("div",null,[g,l("div",k,[t(m,{ref_key:"table",ref:n,data:r.value,stripe:"",style:{width:"100%"},"table-layout":"auto"},{default:p(()=>[t(e,{type:"selection",width:"55"}),t(e,{property:"title",label:"标题",width:"120","show-overflow-tooltip":""}),t(e,{property:"time",label:"时间",width:"240","show-overflow-tooltip":""}),t(e,{property:"_id",label:"id","show-overflow-tooltip":""})]),_:1},8,["data"]),l("div",A,[t(f,{onClick:h},{default:p(()=>[x("删除")]),_:1})])])])}}};export{N as default};
