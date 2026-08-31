import Link from 'next/link';

export default function ActivityNotFound() {
  return (
    <main className="page-shell text-center">
      <p className="eyebrow">Research activity not found</p>
      <h1 className="page-title mt-5">This activity is not publicly available.</h1>
      <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
        It may be private, unavailable, or no longer part of the public research timeline.
      </p>
      <Link href="/timeline" className="text-link mt-8 inline-block">
        Return to the Research Timeline
      </Link>
    </main>
  );
}
