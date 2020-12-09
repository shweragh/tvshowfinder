import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

import Enzyme,{shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
    it('search renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders with search button', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('div.btn-search').exists()).toBe(true);
    });
    it('renders with input field', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('input').exists()).toBe(true);
    });
    it('simulate search click event', () => {
        const mockCallBackClick = jest.fn();
        const wrapper = shallow(<Search/>);
        wrapper.find('div.btn-search').simulate('click');
    });
    

});


