import Image from "next/image";
import Introduce from "./components/introduce/introduce"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Introduce/>
      
    </main>
  );
}
