(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[18],{18:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>W});var a=n(791),r=n(87),i=n(842),s=n(184);const o=e=>{let{data:t}=e;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((e=>(0,s.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c;var u=n(892),d=n.n(u),h=n(745);const m=e=>{let{data:{name:t,position:n,url:a,startDate:r,endDate:i,summary:o,highlights:c}}=e;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:a,children:t})," - ",n]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",d()(r).format("MMMM YYYY")," - ",i?d()(i).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,s.jsx)(h.ZP,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,s.jsx)("ul",{className:"points",children:c.map((e=>(0,s.jsx)("li",{children:e},e)))}):null]})},g=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,s.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};g.defaultProps={data:[]};const y=g,f=e=>{let{handleClick:t,active:n,label:a}=e;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:()=>t(a),children:a})},p=e=>{let{data:t,categories:n}=e;const{category:a,competency:r,title:i}=t,o={background:n.filter((e=>a.includes(e.name))).map((e=>e.color))[0]},c={...o,width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")};return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:o,children:(0,s.jsx)("span",{children:i})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};p.defaultProps={categories:[]};const v=p,b=e=>{let{skills:t,categories:n}=e;const r=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[i,o]=(0,a.useState)(r),c=e=>{const t=Object.keys(i).reduce(((t,n)=>({...t,[n]:e===n&&!i[n]})),{});t.All=!Object.keys(i).some((e=>t[e])),o(t)};return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:Object.keys(i).map((e=>(0,s.jsx)(f,{label:e,active:i,handleClick:c},e)))}),(0,s.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(i).reduce(((e,t)=>i[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,s.jsx)(v,{categories:n,data:e},e.title)))})()})]})};b.defaultProps={skills:[],categories:[]};const S=b,D=e=>{let{data:t,last:n}=e;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};const k=D,x=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,s.jsx)(k,{data:t,last:n===e.length-1},t.title))),M=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:x(t)})]})};M.defaultProps={data:[]};const j=M,$=()=>(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)(r.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:"References are available upon request"})})})]}),w=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],E=[{school:"University of Hong Kong",degree:"Double Degree in Computer Science and Finance, minor in Statistics",link:"https://hku.hk/",year:2026},{school:"Po Leung Kuk Tang Yuk Tien College",degree:"HKDSE Top 1% Math Chemistry 5** ICT Physics Chinese English 5*",link:"https://buffalo.edu",year:2022}],C=[{name:"Worldquant",position:"Research Consultant",url:"https://www.worldquant.com/",startDate:"2024-02-01",summary:"WorldQuant is a global quantitative asset management firm with over $7 billion in assets under management",highlights:["Mentored by WorldQuant Quant Researchers","Seek insights from financial economics paper, generate and submit alpha regularly","Utilized multithreading to simulate alpha signal with WorldQuant Api"]},{name:"Rivermap Quantitative Research",position:"Research analyst intern",url:"https://www.rivermap.com.hk/",startDate:"2023-12-18",endDate:"2024-01-29",summary:"Rivermap Quantitative Research advocates the use of scientific and systematic approach for investment. Rivermap is dedicated to carry out investment research to promote in-depth understanding of the global capital market",highlights:["Utilized SQL, Python, and Pandas to extract and process financial data from Refinitiv","Performed web crawling using Selenium and Request libraries to extract financial data","Leveraged BERT large language model for text classification. Trained and fine-tuned the model to predict the probability that a given text pertains to the future planning of listed firms"]},{name:"University of Hong Kong",position:"Teaching Assitant",url:"https://www.cs.hku.hk/",startDate:"2023-09-01",endDate:"2023-12-01",summary:"Served as a teaching assistant for COMP2113 Computer (C++) Programming II courses for Department of Computer Science",highlights:["Instructed students on topics such as pointers, dynamic memory management, the Standard Template Library (STL), and linked lists"]},{name:"HKDSE",position:"Private Tutor",url:"https://www.hkeaa.edu.hk/en/hkdse/",startDate:"2022-07-01",endDate:"2024-01-01",summary:"Tutored 8 high school students for Mathematics, Physics, Chemistry, English, Information technology",highlights:["Taught 4 to 5 students during my every semester from year 1 to year 2","Increased my time managment and communication skills","It is a really fulfilling job"]}],N=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Next.JS",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"FastAPI",competency:3,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"PyTorch",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","ML Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","ML Engineering","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","ML Engineering","Python"]},{title:"Spark",competency:2,category:["Data Engineering","ML Engineering"]},{title:"Dagster",competency:2,category:["Data Engineering","Python","ML Engineering"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((e=>({...e,category:e.category.sort()}))),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],P=[...new Set(N.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:L[t]}))),T={Education:()=>(0,s.jsx)(l,{data:E}),Experience:()=>(0,s.jsx)(y,{data:C}),Skills:()=>(0,s.jsx)(S,{skills:N,categories:P}),Courses:()=>(0,s.jsx)(j,{data:w}),References:()=>(0,s.jsx)($,{})},W=()=>(0,s.jsx)(i.Z,{title:"Resume",description:"Ivan Cheung's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{children:(0,s.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:Object.keys(T).map((e=>(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(T).map((e=>{let[t,n]=e;return(0,s.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",i="minute",s="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+p(a,2,"0")+":"+p(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,l),i=n-r<0,s=t.clone().add(a+(i?-1:1),l);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:s,m:i,s:r,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=f;var D="$isDayjsObject",k=function(e){return e instanceof $||!(!e||!e[D])},x=function e(t,n,a){var r;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(r=i),n&&(S[i]=n,r=i);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var o=t.name;S[o]=t,r=o}return!a&&r&&(b=r),r||!a&&b},M=function(e,t){if(k(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},j=v;j.l=x,j.i=k,j.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function f(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(g);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return j},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return M(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<M(e)},p.$g=function(e,t,n){return j.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,a=!!j.u(t)||t,u=j.p(e),m=function(e,t){var r=j.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(o)},g=function(e,t){return j.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,f=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return a?m(1,0):m(31,11);case l:return a?m(1,f):m(0,f+1);case c:var b=this.$locale().weekStart||0,S=(y<b?y+7:y)-b;return m(a?p-S:p+(6-S),f);case o:case h:return g(v+"Hours",0);case s:return g(v+"Minutes",1);case i:return g(v+"Seconds",2);case r:return g(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,c=j.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[s]=u+"Hours",n[i]=u+"Minutes",n[r]=u+"Seconds",n[a]=u+"Milliseconds",n)[c],g=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var y=this.clone().set(h,1);y.$d[m](g),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[j.p(e)]()},p.add=function(a,u){var h,m=this;a=Number(a);var g=j.p(u),y=function(e){var t=M(m);return j.w(t.date(t.date()+Math.round(e*a)),m)};if(g===l)return this.set(l,this.$M+a);if(g===d)return this.set(d,this.$y+a);if(g===o)return y(1);if(g===c)return y(7);var f=(h={},h[i]=t,h[s]=n,h[r]=e,h)[g]||1,p=this.$d.getTime()+a*f;return j.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=j.z(this),i=this.$H,s=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].slice(0,i)},h=function(e){return j.s(i%12||12,e,"0")},g=u||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(y,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return o+1;case"MM":return j.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,s,!0);case"A":return g(i,s,!1);case"m":return String(s);case"mm":return j.s(s,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(a,h,m){var g,y=this,f=j.p(h),p=M(a),v=(p.utcOffset()-this.utcOffset())*t,b=this-p,S=function(){return j.m(y,p)};switch(f){case d:g=S()/12;break;case l:g=S();break;case u:g=S()/3;break;case c:g=(b-v)/6048e5;break;case o:g=(b-v)/864e5;break;case s:g=b/n;break;case i:g=b/t;break;case r:g=b/e;break;default:g=b}return m?g:j.a(g)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return S[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=x(e,t,!0);return a&&(n.$L=a),n},p.clone=function(){return j.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),w=$.prototype;return M.prototype=w,[["$ms",a],["$s",r],["$m",i],["$H",s],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,$,M),e.$i=!0),M},M.locale=x,M.isDayjs=k,M.unix=function(e){return M(1e3*e)},M.en=S[b],M.Ls=S,M.p={},M}()}}]);
//# sourceMappingURL=18.9f4e75da.chunk.js.map