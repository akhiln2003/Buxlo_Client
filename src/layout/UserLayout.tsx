import { Outlet, useLocation } from 'react-router-dom';
import UserNavbar from '@/components/navbar/UserNavbar'; 
import { UserUrls } from '@/@types/enums/UserUrls';

  function UserLayout() {
    const {pathname} = useLocation();
    const routeWithoutNav = [ UserUrls.signIn ,];
    const higeNavbar = routeWithoutNav.some(route => pathname.startsWith(route));
  return (
    <>
        {!higeNavbar && < UserNavbar /> }
       <div className={ higeNavbar ? "":'pt-16'}>  < Outlet /></div>
    </>
  )
  }
  
  export default UserLayout