"use strict";(self["webpackChunktiendita_app"]=self["webpackChunktiendita_app"]||[]).push([[7],{8341:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(9306),l=a(9242);const s={class:"py-4 overflow-x-auto mt-6"},o={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},i={class:"min-w-full leading-normal"},r={class:"border-gradient-2 flex justify-center items-center"},d=["onClick"],m=(0,n._)("span",{class:"text-gradient whitespace-nowrap font-semibold text-xs font-mono"},"Ver detalle",-1),p=[m],u={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},c={class:"min-w-full leading-normal"};function g(e,t,a,m,g,h){const b=(0,n.up)("th-table"),x=(0,n.up)("td-table"),f=(0,n.up)("modal-component");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[(0,n._)("table",i,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n.Wm)(b,{name:"Fecha"}),(0,n.Wm)(b,{name:"Total"}),(0,n.Wm)(b,{name:"Acciones"})])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.sales,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n.Wm)(x,{name:h.formatDate(e.dateOfSale)},null,8,["name"]),(0,n.Wm)(x,{name:`$${e.total}`},null,8,["name"]),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n._)("button",{onClick:t=>h.getDetails(e.id),class:"w-full h-full button-gradient bg-white rounded-2xl py-1 px-3"},p,8,d)])])),_:2},1024)])))),128))])])]),(0,n.wy)((0,n.Wm)(f,{onClose:h.showModal,title:"Detalles de la venta"},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("table",c,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n.Wm)(b,{name:"Producto"}),(0,n.Wm)(b,{name:"Cantidad"}),(0,n.wy)((0,n.Wm)(b,{name:"Total"},null,512),[[l.F8,!a.report]])])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.sale,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n.Wm)(x,{name:e.products.name},null,8,["name"]),(0,n.Wm)(x,{name:e.quantity},null,8,["name"]),(0,n.wy)((0,n.Wm)(x,{name:"$"+e.totalUnit},null,8,["name"]),[[l.F8,!a.report]])])))),128))])])])])),_:1},8,["onClose"]),[[l.F8,g.visible]])])}var h=a(1743),b=a(3748),x=a(6963),f=a(505),y=a(1848),w=a(1807),_=a(422),v={components:{ThTable:h.Z,TdTable:y.Z,ModalComponent:_.Z},props:{sales:{type:Object},report:{type:Boolean}},data(){return{sale:[],visible:!1}},methods:{showModal(){this.visible=!this.visible},formatDate(e){return(0,b.Z)((0,x.Z)(new Date(e),0),new Date,{locale:f.Z})},getDetails(e){(0,w.Wd)(e).then((({data:e})=>{this.sale=e.sales,this.showModal()}))}}},P=a(89);const W=(0,P.Z)(v,[["render",g]]);var k=W},3718:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(9306),l=a(9242);const s={class:"py-4 overflow-x-auto mt-6"},o={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},i={class:"min-w-full leading-normal"},r={class:"border-gradient-2 flex justify-center items-center"},d=["onClick"],m=(0,n._)("span",{class:"text-gradient whitespace-nowrap font-semibold text-xs font-mono"},"Ver detalle",-1),p=[m],u={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},c={class:"min-w-full leading-normal"};function g(e,t,a,m,g,h){const b=(0,n.up)("th-table"),x=(0,n.up)("td-table"),f=(0,n.up)("modal-component");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[(0,n._)("table",i,[(0,n._)("thead",null,[(0,n.Wm)(b,{name:"Fecha"}),(0,n.Wm)(b,{name:"Tipo de recibo"}),(0,n.Wm)(b,{name:"N° de recibo"}),(0,n.Wm)(b,{name:"Acciones"})]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.shoppings,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n.Wm)(x,{name:h.formatDate(e.date)},null,8,["name"]),(0,n.Wm)(x,{name:e.voucherType},null,8,["name"]),(0,n.Wm)(x,{name:e.nVoucher},null,8,["name"]),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n._)("button",{onClick:t=>h.getDetails(e.id),class:"w-full h-full button-gradient bg-white rounded-2xl py-1 px-3"},p,8,d)])])),_:2},1024)])))),128))])])]),(0,n.wy)((0,n.Wm)(f,{onClose:h.showModal,title:"Detalles de la compra"},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("table",c,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n.Wm)(b,{name:"Producto"}),(0,n.Wm)(b,{name:"Precio Compra"}),(0,n.Wm)(b,{name:"Precio Venta"}),(0,n.Wm)(b,{name:"Cantidad"}),(0,n.Wm)(b,{name:"Total"})])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.shopping,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n.Wm)(x,{name:e.products.name},null,8,["name"]),(0,n.Wm)(x,{name:"$"+e.purchasePrice},null,8,["name"]),(0,n.Wm)(x,{name:"$"+e.salePrice},null,8,["name"]),(0,n.Wm)(x,{name:e.quantity},null,8,["name"]),(0,n.Wm)(x,{name:"$"+e.totalUnit},null,8,["name"])])))),128))])])])])),_:1},8,["onClose"]),[[l.F8,g.visible]])])}var h=a(1848),b=a(1743),x=a(3748),f=a(6963),y=a(505),w=a(1232),_=a(422),v={components:{ThTable:b.Z,TdTable:h.Z,ModalComponent:_.Z},props:{shoppings:{type:Array}},data(){return{shopping:[],visible:!1}},methods:{showModal(){this.visible=!this.visible},formatDate(e){return(0,x.Z)((0,f.Z)(new Date(e),0),new Date,{locale:y.Z})},getDetails(e){(0,w.q_)(e).then((({data:e})=>{this.showModal(),this.shopping=e.detailShopping}))}}},P=a(89);const W=(0,P.Z)(v,[["render",g]]);var k=W},1007:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(9306),l=a(7139),s=a(9242);const o={id:"pdf-content"},i={class:"grid grid-cols-4 gap-5 py-6"},r={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},d=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Monto Inicial",-1),m={class:"text-gray-600 text-sm font-semibold mt-1"},p={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},u=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Ingresos",-1),c={class:"text-gray-600 text-sm font-semibold mt-1"},g={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},h=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Excesos",-1),b={class:"text-gray-600 text-sm font-semibold mt-1"},x={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},f=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Perdidas",-1),y={class:"text-gray-600 text-sm font-semibold mt-1"},w={class:"grid grid-cols-2 gap-5 py-2"},_={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},v=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Total de ventas",-1),P={class:"text-gray-600 text-sm font-semibold mt-1"},W={class:"border h-auto py-3 rounded flex flex-col justify-center items-center"},k=(0,n._)("p",{class:"text-gray-600 text-sm font-semibold"},"Total de compras",-1),C={class:"text-gray-600 text-sm font-semibold mt-1"},D={class:"w-full mt-2"},Z={class:"flex justify-center text-gray-500 bg-gray-100 rounded py-2 px-2"},T=(0,n._)("li",{class:"text-gray-500 select-none md:text-xs lg:text-sm"}," › ",-1),S={class:"text-gray-600 font-semibold"},$={class:"text-gray-600 font-semibold"},j=(0,n._)("div",{class:"border-gradient-2 md:mt-4 lg:mt-5 flex justify-center items-center"},[(0,n._)("button",{type:"submit",class:"w-full h-full button-gradient bg-white rounded-2xl py-1"},[(0,n._)("span",{class:"text-gradient font-semibold text-base font-mono"},"Generar Reporte")])],-1);function M(e,t,a,M,N,F){const H=(0,n.up)("sales-table"),V=(0,n.up)("pagination-component"),q=(0,n.up)("shopping-table-history"),z=(0,n.up)("pie-chart"),B=(0,n.up)("layout-view");return(0,n.wg)(),(0,n.j4)(B,null,{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",i,[(0,n._)("div",r,[d,(0,n._)("p",m," $"+(0,l.zw)(Number(N.box.boxStart)),1)]),(0,n._)("div",p,[u,(0,n._)("p",c," $"+(0,l.zw)(Number(N.box.income)),1)]),(0,n._)("div",g,[h,(0,n._)("p",b," $"+(0,l.zw)(Number(N.box.surplus)),1)]),(0,n._)("div",x,[f,(0,n._)("p",y," $"+(0,l.zw)(Number(N.box.missing)),1)])]),(0,n._)("div",w,[(0,n._)("div",_,[v,(0,n._)("p",P," $"+(0,l.zw)(Number(N.box.totalSales)),1)]),(0,n._)("div",W,[k,(0,n._)("p",C," $"+(0,l.zw)(Number(N.box.expenses)),1)])]),(0,n._)("div",D,[(0,n._)("ol",Z,[(0,n._)("li",{onClick:t[0]||(t[0]=e=>F.changeBread(1)),class:(0,l.C_)(["px-2 cursor-pointer text-gray-600 md:text-xs lg:text-sm",1===N.bread&&"font-bold"])}," Listado de Ventas ",2),T,(0,n._)("li",{onClick:t[1]||(t[1]=e=>F.changeBread(2)),class:(0,l.C_)(["px-2 cursor-pointer text-gray-600 md:text-xs lg:text-sm",2===N.bread&&"font-bold"])}," Listado de Compras ",2)])]),1===N.bread?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(H,{sales:N.sales},null,8,["sales"]),(0,n.wy)((0,n._)("span",S,"No se an registrado ventas",512),[[s.F8,N.empty]]),N.totalPag>1?((0,n.wg)(),(0,n.j4)(V,{key:0,onMethod:F.getSales,currentPage:N.currentPage,pages:N.pages,totalPag:N.totalPag,next:N.next,prev:N.prev},null,8,["onMethod","currentPage","pages","totalPag","next","prev"])):(0,n.kq)("",!0)],64)):(0,n.kq)("",!0),2===N.bread?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(q,{shoppings:N.shoppings},null,8,["shoppings"]),(0,n.wy)((0,n._)("span",$,"No se an registrado ventas",512),[[s.F8,N.empty]]),N.shoppingPag.totalPag>1?((0,n.wg)(),(0,n.j4)(V,{key:0,onMethod:F.getShoppings,currentPage:N.shoppingPag.currentPage,pages:N.shoppingPag.pages,totalPag:N.shoppingPag.totalPag,next:N.shoppingPag.next,prev:N.shoppingPag.prev},null,8,["onMethod","currentPage","pages","totalPag","next","prev"])):(0,n.kq)("",!0)],64)):(0,n.kq)("",!0)]),(0,n.Wm)(z,{data_pie:N.data_pie},null,8,["data_pie"]),j])),_:1})}var N=a(3954),F=a(1807),H=a(1232),V=a(2129),q=a(8341),z=a(3718),B=a(741),L=a(2648),Y=a(2269),A=a.n(Y),I=a(1164);function K(e,t,a,l,s,o){const i=(0,n.up)("Pie"),r=(0,n.up)("Tooltip"),d=(0,n.up)("Chart"),m=(0,n.up)("Responsive");return(0,n.wg)(),(0,n.j4)(m,{class:"w-full"},{main:(0,n.w5)((({width:t})=>[(0,n.Wm)(d,{direction:"circular",size:{width:t,height:400},data:a.data_pie,margin:{left:Math.round((t-360)/2),top:20,right:0,bottom:20},axis:e.axis,config:{controlHover:!1}},{layers:(0,n.w5)((()=>[(0,n.Wm)(i,{dataKeys:["name","pl"],"pie-style":{innerRadius:100,padAngle:.05}},null,8,["pie-style"])])),widgets:(0,n.w5)((()=>[(0,n.Wm)(r,{config:{name:{label:""},pl:{label:"$"}},hideLine:""})])),_:2},1032,["size","data","margin","axis"])])),_:1})}var R=a(1160),E={name:"LineChart",components:{Chart:R.kL,Responsive:R.Et,Pie:R.by,Tooltip:R.u},props:{data_pie:{type:Array}}},O=a(89);const G=(0,O.Z)(E,[["render",K]]);var U=G,J={components:{LayoutView:B.Z,SalesTable:q.Z,PaginationComponent:V.Z,ShoppingTableHistory:z.Z,PieChart:U},data(){return{bread:1,sales:{},pages:[],currentPage:0,box:{},next:0,prev:0,totalPag:0,empty:!1,emptyS:!1,shoppings:[],shoppingPag:{pages:[],currentPage:0,box:{},next:0,prev:0,totalPag:0},data_pie:[]}},methods:{generateReport(){window.html2canvas=A();let e=new I.ZP("p","pt","a4");e.html(document.querySelector("#pdf-content"),{callback:e=>{e.save("Hello.pdf")}})},changeBread(e){this.bread=e},getSales(e=1){(0,F.x6)(e,5,this.$route.params.id).then((({data:e})=>{console.log(e),this.sales=e.sales,this.pages=(0,L.V)(e.curentPag,e.totalPag,1),this.totalPag=e.totalPag,this.next=e.nextPag,this.prev=e.prevPag,this.currentPage=e.curentPag})).catch((()=>{this.empty=!0}))},getShoppings(e=1){(0,H.G5)(e,5,this.$route.params.id).then((({data:e})=>{this.shoppings=e.shopping,this.shoppingPag={pages:(0,L.V)(e.curentPag,e.totalPag,1),totalPag:e.totalPag,next:e.nextPag,prev:e.prevPag,currentPage:e.curentPag}})).catch((()=>{this.emptyS=!0}))},getInfoBox(){(0,N.FO)(this.$route.params.id).then((({data:e})=>{this.box=e.box,this.data_pie=[{name:"Monto inicial",pl:Number(this.box.boxStart)},{name:"Ventas",pl:Number(this.box.totalSales)},{name:"Compras",pl:Number(this.box.expenses)},{name:"Excesos",pl:Number(this.box.surplus)},{name:"Perdidas",pl:Number(this.box.missing)},{name:"Ingresos",pl:Number(this.box.missing)}]}))}},mounted(){this.getSales(1),this.getInfoBox(),this.getShoppings()}};const Q=(0,O.Z)(J,[["render",M]]);var X=Q}}]);
//# sourceMappingURL=7.ba7ba1d7.js.map