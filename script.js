let tasks = [
  { 
  taskName: "Weekly shopping", 
  image: "./Images/weekly shopping.jpg", 
  description: "Shop for weekly groceries at Lidl and Hofer.",
  deadline:"Thursday, 15.02.2024", 
  priority: 0    
    }, 
  { 
  taskName: "Birthday party", 
  image: "./Images/birthday party.jpg", 
  description: "Elena is four! Take Lana and Julia in Lolipop at 16:00.", 
  deadline:"Saturday, 17.02.2024", 
  priority: 0    
    }, 
{ 
  taskName: "Job meeting", 
  image: "./Images/Job meeting.jpg", 
  description: "Lunch meeting with Sanja from Perfect Nails. Vapiano at 13:00", 
  deadline:"Monday, 12.02.2024", 
  priority: 0    
    }, 
{ 
  taskName: "Gym", 
  image: "./Images/gym.jpg", 
  description: "Sommer knocks on the door! You can do it!! ", 
  deadline:"Tuesday, 13.02.2024", 
  priority: 0    
    },
{ 
  taskName: "Shopping", 
  image: "./Images/shopping.jpg", 
  description: "Davor needs a two T-Shirts, kids outfits for maskembal and buy yourself a new bag.",
  deadline:"Monday, 12.02.2024",  
  priority: 0    
    },

{ 
  taskName: "Kids playground", 
  image: "./Images/park.jpg", 
  description: "Use sunny days to go with kids out.", 
  deadline:"Everyday",  
  priority: 0    
    },
{
  taskName: "Fasching", 
  image: "./Images/carnival.jpg", 
  description: "Fasching in kindergarten. bring the children by 8am", 
  deadline:"Wednesday, 14.02.2024", 
  priority: 0    
    },
{ 
  taskName: "Museum", 
  image: "./Images/dinosaur.jpg", 
  description: "Take the children after kindergarten to the museum to see the dinosaurs",
  deadline:"Friday, 16.02.2024",  
  priority: 0    
    },
{ 
  taskName: "Date Night", 
  image: "./Images/couple.jpg", 
  description: "Date night with my husband. Dinner, concert, night walk", 
  deadline:"Wednesday, 14.02.2024", 
  priority: 0    
    } ];
    
function applyEventlisteners(){
  let btns = document.querySelectorAll(".mybtn");
btns.forEach((element, i) => {
  element.addEventListener("click", function () {
    if (tasks[i].priority < 5){
      tasks[i].priority ++;
      document.querySelectorAll(".priority")[i].innerHTML=+ tasks[i].priority;
     priorityColor(document.querySelectorAll(".priority")[i], tasks[i].priority);
   }
    })
  })};  

function printResult() {
  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  for (let val of tasks) {
      resultContainer.innerHTML += `
  <div class="card  mb-2 ">
    <h5 class="card-title mt-1">${val.taskName}</h5>
    <img src="${val.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${val.description}</p>
      <p class="pri"> <button class="btn btn-outline-danger btn-sm mybtn"> &#9888;</button> Priority level : <a href="#" class="priority btn priorityBtn priority-level">${val.priority}</a></p>
      <p class="deadline"> &#x1F4C6; ${val.deadline}</p>
    </div>
    <div class="buttons p-2  d-flex justify-content-between"> 
      <button class="btn btn-outline-success">Done &#10003;</button>
      <button class="btn btn-outline-danger">Delete &#10005;</button>
    </div>
  </div>`;

  applyEventlisteners();
 
}}


  function priorityColor(priorityBtn, priority) {
    priorityBtn.classList.remove('btn-light', 'btn-warning', 'btn-danger');
    priorityBtn.classList.remove('bg-success', 'bg-warning', 'bg-danger'); 
    if (priority >= 0 && priority <= 1) {
        priorityBtn.classList.add('btn-success');
        priorityBtn.classList.add('bg-success'); 
    } else if (priority >= 2 && priority <= 3) {
        priorityBtn.classList.add('btn-warning');
        priorityBtn.classList.add('bg-warning'); 
    } else if (priority >= 4 && priority <= 5) {
        priorityBtn.classList.add('btn-danger');
        priorityBtn.classList.add('bg-danger'); 
    }}

    function sortByPriority() {
      tasks.sort((a, b) => b.priority - a.priority);
      printResult();
      document.querySelectorAll('.priority').forEach((priorityBtn, i) => {
          priorityColor(priorityBtn, tasks[i].priority);
      });
      
  }


printResult();
document.getElementById("sort").addEventListener("click", sortByPriority);


