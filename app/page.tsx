import SymptomsForm from "../components/SymptomsForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <h1 className="main__title">H.A.D.I</h1>
      <h1 className="main__sub-title">Health and Disease Identification</h1>
      <h1 className="main__sub-title">A project by Ibrahim El Khansa</h1>
      <SymptomsForm />
    </main>
  );
}
