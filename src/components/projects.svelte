<script lang="ts">
  // Interfaz de los proyectos
  interface Project {
    title: string;
    description: string;
    fullDescription?: string;
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
      title: "Controller SEO",
      description: "Tool designed to monitor and optimize the SEO performance of local businesses.",
      url: "https://controllerseo.com/",
      tags: ["Python", "Laravel", "JQuery", "MySQL", "Bootstrap", "Google maps API"],
      imageUrl: "/images/controllerseo.png",
    },
    {
      title: "Repher",
      description: "Repher features a powerful platform that connects job seekers with employee referrals, enables employers to invite top candidates, and simplifies hiring through trusted, referral-based job postings.",
      url: "https://repher.sitefpo.com/",
      tags: ["C#", ".NET CORE", "JQUERY", "SQL Server", "AWS"],
      imageUrl: "/images/repher.png",
    },
    {
      title: "Cuchulink",
      description: "DeFi platform for decentralized connectivity.",
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
  
  
  