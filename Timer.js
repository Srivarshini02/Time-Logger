const button = document.getElementById('button-select')
const task = document.getElementById('task')
const description = document.getElementById('description')
const entryTable = document.getElementById('entries')
const timerControl = document.getElementById('timer-control')
const counterValue = document.getElementById('counter-value')
const sec=document.getElementById('seconds')
const min=document.getElementById('minutes')
const hr=document.getElementById('hours')
// function
function addTask() {
    // creating new entries
    entryTable.innerHTML += `<tr>
    <td>${task.value}</td>
    <td>${description.value}</td>
    <td>${hr.textContent}:${min.textContent}:${sec.textContent}</td>
  </tr>`

//   resetting input fields
    task.value = ''
    description.value = ''
}
let intervalId
function startTimer() {
    if(timerControl.textContent === 'Stop') {
        timerControl.style.setProperty('background-color', 'green')
        addTask()

        timerControl.textContent = 'Start'

        // stop the timer
        clearInterval(intervalId)
        sec.textContent='00'
        min.textContent='00'
        hr.textContent='00'
        
    } else if(timerControl.textContent === 'Start') {
        timerControl.style.setProperty('background-color', 'red')
        let s=0
        let m=0
        let h=0
        intervalId=setInterval(function(){
            s++
            if(s>=60){
                s=0
                m++
                if(m>=60){
                    m=0
                    h++
                }
            }
            sec.textContent=s.toString().padStart(2,'0')
            min.textContent=m.toString().padStart(2,'0')
            hr.textContent=h.toString().padStart(2,'0')

        },50)

        timerControl.textContent = 'Stop'
        
    }
}
timerControl.addEventListener('click', startTimer)
timerControl.style.setProperty('background-color', 'green')