import Compatibilities from "./components/Compatibilities";
import Header from "./components/Header";
import Present from "./components/Present";
import Technic from "./components/Technic";
import Versions from "./components/Versions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Present />
      <Technic />
      <Compatibilities />
      <Versions />
      <Footer />
    </main>
  );
}
