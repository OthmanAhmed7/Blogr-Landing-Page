import "./index.css";
import { Navbar, Hero, Product, Phone, Laptop, Footer } from "./components";

function App() {
  return (
    <main>
      <div className="rounded-bl-[6rem] main-bg padding">
        <img
          src="/assets/bg-pattern-intro-desktop.svg"
          alt="desktop pattern"
          className="absolute scale-[250%] sm:scale-[200%] md:scale-[150%] lg:scale-[100%] md:translate-y-[-20%]"
        />
        <Navbar />
        <Hero />
      </div>
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
