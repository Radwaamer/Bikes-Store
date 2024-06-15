import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';
import Slider from 'components/sliders/Slider';
import React from 'react'

// assets
import Engine from 'assets/carDetails/engine.svg';
import Mileage from 'assets/carDetails/mileage.svg';
import Fuel from 'assets/carDetails/fuel_tank.svg';
import Gears from 'assets/carDetails/gears.svg';
import Brakes from 'assets/carDetails/brake.svg';
import Mechanism from 'assets/carDetails/starting-mechanism.svg';
import Wheel from 'assets/carDetails/wheel.svg';
import Body from 'assets/carDetails/class.svg';

import Star from 'assets/icons/star.png';
import Like from 'assets/icons/like.svg';
import DisLike from 'assets/icons/dis_like.svg';

const BikeDetails = () => {

    const images=[
        'https://radwaamer.sirv.com/bikes/bike1/1-1.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-2.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-3.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-4.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-5.webp',
    ]

    return (
        <div>
            <div className='h-[45vh] relative'>
                <img className='w-full h-full' src={"https://radwaamer.sirv.com/bikes/bike1/1.webp"} alt="" />
                <div className='absolute bottom-0 left-0 w-full'>
                    <div className="container">
                        <h1 className='text-4xl mb-3 font-bold'>Hero XPulse 200 4V</h1>
                        <p className='text-2xl font-semibold text-blue'>₹ 1.44 - 1.51</p>
                        <button className='py-2 px-6 mt-5 rounded-3xl bg-blue text-black-color font-bold hover:bg-white-color transition-all'>Compare</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="grid grid-cols-12 gap-8">
                    <div className='col-span-8'>
                        <DetailsTitle />
                        <DetailsBox>
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Engine} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Engine Capacity</span>
                                        <p>199.6 CC</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Mileage} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Mileage</span>
                                        <p>40 KM/L</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Fuel} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Fuel Tank Capacity</span>
                                        <p>13.0 L</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Gears} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Gears</span>
                                        <p>5 Speed</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Brakes} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Brakes</span>
                                        <p>Disc/Disc</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Mechanism} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Starting Mechanism</span>
                                        <p>Self / Kick Start</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Wheel} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Wheel Type</span>
                                        <p>Spoke Wheels</p>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <img className="w-8" src={Body} alt="" />
                                    <div>
                                        <span className='text-gray text-sm'>Body Type</span>
                                        <p>Off Road</p>
                                    </div>
                                </div>
                            </div>
                        </DetailsBox>
                    </div>
                    <div className="col-span-4">
                        <DetailsTitle />
                        <p className='text-gray text-sm mb-4'>Explore Hero XPulse 200 4V pricing in India's major cities. Hero XPulse 200 4V price starts from 1.44 Lakh.</p>
                        <DetailsBox>
                            <table className='w-full'>
                                <thead>
                                    <tr className='text-sm text-gray text-left'>
                                        <th>City</th>
                                        <th>On-Road Price</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                    <tr>
                                        <td className='py-2 pr-2'>New Delhi</td>
                                        <td className='p-2 pr-2'>₹ 1,51,878</td>
                                    </tr>
                                </tbody>
                            </table>
                        </DetailsBox>
                    </div>
                    <div className="col-span-8">
                        <DetailsTitle />
                        <DetailsBox>
                            <div className='flex gap-8 items-center'>
                                <div className='rounded-full p-8 text-black-color font-bold bg-blue w-fit h-fit'>
                                    <span>8.6</span>
                                </div>
                                <div className="grid grid-cols-12 w-full gap-4">
                                    <div className='col-span-4 justify-between'>
                                        <div className='border-r border-gray'>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-4 justify-between'>
                                        <div className='border-r border-gray'>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-4 justify-between'>
                                        <div>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-4 justify-between'>
                                        <div className='border-r border-gray'>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-4 justify-between'>
                                        <div className='border-r border-gray'>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-span-4 justify-between'>
                                        <div>
                                            <p className='text-gray'>Design</p>
                                            <p className='flex gap-2 items-center'>
                                                <img className='w-5' src={Star} alt="" />
                                                <span>6.8</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-gray my-7'/>
                            <div className="grid-cols-1">
                                <div className='grid grid-cols-3'>
                                    <div>
                                        <p className='flex gap-3 items-center mb-4 font-bold'>
                                            <img className='w-5' src={Like} alt="" />
                                            <span>Pros</span>
                                        </p>
                                        <ul className='list-disc px-5 text-gray grid gap-2'>
                                            <li>Comfortable ergonomics</li>
                                            <li>Refined engine</li>
                                            <li>Most affordable ADV</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='flex gap-3 items-center mb-4 font-bold'>
                                            <img className='w-5' src={DisLike} alt="" />
                                            <span>Cons</span>
                                        </p>
                                        <ul className='list-disc px-5 text-gray grid gap-2'>
                                            <li>Comfortable ergonomics</li>
                                            <li>Refined engine</li>
                                            <li>Most affordable ADV</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className='font-bold'>Verdict</p>
                                        <p className='text-gray'>
                                        Possibly the most recognisable and popular product in the market currently, 
                                        the Hero Xpulse 200 4V is the most affordable entry-level ADV. Out of the numerous positives, 
                                        the motorycle has possibly the most refined engine in the segment, with superior ergonomics 
                                        aiding young riders as well as seasoned riders. But, the cons are equally worrying as better 
                                        set of brakes, and a lower seat would've helped. Plus the lack of top-end torque doesn't really 
                                        work in the case of an ADV.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-gray my-7'/>
                        </DetailsBox>
                    </div>
                </div>
                <div className='mt-16'>
                    <DetailsTitle />
                    <p className='text-gray text-sm mb-4'>Explore Hero XPulse 
                        200 4V pricing in India's major cities. Hero XPulse 200 
                        4V price starts from 1.44 Lakh.
                    </p>
                    <Slider>
                        {images.map((image,index)=>{
                        return(
                                <DetailsBox key={index}>
                                    <img className='w-full' src={image} alt="" />
                                </DetailsBox>
                            )
                        })}
                    </Slider>
                </div>
                <div className='mt-16'>
                    <DetailsTitle />
                    <p className='text-gray text-sm mb-4'>Explore Hero XPulse 
                        200 4V pricing in India's major cities. Hero XPulse 200 
                        4V price starts from 1.44 Lakh.
                    </p>
                    <Slider>
                        {images.map((image,index)=>{
                        return(
                                <DetailsBox key={index}>
                                    <img className='w-full' src={image} alt="" />
                                    <div className='flex items-center gap-4 mt-4'>
                                        <div className='bg-red-900 w-12 h-12 rounded-full'></div>
                                        <div>
                                            <p className='font-bold'>Hero XPulse 200 4V Sports Red</p>
                                            <span className='text-gray text-sm'>Available for all Variants.</span>
                                        </div>
                                    </div>
                                </DetailsBox>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default BikeDetails;