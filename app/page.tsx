import CreonPass from "@/components/CreonPass";
import FirstScreen from "@/components/FirstScreen";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <FirstScreen />
        <CreonPass />
      </main>
    </>
  );
}
