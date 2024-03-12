"use client";

import { DocumentViewer } from "@/components/DocumentViewer";
import { FilterDropdown } from "@/components/FilterDropdown";
import { grantsExample } from "@/global/consts";
import { CheckboxType, GrantType, TaxType } from "@/global/types";
import { IDocument } from "@cyntler/react-doc-viewer";
import { useEffect, useState } from "react";

export default function Home() {
    const [docs, setDocs] = useState<IDocument[]>();
    const [allChecked, setAllChecked] = useState<boolean>(true);

    const handleSetChecked = (name: string) => {
        let newCheckboxes = checkboxes;
        const checkbox = newCheckboxes.find((checkbox) => {
            return checkbox.name === name;
        });
        if (checkbox) checkbox.checked = !checkbox?.checked;
        console.log(getCheckedCheckboxes(newCheckboxes).length);
        if (getCheckedCheckboxes(newCheckboxes).length !== 0)
            setCheckboxes([...newCheckboxes]);
    };

    const [checkboxes, setCheckboxes] = useState<CheckboxType[]>([
        {
            name: "Rule A",
            checked: true,
            setChecked: handleSetChecked,
            items: ["asd", "gfd", "gdg"],
        },
        {
            name: "Rule B",
            checked: true,
            setChecked: handleSetChecked,
            items: ["asd", "gfd", "gdg"],
        },
        {
            name: "Rule C",
            checked: true,
            setChecked: handleSetChecked,
            items: ["asd", "gfd", "gdg"],
        },
    ]);

    const getCheckedCheckboxes = (checkboxes: CheckboxType[]) => {
        const checkedCheckboxes = checkboxes.filter(
            (checkbox) => checkbox.checked
        );
        return checkedCheckboxes.map((checkedCheckbox) => checkedCheckbox.name);
    };

    const grantsToDocs = (grants: GrantType[]): IDocument[] => {
        return grants.map((grant) => grant.doc);
    };

    const isGrantInCheckedRules = (grant: GrantType) => {
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

    useEffect(() => {
        const checkedGrants = grantsExample.filter((grant) =>
            isGrantInCheckedRules(grant)
        );
        setDocs(
            allChecked
                ? grantsToDocs(grantsExample)
                : grantsToDocs(checkedGrants)
        );
    }, [checkboxes, allChecked]);

    return (
        <main className="flex flex-col justify-between h-full p-24 gap-4">
            <div className="flex flex-row justify-center">
                <FilterDropdown
                    name="open"
                    checkboxes={checkboxes}
                    allChecked={allChecked}
                    setAllChecked={setAllChecked}
                />
            </div>
            <DocumentViewer docs={docs ?? []} />
        </main>
    );
}
