import { defineStore } from 'pinia'

export const useUser = defineStore({
    id: 'user-store',

    state: () => {
        return {
            user: {
                firstname: 'Test',
                lustname: 'User',
                username: 'testuser',
                company: 'Tesla',
                address: 'Sidney, 56',
                country: 'Some Country',
                city: 'Sidney',
                postCode: '232323',
                email: 'testuser@gmail.com',
                phone: '+1-321-456-8756',
                website: 'testuser.com',
                fax: '313131',
                aboutMe: 'About Me)',
            },
            loading: false
        }
    },

    actions: {
        setUserData (userData) {
            this.user = userData
        } 
    }
})