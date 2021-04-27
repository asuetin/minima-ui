/*! For license information please see index.js.LICENSE.txt */
!function(o,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):o["ui-components"]=r(o[void 0],o[void 0])}(self,(function(o,r){return(()=>{"use strict";var e={418:o=>{var r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function t(o){if(null==o)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}o.exports=function(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de","5"===Object.getOwnPropertyNames(o)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(o){return r[o]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(o){a[o]=o})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(o,i){for(var n,l,c=t(o),s=1;s<arguments.length;s++){for(var d in n=Object(arguments[s]))e.call(n,d)&&(c[d]=n[d]);if(r){l=r(n);for(var u=0;u<l.length;u++)a.call(n,l[u])&&(c[l[u]]=n[l[u]])}}return c}},251:(o,r,e)=>{e(418);var a=e(704),t=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;t=i("react.element"),i("react.fragment")}var n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(o,r,e){var a,i={},s=null,d=null;for(a in void 0!==e&&(s=""+e),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,a)&&!c.hasOwnProperty(a)&&(i[a]=r[a]);if(o&&o.defaultProps)for(a in r=o.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:o,key:s,ref:d,props:i,_owner:n.current}}r.jsx=s,r.jsxs=s},893:(o,r,e)=>{o.exports=e(251)},704:r=>{r.exports=o},885:o=>{o.exports=r}},a={};function t(o){var r=a[o];if(void 0!==r)return r.exports;var i=a[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},t.d=(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};return(()=>{t.r(i),t.d(i,{Button:()=>G,ButtonStyles:()=>H,CheckBox:()=>Q,CheckBoxStyles:()=>K,ComboBox:()=>_,ComboBoxStyles:()=>N,Icon:()=>g,IconStyles:()=>d,List:()=>S,ListStyles:()=>L,Switch:()=>U,SwitchStyles:()=>F,TextInput:()=>ao,TextInputStyles:()=>eo});var o=t(893);const r=()=>parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=o=>parseFloat(String(o))/(r()||16),a=o=>parseFloat(String(o))*(r()||16),n=o=>void 0===o,l=(()=>{let o=0;return r=>`${r}${++o}`})();var c=t(885),s=t.n(c);const d={Icon:s().svg((({stroke:o="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>c.css`
	stroke: ${o};
	fill: ${r};

	transition: ${["stroke","fill"].map((o=>`${o} 125ms ease-in-out`)).join()};
`))},u={fillOpacity:0},b={strokeOpacity:0},h={strokeLinecap:"round",strokeLinejoin:"round"},v={user:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,h,{children:[(0,o.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,o.jsx)("path",{d:"M10 12h13"},void 0),(0,o.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},h,{children:[(0,o.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},u),void 0),(0,o.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},h,u),void 0)},down:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},h,u),void 0)},undo:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,h,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,h,{children:[(0,o.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,o.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},h,{children:[(0,o.jsxs)("g",Object.assign({},u,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,o.jsx)("circle",Object.assign({},b,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",Object.assign({},b,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,o.jsx)("circle",Object.assign({},b,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,o.jsx)("path",Object.assign({},u,h,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,o.jsx)("path",Object.assign({},h,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({},u,h,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,h,{children:[(0,o.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,o.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},g=({className:r,preset:a,path:t,viewBoxSize:i,size:l,color:c="black",strokeWidth:s=2})=>{const u=[t,i].every((o=>!n(o))),b=u?i:v[a].viewBoxSize,h=u?t:v[a].path,g=`${e(b*((l||b)/b))}rem`;return(0,o.jsx)(d.Icon,Object.assign({className:r,width:g,height:g,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${b} ${b}`,xmlnsXlink:"http://www.w3.org/1999/xlink",fill:c,stroke:c,strokeWidth:`${e(s)}rem`},{children:h}),void 0)};var p=t(704);const f=(o,r,e=window,a=!1)=>{const t=(0,p.useRef)(r);t.current=r,(0,p.useEffect)((()=>{if(e){const r=o=>t.current(o);return e.addEventListener(o,r,a),()=>e.removeEventListener(o,r)}}),[o,e,a])},k=(...o)=>{const r=(0,p.useRef)();return(0,p.useEffect)((()=>{for(const e of o)"function"==typeof e?e(r.current):e&&(e.current=r.current)}),[o]),r},x={background:{XXD:"rgb(195,195,195)",XD:"rgb(215,215,215)",D:"rgb(225,225,225)",M:"rgb(235,235,235)",L:"rgb(245,245,245)"},accent:{XD:"rgb(85,115,195)",D:"rgb(105,135,215)",M:"rgb(125,155,235)",L:"rgb(145,175,255)"},content:{M:"rgb(90,90,90)",L:"rgb(150,150,150)",XL:"rgb(160,160,160)"}},w="0.25rem",m="0.5rem",$="2rem",j="0.375rem",y={M:"0 0.05rem 0.2rem 0",L:"0 0.15rem 0.6rem 0"},O=(o="M",r="rgb(160,160,160)")=>`${y[o]} ${r}`,M=`0 0 0 0.125rem ${x.accent.XD}`,L={List:s().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},S=(0,p.forwardRef)((({className:r,rowHeight:t=a($),rowCount:i,rowRenderer:n,...l},c)=>{const s=k(c),[d,u]=(0,p.useState)([0,0]),b=(0,p.useMemo)((()=>((o,r)=>{let e;return(...o)=>{e&&clearTimeout(e),e=setTimeout((()=>{(()=>{if(s.current){const{scrollTop:o,offsetHeight:r}=s.current,e=Math.floor((o-r)/t),a=Math.ceil((o+2*r)/t);u([e>0?e:0,a>i?i:a])}})(...o),e=null}),5)}})()),[t,i,s]);return f("scroll",b,s.current),f("animationend",b,s.current),(0,p.useEffect)((()=>{b()}),[b]),(0,o.jsx)(L.List,Object.assign({className:r,ref:s,role:"listbox"},l,{children:Array.from({length:d[1]-d[0]},((o,r)=>n(d[0]+r,{height:`${e(t)}rem`,marginTop:0==r?`${e(t*d[0])}rem`:void 0,marginBottom:r==d[1]-d[0]-1?`${e(t*(i-d[1]))}rem`:void 0})))}),void 0)})),{background:z,accent:B,content:C}=x,X=s().li`
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

		animation: ${c.keyframes`
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

			animation: ${c.keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`,D=s()(S)((({rowHeight:o,rowCount:r,visibleOptionCount:a})=>c.css`
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

	animation: ${c.keyframes`
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
`)),E=s().button`
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
`,I=s().input`
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
`,N={ComboBox:s().div`
	--border-radius: ${j};
	--padding: ${m};
	--width-scrollbar: ${w};
	--size-check-indicator: ${m};

	--color-background: ${z.M};
	--color-background-light: ${z.L};
	--color-background-disabled: ${z.XXD};
	--color-dropdown-background: ${z.M};
	--color-option-background-hover: ${z.D};
	--color-option-background-selected: ${z.XD};

	--color-content: ${C.M};
	--color-placeholder: ${C.XL};
	--color-accent: ${B.M};
	--color-accent-light: ${B.L};

	--color-scrollbar: ${C.L};
	--color-scrollbar-hover: ${C.XL};

	--shadow: ${O("M")};
	--light: ${O("L",B.L)};
	--focus: ${M};

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

	&[aria-expanded='true'], &:hover, ${D}{
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
			${I}{
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

		${E}{
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
`,Input:I,Button:E,Dropdown:D,Option:X},_=(0,p.forwardRef)((({className:r,height:e=a($),options:t,groups:i,value:c,onChange:s,visibleOptionCount:d=5,arrowIcon:u=(0,o.jsx)(g,{preset:"down"},void 0),labelledBy:b,searchDisabled:h=!1,disabled:v=!1},x)=>{const w=(0,p.useRef)(l("combobox-")),m=k(x),j=(0,p.useRef)(),y=(0,p.useRef)(),[O,M]=(0,p.useState)(!1),[L,S]=(0,p.useState)(""),[z,B]=(0,p.useState)(),[C,X]=(0,p.useState)([]),[D,E]=(0,p.useState)(0),I=C.length,_=`${w.current}-dropdown`,R=Array.isArray(c);return f("keydown",(o=>{if(!v)switch(o.code){case"ArrowDown":O&&(E((o=>{let r=o<C.length-1?o+1:0;return C[r].isGroup?++r:r})),o.preventDefault());break;case"ArrowUp":O&&(E((o=>{let r=o>0?o-1:C.length-1;return C[r].isGroup?--r:r})),o.preventDefault());break;case"Enter":O&&I&&(s(C[D].value),m.current.focus()),M((o=>!o));break;case"Escape":O?m.current.focus():m.current.blur(),M(!1)}})),f("click",(o=>{O&&!((o,r)=>{let e=o;for(;e;)if(e=e.parentNode,e==r)return!0;return!1})(o.target,m.current)&&M(!1)})),(0,p.useEffect)((()=>{let o=null;""!=L&&(o=t.filter((({label:o,value:r})=>{if(o){if(o.toLowerCase().includes(L.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(L.toLowerCase()))return!0;return!1}))),B(o)}),[L,t]),(0,p.useEffect)((()=>{const o=[],r=[...z||t].sort(((r,e)=>(o.push(r.group,e.group),r.group<e.group?-1:0)));var e,a;(e=o.filter((o=>!n(o))),n(a)?e.filter(((o,r,e)=>e.indexOf(o)==r)):e.filter(((o,r)=>e.findIndex((r=>r===o))===r))).forEach((o=>{var e;const a=r.findIndex((r=>r.group==o));r.splice(a,0,{isGroup:!0,value:o,label:null===(e=null==i?void 0:i.find((r=>r.value==o)))||void 0===e?void 0:e.label})})),X(r)}),[z,t,i]),(0,p.useEffect)((()=>{if(y.current){let o=e*D;const{scrollTop:r}=y.current,a=r+e*(d-1)<=o,t=r>=o+e;t&&(o-=e*(d-1)),(a||t)&&y.current.scrollTo({top:o,behavior:"smooth"})}}),[D,e,d]),(0,p.useEffect)((()=>{O&&(S(""),j.current.focus())}),[O]),(0,p.useEffect)((()=>{v&&M(!1)}),[v]),(0,p.useEffect)((()=>{E(C.findIndex((o=>!o.isGroup)))}),[O,C]),(0,o.jsxs)(N.ComboBox,Object.assign({ref:m,className:r,height:e,role:"combobox",tabIndex:O||v?-1:0,"aria-expanded":O,"aria-owns":_,"aria-haspopup":"listbox","aria-disabled":v||void 0},{children:[O&&(0,o.jsx)(N.Dropdown,{ref:y,rowCount:I||1,rowHeight:e,rowRenderer:(r,e)=>{const a=C[r],t=R?c.findIndex((o=>o==(null==a?void 0:a.value))):-1;return(0,o.jsx)(N.Option,Object.assign({style:e,onClick:I&&!(null==a?void 0:a.isGroup)?()=>{if(R){const o=[...c];-1==t?o.unshift(null==a?void 0:a.value):o.splice(t,1),s(o)}else s(null==a?void 0:a.value),M(!1)}:void 0,role:(null==a?void 0:a.isGroup)?void 0:"option",id:`${_}-row-${r}`,"aria-checked":I&&!(null==a?void 0:a.isGroup)&&R?-1!=t:void 0,"aria-selected":!(!I||(null==a?void 0:a.isGroup)||D!=r)||void 0,as:(null==a?void 0:a.isGroup)?"label":void 0},{children:(null==a?void 0:a.label)||(null==a?void 0:a.value)||"No results"}),`${r}-${null==a?void 0:a.value}`)},visibleOptionCount:d,id:_,"aria-labelledby":b,"aria-multiselectable":R,"aria-label":b?void 0:"Dropdown menu"},void 0),(0,o.jsx)(N.Input,{ref:j,type:"text",value:!h&&O?L:R?c.map((o=>{const r=t.find((r=>r.value==o));return r.label||r.value})).join(", "):(null===(T=t.find((o=>o.value==c)))||void 0===T?void 0:T.label)||c,onChange:h?void 0:o=>S(o.target.value),onClick:O?void 0:()=>M((o=>!o)),readOnly:h,placeholder:"Enter search query",tabIndex:!h&&O?0:-1,"aria-autocomplete":h?void 0:"both","aria-controls":O?_:void 0,"aria-activedescendant":O?`${_}-row-${D}`:void 0,"aria-labelledby":b},void 0),(0,o.jsx)(N.Button,Object.assign({onClick:()=>M((o=>!o)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:u}),void 0)]}),void 0);var T})),{background:R,accent:T,content:P}=x,H={Button:s().button`
	--size: ${$};
	--border-radius: ${j};
	--padding: ${m};

	--color-background: ${R.M};
	--color-background-light: ${R.L};
	--color-background-disabled: ${R.XXD};

	--color-content: ${P.M};
	--color-accent: ${T.M};
	--color-accent-light: ${T.L};

	--shadow: ${O("M")};
	--light: ${O("L",T.L)};
	--light-pressed: ${O("M",T.L)};
	--focus: ${M};

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
`},G=(0,p.forwardRef)((({className:r,onClick:e,label:a,icon:t,labelledBy:i,...n},l)=>{const c=k(l);return(0,o.jsxs)(H.Button,Object.assign({className:r,ref:c,onClick:e,"aria-labelledby":a?void 0:i,"aria-label":a},n,{children:[t,a&&(0,o.jsx)("span",{children:a},void 0)]}),void 0)})),{background:q,accent:A,content:Y}=x,F={Switch:s().button`
	--size: ${$};
	--border-radius: ${j};
	--padding: ${w};

	--color-background: ${q.M};
	--color-background-light: ${q.L};
	--color-background-disabled: ${q.XXD};
	--color-handle: ${q.XXD};
	--color-handle-light: ${q.XD};

	--color-accent: ${A.M};
	--color-accent-light: ${A.L};

	--shadow: ${O("M")};
	--light: ${O("L",A.L)};
	--light-pressed: ${O("M",A.L)};
	--focus: ${M};

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
`},U=(0,p.forwardRef)((({className:r,checked:e,onChange:a,labelledBy:t,readOnly:i,...n},l)=>{const c=k(l);return(0,o.jsx)(F.Switch,Object.assign({className:r,ref:c,onClick:a,role:"switch","aria-checked":e,"aria-labelledby":t,"aria-readonly":i},n),void 0)})),{background:V,accent:W,content:J}=x,K={CheckBox:s().input`
	--size: ${$};
	--border-radius: ${j};
	--padding: ${w};
	--checkmark-thickness: calc(${w} / 1.25);

	--color-background: ${V.M};
	--color-background-light: ${V.L};
	--color-background-disabled: ${V.XXD};
	--color-handle: ${V.XXD};
	--color-handle-light: ${V.XD};

	--color-content: ${J.M};
	--color-accent: ${W.M};
	--color-accent-light: ${W.L};

	--shadow: ${O("M")};
	--light: ${O("L",W.L)};
	--light-pressed: ${O("M",W.L)};
	--focus: ${M};

	position: relative;
	width: var(--size);
	height: var(--size);

	cursor: pointer;
	visibility: hidden;

	margin: 0;

	&::before {
		content: '';
		visibility: visible;
		width: 100%;
		height: 100%;

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		transition: ${["background-color","box-shadow","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		visibility: visible;
		width: 30%;
		height: 60%;
		top: 8%;
		left: 30%;
		transform: rotate(45deg);

		border: var(--checkmark-thickness) solid transparent;
		border-top: none;
		border-left: none;
		border-radius: calc(var(--checkmark-thickness) / 2);

		transition: ${["border-color","top"].map((o=>`${o} 125ms ease-in-out`)).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		&::before {
			box-shadow: var(--light);
			background-color: var(--color-background-light);
		}
	}

	&:active {
		&::before {
			transform: translateY(5%);
			box-shadow: var(--light-pressed);
		}

		&::after {
			top: 12%;
		}
	}

	&:checked::after {
		border-color: var(--color-content);
	}

	&:checked:hover::after {
		border-color: var(--color-accent-light);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	}
`},Q=(0,p.forwardRef)((({className:r,checked:e,onChange:a,labelledBy:t,readOnly:i,...n},l)=>{const c=k(l);return(0,o.jsx)(K.CheckBox,Object.assign({className:r,ref:c,onChange:a,type:"checkbox","aria-labelledby":t,"aria-readonly":i},n),void 0)})),{background:Z,accent:oo,content:ro}=x,eo={TextInput:s().input`
	--size: ${$};
	--border-radius: ${j};
	--padding: ${m};
	--checkmark-thickness: calc(${w} / 1.25);

	--color-background: ${Z.M};
	--color-background-light: ${Z.L};
	--color-background-disabled: ${Z.XXD};
	--color-handle: ${Z.XXD};
	--color-handle-light: ${Z.XD};

	--color-content: ${ro.M};
	--color-placeholder: ${ro.XL};
	--color-accent: ${oo.M};
	--color-accent-light: ${oo.L};

	--color-scrollbar: ${ro.L};
	--color-scrollbar-hover: ${ro.XL};

	--shadow: ${O("M")};
	--light: ${O("L",oo.L)};
	--light-pressed: ${O("M",oo.L)};
	--focus: ${M};

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
`},ao=(0,p.forwardRef)((({className:r,value:e,onChange:a,multiline:t,labelledBy:i,...n},l)=>{const c=k(l);return(0,o.jsx)(eo.TextInput,Object.assign({className:r,ref:c,value:e,onChange:o=>a(o.target.value),as:t?"textarea":void 0,role:"textbox","aria-multiline":!!t||void 0,"aria-labelledby":i},n),void 0)}))})(),i})()}));