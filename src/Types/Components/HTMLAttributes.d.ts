/// <reference types="react" />
export interface HTMLAttributes extends React.HtmlHTMLAttributes<HTMLElement> {
    /**
     * Sets the id attribute of the element.
     * 요소의 id 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <EideticsElement id="some-id" />
     * ```
     */
    id?: string;
    /**
     * Sets the class attribute of the element.
     * 요소의 class 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <EideticsElement className="some-class" />
     * ```
     */
    className?: string;
}
