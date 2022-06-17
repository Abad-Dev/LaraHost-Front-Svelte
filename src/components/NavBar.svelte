<script>
    import sun from '../assets/sun.png';
    import sunLight from '../assets/sunW.png'
    import moon from '../assets/moon.png';
    import moonLight from '../assets/moonW.png';

    import { darkMode } from './store/store.js';
    let switchOn = $darkMode;
    let handleSwitch = () => {
        darkMode.set(switchOn)
    }
</script>

<nav id="nav" class={`navbar navbar-expand-lg py-3 ${$darkMode ? 'navbar-dark dark-grey' : 'navbar-light grey' }`}>
    <div class="container">
        <a class="navbar-brand" href="#/">
            LaraHost
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#/">Página principal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#prices">Planes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contáctenos</a>
                </li>
            </ul>
        <div class="nav-separator d-none d-lg-block"></div>
            <div class="d-flex align-items-center justify-content-center">
                <p style="margin: 0 10px 0 0; font-size: 17px;" class="navbar-brand">Tema:</p>
                <img src={sun} class="theme-icon" alt="Claro">
                <img src={sunLight} class="theme-icon" alt="Claro" style="display: none;">
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="selectTheme" bind:checked={switchOn} on:change={handleSwitch}>
                </div>
                <img src={moon} alt="Oscuro" class="theme-icon" id="moon">
                <img src={moonLight} alt="Oscuro" class="theme-icon" id="light-moon" style="display: none;">
            </div>
        </div>
    </div>
</nav>

<style>
    .theme-icon{
        max-height: 20px;
    }
    .nav-separator {
        width: 1px;
        background-color: rgb(184, 184, 184);
        height: 30px;
        margin: 0px 10px;
    }
</style>