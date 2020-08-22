import React from 'react';
import { shallow, mount } from 'enzyme';
import GoogleMap from '../Components/Spacex/GoogleMap/GoogleMap';
import GoogleMapActions from '../Components/Spacex/GoogleMap/GoogleMapActions/GoogleMapActions';
import GoogleMapComp from '../Components/Spacex/GoogleMap/GoogleMapComp/GoogleMapComp';

describe('<GoogleMap />', () => {
    let wrapper;
    let open = false
    const mockCallBack = jest.fn();
    beforeEach(() => {
        wrapper = mount(<GoogleMap open={open} mapVisiblity={mockCallBack} />);
    });

    it('check if only the Action render and the map not show', () => {
        expect(wrapper.find(GoogleMapActions)).toHaveLength(1);
        expect(wrapper.find(GoogleMapComp)).toHaveLength(0);
    });

    it('check if click open map triggered', () => {
        expect(wrapper.find(GoogleMapActions)).toHaveLength(1);
        wrapper.find('.GoToLocation').simulate('click');
        expect(mockCallBack).toHaveBeenCalled();

    });

    it('check if <GoogleMapComp/> apper when open', () => {
        wrapper.setProps({ open: true });
        expect(wrapper.find(GoogleMapComp)).toHaveLength(1);
    });
    

    
});