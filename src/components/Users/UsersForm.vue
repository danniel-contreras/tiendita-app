<template>
  <Form @submit="onSubmit" :initial-values="user" :validation-schema="schema">
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
            for="lastname"
            class="font-mono text-xs font-semibold from-gray-600"
            >Apellido</label
          >
          <Field
            placeholder="Escribe el numero de telefono"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="lastname"
          />

          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="lastname"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="email"
            class="font-mono text-xs font-semibold from-gray-600"
            >Email</label
          >
          <Field
            placeholder="Escribe el nombre de el proveedor"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="email"
          />
          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="email"
          />
        </div>
        <div v-show="!user.id" class="mt-4 flex flex-col">
          <label
            for="pass"
            class="font-mono text-xs font-semibold from-gray-600"
            >Contraseña</label
          >
          <Field
            placeholder="Escribe el nombre de el proveedor"
            type="text"
            class="w-full text-xs py-1 px-2 border"
            name="pass"
          />
          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="pass"
          />
        </div>
        <div class="mt-4 flex flex-col">
          <label
            for="storeId"
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
        <div class="mt-4 flex flex-col">
          <label
            for="rolId"
            class="font-mono text-xs font-semibold from-gray-600"
            >Rol</label
          >
          <Field
            name="rolId"
            as="select"
            class="w-full text-xs py-1 px-2 border"
          >
            <option value="" selected>Selecciona el rol</option>
            <option v-for="rol in roles" v-bind:key="rol.id" :value="rol.id">
              {{ rol.role }}
            </option>
          </Field>
          <ErrorMessage
            class="text-xs font-mono text-red-500 mt-1"
            name="rolId"
          />
        </div>
       <div class="border-gradient-2 mt-5 flex justify-center items-center">
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
import users from "../../api/users.api";

export default {
  name: "UsersForm",
  props: {
    getUsers: {
      type: Function,
    },
    stores: {
      type: Object,
    },
    user: { type: Object },
    title: { type: String },
    roles: { type: Object },
  },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object({
      rolId: yup
        .number()
        .required("Debes seleccionar el rol")
        .typeError("Debes seleccionar el rol"),
      storeId: yup
        .number()
        .required("Debes seleccionar la sucursal")
        .typeError("Debes seleccionar la sucursal"),
      name: yup.string().required("Debes escribir el nombre"),
      lastname: yup.string().required("Debes escribir el apellido"),
      email: yup.string().required("Debes escribir el email"),
      pass: yup.string().required("Debes escribir la contraseña"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values, { resetForm }) {
      if (this.user.id) {
        this.put(values);
        return;
      }
      this.post(values, resetForm);
    },
    post(data, resetForm) {
      users
        .addUser(data)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getUsers");
            resetForm();
            this.$toast.info(`Se agrego el usuario`, {
              position: "bottom-right",
            });
          }
        })
        .catch(() => {
          this.$toast.error("Ah ocurrido un error inesperado");
        });
    },
    put(data) {
      users
        .putUser(data, this.user.id)
        .then(({ data }) => {
          if (data.ok) {
            this.$emit("getUsers");
            this.$toast.info(`Se actualizo el usuario`, {
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
