import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  //const [presentAlert]=useIonAlert();
  const [todos,setTodos]=useState([
    'Makan', 'Minum', 'Jajan'
  ]);
  const [inputText,setInputText]=useState<string>('');

const removeTodo=(i:number)=>{
  const newTodos=todos.filter((value,index)=>{
  return index !== i;
})
setTodos(newTodos);
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        
        <IonList>
          <IonItem>
            <IonInput 
            value={inputText}
            placeholder='Please input todo here ...'
            clearInput={true}
            autofocus={true}
            onIonChange={e=> {
              setInputText(e.detail.value!)}}
              onKeyPress={e=>{
                if(e.key=== 'Enter'){
                  setTodos([
                    inputText,
                    ...todos
                  ])
                }
              }}
              ></IonInput>    
          </IonItem>
        </IonList>

        {
            todos.map((item,i) =>(
              <IonItem>
                <IonLabel>{item}</IonLabel>
                <IonButton onClick={()=>{removeTodo(i)}} >
                <IonIcon slot="icon-only" name="trashoutline"></IonIcon>
              </IonButton>
              </IonItem>
            ))
          }
          <IonButton expand='full' fill='clear' size='small' color='danger' onClick={() =>{
          setTodos([]);
          }}>Remove All</IonButton> 
          <IonButton routerLink='/tab2'>
            Move To Tab2
          </IonButton>
          <IonRouterLink routerLink='/tab3'>Move To Tab 3</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
