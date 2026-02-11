import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  // URL จาก Cloudflare Worker ที่คุณตั้งค่าไว้
  static const String baseUrl = 'https://darayar.online/api/products';

  Future<List<dynamic>> fetchProducts() async {
    final response = await http.get(Uri.parse(baseUrl));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('โหลดข้อมูลล้มเหลว');
    }
  }
}
