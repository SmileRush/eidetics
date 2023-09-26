/**
 * Interface for standardizing margin properties in Eidetics.
 * Eidetics에서 마진 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement m="10px" mt="20px" />
 * ```
 */
export interface MarginProps {
    /**
     * Sets margin for all sides. Corresponds to the CSS `margin` property.
     * 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement m="10px" />
     * <EideticsElement m={10} />
     * ```
     */
    m?: string | number;
    /**
     * Sets margin for all sides. Corresponds to the CSS `margin` property.
     * 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement margin="10px" />
     * <EideticsElement margin={10} />
     * ```
     */
    margin?: string | number;
    /**
     * Sets the top margin. Corresponds to the CSS `margin-top` property.
     * 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement mt="10px" />
     * <EideticsElement mt={10} />
     * ```
     */
    mt?: string | number;
    /**
     * Sets the top margin. Corresponds to the CSS `margin-top` property.
     * 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement marginTop="10px" />
     * <EideticsElement marginTop={10} />
     * ```
     */
    marginTop?: string | number;
}
