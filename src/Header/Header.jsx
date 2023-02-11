import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <>
      <section className="section__header">
        <div className="container">
          <div className="header__block">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <header className="header">
              <ul className="header__items">
                <li>
                  <Link to="/choising" className="header__links">
                    Почему нас выбирают?
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="header__links">
                    Часто задаваемые вопросы
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="header__links">
                    Все заявки
                  </Link>
                </li>
                <li>
                  <Link to="/plugins" className="header__links">
                    Плагины
                  </Link>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
