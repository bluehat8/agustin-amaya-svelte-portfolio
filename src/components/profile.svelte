<script lang="ts">
  import About from '../components/about.svelte';
  import Skills from '../components/skills.svelte';
  import '../styles/global.css';
  import Download from './icons/download.svelte';
  import Facebook from './icons/facebook.svelte';
  import Rocket from './icons/rocket.svelte';
  import Mailto from './icons/mailto.svelte';

  import { cvUrl, linkedinUrl, githubUrl, profileUrl, instagramUrl } from '../scripts/urls';
  import Projects from './projects.svelte';
  let activeLink = 'about';

  function handleLinkClick(linkId : string) {
    activeLink = linkId;
  }
  </script>


  <section id="interactive-section">
    <div id="blob"></div>
    <div id="blur"></div>
    <span class="dot">·</span>
  </section>


  <div class="mx-auto md:px-4 px-8 container-profile pt-14">
    
    <div class="flex flex-col items-center justify-center mt-5">
      <div class="w-full max-w-4xl glassmorphism rounded-lg shadow-md panel-container" style="position: relative;">
        <!-- CARD HEADER -->
        <div class="relative h-48">
          <img src="/images/bow-lake-banff-national-park-canada-bow-river-astronomy-6000x4000-3719.jpg" alt="Imagen de encabezado" class="profile-background rounded-lg padding-0 object-cover  m-0">
          
          <div class="menu-circle position-absolute top-0 start-0 m-4 mt-5"></div>

          <div class="absolute top-0 right-0 p-4">
              <a href="mailto:agustin.amaya.g21@gmail.com" class="btn-custom position-absolute top-0 end-0 text-white">
                <span class="svgContainer">
                  <Mailto/>
                </span>
                <span class="BG-facebook"></span> 
              </a>
          </div>

        </div>
        <!-- CARD BODY -->

        <div class="absolute top-40 right-0 m-4">
          <a href="{cvUrl}" target="_blank" class="flex items-center cv-button gap-2 px-4 py-2 rounded-lg">
            <Download/>
            DOWNLOAD CV
          </a>

        </div>
        

        <div>
          <img src="{profileUrl}" alt="Imagen de perfil" class="rounded-full h-24 w-24 profile-image">
        </div>

          <div class="flex w-full max-w-4xl items-center global-padding" >


          <div class="mt-5 max-w-4xl global-padding">
            <div class="mt-10 flex items-center">
              <h5 class="text-2xl font-light">Agustín Amaya</h5>
              <Rocket/>
            </div>
            <a href="{githubUrl}" target="_blank" class="rounded-lg text-white hover:bg-gray-700"><i class="fa-brands fa-github mr-2"></i> @bluehat8</a>
            <p class="text-gray-500">Systems Engineer. Software Developer. Web3 Developer. SOFIA's Founder.</p>
            <div class="flex items-center mt-2">
              <p class="text-gray-500"><i class="fa-solid fa-location-dot mr-2"></i> Managua, Nicaragua</p>
              <a href="{linkedinUrl}" target="_blank" class="text-gray-500 ml-4 linkedin-text"><i class="fa-brands fa-linkedin mr-2"></i> agustinamaya</a>
            </div>
          
          </div>
        </div>

        <div class="flex items-center p-8 mt-3">
          <a href="#about" class="nav-link text-inherit active:text-blue-500" class:active-link={activeLink === 'about'} on:click={() => handleLinkClick('about')}>About</a>
          <a href="#skills" class="nav-link" class:active-link={activeLink === 'skills'} on:click={() => handleLinkClick('skills')}>Skills</a>
          <!-- <a href="#experience" class="nav-link" class:active-link={activeLink === 'experience'} on:click={() => handleLinkClick('experience')}>Timeline</a> -->
          <a href="#projects" class="nav-link" class:active-link={activeLink === 'projects'} on:click={() => handleLinkClick('projects')}>Projects</a>

        </div>
        <!-- CARD CONTENT -->
        <div class="pr-8 pl-8 tab-content" style="position: relative;">
          <!-- Render the appropriate component based on the active link -->
          {#if activeLink === 'about'}
            <About />
          {:else if activeLink === 'skills'}
            <Skills />
          {:else if activeLink === 'projects'}
            <Projects />
          {/if}
        </div>
      </div>
  
      <footer class="full max-w-4xl mt-3">
        <div class="container mx-auto flex flex-col items-center">
          <p class="mb-2 mt-2 text-secondary">&copy; 2024 Agustin Amaya. All rights reserved.</p>
          <nav class="nav-light w-full">
            <ul class="flex justify-center space-x-4">
              <li>
                <a href="{githubUrl}" target="_blank" class="hover:text-gray-400">
                  <i class="fa-brands fa-github mr-2"></i>
                </a>
              </li>
            
              <li>
                <a href="{instagramUrl}" target="_blank" class="hover:text-gray-400">
                  <i class="fa-brands fa-instagram mr-2"></i>
                </a>
              </li>
              <li>
                <a href="{linkedinUrl}" target="_blank" class="hover:text-gray-400">
                  <i class="fa-brands fa-linkedin mr-2"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      
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