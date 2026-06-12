import { Outlet } from 'react-router-dom'

import PromptForm from "../features/ai/components/PromptForm.jsx";
import CodePreview from "../features/ai/components/CodePreview.jsx";
import Loader from "../features/ai/components/Loader.jsx";

import { generateComponent } from "../features/ai/services/ai.service";
const App = () => {
  return (<Outlet />)
}

export default App