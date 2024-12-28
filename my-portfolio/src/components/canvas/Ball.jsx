/* import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Component to render the ball
const Ball = (props) => {
  const [decal] = useTexture([props.icon]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#CEB9F6"
          polygonOffsetFactor={-5}
          floatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          floatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas; */

/**
 * using sphereGeometry instead of icosahedronGeometry
 */

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffsetFactor={-4}
          floatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Canvas wrapper for the ball (sphere now)
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
