"use client";
import { useEffect, useState } from "react";
import { Transaction } from "@/app/types/transaction";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [month, setMonth] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    type: "income",
    title: "",
    amount: "",
    spentAt: "",
  });
  const [editId, setEditId] = useState<number | null>(null);

  const fetchTransactions = async (monthParam?: string) => {
    setLoading(true);
    let url = "/api/transactions";
    if (monthParam) url += `?month=${monthParam}`;
    const res = await fetch(url);
    setTransactions(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions(month);
  }, [month]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/transactions/${editId}` : "/api/transactions";
    const body = {
      ...form,
      amount: parseFloat(form.amount),
      spentAt: new Date(form.spentAt),
    };
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setForm({ type: "income", title: "", amount: "", spentAt: "" });
    setEditId(null);
    fetchTransactions(month);
  };

  const handleEdit = (t: Transaction) => {
    setEditId(t.id);
    setForm({
      type: t.type,
      title: t.title,
      amount: t.amount.toString(),
      spentAt: t.spentAt.slice(0, 10),
    });
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/transactions/${id}`, { method: "DELETE" });
    fetchTransactions(month);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Income/Expense Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-2"
      >
        <select
          className="border rounded p-2"
          value={form.type}
          onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          className="border rounded p-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          required
        />
        <input
          className="border rounded p-2"
          type="number"
          step="0.01"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
          required
        />
        <input
          className="border rounded p-2"
          type="date"
          value={form.spentAt}
          onChange={(e) => setForm((f) => ({ ...f, spentAt: e.target.value }))}
          required
        />
        <button
          className="bg-blue-500 text-white rounded p-2 col-span-1 md:col-span-4"
          type="submit"
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>
      <div className="mb-4">
        <label className="mr-2">Filter by month:</label>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded p-2"
        />
        <button className="ml-2 text-sm underline" onClick={() => setMonth("")}>
          Clear
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Type</th>
              <th className="p-2">Title</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td
                  className={
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }
                >
                  {t.type}
                </td>
                <td>{t.title}</td>
                <td>
                  {typeof t.amount === "number"
                    ? t.amount.toFixed(2)
                    : Number(t.amount).toFixed(2)}
                </td>
                <td>{t.spentAt.slice(0, 10)}</td>
                <td>
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => handleEdit(t)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
          <div className="flex-1 bg-green-50 rounded p-2">
            <span className="font-semibold">Total Income: </span>
            {transactions
              .filter((t) => t.type === "income")
              .reduce((sum, t) => sum + Number(t.amount), 0)
              .toFixed(2)}
          </div>
          <div className="flex-1 bg-red-50 rounded p-2">
            <span className="font-semibold">Total Expense: </span>
            {transactions
              .filter((t) => t.type === "expense")
              .reduce((sum, t) => sum + Number(t.amount), 0)
              .toFixed(2)}
          </div>
          <div className="flex-1 bg-blue-50 rounded p-2">
            <span className="font-semibold">Balance: </span>
            {(
              transactions
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + Number(t.amount), 0) -
              transactions
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + Number(t.amount), 0)
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
