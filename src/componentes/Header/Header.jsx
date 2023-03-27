import style from "../Header/Header.module.css";
import imgNav from "../../assets/Nav.jpg";

const Header = () => {
  return (
    <section className={style.section}>
      <nav className={style.nav}>
          <ul className={style.ul}>
            <li className={style.filtro}>Home</li>
            <li className={style.filtro}>Plantas Internas</li>
            <li className={style.filtro}>Contatos</li>
          </ul>
        </nav>
      <div className={style.divNav}>
        <img className={style.imgNav} src={imgNav} />
        <img className={style.imgNav2} src={imgNav} />
        <img className={style.imgNav3} src={imgNav} />
        <title className={style.title}>Casa das plantas</title>

      </div>
    </section>
  );
};

export default Header;
