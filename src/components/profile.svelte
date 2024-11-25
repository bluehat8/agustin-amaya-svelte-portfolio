<script lang="ts">
  import About from '../components/about.svelte';
  import Skills from '../components/skills.svelte';
  import { reveal, setDefaultOptions } from 'svelte-reveal';
  import '../styles/global.css';
  import Download from './icons/download.svelte';
  import Facebook from './icons/facebook.svelte';
  import Rocket from './icons/rocket.svelte';
  import { cvUrl, linkedinUrl, githubUrl } from '../scripts/urls';
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


  <div class="container container-profile py-4">
    
    <div class="flex flex-col items-center justify-center mt-5">
      <div class="w-full max-w-4xl glassmorphism rounded-lg shadow-md">
        <!-- CARD HEADER -->
        <div class="relative h-48">
          <img src="/images/bow-lake-banff-national-park-canada-bow-river-astronomy-6000x4000-3719.jpg" alt="Imagen de encabezado" class="profile-background padding-0 object-cover  m-0">
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
          <a href="{cvUrl}" target="_blank" class="text-white cv-button position-absolute end-0 m-8 rounded-lg">
            <Download/>
            DOWNLOAD CV
          </a>

        </div>
        

        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/tiendaskd-779b1.appspot.com/o/images%2F464d3aac-0e87-4c31-995c-9cd9972b2dc7.png?alt=media&token=f9d4a0df-57af-443c-b067-72d67be2a3bc" alt="Imagen de perfil" class="rounded-full h-24 w-24 profile-image">
        </div>

          <div class="flex w-full max-w-4xl items-center global-padding" >


          <div class="mt-5 max-w-4xl global-padding">
            <div class="mt-4 flex items-center">
              <h5 class="text-2xl font-bold font-light">Agustín Amaya</h5>
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
          <a href="#experience" class="nav-link" class:active-link={activeLink === 'experience'} on:click={() => handleLinkClick('experience')}>Timeline</a>
          <a href="#projects" class="nav-link" class:active-link={activeLink === 'projects'} on:click={() => handleLinkClick('projects')}>Projects</a>

        </div>
        <!-- CARD CONTENT -->
        <div class="mt-6 pr-8 pl-8">
          <!-- Render the appropriate component based on the active link -->
          {#if activeLink === 'about'}
            <About />
          {:else if activeLink === 'skills'}
            <Skills />
          {:else if activeLink === 'experience'}
            <!-- <Experience /> -->
          {:else if activeLink === 'projects'}
            <!-- <Projects /> -->
            <Projects />
          {/if}
        </div>
      </div>
  
      <footer class="full max-w-4xl mt-3">
        <div class="container mx-auto flex flex-col items-center">
          <p class="mb-2 mt-2 text-secondary">&copy; 2024 My Website. All rights reserved.</p>
          <nav class="nav-light w-full">
            <ul class="flex justify-center space-x-4">
              <li>
                <a href="#test" class="hover:text-gray-400">
                  <i class="fa-brands fa-github mr-2"></i>
                </a>
              </li>
            
              <li>
                <a href="#test" class="hover:text-gray-400">
                  <i class="fa-brands fa-instagram mr-2"></i>
                </a>
              </li>
              <li>
                <a href="#test" class="hover:text-gray-400">
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