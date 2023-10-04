export interface MarginProps {
    m?: string | number;
    margin?: string | number;
    mt?: string | number;
    marginTop?: string | number;
    mr?: string | number;
    marginRight?: string | number;
    mb?: string | number;
    marginBottom?: string | number;
    ml?: string | number;
    marginLeft?: string | number;
    my?: string | number;
    mx?: string | number;
}
export interface PositionProps {
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    pos?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
    zIndex?: string | number;
    clip?: string;
    clipPath?: string;
}
export interface DisplayProps extends FlexProps, GridProps, OverflowProps {
    visibility?: 'hidden' | 'visible' | 'collapse';
    opacity?: string | number;
    display?: 'inline' | 'block' | 'flex' | 'grid' | 'inline-block' | 'none';
}
interface FlexProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string | number;
}
interface GridProps {
    grid?: string;
    gridTemplate?: string;
    gridTemplateColumns?: string | number;
    gridTemplateRows?: string | number;
    gridTemplateAreas?: string;
    gridArea?: string;
    gridColumn?: string;
    gridRow?: string;
    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
    gridAutoColumns?: string | number;
    gridAutoRows?: string | number;
    gridAutoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
    gridGap?: string | number;
    gridRowGap?: string | number;
    gridColumnGap?: string | number;
}
interface OverflowProps {
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
    overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
    overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';
}
export interface TranslateProps extends TransformProps, ScaleProps, RotateProps, TransitionProps, PerspectiveProps {
    translate?: string;
    translateX?: string | number;
    translateY?: string | number;
    translateZ?: string | number;
}
interface TransformProps {
    transform?: string;
    transformOrigin?: string;
    transformStyle?: string;
    transformBox?: string;
}
interface TransitionProps {
    transition?: string;
    transitionDelay?: string | number;
    transitionDuration?: string | number;
    transitionProperty?: string;
    transitionTimingFunction?: string;
}
interface ScaleProps {
    scale?: string | number;
    scaleX?: string | number;
    scaleY?: string | number;
    scaleZ?: string | number;
}
interface RotateProps {
    rotate?: string | number;
    rotateX?: string | number;
    rotateY?: string | number;
    rotateZ?: string | number;
}
interface PerspectiveProps {
    perspective?: string;
    perspectiveOrigin?: string;
    backfaceVisibility?: string;
}
export interface DimensionProps {
    w?: string;
    width?: string;
    h?: string;
    height?: string;
    maxWidth?: string;
    minWidth?: string;
    maxW?: string;
    minW?: string;
    maxHeight?: string;
    minHeight?: string;
    maxH?: string;
    minH?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    objectPosition?: string;
}
export interface PaddingProps {
    p?: string | number;
    padding?: string | number;
    pt?: string | number;
    paddingTop?: string | number;
    pr?: string | number;
    paddingRight?: string | number;
    pb?: string | number;
    paddingBottom?: string | number;
    pl?: string | number;
    paddingLeft?: string | number;
    px?: string | number;
    py?: string | number;
}
export interface FontProps {
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: 100 | 'thin' | 200 | 'extralight' | 300 | 'light' | 400 | 'normal' | 500 | 'medium' | 600 | 'semibold' | 700 | 'bold' | 800 | 'extrabold' | 900 | 'bolder';
    fontStyle?: 'normal' | 'italic' | 'oblique';
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
    textAlign?: `left` | `right` | `center` | `justify`;
    lineHeight?: string | number;
    textShadow?: string;
    letterSpacing?: string | number;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
export interface FilterProps {
    filter?: string;
}
export interface ColorProps {
    color?: string;
    b?: string;
    bg?: string;
    background?: string;
    bgColor?: string;
    backgroundColor?: string;
    boxShadow?: string;
}
type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none' | 'hidden';
export interface BorderProps {
    border?: string | number;
    borderTop?: string | number;
    borderRight?: string | number;
    borderBottom?: string | number;
    borderLeft?: string | number;
    borderColor?: string;
    borderTopColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderLeftColor?: string;
    borderStyle?: BorderStyle;
    borderTopStyle?: BorderStyle;
    borderRightStyle?: BorderStyle;
    borderBottomStyle?: BorderStyle;
    borderLeftStyle?: BorderStyle;
    borderRadius?: string | number;
    borderTopRightRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderBottomLeftRadius?: string | number;
    borderWidth?: string | number;
    borderTopWidth?: string | number;
    borderRightWidth?: string | number;
    borderBottomWidth?: string | number;
    borderLeftWidth?: string | number;
}
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
type AnimationPlayState = 'paused' | 'running';
type AnimationTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end';
export interface AnimationProps {
    animation?: string;
    animationDelay?: string | number;
    animationName?: string;
    animationDuration?: string | number;
    animationFillMode?: string;
    animationIterationCount?: string | number;
    animationDirection?: AnimationDirection;
    animationPlayState?: AnimationPlayState;
    animationTimingFunction?: AnimationTimingFunction;
}
export interface InteractionProps {
    cursor?: `auto` | `default` | `pointer` | `wait` | `text`;
    userSelect?: 'auto' | 'text' | 'none' | 'contain' | 'all';
    pointerEvents?: 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all';
}
export {};
