export default function Tooltip({
  message,
  children,
  className,
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`group relative flex w-full ${className}`}>
      <p className="capitalize">{children}</p>
      <span className="absolute bottom-6 scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
