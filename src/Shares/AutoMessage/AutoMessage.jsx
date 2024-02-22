import React from 'react';
import  { useEffect, useState } from 'react';
const AutoMessage = () => {
    const [myMessage, setMyMessage] = useState('')

    const messages = [
        {
            id: 1,
            msg: "Did you know? How cute you are! 🥰"
        },
        {
            id: 2,
            msg: "You are only one & unic in the world!😎"
        },
        {
            id: 3,
            msg: "When 404! My heart is blocked 😂"
        }
    ]

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setMyMessage(messages[i].msg);
            i++;
            if (i >= messages.length) {
                i = 0;
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [messages.id]);


    return (
        <div className='pt-24  px-10 flex justify-end  '>
            <div className='p-2 bg-[#35c3e30f] rounded-r-xl border-l-4 border-emerald-500 mb-5 md:mb-0'>
                {
                    <h2 className='text-emerald-500'>{myMessage}</h2>
                }

            </div>
        </div>
    );
};

export default AutoMessage;