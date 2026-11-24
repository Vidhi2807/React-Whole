import{useState} from "react";

function App(){

let prod = [
{id:1 , name:"tv" , price : 200 , currentstatus : "active"},
{id:2 , name:"ac" , price : 500 , currentstatus : "inactive"},
{id:3 , name:"cooler" , price : 800 , currentstatus : "active"},
{id:4 , name:"mobile" , price : 900 , currentstatus : "inactive"},
{id:5 , name:"tab" , price : 1000 , currentstatus : "inactive"},
{id:6 , name:"phone" , price : 300 , currentstatus : "active"},
];

const[data,setData] = useState(prod);

function showActive (){
    setData(prod.filter(p=>p.currentstatus === "active"));
}
function showInactive (){
    setData(prod.filter(p=>p.currentstatus === "inactive"));
}
function showAll (){
    setData(prod);
}
function highToLow (){
 setData([...data].sort((a,b)=>b.price-a.price));
}
function lowToHigh (){
    setData([...data].sort((a,b)=>a.price-b.price));
}



    return(
        <div>
       <button onClick={showActive}>Active</button>
       <button onClick={showInactive}>Inactive</button>
       <button onClick={showAll}>All prod</button>
       <button onClick={highToLow}>High to Low</button>
       <button onClick={lowToHigh}>low to high</button>

       {data.map(p=>(

        <div key = {p.id}>
            <h3>{p.name}</h3>
            <p>price : {p.price}</p>
            <p>currentstatus : {p.currentstatus}</p>

        </div>

       ))}



        </div>
    )
}
export default  App;