
import { useEffect, useState } from 'react'
import './App.css'
import { InputData } from './components/InputData'
import { Sectors } from './components/Sectors'


const Header = () => {
  return (
    <header className='Header'>
      <div className='Header-left'>
        <h1>Universidad Central del Ecuador</h1>
        <h4>Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental</h4>
        <h5>Simulación Matemática Componente Estático</h5>



      </div>
      <div>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Escudo_de_la_Universidad_Central_del_Ecuador.png" alt="uce" /> */}
        <img src="https://static.wixstatic.com/media/4f9ac1_faed42d313204930a36843c8494530ee~mv2.png/v1/fit/w_313%2Ch_239%2Cal_c/file.png" alt="figempa" />

      </div>

    </header>
  )
}


const calculateVolume = (cells, cellVol) => {
  const [fromCell, toCell] = cells
  let result = 1

  for (let i = 0; i < fromCell.length; i++) {
    result *= toCell[i] - fromCell[i] + 1
  }

  return 7758 * result * cellVol / (10 ** 6)
}

const createGrid = (cols, rows) => {
  const grid = []

  for (let i = 0; i < rows; i++) {
    const row = []
    for (let j = 0; j < cols; j++) {
      row.push(<div></div>)

    }
    grid.push(row)
  }

  return grid

}









function App() {

  const [sectorColors, setSectorColors] = useState([])
  const [sectors, setSectors] = useState([])
  const [cellVolume, setCellVolume] = useState(0)
  const [bulkVolume, setBulkVolume] = useState([])
  const [porousVolume, setPorousVolume] = useState([])
  const [waterVolume, setWaterVolume] = useState([])
  const [oilVolume, setOilVolume] = useState([])
  const [positions, setPositions] = useState([])
  const [sectorPositions, setSectorPositions] = useState([])
  const [top, setTop] = useState([])
  const [lateral, setLateral] = useState([])


  const topView = (cells) => {
    const [fromCell, toCell] = cells
    const cols = positions[0]
    const rows = positions[1]
    const grid = createGrid(cols, rows)


    for (let s = 0; s < sectors.length; s++) {
      const [iFrom, jFrom, kFrom] = fromCell[s]
      const iTo = toCell[s][0]
      const jTo = toCell[s][1]

      if (kFrom === 1) {
        for (let j = jFrom - 1; j < jTo; j++) {
          for (let i = iFrom - 1; i < iTo; i++) {


            grid[j][i] = <div style={{ backgroundColor: sectorColors[s] }}></div>
          }
        }
      }
    }
    return grid
  }

  const lateralView = (cells) => {
    const [fromCell, toCell] = cells
    const rows = positions[2]
    const cols = positions[1]
    const grid = createGrid(cols, rows)


    for (let s = 0; s < sectors.length; s++) {
      const [iFrom, jFrom, kFrom] = fromCell[s]
      const kTo = toCell[s][2]
      const jTo = toCell[s][1]

      if (iFrom === 1) {
        for (let k = kFrom - 1; k < kTo; k++) {
          for (let j = jFrom - 1; j < jTo; j++) {

            grid[k][j] = <div style={{ backgroundColor: sectorColors[s] }}></div>
          }
        }
      }
    }
    return grid
  }

  useEffect(() => {

    setTop(topView(sectorPositions).reverse())

    setLateral(lateralView(sectorPositions))
  }, [sectorColors])



  const handleSubmit = (e) => {
    e.preventDefault()
    const i = Number(e.target.i.value)
    const j = Number(e.target.j.value)
    const k = Number(e.target.k.value)
    const cellWidth = e.target.cellWidth.value
    const cellHeight = e.target.cellHeight.value
    const cellThickness = e.target.cellThickness.value
    const sectorsLength = e.target.sectorsLength.value

    const cellVol = (cellWidth * cellHeight * cellThickness) * 3.28 ** 3 / 43560

    const sectors = []

    for (let i = 0; i < sectorsLength; i++) {
      sectors.push(<Sectors key={i} number={i + 1} />)
    }



    setCellVolume(cellVol)
    setSectors(sectors)
    setPositions([i, j, k])


  }

  const handleSectors = (e) => {
    e.preventDefault()

    const colors = [...e.target.sectorColor].map(el => el.value)
    const iFrom = [...e.target.iFrom]
    const jFrom = [...e.target.jFrom]
    const kFrom = [...e.target.kFrom]
    const iTo = [...e.target.iTo]
    const jTo = [...e.target.jTo]
    const kTo = [...e.target.kTo]
    const porosity = [...e.target.porosity].map(el => Number(el.value))
    const netToGross = [...e.target.netToGross].map(el => Number(el.value))
    const Sw = [...e.target.sw].map(el => Number(el.value))
    const Boi = [...e.target.boi].map(el => Number(el.value))

    const fromCell = iFrom.map((el, i) => (
      [
        Number(el.value),
        Number(jFrom[i].value),
        Number(kFrom[i].value),
      ]
    ))
    const toCell = iTo.map((el, i) => (
      [
        Number(el.value),
        Number(jTo[i].value),
        Number(kTo[i].value),
      ]
    ))





    let bulkVol = []
    let porousVol = []
    let waterVol = []
    let oilVol = []


    for (let i = 0; i < sectors.length; i++) {

      const cells = [fromCell[i], toCell[i]]
      const bulk = calculateVolume(cells, cellVolume)
      const net = bulk * netToGross[i]


      bulkVol.push(bulk)
      porousVol.push(net * porosity[i])
      waterVol.push(net * porosity[i] * Sw[i])
      oilVol.push(net * porosity[i] * (1 - Sw[i]) / Boi[i])
    }


    setSectorColors(colors)
    setSectorPositions([fromCell, toCell])
    setBulkVolume(bulkVol)
    setPorousVolume(porousVol)
    setWaterVolume(waterVol)
    setOilVolume(oilVol)

  }





  return (
    <>
      <Header />
      <form className="InputData" onSubmit={handleSubmit}>
        <InputData />
      </form>

      <form className="InputSectors" onSubmit={handleSectors}>

        {sectors.length > 0 &&
          <>

            <section >
              <div className='Input-titles'>
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
              </div>


              {sectors}
              <footer>
                <p><strong>i , j , k :</strong> Posiciones de las celdas por cada sector</p>
                <p>Porosidad específica del sector, fracción</p>
                <p><strong>NTG:</strong> Net to gross específico del sector, fracción </p>


                <p><strong>Swi :</strong> Saturación inicial de agua específico del sector, fracción</p>
                <p><strong>Boi :</strong> Factor volumétrico de petróleo inicial específico del sector, BY/BN</p>

              </footer>
            </section>
            <button type="submit">Calcular</button>

          </>
        }
      </form>


      <div className='Results'>

        {
          bulkVolume.length > 0 &&

          <div>
            <h2 className='title'>Resultados</h2>


            <p><strong>Volumen de la celda:</strong> {(7758 * cellVolume).toFixed(2)} bls</p>

            <div className='Sector-results'>{bulkVolume.map((volume, i) => (
              <div key={i} >
                <h3 style={{ color: sectorColors[i] }}>Sector {i + 1}</h3>

                <p><strong>Volumen total:</strong> {volume.toFixed(2)} MM Bls</p>
                <p><strong>Volumen poroso:</strong> {porousVolume[i].toFixed(2)} MM Bls</p>
                <p><strong>Volumen de agua:</strong> {waterVolume[i].toFixed(2)} MM Bls</p>
                <p><strong>Volumen de petróleo:</strong> {oilVolume[i].toFixed(2)} MM Bls</p>
              </div>
            ))}</div>

            <h3>Global</h3>
            <p><strong>Volumen total:</strong> {bulkVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
            </p>
            <p><strong>Volumen poroso total:</strong> {porousVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
            </p>
            <p><strong>Volumen de agua total:</strong> {waterVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
            </p>
            <p><strong>POES:</strong> {oilVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
            </p>

          </div>
        }

      </div>

      {
        top.length > 0 &&
        <div className='Views'>

          <h3 className='title'>Vista de planta</h3>
          <h5>Origen del grid: Extremo inferior izquierdo</h5>
          <div className='Grid' style={{
            gridTemplateColumns: `repeat(${positions[0]}, 1fr)`,
            gridTemplateRows: `repeat(${positions[1]}, 1fr)`
          }}>


            {top}

          </div>
        </div>

      }

      {
        lateral.length > 0 &&
        <div className='Views'>
          <h3 className="title">Vista lateral</h3>
          <div className='Grid' style={{
            gridTemplateColumns: `repeat(${positions[1]}, 1fr)`,
            gridTemplateRows: `repeat(${positions[2]}, 1fr)`
          }}>


            {lateral}

          </div>
        </div>
      }

    </>
  )
}

export default App
