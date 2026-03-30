/**
 * Schema Component - Renders JSON-LD structured data in the page head
 * Used in layout and pages to add structured data for SEO
 */

interface SchemaComponentProps {
  schema: unknown;
}

export function SchemaComponent({ schema }: SchemaComponentProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

/**
 * Multiple schemas component - Render multiple schemas at once
 */
export function MultipleSchemaComponent({
  schemas,
}: {
  schemas: unknown[];
}) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

