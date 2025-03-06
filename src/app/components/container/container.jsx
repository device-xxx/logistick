'use client';
import Image from 'next/image';
import './index.scss';
import { useState,useEffect } from 'react';
export const Container = ()=> {
  const [send,setSend] = useState(false);
      const [user,setUser] = useState({
            name:'',
            email:''
        })
        const Submit =async()=> {
      
            
       if(user.email && user.name) {
        setSend(true)
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
       <div id='container' className='container_container w-full flex flex-col  mt-[48px]  '>
        <div><Image quality={100} src={'/container.jpeg'} alt='Truck' width={400} height={400}/></div>
        <div className='' >  
              <div className='gruz_info_box bg-[#CBE8FF] px-[60px] flex flex-col gap-6 justify-between pb-[50px]   '>
                <div className=' pt-[25px] max-w-[2000px] mx-auto'>
                <div className='description'>
                    <div className='mt-[30px]'><h1 className='text-[#005494] text-[48px] font-[700]'>Перевозка контейнеров
                    </h1></div>
                    <div className='mt-[20px]'><p className='text-[#005494] font-[400] text-[32px]'>Контейнерные перевозки считаются <span className='font-[700]'>самым современным способом грузоперевозок и самым экономичным и удобным</span> способом доставки груза, особенно на большие расстояния.
Данный вид перевозок занимает <span className='font-[700]'>более 70%</span> всех мировых грузопотоков.
Одно из основных преимуществ при перевозке грузов железнодорожным контейнером, это <span className='font-[700]'>безопасность и гарантия сохранности товара.</span>
Данный вид перевозки подходит как для <span className='font-[700]'>юридических, так и для физических лиц.</span></p></div>
                </div>
                <div className='container_form_container mt-[36px]  max-w-[1210px] rounded-[8px] border border-[#005494] '>
<div className='title_box bg-[#005494] px-[35px] py-[10px] overflow-hidden'>
    <div><h1 className='text-white font-[700] text-[48px]'>Отправить груз</h1></div>
    <div><p className='font-[400] text-white text-[20px]'>Введите Ваши данные, чтобы отправить груз, и наш менеджер свяжется с Вами</p></div>
</div>
<div className='form rounded-t-[8px] bg-white border-t border-t-[#005494] py-[16px] px-[35px] flex flex-col gap-4'>
    <div className='flex gap-3 items-end inputs'>
        <div className='input_box'>
            <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>ФИО</label></div>
            <div><input  onChange={(e)=> {
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
                    
                  }}  className='outline-none border border-[#005494] rounded-[8px]' placeholder='8 800 707-53-40' type="text" /></div>
        </div>
        <div className='flex-1 '><button onClick={Submit} className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
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
            </div></div>
  </div>
       </div>
       {send && <div className='fixed z-[99999999]  w-full h-[100vh] left-[0] top-[0] bg-black/50 flex items-center justify-center' >
<div className='mx-[30px] bg-[#CBE8FF] flex items-center justify-center rounded-[20px] px-[20px] h-[200px] relative' > 
<svg onClick={()=> {
    setSend(false)
}} className='absolute right-[20px] top-[20px] cursor-pointer' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 1L1 21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M21 21L1 0.999999" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>

<h1 className='text-[#005494] text-[24px] font-[700] text-center'>Спасибо! Данные успешно отправленны.</h1>
</div>
    </div>}
       </>
    )
}