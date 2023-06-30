import './Header.scss'
import logo from '../../assets/icons/daviplataLogo.svg'
import logoHamburguesa from '../../assets/icons/menuHamburguesa.svg'
import logoClose from '../../assets/icons/cerrarIcono.svg'
import { Link } from 'react-router-dom'

export const Header = () => { 
    const headerOpcions = ['Docs','Components','Layout','BetaDrag']
    return (
        <>
            <header className="header">
                <div className="header__logo"> 
                {/* <a href="/"><img src={logo} alt="daviplata logo" className='header__logo__imagen' /></a> */}
                <h2 className='header__logo__texto' > <a href="/">CodeCloud</a> </h2>
                </div>
                <div className="header__hamburguesa">
                    <img src={logoHamburguesa} alt="logo hamburguesa" className="header__hamburguesa__icon" />
                </div>
                <div className="header__close">
                    <img src={logoClose} alt="logo hamburguesa" className="header__close__icon" />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav__lista"> 
                        {
                            headerOpcions.map((opcion,index)=>{
                                return (
                                    <>
                                    <li className="header__nav__lista__item" key={index}>
                                        <Link to={opcion}>{opcion}</Link>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}