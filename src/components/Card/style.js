import styled from 'styled-components';

export const Container = styled.div`
    padding: 55px 120px;
    background-color: var(--form-background);
    border-radius: 4px;

        .checkbox{
            width:20px;
            height: 20px;
        }

        .checkbox:hover{
            cursor: pointer;
        }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

export const Header = styled.div`
    margin-bottom: 27px;

    p {
        color: var(--text-base);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        display: flex;
        margin-bottom: 27px;
        margin-top: 5px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: var(--text-title);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`

export const Email = styled.div`
    display:flex;
    flex-direction: column;
    
    label {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #AFB6C2;
        cursor:pointer;
    }
`

export const InputRow = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
    position: relative;



    input { 
        padding: 0;
        background-color: transparent;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #a9afb9;
        outline: none;
        width: 100%;
        background-image: url(src/assets/mail.svg);
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 12px;
        padding: 12px;
        padding-left: 35px;
        border: 2px solid #868686;
        border-radius: 4px;
        transition: all 0.5s;
    }

    input:focus{
        border-color: var(--primary-color);
        background-image: url(src/assets/mail-focus.svg);
        
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #a9afb9;
    }
`

export const Password = styled(Email)`
    #eye {
        position: absolute;
        right: 12px;
        top: 12px;
    }

    input {
        background-image: url(src/assets/lock.svg);
    }

    input:focus {
        background-image: url(src/assets/lock-focus.svg)
    }

    img {
        cursor:pointer;
    }

`

export const RememberRow = styled.div`
    display: flex;
    width: 100;
    justify-content: space-between;
    margin-bottom: 20px;

    a {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: var(--primary-color);
            text-decoration: none;
        }

        a:hover {
            opacity: 0.8;
        }    
`

export const RememberCheckbox = styled.label`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 16px;
    color: #A9AFB9;
    gap: 5px;
    position: relative;
    cursor: pointer;
    
    input {
        display: none;
    }

    .checkmark {
        height: 25px;
        width: 25px;
        background-color: transparent;
        border: solid 1px #868686;
        border-radius: 4px;
        cursor: pointer;
    }

    :hover input ~ .checkmark {
        background: var(--form-background);
        border-color: var(--primary-color);
    }

    input:checked ~ .checkmark{
        background-color: var(--primary-color);
    }
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    input:checked ~ .checkmark:after {
        display:block;
    }

    .checkmark:after{
        left: 10px;
        top: 5px;
        height: 10px;
        width: 3px;
        border: solid var(--form-background);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        content: '';
    }
`

export const Button = styled.button.attrs({ type:"submit", children:'Entrar'})`
    background-color: var(--primary-color);
    border-radius: 4px;
    border: none;
    color: #473404;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.015em;
    padding: 12px 0;
    transition: all 0.5s;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const Register = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: var(--primary-color);
    text-decoration: none;
    margin-top: 14px;
    margin-left: 45px;

    a {
        font-weight: 600;
        text-decoration: none;
        color: var(--primary-color);
        transition: all 0.5s;
    }
    
    a:hover{
        opacity: 0.8;
    }

`