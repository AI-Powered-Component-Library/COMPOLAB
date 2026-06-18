
const componentService = {

    generateService: async ({ prompt, token, getChunks }) => {

        const response = await fetch("http://localhost:4000/api/v1/component/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: "include",
            body: JSON.stringify({ prompt })
        })

        const decoder = new TextDecoder()

        for await (const chunk of response.body) {

            const text = decoder.decode(chunk)

            text.split("\n\n").forEach(e => {
                if (e.startsWith("chunk:")) {
                    let data = JSON.parse(e.replace("chunk: ", "")).response
                    getChunks(data)
                }
            })
        }
    }
}



export default componentService