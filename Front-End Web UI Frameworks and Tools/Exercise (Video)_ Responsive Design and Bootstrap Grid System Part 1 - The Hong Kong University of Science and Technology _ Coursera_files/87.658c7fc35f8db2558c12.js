(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"6RWv":function(module,t,e){"use strict";var r=e("wd/R"),a=e.n(r),n=e("QjkW"),i=e("sQ/U"),o="payments.cart.mostRecent",c=function get(){if(n.a&&n.a.get){var t=n.a.get(o);if(!t||a()(t.timestamp).add(15,"days").isBefore(a()())||i.a.get().id!==t.userId&&!i.a.isSuperuser())return{};return t}return{}},s=function set(t){var e=new Date;n.a.setIfEnabled(o,{id:t,userId:i.a.get().id,timestamp:e.getTime()})},u=function reset(){n.a&&n.a.remove&&n.a.remove(o)};t.a={get:c,set:s,reset:u}},EELk:function(module,exports,t){},KVJO:function(module,exports,t){var e=t("EELk"),r;"string"==typeof e&&(e=[[module.i,e,""]]);var a={transform:void 0},n=t("aET+")(e,a);e.locals&&(module.exports=e.locals)},phfG:function(module,t,e){"use strict";e.r(t);var r=e("MVZn"),a=e.n(r),n=e("VbXa"),i=e.n(n),o=e("BDKN"),c=e.n(o),s=e("UAeG"),u=e("17x9"),p=e.n(u),l=e("sbe7"),d=e.n(l),g=e("MnCE"),f=e("w/1P"),h=e.n(f),m=e("VYij"),v=e.n(m),C=e("NpIH"),w=e("9A5E"),b=e("/1xI"),E=e("6RWv"),k=e("GXs9"),S=e("juwT"),y=e("Akn8"),I=e("hS5U"),V=e.n(I),P=e("KVJO"),U=e.n(P),j=function(t){function ShoppingCart(){for(var e,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))||this).onClickHandler=function(t){t.preventDefault(),S.a.setLocation(e.getCartPageUrl())},e}i()(ShoppingCart,t);var e=ShoppingCart.prototype;return e.componentDidMount=function componentDidMount(){var t=this.props.cart;this.isValidCart(t)||E.a.reset()},e.getCartPageUrl=function getCartPageUrl(){var t=E.a.get(),e=t&&t.id;return e?(new c.a).setPath(y.a.join(b.b.rootPath,b.b.cartUrl)).addQueryParam("cartId",e.toString()).toString():"/"},e.isValidCart=function isValidCart(t){return!!t&&!v()(t.cartItems).isEmpty()},e.render=function render(){var t=this.props,e=t.cart,r=t.hideAvatarBorder,a=t.className,n;if(!this.isValidCart(e))return null;var i=this.getCartPageUrl(),o=h()("rc-ShoppingCart",a,{"rc-cart-left-border":r});return d.a.createElement("li",{className:o},d.a.createElement(w.a,{trackingName:"cart",href:i,onClick:this.onClickHandler},d.a.createElement(k.a,{src:b.b.cartIcon,className:"icon",alt:V()("Shopping cart: 1 item"),height:32,width:38})))},ShoppingCart}(d.a.Component);t.default=Object(g.compose)(Object(g.getContext)({router:p.a.object.isRequired}),s.a.createContainer(function(t){var e=t.router,r=e&&e.location.query.cartId,n=E.a.get(),i=r||n&&n.id;return a()({},i?{cart:C.a.get(i)}:{})}))(j)}}]);
//# sourceMappingURL=87.658c7fc35f8db2558c12.js.map