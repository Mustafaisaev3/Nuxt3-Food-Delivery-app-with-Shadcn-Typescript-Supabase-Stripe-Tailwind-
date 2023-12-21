import { defineStore } from 'pinia'

export const useUi = defineStore({
    id: 'ui-store',

    state: () => {
        return {
            showCart: false,
            showMobileMenu: false,

            // Notification
            notifications: [],
            notificationsData: null,
        }
    },

    getters: {
        isNotifications () {
            return !!this.notifications.length
        },
    },

    actions: {
        openCart () {
            this.showCart = true
        },
        closeCart () {
            this.showCart = false
        },

        // MobileMenu
        openMobileMenu() {
            this.showMobileMenu = true
        },
        closeMobileMenu () {
            this.showMobileMenu = false
        },

        // Notifications
        addNotification(payload) {
            this.notifications.push({id: Math.random() + 1000, ...payload})
            this.deleteNotification()
        },
        deleteNotification() {
            setTimeout(() => {
                this.notifications.shift()
            }, 5000)
        },
        deleteNotificationById(id) {
            console.log(id)
            const foundNotificationIndex = this.notifications.findIndex(notification => {
                return notification.id === id
            })
            this.notifications.splice(foundNotificationIndex, 1)
        },

    }
})