<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let project: any;
  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }
</script>

<div class="details-inline px-6 pt-4" aria-labelledby="panel-title">
 

  <header class="panel-header">
    <button class="back-button" on:click={close} aria-label="Volver" style="display:flex;align-items:center;gap:0.5rem;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="back-label text-sm">Volver</span>
    </button>
  </header>

  <div class="tweet-view">
    <div class="tweet-user">
      <img src={project.imageUrl} alt="avatar" class="avatar" />
      <div class="user-info">
        <div class="name">{project.title}</div>
        <div class="handle">@{project.title.replace(/\s+/g, '').toLowerCase()}</div>
      </div>
    </div>


    <div class="tweet-content text-sm">
      <p>{@html project.fullDescription ?? project.description}</p>
    </div>

    <div class="media-card">
      {#if project.url}
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Abrir landing">
              <img src={project.imageUrl} alt={project.title} class="media-image" />
            </a>
            {#if project.url}
        <a class="landing-top-right" href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Ver landing">
          <img src="/icons/web.svg" alt="Landing" width="18" height="18" />
        </a>
      {/if}
      {:else}

        <img src={project.imageUrl} alt={project.title} class="media-image" />
      {/if}
      <div class="media-caption">{project.title}</div>
    </div>

    <div class="meta-row">
      <div class="timestamp">5:58 AM · Jun 7, 2024 · 161.3K Views</div>
    </div>
<!-- 
    <div class="stats-row">
      <div class="stat"><strong>123</strong> <span>Comments</span></div>
      <div class="stat"><strong>481</strong> <span>Retweets</span></div>
      <div class="stat"><strong>588</strong> <span>Likes</span></div>
      <div class="stat"><strong>95</strong> <span>Bookmarks</span></div>
    </div> -->

 <!-- Links: Landing page and project/app (GitHub or external) -->
    <div class="detail-links" style="margin-top:0.6rem; display:flex; gap:0.6rem; align-items:center; flex-wrap:wrap;">
      {#if project.url}
        <a class="project-icon" href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Abrir landing">
          <!-- external link / landing icon -->
           <img src="/icons/web.svg" alt="">
        </a>
      {/if}

       {#if project.appUrl}
        <a class="project-icon" href={project.appUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir landing">
          <!-- external link / landing icon -->
           <img src="/icons/app.svg" alt="">
        </a>
      {/if}

      {#if project.githubUrl}
        <a class="project-icon" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver código / app">
          <!-- github icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4.0 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
      {/if}

      {#if project.githubUrl === undefined && project.url === undefined && project.imageUrl}
        <!-- fallback: open image or project page if no urls provided -->
        <a class="project-icon" href={project.imageUrl} target="_blank" rel="noopener noreferrer" aria-label="Imagen">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
        </a>
      {/if}

      <!-- Technologies as chips -->
      {#if project.tags && project.tags.length}
        <div class="tech-chips" style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center;">
          {#each project.tags as t}
            <span class="tag" style="font-size:0.75rem; padding:0.2rem 0.45rem;">{t}</span>
          {/each}
        </div>
      {/if}
    </div>

  </div>

  <!-- <div class="panel-actions tweet-actions">
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
    <a class="share" href={project.url} target="_blank" aria-label="Share">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7l4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div> -->
</div>
