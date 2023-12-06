import styles from "./Header.module.scss";
import logo from "../../../public/logo-colorful.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <button className={styles.header__button}>Войти</button>
    </div>
  );
};

export default Header;
