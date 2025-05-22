'use client';

export default function CartSummary({ items }: { items: any[] }) {
    const total = items.reduce((acc, item) => acc + (item.price || 0), 0);
  
    return (
      <div className="bg-[#1c1c1c] p-4 rounded mb-6 border border-gray-700 text-white">
        <h2 className="text-xl mb-4  text-white">Cart Items:</h2>
        {items.map((item) => (
          <div key={item.id} className="mb-2  text-white">
            {item.name} - ${item.price}
          </div>
        ))}
        <hr className="my-2 border-gray-600" />
        <p className="font-bold">Total: ${total}</p>
      </div>
    );
  }
  