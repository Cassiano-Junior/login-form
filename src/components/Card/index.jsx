import React, {useRef, useEffect} from 'react';
import {Button, Container, Email, Form, Header, InputRow, Password, Register, RememberCheckbox, RememberRow, Title} from './style'
import loginIcon from '../../assets/log-in.svg'
import mailIcon from '../../assets/mail.svg'
import lockIcon from '../../assets/lock.svg'
import eyeIcon from '../../assets/eye.svg' 

const Card = () => {
    const inputPassword = useRef(null);
    const eye = useRef(null)

    useEffect(() => {
        if(!!inputPassword && !!eye) {
            eye.current.addEventListener('click',() => {
                const type = inputPassword.current.getAttribute('type') === 'password' ? 'text' : 'password';
                inputPassword.current.setAttribute('type', type); 
            })
        }
    }, [inputPassword, eye])

    return ( 
        <Container>
            <Header>
                <Title>
                    <img src={loginIcon} alt="Ícone de login" />
                    <h2>Faça seu login</h2>
                </Title>
                <p>Entre com suas informações de cadastro.</p>
            </Header>


            <Form>
                <Email>
                    <label htmlFor="email">E-mail</label>
                    <InputRow>
                        <img src={mailIcon} alt="Ícone do e-mail" />
                        <input type="email" name="" id="email" placeholder="Digite seu e-mail"/>
                    </InputRow>
                </Email>

                <Password>
                    <label htmlFor="senha">Senha</label>
                    <InputRow>
                        <img src={lockIcon} alt="Lock Icon" />
                        <input ref={inputPassword} type="password" name="" id="senha" placeholder="Digite sua senha" />
                        <img src={eyeIcon} alt="Eye Icon" id="eye" ref={eye}/>
                    </InputRow>
                </Password>
                    
                <RememberRow>
                    <RememberCheckbox>
                        <input type="checkbox" name="" id="checkbox" />
                        <span className="checkmark"></span>
                        <span>Lembre-me</span>
                    </RememberCheckbox>
                    <a href="#">Esqueci minha senha</a>
                </RememberRow>

                <Button/>

                <Register>
                     Não tem uma conta?
                    <a href="#"> Registre-se</a>
                </Register>

            </Form>

        </Container>
     );
}
 
export default Card;