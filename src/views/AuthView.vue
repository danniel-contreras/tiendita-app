<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="bg-gradient-2 w-screen h-screen fixed"></div>

    <div
      class="rounded-2xl not-blur z-50 border w-80 p-8 h-96 px-14 bg-white shadow-lg flex flex-col justify-center"
    >
      <p class="text-3xl font-mono text-gradient">Bienvenido!!</p>
      <Form @submit="onSubmit" :validation-schema="schema">
        <div class="mt-6 flex flex-col items-start">
          <label class="text-sm font-bold text-gradient font-mono">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Escribe tu correo"
            class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
          />
          <ErrorMessage class="text-xs font-mono text-red-500" name="email" />
        </div>
        <div class="mt-6 flex flex-col items-start">
          <label class="text-sm font-bold text-gradient font-mono"
            >Password</label
          >
          <Field
            name="pass"
            type="password"
            placeholder="Escribe tu password"
            class="border outline-none font-mono text-xs py-1 w-full rounded px-2"
          />
          <ErrorMessage class="text-xs font-mono text-red-500" name="pass" />
        </div>
        <div class="border-gradient-2 mt-5 flex justify-center items-center">
          <button class="w-full h-full bg-white rounded-2xl py-1">
            <span class="text-gradient font-semibold text-lg font-mono"
              >Iniciar Sesion</span
            >
          </button>
        </div>
      </Form>
    </div>
    <div
      class="rounded-tr-2xl z-50 rounded-br-2xl w-4 h-80 bg-gradient-1 shadow-lg"
    ></div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import auth from "../api/auth.api";
import { decodeToken, setToken } from "../api/token.api";

export default {
  name: "AuthView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup
        .string()
        .required("El email es requerido")
        .email("Email invalido"),
      pass: yup.string().required("Debes escribir tu password"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values) {
      auth
        .login(values)
        .then(({ data }) => {
          if (data.ok) {
            this.$toast.info(`Bienvenido!!!`, {
              position: "bottom-right",
            });
            const logindata = {
              state: true,
              data: decodeToken(data.token),
            };
            this.$router.go("/");
            this.$store.dispatch("setAuth", logindata);
            setToken(data.token, data.data?.roles.id, data.data?.stores.id);
          }
        })
        .catch(({ response }) => {
          console.log(response)
          if (!response.ok) {
            this.$toast.warning(`Datos invalidos!`, {
              position: "bottom-right",
            });
            return;
          }
          this.$toast.error(`Ah ocurrido un error inesperado!`, {
            position: "bottom-right",
          });
        });
    },
  },
};
</script>
