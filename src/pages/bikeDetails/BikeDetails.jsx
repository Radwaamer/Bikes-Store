import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getBike } from 'store/bikes/act/actGetBikeByID';


// components
import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';
import Slider from 'components/sliders/Slider';

// assets

import Star from 'assets/icons/star.png';
import Like from 'assets/icons/like.svg';
import DisLike from 'assets/icons/dis_like.svg';
import Landing from './components/Landing';
import Overview from './components/Overview';
import Prices from './components/Prices';


const BikeDetails = () => {

    const params=useParams();
    const dispatch= useDispatch();
    const {selectedBike}= useSelector(state=>state.bikes);

    useEffect(() => {
        dispatch(getBike(params.id));
    }, [dispatch])

    const images=[
        'https://radwaamer.sirv.com/bikes/bike1/1-1.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-2.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-3.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-4.webp',
        'https://radwaamer.sirv.com/bikes/bike1/1-5.webp',
    ]

    return (
        <>
        {Object.keys(selectedBike).length>0 && 
        <div>
            <Landing info={selectedBike}/>
            <div className='container'>
                <div className="grid grid-cols-12 gap-8">
                    <Overview info={selectedBike}/>
                    <Prices info={selectedBike}/>
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
        }
        </>
    )
}

export default BikeDetails;