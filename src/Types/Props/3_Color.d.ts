/**
 * Interface for standardizing color properties in Eidetics에서.
 * Eidetics에서 색상 속성을 표준화하기 위한 인터페이스입니다.
 *
 * @example
 * ```typescript
 * <EideticsElement color="#fff" bg="#000" />
 * ```
 */
export interface ColorProps {
    /**
     * Sets the text color. Corresponds to the CSS `color` property.
     * 텍스트 색상을 설정합니다. 이 속성은 CSS의 `color` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement color="#fff" />
     * <EideticsElement color="red" />
     * ```
     */
    color?: string;
    /**
     * Sets the text background-color. Alias for the `background-color` property.
     * 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement c="#fff" />
     * <EideticsElement c="red" />
     * ```
     */
    b?: string;
    /**
     * Sets the background-color. Alias for the `background-color` property.
     * 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement bg="#000" />
     * <EideticsElement bg="blue" />
     * ```
     */
    bg?: string;
    /**
     * Sets the background color. Corresponds to the CSS `background-color` property.
     * 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement background="#000" />
     * <EideticsElement background="blue" />
     * ```
     */
    background?: string;
    /**
     * Sets the background color. Alias for the `bg` property.
     * 배경 색상을 설정합니다. `bg` 속성의 별칭입니다.
     *
     * @example
     * ```typescript
     * <EideticsElement bgColor="#000" />
     * <EideticsElement bgColor="blue" />
     * ```
     */
    bgColor?: string;
    /**
     * Sets the opacity. Corresponds to the CSS `opacity` property.
     * 투명도를 설정합니다. 이 속성은 CSS의 `opacity` 속성과 같습니다.
     *
     * @example
     * ```typescript
     * <EideticsElement opacity={0.5} />
     * ```
     */
    opacity?: number;
    /**
     * Sets the text and background color. This is a shorthand for `color` and `bg`.
     * 텍스트와 배경 색상을 동시에 설정합니다. 이는 `color`와 `bg`의 단축 속성입니다.
     *
     * @example
     * ```typescript
     * <EideticsElement colors={{ text: "#fff", background: "#000" }} />
     * ```
     */
    colors?: {
        text?: string;
        background?: string;
    };
}
