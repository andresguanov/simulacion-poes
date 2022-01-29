import { useState } from 'react'
import './Sectors.css'

export const Sectors = ({ number }) => {

    const [color, setColor] = useState("black")

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className='Sectors'>
            <div className="title">
                <h3 style={{ color: color }}>N°{number}</h3>

                <input onChange={handleColor} type="color" name="sectorColor" defaultValue="#da1010" min={0} />
            </div>
            <input type="number" name="iFrom" min={1} required />
            <input type="number" name="jFrom" min={1} required />
            <input type="number" name="kFrom" min={1} required />
            <input type="number" name="iTo" min={1} required />
            <input type="number" name="jTo" min={1} required />
            <input type="number" name="kTo" min={1} required />
            <input type="number" name="porosity" step="any" min={0} max={1} required />
            <input type="number" name="netToGross" step="any" min={0} max={1} required />
            <input type="number" name="sw" step="any" min={0} max={1} required />
            <input type="number" name="boi" step="any" min={1} required />
        </div>
    )
}