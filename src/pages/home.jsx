import React from 'react';
import { ArrowRight, Briefcase, Banknote, QrCode, GraduationCap, Sheet, HandCoins } from 'lucide-react';

const waNumber = '6285719409984';
const waText = "Halo, Nama Saya .......... saya ingin menanyakan terkait akses hasil pengerjaan supaya saya dapat melihat dan menghitung hasil freelance saya. Mohon Bantuannya";
const encodedWaText = encodeURIComponent(waText);

const pencairanBaseText = "Halo, Nama saya ............ . Saya dapat closing untuk pencairan";
const pencairanEndText = ", Mohon Bantuannya";
const textOlshop = `${pencairanBaseText} Olshop${pencairanEndText}`;
const textCcLokal = `${pencairanBaseText} CC Lokal${pencairanEndText}`;
const textDebitProtokol = `${pencairanBaseText} Debit Protokol${pencairanEndText}`;


const links = {
    lamaranSales: 'https://docs.google.com/forms/d/e/1FAIpQLSdUFD9ni1tYKlUrazi1eEJi29NQQobi3h8we34InkeNyZm6Ew/viewform',
    lamaranLeader: 'https://docs.google.com/forms/d/e/1FAIpQLSdUFD9ni1tYKlUrazi1eEJi29NQQobi3h8we34InkeNyZm6Ew/viewform',
    rekBCA: '#',
    rekBTN: 'https://docs.google.com/forms/d/e/1FAIpQLSfQGRfIS5QblwM4lUx7YHq-eUj3r1dpAyorywng2G13JquoYg/viewform?usp=sharing&ouid=112661044288315323683',
    rekSeaBank: '#',
    qrisOCBC: 'https://docs.google.com/forms/d/e/1FAIpQLSfiwFISMzT9eHqet8rlgyv4dEW4XZdDAcl6yYJVm60kqGrSEA/viewform?usp=sharing&ouid=112679264633387280959',
    qrisBCA: 'https://docs.google.com/forms/d/e/1FAIpQLSet0w1VmmPVSHQKBr7_5FH8Ghw4baIdEhAtYVFnzIlMWiY7yw/viewform?usp=sharing&ouid=112679264633387280959',
    qrisCIMB: '#',
    kelasGratis: 'https://forms.gle/GiDmFGf4Y88CjqtH8',
    kelasExpert: '#',
    requestSpreadsheet: `https://wa.me/${waNumber}?text=${encodedWaText}`,
    pencairanOlshop: `https://wa.me/${waNumber}?text=${encodeURIComponent(textOlshop)}`,
    pencairanCcLokal: `https://wa.me/${waNumber}?text=${encodeURIComponent(textCcLokal)}`,
    pencairanDebitProtokol: `https://wa.me/${waNumber}?text=${encodeURIComponent(textDebitProtokol)}`,
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
    const buttonClasses = "group/button w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md hover:from-red-700 hover:to-rose-800 hover:shadow-lg hover:shadow-rose-700/50";

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
            {children}
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
        </a>
    );
};

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black text-white font-sans">
            <div className="relative text-center py-20 sm:py-28 px-4">
                 <div className="absolute inset-0 bg-black opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Pusat Akses Freelancer
                </h1>
                <div className="max-w-3xl mx-auto text-lg text-blue-200/80">
                    <p>Semua tautan penting yang Anda butuhkan untuk memulai, mengerjakan, dan melaporkan pekerjaan Anda dalam kolaborasi antara:</p>
                    <div className="mt-4">
                        <span className="block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                            PT Bax Digital Indonesia
                        </span>
                        <span className="my-1 block text-xl font-semibold text-rose-500">
                            feat
                        </span>
                        <span className="block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                            PT Ayno Global Support
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <ActionCard icon={<Briefcase size={24}/>} title="Lamaran Kerja Freelance" description="Daftarkan diri Anda untuk menjadi bagian dari tim Sales atau Leader kami.">
                        <ActionButton href={links.lamaranSales}>Lamar sebagai Sales</ActionButton>
                        <ActionButton href={links.lamaranLeader}>Lamar sebagai Leader</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<Banknote size={24}/>} title="Pembukaan Rekening" description="Tautan cepat untuk pendaftaran pembukaan rekening bank partner.">
                        <ActionButton href={links.rekBCA}>Rekening BCA (Coming soon)</ActionButton>
                        <ActionButton href={links.rekBTN}>Rekening BTN</ActionButton>
                        <ActionButton href={links.rekSeaBank}>Rekening SeaBank (Coming soon)</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<QrCode size={24}/>} title="Pengajuan Qris" description="Tautan cepat untuk pendaftaran layanan QRIS dari berbagai bank.">
                        <ActionButton href={links.qrisOCBC}>QRIS OCBC</ActionButton>
                        <ActionButton href={links.qrisBCA}>QRIS BCA</ActionButton>
                        <ActionButton href={links.qrisCIMB}>QRIS CIMB (Coming soon)</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<GraduationCap size={24}/>} title="Kelas Digital Marketing" description="Ikuti kelas untuk meningkatkan skill Anda dalam pemasaran digital.">
                        <ActionButton href={links.kelasGratis}>Kelas Gratis (1 Pertemuan) (Coming soon)</ActionButton>
                        <ActionButton href={links.kelasExpert}>Kelas Expert (1 Bulan) (Coming soon)</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<Sheet size={24}/>} title="Request Spreadsheet" description="Minta akses ke spreadsheet hasil pengerjaan Anda melalui WhatsApp.">
                        <ActionButton href={links.requestSpreadsheet}>Minta Akses via WhatsApp</ActionButton>
                    </ActionCard>

                    <ActionCard icon={<HandCoins size={24}/>} title="Pencairan Tunai" description="Laporkan closing untuk berbagai jenis layanan pencairan tunai via WhatsApp.">
                        <ActionButton href={links.pencairanOlshop}>Closing Olshop</ActionButton>
                        <ActionButton href={links.pencairanCcLokal}>Closing CC Lokal</ActionButton>
                        <ActionButton href={links.pencairanDebitProtokol}>Closing Debit Protokol</ActionButton>
                    </ActionCard>

                </div>
            </div>
        </div>
    );
};

export default HomePage;

