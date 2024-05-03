import './App.css'

function Footer() {
 return (
  <footer className="footer">
            <img className='sesi' src={require('../src/fotos/SESI.png')} width={100}/>
            <div className='texto'>
                <p>&copy; Todos os direitos reservados ao 3º de informática para internet.</p>
                <p>Contato: almoçar@cabacos.com</p>
            </div>
        </footer>
 )
}
export default Footer;