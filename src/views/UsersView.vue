<template>
  <layout-view>
    <div class="w-full">
      <ol
        class="flex justify-center text-gray-500 bg-gray-200 rounded py-2 px-2"
      >
        <li
          @click="changeBread(1)"
          class="px-2 cursor-pointer"
          :class="bread === 1 && `text-blue-500 font-semibold`"
        >
          Listado de Usuarios
        </li>
        <li class="text-gray-500 select-none">&rsaquo;</li>
        <li
          @click="changeBread(2)"
          class="px-2 cursor-pointer"
          :class="bread === 2 && `text-blue-500 font-semibold`"
        >
          Agregar / Editar Usuario
        </li>
      </ol>
    </div>
    <template v-if="bread === 1">
      <div class="w-full flex mt-5">
        <span
          class="whitespace-nowrap font-semibold font-mono text-xs text-gray-500 mt-1"
          >Buscar usuario</span
        >
        <div
          class="relative flex w-full text-gray-600 focus-within:text-gray-400"
        >
          <input-icon />
          <input
            type="text"
            class="border w-full rounded ml-3 text-xs py-1 px-2 pl-8 font-mono"
            placeholder="Escribe para buscar..."
          />
        </div>
      </div>
      <users-table @setEdit="setEdit" :users="users" />
      <span v-show="empty" class="text-gray-600 font-semibold"
        >No se an registrado Usuarios</span
      >
      <pagination-component
        v-if="totalPag > 1"
        @method="getProviders"
        :currentPage="currentPage"
        :pages="pages"
        :totalPag="totalPag"
        :next="next"
        :prev="prev"
      />
    </template>
    <users-form
      :stores="stores"
      :roles="roles"
      :user="user"
      :title="title"
      @getUsers="getUsers"
      v-if="bread === 2"
    />
  </layout-view>
</template>

<script>
import LayoutView from "../layout/LayoutView.vue";
import roles from "../api/rol.api";
import users from "../api/users.api";
import store from "../api/stores.api";
import { paginate } from "../utils/utils";
import InputIcon from "../components/Global/InputIcon.vue";
import PaginationComponent from "../components/Global/PaginationComponent.vue";
import UsersTable from "../components/Users/UsersTable.vue";
import UsersForm from "../components/Users/UsersForm.vue";

export default {
  name: "UsersView",
  components: {
    LayoutView,
    InputIcon,
    PaginationComponent,
    UsersTable,
    UsersForm,
  },
  data() {
    return {
      bread: 1,
      roles: {},
      users: {},
      stores: {},
      title: "Agregar nuevo usuario",
      pages: [],
      currentPage: 0,
      next: 0,
      prev: 0,
      totalPag: 0,
      empty: false,
      user: {},
    };
  },
  methods: {
    changeBread(op) {
      this.bread = op;
      this.user = {};
      this.title = "Agregar nuevo usuario";
    },
    setEdit(user) {
      this.changeBread(2);
      this.title = "Actualizar usuario";
      this.user = { ...user, storeId: user.storesId, rolId: user.rolesId };
    },
    getUsers(page = 1) {
      users
        .getUsers(page)
        .then(({ data }) => {
          if (data.ok) {
            this.users = data.users;
            this.pages = paginate(data.curentPag, data.totalPag, 1);
            this.totalPag = data.totalPag;
            this.next = data.nextPag;
            this.prev = data.prevPag;
            this.currentPage = data.curentPag;
          }
        })
        .catch(({ data }) => {
          this.empty = true;
          if (!data.ok) {
            this.$toast.warning("No hay registros para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    getRoles() {
      roles
        .getRoles()
        .then(({ data }) => {
          if (data.ok) {
            this.roles = data.rol;
          }
        })
        .catch(({ data }) => {
          if (!data.ok) {
            this.$toast.warning("No hay roles para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    getStores() {
      store
        .getStores(1, 100)
        .then(({ data }) => {
          if (data.ok) {
            this.stores = data.stores;
          }
        })
        .catch(({ data }) => {
          if (!data.ok) {
            this.$toast.warning("No hay sucursales para mostrar");
            return;
          }
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
  },
  mounted() {
    this.getRoles();
    this.getStores();
    this.getUsers(1);
  },
};
</script>

<style></style>
