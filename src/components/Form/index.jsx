import React from 'react';
import {Container} from './style'
import loginIcon from '../../assets/log-in.svg'

const Form = () => {
    return ( 
        <Container>
            <div className="login-info">
                <img src={loginIcon} alt="" />
                <h2>Faça seu login</h2>
            </div>

            <p>Entre com suas informações de cadastro.</p>

            <form action="">
               <fieldset>
                    <label htmlFor="">E-mail</label>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail"/>

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" placeholder="Digite sua senha" />

                    <div className="checkbox-line">
                       <input className="checkbox"type="checkbox" name="" id="" />
                        <label className="remember-me" htmlFor="">Lembre-me</label>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                   <button type="submit">
                       ENTRAR
                   </button>

                   <a className="register" href="#">Não tem uma conta? <span>Registre-se</span> </a>
               </fieldset>
            </form>

        </Container>
     );
}
 
export default Form;