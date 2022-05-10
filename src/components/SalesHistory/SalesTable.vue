<template>
  <div class="py-4 overflow-x-auto mt-6">
    <div
      class="inline-block min-w-full border shadow-xl rounded-lg overflow-hidden"
    >
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th-table name="Fecha" />
            <th-table name="Total" />
            <th-table name="Acciones" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" v-bind:key="sale.id">
            <td-table :name="formatDate(sale.dateOfSale)" />
            <td-table :name="`$${sale.total}`" />
            <td-table>
              <div class="border-gradient-2 flex justify-center items-center">
                <button
                  type="submit"
                  class="w-full h-full button-gradient bg-white rounded-2xl py-1 px-3"
                >
                  <span class="text-gradient whitespace-nowrap font-semibold text-xs font-mono"
                    >Ver detalle</span
                  >
                </button>
              </div>
            </td-table>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ThTable from "../Global/ThTable.vue";
import { formatRelative, subDays } from "date-fns";
import { es } from "date-fns/locale";
import TdTable from "../Global/TdTable.vue";

export default {
  components: { ThTable, TdTable },
  props: {
    sales: { type: Object },
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
