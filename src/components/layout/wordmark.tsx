import { Link } from "@/components/ui/link";

export function Wordmark() {
  return (
    <Link href="/" className="text-base font-semibold text-foreground no-underline">
      Alexendros
      <span className="text-primary">.dev</span>
    </Link>
  );
}
