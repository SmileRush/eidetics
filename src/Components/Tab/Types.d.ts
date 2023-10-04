import { AllProps, EideticComponentProps, EideticComponentTypes } from '../../Types/index';
import { _useTab } from './Hooks';
type TabState = ReturnType<typeof _useTab>;
interface CommonProps {
    tabId: string | number;
}
interface ItemProps extends TabState, CommonProps, AllProps {
}
interface ContentProps extends TabState, CommonProps, AllProps {
}
interface ProviderProps extends TabState, CommonProps, AllProps {
}
export type TabTypes = {
    State: TabState;
    Parts: {
        Item: EideticComponentTypes<ItemProps, 'tabId'>;
        Content: EideticComponentTypes<ContentProps, 'tabId'>;
        Provider: EideticComponentTypes<ProviderProps, ''>;
    };
    Props: {
        Item: EideticComponentProps<ItemProps, 'tabId'>;
        Content: EideticComponentProps<ContentProps, 'tabId'>;
        Provider: EideticComponentProps<ProviderProps, ''>;
    };
};
export {};
