var BASE_URL = new URL("https://api.github.com/search/repositories");

export default async function handler(req, res) {
    let { keyword, max_results = 8 } = req.query;

    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("per_page", max_results);

    let response = await fetch(BASE_URL);
    let result = await response.json();

    res.status(200).json(result);
}
