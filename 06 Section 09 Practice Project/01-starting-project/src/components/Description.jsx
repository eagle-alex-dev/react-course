export default function Description() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h2>Project Name</h2>
          <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-800 hover:bg-stone-700 hover:text-stone-100">
            Delete
          </button>
        </div>
        <h3>Date</h3>
        <p>Description of the project</p>
        <p>Detailed summary of purpose of the project</p>
      </div>
    </>
  );
}
