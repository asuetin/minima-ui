/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):e["ui-components"]=r(e[void 0],e[void 0])}(self,(function(e,r){return(()=>{"use strict";var o={418:e=>{var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var n,s,l=i(e),c=1;c<arguments.length;c++){for(var d in n=Object(arguments[c]))o.call(n,d)&&(l[d]=n[d]);if(r){s=r(n);for(var u=0;u<s.length;u++)t.call(n,s[u])&&(l[s[u]]=n[s[u]])}}return l}},251:(e,r,o)=>{o(418);var t=o(704),i=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;i=a("react.element"),a("react.fragment")}var n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var t,a={},c=null,d=null;for(t in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:n.current}}r.jsx=c,r.jsxs=c},893:(e,r,o)=>{e.exports=o(251)},704:r=>{r.exports=e},885:e=>{e.exports=r}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={exports:{}};return o[e](a,a.exports,i),a.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var o in r)i.o(r,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{ComboBox:()=>k,ComboBoxStyles:()=>y,Icon:()=>p,IconStyles:()=>l,List:()=>g,ListStyles:()=>f});var e=i(893);const r=e=>parseFloat(String(e))/parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),o=e=>void 0===e,t=(()=>{let e=0;return r=>`${r}${++e}`})();var n=i(885),s=i.n(n);const l={Icon:s().svg((({stroke:e="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>n.css`
	stroke: ${e};
	fill: ${r};

	transition: ${["stroke","fill"].map((e=>`${e} 125ms ease-in-out`)).join()};
`))},c={fillOpacity:0},d={strokeOpacity:0},u={strokeLinecap:"round",strokeLinejoin:"round"},v={user:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},c,{transform:"translate(0 -1098.52)"},{children:[(0,e.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,e.jsx)("path",Object.assign({},u,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},c,u,{children:[(0,e.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,e.jsx)("path",{d:"M10 12h13"},void 0),(0,e.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},u,{children:[(0,e.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},c),void 0),(0,e.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},u,c),void 0)},down:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},u,c),void 0)},undo:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},c,u,{children:[(0,e.jsx)("path",{d:"M3 4h6"},void 0),(0,e.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,e.jsx)("path",{d:"M9 14H5"},void 0),(0,e.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},c,u,{children:[(0,e.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,e.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},u,{children:[(0,e.jsxs)("g",Object.assign({},c,{children:[(0,e.jsx)("path",{d:"M3 4h6"},void 0),(0,e.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,e.jsx)("path",{d:"M9 14H5"},void 0),(0,e.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,e.jsx)("circle",Object.assign({},d,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,e.jsxs)("g",{children:[(0,e.jsx)("circle",Object.assign({},d,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,e.jsx)("circle",Object.assign({},d,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,e.jsx)("path",Object.assign({},c,u,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},c,{transform:"translate(0 -1098.52)"},{children:[(0,e.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,e.jsx)("path",Object.assign({},u,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,e.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,e.jsx)("path",Object.assign({},u,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,e.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,e.jsx)("path",Object.assign({},u,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({},c,u,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},c,u,{children:[(0,e.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,e.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},p=({className:t,presetName:i,path:a,viewBoxSize:n,size:s,color:c="black",strokeWidth:d=2})=>{const u=[a,n].every((e=>!o(e))),p=u?n:v[i].viewBoxSize,b=u?a:v[i].path,h=`${r(p*((s||p)/p))}rem`;return(0,e.jsx)(l.Icon,Object.assign({className:t,width:h,height:h,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${p} ${p}`,xmlnsXlink:"http://www.w3.org/1999/xlink",fill:c,stroke:c,strokeWidth:`${r(d)}rem`},{children:b}),void 0)};var b=i(704);const h=(e,r,o=window,t=!1)=>{const i=(0,b.useRef)(r);i.current=r,(0,b.useEffect)((()=>{if(o){const r=e=>i.current(e);return o.addEventListener(e,r,t),()=>o.removeEventListener(e,r)}}),[e,o,t])},f={List:s().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},g=(0,b.forwardRef)((({className:o,rowHeight:t=32,rowCount:i,rowRenderer:a,...n},s)=>{const l=((...e)=>{const r=(0,b.useRef)();return(0,b.useEffect)((()=>{for(const o of e)"function"==typeof o?o(r.current):o&&(o.current=r.current)}),[e]),r})(s),[c,d]=(0,b.useState)([0,0]),u=(0,b.useMemo)((()=>((e,r)=>{let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{(()=>{if(l.current){const{scrollTop:e,offsetHeight:r}=l.current,o=Math.floor((e-r)/t),a=Math.ceil((e+2*r)/t);d([o>0?o:0,a>i?i:a])}})(...e),o=null}),5)}})()),[t,i,l]);return h("scroll",u,l.current),h("animationend",u,l.current),(0,b.useEffect)((()=>{u()}),[u]),(0,e.jsx)(f.List,Object.assign({className:o,ref:l,role:"listbox"},n,{children:Array.from({length:c[1]-c[0]},((e,o)=>a(c[0]+o,{height:`${r(t)}rem`,marginTop:0==o?`${r(t*c[0])}rem`:void 0,marginBottom:o==c[1]-c[0]-1?`${r(t*(i-c[1]))}rem`:void 0})))}),void 0)})),x=s().li`
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

		animation: ${n.keyframes`
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
			background: var(--color-check-indicator);

			animation: ${n.keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`,w=s()(g)((({rowHeight:e,rowCount:o,visibleOptionCount:t})=>n.css`
	--height: ${r(e*Math.min(t,o||1))}rem;

	position: absolute;
	width: 100%;
	top: 100%;
	height: var(--height);

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	> * {
		line-height: ${r(e)}rem;
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

	animation: ${n.keyframes`
		0% {
			height: 0;
		}
		100% {
			height: var(--height);
		}
	`} 125ms ease-in-out;
`)),j=s().button`
	position: relative;
	cursor: pointer;
	border: none;
	outline: none;

	background-color: inherit;
	border-radius: inherit;

	display: flex;
	align-items: center;
	padding: 0 var(--padding) 0 var(--padding);

	> * {
		transition: ${["stroke","fill","transform"].map((e=>`${e} 125ms ease-in-out`)).join()};
	}
`,m=s().input`
	position: relative;
	width: 100%;
	flex-grow: 1;
	padding: 0 0 0 var(--padding);

	color: var(--color-text);
	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;
	font: inherit;
	transition: color 125ms ease-in-out;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	display: flex;
	align-items: center;
`,y={ComboBox:s().div`
	--color-background: rgb(240,240,240);
	--color-background-disabled: rgb(210,210,210);
	--color-dropdown-background: rgb(230,230,230);
	--color-option-background-hover: rgb(220,220,220);
	--color-option-background-selected: rgb(210,210,210);

	--color-text: rgb(60,60,60);
	--color-text-hover: rgb(140,140,140);

	--color-arrow: rgb(60,60,60);
	--color-arrow-hover: rgb(140,140,140);

	--color-scrollbar: rgb(150,150,150);
	--color-scrollbar-hover: rgb(160,160,160);

	--color-check-indicator: rgb(130,160,230);

	--box-shadow: 0 0.375rem 1.25rem 0 rgb(150,150,150);
	--box-shadow-focus: 0 0.375rem 1.25rem 0 rgb(150,150,150),
		0 0 0 0.125rem rgb(130,160,230);

	--border-radius: 0.375rem;
	--padding: 0.5rem;
	--width-scrollbar: 0.25rem;
	--size-check-indicator: 0.5rem;

	position: relative;
	height: ${({height:e})=>r(e)}rem;

	background-color: var(--color-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	font-family: 'Open Sans', sans-serif;

	display: flex;

	color: var(--color-text);

	svg {
		stroke: var(--color-arrow);
		fill: var(--color-arrow);
	}

	*:focus {
		outline: none;
	}

	&:focus, &[aria-expanded='true']{
		outline: none;
		box-shadow: var(--box-shadow-focus);

		${w}{
			box-shadow: var(--box-shadow-focus);
		}
	}

	&[aria-expanded='false']:hover {
		&, ${m}{
			color: var(--color-text-hover);
		}

		svg {
			stroke: var(--color-arrow-hover);
			fill: var(--color-arrow-hover);
		}
	}

	&[aria-expanded='true']{
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		${j}{
			> * {
				transform: rotate(180deg);
			}

			&:hover svg {
				stroke: var(--color-arrow-hover);
				fill: var(--color-arrow-hover);
			}
		}
	}

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`,Input:m,Button:j,Dropdown:w,Option:x},k=({className:r,height:i=32,options:a,groups:n,value:s,onChange:l,visibleOptionCount:c=5,arrowIcon:d=(0,e.jsx)(p,{presetName:"down"},void 0),labelledBy:u,searchDisabled:v=!1,disabled:f=!1})=>{const g=(0,b.useRef)(t("combobox-")),x=(0,b.useRef)(),w=(0,b.useRef)(),j=(0,b.useRef)(),[m,k]=(0,b.useState)(!1),[O,S]=(0,b.useState)(""),[M,z]=(0,b.useState)(),[$,E]=(0,b.useState)([]),[B,C]=(0,b.useState)(0),_=$.length,I=`${g.current}-dropdown`,L=Array.isArray(s);return h("keydown",(e=>{if(!f)switch(e.code){case"ArrowDown":m&&(C((e=>{let r=e<$.length-1?e+1:0;return $[r].isGroup?++r:r})),e.preventDefault());break;case"ArrowUp":m&&(C((e=>{let r=e>0?e-1:$.length-1;return $[r].isGroup?--r:r})),e.preventDefault());break;case"Enter":m&&_&&(l($[B].value),x.current.focus()),k((e=>!e));break;case"Escape":m?x.current.focus():x.current.blur(),k(!1)}})),h("click",(e=>{m&&!((e,r)=>{let o=e;for(;o;)if(o=o.parentNode,o==r)return!0;return!1})(e.target,x.current)&&k(!1)})),(0,b.useEffect)((()=>{let e=null;""!=O&&(e=a.filter((({label:e,value:r})=>{if(e){if(e.toLowerCase().includes(O.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(O.toLowerCase()))return!0;return!1}))),z(e)}),[O,a]),(0,b.useEffect)((()=>{const e=[],r=[...M||a].sort(((r,o)=>(e.push(r.group,o.group),r.group<o.group?-1:0)));var t,i;(t=e.filter((e=>!o(e))),o(i)?t.filter(((e,r,o)=>o.indexOf(e)==r)):t.filter(((e,r)=>t.findIndex((r=>r===e))===r))).forEach((e=>{var o;const t=r.findIndex((r=>r.group==e));r.splice(t,0,{isGroup:!0,value:e,label:null===(o=null==n?void 0:n.find((r=>r.value==e)))||void 0===o?void 0:o.label})})),E(r)}),[M,a,n]),(0,b.useEffect)((()=>{if(j.current){let e=i*B;const{scrollTop:r}=j.current,o=r+i*(c-1)<=e,t=r>=e+i;t&&(e-=i*(c-1)),(o||t)&&j.current.scrollTo({top:e,behavior:"smooth"})}}),[B,i,c]),(0,b.useEffect)((()=>{m&&(S(""),w.current.focus())}),[m]),(0,b.useEffect)((()=>{f&&k(!1)}),[f]),(0,b.useEffect)((()=>{C($.findIndex((e=>!e.isGroup)))}),[m,$]),(0,e.jsxs)(y.ComboBox,Object.assign({ref:x,className:r,height:i,role:"combobox",tabIndex:m||f?-1:0,"aria-expanded":m,"aria-owns":I,"aria-haspopup":"listbox","aria-disabled":f||void 0},{children:[m&&(0,e.jsx)(y.Dropdown,{ref:j,rowCount:_||1,rowHeight:i,rowRenderer:(r,o)=>{const t=$[r],i=L?s.findIndex((e=>e==(null==t?void 0:t.value))):-1;return(0,e.jsx)(y.Option,Object.assign({style:o,onClick:_&&!(null==t?void 0:t.isGroup)?()=>{if(L){const e=[...s];-1==i?e.unshift(null==t?void 0:t.value):e.splice(i,1),l(e)}else l(null==t?void 0:t.value),k(!1)}:void 0,role:(null==t?void 0:t.isGroup)?void 0:"option",id:`${I}-row-${r}`,"aria-checked":_&&!(null==t?void 0:t.isGroup)&&L?-1!=i:void 0,"aria-selected":!(!_||(null==t?void 0:t.isGroup)||B!=r)||void 0,as:(null==t?void 0:t.isGroup)?"label":void 0},{children:(null==t?void 0:t.label)||(null==t?void 0:t.value)||"No results"}),`${r}-${null==t?void 0:t.value}`)},visibleOptionCount:c,id:I,"aria-labelledby":u,"aria-multiselectable":L,"aria-label":u?void 0:"Dropdown menu"},void 0),(0,e.jsx)(y.Input,{ref:w,type:"text",value:!v&&m?O:L?s.map((e=>{const r=a.find((r=>r.value==e));return r.label||r.value})).join(", "):(null===(N=a.find((e=>e.value==s)))||void 0===N?void 0:N.label)||s,onChange:v?void 0:e=>S(e.target.value),onClick:m?void 0:()=>k((e=>!e)),readOnly:v,placeholder:"Enter search query",tabIndex:!v&&m?0:-1,"aria-autocomplete":v?void 0:"both","aria-controls":m?I:void 0,"aria-activedescendant":m?`${I}-row-${B}`:void 0,"aria-labelledby":u},void 0),(0,e.jsx)(y.Button,Object.assign({onClick:()=>k((e=>!e)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:d}),void 0)]}),void 0);var N}})(),a})()}));