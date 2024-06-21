'use client'

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
interface CardProps {
    frontside: StaticImageData;
    backside: StaticImageData;
  }

export default function Card({ frontside, backside }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
      <div className="flipCard" onClick={handleClick}>
        <div className={`flipCardInner ${isFlipped ? 'isFlipped' : ''}`}>
          <Image  className="flipCardFront" src={frontside} alt='Image frontside'/>
          <div className="flipCardBack">
            <div className="flipCardBackContent">
             <Image className="rotateimage" src={backside} alt='Image backside' fill />
            </div>
         </div>
        </div>
      </div>
  );
}