"use strict";(self["webpackChunktiendita_app"]=self["webpackChunktiendita_app"]||[]).push([[17],{5282:function(t,e,o){var a=o(6265),r=o.n(a),s=o(5070),n=o(3867);e["Z"]={async addProduct(t){return await r().post(`${s.J}products`,t,{headers:{authorization:(0,n.LP)()}})},async getProducts(t,e=(0,n.bh)(),o,a){return await r().get(`${s.J}products?page=${t}&storeId=${e}&categorie=${o}&name=${a}`,{headers:{authorization:(0,n.LP)()}})},async putProduct(t,e){return await r().put(`${s.J}products/${e}`,t,{headers:{authorization:(0,n.LP)()}})},async getProductsStock(){return await r().get(`${s.J}products/stockMinimun`,{headers:{authorization:(0,n.LP)()}})}}},6017:function(t,e,o){o.r(e),o.d(e,{default:function(){return St}});var a=o(9306),r=o(7139),s=o(9242);const n={class:"w-full"},l={class:"flex justify-center text-gray-500 bg-gray-100 rounded py-2 px-2"},i=(0,a._)("li",{class:"text-gray-500 select-none md:text-xs lg:text-sm"}," › ",-1),c={class:"w-full flex mt-5"},d={class:"whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"},u={class:"relative flex w-full text-gray-600 focus-within:text-gray-400"},m={class:"border-gradient-2 flex ml-20 justify-center items-center"},p={class:"text-gradient whitespace-nowrap font-semibold text-base font-mono"},g={class:"grid grid-cols-2 gap-6 mt-6"},x={class:"flex flex-col"},h=(0,a._)("span",{class:"whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"},"Buscar por sucursal",-1),f=(0,a._)("option",{disabled:"",selected:""},"Selecciona la sucursal",-1),b=["value"],w={class:"flex flex-col"},y=(0,a._)("span",{class:"whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"},"Buscar por categoria",-1),_=(0,a._)("option",{disabled:"",selected:""},"Selecciona la categoria",-1),k=["value"],v={class:"text-gray-600 font-semibold"};function P(t,e,o,P,S,W){const E=(0,a.up)("input-icon"),$=(0,a.up)("products-table"),A=(0,a.up)("pagination-component"),C=(0,a.up)("products-form"),D=(0,a.up)("layout-view");return(0,a.wg)(),(0,a.j4)(D,null,{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a._)("ol",l,[(0,a._)("li",{onClick:e[0]||(e[0]=t=>W.changeBread(1)),class:(0,r.C_)(["px-2 cursor-pointer text-gradient md:text-xs lg:text-sm",1===S.bread&&"font-bold"])}," Listado de Productos ",2),i,(0,a._)("li",{onClick:e[1]||(e[1]=t=>W.changeBread(2)),class:(0,r.C_)(["px-2 cursor-pointer text-gradient md:text-xs lg:text-sm",2===S.bread&&"font-bold"])}," Agregar / Editar Producto ",2)])]),1===S.bread?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",c,[(0,a.wy)((0,a._)("span",d,"Buscar producto",512),[[s.F8,S.getAll]]),(0,a.wy)((0,a._)("div",u,[(0,a.Wm)(E),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>S.name=t),onKeyup:e[3]||(e[3]=(...t)=>W.changeName&&W.changeName(...t)),class:"border w-full rounded ml-3 text-xs py-1 px-2 pl-8 font-mono",placeholder:"Escribe para buscar..."},null,544),[[s.nr,S.name]])],512),[[s.F8,S.getAll]]),(0,a._)("div",m,[(0,a._)("button",{onClick:e[4]||(e[4]=(...t)=>W.getProductByStock&&W.getProductByStock(...t)),class:"w-full h-full button-gradient bg-white rounded-2xl py-1 px-10"},[(0,a._)("span",p,(0,r.zw)(S.getAll?"Productos sin stock":"Todos los productos"),1)])])]),(0,a.wy)((0,a._)("div",g,[(0,a._)("div",x,[h,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>S.store=t),onChange:e[6]||(e[6]=(...t)=>W.changeSearch&&W.changeSearch(...t)),class:"border w-full rounded text-xs py-1 px-2 font-mono"},[f,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(S.stores,((t,e)=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:t.name},(0,r.zw)(t.name),9,b)))),128))],544),[[s.bM,S.store]])]),(0,a._)("div",w,[y,(0,a.wy)((0,a._)("select",{onChange:e[7]||(e[7]=(...t)=>W.changeSearch&&W.changeSearch(...t)),"onUpdate:modelValue":e[8]||(e[8]=t=>S.categorie=t),class:"border w-full rounded text-xs py-1 px-2 font-mono"},[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(S.categories,((t,e)=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:t.name},(0,r.zw)(t.name),9,k)))),128))],544),[[s.bM,S.categorie]])])],512),[[s.F8,S.getAll]]),(0,a.Wm)($,{onSetEdit:W.setEdit,products:S.products},null,8,["onSetEdit","products"]),(0,a.wy)((0,a._)("span",v,"No se an registrado productos",512),[[s.F8,S.empty]]),S.totalPag>1?((0,a.wg)(),(0,a.j4)(A,{key:0,onMethod:W.getProducts,currentPage:S.currentPage,pages:S.pages,totalPag:S.totalPag,next:S.next,prev:S.prev},null,8,["onMethod","currentPage","pages","totalPag","next","prev"])):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0),2===S.bread?((0,a.wg)(),(0,a.j4)(C,{key:1,categories:S.categories,stores:S.stores,title:S.title,product:S.product,onGetProducts:W.getProducts},null,8,["categories","stores","title","product","onGetProducts"])):(0,a.kq)("",!0)])),_:1})}const S={class:"md:mt-6 lg:mt-8 h-full w-full flex flex-col justify-center items-center"},W={class:"w-96 border shadow md:p-5 lg:p-7 rounded flex flex-col"},E={class:"font-semibold md:text-sm lg:text-base text-gradient text-center font-mono"},$={class:"md:mt-3 lg:mt-4 flex flex-col"},A=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Nombre",-1),C={class:"md:mt-3 lg:mt-4 flex flex-col"},D=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Stock",-1),Z={class:"md:mt-3 lg:mt-4 flex flex-col"},q=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Stock Minimo",-1),F={class:"md:mt-3 lg:mt-4 flex flex-col"},N=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Precio",-1),j={class:"md:mt-3 lg:mt-4 flex flex-col"},z=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Codigo",-1),I={class:"md:mt-3 lg:mt-4 flex flex-col"},B=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Categoria",-1),M=(0,a._)("option",{value:"",selected:""},"Selecciona la categoria",-1),T=["value"],H={class:"md:mt-3 lg:mt-4 flex flex-col"},K=(0,a._)("label",{for:"name",class:"font-mono text-xs font-semibold text-gradient"},"Sucursal",-1),L=(0,a._)("option",{value:"",selected:""},"Selecciona la sucursal",-1),R=["value"],V=(0,a._)("div",{class:"border-gradient-2 md:mt-4 lg:mt-5 flex justify-center items-center"},[(0,a._)("button",{type:"submit",class:"w-full h-full button-gradient bg-white rounded-2xl py-1"},[(0,a._)("span",{class:"text-gradient font-semibold text-base font-mono"},"Guardar")])],-1);function Y(t,e,o,s,n,l){const i=(0,a.up)("Field"),c=(0,a.up)("ErrorMessage"),d=(0,a.up)("Form");return(0,a.wg)(),(0,a.j4)(d,{onSubmit:l.onSubmit,"initial-values":o.product,"validation-schema":n.schema},{default:(0,a.w5)((()=>[(0,a._)("div",S,[(0,a._)("div",W,[(0,a._)("span",E,(0,r.zw)(o.title),1),(0,a._)("div",$,[A,(0,a.Wm)(i,{placeholder:"Escribe el nombre de el producto",type:"text",class:"w-full text-xs py-1 px-2 border",name:"name"}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"name"})]),(0,a._)("div",C,[D,(0,a.Wm)(i,{placeholder:"Escribe el stock de el producto",type:"text",class:"w-full text-xs py-1 px-2 border",name:"stock"}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"stock"})]),(0,a._)("div",Z,[q,(0,a.Wm)(i,{placeholder:"Escribe el stock minimo de el producto",type:"text",class:"w-full text-xs py-1 px-2 border",name:"minimunStock"}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"minimunStock"})]),(0,a._)("div",F,[N,(0,a.Wm)(i,{placeholder:"Escribe el precio de el producto",type:"text",class:"w-full text-xs py-1 px-2 border",name:"price"}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"price"})]),(0,a._)("div",j,[z,(0,a.Wm)(i,{placeholder:"Escribe el codigo de el producto",type:"text",class:"w-full text-xs py-1 px-2 border",name:"code"}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"code"})]),(0,a._)("div",I,[B,(0,a.Wm)(i,{as:"select",type:"text",class:"w-full text-xs py-1 px-2 border",name:"categoriesId"},{default:(0,a.w5)((()=>[M,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.categories,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.id,value:t.id},(0,r.zw)(t.name),9,T)))),128))])),_:1}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"categoriesId"})]),(0,a._)("div",H,[K,(0,a.Wm)(i,{as:"select",type:"text",class:"w-full text-xs py-1 px-2 border",name:"storesId"},{default:(0,a.w5)((()=>[L,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.stores,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.id,value:t.id},(0,r.zw)(t.name),9,R)))),128))])),_:1}),(0,a.Wm)(c,{class:"text-xs font-mono text-red-500 mt-1",name:"storesId"})]),V])])])),_:1},8,["onSubmit","initial-values","validation-schema"])}var J=o(5708),O=o(6542),G=o(5282),U={name:"ProductsForm",props:{getProducts:{type:Function},categories:{type:Object},stores:{type:Object},product:{type:Object},title:{type:String}},components:{Form:J.l0,Field:J.gN,ErrorMessage:J.Bc},data(){const t=O.Ry({storesId:O.Rx().required("Debes seleccionar la sucursal").typeError("Debes seleccionar la sucursal"),categoriesId:O.Rx().required("Debes seleccionar la categoria").typeError("Debes seleccionar la categoria"),name:O.Z_().required("Debes escribir el nombre"),price:O.Rx().required("El precio es requerido").typeError("Precio invalido"),stock:O.Rx().required("El stock es requerido").typeError("stock invalido"),minimunStock:O.Rx().required("El stock minimo es requerido").typeError("Stock minimo invalido"),code:O.Z_().required("Debes escribir el codigo")});return{schema:t}},methods:{onSubmit(t,{resetForm:e}){this.product.id?this.put(this.product.id,t):this.post(e,t)},post(t,e){G.Z.addProduct(e).then((({data:e})=>{if(e.ok)return this.$emit("getProducts"),t(),void this.$toast.info("Se agrego el producto con exito",{position:"bottom-right"});this.$toast.warning("Ah ocurrido un error inesperado",{position:"bottom-right"})})).catch((()=>{this.$toast.error("Error Inesperado intente mas tarde",{position:"bottom-right"})}))},put(t,e){G.Z.putProduct(e,t).then((({data:t})=>{if(t.ok)return this.$emit("getProducts"),void this.$toast.info("Se actualizo el producto con exito",{position:"bottom-right"});this.$toast.warning("Ah ocurrido un error inesperado",{position:"bottom-right"})})).catch((()=>{this.$toast.error("Error Inesperado intente mas tarde",{position:"bottom-right"})}))}}},Q=o(89);const X=(0,Q.Z)(U,[["render",Y]]);var tt=X;const et={class:"py-4 overflow-x-auto mt-6"},ot={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},at={class:"min-w-full leading-normal"},rt={className:"flex"},st={className:"relative mt-1 ml-3 inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},nt=["id","checked","onChange"],lt=["for"],it={class:"flex"},ct=["onClick"];function dt(t,e,o,r,s,n){const l=(0,a.up)("th-table"),i=(0,a.up)("td-table"),c=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",et,[(0,a._)("div",ot,[(0,a._)("table",at,[(0,a._)("thead",null,[(0,a.Wm)(l,{name:"ID"}),(0,a.Wm)(l,{name:"Nombre"}),(0,a.Wm)(l,{name:"Precio"}),(0,a.Wm)(l,{name:"Stock"}),(0,a.Wm)(l,{name:"Stock Minimo"}),(0,a.Wm)(l,{name:"Estado"}),(0,a.Wm)(l,{name:"Acciones"})]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.products,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a.Wm)(i,{name:t.id},null,8,["name"]),(0,a.Wm)(i,{name:t.name},null,8,["name"]),(0,a.Wm)(i,{name:t.price},null,8,["name"]),(0,a.Wm)(i,{name:t.stock},null,8,["name"]),(0,a.Wm)(i,{name:t.minimunStock},null,8,["name"]),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a._)("div",rt,[(0,a._)("div",st,[(0,a._)("input",{type:"checkbox",name:"toggle",id:e,checked:t.state,onChange:e=>n.changeState(t.state),class:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"},null,40,nt),(0,a._)("label",{for:e,class:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"},null,8,lt)])])])),_:2},1024),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a._)("div",it,[(0,a._)("button",{onClick:e=>n.edit(t)},[(0,a.Wm)(c,{class:"text-white bg-green-500 rounded-full w-3 h-3 p-2",icon:"pen"})],8,ct)])])),_:2},1024)])))),128))])])])])}var ut=o(1848),mt=o(1743),pt={name:"ProductsTable",props:{products:{type:Object},setEdit:{type:Function}},components:{TdTable:ut.Z,ThTable:mt.Z},data(){return{state:!1}},methods:{edit(t){this.$emit("setEdit",t)},changeState(t){console.log(!t)}}};const gt=(0,Q.Z)(pt,[["render",dt]]);var xt=gt,ht=o(741),ft=o(6394),bt=o(6998),wt=o(2648),yt=o(2129),_t=o(8842),kt=o(3867),vt={name:"ProductsView",components:{LayoutView:ht.Z,ProductsTable:xt,ProductsForm:tt,PaginationComponent:yt.Z,InputIcon:_t.Z},data(){return{bread:1,stores:{},categories:{},products:{},title:"Agregar nuevo producto",product:{},pages:[],currentPage:0,next:0,prev:0,totalPag:0,store:(0,kt.bh)(),name:"",categorie:"",empty:!1,getAll:!0}},methods:{changeName(){this.getProducts(1,this.store,"",this.name)},changeSearch(){this.getProducts(1,this.store,this.categorie,this.name)},changeBread(t){this.bread=t,this.title="Agregar nuevo producto",this.product={}},setEdit(t){this.changeBread(2),this.title="Actualizar Producto",this.product=t},getStores(){ft.Z.getStores(1,100).then((({data:t})=>{t.ok&&(this.stores=t.stores)})).catch((({data:t})=>{this.empty=!0,t.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay sucursales para mostrar")}))},getCategories(){bt.Z.getCategories(1,1e3).then((({data:t})=>{t.ok&&(this.categories=t.categories)})).catch((({data:t})=>{t.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay categorias para mostrar")}))},getProducts(t=1,e,o="",a=""){this.getAll=!0,G.Z.getProducts(t,e,o,a).then((({data:t})=>{t.ok&&(this.products=t.products,this.pages=(0,wt.V)(t.curentPag,t.totalPag,1),this.totalPag=t.totalPag,this.next=t.nextPag,this.prev=t.prevPag,this.currentPage=t.curentPag)})).catch((({data:t})=>{this.empty=!0,t.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay registros para mostrar")}))},getProductByStock(){this.getAll?(this.getAll=!1,G.Z.getProductsStock().then((({data:t})=>{t.ok&&(this.products=t.products)})).catch((({data:t})=>{this.empty=!0,t.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay registros para mostrar")}))):this.getProducts()}},mounted(){this.getStores(),this.getCategories(),this.getProducts()}};const Pt=(0,Q.Z)(vt,[["render",P]]);var St=Pt}}]);
//# sourceMappingURL=17.d771b05c.js.map