import React, { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctors appointment",
    day: "2022/8/18",
    reminder: true
  },
  {
    id: 2,
    text: "Go to Gym",
    day: "2022/6/12",
    reminder: true
  },
  {
    id: 3,
    text: "Hangout with friends",
    day: "2022/10/18",
    reminder: false
  }])
  // Add Task
  const addTask = (task) => {
    console.log(task)
  }
  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> {
      return task.id !== id
    }))
  }
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=> task.id === id ? {...task,reminder:!task.reminder}:task)
    )
  }
  return (
    <div className='container'>
      <Header title="Task Tracker"></Header>
      <AddTask onAdd = {addTask}></AddTask>
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle= {toggleReminder}></Tasks>:"No Tasks To Show"}
    </div>
  )
}

export default App;