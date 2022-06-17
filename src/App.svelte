<script>
  import NavBar from './components/NavBar.svelte';
</script>

<main>
  <NavBar/>
</main>

<style>
  :global(*){
    font-family: 'Ubuntu', sans-serif;
  }
  :global(img){
    max-width: 80%;
    height: auto;
  }
  :global(.grey){
    background-color: rgb(238, 241, 245);
  }
  :global(.dark-grey){
    background-color: rgb(59, 63, 67);
    color: #fff !important;
  }
</style>