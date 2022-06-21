<template>
  <Form
    @submit="onSubmit"
    :initial-values="product"
    :validation-schema="schema"
  >
    <div
      class="md:mt-6 lg:mt-8 h-full w-full flex flex-col justify-center items-center"
    >
      <div class="w-96 border shadow md:p-5 lg:p-7 rounded flex flex-col">
        <span
          class="font-semibold md:text-sm lg:text-base text-gradient text-center font-mono"
          >{{ title }}</span
        >
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
        <div class="md:mt-3 lg:mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold text-gradient"
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
import products from "../../api/products.api";

export default {
  name: "ProductsForm",
  props: {
    getProducts: {
      type: Function,
    },
    categories: { type: Object },
    stores: { type: Object },
    product: {
      type: Object,
    },
    title: { type: String },
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
      code: yup.string(),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      if (this.product.id) {
        this.put(this.product.id, values);
        return;
      }
      this.post(resetForm, values);
    },
    async post(resetForm, data) {
      if (data.code !== "") {
        const prod = await products.getProductByCode(data.code);
        if (prod.data.ok) {
          this.$toast.error(`Ya existe un producto con este codigo`, {
            position: "bottom-right",
          });
          return;
        }
      }
      products
        .addProduct(data)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getProducts");
            resetForm();
            this.$toast.info(`Se agrego el producto con exito`, {
              position: "bottom-right",
            });
            return;
          }
          this.$toast.warning(`Ah ocurrido un error inesperado`, {
            position: "bottom-right",
          });
        })
        .catch(() => {
          this.$toast.error(`Error Inesperado intente mas tarde`, {
            position: "bottom-right",
          });
        });
    },
    put(id, data) {
      products
        .putProduct(data, id)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getProducts");
            this.$toast.info(`Se actualizo el producto con exito`, {
              position: "bottom-right",
            });
            return;
          }
          this.$toast.warning(`Ah ocurrido un error inesperado`, {
            position: "bottom-right",
          });
        })
        .catch(() => {
          this.$toast.error(`Error Inesperado intente mas tarde`, {
            position: "bottom-right",
          });
        });
    },
  },
};
</script>

<style></style>
