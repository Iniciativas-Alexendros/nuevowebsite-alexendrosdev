import type { LegalDocument } from "@/lib/validations/content";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

type LegalDocumentViewProps = {
  document: LegalDocument;
};

export function LegalDocumentView({ document }: LegalDocumentViewProps) {
  return (
    <>
      <PageHeader title={document.title} />
      <Container className="pb-16 lg:pb-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          <p className="text-sm text-foreground-muted">
            Última actualización: <time dateTime={document.updatedAt}>{document.updatedAt}</time>
          </p>
          {document.sections.map((section, index) => (
            <section key={section.heading ?? `section-${index}`} className="flex flex-col gap-4">
              {section.heading ? (
                <h2 className="text-xl font-semibold text-foreground">{section.heading}</h2>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={`${section.heading ?? index}-${paragraphIndex}`}
                  className="text-base leading-relaxed text-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
