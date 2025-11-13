import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import programmation from "../src/assets/programmation.jpg";
import langue from "../src/assets/langue.jpg";
import bur from "../src/assets/bureautique.jpg";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdWarning, MdEmojiEvents, MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaMoneyBillWave, FaCertificate, FaTools, FaChalkboardTeacher, FaBookOpen, FaClipboard } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const formations = [
  {
    id: 1,
    nom: "PROGRAMMATION",
    duree: "12 mois",
    image: programmation,
    description: "Maintenance des équipements informatiques, réseaux et systèmes",
  },
  {
    id: 2,
    nom: "INFORAMTIQUE BUREAUTIQUE",
    duree: "3 mois",
    image: bur,
    description: "Installation et maintenance des installations électriques domestiques",
  },
  {
    id: 3,
    nom: "LANGUE",
    duree: "6 mois",
    image: langue,
    description: "Français, Anglais, Chinois Mandarin, Allemand",
  },
  {
    id: 4,
    nom: "Maintenance et Dépanage",
    duree: "1 mois",
    image: "https://images.unsplash.com/photo-1548690311-4627e10ba0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Maintenance des équipements informatiques, réseaux et systèmes",
  },
  {
    id: 5,
    nom: "ART CULINAIRES",
    duree: "10 mois",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Arts culinaires et techniques de restauration",
  },
  {
    id: 6,
    nom: "COMPTABILITE",
    duree: "10 mois",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Général et informatisé",
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
        adresse: "Imerinafovoany, Antananarivo 101",
        telephone: ["020 22 415 36", "034 05 415 36"],
        email: "cfpmmada@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-talatamaty",
        nom: "CFPM TALATAMATY",
        adresse: "Talatamaty, Antananarivo",
        telephone: ["020 22 415 37", "034 05 415 37"],
        email: "cfpmtalatamaty@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-ambohimanarina",
        nom: "CFPM AMBOHIMANARINA",
        adresse: "Ambohimanarina, Antananarivo",
        telephone: ["020 22 415 38", "034 05 415 38"],
        email: "cfpmambohimanarina@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-sabotsy",
        nom: "CFPM SABOTSY NAMEHANA",
        adresse: "Sabotsy Namehana, Antananarivo",
        telephone: ["020 22 415 39", "034 05 415 39"],
        email: "cfpmsabotsy@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-analamahintsy",
        nom: "CFPM ANALAMAHINTSY",
        adresse: "Analamahintsy, Antananarivo",
        telephone: ["020 22 415 40", "034 05 415 40"],
        email: "cfpmanalamahintsy@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-ampasapito",
        nom: "CFPM AMPASAPITO",
        adresse: "Ampasapito, Antananarivo",
        telephone: ["020 22 415 41", "034 05 415 41"],
        email: "cfpmampasapito@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-ambanidia",
        nom: "CFPM AMBANIDIA",
        adresse: "Ambanidia, Antananarivo",
        telephone: ["020 22 415 42", "034 05 415 42"],
        email: "cfpmambanidia@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-mahamasina",
        nom: "CFPM MAHAMASINA",
        adresse: "Mahamasina, Antananarivo",
        telephone: ["020 22 415 43", "034 05 415 43"],
        email: "cfpmmahamasina@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      },
      {
        id: "tana-itaosy",
        nom: "CFPM ITAOSY",
        adresse: "Itaosy, Antananarivo",
        telephone: ["020 22 415 44", "034 05 415 44"],
        email: "cfpmitaosy@metfp.gov.mg",
        horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
      }
    ]
  },
  {
    id: 2,
    nom: "CFPM TOAMASINA",
    type: "centre",
    adresse: "Route de Tamatave, Tanamakoa",
    telephone: ["020 53 324 18", "034 01 324 18"],
    email: "cfpmtamatave@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 3,
    nom: "CFPM MAHAJANGA",
    type: "centre",
    adresse: "Boulevard Poincaré, Route de l'Aéroport",
    telephone: ["020 62 233 47", "034 02 233 47"],
    email: "cfpmmajunga@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 4,
    nom: "CFPM FIANARANTSOA",
    type: "centre",
    adresse: "Route d'Isoraka, Ambodirano",
    telephone: ["020 75 512 29", "034 03 512 29"],
    email: "cfpmfianar@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 5,
    nom: "CFPM TOLIARA",
    type: "centre",
    adresse: "Route Nationale 7, Ankilibe",
    telephone: ["020 94 445 63", "034 04 445 63"],
    email: "cfpmtulear@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 6,
    nom: "CFPM ANTSIRABE",
    type: "centre",
    adresse: "Route Nationale 7, Ambatolampy",
    telephone: ["020 44 567 89", "034 07 567 89"],
    email: "cfpmantsirabe@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 7,
    nom: "CFPM DIEGO",
    type: "centre",
    adresse: "Boulevard de la Libération",
    telephone: ["020 82 336 54", "034 06 336 54"],
    email: "cfpmdiego@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 8,
    nom: "CFPM AMBOSITRA",
    type: "centre",
    adresse: "Route d'Fianarantsoa, Ambalavao",
    telephone: ["020 47 891 23", "034 08 891 23"],
    email: "cfpmambositra@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 9,
    nom: "CFPM AMBATONDRAZAKA",
    type: "centre",
    adresse: "Avenue de l'Indépendance",
    telephone: ["020 54 678 90", "034 09 678 90"],
    email: "cfpmambatondrazaka@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  },
  {
    id: 10,
    nom: "CFPM SAMBAVA",
    type: "centre",
    adresse: "Boulevard des Cocotiers",
    telephone: ["020 88 123 45", "034 10 123 45"],
    email: "cfpmsambava@metfp.gov.mg",
    horaires: "Lun-Ven: 7h30-16h30, Sam: 8h-12h"
  }
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

  const toggleVilleExpansion = (villeId) => {
    setCentres(prevCentres => 
      prevCentres.map(centre => 
        centre.id === villeId 
          ? { ...centre, isExpanded: !centre.isExpanded }
          : centre
      )
    );
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
    
    // Sur mobile, ouvrir le modal
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  const handleSousCentreClick = (sousCentre, e) => {
    e.stopPropagation();
    setActiveCentre(sousCentre);
    
    // Sur mobile, ouvrir le modal
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  return (
    <div className="font-sans scroll-smooth bg-white overflow-x-hidden w-full max-w-[100vw]">
      {/* Bandeau Officiel */}
      <div className="bg-green-600 text-white text-center py-2 text-sm w-full overflow-hidden max-w-[100vw]">
        Établissement Privée sous Tutelle du Ministère de l'Enseignement Technique et de la Formation Professionnelle
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white shadow-lg z-50 border-b border-blue-200 overflow-hidden max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className=" text-white p-3 rounded-lg mr-4">
                <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">CFPM MADAGASCAR</div>
                <div className="text-xs text-gray-600">Centre de Formation Professionnelle Moderne</div>
              </div>
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden lg:flex space-x-8">
              <a href="#accueil" className="text-blue-900 font-bold hover:text-blue-600 transition duration-300">ACCUEIL</a>
              <a href="#formations" className="text-blue-900 font-bold hover:text-blue-600 transition duration-300">FORMATIONS</a>
              <a href="#centres" className="text-blue-900 font-bold hover:text-blue-600 transition duration-300">NOS CENTRES</a>
              <a href="#admission" className="text-blue-900 font-bold hover:text-blue-600 transition duration-300">ADMISSION</a>
              <a href="#contact" className="text-blue-900 font-bold hover:text-blue-600 transition duration-300">CONTACT</a>
            </div>

            {/* Menu Mobile */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 focus:outline-none p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-100 bg-white">
              <div className="flex flex-col space-y-4">
                <a href="#accueil" className="text-blue-900 font-bold hover:text-blue-600">ACCUEIL</a>
                <a href="#formations" className="text-blue-900 font-bold hover:text-blue-600">FORMATIONS</a>
                <a href="#centres" className="text-blue-900 font-bold hover:text-blue-600">NOS CENTRES</a>
                <a href="#admission" className="text-blue-900 font-bold hover:text-blue-600">ADMISSION</a>
                <a href="#contact" className="text-blue-900 font-bold hover:text-blue-600">CONTACT</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 lg:py-32 overflow-hidden w-full max-w-[100vw]">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-lg font-bold mb-8 shadow-lg">
            ⚠️ FORMATIONS - INSCRIPTIONS 2026 EN COURS
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            CENTRE DE FORMATION <br />
            <span className="text-yellow-300">PROFESSIONNELLE MODERNE DE MADAGASCAR</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>CFPM MADAGASCAR</strong> - Former la jeunesse malgache aux métiers porteurs depuis 2003
          </p>

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-300">10+</div>
                <div className="text-lg text-blue-300">CENTRES RÉGIONAUX</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">6</div>
                <div className="text-lg text-blue-300">FILIÈRES DE FORMATION</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">22</div>
                <div className="text-lg text-blue-300">ANS D'EXPÉRIENCE</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#formations" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 shadow-lg transform hover:scale-105"
            >
              📚 DÉCOUVRIR NOS FORMATIONS
            </a>
            <a 
              href="#admission" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition duration-300"
            >
              📝 POSTULER MAINTENANT
            </a>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-800 mb-12">
            POURQUOI CHOISIR LE CFPM ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition duration-300">
                <div className="text-5xl mb-4">{avantage.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{avantage.title}</h3>
                <p className="text-gray-700">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formations */}
      <section id="formations" className="py-16 bg-gray-50 overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              NOS FILIÈRES DE FORMATION
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Formations qualifiantes de 2 à 6 mois accessibles tous
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <div 
                key={formation.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={formation.image} 
                    alt={formation.nom}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {formation.duree}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{formation.nom}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {formation.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-green-600 font-bold text-lg">✅ FORMATION GARANTIE</div>
                    <div className="text-sm text-gray-500 mt-1">{formation.niveau}</div>
                  </div>
                  
                  <a 
                    href="#admission"
                    className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300 text-center group-hover:shadow-lg"
                  >
                    📋 INSCRIVEZ-VOUS MAINTENANT
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Centres - Version Optimisée Mobile */}
      <section id="centres" className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              NOS CENTRES RÉGIONAUX
            </h2>
            <p className="text-lg text-gray-600">
              Plus de 10 centres CFPM répartis dans toutes les régions de Madagascar
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* Version Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {/* Liste des centres */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {centres.map((centre) => (
                <div key={centre.id}>
                  {/* Centre principal ou Ville */}
                  <div
                    className={`p-4 rounded-xl cursor-pointer transition duration-300 border-2 ${
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
                        <div className="text-blue-600">
                          {centre.isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sous-centres pour Antananarivo */}
                  {centre.type === "ville" && centre.isExpanded && (
                    <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                      {centre.sousCentres.map((sousCentre) => (
                        <div
                          key={sousCentre.id}
                          className={`p-3 rounded-lg cursor-pointer transition duration-300 border ${
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

            {/* Détails du centre sélectionné */}
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">{activeCentre.nom}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    ADRESSE
                  </h4>
                  <p className="text-gray-800">{activeCentre.adresse}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <FaPhoneAlt className="text-blue-600 mr-2" />
                    TÉLÉPHONE
                  </h4>
                  {activeCentre.telephone.map((tel, index) => (
                    <p key={index} className="text-gray-800">{tel}</p>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <FaEnvelope className="text-blue-600 mr-2" />
                    EMAIL
                  </h4>
                  <p className="text-gray-800">{activeCentre.email}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                    <FaClock className="text-blue-600 mr-2" />
                    HORAIRES
                  </h4>
                  <p className="text-gray-800">{activeCentre.horaires}</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800 text-sm text-center font-medium">
                    🚀 <strong>INSCRIPTIONS 2026 EN COURS</strong> - Places limitées
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Version Mobile Optimisée */}
          <div className="lg:hidden">
            {/* Liste des centres seule sur mobile */}
            <div className="space-y-2 mb-8 max-h-[60vh] overflow-y-auto">
              {centres.map((centre) => (
                <div key={centre.id}>
                  <div
                    className={`p-4 rounded-xl cursor-pointer transition duration-300 border-2 ${
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
                        <div className="text-blue-600 flex-shrink-0 ml-2">
                          {centre.isExpanded ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sous-centres */}
                  {centre.type === "ville" && centre.isExpanded && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                      {centre.sousCentres.map((sousCentre) => (
                        <div
                          key={sousCentre.id}
                          className={`p-3 rounded-lg cursor-pointer transition duration-300 border ${
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

      {/* Modal Mobile pour les détails du centre - Version Plein Écran */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col lg:hidden w-full h-full max-w-[100vw] left-0 right-0">
          {/* En-tête avec fond bleu */}
          <div className="bg-blue-600 text-white p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Détails du Centre</h3>
                <p className="text-blue-100 text-sm mt-1">{activeCentre.nom}</p>
              </div>
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Contenu principal */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="p-4 space-y-4">
              {/* Carte Adresse */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Adresse</h4>
                    <p className="text-gray-600">{activeCentre.adresse}</p>
                  </div>
                </div>
              </div>

              {/* Carte Téléphone */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaPhoneAlt className="text-green-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Téléphone</h4>
                    {activeCentre.telephone.map((tel, index) => (
                      <p key={index} className="text-gray-600 text-base mb-1">{tel}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Email */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaEnvelope className="text-purple-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Email</h4>
                    <p className="text-gray-600">{activeCentre.email}</p>
                  </div>
                </div>
              </div>

              {/* Carte Horaires */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaClock className="text-orange-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600">{activeCentre.horaires}</p>
                  </div>
                </div>
              </div>

              {/* Bannière d'information */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-5 text-center shadow-lg">
                <p className="text-yellow-900 font-bold text-base">
                  🚀 <strong>INSCRIPTIONS 2026 EN COURS</strong> 🚀
                </p>
                <p className="text-yellow-800 text-sm mt-1">Places limitées - Dépêchez-vous !</p>
              </div>

              {/* Bouton de retour */}
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg active:scale-95 mt-4"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              CONDITIONS D'ADMISSION 2024
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Critères d'éligibilité */}
                <div className="p-8 bg-blue-600 text-white">
                  <h3 className="text-2xl font-bold mb-6">📋 CRITÈRES D'ÉLIGIBILITÉ</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">ÂGE REQUIS</h4>
                        <p>07 à 60 ans</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">NIVEAU SCOLAIRE</h4>
                        <p>Savoir lire et ecrire minimum</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">SITUATION</h4>
                        <p>Collogiens, Lyceens, Jeunes, Adultes</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">TESTS</h4>
                        <p>Tests d'orientation et entretien de motivation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dossier d'inscription */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">📄 DOSSIER D'INSCRIPTION</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Copie d'acte de naissance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Copie CIN ou Passeport</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">4 photos d'identité récentes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Certificat de scolarité (3ème)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Dernier bulletin de notes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Certificat médical</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Enveloppe timbrée à l'adresse du candidat</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-center font-bold">
                      🗓️ <strong>PÉRIODE D'INSCRIPTION :</strong> JANVIER - MARS 2024
                    </p>
                    <p className="text-yellow-800 text-center text-sm mt-1">
                      Rentrée scolaire : AVRIL 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
              >
                📞 CONTACTER LE CFPM LE PLUS PROCHE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact & Alertes */}
      <section id="contact" className="py-16 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
              INFORMATIONS IMPORTANTES
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Alertes importantes */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">⚠️ ALERTES IMPORTANTES</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">ATTENTION AUX ARNAQUES</h4>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">VÉRIFICATION OBLIGATOIRE</h4>
                    <p className="text-gray-700">
                      Contactez <strong>UNIQUEMENT</strong> les numéros officiels des centres CFPM 
                      pour confirmer les informations et les dates d'inscription.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">INFORMATIONS OFFICIELLES</h4>
                    <p className="text-gray-700">
                      Seules les informations communiquées directement par les centres CFPM 
                      ou le site du <strong>Ministère METFP</strong> sont valides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact ministère */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">MINISTÈRE DE TUTELLE</h3>
              <p className="text-gray-700 mb-4">
                <strong>Ministère de l'Enseignement Technique et de la Formation Professionnelle (METFP)</strong>
              </p>
              <p className="text-gray-600 mb-2">Immeuble METFP, Anosy, Antananarivo 101 - Madagascar</p>
              <p className="text-gray-600 mb-4">Site web: <strong>www.metfp.gov.mg</strong></p>
              
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 font-bold">
                  🎯 <strong>OBJECTIF 2024:</strong> Former 5,000 jeunes aux métiers techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-12 pb-8 overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-lg mr-3">
                  <img src={logo} alt="logo" className="w-12 h-12 object-contain"/>
                </div>
                <div>
                  <div className="text-xl font-bold">CFPM MADAGASCAR</div>
                  <div className="text-xs text-blue-200">Centre de Formation Professionnelle Moderne</div>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Établissement Public sous tutelle du Ministère de l'Enseignement Technique 
                et de la Formation Professionnelle. Former les jeunes aux métiers d'avenir depuis 2002.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">LIENS RAPIDES</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#formations" className="hover:text-white transition">Nos Formations</a></li>
                <li><a href="#centres" className="hover:text-white transition">Centres Régionaux</a></li>
                <li><a href="#admission" className="hover:text-white transition">Conditions d'Admission</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">LIENS UTILES</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="http://www.metfp.gov.mg" className="hover:text-white transition">Ministère METFP</a></li>
                <li><a href="#" className="hover:text-white transition">Portail de l'Emploi</a></li>
                <li><a href="#" className="hover:text-white transition">Fonds de Formation</a></li>
                <li><a href="#" className="hover:text-white transition">République de Madagascar</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">MENTIONS LÉGALES</h3>
              <div className="space-y-2 text-blue-200 text-sm">
                <p>Établissement Public Administratif</p>
                <p>N° Stat: 2002-001/METFP</p>
                <p>Siège: Antananarivo, Madagascar</p>
                <p>Email: cfpmmada@metfp.gov.mg</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            <p>
              © 2024 CFPM MADAGASCAR - Ministère de l'Enseignement Technique et de la Formation Professionnelle. 
              Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;