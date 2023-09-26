export interface FilterEffectsProps {
    /**
     * 설정한 문자열을 그대로 'filter' CSS 속성에 적용합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 흐림과 밝기 필터 적용
     * <div filter="blur(5px) brightness(0.5)" />
     * ```
     */
    filter?: string;
    /**
     * 'blur'는 흐림 효과를 적용합니다. 단위(px, em 등)를 포함한 문자열을 사용하세요.
     *
     * > ### 예시
     *
     * ```typescript
     * // 흐림 효과 적용
     * <div blur="5px" />
     * ```
     */
    blur?: string;
    /**
     * 'brightness'는 요소의 밝기를 조절합니다. 일반적으로 0 ~ 1 사이의 값을 사용하나, 1 이상도 가능합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 밝기를 절반으로 조절
     * <div brightness="0.5" />
     * ```
     */
    brightness?: string;
    /**
     * 'contrast'는 요소의 대비를 조절합니다. 일반적으로 0 ~ 1 사이의 값을 사용하나, 1 이상도 가능합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 대비를 두 배로 조절
     * <div contrast="2" />
     * ```
     */
    contrast?: string;
    /**
     * 'hueRotate'는 요소의 색상을 회전시킵니다. 단위(deg)를 포함한 문자열을 사용하세요.
     *
     * > ### 예시
     *
     * ```typescript
     * // 색상을 45도 회전
     * <div hueRotate="45deg" />
     * ```
     */
    hueRotate?: string;
    /**
     * 'invert'는 요소의 색상을 반전시킵니다. 0 ~ 1 사이의 값을 사용하세요.
     *
     * > ### 예시
     *
     * ```typescript
     * // 색상을 완전히 반전
     * <div invert="1" />
     * ```
     */
    invert?: string;
    /**
     * 'saturate'는 요소의 채도를 조절합니다. 일반적으로 0 ~ 1 사이의 값을 사용하나, 1 이상도 가능합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 채도를 두 배로 조절
     * <div saturate="2" />
     * ```
     */
    saturate?: string;
    /**
     * 'dropShadow'는 요소에 그림자를 추가합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 그림자 추가
     * <div dropShadow="2px 4px 6px black" />
     * ```
     */
    dropShadow?: string;
    /**
     * 'backdropFilter' 속성은 요소의 배경에 필터 효과를 적용합니다.
     * 값은 `blur` | `brightness` | `contrast` | `grayscale` | `hue-rotate` | `invert` | `opacity` | `saturate` | `sepia` 중 하나이다.
    *
    * > ### 예시
    *
    * ```typescript
    * // 배경에 흐림 효과 적용
    * <div backdropFilter="blur(5px)" />
    * ```
    *
    * ```typescript
    * // 요소의 배경에 블러 효과 적용
    * <div backdropFilter="blur" />
    * ```
    */
    backdropFilter?: `blur` | `brightness` | `contrast` | `grayscale` | `hue-rotate` | `invert` | `opacity` | `saturate` | `sepia`;
    /**
     * 'backdropBlur'는 배경에 흐림 효과를 적용합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경에 흐림 효과 적용
     * <div backdropBlur="5px" />
     * ```
     */
    backdropBlur?: string;
    /**
     * 'backdropBrightness'는 배경의 밝기를 조절합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경의 밝기를 절반으로 조절
     * <div backdropBrightness="0.5" />
     * ```
     */
    backdropBrightness?: string;
    /**
     * 'backdropContrast'는 배경의 대비를 조절합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경의 대비를 두 배로 조절
     * <div backdropContrast="2" />
     * ```
     */
    backdropContrast?: string;
    /**
     * 'backdropHueRotate'는 배경의 색상을 회전시킵니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경의 색상을 45도 회전
     * <div backdropHueRotate="45deg" />
     * ```
     */
    backdropHueRotate?: string;
    /**
     * 'backdropInvert'는 배경의 색상을 반전시킵니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경의 색상을 완전히 반전
     * <div backdropInvert="1" />
     * ```
     */
    backdropInvert?: string;
    /**
     * 'backdropSaturate'는 배경의 채도를 조절합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 배경의 채도를 두 배로 조절
     * <div backdropSaturate="2" />
     * ```
     */
    backdropSaturate?: string;
}
