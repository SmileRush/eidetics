export interface InteractionProps {
    /**
     * 'cursor' property sets the cursor type, which is displayed when the mouse pointer is over an element.
     * 'cursor' 속성은 요소에 마우스 포인터가 올라갔을 때 표시되는 커서의 종류를 설정합니다.
     * ---
     * > ### Example (예시)
     * Set the cursor type to pointer (커서의 종류를 pointer로 설정)
     *
     * ```typescript
     * <div cursor="pointer" />
     * ```
     */
    cursor?: `auto` | `default` | `pointer` | `wait` | `text`;
    /**
     * 'userSelect' property sets whether the user can select the text.
     * 'userSelect' 속성은 사용자가 텍스트를 선택할 수 있는지를 설정합니다.
     * ---
     * > ### Example (예시)
     * Set the user can select the text (사용자가 텍스트를 선택할 수 있도록 설정)
     *
     * ```typescript
     * <div userSelect="none" />
     * ```
     */
    userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all';
    /**
     * 'pointerEvents' property sets whether the element reacts to pointer events.
     * 'pointerEvents' 속성은 요소가 포인터 이벤트에 반응하는지를 설정합니다.
     * ---
     * > ### Example (예시)
     * Set the element reacts to pointer events (요소가 포인터 이벤트에 반응하도록 설정)
     *
     * > ### 예시
     * ```typescript
     * <div pointerEvents="none" />
     * ```
     */
    pointerEvents?: 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all';
}
