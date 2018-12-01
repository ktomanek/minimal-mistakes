async function loadModel(){
  model = await tf.loadModel('web_model_mnist_keras/model.json')
  //web_model_gender/model.json
}

loadModel()

const tensor = tf.scalar(2);


const model2 = tf.sequential();
model2.add(tf.layers.dense({inputShape: [4], units: 100}));
model2.add(tf.layers.dense({units: 4}));
model2.compile({loss: ‘categoricalCrossentropy’, optimizer: ‘sgd’});
