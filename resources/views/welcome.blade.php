<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token()]) ?></script>
    <title>Altara 1.0</title>
    <link rel="icon" type="image/png" href="{{ URL::to('/') }}/images/a.png"> {{-- todo:: clins app image --}}
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body><div id="app"></div></body>
<script src="{{mix('/js/app.js')}}"></script>
</html>
