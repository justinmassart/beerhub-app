import {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

//import {onAppStartup} from 'app/Services/AppLifecycle';

import sleep from '../Helpers/sleep';

const AppLifecycleProvider = ({children}: {children: JSX.Element}) => {
  const [loaded, setLoaded] = useState(false);

  const init = async () => {
    try {
      //await onAppStartup();
    } catch (error) {
      console.error(error);
    } finally {
      setLoaded(true);
      await sleep(100); // Ensures children are rendered to avoid white screen jump
      await RNBootSplash.hide({fade: true});
    }
  };

  useEffect(() => {
    init();
  }, []);

  return loaded ? children : null;
};

export default AppLifecycleProvider;
