import { shallowMount } from "@vue/test-utils";
import Appbar from '@/components/Appbar/Appbar.vue';
import AppbarButton from '@/components/Appbar/AppbarButton.vue';

describe("Appbar.vue", () => {
    const setup = ({ userName = '' }) => {
        return shallowMount(Appbar, {
            propsData: {
                userName: userName
            }
        });
    }
    test('should render without errors', () => {
        const wrapper = setup({});
        expect(wrapper).toBeTruthy();
    });

    test('should render name of the props', () => {
        const userName = 'cerveloper';
        const wrapper = setup({ userName: userName });
        const name = wrapper.findComponent({ ref: 'portfolio-name' });
        expect(name.text()).toBe(userName);
    });

    test('should render 3 appbarbuttons', () => {
        const wrapper = setup({});
        const buttons = wrapper.findAllComponents(AppbarButton);
        expect(buttons.length).toBe(3);
    })
});

