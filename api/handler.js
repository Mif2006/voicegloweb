// api/handler.js
export default function handler(req, res) {
    const currentUrl = req.query.url; // Assuming you send the URL as a query parameter
    // Process the URL or perform your logic here
    console.log(currentUrl)
    res.status(200).json({ message: 'URL received', url: currentUrl });

  }
  
