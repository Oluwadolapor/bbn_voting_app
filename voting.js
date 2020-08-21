let elem =  document.getElementById("bar");
let width = 100;

for (let i = 0; i < this.add.length; i++) {
    this.add[i].addEventListener('click', () => {
        if (document.getElementById("totalCount").innerHTML > 0) {
            this.no[i].value++;
            document.getElementById("totalCount").innerHTML --;
            
        }
        if (document.getElementById("totalCount").innerHTML <= 0 ){
                document.getElementById("totalCount").innerHTML = 0;
        }
      width --;
      elem.style.width = width + '%'; 
      
})
}
for (let i = 0; i < this.de.length; i++) {
    this.de[i].addEventListener('click', () => {
        if (this.no[i].value > 0  ) {
            this.no[i].value--;
            document.getElementById("totalCount").innerHTML ++; 
        } 
        if (width >= 100){
            width = 100;

        }
        else if(this.no[i].value > 0 ) {
        width ++;
        elem.style.width = width + '%'; 
      
        }
        
    if (document.getElementById("totalCount").innerHTML > 100 ){
        document.getElementById("totalCount").innerHTML = 100;
    }
    if (this.no[i].value <=0){
        this.no[i].value = 0
    }
})
}
function show(){
    // if (document.getElementById("totalCount").innerHTML > 0){
        // document.getElementById("finish").innerHTML = "Finish the votes";
        alert (Math.max(this.no[i].value++));
//         }
// else    {
//     document.getElementById("part").style.visibility = "visible";
//     document.getElementById("finish").innerHTML = " ";
//     }
// }  
// function hide(){ 
//     document.getElementById("part").style.visibility = "hidden";
}