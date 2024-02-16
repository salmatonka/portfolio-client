import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() =>{
    document.title = `${title} - Omme Salma`
   },[title])
};

export default useTitle;