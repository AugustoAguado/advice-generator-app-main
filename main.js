const url= 	'https://api.adviceslip.com/advice' ;

const advice = document.querySelector('.advice__text');

const id = document.querySelector('.id__number');

const button = document.querySelector('.button');




document.addEventListener('DOMContentLoaded', callAPI);

async function callAPI(){
   const response = await fetch(url)
   const data =await response.json()  
   change(data);
}

 

function change(data) {
    id.innerHTML=(data.slip.id);
    advice.innerHTML= '"'+data.slip.advice+'"' ;
}



button.addEventListener('click',function event(){
    callAPI();
  } )
