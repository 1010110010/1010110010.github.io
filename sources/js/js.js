/**
 * 控制图片变大变小
 * @param id
 */
        function goBig(id){
            var div = document.getElementById("div");
            div.style.display="block";
            var bigPhoto = "<img class='bigImg' onclick='goSmall("+id+")' src='../sources/img/img_xueshi/IMG_"+id+".JPG'>";
            $("#div").html(bigPhoto);
        }

        function goSmall(id) {
            var div = document.getElementById("div");
            div.style.display = "none";
        }