/*! For license information please see index.js.LICENSE.txt */
!function(o,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):o["ui-components"]=r(o[void 0],o[void 0])}(self,(function(o,r){return(()=>{"use strict";var e={418:o=>{var r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function t(o){if(null==o)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}o.exports=function(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de","5"===Object.getOwnPropertyNames(o)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(o){return r[o]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(o){a[o]=o})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(o,i){for(var n,c,l=t(o),s=1;s<arguments.length;s++){for(var d in n=Object(arguments[s]))e.call(n,d)&&(l[d]=n[d]);if(r){c=r(n);for(var u=0;u<c.length;u++)a.call(n,c[u])&&(l[c[u]]=n[c[u]])}}return l}},251:(o,r,e)=>{e(418);var a=e(704),t=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;t=i("react.element"),i("react.fragment")}var n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(o,r,e){var a,i={},s=null,d=null;for(a in void 0!==e&&(s=""+e),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,a)&&!l.hasOwnProperty(a)&&(i[a]=r[a]);if(o&&o.defaultProps)for(a in r=o.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:o,key:s,ref:d,props:i,_owner:n.current}}r.jsx=s,r.jsxs=s},893:(o,r,e)=>{o.exports=e(251)},704:r=>{r.exports=o},885:o=>{o.exports=r}},a={};function t(o){var r=a[o];if(void 0!==r)return r.exports;var i=a[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},t.d=(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};return(()=>{t.r(i),t.d(i,{Button:()=>N,ButtonStyles:()=>q,CheckBox:()=>Z,CheckBoxStyles:()=>Q,ComboBox:()=>T,ComboBoxStyles:()=>R,Icon:()=>p,IconStyles:()=>u,List:()=>z,ListStyles:()=>S,Switch:()=>V,SwitchStyles:()=>U,TextInput:()=>to,TextInputStyles:()=>ao});var o=t(893);const r=()=>parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=o=>parseFloat(String(o))/(r()||16),a=o=>parseFloat(String(o))*(r()||16),n=o=>void 0===o,c=(()=>{let o=0;return r=>`${r}${++o}`})(),l=(o,r)=>o<r[0]?r[1]:o>r[1]?r[0]:o;var s=t(885),d=t.n(s);const u={Icon:d().svg((({stroke:o="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>s.css`
	stroke: ${o};
	fill: ${r};

	transition: ${["stroke","fill"].map((o=>`${o} 125ms ease-in-out`)).join()};
`))},b={fillOpacity:0},v={strokeOpacity:0},h={strokeLinecap:"round",strokeLinejoin:"round"},g={user:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},b,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},b,h,{children:[(0,o.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,o.jsx)("path",{d:"M10 12h13"},void 0),(0,o.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},h,{children:[(0,o.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},b),void 0),(0,o.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},h,b),void 0)},down:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},h,b),void 0)},undo:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},b,h,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},b,h,{children:[(0,o.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,o.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},h,{children:[(0,o.jsxs)("g",Object.assign({},b,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,o.jsx)("circle",Object.assign({},v,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",Object.assign({},v,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,o.jsx)("circle",Object.assign({},v,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,o.jsx)("path",Object.assign({},b,h,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},b,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({},b,h,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},b,h,{children:[(0,o.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,o.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},p=({preset:r,path:a,viewBoxSize:t,size:i,color:c="black",strokeWidth:l=2,...s})=>{const d=[a,t].every((o=>!n(o))),b=d?t:g[r].viewBoxSize,v=d?a:g[r].path,h=`${e(b*((i||b)/b))}rem`;return(0,o.jsx)(u.Icon,Object.assign({},s,{width:h,height:h,viewBox:`0 0 ${b} ${b}`,fill:c,stroke:c,strokeWidth:`${e(l)}rem`},{children:v}),void 0)};var f=t(704);const k=(o,r,e=window,a=!1)=>{const t=(0,f.useRef)(r);t.current=r,(0,f.useEffect)((()=>{if(e){const r=o=>t.current(o);return e.addEventListener(o,r,a),()=>e.removeEventListener(o,r)}}),[o,e,a])},x=(...o)=>{const r=(0,f.useRef)();return(0,f.useEffect)((()=>{for(const e of o)"function"==typeof e?e(r.current):e&&(e.current=r.current)}),[o]),r},w={background:{XXD:"rgb(195,195,195)",XD:"rgb(215,215,215)",D:"rgb(225,225,225)",M:"rgb(235,235,235)",L:"rgb(245,245,245)"},accent:{XD:"rgb(85,115,195)",D:"rgb(105,135,215)",M:"rgb(125,155,235)",L:"rgb(145,175,255)"},content:{M:"rgb(90,90,90)",L:"rgb(150,150,150)",XL:"rgb(160,160,160)"}},m="0.25rem",$="0.5rem",j="2rem",y="0.375rem",O={M:"0 0.05rem 0.2rem 0",L:"0 0.15rem 0.6rem 0"},M=(o="M",r="rgb(160,160,160)")=>`${O[o]} ${r}`,L=`0 0 0 0.125rem ${w.accent.XD}`,S={List:d().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},z=(0,f.forwardRef)((({rowHeight:r=a(j),rowCount:t,rowRenderer:i,...n},c)=>{const l=x(c),[s,d]=(0,f.useState)([0,0]),u=(0,f.useMemo)((()=>((o,e)=>{let a;return(...o)=>{a&&clearTimeout(a),a=setTimeout((()=>{(()=>{if(l.current){const{scrollTop:o,offsetHeight:e}=l.current,a=Math.floor((o-e)/r),i=Math.ceil((o+2*e)/r);d([a>0?a:0,i>t?t:i])}})(...o),a=null}),5)}})()),[r,t,l]);return k("scroll",u,l.current),k("animationend",u,l.current),(0,f.useEffect)((()=>{u()}),[u]),(0,o.jsx)(S.List,Object.assign({},n,{ref:l,role:"listbox"},{children:Array.from({length:s[1]-s[0]},((o,a)=>i(s[0]+a,{height:`${e(r)}rem`,marginTop:0==a?`${e(r*s[0])}rem`:void 0,marginBottom:a==s[1]-s[0]-1?`${e(r*(t-s[1]))}rem`:void 0})))}),void 0)})),{background:C,accent:B,content:E}=w,D=d().li`
	position: relative;

	white-space: nowrap;
    text-overflow: ellipsis;
	overflow: hidden;

	display: block;
	padding: 0;
	padding-left: var(--padding);
	transition: padding-left 125ms ease-in-out;

	&[role='option']{
		cursor: pointer;
	}

	&[role='option']:hover {
		background-color: var(--color-option-background-hover);
	}

	&:not([role='option']){
		font-size: 80%;
		font-weight: bold;
		text-align: center;
		transform: translateY(20%);
	}

	&[aria-selected='true']{
		background-color: var(--color-option-background-selected);
	}

	&[aria-checked='true']{
		padding-left: calc(var(--size-check-indicator) + var(--padding) * 2);

		animation: ${s.keyframes`
			0% {
				padding-left: var(--padding);
			}
			100% {
				padding-left: calc(var(--size-check-indicator) + var(--padding) * 2);
			}
		`} 125ms ease-in-out;

		&::before {
			position: absolute;
			content: '';
			top: calc(50% - var(--size-check-indicator) / 2);
			left: calc((var(--padding) + var(--size-check-indicator)) / 2);
			width: var(--size-check-indicator);
			height: var(--size-check-indicator);

			border-radius: 50%;
			background-color: var(--color-accent);

			animation: ${s.keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`,X=d()(z)((({rowHeight:o,rowCount:r,visibleOptionCount:a})=>s.css`
	--height: ${e(o*Math.min(a,r||1))}rem;

	position: absolute;
	width: 100%;
	top: 100%;
	height: var(--height);

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	animation: ${s.keyframes`
		0% {
			height: 0;
		}
		100% {
			height: var(--height);
		}
	`} 125ms ease-in-out;

	> * {
		line-height: ${e(o)}rem;
	}

	::-webkit-scrollbar {
		width: var(--width-scrollbar);
	}

	::-webkit-scrollbar-button {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbar);
		border-radius: var(--border-radius);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scrollbar-hover);
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track-piece,
	::-webkit-resizer,
	::-webkit-scrollbar-corner {
		display: none;
	}
`)),I=d().button`
	position: relative;

	cursor: pointer;
	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;

	display: flex;
	align-items: center;
	padding: 0 var(--padding) 0 var(--padding);

	> * {
		transition: ${["stroke","fill","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};
	}
`,_=d().input`
	position: relative;
	flex-grow: 1;
	padding: 0 0 0 var(--padding);

	color: var(--color-content);
	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;
	font: inherit;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	transition: color 125ms ease-in-out;

	display: flex;
	align-items: center;

	::placeholder {
		color: var(--color-placeholder);
	}
`,R={ComboBox:d().div`
	--border-radius: ${y};
	--padding: ${$};
	--width-scrollbar: ${m};
	--size-check-indicator: ${$};

	--color-background: ${C.M};
	--color-background-light: ${C.L};
	--color-background-disabled: ${C.XXD};
	--color-dropdown-background: ${C.M};
	--color-option-background-hover: ${C.D};
	--color-option-background-selected: ${C.XD};

	--color-content: ${E.M};
	--color-placeholder: ${E.XL};
	--color-accent: ${B.M};
	--color-accent-light: ${B.L};

	--color-scrollbar: ${E.L};
	--color-scrollbar-hover: ${E.XL};

	--shadow: ${M("M")};
	--light: ${M("L",B.L)};
	--focus: ${L};

	position: relative;
	height: ${({height:o})=>e(o)}rem;

	background-color: var(--color-background);
	outline: none;
	box-shadow: var(--shadow);
	border-radius: var(--border-radius);
	font-family: 'Open Sans', sans-serif;
	color: var(--color-content);
	transition: ${["background-color","box-shadow","border-radius"].map((o=>`${o} 125ms ease-in-out`)).join()};

	display: flex;

	svg {
		stroke: var(--color-content);
		fill: var(--color-content);
	}

	&[aria-expanded='true'], &:hover, ${X}{
		box-shadow: var(--light);
	}

	&[aria-expanded='true'], &:hover {
		background-color: var(--color-background-light);
	}

	&[aria-expanded='false']{
		&:focus {
			box-shadow: var(--shadow), var(--focus);
		}

		&:hover {
			${_}{
				color: var(--color-accent-light);
			}

			svg {
				stroke: var(--color-accent-light);
				fill: var(--color-accent-light);
			}
		}
	}

	&[aria-expanded='true']{
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		${I}{
			> * {
				transform: rotate(180deg);
			}

			&:hover svg {
				stroke: var(--color-accent-light);
				fill: var(--color-accent-light);
			}
		}
	}

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`,Input:_,Button:I,Dropdown:X,Option:D},T=(0,f.forwardRef)((({height:r=a(j),options:e,groups:t,value:i,onChange:s,visibleOptionCount:d=5,arrowIcon:u=(0,o.jsx)(p,{preset:"down"},void 0),searchDisabled:b=!1,disabled:v=!1,...h},g)=>{const w=(0,f.useRef)(c("combobox-")),m=x(g),$=(0,f.useRef)(),y=(0,f.useRef)(),[O,M]=(0,f.useState)(!1),[L,S]=(0,f.useState)(""),[z,C]=(0,f.useState)(),[B,E]=(0,f.useState)([]),[D,X]=(0,f.useState)(0),I=B.length,_=`${w.current}-dropdown`,T=Array.isArray(i);return k("keydown",(o=>{if(!v)switch(o.code){case"ArrowDown":O&&(X((o=>{let r=l(o+1,[0,B.length-1]);return B[r].isGroup?l(++r,[0,B.length-1]):r})),o.preventDefault());break;case"ArrowUp":O&&(X((o=>{let r=l(o-1,[0,B.length-1]);return B[r].isGroup?l(--r,[0,B.length-1]):r})),o.preventDefault());break;case"Enter":O&&I&&(s(B[D].value),m.current.focus()),M((o=>!o));break;case"Escape":O?m.current.focus():m.current.blur(),M(!1)}})),k("click",(o=>{O&&!((o,r)=>{let e=o;for(;e;)if(e=e.parentNode,e==r)return!0;return!1})(o.target,m.current)&&M(!1)})),(0,f.useEffect)((()=>{let o=null;""!=L&&(o=e.filter((({label:o,value:r})=>{if(o){if(o.toLowerCase().includes(L.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(L.toLowerCase()))return!0;return!1}))),C(o)}),[L,e]),(0,f.useEffect)((()=>{const o=[],r=[...z||e].sort(((r,e)=>(o.push(r.group,e.group),r.group<e.group?-1:0)));var a,i;(a=o.filter((o=>!n(o))),n(i)?a.filter(((o,r,e)=>e.indexOf(o)==r)):a.filter(((o,r)=>a.findIndex((r=>r===o))===r))).forEach((o=>{var e;const a=r.findIndex((r=>r.group==o));r.splice(a,0,{isGroup:!0,value:o,label:null===(e=null==t?void 0:t.find((r=>r.value==o)))||void 0===e?void 0:e.label})})),E(r)}),[z,e,t]),(0,f.useEffect)((()=>{if(y.current){let o=r*D;const{scrollTop:e}=y.current,a=e+r*(d-1)<=o,t=e>=o+r;t&&(o-=r*(d-1)),(a||t)&&y.current.scrollTo({top:o,behavior:"smooth"})}}),[D,r,d]),(0,f.useEffect)((()=>{O&&(S(""),$.current.focus())}),[O]),(0,f.useEffect)((()=>{v&&M(!1)}),[v]),(0,f.useEffect)((()=>{X(B.findIndex((o=>!o.isGroup)))}),[O,B]),(0,o.jsxs)(R.ComboBox,Object.assign({},h,{ref:m,height:r,role:"combobox",tabIndex:O||v?-1:0,"aria-expanded":O,"aria-owns":_,"aria-haspopup":"listbox","aria-disabled":v||void 0},{children:[O&&(0,o.jsx)(R.Dropdown,{ref:y,rowCount:I||1,rowHeight:r,rowRenderer:(r,e)=>{const a=B[r],t=T?i.findIndex((o=>o==(null==a?void 0:a.value))):-1;return(0,o.jsx)(R.Option,Object.assign({style:e,onClick:I&&!(null==a?void 0:a.isGroup)?()=>{if(T){const o=[...i];-1==t?o.unshift(null==a?void 0:a.value):o.splice(t,1),s(o)}else s(null==a?void 0:a.value),M(!1)}:void 0,role:(null==a?void 0:a.isGroup)?void 0:"option",id:`${_}-row-${r}`,"aria-checked":I&&!(null==a?void 0:a.isGroup)&&T?-1!=t:void 0,"aria-selected":!(!I||(null==a?void 0:a.isGroup)||D!=r)||void 0,as:(null==a?void 0:a.isGroup)?"label":void 0},{children:(null==a?void 0:a.label)||(null==a?void 0:a.value)||"No results"}),`${r}-${null==a?void 0:a.value}`)},visibleOptionCount:d,id:_,"aria-labelledby":h["aria-labelledby"],"aria-multiselectable":T,"aria-label":h["aria-label"]?void 0:"Dropdown menu"},void 0),(0,o.jsx)(R.Input,{ref:$,value:!b&&O?L:T?i.map((o=>{const r=e.find((r=>r.value==o));return r.label||r.value})).join(", "):(null===(P=e.find((o=>o.value==i)))||void 0===P?void 0:P.label)||i,onChange:b?void 0:o=>S(o.target.value),onClick:O?void 0:()=>M((o=>!o)),readOnly:b,placeholder:"Enter search query",tabIndex:!b&&O?0:-1,"aria-autocomplete":b?void 0:"both","aria-controls":O?_:void 0,"aria-activedescendant":O?`${_}-row-${D}`:void 0,"aria-labelledby":h["aria-labelledby"]},void 0),(0,o.jsx)(R.Button,Object.assign({onClick:()=>M((o=>!o)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:u}),void 0)]}),void 0);var P})),{background:P,accent:H,content:G}=w,q={Button:d().button`
	--size: ${j};
	--border-radius: ${y};
	--padding: ${$};

	--color-background: ${P.M};
	--color-background-light: ${P.L};
	--color-background-disabled: ${P.XXD};

	--color-content: ${G.M};
	--color-accent: ${H.M};
	--color-accent-light: ${H.L};

	--shadow: ${M("M")};
	--light: ${M("L",H.L)};
	--light-pressed: ${M("M",H.L)};
	--focus: ${L};

	position: relative;
	height: var(--size);

	cursor: pointer;
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	color: var(--color-content);
	transition: ${["background-color","box-shadow","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};

	display: flex;
	align-items: center;
	padding: var(--padding);

	> * {
		padding-right: var(--padding);
	}

	>:last-child {
		padding-right: 0;
	}

	> span {
		transition: color 125ms ease-in-out;
	}

	svg {
		stroke: var(--color-content);
		fill: var(--color-content);
	}

	&:focus {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);

		> span {
			color: var(--color-accent-light);
		}

		svg {
			stroke: var(--color-accent-light);
			fill: var(--color-accent-light);
		}
	}

	&:active {
		box-shadow: var(--light-pressed);
		transform: translateY(5%);
	}

	&:disabled {
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`},N=(0,f.forwardRef)((({label:r,icon:e,...a},t)=>{const i=x(t);return(0,o.jsxs)(q.Button,Object.assign({},a,{ref:i,"aria-label":r},{children:[e,r&&(0,o.jsx)("span",{children:r},void 0)]}),void 0)})),{background:Y,accent:A,content:F}=w,U={Switch:d().button`
	--size: ${j};
	--border-radius: ${y};
	--padding: ${m};

	--color-background: ${Y.M};
	--color-background-light: ${Y.L};
	--color-background-disabled: ${Y.XXD};
	--color-handle: ${Y.XXD};
	--color-handle-light: ${Y.XD};

	--color-accent: ${A.M};
	--color-accent-light: ${A.L};

	--shadow: ${M("M")};
	--light: ${M("L",A.L)};
	--light-pressed: ${M("M",A.L)};
	--focus: ${L};

	position: relative;
	width: calc(var(--size) * 1.75);
	height: var(--size);

	cursor: pointer;
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	transition: ${["background-color","box-shadow","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};

	display: flex;

	&::after {
		content: '';
		position: absolute;
		left: var(--padding);
		top: var(--padding);
		width: 30%;
		height: calc(100% - var(--padding) * 2);

		border-radius: var(--border-radius);
		background-color: var(--color-handle);
		transition: left 125ms ease-in-out;
	}

	&:focus {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);

		&::after {
			background-color: var(--color-handle-light);
		}
	}

	&:active {
		box-shadow: var(--light-pressed);
		transform: translateY(5%);
	}

	&[aria-checked='true']{
		background-color: var(--color-accent);

		&::after {
			left: calc(70% - var(--padding));
			background-color: var(--color-background);
		}

		&:hover {
			background-color: var(--color-accent-light);

			&::after {
				background-color: var(--color-background-light);
			}
		}
	}

	&:disabled {
		background-color: var(--color-background-disabled);

		&::after {
			background-color: var(--color-handle-light);
		}
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	}
`},V=(0,f.forwardRef)((({checked:r,onChange:e,readOnly:a,...t},i)=>{const n=x(i);return(0,o.jsx)(U.Switch,Object.assign({},t,{ref:n,onClick:a?void 0:e,role:"switch","aria-checked":r,"aria-readonly":a}),void 0)})),{background:W,accent:K,content:J}=w,Q={CheckBox:d().input.attrs((()=>({type:"checkbox"})))`
	--size: ${j};
	--border-radius: ${y};
	--padding: ${m};
	--checkmark-thickness: calc(${m} / 1.25);

	--color-background: ${W.M};
	--color-background-light: ${W.L};
	--color-background-disabled: ${W.XXD};

	--color-content: ${J.M};
	--color-accent: ${K.M};
	--color-accent-light: ${K.L};

	--shadow: ${M("M")};
	--light: ${M("L",K.L)};
	--light-pressed: ${M("M",K.L)};
	--focus: ${L};

	position: relative;
	width: var(--size);
	height: 0;

	cursor: pointer;
	outline: none;

	margin: calc(var(--size) / 2) 0 calc(var(--size) / 2) 0;

	&::before {
		content: '';
		width: var(--size);
		height: var(--size);
		transform: translateY(-50%);

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		transition: ${["background-color","box-shadow","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		width: calc(var(--size) * 0.3);
		height: calc(var(--size) * 0.6);
		top: 0;
		left: calc(var(--size) * 0.3);
		transform: translateY(-58%) rotate(45deg);

		border: var(--checkmark-thickness) solid transparent;
		border-top: none;
		border-left: none;
		border-radius: calc(var(--checkmark-thickness) / 2);

		transition: ${["border-color","top"].map((o=>`${o} 125ms ease-in-out`)).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:not([aria-readonly='true']):not(:disabled){
		&:hover {
			&::before {
				box-shadow: var(--light);
				background-color: var(--color-background-light);
			}
		}

		&:active {
			&::before {
				transform: translateY(-45%);
				box-shadow: var(--light-pressed);
			}

			&::after {
				top: calc(var(--size) * 0.05);
			}
		}

		&:checked:hover::after {
			border-color: var(--color-accent-light);
		}
	}

	&:checked::after {
		border-color: var(--color-content);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	}
`},Z=(0,f.forwardRef)((({onChange:r,readOnly:e,...a},t)=>{const i=x(t);return(0,o.jsx)(Q.CheckBox,Object.assign({},a,{ref:i,onChange:e?void 0:r,onKeyDown:e?void 0:o=>{"Enter"==o.code&&r()},"aria-readonly":e}),void 0)})),{background:oo,accent:ro,content:eo}=w,ao={TextInput:d().input`
	--size: ${j};
	--border-radius: ${y};
	--padding: ${$};
	--checkmark-thickness: calc(${m} / 1.25);

	--color-background: ${oo.M};
	--color-background-light: ${oo.L};
	--color-background-disabled: ${oo.XXD};

	--color-content: ${eo.M};
	--color-placeholder: ${eo.XL};
	--color-accent: ${ro.M};
	--color-accent-light: ${ro.L};

	--color-scrollbar: ${eo.L};
	--color-scrollbar-hover: ${eo.XL};

	--shadow: ${M("M")};
	--light: ${M("L",ro.L)};
	--light-pressed: ${M("M",ro.L)};
	--focus: ${L};

	position: relative;
	width: 20rem;
	height: var(--size);

	font-family: 'Open Sans', sans-serif;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: var(--color-content);
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	outline: none;
	border: none;
	border-radius: var(--border-radius);
	transition: ${["background-color","box-shadow"].map((o=>`${o} 125ms ease-in-out`)).join()};

	padding: 0 var(--padding) 0 var(--padding);

	&[aria-multiline='true']{
		padding: var(--padding);
	}

	&::placeholder {
		color: var(--color-placeholder);
	}

	&:focus, &:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);
	}

	&:disabled {
		background-color: var(--color-background-disabled);
	}

	&:disabled, &:read-only {
		pointer-events: none;
	}

	::-webkit-scrollbar {
		width: var(--width-scrollbar);
	}

	::-webkit-scrollbar-button {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbar);
		border-radius: var(--border-radius);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scrollbar-hover);
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track-piece,
	::-webkit-resizer,
	::-webkit-scrollbar-corner {
		display: none;
	}
`},to=(0,f.forwardRef)((({onChange:r,multiline:e,...a},t)=>{const i=x(t);return(0,o.jsx)(ao.TextInput,Object.assign({},a,{ref:i,onChange:o=>r(o.target.value),as:e?"textarea":void 0,role:"textbox","aria-multiline":!!e||void 0}),void 0)}))})(),i})()}));