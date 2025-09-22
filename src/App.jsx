import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Lock, LogIn } from 'lucide-react';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import HomePage from './pages/home.jsx';
import AboutUsPage from './pages/aboutUs.jsx';

const PasswordScreen = ({ onSubmit, password, setPassword, error }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-900 via-gray-900 to-black font-sans">
            <div className="w-full max-w-md mx-auto p-4">
                <form 
                    onSubmit={onSubmit}
                    className="bg-blue-900/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl shadow-lg p-8 space-y-6"
                >
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800">
                             <Lock className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-white">
                            Akses Terbatas
                        </h2>
                        <p className="mt-2 text-center text-sm text-blue-200/80">
                            Silakan masukkan password untuk melanjutkan.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="relative block w-full appearance-none rounded-md border border-blue-700 bg-blue-900/50 px-3 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm transition"
                            placeholder="Password"
                        />
                    </div>
                    
                    {error && (
                         <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-md text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-lg border border-transparent bg-gradient-to-r from-blue-600 to-indigo-700 py-3 px-4 text-sm font-semibold text-white hover:from-red-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LogIn className="h-5 w-5 text-blue-300 group-hover:text-rose-200" aria-hidden="true" />
                            </span>
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



const Layout = () => {
  return (
    <div className="font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
    <div className="py-20 sm:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
            <p className="mt-4 text-lg text-gray-600">Konten untuk halaman ini akan segera hadir.</p>
        </div>
    </div>
);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [error, setError] = useState('');
    
    const correctPassword = '123rahasia123';

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Password salah, silakan coba lagi.');
            setPasswordInput('');
        }
    };

    if (!isAuthenticated) {
        return (
            <PasswordScreen
                onSubmit={handlePasswordSubmit}
                password={passwordInput}
                setPassword={setPasswordInput}
                error={error}
            />
        );
    }

    // Jika sudah terautentikasi, tampilkan website seperti biasa
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutUsPage />} />
                <Route path="services" element={<PlaceholderPage title="Layanan Kami" />} />
                <Route path="contact" element={<PlaceholderPage title="Hubungi Kami" />} />
                <Route path="careers" element={<PlaceholderPage title="Karir" />} />
                <Route path="privacy-policy" element={<PlaceholderPage title="Kebijakan Privasi" />} />
                <Route path="terms-of-service" element={<PlaceholderPage title="Syarat & Ketentuan" />} />
            </Route>
        </Routes>
    );
}

export default App;

