import './Docs.scss'
import {ListaOpciones} from './components/ListaOpciones'


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
                ListaOpciones={['Introduccion', 'Instalacion', 'Primeros Pasos']}
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

        </section>
      </main>
    )
}