document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
    var num=Math.floor((Math.random()*10)+1);
    document.querySelector("button").classList.add("invisible");
    document.querySelector(".name h2").innerHTML="<h2>Today's Word of God for you is,</h2>";
    switch(num){
        case 1:
            document.querySelector(".verse").innerHTML="<p><strong><em>Jeremiah 17:7-8</strong><br>But blessed is the one who trusts in the Lord,whose confidence is in him. They will be like a tree planted by the water that sends out its roots by the stream. It does not fear when heat comes; its leaves are always green. It has no worries in a year of drought and never fails to bear fruit.</em></p>";
            break;
        case 2:
            document.querySelector(".verse").innerHTML="<p><strong><em>Numbers 6:24-26</strong><br>The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.</em></p>";
            break;
        case 3:
            document.querySelector(".verse").innerHTML="<p><strong><em>Psalm 20:4</strong><br>May he give you the desire of your heart and make all your plans succeed.</em></p>";
            break;
        case 4:
            document.querySelector(".verse").innerHTML="<p><strong><em>Jeremiah 29:11</strong><br>For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.</em></p>";
            break;
        case 5:
            document.querySelector(".verse").innerHTML="<p><strong><em>Philippians 4:19</strong><br>And my God will meet all your needs according to the riches of his glory in Christ Jesus.</em></p>";
            break;
        case 6:
            document.querySelector(".verse").innerHTML="<p><strong><em>Exodus 23:25</strong><br>Worship the Lord your God, and his blessing will be on your food and water. I will take away sickness from among you.</em></p>";
            break;
        case 7:
            document.querySelector(".verse").innerHTML="<p><strong><em>Proverbs 16:3</strong><br>Commit to the Lord whatever you do, and he will establish your plans.</em></p>";
            break;
        case 8:
            document.querySelector(".verse").innerHTML="<p><strong><em>Psalm 34:8</strong><br>Taste and see that the Lord is good; blessed is the one who takes refuge in him.</em></p>";
            break;
        case 9:
            document.querySelector(".verse").innerHTML="<p><strong><em>Deuteronomy 30:16</strong><br>For I command you today to love the Lord your God, to walk in obedience to him, and to keep his commands, decrees and laws; then you will live and increase, and the Lord your God will bless you in the land you are entering to possess.</em></p>";
            break;
        case 10:
            document.querySelector(".verse").innerHTML="<p><strong><em>Matthew 5:6</strong><br>Blessed are those who hunger and thirst for righteousness, for they will be filled.</em></p>";
            break;
    }
}