<script lang="ts">
  import ProjectCard from './project-card.svelte';
  import { createEventDispatcher } from 'svelte';
  export let projects: any[] = [];
  const dispatch = createEventDispatcher();

  function handleOpen(e: any) {
    dispatch('open', e.detail);
  }
</script>

{#if projects.length > 0}
  <div class="grid">
    {#each projects as project (project.title)}
      <ProjectCard {project} on:open={handleOpen} />
    {/each}
  </div>
{:else}
  <p class="no-projects">No projects to display.</p>
{/if}
