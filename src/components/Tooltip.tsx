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
      <span className="absolute bottom-6 scale-0 rounded bg-themeDark p-2 text-xs text-themeLight transition-all group-hover:scale-100 dark:bg-themeLight dark:text-themeDark">
        {message}
      </span>
    </div>
  );
}
