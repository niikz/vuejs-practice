const tasks = [
  { id: 1, done: false, title: '昼寝をする' },
  { id: 2, done: false, title: '勉強をする' },
  { id: 3, done: true, title: 'ゲームをする' },
  { id: 4, done: true, title: '料理をする' }
]

const appData = {
  appName: 'TO-DO APP',
  tasks: tasks,
  done: false,
  title: '',
  edit: 0
}

const app = Vue.createApp({
  data () {
    return appData
  },
  created () {
    this.loadTasks()
  },
  methods: {
    changeStatus (id) {
      this.tasks.forEach(task => {
        if (task.id === id) task.done = !task.done
      })
    },
    editTask (id) {
      this.edit = id
    },
    deleteTask (id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    addTask () {
      const task = {
        id: Number(Date.now()),
        done: false,
        title: this.title
      }
      if (this.title.length > 0) this.tasks.push(task)
      this.saveTasks()
    },
    saveTasks () {
      const data = JSON.stringify(this.tasks)
      localStorage.setItem('task', data)
      this.title = ''
      this.edit = 0
    },
    loadTasks () {
      const data = localStorage.getItem('task')
      if (data !== null) this.tasks = JSON.parse(data)
    }
  }
})

app.mount('#app')
