import './Results.css'

export const Results = ({
    volumes,
    cellVolume,
    sectorColors
}) => {

    const { bulkVolume, porousVolume, waterVolume, oilVolume } = volumes
    const decimals = 2

    return (

        <div className='Results'>

            {
                bulkVolume.length > 0 &&

                <div>
                    <h2 className='title'>Resultados</h2>


                    <p><strong>Volumen de la celda:</strong> {(7758 * cellVolume).toFixed(decimals)} bls</p>

                    <div className='Sector-results'>{bulkVolume.map((volume, i) => (
                        <div key={i} >
                            <h3 style={{ color: sectorColors[i] }}>Sector {i + 1}</h3>

                            <p><strong>Volumen total:</strong> {volume.toFixed(decimals)} MM Bls</p>
                            <p><strong>Volumen poroso:</strong> {porousVolume[i].toFixed(decimals)} MM Bls</p>
                            <p><strong>Volumen de agua:</strong> {waterVolume[i].toFixed(decimals)} MM Bls</p>
                            <p><strong>Volumen de petróleo:</strong> {oilVolume[i].toFixed(decimals)} MM Bls</p>
                        </div>
                    ))}</div>

                    <h3>Global</h3>
                    <p><strong>Volumen total:</strong> {bulkVolume.reduce((a, b) => a + b).toFixed(decimals)}MM Bls
                    </p>
                    <p><strong>Volumen poroso total:</strong> {porousVolume.reduce((a, b) => a + b).toFixed(decimals)}MM Bls
                    </p>
                    <p><strong>Volumen de agua total:</strong> {waterVolume.reduce((a, b) => a + b).toFixed(decimals)}MM Bls
                    </p>
                    <p><strong>POES:</strong> {oilVolume.reduce((a, b) => a + b).toFixed(decimals)}MM Bls
                    </p>

                </div>
            }

        </div>
    )
}