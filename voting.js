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
let usersList = "";
let user = [
    {
        name : 'Dorathy',
        image : "images/Ellipse 1.png",
        votes : 0,
       
    },
    {
        name : 'Laycon',
        image : "images/laycon.jpg",
        votes : 0,
       
    },
    {
        name : 'Nengi',
        image : "images/Nengi.jpg",
        votes : 0,
       
    },
    {
        name : 'Prince',
        image : "images/prinebbn.jpg",
        votes : 0,
       
    },
    {
        name : 'Ozo',
        image : 'images/ozo.jpg',
        votes : 0,
       
    },
    {
        name : 'Erica',
        image : "images/erica.jpg",
        votes : 0,
       
    }
]
user.forEach (user => {
    usersList = `<div class="row votingbox >
                    <div class="col-lg-5">
                    <div class="media">
                        <img src="${user.image}" alt="${user.name}" class="mt-3 mr-3 rounded-circle" style="width:60px;">
                        <div class="media-body">
                        <h4 class="pt-2">${user.name}</h4>
                        <h2 class ="pt-2">${user.votes}</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="media">
                        <img src="${user.image}" alt="${user.name}" class="mt-3 mr-3 rounded-circle" style="width:60px;">
                        <div class="media-body">
                        <h4 class="pt-2">${user.name}</h4>
                        <h2 class ="pt-2">${user.votes}</h2>
                        </div>
                    </div>
                </div>
                
                </div>`
                console.log (usersList);
                document.getElementById("segment2").innerHTML += usersList;
})  
console.log(user);