'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { checkoutProduct, getProducts } from '@/lib/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import CartButton from '@/components/ui/cartButton';

export default function ProductsPage() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const placeOrder = async (productId: number, paymentType: string) => {
    try {
      await checkoutProduct(productId, paymentType);
      setProducts((prev) => prev.filter((p: any) => p.id !== productId));
      toast.success(`Order placed with ${paymentType.toUpperCase()}`);
    } catch (err) {
      toast.error('Failed to place order');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-12">
      <CartButton />
      <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">Available Products</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <Card key={product.id} className="bg-[#121212] border border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm text-gray-400">Name: {product.name}</p>
                  <p className="text-sm text-gray-400">Price: {product.price}</p>
                </div>
                <div className="mt-6 flex gap-3">
                <Button
                  variant="default"
                  className="flex-1 bg-white text-black hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    dispatch(addToCart(product));
                    toast.success('Added to cart');
                  }}
                >
                  Add to Cart
                </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
