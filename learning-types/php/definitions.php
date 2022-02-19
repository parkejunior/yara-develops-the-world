<?php

/* TYPES */

// string
// int
// float
// bool
// array
// object
// callable (function)

function setString(string $value) {
    echo "You set a string: $value";
}

function setInteger(int $value) {
    echo "You set a integer: $value";
}

function setFloat(float $value) {
    echo "You set a float: $value";
}

function setBoolean(bool $value) {
    echo "You set a boolean: $value";
}

function setArray(array $value) {
    echo "You set a array: " . print_r($value);
}

function setObject(object $value) {
    echo "You set a object: " . print_r($value);
}

function setFunction(callable $value) {
    echo "You set a function: " . print_r($value);
}