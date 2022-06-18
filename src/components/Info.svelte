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
            img: Basic,
            features: [
                {have: false, label: 'Panel de control'},
                {have: false, label: 'Base de datos'},
                {have: true, amount: 2, label: 'Cuentas de correos'},
                {have: true, amount: 500, label: 'MB Espacio en disco'},
                {have: true, amount: 2, label: 'GB Transferencia mensual'},
                {have: true, amount: 1, label: 'Cuenta FTP'},
                {have: true, label: 'Web Mail'},
                {have: true, label: 'Email Forwarding'},
                {have: true, label: 'Parked Domains'}
            ]
        },
        {
            title: '2. Plan Standard',
            desc: 'Para pequeñas y medianas empresas',
            price: 'S/ 150',
            img: Std,
            features: [
                {have: true, label: 'Panel de control'},
                {have: true, amount: 1, label: 'Base de datos'},
                {have: true, amount: 5, label: 'Cuentas de correos'},
                {have: true, amount: 1000, label: 'MB Espacio en disco'},
                {have: true, amount: 5, label: 'GB Transferencia mensual'},
                {have: true, amount: 2, label: 'Cuentas FTP'},
                {have: true, label: 'Web Mail'},
                {have: true, label: 'Email Forwarding'},
                {have: true, label: 'Parked Domains'}
            ]
        },
        {
            title: '3. Plan Profesional',
            desc: 'Ideal para sólamente páginas web',
            price: 'S/ 220',
            img: Pro,
            features: [
                {have: true, label: 'Panel de control'},
                {have: true, amount: 2, label: 'Base de datos'},
                {have: true, amount: 10, label: 'Cuentas de correos'},
                {have: true, amount: 2000, label: 'MB Espacio en disco'},
                {have: true, amount: 10, label: 'GB Transferencia mensual'},
                {have: true, amount: 5, label: 'Cuenta FTP'},
                {have: true, label: 'Web Mail'},
                {have: true, label: 'Email Forwarding'},
                {have: true, label: 'Parked Domains'}
            ]
        },
        {
            title: '4. Plan Master',
            desc: 'Ideal para sólamente páginas web',
            price: 'S/ 360',
            img: Master,
            features: [
                {have: true, label: 'Panel de control'},
                {have: true, amount: 5, label: 'Base de datos'},
                {have: true, amount: 25, label: 'Cuentas de correos'},
                {have: true, amount: 3000, label: 'MB Espacio en disco'},
                {have: true, amount: 20, label: 'GB Transferencia mensual'},
                {have: true, amount: 5, label: 'Cuenta FTP'},
                {have: true, label: 'Web Mail'},
                {have: true, label: 'Email Forwarding'},
                {have: true, label: 'Parked Domains'}
            ]
        }
    ]
</script>


<section id="info" class={`container-fluid py-5 ${$darkMode ? 'bg-dark-cyan text-light' : 'bg-cyan'}`}>
    <div class="container text-center">
        <h1 class="text-undlnd" id="prices">Precios y planes:</h1>
        <div class="row">
            {#each plans as plan}
                <Plan conf={plan}/>
            {/each}
        </div>
        <small style="color: #A2A2A2">*Para planes corporativos o personalizados, contáctenos</small>
    </div>
    
</section>

<style>
</style>