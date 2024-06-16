document.addEventListener('DOMContentLoaded', () => {
    axios.get('/videos')
        .then(response => {
            const videos = response.data;
            videos.forEach(video => {
                axios.get(`/summary/${video.video_id}`)
                    .then(summaryResponse => {
                        const { summary, thumbnail_url } = summaryResponse.data;
                        const videoCard = document.createElement('div');
                        videoCard.classList.add('video-card');
                        videoCard.innerHTML = `
                            <img src="${thumbnail_url}" alt="${video.video_title}">
                            <h2>${video.video_title}</h2>
                            <p>${summary}</p>
                        `;
                        document.getElementById('video-container').appendChild(videoCard);
                    })
                    .catch(error => console.error('Error fetching summary:', error));
            });
        })
        .catch(error => console.error('Error fetching videos:', error));

    // Swipe functionality using Hammer.js
    const videoContainer = document.getElementById('video-container');
    const hammer = new Hammer(videoContainer);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammer.on('swipeup swipedown', function(ev) {
        // Handle swipe gestures as needed
        console.log(ev);
    });
});
