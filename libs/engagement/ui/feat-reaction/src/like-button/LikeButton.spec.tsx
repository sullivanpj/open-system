import { render } from "@testing-library/react";

import { LikeButton } from "./LikeButton";

describe("LikeButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <LikeButton pageId="pageId" count={100} isLiked={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
