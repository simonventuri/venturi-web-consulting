import fs from "node:fs";
import path from "node:path";
import TapestryClient from "./TapestryClient";

function getData() {
  const p = path.join(process.cwd(), "content", "projects", "tapestry.json");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export default function Tapestry() {
  const data = getData();
  return <TapestryClient data={data} />;
}
