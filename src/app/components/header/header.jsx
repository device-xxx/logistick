'use client';
import Image from 'next/image';
import { useState } from 'react';
import './index.scss';

export const Header = ()=> {
    const [menu,setMenu] = useState(false);
    const [acitve,setActive] =useState(false);
    const [user,setUser] = useState({
        name:'',
        email:''
    })

    const HandleChange = ()=> {
        setMenu((prev)=> !prev)
    }
    const Submit =async()=> {
     console.log(user);
     
if(user.email && user.name) {
    setActive(false)
             
            try {
              // Отправка POST-запроса на сервер
              const response = await fetch("/api/message", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.name,
                    email:user.email,
                  }),
              });
        
          
       
             
            } catch (error) {
              console.error("Ошибка:", error);
            }
        }
    }
    return(
        <>
        <header className='flex flex-col max-w-[2000px] m-auto relative '>
            <div className='py-[20px] header flex w-full items-center justify-between border-b border-b-[#94D1FF] px-[60px] gap-[100px] header'>
                <div className='logo text-[#005494] text-[64px] font-[900] '><Image src={'/logo.svg'} alt='Logo' width={200} height={200}/></div>
                <div className='flex items-center gap-11 header_right_bar'>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4168 41.1667L35.7502 45.5L45.5002 35.75M47.6346 27.1914C47.656 26.797 47.6668 26.3998 47.6668 26C47.6668 14.0338 37.9663 4.33333 26.0002 4.33333C14.034 4.33333 4.3335 14.0338 4.3335 26C4.3335 37.7767 13.7293 47.3589 25.4336 47.6594M26.0002 13V26L34.1 30.0499" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='header_info_text text-[#005494] text-[24px] font-[400] max-w-[516px] w-full'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="51" height="61" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#005494" strokeidth="4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494]  header_info_text max-[300px]'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</div>
                      {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] header_info_box'>
                        <div><svg className='Header_svg' width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.4411 13C32.5574 13.4129 34.5023 14.4479 36.0269 15.9725C37.5515 17.4972 38.5865 19.4421 38.9994 21.5583M30.4411 4.33333C34.8379 4.82178 38.9379 6.79071 42.068 9.91685C45.198 13.043 47.1721 17.1405 47.6661 21.5367M22.1579 30.0367C19.5545 27.4332 17.4988 24.4895 15.9908 21.3487C15.8611 21.0785 15.7962 20.9434 15.7464 20.7725C15.5693 20.1651 15.6965 19.4192 16.0648 18.9047C16.1685 18.76 16.2923 18.6361 16.54 18.3885C17.2975 17.631 17.6762 17.2522 17.9239 16.8714C18.8577 15.4351 18.8577 13.5835 17.9239 12.1473C17.6762 11.7664 17.2975 11.3877 16.54 10.6302L16.1178 10.208C14.9663 9.05652 14.3906 8.48079 13.7723 8.16805C12.5426 7.54606 11.0903 7.54606 9.86061 8.16805C9.24229 8.48079 8.66656 9.05652 7.5151 10.208L7.17356 10.5495C6.02604 11.697 5.45228 12.2708 5.01408 13.0509C4.52783 13.9165 4.17822 15.2609 4.18117 16.2537C4.18383 17.1484 4.35739 17.7599 4.70451 18.9828C6.56994 25.5552 10.0896 31.757 15.2636 36.9309C20.4376 42.1049 26.6393 45.6246 33.2117 47.49C34.4347 47.8371 35.0461 48.0107 35.9409 48.0134C36.9337 48.0163 38.2781 47.6667 39.1437 47.1805C39.9237 46.7423 40.4975 46.1685 41.645 45.021L41.9866 44.6794C43.138 43.528 43.7137 42.9522 44.0265 42.3339C44.6485 41.1042 44.6485 39.652 44.0265 38.4222C43.7137 37.8039 43.138 37.2282 41.9866 36.0767L41.5643 35.6545C40.8069 34.897 40.4281 34.5183 40.0473 34.2707C38.611 33.3369 36.7594 33.3369 35.3231 34.2707C34.9423 34.5183 34.5636 34.897 33.8061 35.6545C33.5584 35.9022 33.4346 36.026 33.2898 36.1297C32.7754 36.498 32.0295 36.6252 31.422 36.4482C31.2511 36.3983 31.116 36.3335 30.8459 36.2038C27.705 34.6958 24.7613 32.6401 22.1579 30.0367Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>+7(495)0113995</div>
                      {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    
                    <div><button className='header_btn text-nowrap outline-none border-none font-[700] text-[24px] text-white bg-[#005494] rounded-[8px] py-[10px] px-[12px]' onClick={()=> {
                        setActive((prev)=> !prev)
                    }}>Онлайн - заявка</button></div>
                    <div className='menu_btn hidden' onClick={HandleChange}><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5H5M18 1H1M18 9H1M18 13H5" stroke="#005494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                </div>
             
            </div>


            <div className='low_res_visible_info gap-3'>

            <div className='flex items-center  gap-3 '>
                        <div><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 18L15.5 20L20 15.5M20.9851 11.5499C20.995 11.3678 21 11.1845 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.4354 5.33651 20.858 10.7385 20.9966M11 5V11L14.7384 12.8692" stroke="#CBE8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
                        <div><p className='header_info_text text-[#005494] text-[24px] font-[400] max-w-[250px] text-center'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] '>
                        <div><svg width="22" height="22" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#CBE8FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494]  header_info_text max-w-[300px] text-center'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</div>
                     {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] '>
                        <div><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0497 5C15.0264 5.19057 15.924 5.66826 16.6277 6.37194C17.3314 7.07561 17.8091 7.97326 17.9997 8.95M14.0497 1C16.0789 1.22544 17.9713 2.13417 19.4159 3.57701C20.8606 5.01984 21.7717 6.91101 21.9997 8.94M10.2266 12.8631C9.02506 11.6615 8.07627 10.3028 7.38028 8.85323C7.32041 8.72854 7.29048 8.66619 7.26748 8.5873C7.18576 8.30695 7.24446 7.96269 7.41447 7.72526C7.46231 7.65845 7.51947 7.60129 7.63378 7.48698C7.98338 7.13737 8.15819 6.96257 8.27247 6.78679C8.70347 6.1239 8.70347 5.26932 8.27247 4.60643C8.15819 4.43065 7.98338 4.25585 7.63378 3.90624L7.43891 3.71137C6.90747 3.17993 6.64174 2.91421 6.35636 2.76987C5.7888 2.4828 5.11854 2.4828 4.55098 2.76987C4.2656 2.91421 3.99987 3.17993 3.46843 3.71137L3.3108 3.86901C2.78117 4.39863 2.51636 4.66344 2.31411 5.02348C2.08969 5.42298 1.92833 6.04347 1.9297 6.5017C1.93092 6.91464 2.01103 7.19687 2.17124 7.76131C3.03221 10.7947 4.65668 13.6571 7.04466 16.045C9.43264 18.433 12.295 20.0575 15.3284 20.9185C15.8928 21.0787 16.1751 21.1588 16.588 21.16C17.0462 21.1614 17.6667 21 18.0662 20.7756C18.4263 20.5733 18.6911 20.3085 19.2207 19.7789L19.3783 19.6213C19.9098 19.0898 20.1755 18.8241 20.3198 18.5387C20.6069 17.9712 20.6069 17.3009 20.3198 16.7333C20.1755 16.448 19.9098 16.1822 19.3783 15.6508L19.1835 15.4559C18.8339 15.1063 18.6591 14.9315 18.4833 14.8172C17.8204 14.3862 16.9658 14.3862 16.3029 14.8172C16.1271 14.9315 15.9523 15.1063 15.6027 15.4559C15.4884 15.5702 15.4313 15.6274 15.3644 15.6752C15.127 15.8453 14.7828 15.904 14.5024 15.8222C14.4235 15.7992 14.3612 15.7693 14.2365 15.7094C12.7869 15.0134 11.4282 14.0646 10.2266 12.8631Z" stroke="#CBE8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
                        <div>
                     <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>+7(495)0113995</div>
                     {/* <div className='font-[400] text-[24px] text-[#005494] text-nowrap header_info_text'>8 (800) 707-53-40</div> */}
                        </div>
                    </div>
            </div>



            <div className={`menu w-full flex items-center justify-center py-[24px] border-b border-b-[#94D1FF] ${menu == true ? 'menu_active':'menu_disable'}`}>
                <ul className='flex gap-11'>
                    <li><a href="#container" className='text-[#005494] font-[400] text-[24px]'>Услуги</a></li>
                    <li><a href="https://docs.google.com/document/d/1huGiXDx5jBjFGtDsn5yVmsIzDTVKIR3G/edit?usp=drive_link&ouid=112087202378903553016&rtpof=true&sd=true" target='_blank' className='text-[#005494] font-[400] text-[24px]'>Тарифы</a></li>
                    <li><a href="#news" className='text-[#005494] font-[400] text-[24px]'>Новости</a></li>
                    <li><a href="" className='text-[#005494] font-[400] text-[24px]'>Документация</a></li>
                    <li><a href="" className='text-[#005494] font-[400] text-[24px]'>Контакты</a></li>
                </ul>
            </div>
        </header>
{acitve == true && 
<div className='fixed left-0 top-0 flex items-center justify-center z-[9999999999] bg-black/60   w-full h-[100vh]'>
      <div className=' max-w-[1210px] w-[70%] z-50 mt-[36px] fixed_form_container  rounded-[8px] border border-[#005494] '>
      <div className='title_box bg-[#005494] px-[35px] py-[10px] overflow-hidden flex justify-between items-center'>
        <div> <div><h1 className='text-white font-[700] text-[48px]'>Заявка на бесплатный расчет</h1></div>
        <div><p className='font-[400] text-white text-[20px]'>Введите Ваши данные, чтобы отправить груз, и наш менеджер свяжется с Вами</p></div></div>
        <div onClick={()=> {
            setActive(false)
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="white">
  <path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 0 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z"/>
</svg>
</div>
         
      </div>
      <div className='bg-white form rounded-t-[8px] border-t border-t-[#005494] py-[16px] px-[35px] flex flex-col gap-4'>
          <div className='flex gap-3 items-end'>
              <div className='input_box'>
                  <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>ФИО</label></div>
                  <div><input onChange={(e)=> {
                    setUser({...user,name:e.target.value})
                    
                  }} className='outline-none border border-[#005494] rounded-[8px]' placeholder='Иванов Иван Иванович' type="text" /></div>
              </div>
              <div className='input_box'>
                  <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>Телефон</label></div>
                  <div><input onInput={(e) => {
          // Убираем все символы, кроме цифр, пробела и дефиса при вставке
          e.target.value = e.target.value.replace(/[^0-9\s\-]/g, '');
        }} onChange={(e)=> {
                    setUser({...user,email:e.target.value})
                    
                  }} className='outline-none border border-[#005494] rounded-[8px]' placeholder='8 800 707-53-40' type="text" /></div>
              </div>
              <div className='flex-1 '><button onClick={Submit}  className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
          </div>
          <div> <div className="custom-checkbox-container">
                  <label className="flex gap-2">
                      <input type="checkbox" className="rounded-[8px] w-[28px] h-[28px]" />
                      <span className="text-[#005494] text-[20px]">
                      Я согласен(на) на обработку персональных данных
                      </span>
                  </label>
              </div></div>
      </div>
                      </div>
                      </div>
}
        </>
    )
}