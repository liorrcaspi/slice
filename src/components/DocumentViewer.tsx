"use client";

import React from "react";
import DocViewer, {
    DocViewerRenderers,
    IDocument,
} from "@cyntler/react-doc-viewer";
import { DocViewerType } from "../global/types";

type DocumentViewerProps = {
    docs: IDocument[];
};

export const DocumentViewer = ({ docs }: DocumentViewerProps) => {
    console.log(docs);
    return (
        <DocViewer
            className="h-100"
            documents={docs}
            config={{
                header: {
                    // disableHeader: true,
                },
            }}
            pluginRenderers={DocViewerRenderers}
        />
    );
};
