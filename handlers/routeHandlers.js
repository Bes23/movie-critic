import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewReview } from "../utils/addNewReview.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    if (!parsedBody.author || !parsedBody.title || !parsedBody.text) {
      throw new Error("Missing required fields: author, title, text");
    }
    
    const reviewWithDate = { ...parsedBody, timeStamp: new Date().toLocaleString() }
    await addNewReview(reviewWithDate);
    sendResponse(res, 201, "application/json", JSON.stringify(parsedBody));
  } catch (error) {
    sendResponse(
      res,
      400,
      "application/json",
      JSON.stringify({ error: error })
    );
  }
}
