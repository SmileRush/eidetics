/// <reference types="react" />
export declare const Context: import("react").Context<{
    activeTab: string | number;
    setActiveTab: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    changeTab: ({ tabId }: {
        tabId: string | number;
    }) => void;
} | null>;
