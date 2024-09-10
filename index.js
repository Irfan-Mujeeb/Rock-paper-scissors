const allChoices =['rock','paper','scissors']
const myChoice =document.getElementById('myChoice')
const CPUChoice =document.getElementById('CPUChoice')
const finalResult =document.getElementById('finalResult')
const playerScoredisplay =document.getElementById('playerScore')
const CPUScoredisplay =document.getElementById('CPUScore')
let playerPoints =0 ;
let CPUPoints =0;

function playgame(choice){

    const ComputerChoice =allChoices[Math.floor(Math.random( )* 3 )]
    let result ="" ;

    if(choice  === ComputerChoice){
        result ='ITS A TIE !'
    }
    else{
        switch(choice){
        case 'rock' :
            result = (ComputerChoice=== 'scissors') ? 'YOU WIN' : 'YOU LOSE'
            break ;

            case 'paper' :
            result = (ComputerChoice=== 'rock') ? 'YOU WIN' : 'YOU LOSE'
            break ;

            case 'scissors' :
            result = (ComputerChoice=== 'paper') ? 'YOU WIN' : 'YOU LOSE'
            break ;
        }}
        myChoice.textContent =`Player :${choice}`
        CPUChoice.textContent =`Computer :${ComputerChoice}`
        finalResult.textContent =result

        finalResult.classList.remove('green','red')

        switch(result){
            case 'YOU WIN' :
                finalResult.classList.add('green')
                playerPoints++ ;
               playerScoredisplay.textContent =playerPoints ;
                break ;

                case 'YOU LOSE' :
                finalResult.classList.add('red')
                CPUPoints++ ;
                CPUScoredisplay.textContent =CPUPoints ;
                break ;
        }

}

