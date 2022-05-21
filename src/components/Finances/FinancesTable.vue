<template>
  <div
    class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
  >
    <table class="min-w-full leading-normal">
      <thead>
        <tr>
          <th-table name="Usuario" />
          <th-table name="Monto Inicial" />
          <th-table name="Fecha" />
          <th-table name="Total en caja" />
          <th-table name="Acciones" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="box in boxes" :key="box.id">
          <td-table :name="box.users.name" />
          <td-table :name="`$` + Number(box.boxStart)" />
          <td-table :name="formatDate(box.date)" />
          <td-table :name="`$` + Number(box.totalBox)" />
          <td-table>
            <router-link :to="`/finance-details/` + box.id">
              <div class="border-gradient-2 flex justify-center items-center">
                <button
                  class="w-full h-full button-gradient bg-white rounded-2xl py-1 px-3"
                >
                  <span
                    class="text-gradient whitespace-nowrap font-semibold text-xs font-mono"
                    >Ver detalle</span
                  >
                </button>
              </div>
            </router-link>
          </td-table>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TdTable from "../Global/TdTable.vue";
import ThTable from "../Global/ThTable.vue";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";

export default {
  components: { ThTable, TdTable },
  props: {
    boxes: { type: Array },
  },
  methods: {
    formatDate(date) {
      return formatRelative(subDays(new Date(date), 0), new Date(), {
        locale: es,
      });
    },
  },
};
</script>

<style></style>
