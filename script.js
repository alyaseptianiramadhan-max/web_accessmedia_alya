document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Mobile Menu & Theme Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
        });
    }

    // 2. Data Aplikasi & Modal Dialog Interaktif
    const appData = {
        'meubel': {
            title: 'Aplikasi Toko Meubel',
            description: 'Sistem informasi pengelolaan inventaris furnitur, pesanan custom/pre-order, serti pencatatan DP transaksi pembelian pelanggan.',
            users: ['Toko Mebel Jepara Utama', 'Galeri Furnitur Modern', 'Pabrik Kayu Minimalis']
        },
        'petshop': {
            title: 'Aplikasi Petshop & Klinik Hewan',
            description: 'Kelola stok pakan, aksesoris, rekam medis hewan peliharaan, serta jadwal grooming dan penitipan hewan.',
            users: ['Pet Care Center', 'Klinik Satwa Sehat', 'Dunia Anabul Store']
        },
        'bengkel': {
            title: 'Aplikasi Bengkel Motor',
            description: 'Pencatatan nota servis kendaraan, riwayat sparepart, komisi mekanik, dan reminder servis berkala pelanggan.',
            users: ['Bengkel Motor Presisi', 'AHASS Partner Local', 'Klinik Speeds Service']
        },
        'body-repair': {
            title: 'Aplikasi Body Repair',
            description: 'Manajemen estimasi perbaikan bodi, biaya pengerjaan oven/cat, klaim asuransi, serta pelacakan progres pengerjaan mobil.',
            users: ['Auto Care Repair', 'Bengkel Cat & Bodi Nusantara']
        },
        'bangunan': {
            title: 'Aplikasi Toko Bangunan',
            description: 'Mendukung multi-satuan (sak, m3, dus, pcs), piutang kontraktor, harga grosir/eceran, dan manajemen muatan armada.',
            users: ['TB Material Jaya', 'Depo Bangunan Perkasa']
        },
        'minimarket': {
            title: 'Aplikasi Mini Market & POS',
            description: 'Kasir barcode cepat, integrasi printer thermal, cetak label harga, diskon member, dan laporan laba rugi otomatis.',
            users: ['Swalayan Sejahtera', 'Mart Komunitas', 'Toko Serba Ada']
        },
        'grosir': {
            title: 'Aplikasi Depo / Grosir',
            description: 'Pencatatan transaksi volume besar, tiered pricing (harga bertingkat), pengelolaan salesman, serta kontrol persediaan gudang.',
            users: ['Grosir Sembako Utama', 'Depo Plastik & Pack']
        },
        'distributor-buku': {
            title: 'Aplikasi Distributor Buku',
            description: 'Pengelolaan konsinyasi toko buku, stok penerbit, katalog judul, retur buku, dan faktur penagihan.',
            users: ['Distributor Pustaka Ilmu', 'Agen Buku Sekolah']
        },
        'keuangan-yayasan': {
            title: 'Aplikasi Keuangan Yayasan',
            description: 'Pencatatan dana hibah, donasi, zakat/infaq, SPP sekolah/pesantren, serta laporan keuangan akuntabel publik.',
            users: ['Yayasan Pendidikan Islam', 'Lembaga Amil Zakat']
        },
        'farmasi': {
            title: 'Aplikasi Farmasi & Apotek',
            description: 'Manajemen nomor batch obat, tanggal kedaluwarsa (expired date), resep dokter, serta laporan BPOM.',
            users: ['Apotek Sehat Bersama', 'Farmasi Medika']
        },
        'penggajian': {
            title: 'Aplikasi Gaji & Penggajian',
            description: 'Penghitungan gaji pokok, tunjangan, potongan BPJS/PPH21, uang lembur, absensi, dan slip gaji digital.',
            users: ['PT Perkebunan Nusantara', 'CV Solusi Karyawan']
        },
        'toko-komputer': {
            title: 'Aplikasi Toko Komputer',
            description: 'Pencatatan garansi produk berdasarkan Nomor Seri (SN), rakitan PC custom, dan klaim garansi vendor.',
            users: ['ABM Computer', 'Toko IT Hardware']
        }
    };

    const dialog = document.getElementById('applicationDialog');
    const dialogTitle = document.getElementById('applicationDialogTitle');
    const dialogDesc = document.getElementById('applicationDialogDescription');
    const dialogUsers = document.getElementById('applicationDialogUsers');
    const closeDialogBtn = document.getElementById('closeApplicationDialog');

    document.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('click', () => {
            const appKey = card.getAttribute('data-app');
            const data = appData[appKey];

            if (data && dialog) {
                dialogTitle.textContent = data.title;
                dialogDesc.textContent = data.description;
                dialogUsers.innerHTML = data.users.map(u => `<li class="flex items-center gap-2 bg-gray-100 dark:bg-slate-700 p-2.5 rounded-xl"><i class="fa-solid fa-check-circle text-brand-green"></i>${u}</li>`).join('');
                dialog.showModal();
            }
        });
    });

    if (closeDialogBtn && dialog) {
        closeDialogBtn.addEventListener('click', () => dialog.close());
    }

    // 3. Pencarian Real-Time
    const searchInput = document.getElementById('applicationSearchInput');
    const appCards = document.querySelectorAll('.app-card');
    const emptyMsg = document.getElementById('applicationSearchEmpty');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            appCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (emptyMsg) {
                emptyMsg.classList.toggle('hidden', visibleCount > 0);
            }
        });
    }
});