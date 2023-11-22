import { Link } from "react-router-dom"
import style from './landing.module.css'

const Landing = () =>{
    return(
        <div className={style.container}>
        <Link to='/home' ><button>Home</button></Link>
        </div>
    )
}

export default Landing