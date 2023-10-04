/// <reference types="react" />
export interface HTMLAttributes extends React.HtmlHTMLAttributes<HTMLElement> {
    /**
     * Sets the id attribute of the element.
     * 요소의 id 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <Div id="some-id" />
     * ```
     */
    id?: string;
    /**
     * Sets the class attribute of the element.
     * 요소의 class 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <Div className="some-class" />
     * ```
     */
    className?: string;
    /**
     * Sets the style attribute of the element.
     * 요소의 style 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <Div style={{ color: 'red' }} />
     * ```
     */
    style?: React.CSSProperties;
    /**
     * Sets the ref attribute of the element.
     * 요소의 ref 속성을 설정합니다.
     *
     * @example
     * ```typescript
     * <Div ref={someRef} />
     * ```
     */
    ref?: React.LegacyRef<HTMLDivElement> | undefined;
}
