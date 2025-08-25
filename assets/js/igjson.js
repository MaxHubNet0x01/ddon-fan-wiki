function igjson(){
  function fixBrokenUnicode(str) {
    if (!str) return "";
    // Convert UTF-16 string back to raw bytes
    const bytes = new Uint8Array([...str].map(ch => ch.charCodeAt(0)));
    // Decode as UTF-8
    return new TextDecoder("utf-8").decode(bytes);
  }
  
  function decodeUtf8Escapes(str) {
    // Turn \u00xx into raw bytes
    const bytes = str.replace(/\\u00/g, "%");
    // Decode percent-encoding as UTF-8
    return decodeURIComponent(bytes);
  }

  $(".igjson-file").on("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        // Parse JSON
        const data = JSON.parse(e.target.result);

        // Sort newest first
        //data.sort((a, b) => b.timestamp_ms - a.timestamp_ms);

        // Render
        const ul = $("ul.messages");
        ul.empty();

        data.messages.forEach(item => {
          var name = fixBrokenUnicode(item.sender_name);
          var share = "";

          if (item.share){
            share = `
              <div>Shared: <a href="${item.share.link}">${fixBrokenUnicode(item.share.share_text) || item.share.link}</a></div>
            `;
          }

          var item = `
            <li class="flex ${item.sender_name == 'X' ? 'justify-end' : ''}">
              <div class="inline-block p-5 rounded  ${item.sender_name == 'X' ? 'bg-indigo-600 text-white' : 'bg-white text-black'}">
                <div>[${new Date(item.timestamp_ms).toLocaleString()}]</div>
                <div>From: [${name}]</div>
                <div>${fixBrokenUnicode(item.content)}</div>
                ${share}
              </div>
            </li>
          `;
          
          ul.prepend(item);
        });
      } catch (err) {
        alert("Invalid JSON file");
        console.error(err);
      }
    };
    reader.readAsText(file);
  });
}

$(igjson);