export default function Footer() {
  return (
    <div className="bg-[#272729] mt-4">
      <div className="max-w-[48rem] m-auto text-white p-4">
        <div className="w-full flex flex-col justify-between sm:flex-row gap-2">
          <h1 className="text-center">@ copyright portfolio website 2025.</h1>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <a
              href="https://github.com/kunaldeshwal1"
              target="_"
              className="text-blue-400 hover:underline"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/Kunal_deshwal/"
              target="_"
              className="text-blue-400 hover:underline"
            >
              Leetcode
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-deshwal-097545211/"
              target="_"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
