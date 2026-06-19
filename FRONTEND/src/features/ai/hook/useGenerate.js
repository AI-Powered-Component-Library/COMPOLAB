import { useDispatch } from 'react-redux'
import generateService from '../service/generate.service'
import { setChunking, setCode, setCodeChunks, setGeneratedRes, setWebBuilder } from '../../code/component.slice'


const extractCode = (jsonStr) => {
  // 1. Locate the "code" field
  const codeMatch = jsonStr.match(/"code"\s*:\s*"/);
  if (!codeMatch) return "";

  const startIndex = codeMatch.index + codeMatch[0].length;

  let codeValue = "";
  let isEscaped = false;

  for (let i = startIndex; i < jsonStr.length; i++) {
    const char = jsonStr[i];

    if (isEscaped) {
      if (char === 'n') {
        codeValue += '\n';
      } else if (char === 't') {
        codeValue += '\t';
      } else if (char === 'r') {
        codeValue += '\r';
      } else {
        codeValue += char;
      }
      isEscaped = false;
    } else if (char === '\\') {
      isEscaped = true;
    } else if (char === '"') {
      break;
    } else {
      codeValue += char;
    }
  }

  return codeValue;
}

const useGenerate = () => {

  const dispatch = useDispatch()

  const handleGenerate = async ({ prompt, token }) => {
    let accumulatedStream = "";
    dispatch(setCode('')) // Clear previous code
    dispatch(setChunking())
    await generateService.generateService({
      prompt, token, getChunks: (chunk) => {
        accumulatedStream += chunk
        const parsedCode = extractCode(accumulatedStream)
        if (parsedCode) {
          dispatch(setCode(parsedCode))
        }
      }
    })

    let finalResponseData = JSON.parse(accumulatedStream)
    dispatch(setChunking())
    dispatch(setGeneratedRes(finalResponseData))

  }

  // const handleGenerate = () => {


  //   // let props = code.split("props")
  //   // let count = 0;
  //   // let id = setInterval(() => {
  //   //   if (split[count] === undefined) {
  //   //     clearInterval(id)
  //   //     dispatch(setChunking())
  //   //     return
  //   //   }
  //   //   console.log(props)
  //   //   dispatch(setCodeChunks(split[count++] + "\n"))
  //   // }, 100);

  // }

  const handleWebBuilder = () => {
    dispatch(setWebBuilder())
  }


  return { handleGenerate, handleWebBuilder }
}

export default useGenerate