(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"1Tsj":function(module,e,t){"use strict";t.r(e);var r=t("lSNA"),n=t.n(r),o=t("VbXa"),a=t.n(o),s=t("sbe7"),u=t.n(s),i=t("sQ/U"),c=t("K2XA"),m=t("vsdT"),p=t("8cuT"),l=t.n(p),d=t("e13k"),g=t("JUgE"),I=t("4Qgh"),f=t("hyqV"),C=t("MnCE"),v=t("+9K8"),S=function(e){function ReadingItem(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={readingCml:null},t}a()(ReadingItem,e);var t=ReadingItem.prototype;return t.componentDidMount=function componentDidMount(){var e=this,t=this.props,r=t.computedItem,n=t.courseId,o=t.courseSlug,a=r.id;Object(m.a)({itemId:a,courseId:n,courseSlug:o}).then(function(t){e.setState({readingCml:t})})},t.render=function render(){var e,t=this.props,r=t.computedItem,o=t.courseId,a=t.courseSlug,s=t.itemMetadata,m=t.courseMaterials,p=t.courseProgress,l=this.state.readingCml,C=I.a.NAME,v=I.a.USER_ID,S,E=m.getNeighbors(s).nextItemMetadataOrItemGroup;return u.a.createElement(c.a,{className:"rc-ReadingItem",feedbackType:"reading",computedItem:r,courseId:o},!l&&u.a.createElement(d.a,null),l&&u.a.createElement("div",null,u.a.createElement(g.a,{cml:l,shouldApplyTracking:!0,variableData:(e={},n()(e,C,i.a.get().fullName),n()(e,v,i.a.get().id),e)}),u.a.createElement(f.a,{courseId:o,courseSlug:a,itemId:r.id,isComplete:r.isCompleted,nextItem:E,courseProgress:p})))},ReadingItem}(u.a.Component);e.default=Object(C.compose)(l()(["CourseStore","ProgressStore"],function(e){var t=e.CourseStore,r=e.ProgressStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug(),courseMaterials:t.getMaterials(),courseProgress:r.courseProgress}}),v.a)(S)},"24m0":function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},"2ngF":function(module,e,t){"use strict";var r=t("wiyT"),n=t.n(r),o=t("CWYE"),a=t("IAOZ"),s=Object(o.a)(a.d.supplementCompletionApi,{type:"rest"}),u=Object(o.a)(a.d.supplementStartApi,{type:"rest"});function updateSupplementProgress(e){var t=e.itemId,r=e.courseId,o=e.userId,a=e.api,s={data:{userId:o,courseId:r,itemId:t}};return n()(a.post("",s))}var i={markComplete:function markComplete(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:s})},markStarted:function markStarted(e,t,r){return updateSupplementProgress({itemId:e,courseId:t,userId:r,api:u})}};e.a=i;var c=i.markComplete,m=i.markStarted},"3p3R":function(module,exports,e){},"4Qgh":function(module,e,t){"use strict";var r={NAME:"NAME",USER_ID:"USER_ID",HASHED_USER_ID:"HASHED_USER_ID"};e.a=r;var n=r.NAME,o=r.USER_ID,a=r.HASHED_USER_ID},J4HX:function(module,e,t){"use strict";e.a={supplementsApi:"onDemandSupplements.v1"}},MC18:function(module,exports,e){var t=e("24m0"),r=t.default?t.default:{},n,o=(0,e("HdzH").default)(r);o.getLocale=function(){return"en"},module.exports=o},hyqV:function(module,e,t){"use strict";var r=t("VbXa"),n=t.n(r),o=t("sbe7"),a=t.n(o),s=t("17x9"),u=t.n(s),i=t("+LJP"),c=t("sQ/U"),m=t("y1LI"),p=t("IAOZ"),l=t("E4RX"),d=t("2ngF"),g=t("MC18"),I=t.n(g),f=t("m3i1"),C=t.n(f),v=function(e){function ReadingCompleteButton(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).markComplete=function(){var e=t.context.executeAction,r=t.props,n=r.itemId,o=r.courseId,a=r.courseProgress,s;a.getItemProgress(n).setState(p.e),e(l.c,{courseProgress:a}),Object(l.b)(a.get("id"),a),d.a.markComplete(n,o,c.a.get().id).done()},t.goToNextItem=function(){var e=t.props,r=e.nextItem,n=e.router;r&&n.push(r.getLink())},t}var t;return n()(ReadingCompleteButton,e),ReadingCompleteButton.prototype.render=function render(){var e=this.props,t=e.isComplete,r=e.nextItem;return a.a.createElement("div",{className:"rc-ReadingCompleteButton horizontal-box align-items-right"},t?a.a.createElement("div",{className:"completed"},a.a.createElement(m.a,{name:"checkmark",className:"color-success-dark"})," ",I()("Complete"),!!r&&a.a.createElement("button",{className:"primary next-item",type:"submit",onClick:this.goToNextItem},I()("Go to next item"))):a.a.createElement("button",{className:"primary mark-complete",type:"submit",onClick:this.markComplete},I()("Mark as completed")))},ReadingCompleteButton}(a.a.Component);v.contextTypes={router:u.a.object,executeAction:u.a.func.isRequired},e.a=Object(i.a)(function(e){return{router:e}})(v)},m3i1:function(module,exports,e){var t=e("3p3R"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},o=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},vsdT:function(module,e,t){"use strict";var r=t("J4HX"),n=t("eBhw");e.a=function(e){var t=e.itemId,o=e.courseId,a=e.courseSlug,s,u={includes:["asset"],fields:["openCourseAssets.v1(typeName)","openCourseAssets.v1(definition)"]};return new n.a({itemId:t,courseId:o,courseSlug:a}).getWithCourseItemId(r.a.supplementsApi,u).then(function(e){return e.linked["openCourseAssets.v1"][0]})}}}]);
//# sourceMappingURL=en.44.4b8c910f719c3adb3628.js.map