export const AppRoutes = {
  user: {
    path: 'user',
    children: {
      logIn: 'log-in',
      registration: 'registration',
      passwordReminder: 'password-reminder',
      passwordChanger: 'password-changer'
    }
  },
  admin: {
    path: 'admin',
    children: {
      usersList: 'users-list',
      tripCreator: 'trip-creator',
      tripEditor: 'trip-editor',
    }
  },
  trip: {
    path: 'trip',
    children: {
      tripsList: 'trips-list'
    }
  }
};
