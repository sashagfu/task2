<?php

namespace App\Http\Controllers;

use App\Invite;
use App\Http\Requests\SendInvites;

class InviteController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SendInvites $request)
    {
        $emails = explode(',', $request->emails);

        foreach ($emails as $email) {
            Invite::create(['email' => $email]);
        }
    }
}
