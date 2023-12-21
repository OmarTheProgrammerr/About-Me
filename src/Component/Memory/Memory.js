import React from "react";
import { Image, Video } from "react-bootstrap";
import "./MemoryC.css";
import Sep2 from "./im/Sep2.jpg";
import MontrealAug30th2020 from "./im/MontrealAug30th2020.JPG";
import MontrealOct4 from "./im/MontrealOct4.JPG";
import MontrealOct9 from "./im/MontrealOct9.jpg";
import MontrealOct17 from "./im/MontrealOct17.JPG";
// import MontrealOct232021 from "./im/MontrealOct232021.JPG";
import Nov82019 from "./im/Nov82019.jpg";
//import PalestineAug2 from "./im/PalestineAug2.JPG";
import USJun6 from "./im/USJun6.JPG";
import USMar23 from "./im/USMar23.JPG";
import USMay30th from "./im/USMay30th.jpg";
import PalMay222 from "./im/PalMay222.jpg";
import Jul1620Pal from "./im/Jul1620Pal.jpg";
import June4MTL from "./im/June4MTL.jpg";
import TheGANG from "./im/TheGANG.jpg";
import May22Pal from "./im/May22Pal.jpg";
import MontrealOct3020221 from "./im/IMG_2006.jpeg";
import MontrealOct3020222 from "./im/IMG_1983.jpeg";
//import LibDec8 from "./im/LibDec8.mp4";
import MTLJul2021 from "./im/MTLJul2021.jpg";
//import PALNov1619 from "./im/PALNov1619.jpg";
//import jerusalem from "./im/PALNov1619.jpg";
import PalMay1422 from "./im/PalMay1422.jpg";

import DubaiMay4 from "./im/DubaiMay4.jpg";
import MontrealApril28 from "./im/MontrealApril28.jpg";
import MontrealMar15 from "./im/MontrealMar15.jpg";
import NewOrleansJuly21 from "./im/NewOrleansJuly21.jpg";
import Toronto2Aug13 from "./im/Toronto2Aug13.jpg";
import TorontoAug13 from "./im/TorontoAug13.jpg";
import NewYorkDec2322 from "./im/NewYorkDec2322.jpg";

//import { FaGg } from "react-icons/fa";
const Memory = () => {
  return (
    <div id="finally">
      <div id="sa">
        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Ottawa, Canada</h5>
            <p class="card-text">September 2nd, 2021</p>
          </div>
          <Image className="M1" src={Sep2} alt="Memory1"></Image>
        </div>
        {/* 2, 5, 7, 8 and 9 */}
        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">January 20th, 2022</p>
          </div>
          <Image className="M1" src={TheGANG} alt="Memory2"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">New York City, USA</h5>
            <p class="card-text">December 23rd, 2022</p>
          </div>
          <Image className="M1" src={NewYorkDec2322} alt="Memory3"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">April 28, 2023</p>
          </div>
          <Image className="M1" src={MontrealApril28} alt="Memory4"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">NewOrleans, United states</h5>
            <p class="card-text">March 23th, 2021</p>
          </div>
          <Image className="M1" src={USMar23} alt="Memory5"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">October 4th, 2021</p>
          </div>
          <Image className="M1" src={MontrealOct4} alt="Memory3"></Image>
        </div>
        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Toronto, Canada</h5>
            <p class="card-text">August 13, 2023</p>
          </div>
          <Image className="M1" src={TorontoAug13} alt="Memory11"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">June 4th, 2022</p>
          </div>
          <Image className="M1" src={June4MTL} alt="Memory8"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">NewOrleans, United states</h5>
            <p class="card-text">June 6th, 2021</p>
          </div>
          <Image className="M1" src={USJun6} alt="Memory12"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Dubai, UAE</h5>
            <p class="card-text">May 4th, 2023</p>
          </div>
          <Image className="M1" src={DubaiMay4} alt="Memory10"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Westbank, Palestine</h5>
            <p class="card-text">July 16th, 2020</p>
          </div>
          <Image className="M1" src={Jul1620Pal} alt="Memory7"></Image>
        </div>
        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">October 30th, 2022</p>
          </div>
          <Image className="M1" src={MontrealOct3020221} alt="Memory9"></Image>
        </div>
      </div>
    </div>
  );
};
export default Memory;
