"use client";

import { ContactDetail } from "@open-system/contact-ui-data-access";
import { formatBoolean } from "@open-system/core-typescript-utilities";
import {
  BaseComponentProps,
  FieldText,
  LinkVariants
} from "@open-system/design-system-components";
import {
  AddressText,
  Link,
  PhoneNumberText
} from "@open-system/shared-ui-components";
import { useFormValues } from "@open-system/shared-ui-feature-form/hooks";
import { BaseContactReviewForm } from "../base-contact-review-form";
import { ContactFormSegments } from "../constants";
import { ContactFormStepReview } from "../contact-form-step-review";

export function ContactBusinessReviewForm({
  className,
  children,
  ...props
}: BaseComponentProps) {
  const values = useFormValues<ContactDetail>();

  return (
    <BaseContactReviewForm
      title="Business Opportunity Submit"
      sideContent={
        <>
          <ContactFormStepReview
            name={ContactFormSegments.PERSONAL_INFO}
            label="Personal Information">
            <div className="grid grid-cols-2 gap-3">
              <FieldText name="First name">{values.firstName}</FieldText>
              <FieldText name="Last name">{values.lastName}</FieldText>
              <FieldText name="Email address">{values.email}</FieldText>
              <FieldText name="Receive emails with future updates from this developer?">
                {formatBoolean(values.isSubscribed)}
              </FieldText>
              <PhoneNumberText
                name="Phone number"
                className="text-primary"
                phoneNumber={values.phoneNumber}
              />
              <AddressText
                name="Address"
                className="text-primary"
                address={values}
              />
            </div>
          </ContactFormStepReview>

          <ContactFormStepReview
            name={ContactFormSegments.DETAILS}
            label="Business Opportunity Details">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <FieldText name="Organization name">
                  {values.companyName}
                </FieldText>
                <FieldText name="Job position/title">{values.title}</FieldText>
                <FieldText name="Related URL">
                  <Link href={values.url} inNewTab={true}>
                    {values.url}
                  </Link>
                </FieldText>
              </div>
              <FieldText name="Description">{values.details}</FieldText>
            </div>
          </ContactFormStepReview>
        </>
      }>
      <>
        <p>
          I'm reaching out to you
          {values.companyName ? ` on behalf of ${values.companyName}` : ""}
          {values.title
            ? ` regarding a ${values.title} job opening`
            : " about a business/employment opportunity"}
          .
        </p>
        {values.details && <p>{values.details}</p>}
        {values.url && (
          <p>
            More information can be found at the following URL:{" "}
            <Link
              className="underline hover:cursor-pointer hover:text-hover-link-2"
              variant={LinkVariants.PLAIN}
              href={values.url}
              inNewTab={true}>
              {values.url}
            </Link>
          </p>
        )}
      </>
    </BaseContactReviewForm>
  );
}
