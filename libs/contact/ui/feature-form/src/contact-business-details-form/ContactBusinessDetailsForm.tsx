"use client";

import {
  BaseComponentProps,
  InputAutoCompleteTypes,
  TextareaSizes,
} from "@open-system/design-system-components";
import { Input, Textarea, UrlInput } from "@open-system/shared-ui-feature-form";
import { BaseContactForm } from "../base-contact-form";

export function ContactBusinessDetailsForm({
  className,
  children,
  ...props
}: BaseComponentProps) {
  return (
    <BaseContactForm
      title="Business Opportunity Details"
      description="Please describe the business or employment opportunity you would
    like to discuss.">
      <Input
        name="companyName"
        label="Organization name"
        autoComplete={InputAutoCompleteTypes.ORG}
        required={false}
      />
      <Input
        name="title"
        label="Job position/title"
        autoComplete={InputAutoCompleteTypes.ORG_TITLE}
        required={false}
      />
      <UrlInput name="url" label="Related URL" required={false} />
      <Textarea
        name="details"
        label="Description"
        size={TextareaSizes.LARGE}
        required={true}
      />
    </BaseContactForm>
  );
}
