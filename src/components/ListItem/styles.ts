import styled from 'styled-components';

type ContainerProps = {        //Todo Componente que tiver props, eu tenho que Tipar com o TS.
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (       //Como aqui é um Componente tbm(Do styled-components), ele recebe a Prop 'done' na 1ª etapa e ele será do tipo ContainerProps.
    `
    display: flex;
    align-items: center;
    background-color: #222;
    border: 1px solid #ddd;
    padding: 0.8rem;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;

    input{
        width: 1.4rem;
        height: 1.4rem;
    } 

    label{
        color: #ddd;
        font-size: 1.4rem;
        margin-left: 0.6rem;
        text-decoration: ${done ? 'line-through' : 'initial'};             
    }

    :hover{
        background-color: #555;
    }
`
));                                                         //If Ternário com a Prop na 2ª