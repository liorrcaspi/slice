import { CheckboxType, GrantType } from "@/global/types";
import { IDocument } from "@cyntler/react-doc-viewer";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCheckedCheckboxes = (checkboxes: CheckboxType[]) => {
  const checkedCheckboxes = checkboxes.filter(
      (checkbox) => checkbox.checked
  );
  return checkedCheckboxes.map((checkedCheckbox) => checkedCheckbox.name);
};

export const grantsToDocs = (grants: GrantType[]): IDocument[] => {
  return grants.map((grant) => grant.doc);
};

export const isGrantInCheckedRules = (checkboxes: CheckboxType[], grant: GrantType) => {
  let isInRules = false;
  grant.taxRules.forEach((taxRule) => {
      console.log("taxRule");
      console.log(taxRule);
      isInRules =
          isInRules ||
          getCheckedCheckboxes(checkboxes).includes(taxRule.taxRuleName);
  });
  return isInRules;
};

export const grantsToCheckboxes = (grants: GrantType[], handleSetChecked: any) => {
  let newCheckboxes: CheckboxType[] = [];
  let allAvailableRules: string[] = [];
  let ruleItems: string[] = [];
  grants.forEach((grant) => {
      grant.taxRules.forEach((taxRule) => {
          if (allAvailableRules.indexOf(taxRule.taxRuleName) === -1) {
              allAvailableRules.push(taxRule.taxRuleName);
          }
      });
  });
  allAvailableRules.forEach((rule) => {
      ruleItems = [];
      grants.forEach((grant) => {
          grant.taxRules.forEach((taxRule) => {
              if (rule === taxRule.taxRuleName)
                  ruleItems.push(grant.stakeholderName);
          });
      });
      newCheckboxes.push({
          name: rule,
          checked: true,
          setChecked: handleSetChecked,
          items: ruleItems,
      });
  });

  return newCheckboxes;
};
