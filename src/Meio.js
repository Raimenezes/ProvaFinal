

function Meio(){
    return(
        <div className="content">
            <div className="text">
                <h3>Ajude o algorítimo a ser mais certeiro</h3>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                    previewing layouts and visual mockups.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis
                    condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus
                    et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac,
                    posuere eu, lectus. Nam mattis, felis ut adipiscing.
                </p>
            </div>
            <div className="register">
                <div className="itens">
                    <h5>Seu Nome</h5>
                    <input type="text" className="campo"/>
                </div>
                <div className="itens">
                    <h5>E-mail</h5>
                    <input type="email" className="campo"/>
                </div>
                <div className="itens">
                    <h5>CPF</h5>
                    <textarea className="campo"></textarea>
                </div>
                <br/>
                    <div className="itens">
                        <p>Masculino</p>
                        <input type="radio" name="sex" value="male"/>
                        <p>Feminino</p>
                        <input type="radio" name="sex" value="female"/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="button">Enviar</button>
                    </div>
            </div>
            <div className="secao">
                <div>
                    <h3 className="secao_text">Sua seção especial</h3>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
}
export default Meio;