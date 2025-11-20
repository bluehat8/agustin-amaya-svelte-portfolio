<script lang="ts">
    // Interfaz de los proyectos
    interface Project {
      title: string;
      description: string;
      fullDescription?: string; 
      url: string;
      tags: string[];
      imageUrl: string;
      githubUrl?: string; // Campo opcional para GitHub
    }
  
    export let projects: Project[] = [
      {
        title: "Neoark Capital Fund",
        description: "NeoArk Capital Fund es una plataforma financiera innovadora que tiene como objetivo democratizar el acceso a oportunidades de inversión tradicionalmente reservadas a grandes inversores o inversores institucionales.",
        url: "https://neoarkcapital.io",
        tags: ["Blockchain", "Solidity", "Next.js", "Nestjs", "PostgreSQL", "Thirdweb", 
        "Ethers.js", "Hardhat"],
        imageUrl: "/images/neoark.png",

      },
      {
        // Credipath Project
      
        title: "Credipath",
        description: "Credipath es una aplicación de gestión de préstamos diseñada para equipos de cobranza y administración de préstamos.",
        fullDescription: "Credipath es una aplicación de gestión de préstamos diseñada para equipos de cobranza y administración de préstamos. Permite a los usuarios rastrear, gestionar y optimizar el proceso de cobranza de préstamos de manera eficiente.",
        url: "https://getcredipath.com",
        tags: [".NET CORE", "C#", "SQL Server", "React", "Tailwind CSS", "Typescript", "Entity Framework", "JWT", "API REST", "Google Auth"],
        imageUrl: "/images/bg-credipath.png",
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
    
    // Estado para el proyecto seleccionado y handlers del panel de detalles
    let selectedProject: Project | null = null;

    function openDetails(p: Project) {
      selectedProject = p;
    }

    function closeDetails() {
      selectedProject = null;
    }
  </script>
  
  <section class="projects-container">
    {#if projects.length > 0}
      <div class="grid">
        {#each projects as project (project.title)}
          <div class="project-card">
            <img src={project.imageUrl} alt={project.title} class="project-image" />
            <div class="project-info">
              <h3 class="project-title">{project.title}</h3>
              <p class="project-description">{project.description}</p>
              <div class="tags">
                {#each project.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
              <div class="project-links">
                <a href={project.url} target="_blank" class="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0" />
                        </path>
                    </svg>
                </a>
                {#if project.githubUrl}
                  <a href={project.githubUrl} target="_blank" class="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 0 0-2.533 15.59c.4.074.546-.174.546-.388 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.925-.89-1.17-.89-1.17-.727-.497.056-.487.056-.487.803.056 1.225.825 1.225.825.714 1.223 1.872.87 2.329.665.072-.517.279-.87.508-1.071-1.778-.202-3.644-.889-3.644-3.953 0-.874.312-1.588.823-2.149-.083-.202-.357-1.017.078-2.119 0 0 .672-.215 2.2.82a7.658 7.658 0 0 1 4.001 0c1.527-1.035 2.198-.82 2.198-.82.436 1.102.162 1.917.08 2.119.512.561.821 1.275.821 2.149 0 3.072-1.87 3.75-3.655 3.947.287.247.544.735.544 1.481 0 1.07-.01 1.93-.01 2.193 0 .216.144.466.55.387A8.001 8.001 0 0 0 8 0z" />
                    </svg>
                  </a>
                {/if}
              </div>
              <button class="details-button" on:click={() => openDetails(project)}>Detalles</button>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="no-projects">No projects to display.</p>
    {/if}
    {#if selectedProject}
      <aside class="details-panel px-10 pt-4" aria-labelledby="panel-title">
        <header class="panel-header">
          <button class="back-button" on:click={closeDetails} aria-label="Volver">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <h3 id="panel-title">Post</h3>
          <button class="more-button" aria-label="Más">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></svg>
          </button>
        </header>

        <div class="tweet-view">
          <div class="tweet-user">
            <img src={selectedProject.imageUrl} alt="avatar" class="avatar" />
            <div class="user-info">
              <div class="name">{selectedProject.title}</div>
              <div class="handle">@{selectedProject.title.replace(/\s+/g, '').toLowerCase()}</div>
            </div>
          </div>

          <div class="tweet-content">
            <p>{@html selectedProject.description}</p>
          </div>

          <div class="media-card">
            <img src={selectedProject.imageUrl} alt={selectedProject.title} class="media-image" />
            <div class="media-caption">{selectedProject.title}</div>
          </div>

          <div class="meta-row">
            <div class="timestamp">5:58 AM · Jun 7, 2024 · 161.3K Views</div>
          </div>

          <div class="stats-row">
            <div class="stat"><strong>123</strong> <span>Comments</span></div>
            <div class="stat"><strong>481</strong> <span>Retweets</span></div>
            <div class="stat"><strong>588</strong> <span>Likes</span></div>
            <div class="stat"><strong>95</strong> <span>Bookmarks</span></div>
          </div>
        </div>

        <div class="panel-actions tweet-actions">
          <button class="action" aria-label="Comment">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>123</span>
          </button>
          <button class="action" aria-label="Retweet">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 7v6a2 2 0 0 1-2 2h-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 17v-6a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>481</span>
          </button>
          <button class="action" aria-label="Like">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>588</span>
          </button>
          <button class="action" aria-label="Bookmark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>95</span>
          </button>
          <a class="share" href={selectedProject.url} target="_blank" aria-label="Share">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7l4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </aside>
    {/if}
  </section>
  
  <style>
    .projects-container {
      padding: 1rem;
      padding-bottom: 3rem;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
    }
  
    .project-card {
      background: #1f1f1f;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  
    .project-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  
    .project-info {
      padding: 1rem;
    }
  
    .project-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #fff;
    }
  
    .project-description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #bbb;
    }
  
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
  
    .tag {
      background: #2a2a2a;
      color: #fff;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
    }
  
    .project-links {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  
    .project-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #4a90e2;
      color: #fff;
      border-radius: 50%;
      transition: background 0.3s ease;
      text-decoration: none;
    }
  
    .project-icon:hover {
      background: #3c78c0;
    }

    /* Detalles panel */
    .details-button {
      margin: 0.6rem 1rem 1rem 1rem;
      padding: 0.45rem 0.8rem;
      border: 1px solid rgba(74,144,226,0.18);
      background: transparent;
      color: #4a90e2;
      cursor: pointer;
      font-weight: 600;
      border-radius: 6px;
    }

    .details-panel {
      /* contained inside parent panel (profile card) */
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: #0f0f0f;
      box-shadow: -8px 0 24px rgba(0,0,0,0.45);
      z-index: 50;
      display: flex;
      flex-direction: column;
      /* padding: 1rem; */
      overflow-y: auto;
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

    .back-button {
      background: transparent;
      border: none;
      color: #4a90e2;
      font-weight: 700;
      font-size: 2rem;
      cursor: pointer;
    }

    .panel-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: start;
      width: 100%;
    }

    .panel-image {
      width: 100%;
      height: 320px;
      object-fit: cover;
      border-radius: 6px;
    }

    .panel-content {
      padding: 0.25rem 0.5rem;
    }

    .panel-description {
      color: #ccc;
      margin-bottom: 0.75rem;
    }

    .panel-links .project-icon {
      width: auto;
      height: auto;
      padding: 0.45rem 0.8rem;
      border-radius: 6px;
      background: #4a90e2;
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      margin-right: 0.5rem;
    }

    @media (max-width: 800px) {
      .panel-body {
        grid-template-columns: 1fr;
      }
      .panel-image {
        height: 220px;
      }
    }

    /* Mobile - tweet-like view */
    @media (max-width: 600px) {
      .details-panel {
        /* On small screens we keep the full-viewport, tweet-like experience */
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100vh;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
      }

      .panel-header {
        position: sticky;
        top: 0;
        z-index: 5;
        background: #0f0f0f;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }

      .panel-header h3 {
        margin: 0;
        flex: 1;
        text-align: center;
        font-size: 1rem;
        color: #fff;
      }

      .back-button {
        font-size: 1.05rem;
      }

      .panel-body {
        padding: 1rem;
        grid-template-columns: 1fr;
      }

      .panel-image {
        width: 100%;
        height: 320px;
        border-radius: 0;
      }

      .panel-content {
        padding: 0.5rem 0;
      }

      .panel-actions {
        position: sticky;
        bottom: 0;
        background: linear-gradient(180deg, rgba(15,15,15,0.95), rgba(15,15,15,1));
        padding: 0.65rem 1rem;
        display: flex;
        gap: 0.5rem;
        z-index: 6;
      }

      .panel-actions .project-icon {
        flex: 1;
        text-align: center;
        padding: 0.7rem 0.6rem;
        border-radius: 999px;
        font-weight: 600;
      }
    }

    /* Tweet-like specifics */
    .tweet-view {
      padding: 0.5rem 1rem 1.25rem 1rem;
      color: #fff;
    }

    .tweet-user {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      padding: 0.5rem 0 0.5rem 0;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 999px;
      object-fit: cover;
      background: #222;
      flex-shrink: 0;
    }

    .user-info .name {
      font-weight: 700;
      color: #fff;
    }

    .user-info .handle {
      font-size: 0.85rem;
      color: #9aa0a6;
      margin-top: 2px;
    }

    .tweet-content p {
      font-size: 1.05rem;
      line-height: 1.5;
      margin: 0.5rem 0 0.75rem 0;
      color: #e6e6e6;
      white-space: pre-wrap;
    }

    .media-card {
      position: relative;
      margin-top: 0.5rem;
      border-radius: 12px;
      overflow: hidden;
    }

    .media-image {
      width: 100%;
      height: auto;
      display: block;
      max-height: 320px;
      object-fit: cover;
    }

    .media-caption {
      position: absolute;
      left: 0.6rem;
      bottom: 0.6rem;
      background: rgba(0,0,0,0.6);
      color: #fff;
      padding: 0.35rem 0.6rem;
      border-radius: 6px;
      font-size: 0.9rem;
    }

    .meta-row .timestamp {
      color: #9aa0a6;
      font-size: 0.85rem;
      margin: 0.75rem 0;
    }

    .stats-row {
      display: flex;
      gap: 1.25rem;
      color: #9aa0a6;
      padding: 0.5rem 0 1rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.03);
    }

    .stats-row .stat strong { color: #fff; margin-right: 0.35rem; }

    .tweet-actions {
      display: flex;
      gap: 0.5rem;
      padding: 0.6rem 0.9rem;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,0.02);
    }

    .action {
      display: inline-flex;
      gap: 0.5rem;
      align-items: center;
      background: transparent;
      border: none;
      color: #9aa0a6;
      cursor: pointer;
      font-size: 0.95rem;
      padding: 0.35rem 0.6rem;
    }

    .action svg { display: block; }

    .action span { font-size: 0.95rem; color: #9aa0a6; }

    .share { color: #9aa0a6; display: inline-flex; align-items: center; }

    .more-button { background: transparent; border: none; color: #fff; cursor: pointer; }
  </style>
  