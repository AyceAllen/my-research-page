import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, ArrowRight } from 'lucide-react'; // Using Lucide icons for polished look

// ==================================================================
// 🌍 TIPOGRAFÍA Y PALETA DE COLORES
// - Primario: Slate (profundidad, seriedad)
// - Secundario: Soft Gray (fondo, legibilidad)
// - Acento: Teal/Sage (esperanza, crecimiento, resiliencia)
// ==================================================================

// Framer Motion Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// ------------------------------------------------------------------
// �️ Secciones de la Página
// ------------------------------------------------------------------
// 🏛️ Secciones de la Página
// ------------------------------------------------------------------

// 1. Hero Section: The Core Problem
const HeroSection: React.FC = () => (
  <motion.section
    className="relative h-[80vh] flex items-center justify-center text-center px-4 py-20"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Subtle background gradient/texture, mimicking a high-end system UI */}
    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-50 to-white"></div>

    <motion.div
      className="max-w-4xl z-10"
      variants={containerVariants}
    >
      <motion.p
        className="text-lg font-semibold uppercase tracking-[0.3em] text-teal-600 mb-4"
        variants={itemVariants}
      >
        Investigación en Salud Pública y Juventud
      </motion.p>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900"
        variants={itemVariants}
      >
        Navegando Desafíos. Activando la Capacidad.
        <span className="block text-teal-600 mt-4">
          Resiliencia y Agencia Juvenil en Perú.
        </span>
      </motion.h1>

      <motion.div
        className="mt-12 flex justify-center"
        variants={itemVariants}
      >
        <a
          href="#results"
          className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full shadow-lg bg-teal-600 text-white hover:bg-teal-700 transition duration-300 transform hover:scale-[1.03]"
        >
          Ver Resultados Clave
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  </motion.section>
);


// 2. Problem Statement & Context (The "Why")
const ProblemSection: React.FC = () => (
  <motion.section
    id="problem"
    className="py-24 lg:py-32 bg-gray-50 border-t border-gray-200"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div className="max-w-7xl mx-auto px-6 lg:px-8" variants={containerVariants}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

        {/* Left Column: Text Narrative */}
        <motion.div
          className="lg:col-span-7 mb-12 lg:mb-0"
          variants={containerVariants}
        >
          <motion.h2
            className="text-base font-semibold tracking-widest text-teal-600 uppercase mb-3"
            variants={itemVariants}
          >
            El Contexto Vulnerable
          </motion.h2>
          <motion.h3
            className="text-5xl font-extrabold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Desafíos Interrelacionados en la Juventud.
          </motion.h3>
          <motion.p
            className="text-xl text-gray-700 leading-relaxed space-y-6"
            variants={itemVariants}
          >
            {/* The core problem description, elegantly rewritten */}
            <p>
              Los adolescentes en entornos socioeconómicamente vulnerables enfrentan una convergencia compleja de obstáculos: académicos, emocionales, relacionales y económicos. Este panorama no es una simple lista de carencias, sino una arquitectura de desafíos que moldea su desarrollo integral.
            </p>
            <p>
              Históricamente, la investigación ha tendido a priorizar perspectivas basadas en el riesgo y centradas en el adulto. Este enfoque a menudo subestima la capacidad inherente de los jóvenes, ignorando sus fuentes de fortaleza y sus mecanismos de resistencia activa.
            </p>
            <p className="font-semibold text-gray-900">
              Nuestro estudio busca revertir este sesgo, entendiendo cómo los jóvenes en Acobamba (Perú) perciben sus desafíos y cómo movilizan recursos para navegar su realidad.
            </p>
          </motion.p>
        </motion.div>

        {/* Right Column: Visual Callout */}
        <motion.div
          className="lg:col-span-5"
          variants={containerVariants}
        >
          <div className="p-8 rounded-3xl bg-white shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-teal-50 to-white"></div>

            <div className="flex items-center space-x-4 mb-4">
              <Brain className="w-8 h-8 text-teal-600" />
              <h4 className="text-2xl font-bold text-gray-900">Perspectiva Salutogénica</h4>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              En lugar de solo enfocarnos en las patologías o los riesgos (el modelo de enfermedad), adoptamos una lente salutogénica, concentrándonos en el *porqué* la vida funciona a pesar de las adversidades, priorizando las capacidades y los recursos que permiten el bienestar y el sentido.
            </p>
            <div className="mt-6">
              <a href="#conclusion" className="text-teal-600 font-medium flex items-center hover:text-teal-700 transition duration-200">
                → Conocer la Metodología Completa
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  </motion.section>
);

// 3. GRRs & Agency (The Discovery - Visual Focus)
const KeyFindingsSection: React.FC = () => (
  <section
    id="results"
    className="py-24 lg:py-32"
  >
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-center text-5xl font-extrabold text-gray-900 mb-4"
        variants={itemVariants}
      >
        La Dinámica de la Resistencia
      </motion.h2>
      <motion.p
        className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Los jóvenes no son receptores pasivos. Su agencia es una capacidad dinámica y contextual, construida a través de la movilización de múltiples recursos internos y externos.
      </motion.p>

      {/* GRR Resource Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
        {['Personal', 'Social', 'Espiritual', 'Digital', 'Institucional'].map((resource) => (
          <motion.div
            key={resource}
            className="text-center p-6 rounded-xl border border-gray-200 bg-white hover:border-teal-300 transition cursor-pointer shadow-md"
            variants={itemVariants}
          >
            <Brain className="w-8 h-8 mx-auto mb-2 text-teal-600" />
            <h4 className="text-lg font-semibold text-gray-800">{resource}</h4>
            <p className="text-sm text-gray-500 mt-1">{`Mecanismo de apoyo clave.`}</p>
          </motion.div>
        ))}
      </div>

      {/* Agency & The Gap Visualization */}
      <div className="mt-20 text-center">
        <motion.div
          className="relative max-w-5xl mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-teal-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-2">Agencia: Un Equilibrio Dinámico</h3>
            <p className="text-xl text-gray-600">El punto de encuentro entre la capacidad individual y las barreras estructurales.</p>
          </div>

          {/* Conceptual Diagram Representation */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">

            {/* Left side: Resources/Agency */}
            <div className="flex-1 text-left p-6 bg-teal-50 rounded-xl border border-teal-200 shadow-inner">
              <h4 className="text-2xl font-bold text-teal-800 mb-3">LA CAPACIDAD JUVENIL</h4>
              <p className="text-gray-700">
                Los adolescentes movilizan GRRs para la regulación emocional y la resolución de problemas, ejerciendo una agencia activa y contextual.
              </p>
            </div>

            {/* Center: The Conflict / Bounded Agency */}
            <motion.div
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="w-full h-full bg-red-500 rounded-full shadow-xl animate-pulse"></div>
            </motion.div>

            {/* Right side: Structural Barriers / Adult View */}
            <div className="flex-1 text-right p-6 bg-slate-100 rounded-xl border border-gray-200 shadow-inner">
              <h4 className="text-2xl font-bold text-gray-800 mb-3">EL MARCO ESTRUCTURAL</h4>
              <p className="text-gray-700">
                El enfoque adulto tiende a enfatizar el riesgo y la dependencia, lo que puede limitar la percepción de su autonomía real.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

// 4. Policy & Conclusion (The Action - The "So What?")
const ConclusionSection: React.FC = () => (
  <motion.section
    id="conclusion"
    className="py-24 lg:py-32 bg-gray-900 text-white"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

        {/* Left: Title & Main Argument */}
        <motion.div className="lg:col-span-7" variants={containerVariants}>
          <motion.h2
            className="text-base font-semibold tracking-widest text-teal-400 uppercase mb-3"
            variants={itemVariants}
          >
            Implicaciones de Política Pública
          </motion.h2>
          <motion.h3
            className="text-6xl font-extrabold text-white mb-10 leading-tight"
            variants={itemVariants}
          >
            La necesidad de cerrar la brecha de perspectiva.
          </motion.h3>
          <motion.div
            className="space-y-6 text-xl text-gray-300"
            variants={itemVariants}
          >
            <p>
              El bienestar juvenil es un fenómeno complejo, definido por la interacción entre las condiciones estructurales del entorno y la capacidad de movilización de recursos del individuo. Reconocer esta dualidad es fundamental.
            </p>
            <ul className="space-y-4 pl-4 list-disc list-inside text-gray-300">
              <li><span className="font-bold text-teal-400">Reconocimiento:</span> Validar y activar los recursos internos (GRRs) que poseen los adolescentes.</li>
              <li><span className="font-bold text-teal-400">Validación:</span> Garantizar que estos recursos sean socialmente reconocidos dentro del contexto educativo y comunitario.</li>
              <li><span className="font-bold text-teal-400">Integración:</span> Integrar perspectivas de género y contextuales en la salud y la educación.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right: CTA Block */}
        <motion.div className="lg:col-span-5 mt-12 lg:mt-0" variants={containerVariants}>
          <div className="p-10 rounded-3xl bg-teal-900/50 border border-teal-800 text-center shadow-2xl">
            <h4 className="text-4xl font-extrabold text-teal-400 mb-4">
              Transformar la Acción.
            </h4>
            <p className="text-xl text-gray-200 mb-8">
              La promoción de la salud debe enfocarse en fortalecer las capacidades, abordando simultáneamente las barreras estructurales.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-10 py-4 text-xl font-bold rounded-full shadow-teal-500/50 bg-teal-600 text-white hover:bg-teal-700 transition duration-300 transform hover:scale-105"
            >
              Descargar Informe Completo
              <ArrowRight className="ml-3 w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
);

// ==================================================================
// 🚀 COMPONENTE PRINCIPAL
// ==================================================================

const ResearchPage: React.FC = () => {
  // Note: Reduced motion preference should be handled in global CSS or Tailwind setup
  // but for demonstration, we assume standard browser behavior.

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Global Navigation (Minimalist Header) */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-extrabold tracking-tighter text-gray-900">
            [Salutogenesis Project]
          </div>
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="#problem" className="text-gray-600 hover:text-teal-600 transition">El Desafío</a>
            <a href="#results" className="text-gray-600 hover:text-teal-600 transition">Hallazgos</a>
            <a href="#conclusion" className="text-gray-600 hover:text-teal-600 transition">Implicaciones</a>
          </nav>
          <button className="p-2 border border-teal-600 text-teal-600 rounded-full hover:bg-teal-50 transition">
            <Cpu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main>
        <HeroSection />
        <ProblemSection />
        <KeyFindingsSection />
        <ConclusionSection />
      </main>

      {/* Footer - Minimal and Authoritative */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl font-bold text-teal-400 mb-2">[Research & Development Team]</p>
          <p className="text-gray-400 text-sm">
            Artículo Original. Publicado: 29 de abril de 2026 | DOI: 10.3389/fpubh.2026.1824105.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchPage;
