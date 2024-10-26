import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2024 PITCH-X. All rights reserved.</p>
                <nav className="space-x-4 mt-2">
                    <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
