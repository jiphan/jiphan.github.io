<template>
  <postItem class="comp" @add-row="addRow" />
</template>

<script>
import postItem from "@/components/postItem.vue";
export default {
  name: "Dev",
  components: {
    postItem,
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