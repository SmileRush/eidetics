export interface ShadowProps {
    /**
     * 'textShadow' 속성은 텍스트에 그림자를 추가합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 텍스트에 그림자 추가
     * <div textShadow="2px 2px 2px gray" />
     * ```
     */
    textShadow?: string;
    /**
     * 'shadow' 속성은 요소에 그림자를 추가합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 요소에 그림자 추가
     * <div shadow="2px 2px 2px gray" />
     * ```
     */
    shadow?: string;
    /**
     * 'boxShadow' 속성은 박스 요소에 그림자를 추가합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 박스에 그림자 추가
     * <div boxShadow="2px 2px 2px gray" />
     * ```
     */
    boxShadow?: string;
}
