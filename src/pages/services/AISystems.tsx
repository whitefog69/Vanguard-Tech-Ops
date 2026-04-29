import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Points, PointMaterial, Environment, OrbitControls, Box, Cylinder, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { Brain, Network, Bot, Workflow, Cpu, Database, Zap, Code2 } from 'lucide-react';
import SEO from '../../components/SEO';
import InteractionIndicator from '../../components/InteractionIndicator';
import CanvasErrorBoundary from '../../components/CanvasErrorBoundary';
import CTASection from '../../components/CTASection';

class EnvironmentBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error) { console.warn("Environment failed to load", error); }
  render() {
    if (this.state.hasError) {
      return (
        <group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
        </group>
      );
    }
    return this.props.children;
  }
}

// Pre-generate points to avoid expensive recalculations on every render
const STATIC_POINTS = new Float32Array(200 * 3);
for (let i = 0; i < 200; i++) {
  STATIC_POINTS[i * 3] = (Math.random() - 0.5) * 4;
  STATIC_POINTS[i * 3 + 1] = (Math.random() - 0.5) * 4;
  STATIC_POINTS[i * 3 + 2] = (Math.random() - 0.5) * 4;
}

const NeuralCore = () => {
  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = t * 0.1;
      ref.current.rotation.x = t * 0.05;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={STATIC_POINTS} stride={3}>
        <PointMaterial
          transparent
          color="#dcb8ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#7701d0"
          emissive="#7701d0"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      <Sphere args={[0.2, 32, 32]}>
        <meshBasicMaterial color="#dcb8ff" />
        <pointLight intensity={10} distance={5} color="#dcb8ff" />
      </Sphere>
    </group>
  );
};

const RoboticAssembler = () => {
  const armRef = useRef<THREE.Group>(null!);
  const moduleRef = useRef<THREE.Group>(null!);
  const gearRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (armRef.current) armRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    if (moduleRef.current) moduleRef.current.position.y = 1 + Math.sin(t) * 0.5;
    if (gearRef.current) gearRef.current.rotation.z = t * 0.5;
  });

  const gears = useMemo(() => [...Array(8)], []);
  const streams = useMemo(() => [...Array(10)], []);

  return (
    <group position={[0, -1, 0]}>
      {/* Base Gears */}
      <group ref={gearRef} position={[0, 0, 0]}>
        <Torus args={[1, 0.2, 16, 32]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </Torus>
        {gears.map((_, i) => (
          <Box key={i} args={[0.3, 0.3, 0.1]} position={[Math.cos(i/8 * Math.PI * 2), Math.sin(i/8 * Math.PI * 2), 0]}>
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </Box>
        ))}
      </group>

      {/* Robotic Arm */}
      <group ref={armRef}>
        <Cylinder args={[0.1, 0.1, 2]} position={[0, 1, 0]}>
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <group ref={moduleRef} position={[0, 1, 0]}>
          <Sphere args={[0.4, 32, 32]}>
            <meshStandardMaterial color="#7701d0" emissive="#7701d0" emissiveIntensity={2} transparent opacity={0.6} />
            <pointLight intensity={5} color="#7701d0" />
          </Sphere>
          {/* Binary Stream Effect */}
          {streams.map((_, i) => (
            <Box key={i} args={[0.02, 0.1, 0.02]} position={[(Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5, (Math.random()-0.5)*0.5]}>
              <meshBasicMaterial color="#dcb8ff" />
            </Box>
          ))}
        </group>
      </group>
    </group>
  );
};

const AISystemsPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SEO 
        title="AI & Autonomous Automation" 
        description="Engineering high-performance AI systems and autonomous workflows. Custom LLM integrations, intelligent bots, and operational automation for technical dominance."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden lg:py-0">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/services/ai/ai-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/services/ai/ai-automation.mp4`} type="video/mp4" />
        </video>
        
        {/* Overlay for Depth and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-3 md:p-4 rounded-full bg-secondary-container/20 mb-6 md:mb-8 border border-secondary/20 neon-glow-violet">
              <Brain className="w-8 h-8 md:w-12 md:h-12 text-secondary animate-pulse" />
            </div>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              AI & <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container neon-glow-violet">Automation</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-8 md:mb-12">
              Creating custom bots and autonomous systems to handle specialized logic and eliminate manual operational tasks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Bot, title: "Intelligent AI Bots", desc: "Creating custom bots to handle specialized logic and user interaction." },
            { icon: Brain, title: "AI Integration", desc: "Embedding advanced AI capabilities directly into your existing software." },
            { icon: Code2, title: "Custom App Dev", desc: "Engineering proprietary apps to solve unique business challenges." },
            { icon: Zap, title: "API Integrations", desc: "Connecting disparate tools through secure, high-speed API bridges." },
            { icon: Workflow, title: "Workflow Automation", desc: "Designing automated systems to eliminate manual operational tasks." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "p-6 md:p-10 rounded-2xl transition-all duration-500 hover:scale-[1.02] group",
                "backdrop-blur-md bg-white/5 border border-white/5",
                "hover:border-secondary/20 hover:shadow-[0_0_20px_rgba(119,1,208,0.05)]"
              )}
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-4 md:mb-6 opacity-80 group-hover:opacity-100 group-hover:text-secondary-container transition-colors" />
              <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-widest leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-xs md:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 border-y border-outline-variant/10 bg-surface-container-lowest/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-video lg:aspect-square rounded-xl bg-[#0d0d0d] border border-secondary/20 shadow-2xl relative overflow-hidden group"
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <NeuralCore />
                  </Float>
                  <EnvironmentBoundary><Environment preset="city" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-on-surface uppercase">
              OPERATIONAL <span className="text-secondary italic">INTELLIGENCE</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: "99.8% Logic Accuracy", desc: "Custom-trained models ensuring near-perfect execution of complex business rules." },
                { label: "Autonomous Decision-Making", desc: "Real-time processing via secure agent swarms with 40ms latency thresholds." },
                { label: "Zero-Manual Overhead", desc: "Elimination of repetitive operational tasks through 1.5M token context windows." }
              ].map((point, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(119,1,208,0.8)]" />
                  <div className="space-y-1">
                    <div className="font-headline font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface">{point.label}</div>
                    <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural Stack Insights */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-widest text-on-surface text-center lg:text-left">Intelligence Architecture</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { name: "Vector Search Core", tool: "Pinecone / Qdrant" },
                { name: "LLM Orchestration", tool: "LangChain / LLamaIndex" },
                { name: "Foundation Models", tool: "Gemini Pro / Claude 3" },
              ].map((layer, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-center bg-surface-container-low p-4 md:p-5 rounded-lg border border-outline-variant/10 gap-3">
                  <div className="flex items-center gap-4">
                     <Database className="w-5 h-5 text-secondary neon-glow-violet" />
                     <span className="font-headline uppercase font-bold text-xs md:text-sm tracking-widest">{layer.name}</span>
                  </div>
                  <span className="font-mono text-[10px] md:text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded">
                    {layer.tool}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center",
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-violet"
            )}
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <RoboticAssembler />
                  <EnvironmentBoundary><Environment preset="city" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AISystemsPage;
