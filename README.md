darayar-powerpack-app

ระบบแสดงข้อมูลทางเทคนิคและแคตตาล็อกสินค้าออนไลน์สำหรับ DARAYAR BICYCLE LIFESTYLE COMPANY โดยเน้นการนำเสนอผลิตภัณฑ์กลุ่ม Battery Power Pack (ICR18650 Series) ที่มีมาตรฐานความปลอดภัยสูง

📋 ข้อมูลโครงการ (Project Overview)

เว็บไซต์นี้ทำหน้าที่เป็นหน้า Landing Page และระบบจัดเก็บเอกสารดิจิทัลที่แสดงข้อมูลใบรับรองมาตรฐาน (Certificate of Analysis - COA), ข้อมูลการตรวจสอบคุณภาพทางเทคนิค (QC Specs), และรายละเอียดช่องทางการชำระเงินที่หลากหลาย สำหรับชุดแบตเตอรี่ลิเธียมไอออนรุ่นต่างๆ

จุดเด่นของระบบ:

Responsive Design: รองรับการแสดงผลทุกหน้าจอ (Desktop, Tablet, Mobile)

Cloud-Integrated: ดึงข้อมูลรูปภาพและไฟล์จาก Cloudflare R2 Storage โดยตรง

Modern UI: ใช้การออกแบบที่เน้นความน่าเชื่อถือและเข้าถึงข้อมูลได้ง่าย

🔋 ผลิตภัณฑ์หลัก (Featured Product)

รุ่น PP-DRY03 (14.8V 4S1P 2000mAh)

ชุดแบตเตอรี่ลิเธียมไอออนที่เน้นประสิทธิภาพด้านแรงดันไฟฟ้าและขนาดที่กะทัดรัด

Voltage: 14.8V (Nominal Voltage)

Configuration: 4 Series 1 Parallel (4S1P) จัดเรียงเซลล์แบบอนุกรม 4 ก้อน

Cell Type: ICR18650 คุณภาพสูง (High Energy Density)

Certifications: ได้รับการรับรองมาตรฐานสากล IEC, CE และเอกสารความปลอดภัย MSDS

Operating Temp: รองรับสภาวะอากาศสุดขั้วตั้งแต่ -40°C ถึง 85°C

Applications: ออกแบบมาเพื่ออุปกรณ์ทางการแพทย์ (Medical Devices), หุ่นยนต์ (Robotics), โดรน (Drones) และเครื่องมือไฟฟ้าแบบพกพา (Power Tools)

☁️ โครงสร้างพื้นฐาน Cloud (Infrastructure)

โครงการนี้ใช้เทคโนโลยี Cloud-Native จาก Cloudflare เพื่อความรวดเร็วและความปลอดภัยในการรับส่งข้อมูล:

S3 API Endpoint: 8495bd97bd70a9bb9be1ea903f3ab66b.r2.cloudflarestorage.com

Public Development URL: pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev

Warehouse Name: 8495bd97bd70a9bb9be1ea903f3ab66b_darayar

Transformation Settings: Cloudflare API Settings

🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

Frontend Framework: HTML5 ร่วมกับ Tailwind CSS (via CDN) เพื่อความรวดเร็วในการโหลดหน้าเว็บ

Iconography: Font Awesome 6.4.0 (SVG-based icons)

Typography: Google Fonts - 'Kanit' สำหรับการอ่านภาษาไทยที่ชัดเจน

Cloud Storage: Cloudflare R2 (S3 Compatible Object Storage)

📁 โครงสร้างไฟล์ (File Structure)

darayar-powerpack-app/
├── index.html          # หน้าหลักแสดงผล (รุ่นล่าสุด PP-DRY03 พร้อม UI แกลเลอรีรูปภาพ)
└── README.md           # เอกสารประกอบโครงการและคู่มือการเชื่อมต่อระบบ Cloud


💳 ช่องทางการชำระเงิน (Payment Channels)

เพื่ออำนวยความสะดวกให้แก่คู่ค้าและลูกค้าทั่วไป ระบบรองรับ:

ถุงเงิน, เป๋าตังเปย์, พร้อมเพย์

การใช้คะแนนสะสม: AIS Points, My Point, Bangchak, Max Point, Global Club

📞 ข้อมูลติดต่อ (Contact Information)

หากต้องการข้อมูลเพิ่มเติมหรือความร่วมมือทางธุรกิจ:

บริษัท: DALAYAR BICYCLE LIFESTYLE COMPANY

ที่อยู่: 229 ถนนเกษตรพัฒนา ต.กุดเค้า อ.มัญจาคีรี จ.ขอนแก่น 40160

โทรศัพท์: 043-289-526

Line OA: @batterydaraya

เว็บไซต์อย่างเป็นทางการ: Google Sites - Security & Information

อัปเดตล่าสุด: 13 กุมภาพันธ์ 2026
{
  "project_info": {
    "name": "darayar-powerpack-app",
    "organization": "DALAYAR BICYCLE LIFESTYLE COMPANY",
    "version": "1.1.0",
    "last_updated": "2026-02-13"
  },
  "infrastructure": {
    "cloud_provider": "Cloudflare",
    "storage": {
      "type": "R2 Object Storage",
      "s3_api_endpoint": "8495bd97bd70a9bb9be1ea903f3ab66b.r2.cloudflarestorage.com",
      "public_dev_url": "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev",
      "warehouse_name": "8495bd97bd70a9bb9be1ea903f3ab66b_darayar",
      "zone_id": "e003b4a518f37d9a037838b007a05efa"
    }
  },
  "products": [
    {
      "id": "PP-DRY03",
      "name": "ICR18650 Battery Power Pack",
      "specifications": {
        "nominal_voltage": "14.8V",
        "configuration": "4S1P",
        "capacity": "2000mAh",
        "max_charge_current": "500mA (0.25C)",
        "max_discharge_current": "1000mA (0.5C)",
        "cycle_life": "500+ @25°C 1C",
        "operating_temperature": {
          "min": -40,
          "max": 85,
          "unit": "Celsius"
        },
        "self_discharge_rate": "≤3% per month"
      },
      "certifications": ["IEC", "CE", "MSDS"],
      "applications": [
        "Consumer Electronics",
        "Portable Power Tools",
        "Medical Devices",
        "Robotics",
        "Drones"
      ],
      "images": [
        "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev/COA/BATTERY%20POWER%20PLACK/PP-DRY03/2026-02-12_1256184s1p.jpg",
        "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev/COA/BATTERY%20POWER%20PLACK/PP-DRY03/2026-02-12_1256184s1p1.jpg",
        "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev/COA/BATTERY%20POWER%20PLACK/PP-DRY03/2026-02-12_1256184s1p11.jpg",
        "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev/COA/BATTERY%20POWER%20PLACK/PP-DRY03/2026-02-12_1256184s1p12.jpg",
        "https://pub-9ba95f4e6bfb4adaa90b66c08887a631.r2.dev/COA/BATTERY%20POWER%20PLACK/PP-DRY03/2026-02-12_1256184s1p13.jpg"
      ]
    }
  ],
  "contact": {
    "address": "229 ถนนเกษตรพัฒนา ต.กุดเค้า อ.มัญจาคีรี จ.ขอนแก่น 40160",
    "phone": "043-289-526",
    "line_oa": "@batterydaraya",
    "website": "https://sites.google.com/view/batterydarayacom/security"
  },
  "payment_methods": [
    "Thungngern",
    "Paotang Pay",
    "PromptPay",
    "AIS Points",
    "My Point",
    "Bangchak",
    "Max Point",
    "Global Club"
  ]
}
