import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() =>{
    document.title = `Salma Akter - ${title}`
   },[title])
};

export default useTitle;