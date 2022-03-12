import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnterProp: (taskName: string) => void;             //Seu tipo será uma Função que ñ retorna nada e dentro dela, tem uma Prop que recebe uma string.
}

export const AddArea = ({ onEnterProp }: Props) => {     //1ª Fase da props, após declarado o type acima.

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {    //Tem que dar Enter e tem que ter algum texto digitado, senão ñ faz o menor sentido kk.
            onEnterProp(inputText);
            setInputText('');                            //Após enviar, limpa o campo.
        }
    }

    return (
        <>
            <C.Container>
                <div className='plus'>➕</div>
                <input
                    type='text'
                    placeholder='Write a task here'
                    value={inputText}                     //O 'value',, Atributo do input type text do HTML, recebe o Estado 'inputText' que começa com uma String vazia.
                    onChange={e => setInputText(e.target.value)}
                    onKeyUp={handleKeyUp}                 //É um evento do próprio JS referente a quando digitar uma Tecla Específica(Enter)
                />
            </C.Container>
        </>
    )
}