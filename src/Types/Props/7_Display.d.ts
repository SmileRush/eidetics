/**
 * Interface for standardizing display and overflow properties in Eidetics.
 * Eidetics에서 display와 overflow 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement display="flex" overflow="auto" />
 * ```
 */
export interface DisplayProps {
    /**
     * Sets the display style. Corresponds to the CSS `display` property.
     * display 스타일을 설정합니다. 이 속성은 CSS의 `display` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement display="flex" />
     * ```
     */
    display?: 'inline' | 'block' | 'flex' | 'grid' | 'inline-block' | 'none';
    /**
     * Sets the visibility of an element. Corresponds to the CSS `visibility` property.
     * 엘리먼트의 가시성을 설정합니다. 이 속성은 CSS의 `visibility` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement visibility="hidden" />
     * ```
     */
    visibility?: 'hidden' | 'visible' | 'collapse';
    /**
     * Sets the opacity of an element. Corresponds to the CSS `opacity` property.
     * 엘리먼트의 투명도를 설정합니다. 이 속성은 CSS의 `opacity` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement opacity={0.5} />
     * ```
     */
    opacity?: number;
    /**
     * Sets the overflow style. Corresponds to the CSS `overflow` property.
     * overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement overflow="auto" />
     * ```
     */
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
    /**
     * Sets the overflow style for the X-axis. Corresponds to the CSS `overflow-x` property.
     * X축에 대한 overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow-x` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement overflowX="auto" />
     * ```
     */
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
    /**
     * Sets the overflow style for the Y-axis. Corresponds to the CSS `overflow-y` property.
     * Y축에 대한 overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow-y` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement overflowY="auto" />
     * ```
     */
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
}
