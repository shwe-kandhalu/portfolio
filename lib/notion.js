const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_VERSION = "2022-06-28";

export async function getProjects() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Notion API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.results;
}

export function getText(richText = []) {
  return richText.map((t) => t.plain_text).join("");
}