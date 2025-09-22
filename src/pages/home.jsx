import React from 'react';
import { ArrowRight, Briefcase, Banknote, QrCode, GraduationCap, MessageSquare, CreditCard, School2 } from 'lucide-react';

const createWhatsAppLink = (text) => {
    const phoneNumber = "6285719409984"; 
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};

const links = {
    lamaranSales: 'https://forms.gle/SGoyPLFf4Y6tPQGM6',
    lamaranLeader: 'https://forms.gle/SGoyPLFf4Y6tPQGM6',
    rekBCA: '#',
    rekBTN: 'https://forms.gle/GgBspHBK9TaMELRQ7',
    rekSeaBank: '#',
    qrisOCBC: 'https://forms.gle/as22R3wW2TLD1ra59',
    qrisBCA: 'https://forms.gle/MzDeNnqCmFRFh1dm7',
    qrisCIMB: '#',
    kelasGratis: 'https://forms.gle/xg5iXDRXLc1LSnfJ7',
    kelasExpert: '#',
    requestSpreadsheet: createWhatsAppLink("Halo, Nama Saya .........., saya ingin menanyakan terkait akses hasil pengerjaan supaya saya dapat melihat dan menghitung hasil freelance saya. Mohon Bantuannya"),
    pencairanOlshop: createWhatsAppLink("Halo, Nama saya ............ . Saya dapat closing untuk pencairan Olshop, Mohon Bantuannya"),
    pencairanCCLokal: createWhatsAppLink("Halo, Nama saya ............ . Saya dapat closing untuk pencairan CC Lokal, Mohon Bantuannya"),
    pencairanDebitProtokol: createWhatsAppLink("Halo, Nama saya ............ . Saya dapat closing untuk pencairan Debit Protokol, Mohon Bantuannya"),
    kuliahKilat: createWhatsAppLink("Halo, Nama Saya ................, Saya ingin menanyakan Terkait pemasaran Kuliah Kilat"),
};

const ActionCard = ({ icon, title, description, children }) => (
    <div className="group bg-blue-900/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl shadow-lg hover:border-rose-700 hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 flex flex-col h-full">
        <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-3 rounded-xl text-white shadow-md group-hover:from-red-800 group-hover:to-rose-900 transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-blue-200/80 mb-6 flex-grow">{description}</p>
        <div className="mt-auto space-y-3">{children}</div>
    </div>
);

const ActionButton = ({ href, children }) => {
    const baseClasses = "group w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-blue-900/50 border border-blue-700 text-blue-100 hover:bg-rose-700/50 hover:border-rose-600 hover:text-white";

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
            {children}
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
    );
};

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black text-white font-sans">
            <div className="relative text-center py-20 sm:py-28 px-4">
                 <div className="absolute inset-0 bg-black opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-400 block">Pusat Akses Freelancer</span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-blue-200/80 leading-relaxed">
                    Kolaborasi Strategis <br className="sm:hidden" />
                    <span className="font-bold text-white">PT Bax Digital Indonesia</span> feat <span className="font-bold text-white">PT Ayno Global Support</span>
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <ActionCard icon={<Briefcase size={24}/>} title="Lamaran Kerja" description="Daftarkan diri Anda untuk menjadi bagian dari tim Sales atau Leader kami.">
                        <ActionButton href={links.lamaranSales}>Lamar sebagai Sales</ActionButton>
                        <ActionButton href={links.lamaranLeader}>Lamar sebagai Leader</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<Banknote size={24}/>} title="Pembukaan Rekening" description="Tautan cepat untuk pendaftaran pembukaan rekening bank partner.">
                        <ActionButton href={links.rekBCA}>Rekening BCA (Coming-Soon) </ActionButton>
                        <ActionButton href={links.rekBTN}>Rekening BTN</ActionButton>
                        <ActionButton href={links.rekSeaBank}>Rekening SeaBank(Coming-Soon)</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<QrCode size={24}/>} title="Pengajuan QRIS" description="Tautan cepat untuk pendaftaran layanan QRIS dari berbagai bank.">
                        <ActionButton href={links.qrisOCBC}>QRIS OCBC</ActionButton>
                        <ActionButton href={links.qrisBCA}>QRIS BCA</ActionButton>
                        <ActionButton href={links.qrisCIMB}>QRIS CIMB(Coming-Soon)</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<GraduationCap size={24}/>} title="Kelas Digital Marketing" description="Ikuti kelas untuk meningkatkan skill Anda dalam pemasaran digital.">
                        <ActionButton href={links.kelasGratis}>Daftar Kelas Gratis (1 Pertemuan)</ActionButton>
                        <ActionButton href={links.kelasExpert}>Daftar Kelas Expert (1 Bulan)</ActionButton>
                    </ActionCard>
                    
                    <ActionCard icon={<CreditCard size={24}/>} title="Pencairan Tunai" description="Ajukan pencairan tunai untuk berbagai jenis closing yang berhasil Anda dapatkan.">
                        <ActionButton href={links.pencairanOlshop}>Pencairan Olshop</ActionButton>
                        <ActionButton href={links.pencairanCCLokal}>Pencairan CC Lokal</ActionButton>
                        <ActionButton href={links.pencairanDebitProtokol}>Pencairan Debit Protokol</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<School2 size={24}/>} title="Kuliah Kilat" description="Dapatkan informasi lengkap mengenai program percepatan karir melalui Kuliah Kilat.">
                        <ActionButton href={links.kuliahKilat}>Tanya Seputar Kuliah Kilat</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<MessageSquare size={24}/>} title="Request Spreadsheet" description="Akses hasil pengerjaan Anda untuk memantau dan menghitung pencapaian.">
                        <ActionButton href={links.requestSpreadsheet}>Minta Akses Spreadsheet</ActionButton>
                    </ActionCard>

                </div>
            </div>
        </div>
    );
};

export default HomePage;

