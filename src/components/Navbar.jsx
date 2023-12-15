import EscudoLogo from '../assets/escudo.png'
import LetrasGob from '../assets/logofooterGob.png'
import Menu from '../assets/Menu.svg'

const Navbar = () => {
  return (
    <div className=' bg-[#13322b] fixed top-0 w-full h-[10vh] flex'>

        <div className=' pt-[2vh] pl-[2vh]'>
            <img src={EscudoLogo} className=' w-[7vh]'/>
        </div>

        <div className=' pt-[2vh] pl-[2px]'>
            <img src={LetrasGob} className=' w-[15vh]'/>
        </div>

        <div className=' w-full flex justify-end pb-[2vh] pr-[2vh] '>
            <img src={Menu} className=' w-[5vh]'/>
        </div>


    </div>
  )
}

export default Navbar
