export interface MarginProps {
    /**
     * 'm' property sets margin for all sides. This property is same as CSS's `margin` property.
     * 'm' 속성은 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for all sides (모든 측면에 마진 설정)
     *
     * ```typescript
     * <EideticsElement m="10px" />
     * <EideticsElement m={10} />
     * ```
     */
    m?: string | number;
    /**
     * 'margin' property sets margin for all sides. This property is same as CSS's `margin` property.
     * 'margin' 속성은 모든 측면에 마진을 설정합니다. 이 속성은 CSS의 `margin` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for all sides (모든 측면에 마진 설정)
     *
     * ```typescript
     * <EideticsElement margin="10px" />
     * <EideticsElement margin={10} />
     * ```
     */
    margin?: string | number;
    /**
     * 'mt' property sets the top margin. This property is same as CSS's `margin-top` property.
     * 'mt' 속성은 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top margin (상단 마진 설정)
     *
     * ```typescript
     * <EideticsElement mt="10px" />
     * <EideticsElement mt={10} />
     * ```
     */
    mt?: string | number;
    /**
     * 'marginTop' property sets the top margin. This property is same as CSS's `margin-top` property.
     * 'marginTop' 속성은 상단 마진을 설정합니다. 이 속성은 CSS의 `margin-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top margin (상단 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginTop="10px" />
     * <EideticsElement marginTop={10} />
     * ```
     */
    marginTop?: string | number;
    /**
     * 'mr' property sets the right margin. This property is same as CSS's `margin-right` property.
     * 'mr' 속성은 우측 마진을 설정합니다. 이 속성은 CSS의 `margin-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right margin (우측 마진 설정)
     *
     * ```typescript
     * <EideticsElement mr="10px" />
     * <EideticsElement mr={10} />
     * ```
     */
    mr?: string | number;
    /**
     * 'marginRight' property sets the right margin. This property is same as CSS's `margin-right` property.
     * 'marginRight' 속성은 우측 마진을 설정합니다. 이 속성은 CSS의 `margin-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right margin (우측 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginRight="10px" />
     * <EideticsElement marginRight={10} />
     * ```
     */
    marginRight?: string | number;
    /**
     * 'mb' property sets the bottom margin. This property is same as CSS's `margin-bottom` property.
     * 'mb' 속성은 하단 마진을 설정합니다. 이 속성은 CSS의 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom margin (하단 마진 설정)
     *
     * ```typescript
     * <EideticsElement mb="10px" />
     * <EideticsElement mb={10} />
     * ```
     */
    mb?: string | number;
    /**
     * 'marginBottom' property sets the bottom margin. This property is same as CSS's `margin-bottom` property.
     * 'marginBottom' 속성은 하단 마진을 설정합니다. 이 속성은 CSS의 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom margin (하단 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginBottom="10px" />
     * <EideticsElement marginBottom={10} />
     * ```
     */
    marginBottom?: string | number;
    /**
     * 'ml' property sets the left margin. This property is same as CSS's `margin-left` property.
     * 'ml' 속성은 좌측 마진을 설정합니다. 이 속성은 CSS의 `margin-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left margin (좌측 마진 설정)
     *
     * ```typescript
     * <EideticsElement ml="10px" />
     * <EideticsElement ml={10} />
     * ```
     */
    ml?: string | number;
    /**
     * 'marginLeft' property sets the left margin. This property is same as CSS's `margin-left` property.
     * 'marginLeft' 속성은 좌측 마진을 설정합니다. 이 속성은 CSS의 `margin-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left margin (좌측 마진 설정)
     *
     * ```typescript
     * <EideticsElement marginLeft="10px" />
     * <EideticsElement marginLeft={10} />
     * ```
     */
    marginLeft?: string | number;
    /**
     * 'my' property sets margin for the top and bottom sides. Corresponds to the CSS `margin-top` and `margin-bottom` properties.
     * 'my' 속성은 상하측면에 마진을 설정합니다. 이 속성은 CSS의 `margin-top`과 `margin-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set margin for the top and bottom sides (상단, 하단에 마진 설정)
     *
     * ```typescript
     * <EideticsElement my="10px" />
     * <EideticsElement my={10} />
     * ```
     */
    my?: string | number;
    /**
     * Sets margin for the left and right sides. Corresponds to the CSS `margin-inline` property.
     * 좌우측면에 마진을 설정합니다. 이 속성은 CSS의 `margin-inline` 속성과 같습니다.
     *---
     * > ### Example (예시)
     * Set margin for the left and right sides (좌측, 우측에 마진 설정)
     *
     * ```typescript
     * <EideticsElement mx="10px" />
     * <EideticsElement mx={10} />
     * ```
     */
    mx?: string | number;
}
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
export interface DisplayProps extends FlexProps, GridProps, OverflowProps {
    /**
     * 'visibility' property sets whether an element is visible. This property is same as CSS's `visibility` property.
     * 'visibility' 속성은 요소의 가시성을 설정합니다. 이 속성은 CSS의 `visibility` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set whether an element is visible (요소의 가시성 설정)
     *
     * ```typescript
     * <Div visibility="hidden" />
     * ```
     */
    visibility?: 'hidden' | 'visible' | 'collapse';
    /**
     * 'opacity' property sets the opacity level for an element. This property is same as CSS's `opacity` property.
     * 'opacity' 속성은 요소의 투명도를 설정합니다. 이 속성은 CSS의 `opacity` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the opacity level for an element (요소의 투명도 설정)
     *
     * ```typescript
     * <Div opacity="0.5" />
     * ```
     */
    opacity?: string | number;
    /**
     * 'display' property sets how an element is displayed. This property is same as CSS's `display` property.
     * 'display' 속성은 요소를 어떻게 표시할지 설정합니다. 이 속성은 CSS의 `display` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set how an element is displayed (요소를 표시방식을 설정)
     *
     * ```typescript
     * <EideticsElement display="flex" />
     * ```
     */
    display?: 'inline' | 'block' | 'flex' | 'grid' | 'inline-block' | 'none';
}
interface FlexProps {
    /**
     * 'flexDirection' property sets the direction of the main axis. This property is same as CSS's `flex-direction` property.
     * 'flexDirection' 속성은 주축의 방향을 설정합니다. 이 속성은 CSS의 `flex-direction` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the direction of the main axis (주축의 방향 설정)
     *
     * ```typescript
     * <Div flexDirection="row" />
     * ```
     */
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /**
     * 'alignItems' property sets the default alignment for items inside the 'Flex' container. This property is same as CSS's `align-items` property.
     * 'alignItems' 속성은 'Flex' 컨테이너 내부의 아이템들의 정렬을 설정합니다. 이 속성은 CSS의 `align-items` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the default alignment for items inside the 'Flex' container ('Flex' 컨테이너 내부의 아이템들의 정렬 설정)
     *
     * ```typescript
     * <Div alignItems="center" />
     * ```
     */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /**
     * 'alignContent' property sets the alignment for items inside the 'Flex' container when there is extra space in the cross-axis. This property is same as CSS's `align-content` property.
     * 'alignContent' 속성은 교차축에 여분의 공간이 있는 경우 'Flex' 컨테이너 내부의 아이템들의 정렬을 설정합니다. 이 속성은 CSS의 `align-content` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the alignment for items inside the 'Flex' container when there is extra space in the cross-axis ('Flex' 컨테이너 내부의 아이템들의 정렬 설정)
     *
     * ```typescript
     * <Div alignContent="center" />
     * ```
     */
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    /**
     * 'alignSelf' property sets the alignment for an item inside the 'Flex' container. This property is same as CSS's `align-self` property.
     * 'alignSelf' 속성은 'Flex' 컨테이너 내부의 아이템의 정렬을 설정합니다. 이 속성은 CSS의 `align-self` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the alignment for an item inside the 'Flex' container ('Flex' 컨테이너 내부의 아이템의 정렬 설정)
     *
     * ```typescript
     * <Div alignSelf="center" />
     * ```
     */
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /**
     * 'justifyContent' property sets the alignment for items inside the 'Flex' container along the main axis. This property is same as CSS's `justify-content` property.
     * 'justifyContent' 속성은 주축을 따라 'Flex' 컨테이너 내부의 아이템들의 정렬을 설정합니다. 이 속성은 CSS의 `justify-content` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the alignment for items inside the 'Flex' container along the main axis ('Flex' 컨테이너 내부의 아이템들의 정렬 설정)
     *
     * ```typescript
     * <Div justifyContent="center" />
     * ```
     */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    /**
     * 'flexWrap' property sets whether 'Flex' items are forced into a single line or can be wrapped onto multiple lines. This property is same as CSS's `flex-wrap` property.
     * 'flexWrap' 속성은 'Flex' item이 한 줄에 표시되는지 여러 줄에 걸쳐 표시되는지를 설정합니다. 이 속성은 CSS의 `flex-wrap` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set whether 'Flex' items are forced into a single line or can be wrapped onto multiple lines ('Flex' item이 한 줄에 표시되는지 여러 줄에 걸쳐 표시되는지 설정)
     *
     * ```typescript
     * <Div flexWrap="wrap" />
     * ```
     */
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /**
     * 'flexGrow' property sets the flex grow factor of a 'Flex' item. This property is same as CSS's `flex-grow` property.
     * 'flexGrow' 속성은 'Flex' item의 증가 너비 비율을 설정합니다. 이 속성은 CSS의 `flex-grow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the flex grow factor of a 'Flex' item ('Flex' item의 증가 너비 비율 설정)
     *
     * ```typescript
     * <Div flexGrow={2} />
     * ```
     */
    flexGrow?: number;
    /**
     * 'flexShrink' property sets the flex shrink factor of a 'Flex' item. This property is same as CSS's `flex-shrink` property.
     * 'flexShrink' 속성은 'Flex' item의 감소 너비 비율을 설정합니다. 이 속성은 CSS의 `flex-shrink` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the flex shrink factor of a 'Flex' item ('Flex' item의 감소 너비 비율 설정)
     *
     * ```typescript
     * <Div flexShrink={2} />
     * ```
     */
    flexShrink?: number;
    /**
     * 'flexBasis' property sets the initial main size of a 'Flex' item. This property is same as CSS's `flex-basis` property.
     * 'flexBasis' 속성은 'Flex' item의 초기 주 크기를 설정합니다. 이 속성은 CSS의 `flex-basis` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the initial main size of a 'Flex' item ('Flex' item의 초기 주 크기 설정)
     *
     * ```typescript
     * <Div flexBasis="100px" />
     * <Div flexBasis={100} />
     * ```
     */
    flexBasis?: string | number;
}
interface GridProps {
    /**
     * 'grid' property sets the 'Grid' container properties. This property is same as CSS's `grid` property.
     * 'grid' 속성은 'Grid' 컨테이너의 속성을 설정합니다. 이 속성은 CSS의 `grid` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the 'Grid' container properties ('Grid' 컨테이너의 속성 설정)
     *
     * ```typescript
     * <Div grid="auto / 1fr 1fr" />
     * ```
     */
    grid?: string;
    /**
     * 'gridTemplate' property sets the number of columns and rows in a 'Grid' layout. This property is same as CSS's `grid-template` property.
     * 'gridTemplate' 속성은 'Grid' 레이아웃의 열 수와 행 수를 설정합니다. 이 속성은 CSS의 `grid-template` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the number of columns and rows in a grid layout ('Grid' 레이아웃의 열 수와 행 수 설정)
     *
     * ```typescript
     * <Div gridTemplate="repeat(2, 1fr) / repeat(3, 1fr)" />
     * ```
     */
    gridTemplate?: string;
    /**
     * 'gridTemplateColumns' property sets the number of columns in a 'Grid' layout. This property is same as CSS's `grid-template-columns` property.
     * 'gridTemplateColumns' 속성은 'Grid' 레이아웃의 열 수를 설정합니다. 이 속성은 CSS의 `grid-template-columns` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the number of columns in a grid layout ('Grid' 레이아웃의 열 수 설정)
     *
     * ```typescript
     * <Div gridTemplateColumns="repeat(3, 1fr)" /> // repeat function
     * <Div gridTemplateColumns="1fr 2fr 1fr" />    // multiple fractions
     * <Div gridTemplateColumns="100px 1fr" />      // pixel and fraction
     * <Div gridTemplateColumns={3} />              // converted to 'repeat(3, 1fr)'
     * ```
     */
    gridTemplateColumns?: string | number;
    /**
     * 'gridTemplateRows' property sets the number of rows in a 'Grid' layout. This property is same as CSS's `grid-template-rows` property.
     * 'gridTemplateRows' 속성은 'Grid' 레이아웃의 행 수를 설정합니다. 이 속성은 CSS의 `grid-template-rows` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the number of rows in a grid layout ('Grid' 레이아웃의 행 수 설정)
     *
     * ```typescript
     * <Div gridTemplateRows="repeat(2, 1fr)" />
     * <Div gridTemplateRows="200px 1fr" />
     * <Div gridTemplateRows={2} />
     * ```
     */
    gridTemplateRows?: string | number;
    /**
     * 'gridTemplateAreas' property sets the layout of the 'Grid'. This property is same as CSS's `grid-template-areas` property.
     * 'gridTemplateAreas' 속성은 'Grid'의 레이아웃을 설정합니다. 이 속성은 CSS의 `grid-template-areas` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the layout of the grid ('Grid'의 레이아웃 설정)
     *
     * ```typescript
     * <Div gridTemplateAreas="'header header header' 'main main aside'" />
     * ```
     */
    gridTemplateAreas?: string;
    /**
     * 'gridArea' property sets the name of the 'Grid' area that the element will be placed in. This property is same as CSS's `grid-area` property.
     * 'gridArea' 속성은 요소가 배치될 'Grid' 영역의 이름을 설정합니다. 이 속성은 CSS의 `grid-area` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the name of the grid area that the element will be placed in ('Grid' 영역의 이름 설정)
     *
     * ```typescript
     * <Div gridArea="header" />
     * ```
     */
    gridArea?: string;
    /**
     * 'gridColumn' property sets the starting and ending position of a grid item within the 'Grid' column. This property is same as CSS's `grid-column` property.
     * 'gridColumn' 속성은 'Grid' 열 내에서 'Grid' 아이템의 시작 및 종료 위치를 설정합니다. 이 속성은 CSS의 `grid-column` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the starting and ending position of a grid item within the grid column ('Grid' 열 내에서 'Grid' 아이템의 시작 및 종료 위치 설정)
     *
     * ```typescript
     * // The item will start at the first grid line and end at the third.
     * // 아이템은 첫 번째 그리드 라인에서 시작하여 세 번째에서 끝납니다.
     * <Div gridColumn="1 / 3" />
     * ```
     */
    gridColumn?: string;
    /**
     * 'gridRow' property sets the starting and ending position of a 'Grid' item within the 'Grid' row. This property is same as CSS's `grid-row` property.
     * 'gridRow' 속성은 'Grid' 행 내에서 'Grid' 아이템의 시작 및 종료 위치를 설정합니다. 이 속성은 CSS의 `grid-row` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the starting and ending position of a grid item within the grid row ('Grid' 행 내에서 'Grid' 아이템의 시작 및 종료 위치 설정)
     *
     * ```typescript
     * // The item will start at the first grid line and end at the third.
     * // 아이템은 첫 번째 그리드 라인에서 시작하여 세 번째에서 끝납니다.
     * <Div gridRow="1 / 3" />
     * ```
     */
    gridRow?: string;
    /**
     * 'gridColumnStart' property sets the starting position of a 'Grid' item within the 'Grid' column. This property is same as CSS's `grid-column-start` property.
     * 'gridColumnStart' 속성은 'Grid' 열 내에서 'Grid' 아이템의 시작 위치를 설정합니다. 이 속성은 CSS의 `grid-column-start` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the starting position of a grid item within the grid column ('Grid' 열 내에서 'Grid' 아이템의 시작 위치 설정)
     *
     * ```typescript
     * // The item will start at the first grid line.
     * // 아이템은 첫 번째 그리드 라인에서 시작합니다.
     * <Div gridColumnStart={1} />
     * ```
     */
    gridColumnStart?: number;
    /**
     * 'gridColumnEnd' property sets the ending position of a 'Grid' item within the 'Grid' column. This property is same as CSS's `grid-column-end` property.
     * 'gridColumnEnd' 속성은 'Grid' 열 내에서 'Grid' 아이템의 종료 위치를 설정합니다. 이 속성은 CSS의 `grid-column-end` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the ending position of a grid item within the grid column ('Grid' 열 내에서 'Grid' 아이템의 종료 위치 설정)
     *
     * ```typescript
     * // The item will end at the third grid line.
     * // 아이템은 세 번째 그리드 라인에서 끝납니다.
     * <Div gridColumnEnd={3} />
     * ```
     */
    gridColumnEnd?: number;
    /**
     * 'gridRowStart' property sets the starting position of a 'Grid' item within the 'Grid' row. This property is same as CSS's `grid-row-start` property.
     * 'gridRowStart' 속성은 'Grid' 행 내에서 'Grid' 아이템의 시작 위치를 설정합니다. 이 속성은 CSS의 `grid-row-start` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the starting position of a grid item within the grid row ('Grid' 행 내에서 'Grid' 아이템의 시작 위치 설정)
     *
     * ```typescript
     * // The item will start at the first grid line.
     * // 아이템은 첫 번째 그리드 라인에서 시작합니다.
     * <Div gridRowStart={1} />
     * ```
     */
    gridRowStart?: number;
    /**
     * 'gridRowEnd' property sets the ending position of a 'Grid' item within the 'Grid' row. This property is same as CSS's `grid-row-end` property.
     * 'gridRowEnd' 속성은 'Grid' 행 내에서 'Grid' 아이템의 종료 위치를 설정합니다. 이 속성은 CSS의 `grid-row-end` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the ending position of a grid item within the grid row ('Grid' 행 내에서 'Grid' 아이템의 종료 위치 설정)
     *
     * ```typescript
     * // The item will end at the third grid line.
     * // 아이템은 세 번째 그리드 라인에서 끝납니다.
     * <Div gridRowEnd={3} />
     * ```
     */
    gridRowEnd?: number;
    /**
     * 'gridAutoColumns' property sets the size of the implicit grid columns. This property is same as CSS's `grid-auto-columns` property.
     * 'gridAutoColumns' 속성은 암시적 그리드 열의 크기를 설정합니다. 이 속성은 CSS의 `grid-auto-columns` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the size of the implicit grid columns (암시적 그리드 열의 크기 설정)
     *
     * ```typescript
     * // Implicit grid columns will have a size of 100px.
     * // 암시적 그리드 열의 크기는 100px가 됩니다.
     * <Div gridAutoColumns="100px" />
     * ```
     */
    gridAutoColumns?: string | number;
    /**
     * 'gridAutoRows' property sets the size of the implicit grid rows. This property is same as CSS's `grid-auto-rows` property.
     * 'gridAutoRows' 속성은 암시적 그리드 행의 크기를 설정합니다. 이 속성은 CSS의 `grid-auto-rows` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the size of the implicit grid rows (암시적 그리드 행의 크기 설정)
     *
     * ```typescript
     * // Implicit grid rows will have a size of 100px.
     * // 암시적 그리드 행의 크기는 100px가 됩니다.
     * <Div gridAutoRows="100px" />
     * ```
     */
    gridAutoRows?: string | number;
    /**
     * 'gridAutoFlow' property sets how the auto-placement algorithm works. This property is same as CSS's `grid-auto-flow` property.
     * 'gridAutoFlow' 속성은 자동 배치 알고리즘이 작동하는 방식을 설정합니다. 이 속성은 CSS의 `grid-auto-flow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set how the auto-placement algorithm works (자동 배치 알고리즘의 작동 방식 설정)
     *
     * ```typescript
     * <Div gridAutoFlow="row" />
     * ```
     */
    gridAutoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
    /**
     * 'gridGap' property sets the gap between 'Grid' items. This property is same as CSS's `grid-gap` property.
     * 'gridGap' 속성은 'Grid' 아이템 간의 간격을 설정합니다. 이 속성은 CSS의 `grid-gap` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the gap between 'Grid' items ('Grid' 아이템 간의 간격 설정)
     *
     * ```typescript
     * // Sets a 16px gap between grid items.
     * // 그리드 아이템 사이에 16px 간격을 설정합니다.
     * <Div gridGap="16px" />
     * <Div gridGap={16} />
     * ```
     */
    gridGap?: string | number;
    /**
     * 'gridRowGap' property sets the vertical gap between 'Grid' items. This property is same as CSS's `grid-row-gap` property.
     * 'gridRowGap' 속성은 'Grid' 아이템 간의 세로 간격을 설정합니다. 이 속성은 CSS의 `grid-row-gap` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the vertical gap between 'Grid' items ('Grid' 아이템 간의 세로 간격 설정)
     *
     * ```typescript
     * // Sets a 10px vertical gap between grid items.
     * // 그리드 아이템 사이에 세로로 10px 간격을 설정합니다.
     * <Div gridRowGap="10px" />
     * <Div gridRowGap={10} />
     * ```
     */
    gridRowGap?: string | number;
    /**
     * 'gridColumnGap' property sets the horizontal gap between 'Grid' items. This property is same as CSS's `grid-column-gap` property.
     * 'gridColumnGap' 속성은 'Grid' 아이템 간의 가로 간격을 설정합니다. 이 속성은 CSS의 `grid-column-gap` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the horizontal gap between 'Grid' items ('Grid' 아이템 간의 가로 간격 설정)
     *
     * ```typescript
     * // Sets a 10px horizontal gap between grid items.
     * // 그리드 아이템 사이에 가로로 10px 간격을 설정합니다.
     * <Div gridColumnGap="10px" />
     * <Div gridColumnGap={10} />
     * ```
     */
    gridColumnGap?: string | number;
}
interface OverflowProps {
    /**
     * 'overflow' sets the overflow style for the X-axis and Y-axis. This property is same as CSS's `overflow` property.
     * 'overflow'는 X축과 Y축에 대한 overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the overflow style for the X-axis and Y-axis (X축과 Y축에 대한 overflow 스타일 설정)
     *
     * ```typescript
     * <EideticsElement overflow="auto" />
     * ```
     */
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
    /**
     * 'overflowX' sets the overflow style for the X-axis. This property is same as CSS's `overflow-x` property.
     * 'overflowX'는 X축에 대한 overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow-x` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the overflow style for the X-axis (X축에 대한 overflow 스타일 설정)
     *
     * ```typescript
     * <EideticsElement overflowX="auto" />
     * ```
     */
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
    /**
     * 'overflowY' sets the overflow style for the Y-axis. This property is same as CSS's `overflow-y` property.
     * 'overflowY'는 Y축에 대한 overflow 스타일을 설정합니다. 이 속성은 CSS의 `overflow-y` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the overflow style for the Y-axis (Y축에 대한 overflow 스타일 설정)
     *
     * ```typescript
     * <EideticsElement overflowY="auto" />
     * ```
     */
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
}
export interface TranslateProps extends TransformProps, ScaleProps, RotateProps, TransitionProps, PerspectiveProps {
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
     * 'scaleX' scales the element along the x-axis. This property is same as CSS's `scaleX` property.
     * 'scaleX'는 요소의 x축으로 크기를 조정합니다. 이 속성은 CSS의 `scaleX` 속성과 같습니다.
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
     * 'scaleY' scales the element along the y-axis. This property is same as CSS's `scaleY` property.
     * 'scaleY'는 요소의 y축으로 크기를 조정합니다. 이 속성은 CSS의 `scaleY` 속성과 같습니다.
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
     * 'scaleZ' scales the element along the z-axis. This property is same as CSS's `scaleZ` property.
     * 'scaleZ'는 요소의 z축으로 크기를 조정합니다. 이 속성은 CSS의 `scaleZ` 속성과 같습니다.
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
     * <Div rotate="45" />
     * <Div rotate={45} />
     * ```
     */
    rotate?: string | number;
    /**
     * 'rotateX' rotates the element along the x-axis. This property is same as CSS's `rotateX` property.
     * 'rotateX'는 요소를 x축으로 회전시킵니다. 이 속성은 CSS의 `rotateX` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the x-axis (x축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateX="45" />
     * <Div rotateX={45} />
     * ```
     */
    rotateX?: string | number;
    /**
     * 'rotateY' rotates the element along the y-axis. This property is same as CSS's `rotateY` property.
     * 'rotateY'는 요소를 y축으로 회전시킵니다. 이 속성은 CSS의 `rotateY` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the y-axis (y축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateY="45" />
     * <Div rotateY={45} />
     * ```
     */
    rotateY?: string | number;
    /**
     * 'rotateZ' rotates the element along the z-axis. This property is same as CSS's `rotateZ` property.
     * 'rotateZ'는 요소를 z축으로 회전시킵니다. 이 속성은 CSS의 `rotateZ` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Rotate the element 45 degrees along the z-axis (z축으로 45도 회전)
     *
     * ```typescript
     * <Div rotateZ="45" />
     * <Div rotateZ={45} />
     * ```
     */
    rotateZ?: string | number;
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
export interface DimensionProps {
    /**
     * 'w' property sets the width. This property is same as CSS's `width` property.
     * 'w' 속성은 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width (너비 설정)
     *
     * ```typescript
     * <Div w="100px" />
     * ```
     */
    w?: string;
    /**
     * 'width' property sets the width. This property is same as CSS's `width` property.
     * 'width' 속성은 너비를 설정합니다. 이 속성은 CSS의 `width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width (너비 설정)
     *
     * ```typescript
     * <Div width="100px" />
     * ```
     */
    width?: string;
    /**
     * 'h' property sets the height. This property is same as CSS's `height` property.
     * 'h' 속성은 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the height (높이 설정)
     *
     * ```typescript
     * <Div h="100px" />
     * ```
     */
    h?: string;
    /**
     * 'height' property sets the height. This property is same as CSS's `height` property.
     * 'height' 속성은 높이를 설정합니다. 이 속성은 CSS의 `height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the height (높이 설정)
     *
     * ```typescript
     * <Div height="100px" />
     * ```
     */
    height?: string;
    /**
     * 'maxWidth' property sets the maximum width. This property is same as CSS's `max-width` property.
     * 'maxWidth' 속성은 최대 너비를 설정합니다. 이 속성은 CSS의 `max-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum width (최대 너비 설정)
     *
     * ```typescript
     * <Div maxWidth="100px" />
     * ```
     */
    maxWidth?: string;
    /**
     * 'minWidth' property sets the minimum width. This property is same as CSS's `min-width` property.
     * 'minWidth' 속성은 최소 너비를 설정합니다. 이 속성은 CSS의 `min-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum width (최소 너비 설정)
     *
     * ```typescript
     * <Div minWidth="100px" />
     * ```
     */
    minWidth?: string;
    /**
     * 'maxW' property sets the maximum width. This property is same as CSS's `max-width` property.
     * 'maxW' 속성은 최대 너비를 설정합니다. 이 속성은 CSS의 `max-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum width (최대 너비 설정)
     *
     * ```typescript
     * <Div maxW="100px" />
     * ```
     */
    maxW?: string;
    /**
     * 'minW' property sets the minimum width. This property is same as CSS's `min-width` property.
     * 'minW' 속성은 최소 너비를 설정합니다. 이 속성은 CSS의 `min-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum width (최소 너비 설정)
     *
     * ```typescript
     * <Div minW="100px" />
     * ```
     */
    minW?: string;
    /**
     * 'maxHeight' property sets the maximum height. This property is same as CSS's `max-height` property.
     * 'maxHeight' 속성은 최대 높이를 설정합니다. 이 속성은 CSS의 `max-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum height (최대 높이 설정)
     *
     * ```typescript
     * <Div maxHeight="100px" />
     * ```
     */
    maxHeight?: string;
    /**
     * 'minHeight' property sets the minimum height. This property is same as CSS's `min-height` property.
     * 'minHeight' 속성은 최소 높이를 설정합니다. 이 속성은 CSS의 `min-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum height (최소 높이 설정)
     *
     * ```typescript
     * <Div minHeight="100px" />
     * ```
     */
    minHeight?: string;
    /**
     * 'maxH' property sets the maximum height. This property is same as CSS's `max-height` property.
     * 'maxH' 속성은 최대 높이를 설정합니다. 이 속성은 CSS의 `max-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the maximum height (최대 높이 설정)
     *
     * ```typescript
     * <Div maxH="100px" />
     * ```
     */
    maxH?: string;
    /**
     * 'minH' property sets the minimum height. This property is same as CSS's `min-height` property.
     * 'minH' 속성은 최소 높이를 설정합니다. 이 속성은 CSS의 `min-height` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the minimum height (최소 높이 설정)
     *
     * ```typescript
     * <Div minH="100px" />
     * ```
     */
    minH?: string;
    /**
     * 'objectFit' property sets how the content of a replaced element should be resized to fit its container. This property is same as CSS's `object-fit` property.
     * 'objectFit' 속성은 대체된 요소의 콘텐츠가 컨테이너에 맞도록 크기를 조정하는 방법을 설정합니다. 이 속성은 CSS의 `object-fit` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set how the content of a replaced element should be resized to fit its container (대체된 요소의 콘텐츠가 컨테이너에 맞도록 크기를 조정하는 방법 설정)
     *
     * ```typescript
     * <Div objectFit="cover" />
     * ```
     */
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    /**
     * 'objectPosition' property sets the alignment of the replaced element's content. This property is same as CSS's `object-position` property.
     * 'objectPosition' 속성은 대체된 요소의 콘텐츠의 정렬을 설정합니다. 이 속성은 CSS의 `object-position` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the alignment of the replaced element's content (대체된 요소의 콘텐츠의 정렬 설정)
     *
     * ```typescript
     * <Div objectPosition="50% 50%" />
     * ```
     */
    objectPosition?: string;
}
export interface PaddingProps {
    /**
     * 'p' property sets padding for all sides. This property is same as CSS's `padding` property.
     * 'p' 속성은 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set padding for all sides (모든 측면에 패딩 설정)
     *
     * ```typescript
     * <EideticsElement p="10px" />
     * <EideticsElement p={10} />
     * ```
     */
    p?: string | number;
    /**
     * 'padding' property sets padding for all sides. This property is same as CSS's `padding` property.
     * 'padding' 속성은 모든 측면에 패딩을 설정합니다. 이 속성은 CSS의 `padding` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set padding for all sides (모든 측면에 패딩 설정)
     *
     * ```typescript
     * <EideticsElement padding="10px" />
     * <EideticsElement padding={10} />
     * ```
     */
    padding?: string | number;
    /**
     * 'pt' property sets the top padding. This property is same as CSS's `padding-top` property.
     * 'pt' 속성은 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top padding (상단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pt="10px" />
     * <EideticsElement pt={10} />
     * ```
     */
    pt?: string | number;
    /**
     * 'paddingTop' property sets the top padding. This property is same as CSS's `padding-top` property.
     * 'paddingTop' 속성은 상단 패딩을 설정합니다. 이 속성은 CSS의 `padding-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top padding (상단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingTop="10px" />
     * <EideticsElement paddingTop={10} />
     * ```
     */
    paddingTop?: string | number;
    /**
     * 'pr' property sets the right padding. This property is same as CSS's `padding-right` property.
     * 'pr' 속성은 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right padding (우측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pr="10px" />
     * <EideticsElement pr={10} />
     * ```
     */
    pr?: string | number;
    /**
     * 'paddingRight' property sets the right padding. This property is same as CSS's `padding-right` property.
     * 'paddingRight' 속성은 우측 패딩을 설정합니다. 이 속성은 CSS의 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right padding (우측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingRight="10px" />
     * <EideticsElement paddingRight={10} />
     * ```
     */
    paddingRight?: string | number;
    /**
     * 'pb' property sets the bottom padding. This property is same as CSS's `padding-bottom` property.
     * 'pb' 속성은 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom padding (하단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pb="10px" />
     * <EideticsElement pb={10} />
     * ```
     */
    pb?: string | number;
    /**
     * 'paddingBottom' property sets the bottom padding. This property is same as CSS's `padding-bottom` property.
     * 'paddingBottom' 속성은 하단 패딩을 설정합니다. 이 속성은 CSS의 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom padding (하단 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingBottom="10px" />
     * <EideticsElement paddingBottom={10} />
     * ```
     */
    paddingBottom?: string | number;
    /**
     * 'pl' property sets the left padding. This property is same as CSS's `padding-left` property.
     * 'pl' 속성은 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left padding (좌측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement pl="10px" />
     * <EideticsElement pl={10} />
     * ```
     */
    pl?: string | number;
    /**
     * 'paddingLeft' property sets the left padding. This property is same as CSS's `padding-left` property.
     * 'paddingLeft' 속성은 좌측 패딩을 설정합니다. 이 속성은 CSS의 `padding-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left padding (좌측 패딩 설정)
     *
     * ```typescript
     * <EideticsElement paddingLeft="10px" />
     * <EideticsElement paddingLeft={10} />
     * ```
     */
    paddingLeft?: string | number;
    /**
     * 'px' property sets the horizontal padding (left and right). This property is same as CSS's `padding-left` and `padding-right` properties.
     * 'px' 속성은 좌우 패딩을 설정합니다. 이 속성은 CSS의 `padding-left`와 `padding-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the horizontal padding (좌우 패딩 설정)
     *
     * ```typescript
     * <EideticsElement px="10px" />
     * <EideticsElement px={10} />
     * ```
     */
    px?: string | number;
    /**
     * 'py' property sets the vertical padding (top and bottom). This property is same as CSS's `padding-top` and `padding-bottom` properties.
     * 'py' 속성은 상하 패딩을 설정합니다. 이 속성은 CSS의 `padding-top`과 `padding-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the vertical padding (상하 패딩 설정)
     *
     * ```typescript
     * <EideticsElement py="10px" />
     * <EideticsElement py={10} />
     * ```
     */
    py?: string | number;
}
export interface FontProps {
    /**
     * 'fontFamily' property sets the font family for an element. This property is same as CSS's `font-family` property.
     * 'fontFamily'는 요소의 글꼴을 설정합니다. 이 속성은 CSS의 `font-family` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font family (글꼴 설정)
     *
     * ```typescript
     * <Div fontFamily="sans-serif" />
     * ```
     */
    fontFamily?: string;
    /**
     * 'fontSize' property sets the font size for an element. This property is same as CSS's `font-size` property.
     * 'fontSize'는 요소의 글꼴 크기를 설정합니다. 이 속성은 CSS의 `font-size` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font size (글꼴 크기 설정)
     *
     * ```typescript
     * <EideticsElement fontSize="1.5rem" />
     * <EideticsElement fontSize="1.5px" />
     * <EideticsElement fontSize={1.5} />
     * ```
     */
    fontSize?: string | number;
    /**
     * 'fontWeight' property sets the font weight for an element. This property is same as CSS's `font-weight` property.
     * 'fontWeight'는 요소의 글꼴 두께를 설정합니다. 이 속성은 CSS의 `font-weight` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font weight (글꼴 두께 설정)
     *
     * ```typescript
     * <EideticsElement fontWeight="bold" />
     * <EideticsElement fontWeight={700} />
     * ```
     */
    fontWeight?: 100 | 'thin' | 200 | 'extralight' | 300 | 'light' | 400 | 'normal' | 500 | 'medium' | 600 | 'semibold' | 700 | 'bold' | 800 | 'extrabold' | 900 | 'bolder';
    /**
     * 'fontStyle' property sets the font style for an element. This property is same as CSS's `font-style` property.
     * 'fontStyle'는 요소의 글꼴 스타일을 설정합니다. 이 속성은 CSS의 `font-style` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set font style (글꼴 스타일 설정)
     *
     * ```typescript
     * <EideticsElement fontStyle="italic" />
     * ```
     */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /**
     * 'textDecoration' property sets the text decoration for an element. This property is same as CSS's `text-decoration` property.
     * 'textDecoration'는 요소의 텍스트 꾸밈 설정입니다. 이 속성은 CSS의 `text-decoration` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text decoration (텍스트 꾸밈 설정)
     *
     * ```typescript
     * <EideticsElement textDecoration="underline" />
     * ```
     */
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
    /**
     * 'textAlign' property sets the text alignment for an element. This property is same as CSS's `text-align` property.
     * 'textAlign'는 요소의 텍스트 정렬을 설정합니다. 이 속성은 CSS의 `text-align` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text alignment (텍스트 정렬 설정)
     *
     * ```typescript
     * <EideticsElement textAlign="center" />
     * ```
     */
    textAlign?: `left` | `right` | `center` | `justify`;
    /**
     * 'lineHeight' property sets the line height for an element. This property is same as CSS's `line-height` property.
     * 'lineHeight'는 요소의 줄 높이를 설정합니다. 이 속성은 CSS의 `line-height` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set line height (줄 높이 설정)
     *
     * ```typescript
     * <EideticsElement lineHeight="1.5rem" />
     * <EideticsElement lineHeight="1.5px" />
     * <EideticsElement lineHeight={1.5} />
     * ```
     */
    lineHeight?: string | number;
    /**
     * 'textShadow' property adds shadow to text. This property is same as CSS's `text-shadow` property.
     * 'textShadow' 속성은 텍스트에 그림자를 추가합니다. 이 속성은 CSS의 `text-shadow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Add shadow to text (텍스트에 그림자 추가)
     *
     * ```typescript
     * <div textShadow="2px 2px 2px gray" />
     * ```
     */
    textShadow?: string;
    /**
     * 'letterSpacing' property sets the letter spacing for an element. This property is same as CSS's `letter-spacing` property.
     * 'letterSpacing'는 요소의 글자 간격을 설정합니다. 이 속성은 CSS의 `letter-spacing` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set letter spacing (글자 간격 설정)
     *
     * ```typescript
     * <EideticsElement letterSpacing="0.1rem" />
     * <EideticsElement letterSpacing="0.1px" />
     * <EideticsElement letterSpacing={0.1} />
     * ```
     */
    letterSpacing?: string | number;
    /**
     * 'textTransform' property sets the text transform for an element. This property is same as CSS's `text-transform` property.
     * 'textTransform'는 요소의 텍스트를 변형하기위해 사용합니다. 이 속성은 CSS의 `text-transform` 속성과 같습니다.
     * ---
     * > #### Example (예시)
     * Set text transform (텍스트 변형 설정)
     *
     * ```typescript
     * <EideticsElement textTransform="uppercase" />
     * ```
     */
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
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
export interface ColorProps {
    /**
     * 'color' property sets the color of an element's text content. This property is same as CSS's `color` property.
     * 'color' 속성은 요소의 텍스트 콘텐츠의 색상을 설정합니다. 이 속성은 CSS의 `color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of an element's text content (요소의 텍스트 콘텐츠의 색상 설정)
     *
     * ```typescript
     * <Div color="#fff" />
     * <Div color="red" />
     * ```
     */
    color?: string;
    /**
     * 'b' property sets the background color. This property is same as CSS's `background-color` property.
     * 'b' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div b="#000" />
     * <Div b="blue" />
     * ```
     */
    b?: string;
    /**
     * 'bg' property sets the background color. This property is same as CSS's `background-color` property.
     * 'bg' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bg="#000" />
     * <Div bg="blue" />
     * ```
     */
    bg?: string;
    /**
     * 'background' property sets the background color. This property is same as CSS's `background` property.
     * 'background' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div background="#000" />
     * <Div background="blue" />
     * ```
     */
    background?: string;
    /**
     * 'bgColor' property sets the background color. This property is same as CSS's `background-color` property.
     * 'bgColor' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bgColor="#000" />
     * <Div bgColor="blue" />
     * ```
     */
    bgColor?: string;
    /**
     * 'backgroundColor' property sets the background color. This property is same as CSS's `background-color` property.
     * 'backgroundColor' 속성은 배경 색상을 설정합니다. 이 속성은 CSS의 `background-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the background color (배경 색상 설정)
     *
     * ```typescript
     * <Div bgColor="#000" />
     * <Div bgColor="blue" />
     * ```
     */
    backgroundColor?: string;
    /**
     * 'boxShadow' property sets the shadow effects around an element's frame. This property is same as CSS's `box-shadow` property.
     * 'boxShadow' 속성은 요소의 테두리 주변에 그림자 효과를 설정합니다. 이 속성은 CSS의 `box-shadow` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the shadow effects around an element's frame (요소의 테두리 주변에 그림자 효과 설정)
     *
     * ```typescript
     * <Div boxShadow="0 0 10px 0 #000" />
     * ```
     */
    boxShadow?: string;
}
type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none' | 'hidden';
export interface BorderProps {
    /**
     * 'border' property sets border for all sides. This property is same as CSS's `border` property.
     * 'border' 속성은 모든 측면에 테두리를 설정합니다. 이 속성은 CSS의 `border` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set border for all sides (모든 측면에 테두리 설정)
     *
     * ```typescript
     * <div border="1px solid black" />
     * ```
     */
    border?: string | number;
    /**
     * 'borderTop' property sets the top border. This property is same as CSS's `border-top` property.
     * 'borderTop' 속성은 상단 테두리를 설정합니다. 이 속성은 CSS의 `border-top` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the top border (상단 테두리 설정)
     *
     * ```typescript
     * <div borderTop="1px solid black" />
     * ```
     */
    borderTop?: string | number;
    /**
     * 'borderRight' property sets the right border. This property is same as CSS's `border-right` property.
     * 'borderRight' 속성은 우측 테두리를 설정합니다. 이 속성은 CSS의 `border-right` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the right border (우측 테두리 설정)
     *
     * ```typescript
     * <div borderRight="1px solid black" />
     * ```
     */
    borderRight?: string | number;
    /**
     * 'borderBottom' property sets the bottom border. This property is same as CSS's `border-bottom` property.
     * 'borderBottom' 속성은 하단 테두리를 설정합니다. 이 속성은 CSS의 `border-bottom` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the bottom border (하단 테두리 설정)
     *
     * ```typescript
     * <div borderBottom="1px solid black" />
     * ```
     */
    borderBottom?: string | number;
    /**
     * 'borderLeft' property sets the left border. This property is same as CSS's `border-left` property.
     * 'borderLeft' 속성은 좌측 테두리를 설정합니다. 이 속성은 CSS의 `border-left` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the left border (좌측 테두리 설정)
     *
     * ```typescript
     * <div borderLeft="1px solid black" />
     * ```
     */
    borderLeft?: string | number;
    /**
     * 'borderColor' property sets the color of the border. This property is same as CSS's `border-color` property.
     * 'borderColor' 속성은 테두리의 색상을 설정합니다. 이 속성은 CSS의 `border-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of the border (테두리의 색상 설정)
     *
     * ```typescript
     * <div borderColor="red" />
     * ```
     */
    borderColor?: string;
    /**
     * 'borderTopColor' property sets the color of the top border. This property is same as CSS's `border-top-color` property.
     * 'borderTopColor' 속성은 상단 테두리의 색상을 설정합니다. 이 속성은 CSS의 `border-top-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of the top border (상단 테두리의 색상 설정)
     *
     * ```typescript
     * <div borderTopColor="red" />
     * ```
     */
    borderTopColor?: string;
    /**
     * 'borderRightColor' property sets the color of the right border. This property is same as CSS's `border-right-color` property.
     * 'borderRightColor' 속성은 우측 테두리의 색상을 설정합니다. 이 속성은 CSS의 `border-right-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of the right border (우측 테두리의 색상 설정)
     *
     * ```typescript
     * <div borderRightColor="red" />
     * ```
     */
    borderRightColor?: string;
    /**
     * 'borderBottomColor' property sets the color of the bottom border. This property is same as CSS's `border-bottom-color` property.
     * 'borderBottomColor' 속성은 하단 테두리의 색상을 설정합니다. 이 속성은 CSS의 `border-bottom-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of the bottom border (하단 테두리의 색상 설정)
     *
     * ```typescript
     * <div borderBottomColor="red" />
     * ```
     */
    borderBottomColor?: string;
    /**
     * 'borderLeftColor' property sets the color of the left border. This property is same as CSS's `border-left-color` property.
     * 'borderLeftColor' 속성은 좌측 테두리의 색상을 설정합니다. 이 속성은 CSS의 `border-left-color` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the color of the left border (좌측 테두리의 색상 설정)
     *
     * ```typescript
     * <div borderLeftColor="red" />
     * ```
     */
    borderLeftColor?: string;
    /**
     * 'borderStyle' property sets the style of the border. This property is same as CSS's `border-style` property.
     * 'borderStyle' 속성은 테두리의 스타일을 설정합니다. 이 속성은 CSS의 `border-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the style of the border (테두리의 스타일 설정)
     *
     * ```typescript
     * <div borderStyle="solid" />
     * ```
     */
    borderStyle?: BorderStyle;
    /**
     * 'borderTopStyle' property sets the style of the top border. This property is same as CSS's `border-top-style` property.
     * 'borderTopStyle' 속성은 상단 테두리의 스타일을 설정합니다. 이 속성은 CSS의 `border-top-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the style of the top border (상단 테두리의 스타일 설정)
     *
     * ```typescript
     * <div borderTopStyle="solid" />
     * ```
     */
    borderTopStyle?: BorderStyle;
    /**
     * 'borderRightStyle' property sets the style of the right border. This property is same as CSS's `border-right-style` property.
     * 'borderRightStyle' 속성은 우측 테두리의 스타일을 설정합니다. 이 속성은 CSS의 `border-right-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the style of the right border (우측 테두리의 스타일 설정)
     *
     * ```typescript
     * <div borderRightStyle="solid" />
     * ```
     */
    borderRightStyle?: BorderStyle;
    /**
     * 'borderBottomStyle' property sets the style of the bottom border. This property is same as CSS's `border-bottom-style` property.
     * 'borderBottomStyle' 속성은 하단 테두리의 스타일을 설정합니다. 이 속성은 CSS의 `border-bottom-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the style of the bottom border (하단 테두리의 스타일 설정)
     *
     * ```typescript
     * <div borderBottomStyle="solid" />
     * ```
     */
    borderBottomStyle?: BorderStyle;
    /**
     * 'borderLeftStyle' property sets the style of the left border. This property is same as CSS's `border-left-style` property.
     * 'borderLeftStyle' 속성은 좌측 테두리의 스타일을 설정합니다. 이 속성은 CSS의 `border-left-style` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the style of the left border (좌측 테두리의 스타일 설정)
     *
     * ```typescript
     * <div borderLeftStyle="solid" />
     * ```
     */
    borderLeftStyle?: BorderStyle;
    /**
     * 'borderRadius' property sets the radius of the border. This property is same as CSS's `border-radius` property.
     * 'borderRadius' 속성은 테두리의 반지름을 설정합니다. 이 속성은 CSS의 `border-radius` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the radius of the border (테두리의 반지름 설정)
     *
     * ```typescript
     * <div borderRadius="5px" />
     * ```
     */
    borderRadius?: string | number;
    /**
     * 'borderTopRightRadius' property sets the radius of the top right corner of the border. This property is same as CSS's `border-top-right-radius` property.
     * 'borderTopRightRadius' 속성은 테두리의 우측 상단 모서리의 반지름을 설정합니다. 이 속성은 CSS의 `border-top-right-radius` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the radius of the top right corner of the border (테두리의 우측 상단 모서리의 반지름 설정)
     *
     * ```typescript
     * <div borderTopRightRadius="5px" />
     * ```
     */
    borderTopRightRadius?: string | number;
    /**
     * 'borderTopLeftRadius' property sets the radius of the top left corner of the border. This property is same as CSS's `border-top-left-radius` property.
     * 'borderTopLeftRadius' 속성은 테두리의 좌측 상단 모서리의 반지름을 설정합니다. 이 속성은 CSS의 `border-top-left-radius` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the radius of the top left corner of the border (테두리의 좌측 상단 모서리의 반지름 설정)
     *
     * ```typescript
     * <div borderTopLeftRadius="5px" />
     * ```
     */
    borderTopLeftRadius?: string | number;
    /**
     * 'borderBottomRightRadius' property sets the radius of the bottom right corner of the border. This property is same as CSS's `border-bottom-right-radius` property.
     * 'borderBottomRightRadius' 속성은 테두리의 우측 하단 모서리의 반지름을 설정합니다. 이 속성은 CSS의 `border-bottom-right-radius` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the radius of the bottom right corner of the border (테두리의 우측 하단 모서리의 반지름 설정)
     *
     * ```typescript
     * <div borderBottomRightRadius="5px" />
     * ```
     */
    borderBottomRightRadius?: string | number;
    /**
     * 'borderBottomLeftRadius' property sets the radius of the bottom left corner of the border. This property is same as CSS's `border-bottom-left-radius` property.
     * 'borderBottomLeftRadius' 속성은 테두리의 좌측 하단 모서리의 반지름을 설정합니다. 이 속성은 CSS의 `border-bottom-left-radius` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the radius of the bottom left corner of the border (테두리의 좌측 하단 모서리의 반지름 설정)
     *
     * ```typescript
     * <div borderBottomLeftRadius="5px" />
     * ```
     */
    borderBottomLeftRadius?: string | number;
    /**
     * 'borderWidth' property sets the width of the border. This property is same as CSS's `border-width` property.
     * 'borderWidth' 속성은 테두리의 너비를 설정합니다. 이 속성은 CSS의 `border-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width of the border (테두리의 너비 설정)
     *
     * ```typescript
     * <div borderWidth="2px" />
     * ```
     */
    borderWidth?: string | number;
    /**
     * 'borderTopWidth' property sets the width of the top border. This property is same as CSS's `border-top-width` property.
     * 'borderTopWidth' 속성은 상단 테두리의 너비를 설정합니다. 이 속성은 CSS의 `border-top-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width of the top border (상단 테두리의 너비 설정)
     *
     * ```typescript
     * <div borderTopWidth="2px" />
     * ```
     */
    borderTopWidth?: string | number;
    /**
     * 'borderRightWidth' property sets the width of the right border. This property is same as CSS's `border-right-width` property.
     * 'borderRightWidth' 속성은 우측 테두리의 너비를 설정합니다. 이 속성은 CSS의 `border-right-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width of the right border (우측 테두리의 너비 설정)
     *
     * ```typescript
     * <div borderRightWidth="2px" />
     * ```
     */
    borderRightWidth?: string | number;
    /**
     * 'borderBottomWidth' property sets the width of the bottom border. This property is same as CSS's `border-bottom-width` property.
     * 'borderBottomWidth' 속성은 하단 테두리의 너비를 설정합니다. 이 속성은 CSS의 `border-bottom-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width of the bottom border (하단 테두리의 너비 설정)
     *
     * ```typescript
     * <div borderBottomWidth="2px" />
     * ```
     */
    borderBottomWidth?: string | number;
    /**
     * 'borderLeftWidth' property sets the width of the left border. This property is same as CSS's `border-left-width` property.
     * 'borderLeftWidth' 속성은 좌측 테두리의 너비를 설정합니다. 이 속성은 CSS의 `border-left-width` 속성과 같습니다.
     * ---
     * > ### Example (예시)
     * Set the width of the left border (좌측 테두리의 너비 설정)
     *
     * ```typescript
     * <div borderLeftWidth="2px" />
     * ```
     */
    borderLeftWidth?: string | number;
}
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
export {};
