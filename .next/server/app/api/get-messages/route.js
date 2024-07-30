"use strict";(()=>{var e={};e.id=983,e.ids=[983],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},12354:(e,s,r)=>{r.r(s),r.d(s,{originalPathname:()=>q,patchFetch:()=>w,requestAsyncStorage:()=>y,routeModule:()=>m,serverHooks:()=>x,staticGenerationAsyncStorage:()=>f});var t={};r.r(t),r.d(t,{GET:()=>g});var i=r(49303),a=r(88716),n=r(60670),o=r(79297),u=r(60109),c=r(11185),d=r.n(c),p=r(45609),l=r(27209);async function g(e){await (0,o.Z)();let s=await (0,p.Z1)(l.L),r=s?.user;if(!s||!r)return Response.json({success:!1,message:"Not authenticated"},{status:401});let t=new(d()).Types.ObjectId(r._id);try{let e=await u.Z.aggregate([{$match:{_id:t}},{$unwind:"$messages"},{$sort:{"messages.createdAt":-1}},{$group:{_id:"$_id",messages:{$push:"$messages"}}}]).exec();if(!e||0===e.length)return Response.json({message:"No New Messages",success:!1},{status:404});return Response.json({messages:e[0].messages},{status:200})}catch(e){return console.error("An unexpected error occurred:",e),Response.json({message:"Internal server error",success:!1},{status:500})}}let m=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/get-messages/route",pathname:"/api/get-messages",filename:"route",bundlePath:"app/api/get-messages/route"},resolvedPagePath:"C:\\Users\\Dell\\Desktop\\anonymous-message\\src\\app\\api\\get-messages\\route.ts",nextConfigOutput:"",userland:t}),{requestAsyncStorage:y,staticGenerationAsyncStorage:f,serverHooks:x}=m,q="/api/get-messages/route";function w(){return(0,n.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:f})}},27209:(e,s,r)=>{r.d(s,{L:()=>u});var t=r(53797),i=r(42023),a=r.n(i),n=r(79297),o=r(60109);let u={providers:[(0,t.Z)({id:"credentials",name:"Credentials",credentials:{email:{label:"Email",type:"text"},password:{label:"Password",type:"password"}},async authorize(e){await (0,n.Z)();try{let s=await o.Z.findOne({$or:[{email:e.identifier},{username:e.identifier}]});if(!s)throw Error("No user found with this email");if(!s.isVerified)throw Error("Please verify your account before logging in");if(await a().compare(e.password,s.password))return s;throw Error("Incorrect password")}catch(e){throw Error(e)}}})],callbacks:{jwt:async({token:e,user:s})=>(s&&(e._id=s._id?.toString(),e.isVerified=s.isVerified,e.isAcceptingMessages=s.isAcceptingMessages,e.username=s.username),e),session:async({session:e,token:s})=>(s&&(e.user._id=s._id,e.user.isVerified=s.isVerified,e.user.isAcceptingMessages=s.isAcceptingMessages,e.user.username=s.username),e)},pages:{signIn:"/signin"},session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET}},79297:(e,s,r)=>{r.d(s,{Z:()=>n});var t=r(11185),i=r.n(t);let a={},n=async function(){if(a.isConnected){console.log("Alredy connected to the database");return}try{let e=await i().connect(process.env.MONGODB_URI||"",{});a.isConnected=e.connections[0].readyState,console.log("Database connected successfully")}catch(e){console.error("Database connection failed:",e),process.exit(1)}}},60109:(e,s,r)=>{r.d(s,{Z:()=>o});var t=r(11185),i=r.n(t);let a=new(i()).Schema({content:{type:String,required:!0},createdAt:{type:Date,required:!0,default:Date.now}}),n=new(i()).Schema({username:{type:String,required:[!0,"Username is required"],trim:!0,unique:!0},email:{type:String,required:[!0,"Email is required"],unique:!0,match:[/.+\@.+\..+/,"Please use a valid email address"]},password:{type:String,required:[!0,"Password is required"]},verifyCode:{type:String,required:[!0,"Verify Code is required"]},verifyCodeExpiry:{type:Date,required:[!0,"Verify Code Expiry is required"]},isVerified:{type:Boolean,default:!1},isAcceptingMessages:{type:Boolean,default:!0},messages:[a]}),o=i().models.User||i().model("User",n)}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[948,463,857],()=>r(12354));module.exports=t})();