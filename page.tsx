import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryIntro from "@/components/StoryIntro";
import ChapterSection from "@/components/ChapterSection";
import ChapterTransition from "@/components/ChapterTransition";
import CurrentChapter from "@/components/CurrentChapter";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Lessons from "@/components/Lessons";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import { chapters } from "@/data/config";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StoryIntro />

      <ChapterSection chapter={chapters[0]} index={0} />
      <ChapterTransition />
      <ChapterSection chapter={chapters[1]} index={1} />
      <ChapterSection chapter={chapters[2]} index={2} />
      <ChapterSection chapter={chapters[3]} index={3} />

      <CurrentChapter />
      <Timeline />
      <Skills />
      <Lessons />
      <About />
      <Achievements />
      <ContactSection />
      <Footer />
    </main>
  );
}
