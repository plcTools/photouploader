/* this component select the photo to upload only */
import React, { useState, useCallback } from "react";
import processPhoto from './utils/ProcessPhoto.js'
import MakePhotoPreview from "./utils/makePhotoPreview";
import PhotoSection from './objects/PhotoSection'
import {IconPc, IconGdrive, IconUnsplash, IconInstagram,IconUpload } from './objects/IconsReact'
import './styles.css'



export function PhotoSelector() {
    /* creo el state con un array de imagenes */
    const [stateFiles, setStateFiles] = useState([]);
    const [state, setState] = useState({ preview: [], files: [] });

    const handleFileSelected = useCallback((selectedFiles) => {
        /* itero sobre las filas selecionadas y transformo en array */
        const arr = Object.values(selectedFiles.target.files).map((e) => e)
        /* agrega imagen previa de las fotos al state llmando a la funcino externa y 
        ademas agrega el objeto ontenedor de las files para posteriormente enviarlas al
        process file, las miniaturas tienen un formato distinto a las files */
        setState({
            ...state,
            preview: state.preview.concat(MakePhotoPreview(selectedFiles.target.files)),//add photo preview to state
            files: state.files.concat(arr)
        })

    }, [state])

    /* envia los files al la funcion externa ProccesFile y recibo link base64
    dichos links ingresan al state local */
    const sendToProcess = (selectedFiles) => {
        processPhoto(selectedFiles).then((processedFiles) =>
            /* aqui va el codigo con la accion a realizar al obtener las fotos */
            setStateFiles(processedFiles)
        );
    }

    const handleUpload = () => {
        /* procesa las fotos selecionadas y las envio al state de files */
        sendToProcess(state.files);
    }
    const handledDelete = (e) => {
        /* elimina del statePreview la foto clickeada */
        setState({
            ...state,
            preview: state.preview.filter((val, i) => i.toString() !== e.target.id),
            files: state.files.filter((val, i) => i.toString() !== e.target.id)
        })
    }

    return (
        <>
            <div className='container_all'>

                <section id='header' className='header_class'>
                    <IconPc onChange={(selectedFiles) => handleFileSelected(selectedFiles)} />
                    <IconGdrive onChange={(selectedFiles) => handleFileSelected(selectedFiles)} />
                    <IconUnsplash onChange={(selectedFiles) => handleFileSelected(selectedFiles)} />               
                    <IconInstagram onChange={(selectedFiles) => handleFileSelected(selectedFiles)} />

                </section>

                <section id='photoSection' className='photo_section'>
                    <PhotoSection onClick={handledDelete} state={state.preview} />
                </section>

                <footer className='footer_class'>
                    {state.preview.length > 0 &&
                        <IconUpload onClick={handleUpload} />}
                </footer>

            </div>
        </>

    )



}


export const memoPhotoSelector = React.memo(PhotoSelector);