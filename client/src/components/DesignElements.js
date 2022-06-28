import React from "react";

// Imgs imports
import flower1webp from "../assets/flower-1.webp";
import flower2webp from "../assets/flower-2.webp";
import flower3webp from "../assets/flower-3.webp";
import flower4webp from "../assets/flower-4.webp";
import flower6webp from "../assets/flower-6.webp";
import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.png";
import flower4 from "../assets/flower-4.png";
import flower6 from "../assets/flower-6.png";
import cloudMare from "../assets/cloud-mare.svg";
import groundBottom from "../assets/ground-bottom.svg";
import groundLeft from "../assets/ground-left.svg";
import groundRight from "../assets/ground-right.svg";

const DesginElements = () => {
  return (
    <>
      <picture>
        <source srcSet={flower1webp} type="image/webp" />
        <source srcSet={flower1} type="image/png" />
        <img className="flower-1" src={flower1} alt="Flower1" loading="lazy" />
      </picture>
      <picture>
        <source srcSet={flower2webp} type="image/webp" />
        <source srcSet={flower2} type="image/png" />
        <img className="flower-2" src={flower2} alt="Flower2" loading="lazy" />
      </picture>
      <picture>
        <source srcSet={flower3webp} type="image/webp" />
        <source srcSet={flower3} type="image/png" />
        <img className="flower-3" src={flower3} alt="Flower3" loading="lazy" />
      </picture>
      <picture>
        <source srcSet={flower4webp} type="image/webp" />
        <source srcSet={flower4} type="image/png" />
        <img className="flower-4" src={flower4} alt="Flower4" loading="lazy" />
      </picture>

      <picture>
        <source srcSet={flower6webp} type="image/webp" />
        <source srcSet={flower6} type="image/png" />
        <img className="flower-6" src={flower6} alt="Flower5" loading="lazy" />
      </picture>

      <img className="clouds" src={cloudMare} alt="Ground" />
      <img className="ground-left" src={groundLeft} alt="Ground" />
      <img className="ground-right" src={groundRight} alt="Ground" />
      <img className="ground-bottom" src={groundBottom} alt="Ground" />
    </>
  );
};

export default DesginElements;
