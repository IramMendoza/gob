import UserIcon from "../assets/user5.png"
import Captcha from "../assets/captchaNegro.png"
import { useState } from "react"

const Form = () => {

    const [input1, setInput1] = useState('daugryea-asfse-dfsfs214-f')
    const [input2, setInput2] = useState('235432535')
    const [verified, setVerified] = useState(false)

    function handleState () {
        setVerified(true)
    }

  return (
    <div className=' h-[70vh] bg-white flex justify-center py-[8vh]'>
        <div className=' border-solid border-2 bor w-[50vh] h-[60vh]'>

            <div className=" bg-zinc-100 h-[8vh]">
                <p className=" text-zinc-600 text-2xl pt-[1vh] pl-[2vh]" >Validación de Vacunación:</p>
            </div>

            <div className=" px-[3vh] py-[4vh] flex w-full">
                <div className=" bg-zinc-200 w-[6vh] h-[6vh] flex justify-center">
                    <img src={UserIcon} className=" w-[6vh] px-[7px] py-[9px]"/>
                </div>

                <input placeholder="" className=" w-[40vh] border-solid border-2"/>
            </div>

            <div className=" px-[3vh] flex w-full">
                <div className=" bg-zinc-200 w-[6vh] h-[6vh] flex justify-center">
                    <img src={UserIcon} className=" w-[6vh] px-[7px] py-[9px]"/>
                </div>

                <input placeholder="" className=" w-[40vh] border-solid border-2"/>
            </div>

            <div className=" w-full px-[3vh] py-[3vh]">

                <div className=" flex px-[3vh] pt-[4vh] bg-zinc-100 ">

                    {
                        
                    }
                    <div onClick={handleState} className="w-[5vh] bg-white border-zinc-400 h-[5vh] border-solid border-2"/>
                    <p className=" pl-[2vh] px-[2vh] pt-[1vh]">No soy un robot</p>
                        <img src={Captcha} className="w-[10vh] pl-[4vh]"/>
                </div>
                <div className=" bg-zinc-100">
                    <div className=" w-full flex justify-end">
                        <p className=" py-[1vh] text-[8px] pr-[1vh] ">Privacidad - Condiciones</p>
                    </div>
                </div>
            </div>

            <div className=" w-full px-[3vh]">
                <button className="border-solid border-2 border-red-800 text-red-800 text-xl px-[4vh] py-[2vh] rounded-md">Buscar</button> 
            </div>

        </div>
      
    </div>
  )
}

export default Form
