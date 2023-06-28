import './Header.scss'
import logo from '../../assets/icons/daviplataLogo.svg'

export const Header = () => { 
    return (
        <>
            <header className="header">
                <div className="header__logo"> 
                {/* <a href="/"><img src={logo} alt="daviplata logo" className='header__logo__imagen' /></a> */}
                <h2 className='header__logo__texto' > <a href="/">CodeCloud</a> </h2>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav__lista"> 
                        <li className="header__nav__lista__item">
                             <a href="Docs">Docs</a>
                        </li>
                        <li className="header__nav__lista__item">
                             <a href="Componentes">Components</a>
                        </li>
                        <li className="header__nav__lista__item">
                             <a href="Layout">Layout</a>
                        </li>
                        <li className="header__nav__lista__item">
                             <a href="Drag">Beta Drag</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}