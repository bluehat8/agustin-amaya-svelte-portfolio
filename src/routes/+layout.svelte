<script>
    import '../styles/global.css';
    import HatPrintIcon from '../components/icons/hatprint.svelte'
    import github from '../components/icons/github.svelte'
    import Hatprint from '../components/icons/hatprint.svelte';
    import Toogle from '../components/icons/toogle.svelte';

</script>



<header class="fixed w-full p-2 z-20 backdrop-blur-md">
  <div class="mx-auto max-w-5xl flex items-center justify-between">
    <a href="/" class="group flex items-center gap-2">
      <HatPrintIcon></HatPrintIcon>
      <h2 class="font-semibold font-light tracking-tighter p-2 font-mplus text-lg">Agustin Amaya</h2>
    </a>
    <div class="items-center gap-6 hidden md:flex">
    
    </div>
    <div class="flex justify-between items-center">
    <div class="flex-1"></div>
    <!-- <Toogle></Toogle> -->
    <!-- <ThemeToggle client:visible />
    <DropdownMenu client:visible tags={Array.from(allTags)} /> -->
  </div>
</div>
</header>

<slot></slot>