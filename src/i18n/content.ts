export type ExperienceProject = {
  name: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period?: string;
  periodLabel?: string;
  subtitle?: string;
  description?: string;
  projects?: ExperienceProject[];
  variant?: 'consultant';
};

export type MainProject = {
  title: string;
  company: string;
  description: string;
  impact: string;
  tech: string;
};

const experienceEn: ExperienceItem[] = [
  {
    title: 'Software Engineering Consultant / Full Stack .NET',
    company: 'The Job Duck — Talent Community',
    period: '1 year - 4 months',
    periodLabel: 'Project duration: 1 year 4 months',
    subtitle: 'Consulting engagement · United States',
    variant: 'consultant',
    description: `
• Development and evolution of Talent Community, contributing to full stack functionality, backend services, web interfaces, data persistence, and system integrations.
• Development of serverless processes using Azure Functions and Azure Blob Storage for automation, asynchronous processing, and information synchronization.
• Participation in the migration of processes from a monolithic architecture toward an event-driven approach, decoupling processing tasks and improving asynchronous workflows.
• Design and implementation of AI-based data processing flows, including automated pipelines and optimization of AI models used within the product.
• Development of integrations with Salesforce, Workday, REST APIs, and internal services for data exchange and synchronization.
• Development of dashboards, SQL queries, Stored Procedures, Entity Framework data access, Azure pipelines, and task automation.
      `,
  },
  {
    title: 'Software Engineering Consultant / Full Stack .NET',
    company: 'Legerity Services — Squirell',
    period: '6 months',
    periodLabel: 'Project duration: 6 months',
    subtitle: 'Consulting engagement · United States',
    variant: 'consultant',
    description: `
• Maintenance and evolution of legacy applications, including production support, issue resolution, and implementation of new functionality and services.
• Development and modification of backend services, SQL queries, and Stored Procedures while integrating new functionality into existing systems.
• Implementation of file-processing workflows in which files were received through APIs, classified, processed, and stored by user for later retrieval and consumption.
• Participation in deployments, validations, and releases across QA, Staging, and Production environments.
• Analysis of legacy code and existing processes to introduce new functionality while maintaining compatibility with existing applications and services.
      `,
  },
  {
    title: 'Full Stack Developer',
    company: 'AppWhere',
    period: '06/2024 - Currently',
    subtitle: 'Client projects',
    projects: [
      {
        name: 'Coppel',
        description: `
• Frontend and backend development for Coppel client applications.
• Creation and maintenance of user interfaces using HTML5, CSS, Bootstrap, and React.
• Development of web applications with .NET, Entity Framework, and LINQ.
• Consumption and development of REST APIs using JavaScript and .NET.
• Database management with SQL, including query design and maintenance of relational structures.
• Testing and debugging applications using tools like Postman and unit/integration testing frameworks.
• Version control using Git for branch management, conflict resolution, and team collaboration.
• Development and customization of UI components using Telerik UI to enhance user experience.
• Implementation of software architectures such as Factory.
          `,
      },
      {
        name: 'Scitum / TELMEX',
        description: `
• Participated in the development of a cybersecurity platform for TELMEX, creating dynamic views and modules with React, JavaScript, and TypeScript, including functionality to configure and persist custom menus and integrate them with backend services.
• Developed interactive web applications using Blazor, Razor Components, and MudBlazor with C# and .NET 8, building reusable components and integrating REST APIs.
• Developed and resolved incidents in banking APIs and microservices supporting internal, external, and hybrid integrations in distributed environments.
• Validated API contracts, request/response models, headers, authentication tokens, authorization flows, error handling, and data persistence to ensure secure and reliable integrations.
• Investigated complex issues using API traces, application logs, SQL queries, Postman testing, database validation, and root-cause analysis.
• Worked with REST and SOAP services, token-based authentication, API gateways, service-to-service integrations, SQL queries, stored procedures, Git, Azure DevOps, and CI/CD pipelines.
• Contributed to architecture improvements using Clean Architecture, SOLID principles, dependency injection, and design patterns, while supporting developers through technical guidance, troubleshooting, and code reviews.
          `,
      },
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Upax Grupo Salinas',
    period: '06/2023 - 06/2024',
    description: `
• Development and Technical Support.
• Experience in testing and developing TV and Android applications (Tizen, Android).
• App code modification (Front).
• Project documentation.
• Version control tools like Git and Gogs for efficient code management and collaboration.
• Experience with HTML5, CSS, and Vue.js in application development.
• .NET, .NET Core, Entity Framework, and LINQ for development.
• Experience with AWS services.
• Windows Services Experience.
• IIS.
• API Experience consuming and developing, using JavaScript (JS), (TS) and ASP.
• C++ development.
      `,
  },
  {
    title: 'Software Engineer',
    company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
    period: '04/2022 - 05/2023',
    description: `
• Testing and development for TV and Android applications (Tizen, Android).
• Led Metadata research for an IoT application, collaborating on the development and implementation of metadata functionality.
• TAM (Technical Account Manager): Gathering partner requirements (scope, timeline, etc.) Managing timely releases and providing technical support during implementation.
• Support for launching US and LATAM applications for new products.
• App code modification.
• Project documentation.
• Version control tools like Git and Gogs.
• Software Management: Magic Info and Knox for real-time screen monitoring, updating, modifying, and deploying applications.
• HTML5, CSS, and Vue.js.
• .NET, .NET Core, Entity Framework, LINQ.
• AWS services (EC2, RDS, Lambda, CloudWatch, API Gateway), including database migration to Zoho CRM.
      `,
  },
  {
    title: 'Backend Developer',
    company: 'Mezcal Espina Negra',
    period: '05/2021 - 04/2022',
    description: `
• .NET 5, C#, HTML5, Bootstrap.
• SQL Database Management.
• Server and Database Administration.
• Windows Services Experience.
• IIS.
• API Experience consuming and developing using JavaScript (JS) and ASP.
• Postman for API development, testing, and debugging.
      `,
  },
  {
    title: 'Full Stack Developer',
    company: 'Holazo Sports',
    period: '01/2020 - 07/2021',
    description: `
• JavaScript (JS), C#, Tailwind CSS, Ruby on Rails.
• IIS.
• SQL Database Management.
• Server and Database Administration.
• Postman for API development, testing, and debugging.
• Web System Development.
• Database Management (Data Migration, Performance Optimization, Documentation).
      `,
  },
];

const experienceEs: ExperienceItem[] = [
  {
    title: 'Consultor de Ingeniería de Software / Full Stack .NET',
    company: 'The Job Duck — Talent Community',
    period: '1 año - 4 meses',
    periodLabel: 'Duración del proyecto: 1 año 4 meses',
    subtitle: 'Colaboración de consultoría · Estados Unidos',
    variant: 'consultant',
    description: `
• Desarrollo y evolución de Talent Community, contribuyendo en funcionalidad full stack, servicios backend, interfaces web, persistencia de datos e integraciones.
• Desarrollo de procesos serverless utilizando Azure Functions y Azure Blob Storage para automatización, procesamiento asíncrono y sincronización de información.
• Participación en la migración de procesos de una arquitectura monolítica hacia un enfoque event-driven, desacoplando tareas de procesamiento y mejorando flujos asíncronos.
• Diseño e implementación de flujos de procesamiento de datos con IA, incluyendo pipelines automatizados y optimización de modelos de IA utilizados en el producto.
• Desarrollo de integraciones con Salesforce, Workday, APIs REST y servicios internos para intercambio y sincronización de datos.
• Desarrollo de dashboards, consultas SQL, Stored Procedures, acceso a datos con Entity Framework, pipelines de Azure y automatización de tareas.
      `,
  },
  {
    title: 'Consultor de Ingeniería de Software / Full Stack .NET',
    company: 'Legerity Services — Squirell',
    period: '6 meses',
    periodLabel: 'Duración del proyecto: 6 meses',
    subtitle: 'Colaboración de consultoría · Estados Unidos',
    variant: 'consultant',
    description: `
• Mantenimiento y evolución de aplicaciones legacy, incluyendo soporte en producción, resolución de incidencias e implementación de nueva funcionalidad y servicios.
• Desarrollo y modificación de servicios backend, consultas SQL y Stored Procedures, integrando nueva funcionalidad en sistemas existentes.
• Implementación de flujos de procesamiento de archivos en los que los archivos se recibían a través de APIs, se clasificaban, procesaban y almacenaban por usuario para su posterior consulta y consumo.
• Participación en despliegues, validaciones y liberaciones en ambientes de QA, Staging y Producción.
• Análisis de código legado y procesos existentes para introducir nueva funcionalidad manteniendo compatibilidad con las aplicaciones y servicios actuales.
      `,
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'AppWhere',
    period: '06/2024 - Actualmente',
    subtitle: 'Proyectos de cliente',
    projects: [
      {
        name: 'Coppel',
        description: `
• Desarrollo frontend y backend para aplicaciones del cliente Coppel.
• Creación y mantenimiento de interfaces de usuario con HTML5, CSS, Bootstrap y React.
• Desarrollo de aplicaciones web con .NET, Entity Framework y LINQ.
• Consumo y desarrollo de APIs REST usando JavaScript y .NET.
• Administración de bases de datos SQL, incluyendo diseño de consultas y mantenimiento de estructuras relacionales.
• Pruebas y depuración de aplicaciones con herramientas como Postman y frameworks de pruebas unitarias/de integración.
• Control de versiones con Git para gestión de ramas, resolución de conflictos y colaboración en equipo.
• Desarrollo y personalización de componentes de UI con Telerik UI para mejorar la experiencia de usuario.
• Implementación de arquitecturas de software como Factory.
          `,
      },
      {
        name: 'Scitum / TELMEX',
        description: `
• Participé en el desarrollo de una plataforma de ciberseguridad para TELMEX, creando vistas y módulos dinámicos con React, JavaScript y TypeScript, incluyendo funcionalidad para configurar y persistir menús personalizados e integrarlos con servicios backend.
• Desarrollé aplicaciones web interactivas utilizando Blazor, Razor Components y MudBlazor con C# y .NET 8, construyendo componentes reutilizables e integrando APIs REST.
• Desarrollé y resolví incidencias en APIs bancarias y microservicios que soportaban integraciones internas, externas e híbridas en ambientes distribuidos.
• Validé contratos de APIs, modelos request/response, headers, tokens de autenticación, flujos de autorización, manejo de errores y persistencia de datos para asegurar integraciones seguras y confiables.
• Investigué problemas complejos utilizando traces de APIs, logs de aplicación, consultas SQL, pruebas con Postman, validación en base de datos y análisis de causa raíz.
• Trabajé con servicios REST y SOAP, autenticación basada en tokens, API gateways, integraciones servicio a servicio, consultas SQL, stored procedures, Git, Azure DevOps y pipelines de CI/CD.
• Contribuí a mejoras de arquitectura utilizando Clean Architecture, principios SOLID, inyección de dependencias y patrones de diseño, apoyando a desarrolladores mediante guía técnica, troubleshooting y code reviews.
          `,
      },
    ],
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Upax Grupo Salinas',
    period: '06/2023 - 06/2024',
    description: `
• Desarrollo y soporte técnico.
• Experiencia en pruebas y desarrollo de aplicaciones para TV y Android (Tizen, Android).
• Modificación de código de la aplicación (Front).
• Documentación de proyectos.
• Herramientas de control de versiones como Git y Gogs para gestión eficiente del código y colaboración.
• Experiencia con HTML5, CSS y Vue.js en el desarrollo de aplicaciones.
• .NET, .NET Core, Entity Framework y LINQ para desarrollo.
• Experiencia con servicios de AWS.
• Experiencia con Windows Services.
• IIS.
• Experiencia consumiendo y desarrollando APIs, usando JavaScript (JS), TypeScript (TS) y ASP.
• Desarrollo en C++.
      `,
  },
  {
    title: 'Ingeniero de Software',
    company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
    period: '04/2022 - 05/2023',
    description: `
• Pruebas y desarrollo de aplicaciones para TV y Android (Tizen, Android).
• Lideré la investigación de metadatos para una aplicación IoT, colaborando en el desarrollo e implementación de esa funcionalidad.
• TAM (Technical Account Manager): levantamiento de requerimientos con partners (alcance, tiempos, etc.), gestión de liberaciones a tiempo y soporte técnico durante la implementación.
• Soporte para el lanzamiento de aplicaciones en EE. UU. y LATAM para nuevos productos.
• Modificación de código de aplicaciones.
• Documentación de proyectos.
• Herramientas de control de versiones como Git y Gogs.
• Software Management: Magic Info y Knox para monitoreo de pantallas en tiempo real, actualización, modificación y despliegue de aplicaciones.
• HTML5, CSS y Vue.js.
• .NET, .NET Core, Entity Framework, LINQ.
• Servicios de AWS (EC2, RDS, Lambda, CloudWatch, API Gateway), incluyendo migración de bases de datos a Zoho CRM.
      `,
  },
  {
    title: 'Desarrollador Backend',
    company: 'Mezcal Espina Negra',
    period: '05/2021 - 04/2022',
    description: `
• .NET 5, C#, HTML5, Bootstrap.
• Administración de bases de datos SQL.
• Administración de servidores y bases de datos.
• Experiencia con Windows Services.
• IIS.
• Experiencia consumiendo y desarrollando APIs con JavaScript (JS) y ASP.
• Postman para desarrollo, pruebas y depuración de APIs.
      `,
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Holazo Sports',
    period: '01/2020 - 07/2021',
    description: `
• JavaScript (JS), C#, Tailwind CSS, Ruby on Rails.
• IIS.
• Administración de bases de datos SQL.
• Administración de servidores y bases de datos.
• Postman para desarrollo, pruebas y depuración de APIs.
• Desarrollo de sistemas web.
• Gestión de bases de datos (migración de datos, optimización de rendimiento, documentación).
      `,
  },
];

const mainProjectsEn: MainProject[] = [
  {
    title: 'AI Interview Processing Platform',
    company: 'AI Interview Platform',
    description: `
• Architected and implemented a distributed AI-driven media processing system using Azure Functions, event-driven workflows, and cloud-native services.
• Designed scalable transcription and media automation pipelines ensuring reliability and high-throughput processing.
      `,
    impact: `
• Reduced processing latency, improved system scalability, and enabled automated AI transcription workflows for production environments.
      `,
    tech: `Tech: .NET • Azure Functions • Event-driven Architecture • Blob Storage • Microservices`,
  },
  {
    title: 'Microservices & Cloud Architecture',
    company: 'Cloud Platform',
    description: `
• Designed and implemented distributed backend architecture using containerized microservices, domain-driven design (DDD), and scalable REST/GraphQL APIs.
• Focused on system modularity, performance, and cloud-native deployment strategies.
      `,
    impact: `
• Improved maintainability, scalability, and service isolation enabling reliable deployments and CI/CD automation.
      `,
    tech: `Tech: .NET • Docker • Microservices • GraphQL • CI/CD • Cloud Architecture`,
  },
  {
    title: 'Real-time Media & Transcription System',
    company: 'Media Pipelines',
    description: `
• Engineered real-time media processing pipelines integrating AI-based speech recognition and automated transcription workflows.
• Designed asynchronous processing and background job orchestration for high-performance media handling.
      `,
    impact: `
• Enabled real-time AI transcription and automated workflows improving operational efficiency and processing throughput.
      `,
    tech: `Tech: Whisper AI • Media Processing • Async Pipelines • Automation • Cloud Systems`,
  },
];

const mainProjectsEs: MainProject[] = [
  {
    title: 'Plataforma de procesamiento de entrevistas con IA',
    company: 'AI Interview Platform',
    description: `
• Arquitecté e implementé un sistema distribuido de procesamiento de medios impulsado por IA usando Azure Functions, flujos event-driven y servicios nativos en la nube.
• Diseñé pipelines escalables de transcripción y automatización de medios, asegurando confiabilidad y alto rendimiento.
      `,
    impact: `
• Reduje la latencia de procesamiento, mejoré la escalabilidad del sistema y habilité flujos automatizados de transcripción con IA en ambientes de producción.
      `,
    tech: `Tech: .NET • Azure Functions • Event-driven Architecture • Blob Storage • Microservices`,
  },
  {
    title: 'Microservicios y arquitectura en la nube',
    company: 'Cloud Platform',
    description: `
• Diseñé e implementé arquitectura backend distribuida usando microservicios containerizados, domain-driven design (DDD) y APIs REST/GraphQL escalables.
• Enfoque en modularidad del sistema, rendimiento y estrategias de despliegue nativas en la nube.
      `,
    impact: `
• Mejoré mantenibilidad, escalabilidad y aislamiento de servicios, habilitando despliegues confiables y automatización CI/CD.
      `,
    tech: `Tech: .NET • Docker • Microservices • GraphQL • CI/CD • Cloud Architecture`,
  },
  {
    title: 'Sistema de medios y transcripción en tiempo real',
    company: 'Media Pipelines',
    description: `
• Desarrollé pipelines de procesamiento de medios en tiempo real integrando reconocimiento de voz con IA y flujos automatizados de transcripción.
• Diseñé procesamiento asíncrono y orquestación de jobs en segundo plano para un manejo de medios de alto rendimiento.
      `,
    impact: `
• Habilité transcripción con IA en tiempo real y flujos automatizados, mejorando la eficiencia operativa y el throughput de procesamiento.
      `,
    tech: `Tech: Whisper AI • Media Processing • Async Pipelines • Automation • Cloud Systems`,
  },
];

const experienceJa: ExperienceItem[] = [
  {
    title: 'ソフトウェアエンジニアリングコンサルタント / フルスタック .NET',
    company: 'The Job Duck — Talent Community',
    period: '1年 - 4ヶ月',
    periodLabel: 'プロジェクト期間: 1年4ヶ月',
    subtitle: 'コンサルティング契約 · アメリカ合衆国',
    variant: 'consultant',
    description: `
• Talent Communityの開発・改善に従事し、フルスタック機能、バックエンドサービス、Webインターフェース、データ永続化、システム連携を担当。
• Azure FunctionsおよびAzure Blob Storageを用いたサーバーレス処理の開発。自動化、非同期処理、情報同期を実現。
• モノリシックアーキテクチャからイベント駆動への移行に参加し、処理タスクの疎結合化と非同期ワークフローの改善を実施。
• AIベースのデータ処理フローの設計・実装。自動パイプラインとプロダクト内AIモデルの最適化を含む。
• Salesforce、Workday、REST API、社内サービスとの連携開発。
• ダッシュボード、SQLクエリ、ストアドプロシージャ、Entity Framework、Azureパイプライン、タスク自動化の開発。
      `,
  },
  {
    title: 'ソフトウェアエンジニアリングコンサルタント / フルスタック .NET',
    company: 'Legerity Services — Squirell',
    period: '6ヶ月',
    periodLabel: 'プロジェクト期間: 6ヶ月',
    subtitle: 'コンサルティング契約 · アメリカ合衆国',
    variant: 'consultant',
    description: `
• レガシーアプリケーションの保守・改善。本番サポート、障害対応、新機能・サービスの実装。
• バックエンドサービス、SQLクエリ、ストアドプロシージャの開発・改修。既存システムへの新機能統合。
• API経由で受信したファイルを分類・処理し、ユーザー単位で保存して後から参照できるファイル処理ワークフローの実装。
• QA、Staging、本番環境でのデプロイ、検証、リリースに参加。
• レガシーコードと既存プロセスを分析し、互換性を維持しながら新機能を導入。
      `,
  },
  {
    title: 'フルスタックエンジニア',
    company: 'AppWhere',
    period: '06/2024 - 現在',
    subtitle: 'クライアントプロジェクト',
    projects: [
      {
        name: 'Coppel',
        description: `
• クライアント Coppel 向けアプリケーションのフロントエンドおよびバックエンド開発。
• HTML5、CSS、Bootstrap、React を用いたユーザーインターフェースの作成・保守。
• .NET、Entity Framework、LINQ による Web アプリケーション開発。
• JavaScript と .NET を用いた REST API の利用および開発。
• SQL によるデータベース管理。クエリ設計とリレーショナル構造の保守。
• Postman や単体・結合テストフレームワークを用いたテストおよびデバッグ。
• Git によるバージョン管理。ブランチ運用、コンフリクト解消、チーム連携。
• Telerik UI を用いた UI コンポーネントの開発・カスタマイズ。
• Factory などのソフトウェアアーキテクチャの実装。
          `,
      },
      {
        name: 'Scitum / TELMEX',
        description: `
• TELMEX 向けサイバーセキュリティプラットフォームの開発に参加。React、JavaScript、TypeScript で動的な画面とモジュールを構築し、カスタムメニューの設定・永続化とバックエンド連携を実装。
• C# と .NET 8 を用いた Blazor、Razor Components、MudBlazor によるインタラクティブな Web アプリケーション開発。再利用可能なコンポーネントの構築と REST API 連携。
• 分散環境における内部・外部・ハイブリッド連携を支える銀行系 API およびマイクロサービスの開発と障害対応。
• API 契約、リクエスト/レスポンスモデル、ヘッダー、認証トークン、認可フロー、エラー処理、データ永続化を検証し、安全で信頼性の高い連携を確保。
• API トレース、アプリケーションログ、SQL クエリ、Postman、データベース検証、根本原因分析を用いた複雑な問題の調査。
• REST / SOAP、トークン認証、API ゲートウェイ、サービス間連携、SQL、ストアドプロシージャ、Git、Azure DevOps、CI/CD パイプラインを活用。
• Clean Architecture、SOLID、依存性注入、デザインパターンによるアーキテクチャ改善に貢献。技術指導、トラブルシューティング、コードレビューで開発者を支援。
          `,
      },
    ],
  },
  {
    title: 'フルスタックエンジニア',
    company: 'Upax Grupo Salinas',
    period: '06/2023 - 06/2024',
    description: `
• 開発およびテクニカルサポート。
• TV および Android アプリケーション（Tizen、Android）のテスト・開発経験。
• アプリケーションコードの改修（フロントエンド）。
• プロジェクトドキュメント作成。
• Git および Gogs によるバージョン管理とチーム連携。
• HTML5、CSS、Vue.js を用いたアプリケーション開発。
• .NET、.NET Core、Entity Framework、LINQ による開発。
• AWS サービス経験。
• Windows Services の経験。
• IIS。
• JavaScript（JS）、TypeScript（TS）、ASP を用いた API の利用および開発。
• C++ 開発。
      `,
  },
  {
    title: 'ソフトウェアエンジニア',
    company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
    period: '04/2022 - 05/2023',
    description: `
• TV および Android アプリケーション（Tizen、Android）のテスト・開発。
• IoT アプリケーション向けメタデータ調査をリードし、機能の開発・実装に協力。
• TAM（テクニカルアカウントマネージャー）: パートナー要件の収集（範囲、スケジュール等）、タイムリーなリリース管理、実装時の技術サポート。
• 新製品向け US / LATAM アプリケーションのローンチ支援。
• アプリケーションコードの改修。
• プロジェクトドキュメント作成。
• Git および Gogs によるバージョン管理。
• Software Management: Magic Info および Knox による画面のリアルタイム監視、更新、改修、アプリケーション展開。
• HTML5、CSS、Vue.js。
• .NET、.NET Core、Entity Framework、LINQ。
• AWS サービス（EC2、RDS、Lambda、CloudWatch、API Gateway）。Zoho CRM へのデータベース移行を含む。
      `,
  },
  {
    title: 'バックエンドエンジニア',
    company: 'Mezcal Espina Negra',
    period: '05/2021 - 04/2022',
    description: `
• .NET 5、C#、HTML5、Bootstrap。
• SQL データベース管理。
• サーバーおよびデータベース管理。
• Windows Services の経験。
• IIS。
• JavaScript（JS）および ASP を用いた API の利用および開発。
• Postman による API 開発、テスト、デバッグ。
      `,
  },
  {
    title: 'フルスタックエンジニア',
    company: 'Holazo Sports',
    period: '01/2020 - 07/2021',
    description: `
• JavaScript（JS）、C#、Tailwind CSS、Ruby on Rails。
• IIS。
• SQL データベース管理。
• サーバーおよびデータベース管理。
• Postman による API 開発、テスト、デバッグ。
• Web システム開発。
• データベース管理（データ移行、パフォーマンス最適化、ドキュメント作成）。
      `,
  },
];

const mainProjectsJa: MainProject[] = [
  {
    title: 'AI面接処理プラットフォーム',
    company: 'AI Interview Platform',
    description: `
• Azure Functions、イベント駆動ワークフロー、クラウドネイティブサービスを用いた分散型 AI メディア処理システムを設計・実装。
• 信頼性と高スループットを確保する、スケーラブルな文字起こしおよびメディア自動化パイプラインを設計。
      `,
    impact: `
• 処理レイテンシを削減し、システムのスケーラビリティを向上。本番環境向けの自動 AI 文字起こしワークフローを実現。
      `,
    tech: `Tech: .NET • Azure Functions • Event-driven Architecture • Blob Storage • Microservices`,
  },
  {
    title: 'マイクロサービスとクラウドアーキテクチャ',
    company: 'Cloud Platform',
    description: `
• コンテナ化されたマイクロサービス、ドメイン駆動設計（DDD）、スケーラブルな REST/GraphQL API による分散バックエンドアーキテクチャを設計・実装。
• システムのモジュール性、パフォーマンス、クラウドネイティブなデプロイ戦略に注力。
      `,
    impact: `
• 保守性、スケーラビリティ、サービス分離を向上し、安定したデプロイと CI/CD 自動化を実現。
      `,
    tech: `Tech: .NET • Docker • Microservices • GraphQL • CI/CD • Cloud Architecture`,
  },
  {
    title: 'リアルタイムメディア・文字起こしシステム',
    company: 'Media Pipelines',
    description: `
• AI 音声認識と自動文字起こしワークフローを統合したリアルタイムメディア処理パイプラインを構築。
• 高性能なメディア処理のための非同期処理とバックグラウンドジョブのオーケストレーションを設計。
      `,
    impact: `
• リアルタイム AI 文字起こしと自動化ワークフローを実現し、運用効率と処理スループットを向上。
      `,
    tech: `Tech: Whisper AI • Media Processing • Async Pipelines • Automation • Cloud Systems`,
  },
];

export const content = {
  en: {
    experience: experienceEn,
    mainProjects: mainProjectsEn,
  },
  es: {
    experience: experienceEs,
    mainProjects: mainProjectsEs,
  },
  ja: {
    experience: experienceJa,
    mainProjects: mainProjectsJa,
  },
};
