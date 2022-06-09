"use strict";(self["webpackChunktiendita_app"]=self["webpackChunktiendita_app"]||[]).push([[321],{6321:function(e,t,s){s.r(t),s.d(t,{default:function(){return me}});var r=s(9306),a=s(7139),o=s(9242);const l={class:"w-full"},n={class:"flex justify-center text-gray-500 bg-gray-200 rounded py-2 px-2"},i=(0,r._)("li",{class:"text-gray-500 select-none"},"›",-1),u={class:"w-full flex mt-5"},d=(0,r._)("span",{class:"whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"},"Buscar usuario",-1),c={class:"relative flex w-full text-gray-600 focus-within:text-gray-400"},m=(0,r._)("input",{type:"text",class:"border w-full rounded ml-3 text-xs py-1 px-2 pl-8 font-mono",placeholder:"Escribe para buscar..."},null,-1),p={class:"text-gray-600 font-semibold"};function x(e,t,s,x,h,f){const g=(0,r.up)("input-icon"),b=(0,r.up)("users-table"),y=(0,r.up)("pagination-component"),w=(0,r.up)("users-form"),v=(0,r.up)("layout-view");return(0,r.wg)(),(0,r.j4)(v,null,{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r._)("ol",n,[(0,r._)("li",{onClick:t[0]||(t[0]=e=>f.changeBread(1)),class:(0,a.C_)(["px-2 cursor-pointer",1===h.bread&&"text-blue-500 font-semibold"])}," Listado de Usuarios ",2),i,(0,r._)("li",{onClick:t[1]||(t[1]=e=>f.changeBread(2)),class:(0,a.C_)(["px-2 cursor-pointer",2===h.bread&&"text-blue-500 font-semibold"])}," Agregar / Editar Usuario ",2)])]),1===h.bread?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",u,[d,(0,r._)("div",c,[(0,r.Wm)(g),m])]),(0,r.Wm)(b,{onSetEdit:f.setEdit,users:h.users},null,8,["onSetEdit","users"]),(0,r.wy)((0,r._)("span",p,"No se an registrado Usuarios",512),[[o.F8,h.empty]]),h.totalPag>1?((0,r.wg)(),(0,r.j4)(y,{key:0,onMethod:e.getProviders,currentPage:h.currentPage,pages:h.pages,totalPag:h.totalPag,next:h.next,prev:h.prev},null,8,["onMethod","currentPage","pages","totalPag","next","prev"])):(0,r.kq)("",!0)],64)):(0,r.kq)("",!0),2===h.bread?((0,r.wg)(),(0,r.j4)(w,{key:1,stores:h.stores,roles:h.roles,user:h.user,title:h.title,onGetUsers:f.getUsers},null,8,["stores","roles","user","title","onGetUsers"])):(0,r.kq)("",!0)])),_:1})}var h=s(741),f=s(6265),g=s.n(f),b=s(5070),y=s(3867),w={async addRole(e){return await g().post(`${b.J}role`,e,{headers:{authorization:(0,y.LP)()}})},async getRoles(){return await g().get(`${b.J}roles?page=1&take=100`,{headers:{authorization:(0,y.LP)()}})},async putUser(e,t){return await g().put(`${b.J}users/${t}`,e,{headers:{authorization:(0,y.LP)()}})},async deleteUser(e){return await g()["delete"](`${b.J}users/${e}`,{headers:{authorization:(0,y.LP)()}})}},v={async addUser(e){return await g().post(`${b.J}users`,e,{headers:{authorization:(0,y.LP)()}})},async getUsers(e){return await g().get(`${b.J}users?page=${e}&storeId=${(0,y.bh)()}`,{headers:{authorization:(0,y.LP)()}})},async putUser(e,t){return await g().put(`${b.J}users/${t}`,e,{headers:{authorization:(0,y.LP)()}})},async deleteUser(e){return await g()["delete"](`${b.J}users/${e}`,{headers:{authorization:(0,y.LP)()}})}},_=s(6394),k=s(2648),P=s(8842),$=s(2129);const U={class:"py-4 overflow-x-auto mt-6"},W={class:"inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"},E={class:"min-w-full leading-normal"},D={class:"flex"},I=["onClick"];function S(e,t,s,a,o,l){const n=(0,r.up)("th-table"),i=(0,r.up)("td-table"),u=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("div",W,[(0,r._)("table",E,[(0,r._)("thead",null,[(0,r.Wm)(n,{name:"ID"}),(0,r.Wm)(n,{name:"Nombre"}),(0,r.Wm)(n,{name:"Apellido"}),(0,r.Wm)(n,{name:"Email"}),(0,r.Wm)(n,{name:"Acciones"})]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.users,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r.Wm)(i,{name:e.id},null,8,["name"]),(0,r.Wm)(i,{name:e.name},null,8,["name"]),(0,r.Wm)(i,{name:e.lastname},null,8,["name"]),(0,r.Wm)(i,{name:e.email},null,8,["name"]),(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[(0,r._)("div",D,[(0,r._)("button",{onClick:t=>l.edit(e)},[(0,r.Wm)(u,{class:"text-white bg-green-500 rounded-full w-3 h-3 p-2",icon:"pen"})],8,I)])])),_:2},1024)])))),128))])])])])}var z=s(1848),Z=s(1743),A={name:"UsersTable",props:{users:{type:Object},setEdit:{type:Function}},components:{TdTable:z.Z,ThTable:Z.Z},methods:{edit(e){this.$emit("setEdit",e)}}},j=s(89);const F=(0,j.Z)(A,[["render",S]]);var C=F;const L={class:"mt-20 h-full w-full flex flex-col justify-center items-center"},q={class:"w-96 border shadow p-7 rounded flex flex-col"},R={class:"font-semibold text-xl text-center font-mono"},J={class:"mt-4 flex flex-col"},N=(0,r._)("label",{for:"name",class:"font-mono text-xs font-semibold from-gray-600"},"Nombre",-1),B={class:"mt-4 flex flex-col"},T=(0,r._)("label",{for:"lastname",class:"font-mono text-xs font-semibold from-gray-600"},"Apellido",-1),H={class:"mt-4 flex flex-col"},M=(0,r._)("label",{for:"email",class:"font-mono text-xs font-semibold from-gray-600"},"Email",-1),O={class:"mt-4 flex flex-col"},Y=(0,r._)("label",{for:"pass",class:"font-mono text-xs font-semibold from-gray-600"},"Contraseña",-1),G={class:"mt-4 flex flex-col"},K=(0,r._)("label",{for:"storeId",class:"font-mono text-xs font-semibold from-gray-600"},"Sucursal",-1),V=(0,r._)("option",{value:"",selected:""},"Selecciona la sucursal",-1),Q=["value"],X={class:"mt-4 flex flex-col"},ee=(0,r._)("label",{for:"rolId",class:"font-mono text-xs font-semibold from-gray-600"},"Rol",-1),te=(0,r._)("option",{value:"",selected:""},"Selecciona el rol",-1),se=["value"],re=(0,r._)("div",{class:"border-gradient-2 mt-5 flex justify-center items-center"},[(0,r._)("button",{type:"submit",class:"w-full h-full button-gradient bg-white rounded-2xl py-1"},[(0,r._)("span",{class:"text-gradient font-semibold text-base font-mono"},"Guardar")])],-1);function ae(e,t,s,l,n,i){const u=(0,r.up)("Field"),d=(0,r.up)("ErrorMessage"),c=(0,r.up)("Form");return(0,r.wg)(),(0,r.j4)(c,{onSubmit:i.onSubmit,"initial-values":s.user,"validation-schema":n.schema},{default:(0,r.w5)((()=>[(0,r._)("div",L,[(0,r._)("div",q,[(0,r._)("span",R,(0,a.zw)(s.title),1),(0,r._)("div",J,[N,(0,r.Wm)(u,{placeholder:"Escribe el nombre de el proveedor",type:"text",class:"w-full text-xs py-1 px-2 border",name:"name"}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"name"})]),(0,r._)("div",B,[T,(0,r.Wm)(u,{placeholder:"Escribe el numero de telefono",type:"text",class:"w-full text-xs py-1 px-2 border",name:"lastname"}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"lastname"})]),(0,r._)("div",H,[M,(0,r.Wm)(u,{placeholder:"Escribe el nombre de el proveedor",type:"text",class:"w-full text-xs py-1 px-2 border",name:"email"}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"email"})]),(0,r.wy)((0,r._)("div",O,[Y,(0,r.Wm)(u,{placeholder:"Escribe el nombre de el proveedor",type:"text",class:"w-full text-xs py-1 px-2 border",name:"pass"}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"pass"})],512),[[o.F8,!s.user]]),(0,r._)("div",G,[K,(0,r.Wm)(u,{name:"storeId",as:"select",class:"w-full text-xs py-1 px-2 border"},{default:(0,r.w5)((()=>[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.stores,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,a.zw)(e.name),9,Q)))),128))])),_:1}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"storeId"})]),(0,r._)("div",X,[ee,(0,r.Wm)(u,{name:"rolId",as:"select",class:"w-full text-xs py-1 px-2 border"},{default:(0,r.w5)((()=>[te,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.roles,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,a.zw)(e.role),9,se)))),128))])),_:1}),(0,r.Wm)(d,{class:"text-xs font-mono text-red-500 mt-1",name:"rolId"})]),re])])])),_:1},8,["onSubmit","initial-values","validation-schema"])}var oe=s(5708),le=s(6542),ne={name:"UsersForm",props:{getUsers:{type:Function},stores:{type:Object},user:{type:Object},title:{type:String},roles:{type:Object}},components:{Form:oe.l0,Field:oe.gN,ErrorMessage:oe.Bc},data(){const e=le.Ry({rolId:le.Rx().required("Debes seleccionar el rol").typeError("Debes seleccionar el rol"),storeId:le.Rx().required("Debes seleccionar la sucursal").typeError("Debes seleccionar la sucursal"),name:le.Z_().required("Debes escribir el nombre"),lastname:le.Z_().required("Debes escribir el apellido"),email:le.Z_().required("Debes escribir el email"),pass:le.Z_().required("Debes escribir la contraseña")});return{schema:e}},methods:{onSubmit(e,{resetForm:t}){this.provider?this.put(e):this.post(e,t)},post(e,t){v.addUser(e).then((({data:e})=>{e.ok&&(this.$emit("getUsers"),t(),this.$toast.info("Se agrego el usuario",{position:"bottom-right"}))})).catch((()=>{this.$toast.error("Ah ocurrido un error inesperado")}))},put(e){v.putUser(e,this.user.id).then((({data:e})=>{e.ok&&(this.$emit("getUsers"),this.$toast.info("Se actualizo el usuario",{position:"bottom-right"}))})).catch((()=>{this.$toast.error("Ah ocurrido un error inesperado")}))}}};const ie=(0,j.Z)(ne,[["render",ae]]);var ue=ie,de={name:"UsersView",components:{LayoutView:h.Z,InputIcon:P.Z,PaginationComponent:$.Z,UsersTable:C,UsersForm:ue},data(){return{bread:1,roles:{},users:{},stores:{},title:"Agregar nuevo usuario",pages:[],currentPage:0,next:0,prev:0,totalPag:0,empty:!1,user:{}}},methods:{changeBread(e){this.bread=e,this.user={},this.title="Agregar nuevo usuario"},setEdit(e){this.changeBread(2),this.title="Actualizar usuario",this.user={...e,storeId:e.storesId,rolId:e.rolesId}},getUsers(e=1){v.getUsers(e).then((({data:e})=>{e.ok&&(this.users=e.users,this.pages=(0,k.V)(e.curentPag,e.totalPag,1),this.totalPag=e.totalPag,this.next=e.nextPag,this.prev=e.prevPag,this.currentPage=e.curentPag)})).catch((({data:e})=>{this.empty=!0,e.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay registros para mostrar")}))},getRoles(){w.getRoles().then((({data:e})=>{e.ok&&(this.roles=e.rol)})).catch((({data:e})=>{e.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay roles para mostrar")}))},getStores(){_.Z.getStores(1,100).then((({data:e})=>{e.ok&&(this.stores=e.stores)})).catch((({data:e})=>{e.ok?this.$toast.error("Ah ocurrido un error inesperado"):this.$toast.warning("No hay sucursales para mostrar")}))}},mounted(){this.getRoles(),this.getStores(),this.getUsers(1)}};const ce=(0,j.Z)(de,[["render",x]]);var me=ce}}]);
//# sourceMappingURL=321.5d5c22ff.js.map