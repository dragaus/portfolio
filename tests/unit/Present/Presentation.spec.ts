import { shallowMount } from "@vue/test-utils";

import Presentation from '@/components/Presentation/Presentation.vue';

describe('Presentation.vue', () => {
    const setup = ({ portfolioName = 'Paco', miniResume = 'resume'}) => {
        return shallowMount(Presentation, {
            propsData: {
                portfolioName,
                miniResume
            }
        });
    }

    test('should render without error', () => {
        const wrapper = setup({});
        expect(wrapper).toBeTruthy();
    });

    test('should render name', () => {
        const portfolioName = 'Francisco';
        const wrapper = setup({ portfolioName });
        expect(wrapper.props().portfolioName).toContain(portfolioName);
    });

    test('should render image', () => {
        const wrapper = setup({});
        const image = wrapper.findAllComponents({ ref: 'image-renderer' });
        expect(image.length).toBe(1);
    });

    test('should render small description', () => {
        const miniResume = 'Game Developer';
        const wrapper = setup({ miniResume });
        const nameRender = wrapper.findComponent({ ref: 'resume-renderer' });
        expect(nameRender.text()).toBe(miniResume);
    });
});