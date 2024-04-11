import React, {ElementRef, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles"

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_d2oc30i', 'template_fx0ox2o', form.current, {
                publicKey: 'qAPHYgAOPEgU5-fDK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };


    return (
        <S.Contact id={'contacts'}>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={'Name'} name={"user_name"}/>
                    <S.Field required type={'email'} placeholder={'E-mail'} name={"email"}/>
                    <S.Field required placeholder={'Subject'} name={"subject"}/>
                    <S.Field required as={'textarea'} placeholder={'Message'} name={"message"}/>
                    <S.Button type={"submit"}>Send</S.Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

