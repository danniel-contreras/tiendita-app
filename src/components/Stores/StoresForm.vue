<template>
  <Form @submit="onSubmit" :initial-values="store" :validation-schema="schema">
    <div class="mt-20 h-full w-full flex flex-col justify-center items-center">
      <div class="w-96 border shadow p-7 rounded flex flex-col">
        <span class="font-semibold text-2xl text-gradient text-center font-mono">{{
          title
        }}</span>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
            >Nombre</label
          >
          <Field
            placeholder="Escribe el nombre de la sucursal"
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
            >Direccion</label
          >
          <Field
            as="textarea"
            cols="3"
            rows="4"
            placeholder="Escribe el nombre del producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="addres"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="addres"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
            >Numero de telefono</label
          >
          <Field
            placeholder="Escribe el nombre del producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="phone"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="phone"
          />
        </div>
        <div class="border-gradient-2 mt-5 flex justify-center items-center">
        <button type="submit" class="w-full h-full button-gradient bg-white rounded-2xl py-1">
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
import stores from "../../api/stores.api";

export default {
  name: "StoresForm",
  props: {
    getStores: {
      type: Function,
    },
    title: {
      type: String,
    },
    store: {
      type: Object,
      required: false,
    },
  },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object({
      name: yup.string().required("El nombre es requerido"),
      addres: yup.string().required("La direccion es requerida"),
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
      if (this.store) {
        this.put(values);
        return;
      }
      this.post(values, resetForm);
    },
    post(data, reset) {
      stores.addStore(data).then(({ data }) => {
        if (data.ok) {
          this.$emit("getStores");
          reset();
          this.$toast.info(`Se agrego la sucursal con exito`, {
            position: "bottom-right",
          });
        }
      });
    },
    put(data) {
      stores.putStore(data, this.store.id).then(({ data }) => {
        if (data.ok) {
          this.$emit("getStores");
          this.$toast.info(`Se actualizo la sucursal con exito`, {
            position: "bottom-right",
          });
        }
      });
    },
  },
};
</script>

<style></style>
