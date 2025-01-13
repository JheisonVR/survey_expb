import Navbar from "./components/ui/Navbar";
import Survey from "./components/ui/Survey";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      <Survey/>
    </main>
  )
}
