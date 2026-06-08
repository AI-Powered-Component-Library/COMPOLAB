// import { LoadingSpinner } from "compo-ui-library";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import PromptForm from "../features/ai/components/PromptForm.jsx";
import CodePreview from "../features/ai/components/CodePreview.jsx";
import Loader from "../features/ai/components/Loader.jsx";

import { generateComponent } from "../features/ai/services/ai.service";
const App = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      return toast.error("Please enter a prompt");
    }
    try {
      setLoading(true);

      const response = await generateComponent(prompt);

      setGeneratedCode(response.data.code);

      toast.success("Component generated successfully");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message || "Failed to generate component",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <LoadingSpinner /> */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4"> AI Component Generator </h1>
          <p className="text-zinc-400">
            {" "}
            Generate React + Tailwind components using AI{" "}
          </p>
        </div>
        <PromptForm
          prompt={prompt}
          setPrompt={setPrompt}
          handleGenerate={handleGenerate}
          loading={loading}
        />
        <div className="mt-8">
          {" "}
          {loading ? (
            <Loader />
          ) : (
            <CodePreview generatedCode={generatedCode} />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
