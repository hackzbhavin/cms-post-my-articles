import { NextApiRequest, NextApiResponse } from "next";
import PostService from "../../../../services/PostService";
import { HttpStatusCode } from "axios";
import { API_METHOD, ERROR } from "../../../../constants";
import { generateSlug } from "../../../../helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== API_METHOD.POST)
    return res
      .status(HttpStatusCode.MethodNotAllowed)
      .json({ error: ERROR.METHOD_NOT_ALLOWED });

  const { title, content } = req.body;

  console.log(req.body);
  try {
    const slug = generateSlug(title);

    const post = await PostService.createPost(slug, title, content);
    return res.status(HttpStatusCode.Created).json(post);
  } catch (error) {
    console.log("Error ", error);
    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ error: ERROR.FAILED_TO_CREATE_POST });
  }
}
