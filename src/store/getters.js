const taskSort = (task) => (task.done ? 1 : -1);

export const getters = {
  tasks(state) {
    return state.tasks.sort(taskSort);
  },
  tasksByCategory: (state) => (category) => {
    return state.tasks
      .filter((task) => task.category === category)
      .sort(taskSort);
  },
  categories(state) {
    return state.categories;
  },
};
