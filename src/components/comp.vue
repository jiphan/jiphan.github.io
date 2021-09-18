<template>
    <div :class="post.bold ? 'emphasis' : ''" class="show">
        <span class="">{{post.msg}}</span>
        <span class="hide">
          <i class="fas fa-bold" @click="$emit('bold-row')"></i> 
          <i class="far fa-copy" @click="copyTC(post.msg)"></i> 
          <i class="fas fa-times" @click="$emit('del-row')"></i> 
        </span>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    post: Object
  },
  methods: {
    copyTC(text) {
      navigator.clipboard.writeText(text);
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  font: 14px sans-serif;
  text-decoration: none;
}
.emphasis {
  font-weight: bold;
}
i {
  padding: 0px 5px;
  cursor: pointer;
}
span {
  overflow-wrap: break-word;
  max-width: 80%;
  text-align: left;
}
span.hide {
  display: none;
}
.show:hover .hide {
  display: inline;
}
</style>