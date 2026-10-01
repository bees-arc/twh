const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('ffmpeg-static');

const inputFile = path.join(__dirname, '..', 'public', 'hf_20261001_065038_e34e1b3d-b019-4d18-bf7b-9edf9a08df33.mp4');
const optimizedFile = path.join(__dirname, '..', 'public', 'hero-video.mp4');
const posterFile = path.join(__dirname, '..', 'public', 'hero-poster.webp');

console.log('Using ffmpeg:', ffmpeg);
console.log('Input file:', inputFile);

// 1. Generate crisp lightweight poster image from first frame (0.1s)
console.log('Generating poster image...');
execSync(`"${ffmpeg}" -y -ss 00:00:00.100 -i "${inputFile}" -vframes 1 -q:v 2 "${posterFile}"`, { stdio: 'inherit' });

// 2. Transcode with FastStart (+movflags +faststart), remove unnecessary audio track (-an), optimal H.264 web compression
console.log('Optimizing video with faststart and web compression...');
execSync(`"${ffmpeg}" -y -i "${inputFile}" -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -an -movflags +faststart "${optimizedFile}"`, { stdio: 'inherit' });

const origSize = fs.statSync(inputFile).size;
const optSize = fs.statSync(optimizedFile).size;
const posterSize = fs.statSync(posterFile).size;

console.log(`Original Size: ${(origSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Optimized Size: ${(optSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Poster Size: ${(posterSize / 1024).toFixed(2)} KB`);
console.log('Done!');
