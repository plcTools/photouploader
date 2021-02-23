
/* recibe por props la funcion de eliminar fotos y el array de links preview
de las fotos y devuelve el componente renderizando las previews */
export default function PhotoSection(props) {

    return (

        <>
            {props.state && props.state.map((e, i) => (
                <div key={i} id='photoContainer' className='photo_container'>
                    <input
                        key={i}
                        id={i}
                        onClick={props.onClick}
                        style={{ width: '100%', height: '100%' }}
                        type="image"
                        src={e}
                        alt="" />

                </div>
            ))}

        </>

    )

}