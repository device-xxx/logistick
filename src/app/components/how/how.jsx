import './index.scss';

export const How = ()=> {
    return(
        <div className='how_container bg-[#CBE8FF] w-full  mt-[42px] py-[40px]'>
            <div className='max-w-[2000px] mx-auto'>
            <div className='how_title px-[60px]'><h1 className='text-[#005494] font-[700] text-[48px]'>Как мы работаем</h1></div>
            <div className='how_box px-[60px] mt-[48px]'>
            <div className='first_row flex w-full flex-wrap items-center'>
    <div className='step'>
        <h1>01</h1>
        <span>Оставьте заявку</span>
    </div>
    <div className='line'></div>
    <div className='step'>
        <h1>02</h1>
        <span>Звонок от менеджера</span>
    </div>
    <div className='line'></div>
    <div className='line'></div>
    <div className='step'>
        <h1>03</h1>
        <span>Заключение договора</span>
    </div>
    <div className='line'></div>
    <div className='step'>
        <h1>04</h1>
        <span>Передача груза</span>
    </div>
    <div className='line'></div>
    <div className='line'></div>
    <div className='step mr-[100px]'>
        <h1>05</h1>
        <span>Контроль доставки груза</span>
    </div>
    <div className='step opacity-0'>
        <h1>05</h1>
        <span>Контроль доставки груза</span>
    </div>
</div>

            
            </div>
            </div>
        </div>
    )
}