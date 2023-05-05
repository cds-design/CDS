import { useRef } from "react";
import { useTexture } from "@react-three/drei/core/useTexture";
import { AdditiveBlending, BufferGeometry, Vector3, type Mesh } from "three";
import useEventListener from "ahooks/lib/useEventListener";
import useUnmount from "ahooks/lib/useUnmount";

import star_texture from "../../assets/textures/star.png";
import purple_star_texture from "../../assets/textures/purple-star.png";

const star = [star_texture, purple_star_texture];
const { random } = Math;

const vec = new Vector3();

const points: Vector3[] = [];

let count = 100000;

for (; 0 < count--; ) {
  points.push(
    vec
      .set(random() * 500 - 300, random() * 500 - 300, random() * 500 - 300)
      .clone()
  );
}
const starsGeometry = new BufferGeometry().setFromPoints(points);

export default function Stars({ visibility = true }) {
  const texture = useTexture(star_texture);

  const starsMeshRef = useRef<Mesh>(null);

  useEventListener("mousemove", (e) => {
    starsMeshRef.current!.position.x += e.movementX / 1000;
    starsMeshRef.current!.position.y += e.movementY / 1000;

    starsMeshRef.current!.rotation.x += e.movementX / 50000;
    starsMeshRef.current!.rotation.y += e.movementY / 50000;
  });

  useUnmount(() => {
    starsGeometry.dispose();
  });

  return (
    <mesh ref={starsMeshRef} visible={visibility}>
      <points geometry={starsGeometry}>
        <pointsMaterial
          map={texture}
          transparent={true}
          blending={AdditiveBlending}
          depthWrite={false}
          color={0xaaccbb}
        />
      </points>
    </mesh>
  );
}
