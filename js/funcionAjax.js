
function peticion() {

    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    const fran = document.createDocumentFragment();
    const idtem = document.getElementById("idtem");

    //Checar con el template y codigicación de la funcion principal

    http.onreadystatechange = function () {

        // Validar la respuesta de la peticion
        if (this.status == 200 && this.readyState == 4) {

            //console.log(this.responseText);

            //Seleccionar y limpiar donde imprimiremos la informacion
            let res = document.getElementById("resultado");
            res.innerHTML = "";

            // Convertir la infomracion XML en un objeto con JSON
            const json = JSON.parse(this.responseText);


            for (const datos of json) {

                const clone = idtem.content.firstElementChild.cloneNode(true);

                clone.querySelector(".txtTitle").textContent = datos.title;
                clone.querySelector(".imgs").src = datos.thumbnailUrl;
                clone.querySelector("#Modelo").href = "#abrirModelo" + datos.id;
                clone.querySelector(".txtAlbumId").textContent = datos.albumId;
                clone.querySelector(".txtId").textContent = datos.id;
                clone.querySelector("#abrirModelo").id = "abrirModelo" + datos.id;
                clone.querySelector(".imagen").src = datos.url;
                console.log(clone.querySelector(".imagen").src)


                fran.appendChild(clone)

            } // Termina el for

            res.innerHTML = "";
            res.appendChild(fran);

        }
    }


    //Esto se usa para imprimir
    http.open('GET', url, true);
    http.send();

    document.getElementById('btnLimpiar').addEventListener('click',function(){
        const res=document.getElementById('resultado');
        res.innerHTML="";
       
    }); 

}