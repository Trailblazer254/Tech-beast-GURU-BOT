import fetch from "node-fetch";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `Hi *${name}*, do you want to talk? Respond with *${
      usedPrefix + command
    }* (your message)\n\n📌 Example: *${usedPrefix + command}* Hi bot`;
  }

  m.react("🗣️");

  const senderNumber = m.sender.replace(/[^0-9]/g, "");
  const session = `GURUBOT${senderNumber}`;
  const uid = encodeURIComponent(session);
  const msg = encodeURIComponent(text);

  const res = await fetch(
    `https://qin-guru-rin-indratensei.cloud.okteto.net/dm?message=${msg}&conversationID=${uid}`
  );
  const json = await res.json();

  let reply = json.response;
  if (reply) {
    reply = reply.replace(/Clyde/gi, "KOGI Bot");
    reply = reply.replace(/ladiboi/gi, name);
    reply = reply.replace(/discord|OpenAI/gi, "KOGI-Botz");
    reply = reply.replace(/surbhisayshi/gi, "KOGI");
    reply = reply.replace(/\bthe server\b/gi, "me");
    reply = reply.replace(/\bserver\b/gi, "");

    m.reply(reply);
  }
};

handler.help = ["bot"];
handler.tags = ["fun"];
handler.command = ["bot", "alexa"];

export default handler;
