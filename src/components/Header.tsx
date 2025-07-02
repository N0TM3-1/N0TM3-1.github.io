function Header() {
  return (
    <div className="bg-gray-800/50 flex justify-between items-center px-4 py-2">
      <div className="">
        <a href="/" className="text-white opacity-100">
          <strong>Dumitru Copăceanu</strong>
        </a>
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        <a href="/" className="px-5">
          Home
        </a>
        <a href="/about" className="px-5">
          About
        </a>
        <a href="/projects" className="px-5">
          Projects
        </a>
      </div>
    </div>
  );
}

export default Header;
