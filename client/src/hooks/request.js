const API_URL = "http://localhost:8000/v1/";

async function httpGetOneFlower(flowerName) {
  const response = await fetch(`${API_URL}/flowers/${flowerName}`);
  return await response.json();
}

async function httpAddFlower(flower) {
  try {
    const response = await fetch(`${API_URL}/flowers`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flower),
    });
    return response;
  } catch (err) {
    return { ok: false };
  }
}

export { httpGetOneFlower, httpAddFlower };
