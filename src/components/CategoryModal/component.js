export default {
  name: "category-modal",
  props: ["value"],
  computed: {
    categoryName: {
      get() {
        return this.value;
      },
      set(categoryName) {
        this.$emit("input", categoryName);
      },
    },
  },
};
