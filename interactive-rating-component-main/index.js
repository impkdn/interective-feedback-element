var valueb =""
$(document).ready(function (){
    $(".sbmtBtn").click(function(){
         valueb = $(this).val();
        // console.log(valueb);
        return valueb;
        
    });
})
function handleSubmit(){
    // console.log(valueb);
    // target.preventdefault()
    if (valueb != "") {
        $("#rated").text(valueb);
        $("#ratingComponent").css("display","none")
        $("#thanksState").css("display","flex")
    //    console.log("Hiii")
        
    } else {
        alert("Please select any from 1 to 5")
    }
    
}