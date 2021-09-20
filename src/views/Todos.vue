<template>
  <postItem class="comp" @add-row-bulk="addRowBulk" />
  <Item
    v-for="r in rows.slice().reverse()"
    :key="r.id"
    :post="r"
    @del-row="delRow"
    @bold-row="boldRow(r.id)"
    class="comp"
  >
    {{ r }}
  </Item>
</template>

<script>
import Item from "@/components/item.vue";
import postItem from "@/components/postItem.vue";

export default {
  name: "Todos",
  components: {
    Item,
    postItem,
  },
  methods: {
    delRow(post) {
      if (post.bold) return;
      this.rows = this.rows.filter((row) => row.id !== post.id);
      this.saveRows();
    },
    boldRow(i) {
      this.rows.map((row) => {
        if (row.id === i) row.bold = !row.bold;
      });
      this.saveRows();
    },
    addRowBulk(rows) {
      this.rows = [...this.rows, ...rows];
      this.saveRows();
    },
    saveRows() {
      const parsed = JSON.stringify(this.rows);
      localStorage.setItem("rows", parsed);
    },
  },
  data() {
    return {
      rows: [
        { id: 0, msg: "item 1", bold: false },
        { id: 1, msg: "item 2", bold: false },
        { id: 2, msg: "item 3", bold: false },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("rows")) {
      this.rows = JSON.parse(localStorage.getItem("rows"));
    }
  },
};
</script>