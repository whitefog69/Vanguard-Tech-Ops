import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Environment, OrbitControls, Grid, Sphere, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '../../lib/utils';
import { Server, Shield, Cloud, Cpu, Lock, Network } from 'lucide-react';
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

const CloudNode = ({ position, color }: { position: [number, number, number], color: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
  });

  return (
    <Box ref={ref} args={[0.5, 0.5, 0.5]} position={position}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </Box>
  );
};

const NodeCluster = () => {
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2;
      arr.push({
        pos: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [number, number, number],
        color: i % 2 === 0 ? "#0047ab" : "#b1c5ff"
      });
    }
    return arr;
  }, []);

  return (
    <group>
      {nodes.map((node, i) => (
        <CloudNode key={i} position={node.pos} color={node.color} />
      ))}
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0047ab" emissive="#0047ab" emissiveIntensity={2} />
      </Box>
      <Grid infiniteGrid fadeDistance={10} cellColor="#0047ab" sectionColor="#b1c5ff" />
    </group>
  );
};

const ServerStack = () => {
  const cloudRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (cloudRef.current) {
      cloudRef.current.rotation.y = t * 0.1;
      cloudRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  const spheres = useMemo(() => [...Array(50)], []);

  return (
    <group>
      {/* Server Racks */}
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} args={[2, 0.4, 2]} position={[0, i * 0.5 - 1, 0]}>
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.9} 
            roughness={0.1} 
            transparent 
            opacity={0.8} 
          />
        </Box>
      ))}
      
      {/* Top Open Unit Glow */}
      <Box args={[2, 0.1, 2]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#0047ab" emissive="#0047ab" emissiveIntensity={5} />
        <pointLight intensity={10} color="#0047ab" />
      </Box>

      {/* Ethereal Cloud */}
      <group ref={cloudRef} position={[0, 1.5, 0]}>
        {spheres.map((_, i) => (
          <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[0.1 + Math.random() * 0.2, 16, 16]} position={[(Math.random()-0.5)*1.5, Math.random()*1.5, (Math.random()-0.5)*1.5]}>
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#b1c5ff" : "#dcb8ff"} 
                transparent 
                opacity={0.3} 
                emissive={i % 2 === 0 ? "#0047ab" : "#7701d0"}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        ))}
      </group>

      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
    </group>
  );
};

const CloudPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <SEO
        title={t({ en: "Virtualization & Cloud Infrastructure", fr: "Virtualisation & infrastructure cloud" })}
        description={t({
          en: "Expert orchestration of cloud infrastructure and virtualization environments. Scaling AWS, OCI, and private clusters with zero-trust security architecture.",
          fr: "Orchestration experte d’infrastructures cloud et d’environnements virtualisés. AWS, OCI et clusters privés avec une architecture de sécurité zero trust."
        })}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden lg:py-0">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-bg.png`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={`${import.meta.env.BASE_URL}assets/services/cloud/cloud-hero.mp4`} type="video/mp4" />
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
            <div className="inline-block p-3 md:p-4 rounded-full bg-primary-container/20 mb-6 md:mb-8 border border-primary/20 neon-glow-cobalt">
              <Server className="w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              {t({ en: 'Virtualization &', fr: 'Virtualisation &' })} <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container neon-glow-cobalt">Cloud</span>
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide mb-8 md:mb-12">
              {t({
                en: 'Expert orchestration of cloud infrastructure and virtualization environments for enterprise stability and security.',
                fr: 'Orchestration experte d’infrastructures cloud et d’environnements virtualisés pour une stabilité et une sécurité de niveau entreprise.'
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-8 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Server, title: t({ en: "Server Creation & Management", fr: "Création & gestion de serveurs" }), desc: t({ en: "End-to-end setup and oversight of high-performance server environments.", fr: "Mise en place et supervision de bout en bout d’environnements serveur haute performance." }) },
            { icon: Cloud, title: t({ en: "AWS & Cloud Infrastructure", fr: "AWS & infrastructure cloud" }), desc: t({ en: "Expert orchestration of Amazon Web Services and multi-cloud ecosystems.", fr: "Orchestration experte d’Amazon Web Services et d’écosystèmes multi-cloud." }) },
            { icon: Network, title: t({ en: "Oracle Cloud Solutions", fr: "Solutions Oracle Cloud" }), desc: t({ en: "Specialized deployment and management of Oracle Cloud Infrastructure (OCI).", fr: "Déploiement et gestion spécialisés d’Oracle Cloud Infrastructure (OCI)." }) },
            { icon: Cpu, title: t({ en: "Linux Virtualization", fr: "Virtualisation Linux" }), desc: t({ en: "Precise configuration of Linux-based virtual environments for stability and security.", fr: "Configuration précise d’environnements virtuels Linux, pour la stabilité et la sécurité." }) },
            { icon: Lock, title: t({ en: "Windows Virtualization", fr: "Virtualisation Windows" }), desc: t({ en: "Seamless implementation of Windows virtual systems for enterprise operations.", fr: "Mise en œuvre fluide de systèmes virtuels Windows pour vos opérations." }) }
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
                "hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,71,171,0.05)]"
              )}
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 md:mb-6 opacity-80 group-hover:opacity-100 group-hover:text-primary-container transition-all duration-300" />
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
            className="w-full aspect-square md:aspect-video lg:aspect-square rounded-xl bg-[#0d0d0d] border border-primary/20 shadow-2xl relative overflow-hidden group "
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <NodeCluster />
                  </Float>
                  <EnvironmentBoundary><Environment preset="city" /></EnvironmentBoundary>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-4 left-4 text-primary/50 font-mono font-bold uppercase tracking-tighter text-[10px] flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              PROVISIONING_SOVEREIGN_CLUSTER
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-on-surface uppercase">
              {t({ en: 'INFRASTRUCTURE', fr: 'SOUVERAINETÉ' })} <span className="text-primary italic pr-[0.15em]">{t({ en: 'SOVEREIGNTY', fr: 'D’INFRASTRUCTURE' })}</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: t({ en: "Multi-Cloud Orchestration", fr: "Orchestration multi-cloud" }), desc: t({ en: "Seamless integration across AWS, OCI, and private clusters for 100% uptime.", fr: "Intégration fluide entre AWS, OCI et clusters privés pour une disponibilité de 100 %." }) },
                { label: t({ en: "Hardened Virtualization", fr: "Virtualisation renforcée" }), desc: t({ en: "Kernel-level security hardening with hardware-rooted trust chains.", fr: "Durcissement de la sécurité au niveau du noyau, avec chaînes de confiance matérielles." }) },
                { label: t({ en: "Automated Failover", fr: "Basculement automatique" }), desc: t({ en: "Instant node replication and load balancing for enterprise-grade resilience.", fr: "Réplication instantanée des nœuds et répartition de charge pour une résilience de niveau entreprise." }) }
              ].map((point, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(0,71,171,0.8)]" />
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

      {/* Architectural Specs */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-widest text-on-surface">{t({ en: 'Architectural Specifications', fr: 'Spécifications techniques' })}</h2>
            <ul className="space-y-4 md:space-y-6">
              {t({
                en: [
                  "Zero-Trust Network Architecture (ZTNA)",
                  "Immutable Infrastructure Deployment",
                  "Automated Load Balancing & Failover",
                  "Hardware-Rooted Trust Chains",
                  "Post-Quantum Encryption Protocols"
                ],
                fr: [
                  "Architecture réseau zero trust (ZTNA)",
                  "Déploiement d’infrastructure immuable",
                  "Répartition de charge & basculement automatiques",
                  "Chaînes de confiance matérielles",
                  "Protocoles de chiffrement post-quantique"
                ]
              }).map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant bg-surface-container-low p-3 md:p-4 rounded-lg border border-outline-variant/10">
                  <div className="w-2 h-2 rounded-full bg-primary neon-glow-cobalt"></div>
                  <span className="font-body uppercase tracking-[0.1em] text-xs md:text-sm">{text}</span>
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
              "backdrop-blur-md bg-white/5 border border-white/10",
              "neon-glow-cobalt shadow-[0_0_50px_rgba(0,71,171,0.1)]"
            )}
          >
            <InteractionIndicator />
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [4, 2, 4], fov: 45 }}>
                <Suspense fallback={null}>
                  <color attach="background" args={['#0d0d0d']} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <ServerStack />
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

export default CloudPage;
