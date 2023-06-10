import './footer.css';

export const Footer = () => {
  return `
    <footer style="background-color: var(--eh-color-blue--cello);">
      <div>
        <div>
          <a href="#"><i class="fa-solid fa-circle"></i></a>
        </div>

        <div>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>
      
      <div>
        <div>
          <h3>About</h3>
          <a href"#">Company</a>
          <a href"#">Contacts</a>
        </div>

        <div>
          <h3>Travel</h3>
          <a href"#">Excursions</a>
          <a href"#">Guides</a>
        </div>
      </div>

      <div>
        <ul>
          <li><a href="#">Contract</a></li>
          <li><a href="#">Privacy & Cookies</a></li>
          <li><a href="#">Site Map</a></li>
        </ul>

        <div>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  `;
};
