export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          <a href="/transactions">Go to Transactions</a>
        </button>
      </div>
    </>
  );
}
