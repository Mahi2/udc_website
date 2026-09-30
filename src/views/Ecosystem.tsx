import React, {useState} from 'react';
import {
    Building2,
    Rocket,
    Landmark,
    GraduationCap,
    Globe,
    ArrowRight,
    CheckCircle2,
    MapPin,
    ExternalLink,
    Search,
    Users,
    Target
} from 'lucide-react';

const partnerCategories = [
    {
        id: 'startups',
        Icon: Rocket,
        title: 'Startups',
        color: 'bg-primary-100 text-primary-600',
    },
    {
        id: 'pme',
        Icon: Building2,
        title: 'PME',
        color: 'bg-primary-100 text-primary-600',
    },
    {
        id: 'institutions',
        Icon: Landmark,
        title: 'Institutions',
        color: 'bg-primary-100 text-primary-600',
    },
    {
        id: 'education',
        Icon: GraduationCap,
        title: 'Éducation',
        color: 'bg-primary-100 text-primary-600',
    },
    {
        id: 'international',
        Icon: Globe,
        title: 'International',
        color: 'bg-primary-100 text-primary-600',
    },
];
// https://docs.google.com/spreadsheets/d/1JbaG05I74rzaiUSppmKXRzU1eabjsKjaNPR5LOj7qtE/edit?usp=sharing
const partners = [
    {
        id: 1,
        name: 'Enabel',
        category: 'institutions',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743319132/logo-enabel_anhwan.png',
        description: 'Agence belge de développement',
        location: 'Lubumbashi, RDC',
        website: 'https://www.enabel.be/fr'
    },
    {
        id: 2,
        name: 'GIZ',
        category: 'institutions',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743318819/giz_idxmjs.png',
        description: 'Agence allemande de coopération internationale',
        location: 'Lubumbashi, RDC',
        website: 'https://www.giz.de'
    },
    {
        id: 3,
        name: 'AfriLabs',
        category: 'international',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743318473/AfriLabs-m_tx3jho.webp',
        description: 'Réseau panafricain de hubs technologiques',
        location: 'Abuja, Nigeria',
        website: 'https://www.afrilabs.com'
    },
    {
        id: 4,
        name: 'Epsilon pros',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743318073/epsilon_logo_fhc8tk.png',
        description: 'Entreprise spécialisée dans la vente de produits et services informatiques ainsi que dans la transformation numérique.',
        location: 'Lubumbashi, RDC',
        website: 'https://epsilon-pros.com'
    },
    {
        id: 5,
        name: 'Cinolu',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743319712/cinolu_eehsad.png',
        description: '',
        location: 'Lubumbashi, RDC',
        website: 'https://cinolu.org'
    },
    {
        id: 6,
        name: 'Akili',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743319774/akili_b39c11.png',
        description: '',
        location: 'Lubumbashi, RDC',
        website: ''
    },
    {
        id: 7,
        name: 'ITOT AFRICA',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743319615/itot_qktxlu.jpg',
        description: '',
        location: 'Lubumbashi, RDC',
        website: 'https://www.itot.africa'
    },
    {
        id: 8,
        name: 'Shekinah Group',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743319943/shekinah_kxmeax.jpg',
        description: '',
        location: 'Lubumbashi, RDC',
        website: ''
    },
    {
        id: 9,
        name: 'Vi1dealer',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743320039/vi1dealer_pkduaj.png',
        description: '',
        location: 'Lubumbashi, RDC',
        website: ''
    },
    {
        id: 10,
        name: 'Sadek',
        category: 'pme',
        logo: 'https://res.cloudinary.com/dkb3zm3da/image/upload/v1743320117/sadek_txnpan.jpg',
        description: '',
        location: 'Lubumbashi, RDC',
        website: ''
    },
    // {
    //     id: 5,
    //     name: 'Université de Lubumbashi',
    //     category: 'education',
    //     logo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    //     description: 'Institution académique majeure',
    //     location: 'Lubumbashi, RDC',
    //     website: 'https://unilu.ac.cd'
    // },
    // {
    //     id: 1,
    //     name: 'TechCongo',
    //     category: 'startups',
    //     logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    //     description: 'Leader des solutions technologiques en RDC',
    //     location: 'Kinshasa, RDC',
    //     website: 'https://techcongo.cd'
    // },
];

interface Collaboration {
    title: string;
    partner: string;
    impact: string;
    image: string;
}

const collaborations: Collaboration[] = [];
const collaborationsSave = [
    {
        title: 'Programme de Mentorat Tech',
        partner: 'TechCongo',
        impact: '500+ jeunes formés aux métiers du numérique',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
        title: 'Incubateur Digital Katanga',
        partner: 'Digital Katanga',
        impact: '50 startups accompagnées en 2 ans',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
        title: 'Innovation Lab UNILU',
        partner: 'Université de Lubumbashi',
        impact: '10 projets de recherche financés',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
];

const networkLocations = [
    {id: 1, city: 'Lubumbashi', country: 'RDC', partners: 10},
    {id: 2, city: 'Kinshasa', country: 'RDC', partners: 1},
    {id: 5, city: 'Abuja', country: 'Nigeria', partners: 1},
];

const ecosystemStats = [
    {number: '100+', label: 'Membres Actifs', icon: Users},
    {number: '20+', label: 'Startups', icon: Rocket},
    {number: '3+', label: 'Institutions', icon: Building2},
    {number: '95%', label: 'Taux de Satisfaction', icon: Target}
];

export default function Partenaires() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const filteredPartners = partners.filter(partner => {
        const matchesCategory = !selectedCategory || partner.category === selectedCategory;
        const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        alert('Votre demande de partenariat a été envoyée. Notre équipe vous contactera bientôt.');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Notre Écosystème
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                        Découvrez notre réseau de partenaires et rejoignez l'aventure de la transformation numérique
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ecosystemStats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-primary-50 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                                >
                                    <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4"/>
                                    <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partners Directory */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                                        !selectedCategory
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    Tous
                                </button>
                                {partnerCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                                            selectedCategory === category.id
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        <category.Icon className="h-5 w-5 mr-2"/>
                                        {category.title}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Rechercher un partenaire..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPartners.map((partner) => (
                            <div key={partner.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="h-16 w-auto object-cover rounded-lg"
                                        />
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            partnerCategories.find(cat => cat.id === partner.category)?.color
                                        }`}>
                        {partnerCategories.find(cat => cat.id === partner.category)?.title}
                      </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                                    <p className="text-gray-600 mb-4">{partner.description}</p>
                                    <div className="flex items-center text-gray-500 mb-4">
                                        <MapPin className="h-5 w-5 mr-2"/>
                                        {partner.location}
                                    </div>
                                    <a
                                        href={partner.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                    >
                                        Visiter le site
                                        <ExternalLink className="h-4 w-4 ml-2"/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Network Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Notre Réseau</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                                    alt="Carte du réseau"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Présence Internationale</h3>
                            <div className="space-y-4">
                                {networkLocations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                    >
                                        <div className="flex items-center">
                                            <MapPin className="h-5 w-5 text-primary-600 mr-3"/>
                                            <div>
                                                <h4 className="font-medium">{location.city}</h4>
                                                <p className="text-sm text-gray-500">{location.country}</p>
                                            </div>
                                        </div>
                                        <div className="text-primary-600 font-medium">
                                            {location.partners} partenaires
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Nos Collaborations Réussies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborations.map((collab, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="relative h-48">
                                    <img
                                        src={collab.image}
                                        alt={collab.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{collab.title}</h3>
                                    <p className="text-primary-600 mb-4">En partenariat avec {collab.partner}</p>
                                    <div className="flex items-center text-gray-600">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2"/>
                                        {collab.impact}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Rejoignez notre écosystème
                    </h2>
                    <a
                        href="/engagement"
                        className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors"
                    >
                        Devenir membre
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </a>
                </div>
            </section>
        </main>
    );
}