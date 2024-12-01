import React, { useState } from 'react'

const App = () => {

  // const [boxes, setboxes] = useState([
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  //   "", 

  // ])

    const [boxes, setboxes] = useState(new Array(9).fill(""))
    
    const [start , setstart] = useState(true)
    const [iswinner, setiswinner] = useState(false)
    const [winnername, setwinnername] = useState("")
    const [gamedraw, setgamedraw] = useState(false)

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];


//     const checkWinner = ()=>{

//       // horizontal part 

//     if(boxes[0] && boxes[0] === boxes[1] && boxes[0] === boxes[2]){
//       console.log(`winner is ${boxes[0]}`)
//       setiswinner(true)
//       setwinnername(boxes[0])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }
//     else if(boxes[3] && boxes[3] === boxes[4] && boxes[3] === boxes[5]){
//       console.log(`winner is ${boxes[3]}`)
//       setiswinner(true)
//       setwinnername(boxes[3])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }
//     else if(boxes[6] && boxes[6] === boxes[7] && boxes[6] === boxes[8]){
//       console.log(`winner is ${boxes[6]}`)
//       setiswinner(true)
//       setwinnername(boxes[6])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }

//     // vertical part 

//     else if(boxes[0] && boxes[0] === boxes[3] && boxes[0] === boxes[6]){
//       console.log(`winner is ${boxes[0]}`)
//       setiswinner(true)
//       setwinnername(boxes[0])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }
//     else if(boxes[1] && boxes[1] === boxes[4] && boxes[1] === boxes[7]){
//       console.log(`winner is ${boxes[1]}`)
//       setiswinner(true)
//       setwinnername(boxes[1])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }
//     else if(boxes[2] && boxes[2] === boxes[5] && boxes[2] === boxes[8]){
//       console.log(`winner is ${boxes[2]}`)
//       setiswinner(true)
//       setwinnername(boxes[2])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }

// // diagonal part
//     else if(boxes[0] && boxes[0] === boxes[4] && boxes[0] === boxes[8]){
//       console.log(`winner is ${boxes[0]}`)
//       setiswinner(true)
//       setwinnername(boxes[0])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }
//     else if(boxes[2] && boxes[2] === boxes[4] && boxes[2] === boxes[6]){
//       console.log(`winner is ${boxes[2]}`)
//       setiswinner(true)
//       setwinnername(boxes[2])
//       setboxes(new Array(9).fill(""))
//      return ;
//     }


//     else if (!boxes.includes("")){
//       console.log(`game draw`)
      
//       setgamedraw(true)
//       setboxes(new Array(9).fill(""))
//     }

//     }

const checkWinner = ()=>{

for(const line of lines){
  const [a,b,c] = line

  if( boxes[a] &&  boxes[a] ===  boxes[b] &&  boxes[a]=== boxes[c]){
    setiswinner(true)
          setwinnername(boxes[a])
          setboxes(new Array(9).fill(""))
         return ;
  }
}

     if (!boxes.includes("")){
      console.log(`game draw`)
      
      setgamedraw(true)
      setboxes(new Array(9).fill(""))
    }

return null;

}

    const clickBox = (getindex)=>{

      if(boxes[getindex]) return;

      boxes[getindex] = start ? "0" : "X"
      setstart(!start)
      checkWinner()
    }


  return (
    <>
      <h1 className='p-4 bg-orange-500 text-3xl font-bold text-white text-center'>Welcome to our Tic tac toe game</h1>

      <div className="game-container p-10 lg:h-[80vh] bg-gray-200 flex  items-center relative flex-col ">

        {/* player turn show */}
        <h1 className='py-6 text-3xl'>Player's Turn  {start ? "0" : "X"}</h1>
        
        {/* game board  */}
        <div className="tictactoe flex flex-wrap w-[305px]">
          {/* boxes start form here  */}
          {boxes.map((box,index)=>(

          <div
          key={index}
          onClick={()=>clickBox(index)}
          className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold">
            {box}
          </div>
          ))}

         
        </div>

      {/* winner card  */}
      {
        iswinner && 
        <div className="winnercard shadow-lg bg-white rounded-lg p-10 flex justify-center items-center absolute top-4">
       <h1 className='text-3xl text-green-400'>Congratulation {winnername} is winner 
       <span
        onClick={()=>setiswinner(false)}
        className='block mt-4 p-2 bg-green-500 text-white rounded-lg text-lg text-center cursor-pointer'> 
        play again
        </span>
       </h1>
       </div>  }

      {gamedraw  &&
       <div className="winnercard shadow-lg bg-white rounded-lg p-10 flex justify-center items-center absolute top-4">
       <h1 className='text-3xl text-red-400'>game draw 
        <span
        onClick={()=>setgamedraw(false)}
        className=' ml-4 p-2 bg-red-500 text-white rounded-lg text-lg text-center cursor-pointer'> 
        play again
        </span>
        </h1> 
       </div>
        }
     
      
    

      </div>


<footer className='flex items-center justify-center w-full p-4 bg-red-500 '>
  <p className='text-4xl font-bold text-center text-white'>Subscribe our channel</p>
</footer>
    </>
  )
}

export default App

// https://github.com/samirrain/Tictactoe-game-with-react/