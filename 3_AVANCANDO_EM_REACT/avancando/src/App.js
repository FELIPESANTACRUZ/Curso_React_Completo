import './App.css';
import Freefire1 from './assets/freefire1.png'
import ListRender from './components/Listas/ListRender';
import ManageData from './components/Hooks/ManageData';
import TesteHook from './components/Hooks/TesteHook';
import TesteHook2 from './components/Hooks/TesteHook2';
import TesteHook3 from './components/Hooks/TesteHook3';
import TesteHook4 from './components/Hooks/testeHook4';
import Lista1 from './components/Listas/Lista1';
import Lista3 from './components/Listas/Lista3';
import Lista4comKey from './components/Listas/Lista4comKey';
import Lista5 from './components/Listas/Lista5';
import ConditionalRender from './components/ConditionalRender';
import ConditionalRender2 from './components/ConditionalRender2';
import ConditionalRender3 from './components/ConditionalRender3';
import ConditionalRender4 from './components/ConditionalRender4';
import ShowUserName from './components/Props/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/Props/CarDetails';
import Sales from './components/Props/Sales';
import Student from './components/Props/Student';
import BookDetails from './components/Props/BookDetails'
import ClubesDetails from './components/Props/ClubesDetails';
import Products from './components/Props/Products';
import Fragment from './components/Fragment';
import Classification from './components/Hooks/Classification';
import PropChildren from './components/Props/PropChildren';
import ExecuteFunction from './components/Props/ExecuteFunction';
import PraticandoEstados from './components/PraticandoEstados';
import Mensagem2 from './components/Props/Mensagem2';
import Livro from './components/Props/Livro';
import Cores from './components/Cores';
import ChangeCor from './components/ChangeCor';
//import Mensagem from './components/Props/Mensagem';
// import Message from './components/Message';
// import ChangeMessageState from './components/ChangeMessageState';


//import userDetails from './components/userDetails';
import Modal2 from './components/Modal2';
//import DetalhesUsuarios from './components/DetalhesUsuarios';


function App() {

  const cars = [
    {id:1, barnd:"Ferrari", color:"Vermelha", newCar: true, km:0},
    {id:2, barnd:"Lamborghini", color:"Branca", newCar: true, km:0},
    {id:3, barnd:"Toyota", color:"Amarela", newCar: true, km:0}//supra
  ]

  const products = [
    {id:1, nome:"bolacha", type:"alimento", price:10},
    {id:2, nome:"suco", type:"alimento", price:7},
    {id:3, nome:"tv", type:"eletrodoméstico", price:5400},
    {id:4, nome:"notebook", type:"eletrodoméstico", price:12600}
  ]
//const name = "jaqueline"
const [userName] = useState("Maria")

//const [segment] = []

function showMessage(){
  console.log("Evento do componente pai")
}

// mostrarMensagem = () =>{
//   console.log('teste')
// }

// const [message, setMessage] = useState = ""

// const handleMessage = (msg) => {
//   setMessage(msg)
// }

//const cores = [useCor, setCor] = useState = ["vermelho","azul","amarelo","verde"]

const mostrarMensagem2 = () =>{
  console.log('teste')
}


const [cor,setCor] = useState("")

const handleCor = (cor) => {
  setCor(cor)

//   const pessoas = [
//     {id:1, nome:"felipe", idade:18, profissao:"Programador" },
//     {id:2, nome:"Ana", idade:28, profissao:"Dentista" },
//     {id:3, nome:"Fulana", idade:12, profissao:"Product Owner" }

//   ]
 }

const Humanos = [
  {id:1, nome: "fulano", idade:23, profissao:"dev" },
  {id:2, nome: "fulanaa", idade:29, profissao:"deva" },
  {id:3, nome: "ciclano", idade:78, profissao:"scrum master" },
]


  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* {imagem em public} */}
      <div>
        <img src="/freefire2.png" alt="free fire 2" />
      </div>

    {/* {imagem em assets} */}
    <div>
      <img src={Freefire1} alt="free fire 1" />
    </div>
   <ManageData />
   <TesteHook />
   <TesteHook2 />
   <TesteHook3 />
   <TesteHook4/>
   <ListRender/>
   <Lista1 />
   <Lista3 />
   <Lista4comKey />
   <Lista5 />
   <ConditionalRender />
   <ConditionalRender2 />
   <ConditionalRender3 />
   <ConditionalRender4 />
   <ShowUserName name={userName}/>
   {/* props */}
    <CarDetails brand="Ford" color="azul" km={22}/>
    <CarDetails brand="Ferrari" color="vermelha" km={0}/>
    <Sales nomeTitular="Felipe" numeroConta={12345} saldo={12000.56}  />
    <Sales nomeTitular="Jaqueline" numeroConta={1265745} saldo={74747.56}  />]
    {/* props */}

    {/* destructuring */}
    <Student matricula={89439849} nome="Fulano" curso="informática"/>
    {/* destructuring */}
    

    {/* reaproveitamento */}
   <BookDetails title="Código Limpo" author="Robert Cecil Martin Autor" price={190} novo={true}/>
   <BookDetails title="A marca de uma lágrima" author="Desconhecido" price={10} novo={false}/>
    {/* reaproveitamento */}


    <ClubesDetails nome="Arsenal" pais="inglaterra" idade={10}/>
    <ClubesDetails nome="Real madrid" pais="Espanha" idade={10} />
    <ClubesDetails nome="Bayer muniche" pais="Alemanha" idade={15} />

    {/* loop em array de objetos */}
    {cars.map((car)=> (
        <CarDetails brand={car.barnd} color={car.color} km={car.km} newCar={car.newCar} />
    ))}
    {/* loop em array de objetos */}


    {products.map((product) => (
      <Products nome={product.nome} type={product.type} price={product.price} />
    ))}

    {/* Fragment */}
    <Fragment propFragment="teste"/>
     {/* Fragment */}

     <Classification />

     <PropChildren myValue="teste">
      <p>conteudo vindo da PropChildren Pai</p>
     </PropChildren>

     <PropChildren myValue="teste">
      <p>conteudo vindo da PropChildren Pai 2</p>
     </PropChildren>

     {/* executar função */}
     <ExecuteFunction myFunction={showMessage}/>
     {/* executar função */}

     {/* state lift */}
      {/* < Message msg={message} />

      <ChangeMessageState handleMessage={handleMessage} /> */}
     {/* state lift */}

     <PraticandoEstados/>

     {/* <Mensagem minhaFuncao={mostrarMensagem}/> */}

     <Mensagem2 minhaFuncao2={mostrarMensagem2}/>

     <Livro minhaFuncao3={mostrarMensagem2}/>


 {/* state lift 2 */}

     <Cores cores={cor}/>

     <ChangeCor MudarCor={handleCor}/>


{/* state lift 2 */}

{/* {pessoas.map((pessoa) => (

<userDetails key={pessoa.id}  nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>

))} */}

<Modal2 />

 {/* {Humanos.map((Humanos) => (
  <DetalhesUsuarios 
  key={Humanos.id}
  nome={Humanos.nome}
  idade={Humanos.idade}
  profissao={Humanos.profissao}
  />
))} */}


  </div>

  );

 
}

export default App;
