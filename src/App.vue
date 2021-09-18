<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <postItem class="comp" @add-row="addRow"/>
  <Item 
    v-for="r in rows"
    :key="r.id"
    :post="r"
    @del-row="delRow(r.id)"
    @bold-row="boldRow(r.id)"
  class="comp"> {{r}} </Item>
  <HelloWorld class="comp" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Item from './components/comp.vue'
import postItem from './components/postItem.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Item,
    postItem
  },
  methods: {
    delRow(i) {
      this.rows = this.rows.filter(row => row.id !== i)
    },
    boldRow(i) {
      this.rows.map((row) => {
        if (row.id === i) row.bold = !row.bold
      })
    },
    addRow(row) {
      this.rows = [...this.rows, row]
    }
  },
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0],
      rows: [
        {id: 0, msg: "item 1", bold: false}, 
        {id: 1, msg: "item 2", bold: false}, 
        {id: 2, msg: "item 3", bold: false}
      ]
    }
  }
}

const tabs = [
  {
    name: "Home",
    component: HelloWorld
  },
  {
    name: "Content",
    component: Item
  }
]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.comp {
  background-color: white;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 4px 0 rgba(24, 20, 20, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
  max-width: 480px;
}
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
body::-webkit-scrollbar {
  display: none;
}
</style>
