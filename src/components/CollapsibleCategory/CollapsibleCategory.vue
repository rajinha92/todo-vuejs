<template>
  <ul class="collapsible">
    <li v-for="category in categories" :key="category">
      <div class="collapsible-header">
        <span>{{ category }}</span>
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="collapsible-body">
        <task-list :tasks="tasksByCategory(category)" />
      </div>
    </li>
  </ul>
</template>

<script src="./component.js"></script>

<style src="./styles.css"></style>
