/* recibe por props la funcion de onChangE
que se ejecuta en el componente padre */
export function IconPc(props) {

    return (
        <div>
            <label
                className="label-image"
            >
                <input
                    name="images"
                    className="image__selector"
                    accept="image/*"
                    multiple={true}
                    style={{ display: 'none' }}
                    type="file"
                    onChange={props.onChange}
                />
                <svg heigth='35px' width='35px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop" class="svg-inline--fa fa-laptop fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
            </label>
        </div>
    )


}


/* recibe por props la funcion de onChangE
que se ejecuta en el componente padre */
export function IconGdrive(props) {

    return (
        <div>
            <label
                className="label-image"
            >
                <input
                    name="images"
                    className="image__selector"
                    accept="image/*"
                    multiple={true}
                    style={{ display: 'none' }}
                    type="file"
                    onChange={props.onChange}
                />
                <svg heigth='35px' width='35px' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-drive" class="svg-inline--fa fa-google-drive fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path></svg>
            </label>
        </div>
    )


}/* recibe por props la funcion de onChangE
que se ejecuta en el componente padre */
export function IconUnsplash(props) {

    return (
        <div>
            <label
                className="label-image"
            >
                <input
                    name="images"
                    className="image__selector"
                    accept="image/*"
                    multiple={true}
                    style={{ display: 'none' }}
                    type="file"
                    onChange={props.onChange}
                />
                <svg heigth='35px' width='35px' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unsplash" class="svg-inline--fa fa-unsplash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"></path></svg>
            </label>
        </div>
    )


}

/* recibe por props la funcion de onChangE
que se ejecuta en el componente padre */
export function IconInstagram(props) {

    return (
        <div>
            <label
                className="label-image"
            >
                <input
                    name="images"
                    className="image__selector"
                    accept="image/*"
                    multiple={true}
                    style={{ display: 'none' }}
                    type="file"
                    onChange={props.onChange}
                />
               <svg heigth='35px' width='35px' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </label>
        </div>
    )


}

/* recibe por props la funcion de onChangE
que se ejecuta en el componente padre */
export function IconUpload(props) {

    return (
        <div>
            <label className="label-image">
                <input
                    type="button"
                    style={{ display: 'none' }}
                    onClick={props.onClick}>
                </input>
                <svg heigth='50px' width='50px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud-upload-alt" class="svg-inline--fa fa-cloud-upload-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path></svg>
            </label>
        </div>
    )


}