import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Environment, OrbitControls, ContactShadows, Box, Html, Grid as DreiGrid } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { Smartphone, Layout, Blocks, ScanLine, Layers, Code2, Globe, ShoppingBag } from 'lucide-react';
import SEO from '../../components/SEO';
import InteractionIndicator from '../../components/InteractionIndicator';
import CanvasErrorBoundary from '../../components/CanvasErrorBoundary';
import CTASection from '../../components/CTASection';
import { useLanguage } from '@/src/i18n/LanguageContext';

class EnvironmentBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error) { console.warn("Environment failed to load", error); }
  render() { 
    if (this.state.hasError) return <ambientLight intensity={1} />;
    return this.props.children; 
  }
}
const ArchitectureModel = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += Math.sin(state.clock.elapsedTime * 0.1) * 0.02; // use elapsedTime property instead of getElapsedTime() method
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial 
          color="#dcb8ff" 
          wireframe 
          transparent 
          opacity={0.4} 
          emissive="#dcb8ff" 
          emissiveIntensity={0.5} 
        />
      </mesh>
      <Icosahedron args={[1.2, 4]}>
        <MeshDistortMaterial
          color="#7701d0"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.9}
          roughness={0.1}
        />
      </Icosahedron>
      <pointLight position={[5, 5, 5]} intensity={5} color="#dcb8ff" />
      <pointLight position={[-5, -5, -5]} intensity={2} color="#7701d0" />
    </group>
  );
};

const SkeletalFramework = () => {
  const codeItems = useMemo(() => [...Array(5)].map(() => ({
    pos: [(Math.random()-0.5)*4, Math.random()*2, (Math.random()-0.5)*2] as [number, number, number],
    content: `const store = createStore();\nawait app.hydrate();`
  })), []);

  return (
    <group rotation={[-Math.PI / 6, Math.PI / 4, 0]}>
      {/* Grid Lattice */}
      <DreiGrid 
        infiniteGrid 
        fadeDistance={10} 
        cellColor="#0047ab" 
        sectionColor="#FFD700" 
        sectionSize={1} 
        cellSize={0.5} 
      />
      
      {/* Translucent Functional Areas */}
      <Box args={[2, 0.1, 1.5]} position={[-1.5, 0.5, 0]}>
        <meshStandardMaterial color="#0047ab" transparent opacity={0.3} />
        <Html position={[0, 0.2, 0]} center>
          <div className="text-white text-[10px] font-bold font-mono tracking-widest uppercase whitespace-nowrap drop-shadow-md">PRODUCT_GRID</div>
        </Html>
      </Box>
      <Box args={[1, 0.1, 1]} position={[1.5, 0.8, 1]}>
        <meshStandardMaterial color="#FFD700" transparent opacity={0.3} />
        <Html position={[0, 0.2, 0]} center>
          <div className="text-white text-[10px] font-bold font-mono tracking-widest uppercase whitespace-nowrap drop-shadow-md">CART</div>
        </Html>
      </Box>
      <Box args={[2.5, 0.1, 1]} position={[0, 0.2, -1.5]}>
        <meshStandardMaterial color="#7701d0" transparent opacity={0.2} />
        <Html position={[0, 0.2, 0]} center>
          <div className="text-white text-[10px] font-bold font-mono tracking-widest uppercase whitespace-nowrap drop-shadow-md">CHECKOUT_FLOW</div>
        </Html>
      </Box>

      {/* Micrometer (Stylized representation) */}
      <group position={[2, 1, 0]}>
        <Box args={[0.1, 0.8, 0.1]}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} />
        </Box>
        <pointLight intensity={5} color="#FFD700" />
      </group>

      {/* Code Streams */}
      {codeItems.map((item, i) => (
        <Float key={i} speed={5} rotationIntensity={0} floatIntensity={1}>
          <Html position={item.pos} center>
            <pre className="text-[#dcb8ff] text-[8px] opacity-60 font-mono bg-black/40 backdrop-blur-sm p-1 rounded whitespace-pre">
              {item.content}
            </pre>
          </Html>
        </Float>
      ))}
    </group>
  );
};

const WebDevPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SEO
        title={t({ en: "Precision Web & E-commerce Engineering", fr: "Développement Web & E-commerce" })}
        description={t({
          en: "Bespoke web engineering focused on speed, clean architecture, and high-conversion experiences. Custom WordPress, Shopify, and React-based ecosystems.",
          fr: "Développement web sur mesure, axé sur la rapidité, une architecture propre et des expériences qui convertissent. Sites WordPress, Shopify et React sur mesure."
        })}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/services/web/web-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/services/web/web-dev-hero.mp4`} type="video/mp4" />
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
            <div className="inline-block p-3 md:p-4 rounded-full bg-secondary-fixed-dim/10 mb-6 md:mb-8 border border-secondary-fixed-dim/20 neon-glow-violet">
              <Globe className="w-8 h-8 md:w-12 md:h-12 text-[#dcb8ff] animate-pulse" />
            </div>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              {t({ en: 'Precision Web &', fr: 'Développement Web &' })} <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dcb8ff] to-[#7701d0]" style={{textShadow: "0 0 20px rgba(220,184,255,0.1)"}}>{t({ en: 'Ecom Development', fr: 'E-commerce' })}</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-8 md:mb-12">
              {t({
                en: 'Bespoke web and e-commerce engineering focused on speed, clean architecture, and high-conversion experiences.',
                fr: 'Développement web et e-commerce sur mesure, axé sur la rapidité, une architecture propre et des expériences qui convertissent.'
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Code2, title: t({ en: "WordPress Engineering", fr: "Développement WordPress" }), desc: t({ en: "Bespoke WordPress builds focused on speed and clean architecture.", fr: "Des sites WordPress sur mesure, rapides et bien construits." }) },
            { icon: ShoppingBag, title: t({ en: "Shopify Development", fr: "Développement Shopify" }), desc: t({ en: "Specialized e-commerce development for high-conversion web presence.", fr: "Un développement e-commerce spécialisé pour une boutique qui convertit." }) },
            { icon: Blocks, title: t({ en: "Custom Web Dev", fr: "Développement web sur mesure" }), desc: t({ en: "Building robust, scalable websites using modern full-stack frameworks.", fr: "Des sites robustes et évolutifs, construits avec des frameworks full-stack modernes." }) },
            { icon: Layout, title: t({ en: "UI/UX Optimization", fr: "Optimisation UI/UX" }), desc: t({ en: "Refining digital assets to meet a minimalist, 'quiet luxury' aesthetic.", fr: "Des interfaces affinées pour une esthétique minimaliste, élégante et sobre." }) }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "p-6 md:p-10 rounded-2xl transition-all duration-500 hover:scale-[1.02] group",
                "backdrop-blur-md bg-white/5 border border-white/5",
                "hover:border-secondary/20 hover:shadow-[0_0_20px_rgba(220,184,255,0.05)]"
              )}
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-4 md:mb-6 opacity-80 group-hover:opacity-100 group-hover:text-secondary-container transition-all duration-300" />
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
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <ArchitectureModel />
                  </Float>
                  <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
                  <EnvironmentBoundary><Environment preset="city" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <ScanLine className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute bottom-4 left-4 text-secondary/50 font-mono font-bold uppercase tracking-tighter text-[10px] flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              PERFORMANCE_FIRST_ARCHITECTURE
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-on-surface uppercase">
              {t({ en: 'ENGINEERING', fr: 'PRÉCISION' })} <span className="text-secondary italic pr-[0.15em]">{t({ en: 'PRECISION', fr: 'TECHNIQUE' })}</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: t({ en: "100/100 PageSpeed Rating", fr: "Score PageSpeed de 100/100" }), desc: t({ en: "Precision-engineered frontend architecture for maximum SEO and conversion.", fr: "Une architecture front-end soignée pour un référencement et une conversion optimaux." }) },
                { label: t({ en: "Edge-First Delivery", fr: "Diffusion en périphérie" }), desc: t({ en: "Content served globally with sub-50ms TTFB via distributed serverless nodes.", fr: "Contenu servi dans le monde entier avec un TTFB inférieur à 50 ms grâce à des nœuds serverless distribués." }) },
                { label: t({ en: "Bespoke API Bridges", fr: "Connexions API sur mesure" }), desc: t({ en: "Custom-built secure integrations connecting web platforms to core business logic.", fr: "Des intégrations sécurisées sur mesure qui relient vos plateformes web à votre logique métier." }) }
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

      {/* Engineering Specs */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center",
              "backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(220,184,255,0.05)]"
            )}
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <SkeletalFramework />
                  <EnvironmentBoundary><Environment preset="city" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-widest text-on-surface">{t({ en: 'Interface Protocol', fr: 'Nos standards d’interface' })}</h2>
            <ul className="space-y-4 md:space-y-6">
              {t({
                en: [
                  "100/100 Core Web Vitals",
                  "Edge-Rendered Content Delivery",
                  "Progressive Web App (PWA) Standard",
                  "Advanced State Architecture Components"
                ],
                fr: [
                  "Core Web Vitals à 100/100",
                  "Rendu du contenu en périphérie",
                  "Standard Progressive Web App (PWA)",
                  "Gestion d’état avancée"
                ]
              }).map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#dcb8ff] shadow-[0_0_5px_rgba(220,184,255,0.4)]"></div>
                  <span className="font-body uppercase tracking-[0.1em] text-xs md:text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default WebDevPage;
