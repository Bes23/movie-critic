export async function parseJSONBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString();

  try {
    return JSON.parse(body);
  } catch (error) {
    throw new Error(`Invalid JSON format: ${error}`);
  }
}