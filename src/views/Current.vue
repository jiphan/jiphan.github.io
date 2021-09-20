<template>
  <postItem class="comp" @add-row="addRow" />
  <tradingview/>
</template>

<script>
import postItem from "@/components/postItem.vue";
import tradingview from "@/components/tradingview.vue";
export default {
  name: "Dev",
  components: {
    postItem,
    tradingview
  },
  methods: {
    addRow() {
      console.log("added");
    },
  },
};
</script>

<style>
</style>