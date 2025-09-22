import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Portal', href: '/' },
        { name: 'Project Details', href: '/services' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-blue-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2 text-white">
                            <Briefcase className="h-8 w-8 text-rose-500" />
                            <span className="text-xl font-bold">Ayno Bax</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                        isActive
                                            ? 'bg-rose-600 text-white shadow-lg'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    
                    <div className="hidden md:block">
                         <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-red-700 hover:to-rose-800 transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive ? 'bg-rose-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                         <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 block w-full text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-red-700 hover:to-rose-800"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

