import React from 'react';

const Home = () => {
  // Temporary
  const videos = {
    trending: [
      { id: 1, title: 'Trending Video 1', url: '/videos/trending1.mp4' },
      { id: 2, title: 'Trending Video 2', url: '/videos/trending2.mp4' },
      { id: 3, title: 'Trending Video 3', url: '/videos/trending3.mp4' },
      { id: 4, title: 'Trending Video 4', url: '/videos/trending4.mp4' },
    ],
    risingTalent: [
      { id: 5, title: 'Rising Talent Video 1', url: '/videos/talent1.mp4' },
      { id: 6, title: 'Rising Talent Video 2', url: '/videos/talent2.mp4' },
      { id: 7, title: 'Rising Talent Video 3', url: '/videos/talent3.mp4' },
      { id: 8, title: 'Rising Talent Video 4', url: '/videos/talent4.mp4' },
    ],
    vacancies: [
      { id: 9, title: 'Vacancy Video 1', url: '/videos/vacancy1.mp4' },
      { id: 10, title: 'Vacancy Video 2', url: '/videos/vacancy2.mp4' },
      { id: 11, title: 'Vacancy Video 3', url: '/videos/vacancy3.mp4' },
      { id: 12, title: 'Vacancy Video 4', url: '/videos/vacancy4.mp4' },
    ],
    upskill: [
      { id: 13, title: 'Upskill Video 1', url: '/videos/upskill1.mp4' },
      { id: 14, title: 'Upskill Video 2', url: '/videos/upskill2.mp4' },
      { id: 15, title: 'Upskill Video 3', url: '/videos/upskill3.mp4' },
      { id: 16, title: 'Upskill Video 4', url: '/videos/upskill4.mp4' },
    ],
    volunteer: [
      { id: 17, title: 'Volunteer Video 1', url: '/videos/volunteer1.mp4' },
      { id: 18, title: 'Volunteer Video 2', url: '/videos/volunteer2.mp4' },
      { id: 19, title: 'Volunteer Video 3', url: '/videos/volunteer3.mp4' },
      { id: 20, title: 'Volunteer Video 4', url: '/videos/volunteer4.mp4' },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {Object.keys(videos).map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos[category].map(video => (
              <div key={video.id} className="bg-slate-200 text-black p-4 rounded-lg">
                <video
                  className="w-full h-48 rounded-lg"
                  controls
                  src={video.url} // Local video URL
                />
                <p className="mt-2 font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
