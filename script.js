const videos = [
    { title: "Short Video 1", category: "short", src: "https://www.w3schools.com/html/mov_bbb.mp4", img: "https://via.placeholder.com/300x200?text=Short+Video" },
    { title: "Long Video 1", category: "long", src: "https://samplelib.com/mp4/sample-5s.mp4", img: "https://via.placeholder.com/300x200?text=Long+Video" },
    { title: "Gaming Video 1", category: "gaming", src: "https://www.w3schools.com/html/movie.mp4", img: "https://via.placeholder.com/300x200?text=Gaming+Video" },
    { title: "Football Edit 1", category: "football", src: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", img: "https://via.placeholder.com/300x200?text=Football+Edit" },
    { title: "eCommerce Ad 1", category: "ecommerce", src: "https://samplelib.com/mp4/sample-10s.mp4", img: "https://via.placeholder.com/300x200?text=eCommerce+Ad" },
    { title: "Documentary Style 1", category: "documentary", src: "https://www.w3schools.com/html/mov_bbb.mp4", img: "https://via.placeholder.com/300x200?text=Documentary" },
    { title: "Color Grading 1", category: "colorgrading", src: "https://filesamples.com/samples/video/mp4/sample_960x400.mp4", img: "https://via.placeholder.com/300x200?text=Color+Grading" },
    { title: "Anime Video 1", category: "anime", src: "https://samplelib.com/mp4/sample-20s.mp4", img: "https://via.placeholder.com/300x200?text=Anime+Video" },
    { title: "Ad 1", category: "ads", src: "https://filesamples.com/samples/video/mp4/sample_1280x720.mp4", img: "https://via.placeholder.com/300x200?text=Ad" },
];

function loadVideos() {
    const gallery = document.getElementById('videoGallery');
    gallery.innerHTML = '';
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <img src="${video.img}" alt="${video.title}">
            <h3>${video.title}</h3>
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        gallery.appendChild(videoItem);
    });
}

function filterVideos(category) {
    const gallery = document.getElementById('videoGallery');
    gallery.innerHTML = '';
    const filteredVideos = category === 'all' ? videos : videos.filter(video => video.category === category);
    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <img src="${video.img}" alt="${video.title}">
            <h3>${video.title}</h3>
            <video controls>
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        gallery.appendChild(videoItem);
    });
}

function scrollToPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

window.onload = loadVideos;