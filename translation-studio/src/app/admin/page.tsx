export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Админ-панель TinaCMS
        </h1>
        <p className="text-gray-600 mb-6">
          Для работы с админ-панелью запустите проект в режиме разработки:
        </p>
        <code className="bg-gray-800 text-white px-4 py-2 rounded">
          npm run dev:tina
        </code>
        <p className="text-sm text-gray-500 mt-4">
          Затем перейдите на http://localhost:3000/admin
        </p>
      </div>
    </div>
  );
}
