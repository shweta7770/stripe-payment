
import './App.css';
import { Home } from './screen/Home';
import { OrderNow } from './screen/OrderNow';
import { ShoppingCart } from './screen/ShoppingCart';
import {StripePayment} from './screen/StripePayment';
import {PaymentSuccess} from './screen/PaymentSuccess'

const showPages = () => {
  if (window.location.pathname === '/cart') {
    return <ShoppingCart />;
  } else if (window.location.pathname === '/') {
    return <Home />;
  }else if(window.location.pathname === '/order')
  {
    return <OrderNow />
  }else if(window.location.pathname === '/payment'){
    return <StripePayment />
  }else if(window.location.pathname === '/success'){
     return <PaymentSuccess />
  }
}



function App() {

  return (
    <>
      {showPages()}
     
    </>

  );
}

export default App;
