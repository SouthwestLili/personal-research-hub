export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="site-container flex flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-end">
        <div>
          <p className="font-heading text-lg text-foreground">Lili Wang</p>
          <p>Computer Science · AI &amp; Machine Learning</p>
        </div>
        <p>
          <a href="/timeline" className="text-link">A research journey, recorded carefully.</a>
        </p>
      </div>
    </footer>
  );
}
