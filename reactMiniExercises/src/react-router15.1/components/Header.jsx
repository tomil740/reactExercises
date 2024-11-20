import {Link,Outlet} from 'react-router-dom'

function Header() {
  return (
    <section>
      <Link to={"/Home"}>Home :</Link>
      <Link to={"/Product"}>Product :</Link>
      <Outlet />
    </section>
  );
}
export default Header