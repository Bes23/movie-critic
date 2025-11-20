import { getData } from "./getData.js";
import path from "node:path";
import fs from "node:fs/promises";

export async function addNewReview(newReview) {
  try {
    const reviews = await getData();
    reviews.push(newReview);
    const pathJSON = path.join("data", "data.json");
    await fs.writeFile(pathJSON, JSON.stringify(reviews, null, 2), "utf8");
  } catch (error) {
    throw new Error(error);
  }
}
