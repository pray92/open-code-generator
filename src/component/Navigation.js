import "./Navigation.css";

export default function Header() {
  return (
    <div className="open-code-generator-header">
      <img
        src={process.env.PUBLIC_URL + "/assets/open-code-generator-icon.png"}
        alt="Open Code Generator"
      >
      </img>
      <h3>open-code-genrator</h3>
    </div>
  );
}