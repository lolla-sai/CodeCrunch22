var BASE_URL = new URL("https://api.twitter.com/1.1/search/tweets.json");

export default async function handler(req, res) {
    let { keyword, max_results = 8 } = req.query;
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("count", max_results);

    const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
    const defaultFetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
    };

    let response = await fetch(BASE_URL, defaultFetchOptions);
    let result = await response.json();

    res.status(200).json(result);
}
