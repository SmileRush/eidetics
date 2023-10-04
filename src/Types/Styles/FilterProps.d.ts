export interface FilterProps {
    /**
     * 'filter' property applies graphical effects like blur or color shift to an element.
     * 'filter' 속성은 요소에 흐림 또는 색상 변화와 같은 그래픽 효과를 적용합니다.
     * ---
     * > ### Example (예시)
     * Apply blur and brightness filter (흐림과 밝기 필터 적용)
     *
     * ```typescript
     * <Div filter="blur(5px)" />                       // Single Effect: 하나의 효과만 적용
     * <Div filter="blur(5px) brightness(0.5)" />       // Multiple Effects: 여러 효과 적용
     * <Div filter="brightness(0.5) contrast(200%)" />  // Brightness and Contrast: 밝기와 대비 설정
     * <Div filter="hue-rotate(90deg)" />               // Hue-Rotate: 색상 회전
     * <Div filter="opacity(50%)" />                    // Opacity: 불투명도 설정
     * <Div filter="drop-shadow(0 0 10px #000)" />      // Drop-Shadow: 그림자 효과
     * ```
     */
    filter?: string;
}
