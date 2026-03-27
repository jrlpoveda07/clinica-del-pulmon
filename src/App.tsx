/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useParams, 
  useNavigate,
  useLocation
} from 'react-router-dom';
import { 
  Wind, 
  Baby, 
  Stethoscope, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  HeartPulse, 
  Microscope,
  Pill,
  Smile,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: isHomePage ? '#inicio' : '/#inicio' },
    { name: 'Servicios', href: isHomePage ? '#servicios' : '/#servicios' },
    { name: 'Nosotros', href: isHomePage ? '#nosotros' : '/#nosotros' },
    { name: 'Equipo Médico', href: '/equipo-medico' },
    { name: 'Contacto', href: isHomePage ? '#contacto' : '/#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/Logo%20clinica%20del%20pulmon.png" 
              alt="Logo Clínica del Pulmón" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              referrerPolicy="no-referrer"
            />
            <div className="hidden w-10 h-10 bg-clinic-blue rounded-full flex items-center justify-center">
              <Wind className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-clinic-blue">
              Clínica del <span className="text-clinic-red">Pulmón</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-clinic-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg text-slate-600 hover:text-clinic-blue font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-clinic-blue/5 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-20 -left-20 -z-10 w-64 h-64 bg-clinic-red/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-clinic-blue uppercase bg-clinic-blue/10 rounded-full">
              Especialistas en Salud Respiratoria
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Respirar bien es <span className="text-clinic-blue">vivir mejor</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Brindamos atención personalizada en neumología pediátrica y de adultos. 
              Cuidamos tus pulmones con tecnología moderna y la calidez que tú y tu familia merecen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center px-8 py-4 bg-clinic-blue text-white rounded-2xl font-bold text-lg hover:bg-clinic-blue-light transition-all shadow-xl shadow-clinic-blue/20 group"
              >
                Ver Servicios
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['child1', 'child2', 'child3', 'child4'].map((seed, i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${seed}/100/100`} 
                    alt="Paciente Infantil" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">+1,200 Niños Atendidos</p>
                <p className="text-xs text-slate-500">Especialistas en pediatría</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/Bienvenida%20clinica%20del%20pulmon.jpeg" 
                alt="Bienvenida Clínica del Pulmón" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-clinic-red rounded-xl flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Atención Pediátrica</p>
                <p className="text-xs text-slate-500">Ambiente seguro para niños</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "neumologia-pediatrica",
      title: "Neumología Pediátrica",
      desc: "Especialistas en asma, bronquitis y problemas respiratorios en niños y adolescentes.",
      icon: <Baby className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "odontologia",
      title: "Odontología",
      desc: "Cuidado integral de la salud bucal para niños y adultos con un trato amable.",
      icon: <Smile className="w-8 h-8" />,
      color: "bg-red-50 text-red-600"
    },
    {
      id: "laboratorio-clinico",
      title: "Laboratorio Clínico",
      desc: "Análisis precisos y rápidos para apoyar el diagnóstico y seguimiento médico.",
      icon: <Microscope className="w-8 h-8" />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: "farmacia",
      title: "Farmacia",
      desc: "Venta de medicamentos especializados y atención farmacéutica profesional.",
      icon: <Pill className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600">
            Ofrecemos una amplia gama de servicios especializados para el cuidado integral de tus pulmones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/servicios/${service.id}`}
              className="block"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-clinic-blue font-bold flex items-center gap-1 text-sm group">
                  Saber más <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/Nosotros.png" 
                alt="Nosotros" 
                className="rounded-3xl shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/Clinica.png" 
                alt="Clínica" 
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-clinic-blue rounded-full border-8 border-white flex items-center justify-center text-white shadow-xl">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-[10px] absolute bottom-6 uppercase tracking-widest font-bold">Años</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprometidos con tu Bienestar Respiratorio</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Somos una clínica especializada en neumología y atención respiratoria pediátrica. Brindamos diagnóstico, tratamiento y seguimiento para niños y adultos con problemas pulmonares, ofreciendo una atención personalizada en un ambiente cómodo, seguro y profesional. Nuestro compromiso es cuidar la salud respiratoria de cada paciente con calidez, experiencia y tecnología moderna.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Atención Personalizada", desc: "Cada paciente recibe un plan de tratamiento único.", icon: <ShieldCheck className="text-clinic-blue" /> },
                { title: "Ambiente Seguro", desc: "Instalaciones diseñadas para la comodidad de niños y adultos.", icon: <ShieldCheck className="text-clinic-blue" /> },
                { title: "Tecnología de Punta", desc: "Equipos modernos para diagnósticos precisos.", icon: <ShieldCheck className="text-clinic-blue" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-clinic-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
            <p className="text-blue-100 text-lg mb-10">
              Estamos listos para atenderte. Visítanos en nuestra clínica o contáctanos por nuestros canales oficiales.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold">Dirección</p>
                  <p className="text-blue-100">Nuevo HEODRA 150 mts al Norte, Léon</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold">Teléfono</p>
                  <p className="text-blue-100">+505 88863483</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold">Horario</p>
                  <div className="text-blue-100 text-sm mt-1 space-y-1">
                    <p>Lun - Mié: 8:00 am a 5:00 pm</p>
                    <p>Jueves: Cerrado</p>
                    <p>Viernes: 8:00 am a 5:00 pm</p>
                    <p>Sábado: 8:00 am a 12:00 pm</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-2 shadow-2xl h-[400px] lg:h-auto">
            <iframe 
              src="https://maps.google.com/maps?q=12.453224,-86.869610&hl=es&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="Ubicación de la Clínica"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
          <div className="flex items-center gap-2">
            <img 
              src="/Logo%20clinica%20del%20pulmon.png" 
              alt="Logo Clínica del Pulmón" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
              referrerPolicy="no-referrer"
            />
            <div className="hidden w-8 h-8 bg-clinic-blue rounded-full flex items-center justify-center">
              <Wind className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">
              Clínica del <span className="text-clinic-red">Pulmón</span>
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Clínica del Pulmón. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Subpages ---

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const servicesData: Record<string, any> = {
    "neumologia-pediatrica": {
      title: "Neumología Pediátrica",
      subtitle: "Cuidado experto para los pulmones de tus hijos",
      icon: <Baby className="w-12 h-12" />,
      color: "bg-blue-50 text-blue-600",
      image: "/neumologia%20pediadrica.jpeg",
      content: "Nuestra unidad de neumología pediátrica se especializa en el diagnóstico y tratamiento de enfermedades respiratorias en niños, desde recién nacidos hasta adolescentes. Entendemos que los niños no son adultos pequeños y requieren un enfoque especializado.",
      features: [
        "Control y manejo de Asma Infantil",
        "Tratamiento de Bronquiolitis y Bronquitis",
        "Evaluación de Neumonías recurrentes",
        "Pruebas de función pulmonar pediátrica",
        "Seguimiento de Fibrosis Quística"
      ]
    },
    "odontologia": {
      title: "Odontología",
      subtitle: "Sonrisas saludables para toda la familia",
      icon: <Smile className="w-12 h-12" />,
      color: "bg-red-50 text-red-600",
      image: "/odontologia.jpeg",
      content: "Ofrecemos servicios odontológicos integrales con un enfoque en la prevención y el cuidado delicado. Nuestro equipo está capacitado para atender a pacientes de todas las edades, asegurando una experiencia cómoda y sin estrés.",
      features: [
        "Limpieza dental profunda y profilaxis",
        "Odontopediatría especializada",
        "Tratamiento de caries y restauraciones",
        "Ortodoncia preventiva",
        "Extracciones y cirugía menor"
      ]
    },
    "laboratorio-clinico": {
      title: "Laboratorio Clínico",
      subtitle: "Resultados precisos para decisiones médicas seguras",
      icon: <Microscope className="w-12 h-12" />,
      color: "bg-green-50 text-green-600",
      image: "/servicio%20laboratorio.jpeg",
      content: "Contamos con tecnología de vanguardia para realizar una amplia gama de análisis clínicos. Nuestro laboratorio cumple con los más altos estándares de calidad para garantizar resultados confiables en el menor tiempo posible.",
      features: [
        "Hematología y Bioquímica completa",
        "Pruebas inmunológicas y hormonales",
        "Exámenes de orina y coprológicos",
        "Pruebas de alergias respiratorias",
        "Servicio de toma de muestras a domicilio"
      ]
    },
    "farmacia": {
      title: "Farmacia",
      subtitle: "Tus medicamentos siempre a la mano",
      icon: <Pill className="w-12 h-12" />,
      color: "bg-purple-50 text-purple-600",
      image: "/farmacia.jpeg",
      content: "Nuestra farmacia interna ofrece una selección completa de medicamentos, con especial énfasis en tratamientos respiratorios. Brindamos asesoría profesional para asegurar el uso correcto de cada fármaco.",
      features: [
        "Medicamentos especializados en neumología",
        "Inhaladores y equipos de nebulización",
        "Fórmulas magistrales",
        "Atención farmacéutica personalizada",
        "Programas de adherencia al tratamiento"
      ]
    }
  };

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <button onClick={() => navigate('/')} className="text-clinic-blue font-bold">Volver al inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-clinic-blue transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Volver al Inicio
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
              {service.icon}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">{service.title}</h1>
            <p className="text-xl text-clinic-blue font-medium mb-8">{service.subtitle}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {service.content}
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">¿Qué incluimos?</h3>
              <ul className="space-y-4">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="text-clinic-blue shrink-0" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-32"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-8 bg-clinic-blue p-8 rounded-3xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-2">¿Necesitas más información?</h4>
              <p className="text-blue-100 mb-6">Contáctanos directamente para resolver tus dudas sobre este servicio.</p>
              <a 
                href="/#contacto" 
                className="inline-block bg-white text-clinic-blue px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Contactar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MedicalTeam = () => {
  const team = [
    {
      name: "Dra. María Elena Urbina",
      specialty: "Neumóloga Pediatra",
      image: "/Dra. Maria Elenea Urbina.jpeg",
      description: "Especialista en enfermedades respiratorias con más de 15 años de experiencia.",
      imagePosition: "object-[center_40%]"
    },
    {
      name: "Dra. Belkis Reyes",
      specialty: "Odontóloga",
      image: "/Dra Belkis Reyes.jpeg",
      description: "Especialista en odontología integral y estética.",
      imagePosition: "object-top"
    },
    {
      name: "Dr. Máximo Alonso",
      specialty: "Bioanalista Clínico",
      image: "/Dr. Alonso.jpeg",
      description: "Especialista en análisis clínicos y diagnóstico de laboratorio.",
      imagePosition: "object-top"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestro Equipo Médico</h1>
          <p className="text-lg text-slate-600">
            Contamos con un equipo de especialistas altamente calificados y comprometidos con tu salud respiratoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className={`w-full h-96 object-cover ${doctor.imagePosition || 'object-top'}`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src.includes('.jpg')) {
                    target.src = target.src.replace('.jpg', '.png');
                  } else if (target.src.includes('.png')) {
                    target.src = target.src.replace('.png', '.jpeg');
                  }
                }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
                <p className="text-clinic-blue font-medium mb-4">{doctor.specialty}</p>
                <p className="text-slate-600">{doctor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-clinic-blue selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/:id" element={<ServiceDetail />} />
          <Route path="/equipo-medico" element={<MedicalTeam />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
