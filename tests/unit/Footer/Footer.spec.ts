import { shallowMount } from "@vue/test-utils";

import Footer from "@/components/Footer/Footer.vue";
import IconButton from "@/components/UI/IconButton/IconButton.vue";

describe('Footer.vue', () => {
    const setup = () => {
        return shallowMount(Footer, {
            propsData: {}
        });
    };

    test('should render without errors', () => {
        const wrapper = setup();
        expect(wrapper).toBeTruthy();
    });

    test('should render icon button for each contact form', () => {
        const wrapper = setup();
        const iconButtons = wrapper.findAllComponents(IconButton);
        expect(iconButtons.length).toBe(3);
    });
});