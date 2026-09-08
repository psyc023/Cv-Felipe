export type SimpleJob = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export type SimpleConsulting = {
  name: string;
  duration: string;
  bullets: string[];
};

export type SimpleCvCopy = {
  name: string;
  role: string;
  contactLine: string;
  portfolio: string;
  github: string;
  cvWeb: string;
  languagesLine: string;
  summaryTitle: string;
  summary: string[];
  experienceTitle: string;
  experienceContinued: string;
  consultingTitle: string;
  consultingIntro: string;
  skillsTitle: string;
  skills: { label: string; value: string }[];
  certificationsTitle: string;
  certificationName: string;
  certificationIssuer: string;
  certificationDates: string;
  certificationId: string;
  educationTitle: string;
  education: { degree: string; school: string; year: string }[];
  jobs: SimpleJob[];
  consulting: SimpleConsulting[];
};

const jobsEs: SimpleJob[] = [
  {
    title: 'Desarrollador Full Stack',
    company: 'APPWHERE / Scitum - TELMEX',
    period: 'jun. 2024 - Actualidad',
    bullets: [
      'Participación en el desarrollo de una plataforma de ciberseguridad para TELMEX, creando vistas y módulos dinámicos con React, JavaScript y TypeScript, incluyendo funcionalidades para configurar y almacenar menús personalizados e integrarlos con servicios backend.',
      'Desarrollo de aplicaciones web interactivas utilizando Blazor, Razor Components y MudBlazor, con C# y .NET 8, creación de componentes reutilizables e integración con APIs REST.',
      'Desarrollo y resolución de incidencias en APIs bancarias y microservicios que soportan integraciones internas, externas e híbridas en entornos distribuidos.',
      'Validación de contratos de API, modelos de solicitud/respuesta, headers, tokens de autenticación, flujos de autorización, manejo de errores y persistencia de datos para garantizar integraciones seguras y confiables.',
      'Investigación de problemas complejos mediante trazas de API, logs de aplicaciones, consultas SQL, pruebas con Postman, validación de bases de datos y análisis de causa raíz.',
      'Trabajo con servicios REST y SOAP, autenticación basada en tokens, API gateways, integraciones servicio a servicio, consultas SQL, procedimientos almacenados, Git, Azure DevOps y flujos de CI/CD.',
      'Contribución a mejoras de arquitectura utilizando conceptos de Clean Architecture, principios SOLID, inyección de dependencias, patrones de diseño y separación de responsabilidades, además de apoyar a desarrolladores mediante guía técnica, resolución de problemas, revisiones de código y diseño de soluciones.',
    ],
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Upax Grupo Salinas',
    period: 'jun. 2023 - jun. 2024',
    bullets: [
      'Desarrollo y soporte de aplicaciones para TV, Android, web y backend en entornos Tizen, Android y web.',
      'Desarrollo de aplicaciones e interfaces empresariales utilizando Blazor, Razor Components, MudBlazor, C# y .NET, construyendo vistas dinámicas, reutilizables y orientadas a una experiencia de usuario consistente.',
      'Implementación y personalización de componentes con MudBlazor y desarrollo de Razor Components reutilizables, integrados con APIs REST y servicios backend desarrollados en .NET.',
      'Soporte de entornos cloud y operativos utilizando AWS, Azure, IIS y Windows Services, además de contribuir en desarrollo C++, documentación técnica y flujos de control de versiones con Git y Gogs.',
      'Apoyo a desarrolladores y miembros del equipo en la resolución de problemas técnicos y soporte de aplicaciones en múltiples plataformas y tecnologías.',
    ],
  },
  {
    title: 'Ingeniero de Software',
    company: 'Samsung Electronics - Samsung Research Tijuana (SRT)',
    period: 'abr. 2022 - may. 2023',
    bullets: [
      'Pruebas, soporte y contribución en aplicaciones de TV y Android para plataformas Tizen y Android, incluyendo lanzamientos de productos en los mercados de Estados Unidos y LATAM.',
      'Liderazgo de investigación de metadatos para una aplicación IoT y colaboración en el diseño e implementación de funcionalidades de metadatos.',
      'Desempeño como Technical Account Manager (TAM), recopilando requerimientos de socios, coordinando alcance y tiempos, apoyando lanzamientos y resolviendo problemas de implementación.',
      'Colaboración con socios, desarrolladores y equipos técnicos para identificar requerimientos, resolver incidencias y asegurar una entrega exitosa de aplicaciones.',
      'Trabajo con .NET/.NET Core, Entity Framework, LINQ, HTML5, CSS, Vue.js, MagicINFO, Knox y servicios de AWS, incluyendo EC2, RDS, Lambda, CloudWatch y API Gateway; apoyo en una migración de base de datos hacia Zoho CRM.',
    ],
  },
  {
    title: 'Desarrollador Backend',
    company: 'Mezcal Espina Negra',
    period: 'may. 2021 - abr. 2022',
    bullets: [
      'Desarrollo de aplicaciones web internas, servicios backend y APIs con C#, .NET, ASP.NET y JavaScript, incluyendo consultas y operaciones en SQL Server.',
      'Desarrollo y consumo de APIs REST, pruebas, validación de integraciones y depuración con Postman.',
      'Soporte de IIS, Windows Services, Bootstrap y Angular, además de resolución de incidencias backend y operativas.',
    ],
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Holazo Sports',
    period: 'ene. 2020 - jul. 2021',
    bullets: [
      'Desarrollo de aplicaciones web full stack con JavaScript, C#, Ruby on Rails y Tailwind CSS, incluyendo APIs REST y servicios backend.',
      'Administración de IIS, SQL y servidores para entornos productivos, incluyendo tareas de administración de bases de datos.',
      'Migraciones de datos, optimización de consultas y rendimiento, documentación técnica y validación de integraciones con Postman.',
    ],
  },
];

const consultingEs: SimpleConsulting[] = [
  {
    name: 'The Job Duck - Talent Community',
    duration: 'Duración: 1 año 4 meses',
    bullets: [
      'Desarrollo y evolución de Talent Community, participando en funcionalidades full stack, servicios backend, interfaces web, persistencia de datos e integración entre sistemas.',
      'Desarrollo de procesos serverless con Azure Functions y Azure Blob Storage para automatización, procesamiento asíncrono y sincronización de información.',
      'Participación en la migración de procesos desde una arquitectura monolítica hacia un enfoque orientado a eventos, desacoplando tareas y mejorando el procesamiento de información.',
      'Diseño e implementación de flujos de procesamiento de datos mediante IA, automatización de pipelines y optimización de modelos utilizados dentro del producto.',
      'Desarrollo de integraciones con Salesforce, Workday, APIs REST y servicios internos para intercambio y sincronización de información.',
      'Desarrollo de dashboards, consultas SQL, Stored Procedures y acceso a datos mediante Entity Framework, además de automatización de tareas y pipelines en Azure.',
    ],
  },
  {
    name: 'Legerity Services - Proyecto Squirell',
    duration: 'Duración: 6 meses',
    bullets: [
      'Mantenimiento y evolución de aplicaciones legacy, realizando soporte, resolución de incidencias e incorporación de nuevas funcionalidades y servicios.',
      'Desarrollo y modificación de servicios backend, consultas SQL y Stored Procedures, integrando nueva lógica sobre sistemas existentes.',
      'Implementación de procesos para recepción y procesamiento de archivos mediante APIs, clasificando la información recibida y almacenándola por usuario para su posterior consulta y consumo.',
      'Participación en despliegues, validaciones y liberaciones en ambientes de QA, Staging y Producción.',
      'Análisis de código y procesos existentes para incorporar nuevas funcionalidades manteniendo compatibilidad con aplicaciones y servicios legacy.',
    ],
  },
];

const jobsEn: SimpleJob[] = [
  {
    title: 'Full Stack Developer',
    company: 'APPWHERE / Scitum - TELMEX',
    period: 'Jun. 2024 - Present',
    bullets: [
      'Contributed to a cybersecurity platform for TELMEX, building dynamic views and modules with React, JavaScript, and TypeScript, including custom menu configuration, persistence, and backend integration.',
      'Built interactive web applications with Blazor, Razor Components, and MudBlazor using C# and .NET 8, creating reusable components and integrating REST APIs.',
      'Developed and resolved incidents in banking APIs and microservices supporting internal, external, and hybrid integrations in distributed environments.',
      'Validated API contracts, request/response models, headers, authentication tokens, authorization flows, error handling, and data persistence to keep integrations secure and reliable.',
      'Investigated complex issues using API traces, application logs, SQL queries, Postman tests, database validation, and root-cause analysis.',
      'Worked with REST and SOAP services, token-based authentication, API gateways, service-to-service integrations, SQL queries, stored procedures, Git, Azure DevOps, and CI/CD pipelines.',
      'Contributed to architecture improvements using Clean Architecture, SOLID, dependency injection, and design patterns, and supported developers through technical guidance, troubleshooting, code reviews, and solution design.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Upax Grupo Salinas',
    period: 'Jun. 2023 - Jun. 2024',
    bullets: [
      'Developed and supported TV, Android, web, and backend applications across Tizen, Android, and web environments.',
      'Built enterprise applications and interfaces with Blazor, Razor Components, MudBlazor, C#, and .NET, creating dynamic, reusable views focused on consistent UX.',
      'Implemented and customized MudBlazor components and reusable Razor Components integrated with REST APIs and .NET backend services.',
      'Supported cloud and operational environments using AWS, Azure, IIS, and Windows Services, and contributed to C++ development, technical documentation, and version control with Git and Gogs.',
      'Supported developers and teammates with technical troubleshooting and application support across multiple platforms and technologies.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Samsung Electronics - Samsung Research Tijuana (SRT)',
    period: 'Apr. 2022 - May 2023',
    bullets: [
      'Tested, supported, and contributed to TV and Android applications for Tizen and Android, including product launches in the United States and LATAM.',
      'Led metadata research for an IoT application and collaborated on the design and implementation of metadata features.',
      'Served as Technical Account Manager (TAM), gathering partner requirements, coordinating scope and timelines, supporting releases, and resolving implementation issues.',
      'Collaborated with partners, developers, and technical teams to identify requirements, resolve incidents, and deliver applications successfully.',
      'Worked with .NET/.NET Core, Entity Framework, LINQ, HTML5, CSS, Vue.js, MagicINFO, Knox, and AWS services including EC2, RDS, Lambda, CloudWatch, and API Gateway; supported a database migration to Zoho CRM.',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Mezcal Espina Negra',
    period: 'May 2021 - Apr. 2022',
    bullets: [
      'Developed internal web applications, backend services, and APIs with C#, .NET, ASP.NET, and JavaScript, including SQL Server queries and operations.',
      'Developed and consumed REST APIs, with testing, integration validation, and debugging in Postman.',
      'Supported IIS, Windows Services, Bootstrap, and Angular, and resolved backend and operational incidents.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Holazo Sports',
    period: 'Jan. 2020 - Jul. 2021',
    bullets: [
      'Developed full stack web applications with JavaScript, C#, Ruby on Rails, and Tailwind CSS, including REST APIs and backend services.',
      'Administered IIS, SQL, and servers for production environments, including database administration tasks.',
      'Handled data migrations, query and performance optimization, technical documentation, and integration validation with Postman.',
    ],
  },
];

const consultingEn: SimpleConsulting[] = [
  {
    name: 'The Job Duck - Talent Community',
    duration: 'Duration: 1 year 4 months',
    bullets: [
      'Developed and evolved Talent Community, contributing to full stack features, backend services, web interfaces, data persistence, and system integrations.',
      'Built serverless processes with Azure Functions and Azure Blob Storage for automation, asynchronous processing, and data synchronization.',
      'Helped migrate processes from a monolithic architecture toward an event-driven approach, decoupling tasks and improving information processing.',
      'Designed and implemented AI data-processing flows, pipeline automation, and optimization of models used in the product.',
      'Built integrations with Salesforce, Workday, REST APIs, and internal services for data exchange and synchronization.',
      'Developed dashboards, SQL queries, stored procedures, and Entity Framework data access, plus task automation and Azure pipelines.',
    ],
  },
  {
    name: 'Legerity Services - Squirell Project',
    duration: 'Duration: 6 months',
    bullets: [
      'Maintained and evolved legacy applications, including support, incident resolution, and delivery of new features and services.',
      'Developed and modified backend services, SQL queries, and stored procedures, adding new logic on top of existing systems.',
      'Implemented file intake and processing through APIs, classifying received information and storing it by user for later retrieval.',
      'Participated in deployments, validations, and releases across QA, Staging, and Production.',
      'Analyzed existing code and processes to add new functionality while keeping compatibility with legacy applications and services.',
    ],
  },
];

const jobsJa: SimpleJob[] = [
  {
    title: 'フルスタックエンジニア',
    company: 'APPWHERE / Scitum - TELMEX',
    period: '2024年6月 - 現在',
    bullets: [
      'TELMEX向けサイバーセキュリティプラットフォームの開発に参画。React、JavaScript、TypeScriptで動的な画面とモジュールを構築し、カスタムメニューの設定・保存とバックエンド連携を実装。',
      'Blazor、Razor Components、MudBlazor、C#、.NET 8でインタラクティブなWebアプリを開発し、再利用可能なコンポーネントとREST API連携を担当。',
      '分散環境における内部・外部・ハイブリッド連携を支える銀行APIおよびマイクロサービスの開発と障害対応。',
      'API契約、リクエスト/レスポンスモデル、ヘッダー、認証トークン、認可フロー、エラー処理、データ永続化を検証し、安全で信頼性の高い連携を維持。',
      'APIトレース、アプリログ、SQL、Postman、データベース検証、根本原因分析により複雑な問題を調査。',
      'REST/SOAP、トークン認証、APIゲートウェイ、サービス間連携、SQL、ストアドプロシージャ、Git、Azure DevOps、CI/CDに従事。',
      'Clean Architecture、SOLID、DI、デザインパターンによるアーキテクチャ改善に貢献し、技術支援、トラブルシュート、コードレビュー、ソリューション設計で開発者をサポート。',
    ],
  },
  {
    title: 'フルスタックエンジニア',
    company: 'Upax Grupo Salinas',
    period: '2023年6月 - 2024年6月',
    bullets: [
      'Tizen、Android、Web環境におけるTV、Android、Web、バックエンドアプリの開発とサポート。',
      'Blazor、Razor Components、MudBlazor、C#、.NETで業務アプリとUIを開発し、一貫したUXの動的・再利用可能な画面を構築。',
      'MudBlazorコンポーネントの実装・カスタマイズと、REST APIおよび.NETバックエンドと連携する再利用可能なRazor Componentsの開発。',
      'AWS、Azure、IIS、Windows Servicesによるクラウド/運用環境のサポートに加え、C++開発、技術文書、Git/Gogsによるバージョン管理に貢献。',
      '複数プラットフォーム・技術にわたる技術課題の解決とアプリサポートで開発チームを支援。',
    ],
  },
  {
    title: 'ソフトウェアエンジニア',
    company: 'Samsung Electronics - Samsung Research Tijuana (SRT)',
    period: '2022年4月 - 2023年5月',
    bullets: [
      'Tizen/Android向けTVおよびAndroidアプリのテスト、サポート、開発に貢献。米国およびLATAM向け製品リリースを含む。',
      'IoTアプリのメタデータ調査をリードし、メタデータ機能の設計・実装に協力。',
      'Technical Account Manager（TAM）としてパートナー要件の収集、範囲とスケジュールの調整、リリース支援、実装課題の解決を担当。',
      'パートナー、開発者、技術チームと連携し、要件整理、障害対応、アプリの確実な納品を推進。',
      '.NET/.NET Core、Entity Framework、LINQ、HTML5、CSS、Vue.js、MagicINFO、Knox、AWS（EC2、RDS、Lambda、CloudWatch、API Gateway）を使用。Zoho CRMへのデータベース移行を支援。',
    ],
  },
  {
    title: 'バックエンドエンジニア',
    company: 'Mezcal Espina Negra',
    period: '2021年5月 - 2022年4月',
    bullets: [
      'C#、.NET、ASP.NET、JavaScriptで社内Webアプリ、バックエンドサービス、APIを開発。SQL Serverのクエリと運用を含む。',
      'REST APIの開発・消費、テスト、連携検証、Postmanによるデバッグ。',
      'IIS、Windows Services、Bootstrap、Angularのサポート、およびバックエンド/運用障害の対応。',
    ],
  },
  {
    title: 'フルスタックエンジニア',
    company: 'Holazo Sports',
    period: '2020年1月 - 2021年7月',
    bullets: [
      'JavaScript、C#、Ruby on Rails、Tailwind CSSによるフルスタックWebアプリ開発。REST APIとバックエンドサービスを含む。',
      '本番環境向けのIIS、SQL、サーバー管理、およびデータベース管理業務。',
      'データ移行、クエリ/パフォーマンス最適化、技術文書、Postmanによる連携検証。',
    ],
  },
];

const consultingJa: SimpleConsulting[] = [
  {
    name: 'The Job Duck - Talent Community',
    duration: '期間: 1年4ヶ月',
    bullets: [
      'Talent Communityの開発と進化に参画。フルスタック機能、バックエンド、Web UI、データ永続化、システム間連携を担当。',
      'Azure FunctionsとAzure Blob Storageによるサーバーレス処理を開発し、自動化、非同期処理、情報同期を実現。',
      'モノリシック構成からイベント駆動への移行に参加し、処理の疎結合化と情報処理の改善を推進。',
      'AIによるデータ処理フローの設計・実装、パイプライン自動化、プロダクト内モデルの最適化。',
      'Salesforce、Workday、REST API、内部サービスとの連携を開発し、データの交換と同期を担当。',
      'ダッシュボード、SQL、ストアドプロシージャ、Entity Frameworkによるデータアクセス、Azureパイプラインとタスク自動化を開発。',
    ],
  },
  {
    name: 'Legerity Services - Squirellプロジェクト',
    duration: '期間: 6ヶ月',
    bullets: [
      'レガシーアプリの保守と進化。サポート、障害対応、新機能・サービスの追加を実施。',
      'バックエンドサービス、SQL、ストアドプロシージャの開発・改修により、既存システムへ新ロジックを統合。',
      'API経由のファイル受信・処理を実装し、情報を分類してユーザー単位で保存、後続参照に対応。',
      'QA、Staging、Productionでのデプロイ、検証、リリースに参加。',
      '既存コードとプロセスを分析し、レガシーアプリ/サービスとの互換性を維持しながら新機能を追加。',
    ],
  },
];

export const simpleCv: Record<'en' | 'es' | 'ja', SimpleCvCopy> = {
  es: {
    name: 'FELIPE CANSECO',
    role: 'Ingeniero de Software Senior',
    contactLine: 'Oaxaca, Mexico | +52 951 637 8642 | feli.canseco.95@gmail.com',
    portfolio: 'Portafolio',
    github: 'GitHub',
    cvWeb: 'CV Web',
    languagesLine:
      'Idiomas: Español - Nativo | Inglés - Competencia profesional (TOEFL ITP) | Japonés - N4 | Alemán - Competencia limitada',
    summaryTitle: 'RESUMEN PROFESIONAL',
    summary: [
      'Desarrollador de software senior con experiencia en desarrollo full stack, sistemas backend, APIs e integraciones distribuidas.',
      'Participación en diseño de soluciones, definición técnica de funcionalidades, integración entre servicios, análisis de incidencias y evolución de productos.',
      'Experiencia apoyando equipos de desarrollo mediante revisión técnica, resolución de problemas, delegación de trabajo y traducción de requerimientos funcionales a soluciones implementables.',
    ],
    experienceTitle: 'EXPERIENCIA PROFESIONAL',
    experienceContinued: 'EXPERIENCIA PROFESIONAL - CONTINUACIÓN',
    consultingTitle: 'CONSULTORÍA Y PROYECTOS DE SOFTWARE',
    consultingIntro:
      'Colaboración remota con clientes y equipos de Estados Unidos, participando en reuniones, análisis de requerimientos, documentación técnica y comunicación profesional en inglés.',
    skillsTitle: 'HABILIDADES TÉCNICAS',
    skills: [
      {
        label: 'Liderazgo técnico',
        value:
          'Mentoría y acompañamiento de desarrolladores, coordinación de trabajo técnico, delegación de tareas y proyectos, revisión de código, traducción de requerimientos de producto a soluciones técnicas y resolución de bloqueos',
      },
      {
        label: 'Arquitectura de software y patrones de diseño',
        value:
          'Clean Architecture, principios SOLID, inyección de dependencias, CQRS, Repository Pattern, Unit of Work, Factory Pattern, MVC, diseño modular, separación de responsabilidades, diseño de sistemas escalables y mantenibles',
      },
      {
        label: 'IA y soluciones inteligentes',
        value:
          'Integración de LLM, integración de modelos de IA, procesamiento basado en prompts, conversión de voz a texto, procesamiento de transcripciones, extracción de habilidades mediante IA, orquestación de modelos, APIs de IA, automatización inteligente, flujos de trabajo habilitados por IA',
      },
      {
        label: 'Nube, serverless y sistemas distribuidos',
        value:
          'Microsoft Azure, Azure Functions, AWS, EC2, RDS, Lambda, CloudWatch, API Gateway, procesamiento serverless, integraciones distribuidas, servicios backend escalables, observabilidad, resolución de problemas en producción',
      },
      {
        label: 'Backend y lenguajes de programación',
        value:
          'C#, .NET, .NET Core, ASP.NET, ASP.NET Core, Java, Spring Boot, Python, JavaScript, TypeScript, C++, Ruby, PHP, Entity Framework, EF Core, LINQ',
      },
      {
        label: 'APIs, integración y seguridad',
        value:
          'REST, SOAP, GraphQL, JWT, tokens Bearer, claves API, Swagger/OpenAPI, autenticación y autorización, validación de contratos, comunicación servicio a servicio, integraciones híbridas, Postman, Apigee, MuleSoft',
      },
      {
        label: 'DevOps, pruebas y observabilidad',
        value:
          'Azure DevOps, Git, CI/CD, Docker, IIS, Windows Services, Gogs, pruebas unitarias, pruebas de integración, logging, telemetría, monitoreo de aplicaciones',
      },
      {
        label: 'Bases de datos y datos',
        value:
          'SQL Server, MySQL, procedimientos almacenados, migraciones de bases de datos, optimización de consultas, ajuste de rendimiento',
      },
      {
        label: 'Frontend y frameworks',
        value:
          'React, Blazor, Razor Components, MudBlazor, Vue.js, Angular, HTML5, CSS, Bootstrap, Tailwind CSS, Telerik UI',
      },
    ],
    certificationsTitle: 'CERTIFICACIONES',
    certificationName: 'Claude Certified Architect - Foundations',
    certificationIssuer: 'Anthropic',
    certificationDates: 'Expedición: ago. 2026 · Vencimiento: ago. 2027',
    certificationId: 'ID de la credencial: cb87fb03-322e-4ee3-974c-297075f43d14',
    educationTitle: 'EDUCACIÓN',
    education: [
      {
        degree: 'Ingeniería en Sistemas Computacionales',
        school: 'Tecnológico Nacional de México, Campus Oaxaca',
        year: '2022',
      },
      {
        degree: 'Diplomado Técnico en Diseño Gráfico',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
      {
        degree: 'Técnico en Informática',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
    ],
    jobs: jobsEs,
    consulting: consultingEs,
  },
  en: {
    name: 'FELIPE CANSECO',
    role: 'Senior Software Engineer',
    contactLine: 'Oaxaca, Mexico | +52 951 637 8642 | feli.canseco.95@gmail.com',
    portfolio: 'Portfolio',
    github: 'GitHub',
    cvWeb: 'CV Web',
    languagesLine:
      'Languages: Spanish - Native | English - Professional proficiency (TOEFL ITP) | Japanese - N4 | German - Limited proficiency',
    summaryTitle: 'PROFESSIONAL SUMMARY',
    summary: [
      'Senior software engineer with experience in full stack development, backend systems, APIs, and distributed integrations.',
      'Involved in solution design, technical definition of features, service-to-service integration, incident analysis, and product evolution.',
      'Experience supporting development teams through technical reviews, troubleshooting, work delegation, and translating functional requirements into implementable solutions.',
    ],
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    experienceContinued: 'PROFESSIONAL EXPERIENCE - CONTINUED',
    consultingTitle: 'CONSULTING AND SOFTWARE PROJECTS',
    consultingIntro:
      'Remote collaboration with clients and teams in the United States, including meetings, requirements analysis, technical documentation, and professional communication in English.',
    skillsTitle: 'TECHNICAL SKILLS',
    skills: [
      {
        label: 'Technical leadership',
        value:
          'Mentoring developers, coordinating technical work, delegating tasks and projects, code review, translating product requirements into technical solutions, and unblocking teams',
      },
      {
        label: 'Software architecture and design patterns',
        value:
          'Clean Architecture, SOLID, dependency injection, CQRS, Repository Pattern, Unit of Work, Factory Pattern, MVC, modular design, separation of concerns, scalable and maintainable system design',
      },
      {
        label: 'AI and intelligent solutions',
        value:
          'LLM integration, AI model integration, prompt-based processing, speech-to-text, transcription processing, AI skill extraction, model orchestration, AI APIs, intelligent automation, AI-enabled workflows',
      },
      {
        label: 'Cloud, serverless, and distributed systems',
        value:
          'Microsoft Azure, Azure Functions, AWS, EC2, RDS, Lambda, CloudWatch, API Gateway, serverless processing, distributed integrations, scalable backend services, observability, production troubleshooting',
      },
      {
        label: 'Backend and programming languages',
        value:
          'C#, .NET, .NET Core, ASP.NET, ASP.NET Core, Java, Spring Boot, Python, JavaScript, TypeScript, C++, Ruby, PHP, Entity Framework, EF Core, LINQ',
      },
      {
        label: 'APIs, integration, and security',
        value:
          'REST, SOAP, GraphQL, JWT, Bearer tokens, API keys, Swagger/OpenAPI, authentication and authorization, contract validation, service-to-service communication, hybrid integrations, Postman, Apigee, MuleSoft',
      },
      {
        label: 'DevOps, testing, and observability',
        value:
          'Azure DevOps, Git, CI/CD, Docker, IIS, Windows Services, Gogs, unit testing, integration testing, logging, telemetry, application monitoring',
      },
      {
        label: 'Databases and data',
        value:
          'SQL Server, MySQL, stored procedures, database migrations, query optimization, performance tuning',
      },
      {
        label: 'Frontend and frameworks',
        value:
          'React, Blazor, Razor Components, MudBlazor, Vue.js, Angular, HTML5, CSS, Bootstrap, Tailwind CSS, Telerik UI',
      },
    ],
    certificationsTitle: 'CERTIFICATIONS',
    certificationName: 'Claude Certified Architect - Foundations',
    certificationIssuer: 'Anthropic',
    certificationDates: 'Issued: Aug 2026 · Expires: Aug 2027',
    certificationId: 'Credential ID: cb87fb03-322e-4ee3-974c-297075f43d14',
    educationTitle: 'EDUCATION',
    education: [
      {
        degree: 'Computer Systems Engineering',
        school: 'Tecnológico Nacional de México, Campus Oaxaca',
        year: '2022',
      },
      {
        degree: 'Technical Diploma in Graphic Design',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
      {
        degree: 'IT Technician',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
    ],
    jobs: jobsEn,
    consulting: consultingEn,
  },
  ja: {
    name: 'FELIPE CANSECO',
    role: 'シニアソフトウェアエンジニア',
    contactLine: 'メキシコ・オアハカ | +52 951 637 8642 | feli.canseco.95@gmail.com',
    portfolio: 'ポートフォリオ',
    github: 'GitHub',
    cvWeb: 'CV Web',
    languagesLine:
      '言語: スペイン語 - ネイティブ | 英語 - 実務レベル（TOEFL ITP） | 日本語 - N4 | ドイツ語 - 初級',
    summaryTitle: '職務要約',
    summary: [
      'フルスタック開発、バックエンドシステム、API、分散インテグレーションの経験を持つシニアソフトウェアエンジニアです。',
      'ソリューション設計、機能の技術定義、サービス間連携、インシデント分析、プロダクトの進化に携わってきました。',
      'テクニカルレビュー、トラブルシューティング、作業の委任、機能要件の実装可能なソリューションへの落とし込みを通じて、開発チームを支援してきた経験があります。',
    ],
    experienceTitle: '職務経歴',
    experienceContinued: '職務経歴（続き）',
    consultingTitle: 'コンサルティングおよびソフトウェアプロジェクト',
    consultingIntro:
      '米国のクライアントおよびチームとのリモート協業。会議、要件分析、技術文書、英語での実務コミュニケーションを含む。',
    skillsTitle: '技術スキル',
    skills: [
      {
        label: 'テクニカルリーダーシップ',
        value:
          '開発者のメンタリング、技術作業の調整、タスク/プロジェクトの委任、コードレビュー、プロダクト要件の技術ソリューションへの翻訳、ブロッカー解消',
      },
      {
        label: 'ソフトウェアアーキテクチャとデザインパターン',
        value:
          'Clean Architecture、SOLID、DI、CQRS、Repository Pattern、Unit of Work、Factory Pattern、MVC、モジュール設計、責務分離、スケーラブルで保守しやすいシステム設計',
      },
      {
        label: 'AIとインテリジェントソリューション',
        value:
          'LLM連携、AIモデル統合、プロンプト処理、音声テキスト化、文字起こし処理、AIによるスキル抽出、モデルオーケストレーション、AI API、インテリジェント自動化、AI活用ワークフロー',
      },
      {
        label: 'クラウド、サーバーレス、分散システム',
        value:
          'Microsoft Azure、Azure Functions、AWS、EC2、RDS、Lambda、CloudWatch、API Gateway、サーバーレス処理、分散インテグレーション、スケーラブルなバックエンド、オブザーバビリティ、本番障害対応',
      },
      {
        label: 'バックエンドとプログラミング言語',
        value:
          'C#、.NET、.NET Core、ASP.NET、ASP.NET Core、Java、Spring Boot、Python、JavaScript、TypeScript、C++、Ruby、PHP、Entity Framework、EF Core、LINQ',
      },
      {
        label: 'API、インテグレーション、セキュリティ',
        value:
          'REST、SOAP、GraphQL、JWT、Bearerトークン、APIキー、Swagger/OpenAPI、認証/認可、契約検証、サービス間通信、ハイブリッド連携、Postman、Apigee、MuleSoft',
      },
      {
        label: 'DevOps、テスト、オブザーバビリティ',
        value:
          'Azure DevOps、Git、CI/CD、Docker、IIS、Windows Services、Gogs、単体テスト、結合テスト、ログ、テレメトリ、アプリ監視',
      },
      {
        label: 'データベースとデータ',
        value:
          'SQL Server、MySQL、ストアドプロシージャ、データベース移行、クエリ最適化、パフォーマンス調整',
      },
      {
        label: 'フロントエンドとフレームワーク',
        value:
          'React、Blazor、Razor Components、MudBlazor、Vue.js、Angular、HTML5、CSS、Bootstrap、Tailwind CSS、Telerik UI',
      },
    ],
    certificationsTitle: '資格・認定',
    certificationName: 'Claude Certified Architect - Foundations',
    certificationIssuer: 'Anthropic',
    certificationDates: '発行: 2026年8月 · 有効期限: 2027年8月',
    certificationId: '認定ID: cb87fb03-322e-4ee3-974c-297075f43d14',
    educationTitle: '学歴',
    education: [
      {
        degree: 'コンピュータシステム工学',
        school: 'Tecnológico Nacional de México, Campus Oaxaca',
        year: '2022',
      },
      {
        degree: 'グラフィックデザイン技術ディプロマ',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
      {
        degree: 'IT技術者',
        school: 'Computación del Golfo Oaxaca',
        year: '2015',
      },
    ],
    jobs: jobsJa,
    consulting: consultingJa,
  },
};
