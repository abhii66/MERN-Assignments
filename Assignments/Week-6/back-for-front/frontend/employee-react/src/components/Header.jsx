import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end gap-3 text-3xl bg-gray-500 p-7">
        <NavLink to="" className={({isActive}) => (isActive? "text-orange-500":"")}>Home</NavLink>
        <NavLink to="create-emp" className={({isActive}) => (isActive? "text-orange-500":"")}>CreateEmp</NavLink>
        <NavLink to="list" className={({isActive}) => (isActive? "text-orange-500":"")}>Employees</NavLink>
    </nav>
  )
}

export default Header