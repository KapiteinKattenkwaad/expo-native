export type User = {
    id: number;
    name: string;
    email: string;
    username: string;
}

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error('Failed to fetch', {cause: response.statusText})
    }

    return response.json()
}