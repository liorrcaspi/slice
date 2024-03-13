"use client";

import { DocumentViewer } from "@/components/DocumentViewer";
import { DocumentViewerHeader } from "@/components/DocumentViewerHeader";
import {
    FilterDropdown,
    FilterDropdownHeader,
} from "@/components/FilterDropdown";
import { Button } from "@/components/ui/button";
import { countryCodeToSvgArray, grantsExample } from "@/global/consts";
import { CheckboxType, GrantType, TaxType } from "@/global/types";
import {
    getCheckedCheckboxes,
    grantsToCheckboxes,
    grantsToDocs,
    isGrantInCheckedRules,
} from "@/lib/utils";
import { IDocument } from "@cyntler/react-doc-viewer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { object } from "prop-types";
import { useEffect, useState } from "react";

export default function Home() {
    const [grants, setGrants] = useState<GrantType[]>(grantsExample);
    const [currentGrantIndex, setCurrentGrantIndex] = useState<number>(0);
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

    const [checkboxes, setCheckboxes] = useState<CheckboxType[]>(
        grantsToCheckboxes(grants, handleSetChecked)
    );

    useEffect(() => {
        const checkedGrants = grantsExample.filter((grant) =>
            isGrantInCheckedRules(checkboxes, grant)
        );
        setGrants(allChecked ? grantsExample : checkedGrants);
        setCurrentGrantIndex(0);
    }, [checkboxes, allChecked]);

    return (
        <main className="flex flex-col justify-between h-full p-24 ">
            <div className="flex flex-row justify-center bg-[#F0F3FE] rounded-t-lg p-1">
                <Button
                    variant="ghost"
                    className="hover:bg-slate-200"
                    size="icon"
                    disabled={currentGrantIndex === 0}
                    onClick={() => setCurrentGrantIndex(currentGrantIndex - 1)}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <FilterDropdown
                    checkboxes={checkboxes}
                    allChecked={allChecked}
                    setAllChecked={setAllChecked}
                >
                    <FilterDropdownHeader
                        country={
                            countryCodeToSvgArray[
                                grants[currentGrantIndex].taxRules[0]
                                    .countryCode - 1
                            ]
                        }
                        title={
                            grants
                                ? grants[currentGrantIndex].stakeholderName
                                : ""
                        }
                        currentIndex={currentGrantIndex + 1}
                        length={grants.length}
                    />
                </FilterDropdown>
                <Button
                    variant="ghost"
                    className="hover:bg-slate-200"
                    size="icon"
                    disabled={currentGrantIndex === grants.length - 1}
                    onClick={() => setCurrentGrantIndex(currentGrantIndex + 1)}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <DocumentViewer
                docs={grantsToDocs([grants[currentGrantIndex]]) ?? []}
                headerComponent={DocumentViewerHeader}
            />
        </main>
    );
}
