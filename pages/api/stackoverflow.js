var BASE_URL = new URL("https://api.stackexchange.com/2.3/search");

export default async function handler(req, res) {
    let { keyword, max_results = 8 } = req.query;
    BASE_URL.searchParams.set("order", "desc");
    BASE_URL.searchParams.set("sort", "activity");
    BASE_URL.searchParams.set("intitle", keyword);
    BASE_URL.searchParams.set("site", "stackoverflow");

    let response = await fetch(BASE_URL);
    let result = await response.json();

    res.status(200).json(result);
}
