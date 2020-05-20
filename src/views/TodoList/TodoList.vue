<template>
  <div id="app-container">
    <h1 class="title center-align">{{ title }}</h1>
    <span class="info-message">{{ hint }}</span>
    <listener-input @onAddTask="storeTask"></listener-input>
    <a href="#!" @click.prevent="advanced = !advanced">Show advanced</a>
    <transition name="fade" mode="out-in">
      <category-dropdown
        v-if="advanced"
        v-model="category"
        :label="categoriesLabel"
      ></category-dropdown>
    </transition>
    <div class="content">
      <collapsible-category></collapsible-category>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style src="./styles.css"></style>
