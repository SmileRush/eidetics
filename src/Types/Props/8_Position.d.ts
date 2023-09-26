/**
 * Interface for standardizing position properties in Eidetics.
 * Eidetics에서 위치 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement position="fixed" top={0} zIndex={10} />
 * ```
 */
export interface PositionProps {
    /**
     * Sets the position style. Corresponds to the CSS `position` property.
     * 위치 스타일을 설정합니다. 이 속성은 CSS의 `position` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement position="fixed" />
     * ```
     */
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    /**
     * Sets the position style. Corresponds to the CSS `position` property.
     * 위치 스타일을 설정합니다. 이 속성은 CSS의 `position` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement pos="fixed" />
     * ```
     */
    pos?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    /**
     * Sets the top position. Corresponds to the CSS `top` property.
     * 상단 위치를 설정합니다. 이 속성은 CSS의 `top` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement top="10px" />
     * ```
     */
    top?: string | number;
    /**
     * Sets the right position. Corresponds to the CSS `right` property.
     * 우측 위치를 설정합니다. 이 속성은 CSS의 `right` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement right="10px" />
     * ```
     */
    right?: string | number;
    /**
     * Sets the bottom position. Corresponds to the CSS `bottom` property.
     * 하단 위치를 설정합니다. 이 속성은 CSS의 `bottom` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement bottom="10px" />
     * ```
     */
    bottom?: string | number;
    /**
     * Sets the left position. Corresponds to the CSS `left` property.
     * 좌측 위치를 설정합니다. 이 속성은 CSS의 `left` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement left="10px" />
     * ```
     */
    left?: string | number;
    /**
     * Sets the z-index. Corresponds to the CSS `z-index` property.
     * z-index를 설정합니다. 이 속성은 CSS의 `z-index` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement zIndex="10" />
     * ```
     */
    zIndex?: string | number;
    /**
     * Sets the clipping region. Corresponds to the CSS `clip` property.
     * 클리핑 영역을 설정합니다. 이 속성은 CSS의 `clip` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement clip="rect(0 50px 50px 0)" />
     * ```
     */
    clip?: string;
    /**
     * Sets the clipping path. Corresponds to the CSS `clip-path` property.
     * 클리핑 경로를 설정합니다. 이 속성은 CSS의 `clip-path` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement clipPath="circle(50%)" />
     * ```
     */
    clipPath?: string;
    /**
     * Sets how the content should be resized. Corresponds to the CSS `object-fit` property.
     * 콘텐츠가 어떻게 크기 조정될 것인지 설정합니다. 이 속성은 CSS의 `object-fit` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement objectFit="cover" />
     * ```
     */
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    /**
     * Sets the position of the resized content. Corresponds to the CSS `object-position` property.
     * 크기가 조정된 콘텐츠의 위치를 설정합니다. 이 속성은 CSS의 `object-position` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement objectPosition="50% 50%" />
     * ```
     */
    objectPosition?: string;
}
