import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from '../componentes/footer';

describe("<Footer />", () => {
    it("Renderiza os links do footer corretamente", () => { 
        render(<Footer />);
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(2);
    });
});
