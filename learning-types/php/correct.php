<?php
include "./definitions.php";

$outraFuncao = function () {
    echo "eu sou uma funcao";
};

setString("Banana");

setInteger(40);

setFloat(12.9);

setObject(new class {});

setBoolean(true);

setArray(["bmw", 'audi', 'vw']);

setFunction($outraFuncao);