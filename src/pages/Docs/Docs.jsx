import './Docs.scss'
import {ListaOpciones} from '../../components/listaOpciones/ListaOpciones'
import { Route, Routes, Outlet } from 'react-router-dom'



export const Docs = () => {
    return (
      <main>
        <nav className='docNav'>
            <ListaOpciones
                title='Empezando'
                ListaOpciones={['Introduccion', 'Instalacion', 'Primeros Pasos']}
            ></ListaOpciones>
                 <ListaOpciones
                title='Buenas Practicas'
                ListaOpciones={['Scss', 'React', 'Angular']}
              ></ListaOpciones>
                 <ListaOpciones
                title='Componentes'
                ListaOpciones={['Introduccion', 'Instalacion', 'Primeros Pasos']}
              ></ListaOpciones>
                 <ListaOpciones
                title='Iconos'
                ListaOpciones={['Introduccion', 'Instalacion', 'Primeros Pasos']}
              ></ListaOpciones>
        </nav>
        <section className='documentacion'>
          <Outlet/>
        </section>
      </main>
    )
}