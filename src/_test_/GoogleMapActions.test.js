import React from 'react';
import { shallow, mount } from 'enzyme';
import GoogleMapActions from '../Components/Spacex/GoogleMap/GoogleMapActions/GoogleMapActions';

describe('<GoogleMapActions />', () => {
    let wrapper;
    let open = false
    const mockCallBack = jest.fn();
    beforeEach(() => {
        wrapper = shallow(<GoogleMapActions open={open} openMap={mockCallBack} />);
    });

    it('check is Open map is showen ', () => {
        expect(wrapper.find('.OpenMapSpan').text()).toEqual('Open map');
    });

    it('check if click open map in page button triggered', () => {
        wrapper.find('.GoToLocation').simulate('click');
        expect(mockCallBack).toHaveBeenCalled();

    });
    it('check is close map is showen', () => {
        wrapper.setProps({ open: true });
        expect(wrapper.find('.OpenMapSpan').text()).toEqual('Close map');

    });

    
});