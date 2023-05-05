import { Tween, ScrollTrigger } from "react-gsap";

import before_img from "./imgs/before.png";
import after_img from "./imgs/after.png";
import {
  img,
  section,
  before_img as before_img_style,
  before,
  after,
} from "./style.css";

export default function Comparison() {
  return (
    <ScrollTrigger start="top top" pin end="bottom top" scrub>
      <section className={section}>
        <Tween
          from={{
            opacity: 1,
            fontSize: "5em",
          }}
          to={{
            opacity: 0,
            fontSize: "0em",
          }}
        >
          <span className={before}>Before</span>
        </Tween>
        <Tween
          from={{
            opacity: 0,
            fontSize: "0em",
          }}
          to={{
            opacity: 1,
            fontSize: "5em",
          }}
        >
          <span className={after}>After</span>
        </Tween>
        <Tween>
          <img src={after_img} className={img} alt="After Image" />
          <Tween
            from={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            to={{
              clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
            }}
          >
            <img
              src={before_img}
              className={[img, before_img_style].join(" ")}
              alt="Before Image"
            />
          </Tween>
        </Tween>
      </section>
    </ScrollTrigger>
  );
}
