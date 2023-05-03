export const state = () => ({
  todos: [
    {
      id: 1,
      task: 'タスク１'
    },
    {
      id: 2,
      task: 'タスク２'
    },
    {
      id: 3,
      task: 'タスク３'
    },
    {
      id: 4,
      task: 'タスク４'
    },
    {
      id: 5,
      task: 'タスク５'
    },
    {
      id: 6,
      task: 'タスク６'
    },
    {
      id: 7,
      task: 'タスク７'
    },
    {
      id: 8,
      task: 'タスク８'
    },
    {
      id: 9,
      task: 'タスク９'
    },
    {
      id: 10,
      task: 'タスク１０'
    }
  ]
})

export const getters = {
  getTodos(state) {
    return state.todos
  }
}

export const mutations = {
  addTodo(state, payload) {
    state.todos.push(payload.todo)
  },
  updateTodo(state, payload) {
    state.todos.forEach((todo, index) => {
      if (todo.id === payload.todo.id) {
        state.todos.splice(index, 1, payload.todo)
      }
    })
  },
  removeTodo(state, payload) {
    state.todos.forEach((todo, index) => {
      if (todo.id === payload.todo.id) {
        state.todos.splice(index, 1)
      }
    })
  }
}
