import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './pages/Home/Home'
//Docs
import { Docs } from './pages/Docs/Docs'
import {IntroduccionDocs} from './pages/Docs/pages/Empezando/Introduccion/Introduccion'
import {InstalacionDocs} from './pages/Docs/pages/Empezando/Instalacion/Instalacion'
//Components
import { ComponentsPage } from './pages/ComponentsPage/ComponentsPage'
import { ComponentesUI } from './pages/ComponentsPage/pages/Empezando/Ui/ComponentesUI'
//DragePage
import { DragPage } from './pages/DragPage/DragPage'
//Layout
import { Layout } from './pages/Layout/Layout'


function App() {

  return (
    <>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/Docs/' element={<Docs />}>
            <Route path='Empezando/Introduccion' element={<IntroduccionDocs />} />
            <Route path='Empezando/Instalacion' element={<InstalacionDocs />} />
          </Route>
          <Route path='/Components' element={<ComponentsPage />}>
            <Route path='Empezando/ComponentesUI' element={<ComponentesUI/>} ></Route>
          </Route>
          <Route path='/Drag' element={<DragPage />}></Route>
          <Route path='/Layout' element={<Layout />}></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
