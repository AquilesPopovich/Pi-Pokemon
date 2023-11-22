import { Link } from "react-router-dom"
import style from './landing.module.css'

const Landing = () =>{
    return (
        <div className={style.container}>
          <img className={style.imgLanding} src='/assets/imgs/logoLanding.png' alt="" />
          <Link to='/home'>
            <button className={style.btnLanding} >Home</button>
          </Link>
        </div>
      );
}

export default Landing