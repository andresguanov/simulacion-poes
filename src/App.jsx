
import { useState } from 'react'
import './App.css'


const Capas = ({ number }) => {
  return (
    <div>
      <h5>Sector N°{number}</h5>


      <div>
        <label htmlFor="iFrom">Posición i inicial: </label>
        <input type="text" name="iFrom" id="iFrom" />
      </div>

      <div>
        <label htmlFor="jFrom">Posición j inicial: </label>
        <input type="text" name="jFrom" id="jFrom" />
      </div>

      <div>
        <label htmlFor="kFrom">Posición k inicial: </label>
        <input type="text" name="kFrom" id="kFrom" />
      </div>

      <div>
        <label htmlFor="iTo">Posición i final: </label>
        <input type="text" name="iTo" id="iTo" />
      </div>

      <div>
        <label htmlFor="jTo">Posición j final: </label>
        <input type="text" name="jTo" id="jTo" />
      </div>

      <div>
        <label htmlFor="kTo">Posición k final: </label>
        <input type="text" name="kTo" id="kTo" />
      </div>

      <div>
        <label htmlFor="porosity">Porosidad específica del sector: </label>
        <input type="text" name="porosity" id="porosity" />
      </div>

      <div>
        <label htmlFor="sw">Sw específica del sector: </label>
        <input type="text" name="sw" id="sw" />
      </div>

      <div>
        <label htmlFor="boi">Boi específico del sector: </label>
        <input type="text" name="boi" id="boi" />
      </div>

    </div>
  )
}





function App() {

  const [sectors, setSectors] = useState([])
  const [cellVolume, setCellVolume] = useState(0)
  const [bulkVolume, setBulkVolume] = useState([])
  const [porousVolume, setPorousVolume] = useState([])
  const [waterVolume, setWaterVolume] = useState([])
  const [oilVolume, setOilVolume] = useState([])






  const handleSubmit = (e) => {
    e.preventDefault()
    const i = e.target.i.value
    const j = e.target.j.value
    const k = e.target.k.value
    const cellWidth = e.target.cellWidth.value
    const cellHeight = e.target.cellHeight.value
    const cellThickness = e.target.cellThickness.value

    const cellVol = (cellWidth * cellHeight * cellThickness) * 3.28 ** 3 / 43560
    setCellVolume(cellVol)


    const sectorsLength = e.target.sectorsLength.value

    const arr = []

    for (let i = 0; i < sectorsLength; i++) {
      arr.push(<Capas key={i} number={i + 1} />)
    }
    setSectors(arr)


    // console.log({ i, j, k })
    // console.log({ cellWidth, cellHeight, cellThickness })
    // console.log({ sectorsLength })

  }

  const handleSectors = (e) => {
    e.preventDefault()

    const volume = (cells) => {
      const fromCell = cells[0]
      const toCell = cells[1]
      let result = 1

      for (let i = 0; i < fromCell.length; i++) {
        result *= toCell[i] - fromCell[i] + 1
      }

      return 7758 * result * cellVolume / (10 ** 6)
    }

    const iFrom = [...e.target.iFrom]
    const jFrom = [...e.target.jFrom]
    const kFrom = [...e.target.kFrom]
    const iTo = [...e.target.iTo]
    const jTo = [...e.target.jTo]
    const kTo = [...e.target.kTo]
    const porosity = [...e.target.porosity].map(el => el.value)
    const Sw = [...e.target.sw].map(el => el.value)
    const Boi = [...e.target.boi].map(el => el.value)

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

      const vol = volume(cells)


      bulkVol.push(vol)
      porousVol.push(vol * porosity[i])
      waterVol.push(vol * porosity[i] * Sw[i])
      oilVol.push(vol * porosity[i] * (1 - Sw[i]) / Boi[i])



    }


    setBulkVolume(bulkVol)
    setPorousVolume(porousVol)
    setWaterVolume(waterVol)
    setOilVolume(oilVol)


  }





  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>Número de sectores en los que se puede subdividir el yacimiento</h5>
          <div>
            <label htmlFor="i">Ingrese i: </label>
            <input type="text" name="i" id="i" />
          </div>

          <div>
            <label htmlFor="j">Ingrese j: </label>
            <input type="text" name="j" id="j" />
          </div>

          <div>
            <label htmlFor="k">Ingrese k: </label>
            <input type="text" name="k" id="k" />
          </div>

        </div>

        <div>
          <h5>Tamaño de la celda</h5>
          <div>
            <label htmlFor="cellWidth">Ingrese el ancho (m): </label>
            <input type="text" name="cellWidth" id="cellWidth" />
          </div>

          <div>
            <label htmlFor="cellHeight">Ingrese el largo (m): </label>
            <input type="text" name="cellHeight" id="cellHeight" />
          </div>

          <div>
            <label htmlFor="cellThickness">Ingrese el espesor (m): </label>
            <input type="text" name="cellThickness" id="cellThickness" />
          </div>
        </div>

        <div>
          <h5>Sectores</h5>
          <div>
            <label htmlFor="sectorsLength">Ingrese el número de sectores: </label>
            <input type="text" name="sectorsLength" id="sectorsLength" />
          </div>
        </div>




        <button type="submit">submit</button>
      </form>

      <form onSubmit={handleSectors}>
        {sectors.length > 0 &&
          <>
            {sectors}
            <button type="submit">submit</button>
          </>
        }
      </form>





      <h5>Resultados</h5>
      {/* <div className="Prueba">
        <h6>Capa</h6>
        <div>
          <p>Volumen total del sector 1: 84.5 MM Bls</p>
          <p>Volumen poroso del sector 1: 84.5 MM Bls</p>
          <p>Volumen de agua del sector 1: 84.5 MM Bls</p>
          <p>Volumen de petróleo del sector 1: 84.5 MM Bls</p>
        </div>



      </div>

      <p>Bulk Volume: </p>
      <p>44 MM </p>

      <p>Volumen poroso total: </p>
      <p>Volumen de agua total: </p>
      <p>Volumen de petróleo total: </p>




      <div className="Prueba">
        <div>
          <h6>Capa</h6>
          <p>Volumen total del sector 1: 84.5 MM Bls</p>
          <p>Volumen poroso del sector 1: 84.5 MM Bls</p>
          <p>Volumen de agua del sector 1: 84.5 MM Bls</p>
          <p>Volumen de petróleo del sector 1: 84.5 MM Bls</p>
        </div>



      </div> */}

      <p>Volumen de la celda: {cellVolume.toFixed(2)} acres*ft</p>

      <div>{bulkVolume.map((volume, i) => (
        <p>Volumen total del sector {i + 1}: {volume.toFixed(2)} MM Bls</p>
      ))}</div>


      <div>{porousVolume.map((volume, i) => (
        <p>Volumen poroso del sector {i + 1}: {volume.toFixed(2)} MM Bls</p>
      ))}</div>


      <div>{waterVolume.map((volume, i) => (
        <p>Volumen poroso del sector {i + 1}: {volume.toFixed(2)} MM Bls</p>
      ))}</div>


      <div>{oilVolume.map((volume, i) => (
        <p>Volumen poroso del sector {i + 1}: {volume.toFixed(2)} MM Bls</p>
      ))}</div>

      {
        bulkVolume.length > 0 &&
        <p>Volumen total: {bulkVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
        </p>
      }

      {
        porousVolume.length > 0 &&
        <p>Volumen poroso total: {porousVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
        </p>
      }


      {
        waterVolume.length > 0 &&
        <p>Volumen de agua total: {waterVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
        </p>
      }


      {
        oilVolume.length > 0 &&
        <p>POES: {oilVolume.reduce((a, b) => a + b).toFixed(2)}MM Bls
        </p>
      }





    </>
  )
}

export default App
