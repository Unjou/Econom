const organizations = [
    {
        name: "ASEAN",
        fullName: "Association of Southeast Asian Nations",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Flag_of_ASEAN.svg/1200px-Flag_of_ASEAN.svg.png",
        description: " ASEAN atau The Association of Southeast Asian Nations adalah sebuah organisasi Perhimpunan Bangsa-Bangsa yang menjadi wadah kerja sama negara-negara di Asia Tenggara. Hingga saat ini, ASEAN terdiri dari 10 negara anggota. Anggota negara ASEAN tersebut antara lain adalah Indonesia, Malaysia, Thailand, Brunei Darussalam, Vietnam, Laos, Singapura, Myanmar, Filipina, dan Kamboja.",
        headquarters: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan.",
        cooperation: [
            "Kawasan Perdagangan Bebas (ASEAN Free Trade Area atau AFTA)",
            "Masyarakat Ekonomi ASEAN (MEA)",
            " Deklarasi Kawasan Damai, Bebas, dan Netral (ZOPFAN)",
            "Zona Bebas Senjata Nuklir Asia Tenggara (SEANWFZ)",
            "ASEAN Tourism Agreement (ATA) Kerjasama di bidang Pariwisata",
            "Membentuk pusat penelitian yaitu ASEAN COST (Committee on Science and Technology)"
        ],
        benefits: [
            "Indonesia bergabung dengan ASEAN untuk memperkuat kerja sama dengan negara-negara tetangga. Kerja sama ini banyak manfaatnya, misalnya meningkatkan perdagangan, mempermudah perjalanan, dan menjaga stabilitas kawasan. ASEAN juga jadi tempat Indonesia untuk bersuara dan mempengaruhi kebijakan di tingkat regional."
        ]
    },
    {
        name: "APEC",
        fullName: "Asia-Pacific Economic Cooperation",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeJQ1ksuYVU3YocM1GrIQ3zipzUEOuCSwPidRaqewMm77uTRKFf2YZGxQaeF257v_akI&usqp=CAU",
        description: "Asia Pacific Economic Cooperation (APEC), merupakan wadah kerjasama ekonomi bagi negara-negara di kawasan Asia Pasifik. Organisasi ini berdiri pada bulan November 1989 di Canberra dengan tujuan utama membangun kerja sama ekonomi yang erat di antara negara-negara anggotanya. Dengan keanggotaan yang mencakup 21 ekonomi, termasuk Australia, Brunei Darussalam, Kanada, Chili, Cina, Malaysia, Meksiko, Selandia Baru, Papua Nugini, Peru, Filipina, Rusia, Singapura, Taiwan, Thailand, Amerika Serikat, Vietnam, Indonesia, Hong Kong, Jepang, dan Korea Selatan, APEC memegang peran penting dalam mendorong kerjasama lintas negara.",
        headquarters: "Singapura.",
        cooperation: [
            "Perdagangan dan investasi: APEC mendorong pertumbuhan ekonomi dan peningkatan kesejahteraan di kawasan Asia Pasifik.",
            "Ecotech: APEC membahas bantuan ekonomi dan teknis (economic and technical assistance).",
            "Keimigrasian: APEC memiliki skema APEC Business Travel Card (ABTC) yang mempermudah proses keluar-masuk negara bagi pebisnis."
        ],
        benefits: [
            "Indonesia menjadi salah satu tujuan investasi kawasan Asia Pasifik. Keanggotaan Indonesia dalam G-20 menjadikan Indonesia sebagai pasar bagi produk-produk impor dari negara anggota APEC. Pasar kawasan yang semakin terbuka meningkatkan peluang bagi produk nasional melakukan ekspor."
        ]
    },
    {
        name: "WTO",
        fullName: "World Trade Organization",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/WTO..png",
        description: "World Trade Organization (WTO) merupakan satu-satunya organisasi internasional yang mengatur perdagangan internasional. Terbentuk sejak tahun 1995, WTO berjalan berdasarkan serangkaian perjanjian yang dinegosiasikan dan disepakati oleh sejumlah besar negara di dunia dan diratifikasi melalui parlemen. Tujuan dari perjanjian-perjanjian WTO adalah untuk membantu produsen barang dan jasa, eksportir dan importir dalam melakukan kegiatannya.",
        headquarters: "Swiss",
        cooperation: [
            "Bentuk kerja sama World Trade Organization (WTO) dengan negara-negara anggota, termasuk Indonesia, di antaranya: Perundingan Doha Development Agenda (DDA), Paket Bali, Bantuan untuk Perdagangan, Perjanjian-perjanjian WTO. "
        ],
        benefits: [
            "Akses pasar global yang lebih luas dan terjamin",
            "Meningkatkan pertumbuhan ekonomi",
            "Memfasilitasi perundingan dan penyelesaian sengketa dagang",
            "Peningkatan transparansi kebijakan perdagangan",
            "Pengurangan biaya perdagangan internasional",
            "Kesempatan partisipasi dalam rantai nilai global",
            "Membantu memperkuat kapasitas dalam berpartisipasi dalam perdagangan internasional"
        ]
    },
    {
        name: "ASEM",
        fullName: "Asia-Europe Meeting",
        logo: "https://cdn-web.ruangguru.com/landing-pages/assets/hs/ASEM1.jpg",
        description: "Asia-Europe Meeting adalah forum yang dibentuk untuk membicarakan permasalahan-permasalahan yang melibatkan negara-negara Eropa dan Asia. Forum ini membahas berbagai hal yang tidak dibatasi tetapi selama ini membicarakan aspek ekonomi, politik, strategi pertahanan, pendidikan, kebudayaan, dan lingkungan hidup.",
        headquarters: "Tidak memiliki markas besar",
        cooperation: [
            "Dialog politik tingkat tinggi Asia-Eropa",
            "Kerjasama ekonomi dan keuangan bilateral",
            "Kerjasama sosial dan budaya antar kawasan",
            "Program pembangunan berkelanjutan",
            "Inisiatif pendidikan dan penelitian bersama",
            "Kerjasama teknologi dan inovasi",
            "Program pertukaran budaya",
            "Forum bisnis Asia-Eropa"
        ],
        benefits: [
            "Akses ke pasar Uni Eropa yang terintegrasi",
            "Transfer teknologi dan pengetahuan dari Eropa",
            "Peningkatan investasi dari negara-negara Eropa",
            "Penguatan hubungan diplomatik dengan Eropa",
            "Kesempatan kerjasama pendidikan tinggi",
            "Akses ke inovasi dan riset Eropa",
            "Peluang pengembangan industri kreatif",
            "Diversifikasi mitra dagang internasional"
        ]
    },
    {
        name: "MEA",
        fullName: "Masyarakat Ekonomi ASEAN",
        logo: "https://cdn.slidesharecdn.com/ss_thumbnails/mea-150331195427-conversion-gate01-thumbnail.jpg?width=640&height=640&fit=bounds",
        description: "MEA adalah sebuah inisiatif yang diluncurkan oleh negara-negara anggota ASEAN (Asosiasi Negara-Negara Asia Tenggara) untuk menciptakan integrasi ekonomi yang lebih kuat dan saling menguntungkan di kawasan ini. MEA bertujuan untuk membangun sebuah sistem ekonomi yang terkoordinasi dan terintegrasi di antara negara-negara ASEAN, yang mencakup perdagangan bebas, arus investasi, aliran barang dan jasa, serta mobilitas tenaga kerja terampil di seluruh wilayah ASEAN.",
        headquarters: "Kantor Kementerian Perdagangan (Kemendag) Indonesia.",
        cooperation: [
            "Integrasi ekonomi regional ASEAN",
            "Pembentukan pasar tunggal dan basis produksi",
            "Pengembangan kawasan ekonomi berdaya saing tinggi",
            "Pemerataan pembangunan ekonomi antar negara anggota",
            "Harmonisasi standar dan regulasi",
            "Fasilitasi perdagangan intra-ASEAN",
            "Program pengembangan UMKM regional",
            "Inisiatif konektivitas ASEAN"
        ],
        benefits: [
            "Perluasan pasar regional ASEAN yang terintegrasi",
            "Peningkatan investasi intra-ASEAN",
            "Pengembangan UKM melalui rantai pasok regional",
            "Peningkatan daya saing di tingkat ASEAN",
            "Akses ke tenaga kerja terampil ASEAN",
            "Harmonisasi standar produk dan jasa",
            "Pengurangan biaya logistik regional",
            "Peluang ekspansi usaha ke negara ASEAN"
        ]
    }
];

function createLogoCard(org, index) {
    return `
        <div class="org-logo cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-xl"
             onclick="showOrgDetail(${index})">
            <div class="relative w-32 h-32 md:w-40 md:h-40 mb-6 overflow-hidden rounded-full">
                <img src="${org.logo}" 
                     alt="${org.name}" 
                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                     onerror="this.src='/placeholder.svg?height=150&width=150'">
            </div>
            <h2 class="text-2xl font-bold text-blue-800 text-center mb-2">${org.name}</h2>
            <p class="text-gray-600 text-sm text-center">${org.fullName}</p>
        </div>
    `;
}

function showOrgDetail(index) {
    const org = organizations[index];
    const detailSection = document.getElementById('org-detail');
    const mainContent = document.getElementById('main-content');
    
    detailSection.innerHTML = `
        <div class="min-h-screen p-4 md:p-8">
            <div class="container mx-auto">
                <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div class="flex flex-col md:flex-row items-start gap-8">
                        <div class="w-full md:w-1/3 flex flex-col items-center">
                            <div class="relative w-48 h-48 mb-6 overflow-hidden rounded-full">
                                <img src="${org.logo}" 
                                     alt="${org.name}" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                     onerror="this.src='/placeholder.svg?height=150&width=150'">
                            </div>
                            <h2 class="text-2xl font-bold text-blue-800 text-center">${org.name}</h2>
                            <p class="text-gray-600 text-center mb-6">${org.fullName}</p>
                            <div class="bg-blue-50 rounded-xl p-6 w-full">
                                <h3 class="font-semibold text-blue-800 mb-2">Markas Besar</h3>
                                <p class="text-gray-700">${org.headquarters}</p>
                            </div>
                        </div>
                        
                        <div class="w-full md:w-2/3 space-y-6">
                            <div class="bg-blue-50 rounded-xl p-6">
                                <h3 class="font-semibold text-blue-800 mb-2">Deskripsi</h3>
                                <p class="text-gray-700">${org.description}</p>
                            </div>
                            
                            <div class="bg-blue-50 rounded-xl p-6">
                                <h3 class="font-semibold text-blue-800 mb-2">Bentuk Kerjasama</h3>
                                <div class="content-scroll pr-2">
                                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                                        ${org.cooperation.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="bg-blue-50 rounded-xl p-6">
                                <h3 class="font-semibold text-blue-800 mb-2">Manfaat bagi Indonesia</h3>
                                <div class="content-scroll pr-2">
                                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                                        ${org.benefits.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-center mt-8">
                        <button onclick="hideOrgDetail()" 
                                class="bg-blue-800 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
                            Kembali ke Beranda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    mainContent.style.display = 'none';
    detailSection.classList.remove('hidden');
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


function hideOrgDetail() {
    const detailSection = document.getElementById('org-detail');
    const mainContent = document.getElementById('main-content');
    
    detailSection.classList.add('hidden');
    mainContent.style.display = 'block';
}

function createLogoGrid() {
    const topRow = document.querySelector('#logo-grid > div:first-child');
    const bottomRow = document.querySelector('#logo-grid > div:last-child');
    
    organizations.slice(0, 3).forEach((org, index) => {
        topRow.innerHTML += createLogoCard(org, index);
    });
    
    organizations.slice(3, 5).forEach((org, index) => {
        bottomRow.innerHTML += createLogoCard(org, index + 3);
    });
}

document.addEventListener('DOMContentLoaded', createLogoGrid);