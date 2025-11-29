import React, { useState, useEffect } from "react";
import logo from "../src/assets/logo.png";
import programmation from "../src/assets/programmation.jpg";
import langue from "../src/assets/langue.jpg";
import bur from "../src/assets/bureautique.jpg";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdWarning, MdEmojiEvents, MdExpandMore, MdExpandLess, MdClose } from "react-icons/md";
import { FaMoneyBillWave, FaCertificate, FaTools, FaChalkboardTeacher, FaBookOpen, FaClipboard } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt,  FaClock } from "react-icons/fa";
import { FaFacebook, FaWhatsapp, FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';

const formations = [
  {
    id: 1,
    nom: "LANGUES",
    duree: "2-6 mois",
    image: langue,
    description: "Formation en langues étrangères avec méthodes modernes",
    sousCategories: [
      "Français",
      "Anglais", 
      "Chinois Mandarin",
      "Allemand"
    ],
    couleur: "blue",
    details: "Nos formations linguistiques vous préparent à maîtriser les langues étrangères avec des méthodes pédagogiques modernes et des formateurs natifs."
  },
  {
    id: 2,
    nom: "INFORMATIQUE",
    duree: "1-12 mois",
    image: programmation,
    description: "Formations techniques complètes en informatique",
    sousCategories: [
      "Bureautique",
      "Bureautique Avancée",
      "Maintenance et Dépannage",
      "Multimédia",
      "Réseau Informatique", 
      "Programmation",
      "Création Site Web"
    ],
    couleur: "green",
    details: "Devenez expert en informatique avec nos formations complètes couvrant tous les domaines du numérique, de la bureautique à la programmation avancée."
  },
  {
    id: 3,
    nom: "COMPTABILITÉ",
    duree: "10 mois",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Formation complète en gestion comptable",
    sousCategories: [
      "Comptabilité Générale",
      "Comptabilité Informatisée"
    ],
    couleur: "purple",
    details: "Maîtrisez les techniques comptables modernes et les logiciels de gestion avec nos formations professionnelles certifiantes."
  },
  {
    id: 4,
    nom: "ART CULINAIRE",
    duree: "10 mois", 
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Arts culinaires et techniques de restauration professionnelle",
    sousCategories: [
      "Cuisine",
      "Pâtisserie",
      "Charcuterie", 
      "Glace"
    ],
    couleur: "orange",
    details: "Devenez chef cuisinier ou pâtissier avec nos formations pratiques en arts culinaires dirigées par des professionnels expérimentés."
  },
  {
    id: 5,
    nom: "MUSIQUE",
    duree: "6-12 mois",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Formation musicale et instrumentale complète",
    sousCategories: [
      "Clavier",
      "Guitare",
      "Violon",
      "Batterie"
    ],
    couleur: "red",
    details: "Développez votre talent musical avec nos formations instrumentales complètes et nos cours de théorie musicale."
  },
  {
    id: 6,
    nom: "CALL CENTER",
    duree: "3 mois",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Formation aux techniques de communication et service client",
    sousCategories: [
      "Techniques d'appel",
      "Service Client",
      "Communication Professionnelle",
      "Gestion des Réclamations"
    ],
    couleur: "indigo",
    details: "Formez-vous aux métiers du call center avec nos programmes intensifs en communication et service client."
  },
  {
    id: 7,
    nom: "COUPE & COUTURE",
    duree: "6 mois",
    image: "https://images.unsplash.com/photo-1562160536-863c7a8d7c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Formation complète en techniques de couture et confection",
    sousCategories: [
      "Coupe",
      "Couture Main",
      "Couture Machine",
      "Modélisme",
      "Retouches"
    ],
    couleur: "pink",
    details: "Apprenez les techniques de couture professionnelle et devenez expert en modélisme et confection de vêtements."
  }
];

// Structure hiérarchique des centres
const centresCFPM = [
  {
    id: "tana",
    nom: "CFPM ANTANANARIVO",
    type: "ville",
    isExpanded: false,
    sousCentres: [
      {
        id: "tana-siege",
        nom: "CFPM IMERINAFOVOANY (Siège)",
        adresse: "Ampitany pharmacie Tiana, akaiky ny lavage",
        telephone: ["038 77 777 05"],
        email: "cfpmmada@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-talatamaty",
        nom: "CFPM TALATAMATY",
        adresse: "Talatamaty, Antananarivo",
        telephone: ["038 77 777 06"],
        email: "Cfpm Talatamaty",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-ambohimanarina",
        nom: "CFPM AMBOHIMANARINA",
        adresse: "Ambohimanarina, Antananarivo",
        telephone: ["038 77 777 08"],
        Email: "Cfpm Ambohimanarina",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-sabotsy",
        nom: "CFPM SABOTSY NAMEHANA",
        adresse: "Akaiky ny pharmacie 24h",
        telephone: ["038 77 777 11"],
        email: "Cfpm Sabotsy Namehana",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-analamahintsy",
        nom: "CFPM ANALAMAHINTSY",
        adresse: "Ampitan'ny Galana dispensaire",
        telephone: ["038 77 777 10"],
        email: "Cfpm Analamahintsy",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-ampasapito",
        nom: "CFPM AMPASAPITO",
        adresse: "Alohan'ny Pharmacie Météo Assurance Mamà taloha",
        telephone: ["038 77 777 12"],
        email: "Cfpm Ampasapito",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-ambanidia",
        nom: "CFPM AMBANIDIA",
        adresse: "Ampitan' ny commune ambonin'ny BOA 3eme étage",
        telephone: ["038 77 777 09"],
        email: "Cfpm Ambanidia",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-mahamasina",
        nom: "CFPM MAHAMASINA",
        adresse: "Mahamasina, Antananarivo",
        telephone: ["038 77 777 20"],
        email: "Cfpm Mahamasina",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-itaosy",
        nom: "CFPM ITAOSY",
        adresse: "Itaosy, Antananarivo",
        telephone: ["038 77 777 15"],
        email: "Cfpm Itaosy",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-67HA",
        nom: "CFPM 67HA",
        adresse: "67HA, Antananarivo",
        telephone: ["038 77 777 13"],
        email: "Cfpm 67ha",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },
      {
        id: "tana-tanjombato",
        nom: "Cfpm Tanjombato",
        adresse: "Eo ampitan'ny tetezana akaiky ny trano bongo",
        telephone: ["038 77 777 14"],
        email: "Cfpm Itaosy",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
      },

    ]
  },
  {
    id: 2,
    nom: "CFPM TOAMASINA",
    type: "centre",
    adresse: "Route de Tamatave, Tanamakoa",
    telephone: ["038 77 777 23"],
    email: "Cfpm Tamatave",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 3,
    nom: "CFPM MAHAJANGA",
    type: "centre",
    adresse: "Boulevard Poincaré, Route de l'Aéroport",
    telephone: ["038 77 777 24"],
    email: "Cfpm Majunga",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 4,
    nom: "CFPM FIANARANTSOA",
    type: "centre",
    adresse: "Route d'Isoraka, Ambodirano",
    telephone: ["037 17 777 25"],
    email: "Cfpm Fianarantsoa",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 5,
    nom: "CFPM TOLIARA",
    type: "centre",
    adresse: "Route Nationale 7, Ankilibe",
    telephone: ["037 17 777 26"],
    email: "cfpm Toliara",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 6,
    nom: "CFPM ANTSIRABE",
    type: "centre",
    adresse: "Route Nationale 7, Ambatolampy",
    telephone: ["038 77 777 22"],
    email: "Cfpm Antsirabe",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },

  {
    id: 7,
    nom: "CFPM AMBOSITRA",
    type: "centre",
    adresse: "Route d'Fianarantsoa, Ambalavao",
    telephone: ["038 17 777 28"],
    email: "cfpma Ambositra",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 8,
    nom: "CFPM AMBATONDRAZAKA",
    type: "centre",
    adresse: "Avenue de l'Indépendance",
    telephone: ["038 17 777 30"],
    email: "Cfpm Ambatondrazaka",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 9,
    nom: "CFPM SAMBAVA",
    type: "centre",
    adresse: "Boulevard des Cocotiers",
    telephone: ["038 17 777 28"],
    email: "cfpmsambava@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 10,
    nom: "CFPM DIEGO",
    type: "centre",
    adresse: "Akaikin'ny Lycée Français Sadi-Carnot na école St Thérèse ",
    telephone: ["038 17 777 28"],
    email: "cfpmsambava@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
  {
    id: 11,
    nom: "CFPM TAMATAVE",
    type: "centre",
    adresse: "Tanambao 2 ampitan'ny caisse d'épargne",
    telephone: ["038 17 777 28"],
    email: "cfpmsambava@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h"
  },
];

const avantages = [
  {
    icon:<FaMoneyBillWave className="text-5xl text-yellow-500 mx-auto" />,
    title: "FORMATION ABORDABLE",
    description: "Formation entièrement gratuite pour tous les éligibles"
  },
  {
    icon: <FaCertificate className="text-5xl text-yellow-500 mx-auto" />,
    title: "CERTIFICAT AGREER PAR L'ETAT",
    description: "Certificat de Qualification Professionnelle reconnu par l'État"
  },
  {
    icon: <FaTools className="text-5xl text-yellow-500 mx-auto" />,
    title: "PRATIQUE INTENSIVE",
    description: "Formation 70% pratique - 30% théorique"
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-yellow-500 mx-auto" />,
    title: "FORMATEURS EXPERTS",
    description: "Encadrement par des professionnels du métier"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCentre, setActiveCentre] = useState(centresCFPM[0].sousCentres[0]);
  const [centres, setCentres] = useState(centresCFPM);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [formationModalOpen, setFormationModalOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleVilleExpansion = (villeId) => {
    setCentres(prevCentres => 
      prevCentres.map(centre => 
        centre.id === villeId 
          ? { ...centre, isExpanded: !centre.isExpanded }
          : centre
      )
    );
  };

  const openFormationModal = (formationId) => {
    setFormationModalOpen(formationId);
  };

  const closeFormationModal = () => {
    setFormationModalOpen(null);
  };

  const handleCentreClick = (centre) => {
    if (centre.type === "ville") {
      toggleVilleExpansion(centre.id);
      if (!centre.isExpanded && centre.sousCentres && centre.sousCentres.length > 0) {
        setActiveCentre(centre.sousCentres[0]);
      }
    } else {
      setActiveCentre(centre);
    }
    
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  const handleSousCentreClick = (sousCentre, e) => {
    e.stopPropagation();
    setActiveCentre(sousCentre);
    
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const getBadgeColor = (couleur) => {
    switch(couleur) {
      case 'blue': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'green': return 'bg-green-100 text-green-800 border border-green-200';
      case 'purple': return 'bg-purple-100 text-purple-800 border border-purple-200';
      case 'orange': return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'red': return 'bg-red-100 text-red-800 border border-red-200';
      case 'indigo': return 'bg-indigo-100 text-indigo-800 border border-indigo-200';
      case 'pink': return 'bg-pink-100 text-pink-800 border border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getBorderColor = (couleur) => {
    switch(couleur) {
      case 'blue': return 'border-blue-300';
      case 'green': return 'border-green-300';
      case 'purple': return 'border-purple-300';
      case 'orange': return 'border-orange-300';
      case 'red': return 'border-red-300';
      case 'indigo': return 'border-indigo-300';
      case 'pink': return 'border-pink-300';
      default: return 'border-gray-300';
    }
  };

  const getBgColor = (couleur) => {
    switch(couleur) {
      case 'blue': return 'bg-blue-50';
      case 'green': return 'bg-green-50';
      case 'purple': return 'bg-purple-50';
      case 'orange': return 'bg-orange-50';
      case 'red': return 'bg-red-50';
      case 'indigo': return 'bg-indigo-50';
      case 'pink': return 'bg-pink-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className="font-sans scroll-smooth bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Navigation FIXE */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-lg z-50 border-b border-blue-200 overflow-hidden max-w-[100vw] transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-white p-3 rounded-lg mr-4 transform hover:scale-110 transition duration-300">
                <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
              </div>
              <div className="transform hover:scale-105 transition duration-300">
                <div className="text-2xl font-bold text-blue-800">CFPM MADAGASCAR</div>
                <div className="text-xs text-gray-600">Centre de Formation Professionnelle Moderne</div>
              </div>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden lg:flex space-x-8">
              <a 
                href="#accueil" 
                className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
                onClick={closeMobileMenu}
              >
                ACCUEIL
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#formations" 
                className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
                onClick={closeMobileMenu}
              >
                FORMATIONS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#centres" 
                className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
                onClick={closeMobileMenu}
              >
                NOS CENTRES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#admission" 
                className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
                onClick={closeMobileMenu}
              >
                ADMISSION
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:scale-110 relative group"
                onClick={closeMobileMenu}
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 focus:outline-none p-2 transition duration-300 transform hover:scale-110"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-100 bg-white animate-slideDown">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#accueil" 
                  className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 py-2"
                  onClick={closeMobileMenu}
                >
                  ACCUEIL
                </a>
                <a 
                  href="#formations" 
                  className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 py-2"
                  onClick={closeMobileMenu}
                >
                  FORMATIONS
                </a>
                <a 
                  href="#centres" 
                  className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 py-2"
                  onClick={closeMobileMenu}
                >
                  NOS CENTRES
                </a>
                <a 
                  href="#admission" 
                  className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 py-2"
                  onClick={closeMobileMenu}
                >
                  ADMISSION
                </a>
                <a 
                  href="#contact" 
                  className="text-blue-900 font-bold hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 py-2"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden w-full max-w-[100vw]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className={`text-white text-2xl lg:text-3xl font-light italic mb-6 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            "Tout est possible à celui qui croit"
          </div>
          
          <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            CENTRE DE FORMATION <br />
            <span className="text-yellow-300 animate-pulse-slow">PROFESSIONNELLE MODERNE DE MADAGASCAR</span>
          </h1>
          
          <p className={`text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <strong>CFPM MADAGASCAR</strong> - Former la jeunesse malgache aux métiers porteurs depuis 2003
          </p>

          <div className={`bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8 transition-all duration-1000 ease-out delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="transform hover:scale-110 transition duration-500">
                <div className="text-3xl font-bold text-blue-300 animate-bounce-slow">10+</div>
                <div className="text-lg text-blue-300">CENTRES RÉGIONAUX</div>
              </div>
              <div className="transform hover:scale-110 transition duration-500 delay-100">
                <div className="text-3xl font-bold text-blue-300 animate-bounce-slow">7</div>
                <div className="text-lg text-blue-300">FILIÈRES DE FORMATION</div>
              </div>
              <div className="transform hover:scale-110 transition duration-500 delay-200">
                <div className="text-3xl font-bold text-blue-300 animate-bounce-slow">22</div>
                <div className="text-lg text-blue-300">ANS D'EXPÉRIENCE</div>
              </div>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="#formations" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl animate-float"
              onClick={closeMobileMenu}
            >
              📚 DÉCOUVRIR NOS FORMATIONS
            </a>
            <a 
              href="#admission" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-float-delayed"
              onClick={closeMobileMenu}
            >
              📝 POSTULER MAINTENANT
            </a>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-800 mb-12 animate-fade-in">
            POURQUOI CHOISIR LE CFPM ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-500">
                  {avantage.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3 transform group-hover:scale-105 transition duration-300">
                  {avantage.title}
                </h3>
                <p className="text-gray-700 transform group-hover:scale-105 transition duration-300">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formations */}
      <section id="formations" className="py-16 bg-gray-50 overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
              NOS FILIÈRES DE FORMATION
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-delayed">
              Formations qualifiantes de 1 à 6 mois accessibles à tous avec plus de 25 spécialités
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 animate-grow-width"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div 
                key={formation.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 group flex flex-col transform hover:-translate-y-2 animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={formation.image} 
                    alt={formation.nom}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold transform group-hover:scale-110 transition duration-300">
                    {formation.duree}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 transform group-hover:scale-105 transition duration-300">
                    {formation.nom}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {formation.description}
                  </p>
                  
                  {/* Sous-catégories */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formation.sousCategories.slice(0, 3).map((sousCat, index) => (
                        <span 
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(formation.couleur)} transform hover:scale-105 transition duration-300`}
                        >
                          {sousCat}
                        </span>
                      ))}
                      {formation.sousCategories.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 transform hover:scale-105 transition duration-300">
                          +{formation.sousCategories.length - 3} autres
                        </span>
                      )}
                    </div>
                    
                    {/* Bouton pour voir tous les détails */}
                    <button
                      onClick={() => openFormationModal(formation.id)}
                      className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 py-2 transform hover:scale-105 hover:translate-y-0.5"
                    >
                      <span className="transform group-hover:translate-x-1 transition duration-300">📋</span>
                      <span>Voir toutes les spécialités</span>
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-green-600 font-bold text-lg transform hover:scale-105 transition duration-300">✅ FORMATION GARANTIE</div>
                    <div className="text-sm text-gray-500 mt-1">Certificat d'État reconnu</div>
                  </div>
                  
                  {/* Bouton d'inscription avec hauteur fixe */}
                  <a 
                    href="#admission"
                    className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 text-center group-hover:shadow-lg mt-auto transform hover:scale-105 hover:translate-y-0.5 animate-pulse-slow"
                    onClick={closeMobileMenu}
                  >
                    📋 INSCRIVEZ-VOUS MAINTENANT
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bannière informations supplémentaires */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 animate-bounce-slow">🎯 PLUS DE 25 SPÉCIALITÉS DISPONIBLES</h3>
            <p className="text-lg mb-4">
              Choisissez la formation qui correspond à vos ambitions professionnelles
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["Langues Internationales", "Informatique Complète", "Arts Culinaires", "Musique & Instruments", "Call Center", "Coupe & Couture"].map((item, index) => (
                <span 
                  key={index}
                  className="bg-white bg-opacity-20 px-3 py-1 rounded-full transform hover:scale-110 transition duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modales pour les détails des formations */}
      {formationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 w-full h-full max-w-[100vw] left-0 right-0 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {formations.filter(f => f.id === formationModalOpen).map((formation) => (
              <div key={formation.id}>
                {/* En-tête de la modale */}
                <div className="relative">
                  <img 
                    src={formation.image} 
                    alt={formation.nom}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={closeFormationModal}
                    className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  >
                    <MdClose size={24} className="text-gray-700" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold transform hover:scale-105 transition duration-300">
                    {formation.duree}
                  </div>
                </div>

                {/* Contenu de la modale */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 animate-fade-in-up">{formation.nom}</h3>
                  
                  <div className="mb-6 animate-fade-in-up-delayed">
                    <h4 className="font-bold text-gray-700 mb-2 text-lg">📖 Description</h4>
                    <p className="text-gray-600 leading-relaxed">{formation.details}</p>
                  </div>

                  <div className="mb-6 animate-fade-in-up-delayed-2">
                    <h4 className="font-bold text-gray-700 mb-3 text-lg">🎯 Spécialités disponibles</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {formation.sousCategories.map((sousCat, index) => (
                        <div 
                          key={index}
                          className={`flex items-center p-3 rounded-lg border ${getBorderColor(formation.couleur)} ${getBgColor(formation.couleur)} transform hover:scale-105 transition duration-300 animate-slide-in-right`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            formation.couleur === 'blue' ? 'bg-blue-500' :
                            formation.couleur === 'green' ? 'bg-green-500' :
                            formation.couleur === 'purple' ? 'bg-purple-500' :
                            formation.couleur === 'orange' ? 'bg-orange-500' :
                            formation.couleur === 'red' ? 'bg-red-500' :
                            formation.couleur === 'indigo' ? 'bg-indigo-500' :
                            formation.couleur === 'pink' ? 'bg-pink-500' : 'bg-gray-500'
                          }`}></div>
                          <span className="text-gray-800 font-medium">{sousCat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 animate-fade-in-up-delayed-3">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3 transform hover:scale-110 transition duration-300">
                        <FaCertificate className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 text-lg">✅ Certification Garantie</h4>
                        <p className="text-green-700 text-sm">Certificat de Qualification Professionnelle reconnu par l'État</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up-delayed-4">
                    <a 
                      href="#admission"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
                      onClick={closeFormationModal}
                    >
                      📝 S'inscrire maintenant
                    </a>
                    <button
                      onClick={closeFormationModal}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                    >
                      ← Retour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section Centres */}
      <section id="centres" className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
              NOS CENTRES RÉGIONAUX
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-delayed">
              Plus de 10 centres CFPM répartis dans toutes les régions de Madagascar
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 animate-grow-width"></div>
          </div>

          {/* Version Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {/* Liste des centres */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto animate-fade-in-left">
              {centres.map((centre, index) => (
                <div key={centre.id} className="animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Centre principal ou Ville */}
                  <div
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-500 border-2 transform hover:scale-105 ${
                      activeCentre.id === centre.id || 
                      (centre.sousCentres && centre.sousCentres.some(sc => sc.id === activeCentre.id))
                        ? 'border-blue-600 bg-blue-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:shadow-md'
                    }`}
                    onClick={() => handleCentreClick(centre)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-lg font-bold mb-1 ${
                          activeCentre.id === centre.id || 
                          (centre.sousCentres && centre.sousCentres.some(sc => sc.id === activeCentre.id))
                            ? 'text-blue-800' : 'text-gray-800'
                        }`}>
                          {centre.nom}
                          {centre.type === "ville" && (
                            <span className="text-sm text-gray-500 ml-2">
                              ({centre.sousCentres.length} centres)
                            </span>
                          )}
                        </h3>
                        {centre.type !== "ville" && (
                          <>
                            <p className="text-sm text-gray-600 mb-1 truncate">{centre.adresse}</p>
                            <div className="text-xs text-gray-500">
                              {centre.horaires}
                            </div>
                          </>
                        )}
                      </div>
                      {centre.type === "ville" && (
                        <div className="text-blue-600 transform hover:scale-125 transition duration-300">
                          {centre.isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sous-centres pour Antananarivo */}
                  {centre.type === "ville" && centre.isExpanded && (
                    <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-200 pl-4 animate-expand">
                      {centre.sousCentres.map((sousCentre, subIndex) => (
                        <div
                          key={sousCentre.id}
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-500 border transform hover:scale-105 ${
                            activeCentre.id === sousCentre.id
                              ? 'border-blue-500 bg-blue-100 shadow-md' 
                              : 'border-gray-100 bg-gray-50 hover:shadow-sm'
                          } animate-slide-in-right`}
                          style={{ animationDelay: `${subIndex * 50}ms` }}
                          onClick={(e) => handleSousCentreClick(sousCentre, e)}
                        >
                          <h4 className={`font-semibold text-sm ${
                            activeCentre.id === sousCentre.id ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                            {sousCentre.nom}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1 truncate">{sousCentre.adresse}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Détails du centre sélectionné */}
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 animate-bounce-slow">{activeCentre.nom}</h3>
              
              <div className="space-y-6">
                <div className="animate-fade-in-up">
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center transform hover:scale-105 transition duration-300">
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    ADRESSE
                  </h4>
                  <p className="text-gray-800">{activeCentre.adresse}</p>
                </div>

                <div className="animate-fade-in-up-delayed">
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center transform hover:scale-105 transition duration-300">
                    <FaPhoneAlt className="text-blue-600 mr-2" />
                    TÉLÉPHONE
                  </h4>
                  {activeCentre.telephone.map((tel, index) => (
                    <p key={index} className="text-gray-800 transform hover:scale-105 transition duration-300">{tel}</p>
                  ))}
                </div>

                <div className="animate-fade-in-up-delayed-2">
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center transform hover:scale-105 transition duration-300">
                    <FaFacebook className="text-blue-600 mr-2" />
                    facebook
                  </h4>
                  <p className="text-gray-800">{activeCentre.email}</p>
                </div>

                <div className="animate-fade-in-up-delayed-3">
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center transform hover:scale-105 transition duration-300">
                    <FaClock className="text-blue-600 mr-2" />
                    HORAIRES
                  </h4>
                  <p className="text-gray-800">{activeCentre.horaires}</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4 animate-pulse-slow">
                  <p className="text-yellow-800 text-sm text-center font-medium">
                    🚀 <strong>INSCRIPTIONS EN COURS</strong> - Places limitées
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Version Mobile Optimisée */}
          <div className="lg:hidden">
            <div className="space-y-2 mb-8 max-h-[60vh] overflow-y-auto">
              {centres.map((centre) => (
                <div key={centre.id}>
                  <div
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 transform hover:scale-105 ${
                      activeCentre.id === centre.id || 
                      (centre.sousCentres && centre.sousCentres.some(sc => sc.id === activeCentre.id))
                        ? 'border-blue-600 bg-blue-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:shadow-md'
                    }`}
                    onClick={() => handleCentreClick(centre)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 ${
                          activeCentre.id === centre.id || 
                          (centre.sousCentres && centre.sousCentres.some(sc => sc.id === activeCentre.id))
                            ? 'text-blue-800' : 'text-gray-800'
                        }`}>
                          {centre.nom}
                          {centre.type === "ville" && (
                            <span className="text-sm text-gray-500 ml-2">
                              ({centre.sousCentres.length} centres)
                            </span>
                          )}
                        </h3>
                        {centre.type !== "ville" && (
                          <>
                            <p className="text-sm text-gray-600 mb-1 truncate">{centre.adresse}</p>
                            <div className="text-xs text-gray-500">
                              {centre.horaires}
                            </div>
                          </>
                        )}
                      </div>
                      {centre.type === "ville" && (
                        <div className="text-blue-600 flex-shrink-0 ml-2 transform hover:scale-125 transition duration-300">
                          {centre.isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                        </div>
                      )}
                    </div>
                  </div>

                  {centre.type === "ville" && centre.isExpanded && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4 animate-expand">
                      {centre.sousCentres.map((sousCentre) => (
                        <div
                          key={sousCentre.id}
                          className={`p-3 rounded-lg cursor-pointer transition-all duration-300 border transform hover:scale-105 ${
                            activeCentre.id === sousCentre.id
                              ? 'border-blue-500 bg-blue-100 shadow-md' 
                              : 'border-gray-100 bg-gray-50 hover:shadow-sm'
                          }`}
                          onClick={(e) => handleSousCentreClick(sousCentre, e)}
                        >
                          <h4 className={`font-semibold text-sm ${
                            activeCentre.id === sousCentre.id ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                            {sousCentre.nom}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1 truncate">{sousCentre.adresse}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Mobile pour les détails du centre */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col lg:hidden w-full h-full max-w-[100vw] left-0 right-0 animate-fade-in">
          <div className="bg-blue-600 text-white p-4 flex-shrink-0 animate-slide-down">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Détails du Centre</h3>
                <p className="text-blue-100 text-sm mt-1">{activeCentre.nom}</p>
              </div>
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto bg-gray-50 animate-slide-up">
            <div className="p-4 space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Adresse</h4>
                    <p className="text-gray-600">{activeCentre.adresse}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                    <FaPhoneAlt className="text-green-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Téléphone</h4>
                    {activeCentre.telephone.map((tel, index) => (
                      <p key={index} className="text-gray-600 text-base mb-1 transform hover:scale-105 transition duration-300">{tel}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                    <FaFacebook className="text-purple-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">facebook</h4>
                    <p className="text-gray-600">{activeCentre.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                    <FaClock className="text-orange-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600">{activeCentre.horaires}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-5 text-center shadow-lg transform hover:scale-105 transition duration-300">
                <p className="text-yellow-900 font-bold text-base">
                  🚀 <strong>INSCRIPTIONS EN COURS</strong> 🚀
                </p>
                <p className="text-yellow-800 text-sm mt-1">Places limitées - Dépêchez-vous !</p>
              </div>

              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg active:scale-95 mt-4 transform hover:scale-105"
              >
                ← Retour aux centres
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section Admission */}
      <section id="admission" className="py-16 bg-gray-50 overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
              CONDITIONS D'ADMISSION 2024
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto animate-grow-width"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-blue-600 text-white animate-fade-in-left">
                  <h3 className="text-2xl font-bold mb-6">📋 CRITÈRES D'ÉLIGIBILITÉ</h3>
                  
                  <div className="space-y-4">
                    {[
                      { title: "ÂGE REQUIS", text: "07 à 60 ans" },
                      { title: "NIVEAU SCOLAIRE", text: "Savoir lire et ecrire minimum" },
                      { title: "SITUATION", text: "Enfants, Collogiens, Lyceens, Universitaires, Jeunes, Adultes" },
                      { title: "TESTS", text: "Tests d'orientation et entretien de motivation" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4 transform hover:scale-110 transition duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="transform hover:scale-105 transition duration-300">
                          <h4 className="font-bold">{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 animate-fade-in-right">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">📄 DOSSIER D'INSCRIPTION</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center animate-fade-in-up">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 transform hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 transform hover:scale-105 transition duration-300">2 photos d'identité récentes</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg animate-pulse-slow">
                    <p className="text-yellow-800 text-center font-bold">
                      🗓️ <strong> INSCRIPTION OUVERTE</strong> TOUT LES JOURS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 animate-fade-in-up">
              <a 
                href="#contact"
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl animate-float"
                onClick={closeMobileMenu}
              >
                <div className="rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                      <FaPhoneAlt className="text-blue-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-1">Contacter CFPM le plus proche !</h4>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact & Alertes */}
      <section id="contact" className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
              INFORMATIONS IMPORTANTES
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto animate-grow-width"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-8 animate-scale-in">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">⚠️ ALERTES IMPORTANTES</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "ATTENTION AUX ARNAQUES", 
                    text: "" 
                  },
                  { 
                    title: "VÉRIFICATION OBLIGATOIRE", 
                    text: "Contactez UNIQUEMENT les numéros officiels des centres CFPM pour confirmer les informations et les dates d'inscription." 
                  },
                  { 
                    title: "INFORMATIONS OFFICIELLES", 
                    text: "Seules les informations communiquées directement par les centres CFPM ou le site du Ministère METFP sont valides." 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0 transform hover:scale-110 transition duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          index === 0 ? "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" :
                          index === 1 ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                          "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        } />
                      </svg>
                    </div>
                    <div className="transform hover:scale-105 transition duration-300">
                      <h4 className="font-bold text-blue-800 mb-1">{item.title}</h4>
                      {item.text && <p className="text-gray-700">{item.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in-up">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Nos Contacts</h3>
  
              {/* Icônes de contact */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: FaFacebook, text: "facebook", href: "https://www.facebook.com/cfpm.d.antananarivo" },
                  { icon: FaWhatsapp, text: "Whatsapp", href: "https://wa.me/261346304930" },
                  { icon: FaGlobe, text: "web", href: "http://www.metfp.gov.mg" }
                ].map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-800 text-white p-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-float"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-none rounded-2xl p-5 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="bg-orange-100 p-3 rounded-full transform hover:scale-110 transition duration-300">
                          <contact.icon className="text-blue-600 text-lg" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg mb-1">{contact.text}</h4>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Objectif */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 transform hover:scale-105 transition duration-300">
                <p className="text-blue-800 font-bold animate-pulse-slow">
                  🎯 <strong>OBJECTIF:</strong> Former + 10,000 jeunes aux métiers techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white pt-12 pb-8 overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-lg mr-3 transform hover:scale-110 transition duration-300">
                  <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
                </div>
                <div className="transform hover:scale-105 transition duration-300">
                  <div className="text-xl font-bold">CFPM MADAGASCAR</div>
                  <div className="text-xs text-blue-200">Centre de Formation Professionnelle Moderne</div>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Établissement Public sous tutelle du Ministère de l'Enseignement Technique 
                et de la Formation Professionnelle. Former les jeunes aux métiers d'avenir depuis 2002.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <h3 className="font-bold text-lg mb-4">LIENS RAPIDES</h3>
              <ul className="space-y-2 text-blue-200">
                 {[
                  { text: "Nos Formations", id: "formations" },
                  { text: "Centres Régionaux", id: "centres" },
                  { text: "Conditions d'Admission", id: "admission" },
                  { text: "Contact", id: "contact" }
                  ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.id}`} 
                      className="hover:text-white transition-all duration-300 transform hover:translate-x-2 block"
                      onClick={closeMobileMenu}
                    >
                      {link.text}
                    </a>
                  </li>
                  ))}
              </ul>
            </div>
            
            <div className="animate-fade-in-up-delayed">
              <h3 className="font-bold text-lg mb-4">LIENS UTILES</h3>
              <ul className="space-y-2 text-blue-200">
                {[
                  { text: "Ministère METFP", href: "http://www.metfp.gov.mg" },
                  { text: "Portail de l'Emploi", href: "#" },
                  { text: "Fonds de Formation", href: "#" },
                  { text: "République de Madagascar", href: "#" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-all duration-300 transform hover:translate-x-2 block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="font-bold text-lg mb-4">MENTIONS LÉGALES</h3>
              <div className="space-y-2 text-blue-200 text-sm">
                <p>Établissement Public Administratif</p>
                <p>N° Stat: 2002-001/METFP</p>
                <p>Siège: Antananarivo, Madagascar</p>
                <p>Email: cfpmmada@metfp.gov.mg</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm animate-fade-in">
            <p>
              © CFPM MADAGASCAR - Ministère de l'Enseignement Technique et de la Formation Professionnelle. 
              Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: 6rem; }
        }
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes expand {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        .animate-fade-in-delayed { animation: fadeIn 1s ease-out 0.3s both; }
        .animate-fade-in-up { animation: slideUp 0.8s ease-out; }
        .animate-fade-in-up-delayed { animation: slideUp 0.8s ease-out 0.2s both; }
        .animate-fade-in-up-delayed-2 { animation: slideUp 0.8s ease-out 0.4s both; }
        .animate-fade-in-up-delayed-3 { animation: slideUp 0.8s ease-out 0.6s both; }
        .animate-fade-in-up-delayed-4 { animation: slideUp 0.8s ease-out 0.8s both; }
        .animate-fade-in-left { animation: slideInLeft 0.8s ease-out; }
        .animate-fade-in-right { animation: slideInRight 0.8s ease-out; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        .animate-slide-down { animation: slideDown 0.8s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 3s ease-in-out 0.5s infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 2s ease-in-out infinite; }
        .animate-grow-width { animation: growWidth 1s ease-out; }
        .animate-card-enter { animation: cardEnter 0.6s ease-out; }
        .animate-expand { animation: expand 0.5s ease-out; }
        .animate-pulse-slow { animation: pulseSlow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default App;