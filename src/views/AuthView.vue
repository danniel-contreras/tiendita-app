<template>
  <div class="bg-gray-200 w-screen h-screen flex justify-center items-center">
    <img class="absolute top-28 w-44 z-10" src="../assets/8c6o8XKri.png" alt="">
    <div class="rounded w-96 h-64 absolute bg-gray-50 shadow-lg"></div>
    <div
      class="rounded absolute border w-80 p-8 h-80 bg-white shadow-lg flex flex-col justify-center"
    >
      <p class="text-3xl font-mono">Bienvenido!!</p>
      <div class="mt-6 flex flex-col items-start">
        <label class="text-sm font-bold font-mono">Email</label>
        <input
          placeholder="Escribe tu correo"
          class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
        />
      </div>
      <div class="mt-6 flex flex-col items-start">
        <label class="text-sm font-bold font-mono">Password</label>
        <input
          placeholder="Escribe tu password"
          class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
        />
      </div>
      <button class="mt-4 bg-gray-800 text-white py-2 rounded font-mono">
        Iniciar Sesion
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>
