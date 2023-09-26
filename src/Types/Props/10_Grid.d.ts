export interface GridProps {
    /**
     * 'gridGap' 속성은 그리드 아이템 간의 간격을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 그리드 아이템 간에 16px 간격을 둠
     * <div gridGap="16px" />
     * ```
     */
    gridGap?: string | number;
    /**
     * 'gridRowGap' 속성은 그리드 아이템 간의 세로 간격을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 그리드 행 간에 10px 간격을 둠
     * <div gridRowGap="10px" />
     * ```
     */
    gridRowGap?: string | number;
    /**
     * 'gridColumnGap' 속성은 그리드 아이템 간의 가로 간격을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 그리드 열 간에 10px 간격을 둠
     * <div gridColumnGap="10px" />
     * ```
     */
    gridColumnGap?: string | number;
}
