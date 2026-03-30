// app/page.tsx
import Navbar from "../app/componenets/Navbar";
import Hero from "../app/componenets/Hero";
import About from "../app/componenets/About";
import Projects from "../app/componenets/Projects";
import Skills from "../app/componenets/skills";
import ContactForm from "../app/componenets/ContactForm";
import Footer from "../app/componenets/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <section id="contact" className="py-12">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
