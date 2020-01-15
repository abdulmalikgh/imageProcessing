self.addEventListener('message', (event)=>{
    const imageData = event.data;
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;

    for (let index = 0; index < width; index++) {
        for (let index2 = 0; index2 < height; index2++) {
            let ind = (index + (index2 * width)) * 4;
            //changing opacity;
            data[ind + 3] = 127;

        }   
    }
    //sending message back to main js;
    postMessage(imageData,[imageData.data.buffer])
})