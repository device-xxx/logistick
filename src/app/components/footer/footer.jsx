'use client';
import './index.scss';
import Image from 'next/image';
import { useState } from 'react';
export const Footer = ()=> {

        const [acitve,setActive] =useState(false);
    
   
    return(
        <>
        <footer className='relative max-w-[2000px] mx-auto flex flex-col' >
            <div className='First_row border-b border-b-[#94D1FF] px-[60px] py-[48px] flex items-start justify-between'>
                <div className='flex items-start gap-[63px] first-col'>
                    <div className='flex flex-col gap-[56px] mr-[50px]'>
                        <div><h1 className='text-[#005494] font-[900] text-[64px] footer_logo'><Image className='footer_logo' src={'/logo.svg'} alt='Logo' width={200} height={200}/></h1></div>
                        <div><button className='text-white font-[600] text-[24px] bg-[#005494] rounded-[8px] px-[12px] text-nowrap' onClick={()=> {
                             setActive((prev)=> !prev)
                        }} >Заказать обратный звонок</button></div>
                    </div>
                    <div className='flex gap-[63px] footer_menu_items'>
                    <div>
                        <ul className='flex flex-col gap-6'>
                            <li><a href="#gruz" className='text-[#005494] font-[700] text-[24px]'>Услуги</a></li>
                            <li><a href="https://docs.google.com/document/d/1huGiXDx5jBjFGtDsn5yVmsIzDTVKIR3G/edit?usp=drive_link&ouid=112087202378903553016&rtpof=true&sd=true" target='_blank' className='text-[#005494] font-[700] text-[24px]'>Тарифы</a></li>
                            <li><a href="#news" className='text-[#005494] font-[700] text-[24px]'>Новости</a></li>
                        </ul>
                    </div>
                    <div>
                    <ul className='flex flex-col gap-6'>
                            <li><a href="" className='text-[#005494] font-[700] text-[24px]'>Документация</a></li>
                            <li><a href="" className='text-[#005494] font-[700] text-[24px]'>Контакты</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[24px] footer_items'>
                    <div className='flex items-center gap-[19px] footer_grafik'>
                        <div><svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4168 41.1668L35.7502 45.5002L45.5002 35.7502M47.6346 27.1916C47.656 26.7971 47.6668 26.3999 47.6668 26.0002C47.6668 14.034 37.9663 4.3335 26.0002 4.3335C14.034 4.3335 4.3335 14.034 4.3335 26.0002C4.3335 37.7769 13.7293 47.3591 25.4336 47.6596M26.0002 13.0002V26.0002L34.1 30.0501" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='text-[#005494] text-[24px] max-w-[516px]'>Пн-Пт: с 09:00 до 18:00 (время московское)Сб-Вс: выходной</p></div>
                    </div>
                    <div className='flex items-center gap-[19px] footer_phone'>
                        <div><svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.4411 13.0002C32.5574 13.4131 34.5023 14.4481 36.0269 15.9727C37.5515 17.4973 38.5865 19.4422 38.9994 21.5585M30.4411 4.3335C34.8379 4.82194 38.9379 6.79087 42.068 9.91701C45.198 13.0432 47.1721 17.1407 47.6661 21.5368M22.1579 30.0368C19.5545 27.4334 17.4988 24.4897 15.9908 21.3488C15.8611 21.0787 15.7962 20.9436 15.7464 20.7727C15.5693 20.1652 15.6965 19.4193 16.0648 18.9049C16.1685 18.7601 16.2923 18.6363 16.54 18.3886C17.2975 17.6311 17.6762 17.2524 17.9239 16.8715C18.8577 15.4353 18.8577 13.5837 17.9239 12.1474C17.6762 11.7666 17.2975 11.3878 16.54 10.6304L16.1178 10.2081C14.9663 9.05668 14.3906 8.48095 13.7723 8.16821C12.5426 7.54622 11.0903 7.54622 9.86061 8.16821C9.24229 8.48095 8.66656 9.05668 7.5151 10.2081L7.17356 10.5497C6.02604 11.6972 5.45228 12.271 5.01408 13.051C4.52783 13.9166 4.17822 15.261 4.18117 16.2538C4.18383 17.1486 4.35739 17.76 4.70451 18.983C6.56994 25.5554 10.0896 31.7571 15.2636 36.9311C20.4376 42.1051 26.6393 45.6248 33.2117 47.4902C34.4347 47.8373 35.0461 48.0109 35.9409 48.0135C36.9337 48.0165 38.2781 47.6669 39.1437 47.1806C39.9237 46.7424 40.4975 46.1687 41.645 45.0211L41.9866 44.6796C43.138 43.5281 43.7137 42.9524 44.0265 42.3341C44.6485 41.1044 44.6485 39.6521 44.0265 38.4224C43.7137 37.8041 43.138 37.2284 41.9866 36.0769L41.5643 35.6547C40.8069 34.8972 40.4281 34.5185 40.0473 34.2708C38.611 33.337 36.7594 33.337 35.3231 34.2708C34.9423 34.5185 34.5636 34.8972 33.8061 35.6547C33.5584 35.9024 33.4346 36.0262 33.2898 36.1299C32.7754 36.4982 32.0295 36.6254 31.422 36.4483C31.2511 36.3985 31.116 36.3336 30.8459 36.2039C27.705 34.6959 24.7613 32.6402 22.1579 30.0368Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div>
                            <div><h1 className='text-[#005494] text-[24px]'>+7(966)0113995</h1></div>
                            {/* <div><h1 className='text-[#005494] text-[24px]'>8 (800) 707-53-40</h1></div> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-[19px] geo'>
                        <div><svg width="31" height="31" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5 33.35C30.367 33.35 34.3125 29.522 34.3125 24.8C34.3125 20.078 30.367 16.25 25.5 16.25C20.633 16.25 16.6875 20.078 16.6875 24.8C16.6875 29.522 20.633 33.35 25.5 33.35Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.5 59C37.25 47.6 49 37.3921 49 24.8C49 12.2079 38.4787 2 25.5 2C12.5213 2 2 12.2079 2 24.8C2 37.3921 13.75 47.6 25.5 59Z" stroke="#005494" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                        <div><p className='text-[#005494] text-[24px] max-w-[521px]'>Адрес компании г. Москва, ул. Платформа Северянин, вл.14, стр.1</p></div>
                    </div>
                </div>
            </div>



            <div className='py-[32px] px-[60px] footer_last_row'><p className='text-[#005494] text-[24px] footer_info'>Транспортная компания "TransNext" © 2019

Вся предоставленная информация и
цены, указанные на сайте, носят
информационный характер и не являются публичной офертой (ст. 437 ГК РФ).</p></div>
        </footer>
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
                  <div><input className='outline-none border border-[#005494] rounded-[8px]' placeholder='Иванов Иван Иванович' type="text" /></div>
              </div>
              <div className='input_box'>
                  <div className='mb-[20px]'><label htmlFor="" className='text-[#005494] font-[700] text-[24px]'>Телефон</label></div>
                  <div><input className='outline-none border border-[#005494] rounded-[8px]' placeholder='8 800 707-53-40' type="text" /></div>
              </div>
              <div className='flex-1 '><button className='gruz_btn w-full text-white font-[700] text-[24px] bg-[#005494] rounded-[8px] py-[5px] px-[12px]'>Заказать</button></div>
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