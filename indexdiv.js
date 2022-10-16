function myscript(){
    let sum = 0
    let sum2 = 0

    array=[]
    for(i=200;i<=300;i++){
        if(i%4==0&&i%6==0&&i%8==0){
            sum=sum + i
               
        }  
    }
    for(j=400;j<=800;j++){
        if(j%25==0&&j%45==0){
            sum2=sum2 + j
               
        }  
    }
console.log(sum+sum2);
    
}