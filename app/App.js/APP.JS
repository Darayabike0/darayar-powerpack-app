import React, { useState } from 'react';

// ข้อมูลในคลังสินค้า
const initialStock = [
  { id: 1, sku: 'DRY-001', name: 'สินค้า A', category: 'ทั่วไป', quantity: 50, status: 'ปกติ' },
  { id: 2, sku: 'DRY-002', name: 'สินค้า B', category: 'อิเล็กทรอนิกส์', quantity: 5, status: 'สต็อกต่ำ' },
];

export default function DarayarDashboard() {
  const [products] = useState(initialStock);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">DARAYAR.ONLINE</h1>
        <p className="text-gray-600">ระบบบริหารจัดการคลังสินค้าอัจฉริยะ</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
          <p className="text-sm text-gray-500 uppercase">รายการสินค้าทั้งหมด</p>
          <p className="text-2xl font-bold">{products.length} รายการ</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
          <p className="text-sm text-gray-500 uppercase">สินค้าสต็อกต่ำ</p>
          <p className="text-2xl font-bold text-yellow-600">1 รายการ</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
          <p className="text-sm text-gray-500 uppercase">รายการเข้า-ออกวันนี้</p>
          <p className="text-2xl font-bold">12 รายการ</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold">รายการสินค้าในคลัง</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + เพิ่มสินค้าใหม่
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-sm">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">ชื่อสินค้า</th>
              <th className="p-4">หมวดหมู่</th>
              <th className="p-4 text-center">คงเหลือ</th>
              <th className="p-4 text-center">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4 font-mono text-sm">{item.sku}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4 text-center">{item.quantity}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    item.status === 'ปกติ' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}