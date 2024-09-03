const baseUrl = 'https://66ced4b6901aab24841fbca2.mockapi.io/Games';

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
};

export const getOne = (gameId) => {
    return fetch(`${baseUrl}?gameId=${gameId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error with fetching.');
            }
            return res.json();
        })
        .then(data => {
            return data[0];
        });
};

export const like = (gameId) => {
    return fetch(`${baseUrl}?gameId=${gameId}`)
        .then(res => res.json())
        .then(data => {
            if (data.length === 0) {
                throw new Error('Game not found.');
            }
            const game = data[0];
            return fetch(`${baseUrl}/${game.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likes: (game.likes || 0) + 1
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to update likes.');
                    }
                    return res.json();
                });
        });
}

