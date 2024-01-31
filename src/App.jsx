import "./index.css";
import { Navbar, Hero, Product, Phone, Laptop, Footer } from "./components";

function App() {
  return (
    <main className="relative">
      <section className="rounded-bl-[6rem] main-bg padding relative overflow-hidden">
        <Navbar />
        <Hero />
      </section>
      <section className="overflow-hidden padding">
        <Product />
      </section>
      <section className="pt-12">
        <Phone />
      </section>
      <section className="px-8">
        <Laptop />
      </section>
      <section className="pt-12">
        <Footer />
      </section>
    </main>
  );
}

export default App;
