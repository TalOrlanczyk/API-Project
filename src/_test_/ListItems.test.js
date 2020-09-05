import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItems from '../Containers/ListItems/ListItems';
import Item from '../Containers/ListItems/Item/Item';
import { fireEvent } from '@testing-library/react';

describe('<ListItems />', () => {
    let wrapper;
    let open = false;
    let currency = "ILS";
    const body = document.querySelector('body');
    const mockSetOpen= jest.fn();
    const mockonChangeCurrency = jest.fn();
    beforeEach(() => {
        wrapper = mount(<ListItems open={open} setOpen={mockSetOpen} value={currency} onChangeCurrency={mockonChangeCurrency}> 
            <ListItems.Item option="ILS"/>
            <ListItems.Item option="EUR"/>
        </ListItems>);
    });

    it('check is Picked Item Is Right ', () => {
        expect(wrapper.find('.MoneyValue.listItem').text()).toEqual('ILS');
    });
    it('check is press open the list', () => {
        wrapper.find('.Picker').simulate('click');
        expect(mockSetOpen).toHaveBeenCalled();
        wrapper.setProps({ open: true });
        expect(wrapper.find('.list').exists()).toBeTruthy();
    });
    it('check is press again close the list', () => {
        wrapper.setProps({ open: true });
        wrapper.find('.Picker').simulate('click');
        expect(mockSetOpen).toHaveBeenCalled();
        wrapper.setProps({ open: false });
        expect(wrapper.find('.list').exists()).not.toBeTruthy();
    });
    it('check is press item change onChange get Called', () => {
        wrapper.setProps({ open: true });
        wrapper.findWhere(el => el.is(Item) && el.prop('option') === 'EUR').simulate('click');
        expect(mockonChangeCurrency).toHaveBeenCalled();
        wrapper.setProps({ value:'EUR',open: false });
        expect(wrapper.find('.MoneyValue.listItem').text()).toEqual('EUR');
        expect(wrapper.find('.list').exists()).not.toBeTruthy();

    });
    it('check if press outside of the list close it', ()=>{
        fireEvent(body, new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
          }));
          expect(wrapper.find('.list').exists()).not.toBeTruthy();
    })
});