export async function openai(req, res) {
  const API_KEY = req.headers.authorization.split(" ")[1];
  const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();

    res.status(response.status);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } catch (err) {
    console.error(err);
    res.status(500);
    res.end();
  }
}
