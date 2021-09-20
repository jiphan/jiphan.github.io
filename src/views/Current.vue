<template>
  <postItem @preview="sendPreview" class="comp" />
  <imagePreview v-bind:preview="preview" class="comp" />
</template>

<script>
import postItem from "@/components/postItem.vue"
import imagePreview from "@/components/imagePreview.vue"
export default {
  name: "Dev",
  components: {
    postItem,
    imagePreview,
  },
  methods: {
    sendPreview() {
      console.log('hi')
    }
  },
  data() {
    return {
      preview: []
    }
  }
};
</script>

<style>
</style>