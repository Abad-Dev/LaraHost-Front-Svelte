<script>
    import Server from '../assets/server-min.png';
    
    import { darkMode } from './store/store.js';
</script>

<section id="main" class={`container-fluid ${$darkMode ? 'bg-dark-grey text-light' : 'bg-white'}`}>
    <div class="container">
        <div class="row h-100 py-5">
            <div class="col-12 col-sm-6 text-center text-sm-start d-flex align-items-center">
                <div>
                    <h1 class="title text-undlnd">La mejor opción para comenzar o potenciar un negocio</h1>
                    
                    <button class={`learn-more ${$darkMode ? 'learn-more-dark' : ''}`}>
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                        <a class="button-text" href="#prices">Ver Precios</a>
                    </button>
                </div>
            </div>
            
            <div class="col-6 d-none d-sm-block text-end" id="main-img">
                <img src={Server} alt="">
            </div>
        </div>
    </div>
</section>

<style>
    .title{
        margin-bottom: 40px;
    }

    @media (max-width: 576px){
        #main {
            background-image: url('../assets/server-min-op3.png');
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }


    
    a{
        text-decoration: none;
    }

    /* From uiverse.io */
    button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: 22px;
        font-family: 'Ubuntu';
    }

    button.learn-more {
        width: 12rem;
        height: auto;
    }

    button.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: var(--secondary-color);
        border-radius: 1.625rem;
    }

    button.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
    }

    button.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
    }

    button.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: "";
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid var(--third-color);
        border-right: 0.125rem solid var(--third-color);
        transform: rotate(45deg);
    }

    button.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.42rem 0;
        margin: 0 0 0 1.85rem;
        color: var(--third-color);
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
    }


    button:hover .circle {
        width: 100%;
    }

    button:hover .circle .icon.arrow {
        background: var(--third-color);
        transform: translate(1rem, 0);
    }

    .learn-more-dark .circle .icon.arrow::before{
        border-top: 0.125rem solid var(--secondary-color) !important;
        border-right: 0.125rem solid var(--secondary-color) !important;
    }

    .learn-more-dark:hover .circle .icon.arrow{
        background: var(--secondary-color) !important;
    }

    .learn-more-dark .button-text{
        color: #fff !important;
    }

    .learn-more-dark .circle{
        background-color: var(--dark-grey) !important;
    }
</style>