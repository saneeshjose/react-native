import {Notifications, Permissions} from 'expo'

/*Sets a everyday repeating reminder since @date*/
export const setReminder = (date, repeat)=> {

  const notification = {
      title : 'Flashcards for today',
      body : 'Hey, you haven\'t completed a FlashCard today',
      ios : {
        sound : true
      }
  };

  Permissions.askAsync(Permissions.NOTIFICATIONS).then( ({status})=>{
    if( status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      Notifications.scheduleLocalNotificationAsync( notification, {time:date, repeat:repeat} );
    }
    else {
      alert('MobileFlashCards required permission to send notifications' );
    }});
}
