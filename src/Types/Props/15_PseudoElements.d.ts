/// <reference types="react" />
export interface PseudoElementsProps {
    /**
     * '_before'는 ::before 가상 요소에 적용할 CSS 속성을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // ::before 가상 요소에 콘텐츠 추가
     * <div _before={{ content: '"prefix_"' }} />
     * ```
     */
    _before?: React.CSSProperties;
    /**
     * '_after'는 ::after 가상 요소에 적용할 CSS 속성을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // ::after 가상 요소에 콘텐츠 추가
     * <div _after={{ content: '"_suffix"' }} />
     * ```
     */
    _after?: React.CSSProperties;
}
