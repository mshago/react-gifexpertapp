import {render,screen} from '@testing-library/react'
import { GifGrid } from "../../components/GifGrid";

describe('Tests on <GifGrid /> ', () => {

  const category = 'One Punch';

  test('should show loading first', () => { 

    render(<GifGrid/>)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))

   })

})