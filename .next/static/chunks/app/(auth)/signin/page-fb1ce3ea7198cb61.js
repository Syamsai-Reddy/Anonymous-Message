(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[161],{5926:function(e,t,r){Promise.resolve().then(r.bind(r,6542))},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},6542:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7437),s=r(1014),i=r(9343),o=r(998),a=r(7114),d=r(9733),u=r(7209),l=r(7138),c=r(6463),f=r(8068),m=r(9772);let p=m.z.object({identifier:m.z.string(),password:m.z.string()});function x(){let e=(0,c.useRouter)(),t=(0,i.cI)({resolver:(0,s.F)(p),defaultValues:{identifier:"",password:""}}),{toast:r}=(0,f.pm)(),m=async t=>{let n=await (0,o.signIn)("credentials",{redirect:!1,identifier:t.identifier,password:t.password});(null==n?void 0:n.error)&&("CredentialsSignin"===n.error?r({title:"Login Failed",description:"Incorrect username or password",variant:"destructive"}):r({title:"Error",description:n.error,variant:"destructive"})),(null==n?void 0:n.url)&&e.replace("/dashboard")};return(0,n.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gray-800",children:(0,n.jsxs)("div",{className:"w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{className:"text-4xl font-extrabold tracking-tight lg:text-5xl mb-6",children:"Welcome Back to True Feedback"}),(0,n.jsx)("p",{className:"mb-4",children:"Sign in to continue your secret conversations"})]}),(0,n.jsx)(a.l0,{...t,children:(0,n.jsxs)("form",{onSubmit:t.handleSubmit(m),className:"space-y-6",children:[(0,n.jsx)(a.Wi,{name:"identifier",control:t.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(a.xJ,{children:[(0,n.jsx)(a.lX,{children:"Email/Username"}),(0,n.jsx)(u.I,{...t}),(0,n.jsx)(a.zG,{})]})}}),(0,n.jsx)(a.Wi,{name:"password",control:t.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(a.xJ,{children:[(0,n.jsx)(a.lX,{children:"Password"}),(0,n.jsx)(u.I,{type:"password",...t}),(0,n.jsx)(a.zG,{})]})}}),(0,n.jsx)(d.z,{className:"w-full",type:"submit",children:"Sign In"})]})}),(0,n.jsx)("div",{className:"text-center mt-4",children:(0,n.jsxs)("p",{children:["Not a member yet?"," ",(0,n.jsx)(l.default,{href:"/signup",className:"text-blue-600 hover:text-blue-800",children:"Sign up"})]})})]})})}},9733:function(e,t,r){"use strict";r.d(t,{d:function(){return d},z:function(){return u}});var n=r(7437),s=r(2265),i=r(1538),o=r(2218),a=r(9354);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:u=!1,...l}=e,c=u?i.g7:"button";return(0,n.jsx)(c,{className:(0,a.cn)(d({variant:s,size:o,className:r})),ref:t,...l})});u.displayName="Button"},7114:function(e,t,r){"use strict";r.d(t,{l0:function(){return c},NI:function(){return b},Wi:function(){return m},xJ:function(){return v},lX:function(){return g},zG:function(){return h}});var n=r(7437),s=r(2265),i=r(1538),o=r(9343),a=r(9354),d=r(8364);let u=(0,r(2218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(d.f,{ref:t,className:(0,a.cn)(u(),r),...s})});l.displayName=d.f.displayName;let c=o.RV,f=s.createContext({}),m=e=>{let{...t}=e;return(0,n.jsx)(f.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},p=()=>{let e=s.useContext(f),t=s.useContext(x),{getFieldState:r,formState:n}=(0,o.Gc)(),i=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=t;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...i}},x=s.createContext({}),v=s.forwardRef((e,t)=>{let{className:r,...i}=e,o=s.useId();return(0,n.jsx)(x.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...i})})});v.displayName="FormItem";let g=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:i,formItemId:o}=p();return(0,n.jsx)(l,{ref:t,className:(0,a.cn)(i&&"text-destructive",r),htmlFor:o,...s})});g.displayName="FormLabel";let b=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:o,formDescriptionId:a,formMessageId:d}=p();return(0,n.jsx)(i.g7,{ref:t,id:o,"aria-describedby":s?"".concat(a," ").concat(d):"".concat(a),"aria-invalid":!!s,...r})});b.displayName="FormControl",s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:i}=p();return(0,n.jsx)("p",{ref:t,id:i,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})}).displayName="FormDescription";let h=s.forwardRef((e,t)=>{let{className:r,children:s,...i}=e,{error:o,formMessageId:d}=p(),u=o?String(null==o?void 0:o.message):s;return u?(0,n.jsx)("p",{ref:t,id:d,className:(0,a.cn)("text-sm font-medium text-destructive",r),...i,children:u}):null});h.displayName="FormMessage"},7209:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(7437),s=r(2265),i=r(9354);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},8068:function(e,t,r){"use strict";r.d(t,{Am:function(){return c},pm:function(){return f}});var n=r(2265);let s=0,i=new Map,o=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},a=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function l(e){u=a(u,e),d.forEach(e=>{e(u)})}function c(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=n.useState(u);return n.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(4839),s=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},8364:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(2265),s=r(5171),i=r(7437),o=n.forwardRef((e,t)=>(0,i.jsx)(s.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var a=o}},function(e){e.O(0,[183,50,998,138,971,23,744],function(){return e(e.s=5926)}),_N_E=e.O()}]);