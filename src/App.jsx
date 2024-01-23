import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("I love number")

  function updateTitle() {
    setTitle("I love number " + Math.random())
  }

  return (
    <>
    <button onClick={updateTitle}>Update title</button>
      <Header title="My name is Sukrit"></Header>
      <Header title={title}></Header>
    </>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
