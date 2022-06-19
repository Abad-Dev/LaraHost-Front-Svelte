<script>
    import { darkMode } from "./store/store";
</script>

<section id="contact" class={`container-fluid py-5 ${$darkMode ? 'bg-dark-grey text-light' : 'bg-white'}`}>
    <div class="container">
    <h1 class="text-undlnd text-center">Cont&aacute;ctenos</h1>
        <form action="https://formsubmit.co/soporte@larahost.net" method="POST">
            <div class="row">
                <div class="col-12 py-2">
                    <label for="contactPlan" class='form-label'>Plan de su interés:</label>
                    <select class='form-select {$darkMode ? 'bg-dark-grey text-light' : ''}' id="contactPlan" aria-label=".form-select-sm example" name="Plan">
                        <option selected>Seleccione el plan</option>
                        <option value="1">Plan Básico</option>
                        <option value="2">Plan Standard</option>
                        <option value="3">Plan Profesional</option>
                        <option value="4">Plan Master</option>
                        <option value="5">Plan Personalizado/Corporativo</option>
                    </select>
                </div>
                <div class="col-12 col-lg-6">
                    <label for="contactEmail" class="form-label">Refiéranos su nombre:</label>
                    <input type="text" name="Nombre" id="contactEmail" class="w-100 form-control" placeholder="Con quien contactarnos" required >
                </div>
                <div class="col-12 col-lg-6">
                    <label for="contactNum" class="form-label">Nro. de teléfono o correo electr&oacute;nico:</label>
                    <input class="form-control" id="contactNum" name="Nro.Telefonico" required>
                </div>
                </div>
                <div class="row py-3">
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Escriba aquí" id="floatingTextarea" name="Adicional:"></textarea>
                            <label for="floatingTextarea"><small>Indicaciones o preguntas</small></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <button type="submit" id="submit" class="{$darkMode ? 'bg-dark-grey text-light' : 'bg-white'}">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</section>

<style>
    section.bg-dark-grey .form-control{
        background-color: var(--bg-dark-grey) !important;
        color: #fff !important;
        border: 1px solid var(--bs-secondary) ;
    }
    section.bg-dark-grey select{
        border: 1px solid var(--bs-secondary) !important;
    }
    textarea{
        min-height: 200px;
    }

    #submit {
        border-radius: 10px;
        width: 100%;
        max-width: 180px;
        padding: 5px 0;
        border: 1px solid var(--main-color);
        transition-duration: .3s;
        cursor: inherit;
    }

    #submit:hover{
        background-color: var(--secondary-color) !important;
    }

    section.bg-dark-grey #submit:hover {
        background-color: var(--dark-grey) !important;
    }
</style>

