import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SkillLevel = 'Advanced' | 'Proficient' | 'Intermediate';

type SkillCategory =
    | 'Backend'
    | 'Cloud'
    | 'Frontend'
    | 'Architecture'
    | 'DevOps'
    | 'AI'
    | 'Other';

interface SkillDetail {
    label: string;
    percentage: number;
}

interface Skill {
    skill: string;
    level: SkillLevel;
    category: SkillCategory;
    details: SkillDetail[];
}

const Skills: React.FC = () => {
    const skillsData: Skill[] = [
        // =========================
        // BACKEND
        // =========================
        {
            skill: 'C#',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'Clean Architecture + DI', percentage: 90 },
                { label: 'Async/Await + Background processing', percentage: 88 },
                { label: 'Performance & debugging in production', percentage: 85 },
                { label: 'Unit/Integration testing', percentage: 82 },
            ],
        },
        {
            skill: 'ASP.NET Core / .NET',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'REST APIs (design + implementation)', percentage: 90 },
                { label: 'AuthN/AuthZ basics (JWT/OAuth)', percentage: 82 },
                { label: 'EF Core + LINQ query tuning', percentage: 85 },
                { label: 'Logging + error handling patterns', percentage: 80 },
            ],
        },

        // NEW: Entity Framework Core (separado para que sea visible como skill)
        {
            skill: 'Entity Framework Core',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'LINQ + query tuning', percentage: 85 },
                { label: 'Migrations + schema changes', percentage: 80 },
                { label: 'Tracking / performance patterns', percentage: 78 },
                { label: 'Transactions + concurrency basics', percentage: 75 },
            ],
        },

        {
            skill: 'SQL Server',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'Query optimization + indexes', percentage: 85 },
                { label: 'Stored procedures & troubleshooting', percentage: 82 },
                { label: 'Relational modeling', percentage: 84 },
                { label: 'Performance monitoring & fixes', percentage: 78 },
            ],
        },

        // NEW: Stored Procedures (separado para resaltar lo que pediste)
        {
            skill: 'Stored Procedures',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'T-SQL procedures design', percentage: 80 },
                { label: 'Troubleshooting + refactors', percentage: 78 },
                { label: 'Performance tuning', percentage: 75 },
                { label: 'Params + result sets patterns', percentage: 72 },
            ],
        },

        {
            skill: 'REST APIs',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'API design', percentage: 88 },
                { label: 'Security basics', percentage: 80 },
                { label: 'Caching / pagination', percentage: 78 },
                { label: 'Testing', percentage: 85 },
            ],
        },

        // NEW: API Optimization / Query performance
        {
            skill: 'API Optimization',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'Response time improvements', percentage: 78 },
                { label: 'Query time reduction', percentage: 80 },
                { label: 'Caching strategies', percentage: 75 },
                { label: 'Profiling + bottleneck fixes', percentage: 72 },
            ],
        },

        // NEW: Patterns (Repo/UoW/DI/Factory/CQRS)
        {
            skill: 'Repository Pattern',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'Repository design + interfaces', percentage: 85 },
                { label: 'Service layer separation', percentage: 82 },
                { label: 'Testing support', percentage: 78 },
                { label: 'Clean Architecture usage', percentage: 80 },
            ],
        },
        {
            skill: 'Unit of Work',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'Transaction boundaries', percentage: 75 },
                { label: 'Commit / rollback patterns', percentage: 73 },
                { label: 'EF Core integration', percentage: 76 },
                { label: 'Consistency handling', percentage: 70 },
            ],
        },
        {
            skill: 'Dependency Injection',
            level: 'Advanced',
            category: 'Backend',
            details: [
                { label: 'Service registration patterns', percentage: 85 },
                { label: 'Lifetimes (Scoped/Transient/Singleton)', percentage: 80 },
                { label: 'Testability', percentage: 78 },
                { label: 'Clean Architecture integration', percentage: 82 },
            ],
        },
        {
            skill: 'Factory Pattern',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'Factory abstractions', percentage: 75 },
                { label: 'Creation logic centralization', percentage: 72 },
                { label: 'Reducing coupling', percentage: 70 },
                { label: 'Maintainability', percentage: 73 },
            ],
        },
        {
            skill: 'CQRS',
            level: 'Intermediate',
            category: 'Architecture',
            details: [
                { label: 'Command vs Query separation', percentage: 70 },
                { label: 'Handler patterns', percentage: 68 },
                { label: 'Validation / pipelines basics', percentage: 65 },
                { label: 'Maintainability wins', percentage: 66 },
            ],
        },

        {
            skill: 'GraphQL',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'Schema basics', percentage: 65 },
                { label: 'REST coexistence', percentage: 70 },
                { label: 'Client/server patterns', percentage: 60 },
                { label: 'Perf basics', percentage: 55 },
            ],
        },

        {
            skill: 'Node.js',
            level: 'Proficient',
            category: 'Backend',
            details: [
                { label: 'Express', percentage: 60 },
                { label: 'REST basics', percentage: 60 },
                { label: 'Async patterns', percentage: 55 },
                { label: 'npm/yarn', percentage: 60 },
            ],
        },

        // NEW: Python
        {
            skill: 'Python',
            level: 'Intermediate',
            category: 'Backend',
            details: [
                { label: 'Automation scripts', percentage: 65 },
                { label: 'API integrations basics', percentage: 60 },
                { label: 'Data handling', percentage: 58 },
                { label: 'Tooling', percentage: 60 },
            ],
        },

        // NEW: Java + Spring Boot
        {
            skill: 'Java + Spring Boot',
            level: 'Intermediate',
            category: 'Backend',
            details: [
                { label: 'REST controllers', percentage: 65 },
                { label: 'Service/Repository structure', percentage: 62 },
                { label: 'Dependency Injection', percentage: 60 },
                { label: 'API patterns', percentage: 58 },
            ],
        },

        // =========================
        // CLOUD
        // =========================
        {
            skill: 'Azure (Functions + Storage)',
            level: 'Proficient',
            category: 'Cloud',
            details: [
                { label: 'Azure Functions', percentage: 88 },
                { label: 'Blob Storage workflows', percentage: 85 },
                { label: 'Configuration & env flags', percentage: 80 },
                { label: 'Reliability / retries', percentage: 78 },
            ],
        },

        // NEW: Azure (general)
        {
            skill: 'Azure (Cloud Architecture)',
            level: 'Proficient',
            category: 'Cloud',
            details: [
                { label: 'Cloud architecture basics', percentage: 75 },
                { label: 'Monitoring + alerts basics', percentage: 70 },
                { label: 'Identity/security basics', percentage: 65 },
                { label: 'Cost/performance tradeoffs', percentage: 68 },
            ],
        },

        {
            skill: 'AWS',
            level: 'Proficient',
            category: 'Cloud',
            details: [
                { label: 'EC2/RDS', percentage: 65 },
                { label: 'Lambda', percentage: 60 },
                { label: 'CloudWatch', percentage: 60 },
                { label: 'API Gateway', percentage: 55 },
            ],
        },

        // NEW: Redis
        {
            skill: 'Redis (Caching)',
            level: 'Proficient',
            category: 'Cloud',
            details: [
                { label: 'Cache-aside patterns', percentage: 75 },
                { label: 'TTL strategies', percentage: 72 },
                { label: 'Key design basics', percentage: 70 },
                { label: 'Performance improvements', percentage: 73 },
            ],
        },

        // =========================
        // ARCHITECTURE
        // =========================
        {
            skill: 'Microservices',
            level: 'Proficient',
            category: 'Architecture',
            details: [
                { label: 'Service boundaries & contracts', percentage: 82 },
                { label: 'Distributed workflows', percentage: 80 },
                { label: 'Idempotency / retries', percentage: 75 },
                { label: 'REST/GraphQL integration', percentage: 72 },
            ],
        },
        {
            skill: 'System Design / Architecture',
            level: 'Proficient',
            category: 'Architecture',
            details: [
                { label: 'DDD basics', percentage: 78 },
                { label: 'Clean Architecture', percentage: 82 },
                { label: 'Event-driven systems', percentage: 80 },
                { label: 'Cost/performance tradeoffs', percentage: 75 },
            ],
        },

        // NEW: Principles
        {
            skill: 'SOLID / Best Practices',
            level: 'Proficient',
            category: 'Architecture',
            details: [
                { label: 'SOLID principles', percentage: 78 },
                { label: 'DRY / KISS', percentage: 75 },
                { label: 'Design patterns', percentage: 72 },
                { label: 'MVC architecture understanding', percentage: 75 },
            ],
        },

        // =========================
        // DEVOPS
        // =========================
        {
            skill: 'Docker',
            level: 'Proficient',
            category: 'DevOps',
            details: [
                { label: 'Containerizing services', percentage: 80 },
                { label: 'Local dev env', percentage: 78 },
                { label: 'Volumes / networking', percentage: 75 },
                { label: 'Deploy workflows', percentage: 70 },
            ],
        },

        // NEW: Azure DevOps
        {
            skill: 'Azure DevOps (Git + CI/CD)',
            level: 'Proficient',
            category: 'DevOps',
            details: [
                { label: 'Repos + branching', percentage: 78 },
                { label: 'CI/CD pipelines', percentage: 75 },
                { label: 'Build troubleshooting', percentage: 72 },
                { label: 'Release coordination', percentage: 70 },
            ],
        },

        {
            skill: 'CI/CD & Deployments',
            level: 'Proficient',
            category: 'DevOps',
            details: [
                { label: 'Pipelines', percentage: 75 },
                { label: 'Environment config', percentage: 78 },
                { label: 'Build troubleshooting', percentage: 75 },
                { label: 'Production deploys', percentage: 72 },
            ],
        },

        // NEW: Logging / Telemetry / Distributed debugging
        {
            skill: 'Logging & Observability',
            level: 'Proficient',
            category: 'DevOps',
            details: [
                { label: 'Structured logging', percentage: 75 },
                { label: 'Telemetry basics', percentage: 70 },
                { label: 'Distributed debugging', percentage: 68 },
                { label: 'Production incident triage', percentage: 72 },
            ],
        },

        // =========================
        // AI
        // =========================
        {
            skill: 'AI / Whisper / Media Processing',
            level: 'Proficient',
            category: 'AI',
            details: [
                { label: 'Transcription pipelines', percentage: 82 },
                { label: 'FFmpeg workflows', percentage: 80 },
                { label: 'Media automation', percentage: 78 },
                { label: 'AI integrations', percentage: 75 },
            ],
        },

        // NEW: n8n + Voice models
        {
            skill: 'n8n Automation',
            level: 'Intermediate',
            category: 'AI',
            details: [
                { label: 'Workflow automation', percentage: 65 },
                { label: 'Webhooks + integrations', percentage: 60 },
                { label: 'Triggers + scheduling', percentage: 58 },
                { label: 'API-based automations', percentage: 60 },
            ],
        },
        {
            skill: 'AI Voice / Speech Models',
            level: 'Intermediate',
            category: 'AI',
            details: [
                { label: 'Voice pipelines basics', percentage: 62 },
                { label: 'Model integrations', percentage: 58 },
                { label: 'Audio processing basics', percentage: 60 },
                { label: 'Automation workflows', percentage: 57 },
            ],
        },

        // =========================
        // FRONTEND
        // =========================
        {
            skill: 'React',
            level: 'Proficient',
            category: 'Frontend',
            details: [
                { label: 'Components', percentage: 82 },
                { label: 'Hooks', percentage: 85 },
                { label: 'State management', percentage: 70 },
                { label: 'Performance / UX', percentage: 75 },
            ],
        },
        {
            skill: 'TypeScript / JavaScript',
            level: 'Proficient',
            category: 'Frontend',
            details: [
                { label: 'ES6+ / async', percentage: 82 },
                { label: 'API consumption', percentage: 85 },
                { label: 'Frontend integrations', percentage: 75 },
                { label: 'Tooling', percentage: 70 },
            ],
        },
        {
            skill: 'Angular',
            level: 'Proficient',
            category: 'Frontend',
            details: [
                { label: 'Components', percentage: 60 },
                { label: 'RxJS', percentage: 55 },
                { label: 'Routing', percentage: 60 },
                { label: 'CLI', percentage: 60 },
            ],
        },
        {
            skill: 'Vue.js',
            level: 'Proficient',
            category: 'Frontend',
            details: [
                { label: 'Components', percentage: 65 },
                { label: 'Routing', percentage: 60 },
                { label: 'State basics', percentage: 55 },
                { label: 'CLI', percentage: 55 },
            ],
        },

        // NEW: Flutter
        {
            skill: 'Flutter',
            level: 'Intermediate',
            category: 'Frontend',
            details: [
                { label: 'Mobile app creation', percentage: 65 },
                { label: 'API integration', percentage: 62 },
                { label: 'UI layout basics', percentage: 60 },
                { label: 'State basics', percentage: 55 },
            ],
        },

        // =========================
        // OTHER (Integrations / API Mgmt)
        // =========================
        {
            skill: 'MuleSoft',
            level: 'Intermediate',
            category: 'Other',
            details: [
                { label: 'Integration basics', percentage: 60 },
                { label: 'API-led connectivity concepts', percentage: 58 },
                { label: 'Flows / connectors basics', percentage: 55 },
                { label: 'Troubleshooting basics', percentage: 55 },
            ],
        },
        {
            skill: 'Apigee',
            level: 'Intermediate',
            category: 'Other',
            details: [
                { label: 'API management basics', percentage: 60 },
                { label: 'Policies basics', percentage: 58 },
                { label: 'Security basics', percentage: 55 },
                { label: 'Monitoring basics', percentage: 55 },
            ],
        },
    ];

    const categories: SkillCategory[] = [
        'Backend',
        'Cloud',
        'Frontend',
        'Architecture',
        'DevOps',
        'AI',
        'Other',
    ];

    const [selectedCategory, setSelectedCategory] =
        useState<SkillCategory>('Backend');
    const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

    const filteredSkills =
        selectedCategory === 'Other'
            ? skillsData
            : skillsData.filter((s) => s.category === selectedCategory);

    const levelToPercent = (level: SkillLevel) =>
        level === 'Advanced' ? 90 : level === 'Proficient' ? 80 : 70;

    return (
        <div className="bg-black text-white py-12 flex justify-center">
            <div className="w-full max-w-5xl mx-auto px-6">
                <h5 className="text-green-500 text-center text-2xl mb-6 font-bold">
                    SKILLS
                </h5>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                setExpandedSkill(null);
                            }}
                            className={`px-4 py-1 rounded-full border text-sm ${selectedCategory === cat
                                    ? 'border-green-500 text-green-500'
                                    : 'border-white/20 text-gray-400 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredSkills.map((skillData, index) => {
                        const isOpen = expandedSkill === skillData.skill;
                        const percent = levelToPercent(skillData.level);

                        return (
                            <motion.div
                                key={index}
                                className="border border-white/20 rounded-xl p-6"
                                whileHover={{ borderColor: '#22c55e' }}
                            >
                                <div className="flex justify-between">
                                    <p className="text-green-500 font-bold">{skillData.skill}</p>
                                    <span className="text-xs border px-2 rounded">
                                        {skillData.level}
                                    </span>
                                </div>

                                <div className="mt-3 h-2 bg-white/10 rounded">
                                    <motion.div
                                        className="h-2 bg-green-500 rounded"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${percent}%` }}
                                    />
                                </div>

                                <button
                                    onClick={() =>
                                        setExpandedSkill(isOpen ? null : skillData.skill)
                                    }
                                    className="text-orange-500 mt-3"
                                >
                                    {isOpen ? 'Show less' : 'Show more'}
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
                                        >
                                            {skillData.details.map((d, i) => (
                                                <div key={i}>
                                                    <p className="text-sm">{d.label}</p>
                                                    <div className="h-2 bg-white/10 rounded mt-1">
                                                        <motion.div
                                                            className="h-2 bg-orange-500 rounded"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${d.percentage}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;