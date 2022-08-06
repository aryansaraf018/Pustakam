import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  function sell(){
    alert('Sell your books here!')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find your book"
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> English </span>
          
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}`: 'Login'}</span>
          <hr />
        </div>
          { user && <span onClick={()=>{
            firebase.auth().signOut()
            history.push('/login')
          }}>Logout</span> }
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{history.push('/create')}}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
