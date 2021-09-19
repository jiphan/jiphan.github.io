<template>
      <div>
        <input 
          type="text" 
          placeholder="New Post" 
          v-model="content" 
          class="field" 
          @keydown.enter="onPost" />
        <button 
          :disabled="content.length == 0" 
          @click="onPost" 
          style="outline: none;"> Post </button>
      </div>
</template>

<script>
export default {
  name: 'postItem',
  props: {
    msg: String
  },
  methods: {
    onPost() {
      if (!this.content) return
      // console.log('post', ++this.postCount)
      this.$emit('add-row', {
        id: ++this.postCount,
        msg: this.content,
        bold: false
      })
      this.content = ''
    }
  },
  data() {
      return {
          content: '',
          postCount: 3
      }
  }
}
</script>
<style scoped>
div {
    display: flex;
    user-select: none;
}
.field {
  width: 100%;

  box-sizing: border-box;
  padding: 2px 4px 3px;
  border: 1px solid Gainsboro;
  font: 14px sans-serif;
  outline: none;
  transition: color .25s, border-color .25s;
}
.field:focus {
  border-color: rgb(129, 162, 190) !important;
}
textarea.field {
  min-height: 6em;
  resize: none;
}

</style>