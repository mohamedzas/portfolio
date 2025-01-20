import React, { useState } from 'react';
import { Github, PlayCircle, Mail } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('persönlich');
  
  // Project data remains the same...
  const personalProjects = [
    {
      title: "Christmas Spirit Studios",
      description: "Eine Kollektion von Spielen entwickelt mit Unity 3D",
      technologies: ["Unity 3D", "C#", "Google Play Services", "WebView"],
      achievements: [
        "Mehrere erfolgreiche Spiele im Play Store",
        "Integration von WebView Funktionalität",
        "Implementierung von Monetarisierung",
        "Regelmäßige Updates und Wartung"
      ]
    },
    {
      title: "Android Game Collection",
      description: "Eine Serie von Android-Spielen und Apps",
      technologies: ["Android Studio", "Java", "JavaScript", "Firebase"],
      achievements: [
        "Erfolgreiche Monetarisierung durch Werbung",
        "Integration von Google Play Services",
        "Positive Nutzerbewertungen",
        "Kontinuierliche Verbesserungen basierend auf Nutzerfeedback"
      ]
    }
  ];

  const clientProjects = [
    {
      title: "ELECTRON STUDIO Projekte",
      client: "ELECTRON STUDIO SARLAU",
      period: "04/2023 - 12/2023",
      description: "Entwicklung und Integration von Spielfunktionen",
      contribution: [
        "WebView Integration für Java-JavaScript Kommunikation",
        "Unity 3D Spieleentwicklung",
        "Google Play Developer Console Management",
        "A/B Testing und Analytics"
      ],
      technologies: ["Unity 3D", "Java", "JavaScript", "Google Play Console"]
    },
    {
      title: "IRONDEV Mobile Games",
      client: "IRONDEV SARL",
      period: "01/2022 - 06/2022",
      description: "Mobile Spieleentwicklung und Optimierung",
      contribution: [
        "Java-basierte Problemlösungen",
        "Unity 3D Entwicklung",
        "Play Store Management",
        "Technische Unterstützung"
      ],
      technologies: ["Java", "Unity 3D", "Android Studio"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with subtle brand color */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-brand-blue">Outmane Hassani</h1>
          <div className="w-full h-px bg-brand-blue/20 my-4"></div>
          <p className="text-lg text-gray-600 mt-2">Mobile Game Developer</p>
          
          <div className="flex gap-6 mt-6">
            <a 
              href="https://github.com/OutmaneAmazighi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              <PlayCircle size={20} />
              Play Store
            </a>
            <a 
              href="mailto:outmane.hassani@gmail.com" 
              className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors"
            >
              <Mail size={20} />
              Kontakt
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* About Section */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-brand-blue mb-4">Über Mich</h2>
          <p className="text-gray-700 leading-relaxed">
            Als leidenschaftlicher Spieleentwickler mit Erfahrung in der Entwicklung und 
            Veröffentlichung von mobilen Spielen, spezialisiere ich mich auf Unity 3D und 
            Android-Entwicklung. Meine Expertise umfasst die Implementierung von 
            Monetarisierungsstrategien, WebView-Integration und Google Play Services. 
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('persönlich')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'persönlich' 
                ? 'bg-brand-blue text-white' 
                : 'bg-white text-gray-700 hover:text-brand-blue'
            }`}
          >
            Persönliche Projekte
          </button>
          <button
            onClick={() => setActiveTab('kunden')}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'kunden' 
                ? 'bg-brand-blue text-white' 
                : 'bg-white text-gray-700 hover:text-brand-blue'
            }`}
          >
            Kundenprojekte
          </button>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {activeTab === 'persönlich' ? (
            personalProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:border-brand-blue/20 border border-transparent transition-colors">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-brand-blue transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 px-3 py-1 rounded-md text-gray-700 text-sm hover:bg-brand-blue/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Erfolge:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="text-gray-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            clientProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:border-brand-blue/20 border border-transparent transition-colors">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-brand-blue transition-colors mb-2">
                  {project.title}
                </h3>
                <div className="text-gray-700 mb-1">Kunde: {project.client}</div>
                <div className="text-gray-600 mb-4">Zeitraum: {project.period}</div>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 px-3 py-1 rounded-md text-gray-700 text-sm hover:bg-brand-blue/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Mein Beitrag:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.contribution.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;