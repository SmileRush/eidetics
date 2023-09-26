/// <reference types="react" />
export interface PseudoClassesProps {
    /**
     * '_hover'는 마우스 오버 시 적용될 CSS 속성을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 마우스 오버 시 배경색을 변경
     * <div _hover={{ backgroundColor: 'red' }} />
     * ```
     */
    _hover?: React.CSSProperties;
    /**
     * '_active'는 마우스 클릭 시 적용될 CSS 속성을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 마우스 클릭 시 글자 색을 변경
     * <div _active={{ color: 'blue' }} />
     * ```
     */
    _active?: React.CSSProperties;
    /**
     * '_focus'는 요소가 포커스를 받을 때 적용될 CSS 속성을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 포커스 시 테두리 색을 변경
     * <input _focus={{ borderColor: 'green' }} />
     * ```
     */
    _focus?: React.CSSProperties;
}
