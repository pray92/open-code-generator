import Pitch from "assets/start-pitch-name-list.svg";
import Fret1 from "assets/fret-1.svg";
import Fret2 from "assets/fret-2.svg";
import Fret3 from "assets/fret-3.svg";
import Fret4 from "assets/fret-4.svg";
import Fret5 from "assets/fret-5.svg";
import Fret6 from "assets/fret-6.svg";
import Fret7 from "assets/fret-7.svg";
import Fret8 from "assets/fret-8.svg";
import Fret9 from "assets/fret-9.svg";
import Fret10 from "assets/fret-10.svg";
import Fret11 from "assets/fret-11.svg";
import Fret12 from "assets/fret-12.svg";

export default function GuitarPreview() {
  return (
    <div className="guitar-preview">
      <img src={Pitch} alt="Start Pitch Set" />
      <img src={Fret1} alt="Fret-1" />
      <img src={Fret2} alt="Fret-2" />
      <img src={Fret3} alt="Fret-3" />
      <img src={Fret4} alt="Fret-4" />
      <img src={Fret5} alt="Fret-5" />
      <img src={Fret6} alt="Fret-6" />
      <img src={Fret7} alt="Fret-7" />
      <img src={Fret8} alt="Fret-8" />
      <img src={Fret9} alt="Fret-9" />
      <img src={Fret10} alt="Fret-10" />
      <img src={Fret11} alt="Fret-11" />
      <img src={Fret12} alt="Fret-12" />
    </div>
  );
}