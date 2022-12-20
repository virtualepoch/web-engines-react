import React, { Suspense } from "react";
import { BtnBackFixed } from "../../../components/BtnBackFixed";
import { Canvas } from "@react-three/fiber";
import Horsemen2 from "./cgi-components/Horsemen2";
import { OrbitControls } from "@react-three/drei";

export default function HorsemenModel2() {
  return (
    <div className="cgi-model-section">
      <BtnBackFixed />
      <h1>Four Horsemen 2/4</h1>
      <Canvas className="horsemen-2-canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Horsemen2 />
        </Suspense>
      </Canvas>
    </div>
  );
}
