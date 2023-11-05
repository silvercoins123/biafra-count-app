//  countEl = document.getElementById('count-el')
// // let saveEl = document.getElementById('save-btn')
 
//  previous = document.getElementById("prev-el")
 
//  let lapCompleted = 0
//  function increment(){
     
//      countEl.innerText = lapCompleted
//      lapCompleted = lapCompleted +1
     
     
     
     
     
     
//     }
    
    
//     function save(){
//         let previous = lapCompleted + ' - '

//         console.log(previous)

//         previous.textContent = previous
        
         
//         countEl.textContent  = 0
        
//  //  saveEl.innerText = 0
 
//  }
//  save()

 // REPEATATION OF THE WHOLE CODE:

 let count = 0;
 let countEl = document.getElementById('count-el')
 let prevEl=document.getElementById('prev-el')

 function increment(){
      count ++
    
     countEl.innerText =count
 }
 
function save(){


    prev = prevEl.innerHTML += count+' - ';
    countEl.innerText = 0

    count = 0
}
save()





