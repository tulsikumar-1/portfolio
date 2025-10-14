async function sendMessage() {
    const msg = document.getElementById("userInput").value;
    if (!msg) return;

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Replace with your Vercel serverless API endpoint
    const response = await fetch("https://YOUR_VERCEL_API/book", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: msg})
    });

    const data = await response.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
