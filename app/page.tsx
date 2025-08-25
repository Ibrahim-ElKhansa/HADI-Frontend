import SymptomsForm from "../components/SymptomsForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <div className="main__header">
        <h1 className="main__title">H.A.D.I</h1>
        <h2 className="main__sub-title">Health and Disease Identification</h2>
        <p className="main__description">
          Select your symptoms below to get a potential diagnosis and recommended treatments
        </p>
        <div className="main__divider"></div>
      </div>
      <SymptomsForm />
      <footer className="main__footer">
        <p>A project by Ibrahim El Khansa</p>
      </footer>
    </main>
  );
}
