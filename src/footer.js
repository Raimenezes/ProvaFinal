

function Footer(){
    return(
        <div>
            <div>
                <center><button class = "produtos">Ainda mais produtos Aqui!</button></center>
            </div>
            <div class="novidade">
                <h3 class="novidade_text">Compartilhe a novidade</h3>
                <hr></hr>
                <p>Quer que seus amigos ganhem a lista personalizada deles ? Preencha agora!</p>
            </div>
            <div class = "amigos">
                <div class="iten1">
                    <h5>Nome do seu amigo</h5>
                    <input type="text" class="campo"/>
                </div>
                <div class="iten2">
                    <h5>E-mail</h5>
                    <input type="text" class="campo"/>
                </div>
            </div>
            <center><button class = "produtos">Enviar Agora</button></center>
            <footer class = "footer">
                <p>Testatando suas habilidades HTML, CSS E JS.</p>
                <p>Linx Impulse</p>
                <p>2019</p>
            </footer>
        </div>
    )
}
export default Footer;