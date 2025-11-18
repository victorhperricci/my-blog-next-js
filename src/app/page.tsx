import clsx from "clsx";

export default function Home() {
  return (
    <div>
      <h1
        className={clsx(
          "text-6xl",
          "font-bold",
          "font-mon",
          "text-blue-500",
          "hover:text-amber-50",
          "transition",
          "duration-300"
        )}
      >
        Olá zé xereca
      </h1>
    </div>
  );
}
