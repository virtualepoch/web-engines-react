import React, { Suspense } from "react";
import BackBtn from "../../css/components/BackBtn";
import { Canvas } from "@react-three/fiber";
import TaeyeonDragon from './cgi-components/TaeyeonDragon'
import { OrbitControls } from "@react-three/drei";

export default function TestModel() {
  return (
    <div className="cgi-model-section">
      <BackBtn />
      <h1>Test Model</h1>
      <Canvas className="test-canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <TaeyeonDragon />
        </Suspense>
      </Canvas>
    </div>
  );
}
