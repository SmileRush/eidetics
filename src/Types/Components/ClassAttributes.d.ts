import React from "react";
export interface ClassAttributes extends React.ClassAttributes<HTMLElement> {
    ref?: React.LegacyRef<HTMLElement> | undefined;
}
