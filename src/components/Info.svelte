<script>
    import Basic from '../assets/basic.png';
    import Std from '../assets/standard.png';
    import Pro from '../assets/pro.png';
    import Master from '../assets/master.png';

    import { darkMode } from './store/store.js';
    import Plan from './Plan.svelte';

    let plans = [
        {
            title: '1. Plan Básico',
            desc: 'Ideal para la micro-empresa',
            price: 'S/ 82',
            img: Basic
        },
        {
            title: '2. Plan Standard',
            desc: 'Para pequeñas y medianas empresas',
            price: 'S/ 150',
            img: Std,
        },
        {
            title: '3. Plan Profesional',
            desc: 'Ideal para sólamente páginas web',
            price: 'S/ 220',
            img: Pro,
        },
        {
            title: '4. Plan Master',
            desc: 'Ideal para sólamente páginas web',
            price: 'S/ 360',
            img: Master,
        }
    ]
</script>


<section id="info" class={`container-fluid py-5 ${$darkMode ? 'bg-dark-cyan text-light' : 'bg-cyan'}`}>
    <div class="container text-center">
        <h1 class="text-undlnd">Precios y planes:</h1>
        <div class="row">
            {#each plans as plan}
                <Plan conf={plan}/>
            {/each}
        </div>
    </div>
    
</section>

<style>
</style>