import React, { Suspense } from "react";
import BackBtn from "../../css/components/BackBtn";
import { Canvas } from "@react-three/fiber";
import DeloreanHigh from "./cgi-components/DeloreanHigh";
import { OrbitControls } from "@react-three/drei";

export default function TestModel() {
  return (
    <div className="cgi-model-section">
      <BackBtn />
      <h1>Delorean</h1>
      <Canvas className="delorean-high-canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={5} />
        <directionalLight position={[-1, 3.8, -2]} intensity={4} />
        <Suspense fallback={null}>
          <DeloreanHigh />
        </Suspense>
      </Canvas>
    </div>
  );
}
