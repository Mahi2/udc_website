import {useState} from 'react';
import {
    Linkedin,
    X,
    Mail,
    Briefcase,
    GraduationCap,
    Award,
    Users,
    Rocket,
    Heart,
    ArrowRight,
    Sparkles,
    Target,
} from 'lucide-react';
import {motion} from 'framer-motion';

const teamMembers = [
    {
        id: 1,
        name: 'Berry Numbi',
        role: 'Président du CA',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217327/berry_c49bdq.jpg',
        bio: `Spécialiste en gestion de programmes d'innovation. 
    A accompagné plus de 100 startups vers le succès.`,
        expertise: ['Incubation', 'Mentorat', 'Gestion de Programme'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 2,
        name: 'Kileshe Kasoma',
        role: 'Vice-présidente',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217331/kileshe_rs8rkm.png',
        bio: `Spécialiste en gestion de programmes d'innovation. 
    A accompagné plus de 100 startups vers le succès.`,
        expertise: ['Incubation', 'Mentorat', 'Gestion de Programme'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 3,
        name: 'Cheick Ahmed',
        role: '',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217330/ahmed_aqdng8.jpg',
        bio: `Architecte système et expert en développement. 
    Passionné par l'innovation technologique et le mentorat.`,
        expertise: ['Architecture Cloud', 'DevOps', 'IA'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 4,
        name: 'Dina Baruani',
        role: 'Chargée des opérations',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217330/dina_w01kiq.jpg',
        bio: `Experte en transformation digitale avec plus de 15 ans d'expérience. 
    A dirigé plusieurs projets d'innovation majeurs en Afrique.`,
        expertise: ['Innovation', 'Stratégie', 'Leadership'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 5,
        name: 'Aime Nzolo',
        role: 'ICT Manager | Développeur Full Stack | Coach | Process Automation',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743075425/UDC/Equipe/qd2sztrma6sk3me9n508.jpg',
        bio: `Développeur full-stack, formateur et expert en gestion de projet et automation, Aimé Nzolo cumule plus de 7 ans d’expérience en conception d’applications et en encadrement de développeurs.`,
        expertise: ['Innovation', 'Développement Web', 'Développement Mobile', 'Formation et Mentorat', 'Productivité', 'Process Automation', 'Gestion de Projet'],
        linkedin: 'https://www.linkedin.com/in/aime-nzolo-889023199',
        twitter: 'https://x.com/aimenzolo',
        email: 'aime@ukamili.africa',
        displayModal: true
    },
    {
        id: 6,
        name: 'Frumence Boroto',
        role: 'Chargé de la Communication',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217328/frumence_u8dcqr.jpg',
        bio: `Experte en transformation digitale avec plus de 15 ans d'expérience. 
    A dirigé plusieurs projets d'innovation majeurs en Afrique.`,
        expertise: ['Innovation', 'Stratégie', 'Leadership'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 7,
        name: 'Samy Mwamba',
        role: '',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217330/samy_gpzjuy.jpg',
        bio: `Expert en développement de partenariats stratégiques. 
    Passionné par la création d'écosystèmes d'innovation durables.`,
        expertise: ['Développement Commercial', 'Relations Publiques', 'Stratégie'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 8,
        name: 'Junior Kiluba',
        role: '',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217334/jun_cp3iga.png',
        bio: `Expert en développement de partenariats stratégiques. 
    Passionné par la création d'écosystèmes d'innovation durables.`,
        expertise: ['Développement Commercial', 'Relations Publiques', 'Stratégie'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 9,
        name: 'Kakel Mbumb',
        role: '',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217328/kakel_ztzs1t.jpg',
        bio: `Expert en développement de partenariats stratégiques. 
    Passionné par la création d'écosystèmes d'innovation durables.`,
        expertise: ['Développement Commercial', 'Relations Publiques', 'Stratégie'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
    {
        id: 10,
        name: 'Didier Maseba',
        role: '',
        photo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/a_-90/a_90/c_fill,w_268,h_224,g_auto/v1743217329/didier_kjdlbx.jpg',
        bio: `Expert en développement de partenariats stratégiques. 
    Passionné par la création d'écosystèmes d'innovation durables.`,
        expertise: ['Développement Commercial', 'Relations Publiques', 'Stratégie'],
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'contact@ukamili.africa',
        displayModal: false
    },
];

const stats = [
    {number: '10+', label: 'Experts', icon: Users},
    {number: '10+', label: 'Projets', icon: Rocket},
    {number: '15+', label: "Années d'exp.", icon: Award},
    {number: '95%', label: 'Satisfaction', icon: Target}
];

const values = [
    {icon: Award, title: 'Excellence', desc: 'Viser l\'excellence dans tout ce que nous entreprenons'},
    {icon: Users, title: 'Collaboration', desc: 'Travailler ensemble pour un impact plus fort'},
    {icon: Rocket, title: 'Innovation', desc: 'Repousser les limites de l\'innovation'},
    {icon: Heart, title: 'Engagement', desc: 'S\'engager pour le développement de notre communauté'}
];

export default function Equipe() {
    const [selectedMember, setSelectedMember] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section
                className="relative min-h-screen py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }}/>
                </div>

                {/* Content */}
                <div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-12 sm:py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Pre-title Badge */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="mb-8 flex justify-center"
                        >
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                <Sparkles className="h-5 w-5 text-primary-300"/>
                                <span className="text-primary-200 font-medium">L'équipe qui fait la différence</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.6}}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                                Des Experts Passionnés
                                <br/>
                                <span
                                    className="bg-gradient-to-r from-primary-200 to-primary-400 text-transparent bg-clip-text">
                  À Votre Service
                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4, duration: 0.6}}
                            className="text-lg sm:text-xl text-primary-100 mb-12 leading-relaxed"
                        >
                            Notre équipe pluridisciplinaire combine expertise technique, vision stratégique et
                            engagement
                            pour accompagner votre réussite dans l'écosystème numérique.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6, duration: 0.6}}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{scale: 1.05}}
                                    className="px-4 py-4 sm:py-6 rounded-xl bg-white/10 backdrop-blur-sm"
                                >
                                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-300 mx-auto mb-2 sm:mb-3"/>
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                                    <div className="text-sm sm:text-base text-primary-200">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">L'Équipe Dirigeante</h2>
                        <p className="text-xl text-gray-600">Des experts dévoués à votre réussite</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                whileHover={{y: -10}}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                                onClick={() => setSelectedMember(member.displayModal ? member.id : null)}
                            >
                                <div className="relative h-48 sm:h-56">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover mx-auto"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-primary-600 mb-4">{member.role}</p>
                                    <div className="flex space-x-4">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary-600 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Linkedin className="h-5 w-5"/>
                                        </a>
                                        <a
                                            href={member.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-primary-600 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <X className="h-5 w-5"/>
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-gray-400 hover:text-primary-600 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Mail className="h-5 w-5"/>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
                        <p className="text-xl text-gray-600">Les principes qui guident nos actions</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="inline-flex p-3 rounded-full bg-primary-100 mb-4">
                                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600"/>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Member Modal */}
            {selectedMember && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedMember(null)}
                >
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {(() => {
                            const member = teamMembers.find(m => m.id === selectedMember)!;
                            return (
                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                            <p className="text-primary-600 mb-4">{member.role}</p>
                                            <div className="flex space-x-4">
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                                >
                                                    <Linkedin className="h-5 w-5"/>
                                                </a>
                                                <a
                                                    href={member.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                                >
                                                    <X className="h-5 w-5"/>
                                                </a>
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="text-gray-400 hover:text-primary-600 transition-colors"
                                                >
                                                    <Mail className="h-5 w-5"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center">
                                                <Briefcase className="h-5 w-5 mr-2"/>
                                                Biographie
                                            </h4>
                                            <p className="text-gray-600">{member.bio}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center">
                                                <Award className="h-5 w-5 mr-2"/>
                                                Expertise
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {member.expertise.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm"
                                                    >
                            {skill}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mt-8">
                                        <button
                                            onClick={() => setSelectedMember(null)}
                                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            Fermer
                                        </button>
                                    </div>
                                </div>
                            );
                        })()}
                    </motion.div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-primary-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Rejoignez notre écosystème
                    </h2>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors"
                    >
                        Devenir membre
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </motion.button>
                </div>
            </section>
        </div>
    );
}