import React from 'react'

const App = () => {
  return (
    <>
      <h1 className='p-4 bg-orange-500 text-3xl font-bold text-white text-center'>Welcome to our Tic tac toe game</h1>

      <div className="game-container p-10 lg:h-[80vh] bg-gray-200 flex  items-center relative flex-col ">

        {/* player turn show */}
        <h1 className='py-6 text-3xl'>Player's Turn</h1>
        
        {/* game board  */}
        <div className="tictactoe flex flex-wrap w-[305px]">
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
          <div className="box w-[100px] h-[100px] border-2 border-orange-500 cursor-pointer hover:bg-white flex justify-center items-center text-4xl font-bold"></div>
        </div>

      {/* winner card  */}
      {/* <div className="winnercard shadow-lg bg-white rounded-lg p-10 flex justify-center items-center absolute top-4">
        <h1 className='text-3xl'>Congratulation winner</h1>
      </div> */}

      </div>


<footer className='flex items-center justify-center w-full p-4 bg-red-500 '>
  <p className='text-4xl font-bold text-center text-white'>Subscribe our channel</p>
</footer>
    </>
  )
}

export default App