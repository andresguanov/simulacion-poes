import './Header.css'

export const Header = () => {
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