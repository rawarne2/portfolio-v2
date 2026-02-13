import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-semibold'>404 — Page not found</h1>
      <Link
        href='/'
        className='text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2'
      >
        Return home
      </Link>
    </div>
  );
}
