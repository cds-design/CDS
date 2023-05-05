import { MouseEvent, useState } from "react";
import { footer, cursor, masonry, link, company } from "./style.css";
import docs_icon from "./icons/docs.svg";
import git_icon from "./icons/git.svg";
import tweet_icon from "./icons/tweet.svg";
import road_icon from "./icons/road.svg";
import blog_icon from "./icons/blog.svg";
import comp_icon from "./icons/comp.svg";

const vmin = Math.min(innerWidth, innerHeight); // 100vmin

const mason = [
  {
    name: "Docs",
    href: "/docs",
    gridArea: "docs",
    writingMode: "vertical-lr",
    fontSize: "7.5em",
    cursor: `url(${docs_icon}), pointer`,
    "--drp-color": "#ff6",
  },
  {
    name: "Github",
    href: "https://github.com",
    gridArea: "git",
    writingMode: "horizontal-tb",
    fontSize: "5em",
    cursor: `url(${git_icon}), pointer`,
    "--drp-color": "#fff",
  },
  {
    name: "Components",
    href: "/docs/components",
    gridArea: "comp",
    writingMode: "horizontal-tb",
    fontSize: "3.5em",
    cursor: `url(${comp_icon}), pointer`,
    "--drp-color": "#6ff",
  },
  {
    name: "Blog",
    href: "/blog",
    gridArea: "blog",
    writingMode: "vertical-rl",
    fontSize: "3em",
    cursor: `url(${blog_icon}), pointer`,
    "--drp-color": "#f6f",
  },
  {
    name: "RoadMap",
    href: "https://github.com",
    gridArea: "road",
    writingMode: "horizontal-tb",
    fontSize: "2.5em",
    cursor: `url(${road_icon}), pointer`,
    "--drp-color": "#6f0",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    gridArea: "tweet",
    writingMode: "horizontal-tb",
    fontSize: "1.5em",
    cursor: `url(${tweet_icon}), pointer`,
    "--drp-color": "#1da1f2",
  },
] as const;

export default function Footer() {
  const [cords, setCords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  function cursorHandler({ clientX: x, clientY: y }: MouseEvent) {
    if (y < vmin / 4) y = vmin / 4; // 25vmin = 100vmin / 4
    x.toFixed(2);
    y.toFixed(2);
    setCords({ x, y });
  }

  return (
    <footer className={footer} onMouseMove={cursorHandler}>
      <div className={masonry}>
        {mason.map(({ name, href, ...styles }, index) => (
          <a style={styles} className={link} href={href} key={index}>
            {name}
          </a>
        ))}
      </div>
      <div>
        &copy; <span className={company}>Verve</span> {new Date().getFullYear()}
      </div>
      <div
        className={cursor}
        style={{
          left: cords.x,
          top: cords.y,
        }}
      />
    </footer>
  );
}
