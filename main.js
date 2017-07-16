var imageLoader = document.getElementById('avatarLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){

            var background = new Image();
            background.src = 'banner-bg.png';
            background.onload = function () {
                var avatarWidth = 230 * img.width / img.height;
                var avatarHeight = 230;
                if (avatarWidth < 230) {
                    avatarWidth = 230;
                    avatarHeight = 230 * img.height / img.width;
                }
                ctx.drawImage(img, 343, 104, avatarWidth, avatarHeight);
                ctx.drawImage(background, 0, 0);
            };


            var link = document.createElement('a');
            link.innerHTML = 'دانلود عکس';
            link.addEventListener('click', function(ev) {
                link.href = document.getElementById('canvas').toDataURL();
                link.download = 'coderconf3.png';
            }, false);
            var links = document.getElementById('links');
            links.innerHTML = '';
            links.appendChild(link);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}