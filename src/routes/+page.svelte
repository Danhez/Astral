<div class=" flex flex-col max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <form id="fpregunta" class="flex flex-col mx-2" action="?/query" method="post">
        <label class="mt-1" for="inombre">Nombre:</label>
        <input id="inombre" class="rounded max-w pt-2 mb-3 border border-black" name="nombre" autocomplete="off" required>

        <label for="ifechan">Fecha de Nacimiento:</label>
        <input id="ifechan" class="rounded max-w pt-2 mb-3 border border-black" name="fnacimiento" autocomplete="off" required>

        <label for="icorreo">Correo:</label>
        <input id="icorreo" class="rounded max-w pt-2 mb-3 border border-black" name="correo" autocomplete="off" required>
        
        <label for="ipregunta">Pregunta:</label>
        <input id="ipregunta" class="rounded max-w pt-2 mb-3 border border-black" name="pregunta" autocomplete="off" required>
    </form>
    <button class=" rounded bg-blue-200 px-3 py-1.5 text-sm font-semibold max-w pt-2 mb-3 mx-2" type="submit" form="fpregunta" value="Submit">Ok</button>
</div>
