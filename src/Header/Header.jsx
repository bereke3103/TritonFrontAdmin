import { NavLink, Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className="section__header">
        <div className="container">
          <header className="header">
            <ul className="header__items">
              <li>
                <Link to="/choising" className="header__links">
                  Почему нас выбирают?
                </Link>
              </li>
              <li>
                <Link to="/faq" className="header__links">
                  Остались Вопросы?
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
      </section>
      <Outlet />
    </>
  );
};

export default Header;
