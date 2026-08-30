export default function PaperNotFound() {
  return (
    <main className="page-shell text-center">
      <p className="eyebrow">Paper note not found</p>
      <h1 className="page-title mt-5">This reading note is not available.</h1>
      <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
        It may still be private, under review, or no longer part of the public library.
      </p>
      <Link href="/papers" className="text-link mt-8 inline-block">Return to the Paper Library</Link>
    </main>
  );
}
import Link from 'next/link';
