export default function Layout({
  children, className = ''
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <main className={`w-full h-full inline-block bg-themeLight p-32 ${className}`}>
      {children}
    </main>
  )
}
