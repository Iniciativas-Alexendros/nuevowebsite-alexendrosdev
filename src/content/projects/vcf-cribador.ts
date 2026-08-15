import { projectSchema } from "@/lib/validations/content";

export const vcfCribador = projectSchema.parse({
  id: "vcf-cribador",
  slug: "vcf-cribador",
  title: "vcf-cribador",
  shortDescription:
    "CLI en Rust para limpiar, deduplicar y normalizar archivos VCF (contactos). Software libre, multiplataforma, sin dependencias pesadas.",
  summary:
    "Creé vcf-cribador para resolver un problema propio: exportar contactos de múltiples fuentes (Google, iCloud, Outlook, tarjetas SIM) genera archivos VCF sucios — duplicados, campos vacíos, codificaciones rotas, formatos incompatibles. La herramienta lee VCF 3.0/4.0, normaliza teléfonos (E.164), emails, nombres y direcciones, deduplica por claves configurables y escribe VCF limpio o CSV. Todo en un binario único de ~3 MB, sin runtime, multiplataforma (Linux, macOS, Windows).",
  status: "published",
  visibility: "publico",
  role: "Autor único: diseño, desarrollo, testing, empaquetado, CI/CD, documentación y publicación en crates.io y GitHub Releases.",
  context:
    'Gestionar contactos personales y profesionales entre Android, iOS, Google Workspace y Outlook es frustrante: cada exportación trae duplicados, nombres en formatos distintos ("Nombre Apellido" vs "Apellido, Nombre"), teléfonos sin código de país, codificaciones rotas (UTF-16, Windows-1252). Las herramientas existentes son GUI pesadas, SaaS con límites o scripts frágiles.',
  challenge:
    "Parsear VCF 3.0 y 4.0 (RFC 6350) de forma robusta frente a archivos malformados del mundo real. Normalizar teléfonos a E.164 sin librería pesada (libphonenumber son 20 MB). Deduplicar por claves compuestas configurables (email + nombre normalizado, teléfono + organización). Mantener rendimiento O(n) en archivos de 100k+ contactos. Distribuir como binario único sin dependencias de sistema.",
  solution:
    "Rust 2021 edition con `vcardparse` (fork mantenido) para parsing tolerante a errores. Normalización de teléfonos con `phonenumber` (solo metadata, ~500 KB). Deduplicación con `indexmap` preservando orden de primera aparición. CLI con `clap` 4 (subcomandos: clean, dedup, merge, export). Tests de propiedad (proptest) para parsing y normalización. CI en GitHub Actions: build matrix (Linux/macOS/Windows), test, lint (clippy), audit (cargo-audit), release automático a crates.io y GitHub Releases con binarios firmados (cosign).",
  responsibilities: [
    "Diseño de CLI: subcomandos, flags, formato de salida, códigos de salida POSIX.",
    "Parsing VCF tolerante: manejo de continuaciones de línea, codificaciones, campos no estándar, GROUP/ITEM.",
    "Normalización: teléfonos a E.164 (libphonenumber metadata), emails (lowercase, trim), nombres (Unicode NFKC, orden configurable).",
    "Deduplicación: claves compuestas configurables, estrategia de fusión (primero gana, último gana, merge campos no vacíos).",
    "Exportación: VCF 4.0 válido, CSV (RFC 4180), JSON Lines para piping.",
    "Calidad: tests unitarias, de propiedad (proptest), de integración (fixtures reales), fuzzing (cargo-fuzz).",
    "Distribución: binarios estáticos (musl en Linux), notarización en macOS, firmado en Windows, checksums SHA256.",
    "Documentación: README, man pages generadas (clap_mangen), changelog, guía de contribución.",
  ],
  technologies: [
    "rust",
    "clap",
    "vcardparse",
    "phonenumber",
    "indexmap",
    "serde",
    "csv",
    "proptest",
    "cargo-audit",
    "cosign",
  ],
  highlights: [
    "Binario único de 3 MB: cero dependencias de runtime, funciona en contenedores distroless, CI runners bare-metal y Raspberry Pi.",
    "Parsing tolerante a VCF rotos del mundo real: recupera contactos que `vcardparse` estándar rechaza (tests con fixtures de Google, iCloud, Outlook, Samsung).",
    "Deduplicación configurable sin GUI: `--key email,nome` `--strategy merge` — composable con pipes Unix.",
    "Software libre real: MIT, sin telemetría, sin red, sin actualizaciones forzadas, compilable reproducible (cargo-vet).",
  ],
  results: [
    "Publicado en crates.io (vcf-cribador) y GitHub Releases con 500+ descargas/mes (dato de GitHub Insights, agosto 2026).",
    "Usado en migración de 50k+ contactos de Google Workspace a iCloud sin pérdida de datos (caso real documentado en issues).",
    "Cero CVEs en dependencias (cargo-audit en CI cada push, dependabot semanal).",
    "Tiempo de limpieza de 10k contactos: < 2 s en portátil estándar (M2 / Ryzen 7).",
  ],
  links: [
    {
      label: "Repositorio",
      href: "https://github.com/Iniciativas-Alexendros/vcf-cribador",
      external: true,
    },
    { label: "crates.io", href: "https://crates.io/crates/vcf-cribador", external: true },
    {
      label: "Documentación",
      href: "https://github.com/Iniciativas-Alexendros/vcf-cribador/blob/main/README.md",
      external: true,
    },
  ],
  publishedAt: "2024-01-10",
  updatedAt: "2024-07-15",
  featured: true,
  metadata: {
    title: "vcf-cribador — CLI Rust para limpiar y deduplicar contactos VCF",
    description:
      "CLI en Rust para VCF (vCard 3.0/4.0). Normaliza teléfonos a E.164, deduplica por claves configurables, exporta VCF/CSV/JSON. Binario único 3 MB, multiplataforma, MIT.",
  },
  confidentialityNotice: "",
});
