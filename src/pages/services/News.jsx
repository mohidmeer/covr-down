import React from 'react'

const News = () => {

    const newsData = [
        {
            image: 'https://via.placeholder.com/300',
            title: 'Breaking News: Market Crash',
            description: 'The stock market experienced a significant crash today, with major indices falling by over 3% in a single day.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Local News: Community Event',
            description: 'A community event is being held this weekend to bring together local residents and celebrate the diversity of the neighborhood.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Sports Update: Championship Game',
            description: 'In an exciting championship game last night, the underdogs managed to secure a last-minute victory, leaving fans in awe.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Tech News: New Smartphone Release',
            description: 'The latest smartphone model has just been released, featuring groundbreaking technology and an impressive array of new features.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Weather Alert: Storm Warning',
            description: 'A severe storm warning has been issued for the area, with heavy rains and strong winds expected over the next 24 hours.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Health News: New Guidelines',
            description: 'New health guidelines have been released to help people stay safe and healthy during the ongoing pandemic.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Health News: New Guidelines',
            description: 'New health guidelines have been released to help people stay safe and healthy during the ongoing pandemic.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Health News: New Guidelines',
            description: 'New health guidelines have been released to help people stay safe and healthy during the ongoing pandemic.'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Health News: New Guidelines',
            description: 'New health guidelines have been released to help people stay safe and healthy during the ongoing pandemic.'
        }
    ];
  return (
    <div className='flex flex-col gap-4 w-full'>
            <div className='f'>
                <h5>News</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
            {newsData.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="font-bold text-lg mb-2">{news.title}</h2>
                        <p className="text-gray-700 line-clamp-2">{news.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News