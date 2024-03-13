import * as React from "react";
import DocViewer, { IHeaderOverride } from "@cyntler/react-doc-viewer";

export const DocumentViewerHeader: IHeaderOverride = (
    state,
    previousDocument,
    nextDocument
) => {
    if (!state.currentDocument || state.config?.header?.disableFileName) {
        return null;
    }

    return (
        <div className="flex flex-row justify-center bg-[#F0F3FE]">
            <div>{state.currentDocument.uri || ""}</div>
            <div>
                <button
                    onClick={previousDocument}
                    disabled={state.currentFileNo === 0}
                >
                    Previous Document
                </button>
                <button
                    onClick={nextDocument}
                    disabled={state.currentFileNo >= state.documents.length - 1}
                >
                    Next Document
                </button>
            </div>
        </div>
    );
};
