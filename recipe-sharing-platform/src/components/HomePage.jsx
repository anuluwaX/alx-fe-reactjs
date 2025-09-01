import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link
          to="/add-recipe"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add New Recipe
        </Link>
      </div>
      {/* existing recipe list */}
    </div>
  );
}
