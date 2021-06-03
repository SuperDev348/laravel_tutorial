<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Player;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PlayerController extends Controller
{

    /* Add player to team  */
    public function store(Request $request)
    {
        $inputs = $request->only('team_id','first_name','last_name');
        $rules = [
            'team_id' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
        ];
        $messages = [
            'team_id.required' => 'the team id is not set',
            'first_name.required' => 'first name field should not be empty',
            'last_name.required' => 'last name field should not be empty',
        ];
        $validator = Validator::make($inputs, $rules, $messages);

        $validator->after(function ($validation) use ($inputs) {
            $checkPlayer = Player::where('first_name', $inputs['first_name'])
                ->where('last_name', $inputs['last_name'])
                ->where('team_id',$inputs['team_id'])->get();
            if (count($checkPlayer) > 0) {
                $validation->errors()->add('first_name', 'Player already exists, please enter another player.');
            }
        });
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }

        $new_player = new Player;
        $new_player->team_id = filter_var(strip_tags(trim($request->input('team_id'))), FILTER_SANITIZE_STRING);
        $new_player->first_name = filter_var(strip_tags(trim($request->input('first_name'))), FILTER_SANITIZE_STRING);
        $new_player->last_name = filter_var(strip_tags(trim($request->input('last_name'))), FILTER_SANITIZE_STRING);
        $new_player->save();
        return response()->json([
            'success'=> true,
            'payload'=> $new_player,
            'message'=> 'The player successfully added to the team'
            ],
            200);
    }

    /* Delete the player */
    public function destroy(Player $player)
    {
        $player->delete();
        return response()->json([
            'success' => true,
            'message' => 'the player has been deleted'
            ],
            200);
    }

    /* Update the player */
    public function update(Request $request)
    {
        $inputs = $request->only('body.id','body.first_name','body.last_name');
        $rules = [
            'body.id' => 'required',
            'body.first_name' => 'required',
            'body.last_name' => 'required|unique:players,last_name,'.$request->input('body.id'),
        ];
        $messages = [
            'body.id.required' => 'the player id is not set',
            'body.first_name.required' => 'first name field should not be empty',
            'body.last_name.required' => 'last name field should not be empty',
            'body.last_name.unique' => 'the player already exists',
        ];
        $validator = Validator::make($inputs, $rules, $messages);
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }

        Player::find($request->input('body.id'))->update([
            "first_name" => $request->input('body.first_name'),
            "last_name" => $request->input('body.last_name'),
        ]);
        return response()->json([
            'success'=> true,
            'message'=> 'The player successfully edited'
            ],
            201);
    }
}
