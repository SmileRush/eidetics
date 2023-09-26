/**
 * Interface for standardizing padding properties in Eidetics.
 * Eidetics에서 패딩 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement p="10px" pt="20px" />
 * ```
 */
export interface PaddingProps extends ShortcutPaddingProps {
    /**
     * Sets padding for all sides. Corresponds to the CSS `padding` property.
     * 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement p="10px" />
     * <EideticsElement p={10} />
     * ```
     */
    p?: string | number;
    /**
     * Sets padding for all sides. Corresponds to the CSS `padding` property.
     * 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement padding="10px" />
     * <EideticsElement padding={10} />
     * ```
     */
    padding?: string | number;
}
/** pt, pr, pb, pl */
interface ShortcutPaddingProps {
    /**
     * Sets the top padding. Corresponds to the CSS `padding-top` property.
     * 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement pt="10px" />
     * <EideticsElement pt={10} />
     * ```
     */
    pt?: string | number;
    /**
     * Sets the right padding. Corresponds to the CSS `padding-right` property.
     * 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement pr="10px" />
     * <EideticsElement pr={10} />
     * ```
     */
    pr?: string | number;
    /**
     * Sets the bottom padding. Corresponds to the CSS `padding-bottom` property.
     * 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement pb="10px" />
     * <EideticsElement pb={10} />
     * ```
     */
    pb?: string | number;
    /**
     * Sets the left padding. Corresponds to the CSS `padding-left` property.
     * 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement pl="10px" />
     * <EideticsElement pl={10} />
     * ```
     */
    pl?: string | number;
}
/** paddingTop, paddingRight, paddingBottom, paddingLeft */
interface ShortcutPaddingProps {
    /**
     * Sets the top padding. Corresponds to the CSS `padding-top` property.
     * 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingTop="10px" />
     * <EideticsElement paddingTop={10} />
     * ```
     */
    paddingTop?: string | number;
    /**
     * Sets the right padding. Corresponds to the CSS `padding-right` property.
     * 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingRight="10px" />
     * <EideticsElement paddingRight={10} />
     * ```
     */
    paddingRight?: string | number;
    /**
     * Sets the bottom padding. Corresponds to the CSS `padding-bottom` property.
     * 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingBottom="10px" />
     * <EideticsElement paddingBottom={10} />
     * ```
     */
    paddingBottom?: string | number;
    /**
     * Sets the left padding. Corresponds to the CSS `padding-left` property.
     * 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingLeft="10px" />
     * <EideticsElement paddingLeft={10} />
     * ```
     */
    paddingLeft?: string | number;
}
/** px, py, paddingHorizontal, paddingVertical */
interface ShortcutPaddingProps {
    /**
     * Sets the horizontal padding (left and right). Corresponds to the CSS `padding-left` and `padding-right` properties.
     * 좌우 패딩을 설정합니다. 이 속성은 CSS의 `padding-left`과 `padding-right` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement px="10px" />
     * <EideticsElement px={10} />
     * ```
     */
    px?: string | number;
    /**
     * Sets the vertical padding (top and bottom). Corresponds to the CSS `padding-top` and `padding-bottom` properties.
     * 상하 패딩을 설정합니다. 이 속성은 CSS의 `padding-top`과 `padding-bottom` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement py="10px" />
     * <EideticsElement py={10} />
     * ```
     */
    py?: string | number;
    /**
     * Sets the left and right padding. Corresponds to the CSS `padding-left` and `padding-right` properties.
     * 좌측과 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left`와 `padding-right` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingHorizontal="10px" />
     * <EideticsElement paddingHorizontal={10} />
     * ```
     */
    paddingHorizontal?: string | number;
    /**
     * Sets the top and bottom padding. Corresponds to the CSS `padding-top` and `padding-bottom` properties.
     * 상단과 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top`와 `padding-bottom` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement paddingVertical="10px" />
     * <EideticsElement paddingVertical={10} />
     * ```
     */
    paddingVertical?: string | number;
}
export {};
