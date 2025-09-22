import React from 'react';
import { ShieldCheck, Users, BarChart, Briefcase, Bot, Code } from 'lucide-react'; // Menggunakan ikon yang relevan

// Komponen untuk setiap anggota tim dengan gaya baru
const TeamMemberCard = ({ name, role, imageUrl }) => (
    <div className="group bg-blue-900/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl shadow-lg hover:border-rose-700 hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
            <img 
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-blue-900/50 group-hover:border-rose-700 transition-colors duration-300"
                src={imageUrl} 
                alt={name} 
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/0a192f/94a3b8?text=${name.split(' ').map(n => n[0]).join('')}` }}
            />
        </div>
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-rose-400 group-hover:text-rose-300 transition-colors duration-300">{role}</p>
    </div>
);

// Komponen untuk Misi & Visi dengan gaya baru
const MissionItem = ({ icon, title, description }) => (
    <div className="group bg-blue-900/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl shadow-lg hover:border-rose-700 hover:-translate-y-1 transition-all duration-300 ease-in-out p-6 flex flex-col h-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 group-hover:from-red-800 group-hover:to-rose-900 transition-all duration-300 text-white shadow-md mb-4">
            {icon}
        </div>
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-blue-200/80 flex-grow">{description}</p>
    </div>
);

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black text-white font-sans">
            {/* Hero Section */}
            <div className="relative text-center py-20 sm:py-28 px-4">
                 <div className="absolute inset-0 bg-black opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-blue-400">
                    Tentang Kami
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-blue-200/80">
                    Mendorong Transformasi Digital Melalui Inovasi, Kepercayaan, dan Kolaborasi Strategis.
                </p>
            </div>

            {/* Konten Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                
                {/* Siapa Kami Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-blue-900/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Siapa Kami?</h2>
                        <p className="text-blue-200/80 text-lg leading-relaxed">
                            Kami adalah mitra strategis Anda dalam menavigasi lanskap digital yang kompleks. Dengan spesialisasi dalam pelatihan digital marketing terdepan dan kemitraan erat bersama sektor perbankan, kami menghadirkan solusi inovatif yang terbukti memberikan hasil nyata.
                        </p>
                         <p className="mt-4 text-blue-200/80 text-lg leading-relaxed">
                            Kepercayaan adalah fondasi kami, dibangun di atas kolaborasi antara <span className="font-bold text-white">PT Bax Digital Indonesia</span> dan <span className="font-bold text-white">PT Ayno Global Support</span>.
                        </p>
                    </div>
                     <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-rose-800/30">
                        <img src="https://placehold.co/600x400/0a192f/e11d48?text=Inovasi+Digital" alt="Inovasi Digital" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>

                {/* Visi & Misi Section */}
                <div>
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-white">Visi & Misi Kami</h2>
                         <p className="mt-2 text-lg text-blue-200/80">Menjadi Pelopor Solusi Digital yang Memberdayakan.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MissionItem 
                            icon={<BarChart size={32} />}
                            title="Inovasi Berkelanjutan"
                            description="Menghadirkan strategi digital marketing terdepan yang adaptif terhadap perubahan tren pasar global."
                        />
                        <MissionItem 
                            icon={<ShieldCheck size={32} />}
                            title="Kemitraan Terpercaya"
                            description="Membangun hubungan jangka panjang dengan klien, terutama di sektor finansial, berdasarkan integritas."
                        />
                        <MissionItem 
                            icon={<Users size={32} />}
                            title="Pemberdayaan Talenta"
                            description="Menciptakan ekosistem yang mendukung pertumbuhan profesional freelance untuk mencapai potensi maksimal."
                        />
                    </div>
                </div>
                
                {/* Tim Kami Section */}
                <div>
                     <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-white">Di Balik Layar</h2>
                         <p className="mt-2 text-lg text-blue-200/80">Tim kami terdiri dari para ahli dengan passion di bidang teknologi dan pemasaran.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <TeamMemberCard name="Aderino Arya Nanda" role="Chief Executive Officer" imageUrl="https://placehold.co/128x128/0d3b66/ffffff?text=AAN" />
                        <TeamMemberCard name="Puja Ayu Miswari" role="Chief Operating Officer" imageUrl="https://placehold.co/128x128/b91c1c/ffffff?text=PAM" />
                        <TeamMemberCard name="Sultan Bryansyah" role="Chief Technology Officer" imageUrl="https://placehold.co/128x128/0d3b66/ffffff?text=SB" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;

