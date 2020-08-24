const users = [
    {
        name : 'Dorathy',
        image : "images/dorathy.png",
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
const elem =  document.getElementById("bar");
const totalCount = document.getElementById("totalCount");
let width = 100;

function handleAddButtonClick(btn, contestant) {
	const count = btn.previousElementSibling;
	if (totalCount.innerHTML > 0) {
    count.value++;
    contestant.votes++
    totalCount.innerHTML --;
  }
  
  if (totalCount.innerHTML <= 0 ){
    totalCount.innerHTML = 0;
  }
  
  width--;
  elem.style.width = width + '%'; 
      
}

function handleMinusButtonClick(btn, contestant) {
	const count = btn.nextElementSibling;
	if (count.value > 0  ) {
    count.value--;
    contestant.votes--;
    totalCount.innerHTML++; 
  } 
  
  if (width >= 100){
    width = 100;
	} else if (count.value > 0 ) {
    width ++;
    elem.style.width = width + '%';
  }
        
  if (totalCount.innerHTML > 100 ){
    totalCount.innerHTML = 100;
  }

  if (count.value <=0){
    count.value = 0
    contestant.votes = 0;
  }      
}

function newAddButton(contestant) {
	const btn = document.createElement('input');
	btn.type = 'button';
	btn.class = 'add';
	btn.value = '+';
	btn.onclick = () => handleAddButtonClick(btn, contestant);

	return btn;
}

function newMinusButton(contestant) {
	const btn = document.createElement('input');
	btn.type = 'button';
	btn.class = 'minus';
	btn.value = '-';
	btn.onclick = () => handleMinusButtonClick(btn, contestant);

	return btn;
}

function newCountElement(votes) {
	count = document.createElement('input');
	count.type = 'button';
	count.value = votes;
	count.min = 0;
	count.max = 100;

	return count;
}

function getVotingBox(contestant) {
 
	const template = document.createElement('div');
  template.className = 'col-lg'
	template.innerHTML += `
		
			<div class="media">
        <img src=${contestant.image} alt=${contestant.name} class="mt-3 mr-3 rounded-circle" style="width:60px;">
        <div class="media-body">
	        <h4 class="pt-2">${contestant.name}</h4>
	        <div class="btn">
		      </div>                         
      	</div>
    	</div>
  	
	`;

	template.querySelector('.btn').appendChild(newMinusButton(contestant));
	template.querySelector('.btn').appendChild(newCountElement(contestant.votes));
	template.querySelector('.btn').appendChild(newAddButton(contestant));

	return template;
}

function showVotingBoxes() {
  
	const votingBoxContainer = document.querySelector('.votingbox');

	users.forEach(user => {
		votingBoxContainer.appendChild(getVotingBox(user));
	});
}

showVotingBoxes();

function showLeaderBoard() {
  if(totalCount.innerHTML > 0 ){
    document.getElementById("finish").innerHTML = "*Finish the votes"
  }
  else{
    document.getElementById("votingpad2").style.display = "block";
    document.getElementById("segment1").style.display = "none";
    const segment2 = document.getElementById("segment2");
    segment2.innerHTML = '';
  
    // sort in descending order
    const usersTemp = users.sort((userA, userB) => userB.votes - userA.votes)
    
    document.getElementById("eviction").innerHTML = usersTemp[5].name + " was EVICTED."
    usersTemp.forEach((user, index) => {
      segment2.innerHTML += `
      
          <div class="col-lg">
            <div class="media">
              <img src="${user.image}" alt="${user.name}" class="mt-3 mr-3 rounded-circle" style="width:60px;">
              <div class="media-body">
                <h4 class="pt-2">${user.name}</h4>
                <h2 class ="pt-2 rank">${index + 1}</h2>
              </div>
            </div>
          </div>
      
      `;
    })  
    document.getElementById("finish").innerHTML = "";
    }
    
  }

function hideLeaderBoard(){
  document.getElementById("votingpad2").style.display = "none";
  document.getElementById("segment1").style.display = "block";
}
