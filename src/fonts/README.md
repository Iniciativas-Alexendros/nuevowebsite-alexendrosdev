# Subset tipográfico (OBJ-005 / ADR-0025)

Los woff2 en este árbol son los subsets **latin** de Geist y Geist Mono
(variables) que genera next/font/google en build; se self-hostean vía
`next/font/local` (DES-03) para que el grafo de Lighthouse solo incluya
los 2 archivos latin en vez de los 11 subsets multi-escritura
(≈ −150 ms FCP y sin varianza de LCP en lab).

Regenerar: `pnpm build` con `next/font/google` y copiar los woff2 cuyo
@font-face lleva el unicode-range latin (bloque final `U+??,U+131,…`),
o subset directo con fonttools + brotli:

```bash
UNICODES="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
pyftsubset GeistVariable.full.woff2 --flavor=woff2 --output-file=GeistVariable-latin.woff2 --unicodes="$UNICODES" --layout-features=kern,liga,calt --no-hinting
pyftsubset GeistMonoVariable.full.woff2 --flavor=woff2 --output-file=GeistMonoVariable-latin.woff2 --unicodes="$UNICODES" --layout-features=kern,liga,calt --no-hinting
```

Licencia: SIL OFL 1.1, ver `geist/OFL.txt`.
