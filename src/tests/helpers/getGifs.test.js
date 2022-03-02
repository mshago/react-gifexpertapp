import { getGifs } from '../../helpers/getGifs'

describe('Test with fetch', () => {
    
    test('should fetch 10 elements', async() => {
      
        const gifs = await getGifs('Attack on Titan');

        expect(gifs.length).toBe( 10 );

    });
    
    test('should fetch 10 elements', async() => {
      
        const gifs = await getGifs('');

        expect(gifs.length).toBe( 0 );

    });


})