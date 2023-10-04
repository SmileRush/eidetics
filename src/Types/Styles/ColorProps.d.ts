export interface ColorProps {
    /**
     * 'color' property sets the color of an element's text content. This property is same as CSS's `color` property.
     * 'color' 속성은 요소의 텍스트 콘텐츠의 색상을 설정합니다. 이 속성은 CSS의 `color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of an element's text content (요소의 텍스트 콘텐츠의 색상 설정)
     *
     * ```typescript
     * <Div color="#fff" />
     * <Div color="red" />
     * ```
     */
    color?: string;
    /**
     * 'b' property sets the background color. This property is same as CSS's `background-color` property.
     * 'b' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div b="#000" />
     * <Div b="blue" />
     * ```
     */
    b?: string;
    /**
     * 'bg' property sets the background color. This property is same as CSS's `background-color` property.
     * 'bg' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bg="#000" />
     * <Div bg="blue" />
     * ```
     */
    bg?: string;
    /**
     * 'background' property sets the background color. This property is same as CSS's `background` property.
     * 'background' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div background="#000" />
     * <Div background="blue" />
     * ```
     */
    background?: string;
    /**
     * 'bgColor' property sets the background color. This property is same as CSS's `background-color` property.
     * 'bgColor' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bgColor="#000" />
     * <Div bgColor="blue" />
     * ```
     */
    bgColor?: string;
    /**
     * 'backgroundColor' property sets the background color. This property is same as CSS's `background-color` property.
     * 'backgroundColor' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bgColor="#000" />
     * <Div bgColor="blue" />
     * ```
     */
    backgroundColor?: string;
    /**
     * 'boxShadow' property sets the shadow effects around an element's frame. This property is same as CSS's `box-shadow` property.
     * 'boxShadow' 속성은 요소의 테두리 주변에 그림자 효과를 설정합니다. 이 속성은 CSS의 `box-shadow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the shadow effects around an element's frame (요소의 테두리 주변에 그림자 효과 설정)
     *
     * ```typescript
     * <Div boxShadow="0 0 10px 0 #000" />
     * ```
     */
    boxShadow?: string;
}
