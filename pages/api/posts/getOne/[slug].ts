import { NextApiRequest, NextApiResponse } from "next";
import PostService from "../../../../services/PostService";
import { API_METHOD, ERROR } from "../../../../constants";
import { HttpStatusCode } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    return res
      .status(HttpStatusCode.BadRequest)
      .json({ error: ERROR.INVALID_SLUG });
  }

  if (req.method === API_METHOD.GET) {
    try {
      const post = await PostService.getPostBySlug(slug);
      if (!post)
        return res
          .status(HttpStatusCode.NotFound)
          .json({ error: ERROR.POST_NOT_FOUND });
      return res.status(HttpStatusCode.Ok).json(post);
    } catch (error) {
      return res
        .status(HttpStatusCode.InternalServerError)
        .json({ error: ERROR.FAILED_TO_FETCH_POST });
    }
  }

  return res
    .status(HttpStatusCode.MethodNotAllowed)
    .json({ error: ERROR.METHOD_NOT_ALLOWED });
}
