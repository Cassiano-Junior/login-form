import React, { useRef, useEffect, useState } from 'react';
import {Button, Container, Email, Form, Header, InputRow, Password, Register, RememberCheckbox, RememberRow, Title} from './style'
import loginIcon from '../../assets/log-in.svg'
import eyeIcon from '../../assets/eye.svg' 
import api from '../../services/api'
const Card = () => {
    const [formInfo, setFormInfo] = useState({
        mail: '',
        password: '',
        rememberPassword: false
    });

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

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            if(!formInfo.mail) {
                alert('Preencher campo de e-mail!')
            }
            
            else if(!formInfo.password) {
                alert('Preencher campo de senha!')
            }

            else {
                const user = await api.post('/user', { email: formInfo.mail, senha: formInfo.password})
                console.log(user)
            }

        } catch (error) {
            alert(error.message)
        }
         
    }

    const handleChange = (event) => {
        const {target: {name, value, checked, type}} = event
        setFormInfo({
            ...formInfo, 
            [name] : type === 'checkbox' ? checked : value
        })
    }

    return ( 
        <Container>
            <Header>
                <Title>
                    <img src={loginIcon} alt="Ícone de login" />
                    <h2>Faça seu login</h2>
                </Title>
                <p>Entre com suas informações de cadastro.</p>
            </Header>


            <Form onSubmit={handleSubmit}>
                <Email>
                    <label htmlFor="email">E-mail</label>
                    <InputRow>
                        <input 
                            type="email" 
                            name="mail" 
                            id="email" 
                            placeholder="Digite seu e-mail"
                            value={formInfo.mail}
                            onChange={handleChange}
                        />
                    </InputRow>
                </Email>

                <Password>
                    <label htmlFor="senha">Senha</label>
                    <InputRow>
                        <input 
                            ref={inputPassword} 
                            type="password" 
                            name="password" 
                            id="senha" 
                            placeholder="Digite sua senha"
                            value={formInfo.password}
                            onChange={handleChange}
                        />
                        <img src={eyeIcon} alt="Eye Icon" id="eye" ref={eye}/>
                    </InputRow>
                </Password>
                    
                <RememberRow>
                    <RememberCheckbox>
                        <input 
                            type="checkbox" 
                            name="rememberPassword" 
                            id="checkbox" 
                            checked={formInfo.rememberPassword}
                            onChange={handleChange}
                        />
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