<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeamController extends Controller
{

    /* Show all teams action */
    public function index()
    {
        $teams = Team::orderBy('created_at','desc')->get();
        return response()->json([
            'success' => true,
            'payload' => $teams
            ],
            200);
    }

    /* Show each team and its related players action */
    public function show(Team $team)
    {
        $team_with_players = $team->load(['players' => function($query){
            $query->orderBy('created_at', 'DESC');
        }]);
        return response()->json([
            'success' => true,
            'team' => $team_with_players
        ],
            200);
    }

    /* Add a new team action */
    public function store(Request $request)
    {
        $inputs = $request->only('name');
        $rules = [
            'name' => 'required',
        ];
        $messages = [
            'name.required' => 'new team should have a name ',
        ];
        $validator = Validator::make($inputs, $rules, $messages);

        $validator->after(function ($validation) use ($inputs) {
            $checkTeam = Team::where('name', $inputs['name'])->get();
            if (count($checkTeam) > 0) {
                $validation->errors()->add('name', 'Team already exists, please enter another team.');
            }
        });
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }

        $new_team = new Team;
        $new_team->name = filter_var(strip_tags(trim($request->input('name'))), FILTER_SANITIZE_STRING);
        $new_team->save();
        return response()->json([
            'success'=> true,
            'payload'=> $new_team,
            'message'=> 'The team successfully added'
        ],
            201);
    }

}
