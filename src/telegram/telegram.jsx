

export default function Telegram () {
    const [userData, setUserData] = useState({});

        try {
          const telegramInitData = window.Telegram.WebApp.initDataUnsafe;
          const { first_name, last_name, username, photo_url } =
            telegramInitData.user;
          setUserData({ first_name, last_name, username, photo_url });
    
          if (telegramInitData?.user?.id) {
            setUserId(telegramInitData.user.id);
          }
        } catch (error) {
          console.error('Error initializing Telegram Web App:', error);
        }
    
    return ( userData);
}
 
