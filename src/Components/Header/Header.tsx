import ToDoLogo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={ToDoLogo} alt="logo" />
    </header>
  );
}
