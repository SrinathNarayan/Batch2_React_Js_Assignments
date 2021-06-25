class StaticClass{
    static find(Str)
    {
        var str1="check whether an object belongs";
        var n = str1.search(Str);
        console.log("position : "+n);
    }
}

StaticClass.find("be");