<script>
    import { darkMode } from './store/store';
</script>

<footer class="container-fluid {$darkMode ? 'bg-dark-cyan text-light' : 'bg-cyan'}">
    <p>Desarrollado por <a href="https://guiacalidad.com.pe/" target="_blank">GUIACALIDAD</a></p>
</footer>

<style>
    p{
        margin: 0;
    }
    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 88px;
    }
    .bg-dark-cyan a{
        color: #fff;
    }
    .bg-cyan a {
        color: #000;
    }

</style>