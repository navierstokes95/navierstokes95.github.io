
import React, { useEffect } from 'react';
import {
    ChevronLeft,
    Layers,
    Globe,
    ChevronRight
} from 'lucide-react';
import { ProjectItem } from './types';

const ProjectDetail = ({ project, onBack }: { project: ProjectItem, onBack: () => void }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold mb-8 transition-colors group"
                >
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </button>

                <div className="mb-12">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                        {project.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gray-100">
                    <img
                        src={project.image || `https://picsum.photos/seed/${project.title}/1200/800`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                    <p className="mb-8">{project.fullDescription || project.description}</p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Impact & Approach</h2>
                    <div className="space-y-4 mb-8">
                        {(project.impact || `This project involved the integration of modern engineering principles to solve industrial bottlenecks. By leveraging ${project.tags.join(', ')}, we were able to significantly enhance efficiency and reliability.`).split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Objectives</h3>
                        <ul className="space-y-3">
                            {(project.objectives || [
                                "Optimization of manufacturing processes using advanced simulations.",
                                "Implementation of IoT architectures for real-time monitoring and control.",
                                "Iterative prototyping using additive manufacturing technologies."
                            ]).map((objective, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                                    <span>{objective}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                            <Layers size={20} />
                            View Full Documentation
                        </button>
                        {project.demoUrl ? (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                            >
                                <Globe size={20} />
                                Live Demo / Reference
                            </a>
                        ) : (
                            <button className="flex-1 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                <Globe size={20} />
                                Live Demo / Reference
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold transition-colors group"
                    >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
