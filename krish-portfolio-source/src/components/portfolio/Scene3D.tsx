"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PresentationControls, Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";

type CardDef = {
  tex: string;
  pos: [number, number, number];
  h: number;
  rotY: number;
  rotZ: number;
  /** Mobile-only override — world units, cluster at scale 1 */
  mpos?: [number, number, number];
  mh?: number;
};

const CARDS: CardDef[] = [
  // Pink Panther — hero card, center-right, closest to camera
  { tex: "/characters/panther-card.png", pos: [0.55, 0.45, 0], h: 2.65, rotY: -0.1, rotZ: 0.03, mpos: [0.5, -0.1, 0], mh: 1.45 },
  // Spider-Man — hanging out on the far left, clear of the CTAs (desktop; off-stage on phones)
  { tex: "/characters/spiderman-card.png", pos: [-3.65, -0.35, 0.9], h: 2.05, rotY: 0.26, rotZ: -0.08 },
  // Bugs Bunny — top right, small & sassy (mobile: top-left, clear of the meta rows)
  { tex: "/characters/bugs-card.png", pos: [3.05, 1.35, 1.15], h: 1.7, rotY: -0.3, rotZ: 0.1, mpos: [-0.9, 1.55, 1.15], mh: 0.95 },
  // Courage — bottom right peek (mobile: pulled fully into view, bottom-right)
  { tex: "/characters/courage-card.png", pos: [2.55, -1.8, 0.45], h: 1.9, rotY: -0.16, rotZ: -0.12, mpos: [0.85, -1.7, 0.45], mh: 1.25 },
];

function CharacterCard({ tex, pos, h, rotY, rotZ, mpos, mh }: CardDef) {
  const texture = useTexture(tex);
  const { size } = useThree();
  const mobile = size.width < 768;
  const p = mobile && mpos ? mpos : pos;
  const cardH = mobile && mh ? mh : h;
  const aspect = (texture.image?.width ?? 542) / (texture.image?.height ?? 936);
  const w = cardH * aspect;
  return (
    <Float speed={2.2} rotationIntensity={0.32} floatIntensity={0.85}>
      <mesh position={p} rotation={[0, rotY, rotZ]}>
        <planeGeometry args={[w, cardH]} />
        <meshBasicMaterial map={texture} transparent toneMapped={false} />
      </mesh>
    </Float>
  );
}

/** Damped camera parallax following the pointer. */
function CameraRig() {
  useFrame((state, dt) => {
    const { camera, pointer } = state;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.55, 2.2, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.38, 2.2, dt);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/** Recenters the card cluster on desktop; mobile cards place themselves via mpos. */
function ResponsiveCluster({ children }: { children: React.ReactNode }) {
  const { size } = useThree();
  const isMobile = size.width < 768;
  return <group position={[isMobile ? 0 : 0.7, 0, 0]}>{children}</group>;
}

/** Slow idle drift of the whole cluster when not being dragged. */
function IdleDrift({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.12) * 0.045;
    ref.current.position.y = Math.sin(t * 0.3) * 0.08;
  });
  return <group ref={ref}>{children}</group>;
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      aria-label="Interactive 3D scene with floating character portraits — drag to rotate"
    >
      <Suspense fallback={null}>
        <PresentationControls
          global
          snap={{ mass: 0.7, tension: 160 }}
          rotation={[0.05, -0.28, 0]}
          polar={[-0.32, 0.32]}
          azimuth={[-0.55, 0.55]}
          config={{ mass: 1.2, tension: 220 }}
          cursor
        >
          <IdleDrift>
            <ResponsiveCluster>
              {CARDS.map((c) => (
                <CharacterCard key={c.tex} {...c} />
              ))}
            </ResponsiveCluster>
          </IdleDrift>
        </PresentationControls>
      </Suspense>

      <Sparkles count={80} scale={[13, 7.5, 6]} size={2.2} speed={0.32} color="#c8ff2e" opacity={0.55} />
      <Sparkles count={50} scale={[11, 6, 5]} size={3} speed={0.22} color="#ff5da2" opacity={0.4} />
      <CameraRig />
    </Canvas>
  );
}
