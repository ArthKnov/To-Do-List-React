import ToDoLogo from "../../assets/logo.svg";
import "./Header.css";

export function Header() {
  return (
    <header>
      <img src={ToDoLogo} alt="logo" />
    </header>
  );
}
