<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="bg-gradient-2 w-screen h-screen fixed"></div>

    <div
      class="rounded-2xl not-blur z-50 border w-80 p-8 h-96 px-14 bg-white shadow-lg flex flex-col justify-center"
    >
      <p class="text-3xl font-mono text-gradient">Bienvenido!!</p>
      <div class="mt-6 flex flex-col items-start">
        <label class="text-sm font-bold text-gradient font-mono">Email</label>
        <input
          placeholder="Escribe tu correo"
          class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
        />
      </div>
      <div class="mt-6 flex flex-col items-start">
        <label class="text-sm font-bold text-gradient font-mono"
          >Password</label
        >
        <input
          placeholder="Escribe tu password"
          class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
        />
      </div>
      <div class="border-gradient-2 mt-5 flex justify-center items-center">
        <button class="w-full h-full bg-white rounded-2xl py-1">
          <span class="text-gradient font-semibold text-lg font-mono"
            >Iniciar Sesion</span
          >
        </button>
      </div>
    </div>
    <div
      class="rounded-tr-2xl z-50 rounded-br-2xl w-4 h-80 bg-gradient-1 shadow-lg"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>
