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
import { FilterDropdownHeaderType, FilterDropdownType } from "@/global/types";
import { countryCodeToSvgArray, ruleNameToSvgDict } from "@/global/consts";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const FilterDropdownHeader = ({
    country,
    title,
    currentIndex,
    length,
}: FilterDropdownHeaderType) => {
    return (
        <div className="flex flex-row justify-between gap-2">
            <span className={`fi ${country}`}></span>
            <p>{title}</p>
            <p>{`${currentIndex}/${length}`}</p>
        </div>
    );
};

export const FilterDropdown = ({
    checkboxes,
    allChecked,
    setAllChecked,
    children,
}: FilterDropdownType) => {
    const handleCheckPress = () => {
        setAllChecked(false);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="hover:bg-slate-200" variant="ghost">
                    {children}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="w-56"
            >
                <DropdownMenuCheckboxItem
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                    checked={allChecked}
                    onCheckedChange={setAllChecked}
                >
                    Select All
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                {checkboxes?.map(({ name, checked, setChecked, items }) => (
                    <>
                        <div className="grid grid-cols-[1fr_5fr] gap-1">
                            <DropdownMenuCheckboxItem
                                onSelect={(e) => {
                                    e.preventDefault();
                                    setChecked(name);
                                    handleCheckPress();
                                }}
                                checked={checked || allChecked}
                            />
                            <Accordion type="single" collapsible>
                                <AccordionItem value={name}>
                                    <AccordionTrigger className="flex flex-row justify-start gap-1">
                                        <div className="flex flex-row justify-between gap-2">
                                            <span
                                                // @ts-ignore
                                                className={`fi ${ruleNameToSvgDict[name]}`}
                                            />
                                            <p className="text-xs w-[6rem] truncate">
                                                {name}
                                            </p>
                                            <p className="text-xs">
                                                ({items.length})
                                            </p>
                                        </div>
                                    </AccordionTrigger>
                                    {items?.map((value) => (
                                        <AccordionContent key={value}>
                                            {value}
                                        </AccordionContent>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <DropdownMenuSeparator />
                    </>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
