import { Footer } from '../../components/Footer/footer';
import { Header } from '../../components/Header/header';
import './home.css';

export const Home = () => {
  const app =  document.querySelector('#app');

  app.innerHTML = Header();
  app.innerHTML += `
    <main style="height: 75vh;">Hola</main>
  `
  app.innerHTML += Footer();
};
