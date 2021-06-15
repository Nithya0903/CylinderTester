import { Link } from "react-router-dom"
import { Menu } from "antd"
import { useState } from "react"
const NavBar = ()=>{
    const [page, setPage] = useState("Entry")
    return <Menu
        mode="horizontal"
        className="navbar"
        onClick={(val)=>{setPage(val.key)}}
        selectedKeys={[page]}
        inlineIndent={50}
    >
        <Menu.Item key={"Entry"}>  <Link to="/addEntry"> Add Entry </Link></Menu.Item>
        <Menu.Item key={"View"}> <Link to="/ViewEntry"> View Entries </Link></Menu.Item>
        <Menu.Item key={"Report"}> <Link to="/Report"> Report </Link> </Menu.Item>
 
    

    </Menu>
}



export default NavBar