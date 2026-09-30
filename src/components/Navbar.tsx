import React, {useState, useEffect, useRef} from 'react';
import {Menu, X, ChevronDown} from 'lucide-react';
import {Link, useLocation, type LinkProps} from '@tanstack/react-router';
import {motion, AnimatePresence} from 'framer-motion';
import Logo from '../assets/Udc';

interface NavItem {
    name: string;
    href: NonNullable<LinkProps['to']>;
    items?: NavItem[];
}

type NavigationItem = NavItem;

const navigation: NavigationItem[] = [
    {name: 'Accueil', href: '/home'},
    // { name: 'Programmes', href: '/programmes' },
    {
        name: 'Notre Écosystème',
        href: '/ecosysteme',
    },
    {name: 'Events', href: '/events'},
    {name: 'Notre Équipe', href: '/equipe'},
    {name: 'Contact', href: '/contact'},
];

interface NavbarProps {
    isScrolled: boolean;
}

export default function Navbar({isScrolled}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                mobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
        },
    };

    const dropdownVariants = {
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.1,
            },
        },
    };

    const {pathname} = useLocation();

    const isActive = (path: NonNullable<LinkProps['to']>) => {
        return pathname === path;
    };

    return (
        <motion.div
            initial={false}
            transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="top-0 left-0 right-0 z-50 w-full"
        >
            <div className="max-w-screen-xl mx-auto p-4 lg:px-8">
                <div
                    className={`flex items-center justify-between transition-all duration-300`}
                >
                    <Link
                        to="/"
                        className={`relative z-50 transition-all duration-300 text-2xl font-bold ${
                            isScrolled ? 'scale-75 -translate-x-4' : 'scale-100'
                        } ${isScrolled && !mobileMenuOpen ? 'text-primary-500' : 'text-white'}`}
                    >
                        <Logo/>
                    </Link>

                    <nav className="w-auto">
                        <button
                            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{opacity: 0, rotate: -90}}
                                        animate={{opacity: 1, rotate: 0}}
                                        exit={{opacity: 0, rotate: 90}}
                                        transition={{duration: 0.3}}
                                    >
                                        <X className="w-5 h-5 text-white"/>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{opacity: 0, rotate: 90}}
                                        animate={{opacity: 1, rotate: 0}}
                                        exit={{opacity: 0, rotate: -90}}
                                        transition={{duration: 0.3}}
                                    >
                                        <Menu
                                            className={`w-5 h-5 ${
                                                isScrolled ? 'text-secondary-900' : 'text-white'
                                            }`}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex space-x-8 font-medium text-sm">
                            {navigation.map((item) =>
                                !item.items ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`relative text-sm font-semibold leading-6 transition-colors ${
                                            isScrolled ? 'text-gray-900' : 'text-white'
                                        } hover:text-primary-500`}
                                    >
                                        {item.name}
                                        {isActive(item.href) && (
                                            <motion.div
                                                layoutId="underline"
                                                className={`absolute left-0 right-0 h-0.5 ${
                                                    isScrolled ? 'bg-primary-500' : 'bg-white'
                                                } bottom-0`}
                                                transition={{duration: 0.3}}
                                            />
                                        )}
                                    </Link>
                                ) : (
                                    <div key={item.name} className="relative">
                                        <motion.button
                                            onClick={() => toggleDropdown(item.name)}
                                            className={`flex items-center text-sm font-semibold leading-6 transition-colors ${
                                                isScrolled ? 'text-gray-900' : 'text-white'
                                            } hover:text-primary-500`}
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            {item.name}
                                            <motion.div
                                                animate={{rotate: activeDropdown === item.name ? 180 : 0}}
                                                transition={{duration: 0.2}}
                                            >
                                                <ChevronDown className="ml-1 h-4 w-4"/>
                                            </motion.div>
                                        </motion.button>
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial="closed"
                                                    animate="open"
                                                    exit="closed"
                                                    variants={dropdownVariants}
                                                    className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5"
                                                >
                                                    {item.items!.map((subItem: NavItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            )}
                        </ul>
                    </nav>

                    {/* CTA Button - Right aligned */}
                    <div className="hidden lg:flex lg:items-center lg:justify-end">
                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                            <Link
                                to="/engagement"
                                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 transition-colors"
                            >
                                Nous Rejoindre
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 lg:hidden z-40 h-screen"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-100"/>
                        <div className="min-h-screen flex flex-col relative">
                            <div className="flex-1 flex items-center justify-start px-7">
                                <motion.ul
                                    className="space-y-2 text-start"
                                    variants={{
                                        open: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {navigation.map((item) =>
                                        !item.items ? (
                                            <motion.div
                                                key={item.name}
                                                whileHover={{x: 10}}
                                                whileTap={{scale: 0.95}}
                                            >
                                                <Link
                                                    to={item.href}
                                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-50 hover:text-primary-500"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ) : (
                                            <div key={item.name} className="space-y-2">
                                                <motion.button
                                                    onClick={() => toggleDropdown(item.name)}
                                                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-50 hover:text-primary-500"
                                                    whileHover={{x: 10}}
                                                    whileTap={{scale: 0.95}}
                                                >
                                                    {item.name}
                                                    <motion.div
                                                        animate={{
                                                            rotate: activeDropdown === item.name ? 180 : 0,
                                                        }}
                                                        transition={{duration: 0.2}}
                                                    >
                                                        <ChevronDown className="h-5 w-5"/>
                                                    </motion.div>
                                                </motion.button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.name && (
                                                        <motion.div
                                                            initial={{opacity: 0, height: 0}}
                                                            animate={{opacity: 1, height: 'auto'}}
                                                            exit={{opacity: 0, height: 0}}
                                                            className="ml-4 space-y-2"
                                                        >
                                                            {item.items!.map((subItem: NavItem) => (
                                                                <motion.div
                                                                    key={subItem.name}
                                                                    whileHover={{x: 10}}
                                                                    whileTap={{scale: 0.95}}
                                                                >
                                                                    <Link
                                                                        to={subItem.href}
                                                                        className="block rounded-lg px-3 py-2 text-base leading-7 text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                                                                        onClick={() => {
                                                                            setMobileMenuOpen(false);
                                                                            setActiveDropdown(null);
                                                                        }}
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )
                                    )}

                                    {/* CTA Button - Right aligned */}

                                    <motion.div
                                        whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                    >
                                        <Link
                                            to="/engagement"
                                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-50 hover:text-primary-500"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Nous Rejoindre
                                        </Link>
                                    </motion.div>
                                </motion.ul>


                            </div>

                            <motion.div variants={itemVariants} className="pb-12 text-center">
                                <p className="text-white/60 text-sm">
                                    &copy; {new Date().getFullYear()} UKAMILI DIGITAL CITY. by <a
                                    className="underline" href="https://epsilon-pros.com/">Epsilon pros</a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

}
