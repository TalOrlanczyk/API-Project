import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'
import WithLoading from '../HoC/WithLoading/WithLoading';
import LoadingComp from '../Components/LoadingComp/LoadingComp'
describe('WithLoading', () => {
    let wrapper;
    it('show render loading scrren', () => {
        const WithLoadingComponent = WithLoading(App);
        wrapper = shallow(
            <WithLoadingComponent isLoading={true} />
          );
          expect(wrapper.find(LoadingComp)).toHaveLength(1);
          expect(wrapper.find(App)).toHaveLength(0)
    });
    it('show render Component scrren', () => {
        const WithLoadingComponent = WithLoading(App);
        wrapper = shallow(
            <WithLoadingComponent isLoading={false} />
          );
          expect(wrapper.find(LoadingComp)).toHaveLength(0);
          expect(wrapper.find(App)).toHaveLength(1);
    });
    
});
