<template>
  <Form @submit="onSubmit" :initial-values="old" :validation-schema="schema">
    <div class="mt-8 h-full w-full flex flex-col justify-center items-center">
      <div class="w-96 border shadow p-7 rounded flex flex-col">
        <span class="font-semibold text-xl text-center font-mono"
          >Agregar nuevo Producto</span
        >
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Nombre</label
          >
          <Field
            placeholder="Escribe el nombre de el producto"
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
            >Stock</label
          >
          <Field
            placeholder="Escribe el stock de el producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="stock"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="stock"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Stock Minimo</label
          >
          <Field
            placeholder="Escribe el stock minimo de el producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="minimunStock"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="minimunStock"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Precio</label
          >
          <Field
            placeholder="Escribe el precio de el producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="price"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="price"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Codigo</label
          >
          <Field
            placeholder="Escribe el codigo de el producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="code"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="code"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Categoria</label
          >
          <Field
            as="select"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="categoriesId"
          >
            <option value="" selected>Selecciona la categoria</option>
            <option
              v-for="cat in categories"
              v-bind:key="cat.id"
              :value="cat.id"
            >
              {{ cat.name }}
            </option>
          </Field>

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="categoriesId"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Sucursal</label
          >
          <Field
            as="select"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="storesId"
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
            name="storesId"
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
import products from "../../api/products.api";

export default {
  name: "ProductsForm",
  props: {
    getProducts: {
      type: Function,
    },
    categories: { type: Object },
    stores: { type: Object },
  },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object({
      storesId: yup
        .number()
        .required("Debes seleccionar la sucursal")
        .typeError("Debes seleccionar la sucursal"),
      categoriesId: yup
        .number()
        .required("Debes seleccionar la categoria")
        .typeError("Debes seleccionar la categoria"),
      name: yup.string().required("Debes escribir el nombre"),
      price: yup
        .number()
        .required("El precio es requerido")
        .typeError("Precio invalido"),
      stock: yup
        .number()
        .required("El stock es requerido")
        .typeError("stock invalido"),
      minimunStock: yup
        .number()
        .required("El stock minimo es requerido")
        .typeError("Stock minimo invalido"),
      code: yup.string().required("Debes escribir el codigo"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      products.addProduct(values).then(({ data }) => {
        if (data.ok) {
          this.$emit("getProducts");
          resetForm();
          this.$toast.info(`Se agrego el producto con exito`, {
            position: "bottom-right",
          });
        }
      });
    },
  },
};
</script>

<style></style>
