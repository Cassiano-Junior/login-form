import styled from 'styled-components';

export const Container = styled.div`
    width: 572px;
    height: 512px;
    background-color: var(--form-background);
    border-radius: 4px;

    .login-info {
        display: flex;
        color: var(--text-title);
        gap: 10px;
        margin-top: 61px;
        margin-left: 130px;
        margin-bottom: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
    }

    p {
        color: var(--text-base);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        justify-content: center;
        display: flex;
    }

    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        margin-left: 130px;
        margin-top: 27px;
    }

    label {

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #AFB6C2;
    }
    input {
        background-color: var(--form-background);
        border: 1px solid #868686;
        width: 335px;
        height: 44px;
        border-radius: 4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 20px;
        padding-left: 20px;
    }


    .checkbox-line {
        display: flex;
        gap: 5px;

        .checkbox{
            width:20px;
            height: 20px;
        }

        .checkbox:hover{
            cursor: pointer;
        }

        .remember-me {
            font-family: 'Roboto';
            font-weight: normal;
            font-size: 16px;
        }

        a {
            height: 21px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: var(--primary-color);
            text-decoration: none;
            margin-left: 70px;
        }

        a:hover {
            opacity: 0.8;
        }
    }



    button {
        width:334px;
        height: 51px;
        background-color: var(--primary-color);
        border-radius: 4px;
        border: none;
        color: #473404;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.015em;
        margin-top: 20px;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    .register {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: var(--primary-color);
        text-decoration: none;
        margin-top: 14px;
        margin-left: 45px;
    }

    .register span {
        font-weight: 600;
    }
    
    .register:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`