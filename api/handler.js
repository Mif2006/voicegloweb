document.addEventListener("DOMContentLoaded", function() {
    const info = {
        browserLanguage: navigator.language,
        browserLinkHref: window.location.href,
        browserMetadata: {
            from: "bot",
            type: "VGVF_Channel",
            data: {
                url: window.location.href
            }
        }
    };

    // Display the information on the page
    const infoDiv = document.createElement("div");
    infoDiv.style.fontFamily = "Arial, sans-serif";
    infoDiv.style.margin = "20px";
    infoDiv.innerHTML = `
        <p><strong>Browser Language:</strong> ${info.browserLanguage}</p>
        <p><strong>Browser link href:</strong> <a href="${info.browserLinkHref}">${info.browserLinkHref}</a></p>
        <p><strong>Browser metadata JSON string:</strong> ${JSON.stringify(info.browserMetadata)}</p>
    `;
    
    document.body.appendChild(infoDiv);
});
