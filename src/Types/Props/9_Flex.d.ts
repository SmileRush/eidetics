export interface FlexProps {
    /**
     * 'alignItems' 속성은 자식 요소들의 세로 축에 대한 정렬을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 세로 축 중앙 정렬
     * <div alignItems="center" />
     * ```
     */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /**
     * 'alignContent' 속성은 여러 행/열의 정렬을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 내용을 세로 축의 중앙에 정렬
     * <div alignContent="center" />
     * ```
     */
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    /**
     * 'justifyContent' 속성은 자식 요소들의 가로 축에 대한 정렬을 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 가로 축 중앙 정렬
     * <div justifyContent="center" />
     * ```
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    /**
     * 'flexWrap' 속성은 자식 요소가 부모 요소를 넘어갈 때 어떻게 처리할지 설정합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 요소가 넘치면 다음 줄로 이동
     * <div flexWrap="wrap" />
     * ```
     */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
