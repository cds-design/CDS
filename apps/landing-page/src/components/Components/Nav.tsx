import { Tween } from "react-gsap";
import { active_text, path as path_class, text, svg } from "./style.css";

const components = [
  {
    title: "Button",
    path: "M87 1c31 0 60 16 75 43",
  },
  {
    title: "Slider",
    path: "M162 44c16 27 16 60 0 86",
  },
  {
    title: "Input",
    path: "M162 130a87 87 0 0 1-75 44",
  },
  {
    title: "CheckBox",
    path: "M87 174c-31 0-59-17-75-44",
  },
  {
    title: "Alert",
    path: "M12 130a87 87 0 0 1 0-86",
  },
  {
    title: "Toggle",
    path: "M12 44C28 17 56 1 87 1",
  },
];

export default function Nav({
  setComponent,
  activeComponent,
}: {
  setComponent: (index: number) => void;
  activeComponent: number;
}) {
  return (
    <Tween
      to={{
        rotation: -90,
      
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-12 -12 200 200"
        className={svg}
      >
        {components.map(({ title, path }, index) => {
          return (
            <g key={index}>
              <path id={`t${index}`} className={path_class} d={path} />
              <text
                width={200}
                className={[
                  activeComponent === index ? active_text : "",
                  text,
                ].join(" ")}
                onClick={() => {
                  setComponent(index);
                }}
              >
                <textPath xlinkHref={`#t${index}`}>{title}</textPath>
              </text>
            </g>
          );
        })}
      </svg>
    </Tween>
  );
}
