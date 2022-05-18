function parallax()
{
    var scenes = document.getElementsByClassName('scene');

    for (var scene of scenes)
    {
        var parallaxInstance = new Parallax(scene);
    }
}