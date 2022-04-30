import { NOTIFY_NEW_POST_TOKEN } from "@constants/constants";
import { getNotiNewPostToken } from "@lib/getNotiNewPostTokenApi";

const icon = `data:image/png;base64,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`;

export function pushNotification(data) {    

    const location = window.location.origin;

    const {title, slug, type, thumbnail : image, excerpt : body} = data;

    const post_url = type === 'post' || type === 'page' ? 
                            `${location}/${type}/${slug}` : 
                            `${location}/archive/${type}/${slug}`;

    navigator.serviceWorker.register('/sw.js');

    Notification.requestPermission(function(result) {

        if (result === 'granted') {

          navigator.serviceWorker.ready.then(function(registration) {           

            self.addEventListener('notificationclick', function(event) {      

                event.notification.close();
              
                // This looks to see if the current is already open and
                // focuses if it is
                event.waitUntil(clients.matchAll({
                  type: "window"
                }).then(function(clientList) {
                  for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    if (client.url == post_url && 'focus' in client)
                      return client.focus();
                  }
                  if (clients.openWindow)
                    return clients.openWindow(post_url);
                }));

            });

            registration.showNotification(title, { icon, body, image });

          });
        }
      });

}

export async function setNotiTimer() {

    const data = await getNotiNewPostToken();
  
    if ( data ) {

      const result = JSON.parse(data);
      const token = result.token;
  
      const _token = localStorage.getItem(NOTIFY_NEW_POST_TOKEN);
  
      if ( token !== _token ) {
  
        pushNotification(result);

        localStorage.setItem(NOTIFY_NEW_POST_TOKEN, token);
  
      }
  
    }
  
}