export const InputData = () => {
    return (
        <>
            <div>
                <h3>Subdivisión el yacimiento</h3>
                <div>
                    <label htmlFor="i">Ingrese i: </label>
                    <input type="number" name="i" id="i" min={4} required />
                </div>

                <div>
                    <label htmlFor="j">Ingrese j: </label>
                    <input type="number" min={4} name="j" id="j" required />
                </div>

                <div>
                    <label htmlFor="k">Ingrese k: </label>
                    <input type="number" min={4} name="k" id="k" required />
                </div>

            </div>

            <div>
                <h3>Tamaño de la celda</h3>
                <div>
                    <label htmlFor="cellWidth">Ingrese el ancho (m): </label>
                    <input type="number" min={0} name="cellWidth" id="cellWidth" required step="any" />
                </div>

                <div>
                    <label htmlFor="cellHeight">Ingrese el largo (m): </label>
                    <input type="number" min={0} name="cellHeight" id="cellHeight" required step="any" />
                </div>

                <div>
                    <label htmlFor="cellThickness">Ingrese el espesor (m): </label>
                    <input type="number" min={0} name="cellThickness" id="cellThickness" required step="any" />
                </div>
            </div>

            <div>
                <h3>Sectores</h3>
                <div>
                    <label htmlFor="sectorsLength">Ingrese el número de sectores: </label>
                    <input type="number" min={4} name="sectorsLength" id="sectorsLength" required />
                </div>
            </div>




            <button type="submit">Ingresar datos</button>

        </>
    )
}