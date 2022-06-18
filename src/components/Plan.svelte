<script>
    export let conf;
    import Check from '../assets/garrapata.png';
    import Cross from '../assets/cross.svg'

    import { darkMode } from './store/store';
</script>

<div class="col-12 col-sm-6 col-xl-3">
    <div class={`plan ${$darkMode ? 'bg-dark-grey text-light' : 'light-plan'}`}>
        <img src={conf.img} alt="">
        <h3 class="title text-undlnd">
            {conf.title}
        </h3>
        <small class="text-secondary">
            {conf.desc}
        </small>
        
        <div class="d-flex justify-content-center" style="margin-top: 5px;">
            <h1 style="margin-bottom: 0;">{conf.price}</h1><p style="align-self: flex-end; margin-bottom: 6px;">&nbsp;/año</p>
        </div>
        
        <hr class="separator">

        {#each conf.features as feature}
            <div class="d-flex mb-3">
                <img src={feature.have ? Check : Cross} alt="" class="icon"/>
                {#if feature.amount}
                    <b>{feature.amount}</b> &nbsp;
                {/if}
                {feature.label}
            </div>
        {/each}
    </div>
</div>

<style>
    .plan {
        display: flex;
        flex-direction: column;
        min-height: 600px;
        border-radius: 10px;
        margin: 10px 0px;
        box-shadow: 4px 3px 46px -41px rgb(0 0 0 / 17%);
        -webkit-box-shadow: 4px 3px 46px -41px rgb(0 0 0 / 17%);
        -moz-box-shadow: 4px 3px 46px -41px rgba(0,0,0,0.17);
        padding: 15px 30px;
        padding-top: 20px;
        border: 1px solid var(--nav-color);
        background-color: #fff;
    }

    .plan > img {
        margin-left: auto;
        margin-right: auto;
        max-height: 170px;
    }

    .plan .separator {
        border-radius: 3px;
        margin-left: 15%;
        margin-right: 15%;
    }

    .icon{
        max-height: 20px;
        margin-right: 5px;
        margin-top: 3px
    }

    @media (max-width: 576px){
        .plan {
            margin: 0;
            margin-top: 30px;
        }
    }
</style>