
new Vue({
    el: "#app-vue",
    data() {
        return {
            lists: [
                "Mackbook Pro",
                "Google pixel 4a",
                "Microsoft surface laptop 2",
            ],
            currentLists: "",
        };
    },
    methods: {
        addList: function () {
            this.lists.push(this.currentList);
            this.currentList = "";
        },
        removeList: function (index) {
            this.lists.splice(index, 1);
        },
    },
});
