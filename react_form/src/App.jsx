import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import { UserForm } from './components/UserForm'
import { UserFormObjecUser } from './components/UserFormObjecUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserForm/> */}
      <UserFormObjecUser/>
    </>
  )
}

export default App
