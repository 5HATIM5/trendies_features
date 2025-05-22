import api from './axios';

export async function getProducts() {
  const response = await api.get('/products');
  return response.data;
}

export async function checkoutProduct(formData: any, orderItems: any) {
  
  const response = await api.post('/orders/checkout', {
    ...formData,
    items: orderItems ,
  });

  if (response.status !== 201) throw new Error('Order failed');
    
  return response.data;
}
  