// Home page sections are built after the design primitives are approved.
// Preview the primitives at /styleguide.
export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-page px-6 py-24 md:px-12">
      <p className="type-label mb-4">Coming together</p>
      <h1 className="type-title">Your story starts here.</h1>
      <p className="type-body mt-6">
        The design system is ready for review at <a className="text-bindery underline" href="/styleguide">/styleguide</a>.
      </p>
    </main>
  );
}
