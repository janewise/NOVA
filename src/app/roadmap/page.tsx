import style from './road.module.css' 
import Image from 'next/image';
import roadmap from "../../../public/Roadmap1.png"

export default function Whitepaper() {
    return (
     <div className={style.roadbg}>
<Image src={roadmap} alt='roadmap' className={style.roadmap}/>
     </div>
    );
  }