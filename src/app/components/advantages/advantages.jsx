import Image from 'next/image';
import './index.scss';

export const Advantages = ()=> {
    return(
        <div id='advantages' className='advantages_container w-full px-[60px] mt-[44px] max-w-[2000px] mx-auto'>
            <div className='adventages_title'><h1 className='text-[#005494] font-[700] text-[48px]'>Наши преимущества</h1></div>
            <div className='advantages_box'>
                <div>
                    <div><Image src={'/advantages/plane.png'} alt='Img' width={194} height={194} quality={100}/></div>
                    <div><h1 className='text-[#005494] text-[32px] '>Перевозка разными типами транспорта</h1></div>
                </div>
                <div>
                    <div><Image src={'/advantages/map.png'} alt='Img' width={194} height={194} quality={100}/></div>
                    <div><h1 className='text-[#005494] text-[32px] '>Услуга от Двери
                    до Двери</h1></div>
                </div>
                <div>
                    <div><Image src={'/advantages/shield.png'} alt='Img' width={194} height={194} quality={100}/></div>
                    <div><h1 className='text-[#005494] text-[32px] '>Ответственное
                    хранение груза</h1></div>
                </div>
                <div>
                    <div><Image src={'/advantages/protection.png'} alt='Img' width={194} height={194} quality={100}/></div>
                    <div><h1 className='text-[#005494] text-[32px] '>Перевозка
                    под ключ</h1></div>
                </div>
                <div>
                    <div><Image src={'/advantages/profile.png'} alt='Img' width={194} height={194} quality={100}/></div>
                    <div><h1 className='text-[#005494] text-[32px] '>Персональный
                    менеджер</h1></div>
                </div>
            </div>
        </div>
    )
}