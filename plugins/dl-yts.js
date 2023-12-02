import axios from "axios";

let handler = async (m, { conn, text }) => {
  if (!text) throw "✳️ What do you want me to search for on YouTube?";

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(
      `https://weeb-api.vercel.app/ytsearch?query=${query}`
    );
    const results = response.data;

    if (results.length === 0) {
      throw "No results found for the given query.";
    };
    const firstResult = results[0];
    const number_of_res = 15;
    var results_indexes = [];
    var current_num = 0;
    var message = ``;
    for (i in results) {
      if (current_num > number_of_res) {
        break;
      }; else {
        results_indexes.push(current_num);
        current_num = current_num + 1;
      };
    };

    for (i in results_indexes) {
      var res = results[i];
      message = `
乂 ${res.title}
乂 *Link* : ${res.url}
乂 *Duration* : ${res.timestamp}
乂 *Published :* ${res.ago}
乂 *Views:* ${res.views}
    `;
    };

    /* const message = `
乂 ${firstResult.title}
乂 *Link* : ${firstResult.url}
乂 *Duration* : ${firstResult.timestamp}
乂 *Published :* ${firstResult.ago}
乂 *Views:* ${firstResult.views}
    `;*/

    conn.sendFile(m.chat, firstResult.thumbnail, "yts.jpeg", message, m);
  } catch (error) {
    console.error(error);
    throw "An error occurred while searching for YouTube videos.";
  }
};

handler.help = ["ytsearch"];
handler.tags = ["downloader"];
handler.command = ["ytsearch", "yts"];

export default handler;
