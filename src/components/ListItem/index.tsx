//Padrão para todos os Components: Pasta com o nome dele e dentro os arquivos index.tsx.
//Na hora de Importar, chama aapenas a Pasta específica e ele já procura o Arquixo chamado index.
//Toda Pasta do respectivo Componente terá seu Index e seus próprios styled-components com o mesmo nome, caso queira.

import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';

type Props = {                     //Com Typescript, especificamos todas as Props que o Componente vai receber dando um 'NOME' e o TIPO delas.
    itemProp: Item;                //Minha prop será do tipo 'Item' do arquivo TS e declarado abaixo com o type dela.
}

export const ListItem = ({ itemProp }: Props) => {

    const [isChecked, setIsChecked] = useState(itemProp.done);      //Estado recebe a Prop que filtra para Outra prop do Objeto/Type 'Item' chamada 'done' que recebe um boolean.

    return (
        <>
            <C.Container done={isChecked}>                         {/*3 Etapa da Prop 'done'*/}
                <input
                    type='checkbox'
                    checked={isChecked}                            //checked é um Atributo do próprio input type checkbox.
                    onChange={e => setIsChecked(e.target.checked)} //onChange pra quando clicar, seta o Estado isChecked para o valor atual do Atributo checked do input type checkbox do HTML.
                />
                <label>{itemProp.name}</label>
            </C.Container>
        </>
    )
}