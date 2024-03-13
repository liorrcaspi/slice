"use client";

import React from "react";
import DocViewer, {
    DocViewerRenderers,
    IDocument,
} from "@cyntler/react-doc-viewer";

type DocumentViewerProps = {
    docs: IDocument[];
    headerComponent: any;
};

export const DocumentViewer = ({
    docs,
    headerComponent,
}: DocumentViewerProps) => {
    console.log(docs);
    return (
        <DocViewer
            className="h-100"
            documents={docs}
            config={{
                header: {
                    disableHeader: true,
                },
            }}
            pluginRenderers={DocViewerRenderers}
        />
    );
};
