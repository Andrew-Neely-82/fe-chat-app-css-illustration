import Phone from "./components/phone/Phone";
import "./App.scss";

function App() {
  return (
    <main>
      <section className="phone-section">
        <Phone />
      </section>
      <section className="hero">
        <h1 className="title">Simple booking</h1>
        <p className="summary">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
      </section>
    </main>
  );
}

export default App;
