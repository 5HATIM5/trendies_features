'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function CheckoutForm({ onSubmit }: { onSubmit: (data: any) => void }) {

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    paymentType: 'cash',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6 bg-gray-900 p-6 rounded-md shadow-md"
    >
      <Link href="/products" className="fixed top-6 right-6 z-50 text-black">
          <Button
            variant="outline"
            className="mb-4"
          >
            ← Back to Products
          </Button>
      </Link>
      <div>
        <Label htmlFor="name" className='mb-4'>Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone" className='mb-4'>Phone</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="+1 234 567 890"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="address" className='mb-4'>Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="Your delivery address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="paymentType" className='mb-4'>Payment Type</Label>
        <Select
          value={form.paymentType}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, paymentType: value }))
          }
        > 
         <SelectTrigger id="paymentType" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cash">Cash</SelectItem>
            <SelectItem value="pos">POS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Checkout
      </Button>
    </form>
  );
}
