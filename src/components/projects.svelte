<script lang="ts">
    // Ejemplo de datos de proyectos
    interface Project {
      title: string;
      description: string;
      url: string;
      tags: string[];
      imageUrl: string;
    }
  
    export let projects: Project[] = [
      {
        title: "Controller SEO",
        description: "Tool designed to monitor and optimize the SEO performance of local businesses.",
        url: "https://tool.controllerseo.com/login",
        tags: ["Python", "Laravel", "JQuery", "MySQL", "Bootstrap"],
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
        tags: ["Blockchain", "Solidity", "Scaffold ETH2", "Next.js"],
        imageUrl: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Creduchain",
        description: "A decentralized network for fast, secure credential verification.",
        url: "https://creduchain-creduchain-app.titd1s.easypanel.host/",
        tags: ["Django", "Solidity", "Bootstrap", "Python", "PostreSQL"],
        imageUrl: "/images/creduchain_logo.png",
      },
      {
        title: "SOFIA",
        description: "SOFIA's landing page",
        url: "https://sofia-landing-page.vercel.app/",
        tags: ["CSS", "Svelte", "Tailwind", "Typescript"],
        imageUrl: "/images/sofia-landing.png",
      }
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
              <a href={project.url} target="_blank" class="project-link">View Project</a>
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
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  
    .project-link {
      display: inline-block;
      background: #4a90e2;
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s ease;
    }
  
    .project-link:hover {
      background: #3c78c0;
    }
  
    .no-projects {
      text-align: center;
      font-size: 1.2rem;
      color: #aaa;
    }
  </style>
  