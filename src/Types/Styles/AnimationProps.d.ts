type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
type AnimationPlayState = 'paused' | 'running';
type AnimationTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end';
export interface AnimationProps {
    /**
     * 'animation' property sets animation on element. This property is same as CSS's `animation` property.
     * 'animation'은 요소에 애니메이션을 설정합니다. 이 속성은 CSS의 `animation` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set animation on element (요소에 애니메이션 설정)
     *
     * ```typescript
     * <Div animation="bounce 2s infinite" />
     * ```
     */
    animation?: string;
    /**
     * 'animationDelay' sets the delay for the animation. This property is same as CSS's `animation-delay` property.
     * 'animationDelay'는 요소의 애니메이션의 지연 시간을 설정합니다. 이 속성은 CSS의 `animation-delay` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the delay for the animation (요소의 애니메이션의 지연 시간을 설정)
     *
     * ```typescript
     * <Div animationDelay="2s" />
     * <Div animationDelay={2000} /> // 2000ms
     * ```
     */
    animationDelay?: string | number;
    /**
     * 'animationName' sets the name of the animation. This property is same as CSS's `animation-name` property.
     * 'animationName'은 요소의 애니메이션의 이름을 설정합니다. 이 속성은 CSS의 `animation-name` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the name of the animation (요소의 애니메이션의 이름을 설정)
     *
     * ```typescript
     * <Div animationName="bounce" />
     * ```
     */
    animationName?: string;
    /**
     * 'animationDuration' sets the duration for the animation. This property is same as CSS's `animation-duration` property.
     * 'animationDuration'는 요소의 애니메이션의 지속 시간을 설정합니다. 이 속성은 CSS의 `animation-duration` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the duration for the animation (요소의 애니메이션의 지속 시간을 설정)
     *
     * ```typescript
     * <Div animationDuration="2s" />
     * <Div animationDuration={2000} /> // 2000ms
     * ```
     */
    animationDuration?: string | number;
    /**
     * 'animationFillMode' sets the fill mode for the animation. This property is same as CSS's `animation-fill-mode` property.
     * 'animationFillMode'는 요소의 애니메이션의 채우기 모드를 설정합니다. 이 속성은 CSS의 `animation-fill-mode` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the fill mode for the animation (요소의 애니메이션의 채우기 모드를 설정)
     *
     * ```typescript
     * <Div animationFillMode="forwards" />
     * ```
     */
    animationFillMode?: string;
    /**
     * 'animationIterationCount' sets the iteration count for the animation. This property is same as CSS's `animation-iteration-count` property.
     * 'animationIterationCount'는 요소의 애니메이션의 반복 횟수를 설정합니다. 이 속성은 CSS의 `animation-iteration-count` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the iteration count for the animation (요소의 애니메이션의 반복 횟수를 설정)
     *
     * ```typescript
     * <Div animationIterationCount={3} />
     * <Div animationIterationCount="infinite" />
     * ```
     */
    animationIterationCount?: string | number;
    /**
     * 'animationDirection' sets the direction for the animation. This property is same as CSS's `animation-direction` property.
     * 'animationDirection'는 요소의 애니메이션의 방향을 설정합니다. 이 속성은 CSS의 `animation-direction` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the direction for the animation (요소의 애니메이션의 방향을 설정)
     *
     * ```typescript
     * <Div animationDirection="reverse" />
     * ```
     */
    animationDirection?: AnimationDirection;
    /**
     * 'animationPlayState' sets the play state for the animation. This property is same as CSS's `animation-play-state` property.
     * 'animationPlayState'는 요소의 애니메이션의 재생 상태를 설정합니다. 이 속성은 CSS의 `animation-play-state` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the play state for the animation (요소의 애니메이션의 재생 상태를 설정)
     *
     * ```typescript
     * <Div animationPlayState="paused" />
     * ```
     */
    animationPlayState?: AnimationPlayState;
    /**
     * 'animationTimingFunction' sets the timing function for the animation. This property is same as CSS's `animation-timing-function` property.
     * 'animationTimingFunction'는 요소의 애니메이션의 타이밍 함수를 설정합니다. 이 속성은 CSS의 `animation-timing-function` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the timing function for the animation (요소의 애니메이션의 타이밍 함수를 설정)
     *
     * ```typescript
     * <Div animationTimingFunction="ease-in" />
     * ```
     */
    animationTimingFunction?: AnimationTimingFunction;
}
export {};
