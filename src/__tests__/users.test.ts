import { fetchUsers } from '../api/users';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
            Promise.resolve([
                {
                    id: 1, name: 'John', email: 'johny.pony@email.com', username: 'johny'
                }
            ]),

    })
) as jest.Mock

describe('fetchUsers', () => {
    it('returns user data correctly', async () => {
        const users = await fetchUsers()
        expect(users[0].name).toBe('John')
    })

    it('throws error when fetch fails', async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({ ok: false })
        );
        await expect(fetchUsers()).rejects.toThrow('Failed to fetch')
    })
})