export const calculateVolume = (cells, cellVol) => {
    const [fromCell, toCell] = cells
    let result = 1
  
    for (let i = 0; i < fromCell.length; i++) {
      result *= toCell[i] - fromCell[i] + 1
    }
  
    return 7758 * result * cellVol / (10 ** 6)
  }