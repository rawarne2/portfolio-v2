import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import projects from "./pages/api/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects projects={projects} />
      <Blogs />
      <Footer />
    </main>
  );
}
