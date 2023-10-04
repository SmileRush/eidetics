export interface TranslateProps extends TransformProps, TransitionProps, ScaleProps, RotateProps, SkewProps, PerspectiveProps {
    /**
     * 'translate' moves the element. This property is same as CSS's `translate` property.
     * 'translate'은 요소를 이동시킵니다. 이 속성은 CSS의 `translate` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Move the element 10px along the x-axis and 20px along the y-axis (x축으로 10px, y축으로 20px 이동)
     *
     * ```typescript
     * <Div translate="10px 20px" />
     * ```
     */
    translate?: string;
    /**
     * 'translateX' moves the element along the x-axis. This property is same as CSS's `translateX` property.
     * 'translateX'는 요소를 x축으로 이동시킵니다. 이 속성은 CSS의 `translateX` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Move the element 10px along the x-axis (x축으로 10px 이동)
     *
     * ```typescript
     * <Div translateX="10px" />
     * <Div translateX={10} />
     * ```
     */
    translateX?: string | number;
    /**
     * 'translateY' moves the element along the y-axis. This property is same as CSS's `translateY` property.
     * 'translateY'는 요소를 y축으로 이동시킵니다. 이 속성은 CSS의 `translateY` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Move the element 20px along the y-axis (y축으로 20px 이동)
     *
     * ```typescript
     * <Div translateY="20px" />
     * <Div translateY={20} />
     * ```
     */
    translateY?: string | number;
    /**
     * 'translateZ' moves the element along the z-axis. This property is same as CSS's `translateZ` property.
     * 'translateZ'는 요소를 z축으로 이동시킵니다. 이 속성은 CSS의 `translateZ` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Move the element 30px along the z-axis (z축으로 30px 이동)
     *
     * ```typescript
     * <Div translateZ="30px" />
     * <Div translateZ={30} />
     * ```
     */
    translateZ?: string | number;
}
interface TransformProps {
    /**
     * 'transform' applies a 2D or 3D transformation to an element. This property is same as CSS's `transform` property.
     * 'transform'은 2D 또는 3D 변환을 요소에 적용합니다. 이 속성은 CSS의 `transform` 속성과 같습니다.
     * ---
     *  > ### Example (예시)
     * Rotate the element 45 degrees (요소를 45도 회전)
     *
     * ```typescript
     * <Div transform="rotate(45deg)" />
     * ```
     */
    transform?: string;
    /**
     * 'transformOrigin' sets the origin for an element's transformations. This property is same as CSS's `transform-origin` property.
     * 'transformOrigin'은 요소의 변환 기준점을 설정합니다. 이 속성은 CSS의 `transform-origin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the origin for an element's transformations to the left top (요소의 변환 기준점을 왼쪽 위로 설정)
     *
     * ```typescript
     * <Div transformOrigin="left top" />
     * ```
     */
    transformOrigin?: string;
    /**
     * 'transformStyle' sets whether an element's children are positioned in the 3D space. This property is same as CSS's `transform-style` property.
     * 'transformStyle'은 요소의 자식 요소에 대한 변환을 설정합니다. 이 속성은 CSS의 `transform-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set whether an element's children are positioned in the 3D space (요소의 자식 요소에 대한 변환을 설정)
     *
     * ```typescript
     * <Div transformStyle="preserve-3d" />
     * ```
     */
    transformStyle?: string;
    /**
     * 'transformBox' sets the layout box of an element's transformations. This property is same as CSS's `transform-box` property.
     * 'transformBox'는 요소의 변환 박스를 설정합니다. 이 속성은 CSS의 `transform-box` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the layout box of an element's transformations to fill-box (요소의 변환 박스를 fill-box로 설정)
     *
     * ```typescript
     * <Div transformBox="fill-box" />
     * ```
     */
    transformBox?: string;
}
interface TransitionProps {
    /**
     * 'transition' sets the transition effects for an element. This property is same as CSS's `transition` property.
     * 'transition'은 요소의 전환 효과를 설정합니다. 이 속성은 CSS의 `transition` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the transition effects for an element (요소의 전환 효과를 설정)
     *
     * ```typescript
     * <Div transition="width 2s" />
     * ```
     */
    transition?: string;
    /**
     * 'transitionDelay' sets the delay for the transition effect. This property is same as CSS's `transition-delay` property.
     * 'transitionDelay'는 요소의 전환 효과의 지연 시간을 설정합니다. 이 속성은 CSS의 `transition-delay` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the delay for the transition effect (요소의 전환 효과의 지연 시간을 설정)
     *
     * ```typescript
     * <Div transitionDelay="2s" />
     * <Div transitionDelay={2000} /> // 2000ms
     * ```
     */
    transitionDelay?: string | number;
    /**
     * 'transitionDuration' sets the duration for the transition effect. This property is same as CSS's `transition-duration` property.
     * 'transitionDuration'는 요소의 전환 효과의 지속 시간을 설정합니다. 이 속성은 CSS의 `transition-duration` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the duration for the transition effect (요소의 전환 효과의 지속 시간을 설정)
     *
     * ```typescript
     * <Div transitionDuration="2s" />
     * <Div transitionDuration={2000} /> // 2000ms
     * ```
     */
    transitionDuration?: string | number;
    /**
     * 'transitionProperty' sets the properties for the transition effect. This property is same as CSS's `transition-property` property.
     * 'transitionProperty'는 요소의 전환 효과의 속성을 설정합니다. 이 속성은 CSS의 `transition-property` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the properties for the transition effect (요소의 전환 효과의 속성을 설정)
     *
     * ```typescript
     * <Div transitionProperty="width" />
     * ```
     */
    transitionProperty?: string;
    /**
     * 'transitionTimingFunction' sets the timing function for the transition effect. This property is same as CSS's `transition-timing-function` property.
     * 'transitionTimingFunction'은 요소의 전환 효과의 타이밍 함수를 설정합니다. 이 속성은 CSS의 `transition-timing-function` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the timing function for the transition effect (요소의 전환 효과의 타이밍 함수를 설정)
     *
     * ```typescript
     * <Div transitionTimingFunction="ease" />
     * ```
     */
    transitionTimingFunction?: string;
}
interface ScaleProps {
    /**
     * 'scale' scales the element. This property is same as CSS's `scale` property.
     * 'scale'은 요소의 크기를 조정합니다. 이 속성은 CSS의 `scale` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Scale the element to 2 times (요소의 크기를 2배로 조정)
     *
     * ```typescript
     * <Div scale="2" />
     * <Div scale={2} />
     * ```
     */
    scale?: string | number;
    /**
     * 'scaleX' scales the element along the x-axis.
     * 'scaleX'는 요소의 x축으로 크기를 조정합니다.
     * ---
     * > ### Example (예시)
     * Scale the element along the x-axis to 2 times (x축으로 2배로 조정)
     *
     * ```typescript
     * <Div scaleX="2" />
     * <Div scaleX={2} />
     * ```
     */
    scaleX?: string | number;
    /**
     * 'scaleY' scales the element along the y-axis.
     * 'scaleY'는 요소의 y축으로 크기를 조정합니다.
     * ---
     * > ### Example (예시)
     * Scale the element along the y-axis to 2 times (y축으로 2배로 조정)
     *
     * ```typescript
     * <Div scaleY="2" />
     * <Div scaleY={2} />
     * ```
     */
    scaleY?: string | number;
    /**
     * 'scaleZ' scales the element along the z-axis.
     * 'scaleZ'는 요소의 z축으로 크기를 조정합니다.
     * ---
     * > ### Example (예시)
     * Scale the element along the z-axis to 2 times (z축으로 2배로 조정)
     *
     * ```typescript
     * <Div scaleZ="2" />
     * <Div scaleZ={2} />
     * ```
     */
    scaleZ?: string | number;
}
interface RotateProps {
    /**
     * 'rotate' rotates the element. This property is same as CSS's `rotate` property.
     * 'rotate'는 요소를 회전시킵니다. 이 속성은 CSS의 `rotate` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees (요소를 45도 회전)
     *
     * ```typescript
     * <Div rotate="45deg" />
     * <Div rotate={45} />
     * ```
     */
    rotate?: string | number;
    /**
     * 'rotateX' rotates the element along the x-axis.
     * 'rotateX'는 요소를 x축으로 회전시킵니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the x-axis (x축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateX="45deg" />
     * <Div rotateX={45} />
     * ```
     */
    rotateX?: string | number;
    /**
     * 'rotateY' rotates the element along the y-axis.
     * 'rotateY'는 요소를 y축으로 회전시킵니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the y-axis (y축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateY="45deg" />
     * <Div rotateY={45} />
     * ```
     */
    rotateY?: string | number;
    /**
     * 'rotateZ' rotates the element along the z-axis.
     * 'rotateZ'는 요소를 z축으로 회전시킵니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the z-axis (z축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateZ="45deg" />
     * <Div rotateZ={45} />
     * ```
     */
    rotateZ?: string | number;
}
interface SkewProps {
    /**
     * 'skew' skews the element.
     * 'skew'는 요소를 비틀어 기울입니다.
     * ---
     * > ### Example (예시)
     * Skew the element 45 degrees (요소를 45도 비틀어 기울임)
     *
     * ```typescript
     * <Div skew="45deg" />
     * <Div skew={45} />
     * ```
     */
    skew?: string | number;
    /**
     * 'skewX' skews the element along the x-axis.
     * 'skewX'는 요소를 x축으로 비틀어 기울입니다.
     * ---
     * > ### Example (예시)
     * Skew the element 45 degrees along the x-axis (x축으로 45도 비틀어 기울임)
     *
     * ```typescript
     * <Div skewX="45deg" />
     * <Div skewX={45} />
     * ```
     */
    skewX?: string | number;
    /**
     * 'skewY' skews the element along the y-axis.
     * 'skewY'는 요소를 y축으로 비틀어 기울입니다.
     * ---
     * > ### Example (예시)
     * Skew the element 45 degrees along the y-axis (y축으로 45도 비틀어 기울임)
     *
     * ```typescript
     * <Div skewY="45deg" />
     * <Div skewY={45} />
     * ```
     */
    skewY?: string | number;
    /**
     * 'skewZ' skews the element along the z-axis.
     * 'skewZ'는 요소를 z축으로 비틀어 기울입니다.
     * ---
     * > ### Example (예시)
     * Skew the element 45 degrees along the z-axis (z축으로 45도 비틀어 기울임)
     *
     * ```typescript
     * <Div skewZ="45deg" />
     * <Div skewZ={45} />
     * ```
     */
    skewZ?: string | number;
}
interface PerspectiveProps {
    /**
     * 'perspective' sets the perspective for an element. This property is same as CSS's `perspective` property.
     * 'perspective'는 요소의 원근 거리를 설정합니다. 이 속성은 CSS의 `perspective` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the perspective for an element (요소의 원근 거리를 설정)
     *
     * ```typescript
     * <Div perspective="100px" />
     * ```
     */
    perspective?: string;
    /**
     * 'perspectiveOrigin' sets the origin for an element's perspective. This property is same as CSS's `perspective-origin` property.
     * 'perspectiveOrigin'은 요소의 원근 거리의 기준점을 설정합니다. 이 속성은 CSS의 `perspective-origin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the origin for an element's perspective to the left top (요소의 원근 거리의 기준점을 왼쪽 위로 설정)
     *
     * ```typescript
     * <Div perspectiveOrigin="left top" />
     * ```
     */
    perspectiveOrigin?: string;
    /**
     * 'backfaceVisibility' sets whether or not the back face of an element is visible. This property is same as CSS's `backface-visibility` property.
     * 'backfaceVisibility'는 요소의 뒷면의 가시성을 설정합니다. 이 속성은 CSS의 `backface-visibility` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set whether or not the back face of an element is visible (요소의 뒷면의 가시성을 설정)
     *
     * ```typescript
     * <Div backfaceVisibility="hidden" />
     * ```
     */
    backfaceVisibility?: string;
}
export {};
