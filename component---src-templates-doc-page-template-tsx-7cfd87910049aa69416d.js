(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(e,t,n){"use strict";n("m210"),n("4DPX"),n("Ggvi"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");var i=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var a=this,o=arguments,r=function(){i=null,n||e.apply(a,o)},l=n&&!i;window.clearTimeout(i),i=setTimeout(r,t),l&&e.apply(a,o)}},t.isReactElement=o,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),i=Array.isArray(n),a=0;for(n=i?n:n[Symbol.iterator]();;){var r;if(i){if(a>=n.length)break;r=n[a++]}else{if((a=n.next()).done)break;r=a.value}var l=r;if(e[l]!==t[l]&&!o(e[l]))return!0}return!1};var a=i(n("q1tI"));function o(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},AIgE:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return de}));var i=n("q1tI"),a=n.n(i),o=n("BBkP"),r=n("CMDK"),l=n("vOnD"),c=n("wqoF"),d=n("Hf4c"),s=(n("sC2a"),n("HQhv"),function(e){var t=e.data;return Object(i.useEffect)((function(){var e,n=t.tableOfContents.split(/"|\//).filter((function(e){return 0===e.indexOf("#")})).map((function(e){var t=e.substring(1);return{id:"toc-"+t,position:document.getElementById(t).offsetTop-60}})).reverse(),i=function(){for(var t,i=document.body.scrollTop||document.documentElement.scrollTop,a=0;a<n.length;a++)if(i>=n[a].position){t=n[a].id;break}e!==t&&(e&&(document.getElementById(e).parentElement.className=""),(e=t)&&(document.getElementById(e).parentElement.className="active"))};return n.length>0&&document.addEventListener("scroll",i),function(){n.length>0&&document.removeEventListener("scroll",i)}}),[t]),t.tableOfContents.length>0?a.a.createElement(p,null,a.a.createElement(u,null,"Table of Contents"),a.a.createElement(m,{dangerouslySetInnerHTML:{__html:t.tableOfContents.replace(/href=\"(.*?#)(.*?)\"/gi,'id="toc-$2" href="/docs$1$2"')}})):a.a.createElement(a.a.Fragment,null)}),p=l.b.section.withConfig({displayName:"article-table-of-content__Container",componentId:"isp2vh-0"})(["margin-bottom:20px;"]),u=l.b.h6.withConfig({displayName:"article-table-of-content__Title",componentId:"isp2vh-1"})(["padding:0 20px 5px;font-size:0.833em;"]),m=l.b.div.withConfig({displayName:"article-table-of-content__Content",componentId:"isp2vh-2"})(["> ul{display:flex;flex-direction:column;margin:0;padding:0 20px;list-style-type:none;> li{flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;&.active > a{font-weight:bold;}> a{font-size:0.833em;color:#666;:hover{color:#000;}}}}"]);function f(){var e=Object(i.createRef)(),t=Object(i.createRef)();return Object(i.useEffect)((function(){var n;if(e.current&&t.current){var i=e.current,a=t.current;g(i,a),n=function(){return g(i,a)},document.addEventListener("scroll",n),window.addEventListener("resize",n)}return function(){n&&(document.removeEventListener("scroll",n),window.removeEventListener("resize",n))}})),{containerRef:e,elementRef:t}}function g(e,t){var n=document.body.scrollTop||document.documentElement.scrollTop,i=e.offsetTop+e.offsetHeight;n+t.offsetHeight>=i?(t.style.position="absolute",t.style.top=e.offsetHeight-t.offsetHeight+"px"):(t.style.position="fixed",t.style.top="initial")}var h=function(e){var t=e.children,n=f(),i=n.containerRef,o=n.elementRef;return a.a.createElement(x,{ref:i},a.a.createElement(v,{ref:o},t))},x=l.b.aside.withConfig({displayName:"doc-page-aside__Aside",componentId:"sc-2nxd1-0"})(["display:none;flex:0 0 250px;flex-direction:column;*{user-select:none;}@media only screen and (min-width:1300px){display:flex;}"]),v=l.b.div.withConfig({displayName:"doc-page-aside__FixedContainer",componentId:"sc-2nxd1-1"})(["position:fixed;padding:25px 0 25px;width:250px;"]),b=n("LOFe"),w=n("ZGSP"),y=n("DmWS"),E=n.n(y),_=n("+K7j"),C=n.n(_),I=function(e){var t=e.data,n=e.originPath,i=t.site.siteMetadata,o=i.repositoryUrl+"/blob/master/website/src/docs/"+n;return a.a.createElement(N,null,a.a.createElement(k,null,"Help us improving our content"),a.a.createElement(j,null,a.a.createElement(q,null,a.a.createElement(S,{to:o},a.a.createElement(b.a,null,a.a.createElement(E.a,null)),"Edit on GitHub")),a.a.createElement(q,null,a.a.createElement(S,{to:i.tools.slack},a.a.createElement(b.a,null,a.a.createElement(C.a,null)),"Discuss on Slack"))))},N=l.b.section.withConfig({displayName:"doc-page-community__Container",componentId:"sc-12dq8k-0"})(["margin-bottom:20px;"]),k=l.b.h6.withConfig({displayName:"doc-page-community__Title",componentId:"sc-12dq8k-1"})(["padding:0 20px 5px;font-size:0.833em;"]),j=l.b.ol.withConfig({displayName:"doc-page-community__CommunityItems",componentId:"sc-12dq8k-2"})(["display:flex;flex-direction:column;margin:0;padding:0 20px;list-style-type:none;"]),q=l.b.li.withConfig({displayName:"doc-page-community__CommunityItem",componentId:"sc-12dq8k-3"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),S=Object(l.b)(w.a).withConfig({displayName:"doc-page-community__CommunityLink",componentId:"sc-12dq8k-4"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],b.a,b.a),O=function(){return a.a.createElement(D,{role:"dialog","aria-live":"polite","aria-label":"legacydoc","aria-describedby":"legacydoc:desc"},a.a.createElement(z,null,a.a.createElement(T,{id:"legacydoc:desc"},a.a.createElement("strong",null,"Important:")," This documentation covers Hot Chocolate 11. For version 10 and lower click"," ",a.a.createElement(P,{to:"https://hotchocolate.io"},"here"),".")))},D=l.b.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1ijx7hc-0"})(["background-color:#ffb806;"]),z=l.b.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1ijx7hc-1"})(["display:flex;flex-direction:column;padding:10px 20px;@media only screen and (min-width:800px){padding:10px 50px;}"]),T=l.b.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1ijx7hc-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),P=Object(l.b)(w.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1ijx7hc-3"})(["text-decoration:underline;color:#4f3903;"]),L=(n("v9g0"),n("/MKj")),M=n("mcIw"),R=n("l5rq"),H=n.n(R),U=n("RkNZ"),A=n.n(U),Q=n("XuCD"),B=n.n(Q),V=function(e){var t,n,o=e.data,r=e.selectedPath,l=e.selectedProduct,c=f(),d=c.containerRef,s=c.elementRef,p=Object(L.useSelector)((function(e){return e.common.expandedPaths})),u=Object(L.useDispatch)(),m=Object(i.useState)(!1),g=m[0],h=m[1],x=(null===(t=o.config)||void 0===t?void 0:t.products)&&o.config.products.find((function(e){return(null==e?void 0:e.path)===l})),v=Object(i.useCallback)((function(e){e.stopPropagation()}),[]),w=Object(i.useCallback)((function(){h(!1)}),[]),y=Object(i.useCallback)((function(e,t){h(!t),e.stopPropagation()}),[]),E=Object(i.useCallback)((function(e){u(Object(M.e)({path:e}))}),[]);return Object(i.useEffect)((function(){return window.addEventListener("click",w),function(){window.removeEventListener("click",w)}}),[w]),a.a.createElement(F,{ref:d},a.a.createElement(X,{ref:s},a.a.createElement(W,null,a.a.createElement(K,{onClick:function(e){return y(e,g)}},null==x?void 0:x.title,a.a.createElement(b.a,{size:16},a.a.createElement(B.a,null))),a.a.createElement(Z,{open:g,onClick:v},(null===(n=o.config)||void 0===n?void 0:n.products)&&o.config.products.map((function(e){return e===x?a.a.createElement($,{onClick:w},a.a.createElement(Y,null,e.title),a.a.createElement(ee,null,e.description)):a.a.createElement(J,{to:"/docs/"+e.path},a.a.createElement(Y,null,e.title),a.a.createElement(ee,null,e.description))})))),(null==x?void 0:x.items)&&function e(t,n){return a.a.createElement(te,null,t.map((function(t){var i=t.path,o=t.title,l=t.items,c=l||"index"!==i?n+"/"+i:n;return a.a.createElement(ne,{key:c+(l?"/parent":""),className:!l&&G(r,c)?"active":""},l?a.a.createElement(oe,{expanded:-1!==p.indexOf(c)},a.a.createElement(ie,{onClick:function(){return E(c)}},o,a.a.createElement(b.a,{size:16},a.a.createElement(H.a,{className:"arrow-down"}),a.a.createElement(A.a,{className:"arrow-up"}))),a.a.createElement(ae,null,e(l,c))):a.a.createElement(re,{to:c},o))})))}(x.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+x.path)))};function G(e,t){return t===e.substring(0,e.lastIndexOf("/"))}var F=l.b.nav.withConfig({displayName:"doc-page-navigation__Navigation",componentId:"j0l58s-0"})(["position:relative;display:none;flex:0 0 250px;flex-direction:column;z-index:1;*{user-select:none;}@media only screen and (min-width:1050px){display:flex;}"]),X=l.b.div.withConfig({displayName:"doc-page-navigation__FixedContainer",componentId:"j0l58s-1"})(["position:fixed;padding:25px 0 25px;width:250px;overflow:initial;"]),W=l.b.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"j0l58s-2"})([""]),K=l.b.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"j0l58s-3"})(["display:flex;flex-direction:row;align-items:center;margin:6px 14px 20px;border:1px solid #ccc;border-radius:5px;padding:7px 5px;width:calc(100% - 28px);font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}"],b.a),Z=l.b.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"j0l58s-4"})(["position:fixed;top:130px;z-index:10;display:",";flex-direction:row;flex-wrap:wrap;margin:0 14px;padding:10px;border-radius:5px;width:700px;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);"],(function(e){return e.open?"flex":"none"})),$=l.b.div.withConfig({displayName:"doc-page-navigation__CurrentProduct",componentId:"j0l58s-5"})(["flex:0 0 calc(50% - 32px);border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;background-color:#ddd;"]),J=Object(l.b)(w.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"j0l58s-6"})(["flex:0 0 calc(50% - 32px);border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"]),Y=l.b.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"j0l58s-7"})(["font-size:1em;"]),ee=l.b.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"j0l58s-8"})(["margin-bottom:0;"]),te=l.b.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"j0l58s-9"})(["display:flex;flex-direction:column;margin:0;padding:0 20px 20px;list-style-type:none;"]),ne=l.b.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"j0l58s-10"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;&.active > a{font-weight:bold;}"]),ie=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"j0l58s-11"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),ae=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"j0l58s-12"})(["> ","{padding:5px 10px;}"],te),oe=l.b.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"j0l58s-13"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],ae,(function(e){return e.expanded?"initial":"none"}),ie,b.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),re=Object(l.b)(w.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"j0l58s-14"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),le=function(e){var t=e.data,n=e.originPath,i=t.file.childMarkdownRemark,o=i.fields,r=i.frontmatter,l=i.html,p=o.slug.substring(1),u="/docs/"+p,m=p.substring(0,p.indexOf("/")),f=r.title;return a.a.createElement(ce,null,a.a.createElement(V,{data:t,selectedPath:u,selectedProduct:m}),a.a.createElement(d.e,null,a.a.createElement(d.a,null,a.a.createElement(O,null),a.a.createElement(d.c,null,a.a.createElement(d.d,null,f)),a.a.createElement(d.b,{dangerouslySetInnerHTML:{__html:l}})),a.a.createElement(c.a,{data:t,path:u,title:f})),a.a.createElement(h,null,a.a.createElement(I,{data:t,originPath:n}),a.a.createElement(s,{data:t.file.childMarkdownRemark})))},ce=l.b.div.withConfig({displayName:"doc-page__Container",componentId:"vhp4qm-0"})(["display:flex;flex-direction:row;width:100%;max-width:800px;@media only screen and (min-width:1050px){max-width:1050px;}@media only screen and (min-width:1300px){max-width:1300px;}"]),de=(t.default=function(e){var t=e.data,n=e.pageContext;return a.a.createElement(r.a,null,a.a.createElement(o.a,{title:t.file.childMarkdownRemark.frontmatter.title}),a.a.createElement(le,{data:t,originPath:n.originPath}))},"3185543776")},Hf4c:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return c}));var i=n("vOnD"),a=i.b.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;"]),o=i.b.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:800px){border:1px solid #ccc;border-top:0 none;}"]),r=i.b.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"sc-17wo9z6-2"})([""]),l=i.b.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-3"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:800px){margin:20px 50px 10px;}"]),c=i.b.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-4"})(["> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-highlight{padding-right:0;padding-left:0;> pre{padding:30px 20px;}}@media only screen and (min-width:800px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-highlight{> pre{padding-right:50px;padding-left:50px;}}}"])},ORnI:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("VUT9"));t.Disqus=a.default;var o=i(n("qASQ"));t.CommentCount=o.default;var r=a.default;t.default=r},RkNZ:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},VUT9:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("pVnL")),o=i(n("8OQS")),r=i(n("VbXa")),l=i(n("q1tI")),c=i(n("17x9")),d=n("4M6O"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return l.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(l.default.Component);t.default=s,s.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),identifier:c.default.string,title:c.default.string,url:c.default.string}},XuCD:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},l5rq:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},qASQ:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var a=i(n("pVnL")),o=i(n("8OQS")),r=i(n("VbXa")),l=i(n("q1tI")),c=i(n("17x9")),d=n("4M6O"),s=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return l.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(l.default.Component);t.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:c.default.shape({identifier:c.default.string,title:c.default.string,url:c.default.string}),placeholder:c.default.string}},wqoF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ORnI"),a=n("q1tI"),o=n.n(a),r=n("vOnD"),l=function(e){var t=e.data,n=e.path,i=e.title,a={url:t.site.siteMetadata.siteUrl+n,identifier:n,title:i};return o.a.createElement(c,{config:a})},c=Object(r.b)(i.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1uyp3j8-0"})(["margin:0 20px;@media only screen and (min-width:800px){margin:0 50px;}"])}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-7cfd87910049aa69416d.js.map