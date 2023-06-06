import React, { useEffect, useState } from "react";
import FacilityList from "../components/FacilityList";
// import FacilitySearch from "../components/FacilitySearch";
import FacilityMap from "../FacilityMap";
import { AiOutlineSearch } from "react-icons/ai";

function FacilityPage() {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const facilityList = [
      {
        title: "Kantor Satpam",
        desc: "Pos satpam Balai Besar Perikanan Budidaya Laut Lampung adalah unit keamanan yang bertugas menjaga keamanan dan keamanan fasilitas Balai Besar Perikanan Budidaya Laut di Lampung, Indonesia. Dengan staf yang terlatih, pos satpam ini bertanggung jawab atas pengawasan pintu masuk, keluar, dan patroli di sekitar area balai besar. Mereka juga dilengkapi dengan peralatan keamanan seperti CCTV dan peralatan komunikasi untuk respons cepat dalam situasi darurat. Pos satpam ini bekerja sama dengan personel balai besar dan pihak terkait lainnya untuk melindungi aset dan personel yang ada di dalamnya.",
        status: true,
      },

      {
        title: "Guest House",
        desc: "Guest house milik Balai Besar Perikanan Budidaya Laut Lampung adalah akomodasi yang disediakan oleh balai besar untuk tamu yang berkunjung atau memiliki keperluan di BBPBL. Guest house ini memberikan kenyamanan dan fasilitas yang diperlukan bagi para tamu, termasuk para ilmuwan, peneliti, atau pihak terkait yang terlibat dalam kegiatan perikanan budidaya laut.",
        status: true,
      },

      {
        title: "Pelayanan Publik",
        desc: "Kantor Pelayanan Publik milik Balai Besar Perikanan Budidaya Laut Lampung merupakan pusat layanan yang didedikasikan untuk memenuhi kebutuhan masyarakat terkait dengan perikanan budidaya laut di wilayah Lampung, Indonesia. Kantor ini menyediakan berbagai layanan yang meliputi informasi, pendaftaran, izin, bimbingan, dan pengembangan di sektor perikanan budidaya laut.",
        status: true,
      },

      {
        title: "Kesehatan Lingkungan",
        desc: "Kantor Kesehatan Lingkungan milik Balai Besar Perikanan Budidaya Laut Lampung adalah unit yang bertanggung jawab atas pemantauan dan pengelolaan kesehatan lingkungan di sektor perikanan budidaya laut di wilayah Lampung, Indonesia. Kantor ini memiliki peran penting dalam menjaga dan memastikan kebersihan, keamanan, dan keberlanjutan lingkungan yang terkait dengan kegiatan perikanan budidaya laut.",
        status: true,
      },

      {
        title: "Lab Kualitas Air",
        desc: "Laboratorium Kualitas Air milik Balai Besar Perikanan Budidaya Laut Lampung adalah fasilitas yang bertugas untuk menguji dan menganalisis kualitas air di sektor perikanan budidaya laut di wilayah Lampung, Indonesia. Laboratorium ini memiliki peran penting dalam memantau dan memastikan kualitas air yang digunakan dalam kegiatan perikanan budidaya laut sesuai dengan standar yang ditetapkan.",
        status: true,
      },

      {
        title: "Parkiran",
        desc: "Parkiran milik Balai Besar Perikanan Budidaya Laut Lampung adalah area yang disediakan untuk para pengunjung atau pemangku kepentingan yang mengunjungi balai besar dengan kendaraan pribadi. Parkiran ini bertujuan untuk memberikan fasilitas yang nyaman dan aman bagi pengguna kendaraan yang datang ke Balai Besar Perikanan Budidaya Laut di Lampung.",
        status: true,
      },

      {
        title: "Masjid",
        desc: "Balai Besar Perikanan Budidaya Laut Lampung memiliki fasilitas masjid yang diperuntukkan bagi umat muslim di sekitar balai untuk menjalankan beribadah.",
        status: true,
      },

      {
        title: "Taman dan Lapangan Voli",
        desc: "Taman dan lapangan voli Balai Besar Perikanan Budidaya Laut Lampung merupakan fasilitas rekreasi yang disediakan untuk para pengunjung dan staf balai besar. Taman ini menawarkan suasana yang nyaman dan hijau dengan berbagai jenis tanaman dan pepohonan yang ditanam dengan indah. Di tengah taman, terdapat lapangan voli yang luas dan terawat dengan baik, yang dapat digunakan untuk bermain voli secara santai atau untuk kegiatan olahraga bersama. Fasilitas ini memberikan kesempatan kepada staf dan pengunjung untuk beristirahat, bersosialisasi, dan beraktivitas fisik di lingkungan yang alami dan menyegarkan.",
        status: true,
      },

      {
        title: "Kantor",
        desc: "Ruang kantor pada Balai Besar Perikanan Budidaya Laut (BBPBL) memiliki fungsi utama sebagai pusat administrasi dan koordinasi. Di dalamnya dilakukan tugas-tugas administratif seperti pengelolaan dokumen, penjadwalan, dan pengarsipan. Ruang kantor juga digunakan untuk berkomunikasi dan berkoordinasi antara anggota tim dan departemen BBPBL, serta menyediakan informasi mengenai kebijakan, peraturan, dan data terkait perikanan budidaya laut. Selain itu, ruang kantor juga menjadi tempat kerja staf BBPBL dalam melaksanakan penelitian, analisis data, dan penyusunan laporan.",
        status: true,
      },

      {
        title: "Pokja",
        desc: "Ruang Pokja (Pokok Pikiran dan Koordinasi) dalam Balai Besar Perikanan Budidaya Laut (BBPBL) berfungsi sebagai tempat rapat, diskusi, dan koordinasi antara anggota tim yang terlibat dalam proyek atau topik tertentu. Di ruang ini, mereka dapat berbagi ide, merencanakan kegiatan, dan mengambil keputusan terkait tugas-tugas yang ada. Ruang Pokja juga memfasilitasi kolaborasi dan sinergi antara anggota tim, serta memperkuat kerjasama antara departemen atau unit dalam BBPBL.",
        status: true,
      },

      {
        title: "Auditorium",
        desc: "Ruang Auditorium dalam Balai Besar Perikanan Budidaya Laut (BBPBL) berfungsi sebagai ruangan yang dirancang untuk acara besar seperti pertemuan, presentasi, atau konferensi. Biasanya dilengkapi dengan kursi bertingkat, panggung, sistem audiovisual, dan pencahayaan yang dapat disesuaikan. Auditorium menyediakan lingkungan yang nyaman dan fungsional untuk menyelenggarakan acara besar serta memberikan pengalaman yang baik bagi peserta atau penonton.",
        status: true,
      },

      {
        title: "Koperasi",
        desc: "Koperasi Balai Besar Perikanan Budidaya Laut Lampung adalah sebuah lembaga ekonomi yang didirikan di bawah naungan Balai Besar Perikanan Budidaya Laut Lampung. Koperasi ini bertujuan untuk memberikan dukungan dan pengembangan ekonomi bagi anggota koperasi yang terdiri dari staf dan masyarakat terkait sektor perikanan budidaya laut. Koperasi ini menyediakan berbagai layanan dan fasilitas seperti pembiayaan, pemasaran produk, pendidikan dan pelatihan, serta pengembangan usaha. Dengan adanya koperasi ini, anggota dapat saling berkolaborasi, berbagi sumber daya, dan meningkatkan kesejahteraan ekonomi mereka melalui aktivitas usaha yang berkelanjutan dan berbasis komunitas.",
        status: true,
      },

      {
        title: "Ruang Pelatihan",
        desc: "Ruang pelatihan pada Balai Besar Perikanan dan Budidaya Laut (BBPBL) adalah ruangan yang didedikasikan untuk kegiatan pendidikan dan pelatihan terkait dengan perikanan dan budidaya laut. Ruangan ini dirancang untuk mendukung proses pembelajaran dan pengembangan keterampilan bagi peserta pelatihan. Ruang pelatihan BBPBL dilengkapi dengan fasilitas yang diperlukan, seperti meja dan kursi yang nyaman untuk peserta, serta peralatan audiovisual seperti proyektor, layar, dan sound system untuk presentasi dan demonstrasi. Ruangan ini juga dapat dilengkapi dengan papan tulis atau whiteboard, serta akses internet yang memungkinkan penggunaan teknologi dan akses ke sumber daya online.",
        status: true,
      },

      {
        title: "Asrama Kerapu (Asrama Perempuan)",
        desc: "Asrama Perempuan pada Balai Besar Perikanan dan Budidaya Laut (BBPBL) merupakan fasilitas perumahan yang disediakan khusus untuk akomodasi perempuan yang terlibat dalam kegiatan BBPBL. Asrama ini bertujuan untuk menyediakan tempat tinggal yang nyaman dan aman bagi para perempuan yang bekerja atau mengikuti program di BBPBL.",
        status: true,
      },

      {
        title: "Asrama Kakap (Asrama Laki-laki)",
        desc: "Asrama Laki-laki pada Balai Besar Perikanan dan Budidaya Laut (BBPBL) merupakan fasilitas perumahan yang disediakan khusus untuk akomodasi laki-laki yang terlibat dalam kegiatan BBPBL. Asrama ini bertujuan untuk menyediakan tempat tinggal yang nyaman dan aman bagi para laki-laki yang bekerja atau mengikuti program di BBPBL.",
        status: true,
      },

      {
        title: "Perpustakaan",
        desc: "Perpustakaan Balai Besar Perikanan Budidaya Laut Lampung adalah sebuah fasilitas yang menyediakan akses ke beragam sumber informasi dan literatur terkait dengan perikanan budidaya laut di wilayah Lampung. Perpustakaan ini berfungsi sebagai pusat pengetahuan yang mendukung kegiatan riset, studi, dan pengembangan dalam sektor perikanan budidaya laut. Di dalam perpustakaan ini, terdapat koleksi buku, jurnal ilmiah, artikel, laporan riset, dan publikasi terkait perikanan budidaya laut. Fasilitas ini juga dilengkapi dengan sistem katalog yang memudahkan para pengguna dalam mencari dan mengakses informasi yang mereka butuhkan. Dengan adanya perpustakaan ini, Balai Besar Perikanan Budidaya Laut Lampung berkomitmen untuk memfasilitasi akses terhadap pengetahuan dan informasi yang relevan, serta meningkatkan pemahaman dan pengembangan di bidang perikanan budidaya laut.",
        status: true,
      },

      {
        title: "Lapangan Upacara",
        desc: "Lapangan upacara Balai Besar Perikanan Budidaya Laut Lampung adalah area yang dirancang khusus sebagai tempat untuk mengadakan upacara, acara seremonial, dan kegiatan penting lainnya. Lapangan ini memiliki luas yang mencukupi untuk menampung sejumlah besar orang dalam suasana terbuka. Lapangan upacara Balai Besar Perikanan Budidaya Laut Lampung menjadi tempat berlangsungnya berbagai acara penting yang melibatkan staf, tamu, dan pihak terkait untuk merayakan prestasi, merayakan peristiwa tertentu, atau memperkuat semangat kerja bersama.",
        status: true,
      },

      {
        title: "Garasi",
        desc: "Garasi pada Balai Besar Perikanan dan Budidaya Laut (BBPBL) memiliki fungsi utama sebagai tempat parkir dan penyimpanan kendaraan yang digunakan oleh BBPBL. Kendaraan tersebut termasuk mobil dinas, kendaraan operasional, atau kendaraan pengangkut yang digunakan dalam kegiatan perikanan budidaya laut. Garasi menyediakan ruang yang aman dan terlindungi untuk menjaga kendaraan agar tidak terkena kerusakan atau ancaman eksternal seperti cuaca buruk atau tindakan vandalisme.",
        status: true,
      },

      {
        title: "Gedung Genset",
        desc: "Gedung Genset Upacara Balai Besar Perikanan Budidaya Laut Lampung adalah sebuah bangunan yang memiliki peran penting dalam penyediaan sumber daya listrik cadangan untuk kegiatan upacara dan acara seremonial di balai besar. Gedung ini dilengkapi dengan mesin generator (genset) yang dapat menghasilkan daya listrik mandiri secara otomatis ketika terjadi pemadaman listrik.",
        status: true,
      },

      {
        title: "Green House Rumput Laut",
        desc: "Greenhouse rumput laut pada Balai Besar Perikanan dan Budidaya Laut (BBPBL) adalah struktur yang dirancang khusus untuk menumbuhkan dan mengembangkan rumput laut secara terkendali. Greenhouse ini menyediakan lingkungan yang optimal bagi pertumbuhan rumput laut dengan mengontrol suhu, kelembaban, cahaya, dan nutrisi.",
        status: true,
      },

      {
        title: "Pakan Alami",
        desc: "Ruang pakan alami pada BBPBL digunakan untuk mengembangkan dan memproduksi pakan alami bagi budidaya perikanan. Di ruangan ini, dilakukan proses pemeliharaan kultur mikroba dan organisme mikroskopis sebagai pakan ikan. Fasilitas pemisahan dan pemurnian juga ada untuk memisahkan pakan dari media pertumbuhannya. Ruang pakan alami BBPBL penting untuk menghasilkan pakan berkualitas tinggi dan mendukung pertumbuhan ikan yang dibudidayakan serta berkontribusi pada keberlanjutan budidaya perikanan.",
        status: true,
      },
    ];

    setFacilities(facilityList);
  }, []);

  return (
    <div className="facility-container">
      <h3>Fasilitas</h3>
      <FacilityMap />
      <div className="facility-search">
        <span className="facility-search_logo">
          <AiOutlineSearch />
        </span>
        <input
          id="facility-input"
          className="facility-input_search"
          placeholder="Cari fasilitas"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      {/* <FacilitySearch setSearchTerm={setSearchTerm} /> */}
      <FacilityList facilities={facilities} searchTerm={searchTerm} />
    </div>
  );
}

export default FacilityPage;
