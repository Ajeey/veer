<script>
    $(function(){


        $("#typed").typed({
            strings: ["Hi there.", "Welcome to my Page.", "My name is"],
            typeSpeed: 50,
            backDelay: 1650,
            loop: false,
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }
    function foo(){ console.log("Callback"); }

    </script>