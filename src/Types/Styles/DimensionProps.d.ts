export interface DimensionProps {
    /**
     * 'w' property sets the width. This property is same as CSS's `width` property.
     * 'w' 속성은 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width (너비 설정)
     *
     * ```typescript
     * <Div w="100px" />
     * ```
     */
    w?: string;
    /**
     * 'width' property sets the width. This property is same as CSS's `width` property.
     * 'width' 속성은 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width (너비 설정)
     *
     * ```typescript
     * <Div width="100px" />
     * ```
     */
    width?: string;
    /**
     * 'h' property sets the height. This property is same as CSS's `height` property.
     * 'h' 속성은 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the height (높이 설정)
     *
     * ```typescript
     * <Div h="100px" />
     * ```
     */
    h?: string;
    /**
     * 'height' property sets the height. This property is same as CSS's `height` property.
     * 'height' 속성은 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the height (높이 설정)
     *
     * ```typescript
     * <Div height="100px" />
     * ```
     */
    height?: string;
    /**
     * 'maxWidth' property sets the maximum width. This property is same as CSS's `max-width` property.
     * 'maxWidth' 속성은 최대 너비를 설정합니다. 이 속성은 CSS의 `max-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum width (최대 너비 설정)
     *
     * ```typescript
     * <Div maxWidth="100px" />
     * ```
     */
    maxWidth?: string;
    /**
     * 'minWidth' property sets the minimum width. This property is same as CSS's `min-width` property.
     * 'minWidth' 속성은 최소 너비를 설정합니다. 이 속성은 CSS의 `min-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum width (최소 너비 설정)
     *
     * ```typescript
     * <Div minWidth="100px" />
     * ```
     */
    minWidth?: string;
    /**
     * 'maxW' property sets the maximum width. This property is same as CSS's `max-width` property.
     * 'maxW' 속성은 최대 너비를 설정합니다. 이 속성은 CSS의 `max-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum width (최대 너비 설정)
     *
     * ```typescript
     * <Div maxW="100px" />
     * ```
     */
    maxW?: string;
    /**
     * 'minW' property sets the minimum width. This property is same as CSS's `min-width` property.
     * 'minW' 속성은 최소 너비를 설정합니다. 이 속성은 CSS의 `min-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum width (최소 너비 설정)
     *
     * ```typescript
     * <Div minW="100px" />
     * ```
     */
    minW?: string;
    /**
     * 'maxHeight' property sets the maximum height. This property is same as CSS's `max-height` property.
     * 'maxHeight' 속성은 최대 높이를 설정합니다. 이 속성은 CSS의 `max-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum height (최대 높이 설정)
     *
     * ```typescript
     * <Div maxHeight="100px" />
     * ```
     */
    maxHeight?: string;
    /**
     * 'minHeight' property sets the minimum height. This property is same as CSS's `min-height` property.
     * 'minHeight' 속성은 최소 높이를 설정합니다. 이 속성은 CSS의 `min-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum height (최소 높이 설정)
     *
     * ```typescript
     * <Div minHeight="100px" />
     * ```
     */
    minHeight?: string;
    /**
     * 'maxH' property sets the maximum height. This property is same as CSS's `max-height` property.
     * 'maxH' 속성은 최대 높이를 설정합니다. 이 속성은 CSS의 `max-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum height (최대 높이 설정)
     *
     * ```typescript
     * <Div maxH="100px" />
     * ```
     */
    maxH?: string;
    /**
     * 'minH' property sets the minimum height. This property is same as CSS's `min-height` property.
     * 'minH' 속성은 최소 높이를 설정합니다. 이 속성은 CSS의 `min-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum height (최소 높이 설정)
     *
     * ```typescript
     * <Div minH="100px" />
     * ```
     */
    minH?: string;
    /**
     * 'objectFit' property sets how the content of a replaced element should be resized to fit its container. This property is same as CSS's `object-fit` property.
     * 'objectFit' 속성은 대체된 요소의 콘텐츠가 컨테이너에 맞도록 크기를 조정하는 방법을 설정합니다. 이 속성은 CSS의 `object-fit` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set how the content of a replaced element should be resized to fit its container (대체된 요소의 콘텐츠가 컨테이너에 맞도록 크기를 조정하는 방법 설정)
     *
     * ```typescript
     * <Div objectFit="cover" />
     * ```
     */
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    /**
     * 'objectPosition' property sets the alignment of the replaced element's content. This property is same as CSS's `object-position` property.
     * 'objectPosition' 속성은 대체된 요소의 콘텐츠의 정렬을 설정합니다. 이 속성은 CSS의 `object-position` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the alignment of the replaced element's content (대체된 요소의 콘텐츠의 정렬 설정)
     *
     * ```typescript
     * <Div objectPosition="50% 50%" />
     * ```
     */
    objectPosition?: string;
}
