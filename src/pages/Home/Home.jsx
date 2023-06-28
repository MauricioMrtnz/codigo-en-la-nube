import './Home.scss'
import logo from '../../assets/icons/daviplataLogo.svg'

export const Home = () => {
    return (
       <main>
        <section className='home'>
            <img className='home__logo' src={logo} alt="logo daviplata" />
            <h1 className='home__title' >CODE CLOUD</h1>
            <h2 className='home__subTitle'>La biblioteca para interfaces daviplata</h2>
        </section>
       </main>
    )
 }