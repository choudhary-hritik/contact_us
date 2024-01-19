export default function Buttons({ isSecondary, icon, text }) {
  return (
    <button className={isSecondary ? "secondary-btn" : "primary-btn"}>
      {icon}
      {text}
    </button>
  );
}
