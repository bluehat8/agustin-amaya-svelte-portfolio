<script lang="ts">
  import About from '../components/about.svelte';
  import Skills from '../components/skills.svelte';
  import { reveal, setDefaultOptions } from 'svelte-reveal';
  import '../styles/global.css';

  import Download from './icons/download.svelte';
  import Facebook from './icons/facebook.svelte';
  import Rocket from './icons/rocket.svelte';
  
  let activeLink = 'about';
  function handleLinkClick(linkId : string) {
    activeLink = linkId;
  }
  //use:reveal={{ preset: "fly", delay: 100}}
  </script>

<div class="container py-4">
  <div class="flex flex-col items-center justify-center mt-5">
    <div class="w-full max-w-4xl glassmorphism rounded-lg shadow-md">
      <!-- CARD HEADER -->
      <div class="relative h-48">
        <img src="/images/bow-lake-banff-national-park-canada-bow-river-astronomy-6000x4000-3719.jpg" alt="Imagen de encabezado" class="profile-background padding-0 object-cover  m-0">
        <!-- <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-50 rounded-lg"></div> -->
        <div class="absolute top-0 left-0 flex items-center justify-between w-full p-4">
        
            <div class="menu-circle position-absolute top-0 start-0 m-4"></div>

          <div class="flex">
            <a href="#test" class="btn-custom position-absolute top-0 end-0 m-4 text-white">
              <span class="svgContainer">
                <Facebook/>
              </span>
              <span class="BG-facebook"></span> 

            </a>
          </div>
        </div>
      </div>
      <!-- CARD BODY -->

      <div class="">
        <button class="text-white cv-button position-absolute end-0 m-8 rounded-lg">
          <Download/>
          DOWNLOAD CV
        </button>

      </div>
      

      <div>
        <img src="/images//leonkennedy.jpg" alt="Imagen de perfil" class="rounded-full h-24 w-24 profile-image">
      </div>

        <div class="flex w-full max-w-4xl items-center global-padding top-50" >


        <div class="mt-4 max-w-4xl global-padding">
          <div class="flex items-center">
            <h5 class="text-2xl font-bold font-light">Agustín Amaya</h5>
            <Rocket/>
          </div>
          <a href="#test" class="rounded-lg text-white hover:bg-gray-700"><i class="fa-brands fa-github mr-2"></i> @bluehat8</a>
          <p class="text-gray-600">Systems Engineer. Full Stack Developer. Blockchain Developer. SOFIA's Founder.</p>
          <div class="flex items-center mt-2">
            <p class="text-gray-600"><i class="fa-solid fa-location-dot mr-2"></i> Managua, Nicaragua</p>
            <a href="#test" class="text-gray-600 ml-4 linkedin-text"><i class="fa-brands fa-linkedin mr-2"></i> agustinamaya</a>
          </div>
        
        </div>
      </div>

      <div class="flex items-center p-8 mt-4">
        <a href="#about" class="nav-link text-inherit active:text-blue-500" class:active-link={activeLink === 'about'} on:click={() => handleLinkClick('about')}>About</a>
        <a href="#skills" class="nav-link" class:active-link={activeLink === 'skills'} on:click={() => handleLinkClick('skills')}>Skills</a>
        <a href="#experience" class="nav-link" class:active-link={activeLink === 'experience'} on:click={() => handleLinkClick('experience')}>Timeline</a>
        <a href="#projects" class="nav-link" class:active-link={activeLink === 'projects'} on:click={() => handleLinkClick('projects')}>Projects</a>

      </div>
      <!-- CARD CONTENT -->
      <div class="mt-8">
        <!-- Render the appropriate component based on the active link -->
        {#if activeLink === 'about'}
          <About />
        {:else if activeLink === 'skills'}
          <Skills />
        {:else if activeLink === 'experience'}
          <!-- <Experience /> -->
        {:else if activeLink === 'projects'}
          <!-- <Projects /> -->
        {/if}
      </div>
    </div>
    <div class="w-full max-w-2xl rounded-lg bg-white p-4 mt-8 shadow-md">
      <h5 class="text-xl font-bold text-gray-800">Nombre de Usuario</h5>
      <p class="text-gray-600">Contenido del tweet</p>
    </div>
  </div>
</div>

<style>




  @media (max-width: 768px) {
    .container {
      max-width: 100%;
    }

    .global-padding {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    .top-50 {
      margin-top: 140px;
      transform: translateY(-50%);
    }

    .max-w-4xl {
      max-width: 100%;
    }

    .h-48 {
      height: auto;
    }

    h5 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.1rem;
    }

    .linkedin-text {
      font-size: 1.1rem;
    }
  }
</style>