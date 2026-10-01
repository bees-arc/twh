const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
execSync(`"${ffmpeg}" -y -ss 00:00:02 -i public/hero-video.mp4 -vframes 1 public/test-frame.jpg`, { stdio: 'inherit' });
console.log('Extracted public/test-frame.jpg');
