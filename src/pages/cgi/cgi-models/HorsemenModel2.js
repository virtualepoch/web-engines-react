import React, { Suspense } from "react";
import BackBtn from "../../css/components/BackBtn";
import { Canvas } from "@react-three/fiber";
import Horsemen2 from './cgi-components/Horsemen2'
import { OrbitControls } from "@react-three/drei";

export default function HorsemenModel2() {
  return (
    <div className="cgi-model-section">
      <BackBtn />
      <h1>Four Horsemen Model</h1>
      <Canvas className="horsemen-2-canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Horsemen2 />
        </Suspense>
      </Canvas>
    </div>
  );
}
