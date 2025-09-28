import Counter from "./components/Counter"
import ValidationForm from "./components/ValidationForm"
import ViewData from "./components/ViewData";

export default function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <Counter />
      <ValidationForm />
      <ViewData />
    </div>
  );
}
