<template>
  <div class="input-holder">
    <input
      id="task_description"
      type="text"
      v-model="taskDescription"
      placeholder="Tap the mic to speak, or type and press ENTER"
      @keypress.prevent.enter="addTask"
    />
    <i
      class="fas fa-microphone"
      :class="
        recording
          ? 'fa-microphone-alt animate__animated animate__heartBeat animate__infinite'
          : ''
      "
      @click.prevent="listen"
    ></i>
  </div>
</template>

<script src="./component.js"></script>
