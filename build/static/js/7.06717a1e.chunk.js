(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[7],{103:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=(t(84),t(8)),r=function(e){var a=e.cartItem,t=a.name,r=a.imageUrl,s=a.price,m=a.quantity,i=Object(n.useContext)(l.a),o=i.addItem,u=i.removeItem,p=i.clearItemFromCart;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("div",{className:"img-containter"},c.a.createElement("img",{src:r,alt:"item"})),c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"quantity"},c.a.createElement("div",{className:"arrow",onClick:function(){return u(a)}},"\u276e"),c.a.createElement("span",{className:"value"},m),c.a.createElement("div",{className:"arrow",onClick:function(){return o(a)}},"\u276f")),c.a.createElement("span",{className:"price"},"$",s),c.a.createElement("div",{className:"remove-btn",onClick:function(){return p(a)}},c.a.createElement("p",null,"\u2715")))},s=t(85),m=t.n(s),i=t(86),o=t.n(i),u=function(e){var a=e.price,t=100*a;return c.a.createElement(m.a,{label:"Pay Now",name:"Clothing store",billingAddress:!0,shippingAddress:!0,description:"Your total is ".concat(a),amount:t,panelLabel:"Pay Now",token:function(e){alert("payment Successful"),o()({url:"payment",method:"post",data:{amount:t,token:e}}).then((function(e){alert("Payment successful")})).catch((function(e){console.log(JSON.parse(e)),alert("There was an issue with your payment. Please sure you use the provided credit cart")}))},stripeKey:"pk_test_h7kfD96HACBxHmU56VZBODFp00ipycj9jI"})};t(103),a.default=function(){var e=Object(n.useContext)(l.a),a=e.cartItems,t=e.total;return c.a.createElement("div",{className:"checkout-page"},c.a.createElement("div",{className:"checkout-header"},c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Product")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Description")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Quantity")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Price")),c.a.createElement("div",{className:"header-block"},c.a.createElement("span",null,"Remove"))),a.map((function(e){return c.a.createElement(r,{key:e.id,cartItem:e})})),c.a.createElement("div",{className:"total"},c.a.createElement("h3",{className:"total-text"},"total:"),c.a.createElement("h3",{className:"total-price"},"$",t)),c.a.createElement("div",{className:"test-card"},"*Please use the following test credit card for payments*",c.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 09/21 - CVV: 123"),c.a.createElement(u,{price:t}))}},84:function(e,a,t){}}]);
//# sourceMappingURL=7.06717a1e.chunk.js.map