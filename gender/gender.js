async function loadModel(){
  model = await tf.loadModel('web_model_gender/model.json')
}

loadModel()

const tensor = tf.scalar(2);
