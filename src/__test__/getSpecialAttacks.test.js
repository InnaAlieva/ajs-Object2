import { getSpecialAttacks } from '../js/getSpecialAttacks';

test('должен вернуть массив специальных атак с описаниями', () => {
    const character = {
        special: [
            {
                id: 1,
                name: 'Атака 1',
                icon: 'http://...',
                description: 'Описание 1'
            },
            {
                id: 2,
                name: 'Атака 2',
                icon: 'http://...'
                // Описание отсутствует
            }
        ]
    };

    const expected = [
        {
            id: 1,
            name: 'Атака 1',
            icon: 'http://...',
            description: 'Описание 1'
        },
        {
            id: 2,
            name: 'Атака 2',
            icon: 'http://...',
            description: 'Описание недоступно'
        }
    ];

    expect(getSpecialAttacks(character)).toEqual(expected);
});
