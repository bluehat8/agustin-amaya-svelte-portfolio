<script lang="ts">
    // Interfaz de los proyectos
    interface Project {
      title: string;
      description: string;
      url: string;
      tags: string[];
      imageUrl: string;
      githubUrl?: string; // Campo opcional para GitHub
    }
  
    export let projects: Project[] = [
      {
        title: "Neoark Capital Fund",
        description: "NeoArk Capital Fund is an innovative financial platform that aims to democratize access to investment opportunities traditionally reserved for large capital or institutional investors.",
        url: "https://neoarkcapital.io",
        tags: ["Blockchain", "Solidity", "Next.js", "Nestjs", "PostgreSQL", "Thirdweb", 
        "Ethers.js", "Hardhat"],
        imageUrl: "/images/neoark.png",
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
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="no-projects">No projects to display.</p>
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
  </style>
  