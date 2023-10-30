export default function Layout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`inline-block h-full w-full bg-themeLight p-8 dark:bg-themeDark md:p-24 lg:p-32 ${className}`}
    >
      {children}
    </main>
  );
}
