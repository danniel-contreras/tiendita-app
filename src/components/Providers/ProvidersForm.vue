<template>
  <Form @submit="onSubmit" :initial-values="old" :validation-schema="schema">
    <div class="mt-20 h-full w-full flex flex-col justify-center items-center">
      <div class="w-96 border shadow p-7 rounded flex flex-col">
        <span class="font-semibold text-xl text-center font-mono"
          >Agregar nuevo proveedor</span
        >
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Nombre</label
          >
          <Field
            placeholder="Escribe el nombre de el proveedor"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="name"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="name"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Numero de telefono</label
          >
          <Field
            placeholder="Escribe el numero de telefono"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="phone"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="phone"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Sucursal</label
          >
          <Field
            name="storeId"
            as="select"
            class="w-full text-xs py-1 px-2 border"
          >
            <option value="" selected>Selecciona la sucursal</option>
            <option
              v-for="store in stores"
              v-bind:key="store.id"
              :value="store.id"
            >
              {{ store.name }}
            </option>
          </Field>
          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="storeId"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white text-xs py-2 font-mono mt-4 rounded"
        >
          Guardar
        </button>
      </div>
    </div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import providers from "../../api/providers.api";

export default {
  name: "ProvidersForm",
  props: {
    getProviders: {
      type: Function,
    },
    stores: {
      type: Object,
    },
  },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object({
      storeId: yup
        .number()
        .required("Debes seleccionar el proveedor")
        .typeError("Debes seleccionar el proveedor"),
      name: yup.string().required("El nombre es requerido"),
      phone: yup
        .string()
        .required("El numero de telefono es requerido")
        .matches(/^[0-9]\d{3}-?\d{4}$/, "Numero de telefono invalido"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      providers.addProvider(values).then(({ data }) => {
        if (data.ok) {
          this.$emit("getProviders");
          resetForm();
          this.$toast.info(`Se agrego el proveedor`, {
            position: "bottom-right",
          });
        }
      });
    },
  },
};
</script>

<style></style>
