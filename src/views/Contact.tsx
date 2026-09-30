import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    User,
    AtSign,
    MessageCircle,
    List,
    HeartHandshake,
    Sparkles,
    Target,
    Users,
    Award,
} from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email',
        value: 'contact@ukamili.africa',
        link: 'mailto:contact@ukamili.africa',
    },
    {
        icon: Phone,
        title: 'Téléphone',
        value: '+243 993 298 761',
        link: 'tel:+243993298761',
    },
    {
        icon: MapPin,
        title: 'Adresse',
        value: 'Numéro 05 avenue Ngoy Yenge, Golf Lido',
        link: 'https://maps.app.goo.gl/5ZiyzpfzJ3R6bSUy9',
    },
    {
        icon: Clock,
        title: 'Horaires',
        value: 'Lun - Ven: 8h00 - 16h30',
        link: null,
    },
];

const subjects = [
    'Information générale',
    'Partenariat',
    'Services et programmes',
    "Opportunités d'emploi",
    'Support technique',
    'Presse et médias',
];

const stats = [
    {number: '24/7', label: 'Support Client', icon: HeartHandshake},
    {number: '10+', label: 'Experts', icon: Users},
    {number: '95%', label: 'Satisfaction', icon: Target},
    {number: '10+', label: 'Projets', icon: Award},
];

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        alert(
            'Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.'
        );
        (e.target as HTMLFormElement).reset();
    };

    const inputClasses = (isFocused: boolean) => `
    mt-1 block w-full px-4 py-3
    bg-white rounded-lg
    border-2 transition-all duration-200
    ${
        isFocused
            ? 'border-primary-500 ring-2 ring-primary-100 shadow-lg'
            : 'border-gray-200 hover:border-gray-300'
    }
    focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100
    placeholder-gray-400
  `;

    const labelClasses = (isFocused: boolean) => `
    flex items-center gap-2
    text-sm font-medium
    ${isFocused ? 'text-primary-600' : 'text-gray-700'}
    transition-colors duration-200
  `;

    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-primary-800/95"/>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8"
                        >
                            <Sparkles className="h-5 w-5 text-primary-300"/>
                            <span className="text-primary-200 font-medium">
                Discutons de vos projets
              </span>
                        </motion.div>

                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
                        >
                            Transformons vos idées
                            <br/>
                            <span
                                className="bg-gradient-to-r from-primary-200 to-primary-400 text-transparent bg-clip-text">
                en réalité numérique
              </span>
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="text-lg sm:text-xl text-primary-100 mb-12"
                        >
                            Notre équipe d'experts est prête à vous accompagner dans votre
                            transformation digitale. Contactez-nous pour donner vie à vos
                            projets.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.05}}
                                        className="px-4 py-4 sm:py-6 rounded-xl bg-white/10 backdrop-blur-sm"
                                    >
                                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-300 mx-auto mb-2 sm:mb-3"/>
                                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm sm:text-base text-primary-200">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-primary-100 rounded-lg">
                                            <Icon className="h-6 w-6 text-primary-600"/>
                                        </div>
                                        <h3 className="ml-4 text-lg font-semibold">{info.title}</h3>
                                    </div>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-gray-600 hover:text-primary-600 transition-colors"
                                            target={
                                                info.link.startsWith('http') ? '_blank' : undefined
                                            }
                                            rel={
                                                info.link.startsWith('http')
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.value}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Contact Form */}
                        <div
                            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl order-2 lg:order-1"
                        >
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                    Envoyez-nous un message
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Notre équipe vous répondra dans les plus brefs délais
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className={labelClasses(focusedInput === 'firstName')}
                                        >
                                            <User className="h-4 w-4"/>
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            placeholder="Aime"
                                            className={inputClasses(focusedInput === 'firstName')}
                                            onFocus={() => setFocusedInput('firstName')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className={labelClasses(focusedInput === 'lastName')}
                                        >
                                            <User className="h-4 w-4"/>
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            placeholder="Nzolo"
                                            className={inputClasses(focusedInput === 'lastName')}
                                            onFocus={() => setFocusedInput('lastName')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={labelClasses(focusedInput === 'email')}
                                        >
                                            <AtSign className="h-4 w-4"/>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="exemple@ukamili.africa"
                                            className={inputClasses(focusedInput === 'email')}
                                            onFocus={() => setFocusedInput('email')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className={labelClasses(focusedInput === 'phone')}
                                        >
                                            <Phone className="h-4 w-4"/>
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+243 123 456 789"
                                            className={inputClasses(focusedInput === 'phone')}
                                            onFocus={() => setFocusedInput('phone')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className={labelClasses(focusedInput === 'subject')}
                                    >
                                        <List className="h-4 w-4"/>
                                        Sujet
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className={inputClasses(focusedInput === 'subject')}
                                        onFocus={() => setFocusedInput('subject')}
                                        onBlur={() => setFocusedInput(null)}
                                    >
                                        {subjects.map((subject, index) => (
                                            <option key={index} value={subject}>
                                                {subject}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className={labelClasses(focusedInput === 'message')}
                                    >
                                        <MessageCircle className="h-4 w-4"/>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        placeholder="Votre message..."
                                        className={inputClasses(focusedInput === 'message')}
                                        onFocus={() => setFocusedInput('message')}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}
                                        className={`
                      inline-flex items-center px-8 py-4 
                      rounded-lg text-white font-medium
                      ${
                                            isSubmitting
                                                ? 'bg-primary-400'
                                                : 'bg-primary-500 hover:bg-primary-600'
                                        }
                      transition-all duration-200 
                      shadow-lg hover:shadow-xl
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                        <Send className="ml-2 h-5 w-5"/>
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                        {/* Map */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2"
                        >
                            <iframe
                                title="UKAMILI Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126139.50196493694!2d27.4665185!3d-11.6699662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f14.1!3m3!1m2!1s0x19723f0078e35a4f%3A0x2874692a0adae978!2sUKAMILI!5e0!3m2!1sen!2sus!4v1709672774923!5m2!1sen!2sus"
                                className="absolute inset-0 w-full h-full"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
