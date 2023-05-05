import { useRef } from "react";
import type { Group } from "three";
import type { GLTF } from "three-stdlib/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei/core/useGLTF";
import { useAnimations } from "@react-three/drei/core/useAnimations";
import { useTexture } from "@react-three/drei/core/useTexture";
import useMount from "ahooks/lib/useMount";

import { ModelProps } from ".";
import { animation } from "./animations";

import glbModel from "../../assets/gltf/infinity.glb";
import grainy_texture from "../../assets/textures/infinity.jpg";

type GLTFResult = GLTF & {
  nodes: {
    Continuum: THREE.Mesh;
  };
  materials: {};
};

export default function Infinity({
  viewVisible,
  showView,
  ...props
}: ModelProps) {
  const group = useRef<Group>(null);
  const texture = useTexture(grainy_texture);
  const {
    nodes: {
      Continuum: { geometry },
    },
    animations,
  } = useGLTF(glbModel) as GLTFResult;

  const { actions } = useAnimations(animations, group);

  useMount(() => {
    actions.Initial!.repetitions = 1;
    actions.Initial!.clampWhenFinished = true;
    actions.Initial!.play();
  });

  useFrame((renderer) => {
    if (viewVisible) animation(renderer);
    else {
      const progress =
        actions.Initial!.time / actions.Initial!.getClip().duration;
      if (progress > 0.91) showView();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh name="Continuum" geometry={geometry} material-map={texture} />
    </group>
  );
}

useGLTF.preload(glbModel);
