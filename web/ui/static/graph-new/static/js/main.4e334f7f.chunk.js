(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(71)},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a);window.jQuery=r.a,window.moment=n(20);var i=n(1),o=n.n(i),s=n(22),l=n.n(s),c=n(6),u=n(7),p=n(9),h=n(8),m=n(10),d=n(86),f=n(79),g=n(80),v=n(87),y=n(75),E=n(21),b=n(81),k=n(82),O=n(83),x=n(84),w=n(85),T=n(18),j=n.n(T),C=n(72),R=n(73),S=n(32),F=n(74),N=n(37),I=n(30),_=n.n(I),D=n(16),P=n(14),M=n(12);D.c.add(M.j,M.k);var U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).prevNoMatchValue=null,n.exprInputRef=o.a.createRef(),n.handleKeyPress=function(e){"Enter"!==e.key||e.shiftKey||(n.props.executeQuery(n.exprInputRef.current.value),e.preventDefault())},n.renderAutosuggest=function(e){if(!e.isOpen)return null;if(n.prevNoMatchValue&&e.inputValue.includes(n.prevNoMatchValue))return null;var t=_.a.filter(e.inputValue.replace(/ /g,""),n.props.metricNames,{pre:"<strong>",post:"</strong>"});return 0===t.length?(n.prevNoMatchValue=e.inputValue,null):o.a.createElement("ul",Object.assign({className:"autosuggest-dropdown"},e.getMenuProps()),t.slice(0,200).map(function(t,n){return o.a.createElement("li",e.getItemProps({key:t.original,index:n,item:t.original,style:{backgroundColor:e.highlightedIndex===n?"lightgray":"white",fontWeight:e.selectedItem===t?"bold":"normal"}}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.string}}))}))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=r()(this.exprInputRef.current);e.on("input",function(){var t=e.get(0),n=t.offsetHeight-t.clientHeight;e.css("height","auto").css("height",t.scrollHeight+n)})}},{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{selectedItem:this.props.value},function(t){return o.a.createElement("div",null,o.a.createElement(C.a,{className:"expression-input"},o.a.createElement(R.a,{addonType:"prepend"},o.a.createElement(S.a,null,e.props.loading?o.a.createElement(P.a,{icon:"spinner",spin:!0}):o.a.createElement(P.a,{icon:"search"}))),o.a.createElement(F.a,Object.assign({autoFocus:!0,type:"textarea",rows:"1",onKeyPress:e.handleKeyPress,placeholder:"Expression (press Shift+Enter for newlines)",innerRef:e.exprInputRef},t.getInputProps({onKeyDown:function(n){switch(n.key){case"Home":case"End":n.nativeEvent.preventDownshiftDefault=!0;break;case"ArrowUp":case"ArrowDown":t.isOpen||(n.nativeEvent.preventDownshiftDefault=!0);break;case"Enter":t.closeMenu();break;case"Escape":t.isOpen||e.exprInputRef.current.blur()}}}))),o.a.createElement(R.a,{addonType:"append"},o.a.createElement(y.a,{className:"execute-btn",color:"primary",onClick:function(){return e.props.executeQuery(e.exprInputRef.current.value)}},"Execute"))),e.renderAutosuggest(t))})}}]),t}(i.Component),W=n(76),A=n(77);n(53),n(54),n(55);D.c.add(M.f,M.g,M.c,M.b,M.a,M.l),D.a.watch();var q=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).timeInputRef=o.a.createRef(),n.$time=null,n.getBaseTime=function(){return n.props.time||j()().valueOf()},n.increaseTime=function(){var e=n.getBaseTime()+1e3*n.props.range/2;n.props.onChangeTime(e)},n.decreaseTime=function(){var e=n.getBaseTime()-1e3*n.props.range/2;n.props.onChangeTime(e)},n.clearTime=function(){n.props.onChangeTime(null)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.$time=r()(this.timeInputRef.current),this.$time.datetimepicker({icons:{today:"fas fa-calendar-check"},buttons:{showClose:!0,showToday:!0},sideBySide:!0,format:"YYYY-MM-DD HH:mm",locale:"en",timeZone:"UTC",defaultDate:this.props.time}),this.$time.on("change.datetimepicker",function(t){t.date&&e.props.onChangeTime(t.date.valueOf())})}},{key:"componentWillUnmount",value:function(){this.$time.datetimepicker("destroy")}},{key:"componentDidUpdate",value:function(){console.log(this.props),this.$time.datetimepicker("date",this.props.time?j()(this.props.time):null)}},{key:"render",value:function(){var e=this;return o.a.createElement(C.a,{className:"time-input",size:"sm"},o.a.createElement(R.a,{addonType:"prepend"},o.a.createElement(y.a,{title:"Decrease time",onClick:this.decreaseTime},o.a.createElement(P.a,{icon:"chevron-left",fixedWidth:!0}))),o.a.createElement(F.a,{placeholder:this.props.placeholder,innerRef:this.timeInputRef,onFocus:function(){return e.$time.datetimepicker("show")},onBlur:function(){return e.$time.datetimepicker("hide")},onKeyDown:function(t){return["Escape","Enter"].includes(t.key)&&e.$time.datetimepicker("hide")}}),this.props.time&&o.a.createElement(R.a,{addonType:"append"},o.a.createElement(y.a,{className:"clear-time-btn",title:"Clear time",onClick:this.clearTime},o.a.createElement(P.a,{icon:"times",fixedWidth:!0}))),o.a.createElement(R.a,{addonType:"append"},o.a.createElement(y.a,{title:"Increase time",onClick:this.increaseTime},o.a.createElement(P.a,{icon:"chevron-right",fixedWidth:!0}))))}}]),t}(i.Component),V={y:31536e3,w:604800,d:86400,h:3600,m:60,s:1};function H(e){var t=new RegExp("^([0-9]+)([ywdhms]+)$"),n=e.match(t);if(!n||3!==n.length)return null;var a=parseInt(n[1]),r=n[2];return a*V[r]}function L(e){for(var t=Object.keys(V),n=0;n<t.length;n++){var a=t[n];if(e%V[a]===0)return e/V[a]+a}return e+"s"}function Q(e){return j.a.utc(e).valueOf()}function $(e){return j.a.utc(e).format("YYYY-MM-DD HH:mm")}D.c.add(M.i,M.h,M.d,M.e);var z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).rangeRef=o.a.createRef(),n.resolutionRef=o.a.createRef(),n.rangeSteps=[1,10,60,300,900,1800,3600,7200,21600,43200,86400,172800,604800,1209600,2419200,4838400,31536e3,63072e3],n.onChangeRangeInput=function(e){var t=H(e);null===t?n.changeRangeInput(n.props.range):n.props.onChangeRange(t)},n.changeRangeInput=function(e){n.rangeRef.current.value=L(e)},n.increaseRange=function(){var e=!0,t=!1,a=void 0;try{for(var r,i=n.rangeSteps[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;if(n.props.range<o)return n.changeRangeInput(o),void n.props.onChangeRange(o)}}catch(s){t=!0,a=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw a}}},n.decreaseRange=function(){var e=!0,t=!1,a=void 0;try{for(var r,i=n.rangeSteps.slice().reverse()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;if(n.props.range>o)return n.changeRangeInput(o),void n.props.onChangeRange(o)}}catch(s){t=!0,a=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw a}}},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){e.range!==this.props.range&&this.changeRangeInput(this.props.range),e.resolution!==this.props.resolution&&(this.resolutionRef.current.value=null!==this.props.resolution?this.props.resolution.toString():"")}},{key:"render",value:function(){var e=this;return o.a.createElement(W.a,{inline:!0,className:"graph-controls",onSubmit:function(e){return e.preventDefault()}},o.a.createElement(C.a,{className:"range-input",size:"sm"},o.a.createElement(R.a,{addonType:"prepend"},o.a.createElement(y.a,{title:"Decrease range",onClick:this.decreaseRange},o.a.createElement(P.a,{icon:"minus",fixedWidth:!0}))),o.a.createElement(F.a,{defaultValue:L(this.props.range),innerRef:this.rangeRef,onBlur:function(){return e.onChangeRangeInput(e.rangeRef.current.value)}}),o.a.createElement(R.a,{addonType:"append"},o.a.createElement(y.a,{title:"Increase range",onClick:this.increaseRange},o.a.createElement(P.a,{icon:"plus",fixedWidth:!0})))),o.a.createElement(q,{time:this.props.endTime,range:this.props.range,placeholder:"End time",onChangeTime:this.props.onChangeEndTime}),o.a.createElement(F.a,{placeholder:"Res. (s)",className:"resolution-input",defaultValue:null!==this.props.resolution?this.props.resolution.toString():"",innerRef:this.resolutionRef,onBlur:function(){var t=parseInt(e.resolutionRef.current.value);e.props.onChangeResolution(t||null)},bsSize:"sm"}),o.a.createElement(A.a,{className:"stacked-input",size:"sm"},o.a.createElement(y.a,{title:"Show unstacked line graph",onClick:function(){return e.props.onChangeStacking(!1)},active:!this.props.stacked},o.a.createElement(P.a,{icon:"chart-line",fixedWidth:!0})),o.a.createElement(y.a,{title:"Show stacked graph",onClick:function(){return e.props.onChangeStacking(!0)},active:this.props.stacked},o.a.createElement(P.a,{icon:"chart-area",fixedWidth:!0}))))}}]),t}(i.Component),B=n(36),K=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderFormatted",value:function(){var e=this.props.labels,t=[],n=!0;for(var a in e)"__name__"!==a&&(t.push(o.a.createElement("span",{key:a},!n&&", ",o.a.createElement("span",{className:"legend-label-name"},a),"=",o.a.createElement("span",{className:"legend-label-value"},'"',e[a],'"'))),n&&(n=!1));return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"legend-metric-name"},e.__name__||""),o.a.createElement("span",{className:"legend-label-brace"},"{"),t,o.a.createElement("span",{className:"legend-label-brace"},"}"))}},{key:"renderPlain",value:function(){var e=this.props.labels,t=(e.__name__||"")+"{",n=[];for(var a in e)"__name__"!==a&&n.push(a+'="'+e[a]+'"');return t+=n.join(", ")+"}"}},{key:"render",value:function(){return null===this.props.labels?"scalar":this.props.format?this.renderFormatted():this.renderPlain()}}]),t}(i.PureComponent),Y=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderLegendItem",value:function(e){return o.a.createElement("tr",{key:e.index,className:"legend-item"},o.a.createElement("td",null,o.a.createElement("div",{className:"legend-swatch",style:{backgroundColor:e.color}})),o.a.createElement("td",null,o.a.createElement(K,{labels:e.labels,format:!0})))}},{key:"render",value:function(){var e=this;return o.a.createElement("table",{className:"graph-legend"},o.a.createElement("tbody",null,this.props.series.map(function(t){return e.renderLegendItem(t)})))}}]),t}(i.PureComponent);n(56),n(57),n(58),n(59),n(60),n(61);var G=0;var J,Z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).id=G++,n.chartRef=o.a.createRef(),n.formatValue=function(e){if(null===e)return"null";var t=Math.abs(e);if(t>=1e24)return(e/1e24).toFixed(2)+"Y";if(t>=1e21)return(e/1e21).toFixed(2)+"Z";if(t>=1e18)return(e/1e18).toFixed(2)+"E";if(t>=1e15)return(e/1e15).toFixed(2)+"P";if(t>=1e12)return(e/1e12).toFixed(2)+"T";if(t>=1e9)return(e/1e9).toFixed(2)+"G";if(t>=1e6)return(e/1e6).toFixed(2)+"M";if(t>=1e3)return(e/1e3).toFixed(2)+"k";if(t>=1)return e.toFixed(2);if(0===t)return e.toFixed(2);if(t<=1e-24)return(e/1e-24).toFixed(2)+"y";if(t<=1e-21)return(e/1e-21).toFixed(2)+"z";if(t<=1e-18)return(e/1e-18).toFixed(2)+"a";if(t<=1e-15)return(e/1e-15).toFixed(2)+"f";if(t<=1e-12)return(e/1e-12).toFixed(2)+"p";if(t<=1e-9)return(e/1e-9).toFixed(2)+"n";if(t<=1e-6)return(e/1e-6).toFixed(2)+"\xb5";if(t<=.001)return(e/.001).toFixed(2)+"m";if(t<=1)return e.toFixed(2);throw Error("couldn't format a value, this is a bug")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"escapeHTML",value:function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};return String(e).replace(/[&<>"'\/]/g,function(e){return t[e]})}},{key:"renderLabels",value:function(e){var t=[];for(var n in e)"__name__"!==n&&t.push("<strong>"+n+"</strong>: "+this.escapeHTML(e[n]));return'<div class="labels">'+t.join("<br>")+"</div>"}},{key:"getOptions",value:function(){var e=this;return{grid:{hoverable:!0,clickable:!0,autoHighlight:!0,mouseActiveRadius:100},legend:{show:!1},xaxis:{mode:"time",showTicks:!0,showMinorTicks:!0,timeBase:"milliseconds"},yaxis:{tickFormatter:this.formatValue},crosshair:{mode:"xy",color:"#bbb"},tooltip:{show:!0,cssClass:"graph-tooltip",content:function(t,n,a,r){var i=r.series,o='<span class="date">'+new Date(n).toUTCString()+"</span>",s='<span class="detail-swatch" style="background-color: '+i.color+'"></span>'+(i.labels.__name__||"value")+": <strong>"+a+"</strong>";return o+"<br>"+s+"<br>"+e.renderLabels(i.labels)},defaultTheme:!1,lines:!0},series:{stack:this.props.stacked,lines:{lineWidth:this.props.stacked?1:2,steps:!1,fill:this.props.stacked},shadowSize:0}}}},{key:"getColors",value:function(){for(var e=[],t=["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],n=t.length,a=0,i=this.props.data.result.length,o=0;o<i;o++){var s=r.a.color.parse(t[o%n]||"#666");o%n===0&&o&&(a=a>=0?a<.5?-a-.2:0:-a),e[o]=s.scale("rgb",1+a)}return e}},{key:"getData",value:function(){var e=this,t=this.getColors();return this.props.data.result.map(function(n,a){for(var r=[],i=0,o=e.props.queryParams,s=o.startTime;s<=o.endTime;s+=o.resolution)n.values.length>i&&n.values[i][0]<s+o.resolution/100?(r.push([1e3*n.values[i][0],e.parseValue(n.values[i][1])]),i++):r.push([1e3*s,e.props.stacked?0:null]);return{labels:null!==n.metric?n.metric:{},data:r,color:t[a],index:a}})}},{key:"parseValue",value:function(e){var t=parseFloat(e);return isNaN(t)?this.props.stacked?0:null:t}},{key:"componentDidMount",value:function(){this.plot()}},{key:"componentDidUpdate",value:function(){this.plot()}},{key:"componentWillUnmount",value:function(){this.destroyPlot()}},{key:"plot",value:function(){null!==this.chartRef.current&&(this.destroyPlot(),r.a.plot(r()(this.chartRef.current),this.getData(),this.getOptions()))}},{key:"destroyPlot",value:function(){var e=r()(this.chartRef.current).data("plot");void 0!==e&&e.destroy()}},{key:"render",value:function(){var e=this;return null===this.props.data?o.a.createElement(v.a,{color:"light"},"No data queried yet"):"matrix"!==this.props.data.resultType?o.a.createElement(v.a,{color:"danger"},"Query result is of wrong type '",this.props.data.resultType,"', should be 'matrix' (range vector)."):0===this.props.data.result.length?o.a.createElement(v.a,{color:"secondary"},"Empty query result"):o.a.createElement("div",{className:"graph"},o.a.createElement(B.a,{handleWidth:!0,onResize:function(){return e.plot()}}),o.a.createElement("div",{className:"graph-chart",ref:this.chartRef}),o.a.createElement(Y,{series:this.getData()}))}}]),t}(i.PureComponent),X=n(78),ee=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"limitSeries",value:function(e){return e.length>1e4?e.slice(0,1e4):e}},{key:"render",value:function(){var e=this.props.data;if(null===e)return o.a.createElement(v.a,{color:"light"},"No data queried yet");if(null===e.result||0===e.result.length)return o.a.createElement(v.a,{color:"secondary"},"Empty query result");var t=[],n=!1;switch(e.resultType){case"vector":n=(t=this.limitSeries(e.result).map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(K,{labels:e.metric,format:!1})),o.a.createElement("td",null,e.value[1]))})).length!=e.result.length;break;case"matrix":n=(t=this.limitSeries(e.result).map(function(e,t){var n=e.values.map(function(e){return[1]+" @"+e[0]}).join("\n");return o.a.createElement("tr",{style:{whiteSpace:"pre"},key:t},o.a.createElement("td",null,o.a.createElement(K,{labels:e.metric,format:!1})),o.a.createElement("td",null,n))})).length!=e.result.length;break;case"scalar":case"string":t.push(o.a.createElement("tr",null,o.a.createElement("td",null,"scalar"),o.a.createElement("td",null,e.result[1])));break;default:return o.a.createElement(v.a,{color:"danger"},"Unsupported result value type")}return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(v.a,{color:"danger"},o.a.createElement("strong",null,"Warning:")," Fetched ",e.result.length," metrics, only displaying first ",t.length,"."),o.a.createElement(X.a,{hover:!0,size:"sm",className:"data-table"},o.a.createElement("tbody",null,t)))}}]),t}(i.PureComponent);!function(e){e.Graph="graph",e.Table="table"}(J||(J={}));var te={type:J.Table,expr:"",range:3600,endTime:null,resolution:null,stacked:!1},ne=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).abortInFlightFetch=null,n.executeQuery=function(e){if(n.props.options.expr!==e&&n.setOptions({expr:e}),""!==e){n.abortInFlightFetch&&(n.abortInFlightFetch(),n.abortInFlightFetch=null);var t=new AbortController;n.abortInFlightFetch=function(){return t.abort()},n.setState({loading:!0});var a=n.getEndTime().valueOf()/1e3,r=a-n.props.options.range,i=n.props.options.resolution||Math.max(Math.floor(n.props.options.range/250),1),o=new URL("http://demo.robustperception.io:9090/"),s={query:e};switch(n.props.options.type){case"graph":o.pathname="/api/v1/query_range",Object.assign(s,{start:r,end:a,step:i});break;case"table":o.pathname="/api/v1/query",Object.assign(s,{time:a});break;default:throw new Error('Invalid panel type "'+n.props.options.type+'"')}Object.keys(s).forEach(function(e){return o.searchParams.append(e,s[e])}),fetch(o.toString(),{cache:"no-store",signal:t.signal}).then(function(e){return e.json()}).then(function(e){if("success"!==e.status)throw new Error(e.error||"invalid response JSON");n.setState({error:null,data:e.data,lastQueryParams:{startTime:r,endTime:a,resolution:i},loading:!1}),n.abortInFlightFetch=null}).catch(function(e){"AbortError"!==e.name&&n.setState({error:"Error executing query: "+e.message,loading:!1})})}},n.handleExpressionChange=function(e){n.setOptions({expr:e})},n.handleChangeRange=function(e){n.setOptions({range:e})},n.getEndTime=function(){return null===n.props.options.endTime?j()():n.props.options.endTime},n.handleChangeEndTime=function(e){n.setOptions({endTime:e})},n.handleChangeResolution=function(e){n.setOptions({resolution:e})},n.handleChangeStacking=function(e){n.setOptions({stacked:e})},n.state={data:null,lastQueryParams:null,loading:!1,error:null,stats:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=e.options,a=this.props.options;n.type===a.type&&n.range===a.range&&n.endTime===a.endTime&&n.resolution===a.resolution||(n.type!==a.type&&this.setState({data:null}),this.executeQuery(a.expr))}},{key:"componentDidMount",value:function(){this.executeQuery(this.props.options.expr)}},{key:"setOptions",value:function(e){var t=Object(E.a)({},this.props.options,e);this.props.onOptionsChanged(t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"panel"},o.a.createElement(f.a,null,o.a.createElement(g.a,null,o.a.createElement(U,{value:this.props.options.expr,executeQuery:this.executeQuery,loading:this.state.loading,metricNames:this.props.metricNames}))),o.a.createElement(f.a,null,o.a.createElement(g.a,null,this.state.error&&o.a.createElement(v.a,{color:"danger"},this.state.error))),o.a.createElement(f.a,null,o.a.createElement(g.a,null,o.a.createElement(b.a,{tabs:!0},o.a.createElement(k.a,null,o.a.createElement(O.a,{className:"table"===this.props.options.type?"active":"",onClick:function(){e.setOptions({type:"table"})}},"Table")),o.a.createElement(k.a,null,o.a.createElement(O.a,{className:"graph"===this.props.options.type?"active":"",onClick:function(){e.setOptions({type:"graph"})}},"Graph"))),o.a.createElement(x.a,{activeTab:this.props.options.type},o.a.createElement(w.a,{tabId:"table"},"table"===this.props.options.type&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"table-controls"},o.a.createElement(q,{time:this.props.options.endTime,range:this.props.options.range,placeholder:"Evaluation time",onChangeTime:this.handleChangeEndTime})),o.a.createElement(ee,{data:this.state.data}))),o.a.createElement(w.a,{tabId:"graph"},"graph"===this.props.options.type&&o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{range:this.props.options.range,endTime:this.props.options.endTime,resolution:this.props.options.resolution,stacked:this.props.options.stacked,onChangeRange:this.handleChangeRange,onChangeEndTime:this.handleChangeEndTime,onChangeResolution:this.handleChangeResolution,onChangeStacking:this.handleChangeStacking}),o.a.createElement(Z,{data:this.state.data,stacked:this.props.options.stacked,queryParams:this.state.lastQueryParams})))))),o.a.createElement(f.a,null,o.a.createElement(g.a,null,o.a.createElement(y.a,{className:"float-right",color:"link",onClick:this.props.removePanel,size:"sm"},"Remove Panel"))))}}]),t}(i.Component),ae=n(38);function re(e){return""===e?[]:function(e){var t=e.filter(function(e){return ie.test(e)}).sort(),n=[],a=0,r={},i=!0,o=!1,s=void 0;try{for(var l,c=t[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var u=l.value,p="g"+a+".";u.startsWith(p)||(n.push({key:a.toString(),options:Object(E.a)({},te,r)}),r={},a++),oe(r,u.substring(p.length))}}catch(h){o=!0,s=h}finally{try{i||null==c.return||c.return()}finally{if(o)throw s}}return n.push({key:a.toString(),options:Object(E.a)({},te,r)}),n}(e.substring(1).split("&"))}var ie=/^g\d+\..+=.+$/;function oe(e,t){var n=t.split("="),a=Object(ae.a)(n,2),r=a[0],i=a[1];switch(i=decodeURIComponent(i.replace(/\+/g," ")),r){case"expr":e.expr=i;break;case"tab":e.type="0"===i?J.Graph:J.Table;break;case"stacked":e.stacked="1"===i;break;case"range_input":var o=H(i);null!==o&&(e.range=o);break;case"end_input":e.endTime=Q(i);break;case"step_input":var s=parseInt(i);s>0&&(e.resolution=s);break;case"moment_input":e.endTime=Q(i)}}var se=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).key=0,n.addPanel=function(){var e=n.state.panels.slice();e.push({key:n.getKey(),options:te}),n.setState({panels:e},n.updateURL)},n.removePanel=function(e){var t=n.state.panels.filter(function(t){return t.key!==e});n.setState({panels:t},n.updateURL)};var a=re(window.location.search);return n.state={panels:0!==a.length?a:[{key:n.getKey(),options:te}],metricNames:[],fetchMetricsError:null,timeDriftError:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://demo.robustperception.io:9090/api/v1/label/__name__/values",{cache:"no-store"}).then(function(e){if(e.ok)return e.json();throw new Error("Unexpected response status when fetching metric names: "+e.statusText)}).then(function(t){return e.setState({metricNames:t.data})}).catch(function(t){return e.setState({fetchMetricsError:t.message})});var t=(new Date).getTime()/1e3;fetch("http://demo.robustperception.io:9090/api/v1/query?query=time()",{cache:"no-store"}).then(function(e){if(e.ok)return e.json();throw new Error("Unexpected response status when fetching metric names: "+e.statusText)}).then(function(e){var n=e.data.result[0],a=Math.abs(t-n);if(a>=30)throw new Error("Detected "+a+" seconds time difference between your browser and the server. Prometheus relies on accurate time and time drift might cause unexpected query results.")}).catch(function(t){return e.setState({timeDriftError:t.message})}),window.onpopstate=function(){console.log("POPSTATE");var t=re(window.location.search);0!==t.length&&e.setState({panels:t})}}},{key:"getKey",value:function(){return(this.key++).toString()}},{key:"handleOptionsChanged",value:function(e,t){var n=this.state.panels.map(function(n){return e===n.key?{key:e,options:t}:n});console.log("UPDATE OP",e,t),this.setState({panels:n},this.updateURL)}},{key:"updateURL",value:function(){console.log("UPDATE");var e=function(e){var t=[];return e.forEach(function(e){var n="g"+e.key+".",a=e.options,r={expr:a.expr,tab:a.type===J.Graph?"0":"1",stacked:a.stacked?"1":"0",range_input:L(a.range),end_input:null!==a.endTime?$(a.endTime):void 0,moment_input:null!==a.endTime?$(a.endTime):void 0,step_input:null!==a.resolution?a.resolution.toString():void 0};for(var i in r){var o=r[i];void 0!==o&&t.push(n+i+"="+encodeURIComponent(o))}}),"?"+t.join("&")}(this.state.panels);history.pushState({},"",e)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement(g.a,null,this.state.timeDriftError&&o.a.createElement(v.a,{color:"danger"},o.a.createElement("strong",null,"Warning:")," Error fetching server time: ",this.state.timeDriftError))),o.a.createElement(f.a,null,o.a.createElement(g.a,null,this.state.fetchMetricsError&&o.a.createElement(v.a,{color:"danger"},o.a.createElement("strong",null,"Warning:")," Error fetching metrics list: ",this.state.fetchMetricsError))),this.state.panels.map(function(t){return o.a.createElement(ne,{key:t.key,options:t.options,onOptionsChanged:function(n){return e.handleOptionsChanged(t.key,n)},removePanel:function(){return e.removePanel(t.key)},metricNames:e.state.metricNames})}),o.a.createElement(y.a,{color:"primary",className:"add-panel-btn",onClick:this.addPanel},"Add Panel"))}}]),t}(i.Component),le=(n(69),function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{fluid:!0},o.a.createElement(se,null))}}]),t}(i.Component));n(70);l.a.render(o.a.createElement(le,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4e334f7f.chunk.js.map