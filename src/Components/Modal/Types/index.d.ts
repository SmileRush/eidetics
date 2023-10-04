import { AllProps, EideticComponentProps, EideticComponentTypes } from '../../../Types/index';
import { _useModal } from '../Hooks';
import { ModalButton_AfterClick, ModalButton_Type } from './Button';
type ModalState = ReturnType<typeof _useModal>;
interface CommonProps {
}
interface BodyProps extends ModalState, CommonProps, AllProps {
}
/**
 * @interface 버튼 컴포넌트의 속성을 정의하는 인터페이스입니다.
 * @description 버튼 컴포넌트는 모달 컴포넌트의 하위 컴포넌트로 사용됩니다.
 * @extends ModalState
 * @extends CommonProps
 * @extends AllStylesProps
 * @extends AllComponentsProps
 */
interface ButtonProps extends ModalState, CommonProps, AllProps {
    type: ModalButton_Type;
    afterClick: ModalButton_AfterClick;
}
interface ContainerProps extends ModalState, CommonProps, AllProps {
}
interface FooterProps extends ModalState, CommonProps, AllProps {
}
interface HeaderProps extends ModalState, CommonProps, AllProps {
}
interface TogglerProps extends ModalState, CommonProps, AllProps {
}
interface ProviderProps extends ModalState, CommonProps, AllProps {
}
export type ModalTypes = {
    State: ModalState;
    Parts: {
        Body: EideticComponentTypes<BodyProps, ''>;
        Button: EideticComponentTypes<ButtonProps, 'type'>;
        Container: EideticComponentTypes<ContainerProps, ''>;
        Footer: EideticComponentTypes<FooterProps, ''>;
        Header: EideticComponentTypes<HeaderProps, ''>;
        Toggler: EideticComponentTypes<TogglerProps, ''>;
        Provider: EideticComponentTypes<ProviderProps, ''>;
    };
    Props: {
        Body: EideticComponentProps<BodyProps, ''>;
        Button: EideticComponentProps<ButtonProps, ''>;
        Container: EideticComponentProps<ContainerProps, ''>;
        Footer: EideticComponentProps<FooterProps, ''>;
        Header: EideticComponentProps<HeaderProps, ''>;
        Toggler: EideticComponentProps<TogglerProps, ''>;
        Provider: EideticComponentProps<ProviderProps, ''>;
    };
};
export {};
