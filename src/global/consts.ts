import "/node_modules/flag-icons/css/flag-icons.min.css";
import { GrantType, TaxType } from "@/global/types";

const taxRulesA: TaxType[] = [
    {
        countryCode: 2,
        taxRuleName: "Israel - 102 Capital Gain",
    },
    {
        countryCode: 1,
        taxRuleName: "United States - NSO",
    },
    {
        countryCode: 3,
        taxRuleName: "Canada - Slice",
    },
];

const taxRulesB: TaxType[] = [
    {
        countryCode: 1,
        taxRuleName: "United States - NSO",
    },
];

const taxRulesC: TaxType[] = [
    {
        countryCode: 3,
        taxRuleName: "Canada - Slice",
    },
    {
        countryCode: 1,
        taxRuleName: "United States - NSO",
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

export const countryCodeToSvgArray = ['fi-us', 'fi-il', 'fi-ca']
export const ruleNameToSvgDict = {
    "United States - NSO": 'fi-us',
    "Israel - 102 Capital Gain": 'fi-il',
    "Canada - Slice": 'fi-ca'
    }
