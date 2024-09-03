const baseUrl = 'https://66ced4b6901aab24841fbca2.mockapi.io/Users';

const save = (user) => {
    if (user) {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const login = async (email, password) => {
    try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
            throw new Error('Sorry, something went wrong');
        }
        const users = await res.json();
        const user = users[0];

        if (user) {
            save(user);
            return user;
        } else {
            throw new Error('Invalid email or password.');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const register = async (email, username, password) => {

    const registerRes = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
    });

    const user = await registerRes.json();
    save(user);
    return user;

};

export const logout = () => {
    localStorage.removeItem('userId');
};

