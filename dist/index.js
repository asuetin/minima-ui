/*! For license information please see index.js.LICENSE.txt */
!function(o,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):o["ui-components"]=r(o[void 0],o[void 0])}(self,(function(o,r){return(()=>{"use strict";var e={418:o=>{var r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function t(o){if(null==o)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}o.exports=function(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de","5"===Object.getOwnPropertyNames(o)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(o){return r[o]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(o){a[o]=o})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(o,i){for(var n,c,l=t(o),s=1;s<arguments.length;s++){for(var d in n=Object(arguments[s]))e.call(n,d)&&(l[d]=n[d]);if(r){c=r(n);for(var u=0;u<c.length;u++)a.call(n,c[u])&&(l[c[u]]=n[c[u]])}}return l}},251:(o,r,e)=>{e(418);var a=e(704),t=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;t=i("react.element"),i("react.fragment")}var n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(o,r,e){var a,i={},s=null,d=null;for(a in void 0!==e&&(s=""+e),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,a)&&!l.hasOwnProperty(a)&&(i[a]=r[a]);if(o&&o.defaultProps)for(a in r=o.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:o,key:s,ref:d,props:i,_owner:n.current}}r.jsx=s,r.jsxs=s},893:(o,r,e)=>{o.exports=e(251)},704:r=>{r.exports=o},885:o=>{o.exports=r}},a={};function t(o){var r=a[o];if(void 0!==r)return r.exports;var i=a[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.n=o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},t.d=(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),t.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};return(()=>{t.r(i),t.d(i,{Button:()=>q,ButtonStyles:()=>Y,CheckBox:()=>oo,CheckBoxStyles:()=>Z,ComboBox:()=>G,ComboBoxStyles:()=>T,Icon:()=>f,IconStyles:()=>b,List:()=>C,ListStyles:()=>S,RadioGroup:()=>vo,RadioGroupStyles:()=>bo,Switch:()=>W,SwitchStyles:()=>V,TextInput:()=>io,TextInputStyles:()=>to});var o=t(893);const r=()=>parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=o=>parseFloat(String(o))/(r()||16),a=o=>parseFloat(String(o))*(r()||16),n=o=>void 0===o,c=(o,r)=>{let e=o;for(;e;)if(e=e.parentNode,e==r)return!0;return!1},l=(()=>{let o=0;return r=>`${r}${++o}`})(),s=(o,r)=>o<r[0]?r[1]:o>r[1]?r[0]:o;var d=t(885),u=t.n(d);const b={Icon:u().svg((({stroke:o="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>d.css`
	stroke: ${o};
	fill: ${r};

	transition: ${["stroke","fill"].map((o=>`${o} 125ms ease-in-out`)).join()};
`))},v={fillOpacity:0},h={strokeOpacity:0},g={strokeLinecap:"round",strokeLinejoin:"round"},p={user:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},v,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,o.jsx)("path",Object.assign({},g,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},v,g,{children:[(0,o.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,o.jsx)("path",{d:"M10 12h13"},void 0),(0,o.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},g,{children:[(0,o.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},v),void 0),(0,o.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},g,v),void 0)},down:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},g,v),void 0)},undo:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},v,g,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},v,g,{children:[(0,o.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,o.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},g,{children:[(0,o.jsxs)("g",Object.assign({},v,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,o.jsx)("circle",Object.assign({},h,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",Object.assign({},h,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,o.jsx)("circle",Object.assign({},h,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,o.jsx)("path",Object.assign({},v,g,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},v,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,o.jsx)("path",Object.assign({},g,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,o.jsx)("path",Object.assign({},g,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,o.jsx)("path",Object.assign({},g,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({},v,g,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},v,g,{children:[(0,o.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,o.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},f=({preset:r,path:a,viewBoxSize:t,size:i,color:c="black",strokeWidth:l=2,...s})=>{const d=[a,t].every((o=>!n(o))),u=d?t:p[r].viewBoxSize,v=d?a:p[r].path,h=`${e(u*((i||u)/u))}rem`;return(0,o.jsx)(b.Icon,Object.assign({},s,{width:h,height:h,viewBox:`0 0 ${u} ${u}`,fill:c,stroke:c,strokeWidth:`${e(l)}rem`},{children:v}),void 0)};var k=t(704);const w=(o,r,e=window,a=!1)=>{const t=(0,k.useRef)(r);t.current=r,(0,k.useEffect)((()=>{if(e){const r=o=>t.current(o);return e.addEventListener(o,r,a),()=>e.removeEventListener(o,r)}}),[o,e,a])},x=(...o)=>{const r=(0,k.useRef)();return(0,k.useEffect)((()=>{for(const e of o)"function"==typeof e?e(r.current):e&&(e.current=r.current)}),[o]),r},m={background:{XXD:"rgb(195,195,195)",XD:"rgb(215,215,215)",D:"rgb(225,225,225)",M:"rgb(235,235,235)",L:"rgb(245,245,245)"},accent:{XD:"rgb(85,115,195)",D:"rgb(105,135,215)",M:"rgb(125,155,235)",L:"rgb(145,175,255)"},content:{M:"rgb(90,90,90)",L:"rgb(150,150,150)",XL:"rgb(160,160,160)"}},$="0.25rem",j="0.5rem",y="2rem",O="0.375rem",M={M:"0 0.05rem 0.2rem 0",L:"0 0.15rem 0.6rem 0"},z=(o="M",r="rgb(160,160,160)")=>`${M[o]} ${r}`,L=`0 0 0 0.125rem ${m.accent.XD}`,S={List:u().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},C=(0,k.forwardRef)((({rowHeight:r=a(y),rowCount:t,rowRenderer:i,...n},c)=>{const l=x(c),[s,d]=(0,k.useState)([0,0]),u=(0,k.useMemo)((()=>((o,e)=>{let a;return(...o)=>{a&&clearTimeout(a),a=setTimeout((()=>{(()=>{if(l.current){const{scrollTop:o,offsetHeight:e}=l.current,a=Math.floor((o-e)/r),i=Math.ceil((o+2*e)/r);d([a>0?a:0,i>t?t:i])}})(...o),a=null}),5)}})()),[r,t,l]);return w("scroll",u,l.current),w("animationend",u,l.current),(0,k.useEffect)((()=>{u()}),[u]),(0,o.jsx)(S.List,Object.assign({},n,{ref:l,role:"listbox"},{children:Array.from({length:s[1]-s[0]},((o,a)=>i(s[0]+a,{height:`${e(r)}rem`,marginTop:0==a?`${e(r*s[0])}rem`:void 0,marginBottom:a==s[1]-s[0]-1?`${e(r*(t-s[1]))}rem`:void 0})))}),void 0)})),{background:B,accent:D,content:R}=m,E=u().li`
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

		animation: ${d.keyframes`
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

			animation: ${d.keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`,X=u()(C)((({rowHeight:o,rowCount:r,visibleOptionCount:a})=>d.css`
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

	animation: ${d.keyframes`
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
`)),I=u().button`
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
`,_=u().input`
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
`,T={ComboBox:u().div`
	--border-radius: ${O};
	--padding: ${j};
	--width-scrollbar: ${$};
	--size-check-indicator: ${j};

	--color-background: ${B.M};
	--color-background-light: ${B.L};
	--color-background-disabled: ${B.XXD};
	--color-dropdown-background: ${B.M};
	--color-option-background-hover: ${B.D};
	--color-option-background-selected: ${B.XD};

	--color-content: ${R.M};
	--color-placeholder: ${R.XL};
	--color-accent: ${D.M};
	--color-accent-light: ${D.L};

	--color-scrollbar: ${R.L};
	--color-scrollbar-hover: ${R.XL};

	--shadow: ${z("M")};
	--light: ${z("L",D.L)};
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
`,Input:_,Button:I,Dropdown:X,Option:E},G=(0,k.forwardRef)((({height:r=a(y),options:e,groups:t,value:i,onChange:d,visibleOptionCount:u=5,arrowIcon:b=(0,o.jsx)(f,{preset:"down"},void 0),searchDisabled:v=!1,disabled:h=!1,...g},p)=>{const m=(0,k.useRef)(l("combobox-")),$=x(p),j=(0,k.useRef)(),O=(0,k.useRef)(),[M,z]=(0,k.useState)(!1),[L,S]=(0,k.useState)(""),[C,B]=(0,k.useState)(),[D,R]=(0,k.useState)([]),[E,X]=(0,k.useState)(0),I=D.length,_=`${m.current}-dropdown`,G=Array.isArray(i);return w("keydown",(o=>{if(!h)switch(o.code){case"ArrowDown":M&&(X((o=>{let r=s(o+1,[0,D.length-1]);return D[r].isGroup?s(++r,[0,D.length-1]):r})),o.preventDefault());break;case"ArrowUp":M&&(X((o=>{let r=s(o-1,[0,D.length-1]);return D[r].isGroup?s(--r,[0,D.length-1]):r})),o.preventDefault());break;case"Enter":M&&I&&(d(D[E].value),$.current.focus()),z((o=>!o));break;case"Escape":M?$.current.focus():$.current.blur(),z(!1)}})),w("click",(o=>{M&&!c(o.target,$.current)&&z(!1)})),(0,k.useEffect)((()=>{let o=null;""!=L&&(o=e.filter((({label:o,value:r})=>{if(o){if(o.toLowerCase().includes(L.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(L.toLowerCase()))return!0;return!1}))),B(o)}),[L,e]),(0,k.useEffect)((()=>{const o=[],r=[...C||e].sort(((r,e)=>(o.push(r.group,e.group),r.group<e.group?-1:0)));var a,i;(a=o.filter((o=>!n(o))),n(i)?a.filter(((o,r,e)=>e.indexOf(o)==r)):a.filter(((o,r)=>a.findIndex((r=>r===o))===r))).forEach((o=>{var e;const a=r.findIndex((r=>r.group==o));r.splice(a,0,{isGroup:!0,value:o,label:null===(e=null==t?void 0:t.find((r=>r.value==o)))||void 0===e?void 0:e.label})})),R(r)}),[C,e,t]),(0,k.useEffect)((()=>{if(O.current){let o=r*E;const{scrollTop:e}=O.current,a=e+r*(u-1)<=o,t=e>=o+r;t&&(o-=r*(u-1)),(a||t)&&O.current.scrollTo({top:o,behavior:"smooth"})}}),[E,r,u]),(0,k.useEffect)((()=>{M&&(S(""),j.current.focus())}),[M]),(0,k.useEffect)((()=>{h&&z(!1)}),[h]),(0,k.useEffect)((()=>{X(D.findIndex((o=>!o.isGroup)))}),[M,D]),(0,o.jsxs)(T.ComboBox,Object.assign({},g,{ref:$,height:r,role:"combobox",tabIndex:M||h?-1:0,"aria-expanded":M,"aria-owns":_,"aria-haspopup":"listbox","aria-disabled":h||void 0},{children:[M&&(0,o.jsx)(T.Dropdown,{ref:O,rowCount:I||1,rowHeight:r,rowRenderer:(r,e)=>{const a=D[r],t=G?i.findIndex((o=>o==(null==a?void 0:a.value))):-1;return(0,o.jsx)(T.Option,Object.assign({style:e,onClick:I&&!(null==a?void 0:a.isGroup)?()=>{if(G){const o=[...i];-1==t?o.unshift(null==a?void 0:a.value):o.splice(t,1),d(o)}else d(null==a?void 0:a.value),z(!1)}:void 0,role:(null==a?void 0:a.isGroup)?void 0:"option",id:`${_}-row-${r}`,"aria-checked":I&&!(null==a?void 0:a.isGroup)&&G?-1!=t:void 0,"aria-selected":!(!I||(null==a?void 0:a.isGroup)||E!=r)||void 0,as:(null==a?void 0:a.isGroup)?"label":void 0},{children:(null==a?void 0:a.label)||(null==a?void 0:a.value)||"No results"}),`${r}-${null==a?void 0:a.value}`)},visibleOptionCount:u,id:_,"aria-labelledby":g["aria-labelledby"],"aria-multiselectable":G,"aria-label":g["aria-label"]?void 0:"Dropdown menu"},void 0),(0,o.jsx)(T.Input,{ref:j,value:!v&&M?L:G?i.map((o=>{const r=e.find((r=>r.value==o));return r.label||r.value})).join(", "):(null===(P=e.find((o=>o.value==i)))||void 0===P?void 0:P.label)||i,onChange:v?void 0:o=>S(o.target.value),onClick:M?void 0:()=>z((o=>!o)),readOnly:v,placeholder:"Enter search query",tabIndex:!v&&M?0:-1,"aria-autocomplete":v?void 0:"both","aria-controls":M?_:void 0,"aria-activedescendant":M?`${_}-row-${E}`:void 0,"aria-labelledby":g["aria-labelledby"]},void 0),(0,o.jsx)(T.Button,Object.assign({onClick:()=>z((o=>!o)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:b}),void 0)]}),void 0);var P})),{background:P,accent:H,content:A}=m,Y={Button:u().button`
	--size: ${y};
	--border-radius: ${O};
	--padding: ${j};

	--color-background: ${P.M};
	--color-background-light: ${P.L};
	--color-background-disabled: ${P.XXD};

	--color-content: ${A.M};
	--color-accent: ${H.M};
	--color-accent-light: ${H.L};

	--shadow: ${z("M")};
	--light: ${z("L",H.L)};
	--light-pressed: ${z("M",H.L)};
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
`},q=(0,k.forwardRef)((({label:r,icon:e,...a},t)=>{const i=x(t);return(0,o.jsxs)(Y.Button,Object.assign({},a,{ref:i,"aria-label":r},{children:[e,r&&(0,o.jsx)("span",{children:r},void 0)]}),void 0)})),{background:N,accent:F,content:U}=m,V={Switch:u().button`
	--size: ${y};
	--border-radius: ${O};
	--padding: ${$};

	--color-background: ${N.M};
	--color-background-light: ${N.L};
	--color-background-disabled: ${N.XXD};
	--color-handle: ${N.XXD};
	--color-handle-light: ${N.XD};

	--color-accent: ${F.M};
	--color-accent-light: ${F.L};

	--shadow: ${z("M")};
	--light: ${z("L",F.L)};
	--light-pressed: ${z("M",F.L)};
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
`},W=(0,k.forwardRef)((({checked:r,onChange:e,readOnly:a,...t},i)=>{const n=x(i);return(0,o.jsx)(V.Switch,Object.assign({},t,{ref:n,onClick:a?void 0:e,role:"switch","aria-checked":r,"aria-readonly":a}),void 0)})),{background:K,accent:J,content:Q}=m,Z={CheckBox:u().input.attrs((()=>({type:"checkbox"})))`
	--size: ${y};
	--border-radius: ${O};
	--padding: ${$};
	--checkmark-thickness: calc(${$} / 1.25);

	--color-background: ${K.M};
	--color-background-light: ${K.L};
	--color-background-disabled: ${K.XXD};

	--color-content: ${Q.M};
	--color-accent: ${J.M};
	--color-accent-light: ${J.L};

	--shadow: ${z("M")};
	--light: ${z("L",J.L)};
	--light-pressed: ${z("M",J.L)};
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
`},oo=(0,k.forwardRef)((({onChange:r,readOnly:e,...a},t)=>{const i=x(t);return(0,o.jsx)(Z.CheckBox,Object.assign({},a,{ref:i,onChange:e?void 0:r,onKeyDown:e?void 0:o=>{"Enter"==o.code&&r()},"aria-readonly":e}),void 0)})),{background:ro,accent:eo,content:ao}=m,to={TextInput:u().input`
	--size: ${y};
	--border-radius: ${O};
	--padding: ${j};
	--checkmark-thickness: calc(${$} / 1.25);

	--color-background: ${ro.M};
	--color-background-light: ${ro.L};
	--color-background-disabled: ${ro.XXD};

	--color-content: ${ao.M};
	--color-placeholder: ${ao.XL};
	--color-accent: ${eo.M};
	--color-accent-light: ${eo.L};

	--color-scrollbar: ${ao.L};
	--color-scrollbar-hover: ${ao.XL};

	--shadow: ${z("M")};
	--light: ${z("L",eo.L)};
	--light-pressed: ${z("M",eo.L)};
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
`},io=(0,k.forwardRef)((({onChange:r,multiline:e,...a},t)=>{const i=x(t);return(0,o.jsx)(to.TextInput,Object.assign({},a,{ref:i,onChange:o=>r(o.target.value),as:e?"textarea":void 0,role:"textbox","aria-multiline":!!e||void 0}),void 0)})),{background:no,accent:co,content:lo}=m,so=u().input.attrs((()=>({type:"radio"})))`
	position: relative;
	width: var(--size);
	height: 0;

	outline: none;

	margin: calc(var(--size) / 2) 0 calc(var(--size) / 2) 0;

	&::before {
		content: '';
		width: var(--size);
		height: var(--size);
		transform: translateY(-50%);

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: 50%;
		transition: ${["background-color","box-shadow","transform"].map((o=>`${o} 125ms ease-in-out`)).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		width: calc(var(--size) * 0.5);
		height: calc(var(--size) * 0.5);
		top: 0;
		left: calc(var(--size) * 0.25);
		transform: translateY(-50%);

		background-color: transparent;
		border-radius: 50%;

		transition: ${["background-color","top"].map((o=>`${o} 125ms ease-in-out`)).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:not(:disabled){
		cursor: pointer;

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
			background-color: var(--color-accent-light);
		}
	}

	&:checked::after {
		background-color: var(--color-content);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}
`,uo=u().li.attrs((()=>({role:"radio"})))`
	display: grid;
	grid-template-columns: min-content 1fr;
	align-items: center;

	>:last-child {
		line-height: var(--size);
		padding-left: var(--padding);
	}
`,bo={RadioGroup:u().ul.attrs((()=>({role:"radiogroup"})))`
	--size: ${y};
	--padding: ${j};

	--color-background: ${no.M};
	--color-background-light: ${no.L};
	--color-background-disabled: ${no.XXD};

	--color-content: ${lo.M};
	--color-accent: ${co.M};
	--color-accent-light: ${co.L};

	--shadow: ${z("M")};
	--light: ${z("L",co.L)};
	--light-pressed: ${z("M",co.L)};
	--focus: ${L};

	font-family: 'Open Sans', sans-serif;
	color: var(--color-content);

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	grid-gap: calc(var(--padding) * 2);
	padding: 0;
	margin: 0;

	&:disabled {
		pointer-events: none;
	}
`,RadioGroupOption:uo,RadioButton:so},vo=(0,k.forwardRef)((({options:r,value:e,onChange:a,disabled:t,...i},n)=>{const d=(0,k.useRef)(l("radiogroup-")),u=x(n),b=o=>{if(c(document.activeElement,u.current)){let t=r.findIndex((o=>o.value==e))+o;t=s(t,[0,r.length-1]),a(t),document.getElementById(`${d.current}-option-${t}`).focus()}};return w("keydown",(o=>{if(!t)switch(o.code){case"ArrowDown":case"ArrowRight":b(1),o.preventDefault();break;case"ArrowUp":case"ArrowLeft":b(-1),o.preventDefault()}})),(0,o.jsx)(bo.RadioGroup,Object.assign({},i,{ref:u},{children:r.map(((r,i)=>{const n=`${d.current}-option-${i}`,c=e==r.value;return(0,o.jsxs)(bo.RadioGroupOption,Object.assign({"aria-checked":c},{children:[(0,o.jsx)(bo.RadioButton,{id:n,checked:c,tabIndex:c?0:-1,onChange:t?void 0:()=>a(r.value),disabled:t},void 0),(0,o.jsx)("label",Object.assign({htmlFor:n},{children:r.label||r.value}),void 0)]}),n)}))}),void 0)}))})(),i})()}));