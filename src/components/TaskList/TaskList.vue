<template>
  <ul>
    <task-item v-for="task in tasks" :key="task.description" :task="task">
    </task-item>
  </ul>
</template>

<script src="./component.js"></script>
