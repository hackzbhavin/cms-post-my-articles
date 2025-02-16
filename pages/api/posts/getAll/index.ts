import { NextApiRequest, NextApiResponse } from "next";
import PostService from "../../../../services/PostService";
import { API_METHOD, ERROR } from "../../../../constants";
import { HttpStatusCode } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== API_METHOD.GET)
    return res
      .status(HttpStatusCode.MethodNotAllowed)
      .json({ error: ERROR.METHOD_NOT_ALLOWED });

  try {
    const posts = await PostService.getAllPosts();
    return res.status(HttpStatusCode.Ok).json(posts);
  } catch (error) {
    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ error: ERROR.FAILED_TO_FETCH_POSTS });
  }
}
