/**
 * Rate limit en memoria por instancia (ARCHITECTURE §7).
 * Ventana deslizante: máximo `max` envíos por clave (IP) y hora.
 * Sin PII en logs; no requiere almacén externo en el MVP.
 */

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
};

type Bucket = {
  timestamps: number[];
};

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60 * 60 * 1000;

export function checkRateLimit(key: string, max: number, now = Date.now()): RateLimitResult {
  const bucket = buckets.get(key) ?? { timestamps: [] };
  const cutoff = now - WINDOW_MS;
  bucket.timestamps = bucket.timestamps.filter((ts) => ts > cutoff);

  if (bucket.timestamps.length >= max) {
    const oldest = bucket.timestamps[0] ?? now;
    buckets.set(key, bucket);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(0, oldest + WINDOW_MS - now),
    };
  }

  bucket.timestamps.push(now);
  buckets.set(key, bucket);

  return {
    allowed: true,
    remaining: Math.max(0, max - bucket.timestamps.length),
    retryAfterMs: 0,
  };
}

/** Solo para tests: vacía el almacén en memoria. */
export function resetRateLimitStore(): void {
  buckets.clear();
}
