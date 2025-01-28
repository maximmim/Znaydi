import { useEffect,useState } from "react";


const Home = () => {
    const [userData, setUserData] = useState({});
        
    const [userID, setUserId] = useState(null);
        
    useEffect(() => {

        try {
        const tg = window.Telegram.WebApp;
          const telegramInitData = window.Telegram.WebApp.initDataUnsafe;

          tg.setBackgroundColor("#ffffff");
            

          const { first_name, last_name, username, photo_url } =
            telegramInitData.user;
          
          setUserData({ first_name, last_name, username, photo_url });
            console.log(photo_url)
          if (telegramInitData?.user?.id) {
            setUserId(telegramInitData.user.id);
          }
        } catch (error) {
          console.error('Error initializing Telegram Web App:', error);
        }
    }, []);
    return ( 
        <>
            <h1 className="fwaawg">userData</h1>
        </>
     );
}
 
export default Home;