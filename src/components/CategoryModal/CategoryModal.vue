<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="center-align">Create a New Category</h3>
          </div>

          <div class="modal-body">
            <input
              type="text"
              v-model="categoryName"
              placeholder="Category Name"
            />
          </div>

          <div class="modal-footer right-align">
            <button
              class="waves-effect waves-light btn blue lighten-5 grey-text"
              @click="$emit('close')"
            >
              Close
            </button>
            <button
              style="margin-left: 15px;"
              class="waves-effect waves-light btn blue accent-1"
              @click="$emit('saveCategory')"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./component.js"></script>

<style src="./styles.css"></style>
