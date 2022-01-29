import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { InputData } from './components/InputData'
import { InputSectors } from './components/InputSectors'
import { Results } from './components/Results'
import { Sectors } from './components/Sectors'
import { Views } from './components/Views'
import { calculateVolume } from './functions/calculateVolume'
import { createGrid } from './functions/createGrid'



function App() {

  const [sectors, setSectors] = useState([])
  const [positions, setPositions] = useState([])
  const [cellVolume, setCellVolume] = useState(0)
  const [sectorColors, setSectorColors] = useState([])
  const [volumes, setVolumes] = useState({
    bulkVolume: [],
    porousVolume: [],
    waterVolume: [],
    oilVolume: [],
  })
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
    const cols = positions[1]
    const rows = positions[2]
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



  const handleInputData = (e) => {
    e.preventDefault()

    const i = Number(e.target.i.value)
    const j = Number(e.target.j.value)
    const k = Number(e.target.k.value)
    const cellWidth = Number(e.target.cellWidth.value)
    const cellHeight = Number(e.target.cellHeight.value)
    const cellThickness = Number(e.target.cellThickness.value)
    const sectorsLength = Number(e.target.sectorsLength.value)

    const cellVol = (cellWidth * cellHeight * cellThickness) * 3.28 ** 3 / 43560
    const sectors = []

    for (let i = 0; i < sectorsLength; i++) {
      sectors.push(<Sectors key={i} number={i + 1} />)
    }

    setCellVolume(cellVol)
    setSectors(sectors)
    setPositions([i, j, k])
  }

  const handleInputSectors = (e) => {
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


    const bulkVol = []
    const porousVol = []
    const waterVol = []
    const oilVol = []


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
    setVolumes({
      bulkVolume: bulkVol,
      porousVolume: porousVol,
      waterVolume: waterVol,
      oilVolume: oilVol,
    })


  }





  return (
    <>
      <Header />
      <InputData handleSubmit={handleInputData} />
      {
        sectors.length > 0
        && <InputSectors
          handleSubmit={handleInputSectors}
          sectors={sectors}
        />
      }
      <Results volumes={volumes} cellVolume={cellVolume} sectorColors={sectorColors} />

      {
        top.length > 0
        && <Views view={top} cols={positions[0]} rows={positions[1]} />

      }

      {
        lateral.length > 0
        && <Views view={lateral} cols={positions[1]} rows={positions[2]} />
      }

    </>
  )
}

export default App
