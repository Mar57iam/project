
let searchInput = document.getElementById('searchInput')
let btn = document.getElementById('myBtn')
// console.log(searchInput);


let currentDate = new Date();
// console.log(currentDate);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[currentDate.getDay()];
// console.log(dayName);

let dayOfMonth = currentDate.getDate();
// console.log(dayOfMonth);

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[currentDate.getMonth()];
// console.log(monthName);

let nextDate = new Date();
nextDate.setDate(currentDate.getDate() + 1);
let nextDayName = days[nextDate.getDay()];
// console.log(nextDayName);

let day3 = new Date();
day3.setDate(nextDate.getDate()+1)
let lastDay = days[day3.getDay()]
// console.log(lastDay);

let dataList = [];
async function weather(city){
  dataList = []
  var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1d7bd3c4fdf449cca47220709241012&q=${city}&days=7`);
var data = await res.json();
dataList.push(data)
console.log(dataList);

display()

}
weather( `cairo`) 

function display(){

  let cartona = ``
  for ( let i = 0 ; i < dataList.length    ; i++  ){
    cartona+=  `    <div class="col-md-4  ">
            <div class="card-all   ">
            <div class=" cardd d-flex justify-content-between p-2  rounded-top-3 text-black-50  bblack">
              <span class="mainColor" >${dayName}</span>
              <span class="mainColor">
              <span> ${dayOfMonth}</span>
             ${monthName}</span>    
          </div>
         <div class="card-body rounded-bottom-3 ">
          <p class="pt-2 ps-3 mainColor fs-4">${dataList[i].location.name}</p>
          <h2 class=" m-2 text-white h3 ">${dataList[i].current.temp_c}°C</h2>
         <img class="w-25 ms-4" src="https:${dataList[i].current.condition.icon}" alt="">
          <p class="text-info ms-4">${dataList[i].current.condition.text}</p>
         <div class="pb-4 ">
          <img class="imgIcon  ms-4" src="images/icon-umberella@2x.png" alt="">
          <span class="mainColor ">20%</span>
          <img  class="imgIcon ms-4" src="images/icon-wind@2x.png" alt="">
          <span class="mainColor ">18km/h</span>
          <img  class="imgIcon ms-4" src="images/icon-compass@2x.png" alt="">
          <span class="mainColor p"> East</span>
         </div>
         </div>
           </div>
          </div>
          
          
           <div class="col-md-4">
            <div class="card-all">
            <div class="  d-flex justify-content-center bg-black align-items-center  rounded-top-3 mainColor  ">
             <p  class=" m-1 ">${nextDayName}</p>   
          </div>
         <div class="specialCard  rounded-bottom-3 d-flex flex-column align-items-center pt-5 ">
          <img src="http:${dataList[i].forecast.forecastday[i].day.condition.icon}" alt="">
          <p class="text-white fw-bold fs-4 mt-4">${dataList[i].forecast.forecastday[i].day.maxtemp_c}°C</p>
          <p class="mainColor m-0">${dataList[i].forecast.forecastday[i].day.mintemp_c}°</p>
          <p class="text-info">${dataList[i].forecast.forecastday[i].day.condition.text}</p>
         </div>
  
           </div>
          </div>





           <div class="col-md-4">
            <div class="card-all">
            <div class="  d-flex justify-content-center bblack align-items-center  rounded-top-3 mainColor  ">
             <p  class=" m-1 ">${lastDay}</p>   
          </div>
         <div class="card3 d-flex flex-column rounded-bottom-3  align-items-center bblack pt-5 ">
          <img src="http:${dataList[i].forecast.forecastday[i].day.condition.icon}" alt="">
          <p class="text-white fw-bold fs-4 mt-4">${dataList[i].forecast.forecastday[i].day.maxtemp_c}°C</p>
          <p class="mainColor m-0">${dataList[i].forecast.forecastday[i].day.mintemp_c}°</p>
          <p class="text-info">${dataList[i].forecast.forecastday[i].day.condition.text}</p>
         </div>
  
           </div>
          </div>
          
          `
    
   
  }
  document.querySelector('.row').innerHTML = cartona
}


searchInput.addEventListener('input' , function(){
  search()
})
btn.addEventListener('click' , function(){
  search()

})


function search() {
  let word = searchInput.value; 
  if (word) {
      weather(word); 
  }
}



























