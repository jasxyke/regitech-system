<?php

namespace App\Helpers;

class UrlConverter{

    static function converToValidUrl($url){
        $convertedSpaces = str_replace(" ", "-", $url);
        $convertedSlashes = str_replace("\\", "/", $convertedSpaces);
        $noOpenParenthesis = str_replace("(","", $convertedSlashes);
        $noCloseParenthesis = str_replace(")", "", $noOpenParenthesis);
        return $noCloseParenthesis;
    }
}