import React from 'react';
import { shallow, mount } from 'enzyme';
import Spacex from '../Components/Spacex/Spacex';
import { act } from 'react-dom/test-utils';
import { SpaceXNextLaunche, getData } from '../API/GET/spacex';
import MockPromise from '../testUtils/MockPromise';
import LoadingComp from '../Components/LoadingComp/LoadingComp';
import LauncheDetail from '../Components/Spacex/LauncheDetail/LauncheDetail';

jest.mock("../API/GET/spacex", () => ({
    SpaceXNextLaunche: jest.fn(),
}));

let getDataPromise;

SpaceXNextLaunche.mockImplementation(() => {
    getDataPromise = new MockPromise();

    return getDataPromise;
});
describe('<Spacex />', () => {
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = mount(<Spacex />);
    });
    it('check is Load', () => {
        let loadingNode = wrapper.find(LoadingComp);
        let dataNode = wrapper.find(LauncheDetail);
        expect(loadingNode).toHaveLength(1);
        expect(dataNode).toHaveLength(0);
    })
    it('check if get data loading disaper', async () => {
        // const wrapper = mount(<Spacex />);
        let loadingNode = wrapper.find(LoadingComp);
        let dataNode = wrapper.find(LauncheDetail);
        expect(loadingNode).toHaveLength(1);
        expect(dataNode).toHaveLength(0);
        await getDataPromise.resolve({
            "links": {
                "patch": {
                    "small": null,
                    "large": null
                },

            },
            "name": "SAOCOM 1B, GNOMES-1 & Capella 2 (Sequoia)",
            "date_local": "2020-08-27T19:19:00-04:00",
            "launchpad": {
                "full_name": "Cape Canaveral Air Force Station Space Launch Complex 40"
            },
            "id": "5eb87d47ffd86e000604b38a"
        });
        wrapper.update();
        loadingNode = wrapper.find(LoadingComp);
        dataNode = wrapper.find(LauncheDetail);
        expect(loadingNode).toHaveLength(0);
        expect(dataNode).toHaveLength(1);


    });


});