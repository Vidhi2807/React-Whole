function fun1(){
    console.log("fucntion 1 ");
}

function fun2(){
    console.log("fucntion 2 ");
}

function fun3(){
    console.log("fucntion 3 ");
}

function main(){
    fun1();
    fun2();
    fun3();
}

main();


const loadApi = async () =>{
    var resp = await fetch(url);
    var data = await resp.json();
    if (data){
        SetData(data);
    }
    else{
        SetError(err)
    }
    
}