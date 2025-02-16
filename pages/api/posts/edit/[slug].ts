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

  if (req.method === API_METHOD.PUT) {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        return res
          .status(HttpStatusCode.BadRequest)
          .json({ error: ERROR.TITLE_AND_CONTENT_REQUIRED });
      }

      const updatedPost = await PostService.updatePostBySlug(
        slug,
        title,
        content
      );

      if (!updatedPost) {
        return res
          .status(HttpStatusCode.NotFound)
          .json({ error: ERROR.POST_NOT_FOUND_FAILED_TO_UPDATE });
      }

      return res.status(HttpStatusCode.Ok).json(updatedPost);
    } catch (error) {
      return res
        .status(HttpStatusCode.InternalServerError)
        .json({ error: ERROR.FAILED_TO_UPDATE_POST });
    }
  }

  return res
    .status(HttpStatusCode.MethodNotAllowed)
    .json({ error: ERROR.METHOD_NOT_ALLOWED });
}
