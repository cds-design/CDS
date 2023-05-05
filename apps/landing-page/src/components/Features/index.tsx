import { ScrollTrigger, Tween } from "react-gsap";
import {
  feature,
  section,
  title as title_style,
  description as description_style,
} from "./style.css";

const features = [
  {
    title: "Light-weight",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Accessible",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Modern",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Futuristic",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Performant",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Customizable",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Framework Agnostic",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Max Browser Compatibility",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
  {
    title: "Futuristic",
    description:
      "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.",
  },
];

export default function Features() {
  return (
    <ScrollTrigger start="top bottom" end="bottom center" scrub={0.5}>
      <section className={section}>
        {features.map(({ title, description }, index) => {
          return (
            <Tween
              from={{
                transform: "translateX(100%) skewY(-20deg)",
              }}
              to={{
                transform: "translate(0%) skewY(0deg)",
              }}
              key={index}
            >
              <div
                className={feature}
                key={index}
                style={
                  {
                    // borderTop: !index ? "1px solid rgba(255, 255, 255, 0.75)" : "none"
                  }
                }
              >
                <h3 className={title_style}>{title}</h3>
                <p className={description_style}>{description}</p>
              </div>
            </Tween>
          );
        })}
      </section>
    </ScrollTrigger>
  );
}
