import { Header } from '../../components/Header/header';
import './home.css';

export const Home = () => {
  const app =  document.querySelector('#app');

  app.innerHTML = Header();
};
