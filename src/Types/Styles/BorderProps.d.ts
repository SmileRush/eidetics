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
export {};
