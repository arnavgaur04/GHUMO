function preview_image(event){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('images');
        output.style.backgroundImage = "url('" + reader.result + "')";
    }
    reader.readAsDataURL(event.target.files[0]);
}