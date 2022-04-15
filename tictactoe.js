
var board=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
currPlayer=0;

var pName=['Player-1','Player-2'];
var sign=['O','X'];

let tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
  tile.addEventListener('click', function handleClick(event) {
    console.log('box clicked   '+tile.id, event);

    let r=tile.id.charAt(0);
    let c=tile.id.charAt(1);

    if( isWon() || board[r][c]!=-1)
        return;

    board[r][c]=currPlayer;

    console.log(board.toString());

    tile.setAttribute('style', 'background-color: yellow;');
    tile.innerText=sign[currPlayer];

    if(isWon())
     {  
        document.getElementById('announce').innerText=pName[currPlayer]+" won the match";
     }
    
     currPlayer=currPlayer^1;

  });
});

function isWon(){
    
    //horizontal
    for(let i=0;i<3;i++)
    {
        if(board[i][0]!=-1 && board[i][0]==board[i][1] && board[i][1]==board[i][2])
           {
            document.getElementById((i+""+0)).setAttribute('style', 'background-color: green;');
            document.getElementById((i+""+1)).setAttribute('style', 'background-color: green;');
            document.getElementById((i+""+2)).setAttribute('style', 'background-color: green;');
                  return true;
           }
    }


    //vertical
    for(let i=0;i<3;i++)
    {
        if(board[0][i]!=-1 && board[0][i]==board[1][i] && board[1][i]==board[2][i])
         {
            document.getElementById((0+""+i)).setAttribute('style', 'background-color: green;');
            document.getElementById((1+""+i)).setAttribute('style', 'background-color: green;');
            document.getElementById((2+""+i)).setAttribute('style', 'background-color: green;');

              return true;
         }
    }

    //diagonal
    if(board[0][0]!=-1 && board[0][0]==board[1][1] && board[1][1]==board[2][2])
       {
        document.getElementById((0+""+0)).setAttribute('style', 'background-color: green;');
        document.getElementById((1+""+1)).setAttribute('style', 'background-color: green;');
        document.getElementById((2+""+2)).setAttribute('style', 'background-color: green;');

            return true;
       }

    //anti-diagonal
    if(board[0][2]!=-1 && board[0][2]==board[1][1] && board[1][1]==board[2][0])
      {
        document.getElementById((0+""+2)).setAttribute('style', 'background-color: green;');
        document.getElementById((1+""+1)).setAttribute('style', 'background-color: green;');
        document.getElementById((2+""+0)).setAttribute('style', 'background-color: green;');

            return true;
      }
}

btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    window.location.reload();
});

player1=document.getElementById('player1');
player2=document.getElementById('player2');

player1.addEventListener('input',function(){
    pName[0]=this.value;
});

player2.addEventListener('input',function(){
    pName[1]=this.value;
});
