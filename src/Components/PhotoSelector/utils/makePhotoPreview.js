


   /* creo los link de vista previa y los ingreso al state Local */
export default function makePhotoPreview (selectedFiles) {
    let arr = []
    /* itero el objeto y devuelvo un array apara ingresar al state */
    Object.entries(selectedFiles).forEach(element => {
        const url = URL.createObjectURL(element[1])
        arr.push(url)
    });
    return arr
}