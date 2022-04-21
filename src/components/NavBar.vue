<template>
  <div class="flex flex-col justify-center h-screen ml-4">
    <ul>
      <li class="text-white text-xl font-mono font-semibold mt-2">
        <font-awesome-icon icon="home" class="pl-3 text-base" /> Inicio
      </li>
      <li class="text-white text-xl font-mono font-semibold mt-2">
        <font-awesome-icon icon="shop" class="pl-3 text-base" /> 
        <router-link class="ml-2" to="/stores">Sucursales</router-link>
      </li>
      <li class="text-white text-xl font-mono font-semibold mt-2">
        <font-awesome-icon icon="rectangle-list" class="pl-3 text-base" />
         <router-link class="ml-2" to="/categories">Categorias</router-link>
      </li>
      <li class="text-white text-xl font-mono font-semibold mt-2">
        <font-awesome-icon icon="boxes-packing" class="pl-3 text-base" />
         <router-link class="ml-2" to="/products">Productos</router-link>
      </li>
      <li class="text-white text-xl font-mono font-semibold mt-2">
        <font-awesome-icon icon="truck-fast" class="pl-3 text-base" />
         <router-link class="ml-2" to="/providers">Proveedores</router-link>
      </li>
      <font-awesome-icon icon="rectangle-history" />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
