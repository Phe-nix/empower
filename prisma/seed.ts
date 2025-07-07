import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const june = [
    {
      type: "income",
      title: "Salary",
      amount: 15000.0,
      spentAt: new Date("2025-06-01T12:00:00"),
    },
    {
      type: "expense",
      title: "Groceries",
      amount: 1200.5,
      spentAt: new Date("2025-06-02T12:00:00"),
    },
    {
      type: "expense",
      title: "Transport",
      amount: 300.0,
      spentAt: new Date("2025-06-03T12:00:00"),
    },
    {
      type: "income",
      title: "Freelance",
      amount: 2500.0,
      spentAt: new Date("2025-06-04T12:00:00"),
    },
    {
      type: "expense",
      title: "Dining Out",
      amount: 450.0,
      spentAt: new Date("2025-06-05T12:00:00"),
    },
    {
      type: "expense",
      title: "Utilities",
      amount: 900.0,
      spentAt: new Date("2025-06-06T12:00:00"),
    },
    {
      type: "income",
      title: "Bonus",
      amount: 1000.0,
      spentAt: new Date("2025-06-07T12:00:00"),
    },
    {
      type: "expense",
      title: "Shopping",
      amount: 2000.0,
      spentAt: new Date("2025-06-08T12:00:00"),
    },
    {
      type: "expense",
      title: "Coffee",
      amount: 120.0,
      spentAt: new Date("2025-06-09T12:00:00"),
    },
    {
      type: "income",
      title: "Gift",
      amount: 500.0,
      spentAt: new Date("2025-06-10T12:00:00"),
    },
    {
      type: "expense",
      title: "Internet",
      amount: 700.0,
      spentAt: new Date("2025-06-11T12:00:00"),
    },
    {
      type: "expense",
      title: "Phone",
      amount: 400.0,
      spentAt: new Date("2025-06-12T12:00:00"),
    },
    {
      type: "income",
      title: "Interest",
      amount: 200.0,
      spentAt: new Date("2025-06-13T12:00:00"),
    },
    {
      type: "expense",
      title: "Insurance",
      amount: 800.0,
      spentAt: new Date("2025-06-14T12:00:00"),
    },
    {
      type: "expense",
      title: "Snacks",
      amount: 60.0,
      spentAt: new Date("2025-06-15T12:00:00"),
    },
    {
      type: "income",
      title: "Refund",
      amount: 300.0,
      spentAt: new Date("2025-06-16T12:00:00"),
    },
    {
      type: "expense",
      title: "Books",
      amount: 350.0,
      spentAt: new Date("2025-06-17T12:00:00"),
    },
    {
      type: "expense",
      title: "Petrol",
      amount: 500.0,
      spentAt: new Date("2025-06-18T12:00:00"),
    },
    {
      type: "income",
      title: "Lottery",
      amount: 100.0,
      spentAt: new Date("2025-06-19T12:00:00"),
    },
    {
      type: "expense",
      title: "Laundry",
      amount: 80.0,
      spentAt: new Date("2025-06-20T12:00:00"),
    },
  ];
  const july = [
    {
      type: "income",
      title: "Salary",
      amount: 15000.0,
      spentAt: new Date("2025-07-01T12:00:00"),
    },
    {
      type: "expense",
      title: "Groceries",
      amount: 1300.0,
      spentAt: new Date("2025-07-02T12:00:00"),
    },
    {
      type: "expense",
      title: "Transport",
      amount: 320.0,
      spentAt: new Date("2025-07-03T12:00:00"),
    },
    {
      type: "income",
      title: "Freelance",
      amount: 3000.0,
      spentAt: new Date("2025-07-04T12:00:00"),
    },
    {
      type: "expense",
      title: "Dining Out",
      amount: 500.0,
      spentAt: new Date("2025-07-05T12:00:00"),
    },
    {
      type: "expense",
      title: "Utilities",
      amount: 950.0,
      spentAt: new Date("2025-07-06T12:00:00"),
    },
    {
      type: "income",
      title: "Bonus",
      amount: 1200.0,
      spentAt: new Date("2025-07-07T12:00:00"),
    },
    {
      type: "expense",
      title: "Shopping",
      amount: 2100.0,
      spentAt: new Date("2025-07-08T12:00:00"),
    },
    {
      type: "expense",
      title: "Coffee",
      amount: 150.0,
      spentAt: new Date("2025-07-09T12:00:00"),
    },
    {
      type: "income",
      title: "Gift",
      amount: 600.0,
      spentAt: new Date("2025-07-10T12:00:00"),
    },
    {
      type: "expense",
      title: "Internet",
      amount: 700.0,
      spentAt: new Date("2025-07-11T12:00:00"),
    },
    {
      type: "expense",
      title: "Phone",
      amount: 420.0,
      spentAt: new Date("2025-07-12T12:00:00"),
    },
    {
      type: "income",
      title: "Interest",
      amount: 250.0,
      spentAt: new Date("2025-07-13T12:00:00"),
    },
    {
      type: "expense",
      title: "Insurance",
      amount: 850.0,
      spentAt: new Date("2025-07-14T12:00:00"),
    },
    {
      type: "expense",
      title: "Snacks",
      amount: 70.0,
      spentAt: new Date("2025-07-15T12:00:00"),
    },
    {
      type: "income",
      title: "Refund",
      amount: 350.0,
      spentAt: new Date("2025-07-16T12:00:00"),
    },
    {
      type: "expense",
      title: "Books",
      amount: 400.0,
      spentAt: new Date("2025-07-17T12:00:00"),
    },
    {
      type: "expense",
      title: "Petrol",
      amount: 550.0,
      spentAt: new Date("2025-07-18T12:00:00"),
    },
    {
      type: "income",
      title: "Lottery",
      amount: 200.0,
      spentAt: new Date("2025-07-19T12:00:00"),
    },
    {
      type: "expense",
      title: "Laundry",
      amount: 90.0,
      spentAt: new Date("2025-07-20T12:00:00"),
    },
  ];
  await prisma.transaction.createMany({ data: [...june, ...july] });
  console.log("demo data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
