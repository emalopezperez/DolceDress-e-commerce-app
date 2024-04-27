export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 w-full mt-24">
      {children}
    </section>
  );
}
