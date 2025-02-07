import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Card not found</h2>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to all cards
        </Link>
      </div>
    </div>
  );
}