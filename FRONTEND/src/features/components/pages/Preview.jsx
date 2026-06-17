import React, { useCallback, useEffect, useRef, useState } from "react"
import { LivePreview, LiveProvider, LiveError } from "react-live"

const processCode = (rawCode) => {
  if (!rawCode) return { code: "", noInline: false }

  // 1. Strip import statements
  let cleaned = rawCode
    .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, "")
    .replace(/import\s+['"].*?['"];?/g, "")
    .trim()

  let noInline = false

  // 2. Handle export default function/class Name
  const inlineMatch = cleaned.match(/export\s+default\s+(function|class)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/)
  if (inlineMatch) {
    const type = inlineMatch[1]
    const componentName = inlineMatch[2]
    cleaned = cleaned.replace(/export\s+default\s+(function|class)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/, `${type} ${componentName}`)
    cleaned += `\nrender(<${componentName} />);`
    noInline = true
  } else {
    // 3. Handle export default Name (where Name is already declared)
    const namedMatch = cleaned.match(/export\s+default\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/)
    if (namedMatch) {
      const componentName = namedMatch[1]
      cleaned = cleaned.replace(/export\s+default\s+[a-zA-Z_$][a-zA-Z0-9_$]*;?/g, "")
      cleaned += `\nrender(<${componentName} />);`
      noInline = true
    } else if (cleaned.includes("export default")) {
      // 4. Handle anonymous export default
      cleaned = cleaned.replace(/export\s+default\s+/, "const __PreviewComponent = ")
      cleaned += `\nrender(<__PreviewComponent />);`
      noInline = true
    }
  }

  // 5. Strip any remaining named exports (e.g. export const Foo = ...)
  cleaned = cleaned.replace(/\bexport\s+/g, "")

  // 6. If there's an explicit render call in the code, use noInline = true
  if (cleaned.includes("render(")) {
    noInline = true
  }

  return { code: cleaned, noInline }
}


const Preview = ({ code }) => {
  const { code: processed, noInline } = processCode(code)

  return (<LiveProvider
    code={processed}
    scope={{ React, useState, useEffect, useRef, useCallback }}
    noInline={noInline}>
    <div className="bg-black p-4 rounded-lg border border-cyan-900 h-full">
      <LivePreview />
      <LiveError className="text-red-500 mt-2 text-sm bg-red-50/50 p-2 rounded font-mono" />
    </div>
  </LiveProvider>
  )
}

export default Preview