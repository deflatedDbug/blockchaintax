import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Footer from "@/components/footer"
import Contact  from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Contact/>
      <Footer />
    </main>
  );
}
