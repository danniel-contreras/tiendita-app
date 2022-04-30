<template>
  <Form
    @submit="onSubmit"
    :initial-values="categorie"
    :validation-schema="schema"
  >
    <div class="mt-20 h-full w-full flex flex-col justify-center items-center">
      <div class="w-96 border shadow p-7 rounded flex flex-col">
        <span class="font-semibold text-xl text-center font-mono">{{
          title
        }}</span>
        <div class="mt-4 flex flex-col">
          <label
            for="name"
            class="font-mono text-xs font-semibold from-gray-600"
            >Nombre</label
          >
          <Field
            placeholder="Escribe el nombre del producto"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="name"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="name"
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
import categories from "../../api/categories.api";

export default {
  name: "CategoriesForm",
  props: {
    getCategories: {
      type: Function,
    },
    title: { type: String },
    categorie: { type: Object, required: false },
  },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object({
      name: yup.string().required("El nombre es requerido"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      if (this.categorie.id) {
        this.put(values, this.categorie.id);
        return;
      }
      this.post(values, resetForm);
    },
    post(data, reset) {
      categories.addCategorie(data).then(({ data }) => {
        if (data.ok) {
          this.$emit("getCategories");
          reset();
          this.$toast.info(`Se agrego el tipo con exito`, {
            position: "bottom-right",
          });
        }
      });
    },
    put(data, id) {
      categories.putCategorie(data, id).then(({ data }) => {
        if (data.ok) {
          this.$emit("getCategories");
          this.$toast.info(`Se actualizo la categoria con exito`, {
            position: "bottom-right",
          });
        }
      });
    },
  },
};
</script>

<style></style>
