import { GrantType, TaxType } from "@/global/types";
import { IDocument } from "@cyntler/react-doc-viewer";

export const docsExample: IDocument[] = [
    {
        uri: "https://podcasts.ceu.edu/sites/podcasts.ceu.edu/files/sample.doc",
        fileType: "doc",
    },
    {
        uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
        fileType: "docx",
    },
    {
        uri: "https://homepages.inf.ed.ac.uk/neilb/TestWordDoc.doc",
        fileType: "doc",
    },
];

const taxRulesA: TaxType[] = [
    {
        countryCode: 1,
        taxRuleName: "Rule A",
    },
    {
        countryCode: 2,
        taxRuleName: "Rule B",
    },
    {
        countryCode: 3,
        taxRuleName: "Rule C",
    },
];

const taxRulesB: TaxType[] = [
    {
        countryCode: 1,
        taxRuleName: "Rule A",
    },
];

const taxRulesC: TaxType[] = [
    {
        countryCode: 1,
        taxRuleName: "Rule A",
    },
    {
        countryCode: 3,
        taxRuleName: "Rule C",
    },
];

export const grantsExample: GrantType[] = [
    {
        stakeholderName: "Aki Avni",
        taxRules: taxRulesA,
        doc: {
            uri: "https://podcasts.ceu.edu/sites/podcasts.ceu.edu/files/sample.doc",
            fileType: "doc",
        },
    },
    {
        stakeholderName: "Eli Evli",
        taxRules: taxRulesB,
        doc: {
            uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
            fileType: "docx",
        },
    },
    {
        stakeholderName: "Ji Joe",
        taxRules: taxRulesC,
        doc: {
            uri: "https://homepages.inf.ed.ac.uk/neilb/TestWordDoc.doc",
            fileType: "doc",
        },
    },
];