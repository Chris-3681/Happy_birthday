import Landing from "./Landing";
import Hero from "../components/Hero/Hero";
import Story from "../components/Story/Story";
import LoveLetter from "../components/LoveLetter/LoveLetter";
import Finale from "../components/Finale/Finale";
import FloatingHearts from "../components/FloatingHearts/FloatingHearts";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

export default function Birthday() {
  return (
    <>
      <ProgressBar />
      <MusicPlayer />
      <FloatingHearts />
      <ScrollIndicator />

      <Landing />

      <Hero />

      <Story />

      <LoveLetter />

      <Finale />
    </>
  );
}