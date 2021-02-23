/* ESTA FUNCION SOLO ENVIA EL ARCHIVO LLAMA A LA FUNCION
makeUrl Y LE PASA EL ARCHIVO SELECIONADO, LO HICE CON ASYNC
PORQUE ES UNA PROMESA */
export default async function processPhoto(selectedFiles) {//la llamada es asincrona por si el archivo es muy grande
    try {

        const dataUrl = await makeUrl(selectedFiles)
        return dataUrl

    } catch (err) {

        alert('Se cancelo la carga o No se pudo leer la imagen seleccionada')

    }
    
}


/* ESTA FUNCION RECIBE UN FILE DE IMAGEN Y LO CONVIERTE EN LINK DE 64BIT
LO HICE CON UN PROMESA POR SI EL ARCHIVO ES MUY GRANDE */


async function makeUrl(selectedFiles) {
    let filesArr = []
    for (var i = 0; i < selectedFiles.length; i++) {
        var file = selectedFiles[i];
        var imageType = /image.*/;
        /* analizamos si el file es una foto, si no es una foto
        pasa al siguiente lemento sin ejecutar el codigo de abajo */
        if (!file.type.match(imageType)) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function () {
            return function (e) {
                filesArr.push(e.target.result)
                
            };
        })();
        reader.readAsDataURL(file);
    }
    return filesArr
}