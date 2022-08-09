/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: YU (https://sketchfab.com/pein)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ayanami-91cdc6379870408e8bfb2c2c22f586de
title: Ayanami
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Ayanami(props) {
  const { nodes, materials } = useGLTF('/ayanami.gltf')
  return (
    <group {...props} dispose={null} scale={0.03} position={[1,-2,1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1.02}>
            <mesh geometry={nodes['2_Material_#0_0'].geometry} material={materials.Material_0} />
          </group>
          <group position={[40.68, 1.31, -3.39]} rotation={[0.03, -0.22, 0.28]}>
            <group scale={1.02}>
              <mesh geometry={nodes['1_Material_#1_0'].geometry} material={materials.Material_1} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ayanami.gltf')
