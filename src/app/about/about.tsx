export default function About() {
  return (
    <>
      <div className="container sm:w-6/12 text-4xl font-semibold dark:text-neutral-100 text-neutral-900">
        Hi there - my name is Robin {"I'm a"}{" "}
        <span className="dark:text-neutral-400 text-neutral-700">
          Software Engineer
        </span>{" "}
        and
        <span className="dark:text-neutral-400 text-neutral-700">
          {" "}
          Investment
        </span>
        .
      </div>
    </>
  );
}
