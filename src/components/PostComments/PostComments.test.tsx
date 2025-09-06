import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar 2 comentários', () => {
        render(<PostComment />)

        const button = screen.getByTestId('btn-comment')
        const textArea = screen.getByTestId('textarea-comment')

        fireEvent.change(textArea, {
            target: {
                value: 'comentário de teste'
            }
        })
        fireEvent.click(button)

        fireEvent.change(textArea, {
            target: {
                value: 'comentário de teste 2'
            }
        })
        fireEvent.click(button)

        expect(screen.getAllByTestId('list-comment')).toHaveLength(2)
    })
});