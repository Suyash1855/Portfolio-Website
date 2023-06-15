import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { EarthCanvas } from ".";
import { resizeRendererToDisplaySize } from "../../Utils/Motion";
import * as THREE from "three";
import { useRef, useEffect } from "react";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} />;
};

const EarthCanvass = () => {
  const canvasRef = useRef(null);
  const renderer = useRef(null);

  useEffect(() => {
    // Initialize Three.js renderer
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // Function to handle resize
    const handleResize = () => {
      resizeRendererToDisplaySize(renderer.current);
      // Additional code for handling resize if needed
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the resize function initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      ref={canvasRef}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvass;
