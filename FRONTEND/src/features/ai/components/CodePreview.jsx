import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

const CodePreview = ({ generatedCode }) => {
  const handleCopy = async () => {
    if (!generatedCode) return;

    await navigator.clipboard.writeText(generatedCode);

    toast.success("Code copied to clipboard");
  };

  if (!generatedCode) {
    return (
      <div className="bg-zinc-900 border border-dashed border-zinc-700 rounded-2xl p-10 text-center text-zinc-500">
        Generated code will appear here{" "}
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
      {" "}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
        {" "}
        <h2 className="font-semibold">Generated Component </h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-all"
        >
          <FaCopy />
          Copy
        </button>
      </div>
      <pre className="overflow-x-auto p-6 text-sm text-green-400">
        <code>{generatedCode}</code>
      </pre>
    </div>
  );
};

export default CodePreview;
