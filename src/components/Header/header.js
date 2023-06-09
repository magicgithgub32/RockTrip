import { Nav } from '../nav/nav';
import './header.css';

export const Header = () => {
  return `
    <header style="background-color: var(--eh-color-blue--cello)">
    hola
      <div id="nav-logo">
        <a href="#">
          <i class="fa-solid fa-circle"></i>
        </a>
      </div>
      ${Nav()}
      <div>
        <i class="fa-solid fa-user"></i>
      </div>
    </header>
  `;
};
