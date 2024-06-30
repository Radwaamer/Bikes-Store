import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getBike } from 'store/bikes/act/actGetBikeByID';
// import { translateInfo } from 'store/bikes/act/actTranslateInfo';

// assets
import Landing from './components/Landing';
import Overview from './components/Overview';
import Prices from './components/Prices';
import ExpertReview from './components/ExpertReview';
import Colors from './components/Colors';
import Gallery from './components/Gallery';


const BikeDetails = () => {

    const params=useParams();
    const dispatch= useDispatch();
    const {selectedBike}= useSelector(state=>state.bikes);

    useEffect(() => {
        dispatch(getBike(params.id));
    }, [dispatch])

    return (
        <>
        {Object.keys(selectedBike).length>0 && 
        <div>
            <Landing info={selectedBike}/>
            <div className='container'>
                <div className="grid grid-cols-12 gap-8">
                    {/* <button onClick={()=>dispatch(translateInfo(selectedBike))}>hiii</button> */}
                    <Overview info={selectedBike}/>
                    <Prices info={selectedBike}/>
                    <ExpertReview info={selectedBike}/>
                </div>
                <Colors info={selectedBike}/>
                <Gallery info={selectedBike}/>
            </div>
        </div>
        }
        </>
    )
}

export default BikeDetails;