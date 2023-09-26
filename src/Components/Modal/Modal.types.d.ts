/// <reference types="react" />
import { useModalToProvider } from './useModal';
import { AllProps } from '../../Types';
export type ModalState = ReturnType<typeof useModalToProvider>;
export type ModalType = {
    Body: React.FC<Partial<BodyProps>>;
    Closer: React.FC<Partial<ClosesProps>>;
    Container: React.FC<Partial<ContainerProps>>;
    Footer: React.FC<Partial<FooterProps>>;
    Header: React.FC<Partial<HeaderProps>>;
    Opener: React.FC<Partial<OpenerProps>>;
    Provider: React.FC<Partial<ProviderProps>>;
};
export type ModalProps = {
    Body: Partial<BodyProps>;
    Closer: Partial<ClosesProps>;
    Container: Partial<ContainerProps>;
    Footer: Partial<FooterProps>;
    Header: Partial<HeaderProps>;
    Opener: Partial<OpenerProps>;
    Provider: Partial<ProviderProps>;
};
interface ProviderProps extends ModalState, AllProps {
    portalId?: string;
}
interface BodyProps extends ModalState, AllProps {
}
interface ClosesProps extends ModalState, AllProps {
}
interface ContainerProps extends ModalState, AllProps {
}
interface FooterProps extends ModalState, AllProps {
}
interface HeaderProps extends ModalState, AllProps {
}
interface OpenerProps extends ModalState, AllProps {
}
export {};
