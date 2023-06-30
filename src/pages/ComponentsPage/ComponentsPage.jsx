import './ComponentsPage.scss'
import {ListaOpciones} from '../../components/listaOpciones/ListaOpciones'
import {  Outlet } from 'react-router-dom'



export const ComponentsPage = () => {
    return (
        <main>
          <nav className='docNav'>
              <ListaOpciones
                  title='Empezando'
                  ListaOpciones={['ComponentesUI']}
              ></ListaOpciones>
              <ListaOpciones
                  title='Headers'
                  ListaOpciones={['Negocio','Personas']}
              ></ListaOpciones>
               <ListaOpciones
                  title='Buttons'
                  ListaOpciones={['Buttons']}
              ></ListaOpciones>
               <ListaOpciones
                  title='Forms'
                  ListaOpciones={['Text','CheckBox','Radio','Select','TextArea','Input']}
              ></ListaOpciones>
              
          </nav>
          <section className='documentacion'>
          <Outlet/>
          </section>
        </main>
      )
}
