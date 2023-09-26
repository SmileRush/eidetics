export interface InteractionProps {
    /**
     * 'cursor' 속성은 마우스 포인터가 요소 위에 있을 때의 모양을 지정합니다.
     * 값은 `auto` | `default` | `pointer` | `wait` | `text` 등이다.
     *
     * > ### 예시
     * ```typescript
     * // 마우스 포인터가 요소 위에 있을 때 손가락 모양으로 변경
     * <div cursor="pointer" />
     * ```
     */
    cursor?: `auto` | `default` | `pointer` | `wait` | `text`;
}
