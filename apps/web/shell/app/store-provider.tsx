"use client";

import { INVERSION_CONTAINER } from "@open-system/core-typescript-utilities";
import { BaseComponentProps } from "@open-system/design-system-components";
import { ApiServiceBinder as EngagementApiServiceBinder } from "@open-system/engagement-ui-data-access";
import { Provider } from "inversify-react";

EngagementApiServiceBinder.with(INVERSION_CONTAINER);

export default function RootProvider({ children }: BaseComponentProps) {
  return <Provider container={INVERSION_CONTAINER}>{children}</Provider>;
}
