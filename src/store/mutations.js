import _ from "lodash";

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  addCategory(state, category) {
    state.categories.push(category);
  },
  setTasks(state, tasks) {
    state.tasks = tasks;
  },
  addTask(state, { description, category }) {
    if (
      !~_.findIndex(
        state.tasks,
        (t) => t.description === description && t.category === category
      ) &&
      description !== ""
    )
      state.tasks.push({
        description,
        category,
        done: false,
      });
  },
  toggleDone(state, task) {
    const taskIndex = _.findIndex(state.tasks, (t) => t === task);
    state.tasks[taskIndex].done = !state.tasks[taskIndex].done;
  },
  updateDescription(state, { task, description }) {
    const taskIndex = _.findIndex(state.tasks, (t) => t === task);
    state.tasks[taskIndex].description = description;
  },
  removeTask(state, task) {
    const taskIndex = _.findIndex(state.tasks, (t) => t === task);
    state.tasks.splice(taskIndex, 1);
  },
};
