let familia = ["Omezinda", "suellen", "hellen", "norfa", "Pedro", "Maria"];

for(let i = 0; i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa");
        continue;
    }else{
        console.log(familia[i] + " Macedo");
    }
}