import React, {useState} from 'react';
import {
    Users,
    HeartHandshake,
    Handshake,
    Send,
    CheckCircle2,
    ArrowRight,
    Building2,
    Target,
    User,
    AtSign,
    Phone,
    FileText,
    Briefcase as BriefcaseIcon,
    MessageSquare,
    Upload,
    X
} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

const engagementTypes = [
    {
        id: 'network',
        icon: Users,
        title: 'Réseau d\'Entrepreneurs',
        description: 'Rejoignez notre communauté d\'entrepreneurs innovants et accédez à des opportunités uniques.',
        benefits: [
            'Accès aux événements exclusifs',
            'Mise en relation avec des investisseurs',
            'Visibilité dans l\'écosystème',
            'Opportunités de collaboration'
        ]
    },
    {
        id: 'volunteer',
        icon: HeartHandshake,
        title: 'Programme de Volontariat',
        description: 'Partagez votre expertise et contribuez au développement de l\'écosystème numérique.',
        benefits: [
            'Mentorat de startups',
            'Animation d\'ateliers',
            'Participation aux jurys',
            'Accompagnement de projets'
        ]
    },
    {
        id: 'partner',
        icon: Handshake,
        title: 'Partenariat et Sponsoring',
        description: 'Associez votre marque à l\'innovation et soutenez les initiatives qui façonnent l\'avenir.',
        benefits: [
            'Visibilité sur nos événements',
            'Co-création de programmes',
            'Accès aux talents',
            'Impact social positif'
        ]
    }
];

const impactMetrics = [
    {number: '100+', label: 'Membres Actifs', icon: Users},
    {number: '10+', label: 'Mentors Bénévoles', icon: HeartHandshake},
    {number: '10+', label: 'Partenaires', icon: Building2},
    {number: '1000+', label: 'Heures de Mentorat', icon: Target}
];

export default function Engagement() {
    const [selectedType, setSelectedType] = useState(engagementTypes[0]!.id);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formStep, setFormStep] = useState(1);
    const maxSteps = 3;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        alert('Votre candidature a été enregistrée. Notre équipe vous contactera bientôt !');
        setSelectedFile(null);
        setFormStep(1);
        (e.target as HTMLFormElement).reset();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
            setSelectedFile(file);
        } else {
            alert('Veuillez sélectionner un fichier PDF de moins de 5 Mo.');
        }
    };

    const inputClasses = (isFocused: boolean) => `
    mt-1 block w-full px-4 py-3
    bg-white rounded-lg
    border-2 transition-all duration-200
    ${isFocused
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

    const nextStep = () => {
        if (formStep < maxSteps) {
            setFormStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (formStep > 1) {
            setFormStep(prev => prev - 1);
        }
    };

    const renderFormStep = () => {
        switch (formStep) {
            case 1:
                return (
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -20}}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold mb-6">Informations Personnelles</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                                    required
                                    placeholder="+243 123 456 789"
                                    className={inputClasses(focusedInput === 'phone')}
                                    onFocus={() => setFocusedInput('phone')}
                                    onBlur={() => setFocusedInput(null)}
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -20}}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold mb-6">Informations Professionnelles</h3>
                        <div>
                            <label
                                htmlFor="organization"
                                className={labelClasses(focusedInput === 'organization')}
                            >
                                <Building2 className="h-4 w-4"/>
                                Organisation
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                required
                                placeholder="Nom de votre organisation"
                                className={inputClasses(focusedInput === 'organization')}
                                onFocus={() => setFocusedInput('organization')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="role"
                                className={labelClasses(focusedInput === 'role')}
                            >
                                <BriefcaseIcon className="h-4 w-4"/>
                                Fonction
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                required
                                placeholder="Votre poste actuel"
                                className={inputClasses(focusedInput === 'role')}
                                onFocus={() => setFocusedInput('role')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="type"
                                className={labelClasses(focusedInput === 'type')}
                            >
                                <Users className="h-4 w-4"/>
                                Type d'engagement
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className={inputClasses(focusedInput === 'type')}
                                onFocus={() => setFocusedInput('type')}
                                onBlur={() => setFocusedInput(null)}
                            >
                                {engagementTypes.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -20}}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold mb-6">Motivation et Documents</h3>
                        <div>
                            <label
                                htmlFor="motivation"
                                className={labelClasses(focusedInput === 'motivation')}
                            >
                                <MessageSquare className="h-4 w-4"/>
                                Lettre de motivation
                            </label>
                            <textarea
                                id="motivation"
                                name="motivation"
                                rows={6}
                                required
                                placeholder="Parlez-nous de votre motivation à rejoindre UKAMILI..."
                                className={inputClasses(focusedInput === 'motivation')}
                                onFocus={() => setFocusedInput('motivation')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="cv"
                                className={labelClasses(focusedInput === 'cv')}
                            >
                                <FileText className="h-4 w-4"/>
                                CV (PDF, max 5MB)
                            </label>
                            <div className="mt-2">
                                {selectedFile ? (
                                    <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                                        <div className="flex items-center">
                                            <FileText className="h-5 w-5 text-primary-600 mr-2"/>
                                            <span className="text-sm text-primary-700">{selectedFile.name}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedFile(null)}
                                            className="p-1 hover:bg-primary-100 rounded-full"
                                        >
                                            <X className="h-5 w-5 text-primary-600"/>
                                        </button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="cv-upload"
                                        className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-primary-500 focus:outline-none"
                                    >
                                        <div className="flex flex-col items-center space-y-2">
                                            <Upload className="w-8 h-8 text-gray-400"/>
                                            <span className="text-sm text-gray-500">
                        Cliquez ou glissez votre CV ici
                      </span>
                                        </div>
                                        <input
                                            id="cv-upload"
                                            type="file"
                                            accept=".pdf"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section
                className="relative min-h-screen pb-20 pt-32 relative flex items-center justify-center overflow-hidden">
                {/* Background Video & Overlay */}
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    >
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-environment-42925-large.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-900/95"/>
                </div>

                {/* Animated Particles */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 0.1}}
                    transition={{duration: 1}}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '48px 48px, 32px 32px',
                        backgroundPosition: '0 0, 24px 24px'
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Pre-title Badge */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="mb-8 flex justify-center"
                        >
                            <div
                                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                <HeartHandshake className="h-5 w-5 text-primary-300"/>
                                <span className="text-primary-200 font-medium">Ensemble pour l'innovation</span>
                            </div>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2, duration: 0.6}}
                            className="mb-8"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                Rejoignez la Révolution<br/>
                                <span
                                    className="bg-gradient-to-r from-primary-300 to-primary-100 text-transparent bg-clip-text">
                  Numérique
                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4, duration: 0.6}}
                            className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Votre expertise et votre passion sont les catalyseurs du changement.
                            Ensemble, construisons un écosystème numérique innovant et durable.
                        </motion.p>

                        {/* Engagement Type Cards */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6, duration: 0.6}}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                        >
                            {engagementTypes.map((type, index) => {
                                const Icon = type.icon;
                                return (
                                    <motion.button
                                        key={type.id}
                                        whileHover={{scale: 1.05, y: -5}}
                                        whileTap={{scale: 0.95}}
                                        className={`
                      group relative overflow-hidden
                      px-6 py-8 rounded-2xl
                      ${index === 1
                                            ? 'bg-white text-primary-600'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }
                      backdrop-blur-sm transition-all duration-300
                      shadow-lg hover:shadow-xl
                    `}
                                    >
                                        <div className="relative z-10">
                                            <Icon className={`h-8 w-8 mb-4 ${
                                                index === 1 ? 'text-primary-500' : 'text-primary-300'
                                            }`}/>
                                            <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                                            <p className={`text-sm ${
                                                index === 1 ? 'text-gray-600' : 'text-primary-100'
                                            }`}>
                                                {type.description.split('.')[0]}
                                            </p>
                                        </div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-3xl"/>
                    <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl"/>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactMetrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-primary-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                                >
                                    <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4"/>
                                    <div className="text-4xl font-bold text-primary-600 mb-2">{metric.number}</div>
                                    <div className="text-gray-600">{metric.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Engagement Types */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Comment s'Impliquer ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {engagementTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                                <div
                                    key={type.id}
                                    className={`bg-white rounded-xl p-8 shadow-lg cursor-pointer transition-all ${
                                        selectedType === type.id
                                            ? 'ring-2 ring-primary-500 transform scale-105'
                                            : 'hover:shadow-xl'
                                    }`}
                                    onClick={() => setSelectedType(type.id)}
                                >
                                    <Icon className="h-12 w-12 text-primary-600 mb-6"/>
                                    <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                                    <p className="text-gray-600 mb-6">{type.description}</p>
                                    <div className="space-y-3">
                                        {type.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2"/>
                                                <span className="text-sm text-gray-600">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
                        <div className="max-w-xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-2">Rejoignez-nous</h2>
                            <p className="text-gray-600 text-center mb-12">
                                Faites partie de l'aventure et contribuez à façonner l'avenir numérique
                            </p>

                            {/* Progress Steps */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between relative">
                                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"/>
                                    {[1, 2, 3].map((step) => (
                                        <div
                                            key={step}
                                            className={`
                        flex items-center justify-center w-10 h-10 rounded-full 
                        ${step === formStep
                                                ? 'bg-primary-500 text-white'
                                                : step < formStep
                                                    ? 'bg-primary-100 text-primary-600'
                                                    : 'bg-gray-100 text-gray-400'
                                            }
                        transition-colors duration-200
                      `}
                                        >
                                            {step < formStep ? (
                                                <CheckCircle2 className="h-6 w-6"/>
                                            ) : (
                                                <span className="font-semibold">{step}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-sm text-gray-500">Informations</span>
                                    <span className="text-sm text-gray-500">Profession</span>
                                    <span className="text-sm text-gray-500">Motivation</span>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">
                                    {renderFormStep()}
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <div className="flex justify-between mt-12">
                                    {formStep > 1 && (
                                        <motion.button
                                            type="button"
                                            onClick={prevStep}
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className="px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors"
                                        >
                                            Précédent
                                        </motion.button>
                                    )}
                                    <motion.button
                                        type={formStep === maxSteps ? 'submit' : 'button'}
                                        onClick={formStep === maxSteps ? undefined : nextStep}
                                        disabled={isSubmitting}
                                        whileHover={{scale: 1.02}}
                                        whileTap={{scale: 0.98}}
                                        className={`
                      ml-auto px-8 py-3 rounded-lg text-white font-medium
                      ${isSubmitting ? 'bg-primary-400' : 'bg-primary-500 hover:bg-primary-600'}
                      transition-all duration-200 
                      shadow-lg hover:shadow-xl
                      disabled:opacity-50 disabled:cursor-not-allowed
                      flex items-center
                    `}
                                    >
                                        {formStep === maxSteps ? (
                                            <>
                                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                                                <Send className="ml-2 h-5 w-5"/>
                                            </>
                                        ) : (
                                            <>
                                                Suivant
                                                <ArrowRight className="ml-2 h-5 w-5"/>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}