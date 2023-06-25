<script lang="ts">
    import { enhance } from '$app/forms';
    import {DateInput, localeFromDateFnsLocale} from 'date-picker-svelte';
    import {es} from 'date-fns/locale';

    let locale = localeFromDateFnsLocale(es)
    let date = new Date()
</script>

    <div class=" flex flex-col my-32  max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <form id="fpregunta" class="flex flex-col mx-2" action="?/query" method="post" use:enhance>
            <label class="mt-1" for="inombre">Nombre:</label>
            <input id="inombre" class="focus:outline-blue-500 text-lg rounded max-w py-1 mb-3 border border-black" name="nombre" autocomplete="off" required>

            <label for="ifechan">Fecha de Nacimiento:</label>
            <input id="ifechan" bind:value={date} class="hidden" name="fnacimiento" autocomplete="off" required>
            <DateInput min={new Date("1940-01-01")} format="yyyy-MM-dd" bind:value={date} {locale}/>

            <label for="icorreo">Correo:</label>
            <input id="icorreo" class="focus:outline-blue-500 text-lg rounded max-w py-1 mb-3 border border-black" name="correo" autocomplete="off" required>
            
            <label for="ipregunta">Pregunta:</label>
            <input id="ipregunta" class="focus:outline-blue-500 text-lg rounded max-w py-1 mb-3 border border-black" name="pregunta" autocomplete="off" required>
        </form>
        <button class=" rounded bg-blue-200 px-3 py-1.5 text-sm font-semibold max-w pt-2 mb-3 mx-2" type="submit" form="fpregunta" value="Submit">Ok</button>
    </div>


