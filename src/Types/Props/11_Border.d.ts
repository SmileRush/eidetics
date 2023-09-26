export interface BorderProps {
    /**
     * 'border' 속성은 요소의 테두리 스타일을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 1px 실선 테두리 설정
     * <div border="1px solid black" />
     * ```
     */
    border?: string;
    /**
     * 'borderWidth' 속성은 테두리의 두께를 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 테두리 두께를 2px로 설정
     * <div borderWidth="2px" />
     * ```
     */
    borderWidth?: string | number;
    /**
     * 'borderColor' 속성은 테두리의 색상을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 테두리 색상을 빨강으로 설정
     * <div borderColor="red" />
     * ```
     */
    borderColor?: string;
}
