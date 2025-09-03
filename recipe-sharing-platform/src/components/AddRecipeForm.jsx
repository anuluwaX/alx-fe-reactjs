export default function AddRecipeForm() {
  return (
    <div className="max-w-lg mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-3xl">Add a New Recipe</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Ingredients (separated by commas)"
          className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Preparation Steps"
          className="w-full border border-gray-300 rounded-md p-2 md:p-3 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 md:py-3 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
