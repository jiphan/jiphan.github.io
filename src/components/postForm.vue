<template>
  <form>
      <div>
        <input type="text" name="name" class="field" placeholder="Name"/>
        <input type="text" name="email" class="field" placeholder="Options" />
        <input type="submit" value="Submit">
      </div>
      <div class="textarea">
        <textarea name="com" class="field" placeholder="Comment"/>
      </div>
    </form>
</template>

<script>
export default {
  name: 'postForm',
  props: {
    msg: String
  }
}
</script>
<style scoped>
div {
    display: flex;
}
.field {
  width: 100%;

  box-sizing: border-box;
  padding: 2px 4px 3px;
  border: 1px solid Gainsboro;
  font: 13px sans-serif;
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