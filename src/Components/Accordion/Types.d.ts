import { AllProps, EideticComponentProps, EideticComponentTypes } from '../../Types/index';
import { _useAccordion } from './Provider';
type AccordionState = ReturnType<typeof _useAccordion>;
interface CommonProps {
}
interface PanelProps extends AccordionState, CommonProps, AllProps {
}
interface TriggerProps extends AccordionState, CommonProps, AllProps {
}
interface ProviderProps extends AccordionState, CommonProps, AllProps {
}
export type AccordionTypes = {
    State: AccordionState;
    Parts: {
        Trigger: EideticComponentTypes<TriggerProps, ''>;
        Panel: EideticComponentTypes<PanelProps, ''>;
        Provider: EideticComponentTypes<ProviderProps, ''>;
    };
    Props: {
        Trigger: EideticComponentProps<TriggerProps, ''>;
        Panel: EideticComponentProps<PanelProps, ''>;
        Provider: EideticComponentProps<ProviderProps, ''>;
    };
};
export {};
