/* eslint-disable jsx-a11y/alt-text */

import './App.scss';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ImgPerfil from './img/eu.jpg';
import Footer from './Components/Footer';
import Projetos from './Components/Projetos';
// import games from './img/games.png';
// import login from './img/form.png';
// import recipe from './img/recipe.png';
// import toDo from './img/to-do.png';

function App() {
  const nomeEmpresa = 'DevFolio';

//   const listagemProjetos = [
//     {
//         title: 'História dos VideoGames',
//         image: games,
//         description: 'Primeiro projeto realizado na disciplina de FrontEnd',
//         codeLink: 'Código',
//         site: 'Site'
//     },
//     {
//         title: 'Formulário de login',
//         image: login,
//         description: 'Formulário de login com background degradê animado',
//         codeLink: 'Código',
//         site: 'Site'
//     },
//     {
//         title: 'Organizador de receitas',
//         image: recipe,
//         description: 'Organizador de receitas dinâmico',
//         codeLink: 'Código',
//         site: 'Site'
//     },
//     {
//         title: 'To-Do List',
//         image: toDo,
//         description: 'Lista de tarefas',
//         codeLink: 'Código',
//         site: 'Site'
//     }
// ];

  return (
   <>
      <Header empresa={nomeEmpresa}/>
      <main>
        <Banner>
          <h2>Mariana Pacheco</h2>
          <p>Olá! Me chamo Mariana, tenho 25 anos, moro em Porto Alegre - RS, sou formada em Direito e recentemente decidi realizar a transição de carreira. 
            Desde maio, no curso Certified Tech Developer, venho estudando HTML, CSS, JavaScript, React, Java, MySQL e banco de dados, progração orientada a objetos, além de desenvolver as soft skills tão necessárias para o dia-a-dia de uma desenvolvedora.
          </p>
          <img id="#imgPerfil" alt="Imagem de perfil"src={ImgPerfil}/>
        </Banner>
        <Projetos />
      </main>
      <Footer/>
   </>
  );
}

export default App;
