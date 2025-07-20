import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <div className = 'bg-white min-h-screen flex flex-col items-center  space-y-5'>
      <Navbar/>
      <Profile/>
      <About/>
      <Tech/>
    </div>
  );
}
