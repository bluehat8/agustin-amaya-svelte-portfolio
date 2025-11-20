<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let project : any;
  const dispatch = createEventDispatcher();

  function openDetails() {
    dispatch('open', project);
  }
</script>

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
      <a href={project.url} target="_blank" class="project-icon" aria-label="Visitar">
        <!-- external link icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0" /></path></svg>
      </a>
      {#if project.githubUrl}
        <a href={project.githubUrl} target="_blank" class="project-icon" aria-label="Código">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.533 15.59c.4.074.546-.174.546-.388 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.925-.89-1.17-.89-1.17-.727-.497.056-.487.056-.487.803.056 1.225.825 1.225.825.714 1.223 1.872.87 2.329.665.072-.517.279-.87.508-1.071-1.778-.202-3.644-.889-3.644-3.953 0-.874.312-1.588.823-2.149-.083-.202-.357-1.017.078-2.119 0 0 .672-.215 2.2.82a7.658 7.658 0 0 1 4.001 0c1.527-1.035 2.198-.82 2.198-.82.436 1.102.162 1.917.08 2.119.512.561.821 1.275.821 2.149 0 3.072-1.87 3.75-3.655 3.947.287.247.544.735.544 1.481 0 1.07-.01 1.93-.01 2.193 0 .216.144.466.55.387A8.001 8.001 0 0 0 8 0z"/></svg>
        </a>
      {/if}
    </div>
    <button class="details-button" on:click={openDetails} aria-label="Detalles">Detalles</button>
  </div>
</div>

<style>
  /* minimal local overrides if needed */
</style>
