import React from 'react';
import { 
  Rocket, 
  GraduationCap, 
  Brain, 
  Building2, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Target,
  Heart,
  Award,
  Users,
  Lightbulb,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

const services = [
  {
    id: 'incubation',
    icon: Rocket,
    title: 'Incubation',
    shortDesc: 'Accélérez votre startup',
    description: `Notre programme d'incubation offre un accompagnement complet aux startups innovantes. 
    De l'idéation au lancement, nous vous guidons à chaque étape avec un soutien personnalisé.`,
    features: [
      'Mentorat personnalisé',
      'Espace de travail dédié',
      'Accès au réseau d\'investisseurs',
      'Support technique',
      'Accompagnement business'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'innovation',
    icon: Lightbulb,
    title: 'Innovation Lab',
    shortDesc: 'Créez le futur',
    description: `Notre Innovation Lab est un espace de création et d'expérimentation où les idées 
    prennent vie. Équipé des dernières technologies, il permet de prototyper et tester rapidement vos innovations.`,
    features: [
      'Équipements de pointe',
      'Expertise technique',
      'Prototypage rapide',
      'Tests utilisateurs',
      'Veille technologique'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'formation',
    icon: GraduationCap,
    title: 'Formation',
    shortDesc: 'Développez vos compétences',
    description: `Nos programmes de formation sont conçus pour répondre aux besoins du marché numérique. 
    Apprenez avec des experts et développez les compétences essentielles pour réussir.`,
    features: [
      'Formations certifiantes',
      'Experts du domaine',
      'Projets pratiques',
      'Suivi personnalisé',
      'Réseau alumni'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  },
  {
    id: 'conseil',
    icon: Brain,
    title: 'Conseil',
    shortDesc: 'Transformez votre entreprise',
    description: `Notre expertise en transformation digitale vous accompagne dans votre évolution. 
    Nous vous aidons à définir et mettre en œuvre votre stratégie numérique.`,
    features: [
      'Audit digital',
      'Stratégie numérique',
      'Accompagnement change',
      'Solutions sur mesure',
      'Optimisation processus'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  }
];

const stats = [
  { number: '50+', label: 'Startups Accompagnées', icon: Building2 },
  { number: '100+', label: 'Experts', icon: Users },
  { number: '1M$+', label: 'Levées de fonds', icon: Target },
  { number: '95%', label: 'Satisfaction', icon: Heart }
];

const features = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Des services de qualité internationale'
  },
  {
    icon: Users,
    title: 'Personnalisation',
    description: 'Solutions adaptées à vos besoins'
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Résultats mesurables et durables'
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Accompagnement de proximité'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-12 sm:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pre-title Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200 font-medium">Solutions sur mesure</span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Nos Programmes
              
              <br />
              <span className="bg-gradient-to-r from-primary-200 to-primary-400 text-transparent bg-clip-text">
              d'Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Des programmes innovants conçus pour accélérer votre croissance et développer vos compétences dans le numérique
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-4 sm:py-6 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-300 mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm sm:text-base text-primary-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          className={`py-24 ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          id={service.id}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {serviceIndex % 2 === 0 ? (
                <>
                  <ServiceContent service={service} />
                  <ServiceImage service={service} />
                </>
              ) : (
                <>
                  <ServiceImage service={service} />
                  <ServiceContent service={service} />
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir</h2>
            <p className="text-xl text-gray-600">Notre engagement pour votre réussite</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à transformer votre projet ?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-500 hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

// Service Content Component
function ServiceContent({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <service.icon className="h-8 w-8 text-primary-500" />
        <h2 className="text-3xl font-bold">{service.title}</h2>
      </div>
      
      <p className="text-lg text-gray-600">{service.description}</p>
      
      {/* Main Features */}
      <div className="space-y-4">
        {service.features.map((feature: string, index: number) => (
          <div key={index} className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to="/programmes/$id"
        params={{ id: String(service.id) }}
        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
      >
        En savoir plus
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
}

// Service Image Component
function ServiceImage({ service }: { service: (typeof services)[number] }) {
  return (
    <div
      className="relative h-96 rounded-xl overflow-hidden shadow-xl"
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-primary-600 text-sm font-medium">
          <service.icon className="h-4 w-4 mr-2" />
          {service.shortDesc}
        </span>
      </div>
    </div>
  );
}