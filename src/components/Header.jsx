import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="Money bag image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
