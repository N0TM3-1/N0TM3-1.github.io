function Home() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 px-4">
      <h1 className="text-5xl">
        Hi! I'm <span className="text-cyan-600">Dumitru Copăceanu!</span>
      </h1>
      <p className="text-3xl pb-10 pt-5">
        I'm jack of all trades, master of none.
      </p>
      <a href="/about" className="text-blue-500 hover:underline">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-4xl hover:bg-blue-600">
          Find out more about me
        </button>
      </a>
    </div>
  );
}
export default Home;
