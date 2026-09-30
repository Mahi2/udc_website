import {Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary-400"/>
                                <span>contact@ukamili.africa</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-primary-400"/>
                                <span>+243 993 298 761 (whatsapp)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-primary-400"/>
                                <span>Numéro 05 avenue Ngoy Yenge, Golf Lido</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            {/*<li><a href="/programmes" className="hover:text-primary-400 transition-colors">Nos Programmes</a></li>*/}
                            <li><a href="/ecosysteme" className="hover:text-primary-400 transition-colors">Notre
                                Écosystème</a></li>
                            {/*<li><a href="/evenements" className="hover:text-primary-400 transition-colors">Événements</a></li>*/}
                            <li><a href="/equipe" className="hover:text-primary-400 transition-colors">Notre Équipe</a>
                            </li>
                            <li><a href="/contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/UDigitalCity/?_rdc=1&_rdr" target="_blank"
                               className="hover:text-primary-400 transition-colors">
                                <Facebook className="h-6 w-6"/>
                            </a>
                            <a href="https://x.com/UDigitalCity" target="_blank"
                               className="hover:text-primary-400 transition-colors">
                                <Twitter className="h-6 w-6"/>
                            </a>
                            <a href="https://www.linkedin.com/company/udigitalcity" target="_blank"
                               className="hover:text-primary-400 transition-colors">
                                <Linkedin className="h-6 w-6"/>
                            </a>
                            <a href="https://www.instagram.com/udigitalcity" target="_blank"
                               className="hover:text-primary-400 transition-colors">
                                <Instagram className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2">
                            {/*<li><a href="" className="hover:text-primary-400 transition-colors">Mentions Légales</a></li>*/}
                            <li><a href="/policy" className="hover:text-primary-400 transition-colors">Politique de
                                Confidentialité</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p>&copy; {new Date().getFullYear()} UKAMILI DIGITAL CITY. Tous droits réservés. by <a
                        className="underline" href="https://epsilon-pros.com/">Epsilon pros</a></p>
                </div>
            </div>
        </footer>
    );
}