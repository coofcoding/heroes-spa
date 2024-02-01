import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "../../../src/heroes/pages/Hero";
import { MemoryRouter } from "react-router-dom";
import { getHeroeById } from "../../../src/heroes/helpers";
import { act } from "react-dom/test-utils";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

jest.mock('../../../src/heroes/helpers/getHeroeById')

describe('Pruebas al componente <Hero/>', () => {

    beforeEach(() => jest.resetAllMocks());

    test('debe de hacer match con el snapshot', () => {

        getHeroeById.mockReturnValue({
            'id': 'dc-batman',
            'superhero': 'Batman',
            'publisher': 'DC Comics',
            'alter_ego': 'Bruce Wayne',
            'first_appearance': 'Detective Comics #27',
            'characters': 'Bruce Wayne'
        })

        const { container } = render(
            <MemoryRouter initialEntries={[`/hero/dc-batman`]}>
                <Hero />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();

    });

    test('al presionar el botón, debe de retroceder una vez', () => {

        getHeroeById.mockReturnValue({
            'id': 'dc-batman',
            'superhero': 'Batman',
            'publisher': 'DC Comics',
            'alter_ego': 'Bruce Wayne',
            'first_appearance': 'Detective Comics #27',
            'characters': 'Bruce Wayne'
        })

        const { container } = render(
            <MemoryRouter initialEntries={[`/hero/dc-batman`]}>
                <Hero />
            </MemoryRouter>
        )

        const goBack = screen.getByTestId("goback-btn");
        fireEvent.click(goBack);
        
        expect( mockUseNavigate ).toHaveBeenCalledWith(-1, { replace: true })
    });
});