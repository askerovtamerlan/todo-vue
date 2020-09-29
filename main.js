Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello world!",
    items: [],
    emojiexample: "&#129448;",
    search: "",
  },
  watch: {
    search: function () {
      console.log(this.filteredItems);
      console.log("df");
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.name.includes(this.search);
      });

      // console.log(array);

      // return array;
    },
  },
  methods: {
    addToDo() {
      let emojiCode = "1294" + Math.floor(Math.random() * 100);

      let todo = {
        id: this.items.length + 1,
        emoji: emojiCode,
        name: "privet",
        date: "23.05.2020",
      };

      this.items.push(todo);
      // alert("privet");
    },
    deleteToDo(index) {
      this.$delete(this.items, index);
      this.recalculateId();
    },
    recalculateId() {
      let array = this.items.map((item, index) => {
        item.id = index + 1;
      });

      this.$set(this.items, array);
    },
  },
});
