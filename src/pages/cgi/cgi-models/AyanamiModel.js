import React, { Suspense } from "react";
import BackBtn from "../../css/components/BackBtn";
import { Canvas } from "@react-three/fiber";
import Ayanami from './cgi-components/Ayanami'
import { OrbitControls } from "@react-three/drei";

export default function HorsemenModel2() {
  return (
    <div className="cgi-model-section">
      <BackBtn />
      <h1>Rei Ayanami</h1>
      <Canvas className="ayanami-canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Ayanami />
        </Suspense>
      </Canvas>
    </div>
  );
}
