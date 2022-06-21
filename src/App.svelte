<script>
  import NavBar from './components/NavBar.svelte';
  import Main from './components/Main.svelte';
  import Info from './components/Info.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
  import Icon from './components/Icon.svelte';
</script>

<main>
  <NavBar/>
  <Main/>
  <Info/>
  <Contact/>
  <Footer/>
  <Icon/>
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
  :global(*::selection){
    background-color: rgb(223, 223, 223);
  }
  :global(.bg-dark-grey *::selection, .bg-dark-cyan *::selection){
    background-color: #3d3d3d;
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
    background-color: #212529 !important;
  }
  :global(.bg-cyan){
    background-color: #D5EBFF;
  }
  :global(.bg-dark-cyan){
    background-color: #3B3F43;
  }
  :global(.text-undlnd){
    text-decoration: underline 0.06em var(--main-color);
    text-underline-offset: 3px;
  }
</style>