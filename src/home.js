import './home.css'

function Home (){
    return(
        <div className="corpo">
            <h2 className='titulo'>Bem-vindo a Página Inicial da nossa AV2</h2>
            <p className='sub-titulo'>Conheça os melhores Cosplays do SESI/SENAI</p>
            <img className='Foto1' src={require('../src/fotos/FOTO1.jpg')} width={386}/>
            <img className='Foto2' src={require('../src/fotos/FOTO2.jpg')} width={370}/>
            <img className='Foto3' src={require('../src/fotos/FOTO3.jpg')} width={374}/>
            <h4 className='mini1'>Povo da Turma da Mônica</h4>
            <h4 className='mini2'>Flanelinha/Ladrão de Celular</h4>
            <h4 className='mini3'>Zé Gotinha do SUS</h4>
            <p className='sub1'>Mônica, Cascão, Magali e Cebolinha.</p>
            <p className='sub2'>Eu dificilmente confiaria lavar meu carro com esse daí.</p>
            <p className='sub3'>Símbolo do SUS, terror das criancinhas!</p>
        </div>
    )
}

export default Home