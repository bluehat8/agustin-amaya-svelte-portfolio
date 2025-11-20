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
    <button class="back-button" on:click={close} aria-label="Volver">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <h3 id="panel-title" class="text-blue-500 font-bold">Volver</h3>
  </header>

  <div class="tweet-view">
    <div class="tweet-user">
      <img src={project.imageUrl} alt="avatar" class="avatar" />
      <div class="user-info">
        <div class="name">{project.title}</div>
        <div class="handle">@{project.title.replace(/\s+/g, '').toLowerCase()}</div>
      </div>
    </div>

    <div class="tweet-content">
      <p>{@html project.fullDescription ?? project.description}</p>
    </div>

    <div class="media-card">
      <img src={project.imageUrl} alt={project.title} class="media-image" />
      <div class="media-caption">{project.title}</div>
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
    <a class="share" href={project.url} target="_blank" aria-label="Share">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7l4-4 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</div>
