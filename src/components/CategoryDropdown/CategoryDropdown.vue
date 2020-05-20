<template>
  <div class="input-holder">
    <select v-model="selectedValue">
      <option :value="category" :key="category" v-for="category in categories">
        {{ category }}
      </option>
    </select>
    <div class="right-align">
      <a href="#!" @click.prevent="isCategoryModalOpen = true">Add New</a>
    </div>

    <category-modal
      v-if="isCategoryModalOpen"
      v-model="categoryName"
      @close="isCategoryModalOpen = false"
      @saveCategory="storeCategory"
    ></category-modal>
  </div>
</template>

<script src="./component.js"></script>
