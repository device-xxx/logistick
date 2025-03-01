'use client';
import Image from 'next/image';
import './index.scss';
import { useEffect, useState,useRef } from 'react';

const Blocks_data = [
    {
        index:0,
        img:'/truck.png',
        title:'Перевозка сборных грузов автомобильным транспортом',
        description:`Это самый оперативный и самый востребованный вид транспорта в наше время.`,
        big:'/img.jpeg'
    },
    {
        index:1,
        img:'/container.png',
        title:`Перевозка сборных грузов 
в ЖД контейнерах`,
description:`Это наиболее безопасный вид транспорта. Неоспоримым преимуществом контейнера является его высокая прочность и надежность.`,
big:'/img2.jpeg'  
},
    {
        index:2,
        img:'/plane.png',
        title:`Авиаперевозка 
сборных грузов`,
description:`Авиационные перевозки грузов по праву считаются самыми быстрыми, их ещё называют экспресс доставкой, так как это занимает наименьшее время для транспортировки.`,
big:'/img3.jpeg'  
    },
    {
        index:3,
        img:'/ticket.png',
        title:`Перевозка сборных грузов
 в багажных вагонах
`,
description:'Данный вид перевозки позволяет выдавать груз на станциях с проходящих вагонах и перевозить груз в режиме тепло.',
big:'/img4.jpeg'   
}
]

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const [blocks, setBlocks] = useState(Blocks_data[0]);
const [nextBlock,setNextBlock] = useState(null);
const [nextImg, setNextImg] = useState(Blocks_data[1].big || null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        setBlocks(Blocks_data[index]);
        setNextBlock(index < Blocks_data.length - 1 ? Blocks_data[index + 1] : null);

     setNextImg(index < Blocks_data.length - 1 ? Blocks_data[index + 1].big : null);
    }, [index]);

    const HandlePrev = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    };

    const HandleNext = () => {
        if (index < Blocks_data.length - 1) {
            setIndex(prev => prev + 1);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        // Проверяем, был ли реальный свайп
       
            console.log(touchStartX.current, touchEndX.current);
    
            if (touchEndX.current !== 0&& touchStartX.current - touchEndX.current > 50) {
                HandleNext();
            } else if (touchEndX.current !== 0&&touchEndX.current - touchStartX.current > 50) {
                HandlePrev();
            }
        
    
       
        touchStartX.current = 0;
        touchEndX.current = 0;
    };
    useEffect(()=> {

console.log(nextImg,'BIG');

    },[nextBlock,nextImg])
    

    return(
        <>
        <div className='Slider_container w-full flex  relative overflow-hidden slider_container' 
          onTouchStart={handleTouchStart} 
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd}>
            <div className='max-w-[2000px] mx-auto w-full flex overflow-hidden '>
    <div className=' left_bar px-[60px] py-[40px] flex flex-col gap-[48px] justify-center flex-1 z-50' >
        <div><p className='text-[#005494] font-[700] text-[48px] max-w-[848px] slider_title'>Перевозка сборных грузов автомобильным транспортом</p></div>
        <div className={`duration-500 flex gap-[12px]   `}>
            <div className=' flex gap-[12px] relative  mt-[20px] '>
            {nextBlock !== null && 
                <div className={` absolute w-[531px] h-[430px] bg-white rounded-[8px] px-[16px] py-[20px] slider_block ${nextBlock !==null && '-left-[76%]'}`}>
                <div className='w-full flex justify-center slider_block_img'><Image src={nextBlock.img} alt='ticket' width={120} height={120} /></div>
                <div><h1 className='font-[700] text-[32px] text-[#005494] text-center slider_block_title'>{nextBlock.title}
</h1></div>
                <div><p className='font-[400] text-[24px] text-[#005494] text-center slider_block_description'>{nextBlock.description}</p></div>
            </div>}
            <div className={` w-[531px] h-[430px] bg-white rounded-[8px] px-[16px] py-[20px] duration-300 slider_block  ${nextBlock !==null && 'translate-x-[30%]'}`}>
                <div className='w-full flex justify-center slider_block_img'><Image src={blocks.img} alt='ticket' width={120} height={120} /></div>
                <div><h1 className='font-[700] text-[32px] text-[#005494] text-center slider_block_title'>{blocks.title}
</h1></div>
                <div><p className='font-[400] text-[24px] text-[#005494] text-center slider_block_description'>{blocks.description}</p></div>
            </div>
       
            </div>
        </div>
        <div className='flex gap-[20px] slider_btn'>  
            <div className='cursor-pointer' onClick={HandlePrev}><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 14.3333L14.3333 25M14.3333 25L25 35.6667M14.3333 25H35.6667M13.8 49H36.2C40.6804 49 42.9206 49 44.6319 48.1281C46.1372 47.3611 47.3611 46.1372 48.1281 44.6319C49 42.9206 49 40.6804 49 36.2V13.8C49 9.31958 49 7.07937 48.1281 5.36808C47.3611 3.86278 46.1372 2.63893 44.6319 1.87195C42.9206 1 40.6804 1 36.2 1H13.8C9.31958 1 7.07937 1 5.36808 1.87195C3.86278 2.63893 2.63893 3.86278 1.87195 5.36808C1 7.07937 1 9.31958 1 13.8V36.2C1 40.6804 1 42.9206 1.87195 44.6319C2.63893 46.1372 3.86278 47.3611 5.36808 48.1281C7.07937 49 9.31958 49 13.8 49Z" stroke="#005494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
            <div className='cursor-pointer' onClick={HandleNext}><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 35.6667L35.6667 25M35.6667 25L25 14.3333M35.6667 25H14.3333M13.8 49H36.2C40.6804 49 42.9206 49 44.6319 48.1281C46.1372 47.3611 47.3611 46.1372 48.1281 44.6319C49 42.9206 49 40.6804 49 36.2V13.8C49 9.31958 49 7.07937 48.1281 5.36808C47.3611 3.86278 46.1372 2.63893 44.6319 1.87195C42.9206 1 40.6804 1 36.2 1H13.8C9.31958 1 7.07937 1 5.36808 1.87195C3.86278 2.63893 2.63893 3.86278 1.87195 5.36808C1 7.07937 1 9.31958 1 13.8V36.2C1 40.6804 1 42.9206 1.87195 44.6319C2.63893 46.1372 3.86278 47.3611 5.36808 48.1281C7.07937 49 9.31958 49 13.8 49Z" stroke="#005494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
        </div>
    </div>






    <div className='flex-1 Slider_img_box flex translate-x-[10px] relative overflow-hidden'>
        {/* <img className='object-cover' src={blocks.big}/> */}
        <Image  quality={100} className='object-cover' src={blocks.big} alt='Img' width={400} height={400}/>
        {index < Blocks_data.length -1 && nextImg !==null && <Image  quality={100} className=' absolute object-cover h-full  -right-[75%] ' src={nextImg} alt='Img' width={400} height={400}/>}
    </div>
    </div>
    <div className='pagination absolute left-2/4 flex gap-[8px]'>{Blocks_data.map((e,i)=> (
<div className={`rounded-[50%] w-[8px] h-[8px] ${index == i ? 'bg-[#94D1FF]' :'bg-white'}`} key={i}></div>
    ))}</div>
    </div>
        </>
    )
}