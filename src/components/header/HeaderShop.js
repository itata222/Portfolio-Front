import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logoutAdminAction } from '../../actions/loginActions';
import { LoginContext } from '../../contexts/loginContext';
import { deleteUserFromCookie } from '../../cookies/adminDataCookie';
import { logoutAdminToDB } from '../../services/adminService';
import HeaderRight from './HeaderRight';

const HeaderShop = () => {
    const {adminData,dispatchAdminData}=useContext(LoginContext);
    console.log(adminData)
    const history=useHistory();
    return (
        <div className="header">
            <div className="headerShop">
                <div className="siteHeadlines">
                    <NavLink className="shop" to="/home" activeClassName="active-header">
                        Home
                    </NavLink>
                    <NavLink className="shop" to="/shop" activeClassName="active-header">
                        Shop
                    </NavLink>
                    {
                        !!adminData.token&&
                        <div onClick={()=>{
                            logoutAdminToDB(adminData.token).then((data)=>{
                                dispatchAdminData(logoutAdminAction())
                                deleteUserFromCookie()
                                history.push('/home')
                            }).catch(e=>console.log(e))
                        }}>Logout</div>
                    }
                </div>
            </div>
            <HeaderRight />
        </div>
    )
}

export default HeaderShop
