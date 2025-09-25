<script lang="ts">
  import '../styles/skills.css';

  import Icon from '@iconify/svelte';

  export let skillCategories = [
    {
      category: "Web Development",
      skills: [
        { name: "JQuery", icon: "devicon:jquery"  },
        { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
        { name: "MySQL", icon: "logos:mysql" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "API REST", icon: "material-symbols:api-rounded" },
        { name: "C#", icon: "devicon:csharp" },
        { name: "PHP", icon: "vscode-icons:file-type-php2" },
        { name: "Wordpress", icon: "skill-icons:wordpress" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "Svelte", icon: "devicon:svelte" },
        { name: "Nest.js", icon: "logos:nestjs" },
        { name: "Django", icon: "logos:django" },
        { name: ".NET Core", icon: "logos:dotnet" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
      ],
    },
    {
      category: "Web3",
      skills: [
        { name: "Solidity", icon: "devicon-plain:solidity", color:"#7b00c5" },
        { name: "Ethers.js", icon: "logos:web3js" },
        { name: "Thirdweb", icon: "simple-icons:thirdweb", color:"#7b00c5" },
        { name: "Hardhat", icon: "devicon:hardhat" },
        { name: "Wagmi", icon: "simple-icons:wagmi", color:"#ffff" },
        { name: "OpenZeppelin", icon: "simple-icons:openzeppelin", color:"#0396e2" },
      ],
    },
  ];
</script>

  <div class="skills-container p-4 mb-8">
  {#each skillCategories as category}
    <div class="mb-6">
      <h4 class="text-base font-semibold text-gray-300 mb-3 text-center uppercase tracking-wider">
        {category.category}
      </h4>
      <div class="category-divider mb-4"></div>
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {#each category.skills as skill}
          <div class={`flex flex-col items-center justify-center gap-2 p-3 rounded-md bg-gradient-to-r skill-card`} >
            <Icon style={"color: " + skill.color} icon={skill.icon} width="40" height="40" /> 
            <span class="text-white font-medium text-sm text-center">{skill.name}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
  </div>