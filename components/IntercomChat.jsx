import { useEffect } from 'react';

const IntercomChat = () => {
  useEffect(() => {
    const intercomAppId = "m47ydpoq";
    console.log(intercomAppId);
    if (intercomAppId) {
        window.intercomSettings = {
            api_base: intercomAppId,
            app_id: "m47ydpoq",
            name: "<%= current_user.name %>", // Full name
            email: "<%= current_user.email %>", // Email address
            created_at: "<%= current_user.created_at.to_i %>" // Signup date as a Unix timestamp
          };

      // Clean up when the component is unmounted
      return () => {
        window.Intercom('shutdown');
      };
    }
  }, []);

  return null; // Intercom code doesn't render any UI
};

export default IntercomChat;
