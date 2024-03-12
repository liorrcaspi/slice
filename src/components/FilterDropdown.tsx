"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FilterDropdownType } from "@/global/types";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const FilterDropdown = ({
    name,
    checkboxes,
    allChecked,
    setAllChecked,
}: FilterDropdownType) => {
    const handleCheckPress = () => {
        setAllChecked(false);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                    checked={allChecked}
                    onCheckedChange={setAllChecked}
                >
                    Select All
                </DropdownMenuCheckboxItem>
                {checkboxes?.map(({ name, checked, setChecked, items }) => (
                    <>
                        <DropdownMenuCheckboxItem
                            onSelect={(e) => {
                                e.preventDefault();
                                setChecked(name);
                                handleCheckPress();
                            }}
                            checked={checked || allChecked}
                        >
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        {name} ({items.length})
                                    </AccordionTrigger>
                                    {items?.map((value) => (
                                        <AccordionContent>
                                            {value}
                                        </AccordionContent>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator />
                    </>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
