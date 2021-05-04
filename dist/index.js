/*! For license information please see index.js.LICENSE.txt */
!function(r,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],o):"object"==typeof exports?exports["minima-ui"]=o(require("react"),require("styled-components")):r["minima-ui"]=o(r[void 0],r[void 0])}(self,(function(r,o){return(()=>{"use strict";var e={418:r=>{var o=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function t(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var o={},e=0;e<10;e++)o["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(o).map((function(r){return o[r]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(r){a[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(r,i){for(var n,s,c=t(r),d=1;d<arguments.length;d++){for(var l in n=Object(arguments[d]))e.call(n,l)&&(c[l]=n[l]);if(o){s=o(n);for(var u=0;u<s.length;u++)a.call(n,s[u])&&(c[s[u]]=n[s[u]])}}return c}},251:(r,o,e)=>{e(418);var a=e(704),t=60103;if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;t=i("react.element"),o.Fragment=i("react.fragment")}var n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(r,o,e){var a,i={},d=null,l=null;for(a in void 0!==e&&(d=""+e),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(l=o.ref),o)s.call(o,a)&&!c.hasOwnProperty(a)&&(i[a]=o[a]);if(r&&r.defaultProps)for(a in o=r.defaultProps)void 0===i[a]&&(i[a]=o[a]);return{$$typeof:t,type:r,key:d,ref:l,props:i,_owner:n.current}}o.jsx=d,o.jsxs=d},893:(r,o,e)=>{r.exports=e(251)},704:o=>{o.exports=r},885:r=>{r.exports=o}},a={};function t(r){var o=a[r];if(void 0!==o)return o.exports;var i=a[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return t.d(o,{a:o}),o},t.d=(r,o)=>{for(var e in o)t.o(o,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:o[e]})},t.o=(r,o)=>Object.prototype.hasOwnProperty.call(r,o),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var i={};return(()=>{t.r(i),t.d(i,{Button:()=>R,ButtonStyles:()=>M,CheckBox:()=>D,CheckBoxStyles:()=>P,ComboBox:()=>C,ComboBoxStyles:()=>B,Icon:()=>f,IconStyles:()=>h,List:()=>j,ListStyles:()=>$,ProgressBar:()=>K,ProgressBarStyles:()=>U,RadioGroup:()=>G,RadioGroupStyles:()=>F,Slider:()=>N,SliderStyles:()=>q,Switch:()=>I,SwitchStyles:()=>E,TextInput:()=>L,TextInputStyles:()=>_});var r=t(893);const o=()=>parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=r=>parseFloat(String(r))/(o()||16),a=r=>parseFloat(String(r))*(o()||16),n=r=>void 0===r,s=(r,o)=>{let e=r;for(;e;)if(e=e.parentNode,e==o)return!0;return!1},c=(()=>{let r=0;return o=>`${o}${++r}`})(),d=(r,o,e=!1)=>r<o[0]?e?o[1]:o[0]:r>o[1]?e?o[0]:o[1]:r;var l=t(885),u=t.n(l);const h={Icon:u().svg((({stroke:r="rgb(0,0,0)",fill:o="rgb(0,0,0)"})=>l.css`
	stroke: ${r};
	fill: ${o};

	transition: ${["stroke","fill"].map((r=>`${r} 125ms ease-in-out`)).join()};
`))},b={fillOpacity:0},g={strokeOpacity:0},v={strokeLinecap:"round",strokeLinejoin:"round"},p={user:{viewBoxSize:24,path:(0,r.jsxs)("g",Object.assign({},b,{transform:"translate(0 -1098.52)"},{children:[(0,r.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,r.jsx)("path",Object.assign({},v,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,r.jsxs)("g",Object.assign({},b,v,{children:[(0,r.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,r.jsx)("path",{d:"M10 12h13"},void 0),(0,r.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,r.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},v,{children:[(0,r.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},b),void 0),(0,r.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,r.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},v,b),void 0)},down:{viewBoxSize:16,path:(0,r.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},v,b),void 0)},undo:{viewBoxSize:16,path:(0,r.jsxs)("g",Object.assign({},b,v,{children:[(0,r.jsx)("path",{d:"M3 4h6"},void 0),(0,r.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,r.jsx)("path",{d:"M9 14H5"},void 0),(0,r.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,r.jsxs)("g",Object.assign({},b,v,{children:[(0,r.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,r.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,r.jsxs)("g",Object.assign({},v,{children:[(0,r.jsxs)("g",Object.assign({},b,{children:[(0,r.jsx)("path",{d:"M3 4h6"},void 0),(0,r.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,r.jsx)("path",{d:"M9 14H5"},void 0),(0,r.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,r.jsx)("circle",Object.assign({},g,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",Object.assign({},g,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,r.jsx)("circle",Object.assign({},g,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,r.jsx)("path",Object.assign({},b,v,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,r.jsxs)("g",Object.assign({},b,{transform:"translate(0 -1098.52)"},{children:[(0,r.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,r.jsx)("path",Object.assign({},v,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,r.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,r.jsx)("path",Object.assign({},v,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,r.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,r.jsx)("path",Object.assign({},v,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,r.jsx)("path",Object.assign({},b,v,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,r.jsxs)("g",Object.assign({},b,v,{children:[(0,r.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,r.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},f=({preset:o,path:a,viewBoxSize:t,size:i,color:s="black",strokeWidth:c=2,...d})=>{const l=[a,t].every((r=>!n(r))),u=l?t:p[o].viewBoxSize,b=l?a:p[o].path,g=`${e(u*((i||u)/u))}rem`;return(0,r.jsx)(h.Icon,Object.assign({},d,{width:g,height:g,viewBox:`0 0 ${u} ${u}`,fill:s,stroke:s,strokeWidth:`${e(c)}rem`},{children:b}),void 0)};var w=t(704);const k=(r,o,e=window,a=!1)=>{const t=(0,w.useRef)(o);t.current=o,(0,w.useEffect)((()=>{if(e){const o=r=>t.current(r);return e.addEventListener(r,o,a),()=>e.removeEventListener(r,o)}}),[r,e,a])},m=(...r)=>{const o=(0,w.useRef)();return(0,w.useEffect)((()=>{for(const e of r)"function"==typeof e?e(o.current):e&&(e.current=o.current)}),[r]),o},x={fontFamily:"Open Sans, sans-serif",background:["rgb(155,155,155)","rgb(165,165,165)","rgb(175,175,175)","rgb(185,185,185)","rgb(195,195,195)","rgb(205,205,205)","rgb(215,215,215)","rgb(225,225,225)","rgb(235,235,235)","rgb(245,245,245)"],accent:["rgb(55,85,165)","rgb(65,95,175)","rgb(75,105,185)","rgb(85,115,195)","rgb(95,125,205)","rgb(105,135,215)","rgb(115,145,225)","rgb(125,155,235)","rgb(135,165,245)","rgb(145,175,255)"],content:["rgb(60,60,60)","rgb(70,70,70)","rgb(80,80,80)","rgb(90,90,90)","rgb(100,100,100)","rgb(110,110,110)","rgb(120,120,120)","rgb(130,130,130)","rgb(140,140,140)","rgb(150,150,150)"],size:["0.25rem","0.5rem","1rem","2rem","4rem"],radius:["0.375rem","0.375rem","0.375rem","0.375rem","0.375rem"],shadow:["0 0.05rem 0.2rem 0 rgb(160,160,160)","0 0.15rem 0.6rem 0 rgb(160,160,160)","0 0.45rem 1.8rem 0 rgb(160,160,160)"],light:["0 0.05rem 0.2rem 0 rgb(145,175,255)","0 0.15rem 0.6rem 0 rgb(145,175,255)","0 0.45rem 1.8rem 0 rgb(145,175,255)"],focus:"0 0 0 0.125rem rgb(85,115,195)"},$={List:u().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},j=(0,w.forwardRef)((({rowHeight:o=a(x.size[3]),rowCount:t,rowRenderer:i,...n},s)=>{const c=m(s),[d,l]=(0,w.useState)([0,0]),u=(0,w.useMemo)((()=>((r,e)=>{let a;return(...r)=>{a&&clearTimeout(a),a=setTimeout((()=>{(()=>{if(c.current){const{scrollTop:r,offsetHeight:e}=c.current,a=Math.floor((r-e)/o),i=Math.ceil((r+2*e)/o);l([a>0?a:0,i>t?t:i])}})(...r),a=null}),5)}})()),[o,t,c]);return k("scroll",u,c.current),k("animationend",u,c.current),(0,w.useEffect)((()=>{u()}),[u]),(0,r.jsx)($.List,Object.assign({},n,{ref:c,role:"listbox"},{children:Array.from({length:d[1]-d[0]},((r,a)=>i(d[0]+a,{height:`${e(o)}rem`,marginTop:0==a?`${e(o*d[0])}rem`:void 0,marginBottom:a==d[1]-d[0]-1?`${e(o*(t-d[1]))}rem`:void 0})))}),void 0)})),y=u().li`
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

		animation: ${l.keyframes`
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

			animation: ${l.keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`,O=u()(j)((({rowHeight:r,rowCount:o,visibleOptionCount:a})=>l.css`
	--height: ${e(r*Math.min(a,o||1))}rem;

	position: absolute;
	width: 100%;
	top: 100%;
	height: var(--height);

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	animation: ${l.keyframes`
		0% {
			height: 0;
		}
		100% {
			height: var(--height);
		}
	`} 125ms ease-in-out;

	> * {
		line-height: ${e(r)}rem;
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
`)),z=u().button`
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
		transition: ${["stroke","fill","transform"].map((r=>`${r} 125ms ease-in-out`)).join()};
	}
`,S=u().input`
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
`,B={ComboBox:u().div((({theme:r,height:o})=>{const{fontFamily:a,background:t,accent:i,content:n,size:s,radius:c,shadow:d,light:u,focus:h}=0==Object.keys(r).length?x:r;return l.css`
		--border-radius: ${c[2]};
		--padding: ${s[1]};
		--width-scrollbar: ${s[0]};
		--size-check-indicator: ${s[1]};

		--color-background: ${t[8]};
		--color-background-light: ${t[9]};
		--color-background-disabled: ${t[4]};
		--color-dropdown-background: ${t[8]};
		--color-option-background-hover: ${t[7]};
		--color-option-background-selected: ${t[6]};

		--color-content: ${n[3]};
		--color-placeholder: ${n[9]};
		--color-accent: ${i[7]};
		--color-accent-light: ${i[9]};

		--color-scrollbar: ${n[8]};
		--color-scrollbar-hover: ${n[9]};

		--shadow-dark: ${d[0]};
		--shadow-light: ${u[1]};
		--shadow-focus: ${h};

		position: relative;
		height: ${e(o)}rem;

		background-color: var(--color-background);
		outline: none;
		box-shadow: var(--shadow-dark);
		border-radius: var(--border-radius);
		font-family: ${a};
		color: var(--color-content);
		transition: ${["background-color","box-shadow","border-radius"].map((r=>`${r} 125ms ease-in-out`)).join()};

		display: flex;

		svg {
			stroke: var(--color-content);
			fill: var(--color-content);
		}

		&[aria-expanded='true'], &:hover, ${O}{
			box-shadow: var(--shadow-light);
		}

		&[aria-expanded='true'], &:hover {
			background-color: var(--color-background-light);
		}

		&[aria-expanded='false']{
			&:focus {
				box-shadow: var(--shadow-dark), var(--shadow-focus);
			}

			&:hover {
				${S}{
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

			${z}{
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
	`})),Input:S,Button:z,Dropdown:O,Option:y},C=(0,w.forwardRef)((({height:o=a(x.size[3]),options:e,groups:t,value:i,onChange:l,visibleOptionCount:u=5,arrowIcon:h=(0,r.jsx)(f,{preset:"down"},void 0),searchDisabled:b=!1,disabled:g=!1,...v},p)=>{const $=(0,w.useRef)(c("combobox-")),j=m(p),y=(0,w.useRef)(),O=(0,w.useRef)(),[z,S]=(0,w.useState)(!1),[C,M]=(0,w.useState)(""),[R,E]=(0,w.useState)(),[I,P]=(0,w.useState)([]),[D,_]=(0,w.useState)(0),L=I.length,T=`${$.current}-dropdown`,A=Array.isArray(i);return k("keydown",(r=>{if(!g)switch(r.code){case"ArrowDown":z&&(_((r=>{let o=d(r+1,[0,I.length-1],!0);return I[o].isGroup?d(++o,[0,I.length-1],!0):o})),r.preventDefault());break;case"ArrowUp":z&&(_((r=>{let o=d(r-1,[0,I.length-1],!0);return I[o].isGroup?d(--o,[0,I.length-1],!0):o})),r.preventDefault());break;case"Enter":z&&L&&(l(I[D].value),j.current.focus()),S((r=>!r));break;case"Escape":z?j.current.focus():j.current.blur(),S(!1)}})),k("click",(r=>{z&&!s(r.target,j.current)&&S(!1)})),(0,w.useEffect)((()=>{let r=null;""!=C&&(r=e.filter((({label:r,value:o})=>{if(r){if(r.toLowerCase().includes(C.toLowerCase()))return!0}else if(String(o).toLowerCase().includes(C.toLowerCase()))return!0;return!1}))),E(r)}),[C,e]),(0,w.useEffect)((()=>{const r=[],o=[...R||e].sort(((o,e)=>(r.push(o.group,e.group),o.group<e.group?-1:0)));var a,i;(a=r.filter((r=>!n(r))),n(i)?a.filter(((r,o,e)=>e.indexOf(r)==o)):a.filter(((r,o)=>a.findIndex((o=>o===r))===o))).forEach((r=>{var e;const a=o.findIndex((o=>o.group==r));o.splice(a,0,{isGroup:!0,value:r,label:null===(e=null==t?void 0:t.find((o=>o.value==r)))||void 0===e?void 0:e.label})})),P(o)}),[R,e,t]),(0,w.useEffect)((()=>{if(O.current){let r=o*D;const{scrollTop:e}=O.current,a=e+o*(u-1)<=r,t=e>=r+o;t&&(r-=o*(u-1)),(a||t)&&O.current.scrollTo({top:r,behavior:"smooth"})}}),[D,o,u]),(0,w.useEffect)((()=>{z&&(M(""),y.current.focus())}),[z]),(0,w.useEffect)((()=>{g&&S(!1)}),[g]),(0,w.useEffect)((()=>{_(I.findIndex((r=>!r.isGroup)))}),[z,I]),(0,r.jsxs)(B.ComboBox,Object.assign({},v,{ref:j,height:o,role:"combobox",tabIndex:z||g?-1:0,"aria-expanded":z,"aria-owns":T,"aria-haspopup":"listbox","aria-disabled":g||void 0},{children:[z&&(0,r.jsx)(B.Dropdown,{ref:O,rowCount:L||1,rowHeight:o,rowRenderer:(o,e)=>{const a=I[o],t=A?i.findIndex((r=>r==(null==a?void 0:a.value))):-1;return(0,r.jsx)(B.Option,Object.assign({style:e,onClick:L&&!(null==a?void 0:a.isGroup)?()=>{if(A){const r=[...i];-1==t?r.unshift(null==a?void 0:a.value):r.splice(t,1),l(r)}else l(null==a?void 0:a.value),S(!1)}:void 0,role:(null==a?void 0:a.isGroup)?void 0:"option",id:`${T}-row-${o}`,"aria-checked":L&&!(null==a?void 0:a.isGroup)&&A?-1!=t:void 0,"aria-selected":!(!L||(null==a?void 0:a.isGroup)||D!=o)||void 0,as:(null==a?void 0:a.isGroup)?"label":void 0},{children:(null==a?void 0:a.label)||(null==a?void 0:a.value)||"No results"}),`${o}-${null==a?void 0:a.value}`)},visibleOptionCount:u,id:T,"aria-labelledby":v["aria-labelledby"],"aria-multiselectable":A,"aria-label":v["aria-label"]?void 0:"Dropdown menu"},void 0),(0,r.jsx)(B.Input,{ref:y,value:!b&&z?C:A?i.map((r=>{const o=e.find((o=>o.value==r));return o.label||o.value})).join(", "):(null===(F=e.find((r=>r.value==i)))||void 0===F?void 0:F.label)||i,onChange:b?void 0:r=>M(r.target.value),onClick:z?void 0:()=>S((r=>!r)),readOnly:b,placeholder:"Enter search query",tabIndex:!b&&z?0:-1,"aria-autocomplete":b?void 0:"both","aria-controls":z?T:void 0,"aria-activedescendant":z?`${T}-row-${D}`:void 0,"aria-labelledby":v["aria-labelledby"]},void 0),(0,r.jsx)(B.Button,Object.assign({onClick:()=>S((r=>!r)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:h}),void 0)]}),void 0);var F})),M={Button:u().button((({theme:r})=>{const{fontFamily:o,background:e,accent:a,content:t,size:i,radius:n,shadow:s,light:c,focus:d}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${i[3]};
		--border-radius: ${n[2]};
		--padding: ${i[1]};

		--color-background: ${e[8]};
		--color-background-light: ${e[9]};
		--color-background-disabled: ${e[4]};

		--color-content: ${t[0]};
		--color-accent: ${a[7]};
		--color-accent-light: ${a[9]};

		--shadow-dark: ${s[0]};
		--shadow-light: ${c[1]};
		--shadow-light-pressed: ${c[0]};
		--shadow-focus: ${d};

		position: relative;
		height: var(--size);

		cursor: pointer;
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		border: none;
		border-radius: var(--border-radius);
		outline: none;
		font-family: ${o};
		font-weight: bold;
		color: var(--color-content);
		transition: ${["background-color","box-shadow","transform"].map((r=>`${r} 125ms ease-in-out`)).join()};

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
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:hover {
			box-shadow: var(--shadow-light);
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
			box-shadow: var(--shadow-light-pressed);
			transform: translateY(5%);
		}

		&:disabled {
			background-color: var(--color-background-disabled);
			pointer-events: none;
		}
	`}))},R=(0,w.forwardRef)((({label:o,icon:e,...a},t)=>{const i=m(t);return(0,r.jsxs)(M.Button,Object.assign({},a,{ref:i,"aria-label":o},{children:[e,o&&(0,r.jsx)("span",{children:o},void 0)]}),void 0)})),E={Switch:u().button((({theme:r})=>{const{background:o,accent:e,size:a,radius:t,shadow:i,light:n,focus:s}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${a[3]};
		--border-radius: ${t[2]};
		--padding: ${a[0]};

		--color-background: ${o[8]};
		--color-background-light: ${o[9]};
		--color-background-disabled: ${o[4]};
		--color-thumb: ${o[4]};
		--color-thumb-light: ${o[6]};

		--color-accent: ${e[7]};
		--color-accent-light: ${e[9]};

		--shadow-dark: ${i[0]};
		--shadow-light: ${n[1]};
		--shadow-light-pressed: ${n[0]};
		--shadow-focus: ${s};

		position: relative;
		width: calc(var(--size) * 1.75);
		height: var(--size);

		cursor: pointer;
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		border: none;
		border-radius: var(--border-radius);
		outline: none;
		transition: ${["background-color","box-shadow","transform"].map((r=>`${r} 125ms ease-in-out`)).join()};

		display: flex;

		&::after {
			content: '';
			position: absolute;
			left: var(--padding);
			top: var(--padding);
			width: 30%;
			height: calc(100% - var(--padding) * 2);

			border-radius: var(--border-radius);
			background-color: var(--color-thumb);
			transition: left 125ms ease-in-out;
		}

		&:focus {
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:hover {
			box-shadow: var(--shadow-light);
			background-color: var(--color-background-light);

			&::after {
				background-color: var(--color-thumb-light);
			}
		}

		&:active {
			box-shadow: var(--shadow-light-pressed);
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
				background-color: var(--color-thumb-light);
			}
		}

		&:disabled, &[aria-readonly='true'] {
			pointer-events: none;
		}
	`}))},I=(0,w.forwardRef)((({checked:o,onChange:e,readOnly:a,...t},i)=>{const n=m(i);return(0,r.jsx)(E.Switch,Object.assign({},t,{ref:n,onClick:a?void 0:e,role:"switch","aria-checked":o,"aria-readonly":a}),void 0)})),P={CheckBox:u().input.attrs((()=>({type:"checkbox"})))((({theme:r})=>{const{background:o,accent:e,content:a,size:t,radius:i,shadow:n,light:s,focus:c}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${t[3]};
		--border-radius: ${i[2]};
		--padding: ${t[0]};
		--checkmark-thickness: calc(${t[0]} / 1.25);

		--color-background: ${o[8]};
		--color-background-light: ${o[9]};
		--color-background-disabled: ${o[4]};

		--color-content: ${a[3]};
		--color-accent: ${e[7]};
		--color-accent-light: ${e[9]};

		--shadow-dark: ${n[0]};
		--shadow-light: ${s[1]};
		--shadow-light-pressed: ${s[0]};
		--shadow-focus: ${c};

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
			box-shadow: var(--shadow-dark);
			border-radius: var(--border-radius);
			transition: ${["background-color","box-shadow","transform"].map((r=>`${r} 125ms ease-in-out`)).join()};

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

			transition: ${["border-color","top"].map((r=>`${r} 125ms ease-in-out`)).join()};
		}

		&:focus::before {
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:not([aria-readonly='true']):not(:disabled){
			&:hover {
				&::before {
					box-shadow: var(--shadow-light);
					background-color: var(--color-background-light);
				}
			}

			&:active {
				&::before {
					transform: translateY(-45%);
					box-shadow: var(--shadow-light-pressed);
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
	`}))},D=(0,w.forwardRef)((({onChange:o,readOnly:e,...a},t)=>{const i=m(t);return(0,r.jsx)(P.CheckBox,Object.assign({},a,{ref:i,onChange:e?void 0:o,onKeyDown:e?void 0:r=>{"Enter"==r.code&&o()},"aria-readonly":e}),void 0)})),_={TextInput:u().input((({theme:r})=>{const{fontFamily:o,background:e,accent:a,content:t,size:i,radius:n,shadow:s,light:c,focus:d}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${i[3]};
		--border-radius: ${n[2]};
		--padding: ${i[1]};
		--checkmark-thickness: calc(${i[0]} / 1.25);

		--color-background: ${e[8]};
		--color-background-light: ${e[9]};
		--color-background-disabled: ${e[4]};

		--color-content: ${t[3]};
		--color-placeholder: ${t[9]};
		--color-accent: ${a[7]};
		--color-accent-light: ${a[9]};

		--color-scrollbar: ${t[8]};
		--color-scrollbar-hover: ${t[9]};

		--shadow-dark: ${s[0]};
		--shadow-light: ${c[1]};
		--shadow-light-pressed: ${c[0]};
		--shadow-focus: ${d};

		position: relative;
		height: var(--size);

		font-family: ${o};
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: var(--color-content);
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		outline: none;
		border: none;
		border-radius: var(--border-radius);
		transition: ${["background-color","box-shadow"].map((r=>`${r} 125ms ease-in-out`)).join()};

		padding: 0 var(--padding) 0 var(--padding);

		&[aria-multiline='true']{
			padding: var(--padding);
		}

		&::placeholder {
			color: var(--color-placeholder);
		}

		&:focus, &:hover {
			box-shadow: var(--shadow-light);
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
	`}))},L=(0,w.forwardRef)((({onChange:o,multiline:e,...a},t)=>{const i=m(t);return(0,r.jsx)(_.TextInput,Object.assign({},a,{ref:i,onChange:r=>o(r.target.value),as:e?"textarea":void 0,role:"textbox","aria-multiline":!!e||void 0}),void 0)})),T=u().input.attrs((()=>({type:"radio"})))`
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
		box-shadow: var(--shadow-dark);
		border-radius: 50%;
		transition: ${["background-color","box-shadow","transform"].map((r=>`${r} 125ms ease-in-out`)).join()};

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

		transition: ${["background-color","top"].map((r=>`${r} 125ms ease-in-out`)).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow-dark), var(--shadow-focus);
	}

	&:not(:disabled){
		cursor: pointer;

		&:hover {
			&::before {
				box-shadow: var(--shadow-light);
				background-color: var(--color-background-light);
			}
		}

		&:active {
			&::before {
				transform: translateY(-45%);
				box-shadow: var(--shadow-light-pressed);
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
`,A=u().li.attrs((()=>({role:"radio"})))`
	display: grid;
	grid-template-columns: min-content 1fr;
	align-items: center;

	>:last-child {
		line-height: var(--size);
		padding-left: var(--padding);
	}
`,F={RadioGroup:u().ul.attrs((()=>({role:"radiogroup"})))((({theme:r})=>{const{fontFamily:o,background:e,accent:a,content:t,size:i,radius:n,shadow:s,light:c,focus:d}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${i[3]};
		--padding: ${i[1]};

		--color-background: ${e[8]};
		--color-background-light: ${e[9]};
		--color-background-disabled: ${e[4]};

		--color-content: ${t[3]};
		--color-accent: ${a[7]};
		--color-accent-light: ${a[9]};

		--shadow-dark: ${s[0]};
		--shadow-light: ${c[1]};
		--shadow-light-pressed: ${c[0]};
		--shadow-focus: ${d};

		font-family: ${o};
		color: var(--color-content);

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: calc(var(--padding) * 2);
		padding: 0;
		margin: 0;

		&:disabled {
			pointer-events: none;
		}
	`})),RadioGroupOption:A,RadioButton:T},G=(0,w.forwardRef)((({options:o,value:e,onChange:a,disabled:t,...i},n)=>{const l=(0,w.useRef)(c("radiogroup-")),u=m(n),h=r=>{if(s(document.activeElement,u.current)){let t=o.findIndex((r=>r.value==e))+r;t=d(t,[0,o.length-1],!0),a(t),document.getElementById(`${l.current}-option-${t}`).focus()}};return k("keydown",(r=>{if(!t)switch(r.code){case"ArrowDown":case"ArrowRight":h(1),r.preventDefault();break;case"ArrowUp":case"ArrowLeft":h(-1),r.preventDefault()}})),(0,r.jsx)(F.RadioGroup,Object.assign({},i,{ref:u},{children:o.map(((o,i)=>{const n=`${l.current}-option-${i}`,s=e==o.value;return(0,r.jsxs)(F.RadioGroupOption,Object.assign({"aria-checked":s},{children:[(0,r.jsx)(F.RadioButton,{id:n,checked:s,tabIndex:s?0:-1,onChange:t?void 0:()=>a(o.value),disabled:t},void 0),(0,r.jsx)("label",Object.assign({htmlFor:n},{children:o.label||o.value}),void 0)]}),n)}))}),void 0)})),H=u().div.attrs((({left:r,width:o})=>({style:{left:`calc(${100*r}% - var(--thumb-size) / 2 - var(--padding))`,width:`calc(${100*o}% + var(--thumb-size) + var(--padding) * 2)`}})))`
	position: absolute;
	top: 0;
	height: 100%;

	cursor: grab;
	outline: none;
	border-radius: var(--border-radius);
	background-color: var(--color-accent);
	transition: ${["background-color","box-shadow"].map((r=>`${r} 125ms ease-in-out`)).join()};

	&:hover {
		box-shadow: var(--shadow-light);
	}

	&:focus {
		box-shadow: var(--shadow-focus);
	}

	&:hover, &:active, &:focus {
		background-color: var(--color-accent-light);
	}

	&:hover, &:active {
		box-shadow: var(--shadow-light-pressed);
	}

	&:active {
		cursor: grabbing;
	}
`,Y=u().div.attrs((({left:r})=>({style:{left:100*r+"%"}})))((({multi:r})=>l.css`
	position: absolute;
	z-index: 1;
	top: var(--padding);
	width: var(--thumb-size);
	height: calc(100% - var(--padding) * 2);

	cursor: grab;
	outline: none;
	border-radius: var(--border-radius);
	background-color: ${r?"var(--color-thumb)":"var(--color-accent)"};
	transform: translateX(-50%);
	transition: ${["background-color","box-shadow"].map((r=>`${r} 125ms ease-in-out`)).join()};

	&:hover {
		box-shadow: var(--shadow-light);
	}

	&:focus {
		box-shadow: var(--shadow-focus);
	}

	&:hover, &:active, &:focus {
		background-color: ${r?"var(--color-thumb-light)":"var(--color-accent-light)"};
	}

	&:hover, &:active {
		box-shadow: var(--shadow-light-pressed);
	}

	&:active {
		cursor: grabbing;
	}
`)),q={Slider:u().div((({theme:r})=>{const{background:o,accent:e,size:a,radius:t,shadow:i,light:n,focus:s}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${a[3]};
		--thumb-size: ${a[2]};
		--border-radius: ${t[2]};
		--padding: ${a[0]};

		--color-background: ${o[8]};
		--color-background-light: ${o[9]};
		--color-background-disabled: ${o[4]};
		--color-thumb: ${o[8]};
		--color-thumb-light: ${o[9]};
		--color-thumb-disabled: ${o[6]};
		--color-handle-disabled: ${o[7]};

		--color-accent: ${e[7]};
		--color-accent-light: ${e[9]};

		--shadow-dark: ${i[0]};
		--shadow-light: ${n[1]};
		--shadow-light-pressed: ${n[0]};
		--shadow-focus: ${s};

		--thumb-shift: calc(var(--thumb-size) / 2 + var(--padding));

		position: relative;
		width: calc(var(--size) * 3);
		height: var(--size);
		margin: 0 var(--thumb-shift) 0 var(--thumb-shift);

		display: flex;
		--webkit-user-drag: none;
		user-select: none;

		&::before {
			position: absolute;
			content: '';
			left: calc(-1 * var(--thumb-shift));
			width: calc(100% + var(--thumb-shift) * 2);
			height: 100%;

			background-color: var(--color-background);
			box-shadow: var(--shadow-dark);
			border-radius: var(--border-radius);
		}

		&[aria-disabled='true']{
			pointer-events: none;

			&::before {
				background-color: var(--color-background-disabled);
			}

			${Y}{
				background-color: var(--color-thumb-disabled);
			}

			${H}{
				background-color: var(--color-handle-disabled);
			}
		}
	`})),Thumb:Y,Handle:H},N=(0,w.forwardRef)((({value:o,range:e,onChange:a,disabled:t,step:i,bigStep:n,minSpan:s,...c},l)=>{const u=m(l),h=Array.isArray(o),b=e[1]-e[0],g=(0,w.useRef)(),v=(r,o,a)=>{if(h)switch(r){case"left":return[d(o[0]+a,[e[0],o[1]-(s||.1*b)]),o[1]];case"right":return[o[0],d(o[1]+a,[o[0]+(s||.1*b),e[1]])];case"handle":const r=o[1]-o[0],t=d(o[0]+a,[e[0],e[1]-r]);return[t,d(t+r,[e[0],e[1]])]}return d(o+a,e)},p=(r,e)=>{g.current={type:e,width:u.current.getBoundingClientRect().width,valueStart:h?[...o]:o,xStart:r.clientX}},f=(r,e)=>{let t;switch(r.code){case"ArrowLeft":case"ArrowDown":t=-(i||b/100);break;case"ArrowRight":case"ArrowUp":t=i||b/100;break;case"PageDown":t=-(n||b/10);break;case"PageUp":t=n||b/10;break;case"Home":t=-b;break;case"End":t=b}t&&a(v(e,o,t))};k("pointermove",(({clientX:r})=>{if(g.current){const{type:o,valueStart:t,xStart:i,width:n}=g.current,s=(r-i)/n*(e[1]-e[0]);a(v(o,t,s))}})),k("pointerup",(()=>{g.current=null}));const x=((h?o[0]:o)-e[0])/b,$=(o[1]-e[0])/b,j={tabIndex:t?void 0:0,role:"slider","aria-valuemin":e[0],"aria-valuemax":e[1],"aria-labelledby":c["aria-labelledby"]};return(0,r.jsxs)(q.Slider,Object.assign({},c,{ref:u,"aria-disabled":t},{children:[(0,r.jsx)(q.Thumb,Object.assign({},j,{left:x,onPointerDown:r=>p(r,"left"),onKeyDown:r=>f(r,"left"),multi:h,"aria-valuenow":h?o[0]:o}),void 0),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q.Thumb,Object.assign({},j,{left:(o[1]-e[0])/b,onPointerDown:r=>p(r,"right"),onKeyDown:r=>f(r,"right"),multi:h,"aria-valuenow":o[0]}),void 0),(0,r.jsx)(q.Handle,Object.assign({},j,{left:x,width:$-x,onPointerDown:r=>p(r,"handle"),onKeyDown:r=>f(r,"handle"),"aria-valuenow":o[1]}),void 0)]},void 0)]}),void 0)})),U={ProgressBar:u().div((({theme:r,percentage:o})=>{const{fontFamily:e,background:a,accent:t,content:i,size:n,radius:s,shadow:c}=0==Object.keys(r).length?x:r;return l.css`
		--size: ${n[3]};
		--border-radius: ${s[2]};

		--color-background: ${a[8]};

		--color-accent: ${t[7]};

		--color-content: ${i[3]};

		--shadow-dark: ${c[0]};

		position: relative;
		width: calc(var(--size) * 3);
		height: var(--size);

		font-family: ${e};
		color: var(--color-content);
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		border-radius: var(--border-radius);

		display: flex;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: ${100*o}%;
			height: 100%;

			border-radius: var(--border-radius);
			background-color: var(--color-accent);
			transition: width 125ms ease-in-out;
		}

		span {
			position: absolute;
			width: 100%;
			z-index: 1;

			text-align: center;
		}

		span:last-child {
			clip-path: inset(0 ${100*(1-o)}% 0 0);
			color: white;
			transition: clip-path 125ms ease-in-out;
		}
	`}))},K=(0,w.forwardRef)((({value:o,range:e,...a},t)=>{const i=m(t),n=e[1]-e[0],s=`${((o-e[0])/n*100).toFixed(0)}%`;return(0,r.jsxs)(U.ProgressBar,Object.assign({},a,{ref:i,percentage:(o-e[0])/n,role:"progressbar","aria-valuemin":e[0],"aria-valuemax":e[1],"aria-valuenow":o},{children:[(0,r.jsx)("span",{children:s},void 0),(0,r.jsx)("span",{children:s},void 0)]}),void 0)}))})(),i})()}));