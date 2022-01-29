import './Views.css'

export const Views = ({ view, rows, cols }) => {
    return (
        <div className='Views'>

            <h3 className='title'>Vista de planta</h3>
            <h5>Origen del grid: Extremo inferior izquierdo</h5>
            <div className='Grid' style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`
            }}>


                {view}

            </div>
        </div>
    )
}