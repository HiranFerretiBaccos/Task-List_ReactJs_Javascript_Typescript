import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([             //Dentro desse Estado eu vou ter um Array de 'Item' que é o type Exportado do TS e Importado aqui.
  ]);

  const handleAddTask = (taskName: string) => {          //Recebo essa Prop o tipo string.
    let newList = [...list];                             //Fiz um Clone da Lista com Spread Operator.
    newList.push({                                       //Nesse clone, eu Adicionei um item.
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);                                    //E atualizei o valor do meu Estado 'list' com 'setList' para a Lista Nova 'newList'.
  }

  return (
    <>
      <C.Container>
        <C.Area>
          <C.Header>Task List</C.Header>

          <AddArea onEnterProp={handleAddTask} />

          {list.map((itemParam, index) => (
            <ListItem key={index} itemProp={itemParam} />         //3ª Etapa da prop e o Parâmetro do map.
          ))}
        </C.Area>
      </C.Container>
    </>
  )
}

export default App;