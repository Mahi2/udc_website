import React from "react";
import {Link} from "@tanstack/react-router";
import {motion, useAnimation, useInView} from "framer-motion";
import {
    Users,
    Calendar,
    Lightbulb,
    Building2,
    ArrowRight,
    Code2,
    GraduationCap,
    Target,
    Rocket,
    Globe,
    Award,
    Briefcase,
    ChevronRight,
    MessageSquare,
    Heart,
    CheckCircle2,
    Network,
    ArrowUpRight,
    Boxes,
} from "lucide-react";

const quickStats = [
    {number: "20+", label: "Startups", icon: Rocket},
    {number: "95%", label: "Satisfaction", icon: Target},
    {number: "100+", label: "Membres", icon: Users},
    {number: "10+", label: "Projets", icon: Boxes},
];

const stats = [
    {number: "20+", label: "Startups Accompagnées", icon: Building2},
    {number: "10+", label: "Événements Organisés", icon: Calendar},
    {number: "500+", label: "Entrepreneurs Formés", icon: Users},
    {number: "10+", label: "Innovations Développées", icon: Lightbulb},
];

const services = [
    {
        icon: Rocket,
        title: "Incubation",
        description: "Accompagnement personnalisé pour les startups innovantes",
        link: "/services#incubation",
    },
    {
        icon: Code2,
        title: "Innovation Lab",
        description: "Espace de création et d'expérimentation technologique",
        link: "/services#innovation",
    },
    {
        icon: GraduationCap,
        title: "Formation",
        description: "Programmes de formation aux métiers du numérique",
        link: "/services#formation",
    },
    {
        icon: Target,
        title: "Conseil",
        description: "Accompagnement stratégique en transformation digitale",
        link: "/services#conseil",
    },
];

const features = [
    {
        icon: Globe,
        title: "Réseau International",
        description:
            "Accédez à un réseau de partenaires à travers l'Afrique et le monde",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "Bénéficiez de l'expertise de mentors et professionnels reconnus",
    },
    {
        icon: Heart,
        title: "Impact Social",
        description: "Contribuez au développement numérique de la RDC",
    },
    {
        icon: Briefcase,
        title: "Opportunités",
        description: "Découvrez des opportunités d'affaires et de carrière",
    },
];

const testimonials = [
    {
        quote:
            "UKAMILI nous a permis de transformer notre idée en une startup viable. L'accompagnement a été déterminant dans notre succès.",
        author: "Aime Nzolo",
        role: "CEO, Epsilon pros",
        image: "https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743075425/UDC/Equipe/qd2sztrma6sk3me9n508.jpg",
    },
    {
        quote:
            "Grâce à UKAMILI, nous avons pu connecter avec des partenaires clés et accélérer notre croissance.",
        author: "Frumence Boroto",
        role: "Fondateur, Shekinah Group",
        image: "https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217328/frumence_u8dcqr.jpg",
    },
    {
        quote:
            "L'écosystème UKAMILI est unique en son genre au Katanga. C'est un véritable catalyseur d'innovation.",
        author: "Kileshe Kasoma",
        role: "Directrice du personnel, ITOT",
        image: "https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217331/kileshe_rs8rkm.png",
    },
];

const upcomingEvents = [
    {
        title: "Tech Innovation Summit 2025",
        date: "15 Mars 2025",
        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/events",
    },
    {
        title: "Hackathon FinTech",
        date: "2 Avril 2025",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/events",
    },
    {
        title: "Formation React Avancé",
        date: "20 Mars 2025",
        image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/events",
    },
];

export default function Home() {
    const statsRef = React.useRef(null);
    const isInView = useInView(statsRef);
    const statsControls = useAnimation();
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        if (isInView) {
            statsControls.start("visible");
        }
    }, [isInView, statsControls]);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        setIsDesktop(mediaQuery.matches);

        const handleResize = () => setIsDesktop(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
                {/* Background Video avec Overlay */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95"/>
                </div>

                {/* Motif Hexagonal Animé */}
                {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.05' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div> */}

                {/* Cercles avec Glassmorphism */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                background: `radial-gradient(circle at center, rgba(${
                                    Math.random() * 255
                                }, ${Math.random() * 255}, 255, 0.1), transparent)`,
                                width: `${300 + i * 100}px`,
                                height: `${300 + i * 100}px`,
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                            animate={
                                isDesktop
                                    ? {
                                        x: [0, 30, 0],
                                        y: [0, 20, 0],
                                        scale: [1, 1.1, 1],
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.5,
                            }}
                        />
                    ))}
                </div>

                {/* Images Flottantes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Innovation"
                        className="absolute w-48 h-48 object-cover rounded-2xl shadow-2xl"
                        style={{top: "20%", right: "15%"}}
                        animate={
                            isDesktop
                                ? {
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }
                                : {}
                        }
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Technology"
                        className="absolute w-40 h-40 object-cover rounded-2xl shadow-2xl"
                        style={{bottom: "25%", right: "25%"}}
                        animate={
                            isDesktop
                                ? {
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0],
                                }
                                : {}
                        }
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                </div>

                {/* Contenu Principal */}
                <div className="relative z-10 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                        {/* Colonne de gauche - Texte */}
                        <div className="text-left space-y-8">
                            {/* Badge */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                            >
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                    <Network className="h-5 w-5 text-primary-300"/>
                                    <span className="text-primary-200 font-medium">
                    Hub d'Innovation Numérique
                  </span>
                                </div>
                            </motion.div>

                            {/* Titre Principal avec Animation */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.2, duration: 0.6}}
                                className="relative"
                            >
                                <motion.div
                                    className="absolute -left-8 -top-8 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={
                                        isDesktop
                                            ? {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }
                                            : {}
                                    }
                                />
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                                    <motion.span
                                        className="block text-primary-200 mb-2"
                                        animate={{opacity: [0.8, 1, 0.8]}}
                                        transition={{duration: 3, repeat: Infinity}}
                                    >
                                        Innover
                                    </motion.span>
                                    <span className="relative inline-block text-white">
                    Connecter
                    <motion.span
                        className="absolute -bottom-2 left-0 w-full h-1 bg-primary-400"
                        initial={{scaleX: 0}}
                        animate={{scaleX: 1}}
                        transition={{delay: 0.8, duration: 0.6}}
                    />
                  </span>
                                    <span className="block mt-2">
                    <span className="bg-gradient-to-r from-primary-300 to-primary-100 text-transparent bg-clip-text">
                      Transformer
                    </span>
                  </span>
                                </h1>
                            </motion.div>

                            {/* Description avec Effet de Frappe */}
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4, duration: 0.6}}
                                className="text-xl text-primary-100 max-w-xl relative"
                            >
                                <motion.span
                                    className="absolute -left-4 top-1/2 w-2 h-2 bg-primary-400 rounded-full"
                                    animate={
                                        isDesktop
                                            ? {
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }
                                            : {}
                                    }
                                    transition={{duration: 2, repeat: Infinity}}
                                />
                                Un écosystème dynamique où l'innovation technologique rencontre
                                l'ambition entrepreneuriale pour façonner l'avenir numérique de
                                notre région.
                            </motion.p>

                            {/* Boutons CTA avec Effets Avancés */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.6, duration: 0.6}}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.div
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    <Link
                                        to="/engagement"
                                        className="group relative inline-flex items-center px-8 py-2.5 rounded-lg text-lg font-semibold bg-primary-500 text-white transition-all shadow-lg hover:shadow-xl overflow-hidden"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600"
                                            initial={false}
                                            animate={{x: ["100%", "-100%"]}}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                        <span className="relative">Rejoignez l'Aventure</span>
                                        <ArrowUpRight
                                            className="relative ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                    </Link>
                                </motion.div>
                                {/*<motion.div*/}
                                {/*  whileHover={{ scale: 1.05 }}*/}
                                {/*  whileTap={{ scale: 0.95 }}*/}
                                {/*>*/}
                                {/*  <Link*/}
                                {/*    to="/programmes"*/}
                                {/*    className="group inline-flex items-center px-8 py-2.5 rounded-lg text-lg font-semibold bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 transition-all"*/}
                                {/*  >*/}
                                {/*    <span>Nos Programmes</span>*/}
                                {/*    <div className="ml-2">*/}
                                {/*      <ArrowRight className="h-5 w-5" />*/}
                                {/*    </div>*/}
                                {/*  </Link>*/}
                                {/*</motion.div>*/}
                            </motion.div>
                        </div>

                        {/* Colonne de droite - Stats et Éléments Visuels */}
                        <div className="relative">
                            {/* Stats avec Glassmorphism */}
                            <motion.div
                                ref={statsRef}
                                initial="hidden"
                                animate={statsControls}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {quickStats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: {opacity: 0, y: 20},
                                            visible: {opacity: 1, y: 0},
                                        }}
                                        className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden"
                                    >
                                        {/* Effet de survol amélioré */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                            initial={false}
                                            animate={{opacity: 0}}
                                            whileHover={{opacity: 1}}
                                        />

                                        <stat.icon
                                            className="h-8 w-8 text-primary-300 mb-4 group-hover:text-primary-200 transition-colors"/>
                                        <div className="text-3xl font-bold text-white mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-primary-200 font-medium">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Particules Interactives */}
                            <div className="absolute -z-10 inset-0">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-primary-400 rounded-full"
                                        animate={
                                            isDesktop
                                                ? {
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.5, 1, 0.5],
                                                    x: [0, Math.random() * 100 - 50, 0],
                                                    y: [0, Math.random() * 100 - 50, 0],
                                                }
                                                : {}
                                        }
                                        transition={{
                                            duration: 3 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section
                className="py-20 bg-gradient-to-b from-primary-900 to-primary-800 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Mission */}
                        <div
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-colors">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-primary-500 rounded-lg mr-4">
                                    <Target className="h-8 w-8 text-white"/>
                                </div>
                                <h2 className="text-3xl font-bold">Notre Mission</h2>
                            </div>
                            <p className="text-lg text-primary-100 leading-relaxed mb-6">
                                UKAMILI DIGITAL CITY est le premier hub d'innovation numérique
                                au Grand Katanga, dédié à l'accompagnement des entrepreneurs et
                                à la transformation digitale de notre région.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Accompagner les startups innovantes",
                                    "Développer les compétences numériques",
                                    "Favoriser l'innovation technologique",
                                    "Créer des opportunités d'emploi",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircle2 className="h-5 w-5 text-primary-300 mr-3"/>
                                        <span className="text-primary-100">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision */}
                        <div
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-colors">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-primary-500 rounded-lg mr-4">
                                    <Lightbulb className="h-8 w-8 text-white"/>
                                </div>
                                <h2 className="text-3xl font-bold">Notre Vision</h2>
                            </div>
                            <p className="text-lg text-primary-100 leading-relaxed mb-6">
                                Devenir le catalyseur principal de la transformation numérique
                                en Afrique centrale, en créant un écosystème dynamique et
                                innovant qui propulse le développement technologique et
                                économique de notre région.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: Globe,
                                        text: "Hub Régional",
                                    },
                                    {
                                        icon: Users,
                                        text: "Communauté Innovante",
                                    },
                                    {
                                        icon: Building2,
                                        text: "Excellence Technologique",
                                    },
                                    {
                                        icon: Heart,
                                        text: "Impact Durable",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-white/5 rounded-lg"
                                    >
                                        <item.icon className="h-5 w-5 text-primary-300 mr-2"/>
                                        <span className="text-primary-100 text-sm">
                      {item.text}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-8">Nos Valeurs</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: "Excellence",
                                    desc: "Viser l'excellence dans tout ce que nous entreprenons",
                                },
                                {
                                    icon: Users,
                                    title: "Collaboration",
                                    desc: "Travailler ensemble pour un impact plus fort",
                                },
                                {
                                    icon: Rocket,
                                    title: "Innovation",
                                    desc: "Repousser les limites de l'innovation",
                                },
                                {
                                    icon: Heart,
                                    title: "Engagement",
                                    desc: "S'engager pour le développement de notre communauté",
                                },
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                                >
                                    <value.icon className="h-8 w-8 text-primary-300 mx-auto mb-4"/>
                                    <h4 className="font-semibold mb-2">{value.title}</h4>
                                    <p className="text-sm text-primary-100">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmes Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Nos Programmes</h2>
                        <p className="text-xl text-gray-600">
                            Des solutions adaptées à vos besoins
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="text-primary-500 mb-4">
                                        <Icon className="h-12 w-12"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    {/*<Link*/}
                                    {/*  to={service.link}*/}
                                    {/*  className="inline-flex items-center text-primary-500 hover:text-primary-600"*/}
                                    {/*>*/}
                                    {/*  En savoir plus*/}
                                    {/*  <ChevronRight className="ml-1 h-5 w-5" />*/}
                                    {/*</Link>*/}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Notre Impact</h2>
                        <p className="text-xl text-gray-600">
                            Des résultats concrets pour la communauté
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg"
                                >
                                    <Icon className="h-12 w-12 text-primary-500 mx-auto mb-4"/>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-primary-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir</h2>
                        <p className="text-xl text-gray-600">
                            Des avantages uniques pour votre réussite
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                                        <Icon className="h-8 w-8 text-primary-600"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            {false && <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Événements à Venir</h2>
                        <p className="text-xl text-gray-600">
                            Participez à nos prochains événements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg"
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                    <p className="mb-4">{event.date}</p>
                                    <Link
                                        to="/events"
                                        className="inline-flex items-center text-white hover:text-primary-200"
                                    >
                                        En savoir plus
                                        <ChevronRight className="ml-1 h-5 w-5"/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/events"
                            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                        >
                            Voir tous les événements
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </div>
                </div>
            </section>}

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
                        <p className="text-xl text-gray-600">Ce que disent nos membres</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
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
                                <div className="relative">
                                    <MessageSquare className="absolute -top-2 -left-2 h-8 w-8 text-primary-100"/>
                                    <p className="text-gray-600 italic relative z-10 pl-6">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Prêt à faire partie de l'aventure ?
                    </h2>
                    <Link
                        to="/engagement"
                        className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                        Rejoignez-nous maintenant
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </section>
        </>
    );
}
