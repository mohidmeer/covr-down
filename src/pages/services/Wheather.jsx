import React, { useState } from 'react'
import { Switch, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import CentigradeImage from '../../assets/svgs/C.svg'
import FarenheightImage from '../../assets/svgs/F.svg'
import Cloud from '../../assets/svgs/cloud.svg'

const Wheather = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='f'>
                <h5>Wheather</h5>
            </div>
            <div className='bg-primary/50 h-[50vh] rounded-md p-4'>
                <div className='h-full'>
                    <TabGroup className={'h-full'}>
                        <TabList className={'flex gap-6 font-semibold '}>
                            <div className='mr-auto flex items-center justify-center gap-2'>
                                <img src={CentigradeImage} />
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className=" group relative flex h-7 w-24 cursor-pointer rounded-full bg-white/30 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-primary ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-16"
                                    />

                                </Switch>
                                <img src={FarenheightImage} />
                            </div>
                            <Tab className={'text-white data-[selected]:border-white border-b-2 border-transparent  outline-none'}>Today</Tab>
                            <Tab className={'text-white data-[selected]:border-white border-b-2 border-transparent  outline-none'}>Tomorrow</Tab>
                            <Tab className={'text-white data-[selected]:border-white border-b-2 border-transparent  outline-none'}>Monthly</Tab>

                        </TabList>
                        <TabPanels className={'h-full'}>
                            <TabPanel className={'h-full text-white'}>
                                <div className=' w-full h-full flex flex-col '>
                                    <WeatherDetails
                                        temperature="27°C"
                                        location="Burdwan"
                                        date="Aug 23, Tue"
                                        showCloudImage={true}
                                    />
                                    <WheatherIndicators
                                        humidity="99%"
                                        visibility="8km"
                                        airPressure="1005hPa"
                                        wind="2mph"
                                    />

                                </div>

                            </TabPanel>


                        </TabPanels>
                    </TabGroup>
                </div>



            </div>
        </div>
    )
}

export default Wheather


function WheatherIndicators({ humidity, visibility, airPressure, wind }) {
    return (
        <div className="flex gap-6 mt-auto justify-center items-center mb-10">
            <div className="flex flex-col items-center">
                <p className="font-semibold">Humidity</p>
                <p className="text-2xl">{humidity}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold">Visibility</p>
                <p className="text-2xl">{visibility}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold">Air Pressure</p>
                <p className="text-2xl">{airPressure}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-semibold">Wind</p>
                <p className="text-2xl">{wind}</p>
            </div>
        </div>
    );
}

function WeatherDetails({ temperature, location, date, showCloudImage }) {
    return (
        <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-center justify-center gap-2">
                <p className="text-8xl">{temperature}</p>
                <img src={Cloud} alt="Cloud Image" className="h-26 w-26 " />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-4xl">{location}</p>
                <p className='text-2xl'>{date}</p>
            </div>
        </div>
    );
}