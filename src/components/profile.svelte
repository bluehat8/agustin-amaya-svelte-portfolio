<script lang="ts">
import About from '../components/about.svelte';
import Skills from '../components/skills.svelte';

import '../styles/global.css'

let activeLink = 'about';

function handleLinkClick(linkId : string) {
  activeLink = linkId;
}

</script>

<div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card glassmorphism height-adapted border-0 mt-5">

            <!-- CARD HEADER -->
          <div class="border-0 text-white">
            <img src="/images/bow-lake-banff-national-park-canada-bow-river-astronomy-6000x4000-3719.jpg" class="position-relative card-img profile-background no-rounded" alt="Imagen de encabezado">
           
            <div class="menu-circle position-absolute top-0 start-0 m-4"></div>

            <div class="text-end position-absolute end-0 px-4 py-3">

              <button class="cv-button">
                <svg viewBox="0 0 256 256"  height="24" width="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"fill="currentColor"></path></svg>
                DOWNLOAD CV</button>
            </div>

            <a href="#test" class="position-absolute top-0 end-0 m-3 btn-custom" data-social="facebook">
              <span class="svgContainer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" height="1.3em" viewBox="0 0 50 50">
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </span>
                <span class="BG-facebook"></span> 
            </a> 

        </div>


          <div class="card-body">
            <div class="align-items-center">
              <img src="/images//leonkennedy.jpg" class="profile-image rounded-circle mr-3" alt="Imagen de perfil">

              <div class="title-card">

                <div class="d-flex">

                    <h5 class="card-title mt-3 text-white bold-text">Agustín Amaya</h5>

                    <svg id="rocket-icon" class="mt-2" viewBox="0 0 75 75">
                        <polygon fill="#1E415C" points="18 21 35 21 44 30 27 30"/>
                        <polygon fill="#1E415C" points="27 45 44 45 35 54 18 54"/>
                        <path fill="#1E415C" d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z"/>
                        <path fill="#6AB7EB" d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z"/>
                        <path fill="#1E415C" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z"/>
                        <path fill="#6AB7EB" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z"/>
                        <path fill="#C5E2F7" d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z"/>
                        <path fill="#EAF6FF" d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z"/>
                        <circle cx="49.5" cy="37.5" r="3.5" fill="#1E415C"/>
                        <path fill="#6AB7EB" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z"/>
                        <path fill="#1E415C" d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z" class="flame"/>
                    </svg>
                    
                    
                </div>

                <a href="#test" class="text-secondary text-center"><i class="fa-brands fa-github" style="color: #ffffff;"></i> &nbsp;@bluehat8</a>
                <p class="card-text text-secondary">Systems Engineer. Full Stack Developer. Blockchain Developer. SOFIA's Founder. </p>
                <div class="d-flex">
                    <div class="mr-4">
                      <p class="mb-0 text-secondary"><i class="fa-solid fa-location-dot"></i> Managua, Nicaragua</p>
                    </div>
                    <div class="mx-3">
                      <a href="#test" class="text-secondary"><i class="fa-brands fa-linkedin"></i> agustinamaya</a>
                    </div>
                  </div>

                  <div class="d-flex align-items-center justify-content-center border-0 shadow-nne">
                    <nav class="nav nav-pills fw-bold nav-light justify-content-center mt-3 mb-3 shadow-none">
                        <a href="#about" class="nav-link" class:active-link={activeLink === 'about'} on:click={() => handleLinkClick('about')}>About</a>
                        <a href="#skills" class="nav-link" class:active-link={activeLink === 'skills'} on:click={() => handleLinkClick('skills')}>Skills</a>
                        <a href="#experience" class="nav-link" class:active-link={activeLink === 'experience'} on:click={() => handleLinkClick('experience')}>Experience</a>
                        <a href="#projects" class="nav-link" class:active-link={activeLink === 'projects'} on:click={() => handleLinkClick('projects')}>Projects</a>
                    </nav>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card glassmorphism mt-3">
          <div class="card-body">
      
              <section>
                {#if activeLink === 'about'}
                  <About />
                {:else if activeLink === 'skills'}
                  <Skills/>
                  <!-- Renderizar el componente de Skills -->
                {:else if activeLink === 'experience'}
                  <!-- Renderizar el componente de Experience -->
                {:else if activeLink === 'projects'}
                  <!-- Renderizar el componente de Projects -->
                {/if}
              </section>
      
          </div>
        </div>
         <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Nombre de Usuario</h5>
            <p class="card-text">Contenido del tweet</p>
          </div>
        </div>
      </div>
    </div>
  </div>