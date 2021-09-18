// put in styles.scss
@import "calendar";
@import "login";

//index.js
import OrderForm from '../components/OrderForm';



<Route
  path={'/orderform'}
  render={routerProps => <OrderForm {...routerProps} />}
></Route>


// menu.js
import { Link} from 'react-router-dom';
import OrderForm from '../components/OrderForm';

<div className="MenuPage">
  <OrderForm />
</div>
