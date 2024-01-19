import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import ContactHeader from "./Components/Contact-Header/ContactHeader";
import ContactForm from "./Components/Contact-Form/ContactForm";

export default function App() {
  return (
    <div>
      <Navigation />
      <main className="main_content">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}
