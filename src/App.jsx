import Navbar from "./components/navbar";
import Header from "./components/Header";
import UserIcon from "./assets/user5.png";
import Captcha from "../src/assets/captchaNegro.png";
import Check from "./assets/check.svg"
import Info from "./components/Info"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [input1, setInput1] = useState('daugryea-asfse-dfsfs214-f');
  const [input2, setInput2] = useState('235432535');
  const [verified, setVerified] = useState(false);
  const [search, setSearch] = useState(false)

  function handleState() {
    setTimeout( () => {
      setVerified(true)
    }, 1000)
  }

  function handleSearch() {
   setTimeout( () => {
    setSearch(true)
   }, 1000)
  }

  // Manejador para el primer input
  function handleInput1Change(event) {
    setInput1(event.target.value);
  }

  // Manejador para el segundo input
  function handleInput2Change(event) {
    setInput2(event.target.value);
  }

  return (
    <>
      <div className=' bg-green-950'>
        <Navbar />
        <Header />

        <AnimatePresence>
          {
            search ? <Info/> : null
          }
        </AnimatePresence>

        <div className=' h-[70vh] bg-white flex justify-center py-[8vh]'>
          <div className=' border-solid border-2 bor w-[50vh] h-[60vh]'>
            <div className=" bg-zinc-100 h-[8vh]">
              <p className=" text-zinc-600 text-2xl pt-[1vh] pl-[2vh]" >Validación de Vacunación:</p>
            </div>

            <div className=" px-[3vh] py-[4vh] flex w-full">
              <div className=" bg-zinc-200 w-[6vh] h-[6vh] flex justify-center">
                <img src={UserIcon} className=" w-[6vh] px-[7px] py-[9px]" />
              </div>
              <input
                placeholder=""
                className="w-[40vh] border-solid border-2"
                value={input1}
                onChange={handleInput1Change}
              />
            </div>

            <div className="px-[3vh] flex w-full">
              <div className=" bg-zinc-200 w-[6vh] h-[6vh] flex justify-center">
                <img src={UserIcon} className=" w-[6vh] px-[7px] py-[9px]" />
              </div>
              <input
                placeholder=""
                className="w-[40vh] border-solid border-2"
                value={input2}
                onChange={handleInput2Change}
              />
            </div>

            <div className="w-full px-[3vh] py-[3vh]">
              <div className="flex px-[3vh] pt-[4vh] bg-zinc-100">

                <AnimatePresence>
                {
                  verified ? <motion.img initial={{opacity : 0 }} animate={{ opacity : 1 }} transition={{ duration : 1 }} className=" w-[6vh]" src={Check}/>

                  : <motion.div exit={{ opacity : 1 }} transition={{ duration : 1 }} onClick={handleState} className="w-[5vh] bg-white border-zinc-400 h-[5vh] border-solid border-2"/>
                }
                </AnimatePresence>

                <p className="pl-[2vh] px-[2vh] pt-[1vh]">No soy un robot</p>
                <img src={Captcha} className="w-[10vh] pl-[4vh]" />
              </div>
              <div className="bg-zinc-100">
                <div className="w-full flex justify-end">
                  <p className="py-[1vh] text-[8px] pr-[1vh]">Privacidad - Condiciones</p>
                </div>
              </div>
            </div>

            <div className="w-full px-[3vh]">
              <button onClick={handleSearch} className="border-solid border-2 border-red-800 text-red-800 text-xl px-[4vh] py-[2vh] rounded-md">Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
