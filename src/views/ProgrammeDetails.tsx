import React from 'react';
import { useParams, Link, useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Target,
  CheckCircle2,
  Award,
  BookOpen,
  Rocket,
  Code2,
  GraduationCap,
  Brain,
  ArrowRight,
  Building2,
  Lightbulb,
  MessageSquare,
  Zap,
  Network
} from 'lucide-react';

const programmes = {
  incubation: {
    id: 'incubation',
    title: 'Programme d\'Incubation',
    icon: Rocket,
    duration: '6 mois',
    nextCohort: '15 Septembre 2025',
    capacity: '10 startups',
    description: `Notre programme d'incubation est conçu pour transformer vos idées innovantes en entreprises 
    prospères. Pendant 6 mois intensifs, vous bénéficierez d'un accompagnement personnalisé, d'un accès à 
    notre réseau d'experts et de ressources essentielles pour accélérer votre croissance.`,
    benefits: [
      'Accompagnement personnalisé par des mentors experts',
      'Espace de travail collaboratif',
      'Accès au réseau d\'investisseurs',
      'Workshops hebdomadaires',
      'Support technique et business',
      'Visibilité médiatique'
    ],
    modules: [
      {
        title: 'Idéation et Validation',
        icon: Lightbulb,
        duration: '4 semaines',
        description: 'Affinez votre idée et validez votre marché'
      },
      {
        title: 'Développement Produit',
        icon: Code2,
        duration: '8 semaines',
        description: 'Construisez votre MVP et testez avec des utilisateurs'
      },
      {
        title: 'Business Development',
        icon: Building2,
        duration: '8 semaines',
        description: 'Développez votre modèle d\'affaires et stratégie commerciale'
      },
      {
        title: 'Pitch et Levée de fonds',
        icon: Target,
        duration: '4 semaines',
        description: 'Préparez-vous pour les investisseurs'
      }
    ],
    testimonials: [
      {
        quote: "L'incubation chez UKAMILI a été un véritable accélérateur pour notre startup. Le mentorat et le réseau sont inestimables.",
        author: "Sarah Mwamba",
        role: "CEO, TechInnovate",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        quote: "En 6 mois, nous avons accompli ce qui nous aurait pris 2 ans. L'écosystème UKAMILI est unique.",
        author: "Jean Mukeba",
        role: "Fondateur, DigitalKat",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    successMetrics: [
      { number: '90%', label: 'Taux de survie', icon: Target },
      { number: '2M$+', label: 'Fonds levés', icon: Rocket },
      { number: '100+', label: 'Emplois créés', icon: Users },
      { number: '85%', label: 'Croissance moyenne', icon: Zap }
    ]
  },
  innovation: {
    id: 'innovation',
    title: 'Innovation Lab',
    icon: Lightbulb,
    duration: 'Accès permanent',
    capacity: 'Illimité',
    description: `L'Innovation Lab est un espace de création et d'expérimentation équipé des dernières 
    technologies. C'est un environnement idéal pour prototyper vos innovations et collaborer avec d'autres 
    créateurs.`,
    benefits: [
      'Accès aux équipements de pointe',
      'Expertise technique sur place',
      'Espace de prototypage',
      'Collaboration interdisciplinaire',
      'Workshops techniques',
      'Événements d\'innovation'
    ],
    modules: [
      {
        title: 'Prototypage Rapide',
        icon: Zap,
        duration: 'Flexible',
        description: 'Créez des prototypes fonctionnels rapidement'
      },
      {
        title: 'Innovation Design',
        icon: Lightbulb,
        duration: 'Flexible',
        description: 'Appliquez les méthodologies de design thinking'
      },
      {
        title: 'Développement Tech',
        icon: Code2,
        duration: 'Flexible',
        description: 'Développez vos solutions techniques'
      },
      {
        title: 'Tests & Validation',
        icon: Target,
        duration: 'Flexible',
        description: 'Testez vos innovations avec des utilisateurs réels'
      }
    ],
    testimonials: [
      {
        quote: "L'Innovation Lab nous a permis de prototyper notre solution en un temps record. Les équipements et l'expertise technique sont exceptionnels.",
        author: "Marc Kabongo",
        role: "CTO, InnovTech",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    successMetrics: [
      { number: '50+', label: 'Prototypes', icon: Lightbulb },
      { number: '30+', label: 'Brevets', icon: Award },
      { number: '200+', label: 'Utilisateurs', icon: Users },
      { number: '95%', label: 'Satisfaction', icon: Target }
    ]
  },
  formation: {
    id: 'formation',
    title: 'Programme de Formation',
    icon: GraduationCap,
    duration: '3 à 6 mois',
    nextCohort: '1er Octobre 2025',
    capacity: '25 apprenants par cohorte',
    description: `Nos programmes de formation sont conçus pour répondre aux besoins du marché numérique. 
    Développez des compétences pratiques avec des experts du domaine et intégrez rapidement le marché du travail.`,
    benefits: [
      'Formation pratique et intensive',
      'Projets réels',
      'Mentoring personnalisé',
      'Certification reconnue',
      'Stage en entreprise',
      'Réseau alumni actif'
    ],
    modules: [
      {
        title: 'Fondamentaux Tech',
        icon: Code2,
        duration: '6 semaines',
        description: 'Maîtrisez les bases du développement'
      },
      {
        title: 'Spécialisation',
        icon: Target,
        duration: '8 semaines',
        description: 'Approfondissez votre domaine d\'expertise'
      },
      {
        title: 'Projet Pro',
        icon: Rocket,
        duration: '8 semaines',
        description: 'Réalisez un projet concret'
      },
      {
        title: 'Stage',
        icon: Building2,
        duration: '12 semaines',
        description: 'Mettez en pratique vos compétences'
      }
    ],
    testimonials: [
      {
        quote: "La formation m'a permis de me reconvertir dans le numérique. Aujourd'hui, je travaille comme développeur full-stack.",
        author: "Alice Mutombo",
        role: "Développeuse, TechCorp",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    successMetrics: [
      { number: '95%', label: 'Insertion pro', icon: Target },
      { number: '500+', label: 'Diplômés', icon: GraduationCap },
      { number: '50+', label: 'Entreprises', icon: Building2 },
      { number: '100%', label: 'Recommandation', icon: Award }
    ]
  },
  conseil: {
    id: 'conseil',
    title: 'Service Conseil',
    icon: Brain,
    duration: 'Sur mesure',
    capacity: 'Selon projet',
    description: `Notre expertise en transformation digitale accompagne les entreprises dans leur évolution. 
    Nous vous aidons à définir et mettre en œuvre votre stratégie numérique pour rester compétitif.`,
    benefits: [
      'Analyse stratégique personnalisée',
      'Expertise sectorielle',
      'Accompagnement sur mesure',
      'Solutions innovantes',
      'Suivi des résultats',
      'Formation des équipes'
    ],
    modules: [
      {
        title: 'Diagnostic Digital',
        icon: Target,
        duration: '2-4 semaines',
        description: 'Évaluez votre maturité numérique'
      },
      {
        title: 'Stratégie',
        icon: Lightbulb,
        duration: '4-6 semaines',
        description: 'Définissez votre feuille de route'
      },
      {
        title: 'Implémentation',
        icon: Zap,
        duration: '3-6 mois',
        description: 'Mettez en œuvre les solutions'
      },
      {
        title: 'Suivi',
        icon: Target,
        duration: 'Continu',
        description: 'Mesurez et optimisez les résultats'
      }
    ],
    testimonials: [
      {
        quote: "L'accompagnement d'UKAMILI a été déterminant dans notre transformation digitale. Leur expertise a fait la différence.",
        author: "Paul Musafiri",
        role: "DG, Industries Katanga",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ],
    successMetrics: [
      { number: '30+', label: 'Entreprises', icon: Building2 },
      { number: '40M$+', label: 'ROI généré', icon: Target },
      { number: '95%', label: 'Satisfaction', icon: Award },
      { number: '100%', label: 'Projets réussis', icon: Zap }
    ]
  }
};

export default function ProgrammeDetails() {
  const { id } = useParams({ from: '/programmes/$id' });
  const navigate = useNavigate();
  const programme = programmes[id as keyof typeof programmes];

  if (!programme) {
    navigate({ to: '/programmes', replace: true });
    return null;
  }

  const Icon = programme.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate({ to: '/programmes' })}
            className="flex items-center text-primary-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux programmes
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Icon className="h-16 w-16 text-primary-200" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {programme.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-primary-200">
                  <Clock className="h-5 w-5 mr-2" />
                  {programme.duration}
                </div>
                {'nextCohort' in programme && programme.nextCohort && (
                  <div className="flex items-center text-primary-200">
                    <Calendar className="h-5 w-5 mr-2" />
                    Prochaine cohorte: {programme.nextCohort}
                  </div>
                )}
                <div className="flex items-center text-primary-200">
                  <Users className="h-5 w-5 mr-2" />
                  {programme.capacity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Description and Benefits */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">À Propos du Programme</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {programme.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Ce que vous obtiendrez</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programme.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-primary-50 rounded-lg"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modules */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Programme Détaillé</h2>
                <div className="space-y-6">
                  {programme.modules.map((module, index) => {
                    const ModuleIcon = module.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex-shrink-0">
                          <div className="p-3 bg-primary-100 rounded-lg">
                            <ModuleIcon className="h-6 w-6 text-primary-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                          <p className="text-gray-600 mb-2">{module.description}</p>
                          <span className="text-sm text-primary-600 font-medium">
                            Durée: {module.duration}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Success Metrics and CTA */}
            <div className="space-y-8">
              {/* Success Metrics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">Nos Résultats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {programme.successMetrics.map((metric, index) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <MetricIcon className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-600 mb-1">
                          {metric.number}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Intéressé ?</h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez notre programme et transformez vos ambitions en réalité.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Nous Contacter
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Ressources Utiles</h3>
                <div className="space-y-3">
                  {[
                    { icon: BookOpen, text: 'Guide du programme', link: '#' },
                    { icon: Calendar, text: 'Calendrier des sessions', link: '#' },
                    { icon: MessageSquare, text: 'FAQ', link: '#' },
                    { icon: Network, text: 'Communauté', link: '#' }
                  ].map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ItemIcon className="h-5 w-5 text-primary-500 mr-3" />
                        <span className="text-gray-700">{item.text}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programme.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-primary-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à commencer l'aventure ?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-primary-50 transition-colors"
          >
            Nous Contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}