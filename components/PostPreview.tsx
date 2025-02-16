import { Button } from "./Button";
import { BUTTON } from "../constants";
import { formatDate } from "../helpers";
import { IPostPreviewProps } from "../interfaces";
import { ButtonVariants } from "../enums";

export default function PostPreview({
  postDetails,
  showActions = false,
  isPreviewMode = false,
  onEdit,
  onBack,
}: IPostPreviewProps) {
  return (
    <div className="post-container">
      <div className="post-view">
        {showActions && (
          <div className="post-view-header">
            {onBack && (
              <Button
                onPress={onBack}
                textLabel={BUTTON.GO_BACK}
                variant={ButtonVariants.TERTIARY}
              />
            )}

            {isPreviewMode && (
              <p className="preview-mode-text">{BUTTON.PREVIEW_MODE}</p>
            )}
            {onEdit && (
              <Button
                onPress={onEdit}
                textLabel={BUTTON.EDIT_POST}
                variant={ButtonVariants.PRIMARY}
              />
            )}
          </div>
        )}

        <div className="post-body">
          <h1 className="post-title">{postDetails?.title}</h1>
          <p className="post-date">{formatDate(postDetails?.createdAt)}</p>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: postDetails?.content }}
          />
        </div>
      </div>
    </div>
  );
}
