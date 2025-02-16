import { API_ENDPOINTS, API_METHOD, ERROR } from "../constants";

export const apiCreatePost = async (data: {
  title: string;
  content: string;
}) => {
  await fetch(API_ENDPOINTS.CREATE_POST, {
    method: API_METHOD.POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const apiEditPost = async (
  slug: any,
  data: { title: string; content: string }
) => {
  await fetch(`${API_ENDPOINTS.EDIT_POST + slug}`, {
    method: API_METHOD.PUT,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const apiDeletePost = async (slug: string) => {
  await fetch(API_ENDPOINTS.DELETE_POST, {
    method: API_METHOD.DELETE,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
  });
};

export const apiGetAllPost = async () => {
  const res = await fetch(API_ENDPOINTS.GET_ALL_POST);
  if (!res.ok) throw new Error(ERROR.FAILED_TO_FETCH_POSTS);
  return res.json();
};

export const apiGetOnePost = async (slug: any) => {
  const res = await fetch(API_ENDPOINTS.GET_ONE_POST + slug);
  if (!res.ok) throw new Error(ERROR.FAILED_TO_FETCH_POST);
  return res.json();
};
