import React from 'react';
export interface OtherProps {
    children?: React.ReactNode | undefined;
    /**
     * 'animation'는 애니메이션을 정의합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // bounce 애니메이션 적용
     * <div animation="bounce 2s infinite" />
     * ```
     */
    animation?: string;
    /**
     * 'appearance'는 브라우저가 요소에 적용하는 기본 스타일을 재정의합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 기본 스타일 적용 안 함
     * <button appearance="none" />
     * ```
     */
    appearance?: string;
    /**
     * 'content'는 CSS `content` 속성을 설정합니다. 주로 가상 요소에서 사용됩니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // content 속성으로 텍스트 추가
     * <div content="'Hello'" />
     * ```
     */
    content?: string;
    /**
     * 'transform'은 2D 또는 3D 변환을 요소에 적용합니다.
     *
     * > ### 예시
     *
     * ```typescript
     * // 요소를 45도 회전
     * <div transform="rotate(45deg)" />
     * ```
     */
    transform?: string;
}
