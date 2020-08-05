import { shallowMount, Wrapper } from "@vue/test-utils";
import AppbarButton from '@/components/Appbar/AppbarButton.vue';

describe('AppbarButton.vue', () => {
    const setup = ({ text = '', route = '' }) => {
        return shallowMount(AppbarButton, {
            propsData: {
                text,
                route
            }
        });
    }

    test('should render without errors', () => {
        const wrapper = setup({});
        expect(wrapper).toBeTruthy();
    });

    test('should render text correctly', () => {
        const tryText = 'try';
        const wrapper = setup({ text: tryText });
        const textWrapper = wrapper.findComponent({ ref: 'text-display' });
        expect(textWrapper.text()).toBe(tryText);
    });
});