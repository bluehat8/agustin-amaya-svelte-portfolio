<script lang="ts">
  // Interfaz de los proyectos
  interface Project {
    title: string;
    description: string;
    fullDescription?: string;
    status?: string;
    url: string;
    tags: string[];
    imageUrl: string;
    githubUrl?: string;
    appUrl?: string;
  }

  export let projects: Project[] = [
    {
      title: "Neoark Capital Fund",
      description: "NeoArk Capital Fund es una plataforma financiera innovadora que tiene como objetivo democratizar el acceso a oportunidades de inversión tradicionalmente reservadas a grandes inversores o inversores institucionales.",
      url: "https://neoarkcapital.io",
      tags: ["Blockchain", "Solidity", "Next.js", "Nestjs", "PostgreSQL", "Thirdweb", "Ethers.js", "Hardhat"],
      imageUrl: "/images/neoark.png",
    },
    {
      title: "Credipath",
      description: "Credipath es una aplicación de gestión de préstamos diseñada para equipos de cobranza y administración de préstamos.",
      fullDescription: "Credipath es una aplicación de gestión de préstamos diseñada para equipos de cobranza y administración. Incluye un backend RESTful en ASP.NET Core que expone toda la lógica de negocio (clientes, préstamos, amortizaciones, pagos flexibles, conciliaciones y reportes) y un sistema de permisos para usuarios (administradores, cobradores, supervisores). La API está pensada para integrarse con una interfaz web tipo dashboard (administración y reportes) y una app móvil ligera para cobradores de campo que necesitan ver rutas, registrar pagos y emitir recibos.",
      url: "https://getcredipath.com",
      tags: [".NET CORE", "C#", "SQL Server", "React", "Tailwind CSS", "Typescript", "Entity Framework", "JWT", "API REST", "Google Auth"],
      imageUrl: "/images/bg-credipath.png",
      appUrl: "https://credipath-client.vercel.app/",
    },
      {
      title: "Groveto",
        description: "Conecta con el mejor talento global, rápido y con confianza. Accede a perfiles en video, evalúa habilidades blandas en segundos y construye tu equipo con seguridad, donde y cuando quieras.",
        fullDescription: "Groveto es una plataforma integral para talento y empresas que simplifica el reclutamiento y la gestión de carrera. Los candidatos muestran un video de 45 segundos que revela habilidades blandas, energía e idiomas al instante, mientras que la IA recomienda candidatos listos para impresionar en 45 segundos. Para los talentos, Groveto es tu centro de carrera: busca empleos, encuentra tu match rápidamente, haz seguimiento a tus postulaciones y muestra tus habilidades. Para las empresas, ofrece coincidencia por IA, seguimiento de procesos (notificaciones cuando el video perfil es visto, preseleccionado o rechazado), chat integrado para agendar entrevistas y un flujo de onboarding con todo el contexto en un solo lugar.",
      url: "https://grovetos-app.vercel.app/",
      tags: [".NET CORE", "C#", "SQL Server", "React", "Tailwind CSS", "Typescript", "Entity Framework", "JWT", "API REST", "Google Auth"],
      imageUrl: "/images/bg-groveto.png",
      appUrl: "https://grovetos-app.vercel.app/",
    },
    {
      title: "Controller SEO",
      description: "Herramienta para monitorear y optimizar el SEO de negocios locales.",
      url: "https://controllerseo.com/",
      tags: ["Python", "Laravel", "JQuery", "MySQL", "Bootstrap", "Google maps API"],
      imageUrl: "/images/controllerseo.png",
    },
    {
      title: "Juridiconnect",
      description: "Marketplace legal que conecta clientes con abogados verificados mediante un sistema de casos, propuestas y contratos con pagos escalonados.",
      fullDescription: "JuridiConnect es una plataforma full-stack de servicios legales tipo marketplace (similar a Upwork pero especializada en abogados) que permite a clientes publicar casos legales y recibir propuestas de abogados verificados. El sistema incluye un riguroso proceso de verificación profesional con exámenes de certificación por especialidad, gestión completa de contratos con pagos por hitos, sistema de mensajería en tiempo real, y servicios de consultoría y notariales.",
      status: "En construcción",
      url: "https://juridiconect.com",
      tags: [".NET CORE", "SUPABASE", "PostgreSQL", "Next.js", "Typescript"],
      imageUrl: "/images/bg-juridiconnect.png",
      appUrl: "https://juridiconect.com",
    },
    {
      title: "Repher",
      description: "Repher ofrece una plataforma que conecta a buscadores de empleo con referencias internas, permite a las empresas invitar a candidatos destacados y simplifica la contratación mediante ofertas basadas en referencias confiables.",
      url: "https://repher.sitefpo.com/",
      tags: ["C#", ".NET CORE", "JQUERY", "SQL Server", "AWS"],
      imageUrl: "/images/repher.png",
    },
    {
      title: "Cuchulink",
      description: "Plataforma DeFi para conectividad descentralizada.",
      url: "https://cuchulink-base.vercel.app/",
      tags: ["Blockchain", "Solidity", "Scaffold ETH2", "Next.js", "DaysiUI"],
      imageUrl: "/images/cuchulink.jpg",
      githubUrl: "https://github.com/Shigerubt/cuchulink-mvp-eth-mexico/tree/dev",
    },
    {
      title: "Creduchain",
      description: "A decentralized network for fast, secure credential verification.",
      url: "https://creduchain-creduchain-app.titd1s.easypanel.host/",
      tags: ["Django", "Solidity", "Bootstrap", "Python", "PostreSQL"],
      imageUrl: "/images/creduchain_logo.png",
      githubUrl: "https://github.com/bluehat8/Creduchain-app",
    },
    {
      title: "SOFIA",
      description: "SOFIA's landing page",
      url: "https://sofia-landing-page.vercel.app/",
      tags: ["CSS", "Svelte", "Tailwind", "Typescript"],
      imageUrl: "/images/sofia-landing.png",
      githubUrl: "https://github.com/bluehat8/Sofia-landing-page",
    },
  ];

  // Estado para el proyecto seleccionado
  let selectedProject: Project | null = null;

  function openDetails(p: Project) {
    selectedProject = p;
  }

  function closeDetails() {
    selectedProject = null;
  }

  import './projects.css';
  import ProjectsList from './projects-list.svelte';
  import ProjectDetail from './project-detail.svelte';
</script>

<section class="projects-container">
  {#if selectedProject}
    <ProjectDetail project={selectedProject} on:close={closeDetails} />
  {:else}
    <ProjectsList {projects} on:open={(e) => openDetails(e.detail)} />
  {/if}
</section>
  
  
  