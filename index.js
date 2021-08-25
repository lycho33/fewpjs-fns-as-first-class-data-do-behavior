/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// function greet(string) {
//   let intString = parseInt(string.split(':'))
//   if (intString < 12) {
//     return 'Good Morning'
//   } else if (intString > 12 && intString < 17) {
//       return 'Good Afternoon'
//   } else {
//       return 'Good Evening'
//   }
// }

// function displayMessage(string) {
//   let element = document.getElementById('greeting')
//   element.innerText = string
// }
/* Write your implementation of displayMessage() */




function displayMessage(greet){
  let greeting = document.querySelector('#greeting')
  greeting.innerText = greet
}

function greet(timeString){
  let parsedTime = parseInt(timeString.split(':'))
  console.log(parsedTime)
  if (parsedTime < 12){
    return 'Good Morning'
  } else if (parsedTime == 12 || parsedTime < 18){
    return 'Good Afternoon'
  } else{
    return 'Good Evening'
  }
}