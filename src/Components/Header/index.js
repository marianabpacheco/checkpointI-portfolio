/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({ empresa }) => {


    return (
        <>
            <nav id="#header "className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#banner">{empresa}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#banner">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#rodape">Contato</a>
                            </li>
                            
                        </ul>
                    
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;