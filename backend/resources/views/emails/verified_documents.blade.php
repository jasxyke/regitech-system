<!DOCTYPE html>
<html lang="en">
<body style="background-color:#790000; color:white; font-size:1.10rem; width: 600px;">
    <div style="color:white; padding: 15px;">
    <div>
        <div style="display:flex; padding: 10px;">
            <img style="margin-left: auto;" width="100px" src="https://i.imgur.com/e5aVRaG.png"/>
            <h1 style="text-align: center; margin-right: auto;">
                Reg<span style="color: yellow">iTech</span>
            </h1>
        </div>
            
    </div>

    <h1 style="font-size: 1.5rem">
        Hello {{$user->firstname}}!
    </h1>
    <p>This email is from the 
Polytechnic University of the Philippines 
Insititute of Technology notifying you about your
recently submitted admission documents in which:
</p>
<p style="font-size: 1.25rem; 
    padding: 5px 0;
    font-style:italic;"><strong>{{$result_message}}</strong></p>
<div style="background-color: white; padding: 15px 10px">
    <table style="width:100%; border-collapse: collapse; color: black;">
        <thead>
            <tr style="font-size: 1.15rem">
                <th style="padding: 10px; border: 1px solid black; border-collapse: collapse;">Document</th>
                <th style="padding: 10px; border: 1px solid black; border-collapse: collapse;">Verification Status</th>
            </tr>
        </thead>
        <tbody style="">
            @foreach ($documents as $document)
            <tr>
                <td style="text-align:center; border: 1px solid black; border-collapse: collapse;">{{$document["document_type"]['name']}}</td>
                <td @style([
                    'border: 1px solid black; border-collapse: collapse;',
                    'text-align: center',
                    'background-color: #00a651;' => $document["document_status"]['id'] == 1,
                    'background-color: #790000; color: white;' => $document["document_status"]['id'] == 2,
                    'background-color: #fff200' => $document["document_status"]['id'] == 3,
                    'background-color: #f68e56' => $document["document_status"]['id'] == 4,
                    'background-color: #f68e56; color: white;' => $document["document_status"]['id'] == 5,
                ]) >{{$document["document_status"]['name']}}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
    </div>

    <p @style([
        'display: none' => $note == ""
    ])>Registrar's note: {{$note}}</p>
</div>
</div>
</body>
</html>