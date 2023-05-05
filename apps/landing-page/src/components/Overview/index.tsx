import { Tween, ScrollTrigger } from "react-gsap";

import { section, h2, span, gradient } from "./style.css";

export default function () {
  const rollUp = {
    from: {
      opacity: 0,
      transform: "rotateX(90deg)",
    },
    to: {
      opacity: 1,
      transform: "rotate(0deg)",
    },
  };

  return (
    <section className={section}>
      <h2 className={h2}>
        <ScrollTrigger start="-200px center" end="200px center" scrub={0.5}>
          <Tween {...rollUp}>
            <span className={span}>The</span>
          </Tween>
          <Tween {...rollUp}>
            <span className={[gradient, span].join(" ")}>Design system</span>
          </Tween>
          <Tween {...rollUp}>
            <span className={span}>from the</span>
          </Tween>
          <Tween {...rollUp}>
            <span className={[gradient, span].join(" ")}>future</span>
          </Tween>
          <Tween {...rollUp}>
            <span className={span}>into your</span>
          </Tween>
          <Tween {...rollUp}>
            <span className={span}>hands</span>
          </Tween>
        </ScrollTrigger>
      </h2>
    </section>
  );
}
