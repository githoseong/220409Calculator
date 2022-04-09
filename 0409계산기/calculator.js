'use strict'
        function calculator1() {
            let run1 = parseInt(document.getElementById("run1").value);
            document.getElementById("rs").value +=run1;
        }
        function calculator2() {
            let run2 = parseInt(document.getElementById("run2").value);
            document.getElementById("rs").value +=run2;
        }
        function calculator3() {
            let run3 = parseInt(document.getElementById("run3").value);
            document.getElementById("rs").value +=run3;
        }
        function calculator4() {
            let run4 = parseInt(document.getElementById("run4").value);
            document.getElementById("rs").value +=run4;
        }
        function calculator5() {
            let run5 = parseInt(document.getElementById("run5").value);
            document.getElementById("rs").value +=run5;
        }
        function calculator6() {
            let run6 = parseInt(document.getElementById("run6").value);
            document.getElementById("rs").value +=run6;
        }
        function calculator7() {
            let run7 = parseInt(document.getElementById("run7").value);
            document.getElementById("rs").value +=run7;
        }
        function calculator8() {
            let run8 = parseInt(document.getElementById("run8").value);
            document.getElementById("rs").value +=run8;
        }
        function calculator9() {
            let run9 = parseInt(document.getElementById("run9").value);
            document.getElementById("rs").value +=run9;
        }
        function calculator0() {
            let run0 = parseInt(document.getElementById("run0").value);
            document.getElementById("rs").value +=run0;
        }
        function calculatorclear() {
            let clear = document.getElementById("clear").value;
            document.getElementById("rs").value ="";
        }
        function calculatorplus() {
            let plus = document.getElementById("plus").value;
            document.getElementById("rs").value +=plus;
        }
        function calculatorminus() {
            let minus = document.getElementById("minus").value;
            document.getElementById("rs").value +=minus;
        }
        function calculatormul() {
            let mul = document.getElementById("mul").value;
            document.getElementById("rs").value +=mul;
        }
        function calculatordiv() {
            let div = document.getElementById("div").value;
            document.getElementById("rs").value +=div;
        }
        function calculatorrs() {
            const regex1 = /\+/g;
            const regex2 = /\-/g;
            const regex3 = /[x]/g;
            const regex4 = /\//g;
            let output1 = document.getElementById("rs").value;
            let aa1 = output1.substring(output1.indexOf("+")+1);
            let bb1 = output1.substring(0,output1.indexOf("+"));
            let aa2 = output1.substring(output1.indexOf("-")+1);
            let bb2 = output1.substring(0,output1.indexOf("-"));
            let aa3 = output1.substring(output1.indexOf("x")+1);
            let bb3 = output1.substring(0,output1.indexOf("x"));
            let aa4 = output1.substring(output1.indexOf("/")+1);
            let bb4 = output1.substring(0,output1.indexOf("/"));
            if(regex1.test(output1)) {
                document.getElementById("rs").value = (parseInt(bb1) + parseInt(aa1));
            }
            else if(regex2.test(output1)) {
                document.getElementById("rs").value = (parseInt(bb2) - parseInt(aa2));
            }
            else if(regex3.test(output1)) {
                document.getElementById("rs").value = (parseInt(bb3) * parseInt(aa3));
            }
            else if(regex4.test(output1)) {
                document.getElementById("rs").value = (parseInt(bb4) / parseInt(aa4));
            }
            // const regex2 = /\-/g;
            // let output = document.getElementById("rs").value;
            // let aa = output.substring(output.indexOf("-")+1);
            // let bb = output.substring(0,output.indexOf("-"));
            // let result;
            // if(regex2.test(output)) {
            //     result =  parseInt(aa) - parseInt(bb);
            // }
            // document.getElementById("rs").value = result*(-1);

            // const regex3 = /\x/g;
            // let output3 = document.getElementById("rs").value;
            // let aa3 = output3.substring(output3.indexOf("x")+1);
            // let bb3 = output3.substring(0,output3.indexOf("x"));
            // let result3;
            // if(regex3.test(output3)) {
            //     result3 = parseInt(aa3) * parseInt(bb3);
            // }
            // document.getElementById("rs").value = result3;
            
            // const regex4 = /\//g;
            // output = document.getElementById("rs").value;
            // aa = output.substring(output.indexOf("/")+1);
            // bb = output.substring(0,output.indexOf("/"));
            // result;
            // if(regex4.test(output)) {
            //     document.getElementById("rs").value = parseInt(aa) / parseInt(bb);
            // }

        }
        function big() {
            document.getElementById("rs").style.width="600px";
            document.getElementById("rs").style.height="200px";
            document.getElementById("rs").style.fontSize="150px";
        }
        function small() {
            document.getElementById("rs").style.width="480px";
            document.getElementById("rs").style.height="90px";
            document.getElementById("rs").style.fontSize="70px";
        }