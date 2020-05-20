import { mapGetters, mapMutations } from "vuex";
import categoryModal from "../CategoryModal/CategoryModal.vue";

export default {
  name: "category-dropdown",
  components: { categoryModal },
  props: ["label", "value"],
  data() {
    return {
      isCategoryModalOpen: false,
      categoryName: "",
    };
  },
  computed: {
    ...mapGetters(["categories"]),
    selectedValue: {
      get() {
        return this.value;
      },
      set(selectedValue) {
        this.$emit("input", selectedValue);
      },
    },
  },
  methods: {
    ...mapMutations(["addCategory"]),
    storeCategory() {
      this.addCategory(this.categoryName);
      this.isCategoryModalOpen = false;
    },
  },
};
