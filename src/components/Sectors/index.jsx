import { useState } from 'react'
import './Sectors.css'

export const Sectors = ({ number }) => {

    const [color, setColor] = useState("black")

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <div className="title">
                <h3 style={{ color: color }}>Sector N°{number}</h3>

                <input onChange={handleColor} type="color" name="sectorColor" defaultValue="#da1010" min={0} />
            </div>



            <div>
                <label htmlFor="iFrom">Posición i inicial: </label>
                <input type="number" name="iFrom" id="iFrom" min={1} required />
            </div>

            <div>
                <label htmlFor="jFrom">Posición j inicial: </label>
                <input type="number" name="jFrom" id="jFrom" min={1} required />
            </div>

            <div>
                <label htmlFor="kFrom">Posición k inicial: </label>
                <input type="number" name="kFrom" id="kFrom" min={1} required />
            </div>

            <div>
                <label htmlFor="iTo">Posición i final: </label>
                <input type="number" name="iTo" id="iTo" min={1} required />
            </div>

            <div>
                <label htmlFor="jTo">Posición j final: </label>
                <input type="number" name="jTo" id="jTo" min={1} required />
            </div>

            <div>
                <label htmlFor="kTo">Posición k final: </label>
                <input type="number" name="kTo" id="kTo" min={1} required />
            </div>

            <div>
                <label htmlFor="porosity">Porosidad específica del sector: </label>
                <input type="number" name="porosity" id="porosity" step="any" min={0} max={1} required />
            </div>

            <div>
                <label htmlFor="netToGross">Net to Gross específico del sector: </label>
                <input type="number" name="netToGross" id="netToGross" step="any" min={0} max={1} required />
            </div>

            <div>
                <label htmlFor="sw">Swi específico del sector: </label>
                <input type="number" name="sw" id="sw" step="any" min={0} max={1} required />
            </div>

            <div>
                <label htmlFor="boi">Boi específico del sector: </label>
                <input type="number" name="boi" id="boi" step="any" min={1} required />
            </div>

        </div>
    )
}