import { AllComponentsProps, AllStylesProps, EideticComponentProps, EideticComponentTypes } from '../../Types/index';
type ProviderProps = AllStylesProps & AllComponentsProps;
export type ButtonElement = EideticComponentTypes<ProviderProps, ''>;
export declare namespace ButtonElement {
    type Props = EideticComponentProps<ProviderProps, ''>;
}
export {};
