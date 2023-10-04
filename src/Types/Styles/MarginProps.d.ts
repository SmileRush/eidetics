export interface MarginProps {
    /**
     * 'm' property sets margin for all sides. This property is same as CSS's `margin` property.
     * 'm' 속성은 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for all sides (모든 측면에 마진 설정)
     *
     * ```typescript
     * <EideticsElement m="10px" />
     * <EideticsElement m={10} />
     * ```
     */
    m?: string | number;
    /**
     * 'margin' property sets margin for all sides. This property is same as CSS's `margin` property.
     * 'margin' 속성은 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for all sides (모든 측면에 마진 설정)
     *
     * ```typescript
     * <EideticsElement margin="10px" />
     * <EideticsElement margin={10} />
     * ```
     */
    margin?: string | number;
    /**
     * 'mt' property sets the top margin. This property is same as CSS's `margin-top` property.
     * 'mt' 속성은 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top margin (상단 마진 설정)
     *
     * ```typescript
     * <EideticsElement mt="10px" />
     * <EideticsElement mt={10} />
     * ```
     */
    mt?: string | number;
    /**
     * 'marginTop' property sets the top margin. This property is same as CSS's `margin-top` property.
     * 'marginTop' 속성은 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top margin (상단 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginTop="10px" />
     * <EideticsElement marginTop={10} />
     * ```
     */
    marginTop?: string | number;
    /**
     * 'mr' property sets the right margin. This property is same as CSS's `margin-right` property.
     * 'mr' 속성은 우측 마진을 설정합니다. 이 속성은 CSS의 `margin-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right margin (우측 마진 설정)
     *
     * ```typescript
     * <EideticsElement mr="10px" />
     * <EideticsElement mr={10} />
     * ```
     */
    mr?: string | number;
    /**
     * 'marginRight' property sets the right margin. This property is same as CSS's `margin-right` property.
     * 'marginRight' 속성은 우측 마진을 설정합니다. 이 속성은 CSS의 `margin-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right margin (우측 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginRight="10px" />
     * <EideticsElement marginRight={10} />
     * ```
     */
    marginRight?: string | number;
    /**
     * 'mb' property sets the bottom margin. This property is same as CSS's `margin-bottom` property.
     * 'mb' 속성은 하단 마진을 설정합니다. 이 속성은 CSS의 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom margin (하단 마진 설정)
     *
     * ```typescript
     * <EideticsElement mb="10px" />
     * <EideticsElement mb={10} />
     * ```
     */
    mb?: string | number;
    /**
     * 'marginBottom' property sets the bottom margin. This property is same as CSS's `margin-bottom` property.
     * 'marginBottom' 속성은 하단 마진을 설정합니다. 이 속성은 CSS의 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom margin (하단 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginBottom="10px" />
     * <EideticsElement marginBottom={10} />
     * ```
     */
    marginBottom?: string | number;
    /**
     * 'ml' property sets the left margin. This property is same as CSS's `margin-left` property.
     * 'ml' 속성은 좌측 마진을 설정합니다. 이 속성은 CSS의 `margin-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left margin (좌측 마진 설정)
     *
     * ```typescript
     * <EideticsElement ml="10px" />
     * <EideticsElement ml={10} />
     * ```
     */
    ml?: string | number;
    /**
     * 'marginLeft' property sets the left margin. This property is same as CSS's `margin-left` property.
     * 'marginLeft' 속성은 좌측 마진을 설정합니다. 이 속성은 CSS의 `margin-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left margin (좌측 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginLeft="10px" />
     * <EideticsElement marginLeft={10} />
     * ```
     */
    marginLeft?: string | number;
    /**
     * 'my' property sets margin for the top and bottom sides. Corresponds to the CSS `margin-top` and `margin-bottom` properties.
     * 'my' 속성은 상하측면에 마진을 설정합니다. 이 속성은 CSS의 `margin-top`과 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for the top and bottom sides (상단, 하단에 마진 설정)
     *
     * ```typescript
     * <EideticsElement my="10px" />
     * <EideticsElement my={10} />
     * ```
     */
    my?: string | number;
    /**
     * Sets margin for the left and right sides. Corresponds to the CSS `margin-inline` property.
     * 좌우측면에 마진을 설정합니다. 이 속성은 CSS의 `margin-inline` 속성과 같습니다.
     *---
     * > ### Example (예시)
     * Set margin for the left and right sides (좌측, 우측에 마진 설정)
     *
     * ```typescript
     * <EideticsElement mx="10px" />
     * <EideticsElement mx={10} />
     * ```
     */
    mx?: string | number;
}
