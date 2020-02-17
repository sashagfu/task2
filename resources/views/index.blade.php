<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Test Task</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

<main>
    <div class="container">
        <div class="row">
            <div class="col animated fadeIn">
                <h1 class="mt-4">Invite members</h1>
                <div class="form-title">
                    Email address <span class="error-msg">Please enter valid email, Thanks!</span>
                </div>
                <div class="mt-4 form-element">
                    <i class="fas fa-at pre"></i>
                    <input type="email" name="emails" id="emails">
                </div>
                <div class="text-help">Send multiple invites by entering email address.</div>
                <div class="mt-4 text-right">
                    <button type="button" id="cancel" class="btn btn-outline-primary btn-waves">Cancel</button>
                    <button type="button" id="send" class="btn btn-outline-primary btn-waves">Send</button>
                </div>
            </div>
        </div>
    </div>
</main>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>