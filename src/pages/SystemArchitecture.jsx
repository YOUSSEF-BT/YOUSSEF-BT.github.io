import { useEffect, useState } from 'react';

const diagrams = [
    {
        name: "AI Summarizer",
        image: "/assets/architecture/AI Summarizer.png",
        description: "Architecture du système d'IA pour la summarisez de documents"
    },
    {
        name: "Big Data Tweets Sentiment Analysis",
        image: "/assets/architecture/Big Data Tweets Sentiment Analysis.png",
        description: "Plateforme d'analyse de sentiment pour les tweets (Big Data)"
    },
    {
        name: "Customer Analytics & Churn Prediction Platform",
        image: "/assets/architecture/Customer Analytics & Churn Prediction Platform.png",
        description: "Plateforme d'analyse client et prédiction de churn"
    },
    {
        name: "Customer MLOps Pipeline",
        image: "/assets/architecture/Customer MLOps Pipeline.png",
        description: "Pipeline MLOps complet pour les opérations ML"
    },
    {
        name: "Data Quality Monitoring Platform",
        image: "/assets/architecture/Data Quality Monitoring Platform.png",
        description: "Plateforme de surveillance de la qualité des données"
    },
    {
        name: "Fraud Detection System",
        image: "/assets/architecture/Fraud Detection System.png",
        description: "Système de détection de fraude bancaire"
    },
    {
        name: "Hybrid Movie Recommender",
        image: "/assets/architecture/Hybrid Movie Recommender.png",
        description: "Système de recommandation hybride de films"
    }
];

export default function SystemArchitecture() {
    const [selectedDiagram, setSelectedDiagram] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        console.log('selectedDiagram changed:', selectedDiagram);
    }, [selectedDiagram]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
                        System Architecture
                    </h1>
                    <p className="text-xl text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                        Découvrez les architectures techniques complètes de tous les projets du portfolio
                    </p>

                    <div className="grid grid-cols-1 gap-16">
                        {diagrams.map((diagram, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
                                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                                        {diagram.name}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {diagram.description}
                                    </p>
                                </div>

                                <div className="relative cursor-pointer" onClick={() => { console.log('Clicked diagram:', diagram.name); setSelectedDiagram(diagram); }}>
                                    <img
                                        src={diagram.image}
                                        alt={diagram.name}
                                        className="w-full h-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-md"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        {selectedDiagram && (
            <div
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
                onClick={() => setSelectedDiagram(null)}
            >
                <div className="relative max-w-6xl max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                    <button
                        className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
                        onClick={() => setSelectedDiagram(null)}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedDiagram.image}
                        alt={selectedDiagram.name}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    <div className="mt-4 text-center text-white max-w-3xl">
                        <h3 className="text-2xl font-bold mb-2">{selectedDiagram.name}</h3>
                        <p className="text-gray-300">{selectedDiagram.description}</p>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}