var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.stroke();

// protected async loadModel() {
//     this.model = await tf.loadModel('web_model_mnist_keras/model.json');
// }


// protected async predict(imageData: ImageData) {

//     const pred = await tf.tidy(() => {

//       let img:any = tf.fromPixels(imageData, 1);
//       img = img.reshape([1, 28, 28, 1]);
//       img = tf.cast(img, 'float32');

//       const output = this.model.predict(img) as any;

//       this.predictions = Array.from(output.dataSync());
//     });
// }

// loadModel()
