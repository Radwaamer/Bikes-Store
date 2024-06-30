import React from 'react'

// components
import DetailsBox from 'components/ODD/DetailsBox';
import DetailsTitle from 'components/titles/DetailsTitle';
import Slider from 'components/sliders/Slider';

const Colors = ({info}) => {
    return (
        <div className='mt-16'>
                    <DetailsTitle>{info.name} Colours</DetailsTitle>
                    <p className='text-gray text-sm mb-4'>{info.name} is available in {info.colors.length} different colors.</p>
                    <Slider>
                        {info.colors.map((color,index)=>{
                        return(
                                <DetailsBox key={index}>
                                    <img className='w-full' src={color.image} alt="" />
                                    <div className='flex items-center gap-4 mt-4'>
                                        <div style={{backgroundColor:color.color}} className={`w-12 h-12 rounded-full`}></div>
                                        <div>
                                            <p className='font-bold'>{color.name}</p>
                                            <span className='text-gray text-sm'>{color.availability?"Available for all Variants.":"Available for selected items"}</span>
                                        </div>
                                    </div>
                                </DetailsBox>
                            )
                        })}
                    </Slider>
                </div>
    )
}

export default Colors