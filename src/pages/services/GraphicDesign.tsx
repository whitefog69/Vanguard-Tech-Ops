import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, MeshTransmissionMaterial, Environment, OrbitControls, ContactShadows, Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { Palette, PenTool, Layout, Image, Figma, MonitorSmartphone, BarChart3 } from 'lucide-react';
import SEO from '../../components/SEO';
import InteractionIndicator from '../../components/InteractionIndicator';
import CanvasErrorBoundary from '../../components/CanvasErrorBoundary';
import CTASection from '../../components/CTASection';
import { useLanguage } from '@/src/i18n/LanguageContext';

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

const DesignSculpture = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.5;
      meshRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group>
      <Torus ref={meshRef} args={[1.5, 0.4, 32, 100]}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
          samples={16}
          transmission={0.95}
          clearcoat={1}
          clearcoatRoughness={0}
          chromaticAberration={0.5}
          anisotropy={0.3}
          roughness={0.1}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#dcb8ff"
        />
      </Torus>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#7701d0" emissive="#7701d0" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const CreativeBlueprint = () => {
  const stylusRef = useRef<THREE.Group>(null!);
  const waveRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (stylusRef.current) {
      stylusRef.current.position.x = Math.sin(t) * 1;
      stylusRef.current.position.z = Math.cos(t) * 1;
      stylusRef.current.rotation.z = Math.sin(t * 0.5) * 0.5;
    }
    if (waveRef.current) {
      waveRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Drawing Tablet */}
      <Box args={[4, 0.1, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[3.8, 0.05, 2.8]} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#7701d0" emissive="#7701d0" emissiveIntensity={0.5} />
      </Box>

      {/* Stylus Pen */}
      <group ref={stylusRef} position={[0, 1.5, 0]}>
        <Cylinder args={[0.05, 0.02, 1.5]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </Cylinder>
        <Sphere args={[0.05, 16, 16]} position={[0, -0.7, 0]}>
          <meshBasicMaterial color="#dcb8ff" />
          <pointLight intensity={2} color="#dcb8ff" />
        </Sphere>
      </group>

      {/* Materializing Wave Design */}
      <mesh ref={waveRef} position={[0, 1, 0]}>
        <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
        <MeshTransmissionMaterial
          thickness={1}
          transmission={0.9}
          roughness={0}
          chromaticAberration={1}
          color="#dcb8ff"
        />
      </mesh>

      <EnvironmentBoundary><Environment preset="studio" /></EnvironmentBoundary>
    </group>
  );
};

const GraphicDesignPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SEO
        title={t({ en: "Graphic & Web Design Studio", fr: "Studio de design graphique & web" })}
        description={t({
          en: "Crafting cohesive visual identities and visually striking website layouts. High-end UI/UX prototyping, brand identity, and responsive visual design for elite brands.",
          fr: "Création d’identités visuelles cohérentes et de maquettes web marquantes. Prototypage UI/UX haut de gamme, identité de marque et design responsive pour des marques exigeantes."
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
          poster={`${import.meta.env.BASE_URL}assets/services/design/design-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/services/design/design-hero.mp4`} type="video/mp4" />
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
              <Palette className="w-8 h-8 md:w-12 md:h-12 text-secondary animate-pulse" />
            </div>
            <h1 className="font-headline text-[clamp(2.25rem,1rem+5.5vw,6rem)] font-black tracking-tighter mb-6 uppercase">
              {t({ en: 'Graphic &', fr: 'Design Graphique &' })} <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container neon-glow-violet">{t({ en: 'Web Design', fr: 'Web' })}</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-8 md:mb-12">
              {t({
                en: 'Crafting cohesive visual identities and visually striking, user-centric website layouts that align with modern aesthetics.',
                fr: 'Création d’identités visuelles cohérentes et de maquettes web marquantes, centrées sur l’utilisateur et dans l’air du temps.'
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: PenTool, title: t({ en: "Brand Identity & Logo Creation", fr: "Identité de marque & création de logo" }), desc: t({ en: "Crafting cohesive visual identities that establish a strong, premium market presence.", fr: "Des identités visuelles cohérentes qui donnent à votre marque une présence forte et haut de gamme." }) },
            { icon: Layout, title: t({ en: "Custom Web Interface Design", fr: "Design d’interfaces web sur mesure" }), desc: t({ en: "Designing visually striking, user-centric website layouts that align with modern aesthetics.", fr: "Des maquettes web marquantes, centrées sur l’utilisateur et dans l’air du temps." }) },
            { icon: Image, title: t({ en: "Digital Asset & Marketing Graphics", fr: "Visuels digitaux & supports marketing" }), desc: t({ en: "Producing high-quality visual content tailored for digital campaigns and brand storytelling.", fr: "Des contenus visuels de qualité pour vos campagnes digitales et le storytelling de votre marque." }) },
            { icon: Figma, title: t({ en: "UI/UX Prototyping & Wireframing", fr: "Prototypage UI/UX & wireframes" }), desc: t({ en: "Architecting intuitive user journeys through detailed interactive prototypes.", fr: "Des parcours utilisateurs intuitifs, conçus à l’aide de prototypes interactifs détaillés." }) },
            { icon: MonitorSmartphone, title: t({ en: "Responsive Visual Design", fr: "Design responsive" }), desc: t({ en: "Ensuring pixel-perfect graphic fidelity and fluid layouts across all device platforms.", fr: "Un rendu graphique impeccable et des mises en page fluides sur tous les appareils." }) }
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
              <h3 className="font-headline text-xl xl:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-wider leading-tight">{item.title}</h3>
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-video lg:aspect-square rounded-xl bg-[#0d0d0d] border border-secondary/20 shadow-2xl relative overflow-hidden group flex items-center justify-center "
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <DesignSculpture />
                  </Float>
                  <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
                  <EnvironmentBoundary><Environment preset="studio" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <BarChart3 className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute bottom-4 left-4 text-secondary/50 font-mono font-bold uppercase tracking-tighter text-[10px] flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              VISUAL_SOVEREIGNTY_v1.0
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-on-surface uppercase">
              {t({ en: 'AESTHETIC', fr: 'AUTORITÉ' })} <span className="text-secondary italic pr-[0.15em]">{t({ en: 'AUTHORITY', fr: 'ESTHÉTIQUE' })}</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: t({ en: "Quiet Luxury Visuals", fr: "Un luxe discret" }), desc: t({ en: "High-end minimalist design focused on technical authority and premium user trust.", fr: "Un design minimaliste haut de gamme qui inspire expertise et confiance." }) },
                { label: t({ en: "WCAG AAA Accessibility", fr: "Accessibilité WCAG AAA" }), desc: t({ en: "Pixel-perfect fidelity that meets the highest international standards for inclusive design.", fr: "Un rendu au pixel près, conforme aux normes internationales les plus exigeantes en matière d’accessibilité." }) },
                { label: t({ en: "Cohesive Brand Systems", fr: "Des chartes de marque cohérentes" }), desc: t({ en: "Comprehensive digital style guides ensuring total visual sovereignty across all platforms.", fr: "Des guides de style complets pour une identité visuelle maîtrisée sur toutes les plateformes." }) }
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

      {/* Design Philosophy */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="font-headline text-[clamp(1.75rem,1rem+2vw,2.25rem)] font-bold mb-6 md:mb-8 uppercase tracking-wider text-on-surface text-center lg:text-left">{t({ en: 'Design Philosophy', fr: 'Notre philosophie du design' })}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8 text-sm md:text-base text-center lg:text-left">
              {t({
                en: 'Our design ethos is rooted in "Quiet Luxury"—a minimalist yet high-impact approach that prioritizes negative space, premium typography, and seamless interaction.',
                fr: 'Notre approche repose sur le « luxe discret » : un design minimaliste mais percutant, qui privilégie l’espace, une typographie soignée et des interactions fluides.'
              })}
            </p>
            <ul className="space-y-4">
              {t({
                en: [
                  "Pixel-Perfect Graphic Fidelity",
                  "Modern Glassmorphism Effects",
                  "Micro-Interaction Design",
                  "Cross-Platform Visual Consistency"
                ],
                fr: [
                  "Rendu graphique au pixel près",
                  "Effets glassmorphism modernes",
                  "Design de micro-interactions",
                  "Cohérence visuelle multiplateforme"
                ]
              }).map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface justify-center lg:justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary neon-glow-violet"></div>
                  <span className="font-headline uppercase tracking-[0.1em] text-xs md:text-sm font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden relative flex items-center justify-center ",
              "backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(119,1,208,0.1)]"
            )}
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [4, 3, 4], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <CreativeBlueprint />
                  <EnvironmentBoundary><Environment preset="studio" /></EnvironmentBoundary>
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

export default GraphicDesignPage;
