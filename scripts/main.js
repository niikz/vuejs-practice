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
  title: ''
}

const app = Vue.createApp({
  data () {
    return appData
  }
})

app.mount('#app')
