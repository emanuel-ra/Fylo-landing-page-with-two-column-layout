function Navbar() {
  const links = ["Features" ,"Team" ,"Sign In"]
  return (
    <>
    <nav className="">
      <ul className="flex gap-8">
        {links.map((link,index) => (<NavLink key={index} label={link} />))}
      </ul>
    </nav>
    </>
  )
}

function NavLink({label}:{label:string}){
  return (<li><a href="#">{label}</a></li>)
}

export default Navbar