"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionary
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",

    // Hero Section
    "hero.title": "Elevating Futures with Precision",
    "hero.subtitle": "Premium elevator solutions engineered for safety, reliability, and exceptional performance.",
    "hero.exploreProducts": "Explore Products",

    // Intro Section
    "intro.title": "Crafting Vertical Transportation Excellence Since 1995",
    "intro.description":
      "At Elevate Engineering, we specialize in designing, manufacturing, and installing premium elevator systems for residential and commercial buildings. Our commitment to quality, safety, and innovation has made us a trusted partner for architects, developers, and property owners worldwide.",
    "intro.feature1": "Premium quality materials and craftsmanship",
    "intro.feature2": "Energy-efficient elevator solutions",
    "intro.feature3": "Customized designs to match your architecture",
    "intro.feature4": "Comprehensive maintenance and support",
    "intro.feature5": "Industry-leading safety standards",
    "intro.learnMore": "Learn More About Us",

    // Features Section
    "features.title": "Why Choose Elevate Engineering",
    "features.subtitle":
      "Our commitment to excellence and customer satisfaction sets us apart in the elevator industry.",
    "features.safety.title": "Safety First",
    "features.safety.desc":
      "Our elevators exceed industry safety standards with multiple backup systems and fail-safe mechanisms.",
    "features.delivery.title": "Timely Delivery",
    "features.delivery.desc":
      "We pride ourselves on meeting project deadlines with precision planning and efficient execution.",
    "features.custom.title": "Custom Solutions",
    "features.custom.desc":
      "Each elevator is tailored to your specific requirements, architectural style, and building constraints.",
    "features.quality.title": "Premium Quality",
    "features.quality.desc":
      "We use only the highest quality materials and components to ensure longevity and reliability.",
    "features.energy.title": "Energy Efficient",
    "features.energy.desc":
      "Our elevator systems are designed to minimize energy consumption without compromising performance.",
    "features.support.title": "Lifetime Support",
    "features.support.desc":
      "We provide comprehensive maintenance and support services throughout the lifecycle of your elevator.",

    // Product Showcase
    "productShowcase.title": "Featured Products",
    "productShowcase.subtitle":
      "Explore our premium elevator solutions designed for various applications and environments.",
    "productShowcase.homeLift": "Premium Home Lift",
    "productShowcase.homeLift.desc": "Elegant design with premium finishes for luxury homes",
    "productShowcase.passenger": "Commercial Passenger Elevator",
    "productShowcase.passenger.desc": "High-capacity elevators for office buildings and commercial spaces",
    "productShowcase.cargo": "Industrial Cargo Lift",
    "productShowcase.cargo.desc": "Heavy-duty cargo elevators for industrial applications",
    "productShowcase.panoramic": "Panoramic Glass Elevator",
    "productShowcase.panoramic.desc": "Stunning glass elevators with panoramic views",
    "productShowcase.hospital": "Hospital Medical Elevator",
    "productShowcase.hospital.desc": "Specialized elevators for healthcare facilities",

    // Client Showcase
    "clientShowcase.title": "Our Valued Clients",
    "clientShowcase.subtitle":
      "Discover what our clients have to say about their experience working with Elevate Engineering.",

    // Clients Section
    "clients.title": "Trusted by Industry Leaders",
    "clients.subtitle":
      "We've partnered with renowned architects, developers, and property managers to deliver exceptional elevator solutions.",
    "clients.viewProjects": "View Our Projects",

    // CTA Section
    "cta.title": "Ready to Elevate Your Building Experience?",
    "cta.subtitle":
      "Contact our team today to discuss your elevator needs and receive a customized quote for your project.",
    "cta.getQuote": "Get a Quote",
    "cta.exploreProducts": "Explore Products",

    // Footer
    "footer.description":
      "Premium elevator solutions for residential and commercial buildings. Quality, safety, and innovation in every project.",
    "footer.quickLinks": "Quick Links",
    "footer.products": "Products",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "All rights reserved.",

    // About Page
    "about.title": "About Elevate Engineering",
    "about.subtitle":
      "Discover our story, our values, and our commitment to excellence in elevator engineering and installation.",
    "about.vision.title": "Our Vision",
    "about.mission.title": "Our Mission",
    "about.history.title": "Our History",
    "about.team.title": "Our Leadership Team",

    // Products Page
    "products.title": "Our Premium Elevator Solutions",
    "products.subtitle":
      "Discover our range of high-quality elevator systems designed for safety, reliability, and aesthetic excellence.",
    "products.solutionsTitle": "Elevator Solutions for Every Need",
    "products.solutionsSubtitle":
      "From residential homes to commercial complexes, we offer a comprehensive range of elevator systems tailored to your specific requirements.",

    // Projects Page
    "projects.title": "Our Projects & Clients",
    "projects.subtitle":
      "Explore our portfolio of successful elevator installations and the prestigious clients who trust our expertise.",
    "projects.featured": "Our Featured Projects",
    "projects.featuredSubtitle":
      "Browse through our portfolio of successful elevator installations across various industries and building types.",
    "projects.all": "All",
    "projects.commercial": "Commercial",
    "projects.residential": "Residential",
    "projects.healthcare": "Healthcare",
    "projects.hospitality": "Hospitality",
    "projects.viewGallery": "View Project Gallery",
    "projects.completedIn": "Completed in",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Get in touch with our team to discuss your elevator needs or request a quote for your project.",
    "contact.getInTouch": "Get in Touch",
    "contact.formSubtitle": "Fill out the form below and our team will get back to you within 24 hours.",
    "contact.info": "Contact Information",
    "contact.infoSubtitle": "Reach out to us through any of the following channels.",
    "contact.location": "Our Location",
    "contact.locationSubtitle": "Visit our headquarters to see our showroom and discuss your project in person.",

    // Form Fields
    "form.fullName": "Full Name",
    "form.email": "Email Address",
    "form.phone": "Phone Number",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send Message",
    "form.sending": "Sending...",
    "form.success": "Thank you for your message! Our team will contact you shortly.",

    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",
    "common.getStarted": "Get Started",
    "common.requestInfo": "Request Information",
    "common.callNow": "Call Now",
    "common.emailUs": "Email Us",
    "common.location": "Location",
    "common.year": "Year",
    "common.type": "Type",
    "common.capacity": "Capacity",
    "common.features": "Features",
    "common.specifications": "Specifications",
    "common.applications": "Applications",
    "common.keyFeatures": "Key Features",
    "common.technicalSpecs": "Technical Specifications",
    "common.gallery": "Gallery",
    "common.testimonial": "Testimonial",
    "common.projectDetails": "Project Details",
    "common.close": "Close",

    // Vision & Mission
    "vision.title": "Our Vision",
    "vision.description1":
      "To be the global leader in innovative elevator solutions, setting new standards for safety, efficiency, and design excellence. We envision a world where vertical transportation enhances the architectural beauty of buildings while providing seamless mobility for all.",
    "vision.description2":
      "We strive to pioneer sustainable elevator technologies that minimize environmental impact while maximizing performance and reliability, contributing to smarter, more connected buildings of the future.",
    "mission.title": "Our Mission",
    "mission.description1":
      "To deliver exceptional elevator solutions that exceed client expectations through engineering excellence, innovative design, and uncompromising quality. We are committed to creating safe, reliable, and aesthetically pleasing elevator systems that enhance the value and functionality of every building.",
    "mission.description2":
      "We accomplish this by fostering a culture of continuous improvement, investing in our team's development, embracing cutting-edge technologies, and maintaining strong relationships with our clients and partners throughout the entire project lifecycle.",

    // Company History
    "history.title": "Our History",
    "history.subtitle":
      "From humble beginnings to industry leadership, our journey has been defined by innovation, quality, and a commitment to excellence.",
    "history.legacy": "A Legacy of Excellence",
    "history.description1":
      "For over 25 years, Elevate Engineering has been at the forefront of elevator innovation, transforming how people move within buildings around the world. What began as a small team of passionate engineers has grown into a global leader in elevator design, manufacturing, and installation.",
    "history.description2":
      "Our journey has been marked by a relentless pursuit of excellence, a commitment to safety, and a drive to push the boundaries of what's possible in vertical transportation. Today, we continue to build on this legacy, combining time-tested engineering principles with cutting-edge technology to create elevator solutions that stand the test of time.",
    "history.milestones": "Key Milestones",

    // Team Section
    "team.title": "Our Leadership Team",
    "team.subtitle":
      "Meet the experienced professionals who drive our vision and ensure the highest standards of quality and innovation.",

    // Contact Form
    "contact.form.title": "Get in Touch",
    "contact.form.subtitle": "Fill out the form below and our team will get back to you within 24 hours.",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out to us through any of the following channels.",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.connect": "Connect With Us",
    "contact.map.title": "Our Location",
    "contact.map.subtitle": "Visit our headquarters to see our showroom and discuss your project in person.",

    // Products List
    "products.list.title": "Elevator Solutions for Every Need",
    "products.list.subtitle":
      "From residential homes to commercial complexes, we offer a comprehensive range of elevator systems tailored to your specific requirements.",

    // Projects List
    "projects.list.title": "Our Featured Projects",
    "projects.list.subtitle":
      "Browse through our portfolio of successful elevator installations across various industries and building types.",

    // Client Logos
    "clients.logos.title": "Our Trusted Clients",
    "clients.logos.subtitle": "We're proud to work with leading companies and organizations across various industries.",

    // Breadcrumb
    "breadcrumb.home": "Home",
    "breadcrumb.about": "About Us",
    "breadcrumb.products": "Products",
    "breadcrumb.projects": "Projects",
    "breadcrumb.contact": "Contact",

    // Product Details
    "product.keyFeatures": "Key Features",
    "product.technicalSpecs": "Technical Specifications",
    "product.applications": "Applications",
    "product.getQuote": "Get Free Quote",
    "product.callNow": "Call Now",
    "product.readyToStart": "Ready to Get Started?",
    "product.contactExperts":
      "Contact our experts today for a customized solution that meets your specific requirements.",

    // Project Details
    "project.location": "Location",
    "project.completed": "Completed",
    "project.client": "Client",
    "project.elevators": "Elevators",
    "project.floors": "Floors",
    "project.projectValue": "Project Value",
    "project.caseStudy": "Project Case Study",
    "project.overview": "Project Overview",
    "project.viewGallery": "View Project Gallery",
    "project.startProject": "Start Your Project",
    "project.freeConsultation": "Get Free Consultation",
    "project.viewAllProjects": "View All Projects",
    "project.readyToStart": "Ready to Start Your Project?",
    "project.helpDesign": "Let our experienced team help you design and implement the perfect solution for your needs.",

    // Form validation and states
    "form.required": "This field is required",
    "form.invalidEmail": "Please enter a valid email address",
    "form.selectSubject": "Select a subject",
    "form.requestQuote": "Request a Quote",
    "form.productInfo": "Product Information",
    "form.techSupport": "Technical Support",
    "form.partnership": "Partnership Opportunity",
    "form.other": "Other",
    "form.messagePlaceholder": "Please provide details about your project or inquiry...",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.products": "Produk",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "nav.getQuote": "Minta Penawaran",

    // Hero Section
    "hero.title": "Mengangkat Masa Depan dengan Presisi",
    "hero.subtitle": "Solusi elevator premium yang dirancang untuk keamanan, keandalan, dan performa luar biasa.",
    "hero.exploreProducts": "Jelajahi Produk",

    // Intro Section
    "intro.title": "Menciptakan Keunggulan Transportasi Vertikal Sejak 1995",
    "intro.description":
      "Di Elevate Engineering, kami mengkhususkan diri dalam merancang, memproduksi, dan memasang sistem elevator premium untuk bangunan residensial dan komersial. Komitmen kami terhadap kualitas, keamanan, dan inovasi telah menjadikan kami mitra terpercaya bagi arsitek, pengembang, dan pemilik properti di seluruh dunia.",
    "intro.feature1": "Material dan keahlian berkualitas premium",
    "intro.feature2": "Solusi elevator hemat energi",
    "intro.feature3": "Desain kustom sesuai arsitektur Anda",
    "intro.feature4": "Pemeliharaan dan dukungan komprehensif",
    "intro.feature5": "Standar keamanan terdepan di industri",
    "intro.learnMore": "Pelajari Lebih Lanjut Tentang Kami",

    // Features Section
    "features.title": "Mengapa Memilih Elevate Engineering",
    "features.subtitle":
      "Komitmen kami terhadap keunggulan dan kepuasan pelanggan membedakan kami di industri elevator.",
    "features.safety.title": "Keamanan Utama",
    "features.safety.desc":
      "Elevator kami melampaui standar keamanan industri dengan sistem cadangan ganda dan mekanisme fail-safe.",
    "features.delivery.title": "Pengiriman Tepat Waktu",
    "features.delivery.desc":
      "Kami bangga memenuhi tenggat waktu proyek dengan perencanaan presisi dan eksekusi efisien.",
    "features.custom.title": "Solusi Kustom",
    "features.custom.desc":
      "Setiap elevator disesuaikan dengan kebutuhan spesifik, gaya arsitektur, dan batasan bangunan Anda.",
    "features.quality.title": "Kualitas Premium",
    "features.quality.desc":
      "Kami hanya menggunakan material dan komponen berkualitas tertinggi untuk memastikan daya tahan dan keandalan.",
    "features.energy.title": "Hemat Energi",
    "features.energy.desc":
      "Sistem elevator kami dirancang untuk meminimalkan konsumsi energi tanpa mengorbankan performa.",
    "features.support.title": "Dukungan Seumur Hidup",
    "features.support.desc":
      "Kami menyediakan layanan pemeliharaan dan dukungan komprehensif sepanjang siklus hidup elevator Anda.",

    // Product Showcase
    "productShowcase.title": "Produk Unggulan",
    "productShowcase.subtitle":
      "Jelajahi solusi elevator premium kami yang dirancang untuk berbagai aplikasi dan lingkungan.",
    "productShowcase.homeLift": "Home Lift Premium",
    "productShowcase.homeLift.desc": "Desain elegan dengan finishing premium untuk rumah mewah",
    "productShowcase.passenger": "Elevator Penumpang Komersial",
    "productShowcase.passenger.desc": "Elevator berkapasitas tinggi untuk gedung perkantoran dan ruang komersial",
    "productShowcase.cargo": "Cargo Lift Industri",
    "productShowcase.cargo.desc": "Elevator kargo tugas berat untuk aplikasi industri",
    "productShowcase.panoramic": "Elevator Kaca Panoramik",
    "productShowcase.panoramic.desc": "Elevator kaca menakjubkan dengan pemandangan panoramik",
    "productShowcase.hospital": "Elevator Medis Rumah Sakit",
    "productShowcase.hospital.desc": "Elevator khusus untuk fasilitas kesehatan",

    // Client Showcase
    "clientShowcase.title": "Klien Berharga Kami",
    "clientShowcase.subtitle":
      "Temukan apa yang dikatakan klien kami tentang pengalaman mereka bekerja dengan Elevate Engineering.",

    // Clients Section
    "clients.title": "Dipercaya oleh Pemimpin Industri",
    "clients.subtitle":
      "Kami telah bermitra dengan arsitek, pengembang, dan manajer properti terkenal untuk memberikan solusi elevator yang luar biasa.",
    "clients.viewProjects": "Lihat Proyek Kami",

    // CTA Section
    "cta.title": "Siap Meningkatkan Pengalaman Bangunan Anda?",
    "cta.subtitle":
      "Hubungi tim kami hari ini untuk mendiskusikan kebutuhan elevator Anda dan dapatkan penawaran yang disesuaikan untuk proyek Anda.",
    "cta.getQuote": "Minta Penawaran",
    "cta.exploreProducts": "Jelajahi Produk",

    // Footer
    "footer.description":
      "Solusi elevator premium untuk bangunan residensial dan komersial. Kualitas, keamanan, dan inovasi dalam setiap proyek.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.products": "Produk",
    "footer.contactUs": "Hubungi Kami",
    "footer.copyright": "Semua hak dilindungi.",

    // About Page
    "about.title": "Tentang Elevate Engineering",
    "about.subtitle":
      "Temukan cerita kami, nilai-nilai kami, dan komitmen kami terhadap keunggulan dalam rekayasa dan instalasi elevator.",
    "about.vision.title": "Visi Kami",
    "about.mission.title": "Misi Kami",
    "about.history.title": "Sejarah Kami",
    "about.team.title": "Tim Kepemimpinan Kami",

    // Products Page
    "products.title": "Solusi Elevator Premium Kami",
    "products.subtitle":
      "Temukan rangkaian sistem elevator berkualitas tinggi kami yang dirancang untuk keamanan, keandalan, dan keunggulan estetika.",
    "products.solutionsTitle": "Solusi Elevator untuk Setiap Kebutuhan",
    "products.solutionsSubtitle":
      "Dari rumah tinggal hingga kompleks komersial, kami menawarkan rangkaian lengkap sistem elevator yang disesuaikan dengan kebutuhan spesifik Anda.",

    // Projects Page
    "projects.title": "Proyek & Klien Kami",
    "projects.subtitle":
      "Jelajahi portofolio instalasi elevator sukses kami dan klien bergengsi yang mempercayai keahlian kami.",
    "projects.featured": "Proyek Unggulan Kami",
    "projects.featuredSubtitle":
      "Telusuri portofolio instalasi elevator sukses kami di berbagai industri dan jenis bangunan.",
    "projects.all": "Semua",
    "projects.commercial": "Komersial",
    "projects.residential": "Residensial",
    "projects.healthcare": "Kesehatan",
    "projects.hospitality": "Perhotelan",
    "projects.viewGallery": "Lihat Galeri Proyek",
    "projects.completedIn": "Selesai pada",

    // Contact Page
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Hubungi tim kami untuk mendiskusikan kebutuhan elevator Anda atau meminta penawaran untuk proyek Anda.",
    "contact.getInTouch": "Hubungi Kami",
    "contact.formSubtitle": "Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.",
    "contact.info": "Informasi Kontak",
    "contact.infoSubtitle": "Hubungi kami melalui salah satu saluran berikut.",
    "contact.location": "Lokasi Kami",
    "contact.locationSubtitle":
      "Kunjungi kantor pusat kami untuk melihat showroom dan mendiskusikan proyek Anda secara langsung.",

    // Form Fields
    "form.fullName": "Nama Lengkap",
    "form.email": "Alamat Email",
    "form.phone": "Nomor Telepon",
    "form.subject": "Subjek",
    "form.message": "Pesan",
    "form.send": "Kirim Pesan",
    "form.sending": "Mengirim...",
    "form.success": "Terima kasih atas pesan Anda! Tim kami akan menghubungi Anda segera.",

    // Common
    "common.readMore": "Baca Selengkapnya",
    "common.learnMore": "Pelajari Lebih Lanjut",
    "common.viewAll": "Lihat Semua",
    "common.getStarted": "Mulai",
    "common.requestInfo": "Minta Informasi",
    "common.callNow": "Telepon Sekarang",
    "common.emailUs": "Email Kami",
    "common.location": "Lokasi",
    "common.year": "Tahun",
    "common.type": "Tipe",
    "common.capacity": "Kapasitas",
    "common.features": "Fitur",
    "common.specifications": "Spesifikasi",
    "common.applications": "Aplikasi",
    "common.keyFeatures": "Fitur Utama",
    "common.technicalSpecs": "Spesifikasi Teknis",
    "common.gallery": "Galeri",
    "common.testimonial": "Testimoni",
    "common.projectDetails": "Detail Proyek",
    "common.close": "Tutup",

    // Vision & Mission
    "vision.title": "Visi Kami",
    "vision.description1":
      "Menjadi pemimpin global dalam solusi elevator inovatif, menetapkan standar baru untuk keselamatan, efisiensi, dan keunggulan desain. Kami membayangkan dunia di mana transportasi vertikal meningkatkan keindahan arsitektur bangunan sambil memberikan mobilitas tanpa batas untuk semua.",
    "vision.description2":
      "Kami berusaha untuk memelopori teknologi elevator berkelanjutan yang meminimalkan dampak lingkungan sambil memaksimalkan kinerja dan keandalan, berkontribusi pada bangunan masa depan yang lebih cerdas dan terhubung.",
    "mission.title": "Misi Kami",
    "mission.description1":
      "Untuk memberikan solusi elevator yang luar biasa yang melebihi harapan klien melalui keunggulan rekayasa, desain inovatif, dan kualitas tanpa kompromi. Kami berkomitmen untuk menciptakan sistem elevator yang aman, andal, dan estetis yang meningkatkan nilai dan fungsionalitas setiap bangunan.",
    "mission.description2":
      "Kami mencapai ini dengan membina budaya peningkatan berkelanjutan, berinvestasi dalam pengembangan tim kami, merangkul teknologi mutakhir, dan memelihara hubungan yang kuat dengan klien dan mitra kami di seluruh siklus hidup proyek.",

    // Company History
    "history.title": "Sejarah Kami",
    "history.subtitle":
      "Dari awal yang sederhana hingga kepemimpinan industri, perjalanan kami telah ditentukan oleh inovasi, kualitas, dan komitmen terhadap keunggulan.",
    "history.legacy": "Warisan Keunggulan",
    "history.description1":
      "Selama lebih dari 25 tahun, Elevate Engineering telah menjadi yang terdepan dalam inovasi elevator, mengubah cara orang bergerak di dalam bangunan di seluruh dunia. Apa yang dimulai sebagai tim kecil insinyur yang bersemangat telah berkembang menjadi pemimpin global dalam desain, manufaktur, dan pemasangan elevator.",
    "history.description2":
      "Perjalanan kami ditandai dengan pengejaran keunggulan tanpa henti, komitmen terhadap keselamatan, dan dorongan untuk mendorong batas-batas dari apa yang mungkin dalam transportasi vertikal. Hari ini, kami terus membangun warisan ini, menggabungkan prinsip-prinsip rekayasa yang telah teruji waktu dengan teknologi mutakhir untuk menciptakan solusi elevator yang tahan terhadap ujian waktu.",
    "history.milestones": "Tonggak Sejarah Utama",

    // Team Section
    "team.title": "Tim Kepemimpinan Kami",
    "team.subtitle":
      "Temui para profesional berpengalaman yang mendorong visi kami dan memastikan standar kualitas dan inovasi tertinggi.",

    // Contact Form
    "contact.form.title": "Hubungi Kami",
    "contact.form.subtitle": "Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.",
    "contact.info.title": "Informasi Kontak",
    "contact.info.subtitle": "Hubungi kami melalui salah satu saluran berikut.",
    "contact.info.address": "Alamat",
    "contact.info.phone": "Telepon",
    "contact.info.email": "Email",
    "contact.info.hours": "Jam Kerja",
    "contact.info.connect": "Terhubung Dengan Kami",
    "contact.map.title": "Lokasi Kami",
    "contact.map.subtitle":
      "Kunjungi kantor pusat kami untuk melihat showroom dan mendiskusikan proyek Anda secara langsung.",

    // Products List
    "products.list.title": "Solusi Elevator untuk Setiap Kebutuhan",
    "products.list.subtitle":
      "Dari rumah tinggal hingga kompleks komersial, kami menawarkan rangkaian lengkap sistem elevator yang disesuaikan dengan kebutuhan spesifik Anda.",

    // Projects List
    "projects.list.title": "Proyek Unggulan Kami",
    "projects.list.subtitle":
      "Telusuri portofolio instalasi elevator sukses kami di berbagai industri dan jenis bangunan.",

    // Client Logos
    "clients.logos.title": "Klien Terpercaya Kami",
    "clients.logos.subtitle": "Kami bangga bekerja dengan perusahaan dan organisasi terkemuka di berbagai industri.",

    // Breadcrumb
    "breadcrumb.home": "Beranda",
    "breadcrumb.about": "Tentang Kami",
    "breadcrumb.products": "Produk",
    "breadcrumb.projects": "Proyek",
    "breadcrumb.contact": "Kontak",

    // Product Details
    "product.keyFeatures": "Fitur Utama",
    "product.technicalSpecs": "Spesifikasi Teknis",
    "product.applications": "Aplikasi",
    "product.getQuote": "Dapatkan Penawaran Gratis",
    "product.callNow": "Telepon Sekarang",
    "product.readyToStart": "Siap Memulai?",
    "product.contactExperts": "Hubungi pakar kami hari ini untuk solusi khusus yang memenuhi kebutuhan spesifik Anda.",

    // Project Details
    "project.location": "Lokasi",
    "project.completed": "Selesai",
    "project.client": "Klien",
    "project.elevators": "Elevator",
    "project.floors": "Lantai",
    "project.projectValue": "Nilai Proyek",
    "project.caseStudy": "Studi Kasus Proyek",
    "project.overview": "Ikhtisar Proyek",
    "project.viewGallery": "Lihat Galeri Proyek",
    "project.startProject": "Mulai Proyek Anda",
    "project.freeConsultation": "Dapatkan Konsultasi Gratis",
    "project.viewAllProjects": "Lihat Semua Proyek",
    "project.readyToStart": "Siap Memulai Proyek Anda?",
    "project.helpDesign":
      "Biarkan tim kami yang berpengalaman membantu Anda merancang dan menerapkan solusi sempurna untuk kebutuhan Anda.",

    // Form validation and states
    "form.required": "Kolom ini wajib diisi",
    "form.invalidEmail": "Silakan masukkan alamat email yang valid",
    "form.selectSubject": "Pilih subjek",
    "form.requestQuote": "Minta Penawaran",
    "form.productInfo": "Informasi Produk",
    "form.techSupport": "Dukungan Teknis",
    "form.partnership": "Peluang Kemitraan",
    "form.other": "Lainnya",
    "form.messagePlaceholder": "Harap berikan detail tentang proyek atau pertanyaan Anda...",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
