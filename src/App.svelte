<script>
  import NavBar from './components/NavBar.svelte';
  import Main from './components/Main.svelte';
</script>

<main>
  <NavBar/>
  <Main/>
</main>

<style>
  :global(:root){
    --grey: rgb(238, 241, 245);
    --dark-grey: rgb(59, 63, 67);
    --main-color: #5694D1;
    --secondary-color: #D5EBFF;
    --third-color: #234567;
  }
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
  :global(.bg-dark-grey){
    background-color: #212529;
  }
</style>