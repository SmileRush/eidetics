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
export {};
