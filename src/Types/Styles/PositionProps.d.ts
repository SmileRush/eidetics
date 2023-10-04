export interface PositionProps {
    /**
     * 'position' property sets the position of an element. This property is same as CSS's `position` property.
     * 'position' 속성은 요소의 위치를 설정합니다. 이 속성은 CSS의 `position` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the position of an element (요소의 위치 설정)
     *
     * ```typescript
     * <EideticsElement position="fixed" />
     * ```
     */
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    /**
     * 'pos' property sets the position of an element. This property is same as CSS's `position` property.
     * 'pos' 속성은 요소의 위치를 설정합니다. 이 속성은 CSS의 `position` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the position of an element (요소의 위치 설정)
     *
     * ```typescript
     * <EideticsElement pos="fixed" />
     * ```
     */
    pos?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    /**
     * 'top' property sets the top position. This property is same as CSS's `top` property.
     * 'top' 속성은 상단 위치를 설정합니다. 이 속성은 CSS의 `top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top position (상단 위치 설정)
     *
     * ```typescript
     * <EideticsElement top="10px" />
     * <EideticsElement top={10} />
     * <EideticsElement top="10%" />
     * ```
     * ---
     * > ### Note (참고)
     *
     * - This property is only effective when the parent's `position` property is not `static`. If the parent's `position` is not declared, the default value is `static`, so it refers to the `position` property of the closest parent.
     * - 부모의 `position` 속성이 `static`이 아닌 경우에만 작동합니다. 부모의 `position`이 선언되지 않았다면, 기본값은 `static`이므로, `position` 속성이 작성된 가장 가까운 부모의 `position` 속성을 참고합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `relative`.
     * - 부모의 'position' 속성이 'relative'인 경우, 부모의 상단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `absolute`.
     * - 부모의 'position' 속성이 'absolute'인 경우, 가까운 부모의 상단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `fixed`.
     * - 부모의 'position' 속성이 'fixed'인 경우, 뷰포트의 상단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `sticky`.
     * - 부모의 'position' 속성이 'sticky'인 경우, 뷰포트의 상단에서부터의 거리를 의미합니다.
     */
    top?: string | number;
    /**
     * 'right' property sets the right position. This property is same as CSS's `right` property.
     * 'right' 속성은 우측 위치를 설정합니다. 이 속성은 CSS의 `right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right position (우측 위치 설정)
     *
     * ```typescript
     * <EideticsElement right="10px" />
     * <EideticsElement right={10} />
     * ```
     * ---
     * > ### Note (참고)
     *
     * - This property is only effective when the parent's `position` property is not `static`. If the parent's `position` is not declared, the default value is `static`, so it refers to the `position` property of the closest parent.
     * - 부모의 `position` 속성이 `static`이 아닌 경우에만 작동합니다. 부모의 `position`이 선언되지 않았다면, 기본값은 `static`이므로, `position` 속성이 작성된 가장 가까운 부모의 `position` 속성을 참고합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `relative`.
     * - 부모의 'position' 속성이 'relative'인 경우, 부모의 우측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `absolute`.
     * - 부모의 'position' 속성이 'absolute'인 경우, 가까운 부모의 우측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `fixed`.
     * - 부모의 'position' 속성이 'fixed'인 경우, 뷰포트의 우측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `sticky`.
     * - 부모의 'position' 속성이 'sticky'인 경우, 뷰포트의 우측에서부터의 거리를 의미합니다.
     */
    right?: string | number;
    /**
     * 'bottom' property sets the bottom position. This property is same as CSS's `bottom` property.
     * 'bottom' 속성은 하단 위치를 설정합니다. 이 속성은 CSS의 `bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom position (하단 위치 설정)
     *
     * ```typescript
     * <EideticsElement bottom="10px" />
     * <EideticsElement bottom={10} />
     * ```
     * ---
     * > ### Note (참고)
     *
     * - This property is only effective when the parent's `position` property is not `static`. If the parent's `position` is not declared, the default value is `static`, so it refers to the `position` property of the closest parent.
     * - 부모의 `position` 속성이 `static`이 아닌 경우에만 작동합니다. 부모의 `position`이 선언되지 않았다면, 기본값은 `static`이므로, `position` 속성이 작성된 가장 가까운 부모의 `position` 속성을 참고합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `relative`.
     * - 부모의 'position' 속성이 'relative'인 경우, 부모의 하단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `absolute`.
     * - 부모의 'position' 속성이 'absolute'인 경우, 가까운 부모의 하단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `fixed`.
     * - 부모의 'position' 속성이 'fixed'인 경우, 뷰포트의 하단에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `sticky`.
     * - 부모의 'position' 속성이 'sticky'인 경우, 뷰포트의 하단에서부터의 거리를 의미합니다.
     */
    bottom?: string | number;
    /**
     * 'left' property sets the left position. This property is same as CSS's `left` property.
     * 'left' 속성은 좌측 위치를 설정합니다. 이 속성은 CSS의 `left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left position (좌측 위치 설정)
     *
     * ```typescript
     * <EideticsElement left="10px" />
     * <EideticsElement left={10} />
     * ```
     * ---
     * > ### Note (참고)
     *
     * - This property is only effective when the parent's `position` property is not `static`. If the parent's `position` is not declared, the default value is `static`, so it refers to the `position` property of the closest parent.
     * - 부모의 `position` 속성이 `static`이 아닌 경우에만 작동합니다. 부모의 `position`이 선언되지 않았다면, 기본값은 `static`이므로, `position` 속성이 작성된 가장 가까운 부모의 `position` 속성을 참고합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `relative`.
     * - 부모의 'position' 속성이 'relative'인 경우, 부모의 좌측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the parent's top position when the parent's `position` property is `absolute`.
     * - 부모의 'position' 속성이 'absolute'인 경우, 가까운 부모의 좌측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `fixed`.
     * - 부모의 'position' 속성이 'fixed'인 경우, 뷰포트의 좌측에서부터의 거리를 의미합니다.
     *
     * - This property is relative to the viewport's top position when the parent's `position` property is `sticky`.
     * - 부모의 'position' 속성이 'sticky'인 경우, 뷰포트의 좌측에서부터의 거리를 의미합니다.
     */
    left?: string | number;
    /**
     * 'zIndex' property sets the stack order of an element. This property is same as CSS's `z-index` property.
     * 'zIndex' 속성은 요소의 쌓임 순서를 설정합니다. 이 속성은 CSS의 `z-index` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the stack order of an element (요소의 쌓임 순서 설정)
     *
     * ```typescript
     * <EideticsElement zIndex="10" />
     * <EideticsElement zIndex={10} />
     * ```
     */
    zIndex?: string | number;
    /**
     * 'clip' property sets the clipping region. This property is same as CSS's `clip` property.
     * 'clip' 속성은 클리핑 영역을 설정합니다. 이 속성은 CSS의 `clip` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the clipping region (클리핑 영역 설정)
     *
     * ```typescript
     * <EideticsElement clip="rect(0 50px 50px 0)" />
     * ```
     */
    clip?: string;
    /**
     * 'clipPath' property sets the clipping region. This property is same as CSS's `clip-path` property.
     * 'clipPath' 속성은 클리핑 영역을 설정합니다. 이 속성은 CSS의 `clip-path` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the clipping region (클리핑 영역 설정)
     *
     * ```typescript
     * <EideticsElement clipPath="circle(50%)" />
     * ```
     */
    clipPath?: string;
}
