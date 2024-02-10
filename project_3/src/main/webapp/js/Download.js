
            function download(file, text) {
 
                //creating an invisible element
 
                var element = document.createElement('a');
                element.setAttribute('href',
                    'data:text/plain;charset=utf-8, '
                    + encodeURIComponent(text));
                element.setAttribute('download', file);
                document.body.appendChild(element);
                element.click();
 
                document.body.removeChild(element);
            }
 
            // Start file download.
 
            document.getElementById("bttn")
                .addEventListener("click", function () {
                    var text = 
                            document.getElementById("download").value;
                    var filename = "GFG.txt";
 
                    download(filename, text);
                }, false);
        