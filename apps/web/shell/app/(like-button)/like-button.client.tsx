"use client";

import { PropsWithBase } from "@open-system/design-system-components";
import { LikeButton as LikeButtonInner } from "@open-system/engagement-ui-feat-reaction/like-button";

export type LikeButtonProps = PropsWithBase<{
  pageId: string;
  count: number;
  isLiked: boolean;
}>;

export default function LikeButtonClient({
  className,
  isLiked = false,
  ...props
}: LikeButtonProps) {
  return <LikeButtonInner {...props} isLiked={isLiked} />;
}
