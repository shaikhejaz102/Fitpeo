import React, {Suspense} from 'react'
import Routes from './Routes/Routes'
import './App.scss'

function App() {

  return (
    <>
    <Suspense fallback={"loading"}>
      <Routes/>
    </Suspense>
    </>
  )
}

export default App
