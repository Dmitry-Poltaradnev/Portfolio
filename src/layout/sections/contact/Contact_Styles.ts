import {theme} from "../../../styles/Theme";
import styled from "styled-components";

const Contact = styled.section`
`
const Form = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    margin: 60px auto 0;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;   

    textarea {
        resize: none;
    }
`
const Field = styled.input`
    width: 100%;
    border: 1px solid rgb(232, 236, 244);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    padding: 7px 15px;
    font-family: 'Nunito', sans-serif;
    color: ${theme.colors.title};
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
    }
`
const Button = styled.button`
    padding: 8px 24px;
    color: ${theme.colors.title};
    background-color: ${theme.colors.accent};
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    border-radius: 8px;
    transition: 0.3s all;
    
    &:hover {
        color: rgb(255, 255, 255);
    }
`

export const  S = {
    Contact,
    Form,
    Field,
    Button
}