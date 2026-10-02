import { writeFileSync, mkdirSync } from "node:fs";

const URL =
  "https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/export?format=html";

const res = await fetch(URL, { redirect: "follow" });
if (!res.ok) throw new Error(`export fetch failed: ${res.status}`);
const html = await res.text();

const re = /src="data:image\/(png|jpe?g);base64,([^"]+)"/g;
mkdirSync("public", { recursive: true });

const written = [];
let match;
let index = 0;
while ((match = re.exec(html)) !== null) {
  const ext = match[1] === "png" ? "png" : "jpg";
  const name = index === 0 ? `headshot.${ext}` : `office-${index}.${ext}`;
  writeFileSync(`public/${name}`, Buffer.from(match[2], "base64"));
  written.push(name);
  index += 1;
}

console.log(JSON.stringify(written));
