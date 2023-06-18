import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Letter = () => {
  const letter = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={letter.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

const LetterCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, -3, 6] }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Letter />
      </Suspense>
    </Canvas>
  );
};

export default LetterCanvas;
