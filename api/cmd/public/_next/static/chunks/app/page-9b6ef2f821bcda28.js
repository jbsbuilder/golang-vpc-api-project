(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7874:function(e,t,s){Promise.resolve().then(s.bind(s,5431))},5431:function(e,t,s){"use strict";s.d(t,{WaitlistPageComponent:function(){return y}});var a=s(7437),r=s(2265),i=s(5293),n=s(7712),l=s(1994),c=s(3335);function o(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,c.m6)((0,l.W)(t))}let d=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),h=r.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:l=!1,...c}=e,h=l?i.g7:"button";return(0,a.jsx)(h,{className:o(d({variant:r,size:n,className:s})),ref:t,...c})});h.displayName="Button";let m=r.forwardRef((e,t)=>{let{className:s,type:r,...i}=e;return(0,a.jsx)("input",{type:r,className:o("flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",s),ref:t,...i})});m.displayName="Input";var x=s(1107);let f=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.f,{ref:t,className:o(f(),s),...r})});u.displayName=x.f.displayName;var b=s(8293),p=s(1197),g=s(7438),v=s(1723),j=s(6595),N=s(7648);function y(){let[e,t]=(0,r.useState)({barrel:0,coffee:0}),[s,i]=(0,r.useState)({email:"",firstName:"",lastName:""}),[n,l]=(0,r.useState)(""),[c,o]=(0,r.useState)(!1),[d,x]=(0,r.useState)(!1),[f,y]=(0,r.useState)(!1),w=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=()=>{let e=window.scrollY,s=window.innerHeight;if(x(e>.8*s),!w.current)return;let a=w.current.offsetHeight;if(e>s){let r=(e-s)%a;t({barrel:.5*r,coffee:.3*r})}else t({barrel:0,coffee:0})};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let k=e=>{i({...s,[e.target.name]:e.target.value})},z=async(e,t)=>{e.preventDefault();let a="/create",r="POST",i=JSON.stringify(s);switch(t){case"check":a+="/check?email=".concat(encodeURIComponent(s.email)),r="GET",i=void 0;break;case"update":a+="/update",r="PUT";break;case"delete":a+="/delete",r="DELETE",i=JSON.stringify({email:s.email})}try{let e=await fetch(a,{method:r,headers:{"Content-Type":"application/json"},body:"GET"!==r?i:void 0});if(!e.ok)throw Error("Network response was not ok");let s=await e.json();l(s.message),"check"===t&&200===e.status&&y(!0)}catch(e){console.error("Error:",e),l("An error occurred. Please try again.")}};return(0,a.jsxs)("div",{className:"min-h-screen bg-amber-50 relative",children:[(0,a.jsxs)("nav",{className:"fixed top-0 left-0 right-0 bg-amber-900 text-white transition-all duration-300 z-50 ".concat(d?"'opacity-100'":"'opacity-0 -translate-y-full'"),children:[(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,a.jsx)(N.default,{href:"/",className:"text-xl font-bold",children:"Whisky Coffee Co."}),(0,a.jsxs)("div",{className:"hidden md:flex space-x-4",children:[(0,a.jsx)(N.default,{href:"#story",className:"hover:text-amber-200",children:"Our Story"}),(0,a.jsx)(N.default,{href:"#process",className:"hover:text-amber-200",children:"Our Process"}),(0,a.jsx)(N.default,{href:"#signup",className:"hover:text-amber-200",children:"Sign Up"})]}),(0,a.jsx)("button",{className:"md:hidden",onClick:()=>o(!c),children:(0,a.jsx)(b.Z,{})})]})}),c&&(0,a.jsxs)("div",{className:"md:hidden",children:[(0,a.jsx)(N.default,{href:"#story",className:"block py-2 px-4 hover:bg-amber-800",children:"Our Story"}),(0,a.jsx)(N.default,{href:"#process",className:"block py-2 px-4 hover:bg-amber-800",children:"Our Process"}),(0,a.jsx)(N.default,{href:"#signup",className:"block py-2 px-4 hover:bg-amber-800",children:"Sign Up"})]})]}),(0,a.jsx)("div",{className:"h-screen bg-cover bg-center flex items-center justify-center",style:{backgroundImage:"url('/placeholder.svg?height=1080&width=1920')"},children:(0,a.jsxs)("div",{className:"text-center text-white",children:[(0,a.jsx)("h1",{className:"text-6xl font-bold mb-4 shadow-text",children:"Whisky Barrel-Aged Coffee"}),(0,a.jsx)("p",{className:"text-2xl mb-8 shadow-text",children:"Join our exclusive waitlist"}),(0,a.jsx)(h,{onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),className:"bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded",children:"Learn More"})]})}),(0,a.jsx)("div",{id:"story",className:"bg-amber-100 py-16",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold text-center mb-8 text-amber-900",children:"Our Story"}),(0,a.jsxs)("div",{className:"max-w-3xl mx-auto text-amber-800 space-y-4",children:[(0,a.jsx)("p",{children:"In the misty highlands of Scotland, where whisky traditions run as deep as the lochs, our journey began. It was here, amidst the rolling hills and ancient distilleries, that we first dreamed of marrying the bold character of Scotch whisky with the rich complexity of coffee."}),(0,a.jsx)("p",{children:"Our search for the perfect bean led us to the sun-drenched slopes of Colombia Andes Mountains. Here, we discovered a rare, high-altitude Arabica, cultivated by a cooperative of small-scale farmers dedicated to sustainable practices. These beans, nurtured in volcanic soil and kissed by mountain mists, promised a flavor profile as nuanced as the finest single malt."}),(0,a.jsx)("p",{children:"But the true magic happened when these exceptional beans met the char-kissed interiors of retired Scotch whisky barrels. In the cool, damp cellars of an old Edinburgh storehouse, we carefully aged our coffee, allowing it to absorb the lingering essences of peated malt, oak, and time itself."}),(0,a.jsx)("p",{children:"The result? A coffee that tells a story with every sip - a tale of Scottish craft, Colombian passion, and a shared love for flavors that transcend borders. Its more than just coffee; its a journey from highland to highland, a testament to the artistry of patience, and a celebration of cultural fusion in every aromatic cup."})]})]})}),(0,a.jsx)("div",{id:"process",className:"bg-white py-16",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold text-center mb-12 text-amber-900",children:"Our Process"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(p.Z,{className:"mx-auto mb-4 text-amber-600",size:48}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Select Premium Beans"}),(0,a.jsx)("p",{className:"text-gray-600",children:"We source the finest coffee beans from around the world."})]}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(g.Z,{className:"mx-auto mb-4 text-amber-600",size:48}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Whisky Barrel Selection"}),(0,a.jsx)("p",{className:"text-gray-600",children:"We carefully choose premium whisky barrels for aging our coffee."})]}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(v.Z,{className:"mx-auto mb-4 text-amber-600",size:48}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Precise Timing"}),(0,a.jsx)("p",{className:"text-gray-600",children:"We carefully time the aging process for optimal flavor infusion."})]}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(j.Z,{className:"mx-auto mb-4 text-amber-600",size:48}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Exquisite Result"}),(0,a.jsx)("p",{className:"text-gray-600",children:"Experience a perfect blend of coffee and whisky notes."})]})]})]})}),(0,a.jsxs)("div",{id:"signup",ref:w,className:"relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-cover bg-center z-0",style:{backgroundImage:"url('/placeholder.svg?height=1080&width=1920')",transform:"translateY(".concat(e.barrel,"px)")}}),(0,a.jsx)("div",{className:"absolute inset-0 bg-cover bg-center z-10",style:{backgroundImage:"url('/placeholder.svg?height=1080&width=1920')",transform:"translateY(".concat(e.coffee,"px)")}}),(0,a.jsx)("div",{className:"relative z-20 container mx-auto px-4 py-16",children:(0,a.jsxs)("div",{className:"max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6",children:[(0,a.jsxs)("form",{onSubmit:e=>z(e,"signup"),className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{htmlFor:"email",children:"Email"}),(0,a.jsx)(m,{type:"email",id:"email",name:"email",required:!0,onChange:k})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{htmlFor:"firstName",children:"First Name"}),(0,a.jsx)(m,{type:"text",id:"firstName",name:"firstName",required:!0,onChange:k})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u,{htmlFor:"lastName",children:"Last Name"}),(0,a.jsx)(m,{type:"text",id:"lastName",name:"lastName",required:!0,onChange:k})]}),(0,a.jsx)(h,{type:"submit",className:"w-full",children:"Sign Up"})]}),(0,a.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,a.jsx)(h,{onClick:e=>z(e,"check"),className:"w-full",children:"Check Status"}),(0,a.jsx)(h,{onClick:e=>z(e,"update"),className:"w-full",children:"Update Info"}),(0,a.jsx)(h,{onClick:e=>z(e,"delete"),variant:"destructive",className:"w-full",children:"Delete Info"})]}),n&&(0,a.jsx)("p",{className:"mt-4 text-center ".concat(n.includes("'error'")?"'text-red-600'":"'text-green-600'"),children:n}),f&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("p",{children:"You are on the list!"}),(0,a.jsx)("button",{onClick:()=>y(!1),children:"Close"})]})]})})]})]})}}},function(e){e.O(0,[959,971,117,744],function(){return e(e.s=7874)}),_N_E=e.O()}]);