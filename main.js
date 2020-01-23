const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = 
{
    player: 0,
    ai: 0
};

function play(e)
{
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const aiChoice = getAiChoice();
    const winner = getWinner(playerChoice, aiChoice)
    showWinner(winner, aiChoice)
}

function getAiChoice()
{
    const rand = Math.random();
    if(rand < 0.34)
    {
        return 'rock';
    } else if(rand <= 0.67)

    {
        return 'paper';
    } 
else
    {
        return 'scissors';
  }
}


function getWinner(x, y)
{
    if(x === y)
    {
        return 'draw';
    }
    else if(x === 'rock')
    {
        if(y === 'paper')
        {
            return 'ai';
        }
else
        {
            return 'player';
        }
    }
else if (x === 'paper')

        {
        if(y ==='scissors')
            {
            return 'ai';
            }
else
            {
            return 'player';
            }

        }
    else if(x === 'scissors')
    {
        if(y === 'rock')
        {
            return 'ai';
        }
else 
        {
            return 'player';
        }
    }
  }



  function showWinner(winner, aiChoice){
      if(winner ==='player'){
          scoreboard.player++;

          result.innerHTML = `<h1 class="text-win"> You Win!</h1>
          <i class="fas fa-hand-${aiChoice} fa-10x"></i>
          <p>AI Chose <strong>${aiChoice}</strong></p>
          `;
      } 
      else if(winner === 'ai'){
            scoreboard.ai++;
  
            result.innerHTML = `<h1 class="text-lose"> You Lose</h1>
            <i class="fas fa-hand-${aiChoice} fa-10x"></i>
            <p>AI Chose <strong>${aiChoice}</strong></p>
            `;

      }
      else{
        result.innerHTML = `<h1 class="text-lose"> DRAW!</h1>
        <i class="fas fa-hand-${aiChoice} fa-10x"></i>
        <p>AI Chose <strong>${aiChoice}</strong></p>
        `;
      }

      score.innerHTML = `<p>Player: ${scoreboard.player}</p>
      <p>AI: ${scoreboard.ai}</p>`;

      modal.style.display = 'block';
  }

  function restartGame()
  {
      scoreboard.player = 0;
      scoreboard.ai = 0;
      score.innerHTML = `
      <p>Player: 0</p> 
      <p>AI: 0</p>`;
  }

  function clearModal(e)
  {
      if(e.target == modal)
      {
          modal.style.display = 'none';
      }
  }

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);