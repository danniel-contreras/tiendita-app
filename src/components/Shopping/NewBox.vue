<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="mt-8 w-96 h-auto p-6 border shadow rounded">
        <span class="text-lg text-gradient font-semibold">
          Crear nueva caja
        </span>
        <form>
          <div class="text-left mt-3">
            <label class="my-2 text-xs text-gradient font-semibold">
              Monto inicial
            </label>
            <input
              name="boxStart"
              type="number"
              placeholder="Escribe el monto inicial"
              class="border w-full text-xs py-2 px-3 rounded"
            />
          </div>
          <button
            type="submit"
            class="bg-blue-500 w-full text-white py-2 mt-4 text-lg font-semibold px-8 rounded-xl"
          >
            Guardar
          </button>
        </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
