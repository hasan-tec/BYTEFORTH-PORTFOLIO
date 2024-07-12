'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CreativeShape() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1
    meshRef.current.rotation.y += delta * 0.12
  })

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color="#6366f1" roughness={0.5} metalness={0.5} />
    </mesh>
  )
}

function Particles({ count = 5000 }) {
  const [positions, colors] = useMemo(() => {
    const p = new Float32Array(count * 3)
    const c = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000)
      const y = THREE.MathUtils.randFloatSpread(2000)
      const z = THREE.MathUtils.randFloatSpread(2000)
      p.set([x, y, z], i * 3)
      c.set([Math.random(), Math.random(), Math.random()], i * 3)
    }
    return [p, c]
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] += Math.sin(time + positions[i3]) * 0.01
      positions[i3 + 1] += Math.cos(time + positions[i3 + 1]) * 0.01
      positions[i3 + 2] += Math.sin(time + positions[i3 + 2]) * 0.01
    }
  })

  return (
    <Points positions={positions} colors={colors}>
      <PointMaterial vertexColors size={4} sizeAttenuation={false} depthWrite={false} />
    </Points>
  )
}

export const FloatingElement: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 70], fov: 75 }} style={{ pointerEvents: 'auto' }}>
        <color attach="background" args={['#010106']} />
        <fog attach="fog" args={['#010106', 60, 110]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CreativeShape />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default FloatingElement;