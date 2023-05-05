import type { RootState } from "@react-three/fiber";
import { Quaternion, Euler, Vector3 } from "three";

const LERP_SPEED = 0.1;

let prevPercent = 0;

function scrollPercent() {
  const scroll = document.documentElement.scrollTop;

  const totalScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  return scroll / totalScroll;
}

const position = new Vector3(0, 0, 0);
const rotation = new Euler(0, 0, 0);

const quaternion = new Quaternion();

export function animation(renderer: RootState) {
  if (rotation.x === 0 && rotation.y === 0 && rotation.z === 0) {
    rotation.setFromRotationMatrix(renderer.camera.matrix);
  }

  let percent = scrollPercent();

  if (prevPercent === percent) return;

  if (+percent.toFixed(5) === 0) {
    rotation.y = 0;
    position.set(0, 0, 0);
  } else if (percent > 0.9) {
    position.set(percent, percent, percent);
    rotation.y = (percent * -25 * Math.PI) / 180;
    rotation.z = (percent * -25 * Math.PI) / 180;
  } else {
    rotation.y = (percent * Math.PI) / 2;
    rotation.z = 0;
    position.set(
      percent * 100,
      percent * 100 + 25,
      percent > 0.1 ? percent * 10 - 10 : 0
    );
  }

  renderer.camera.position.lerp(position, LERP_SPEED);

  renderer.camera.quaternion.slerp(
    quaternion.setFromEuler(rotation),
    LERP_SPEED
  );

  prevPercent = percent;
}
