// import { Button } from "compo-ui-library";

const PromptForm = ({ prompt, setPrompt, handleGenerate, loading }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <textarea
        rows={5}
        placeholder="Create a responsive pricing card..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-blue-500 resize-none"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-6 py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Component"}
      </button>
    </div>
  );
};

export default PromptForm;
