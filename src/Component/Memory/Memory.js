import React from "react";
import { Card, Image } from "react-bootstrap";
import "./MemoryC.css";
import Sep2 from "./im/Sep2.jpg";
import MontrealAug30th2020 from "./im/MontrealAug30th2020.JPG";
import MontrealOct4 from "./im/MontrealOct4.JPG";
import MontrealOct9 from "./im/MontrealOct9.jpg";
import MontrealOct17 from "./im/MontrealOct17.JPG";
import MontrealOct232021 from "./im/MontrealOct232021.JPG";
import Nov82019 from "./im/Nov82019.jpg";
import PalestineAug2 from "./im/PalestineAug2.JPG";
import USJun6 from "./im/USJun6.JPG";
import USMar23 from "./im/USMar23.JPG";
import USMay30th from "./im/USMay30th.jpg";
import PalMay222 from "./im/PalMay222.jpg";
import MTLJul2021 from "./im/MTLJul2021.jpg";
import PALNov1619 from "./im/PALNov1619.jpg";
import jerusalem from "./im/PALNov1619.jpg";
import PalMay1422 from "./im/PalMay1422.jpg";

import { FaGg } from "react-icons/fa";
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
            <h5 class="card-title">Westbank, Palestine</h5>
            <p class="card-text">May 22nd, 2022</p>
          </div>
          <Image className="M1" src={PalMay222} alt="Memory2"></Image>
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
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">October 9th, 2021</p>
          </div>
          <Image className="M1" src={MontrealOct9} alt="Memory4"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">July 7th, 2021</p>
          </div>
          <Image className="M1" src={MTLJul2021} alt="Memory5"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Westbank, Palestine</h5>
            <p class="card-text">May 14th, 2022</p>
          </div>
          <Image className="M1" src={PalMay1422} alt="Memory6"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">NewOrleans, United states</h5>
            <p class="card-text">March 23th, 2021</p>
          </div>
          <Image className="M1" src={USMar23} alt="Memory7"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">NewOrleans, United states</h5>
            <p class="card-text">May 30th, 2021</p>
          </div>
          <Image className="M1" src={USMay30th} alt="Memory8"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Westbank, Palestine</h5>
            <p class="card-text">November 8th, 2019</p>
          </div>
          <Image className="M1" src={Nov82019} alt="Memory9"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">October 17th, 2021</p>
          </div>
          <Image className="M1" src={MontrealOct17} alt="Memory10"></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">Montreal, Canada</h5>
            <p class="card-text">Augest 30th, 2020</p>
          </div>
          <Image
            className="M1"
            src={MontrealAug30th2020}
            alt="Memory11"
          ></Image>
        </div>

        <div class="card" id="MyCards">
          <div class="card-body" id="ToTheLeft">
            <h5 class="card-title">NewOrleans, United states</h5>
            <p class="card-text">June 6th, 2021</p>
          </div>
          <Image className="M1" src={USJun6} alt="Memory12"></Image>
        </div>
      </div>
    </div>
  );
};
export default Memory;
