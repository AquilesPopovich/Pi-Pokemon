import { Link,  useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar"; 
import styles from "./nav.module.css"; 
import Filters from '../filters/Filters'


const Nav = ({ onSearch }) => {
  const location = useLocation();
  return (
    <div className={styles["nav-container"]}>
      <div className={styles["nav-links"]}>
        <Link to="/home" className={styles.btnHome}></Link>
        <SearchBar onSearch={onSearch} />
        <Link to="/form" className={styles.btnCrear}></Link>
        {location.pathname === '/home' && <Filters/>}
        <Link to="/" className={styles.btnLanding}></Link>
        
      </div>
    </div>
  );
}

export default Nav;

