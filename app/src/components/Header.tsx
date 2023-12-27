import { Logo } from "./Icons/Logo"
import Navbar from "./Nav/Navbar"

function Header() {
  return (
    <header className="lg:w-[1440px] pt-4 px-8 flex justify-between font-raleway">
      <div className="flex justify-center items-center">
        <Logo height={49} width={70} />
        <h1 className="text-2xl font-bold">Fylo</h1>
      </div>
      <Navbar />
    </header>
  )
}

export default Header