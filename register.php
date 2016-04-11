<?php 
  $file = dirname(__FILE__).'/user-data-'.time().'-'.rand(1000,9999);
  $newURL = 'http://union.dev.com?register=success';
  file_put_contents($file, json_encode($_REQUEST));
  header('Location: '.$newURL);
  die();
?>