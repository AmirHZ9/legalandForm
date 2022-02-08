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