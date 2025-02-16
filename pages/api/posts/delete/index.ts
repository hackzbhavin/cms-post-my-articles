import { NextApiRequest, NextApiResponse } from "next";
import PostService from "../../../../services/PostService";
import { API_METHOD, ERROR } from "../../../../constants";
import { HttpStatusCode } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== API_METHOD.DELETE)
    return res
      .status(HttpStatusCode.MethodNotAllowed)
      .json({ error: ERROR.METHOD_NOT_ALLOWED });

  const { slug } = req.body;
  if (!slug)
    return res
      .status(HttpStatusCode.BadRequest)
      .json({ error: ERROR.SLUG_IS_REQUIRED });

  try {
    await PostService.softDeletePost(slug);
    return res.status(HttpStatusCode.Ok).json({ message: ERROR.POST_DELETED });
  } catch (error) {
    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ error: ERROR.FAILED_TO_DELETE_POST });
  }
}
