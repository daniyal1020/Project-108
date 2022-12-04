function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KCpTa0MyN/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

dog = 0;
cat = 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = " I Can Hear : " + results[0].label;
        document.getElementById("result_confidence").innerHTML = " Accuracy : " + (results[0].confidence*100).toFixed(2) + " % ";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img = document.getElementById("image");
        if(results[0].label == "Barking"){
            img.src = "dog.jpg";
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.jpg";
        }
        else if(results[0].label == "Roar"){
            img.src = "lion.jpg";
        }
        else{
            img.src = "cow.jpg";
        }
    }
}