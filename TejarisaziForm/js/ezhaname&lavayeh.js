
    function valuation_select() {
        var valuation_value = document.getElementById("arzeshgozarifirst").value;
        if (valuation_value == 0) {
            document.getElementById("Secondary").style.display = "none";
            document.getElementById("primitive").style.display = "none";
            
    } else if (valuation_value == 1) {
        document.getElementById("primitive").style.display = "block";
        document.getElementById("Secondary").style.display = "none";
    } else {
        document.getElementById("primitive").style.display = "none";
        document.getElementById("Secondary").style.display = "block";
    }

}
function fileInputDuplicator(e) {
    switch (e) {
        case 1:
            var container = document.getElementById("fileInputDuplicatePlace1");
            var input = document.createElement("input");
            input.type = "file";
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
            break;
            case 2:
                var container = document.getElementById("fileInputDuplicatoPlace2");
                var input = document.createElement("input");
                input.type = "file";
                container.appendChild(input);
                container.appendChild(document.createElement("br"));
                break;
            }
            
            
        }
        
        
        function personalFormDuplicator(sender, receiver) {
            if (sender == null) {
                var original = document.getElementById('personalFormDuplicateReceiver');
        var originalFirstElement = document.getElementById('personalFormDuplicateReceiver').firstElementChild;
        var clone = originalFirstElement.cloneNode(true);
        original.appendChild(clone);
    } else {
        var original = document.getElementById('personalFormDuplicateSender');
        var originalFirstElement = document.getElementById('personalFormDuplicateSender').firstElementChild;
        var clone = originalFirstElement.cloneNode(true);
        original.appendChild(clone);
    }
    
}


$(document).ready(function () {

    (function () {
        'use strict'
        
        var forms = document.querySelectorAll('.needs-validation')
        
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            
            form.classList.add('was-validated')
        }, false)
    })
    })()
});