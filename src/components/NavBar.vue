<template>
  <div class="flex flex-col justify-center h-screen">
    <ul>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="home" class="pl-3 text-base" /> 
        <router-link class="ml-2" to="/">Inicio</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="shop" class="pl-3 text-base" /> 
        <router-link class="ml-2" to="/stores">Sucursales</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="rectangle-list" class="pl-3 text-base" />
         <router-link class="ml-2" to="/categories">Categorias</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="boxes-packing" class="pl-3 text-base" />
         <router-link class="ml-2" to="/products">Productos</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="truck-fast" class="pl-3 text-base" />
         <router-link class="ml-2" to="/providers">Proveedores</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="user" class="pl-3 text-base" />
         <router-link class="ml-2" to="/users">Usuarios</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="shopping-cart" class="pl-3 text-base" />
         <router-link class="ml-2" to="/shopping-history">Historial de Compras</router-link>
      </li>
      <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="shopping-bag" class="pl-3 text-base" />
         <router-link class="ml-2" to="/sales-history">Historial de Ventas</router-link>
      </li>
       <li class="text-gray-200 text-xl md:text-sm font-mono font-semibold mt-2">
        <font-awesome-icon icon="chart-bar" class="pl-3 text-base" />
         <router-link class="ml-2" to="/finances">Finanzas</router-link>
      </li>
      <li @click="loggout" class="text-gray-200 text-xl md:text-sm cursor-pointer font-mono font-semibold mt-2">
        <font-awesome-icon icon="sign-out-alt" class="pl-3 text-base" />
         Cerrar Sesion
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    loggout() {
      this.$store.dispatch("setLoggout");
      this.$router.go("/login");
    },
  },
};
</script>

<style></style>
