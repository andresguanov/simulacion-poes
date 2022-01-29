export const createGrid = (cols, rows) => {
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