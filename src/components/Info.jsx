import CheckGrande from "../assets/checkGrande.svg"
import { motion } from "framer-motion"

const Info = () => {
  return (
    <motion.div initial={{ scale : 0.5 }} animate={{ scale : 1 }} transition={{ duration : 0.1 }} className=" shadow-2xl fixed top-10 mx-[2vh] bg-white rounded-md">
        <div className=" w-full flex justify-center py-[5vh]">
            <div className=" w-[15vh] h-[15vh] rounded-full flex justify-center border-solid border-4 border-lime-200">
                <motion.img src={CheckGrande} initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ duration : 1 }} className=" w-[10vh]"/>
            </div>
        </div>

        <p className=" pl-[3vh] text-zinc-900 text-2xl font-semibold">QR. Valido: Para validar el Certificado, los siguientes datos deberán coincidir exactamente con los del documento presentado.</p>

        <div className=" w-full pl-[7vh]">
            <p className=" py-[1vh] text-zinc-600" >Fecha de emisión: 2021-07-20 17:24:51</p>
            <p className=" py-[1vh] text-zinc-600" >CURP: MERC910906HMCNDR03</p>
            <p className=" py-[1vh] text-zinc-600" >Segundo Apellido: RODRIGUEZ</p>
            <p className=" py-[1vh] text-zinc-600" >Lote Dosis 2: II-700621</p>
            <p className=" py-[1vh] text-zinc-600" >Marca Dosis 2: Sputnik V</p>
        </div>

        <div className=" w-full flex justify-end py-[2vh] px-[3vh]">
            <button className=" bg-sky-200 rounded-lg border-solid border-2 border-slate-300 text-white py-[1vh] px-[3vh]">OK</button>
        </div>

    </motion.div>
  )
}

export default Info
