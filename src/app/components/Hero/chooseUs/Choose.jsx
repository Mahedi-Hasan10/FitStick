import Image from 'next/image';
import MyButton from '../../Button';
const Choose = () => {
    return (
        <section className='flex xl:flex-nowrap lg:flex-nowrap flex-wrap 2xl:gap-[60px] lg:gap-[40px] gap-[20px] mt-[100px]'>
            <div className='flex items-start justify-center'>
                <Image src="/choose/choose1.png" height={528} width={424} alt="choose us" />
            </div>
            <div>
                <div className='capitalize'>
                    <h2 className='2xl:text-[48px] xl:text-[40px] text-[30px] 2xl:fontbold lg:font-semibold font-medium xl:leading-[57px] leading-[40px]'>
                        why choose us?
                    </h2>
                    <h2 className='2xl:text-[48px] xl:text-[40px] text-[30px] 2xl:fontbold lg:font-semibold font-medium xl:leading-[57px] leading-[40px]'>
                        because we&apos;re the best.
                    </h2>
                    <p className='text-base lg:font-semibold font-medium leading-6 text-[#AAAAAA] max-w-[760px] mt-5'>
                        Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of this ground brtechnology. Apple has always been at technological innovation, and the Vision Pro features 
                    </p>
                </div>
                <div className='flex justify-between md:flex-nowrap flex-wrap 2xl:mt-[40px] lg:mt-5 mt-3'>
                    <div className='xl:py-2 py-6 flex flex-col gap-2'>
                        <div className='flex items-center gap-2 capitalize mb-2'>
                            <Image src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>we find your trainer.</p>
                        </div>
                        <div className='flex items-center gap-2 capitalize mb-2'>
                            <Image src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>we make your plan.</p>
                        </div>
                        <div className='flex items-center gap-2 capitalize 2xl:mb-10 lg:mb-6 mb-3 '>
                            <Image src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>tack training anywhere.</p>
                        </div>
                        <div className='flex items-center lg:justify-start justify-center'>
                        <MyButton buttonName="Get Started Now" btnBG="bg-[#FF6E18]"/>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Image src="/choose/choose2.png" height={270} width={296} alt="choose us" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Choose;