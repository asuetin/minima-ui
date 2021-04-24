/*! For license information please see index.js.LICENSE.txt */
!function(o,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):o["ui-components"]=r(o[void 0],o[void 0])}(self,(function(o,r){return(()=>{"use strict";var e={418:o=>{var r=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function a(o){if(null==o)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}o.exports=function(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de","5"===Object.getOwnPropertyNames(o)[0])return!1;for(var r={},e=0;e<10;e++)r["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(o){return r[o]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(o){t[o]=o})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(o,i){for(var n,l,s=a(o),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))e.call(n,d)&&(s[d]=n[d]);if(r){l=r(n);for(var u=0;u<l.length;u++)t.call(n,l[u])&&(s[l[u]]=n[l[u]])}}return s}},251:(o,r,e)=>{e(418);var t=e(704),a=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),i("react.fragment")}var n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(o,r,e){var t,i={},c=null,d=null;for(t in void 0!==e&&(c=""+e),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,t)&&!s.hasOwnProperty(t)&&(i[t]=r[t]);if(o&&o.defaultProps)for(t in r=o.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:a,type:o,key:c,ref:d,props:i,_owner:n.current}}r.jsx=c,r.jsxs=c},893:(o,r,e)=>{o.exports=e(251)},704:r=>{r.exports=o},885:o=>{o.exports=r}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.n=o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return a.d(r,{a:r}),r},a.d=(o,r)=>{for(var e in r)a.o(r,e)&&!a.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},a.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),a.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};return(()=>{a.r(i),a.d(i,{Button:()=>G,ButtonStyles:()=>H,ComboBox:()=>I,ComboBoxStyles:()=>X,Icon:()=>p,IconStyles:()=>d,List:()=>L,ListStyles:()=>S,Switch:()=>V,SwitchStyles:()=>U});var o=a(893);const r=()=>parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),e=o=>parseFloat(String(o))/(r()||16),t=o=>parseFloat(String(o))*(r()||16),n=o=>void 0===o,l=(()=>{let o=0;return r=>`${r}${++o}`})();var s=a(885),c=a.n(s);const d={Icon:c().svg((({stroke:o="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>s.css`
	stroke: ${o};
	fill: ${r};

	transition: ${["stroke","fill"].map((o=>`${o} 125ms ease-in-out`)).join()};
`))},u={fillOpacity:0},v={strokeOpacity:0},b={strokeLinecap:"round",strokeLinejoin:"round"},h={user:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,o.jsx)("path",Object.assign({},b,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,b,{children:[(0,o.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,o.jsx)("path",{d:"M10 12h13"},void 0),(0,o.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},b,{children:[(0,o.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},u),void 0),(0,o.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},b,u),void 0)},down:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},b,u),void 0)},undo:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,b,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,b,{children:[(0,o.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,o.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},b,{children:[(0,o.jsxs)("g",Object.assign({},u,{children:[(0,o.jsx)("path",{d:"M3 4h6"},void 0),(0,o.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,o.jsx)("path",{d:"M9 14H5"},void 0),(0,o.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,o.jsx)("circle",Object.assign({},v,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,o.jsxs)("g",{children:[(0,o.jsx)("circle",Object.assign({},v,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,o.jsx)("circle",Object.assign({},v,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,o.jsx)("path",Object.assign({},u,b,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,o.jsxs)("g",Object.assign({},u,{transform:"translate(0 -1098.52)"},{children:[(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,o.jsx)("path",Object.assign({},b,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,o.jsx)("path",Object.assign({},b,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,o.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,o.jsx)("path",Object.assign({},b,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,o.jsx)("path",Object.assign({},u,b,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,o.jsxs)("g",Object.assign({},u,b,{children:[(0,o.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,o.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},p=({className:r,presetName:t,path:a,viewBoxSize:i,size:l,color:s="black",strokeWidth:c=2})=>{const u=[a,i].every((o=>!n(o))),v=u?i:h[t].viewBoxSize,b=u?a:h[t].path,p=`${e(v*((l||v)/v))}rem`;return(0,o.jsx)(d.Icon,Object.assign({className:r,width:p,height:p,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${v} ${v}`,xmlnsXlink:"http://www.w3.org/1999/xlink",fill:s,stroke:s,strokeWidth:`${e(c)}rem`},{children:b}),void 0)};var g=a(704);const f=(o,r,e=window,t=!1)=>{const a=(0,g.useRef)(r);a.current=r,(0,g.useEffect)((()=>{if(e){const r=o=>a.current(o);return e.addEventListener(o,r,t),()=>e.removeEventListener(o,r)}}),[o,e,t])},x=(...o)=>{const r=(0,g.useRef)();return(0,g.useEffect)((()=>{for(const e of o)"function"==typeof e?e(r.current):e&&(e.current=r.current)}),[o]),r},w={background:{XXD:"rgb(195,195,195)",XD:"rgb(215,215,215)",D:"rgb(225,225,225)",M:"rgb(235,235,235)",L:"rgb(245,245,245)"},accent:{XD:"rgb(85,115,195)",D:"rgb(105,135,215)",M:"rgb(125,155,235)",L:"rgb(145,175,255)"},content:{M:"rgb(90,90,90)",L:"rgb(150,150,150)",XL:"rgb(160,160,160)"}},m="0.25rem",k="0.5rem",j="2rem",y="0.375rem",$={M:"0 0.05rem 0.2rem 0",L:"0 0.15rem 0.6rem 0"},O=(o="M",r="rgb(160,160,160)")=>`${$[o]} ${r}`,M=`0 0 0 0.125rem ${w.accent.XD}`,S={List:c().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},L=(0,g.forwardRef)((({className:r,rowHeight:a=t(j),rowCount:i,rowRenderer:n,...l},s)=>{const c=x(s),[d,u]=(0,g.useState)([0,0]),v=(0,g.useMemo)((()=>((o,r)=>{let e;return(...o)=>{e&&clearTimeout(e),e=setTimeout((()=>{(()=>{if(c.current){const{scrollTop:o,offsetHeight:r}=c.current,e=Math.floor((o-r)/a),t=Math.ceil((o+2*r)/a);u([e>0?e:0,t>i?i:t])}})(...o),e=null}),5)}})()),[a,i,c]);return f("scroll",v,c.current),f("animationend",v,c.current),(0,g.useEffect)((()=>{v()}),[v]),(0,o.jsx)(S.List,Object.assign({className:r,ref:c,role:"listbox"},l,{children:Array.from({length:d[1]-d[0]},((o,r)=>n(d[0]+r,{height:`${e(a)}rem`,marginTop:0==r?`${e(a*d[0])}rem`:void 0,marginBottom:r==d[1]-d[0]-1?`${e(a*(i-d[1]))}rem`:void 0})))}),void 0)})),{background:z,accent:B,content:C}=w,E=c().li`
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
`,D=c()(L)((({rowHeight:o,rowCount:r,visibleOptionCount:t})=>s.css`
	--height: ${e(o*Math.min(t,r||1))}rem;

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
`)),_=c().button`
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
`,N=c().input`
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
`,X={ComboBox:c().div`
	--border-radius: ${y};
	--padding: ${k};
	--width-scrollbar: ${m};
	--size-check-indicator: ${k};

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
			${N}{
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

		${_}{
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
`,Input:N,Button:_,Dropdown:D,Option:E},I=(0,g.forwardRef)((({className:r,height:e=t(j),options:a,groups:i,value:s,onChange:c,visibleOptionCount:d=5,arrowIcon:u=(0,o.jsx)(p,{presetName:"down"},void 0),labelledBy:v,searchDisabled:b=!1,disabled:h=!1},w)=>{const m=(0,g.useRef)(l("combobox-")),k=x(w),y=(0,g.useRef)(),$=(0,g.useRef)(),[O,M]=(0,g.useState)(!1),[S,L]=(0,g.useState)(""),[z,B]=(0,g.useState)(),[C,E]=(0,g.useState)([]),[D,_]=(0,g.useState)(0),N=C.length,I=`${m.current}-dropdown`,R=Array.isArray(s);return f("keydown",(o=>{if(!h)switch(o.code){case"ArrowDown":O&&(_((o=>{let r=o<C.length-1?o+1:0;return C[r].isGroup?++r:r})),o.preventDefault());break;case"ArrowUp":O&&(_((o=>{let r=o>0?o-1:C.length-1;return C[r].isGroup?--r:r})),o.preventDefault());break;case"Enter":O&&N&&(c(C[D].value),k.current.focus()),M((o=>!o));break;case"Escape":O?k.current.focus():k.current.blur(),M(!1)}})),f("click",(o=>{O&&!((o,r)=>{let e=o;for(;e;)if(e=e.parentNode,e==r)return!0;return!1})(o.target,k.current)&&M(!1)})),(0,g.useEffect)((()=>{let o=null;""!=S&&(o=a.filter((({label:o,value:r})=>{if(o){if(o.toLowerCase().includes(S.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(S.toLowerCase()))return!0;return!1}))),B(o)}),[S,a]),(0,g.useEffect)((()=>{const o=[],r=[...z||a].sort(((r,e)=>(o.push(r.group,e.group),r.group<e.group?-1:0)));var e,t;(e=o.filter((o=>!n(o))),n(t)?e.filter(((o,r,e)=>e.indexOf(o)==r)):e.filter(((o,r)=>e.findIndex((r=>r===o))===r))).forEach((o=>{var e;const t=r.findIndex((r=>r.group==o));r.splice(t,0,{isGroup:!0,value:o,label:null===(e=null==i?void 0:i.find((r=>r.value==o)))||void 0===e?void 0:e.label})})),E(r)}),[z,a,i]),(0,g.useEffect)((()=>{if($.current){let o=e*D;const{scrollTop:r}=$.current,t=r+e*(d-1)<=o,a=r>=o+e;a&&(o-=e*(d-1)),(t||a)&&$.current.scrollTo({top:o,behavior:"smooth"})}}),[D,e,d]),(0,g.useEffect)((()=>{O&&(L(""),y.current.focus())}),[O]),(0,g.useEffect)((()=>{h&&M(!1)}),[h]),(0,g.useEffect)((()=>{_(C.findIndex((o=>!o.isGroup)))}),[O,C]),(0,o.jsxs)(X.ComboBox,Object.assign({ref:k,className:r,height:e,role:"combobox",tabIndex:O||h?-1:0,"aria-expanded":O,"aria-owns":I,"aria-haspopup":"listbox","aria-disabled":h||void 0},{children:[O&&(0,o.jsx)(X.Dropdown,{ref:$,rowCount:N||1,rowHeight:e,rowRenderer:(r,e)=>{const t=C[r],a=R?s.findIndex((o=>o==(null==t?void 0:t.value))):-1;return(0,o.jsx)(X.Option,Object.assign({style:e,onClick:N&&!(null==t?void 0:t.isGroup)?()=>{if(R){const o=[...s];-1==a?o.unshift(null==t?void 0:t.value):o.splice(a,1),c(o)}else c(null==t?void 0:t.value),M(!1)}:void 0,role:(null==t?void 0:t.isGroup)?void 0:"option",id:`${I}-row-${r}`,"aria-checked":N&&!(null==t?void 0:t.isGroup)&&R?-1!=a:void 0,"aria-selected":!(!N||(null==t?void 0:t.isGroup)||D!=r)||void 0,as:(null==t?void 0:t.isGroup)?"label":void 0},{children:(null==t?void 0:t.label)||(null==t?void 0:t.value)||"No results"}),`${r}-${null==t?void 0:t.value}`)},visibleOptionCount:d,id:I,"aria-labelledby":v,"aria-multiselectable":R,"aria-label":v?void 0:"Dropdown menu"},void 0),(0,o.jsx)(X.Input,{ref:y,type:"text",value:!b&&O?S:R?s.map((o=>{const r=a.find((r=>r.value==o));return r.label||r.value})).join(", "):(null===(P=a.find((o=>o.value==s)))||void 0===P?void 0:P.label)||s,onChange:b?void 0:o=>L(o.target.value),onClick:O?void 0:()=>M((o=>!o)),readOnly:b,placeholder:"Enter search query",tabIndex:!b&&O?0:-1,"aria-autocomplete":b?void 0:"both","aria-controls":O?I:void 0,"aria-activedescendant":O?`${I}-row-${D}`:void 0,"aria-labelledby":v},void 0),(0,o.jsx)(X.Button,Object.assign({onClick:()=>M((o=>!o)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:u}),void 0)]}),void 0);var P})),{background:R,accent:P,content:T}=w,H={Button:c().button`
	--border-radius: ${y};
	--padding: ${k};

	--color-background: ${R.M};
	--color-background-light: ${R.L};
	--color-background-disabled: ${R.XXD};

	--color-content: ${T.M};
	--color-accent: ${P.M};
	--color-accent-light: ${P.L};

	--shadow: ${O("M")};
	--light: ${O("L",P.L)};
	--light-pressed: ${O("M",P.L)};
	--focus: ${M};

	position: relative;

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
		transform: scale(0.96);
	}

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`},G=(0,g.forwardRef)((({className:r,onClick:e,label:t,icon:a,labelledBy:i,disabled:n,...l},s)=>{const c=x(s);return(0,o.jsxs)(H.Button,Object.assign({className:r,ref:c,onClick:e,disabled:n,role:"button","aria-labelledby":t?void 0:i,"aria-label":t,"aria-disabled":n},l,{children:[a,t&&(0,o.jsx)("span",{children:t},void 0)]}),void 0)})),{background:q,accent:A,content:F}=w,U={Switch:c().button`
	--size: ${j};
	--border-radius: ${y};
	--padding: ${m};

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
		transform: scale(0.96);
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

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);

		&::after {
			background-color: var(--color-handle-light);
		}
	}

	&[aria-readonly='true']{
		pointer-events: none;
	}
`},V=(0,g.forwardRef)((({className:r,value:e,onClick:t,labelledBy:a,disabled:i,readOnly:n,...l},s)=>{const c=x(s);return(0,o.jsx)(U.Switch,Object.assign({className:r,ref:c,onClick:t,disabled:i,role:"switch","aria-checked":e,"aria-labelledby":a,"aria-disabled":i,"aria-readonly":n},l),void 0)}))})(),i})()}));