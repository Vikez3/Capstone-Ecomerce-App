import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { useSelector } from "react-redux";
import {
  CardInfo,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <CardInfo>
        <h4>Plese use card number 4242 4242 4242 4242 it is stripe test card</h4>
      </CardInfo>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
