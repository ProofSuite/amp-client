export type NotificationState = {
  +number: [
    {
      id: number,
      message: string,
      intent: string,
    },
  ],
};

export type Notification = {
  id: number,
  message: string,
  intent: string,
};
