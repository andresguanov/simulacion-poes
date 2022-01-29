import './InputSectors.css'

export const InputSectors = ({ handleSubmit, sectors }) => {
    return (
        <form className="InputSectors" onSubmit={handleSubmit}>

            {
                sectors.length > 0
                && <>
                    <div className='table' >
                        <HeaderTable />
                        {sectors}
                        <FooterTable />
                    </div>
                    <button type="submit">Calcular</button>

                </>
            }
        </form>
    )
}


const HeaderTable = () => {
    return (
        <header>
            <h4>Sector</h4>
            <h4>i<sub>inicial</sub></h4>
            <h4>j<sub>inicial</sub></h4>
            <h4>k<sub>inicial</sub></h4>
            <h4>i<sub>final</sub></h4>
            <h4>j<sub>final</sub></h4>
            <h4>k<sub>final</sub></h4>
            <h4>Porosidad </h4>
            <h4>NTG</h4>
            <h4>Sw<sub>i</sub></h4>
            <h4>Bo<sub>i</sub></h4>
        </header>
    )
}

const FooterTable = () => {
    return (
        <footer>
            <p><strong>i , j , k :</strong> Posiciones de las celdas por cada sector</p>
            <p>Porosidad específica del sector, fracción</p>
            <p><strong>NTG:</strong> Net to gross específico del sector, fracción </p>
            <p><strong>Swi :</strong> Saturación inicial de agua específico del sector, fracción</p>
            <p><strong>Boi :</strong> Factor volumétrico de petróleo inicial específico del sector, BY/BN</p>
        </footer>
    )
}
