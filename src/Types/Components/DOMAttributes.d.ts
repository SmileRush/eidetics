/// <reference types="react" />
export interface DOMAttributes extends React.DOMAttributes<HTMLElement> {
    children?: React.ReactNode | undefined;
}
