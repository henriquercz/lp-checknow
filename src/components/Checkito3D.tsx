/**
 * Componente responsável por renderizar o mascote 3D Checkito com controles interativos.
 * Autor: Capitão Henrique
 * Data: Novembro 2025
 * Versão: 1.1.0
 */

"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface Checkito3DProps {
  className?: string;
}

/**
 * Objetivo: Carregar o arquivo GLTF do mascote e aplicar animação sutil de rotação.
 * Entradas: props – parâmetros repassados pelo React Three Fiber.
 * Saídas: Elemento <primitive> com o modelo posicionado.
 * Pré-condições: Arquivo /checkito3d-realista.glb disponível em public.
 * Restrições: Deve executar dentro de um <Canvas> do R3F.
 */
function Model(props: any) {
  const { scene } = useGLTF("/checkito3d-realista.glb");
  const modelRef = useRef<THREE.Group>(null);

  /**
   * Objetivo: Atualizar continuamente a rotação para criar movimento orgânico.
   * Entradas: state.clock fornecido pelo hook useFrame.
   * Saídas: Modifica rotation.y do grupo THREE.
   * Pré-condições: Referência do modelo inicializada.
   * Restrições: Movimento suave para evitar desconforto visual.
   */
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return <primitive object={scene} ref={modelRef} {...props} />;
}

/**
 * Objetivo: Renderizar o container visual do mascote, controlar câmera, luz e interação.
 * Entradas: className – permite estilização externa.
 * Saídas: Bloco responsivo com Canvas R3F.
 * Pré-condições: Ambiente Next.js com suporte a WebGL.
 * Restrições: Manter performance em dispositivos móveis e evitar zoom manual.
 */
export function Checkito3D({ className = "" }: Checkito3DProps) {
  return (
    <div className={`relative w-full h-full pb-18 ${className}`}>
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-success-500/10 to-primary-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Canvas
        camera={{ position: [0, 0.4, 6.2], fov: 35 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        shadows
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <directionalLight position={[-5, 5, 5]} intensity={1.5} />

          <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.2}
            floatingRange={[-0.05, 0.05]}
          >
            <Model scale={4.6} position={[0, -2, 0]} />
          </Float>

          <ContactShadows position={[0, -2.2, 0]} opacity={0.4} scale={14} blur={2.8} far={6} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.7}
            target={[0, -1.8, 0]}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>

      {/* Loading Indicator (optional, handled by Suspense fallback usually but good for UX) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-neutral-400 text-sm pointer-events-none opacity-50">
        Arraste para girar
      </div>
    </div>
  );
}

// Preload the model
useGLTF.preload("/checkito3d-realista.glb");
