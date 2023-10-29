import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="absolute left-0 top-0 min-h-screen w-full bg-themeLight text-themeDark dark:bg-themeDark dark:text-themeLight">
      <div className="absolute left-[50%] top-[20%] w-full translate-x-[-50%] translate-y-[50%] text-center">
        <h1 className="my-4 text-9xl">Whoops</h1>
        <h3 className="my-4 text-4xl">Page Not Found</h3>
        <Link
          className="rounded-xl bg-primaryDark px-4 py-2 dark:bg-primary"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
