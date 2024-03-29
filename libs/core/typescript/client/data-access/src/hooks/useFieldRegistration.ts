import { FormFieldConfig } from "@open-system/core-shared-data-access";
import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useFormId } from "../hooks/useFormId";
import { formFieldConfigFamily } from "../state/form";

export const useFieldRegistration = (field: string) => {
  const { register } = useFormContext();

  const formId = useFormId();
  const setFormFieldConfig = useSetAtom(
    formFieldConfigFamily({ field, formId })
  );

  return useCallback(
    (config: Partial<FormFieldConfig>) => {
      const props = register(field, {
        shouldUnregister: false,
        ...config,
      } as any);
      setFormFieldConfig(config);

      return { ...props, name: field, config };
    },
    [field, register, setFormFieldConfig]
  );
};
