/// <reference types="react" />
/**
 * Returns an object containing the active tab index, a function to set the active tab index, and a function to change the active tab index.
 * @returns An object containing the active tab index, a function to set the active tab index, and a function to change the active tab index.
 */
export declare const _useTab: () => {
    activeTab: string | number;
    setActiveTab: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    changeTab: ({ tabId }: {
        tabId: string | number;
    }) => void;
};
export declare const useTab: () => {
    activeTab: string | number;
    setActiveTab: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    changeTab: ({ tabId }: {
        tabId: string | number;
    }) => void;
};
