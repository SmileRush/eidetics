/**
 * Interface for standardizing dimension properties in Eidetics.
 * Eidetics에서 차원 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement w="100px" h="200px" />
 * ```
 */
export interface DimensionProps {
    /**
     * Sets the width. Corresponds to the CSS `width` property.
     * 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement w="100px" />
     * <EideticsElement w={100} />
     * ```
     */
    w?: string | number;
    /**
     * Sets the width. Corresponds to the CSS `width` property.
     * 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement width="100px" />
     * <EideticsElement width={100} />
     * ```
     */
    width?: string | number;
    /**
     * Sets the height. Corresponds to the CSS `height` property.
     * 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement h="100px" />
     * <EideticsElement h={100} />
     * ```
     */
    h?: string | number;
    /**
     * Sets the height. Corresponds to the CSS `height` property.
     * 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement height="100px" />
     * <EideticsElement height={100} />
     * ```
     */
    height?: string | number;
    /**
     * Sets the min-width. Corresponds to the CSS `min-width` property.
     * 최소 너비를 설정합니다. 이 속성은 CSS의 `min-width` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement minWidth="100px" />
     * <EideticsElement minWidth={100} />
     * ```
     */
    minWidth?: string | number;
    /**
     * Sets the max-width. Corresponds to the CSS `max-width` property.
     * 최대 너비를 설정합니다. 이 속성은 CSS의 `max-width` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement maxWidth="100px" />
     * <EideticsElement maxWidth={100} />
     * ```
     */
    maxWidth?: string | number;
    /**
     * Sets the minimum height. Corresponds to the CSS `min-height` property.
     * 최소 높이를 설정합니다. 이 속성은 CSS의 `min-height` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement minHeight="200px" />
     * <EideticsElement minHeight={200} />
     * ```
     */
    minHeight?: string | number;
    /**
     * Sets the maximum height. Corresponds to the CSS `max-height` property.
     * 최대 높이를 설정합니다. 이 속성은 CSS의 `max-height` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement maxHeight="200px" />
     * <EideticsElement maxHeight={200} />
     * ```
     */
    maxHeight?: string | number;
}
