export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen ">{children}</main>;
}
