export default function Layout({
  children, className = ''
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <main className={`w-full h-full inline-block bg-light p-32 ${className}`}>
      {children}
    </main>
  )
}
