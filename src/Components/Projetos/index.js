/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import games from '../../img/games.png';
import login from '../../img/form.png';
import recipe from '../../img/recipe.png';
import toDo from '../../img/to-do.png';


function Projetos() {
    const listagemProjetos = [
        {
            title: 'História dos vídeo games',
            image: games,
            description: 'Primeiro projeto realizado na disciplina de FrontEnd',
            codeLink: 'https://github.com/marianabpacheco/projeto01-front',
            site: 'https://marianabpacheco.github.io/projeto01-front/'
        },
        {
            title: 'Formulário de login',
            image: login,
            description: 'Formulário de login com background degradê animado',
            codeLink: 'https://github.com/marianabpacheco/formulario-frontEnd',
            site: 'https://marianabpacheco.github.io/formulario-frontEnd/'
        },
        {
            title: 'Organizador de receitas',
            image: recipe,
            description: 'Organizador de receitas dinâmico',
            codeLink: 'https://github.com/marianabpacheco/checkpointI-FrontEndII',
            site: 'https://marianabpacheco.github.io/checkpointI-FrontEndII/'
        },
        {
            title: 'To-Do List',
            image: toDo,
            description: 'Lista de tarefas',
            codeLink: 'https://github.com/marianabpacheco/CheckpointII-FrontEndII',
            site: 'https://marianabpacheco.github.io/CheckpointII-FrontEndII/'
        }
    ];



    return (
        <>
            <div id="projects">
                <h2>Meus projetos</h2>
                <section className="cardContainer">

                    {listagemProjetos.map((item) =>
                        <div className="card">
                            <img alt="Imagem do projeto" id="projectImg" src={item.image}></img>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <ul>
                                <li>
                                    <a target="blank" href={item.codeLink}>Acesse o código</a>
                                    </li>
                                <li>
                                    <a target="blank" href={item.site}>Acesse o site</a>
                                    </li>
                            </ul>
                        </div>
                    )}
                </section>
            </div>

        </>
    )
}

export default Projetos;