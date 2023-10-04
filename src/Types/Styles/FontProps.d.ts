export interface FontProps {
    /**
     * 'fontFamily' property sets the font family for an element. This property is same as CSS's `font-family` property.
     * 'fontFamily'는 요소의 글꼴을 설정합니다. 이 속성은 CSS의 `font-family` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font family (글꼴 설정)
     *
     * ```typescript
     * <Div fontFamily="sans-serif" />
     * ```
     */
    fontFamily?: string;
    /**
     * 'fontSize' property sets the font size for an element. This property is same as CSS's `font-size` property.
     * 'fontSize'는 요소의 글꼴 크기를 설정합니다. 이 속성은 CSS의 `font-size` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font size (글꼴 크기 설정)
     *
     * ```typescript
     * <EideticsElement fontSize="1.5rem" />
     * <EideticsElement fontSize="1.5px" />
     * <EideticsElement fontSize={1.5} />
     * ```
     */
    fontSize?: string | number;
    /**
     * 'fontWeight' property sets the font weight for an element. This property is same as CSS's `font-weight` property.
     * 'fontWeight'는 요소의 글꼴 두께를 설정합니다. 이 속성은 CSS의 `font-weight` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font weight (글꼴 두께 설정)
     *
     * ```typescript
     * <EideticsElement fontWeight="bold" />
     * <EideticsElement fontWeight={700} />
     * ```
     */
    fontWeight?: 100 | 'thin' | 200 | 'extralight' | 300 | 'light' | 400 | 'normal' | 500 | 'medium' | 600 | 'semibold' | 700 | 'bold' | 800 | 'extrabold' | 900 | 'bolder';
    /**
     * 'fontStyle' property sets the font style for an element. This property is same as CSS's `font-style` property.
     * 'fontStyle'는 요소의 글꼴 스타일을 설정합니다. 이 속성은 CSS의 `font-style` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font style (글꼴 스타일 설정)
     *
     * ```typescript
     * <EideticsElement fontStyle="italic" />
     * ```
     */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /**
     * 'textDecoration' property sets the text decoration for an element. This property is same as CSS's `text-decoration` property.
     * 'textDecoration'는 요소의 텍스트 꾸밈 설정입니다. 이 속성은 CSS의 `text-decoration` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text decoration (텍스트 꾸밈 설정)
     *
     * ```typescript
     * <EideticsElement textDecoration="underline" />
     * ```
     */
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
    /**
     * 'textAlign' property sets the text alignment for an element. This property is same as CSS's `text-align` property.
     * 'textAlign'는 요소의 텍스트 정렬을 설정합니다. 이 속성은 CSS의 `text-align` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text alignment (텍스트 정렬 설정)
     *
     * ```typescript
     * <EideticsElement textAlign="center" />
     * ```
     */
    textAlign?: `left` | `right` | `center` | `justify`;
    /**
     * 'lineHeight' property sets the line height for an element. This property is same as CSS's `line-height` property.
     * 'lineHeight'는 요소의 줄 높이를 설정합니다. 이 속성은 CSS의 `line-height` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set line height (줄 높이 설정)
     *
     * ```typescript
     * <EideticsElement lineHeight="1.5rem" />
     * <EideticsElement lineHeight="1.5px" />
     * <EideticsElement lineHeight={1.5} />
     * ```
     */
    lineHeight?: string | number;
    /**
     * 'textShadow' property adds shadow to text. This property is same as CSS's `text-shadow` property.
     * 'textShadow' 속성은 텍스트에 그림자를 추가합니다. 이 속성은 CSS의 `text-shadow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Add shadow to text (텍스트에 그림자 추가)
     *
     * ```typescript
     * <div textShadow="2px 2px 2px gray" />
     * ```
     */
    textShadow?: string;
    /**
     * 'letterSpacing' property sets the letter spacing for an element. This property is same as CSS's `letter-spacing` property.
     * 'letterSpacing'는 요소의 글자 간격을 설정합니다. 이 속성은 CSS의 `letter-spacing` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set letter spacing (글자 간격 설정)
     *
     * ```typescript
     * <EideticsElement letterSpacing="0.1rem" />
     * <EideticsElement letterSpacing="0.1px" />
     * <EideticsElement letterSpacing={0.1} />
     * ```
     */
    letterSpacing?: string | number;
    /**
     * 'textTransform' property sets the text transform for an element. This property is same as CSS's `text-transform` property.
     * 'textTransform'는 요소의 텍스트를 변형하기위해 사용합니다. 이 속성은 CSS의 `text-transform` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text transform (텍스트 변형 설정)
     *
     * ```typescript
     * <EideticsElement textTransform="uppercase" />
     * ```
     */
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
