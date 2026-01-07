<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <header id="header">
        <center>
            <h1>MontiStore</h1>
        </center>
    </header>
    

    <?php

        $myfile = fopen("../submit/items/items.txt", "r") or die("Unable to open file!");
        // Output one line until end-of-file
        while(!feof($myfile)) {
          //echo fgets($myfile) . "<br>";
            $filenombre = (string) fgets($myfile);
            $filename = str_replace('\'', '', $filenombre);
            //echo "../submit/items/$filename" . "<br>";
            //echo $filename;
            //$filepath = "../submit/items/$filenombre";
            $filepath = "/home/wifiengine/code/store/submit/items/$filename";
            echo "$filepath" . "<br>";



            $file = fopen("$filepath", "r") or die("Unable to open item!");
            //$file = fopen('../submit/items/\ glass\ .txt', "r") or die("Unable to open item!");
            while(!feof($file)) {
                echo fgets($file) . "<br>";
            }
            fclose($file);
        }
        fclose($myfile);
        

?> 


    <link rel="stylesheet" href="style.css">
</body>
</html>
