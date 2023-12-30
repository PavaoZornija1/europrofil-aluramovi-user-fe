import Link from "next/link";

export default function Footer({ locale }) {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="fixed bottom-0 flex w-full justify-around bg-gradient-to-tr from-sky-500 to-sky-600 px-4 py-2 text-center text-xs font-bold text-white md:text-lg">
      <span className="w-full">
        <Link
          href={"https://europrofil.rs/"}
          target="_blank"
          className="underline"
        >
          Europrofil
        </Link>
        &copy; {year}. Europrofil
      </span>
      <span className="w-full">
        Dizajn i razvoj:
        <Link
          href={"https://manage-it.tech/"}
          target="_blank"
          className="p-2 underline"
        >
          Manage IT
        </Link>
      </span>
    </footer>
  );
}
