$(document).ready(function(){
    $('.pishRoshd').click(function(){
        $('.pishRoshdForm').css({'display':"block"})
        $('.roshdForm').css({'display':"none"})
        $('.customForm').css({'display':"none"})
        
    })
    $('.roshd').click(function(){
        $('.roshdForm').css({'display':"block"})
        $('.pishRoshdForm').css({'display':"none"})
        $('.customForm').css({'display':"none"})
        
    })
    $('.custom').click(function(){
        $('.customForm').css({'display':"block"})
        $('.roshdForm').css({'display':"none"})
        $('.pishRoshdForm').css({'display':"none"})
        
    })
})