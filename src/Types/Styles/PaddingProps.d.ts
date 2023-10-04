export interface PaddingProps {
    /**
     * 'p' property sets padding for all sides. This property is same as CSS's `padding` property.
     * 'p' 속성은 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set padding for all sides (모든 측면에 패딩 설정)
     *
     * ```typescript
     * <EideticsElement p="10px" />
     * <EideticsElement p={10} />
     * ```
     */
    p?: string | number;
    /**
     * 'padding' property sets padding for all sides. This property is same as CSS's `padding` property.
     * 'padding' 속성은 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set padding for all sides (모든 측면에 패딩 설정)
     *
     * ```typescript
     * <EideticsElement padding="10px" />
     * <EideticsElement padding={10} />
     * ```
     */
    padding?: string | number;
    /**
     * 'pt' property sets the top padding. This property is same as CSS's `padding-top` property.
     * 'pt' 속성은 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top padding (상단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pt="10px" />
     * <EideticsElement pt={10} />
     * ```
     */
    pt?: string | number;
    /**
     * 'paddingTop' property sets the top padding. This property is same as CSS's `padding-top` property.
     * 'paddingTop' 속성은 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top padding (상단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingTop="10px" />
     * <EideticsElement paddingTop={10} />
     * ```
     */
    paddingTop?: string | number;
    /**
     * 'pr' property sets the right padding. This property is same as CSS's `padding-right` property.
     * 'pr' 속성은 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right padding (우측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pr="10px" />
     * <EideticsElement pr={10} />
     * ```
     */
    pr?: string | number;
    /**
     * 'paddingRight' property sets the right padding. This property is same as CSS's `padding-right` property.
     * 'paddingRight' 속성은 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right padding (우측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingRight="10px" />
     * <EideticsElement paddingRight={10} />
     * ```
     */
    paddingRight?: string | number;
    /**
     * 'pb' property sets the bottom padding. This property is same as CSS's `padding-bottom` property.
     * 'pb' 속성은 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom padding (하단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pb="10px" />
     * <EideticsElement pb={10} />
     * ```
     */
    pb?: string | number;
    /**
     * 'paddingBottom' property sets the bottom padding. This property is same as CSS's `padding-bottom` property.
     * 'paddingBottom' 속성은 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom padding (하단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingBottom="10px" />
     * <EideticsElement paddingBottom={10} />
     * ```
     */
    paddingBottom?: string | number;
    /**
     * 'pl' property sets the left padding. This property is same as CSS's `padding-left` property.
     * 'pl' 속성은 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left padding (좌측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pl="10px" />
     * <EideticsElement pl={10} />
     * ```
     */
    pl?: string | number;
    /**
     * 'paddingLeft' property sets the left padding. This property is same as CSS's `padding-left` property.
     * 'paddingLeft' 속성은 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left padding (좌측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingLeft="10px" />
     * <EideticsElement paddingLeft={10} />
     * ```
     */
    paddingLeft?: string | number;
    /**
     * 'px' property sets the horizontal padding (left and right). This property is same as CSS's `padding-left` and `padding-right` properties.
     * 'px' 속성은 좌우 패딩을 설정합니다. 이 속성은 CSS의 `padding-left`와 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the horizontal padding (좌우 패딩 설정)
     *
     * ```typescript
     * <EideticsElement px="10px" />
     * <EideticsElement px={10} />
     * ```
     */
    px?: string | number;
    /**
     * 'py' property sets the vertical padding (top and bottom). This property is same as CSS's `padding-top` and `padding-bottom` properties.
     * 'py' 속성은 상하 패딩을 설정합니다. 이 속성은 CSS의 `padding-top`과 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the vertical padding (상하 패딩 설정)
     *
     * ```typescript
     * <EideticsElement py="10px" />
     * <EideticsElement py={10} />
     * ```
     */
    py?: string | number;
}
