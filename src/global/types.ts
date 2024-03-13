import { IDocument } from "@cyntler/react-doc-viewer";

export type DocViewerType = {
    name: string;
    docs: IDocument[]
};

export type CheckboxType = {
    name: string;
    checked: boolean;
    setChecked: any;
    items: string[];
};

export type FilterDropdownType = {
    checkboxes: CheckboxType[];
    allChecked: boolean;
    setAllChecked: any;
    children?: any;
};

export type FilterDropdownHeaderType = {
    country: string;
    title: string;
    currentIndex: number;
    length: number;
};

export type TaxType = {
    countryCode: number; // Example: 1, 2, 3...
    taxRuleName: string; // Example: "Rule A", "Rule B"...
};

export type GrantType = {
    stakeholderName: string; // Example: "Aki Avni"
    taxRules: TaxType[];
    doc: IDocument;
}  

