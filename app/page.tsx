import ComingSoon from "@/components/ComingSoon";
import CreonPass from "@/components/CreonPass";
import FirstScreen from "@/components/FirstScreen";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import Profiting from "@/components/Profiting";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <FirstScreen />
        <CreonPass />
        <Profiting />
        <OurMission />
        <ComingSoon/>
      </main>
    </>
  );
}
