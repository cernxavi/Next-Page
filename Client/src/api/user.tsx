import { UserLogin } from "../interfaces/UserLogin";

export const signUpUser = async (userInfo: UserLogin) => {
    try {
        const response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })

        if (!response.ok) {
            console.log('Error from user signup: ', response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Error from user signup: ', err);
        return Promise.reject('Could not fetch user info');
    }
};