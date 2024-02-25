//styles
import styles from "./Header.module.css";
//Assets
import igniteLogo from "../../assets/Ignite_logo.svg";

function Header() {
  return (
    <strong className={styles.header}>
      <img src={igniteLogo} alt="logo ignite" />
    </strong>
  );
}

export { Header };
