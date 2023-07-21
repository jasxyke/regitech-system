<!DOCTYPE html>
<html lang="en">
    <body
        style="
            background-color: #790000;
            color: white;
            font-size: 1.1rem;
            width: 600px;
        "
    >
        <div style="color: white; padding: 15px">
            <div>
                <div style="display: flex; padding: 10px">
                    <img
                        style="margin-left: auto"
                        width="100px"
                        src="https://i.imgur.com/e5aVRaG.png"
                    />
                    <h1 style="text-align: center; margin-right: auto">
                        Reg<span style="color: yellow">iTech</span>
                    </h1>
                </div>
            </div>

            <h1 style="font-size: 1.5rem">Good day {{$fullname}}!</h1>
            <p>Click the link below to reset your password:</p>
            <div style="display: flex; justify-content: center">
                <a href="{{$link}}" style="color: yellow">Reset Password</a>
            </div>
            <p>
                If you did not request a password reset, please ignore this
                email.
            </p>
        </div>
    </body>
</html>
