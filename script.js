const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "./collar-bnw.png";

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    console.log(data);

    // for (let i = 0; i < data.length; i += 4) {
    //     //Example: if the pixel is mostly red, change it to blue
    //     console.log(data[i]);
    //     if (data[i] > 118 && data[i + 1] > 118 && data[i + 2] > 118) {
    //         data[i] = 0;     // Red
    //         data[i + 1] = 0;   // Green
    //         data[i + 2] = 255; // Blue
    // }

    // }

    // for (let i = 0; i < data.length; i += 4) {
    //     const r = data[i];
    //     const g = data[i + 1];
    //     const b = data[i + 2];

    //     // Calculate brightness (0 to 255)
    //     const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    //     if (brightness > 30) { // not black or very dark
    //         data[i] = 250;     // more red
    //         data[i + 1] = g * 0.9;               // tone down green
    //         data[i + 2] = b * 0.9;               // tone down blue
    //     }
    // }

    ctx.putImageData(imageData, 0, 0);
    document.body.appendChild(canvas); // Show the result
};
