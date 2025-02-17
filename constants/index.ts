export const LABEL = {
  BRAND_NAME: "Post My Article",
  CREATE_POST: "Create Post",
  EDIT_POST: "Edit Post",
  TITLE: "Title",
  CONTENT: "Content",
  NO_POSTS_AVAILABLE: "No posts available.",
  HOME_HEADING: "Create ... Read ... Update ... Delete",
  HOME_HEADING_DESCRIPTION: "A powerful, extensible CMS built with Next.js",
  LOADING_TEXT: "Searching for something great...",
  ARTICLES_POSTED: "Articles Posted",
  ENTER_VIDEO_URL: "Enter video URL:",
};

export const BUTTON = {
  NEW_POST: "+ New Post",
  SAVE_CHANGES: "Save Changes",
  CREATE_POST: "Create Post",
  READ_MORE: "Read more →",
  REMOVE: "Remove",
  HOME: "Home",
  EDIT_POST: "Edit Post",
  CANCEL: "Cancel",
  YES_DELETE: "Yes, Delete",
  PREVIOUS_PAGE: "Previous Page",
  GO_BACK: "Go back",
  PREVIEW_MODE: "Preview mode",
  MY_BUTTON: "Button",
};

export const NAVIGATE = {
  TO_CREATE_POST: "/posts/create",
  TO_HOME: "/",
  TO_GET_ONE_POST: "/posts/getOne/",
  TO_EDIT_POST: "/posts/edit/",
};

export const API_ENDPOINTS = {
  CREATE_POST: "/api/posts/create",
  EDIT_POST: "/api/posts/edit/",
  GET_ONE_POST: "/api/posts/getOne/",
  GET_ALL_POST: "/api/posts/getAll",
  DELETE_POST: "/api/posts/delete/",
};

export const API_METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const MODAL = {
  DELETE_POST: "Delete post",
  DELETE_POST_CONFIRM:
    "Are you sure you want to delete this post? This action cannot be undone.",
};

export const ERROR = {
  METHOD_NOT_ALLOWED: "Method not allowed",
  FAILED_TO_CREATE_POST: "Failed to create post",
  FAILED_TO_DELETE_POST: "Failed to delete post",
  FAILED_TO_UPDATE_POST: "Failed to update post",
  POST_DELETED: "Post deleted",
  SLUG_IS_REQUIRED: "Slug is required",
  INVALID_SLUG: "Invalid slug",
  TITLE_AND_CONTENT_REQUIRED: "Title and content are required",
  POST_NOT_FOUND_FAILED_TO_UPDATE: "Post not found or failed to update",
  FAILED_TO_FETCH_POSTS: "Failed to fetch posts",
  FAILED_TO_FETCH_POST: "Failed to fetch post",
  POST_NOT_FOUND: "Post not found",
};

export const TOAST_MESSAGE = {
  POST_CREATED : "Post created successfully!",
  POST_EDITED : "Post edited successfully!",
  ERROR_OCCURRED : "Sorry error occurred, try again later",
  POST_DELETED : "Post delete successfully"
}
