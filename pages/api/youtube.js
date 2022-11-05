var BASE_URL = new URL("https://youtube.googleapis.com/youtube/v3/search");
var API_KEY = process.env.YOUTUBE_API_KEY;
var MAX_RESULTS = 8;

export default async function handler(req, res) {
    let { keyword } = req.query;
    BASE_URL.searchParams.set("part", "snippet");
    BASE_URL.searchParams.set("q", keyword);
    BASE_URL.searchParams.set("maxResults", MAX_RESULTS);
    BASE_URL.searchParams.set("key", API_KEY);

    // console.log(
    //     "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------" +
    //         BASE_URL
    // );

    let response = await fetch(BASE_URL);
    let result = await response.json();

    res.status(200).json(result);
}
