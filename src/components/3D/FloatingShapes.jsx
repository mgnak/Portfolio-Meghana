'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

const FloatingShape = ({ position, shape, color, scale = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.003
    }
  })

  const ShapeComponent = shape === 'sphere' ? Sphere : shape === 'box' ? Box : Octahedron

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent
        ref={meshRef}
        position={position}
        scale={scale}
        args={shape === 'sphere' ? [0.5, 32, 32] : [0.5, 0.5, 0.5]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.1}
        />
      </ShapeComponent>
    </Float>
  )
}

const FloatingShapes = () => {
  const shapes = [
    { position: [-4, 2, -2], shape: 'sphere', color: '#3b82f6', scale: 0.8 },
    { position: [4, -1, -3], shape: 'box', color: '#8b5cf6', scale: 0.6 },
    { position: [-2, -3, -1], shape: 'octahedron', color: '#06b6d4', scale: 0.7 },
    { position: [3, 3, -4], shape: 'sphere', color: '#10b981', scale: 0.5 },
    { position: [-5, -1, -2], shape: 'box', color: '#f59e0b', scale: 0.9 },
    { position: [2, -2, -3], shape: 'octahedron', color: '#ef4444', scale: 0.4 },
  ]

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}

export default FloatingShapes