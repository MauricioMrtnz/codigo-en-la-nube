import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Header} from './components/header/Header'
import {Home} from './pages/Home/Home'
import {Docs} from './pages/Docs/Docs'
import { ComponentsPage } from './pages/ComponentsPage/ComponentsPage'
import { DragPage } from './pages/DragPage/DragPage'
import { Layout } from './pages/Layout/Layout'


function App() {

  return (
    <>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Docs' element={<Docs/>}></Route>
          <Route path='/Componentes' element={<ComponentsPage/>}></Route>
          <Route path='/Drag' element={<DragPage/>}></Route>
          <Route path='/Layout' element={<Layout/>}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
