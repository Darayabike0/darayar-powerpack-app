export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ดึงรายการหมวดหมู่ (Categories) จากตารางที่คุณเพิ่งสร้าง
    if (url.pathname === "/api/categories") {
      const { results } = await env.DB.prepare(
        "SELECT * FROM categories"
      ).all();
      return Response.json(results);
    }

    // เพิ่มสินค้าใหม่ลงในตาราง products
    if (url.pathname === "/api/products" && request.method === "POST") {
      const body = await request.json();
      await env.DB.prepare(
        "INSERT INTO products (sku, name, category_id, current_stock) VALUES (?, ?, ?, ?)"
      ).bind(body.sku, body.name, body.category_id, body.quantity).run();
      
      return new Response("Product Added!", { status: 201 });
    }

    return new Response("DARAYAR D1 API is Online");
  }
};