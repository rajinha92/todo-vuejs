<template>
  <li class="task-holder" @click.prevent.stop="() => toggleDone(task)">
    <div v-if="editing" class="edit-box">
      <input
        type="text"
        v-model="editingDescription"
        @keypress.prevent.enter="editFinished"
        @click.prevent.stop=""
      />
    </div>
    <div v-else class="task-description" :class="task.done ? 'done' : ''">
      {{ task.description }}
    </div>
    <div class="task-action">
      <i class="fas fa-pencil-alt" @click.prevent.stop="edit"></i>
      <i class="fas fa-times" @click.prevent.stop="remove"></i>
    </div>
  </li>
</template>

<script src="./component.js"></script>

<style src="./styles.css"></style>
