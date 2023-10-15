import {render,screen} from "@testing-library/react";
import Home from "@/app/page";

describe('Home',()=>{
    it('should have docs text',()=>{
        render(<Home />)
        const myElement= screen.getByText('Docs')
        expect(myElement).toBeInTheDocument()
    })
})
