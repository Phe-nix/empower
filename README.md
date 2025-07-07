# Empower: Income/Expense Tracker

## Getting Started

### 1. Clone this repository
```bash
git clone https://github.com/Phe-nix/empower.git
cd empower
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure your MySQL database
- สร้างฐานข้อมูล MySQL ใหม่ (หรือใช้ฐานข้อมูลที่มีอยู่)
- คัดลอกไฟล์ `.env.example` เป็น `.env` แล้วแก้ไขค่า `DATABASE_URL` ให้ตรงกับข้อมูล MySQL ของคุณ เช่น:
```
DATABASE_URL="mysql://root@localhost:3306/db"
```
(ใช้ XAMPP ในการรัน Server MySQL)
### 4. สร้างตารางและข้อมูลตัวอย่าง
```bash
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
```

### 5. เริ่มต้นเซิร์ฟเวอร์
```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อใช้งานแอปพลิเคชัน

## Database Setup
- You will need a running MySQL instance.
- Database schema and seed scripts are provided in the `/prisma` directory.

## License
MIT
