import React from 'react'
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'

describe('Tests on <GifGridItem />',() => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.png';
    const wrapper = shallow(
        <GifGridItem 
            title={title}
            url={url}
        /> 
    );

    test('shows the component correctly',() => {
        expect(wrapper).toMatchSnapshot();
    });

    test('must have a paragraph with a title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('match img', () => {
        const img = wrapper.find('img');
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('must have animate__fadeIn class',() => {
        const div = wrapper.find('div')
        expect(div.hasClass('animate__fadeIn'));
    })
});