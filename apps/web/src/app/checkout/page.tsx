'use client';

import { toast } from 'sonner';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { clearCart } from '@/redux/slices/cartSlice';
import CheckoutForm from '@/components/ui/checkoutForm';
import CartSummary from '@/components/ui/cartSummary';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';
import { checkoutProduct } from '@/lib/api';

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = async (formData: any) => {
    try {
      const orderItems = cartItems.map(item => ({ productId: item.id }));

      const res = await checkoutProduct(formData, orderItems);
  
      dispatch(clearCart());
      toast.success('Order placed successfully!');
      router.push('/products');
    } catch (error) {
      toast.error('Checkout failed');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-12">
      <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">Checkout</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <CartSummary items={cartItems} />
        <CheckoutForm onSubmit={handleCheckout} />
      </div>
    </div>
  );
}
