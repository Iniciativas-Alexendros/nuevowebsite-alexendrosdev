# Subset tipográfico (OBJ-005 / ADR-0025)

Los woff2 en este árbol están recortados a Latin/Latin-1 para español.

Regenerar (requiere fonttools + brotli):

```bash
UNICODES="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
pyftsubset InterVariable.full.woff2 --flavor=woff2 --output-file=InterVariable.woff2 --unicodes="$UNICODES" --layout-features=kern,liga,calt --no-hinting
pyftsubset JetBrainsMono-Variable.full.woff2 --flavor=woff2 --output-file=JetBrainsMono-Variable.woff2 --unicodes="$UNICODES" --layout-features=kern,liga,calt --no-hinting
```

Licencias: ver LICENSE.txt / OFL.txt en cada carpeta.

