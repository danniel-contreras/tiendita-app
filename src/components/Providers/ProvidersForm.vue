<template>
  <Form
    @submit="onSubmit"
    :initial-values="provider"
    :validation-schema="schema"
  >
    <div class="mt-20 h-full w-full flex flex-col justify-center items-center">
      <div class="w-96 border shadow p-7 rounded flex flex-col">
        <span
          class="font-semibold md:text-sm lg:text-base text-gradient text-center font-mono"
          >{{ title }}</span
        >
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
            class="font-mono text-xs font-semibold text-gradient"
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
            class="font-mono text-xs font-semibold text-gradient"
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
        <div
          class="border-gradient-2 md:mt-4 lg:mt-5 flex justify-center items-center"
        >
          <button
            type="submit"
            class="w-full h-full button-gradient bg-white rounded-2xl py-1"
          >
            <span class="text-gradient font-semibold text-base font-mono"
              >Guardar</span
            >
          </button>
        </div>
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
    provider: { type: Object },
    title: { type: String },
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
      if (this.provider.id) {
        this.put(values);
        return;
      }
      this.post(values, resetForm);
    },
    post(data, resetForm) {
      providers
        .addProvider(data)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getProviders");
            resetForm();
            this.$toast.info(`Se agrego el proveedor`, {
              position: "bottom-right",
            });
          }
        })
        .catch(() => {
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    put(data) {
      providers
        .putProvider(data, this.provider.id)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getProviders");
            this.$toast.info(`Se actualizo el proveedor`, {
              position: "bottom-right",
            });
          }
        })
        .catch(() => {
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
  },
};
</script>

<style></style>
